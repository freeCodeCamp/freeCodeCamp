import React from 'react';
import PropTypes from 'prop-types';
import { addNS } from 'berkeleys-redux-utils';

import ns from './ns.json';
import Step from './Step.jsx';
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
    [types.toggleStep]: 'Lesson'
  })
);

const nameToComponent = {
  Map: _Map,
  Lesson: Step
};

const renderPane = name => {
  const Comp = nameToComponent[name];
  return Comp ? <Comp /> : <span>Pane { name } not found</span>;
};

export default function ShowStep({ showLoading }) {
  return (
    <ChildContainer isFullWidth={ true }>
      {
        showLoading ? <OverlayLoader /> : null
      }
      <Panes render={ renderPane }/>
    </ChildContainer>
  );
}

ShowStep.displayName = 'ShowStep';
ShowStep.propTypes = propTypes;
