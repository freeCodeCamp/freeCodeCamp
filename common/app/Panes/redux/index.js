import _ from 'lodash';
import invariant from 'invariant';
import { isLocationAction } from 'redux-first-router';
import {
  addNS,
  composeReducers,
  createAction,
  createTypes,
  handleActions
} from 'berkeleys-redux-utils';

import ns from '../ns.json';

import windowEpic from './window-epic.js';
import dividerEpic from './divider-epic.js';
import { challengeMetaSelector } from '../../routes/Challenges/redux';
import { types as app } from '../../redux';

export const epics = [
  windowEpic,
  dividerEpic
];

export const types = createTypes([
  'panesUpdatedThroughFetch',
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

export const panesUpdatedThroughFetch = createAction(
  types.panesUpdatedThroughFetch,
  null,
  panesMap => ({ panesMap })
);
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

const defaultState = {
  height: 600,
  width: 800,
  navHeight: 50,
  panes: [],
  panesByName: {},
  pressedDivider: null,
  viewMap: {},
  typeToName: {}
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
export const viewMapSelector = state => getNS(state).viewMap;
export const typeToNameSelector = state => getNS(state).typeToName;

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

function checkForTypeKeys(panesMap) {
  _.forEach(panesMap, (_, actionType) => {
    invariant(
      actionType !== 'undefined',
      `action type for ${panesMap[actionType]} is undefined`
    );
  });
  return panesMap;
}

const getPaneName = (panes, index) => (panes[index] || {}).name || '';

export const createPaneMap = (ns, mapStateToPanes) => addNS(ns, state =>
  checkForTypeKeys(mapStateToPanes(state)));

export const createTypeToName = panesMap =>
  _.reduce(panesMap, (acc, name, type) => {
    acc[type] = name;
    return acc;
  }, {});

export default function createPanesAspects(config) {
  checkForTypeKeys(config);

  function middleware({ getState }) {
    let previousMap;
    // we cache the previous map so that we can attach it to the fetchChallenge
    // show panes on challenge route
    // select panes map on viewType (this is state dependent)
    // filter panes out on state
    return next => action => {
      let finalAction = { ...action };
      if (isLocationAction(action)) {
        // location matches a panes route
        if (config[action.type]) {
          const viewMap = previousMap = config[action.type];
          const meta = challengeMetaSelector(getState());
          const mapStateToPanes = viewMap[meta.viewType] || _.stubObject;
          const panesMap = mapStateToPanes(getState());
          finalAction.meta.panesMap = panesMap;
          finalAction.meta.typeToName = createTypeToName(panesMap);
        } else {
          finalAction.meta.panesMap = {};
          finalAction.meta.typeToName = {};
        }
      }
      const typeToName = typeToNameSelector(getState());
      if (isPanesAction(action, typeToName)) {
        finalAction = {
          ...action,
          meta: {
            ...action.meta,
            isPaneAction: true,
            paneName: typeToName[action.type]
          }
        };
      }
      const result = next(finalAction);
      if (action.type === app.fetchChallenge.complete) {
        const meta = challengeMetaSelector(getState());
        const mapStateToPanes = previousMap[meta.viewType] || _.stubObject;
        const panesMap = mapStateToPanes(getState());
        next(panesUpdatedThroughFetch(panesMap));
      }
      return result;
    };
  }

  const reducer = composeReducers(
    ns,
    handleActions(
      () => ({
        [types.dividerClicked]: (state, { payload: name }) => ({
          ...state,
          pressedDivider: name
        }),
        [types.dividerMoved]: (state, { payload: clientX }) => {
          const { width, pressedDivider: paneName } = state;
          const dividerBuffer = (200 / width) * 100;
          const paneIndex =
            _.findIndex(state.panes, ({ name }) => paneName === name);
          const currentPane = state.panesByName[paneName];
          const rightPane =
            state.panesByName[getPaneName(state.panes, paneIndex + 1)] || {};
          const leftPane =
            state.panesByName[getPaneName(state.panes, paneIndex - 1)] || {};
          const rightBound = (rightPane.dividerLeft || 100) - dividerBuffer;
          const leftBound = (leftPane.dividerLeft || 0) + dividerBuffer;
          const newPosition = _.clamp(
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
        [types.updateNavHeight]: (state, { payload: navHeight }) => ({
          ...state,
          navHeight
        })
      }),
      defaultState,
    ),
    function metaReducer(state = defaultState, action) {
      if (action.meta && action.meta.panesMap) {
        const panesMap = action.meta.panesMap;
        const panes = _.map(panesMap, (name, type) => ({ name, type }));
        const numOfPanes = Object.keys(panes).length;
        return {
          ...state,
          panes,
          panesByName: panes.reduce((panes, { name }, index) => {
            const dividerLeft = getDividerLeft(numOfPanes, index);
            panes[name] = {
              name,
              dividerLeft,
              isHidden: false
            };
            return panes;
          }, {})
        };
      }
      if (action.meta && action.meta.isPaneAction) {
        const name = action.meta.paneName;
        const oldPane = state.panesByName[name];
        const pane = {
          ...oldPane,
          isHidden: !oldPane.isHidden
        };
        const panesByName = {
          ...state.panesByName,
          [name]: pane
        };
        const numOfPanes = state.panes.reduce((sum, { name }) => {
          return panesByName[name].isHidden ? sum : sum + 1;
        }, 0);
        let numOfHidden = 0;
        return {
          ...state,
          panesByName: state.panes.reduce(
            (panesByName, { name }, index) => {
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
  );

  return {
    reducer,
    middleware
  };
}
