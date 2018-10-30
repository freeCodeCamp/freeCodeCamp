'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.worker = undefined;

let worker = exports.worker = (() => {
  var _ref = _asyncToGenerator(function* (data) {
    if (data.hasteImplModulePath && data.hasteImplModulePath !== hasteImplModulePath) {
      if (hasteImpl) {
        throw new Error('jest-haste-map: hasteImplModulePath changed');
      }
      hasteImplModulePath = data.hasteImplModulePath;
      // $FlowFixMe: dynamic require
      hasteImpl = require(hasteImplModulePath);
    }

    const filePath = data.filePath;
    let module;
    let id;
    let dependencies;

    if (filePath.endsWith(PACKAGE_JSON)) {
      const fileData = JSON.parse((_gracefulFs || _load_gracefulFs()).default.readFileSync(filePath, 'utf8'));

      if (fileData.name) {
        id = fileData.name;
        module = [filePath, (_constants || _load_constants()).default.PACKAGE];
      }

      return { dependencies, id, module };
    }

    if (!(_blacklist || _load_blacklist()).default.has(filePath.substr(filePath.lastIndexOf('.')))) {
      const content = (_gracefulFs || _load_gracefulFs()).default.readFileSync(filePath, 'utf8');

      if (hasteImpl) {
        id = hasteImpl.getHasteName(filePath);
      } else {
        const doc = (_jestDocblock || _load_jestDocblock()).parse((_jestDocblock || _load_jestDocblock()).extract(content));
        id = [].concat(doc.providesModule || doc.provides)[0];
      }

      dependencies = (0, (_extract_requires || _load_extract_requires()).default)(content);

      if (id) {
        module = [filePath, (_constants || _load_constants()).default.MODULE];
      }
    }

    return { dependencies, id, module };
  });

  return function worker(_x) {
    return _ref.apply(this, arguments);
  };
})();

var _path;

function _load_path() {
  return _path = _interopRequireDefault(require('path'));
}

var _jestDocblock;

function _load_jestDocblock() {
  return _jestDocblock = _interopRequireWildcard(require('jest-docblock'));
}

var _gracefulFs;

function _load_gracefulFs() {
  return _gracefulFs = _interopRequireDefault(require('graceful-fs'));
}

var _blacklist;

function _load_blacklist() {
  return _blacklist = _interopRequireDefault(require('./blacklist'));
}

var _constants;

function _load_constants() {
  return _constants = _interopRequireDefault(require('./constants'));
}

var _extract_requires;

function _load_extract_requires() {
  return _extract_requires = _interopRequireDefault(require('./lib/extract_requires'));
}

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

const PACKAGE_JSON = (_path || _load_path()).default.sep + 'package.json';

let hasteImpl = null;
let hasteImplModulePath = null;