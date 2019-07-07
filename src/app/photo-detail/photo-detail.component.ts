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
  //@Input() photo: Photo;
  photo: Photo;

  getPhoto(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    /*
    this.photoService.getPhoto(id)
      .subscribe(photo => this.photo = photo);
    */

    //Working but gets index from latest subscribe, not what was on homepage.
    this.photoService.getPhotos()
      .subscribe(data => this.photo = data.items[ id ]);

    //this.photo = this.photoService.getPhoto( id );

    //this.photo = this.photoService.imagesAll[ id ];

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
