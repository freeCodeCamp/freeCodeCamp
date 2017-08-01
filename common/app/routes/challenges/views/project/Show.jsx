import React from 'react';

import Main from './Project.jsx';
import { types } from '../../redux';
import _Map from '../../../../Map';
import ChildContainer from '../../../../Child-Container.jsx';
import Panes from '../../../../Panes';

const propTypes = {};

export const panesMap = {
  [types.toggleMap]: 'Map',
  [types.toggleMain]: 'Main'
};

const nameToComponent = {
  Map: {
    Component: _Map
  },
  Main: {
    Component: Main
  }
};

export default function ShowProject() {
  return (
    <ChildContainer isFullWidth={ true }>
      <Panes nameToComponent={ nameToComponent }/>
    </ChildContainer>
  );
}

ShowProject.displayName = 'ShowProject';
ShowProject.propTypes = propTypes;
