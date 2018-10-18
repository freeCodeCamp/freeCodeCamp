import React from 'react';
import { NavItem, Nav } from 'react-bootstrap';
import { startCase } from 'lodash';

const urls = {
  curriculum: 'https://learn.freecodecamp.org',
  forum: 'https://forum.freecodecamp.org',
  news: 'https://freecodecamp.org/news' ,
};

const Links = Object.keys(urls).map(key => (
  <NavItem href={urls[key]} key={key} target='_blank'>
    {startCase(key)}
  </NavItem>
));
const propTypes = {};

function NavLinks() {
  return (
    <Nav id='nav-links' navbar={true} pullRight={true}>
      {Links}
      <NavItem href='/settings'>Settings</NavItem>
    </Nav>
  );
}

NavLinks.displayName = 'NavLinks';
NavLinks.propTypes = propTypes;

export default NavLinks;

/*
<SignUp
      isInDropDown={ !isInNav }
      showLoading={ !showLoading }
      showSignUp={ !isSignedIn }
    />
    */
