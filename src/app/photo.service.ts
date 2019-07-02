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

  //TO DO: Define your own function to render photo gallery
  jsonFlickrApi(data) {
    console.log("jsonFlickrApi data is: ", data);
  }

  /*
   * Have to use http.jsonp() to call to Flickr 3rd Party API to avoid CORS (cross origin resource sharing) issue
   * */
  getPhotos(): Observable<any> { //Observable<Photo[]>
    // Send the message _after_ fetching the heroes
    this.messageService.add('PhotoService: fetched photos');

    // Get photos from the server
    return this.http.jsonp(this.photosUrl, this.callbackParamKey); //this.http.get<Photo[]>(this.photosUrl);
  }

  /*
  getPhoto(id: number): Observable<Photo> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(photo => photo.id === photo));
  }
  */
}
