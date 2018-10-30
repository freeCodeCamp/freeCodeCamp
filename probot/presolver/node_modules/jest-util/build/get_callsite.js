'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gracefulFs;

function _load_gracefulFs() {
  return _gracefulFs = _interopRequireDefault(require('graceful-fs'));
}

var _callsites;

function _load_callsites() {
  return _callsites = _interopRequireDefault(require('callsites'));
}

var _sourceMap;

function _load_sourceMap() {
  return _sourceMap = require('source-map');
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copied from https://github.com/rexxars/sourcemap-decorate-callsites/blob/5b9735a156964973a75dc62fd2c7f0c1975458e8/lib/index.js#L113-L158
/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const addSourceMapConsumer = (callsite, consumer) => {
  const getLineNumber = callsite.getLineNumber;
  const getColumnNumber = callsite.getColumnNumber;
  let position = null;

  function getPosition() {
    if (!position) {
      position = consumer.originalPositionFor({
        column: getColumnNumber.call(callsite),
        line: getLineNumber.call(callsite)
      });
    }

    return position;
  }

  Object.defineProperties(callsite, {
    getColumnNumber: {
      value() {
        return getPosition().column || getColumnNumber.call(callsite);
      },
      writable: false
    },
    getLineNumber: {
      value() {
        return getPosition().line || getLineNumber.call(callsite);
      },
      writable: false
    }
  });
};

exports.default = (level, sourceMaps) => {
  const levelAfterThisCall = level + 1;
  const stack = (0, (_callsites || _load_callsites()).default)()[levelAfterThisCall];
  const sourceMapFileName = sourceMaps && sourceMaps[stack.getFileName()];

  if (sourceMapFileName) {
    try {
      const sourceMap = (_gracefulFs || _load_gracefulFs()).default.readFileSync(sourceMapFileName, 'utf8');
      addSourceMapConsumer(stack, new (_sourceMap || _load_sourceMap()).SourceMapConsumer(sourceMap));
    } catch (e) {
      // ignore
    }
  }

  return stack;
};