import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { VideoServiceService } from '../service/video-service.service';
import { VideoViewComponent } from './video-view/video-view.component';
import { VideoControlComponent } from './video-control/video-control.component';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit, AfterViewInit {

  @ViewChild(VideoViewComponent, {static: false}) childVideoView: VideoViewComponent;
  @ViewChild(VideoControlComponent, {static: false}) childVideoCtrl: VideoControlComponent;
  videos: [];

  constructor(private videoservice: VideoServiceService) { }

  ngOnInit() {
    this.getData();
  }

  ngAfterViewInit() {
    // child is set
    // Hide the browser's default controls
    this.childVideoView.videoPlayer.nativeElement.controls = false;
    // Add a listener for the timeupdate event so we can update the progress bar
    this.childVideoView.videoPlayer.nativeElement.addEventListener('timeupdate', () => this.childVideoCtrl.updateProgressBar(), false);
    // Add a listener for the play and pause events so the buttons state can be updated
    this.childVideoView.videoPlayer.nativeElement.addEventListener('play', () => console.log('video play'), false);
    this.childVideoView.videoPlayer.nativeElement.addEventListener('pause', () => console.log('video pause'), false);
    // need to work on this one more...how to know it's muted?
    this.childVideoView.videoPlayer.nativeElement.addEventListener('volumechange', () => console.log('video volumenchanged'), false);
    this.childVideoView.videoPlayer.nativeElement.addEventListener('ended', () => console.log('video ended'), false);
  }

  getData() {
    this.videoservice.getVideoData().subscribe(data => {
      this.videos = data['youtube'];
    });
  }

}
