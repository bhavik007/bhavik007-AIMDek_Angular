import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos = [];
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/photos').subscribe(
      data => {
        this.photos = data;
      },
      error => {
          console.log(error);
      });
  }

}
