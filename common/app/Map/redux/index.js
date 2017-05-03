import { createTypes } from 'redux-create-types';
import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';

import * as utils from './utils.js';
import ns from '../ns.json';

export const types = createTypes([
  'initMap',

  'clearFilter',
  'updateFilter',

  'toggleThisPanel',
  'collapseAll',
  'expandAll',

  'clickOnChallenge'
], ns);

export const initMap = createAction(types.initMap);
export const updateFilter = createAction(
  types.updateFilter,
  e => e.target.value
);
export const clearFilter = createAction(types.clearFilter);

export const toggleThisPanel = createAction(types.toggleThisPanel);
export const collapseAll = createAction(types.collapseAll);

export const expandAll = createAction(types.expandAll);
export const clickOnChallenge = createAction(types.clickOnChallenge);

const initialState = {
  mapUi: { isAllCollapsed: false },
  filter: '',
  superBlocks: []
};

export const getNS = state => state[ns];
export const makePanelOpenSelector = () => createSelector(
  state => getNS(state).mapUi,
  (_, props) => props.dashedName,
  (mapUi, name) => {
    const node = utils.getNode(mapUi, name);
    return node ? node.isOpen : true;
  }
);

export const makePanelHiddenSelector = () => createSelector(
  state => getNS(state).mapUi,
  (_, props) => props.dashedName,
  (mapUi, name) => {
    const node = utils.getNode(mapUi, name);
    return node ? node.isHidden : false;
  }
);
// interface Map{
//   children: [...{
//     name: (superBlock: String),
//     isOpen: Boolean,
//     isHidden: Boolean,
//     children: [...{
//       name: (blockName: String),
//       isOpen: Boolean,
//       isHidden: Boolean,
//       children: [...{
//         name: (challengeName: String),
//         isHidden: Boolean
//       }]
//     }]
//   }
// }
export default handleActions(
  {
    [types.updateFilter]: (state, { payload = '' }) => ({
      ...state,
      filter: payload
    }),
    [types.clearFilter]: (state) => ({
      ...state,
      filter: ''
    }),
    [types.fetchChallengesCompleted]: (state, { payload }) => {
      const { entities, results } = payload;
      return {
        ...state,
        mapUi: utils.createMapUi(entities, results)
      };
    },

    [types.toggleThisPanel]: (state, { payload: name }) => {
      return {
        ...state,
        mapUi: utils.toggleThisPanel(state, name)
      };
    },
    [types.collapseAll]: state => {
      const mapUi = utils.collapseAllPanels(state);
      mapUi.isAllCollapsed = true;
      return {
        ...state,
        mapUi
      };
    },
    [types.expandAll]: state => {
      const mapUi = utils.expandAllPanels(state);
      mapUi.isAllCollapsed = false;
      return {
        ...state,
        mapUi
      };
    }
  },
  initialState
);
