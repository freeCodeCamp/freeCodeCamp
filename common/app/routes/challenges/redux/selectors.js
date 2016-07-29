import { createSelector } from 'reselect';
import * as challengeTypes from '../../../utils/challengeTypes';
import { getNode } from '../utils';

const viewTypes = {
  [ challengeTypes.html]: 'classic',
  [ challengeTypes.js ]: 'classic',
  [ challengeTypes.bonfire ]: 'classic',
  [ challengeTypes.frontEndProject]: 'project',
  [ challengeTypes.backEndProject]: 'project',
  // might not be used anymore
  [ challengeTypes.simpleProject]: 'project',
  // formally hikes
  [ challengeTypes.video ]: 'video',
  [ challengeTypes.step ]: 'step'
};

const submitTypes = {
  [ challengeTypes.html ]: 'tests',
  [ challengeTypes.js ]: 'tests',
  [ challengeTypes.bonfire ]: 'tests',
  // requires just a button press
  [ challengeTypes.simpleProject ]: 'project.simple',
  // requires just a single url
  // like codepen.com/my-project
  [ challengeTypes.frontEndProject ]: 'project.frontEnd',
  // requires two urls
  // a hosted URL where the app is running live
  // project code url like GitHub
  [ challengeTypes.backEndProject ]: 'project.backEnd',
  // formally hikes
  [ challengeTypes.video ]: 'video',
  [ challengeTypes.step ]: 'step'
};

export const challengeSelector = createSelector(
  state => state.challengesApp.challenge,
  state => state.entities.challenge,
  (challengeName, challengeMap) => {
    if (!challengeName || !challengeMap) {
      return {};
    }
    const challenge = challengeMap[challengeName];
    const challengeType = challenge && challenge.challengeType;
    return {
      challenge,
      viewType: viewTypes[challengeType] || 'classic',
      submitType: submitTypes[challengeType] || 'tests',
      showPreview: challengeType === challengeTypes.html,
      mode: challenge && challengeType === challengeTypes.html ?
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
