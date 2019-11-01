import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export class Videolist extends Component {
  render() {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th scope="col">
              <button type="button" className="btn btn-dark">
                <FontAwesomeIcon icon="plus" />
              </button>
            </th>
            <th scope="col">Title</th>
            <th scope="col">URL</th>
            <th scope="col">Action</th>
            <th scope="col">Like</th>
            <th scope="col">Unlike</th>
          </tr>
        </thead>
        <tbody>
          {this.props.videos.map(video => (
            <tr key={video.id}>
              <th scope="row" className="col-sm-1">
                {video.id}
              </th>
              <td className="col-sm-3">{video.title}</td>
              <td className="col-sm-4">{video.url}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-dark"
                  data-toggle="modal"
                  data-target="#updateVideoModal"
                >
                  <FontAwesomeIcon icon="edit" />
                </button>
                |
                <button type="button" className="btn btn-dark">
                  <FontAwesomeIcon icon="trash" />
                </button>
                |
                <button type="button" className="btn btn-dark">
                  {video.approved ? (
                    <FontAwesomeIcon icon="play" />
                  ) : (
                    <FontAwesomeIcon icon="check" />
                  )}
                </button>
              </td>
              <td>
                <span className="badge badge-success badge-pill">
                  <FontAwesomeIcon icon="thumbs-up" />
                  {video.likes}
                </span>
              </td>
              <td>
                <span className="badge badge-primary badge-pill">
                  <FontAwesomeIcon icon="thumbs-down" />
                  {video.unlike}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

Videolist.propTypes = {
  videos: PropTypes.array.isRequired
};

export default Videolist;
