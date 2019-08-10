import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Photo } from './photo';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

interface FlickrResponse {
  readonly items: Photo[]; //ReadonlyArray<Photo>
}

@Injectable({
  providedIn: 'root'
})
export class FlickrphotoService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** Log a PhotoService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`PhotoService: ${message}`);
  }

  private photosUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json'; //&jsoncallback=jsonFlickrApi
  private callbackParamKey = 'jsoncallback'; //Angular will assign its own function ng_jsonp_callback_0 as the callback argument for API call in URL

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /**
   * Have to use http.jsonp() to call to Flickr 3rd Party API to avoid CORS (cross origin resource sharing) issue.
   * Returns a JSON object which has property items which includes an array of photos.
   */
  getPhotos(): Promise<any> {  //: Observable<ReadonlyArray<Photo>>
    console.log('Flickr get')
    // Send the message _after_ fetching the photos
    this.messageService.add('PhotoService: fetched photos');

    return this.http.jsonp<FlickrResponse>(this.photosUrl, this.callbackParamKey)
      .pipe(
        tap(_ => this.log('fetched photos')), //replaces this.messageService.add()
        map(({ items }) => items),
        catchError(this.handleError<Photo[]>('getPhotos', []))
      ).toPromise();

      /*
      .pipe(
        tap(_ => this.log('fetched photos')), //replaces this.messageService.add()
        map(({ items }) => items),
        shareReplay(1),
        first(),
        catchError(this.handleError<Photo[]>('getPhotos', []))
      );
      */
  }
}
