import React from 'react';
import { addNS } from 'berkeleys-redux-utils';

import { types, showPreviewSelector } from '../../redux';
import Panes from '../../../../Panes';
import _Map from '../../../../Map';
import ChildContainer from '../../../../Child-Container.jsx';

import ns from './ns.json';

const propTypes = {};

export const mapStateToPanes = addNS(
  ns,
  state => {
    // create panes map here
    // must include map
    // side panel
    // editors are created based on state
    // so pane component can have multiple panes based on state
    const panesMap = {
      [types.toggleMap]: 'Map',
      [types.toggleSidePanel]: 'Side Panel'
    };
    if (showPreviewSelector(state)) {
      [types.togglePreview] = 'Preview';
    }
    return panesMap;
  }
);

const nameToComponent = {
  Map: _Map
};

const renderPane = name => {
  const Comp = nameToComponent[name];
  return Comp ? <Comp /> : <span>Pane { name } not found</span>;
};

export default function ShowModern() {
  return (
    <ChildContainer isFullWidth={ true }>
      <Panes render={ renderPane }/>
    </ChildContainer>
  );
}

ShowModern.displayName = 'ShowModern';
ShowModern.propTypes = propTypes;
