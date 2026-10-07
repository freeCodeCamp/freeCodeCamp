/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

function base64SourceMap(source) {
  const base64 = Buffer.from(JSON.stringify(source.map()), 'utf8').toString(
    'base64'
  );
  return `data:application/json;charset=utf-8;base64,${base64}`;
}

function getSourceById(server, id) {
  const module = Array.from(server._stats.compilation.modules).find(
    (m) => server._stats.compilation.chunkGraph.getModuleId(m) == id,
  );
  return module.originalSource();
}

/*
 * Middleware responsible for retrieving a generated source
 * Receives a webpack internal url: "webpack-internal:///<module-id>"
 * Returns a generated source: "<source-text><sourceMappingURL><sourceURL>"
 *
 * Based on EvalSourceMapDevToolModuleTemplatePlugin.js
 */
module.exports = function createEvalSourceMapMiddleware(server) {
  return function handleWebpackInternalMiddleware(req, res, next) {
    if (req.url.startsWith('/__get-internal-source')) {
      const fileName = req.query.fileName;
      const id = fileName.match(/webpack-internal:\/\/\/(.+)/)[1];
      if (!id || !server._stats) {
        next();
      }

      const source = getSourceById(server, id);
      const sourceMapURL = `//# sourceMappingURL=${base64SourceMap(source)}`;
      const sourceURL = `//# sourceURL=webpack-internal:///${module.id}`;
      res.end(`${source.source()}\n${sourceMapURL}\n${sourceURL}`);
    } else {
      next();
    }
  };
};
