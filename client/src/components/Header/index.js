import React from 'react';
import Helmet from 'react-helmet';

import UniversalNav from './components/UniversalNav';

import './header.css';

export function Header() {
  return (
    <>
      <Helmet>
        <style>{':root{--header-height: 38px}'}</style>
      </Helmet>
      <header>
        <UniversalNav />
      </header>
    </>
  );
}

Header.displayName = 'Header';
export default Header;
