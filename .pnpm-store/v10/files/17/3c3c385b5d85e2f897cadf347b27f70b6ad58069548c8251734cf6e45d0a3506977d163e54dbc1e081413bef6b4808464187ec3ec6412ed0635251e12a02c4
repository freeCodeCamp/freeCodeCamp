'use strict';

const crypto = require('crypto');
const moduleRequire = require('eslint-module-utils/module-require').default;
const hashObject = require('eslint-module-utils/hash').hashObject;

const cache = new Map();

// must match ESLint default options or we'll miss the cache every time
const parserOptions = {
  loc: true,
  range: true,
  raw: true,
  tokens: true,
  comment: true,
  attachComment: true,
};

exports.parse = function parse(content, options) {
  options = { ...options, ...parserOptions };

  if (!options.filePath) {
    throw new Error('no file path provided!');
  }

  const keyHash = crypto.createHash('sha256');
  keyHash.update(content);
  hashObject(options, keyHash);

  const key = keyHash.digest('hex');

  let ast = cache.get(key);
  if (ast != null) { return ast; }

  const realParser = moduleRequire(options.parser);

  ast = realParser.parse(content, options);
  cache.set(key, ast);

  return ast;
};
