"use strict";

exports.__esModule = true;
exports.getGatsbyVersion = getGatsbyVersion;
let GATSBY_VERSION;
function getGatsbyVersion() {
  if (!GATSBY_VERSION) {
    const gatsbyJSON = require(`gatsby/package.json`);
    GATSBY_VERSION = gatsbyJSON.version;
  }
  return GATSBY_VERSION;
}