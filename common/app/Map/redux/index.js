import {
  createAction,
  createTypes,
  handleActions
} from 'berkeleys-redux-utils';
import { createSelector } from 'reselect';
import noop from 'lodash/noop';
import capitalize from 'lodash/capitalize';

import * as utils from './utils.js';
import ns from '../ns.json';
import {
  types as app,
  createEventMetaCreator
} from '../../redux';

export const epics = [];

export const types = createTypes([
  'onRouteMap',
  'initMap',

  'toggleThisPanel',

  'isAllCollapsed',
  'collapseAll',
  'expandAll',

  'clickOnChallenge'
], ns);

export const initMap = createAction(types.initMap);

export const toggleThisPanel = createAction(types.toggleThisPanel);
export const collapseAll = createAction(types.collapseAll);

export const expandAll = createAction(types.expandAll);
export const clickOnChallenge = createAction(
  types.clickOnChallenge,
  noop,
  createEventMetaCreator({
    category: capitalize(ns),
    action: 'click',
    label: types.clickOnChallenge
  })
);

const initialState = {
  mapUi: { isAllCollapsed: false },
  superBlocks: []
};

export const getNS = state => state[ns];
export const allColapsedSelector = state => state[ns].isAllCollapsed;
export const mapSelector = state => getNS(state).mapUi;
export function makePanelOpenSelector(name) {
  return createSelector(
    mapSelector,
    mapUi => {
      const node = utils.getNode(mapUi, name);
      return node ? node.isOpen : false;
    }
  );
}

// interface Map{
//   children: [...{
//     name: (superBlock: String),
//     isOpen: Boolean,
//     children: [...{
//       name: (blockName: String),
//       isOpen: Boolean,
//       children: [...{
//         name: (challengeName: String),
//       }]
//     }]
//   }
// }
export default handleActions(
  ()=> ({
    [types.toggleThisPanel]: (state, { payload: name }) => {
      return {
        ...state,
        mapUi: utils.toggleThisPanel(state.mapUi, name)
      };
    },
    [types.collapseAll]: state => {
      const mapUi = utils.collapseAllPanels(state.mapUi);
      mapUi.isAllCollapsed = true;
      return {
        ...state,
        mapUi
      };
    },
    [types.expandAll]: state => {
      const mapUi = utils.expandAllPanels(state.mapUi);
      mapUi.isAllCollapsed = false;
      return {
        ...state,
        mapUi
      };
    },
    [app.fetchChallenges.complete]: (state, { payload }) => {
      const { entities, result } = payload;
      return {
        ...state,
        mapUi: utils.createMapUi(entities, result)
      };
    }
  }),
  initialState,
  ns
);
