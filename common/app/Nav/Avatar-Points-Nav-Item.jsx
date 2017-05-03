import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// this is separated out to prevent react bootstrap's
// NavBar from injecting unknown props to the li component

const propTypes = {
  picture: PropTypes.string,
  points: PropTypes.number,
  username: PropTypes.string
};

export default function AvatarPointsNavItem({ picture, points, username }) {
  return (
    <li
      className='avatar-points'
      key='user'
      >
      <Link to='/settings'>
        <span className='brownie-points-nav'>
          <span className='hidden-md hidden-lg'> { username } </span>
          <span className='brownie-points'> [ { points || 1 } ] </span>
        </span>
        <span className='hidden-xs hidden-sm avatar'>
          <img
            className='profile-picture float-right'
            src={ picture }
          />
        </span>
      </Link>
    </li>
  );
}

AvatarPointsNavItem.displayName = 'AvatarPointsNavItem';
AvatarPointsNavItem.propTypes = propTypes;
