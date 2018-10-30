'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readInitialCoverage = exports.programVisitor = exports.createInstrumenter = undefined;

var _instrumenter = require('./instrumenter');

var _instrumenter2 = _interopRequireDefault(_instrumenter);

var _visitor = require('./visitor');

var _visitor2 = _interopRequireDefault(_visitor);

var _readCoverage = require('./read-coverage');

var _readCoverage2 = _interopRequireDefault(_readCoverage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * createInstrumenter creates a new instrumenter with the
 * supplied options.
 * @param {Object} opts - instrumenter options. See the documentation
 * for the Instrumenter class.
 */
function createInstrumenter(opts) {
  return new _instrumenter2.default(opts);
}

exports.createInstrumenter = createInstrumenter;
exports.programVisitor = _visitor2.default;
exports.readInitialCoverage = _readCoverage2.default;