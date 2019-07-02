import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Photo } from './photo';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders, HttpClientJsonpModule  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(
    private http: HttpClient, //HttpClientJsonpModule
    private messageService: MessageService
  ) { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /**
   * :base/:collectionName = the address of the resource on the server, or URL to web api.
   * Here base is the resource to which requests are made, and collectionName is the heroes data object in the in-memory-data-service.ts.
   * api/photos if using InMemoryDataService
   */
  //private photosUrl: string = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=jsonFlickrApi';
  private photosUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';
  private photosUrlCallback = 'jsonFlickrApi';

  //getPhotos(): Observable<Photo[]> {
  getPhotos(): Observable<any> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('PhotoService: fetched photos');
    //return of(PHOTOS);
    // GET heroes from the server
    //return this.http.get<Photo[]>(this.photosUrl);
    return this.http.jsonp(this.photosUrl, this.photosUrlCallback); //optional second arg is callbackParam: string
  }
}
