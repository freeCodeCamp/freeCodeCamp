import React, { PropTypes } from 'react';
import stampit from 'react-stampit';
import Vimeo from 'react-vimeo';
import debugFactory from 'debug';

const debug = debugFactory('freecc:hikes');

export default stampit(React, {
  displayName: 'Lecture',

  propTypes: {
    params: PropTypes.object
  },

  onError: debug,

  render() {
    const {
      id
    } = this.props.params;

    return (
      <Vimeo
        onError={ this.onError }
        videoId={ id } />
    );
  }
});
