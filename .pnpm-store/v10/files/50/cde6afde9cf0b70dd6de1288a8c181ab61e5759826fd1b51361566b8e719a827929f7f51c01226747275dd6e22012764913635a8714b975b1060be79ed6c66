"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.createPages = createPages;
exports.createPagesStatefully = createPagesStatefully;
exports.onPluginInit = onPluginInit;
exports.setFieldsOnGraphQLNodeType = setFieldsOnGraphQLNodeType;
var _camelCase2 = _interopRequireDefault(require("lodash/camelCase"));
var _globby = _interopRequireDefault(require("globby"));
var _path = _interopRequireDefault(require("path"));
var _fsExistsCached = require("fs-exists-cached");
var _graphql = require("gatsby/graphql");
var _gatsbyPageUtils = require("gatsby-page-utils");
var _createPageWrapper = require("./create-page-wrapper");
var _collectionExtractQueryString = require("./collection-extract-query-string");
var _derivePath = require("./derive-path");
var _validatePathQuery = require("./validate-path-query");
var _errorUtils = require("./error-utils");
var _createPagesFromChangedNodes = require("./create-pages-from-changed-nodes");
var _trackedNodesState = require("./tracked-nodes-state");
var _pathUtils = require("./path-utils");
var _getCollectionRouteParams = require("./get-collection-route-params");
var _extractQuery = require("./extract-query");
var _matchPath = require("gatsby-core-utils/match-path");
const knownCollections = new Map();
function createPages(_, pluginOptions) {
  const instance = (0, _trackedNodesState.getPluginInstance)(pluginOptions);
  if (instance.syncPages) {
    instance.syncPages();
  }
}

// Path creator.
// Auto-create pages.
// algorithm is glob /pages directory for js/jsx/cjsx files *not*
// underscored. Then create url w/ our path algorithm *unless* user
// takes control of that page component in gatsby-node.
async function createPagesStatefully({
  store,
  actions,
  reporter,
  graphql,
  emitter
}, pluginOptions, doneCb) {
  const {
    path: pagesPath,
    pathCheck = true,
    ignore,
    slugify: slugifyOptions
  } = pluginOptions;
  try {
    const {
      deletePage
    } = actions;
    const {
      program,
      config
    } = store.getState();
    const {
      trailingSlash = `always`
    } = config;
    const exts = program.extensions.map(e => `${e.slice(1)}`).join(`,`);
    if (!pagesPath) {
      reporter.panic({
        id: (0, _errorUtils.prefixId)(_errorUtils.CODES.RequiredPath),
        context: {
          sourceMessage: `"path" is a required option for gatsby-plugin-page-creator

See docs here - https://www.gatsbyjs.com/plugins/gatsby-plugin-page-creator/`
        }
      });
    }

    // Validate that the path exists.
    if (pathCheck && !(0, _fsExistsCached.sync)(pagesPath)) {
      reporter.panic({
        id: (0, _errorUtils.prefixId)(_errorUtils.CODES.NonExistingPath),
        context: {
          sourceMessage: `The path passed to gatsby-plugin-page-creator does not exist on your file system:

${pagesPath}

Please pick a path to an existing directory.`
        }
      });
    }
    const pagesDirectory = _path.default.resolve(process.cwd(), pagesPath);
    const pagesGlob = `**/*.{${exts}}`;

    // Get initial list of files.
    const files = await (0, _globby.default)(pagesGlob, {
      cwd: pagesPath
    });
    files.forEach(file => {
      (0, _createPageWrapper.createPage)(file, pagesDirectory, actions, graphql, reporter, trailingSlash, pagesPath, ignore, slugifyOptions);
    });
    const knownFiles = new Set(files);
    const pluginInstance = (0, _trackedNodesState.getPluginInstance)({
      path: pagesPath
    });
    pluginInstance.syncPages = function syncPages() {
      (0, _createPagesFromChangedNodes.createPagesFromChangedNodes)({
        actions,
        pluginInstance
      }, pluginOptions);
    };
    pluginInstance.resolveFields = async function resolveFields(nodeIds, absolutePath) {
      const queryString = (0, _collectionExtractQueryString.collectionExtractQueryString)(absolutePath, reporter, nodeIds);
      if (!queryString) {
        return [];
      }
      const {
        data
      } = await graphql(queryString);
      if (!data) {
        return [];
      }
      const nodes = Object.values(Object.values(data)[0])[0];
      return nodes;
    };
    pluginInstance.getPathFromAResolvedNode = async function getPathFromAResolvedNode({
      node,
      absolutePath
    }) {
      const filePath = _path.default.relative(pluginOptions.path, absolutePath);

      // URL path for the component and node
      const {
        derivedPath
      } = await (0, _derivePath.derivePath)(filePath, node, reporter, slugifyOptions);
      const hasTrailingSlash = derivedPath.endsWith(`/`);
      const path = (0, _gatsbyPageUtils.createPath)(derivedPath, hasTrailingSlash, true);
      const modifiedPath = (0, _gatsbyPageUtils.applyTrailingSlashOption)(path, trailingSlash);
      return modifiedPath;
    };
    pluginInstance.createAPageFromNode = async function createAPageFromNode({
      node,
      absolutePath
    }) {
      var _node$internal;
      const filePath = _path.default.relative(pluginOptions.path, absolutePath);
      const contentFilePath = (_node$internal = node.internal) === null || _node$internal === void 0 ? void 0 : _node$internal.contentFilePath;
      // URL path for the component and node
      const {
        derivedPath,
        errors
      } = await (0, _derivePath.derivePath)(filePath, node, reporter, slugifyOptions);
      const hasTrailingSlash = derivedPath.endsWith(`/`);
      const path = (0, _gatsbyPageUtils.createPath)(derivedPath, hasTrailingSlash, true);
      const modifiedPath = (0, _gatsbyPageUtils.applyTrailingSlashOption)(path, trailingSlash);

      // We've already created a page with this path
      if (this.knownPagePaths.has(modifiedPath)) {
        return undefined;
      }
      this.knownPagePaths.add(modifiedPath);
      // Params is supplied to the FE component on props.params
      const params = (0, _getCollectionRouteParams.getCollectionRouteParams)((0, _gatsbyPageUtils.createPath)(filePath), path);
      // nodeParams is fed to the graphql query for the component
      const nodeParams = (0, _extractQuery.reverseLookupParams)(node, absolutePath);
      // matchPath is an optional value. It's used if someone does a path like `{foo}/[bar].js`
      const matchPath = (0, _matchPath.getMatchPath)(path);
      const componentPath = contentFilePath ? `${absolutePath}?__contentFilePath=${contentFilePath}` : absolutePath;
      actions.createPage({
        path: modifiedPath,
        matchPath,
        component: componentPath,
        context: {
          ...nodeParams,
          __params: params
        }
      });
      const nodeId = node.id;
      if (nodeId) {
        let templatesToPagePath = this.nodeIdToPagePath.get(nodeId);
        if (!templatesToPagePath) {
          templatesToPagePath = new Map();
          this.nodeIdToPagePath.set(nodeId, templatesToPagePath);
        }
        templatesToPagePath.set(componentPath, modifiedPath);
      }
      return {
        errors,
        path
      };
    };
    pluginInstance.deletePagesCreateFromNode = function deletePagesCreateFromNode(id) {
      const templatesToPagePaths = this.nodeIdToPagePath.get(id);
      if (templatesToPagePaths) {
        for (const [componentPath, pagePath] of templatesToPagePaths.entries()) {
          actions.deletePage({
            path: pagePath,
            component: componentPath
          });
          this.knownPagePaths.delete(pagePath);
        }
        this.nodeIdToPagePath.delete(id);
      }
    };
    (0, _gatsbyPageUtils.watchDirectory)(pagesPath, pagesGlob, addedPath => {
      try {
        if (!knownFiles.has(addedPath)) {
          (0, _createPageWrapper.createPage)(addedPath, pagesDirectory, actions, graphql, reporter, trailingSlash, pagesPath, ignore, slugifyOptions);
          knownFiles.add(addedPath);
        }
      } catch (e) {
        reporter.panic({
          id: (0, _errorUtils.prefixId)(_errorUtils.CODES.FileSystemAdd),
          context: {
            sourceMessage: e.message
          }
        });
      }
    }, removedPath => {
      // Delete the page for the now deleted component.
      try {
        const componentPath = _path.default.join(pagesDirectory, removedPath);
        store.getState().pages.forEach(page => {
          if (page.component === componentPath) {
            deletePage({
              path: page.path,
              component: componentPath
            });
          }
        });
        knownFiles.delete(removedPath);
        pluginInstance.templateFileRemoved(componentPath);
      } catch (e) {
        reporter.panic({
          id: (0, _errorUtils.prefixId)(_errorUtils.CODES.FileSystemRemove),
          context: {
            sourceMessage: e.message
          }
        });
      }
    }).then(() => doneCb(null, null));
    emitter.on(`DELETE_NODE`, action => {
      var _action$payload;
      if ((_action$payload = action.payload) !== null && _action$payload !== void 0 && _action$payload.id) {
        var _action$payload2, _action$payload2$inte;
        if (pluginInstance.trackedTypes.has((_action$payload2 = action.payload) === null || _action$payload2 === void 0 ? void 0 : (_action$payload2$inte = _action$payload2.internal) === null || _action$payload2$inte === void 0 ? void 0 : _action$payload2$inte.type)) {
          pluginInstance.changedNodesSinceLastPageCreation.deleted.set(action.payload.id, {
            id: action.payload.id,
            contentDigest: action.payload.internal.contentDigest
          });
        }
      }
    });
    emitter.on(`CREATE_NODE`, action => {
      var _action$payload3, _action$payload3$inte;
      if (pluginInstance.trackedTypes.has((_action$payload3 = action.payload) === null || _action$payload3 === void 0 ? void 0 : (_action$payload3$inte = _action$payload3.internal) === null || _action$payload3$inte === void 0 ? void 0 : _action$payload3$inte.type)) {
        // If this node was deleted before being recreated, remove it from the deleted node list
        pluginInstance.changedNodesSinceLastPageCreation.deleted.delete(action.payload.id);
        pluginInstance.changedNodesSinceLastPageCreation.created.set(action.payload.id, {
          id: action.payload.id,
          contentDigest: action.payload.internal.contentDigest,
          type: action.payload.internal.type
        });
      }
    });
  } catch (e) {
    reporter.panicOnBuild({
      id: (0, _errorUtils.prefixId)(_errorUtils.CODES.Generic),
      context: {
        sourceMessage: e.message
      }
    });
  }
}
function setFieldsOnGraphQLNodeType({
  getNode,
  type,
  store,
  reporter
}, {
  slugify: slugifyOptions
}) {
  try {
    const extensions = store.getState().program.extensions;
    const {
      trailingSlash = `always`
    } = store.getState().config;
    const collectionQuery = (0, _camelCase2.default)(`all ${type.name}`);
    if (knownCollections.has(collectionQuery)) {
      return {
        gatsbyPath: {
          type: _graphql.GraphQLString,
          args: {
            filePath: {
              type: _graphql.GraphQLString
            }
          },
          resolve: async (source, {
            filePath
          }, context) => {
            // This is a quick hack for attaching parents to the node.
            // This may be an incomprehensive fixed for the general use case
            // of connecting nodes together. However, I don't quite know how to
            // fully understand the use-cases. So this is a simple fix for this
            // one common-use, and we'll iterate as we understand.
            const sourceCopy = {
              ...source
            };
            // @ts-ignore
            if (typeof source.parent === `string`) {
              // @ts-ignore
              sourceCopy.parent = getNode(source.parent);
            }
            const getFieldValue = context.nodeModel.getFieldValue;
            (0, _validatePathQuery.validatePathQuery)(filePath, extensions);
            const {
              derivedPath
            } = await (0, _derivePath.derivePath)(filePath, sourceCopy, reporter, slugifyOptions, getFieldValue);
            const hasTrailingSlash = derivedPath.endsWith(`/`);
            const path = (0, _gatsbyPageUtils.createPath)(derivedPath, hasTrailingSlash, true);
            const modifiedPath = (0, _gatsbyPageUtils.applyTrailingSlashOption)(path, trailingSlash);
            return modifiedPath;
          }
        }
      };
    }
    return {};
  } catch (e) {
    reporter.panicOnBuild({
      id: (0, _errorUtils.prefixId)(_errorUtils.CODES.GraphQLResolver),
      context: {
        sourceMessage: e.message
      }
    });
    return {};
  }
}
async function onPluginInit({
  reporter
}, {
  path: pagesPath
}) {
  if (reporter.setErrorMap) {
    reporter.setErrorMap(_errorUtils.ERROR_MAP);
  }
  try {
    const files = await (0, _pathUtils.findCollectionPageFiles)(pagesPath);
    await Promise.all(files.map(async relativePath => {
      const absolutePath = require.resolve(_path.default.join(pagesPath, relativePath));
      const queryString = await (0, _collectionExtractQueryString.collectionExtractQueryString)(absolutePath, reporter);
      if (!queryString) return;
      const ast = (0, _graphql.parse)(queryString);
      knownCollections.set(
      // @ts-ignore
      ast.definitions[0].selectionSet.selections[0].name.value, relativePath);
    }));
  } catch (e) {
    reporter.panicOnBuild({
      id: (0, _errorUtils.prefixId)(_errorUtils.CODES.Generic),
      context: {
        sourceMessage: e.message
      }
    });
  }
}