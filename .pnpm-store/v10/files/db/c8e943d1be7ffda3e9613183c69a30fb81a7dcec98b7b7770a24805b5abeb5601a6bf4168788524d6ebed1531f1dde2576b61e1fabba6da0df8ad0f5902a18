"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFile = exports.getRules = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _glob = _interopRequireDefault(require("glob"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow
const getRules = () => {
  const rulesFiles = _glob.default.sync(_path.default.resolve(__dirname, '../rules/*.js'));

  const rulesNames = rulesFiles.map(file => {
    return _path.default.basename(file, '.js');
  }).map(name => {
    return [name, _lodash.default.kebabCase(name)];
  });
  return rulesNames;
};

exports.getRules = getRules;

const isFile = filepath => {
  try {
    return _fs.default.statSync(filepath).isFile();
  } catch {
    return false;
  }
};

exports.isFile = isFile;