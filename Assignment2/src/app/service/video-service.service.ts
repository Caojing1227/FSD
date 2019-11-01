import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {

  constructor(private http: HttpClient) { }

  vidoedata = 'assets/video.json';

  getVideoData() {
    return this.http.get(this.vidoedata);
  }

}
