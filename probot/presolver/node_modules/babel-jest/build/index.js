'use strict';

var _crypto;

function _load_crypto() {
  return _crypto = _interopRequireDefault(require('crypto'));
}

var _fs;

function _load_fs() {
  return _fs = _interopRequireDefault(require('fs'));
}

var _path;

function _load_path() {
  return _path = _interopRequireDefault(require('path'));
}

var _babelPresetJest;

function _load_babelPresetJest() {
  return _babelPresetJest = _interopRequireDefault(require('babel-preset-jest'));
}

var _babelCore;

function _load_babelCore() {
  return _babelCore = require('babel-core');
}

var _babelPluginIstanbul;

function _load_babelPluginIstanbul() {
  return _babelPluginIstanbul = _interopRequireDefault(require('babel-plugin-istanbul'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const BABELRC_FILENAME = '.babelrc';
const BABELRC_JS_FILENAME = '.babelrc.js';
const BABEL_CONFIG_KEY = 'babel';
const PACKAGE_JSON = 'package.json';
const THIS_FILE = (_fs || _load_fs()).default.readFileSync(__filename);

const createTransformer = options => {
  const cache = Object.create(null);

  const getBabelRC = filename => {
    const paths = [];
    let directory = filename;
    while (directory !== (directory = (_path || _load_path()).default.dirname(directory))) {
      if (cache[directory]) {
        break;
      }

      paths.push(directory);
      const configFilePath = (_path || _load_path()).default.join(directory, BABELRC_FILENAME);
      if ((_fs || _load_fs()).default.existsSync(configFilePath)) {
        cache[directory] = (_fs || _load_fs()).default.readFileSync(configFilePath, 'utf8');
        break;
      }
      const configJsFilePath = (_path || _load_path()).default.join(directory, BABELRC_JS_FILENAME);
      if ((_fs || _load_fs()).default.existsSync(configJsFilePath)) {
        // $FlowFixMe
        cache[directory] = JSON.stringify(require(configJsFilePath));
        break;
      }
      const resolvedJsonFilePath = (_path || _load_path()).default.join(directory, PACKAGE_JSON);
      const packageJsonFilePath = resolvedJsonFilePath === PACKAGE_JSON ? (_path || _load_path()).default.resolve(directory, PACKAGE_JSON) : resolvedJsonFilePath;
      if ((_fs || _load_fs()).default.existsSync(packageJsonFilePath)) {
        // $FlowFixMe
        const packageJsonFileContents = require(packageJsonFilePath);
        if (packageJsonFileContents[BABEL_CONFIG_KEY]) {
          cache[directory] = JSON.stringify(packageJsonFileContents[BABEL_CONFIG_KEY]);
          break;
        }
      }
    }
    paths.forEach(directoryPath => cache[directoryPath] = cache[directory]);
    return cache[directory] || '';
  };

  options = Object.assign({}, options, {
    plugins: options && options.plugins || [],
    presets: (options && options.presets || []).concat([(_babelPresetJest || _load_babelPresetJest()).default]),
    sourceMaps: 'both'
  });
  delete options.cacheDirectory;
  delete options.filename;

  return {
    canInstrument: true,
    getCacheKey(fileData, filename, configString, _ref) {
      let instrument = _ref.instrument,
          rootDir = _ref.rootDir;

      return (_crypto || _load_crypto()).default.createHash('md5').update(THIS_FILE).update('\0', 'utf8').update(fileData).update('\0', 'utf8').update((_path || _load_path()).default.relative(rootDir, filename)).update('\0', 'utf8').update(configString).update('\0', 'utf8').update(getBabelRC(filename)).update('\0', 'utf8').update(instrument ? 'instrument' : '').digest('hex');
    },
    process(src, filename, config, transformOptions) {
      const altExts = config.moduleFileExtensions.map(extension => '.' + extension);
      if ((_babelCore || _load_babelCore()).util && !(_babelCore || _load_babelCore()).util.canCompile(filename, altExts)) {
        return src;
      }

      const theseOptions = Object.assign({ filename }, options);
      if (transformOptions && transformOptions.instrument) {
        theseOptions.auxiliaryCommentBefore = ' istanbul ignore next ';
        // Copied from jest-runtime transform.js
        theseOptions.plugins = theseOptions.plugins.concat([[(_babelPluginIstanbul || _load_babelPluginIstanbul()).default, {
          // files outside `cwd` will not be instrumented
          cwd: config.rootDir,
          exclude: []
        }]]);
      }

      // babel v7 might return null in the case when the file has been ignored.
      const transformResult = (0, (_babelCore || _load_babelCore()).transform)(src, theseOptions);

      if (!transformResult) {
        return src;
      }

      const shouldReturnCodeOnly = transformOptions == null || transformOptions.returnSourceString == null || transformOptions.returnSourceString === true;

      return shouldReturnCodeOnly ? transformResult.code : transformResult;
    }
  };
};

module.exports = createTransformer();
module.exports.createTransformer = createTransformer;