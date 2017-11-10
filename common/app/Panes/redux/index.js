import { isLocationAction } from 'redux-first-router';
import _ from 'lodash';
import {
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

const isDev = process.env.NODE_ENV !== 'production';
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
  panesView => ({ panesView })
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

function forEachConfig(config, cb) {
  return _.forEach(config, (val, key) => {
    // val is a sub config
    if (_.isObject(val) && !val.name) {
      return forEachConfig(val, cb);
    }
    return cb(config, key);
  });
}

function reduceConfig(config, cb, acc = {}) {
  return _.reduce(config, (acc, val, key) => {
    if (_.isObject(val) && !val.name) {
      return reduceConfig(val, cb, acc);
    }
    return cb(acc, val, key);
  }, acc);
}

const getPaneName = (panes, index) => (panes[index] || {}).name || '';

export const createPaneMap = (ns, getPanesMap) => {
  const panesMap = _.reduce(getPanesMap(), (map, val, key) => {
    let paneConfig = val;
    if (typeof val === 'string') {
      paneConfig = {
        name: val
      };
    }
    map[key] = paneConfig;
    return map;
  }, {});
  return Object.defineProperty(panesMap, 'toString', { value: () => ns });
};


export default function createPanesAspects(config) {
  if (isDev) {
    forEachConfig(config, (typeToName, actionType) => {
      if (actionType === 'undefined') {
        throw new Error(
          `action type for ${typeToName[actionType]} is undefined`
        );
      }
    });
  }
  const typeToName = reduceConfig(config, (acc, val, type) => {
    const name = _.isObject(val) ? val.name : val;
    acc[type] = name;
    return acc;
  });

  function middleware({ getState }) {
    const filterPanes = panesMap => _.reduce(panesMap, (panes, pane, type) => {
      if (typeof pane.filter !== 'function' || pane.filter(getState())) {
        panes[type] = pane;
      }
      return panes;
    }, {});
    // we cache the previous map so that we can attach it to the fetchChallenge
    let previousMap;
    // show panes on challenge route
    // select panes map on viewType (this is state dependent)
    // filter panes out on state
    return next => action => {
      let finalAction = action;
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
      if (isLocationAction(action)) {
        // location matches a panes route
        if (config[action.type]) {
          const paneMap = previousMap = config[action.type];
          const meta = challengeMetaSelector(getState());
          const viewMap = paneMap[meta.viewType] || {};
          next(panesUpdatedThroughFetch(filterPanes(viewMap)));
        } else {
          next(panesUpdatedThroughFetch({}));
        }
      }
      if (action.type === app.fetchChallenge.complete) {
        const meta = challengeMetaSelector(getState());
        const viewMap = previousMap[meta.viewType] || {};
        next(panesUpdatedThroughFetch(filterPanes(viewMap)));
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
      initialState,
    ),
    function metaReducer(state = initialState, action) {
      if (action.meta && action.meta.panesView) {
        const panesView = action.meta.panesView;
        const panes = _.map(panesView, ({ name }, type) => ({ name, type }));
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
