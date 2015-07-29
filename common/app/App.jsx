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
      children: PropTypes.node,
      username: PropTypes.string,
      points: PropTypes.number,
      picture: PropTypes.string
    },

    render() {
      const { username, points, picture } = this.props;
      const navProps = { username, points, picture };
      return (
        <div>
          <Nav
            { ...navProps }/>
          <Row>
            { this.props.children }
          </Row>
          <Footer />
        </div>
      );
    }
  })
);
