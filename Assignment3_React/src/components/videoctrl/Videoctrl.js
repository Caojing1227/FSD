import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Videoctrl extends Component {
    render() {
        return (
            <div>
               <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-2">
            <button type="button" id="replay-button" className="btn btn-dark">
            <FontAwesomeIcon icon="reply"/>
            </button>
          </div>
          <div className="col col-lg-2">
            <button type="button" className="btn btn-dark" >
            <FontAwesomeIcon icon="play"/>
                </button>
          </div>
          <div className="col col-lg-2">
            <button type="button" className="btn btn-dark">
            <FontAwesomeIcon icon="stop"/>
                </button>
          </div>
          <div className="col col-lg-1">
            <button type="button" id="volume-inc-button" className="btn btn-dark" >
            <FontAwesomeIcon icon="plus"/> 
            </button>
          </div>
          <div className="col col-lg-1">
            <button type="button" id="volume-dec-button" className="btn btn-dark" >
            <FontAwesomeIcon icon="minus"/> 
            </button>
          </div>
          <div className="col col-lg-2">
            <button type="button" className="btn btn-dark" >
            <FontAwesomeIcon icon="volume-up"/> 
            </button>
          </div>
          <div className="col col-lg-1">
            <button type="button" className="btn btn-dark">
            <FontAwesomeIcon icon="thumbs-up"/>
            </button>
          </div>
          <div className="col col-lg-1">
            <button type="button" className="btn btn-dark">
            <FontAwesomeIcon icon="thumbs-down"/>
                </button>
          </div>
        </div>
      </div>
            </div>
        )
    }
}

export default Videoctrl
