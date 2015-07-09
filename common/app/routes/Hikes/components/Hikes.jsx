import React, { PropTypes } from 'react';
import stampit from 'react-stampit';
import { Panel, Row } from 'react-bootstrap';
// import debugFactory from 'debug';

import HikesMap from './Map.jsx';

// const debug = debugFactory('freecc:hikes');

export default stampit(React, {
  displayName: 'Hikes',

  propTypes: {
    children: PropTypes.element
  },

  renderMap() {
    return (
      <HikesMap />
    );
  },

  render() {
    return (
      <div>
        <Panel>
          <h1>Hikes!</h1>
        </Panel>
        <Row>
          { this.props.children || this.renderMap() }
        </Row>
      </div>
    );
  }
});
