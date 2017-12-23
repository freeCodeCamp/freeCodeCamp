import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// this is separated out to prevent react bootstrap's
// NavBar from injecting unknown props to the li component
export default function AvatarNavItem({ picture }) {
  return (
    <li
      className='hidden-xs hidden-sm avatar'
      key='user'
      >
      <Link to='/settings'>
        <img
          className='profile-picture float-right'
          src={ picture }
        />
      </Link>
    </li>
  );
}

AvatarNavItem.propTypes = { picture: PropTypes.string };
