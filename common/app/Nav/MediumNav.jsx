import React from 'react';
import Media from 'react-media';
import { Col, Navbar, Row } from 'react-bootstrap';
import FCCSearchBar from 'react-freecodecamp-search';
import { NavLogo, BinButtons, NavLinks } from './components';

import propTypes from './navPropTypes';

function MediumNav({ clickOnLogo, clickOnMap, shouldShowMapButton, panes }) {
  return (
    <Media
      query={{ maxWidth: 955, minWidth: 751 }}
      render={
        () => (
          <div>
          <Row>
              <Navbar.Header className='medium-nav'>
            <div className='nav-component header'>
                <Navbar.Toggle />
                <NavLogo clickOnLogo={ clickOnLogo } />
                <FCCSearchBar
                  dropdown={ true }
                  placeholder=
                    '&#xf002; Search 8,000+ lessons, articles, and videos'
                />
            </div>
            <div className='nav-component bins'>
              <BinButtons panes={ panes } />
            </div>
              </Navbar.Header>
          </Row>
          <Row>
            <Col xs={ 12 }>
            <Navbar.Collapse>
                <NavLinks
                  clickOnMap={ clickOnMap }
                  shouldShowMapButton={ shouldShowMapButton }
                />
              </Navbar.Collapse>
            </Col>
          </Row>
          </div>
        )
      }
    />
  );
}

MediumNav.displayName = 'MediumNav';
MediumNav.propTypes = propTypes;

export default MediumNav;
