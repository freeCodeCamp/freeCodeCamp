import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { ListGroup, ListGroupItem, Panel } from 'react-bootstrap';

export default React.createClass({
  displayName: 'HikesMap',

  propTypes: {
    hikes: PropTypes.array
  },

  render() {
    const {
      hikes = [{}]
    } = this.props;

    const vidElements = hikes.map(({ title, dashedName}) => {
      return (
        <ListGroupItem key={ dashedName }>
          <Link to={ `/hikes/${dashedName}` }>
            <h3>{ title }</h3>
          </Link>
        </ListGroupItem>
      );
    });

    return (
      <div>
        <Panel>
          <h2>Welcome To Hikes!</h2>
        </Panel>
        <ListGroup>
          { vidElements }
        </ListGroup>
      </div>
    );
  }
});
