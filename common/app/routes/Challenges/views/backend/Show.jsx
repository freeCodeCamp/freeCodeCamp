import React from 'react';

import BackEnd from './Back-End.jsx';
import { types } from '../../redux';
import Panes from '../../../../Panes';
import _Map from '../../../../Map';
import ChildContainer from '../../../../Child-Container.jsx';

const propTypes = {};

export const panesMap = {
  [types.toggleMap]: 'Map',
  [types.toggleMain]: 'Main'
};

const nameToComponentDef = {
  Map: {
    Component: _Map,
    defaultSize: 25
  },
  Main: {
    Component: BackEnd,
    defaultSize: 50
  }
};

export default function ShowBackEnd() {
  return (
    <ChildContainer isFullWidth={ true }>
      <Panes nameToComponent={ nameToComponentDef } />
    </ChildContainer>
  );
}

ShowBackEnd.displayName = 'ShowBackEnd';
ShowBackEnd.propTypes = propTypes;
