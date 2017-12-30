import _ from 'lodash';
import invariant from 'invariant';
import {
  composeReducers,
  createAction,
  createTypes,
  handleActions
} from 'berkeleys-redux-utils';

import { types as challengeTypes } from '../../routes/Challenges/redux';
import ns from '../ns.json';

import windowEpic from './window-epic.js';
import dividerEpic from './divider-epic.js';

export const epics = [
  windowEpic,
  dividerEpic
];

export const types = createTypes([
  'panesMapUpdated',
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
  'hidePane',
  'updateNavHeight'
], ns);

export const panesMapUpdated = createAction(
  types.panesMapUpdated,
  null,
  (type, panesMap) => ({ trigger: type, panesMap })
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
export const hidePane = createAction(types.hidePane);
export const updateNavHeight = createAction(types.updateNavHeight);

const defaultState = {
  height: 600,
  width: 800,
  navHeight: 50,
  isMapPaneHidden: false,
  panes: [],
  panesByName: {},
  pressedDivider: null,
  panesMap: {}
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
export const panesMapSelector = state => getNS(state).panesMap;

function isPanesAction({ type } = {}, panesMap) {
  return !!panesMap[type];
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

function normalizePanesMapCreator(createPanesMap) {
  invariant(
    _.isFunction(createPanesMap),
    'createPanesMap should be a function but got %s',
    createPanesMap
  );
  const panesMap = createPanesMap({}, { type: '@@panes/test' });
  if (typeof panesMap === 'function') {
    return normalizePanesMapCreator(panesMap);
  }
  invariant(
    !panesMap,
    'panesMap test should return undefined or null on test action but got %s',
    panesMap
  );
  return createPanesMap;
}

export default function createPanesAspects({ createPanesMap }) {
  createPanesMap = normalizePanesMapCreator(createPanesMap);

  function middleware({ getState }) {
    return next => action => {
      let finalAction = action;
      const panesMap = panesMapSelector(getState());
      if (isPanesAction(action, panesMap)) {
        finalAction = {
          ...action,
          meta: {
            ...action.meta,
            isPaneAction: true,
            paneName: panesMap[action.type]
          }
        };
      }
      const result = next(finalAction);
      const nextPanesMap = createPanesMap(getState(), action);
      if (nextPanesMap) {
        checkForTypeKeys(nextPanesMap);
        next(panesMapUpdated(action.type, nextPanesMap));
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
        }),
        [challengeTypes.toggleMap]: state => ({
          ...state,
          isMapPaneHidden: !state.isMapPaneHidden
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
          panesMap,
          panes,
          panesByName: panes.reduce((panes, { name }, index) => {
            const dividerLeft = getDividerLeft(numOfPanes, index);
            panes[name] = {
              name,
              dividerLeft,
              isHidden: name === 'Map' ? state.isMapPaneHidden : false
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
