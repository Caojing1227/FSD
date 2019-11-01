import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { VideoViewComponent } from '../video-view/video-view.component';
@Component({
  selector: 'app-video-control',
  templateUrl: './video-control.component.html',
  styleUrls: ['./video-control.component.css']
})
export class VideoControlComponent implements OnInit {
  @Input() videoView: VideoViewComponent;

  play: boolean;
  mute: boolean;
  constructor() { }

  ngOnInit() {
    this.play = false;
    this.mute = false;
  }

  togglePlayPause() {
    if (this.videoView.videoPlayer.nativeElement.paused || this.videoView.videoPlayer.nativeElement.ended) {
      this.videoView.videoPlayer.nativeElement.play();
      this.play = true;
    } else {
      this.videoView.videoPlayer.nativeElement.pause();
      this.play = false;
    }

  }
  // Stop the current media from playing, and return it to the start position
  stopPlayer() {
    this.videoView.videoPlayer.nativeElement.pause();
    this.videoView.videoPlayer.nativeElement.currentTime = 0;
    this.play = false;
  }

  // Toggles the media player's mute and unmute status
  toggleMute() {
    if (this.videoView.videoPlayer.nativeElement.muted) {
      // Unmute the media player
      this.videoView.videoPlayer.nativeElement.muted = false;
      this.mute = false;
    } else {
      // Mute the media player
      this.videoView.videoPlayer.nativeElement.muted = true;
      this.mute = true;
    }
  }

  changeVolume(direction) {}

  // Update the progress bar
  updateProgressBar() {
    // Work out how much of the media has played via the duration and currentTime parameters
    let percentage = Math.floor((100 / this.videoView.videoPlayer.nativeElement.duration) * this.videoView.videoPlayer.nativeElement.currentTime);
    this.videoView.progressBar.nativeElement.style.width = percentage + '%';
    this.videoView.progressBar.nativeElement.innerHTML = percentage + '% played';
  }

  // Resets the media player
  resetPlayer() {

    // Reset the progress bar to 0
    this.videoView.progressBar.nativeElement.value = 0;
    // Move the media back to the start
    this.videoView.videoPlayer.nativeElement.currentTime = 0;


  }

  // Replays the media currently loaded in the player
  replayMedia() {
    this.resetPlayer();
    this.videoView.videoPlayer.nativeElement.play();
    this.play = true;
  }



}
