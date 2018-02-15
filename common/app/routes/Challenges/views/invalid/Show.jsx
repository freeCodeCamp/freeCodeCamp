import React from 'react';
import { addNS } from 'berkeleys-redux-utils';

import ChildContainer from '../../Child-Container.jsx';
import NotFound from './NotFound.jsx';
import { types } from '../../redux';
import Panes from '../../../../Panes';
import _Map from '../../../../Map';

const propTypes = {};

export const mapStateToPanes = addNS(
  'invalid',
  () => ({
    [types.toggleMap]: 'Map',
    [types.toggleMain]: 'Main'
  })
);

const nameToComponent = {
  Map: _Map,
  Main: NotFound
};

const renderPane = name => {
  console.log('rendered Pane');
  const Comp = nameToComponent[name];
  return Comp ? <Comp /> : <span>Pane { name } not found</span>;
};

export default function ShowNotFound() {
  return (
    <ChildContainer isFullWidth={ true }>
      <Panes render={ renderPane } />
    </ChildContainer>
  );
}

ShowNotFound.displayName = 'ShowNotFound';
ShowNotFound.propTypes = propTypes;

