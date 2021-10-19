import { Component, OnInit, Input } from '@angular/core';
import { default as webData } from '../../data.json';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  @Input() sectionName: string = '';

  sectionClass: any = '';
  sectionId: any = '';
  currentSection: any = '';
  headerElement: any = '';
  contentElement: any = '';
  hasGallery: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.currentSection = this.sectionName;
    this.setSectionData();
  }

  setSectionData() {
    if (this.currentSection === 'intro') {
      this.sectionClass = webData[0].sectionData.intro.sectionClass;
      this.sectionId = webData[0].sectionData.intro.sectionId;
      this.headerElement = webData[0].sectionData.intro.headerElement;
      this.contentElement = webData[0].sectionData.intro.contentElement;
    }

    if (this.currentSection === 'first') {
      this.sectionClass = webData[0].sectionData.first.sectionClass;
      this.sectionId = webData[0].sectionData.first.sectionId;
      this.headerElement = webData[0].sectionData.first.headerElement;
      this.contentElement = webData[0].sectionData.first.contentElement;
    }

    if (this.currentSection === 'second') {
      this.sectionClass = webData[0].sectionData.second.sectionClass;
      this.sectionId = webData[0].sectionData.second.sectionId;
      this.headerElement = webData[0].sectionData.second.headerElement;
      this.contentElement = webData[0].sectionData.second.contentElement;
    }

    if (this.currentSection === 'third') {
      this.sectionClass = webData[0].sectionData.third.sectionClass;
      this.sectionId = webData[0].sectionData.third.sectionId;
      this.headerElement = webData[0].sectionData.third.headerElement;
      this.contentElement = webData[0].sectionData.third.contentElement;
      this.hasGallery = true;
    }
  }
}
