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
  selectedPhoto: Photo;

  onSelect(p: Photo): void {
    this.selectedPhoto = p;
    //show modal
    document.getElementById("display").style.display = "block";
    document.getElementById("display").style.opacity = "1";
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
