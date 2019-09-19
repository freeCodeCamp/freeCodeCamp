import React from 'react';
import { Link } from '../../helpers';

export function NavLinks() {
  return (
    <div className='main-nav-group'>
      <ul className={'nav-list display-flex'} role='menu'>
        <li className='nav-theme' role='menuitem'>
          <Link to='/learn'>Projects</Link>
        </li>
        <li className='nav-theme' role='menuitem'>
          <Link to='/'>Light</Link>
        </li>
        <li className='nav-portfolio' role='menuitem'>
          <Link to='/portfolio'>Portfolio</Link>
        </li>
      </ul>
    </div>
  );
}

NavLinks.displayName = 'NavLinks';
export default NavLinks;
