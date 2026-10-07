"use strict";

exports.__esModule = true;
exports.updateActivity = exports.startActivity = exports.setStatus = exports.setActivityTotal = exports.setActivityStatusText = exports.setActivityErrored = exports.renderPageTree = exports.endActivity = exports.createPendingActivity = exports.createLog = exports.activityTick = void 0;
var _redux = require("redux");
var _ = require("./");
var actions = _interopRequireWildcard(require("./internal-actions"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const boundActions = (0, _redux.bindActionCreators)(actions, _.dispatch);
const createLog = boundActions.createLog;
exports.createLog = createLog;
const createPendingActivity = boundActions.createPendingActivity;
exports.createPendingActivity = createPendingActivity;
const setStatus = boundActions.setStatus;
exports.setStatus = setStatus;
const startActivity = boundActions.startActivity;
exports.startActivity = startActivity;
const endActivity = boundActions.endActivity;
exports.endActivity = endActivity;
const updateActivity = boundActions.updateActivity;
exports.updateActivity = updateActivity;
const setActivityErrored = boundActions.setActivityErrored;
exports.setActivityErrored = setActivityErrored;
const setActivityStatusText = boundActions.setActivityStatusText;
exports.setActivityStatusText = setActivityStatusText;
const setActivityTotal = boundActions.setActivityTotal;
exports.setActivityTotal = setActivityTotal;
const activityTick = boundActions.activityTick;
exports.activityTick = activityTick;
const renderPageTree = boundActions.renderPageTree;
exports.renderPageTree = renderPageTree;