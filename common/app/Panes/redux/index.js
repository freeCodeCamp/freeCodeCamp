import { combineActions, createAction, handleActions } from 'redux-actions';
import { createTypes } from 'redux-create-types';
import clamp from 'lodash/clamp';

import ns from '../ns.json';

import windowEpic from './window-epic.js';
import dividerEpic from './divider-epic.js';

const isDev = process.env.NODE_ENV !== 'production';
export const epics = [
  windowEpic,
  dividerEpic
];

export const types = createTypes([
  'panesMounted',
  'panesUpdated',
  'panesWillMount',
  'panesWillUnmount',
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
export const panesWillUnmount = createAction(types.panesWillUnmount);

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
  pressedDivider: null,
  nameToType: {}
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
export const nameToTypeSelector = state => getNS(state).nameToType;

function isPanesAction({ type } = {}, typeToName) {
  return !!typeToName[type];
}

function getDividerLeft(numOfPanes, index) {
  let dividerLeft = null;
  if (numOfPanes > 1 && numOfPanes !== index + 1) {
    dividerLeft = (100 / numOfPanes) * (index + 1);
  }
  return dividerLeft;
}

export default function createPanesAspects(typeToName) {
  if (isDev) {
    Object.keys(typeToName).forEach(actionType => {
      if (actionType === 'undefined') {
        throw new Error(
          `action type for ${typeToName[actionType]} is undefined`
        );
      }
    });
  }
  const nameToType = Object.keys(typeToName).reduce((map, type) => {
    map[typeToName[type]] = type;
    return map;
  }, {});
  function getInitialState() {
    return {
      ...initialState,
      nameToType
    };
  }

  function middleware() {
    return next => action => {
      let finalAction = action;
      if (isPanesAction(action, typeToName)) {
        finalAction = {
          ...action,
          meta: {
            ...action.meta,
            isPaneAction: true
          }
        };
      }
      return next(finalAction);
    };
  }

  const reducer = handleActions({
    [types.dividerClicked]: (state, { payload: name }) => ({
      ...state,
      pressedDivider: name
    }),
    [types.dividerMoved]: (state, { payload: clientX }) => {
      const { width, pressedDivider: paneName } = state;
      const dividerBuffer = (200 / width) * 100;
      const paneIndex = state.panes.indexOf(paneName);
      const currentPane = state.panesByName[paneName];
      const rightPane = state.panesByName[state.panes[paneIndex + 1]] || {};
      const leftPane = state.panesByName[state.panes[paneIndex - 1]] || {};
      const rightBound = (rightPane.dividerLeft || 100) - dividerBuffer;
      const leftBound = (leftPane.dividerLeft || 0) + dividerBuffer;
      const newPosition = clamp(
        (clientX / width) * 100,
        leftBound,
        rightBound
      );
      return {
        ...state,
        panesByName: {
          ...state.panesByName,
          [currentPane.name]: {
            ...currentPane,
            dividerLeft: newPosition
          }
        }
      };
    },
    [types.mouseReleased]: state => ({ ...state, pressedDivider: null }),
    [types.windowResized]: (state, { payload: { height, width } }) => ({
      ...state,
      height,
      width
    }),
    // used to clear bin buttons
    [types.panesWillUnmount]: state => ({
      ...state,
      panes: [],
      panesByName: {},
      pressedDivider: null
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
          const dividerLeft = getDividerLeft(numOfPanes, index);
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
  }, getInitialState());
  function metaReducer(state = getInitialState(), action) {
    if (action.meta && action.meta.isPaneAction) {
      const name = typeToName[action.type];
      const oldPane = state.panesByName[name];
      const pane = {
        ...oldPane,
        isHidden: !oldPane.isHidden
      };
      const panesByName = {
        ...state.panesByName,
        [name]: pane
      };
      const numOfPanes = state.panes.reduce((sum, name) => {
        return panesByName[name].isHidden ? sum : sum + 1;
      }, 0);
      let numOfHidden = 0;
      return {
        ...state,
        panesByName: state.panes.reduce(
          (panesByName, name, index) => {
            if (!panesByName[name].isHidden) {
              const dividerLeft = getDividerLeft(
                numOfPanes,
                index - numOfHidden
              );
              panesByName[name] = {
                ...panesByName[name],
                dividerLeft
              };
            } else {
              numOfHidden = numOfHidden + 1;
            }
            return panesByName;
          },
          panesByName
        )
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
