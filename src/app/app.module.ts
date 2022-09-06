import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Viewer3dComponent } from './viewer3d/viewer3d.component';

@NgModule({
  declarations: [
    AppComponent,
    Viewer3dComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
