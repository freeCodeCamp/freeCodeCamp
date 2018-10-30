'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNoTestFound;

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
}

var _pluralize;

function _load_pluralize() {
  return _pluralize = _interopRequireDefault(require('./pluralize'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNoTestFound(testRunData, globalConfig) {
  const testFiles = testRunData.reduce((current, testRun) => current += testRun.matches.total, 0);
  let dataMessage;

  if (globalConfig.runTestsByPath) {
    dataMessage = `Files: ${globalConfig.nonFlagArgs.map(p => `"${p}"`).join(', ')}`;
  } else {
    dataMessage = `Pattern: ${(_chalk || _load_chalk()).default.yellow(globalConfig.testPathPattern)} - 0 matches`;
  }

  return (_chalk || _load_chalk()).default.bold('No tests found') + '\n' + `In ${(_chalk || _load_chalk()).default.bold(process.cwd())}` + '\n' + `  ${(0, (_pluralize || _load_pluralize()).default)('file', testFiles, 's')} checked across ${(0, (_pluralize || _load_pluralize()).default)('project', testRunData.length, 's')}. Run with \`--verbose\` for more details.` + '\n' + dataMessage;
}