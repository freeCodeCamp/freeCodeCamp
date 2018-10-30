'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _path = require('path');

var _istanbulLibInstrument = require('istanbul-lib-instrument');

var _babelPluginSyntaxObjectRestSpread = require('babel-plugin-syntax-object-rest-spread');

var _babelPluginSyntaxObjectRestSpread2 = _interopRequireDefault(_babelPluginSyntaxObjectRestSpread);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testExclude = require('test-exclude');
var findUp = require('find-up');

function getRealpath(n) {
  try {
    return (0, _fs.realpathSync)(n) || n;
  } catch (e) {
    return n;
  }
}

function makeShouldSkip() {
  var exclude = void 0;
  return function shouldSkip(file, opts) {
    if (!exclude) {
      var cwd = getRealpath(process.env.NYC_CWD || process.cwd());
      var nycConfig = process.env.NYC_CONFIG ? JSON.parse(process.env.NYC_CONFIG) : {};

      var config = {};
      if (Object.keys(opts).length > 0) {
        // explicitly configuring options in babel
        // takes precedence.
        config = opts;
      } else if (nycConfig.include || nycConfig.exclude) {
        // nyc was configured in a parent process (keep these settings).
        config = {
          include: nycConfig.include,
          exclude: nycConfig.exclude
        };
      } else {
        // fallback to loading config from key in package.json.
        config = {
          configKey: 'nyc',
          configPath: (0, _path.dirname)(findUp.sync('package.json', { cwd: cwd }))
        };
      }

      exclude = testExclude(Object.assign({ cwd: cwd }, config));
    }

    return !exclude.shouldInstrument(file);
  };
}

function makeVisitor(_ref) {
  var t = _ref.types;

  var shouldSkip = makeShouldSkip();
  return {
    inherits: _babelPluginSyntaxObjectRestSpread2.default,
    visitor: {
      Program: {
        enter: function enter(path) {
          this.__dv__ = null;
          var realPath = getRealpath(this.file.opts.filename);
          if (shouldSkip(realPath, this.opts)) {
            return;
          }
          var inputSourceMap = this.opts.inputSourceMap;

          if (this.opts.useInlineSourceMaps !== false) {
            inputSourceMap = inputSourceMap || this.file.opts.inputSourceMap;
          }
          this.__dv__ = (0, _istanbulLibInstrument.programVisitor)(t, realPath, {
            coverageVariable: '__coverage__',
            inputSourceMap: inputSourceMap
          });
          this.__dv__.enter(path);
        },
        exit: function exit(path) {
          if (!this.__dv__) {
            return;
          }
          var result = this.__dv__.exit(path);
          if (this.opts.onCover) {
            this.opts.onCover(getRealpath(this.file.opts.filename), result.fileCoverage);
          }
        }
      }
    }
  };
}

exports.default = makeVisitor;