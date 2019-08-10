import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: Photo[];

  getPhotos(): void {
    this.photoService.getPhotos()
      .then(data => this.photos = data);
  }
  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.getPhotos();
  }
}
