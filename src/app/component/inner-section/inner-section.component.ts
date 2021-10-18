import { Component, OnInit, Input } from '@angular/core';

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

  firstGalleryData = [
    {
      imgHref: 'assets/images/gallery/fulls/01.jpg',
      imgSrc: 'assets/images/gallery/thumbs/01.jpg',
      imgAlt: '',
      imgClass: 'landscape',
    },
    {
      imgHref: 'assets/images/gallery/fulls/02.jpg',
      imgSrc: 'assets/images/gallery/thumbs/02.jpg',
      imgAlt: '',
      imgClass: '',
    },
    {
      imgHref: 'assets/images/gallery/fulls/03.jpg',
      imgSrc: 'assets/images/gallery/thumbs/03.jpg',
      imgAlt: '',
      imgClass: '',
    },
    {
      imgHref: 'assets/images/gallery/fulls/04.jpg',
      imgSrc: 'assets/images/gallery/thumbs/04.jpg',
      imgAlt: '',
      imgClass: 'landscape',
    },
  ];
  secondGalleryData = [
    {
      imgHref: 'assets/images/gallery/fulls/05.jpg',
      imgSrc: 'assets/images/gallery/thumbs/05.jpg',
      imgAlt: '',
      imgClass: 'landscape',
    },
    {
      imgHref: 'assets/images/gallery/fulls/06.jpg',
      imgSrc: 'assets/images/gallery/thumbs/06.jpg',
      imgAlt: '',
      imgClass: '',
    },
    {
      imgHref: 'assets/images/gallery/fulls/07.jpg',
      imgSrc: 'assets/images/gallery/thumbs/07.jpg',
      imgAlt: '',
      imgClass: '',
    },
  ];

  thirdGalleryData = [
    {
      imgHref: 'assets/images/gallery/fulls/08.jpg',
      imgSrc: 'assets/images/gallery/thumbs/08.jpg',
      imgAlt: '',
      imgClass: 'portrait',
    },
    {
      imgHref: 'assets/images/gallery/fulls/09.jpg',
      imgSrc: 'assets/images/gallery/thumbs/09.jpg',
      imgAlt: '',
      imgClass: 'portrait',
    },
    {
      imgHref: 'assets/images/gallery/fulls/10.jpg',
      imgSrc: 'assets/images/gallery/thumbs/10.jpg',
      imgAlt: '',
      imgClass: 'landscape',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.currentSection = this.sectionName;
    this.setSectionData();
  }

  setSectionData() {
    if (this.currentSection === 'first') {
      console.log('Came to first inner section');

      this.headerElement = `<h3>Erat aliquam</h3>
      <p>
        Vehicula ultrices dolor amet ultricies et condimentum. Magna sed
        etiam consequat, et lorem adipiscing sed dolor sit amet,
        consectetur amet do eiusmod tempor incididunt ipsum suspendisse
        ultrices gravida.
      </p>`;

      this.images = this.firstGalleryData;
    }

    if (this.currentSection === 'second') {
      console.log('Came to second inner section');
      this.headerElement = `<h3>Nisl consequat</h3>
      <p>
        Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
        aliquam sed facilisis ante interdum congue. Integer mollis, nisl
        amet convallis, porttitor magna ullamcorper, amet mauris. Ut
        magna finibus nisi nec lacinia ipsum maximus.
      </p>`;

      this.images = this.secondGalleryData;
    }

    if (this.currentSection === 'third') {
      console.log('Came to third inner section');
      this.headerElement = `<h3>Lorem gravida</h3>
      <p>
        Proin aliquam facilisis ante interdum. Sed nulla amet lorem
        feugiat tempus aenean ornare velit lacus, ac varius sed enim
        lorem ullamcorper dolore. ac varius enim lorem ullamcorper
        dolore. Proin aliquam facilisis.
      </p>`;
      this.images = this.thirdGalleryData;
    }
  }
}
