import React, { PropTypes } from 'react';
import { Well, Row } from 'react-bootstrap';

export default React.createClass({
  displayName: 'NewJobCompleted',
  propTypes: {
  },
  render() {
    return (
      <div>
        <Row>
          <Well>
            Congrats!
          </Well>
        </Row>
      </div>
    );
  }
});
