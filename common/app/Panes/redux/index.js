import { combineActions, createAction, handleActions } from 'redux-actions';
import { createTypes } from 'redux-create-types';
import { createSelector } from 'reselect';

import ns from '../ns.json';

import windowEpic from './window-epic.js';

export const epics = [
  windowEpic
];

export const types = createTypes([
  'panesMounted',
  'panesUpdated',
  'panesWillMount',
  'updateSize',
  'windowResized'
], ns);

export const panesMounted = createAction(types.panesMounted);
export const panesUpdated = createAction(types.panesUpdated);
export const panesWillMount = createAction(types.panesWillMount);

export const windowResized = createAction(types.windowResized);

const initialState = {
  height: 600,
  width: 800,
  panesById: {}
};

export const getNS = state => state[ns];
export const widthSelector = state => getNS(state).width;

export const panesByIdSelector = state => getNS(state).panesById;
export function makePaneSelector(keySelector) {
  return createSelector(
    keySelector,
    panesByIdSelector,
    (key, panesById) => panesById[key] || {}
  );
}
export const masterKeySelector = createSelector(
  panesByIdSelector,
  panesById => Object.keys(panesById)
    .reduce((masterKey, key) => {
      return '' + masterKey + key;
    }, '')
);

export default function makeReducer() {
  const reducer = handleActions({
    [types.windowResized]: (state, { payload: { height, width } }) => ({
      ...state,
      height,
      width
    }),
    [
      combineActions(
        panesWillMount,
        panesUpdated
      )
    ]: (state, { payload: panes }) => {
      const lastkey = panes[panes.length - 1];
      const numOfPanes = panes.length;
      const ratio = 1 / numOfPanes;
      const panesById = panes.reduce(
        (panes, key) => {
          panes[key] = {
            key,
            ratio,
            isLastPane: key === lastkey
          };
          return panes;
        },
        {}
      );
      return {
        ...state,
        panesById
      };
    }
  }, initialState);

  reducer.toString = () => ns;
  return [ reducer ];
}
