import React from 'react';
import Media from 'react-media';
import { Col, Navbar, Row } from 'react-bootstrap';
import FCCSearchBar from 'react-freecodecamp-search';
import NavLogo from './components/NavLogo';
import NavLinks from './components/NavLinks';

import propTypes from './navPropTypes';

function LargeNav({ clickOnLogo }) {
  return (
    <Media
      query='(min-width: 956px)'
      render={
        () => (
          <Row>
            <Col className='nav-component' sm={ 7 } xs={ 12 }>
              <Navbar.Header>
                <NavLogo clickOnLogo={ clickOnLogo } />
                <FCCSearchBar />
              </Navbar.Header>
            </Col>
            <Col className='nav-component nav-links' sm={ 5 } xs={ 0 }>
              <Navbar.Collapse>
                <NavLinks />
              </Navbar.Collapse>
          </Col>
          </Row>
        )
      }
    />
  );
}

LargeNav.displayName = 'LargeNav';
LargeNav.propTypes = propTypes;

export default LargeNav;
