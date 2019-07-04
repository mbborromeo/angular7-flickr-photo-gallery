import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Photo } from './photo';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`PhotoService: ${message}`);
  }

  private photosUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json'; //&jsoncallback=jsonFlickrApi
  private callbackParamKey = 'jsoncallback'; //Angular will assign its own function ng_jsonp_callback_0 as the callback argument for API call in URL

  /**
   * Have to use http.jsonp() to call to Flickr 3rd Party API to avoid CORS (cross origin resource sharing) issue.
   * Returns a JSON object which has property items which includes an array of photos.
   */
  getPhotos(): Observable<any> {
    // Send the message _after_ fetching the heroes
    //this.messageService.add('PhotoService: fetched photos');

    // Get photos from the server with error handling
    return this.http.jsonp(this.photosUrl, this.callbackParamKey)
      .pipe(
        tap(_ => this.log('fetched photos')), //replaces this.messageService.add()
        catchError(this.handleError<Photo[]>('getPhotos', []))
      );
  }

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

  /*
  getPhoto(id: number): Observable<Photo> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`PhotoService: fetched hero id=${id}`);
    return of(HEROES.find(photo => photo.id === photo));
  }
  */
}
