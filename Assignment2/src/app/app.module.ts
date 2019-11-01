import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStop, faReply, faPlay, faPlus, faMinus, faVolumeUp, faThumbsUp, faThumbsDown, faPause, faVolumeDown, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { VideoViewComponent } from './video/video-view/video-view.component';
import { VideoControlComponent } from './video/video-control/video-control.component';
import { VideoListComponent } from './video/video-list/video-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    VideoViewComponent,
    VideoControlComponent,
    VideoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faStop, faReply, faPlay, faPause, faPlus, faMinus, faVolumeUp, faVolumeMute, faThumbsUp, faThumbsDown);
  }
}
