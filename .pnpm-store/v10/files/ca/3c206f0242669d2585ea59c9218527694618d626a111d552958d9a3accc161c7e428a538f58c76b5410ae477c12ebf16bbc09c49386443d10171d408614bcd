"use strict";

exports.__esModule = true;
exports.default = handleActions;

var _reduceReducers = _interopRequireDefault(require("reduce-reducers"));

var _invariant = _interopRequireDefault(require("invariant"));

var _isPlainObject = _interopRequireDefault(require("./utils/isPlainObject"));

var _isMap = _interopRequireDefault(require("./utils/isMap"));

var _ownKeys = _interopRequireDefault(require("./utils/ownKeys"));

var _flattenReducerMap = _interopRequireDefault(require("./utils/flattenReducerMap"));

var _handleAction = _interopRequireDefault(require("./handleAction"));

var _get = _interopRequireDefault(require("./utils/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleActions(handlers, defaultState, options) {
  if (options === void 0) {
    options = {};
  }

  (0, _invariant.default)((0, _isPlainObject.default)(handlers) || (0, _isMap.default)(handlers), 'Expected handlers to be a plain object.');
  var flattenedReducerMap = (0, _flattenReducerMap.default)(handlers, options);
  var reducers = (0, _ownKeys.default)(flattenedReducerMap).map(function (type) {
    return (0, _handleAction.default)(type, (0, _get.default)(type, flattenedReducerMap), defaultState);
  });

  var reducer = _reduceReducers.default.apply(void 0, reducers.concat([defaultState]));

  return function (state, action) {
    if (state === void 0) {
      state = defaultState;
    }

    return reducer(state, action);
  };
}