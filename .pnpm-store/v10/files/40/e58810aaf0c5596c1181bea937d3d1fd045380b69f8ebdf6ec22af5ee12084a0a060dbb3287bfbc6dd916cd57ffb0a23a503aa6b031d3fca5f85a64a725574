"use strict";

exports.__esModule = true;
exports.getMatchPath = getMatchPath;
// Does the following transformations:
//   `/foo/[id]/` => `/foo/:id`
//   `/foo/[...id]/` => `/foo/*id`
//   `/foo/[...]/` => `/foo/*`
function getMatchPath(srcPagesPath) {
  if (srcPagesPath.includes(`[`) === false) return undefined;
  const startRegex = /\[/g;
  const endRegex = /\]/g;
  const splatRegex = /\[\.\.\./g;
  return srcPagesPath.replace(splatRegex, `*`).replace(startRegex, `:`).replace(endRegex, ``).replace(/\/$/, ``);
}