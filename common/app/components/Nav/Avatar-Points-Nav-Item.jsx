import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { defaultProfileImage } from '../../../utils/constantStrings.json';

// this is separated out to prevent react bootstrap's
// NavBar from injecting unknown props to the li component
export default function AvatarPointsNavItem({ picture, points, username }) {
  const profileUsername = username ? username : 'Signing you in';
  const profileImg = picture ? picture : defaultProfileImage;

  return (
    <li
      className='avatar-points'
      key='user'
      >
      <Link to='/settings'>
        <span className='brownie-points-nav'>
          <span className='hidden-md hidden-lg'> { profileUsername } </span>
          <span className='brownie-points'> [ { points || 1 } ] </span>
        </span>
        <span className='hidden-xs hidden-sm avatar'>
          <img
            className='profile-picture float-right'
            src={ profileImg }
          />
        </span>
      </Link>
    </li>
  );
}

AvatarPointsNavItem.propTypes = {
  username: PropTypes.string,
  picture: PropTypes.string,
  points: PropTypes.number
};
