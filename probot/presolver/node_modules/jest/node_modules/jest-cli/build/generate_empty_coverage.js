'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (source, filename, globalConfig, config) {
  const coverageOptions = {
    collectCoverage: globalConfig.collectCoverage,
    collectCoverageFrom: globalConfig.collectCoverageFrom,
    collectCoverageOnlyFrom: globalConfig.collectCoverageOnlyFrom
  };
  if ((_jestRuntime || _load_jestRuntime()).default.shouldInstrument(filename, coverageOptions, config)) {
    // Transform file without instrumentation first, to make sure produced
    // source code is ES6 (no flowtypes etc.) and can be instrumented
    const transformResult = new (_jestRuntime || _load_jestRuntime()).default.ScriptTransformer(config).transformSource(filename, source, false);
    const instrumenter = (0, (_istanbulLibInstrument || _load_istanbulLibInstrument()).createInstrumenter)();
    instrumenter.instrumentSync(transformResult.code, filename);
    return {
      coverage: instrumenter.fileCoverage,
      sourceMapPath: transformResult.sourceMapPath
    };
  } else {
    return null;
  }
};

var _istanbulLibInstrument;

function _load_istanbulLibInstrument() {
  return _istanbulLibInstrument = require('istanbul-lib-instrument');
}

var _jestRuntime;

function _load_jestRuntime() {
  return _jestRuntime = _interopRequireDefault(require('jest-runtime'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }