import React, { PropTypes } from 'react';

const win = typeof window !== 'undefined' ? window : {};

function goToServer(path) {
  win.location = '/' + path;
}

export default React.createClass({
  displayName: 'NotFound',
  propTypes: {
    params: PropTypes.object
  },
  componentWillMount() {
    goToServer(this.props.params.splat);
  },
  componentDidMount() {
  },
  render() {
    return <span></span>;
  }
});
