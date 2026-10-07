/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var ASTCache = require('./ASTCache');

var fs = require('fs');

var path = require('path');

var _require = require('graphql'),
    parse = _require.parse,
    Source = _require.Source;

function parseFile(baseDir, file) {
  var text = fs.readFileSync(path.join(baseDir, file.relPath), 'utf8');
  return parse(new Source(text, file.relPath), {
    experimentalFragmentVariables: true
  });
}

function getParser(baseDir) {
  return new ASTCache({
    baseDir: baseDir,
    parse: parseFile
  });
}

module.exports = {
  parseFile: parseFile,
  getParser: getParser
};