import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SectionComponent } from './component/section/section.component';
import { InnerSectionComponent } from './component/inner-section/inner-section.component';
import { GalleryComponent } from './component/gallery/gallery.component';
@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    InnerSectionComponent,
    GalleryComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
