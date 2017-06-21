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
  'windowResized',

  // commands
  'updateNavHeight',
  'hidePane'
], ns);

export const panesMounted = createAction(types.panesMounted);
export const panesUpdated = createAction(types.panesUpdated);
export const panesWillMount = createAction(types.panesWillMount);

export const dividerClicked = createAction(types.dividerClicked);
export const dividerMoved = createAction(types.dividerMoved);
export const mouseReleased = createAction(types.mouseReleased);
export const windowResized = createAction(types.windowResized);

// commands
export const updateNavHeight = createAction(types.updateNavHeight);
export const hidePane = createAction(types.hidePane);

const initialState = {
  height: 600,
  width: 800,
  navHeight: 50,
  panes: [],
  panesByName: {},
  pressedDivider: null
};
export const getNS = state => state[ns];
export const heightSelector = state => {
  const { navHeight, height } = getNS(state);
  return height - navHeight;
};

export const panesSelector = state => getNS(state).panes;
export const panesByNameSelector = state => getNS(state).panesByName;
export const pressedDividerSelector =
  state => getNS(state).pressedDivider;
export const widthSelector = state => getNS(state).width;
export const hiddenPanesSelector = state => getNS(state).hiddenPanes;

function isPanesAction({ type } = {}, panesMap) {
  return !!panesMap[type];
}

export default function createPanesAspects(panesMap) {
  function middleware() {
    return next => action => {
      let finalAction = action;
      if (isPanesAction(action, panesMap)) {
        finalAction = {
          ...action,
          meta: {
            ...action.meta,
            isOpening: true,
            isClosing: true
          }
        };
      }
      return next(finalAction);
    };
  }

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
    ]: (state, { payload: panes }) => {
      const numOfPanes = panes.length;
      return {
        ...state,
        panes,
        panesByName: panes.reduce((panes, name, index) => {
          let dividerLeft = null;
          if (numOfPanes > 1 && numOfPanes !== index + 1) {
            dividerLeft = (100 / numOfPanes) * (index + 1);
          }
          panes[name] = {
            name,
            dividerLeft,
            isHidden: false
          };
          return panes;
        }, {})
      };
    },
    [types.updateNavHeight]: (state, { payload: navHeight }) => ({
      ...state,
      navHeight
    })
  }, initialState);
  function metaReducer(state = initialState, action) {
    if (panesMap[action.type]) {
      // const name = panesMap[action.type];
      return {
        ...state
      };
    }
    return state;
  }

  function finalReducer(state, action) {
    return reducer(metaReducer(state, action), action);
  }
  finalReducer.toString = () => ns;
  return {
    reducer: finalReducer,
    middleware
  };
}
