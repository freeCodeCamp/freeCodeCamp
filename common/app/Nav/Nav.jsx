import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Navbar } from 'react-bootstrap';

import LargeNav from './LargeNav.jsx';
import MediumNav from './MediumNav.jsx';
import SmallNav from './SmallNav.jsx';
import {
  clickOnLogo,
  clickOnMap
} from './redux';
import { panesSelector } from '../Panes/redux';
import propTypes from './navPropTypes';

const mapStateToProps = createSelector(
  panesSelector,
  panes => {
    return {
      panes: panes.map(({ name, type }) => {
        return {
          content: name,
          action: type
        };
      }, {}),
      shouldShowMapButton: panes.length === 0
    };
  }
);

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

function mergeProps(stateProps, dispatchProps, ownProps) {
  const panes = stateProps.panes.map(pane => {
    return {
      ...pane,
      actionCreator: () => dispatchProps.dispatch({ type: pane.action })
    };
  });
  return {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
    panes
  };
}

function FCCNav(props) {
  const {
    panes,
    clickOnLogo,
    clickOnMap,
    shouldShowMapButton
  } = props;
  return (
    <Navbar
    className='nav-height'
    id='navbar'
    staticTop={ true }
    >
    <LargeNav
      clickOnLogo={ clickOnLogo }
      clickOnMap={ clickOnMap }
      panes={ panes }
      shouldShowMapButton={ shouldShowMapButton }
    />
    <MediumNav
      clickOnLogo={ clickOnLogo }
      clickOnMap={ clickOnMap }
      panes={ panes }
      shouldShowMapButton={ shouldShowMapButton }
    />
    <SmallNav
      clickOnLogo={ clickOnLogo }
      clickOnMap={ clickOnMap }
      panes={ panes }
      shouldShowMapButton={ shouldShowMapButton }
    />
  </Navbar>
  );
}

FCCNav.displayName = 'FCCNav';
FCCNav.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(FCCNav);
