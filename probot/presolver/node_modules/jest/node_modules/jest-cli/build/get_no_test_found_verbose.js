'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNoTestFoundVerbose;

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
}

var _pluralize;

function _load_pluralize() {
  return _pluralize = _interopRequireDefault(require('./pluralize'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNoTestFoundVerbose(testRunData, globalConfig) {
  const individualResults = testRunData.map(testRun => {
    const stats = testRun.matches.stats || {};
    const config = testRun.context.config;
    const statsMessage = Object.keys(stats).map(key => {
      if (key === 'roots' && config.roots.length === 1) {
        return null;
      }
      const value = config[key];
      if (value) {
        const matches = (0, (_pluralize || _load_pluralize()).default)('match', stats[key], 'es');
        return `  ${key}: ${(_chalk || _load_chalk()).default.yellow(value)} - ${matches}`;
      }
      return null;
    }).filter(line => line).join('\n');

    return testRun.matches.total ? `In ${(_chalk || _load_chalk()).default.bold(config.rootDir)}\n` + `  ${(0, (_pluralize || _load_pluralize()).default)('file', testRun.matches.total || 0, 's')} checked.\n` + statsMessage : `No files found in ${config.rootDir}.\n` + `Make sure Jest's configuration does not exclude this directory.` + `\nTo set up Jest, make sure a package.json file exists.\n` + `Jest Documentation: ` + `facebook.github.io/jest/docs/configuration.html`;
  });
  let dataMessage;

  if (globalConfig.runTestsByPath) {
    dataMessage = `Files: ${globalConfig.nonFlagArgs.map(p => `"${p}"`).join(', ')}`;
  } else {
    dataMessage = `Pattern: ${(_chalk || _load_chalk()).default.yellow(globalConfig.testPathPattern)} - 0 matches`;
  }

  return (_chalk || _load_chalk()).default.bold('No tests found') + '\n' + individualResults.join('\n') + '\n' + dataMessage;
}