import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @Input() imgData: any;

  currentImgData: any;

  constructor() {}

  ngOnInit(): void {
    this.currentImgData = this.imgData;
    console.log('logging image data', this.currentImgData);
  }
}
