import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Photo } from '../photo';
import { PhotoService }  from '../photo.service';
//import { PhotosComponent }  from '../photos/photos.component';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {
  photo: Photo;

  getPhoto(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.photoService.getPhotos()
      .then(data => this.photo = data[ id ]);

    //this.showButtons(id);
  }

  goBack(): void {
    this.location.back();
  }

  /*
  showButtons(id: number): void {
      if( id == 0 ){
          document.getElementById("prevBtn").style.display = "none";
          document.getElementById("nextBtn").style.display = "block";
      } else if( id == 19 ){ //this.photosComponent.photos.length - 1
          document.getElementById("nextBtn").style.display = "none";
          document.getElementById("prevBtn").style.display = "block";
      } else {
          document.getElementById("prevBtn").style.display = "block";
          document.getElementById("nextBtn").style.display = "block";
      }
  }
  */

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private location: Location
    //, private photosComponent: PhotosComponent
  ) {}

  ngOnInit(): void {
    this.getPhoto();
  }
}
