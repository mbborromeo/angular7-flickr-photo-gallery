import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {FlickrphotoService} from './flickrphoto.service';
import {Photo} from "./photo";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private photos: Promise<any>;

  constructor(
    private flickr: FlickrphotoService
  ) { }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Promise<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      //return of(result as T);
      //return result as T;
      return of(result as T).toPromise();
    };
  }

  /**
   * Have to use http.jsonp() to call to Flickr 3rd Party API to avoid CORS (cross origin resource sharing) issue.
   * Returns a JSON object which has property items which includes an array of photos.
   */
  getPhotos(): Promise<any> {
    if (this.photos === undefined) {
      console.log('Photo get')
      this.photos = this.flickr.getPhotos();
      console.log(this.photos);
    }
    return this.photos;
  }
}
