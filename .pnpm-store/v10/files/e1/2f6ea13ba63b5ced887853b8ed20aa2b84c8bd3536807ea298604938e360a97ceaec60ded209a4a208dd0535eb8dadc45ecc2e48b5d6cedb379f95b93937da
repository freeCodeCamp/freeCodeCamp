/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

const launchEditor = require('./launchEditor');
const launchEditorEndpoint = require('./launchEditorEndpoint');

module.exports = function createLaunchEditorMiddleware() {
  return function launchEditorMiddleware(req, res, next) {
    if (req.url.startsWith(launchEditorEndpoint)) {
      const lineNumber = parseInt(req.query.lineNumber, 10) || 1;
      const colNumber = parseInt(req.query.colNumber, 10) || 1;
      launchEditor(req.query.fileName, lineNumber, colNumber);
      res.end();
    } else {
      next();
    }
  };
};
