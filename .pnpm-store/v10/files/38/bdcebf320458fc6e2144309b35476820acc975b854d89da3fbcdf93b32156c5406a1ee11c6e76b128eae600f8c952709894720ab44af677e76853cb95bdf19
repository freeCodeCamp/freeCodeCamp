"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.readState = exports.loadPartialStateFromDisk = exports.emitter = exports.configureStore = void 0;
exports.replaceReducer = replaceReducer;
exports.store = exports.saveState = exports.savePartialStateToDisk = void 0;
var _pick2 = _interopRequireDefault(require("lodash/pick"));
var _redux = require("redux");
var _mett = require("../utils/mett");
var _reduxThunk = _interopRequireDefault(require("redux-thunk"));
var rawReducers = _interopRequireWildcard(require("./reducers"));
var _persist = require("./persist");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const persistedReduxKeys = [`nodes`, `typeOwners`, `statefulSourcePlugins`, `status`, `components`, `jobsV2`, `staticQueryComponents`, `webpackCompilationHash`, `pageDataStats`, `pages`, `staticQueriesByTemplate`, `pendingPageDataWrites`, `queries`, `html`, `slices`, `slicesByTemplate`];
const reducers = persistedReduxKeys.reduce((acc, key) => {
  const rawReducer = rawReducers[key];
  acc[key] = function (state, action) {
    if (action.type === `RESTORE_CACHE` && action.payload[key]) {
      return action.payload[key];
    } else {
      return rawReducer(state, action);
    }
  };
  return acc;
}, rawReducers);

// Create event emitter for actions
const emitter = (0, _mett.mett)();

// Read old node data from cache.
exports.emitter = emitter;
const readState = () => {
  try {
    const state = (0, _persist.readFromCache)();
    if (state.nodes) {
      // re-create nodesByType
      state.nodesByType = new Map();
      state.nodes.forEach(node => {
        const {
          type
        } = node.internal;
        if (!state.nodesByType.has(type)) {
          state.nodesByType.set(type, new Map());
        }
        // The `.has` and `.set` calls above make this safe
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        state.nodesByType.get(type).set(node.id, node);
      });
    }

    // jsonDataPaths was removed in the per-page-manifest
    // changes. Explicitly delete it here to cover case where user
    // runs gatsby the first time after upgrading.
    delete state[`jsonDataPaths`];
    return state;
  } catch (e) {
    return {};
  }
};
exports.readState = readState;
/**
 * Redux middleware handling array of actions
 */
const multi = ({
  dispatch
}) => next => action => Array.isArray(action) ? action.filter(Boolean).map(dispatch) : next(action);
const configureStore = initialState => {
  const store = (0, _redux.createStore)((0, _redux.combineReducers)({
    ...reducers
  }), initialState, (0, _redux.applyMiddleware)(_reduxThunk.default, multi));
  store.dispatch({
    type: `INIT`
  });
  return store;
};
exports.configureStore = configureStore;
const store = configureStore(process.env.GATSBY_WORKER_POOL_WORKER ? {} : readState());

/**
 * Allows overloading some reducers (e.g. when setting a custom datastore)
 */
exports.store = store;
function replaceReducer(customReducers) {
  store.replaceReducer((0, _redux.combineReducers)({
    ...reducers,
    ...customReducers
  }));
}

// Persist state.
const saveState = () => {
  if (process.env.GATSBY_DISABLE_CACHE_PERSISTENCE) {
    // do not persist cache if above env var is set.
    // this is to temporarily unblock builds that hit the v8.serialize related
    // Node.js buffer size exceeding kMaxLength fatal crashes
    return undefined;
  }
  const state = store.getState();
  const sliceOfStateToPersist = (0, _pick2.default)(state, persistedReduxKeys);
  return (0, _persist.writeToCache)(sliceOfStateToPersist);
};
exports.saveState = saveState;
const savePartialStateToDisk = (slices, optionalPrefix, transformState) => {
  const state = store.getState();
  const contents = (0, _pick2.default)(state, slices);
  const savedContents = transformState ? transformState(contents) : contents;
  return (0, _persist.writeToCache)(savedContents, slices, optionalPrefix);
};
exports.savePartialStateToDisk = savePartialStateToDisk;
const loadPartialStateFromDisk = (slices, optionalPrefix) => {
  try {
    return (0, _persist.readFromCache)(slices, optionalPrefix);
  } catch (e) {
    // ignore errors.
  }
  return {};
};
exports.loadPartialStateFromDisk = loadPartialStateFromDisk;
store.subscribe(() => {
  const lastAction = store.getState().lastAction;
  emitter.emit(lastAction.type, lastAction);
});
//# sourceMappingURL=index.js.map