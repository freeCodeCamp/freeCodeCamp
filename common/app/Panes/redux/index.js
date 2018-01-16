import _ from 'lodash';
import {
  composeReducers,
  createAction,
  createTypes,
  handleActions
} from 'berkeleys-redux-utils';

import * as utils from './utils.js';
import windowEpic from './window-epic.js';
import dividerEpic from './divider-epic.js';
import ns from '../ns.json';

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
  panes: [],
  panesByName: {},
  panesMap: {},
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
export const panesMapSelector = state => getNS(state).panesMap;

export default function createPanesAspects({ createPanesMap }) {
  createPanesMap = utils.normalizePanesMapCreator(createPanesMap);

  function middleware({ getState }) {
    return next => action => {
      let finalAction = action;
      const panesMap = panesMapSelector(getState());
      if (utils.isPanesAction(action, panesMap)) {
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
        utils.checkForTypeKeys(nextPanesMap);
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
          const {
            panes,
            panesByName,
            pressedDivider: paneName,
            width
          } = state;
          const dividerBuffer = (200 / width) * 100;
          const paneIndex =
            _.findIndex(state.panes, ({ name }) => paneName === name);
          const currentPane = panesByName[paneName];
          const rightPane = utils.getPane(panesByName, panes, paneIndex + 1);
          const leftPane = utils.getPane(panesByName, panes, paneIndex - 1);
          const rightBound = utils.getRightBound(rightPane, dividerBuffer);
          const leftBound = utils.getLeftBound(leftPane, dividerBuffer);
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
      defaultState
    ),
    function metaReducer(state = defaultState, action) {
      if (action.meta && action.meta.panesMap) {
        const panesMap = action.meta.panesMap;
        const panes = _.map(panesMap, (name, type) => ({ name, type }));
        const numOfPanes = Object.keys(panes).length;
        if (_.isEqual(state.panes, panes)) {
          return state;
        }
        return {
          ...state,
          panesMap,
          panes,
          panesByName: panes.reduce((panes, { name }, index) => {
            const dividerLeft = utils.getDividerLeft(numOfPanes, index);
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
                const dividerLeft = utils.getDividerLeft(
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
