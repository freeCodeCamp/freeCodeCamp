import React from 'react';
import PropTypes from 'prop-types';

import { Link } from '../../helpers';
import UserState from '../components/UserState';

function MenuLinks(props) {
  return (
    <ul
      className={`${props.displayMenu ? ' nav-expanded' : ''}${
        props.disableMenuButtonBehavior ? ' nav-guide' : ''
      }`}
      id='top-right-nav'
    >
      <li>
        <Link className='top-right-nav-link' to='/learn'>
          Learn
        </Link>
      </li>
      <li>
        <Link className='top-right-nav-link' external={true} to='/forum'>
          Forum
        </Link>
      </li>
      <li>
        <Link className='top-right-nav-link' external={true} to='/news'>
          News
        </Link>
      </li>
      <li>
        <UserState disableSettings={props.disableSettings} />
      </li>
    </ul>
  );
}

MenuLinks.displayName = 'MenuLinks';
MenuLinks.propTypes = {
  disableMenuButtonBehavior: PropTypes.bool.isRequired,
  disableSettings: PropTypes.bool.isRequired,
  displayMenu: PropTypes.bool.isRequired
};

export default MenuLinks;
