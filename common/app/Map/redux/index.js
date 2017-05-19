import { createTypes } from 'redux-create-types';
import { createAction, combineActions, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import identity from 'lodash/identity';
import capitalize from 'lodash/capitalize';

import mapUiEpic from './map-ui-epic.js';
import selectChallengeEpic from './select-challenge-epic.js';

import * as utils from './utils.js';
import ns from '../ns.json';
import { createEventMetaCreator } from '../../redux';

export const epics = [
  mapUiEpic,
  selectChallengeEpic
];

export const types = createTypes([
  'initMap',

  'clearFilterPressed',
  'escapeKeyInFilter',
  'updateFilter',

  'toggleThisPanel',

  'isAllCollapsed',
  'collapseAll',
  'expandAll',

  'clickOnChallenge'
], ns);

export const initMap = createAction(types.initMap);
export const updateFilter = createAction(
  types.updateFilter,
  e => e.target.value
);
export const clearFilterPressed = createAction(types.clearFilterPressed);
export const escapeKeyInFilter = createAction(types.escapeKeyInFilter);

export const toggleThisPanel = createAction(types.toggleThisPanel);
export const collapseAll = createAction(types.collapseAll);

export const expandAll = createAction(types.expandAll);
export const clickOnChallenge = createAction(
  types.clickOnChallenge,
  identity,
  createEventMetaCreator({
    category: capitalize(ns),
    action: 'click',
    label: types.clickOnChallenge
  })
);

const initialState = {
  mapUi: { isAllCollapsed: false },
  filter: '',
  superBlocks: []
};

export const getNS = state => state[ns];
export const allColapsedSelector = state => state[ns].isAllCollapsed;
export const filterSelector = state => state[ns].filter;
export const mapSelector = state => getNS(state).mapUi;
export function makePanelOpenSelector(name) {
  return createSelector(
    mapSelector,
    mapUi => {
      const node = utils.getNode(mapUi, name);
      return node ? node.isOpen : true;
    }
  );
}

export function makePanelHiddenSelector(name) {
  return createSelector(
    mapSelector,
    mapUi => {
      const node = utils.getNode(mapUi, name);
      return node ? node.isHidden : false;
    }
  );
}
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
export default function createReducer() {
  const reducer = handleActions(
    {
      [types.updateFilter]: (state, { payload = '' }) => ({
        ...state,
        filter: payload
      }),
      [
        combineActions(
          types.clearFilterPressed,
          types.escapeKeyInFilter
        )
      ]: (state) => ({
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

  reducer.toString = () => ns;
  return reducer;
}
