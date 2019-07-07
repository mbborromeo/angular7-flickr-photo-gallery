import { Component } from '@angular/core';

/*
import { Observable } from 'rxjs';
import { PhotoService } from './photo.service';
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 7 Flickr photo gallery';

  /*
  private photosSnapshot = [];
  private photosObservable: Observable<any>;
  */

  constructor(){ //private photoService: PhotoService
      /*this.photosObservable = this.photoService.getPhotos();
      this.photosObservable.subscribe(data => this.photosSnapshot = data.items);
      */
  }
}
