import React, { PropTypes } from 'react';
import stampit from 'react-stampit';
// import debugFactory from 'debug';

export default stampit(React, {
  displayName: 'Question',

  propTypes: {
    params: PropTypes.object
  },

  render() {
    return (
      <div>
        <h2>Question time</h2>
      </div>
    );
  }
});
