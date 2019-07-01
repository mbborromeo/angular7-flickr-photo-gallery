import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../photo';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {
  @Input() photo: Photo;

  constructor() { }

  ngOnInit() {
  }

}
