import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { PHOTOS } from '../mock-photos';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photo: Photo = {
    id: 1,
    title: 'Windstorm'
  };

  //photos = PHOTOS;
  photos: Photo[];

  selectedPhoto: Photo;

  onSelect(photo: Photo): void {
    this.selectedPhoto = photo;
  }

  getPhotos(): void {
    //this.photos = this.photoService.getPhotos();
    this.photoService.getPhotos()
      .subscribe(photos => this.photos = photos);
  }

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.getPhotos();
  }

}
