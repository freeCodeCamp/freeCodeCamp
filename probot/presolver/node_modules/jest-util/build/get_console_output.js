'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path;

function _load_path() {
  return _path = _interopRequireDefault(require('path'));
}

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (root, verbose, buffer) => {
  const TITLE_INDENT = verbose ? '  ' : '    ';
  const CONSOLE_INDENT = TITLE_INDENT + '  ';

  return buffer.reduce((output, _ref) => {
    let type = _ref.type,
        message = _ref.message,
        origin = _ref.origin;

    origin = (_path || _load_path()).default.relative(root, origin);
    message = message.split(/\n/).map(line => CONSOLE_INDENT + line).join('\n');

    let typeMessage = 'console.' + type;
    if (type === 'warn') {
      message = (_chalk || _load_chalk()).default.yellow(message);
      typeMessage = (_chalk || _load_chalk()).default.yellow(typeMessage);
    } else if (type === 'error') {
      message = (_chalk || _load_chalk()).default.red(message);
      typeMessage = (_chalk || _load_chalk()).default.red(typeMessage);
    }

    return output + TITLE_INDENT + (_chalk || _load_chalk()).default.dim(typeMessage) + ' ' + (_chalk || _load_chalk()).default.dim(origin) + '\n' + message + '\n';
  }, '');
}; /**
    * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
    *
    * This source code is licensed under the MIT license found in the
    * LICENSE file in the root directory of this source tree.
    *
    * 
    */