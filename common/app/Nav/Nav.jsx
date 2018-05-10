import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Navbar } from 'react-bootstrap';

import LargeNav from './LargeNav.jsx';
import MediumNav from './MediumNav.jsx';
import SmallNav from './SmallNav.jsx';
import {
  clickOnLogo,
  clickOnMap
} from './redux';
import propTypes from './navPropTypes';

const mapStateToProps = () => ({});

function mapDispatchToProps(dispatch) {
  const dispatchers = bindActionCreators(
    {
      clickOnMap: e => {
        e.preventDefault();
        return clickOnMap();
      },
      clickOnLogo: e => {
        e.preventDefault();
        return clickOnLogo();
      }
    },
    dispatch
  );
  dispatchers.dispatch = dispatch;
  return () => dispatchers;
}

const allNavs = [
  LargeNav,
  MediumNav,
  SmallNav
];

function FCCNav(props) {
  const {
    clickOnLogo,
    clickOnMap,
    shouldShowMapButton
  } = props;
  const withNavProps = Component => (
    <Component
      clickOnLogo={ clickOnLogo }
      clickOnMap={ clickOnMap }
      key={ Component.displayName }
      shouldShowMapButton={ shouldShowMapButton }
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

FCCNav.displayName = 'FCCNav';
FCCNav.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FCCNav);
