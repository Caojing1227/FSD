import React, { Component } from 'react'

export class Videoview extends Component {
    render() {
        return (
            <div id='video-player'>
            <video id="mediaVideo"><source src='assets/video/example2.mp4' type='video/mp4'/></video>
            </div>
        );
    }
}

export default Videoview
