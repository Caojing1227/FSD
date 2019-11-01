import React, { Component } from 'react'
import axios from 'axios'
import { Videoview } from './videoview/Videoview'
import { Videoctrl } from './videoctrl/Videoctrl'
import { Videoadd } from './videoadd/Videoadd'
import { Videolist } from './videolist/Videolist'

export class Video extends Component {

    state = {
        videos: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/youtube')
        .then(res => this.setState({
            videos : res.data
        }))

    }

    render() {
        return (
            <div>
                <Videoview />
                <Videoctrl />
                <Videoadd />
                <Videolist videos={this.state.videos}/>
            </div>
        )
    }
}

export default Video
