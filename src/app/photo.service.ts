import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Photo } from './photo';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

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
    this.messageService.add(`HeroService: ${message}`);
  }

  private photosUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=jsonFlickrApi';
  private callbackParamKey = 'jsoncallback';//JSONP_CALLBACK

  getPhotos(): Observable<any> { //Observable<Photo[]>
    // send the message _after_ fetching the heroes
    this.messageService.add('PhotoService: fetched photos');

    // GET photos from the server
    //return this.http.get<Photo[]>(this.photosUrl);
    return this.http.jsonp(this.photosUrl, this.callbackParamKey);
  }

  //TO DO: Define your own function to render photo gallery
  jsonFlickrFeed(data) {
    console.log("jsonFlickrFeed data is: ", data);
  }
}
