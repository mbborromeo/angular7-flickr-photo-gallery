import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../photo';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {
  @Input() photo: Photo;

  onClose(): void {
    document.getElementById("display").style.opacity = "0";
    document.getElementById("display").style.display = "none";
  }

  constructor() { }

  ngOnInit() {
  }

}
