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
<<<<<<< HEAD
=======
      //.subscribe(data => this.photos = data.items);
>>>>>>> 2991001ba9f86f241af6c75ac96ef3c910e87532
      .then(data => this.photos = data);
  }
  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.getPhotos();
  }
}
