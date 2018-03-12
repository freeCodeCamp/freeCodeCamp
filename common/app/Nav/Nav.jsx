import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import FCCSearchBar from 'react-freecodecamp-search';
import {
  Navbar
} from 'react-bootstrap';

import { BinButtons, NavLogo, NavLinks } from './components';
import {
  clickOnLogo,
  clickOnMap
} from './redux';
import { panesSelector } from '../Panes/redux';

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

const propTypes = {
  clickOnLogo: PropTypes.func.isRequired,
  clickOnMap: PropTypes.func.isRequired,
  panes: PropTypes.array,
  shouldShowMapButton: PropTypes.bool
};

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
    <div className='nav-component-wrapper'>
      <Navbar.Header>
        <Navbar.Toggle children={ 'Menu' } />
        <NavLogo clickOnLogo={ clickOnLogo } />
        <FCCSearchBar
          dropdown={ true }
          placeholder='&#xf002; Search 8,000+ lessons, articles, and videos'
        />
      </Navbar.Header>
        <BinButtons panes={ panes } />
      <Navbar.Collapse>
        <NavLinks
          clickOnMap={ clickOnMap }
          shouldShowMapButton={ shouldShowMapButton }
        />
      </Navbar.Collapse>
    </div>
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
