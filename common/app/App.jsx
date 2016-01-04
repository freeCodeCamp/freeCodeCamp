import React, { PropTypes } from 'react';
import { contain } from 'thundercats-react';
import { Row } from 'react-bootstrap';

import { Nav } from './components/Nav';

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
      points: PropTypes.number,
      picture: PropTypes.string,
      title: PropTypes.string,
      username: PropTypes.string
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
        </div>
      );
    }
  })
);
