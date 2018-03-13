import React from 'react';
import Media from 'react-media';
import { Navbar, Row } from 'react-bootstrap';
import FCCSearchBar from 'react-freecodecamp-search';
import { NavLogo, BinButtons, NavLinks } from './components';

import propTypes from './navPropTypes';

function SmallNav({ clickOnLogo, clickOnMap, shouldShowMapButton, panes }) {
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
            <div className='nav-component bins'>
              <BinButtons panes={ panes } />
            </div>
              </Navbar.Header>
          </Row>
          <Row className='collapse-row'>
            <Navbar.Collapse>
              <NavLinks
                clickOnMap={ clickOnMap }
                shouldShowMapButton={ shouldShowMapButton }
                >
                <FCCSearchBar
                  dropdown={ true }
                  placeholder=
                    '&#xf002; Search 8,000+ lessons, articles, and videos'
                />
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
