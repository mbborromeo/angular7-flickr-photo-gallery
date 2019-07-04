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
  @Input() photo: Photo;

  onClose(): void {
    document.getElementById("display").style.opacity = "0";

    //clear image
    document.getElementById("imgFull").getElementsByTagName("img")[0].src = "";
    //document.getElementById("imgFull").style.opacity = "0";
    //end clear image

    document.getElementById("display").style.display = "none";
  }

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private location: Location
  ) {}

  ngOnInit() {
  }

}
