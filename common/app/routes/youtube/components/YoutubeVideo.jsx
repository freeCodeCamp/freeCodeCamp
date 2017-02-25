import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PureComponent from 'react-pure-render/component';
import { Col } from 'react-bootstrap';
import YouTube from 'react-youtube';

import { updateTitle } from '../../../redux/actions';

import * as styles from '../styles';

const mapActionsToDispatch = {
  updateTitle
};
const mapStateToProps = createSelector(
  (_, props) => props.params.playlist,
  (_, props) => props.params.video,
  state => state.entities.youtube,
  (selectedPlaylist, selectedVideo, youtube = {}) => {
    const playlist = youtube[selectedPlaylist];
    return {
    playlist,
    video: playlist.videos[selectedVideo]
    };
  }
);

const propTypes = {
  playlist: PropTypes.object,
  updateTitle: PropTypes.func.isRequired,
  video: PropTypes.object
};

class YoutubeVideo extends PureComponent {
  componentWillMount() {
    const { updateTitle, playlist, video } = this.props;
    const title = playlist.title && video.title ?
      `${playlist.title} - ${video.title}` :
      'freeCodeCamp on YouTube';
    updateTitle(title);
  }
  componentWillReceiveProps(nextProps) {
    const { updateTitle, playlist, video } = nextProps;
    if (this.props.video !== video) {
      updateTitle(`${playlist.title} - ${video.title}`);
    }
  }

  render() {
      const {
        playlist: { title: playlistTitle },
        video: {
          description,
          title: videoTitle,
          videoId
        }
      } = this.props;
      const {
        descriptionContainer,
        descriptionText
      } = styles;
      const options = {
        width: '100%',
        playerVars: { autoplay: 1 }
      };
    return (
      <div >
        <Col md={8} mdOffset={2} xs={12}>
          <h2>
            { `${playlistTitle} - ${videoTitle}` }
          </h2>
          <div>
            <YouTube
              opts={ options }
              videoId={ videoId }
            />
          </div>
          <div style={ descriptionContainer }>
            <p style={ descriptionText }>
              { description }
            </p>
          </div>
        </Col>
      </div>
    );
  }
}

YoutubeVideo.displayName = 'YoutubeVideo';
YoutubeVideo.propTypes = propTypes;

export default connect(mapStateToProps, mapActionsToDispatch)(YoutubeVideo);
