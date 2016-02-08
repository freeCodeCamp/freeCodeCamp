import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

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
        <div className='text-center'>
          <h2>Welcome To Hikes!</h2>
        </div>
        <hr />
        <ListGroup>
          { vidElements }
        </ListGroup>
      </div>
    );
  }
});
