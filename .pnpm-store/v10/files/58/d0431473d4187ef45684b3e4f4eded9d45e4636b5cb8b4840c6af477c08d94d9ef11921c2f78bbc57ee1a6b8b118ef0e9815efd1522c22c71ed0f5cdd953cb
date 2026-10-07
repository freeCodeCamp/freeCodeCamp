"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.generateComponentChunkName = generateComponentChunkName;
var _kebabCase3 = _interopRequireDefault(require("lodash/kebabCase"));
var _memoizee = _interopRequireDefault(require("memoizee"));
var _murmurhash2 = require("gatsby-core-utils/murmurhash");
var _path = _interopRequireDefault(require("path"));
var _redux = require("../redux");
const kebabCase = (0, _memoizee.default)(_kebabCase3.default);
const pathRelative = (0, _memoizee.default)(_path.default.relative);
const murmurhash = (0, _memoizee.default)(_murmurhash2.murmurhash);

// unified routes adds support for files with [] and {},
// the problem with our generateComponentChunkName is that when you
// call kebabCase, is strips off characters like that. This means
// that when you have a app with this sort of setup, the resolutions fail
//
// src/pages/products/{id}.js (collection route)
// src/pages/products/[...id].js (should render when a non-matched id is passed in)
//
// without this function, what happens is that all visits to /products/__ resolve to only one
// of these because the componentChunkName ends up being duplicate. This function ensures that
// the {} and [] are kept in the componentChunkName. Also there are tests for this.
function replaceUnifiedRoutesKeys(kebabedName, filePath) {
  let newString = kebabedName;
  filePath.split(_path.default.sep).forEach(part => {
    if (part[0] === `[` || part[0] === `{`) {
      const match = /(\[(.*)\]|\{(.*)\})/.exec(part);
      newString = newString.replace(`-${match[2] || match[3]}-`, `-${match[0]}-`);
    }
  });
  return newString;
}
const chunkNameCache = new Map();
function generateComponentChunkName(componentPath, kind = `component`) {
  if (chunkNameCache.has(componentPath)) {
    return chunkNameCache.get(componentPath);
  } else {
    const {
      program
    } = _redux.store.getState();
    const directory = (program === null || program === void 0 ? void 0 : program.directory) || `/`;
    let name = pathRelative(directory, componentPath);
    if (name.includes(`__contentFilePath`)) {
      name = name.replace(/__contentFilePath=([^&]*)/, (_match, contentFilePath) => `__contentFilePath=${pathRelative(directory, contentFilePath)}`);
    }
    name = replaceUnifiedRoutesKeys(kebabCase(name), name);

    /**
     * File names should not exceed 255 characters
     * minus 12 for `component---`
     * minus 7 for `.js.map`
     * minus 20 for `-[hash].js`
     */
    const maxLength = 215;
    const shouldTruncate = name.length > maxLength;

    /**
     * To prevent long file name errors, we truncate the name to a maximum of 60 characters.
     */
    if (shouldTruncate) {
      const hash = murmurhash(name, 0);
      name = `${hash}-${name.substring(name.length - 60)}`;
    }
    const chunkName = `${kind}---${name}`;
    chunkNameCache.set(componentPath, chunkName);
    return chunkName;
  }
}
//# sourceMappingURL=js-chunk-names.js.map