import React from 'react';

import { types, showPreviewSelector } from '../../redux';
import { createPaneMap } from '../../../../Panes/redux';

import ns from './ns.json';

const propTypes = {};

export const panesMap = createPaneMap(
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

export default function ShowModern() {
  return (
    <div>hello berks</div>
  );
}

ShowModern.displayName = 'ShowModern';
ShowModern.propTypes = propTypes;
