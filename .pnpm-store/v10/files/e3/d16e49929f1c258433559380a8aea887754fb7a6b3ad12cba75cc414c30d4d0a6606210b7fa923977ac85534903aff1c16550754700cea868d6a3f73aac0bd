"use strict";

exports.__esModule = true;
exports.pluginPrefix = exports.ERROR_MAP = exports.CODES = void 0;
exports.prefixId = prefixId;
const CODES = {
  Generic: `12101`,
  CollectionGraphQL: `12102`,
  CollectionBuilder: `12103`,
  GeneratePath: `12104`,
  CollectionPath: `12105`,
  GraphQLResolver: `12106`,
  RequiredPath: `12107`,
  NonExistingPath: `12108`,
  FileSystemAdd: `12109`,
  FileSystemRemove: `12110`
};
exports.CODES = CODES;
const pluginPrefix = `gatsby-plugin-page-creator`;
exports.pluginPrefix = pluginPrefix;
function prefixId(id) {
  return `${pluginPrefix}_${id}`;
}

// TODO: Refactor to use contextual data instead of only context.sourceMessage
// once reporter.setErrorMap is guaranteed to be available
const ERROR_MAP = {
  [CODES.Generic]: {
    text: context => `PageCreator: ${context.sourceMessage}`,
    level: `ERROR`,
    type: `PLUGIN`
  },
  [CODES.CollectionGraphQL]: {
    text: context => `PageCreator: ${context.sourceMessage}`,
    level: `ERROR`,
    type: `PLUGIN`,
    category: `USER`
  },
  [CODES.CollectionBuilder]: {
    text: context => `PageCreator: ${context.sourceMessage}`,
    level: `ERROR`,
    type: `PLUGIN`,
    category: `USER`
  },
  [CODES.GeneratePath]: {
    text: context => `PageCreator: ${context.sourceMessage}`,
    level: `ERROR`,
    type: `PLUGIN`,
    category: `USER`,
    docsUrl: `https://www.gatsbyjs.com/docs/file-system-route-api/#syntax-collection-routes`
  },
  [CODES.CollectionPath]: {
    text: context => `PageCreator: ${context.sourceMessage}`,
    level: `ERROR`,
    type: `PLUGIN`,
    category: `USER`,
    docsUrl: `https://www.gatsbyjs.com/docs/file-system-route-api/#syntax-collection-routes`
  },
  [CODES.GraphQLResolver]: {
    text: context => `PageCreator: ${context.sourceMessage}`,
    level: `ERROR`,
    type: `PLUGIN`,
    category: `SYSTEM`
  },
  [CODES.RequiredPath]: {
    text: context => `PageCreator: ${context.sourceMessage}`,
    level: `ERROR`,
    type: `PLUGIN`,
    category: `USER`
  },
  [CODES.NonExistingPath]: {
    text: context => `PageCreator: ${context.sourceMessage}`,
    level: `ERROR`,
    type: `PLUGIN`,
    category: `USER`
  },
  [CODES.FileSystemAdd]: {
    text: context => `PageCreator: ${context.sourceMessage}`,
    level: `ERROR`,
    type: `PLUGIN`,
    category: `SYSTEM`
  },
  [CODES.FileSystemRemove]: {
    text: context => `PageCreator: ${context.sourceMessage}`,
    level: `ERROR`,
    type: `PLUGIN`,
    category: `SYSTEM`
  }
};
exports.ERROR_MAP = ERROR_MAP;