"use strict";

exports.__esModule = true;
exports.pluginPrefix = exports.ERROR_MAP = exports.CODES = void 0;
exports.prefixId = prefixId;
const CODES = {
  Generic: `10000`,
  MissingResource: `10001`
};
exports.CODES = CODES;
const pluginPrefix = `gatsby-source-filesystem`;
exports.pluginPrefix = pluginPrefix;
function prefixId(id) {
  return `${pluginPrefix}_${id}`;
}

// TODO: Refactor to use contextual data instead of only context.sourceMessage
// once reporter.setErrorMap is guaranteed to be available
const ERROR_MAP = {
  [CODES.Generic]: {
    text: context => context.sourceMessage,
    level: `ERROR`,
    type: `PLUGIN`
  },
  [CODES.MissingResource]: {
    text: context => context.sourceMessage,
    level: `ERROR`,
    type: `PLUGIN`,
    category: `USER`
  }
};
exports.ERROR_MAP = ERROR_MAP;