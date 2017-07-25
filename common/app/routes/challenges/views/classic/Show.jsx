import React from 'react';

import SidePanel from './Side-Panel.jsx';
import Editor from './Editor.jsx';
import Preview from './Preview.jsx';
import { types } from '../../redux';
import Panes from '../../../../Panes';
import _Map from '../../../../Map';
import ChildContainer from '../../../../Child-Container.jsx';

const propTypes = {};

export const panesMap = {
  [types.toggleMap]: 'Map',
  [types.toggleSidePanel]: 'Side Panel',
  [types.toggleClassicEditor]: 'Editor',
  [types.togglePreview]: 'Preview'
};

const nameToComponent = {
  Map: {
    Component: _Map
  },
  'Side Panel': {
    Component: SidePanel
  },
  Editor: {
    Component: Editor
  },
  Preview: {
    Component: Preview
  }
};

export default function ShowClassic() {
  return (
    <ChildContainer isFullWidth={ true }>
      <Panes nameToComponent={ nameToComponent }/>
    </ChildContainer>
  );
}

ShowClassic.displayName = 'ShowClassic';
ShowClassic.propTypes = propTypes;
