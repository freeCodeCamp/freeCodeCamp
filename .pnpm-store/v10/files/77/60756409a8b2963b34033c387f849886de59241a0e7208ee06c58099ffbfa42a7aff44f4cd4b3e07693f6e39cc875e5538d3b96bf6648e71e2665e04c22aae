"use strict";

exports.__esModule = true;
exports.default = void 0;

var _justCurryIt = _interopRequireDefault(require("just-curry-it"));

var _createAction = _interopRequireDefault(require("./createAction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(type, payloadCreator) {
  return (0, _justCurryIt.default)((0, _createAction.default)(type, payloadCreator), payloadCreator.length);
};

exports.default = _default;