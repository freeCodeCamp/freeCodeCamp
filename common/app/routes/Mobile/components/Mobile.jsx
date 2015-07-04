import React, { PropTypes } from 'react';

export default React.createClass({
  displayName: 'Mobile',
  propTypes: {
    id: PropTypes.string
  },

  render() {
    const {
      id
    } = this.props;

    return (
      <h2>Hello { id }</h2>
    );
  }
});
