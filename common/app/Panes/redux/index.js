import { combineActions, createAction, handleActions } from 'redux-actions';
import { createTypes } from 'redux-create-types';
import clamp from 'lodash/clamp';

import ns from '../ns.json';

import windowEpic from './window-epic.js';
import dividerEpic from './divider-epic.js';

export const epics = [
  windowEpic,
  dividerEpic
];

export const types = createTypes([
  'panesMounted',
  'panesUpdated',
  'panesWillMount',
  'updateSize',

  'dividerClicked',
  'dividerMoved',
  'mouseReleased',
  'windowResized'
], ns);

export const panesMounted = createAction(types.panesMounted);
export const panesUpdated = createAction(types.panesUpdated);
export const panesWillMount = createAction(types.panesWillMount);

export const dividerClicked = createAction(types.dividerClicked);
export const dividerMoved = createAction(types.dividerMoved);
export const mouseReleased = createAction(types.mouseReleased);
export const windowResized = createAction(types.windowResized);

const initialState = {
  height: 600,
  width: 800,
  dividerPositions: [],
  pressedDivider: null
};

export const getNS = state => state[ns];
export const dividerPositionsSelector = state => getNS(state).dividerPositions;
export const heightSelector = state => getNS(state).height;
export const pressedDividerSelector =
  state => getNS(state).pressedDivider;
export const widthSelector = state => getNS(state).width;

export default function makeReducer() {
  const reducer = handleActions({
    [types.dividerClicked]: (state, { payload: divider }) => ({
      ...state,
      pressedDivider: divider
    }),
    [types.dividerMoved]: (state, { payload: clientX }) => {
      const { width, pressedDivider, dividerPositions } = state;
      const dividerBuffer = (200 / width) * 100;
      const rightBound = dividerPositions[pressedDivider - 1] || 100;
      const leftBound = dividerPositions[pressedDivider + 1] || 0;
      const newPosition = clamp(
        (clientX / width) * 100,
        leftBound + dividerBuffer,
        rightBound - dividerBuffer
      );
      const newPositions = [ ...dividerPositions ];
      newPositions[pressedDivider] = newPosition;
      return {
        ...state,
        dividerPositions: newPositions
      };
    },
    [types.mouseReleased]: state => ({ ...state, pressedDivider: null }),
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
