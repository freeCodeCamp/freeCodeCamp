import React, { PropTypes } from 'react';
import { Row } from 'react-bootstrap';
import Video from 'react-video';

export default React.createClass({
  displayName: 'Hikes',
  propTypes: {
    id: PropTypes.string
  },

  render() {
    const {
      id
    } = this.props.params;

    return (
      <Video
        from='vimeo'
        videoId={ 132543959 } />
    );
  }
});
