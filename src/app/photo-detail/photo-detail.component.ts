import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Photo } from '../photo';
import { PhotoService }  from '../photo.service';

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
      //.subscribe(data => this.photo = data.items[ id ]);
      .then(data => this.photo = data[ id ]);
  }

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPhoto();
  }
}
