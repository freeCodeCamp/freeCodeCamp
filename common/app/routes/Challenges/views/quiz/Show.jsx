import React from 'react';

import ns from './ns.json';
import Main from './Quiz.jsx';
import { types } from '../../redux';
import Panes from '../../../../Panes';
import { createPaneMap } from '../../../../Panes/redux';
import _Map from '../../../../Map';
import ChildContainer from '../../../../Child-Container.jsx';

const propTypes = {};
export const panesMap = createPaneMap(
  ns,
  () => ({
    [types.toggleMap]: 'Map',
    [types.toggleMain]: 'Main'
  })
);

const nameToComponent = {
  Map: {
    Component: _Map
  },
  Main: {
    Component: Main
  }
};

export default function ShowQuiz() {
  return (
    <ChildContainer isFullWidth={ true }>
      <Panes nameToComponent={ nameToComponent }/>
    </ChildContainer>
  );
}

ShowQuiz.displayName = 'ShowQuiz';
ShowQuiz.propTypes = propTypes;
