import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  /*
  photo: Photo = {
    //id: 1,
    title: 'Numero Uno',
    author: 'Michael'
  };
  */

  photos: Photo[];

  selectedPhoto: Photo;

  onSelect(photo: Photo): void {
    this.selectedPhoto = photo;
  }

  getPhotos(): void {
    this.photoService.getPhotos()
      .subscribe(data => this.photos = data.items);
  }

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.getPhotos();
  }
}
