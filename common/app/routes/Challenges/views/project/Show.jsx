import React from 'react';
import PropTypes from 'prop-types';
import { addNS } from 'berkeleys-redux-utils';

import ns from './ns.json';
import Main from './Project.jsx';
import { OverlayLoader } from '../../../../helperComponents';
import ChildContainer from '../../Child-Container.jsx';
import { types } from '../../redux';
import Panes from '../../../../Panes';
import _Map from '../../../../Map';

const propTypes = {
  showLoading: PropTypes.bool
};
export const mapStateToPanes = addNS(
  ns,
  () => ({
    [types.toggleMap]: 'Map',
    [types.toggleMain]: 'Main'
  })
);

const nameToComponent = {
  Map: _Map,
  Main: Main
};

const renderPane = name => {
  const Comp = nameToComponent[name];
  return Comp ? <Comp /> : <span>Pane { name } not found</span>;
};

export default function ShowProject({ showLoading }) {
  return (
    <ChildContainer isFullWidth={ true }>
      {
        showLoading ? <OverlayLoader /> : null
      }
      <Panes render={ renderPane }/>
    </ChildContainer>
  );
}

ShowProject.displayName = 'ShowProject';
ShowProject.propTypes = propTypes;
