import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Photo } from './photo';
import { PHOTOS } from './mock-photos';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private messageService: MessageService) { }

  /*
  getPhotos(): Photo[] {
    return PHOTOS;
  }
  */

  getPhotos(): Observable<Photo[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('PhotoService: fetched photos');
    return of(PHOTOS);
  }
}
