import React from 'react';
import Media from 'react-media';
import { Col, Navbar, Row } from 'react-bootstrap';
import FCCSearchBar from 'react-freecodecamp-search';
import { NavLogo, NavLinks } from './components';

import propTypes from './navPropTypes';

function LargeNav({ clickOnLogo }) {
  return (
    <Media
      query='(min-width: 956px)'
      render={
        () => (
          <Row>
            <Col className='nav-component' sm={ 5 } xs={ 6 }>
              <Navbar.Header>
                <NavLogo clickOnLogo={ clickOnLogo } />
                <FCCSearchBar />
              </Navbar.Header>
            </Col>
            <Col className='nav-component bins' sm={ 3 } xs={ 6 }/>
            <Col className='nav-component nav-links' sm={ 4 } xs={ 0 }>
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
