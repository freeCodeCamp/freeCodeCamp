import React from 'react';
import { Link } from '../../helpers';
import { forumLocation } from '../../../../../config/env.json';

import PropTypes from 'prop-types';

const propTypes = {
  displayMenu: PropTypes.bool
};

function NavLinks({ displayMenu }) {
  return (
    <div className='main-nav-group'>
      <ul className={'nav-list' + (displayMenu ? ' display-flex' : '')}>
        <li className='nav-news'>
          <Link external={true} sameTab={true} to='/news'>
            /news
          </Link>
        </li>
        <li className='nav-forum'>
          <Link external={true} sameTab={true} to={forumLocation}>
            /forum
          </Link>
        </li>
        <li className='nav-projects'>
          <Link to='/learn'>/learn</Link>
        </li>
      </ul>
    </div>
  );
}

NavLinks.propTypes = propTypes;
NavLinks.displayName = 'NavLinks';
export default NavLinks;
