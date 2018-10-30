'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNoTestsFoundMessage;

var _get_no_test_found;

function _load_get_no_test_found() {
  return _get_no_test_found = _interopRequireDefault(require('./get_no_test_found'));
}

var _get_no_test_found_related_to_changed_files;

function _load_get_no_test_found_related_to_changed_files() {
  return _get_no_test_found_related_to_changed_files = _interopRequireDefault(require('./get_no_test_found_related_to_changed_files'));
}

var _get_no_test_found_verbose;

function _load_get_no_test_found_verbose() {
  return _get_no_test_found_verbose = _interopRequireDefault(require('./get_no_test_found_verbose'));
}

var _get_no_test_found_failed;

function _load_get_no_test_found_failed() {
  return _get_no_test_found_failed = _interopRequireDefault(require('./get_no_test_found_failed'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNoTestsFoundMessage(testRunData, globalConfig) {
  if (globalConfig.onlyFailures) {
    return (0, (_get_no_test_found_failed || _load_get_no_test_found_failed()).default)();
  }
  if (globalConfig.onlyChanged) {
    return (0, (_get_no_test_found_related_to_changed_files || _load_get_no_test_found_related_to_changed_files()).default)(globalConfig);
  }
  return testRunData.length === 1 || globalConfig.verbose ? (0, (_get_no_test_found_verbose || _load_get_no_test_found_verbose()).default)(testRunData, globalConfig) : (0, (_get_no_test_found || _load_get_no_test_found()).default)(testRunData, globalConfig);
}