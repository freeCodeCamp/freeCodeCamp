import React, { PropTypes } from 'react';
import { contain } from 'thundercats-react';
import { Row } from 'react-bootstrap';

import { Nav } from './components/Nav';
import { Footer } from './components/Footer';

export default contain(
  {
    store: 'appStore',
    fetchAction: 'appActions.getUser',
    getPayload(props) {
      return {
        isPrimed: !!props.username
      };
    }
  },
  React.createClass({
    displayName: 'FreeCodeCamp',

    propTypes: {
      children: PropTypes.node
    },

    render() {
      return (
        <div>
          <Nav />
          <Row>
            { this.props.children }
          </Row>
          <Footer />
        </div>
      );
    }
  })
);
