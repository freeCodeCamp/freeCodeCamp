import React from 'react';
import { addNS } from 'berkeleys-redux-utils';

import ns from './ns.json';
import Step from './Step.jsx';
import { types } from '../../redux';
import Panes from '../../../../Panes';
import _Map from '../../../../Map';
import ChildContainer from '../../../../Child-Container.jsx';

const propTypes = {};
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

export default function ShowStep() {
  return (
    <ChildContainer isFullWidth={ true }>
      <Panes render={ renderPane }/>
    </ChildContainer>
  );
}

ShowStep.displayName = 'ShowStep';
ShowStep.propTypes = propTypes;
