import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

const followLink = 'https://twitter.com/intent/follow?' +
  'ref_src=twsrc%5Etfw&amp;region=follow_link&amp;screen_name=CamperJobs&' +
  'amp;tw_p=followbutton';

function commify(count) {
  return Number(count).toLocaleString('en');
}

export default React.createClass({

  displayName: 'FollowButton',

  propTypes: {
    count: PropTypes.number
  },

  render() {
    const { count } = this.props;
    return (
      <Button
        block={ true }
        bsSize='large'
        bsStyle='primary'
        href={ followLink }
        target='__blank'>
        Join { commify(count) } followers who see our job postings on Twitter.
      </Button>
    );
  }
});
