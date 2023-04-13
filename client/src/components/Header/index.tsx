import React from 'react';
import Helmet from 'react-helmet';
import { User } from '../../redux/prop-types';

import UniversalNav from './components/universal-nav';

import './header.css';

interface HeaderProps {
  fetchState: { pending: boolean };
  user: User;
  skipButtonText: string;
}
export const Header = ({
  fetchState,
  user,
  skipButtonText
}: HeaderProps): JSX.Element => {
  return (
      <header>
        <a href='#content-start' className='skip-to-content-button'>
          {skipButtonText}
        </a>
        <UniversalNav
          fetchState={fetchState}
          user={user}
        />
      </header>
    );
  }


Header.displayName = 'Header';

export default Header;
