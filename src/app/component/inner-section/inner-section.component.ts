import { Component, OnInit, Input } from '@angular/core';
import { default as webData } from '../../data.json';

@Component({
  selector: 'app-inner-section',
  templateUrl: './inner-section.component.html',
  styleUrls: ['./inner-section.component.scss'],
})
export class InnerSectionComponent implements OnInit {
  @Input() sectionName: string = '';

  currentSection: any = '';
  headerElement: any = '';
  contentElement: any = '';
  images: any = {};

  constructor() {}

  ngOnInit(): void {
    this.currentSection = this.sectionName;
    this.setSectionData();
  }

  setSectionData() {
    if (this.currentSection === 'first') {
      this.headerElement = webData[0].innerSectionData.first.headerElement;
      this.images = webData[0].innerSectionData.first.galleryData;
    }

    if (this.currentSection === 'second') {
      this.headerElement = webData[0].innerSectionData.second.headerElement;
      this.images = webData[0].innerSectionData.second.galleryData;
    }

    if (this.currentSection === 'third') {
      this.headerElement = webData[0].innerSectionData.third.headerElement;
      this.images = webData[0].innerSectionData.third.galleryData;
    }
  }
}
