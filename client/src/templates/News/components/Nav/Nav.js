import React from 'react';
import { Navbar } from 'react-bootstrap';

import LargeNav from './LargeNav';
import MediumNav from './MediumNav';
import SmallNav from './SmallNav';

const allNavs = [
  LargeNav,
  MediumNav,
  SmallNav
];

export default function FCCNav() {
  const withNavProps = Component => (
    <Component
      key={ Component.displayName }
    />
  );
  return (
    <Navbar
    className='nav-height'
    id='navbar'
    staticTop={ true }
    >
    {
      allNavs.map(withNavProps)
    }
  </Navbar>
  );
}
