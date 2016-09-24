import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// this is separated out to prevent react bootstrap's
// NavBar from injecting unknown props to the li component
export default function AvatarPointsNavItem({ picture, points }) {
  return (
    <li
      className='avatar-points'
      key='user'
      >
      <Link to='/settings'>
        <span className='brownie-points-nav'>
          [ { points || 1 } ]
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

AvatarPointsNavItem.propTypes = {
  picture: PropTypes.string,
  points: React.PropTypes.number
};
