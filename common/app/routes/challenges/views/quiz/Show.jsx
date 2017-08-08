import React from 'react';

import Main from './Quiz.jsx';
import { types } from '../../redux';
import Panes from '../../../../Panes';
import _Map from '../../../../Map';
import ChildContainer from '../../../../Child-Container.jsx';

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

export default function ShowQuiz() {
  return (
    <ChildContainer isFullWidth={ true }>
      <Panes nameToComponent={ nameToComponent }/>
    </ChildContainer>
  );
}

ShowQuiz.displayName = 'ShowQuiz';
ShowQuiz.propTypes = propTypes;
