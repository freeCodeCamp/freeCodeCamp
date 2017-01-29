import { createSelector } from 'reselect';

import { viewTypes, submitTypes, getNode } from '../utils';
import blockNameify from '../../../utils/blockNameify';
import { html } from '../../../utils/challengeTypes';

export const challengeSelector = createSelector(
  state => state.challengesApp.challenge,
  state => state.entities.challenge,
  (challengeName, challengeMap) => {
    if (!challengeName || !challengeMap) {
      return {};
    }
    const challenge = challengeMap[challengeName];
    const challengeType = challenge && challenge.challengeType;
    const type = challenge && challenge.type;
    const viewType = viewTypes[type] || viewTypes[challengeType] || 'classic';
    const blockName = blockNameify(challenge.block);
    const title = blockName && challenge.title ?
                  `${blockName}: ${challenge.title}` :
                  challenge.title;
    return {
      challenge,
      title,
      viewType,
      submitType:
        submitTypes[challengeType] ||
        submitTypes[challenge && challenge.type] ||
        'tests',
      showPreview: challengeType === html,
      mode: challenge && challengeType === html ?
        'text/html' :
        'javascript'
    };
  }
);

export const makePanelOpenSelector = () => createSelector(
  state => state.challengesApp.mapUi,
  (_, props) => props.dashedName,
  (mapUi, name) => {
    const node = getNode(mapUi, name);
    return node ? node.isOpen : true;
  }
);

export const makePanelHiddenSelector = () => createSelector(
  state => state.challengesApp.mapUi,
  (_, props) => props.dashedName,
  (mapUi, name) => {
    const node = getNode(mapUi, name);
    return node ? node.isHidden : false;
  }
);
