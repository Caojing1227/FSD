import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit {

  @ViewChild('mediaVideo', {static: false}) videoPlayer: ElementRef;

  @ViewChild('progressBar', {static: false}) progressBar: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
