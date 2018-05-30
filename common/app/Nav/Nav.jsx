import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Navbar } from 'react-bootstrap';

import LargeNav from './LargeNav.jsx';
import MediumNav from './MediumNav.jsx';
import SmallNav from './SmallNav.jsx';
import {
  clickOnLogo
} from './redux';
import propTypes from './navPropTypes';

const mapStateToProps = () => ({});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      clickOnLogo
    },
    dispatch
  );
}

const allNavs = [
  LargeNav,
  MediumNav,
  SmallNav
];

function FCCNav(props) {
  const {
    clickOnLogo
  } = props;
  const withNavProps = Component => (
    <Component
      clickOnLogo={ clickOnLogo }
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

FCCNav.displayName = 'FCCNav';
FCCNav.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FCCNav);
