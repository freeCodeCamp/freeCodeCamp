"use strict";

exports.__esModule = true;
exports.createPath = createPath;
var _path = require("path");
var _path2 = require("gatsby-core-utils/path");
function createPath(filePath, withTrailingSlash = false, usePathBase = false) {
  const {
    dir,
    name,
    base
  } = (0, _path.parse)(filePath);
  // When a collection route also has client-only routes (e.g. {Product.name}/[...sku])
  // The "name" would be .. and "ext" .sku -- that's why "base" needs to be used instead
  // to get [...sku]. usePathBase is set to "true" in collection-route-builder and gatsbyPath
  const parsedBase = base === `index` ? `` : base;
  const parsedName = name === `index` ? `` : name;
  const postfix = withTrailingSlash ? `/` : ``;

  // Convert slashes since the Regex operates on forward slashes
  return (0, _path2.slash)(_path.posix.join(`/`, dir, usePathBase ? parsedBase : parsedName, postfix));
}