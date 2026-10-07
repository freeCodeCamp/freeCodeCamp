"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.statusReducer = void 0;
var _merge2 = _interopRequireDefault(require("lodash/merge"));
var _isObject2 = _interopRequireDefault(require("lodash/isObject"));
var _gatsbyCoreUtils = require("gatsby-core-utils");
const defaultState = {
  PLUGINS_HASH: ``,
  LAST_NODE_COUNTER: 0,
  plugins: {},
  cdnObfuscatedPrefix: ``
};
const statusReducer = (state = defaultState, action) => {
  var _state$cdnObfuscatedP, _action$plugin;
  switch (action.type) {
    case `DELETE_CACHE`:
      return {
        ...defaultState,
        cdnObfuscatedPrefix: (_state$cdnObfuscatedP = state.cdnObfuscatedPrefix) !== null && _state$cdnObfuscatedP !== void 0 ? _state$cdnObfuscatedP : ``
      };
    case `INIT`:
      {
        if (!state.cdnObfuscatedPrefix) {
          state.cdnObfuscatedPrefix = _gatsbyCoreUtils.uuid.v4();
        }
        return state;
      }
    case `UPDATE_PLUGINS_HASH`:
      return {
        ...state,
        PLUGINS_HASH: action.payload
      };
    case `SET_PLUGIN_STATUS`:
      if (!action.plugin || !((_action$plugin = action.plugin) !== null && _action$plugin !== void 0 && _action$plugin.name)) {
        throw new Error(`You can't set plugin status without a plugin`);
      }
      if (!(0, _isObject2.default)(action.payload)) {
        throw new Error(`You must pass an object into setPluginStatus. What was passed in was ${JSON.stringify(action.payload, null, 4)}`);
      }
      return {
        ...state,
        plugins: {
          ...state.plugins,
          [action.plugin.name]: (0, _merge2.default)({}, state.plugins[action.plugin.name], action.payload)
        }
      };
    case `CREATE_NODE`:
      state.LAST_NODE_COUNTER = action.payload.internal.counter;
      return state;
    default:
      return state;
  }
};
exports.statusReducer = statusReducer;
//# sourceMappingURL=status.js.map