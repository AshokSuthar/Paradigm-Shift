import { Component, OnInit, Input, ViewChild } from '@angular/core';

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
      this.sectionClass = 'intro';
      this.headerElement = `<h1>Paradigm Shift</h1>
      <p>A free responsive site template designed by <a href="https://twitter.com/ajlkn">@ajlkn</a> / <a href="https://html5up.net">HTML5 UP</a></p>
      <ul class="actions">
        <li><a href="#first" class="arrow scrolly"><span class="label">Next</span></a></li>
      </ul>`;
      this.contentElement = `<span class="image fill" data-position="center"><img src="images/pic01.jpg" alt="" /></span>`;
    }

    if (this.currentSection === 'first') {
      this.sectionId = 'first';
      this.headerElement = `<h2>Magna sed nullam nisl adipiscing</h2>`;
      this.contentElement = `<p>
      <strong>Lorem ipsum dolor</strong> sit amet consectetur adipiscing elit.
      Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
      torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
      libero eu nibh porttitor amet fermentum. Nullam venenatis erat id vehicula
      ultrices sed ultricies condimentum. Magna sed etiam consequat, et lorem
      adipiscing sed nulla. Volutpat nisl et tempus et dolor libero, feugiat
      magna tempus, sed et lorem adipiscing.
    </p>
    <span class="image main"><img src="assets/images/pic02.jpg" alt="" /></span>`;
    }

    if (this.currentSection === 'second') {
      this.headerElement = `<h2>Feugiat consequat tempus ultrices</h2>`;
      this.contentElement = `<p>
      <strong>Etiam tristique libero</strong> eu nibh porttitor amet fermentum.
      Nullam venenatis erat id vehicula ultrices sed ultricies condimentum.
    </p>
    <ul class="feature-icons">
      <li class="icon solid fa-laptop">Consequat tempus</li>
      <li class="icon solid fa-bolt">Etiam adipiscing</li>
      <li class="icon solid fa-signal">Libero nullam</li>
      <li class="icon solid fa-cog">Blandit condimentum</li>
      <li class="icon solid fa-map-marker-alt">Lorem ipsum dolor</li>
      <li class="icon solid fa-code">Nibh amet venenatis</li>
    </ul>
    <p>
      Vehicula ultrices sed ultricies condimentum. Magna sed etiam consequat, et
      lorem adipiscing sed nulla. Volutpat nisl et tempus et dolor libero,
      feugiat magna tempus, sed et lorem adipiscing.
    </p>`;
    }

    if (this.currentSection === 'third') {
      this.headerElement = `<h2>Ultrices erat magna sed condimentum</h2>`;
      this.contentElement = `<p>
        <strong>Integer mollis egestas</strong> nam maximus erat id euismod
        egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.
      </p><p>hadhakja</p><ng-template adHost></ng-template>`;
      this.hasGallery = true;
    }
  }
}
