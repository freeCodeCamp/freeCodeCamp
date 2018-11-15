import React from 'react';
import Media from 'react-media';
import { Navbar, Row } from 'react-bootstrap';
import FCCSearchBar from 'react-freecodecamp-search';
import NavLogo from './components/NavLogo';
import NavLinks from './components/NavLinks';

import propTypes from './navPropTypes';

function SmallNav({ clickOnLogo }) {
  return (
    <Media
      query='(max-width: 750px)'
      >
      {
        matches => matches && typeof window !== 'undefined' && (
          <div>
          <Row>
            <Navbar.Header className='small-nav'>
              <div className='nav-component header'>
                  <Navbar.Toggle />
                  <NavLogo clickOnLogo={ clickOnLogo } />
              </div>
              <div className='nav-component bins'/>
            </Navbar.Header>
          </Row>
          <Row className='collapse-row'>
            <Navbar.Collapse>
              <NavLinks>
                <FCCSearchBar />
              </NavLinks>
            </Navbar.Collapse>
          </Row>
          </div>
        )
      }
    </Media>
  );
}

SmallNav.displayName = 'SmallNav';
SmallNav.propTypes = propTypes;

export default SmallNav;
