import { combineActions, createAction, handleActions } from 'redux-actions';
import { createTypes } from 'redux-create-types';

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
  dividerPositions: []
};

export const getNS = state => state[ns];
export const dividerPositionsSelector = state => getNS(state).dividerPositions;
export const heightSelector = state => getNS(state).height;
export const widthSelector = state => getNS(state).width;

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
    ]: (state, { payload: numOfPanes }) => {
      let dividerPositions = [];
      const numOfDividers = numOfPanes - 1;
      if (numOfDividers === 1) {
        dividerPositions.push(25);
      } else if (numOfDividers > 1) {
        dividerPositions = (new Array(numOfDividers))
          .map(() => (1 / numOfDividers));
      }
      return {
        ...state,
        dividerPositions
      };
    }
  }, initialState);

  reducer.toString = () => ns;
  return [ reducer ];
}
