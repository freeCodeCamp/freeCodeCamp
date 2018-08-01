import React from 'react';
import Media from 'react-media';
import { Navbar, Row } from 'react-bootstrap';
import FCCSearchBar from 'react-freecodecamp-search';
import NavLogo from './components/NavLogo';
import NavLinks from './components/NavLinks';
import propTypes from './navPropTypes';

function MediumNav({ clickOnLogo }) {
  return (
    <Media
      query={{ maxWidth: 955, minWidth: 751 }}
      >
      {
        matches => matches && typeof window !== 'undefined' && (
          <div>
          <Row>
            <Navbar.Header className='medium-nav'>
              <div className='nav-component header'>
                  <Navbar.Toggle />
                  <NavLogo clickOnLogo={ clickOnLogo } />
                  <FCCSearchBar />
              </div>
              <div className='nav-component bins'/>
            </Navbar.Header>
          </Row>
          <Row className='collapse-row'>
            <Navbar.Collapse>
                <NavLinks />
              </Navbar.Collapse>
          </Row>
          </div>
        )
      }
    </Media>
  );
}

MediumNav.displayName = 'MediumNav';
MediumNav.propTypes = propTypes;

export default MediumNav;
