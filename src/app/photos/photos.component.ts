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
    //set the selected photo for photo-detail component to use
    this.selectedPhoto = p;

    //show modal
    document.getElementById("display").style.display = "block";
    document.getElementById("display").style.opacity = "1";

    //Improve: staggered load
    document.getElementById("imgFull").style.opacity = "1";
    document.getElementById("heading").style.display = "block";
    document.getElementById("heading").style.opacity = "1";

    /*
    //Wait until image has loaded before changing title and updating buttons
    document.getElementById("imgFull").getElementsByTagName("img")[0].addEventListener(
        "load",
        function(){
            //show image and heading inside modal
            document.getElementById("heading").style.opacity = "1";
            document.getElementById("heading").style.display = "block";
            document.getElementById("imgFull").style.opacity = "1";
        }
    );
    */

    /*
    // event is added for the parent of #submit-button
    document.querySelector("#imgFull").addEventListener('load', function(ev) {
      if(ev.target.tagName.toLowerCase() == 'img') {
        console.log('img has loaded');
        document.getElementById("heading").style.opacity = "1";
        document.getElementById("heading").style.display = "block";
        document.getElementById("imgFull").style.opacity = "1";
      }
      else {
        console.log("tagName is: " + tagName);
      }
    });
    */
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
