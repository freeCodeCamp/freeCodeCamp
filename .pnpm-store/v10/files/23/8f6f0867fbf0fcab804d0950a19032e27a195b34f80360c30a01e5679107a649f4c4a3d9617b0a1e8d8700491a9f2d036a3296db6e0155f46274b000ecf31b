"use strict";

var _sanitizeNode = require("../../utils/sanitize-node");
var _joi = require("../../joi-schemas/joi");
var _internal = require("./internal");
var _workerMessaging = require("../../utils/jobs/worker-messaging");
var _reportOnce = require("../../utils/report-once");
var _detectNodeMutations = require("../../utils/detect-node-mutations");
const reporter = require(`gatsby-cli/lib/reporter`);
const chalk = require(`chalk`);
const _ = require(`lodash`);
const {
  stripIndent
} = require(`common-tags`);
const report = require(`gatsby-cli/lib/reporter`);
const {
  platform
} = require(`os`);
const path = require(`path`);
const {
  trueCasePathSync
} = require(`true-case-path`);
const url = require(`url`);
const {
  slash
} = require(`gatsby-core-utils/path`);
const {
  createContentDigest
} = require(`gatsby-core-utils/create-content-digest`);
const {
  splitComponentPath
} = require(`gatsby-core-utils/parse-component-path`);
const {
  hasNodeChanged
} = require(`../../utils/nodes`);
const {
  getNode,
  getDataStore
} = require(`../../datastore`);
const {
  store
} = require(`../index`);
const {
  validateComponent
} = require(`../../utils/validate-component`);
const {
  generateComponentChunkName
} = require(`../../utils/js-chunk-names`);
const {
  getCommonDir,
  truncatePath,
  tooLongSegmentsInPath
} = require(`../../utils/path`);
const {
  applyTrailingSlashOption
} = require(`gatsby-page-utils`);
const apiRunnerNode = require(`../../utils/api-runner-node`);
const {
  getNonGatsbyCodeFrame
} = require(`../../utils/stack-trace-utils`);
const {
  getPageMode
} = require(`../../utils/page-mode`);
const normalizePath = require(`../../utils/normalize-path`).default;
const isNotTestEnv = process.env.NODE_ENV !== `test`;
const isTestEnv = process.env.NODE_ENV === `test`;

// Memoize function used to pick shadowed page components to avoid expensive I/O.
// Ideally, we should invalidate memoized values if there are any FS operations
// on files that are in shadowing chain, but webpack currently doesn't handle
// shadowing changes during develop session, so no invalidation is not a deal breaker.
const shadowCreatePagePath = _.memoize(require(`../../internal-plugins/webpack-theme-component-shadowing/create-page`));
const {
  createInternalJob
} = require(`../../utils/jobs/manager`);
const actions = {};
const isWindows = platform() === `win32`;
const ensureWindowsDriveIsUppercase = filePath => {
  const segments = filePath.split(`:`).filter(s => s !== ``);
  return segments.length > 0 ? segments.shift().toUpperCase() + `:` + segments.join(`:`) : filePath;
};
const findChildren = initialChildren => {
  const children = [...initialChildren];
  const queue = [...initialChildren];
  const traversedNodes = new Set();
  while (queue.length > 0) {
    const currentChild = getNode(queue.pop());
    if (!currentChild || traversedNodes.has(currentChild.id)) {
      continue;
    }
    traversedNodes.add(currentChild.id);
    const newChildren = currentChild.children;
    if (_.isArray(newChildren) && newChildren.length > 0) {
      children.push(...newChildren);
      queue.push(...newChildren);
    }
  }
  return children;
};
/**
 * Delete a page
 * @param {Object} page a page object
 * @param {string} page.path The path of the page
 * @param {string} page.component The absolute path to the page component
 * @example
 * deletePage(page)
 */
actions.deletePage = page => {
  return {
    type: `DELETE_PAGE`,
    payload: page
  };
};
const hasWarnedForPageComponentInvalidContext = new Set();
const hasWarnedForPageComponentInvalidCasing = new Set();
const hasErroredBecauseOfNodeValidation = new Set();
const pageComponentCache = new Map();
const reservedFields = [`path`, `matchPath`, `component`, `componentChunkName`, `pluginCreator___NODE`, `pluginCreatorId`];
/**
 * Create a page. See [the guide on creating and modifying pages](/docs/creating-and-modifying-pages/)
 * for detailed documentation about creating pages.
 * @param {Object} page a page object
 * @param {string} page.path Any valid URL. Must start with a forward slash. Unicode characters should be passed directly and not encoded (eg. `á` not `%C3%A1`).
 * @param {string} page.matchPath Path that Reach Router uses to match the page on the client side.
 * Also see docs on [matchPath](/docs/gatsby-internals-terminology/#matchpath)
 * @param {string} page.ownerNodeId The id of the node that owns this page. This is used for routing users to previews via the unstable_createNodeManifest public action. Since multiple nodes can be queried on a single page, this allows the user to tell us which node is the main node for the page. Note that the ownerNodeId must be for a node which is queried on this page via a GraphQL query.
 * @param {string} page.component The absolute path to the component for this page
 * @param {Object} page.context Context data for this page. Passed as props
 * to the component `this.props.pageContext` as well as to the graphql query
 * as graphql arguments.
 * @param {Object} page.slices A mapping of alias-of-id for Slices rendered on this page. See the technical docs for the [Gatsby Slice API](/docs/reference/built-in-components/gatsby-slice).
 * @param {boolean} page.defer When set to `true`, Gatsby will exclude the page from the build step and instead generate it during the first HTTP request. Default value is `false`. Also see docs on [Deferred Static Generation](/docs/reference/rendering-options/deferred-static-generation/).
 * @example
 * createPage({
 *   path: `/my-sweet-new-page/`,
 *   component: path.resolve(`./src/templates/my-sweet-new-page.js`),
 *   ownerNodeId: `123456`,
 *   // The context is passed as props to the component as well
 *   // as into the component's GraphQL query.
 *   context: {
 *     id: `123456`,
 *   },
 * })
 */
actions.createPage = (page, plugin, actionOptions) => {
  var _plugin$id, _plugin$id2;
  let name = `The plugin "${plugin.name}"`;
  if (plugin.name === `default-site-plugin`) {
    name = `Your site's "gatsby-node.js"`;
  }
  if (!page.path) {
    const message = `${name} must set the page path when creating a page`;
    // Don't log out when testing
    if (isNotTestEnv) {
      report.panic({
        id: `11323`,
        context: {
          pluginName: name,
          pageObject: page,
          message
        }
      });
    } else {
      return message;
    }
  }

  // Validate that the context object doesn't overlap with any core page fields
  // as this will cause trouble when running graphql queries.
  if (page.context && typeof page.context === `object`) {
    const invalidFields = reservedFields.filter(field => field in page.context);
    if (invalidFields.length > 0) {
      const error = `${invalidFields.length === 1 ? `${name} used a reserved field name in the context object when creating a page:` : `${name} used reserved field names in the context object when creating a page:`}

${invalidFields.map(f => `  * "${f}"`).join(`\n`)}

${JSON.stringify(page, null, 4)}

Data in "context" is passed to GraphQL as potential arguments when running the
page query.

When arguments for GraphQL are constructed, the context object is combined with
the page object so *both* page object and context data are available as
arguments. So you don't need to add the page "path" to the context as it's
already available in GraphQL. If a context field duplicates a field already
used by the page object, this can break functionality within Gatsby so must be
avoided.

Please choose another name for the conflicting fields.

The following fields are used by the page object and should be avoided.

${reservedFields.map(f => `  * "${f}"`).join(`\n`)}

            `;
      if (isTestEnv) {
        return error;
        // Only error if the context version is different than the page
        // version.  People in v1 often thought that they needed to also pass
        // the path to context for it to be available in GraphQL
      } else if (invalidFields.some(f => page.context[f] !== page[f])) {
        report.panic({
          id: `11324`,
          context: {
            message: error
          }
        });
      } else {
        if (!hasWarnedForPageComponentInvalidContext.has(page.component)) {
          report.warn(error);
          hasWarnedForPageComponentInvalidContext.add(page.component);
        }
      }
    }
  }

  // Check if a component is set.
  if (!page.component) {
    if (isNotTestEnv) {
      report.panic({
        id: `11322`,
        context: {
          input: page,
          pluginName: name
        }
      });
    } else {
      // For test
      return `A component must be set when creating a page`;
    }
  }
  const pageComponentPath = shadowCreatePagePath(page.component);
  if (pageComponentPath) {
    page.component = pageComponentPath;
  }
  const {
    config,
    program
  } = store.getState();
  const {
    trailingSlash
  } = config;
  const {
    directory
  } = program;
  const {
    error,
    panicOnBuild
  } = validateComponent({
    input: page,
    pluginName: name,
    errorIdMap: {
      noPath: `11322`,
      notAbsolute: `11326`,
      doesNotExist: `11325`,
      empty: `11327`,
      noDefaultExport: `11328`
    }
  });
  if (error) {
    if (isNotTestEnv) {
      if (panicOnBuild) {
        report.panicOnBuild(error);
      } else {
        report.panic(error);
      }
    }
    return `${name} must set the absolute path to the page component when creating a page`;
  }

  // check if we've processed this component path
  // before, before running the expensive "trueCasePath"
  // operation
  //
  // Skip during testing as the paths don't exist on disk.
  if (isNotTestEnv) {
    if (pageComponentCache.has(page.component)) {
      page.component = pageComponentCache.get(page.component);
    } else {
      const originalPageComponent = page.component;
      const splitPath = splitComponentPath(page.component);

      // normalize component path
      page.component = slash(splitPath[0]);
      // check if path uses correct casing - incorrect casing will
      // cause issues in query compiler and inconsistencies when
      // developing on Mac or Windows and trying to deploy from
      // linux CI/CD pipeline
      let trueComponentPath;
      try {
        // most systems
        trueComponentPath = slash(trueCasePathSync(page.component));
      } catch (e) {
        // systems where user doesn't have access to /
        const commonDir = getCommonDir(directory, page.component);

        // using `path.win32` to force case insensitive relative path
        const relativePath = slash(path.win32.relative(commonDir, page.component));
        trueComponentPath = slash(trueCasePathSync(relativePath, commonDir));
      }
      if (isWindows) {
        page.component = ensureWindowsDriveIsUppercase(page.component);
      }
      if (trueComponentPath !== page.component) {
        if (!hasWarnedForPageComponentInvalidCasing.has(page.component)) {
          const markers = page.component.split(``).map((letter, index) => {
            if (letter !== trueComponentPath[index]) {
              return `^`;
            }
            return ` `;
          }).join(``);
          report.warn(stripIndent`
          ${name} created a page with a component path that doesn't match the casing of the actual file. This may work locally, but will break on systems which are case-sensitive, e.g. most CI/CD pipelines.

          page.component:     "${page.component}"
          path in filesystem: "${trueComponentPath}"
                               ${markers}
        `);
          hasWarnedForPageComponentInvalidCasing.add(page.component);
        }
        page.component = trueComponentPath;
      }
      if (splitPath.length > 1) {
        page.component = `${page.component}?__contentFilePath=${splitPath[1]}`;
      }
      pageComponentCache.set(originalPageComponent, page.component);
    }
  }
  let internalComponentName;
  if (page.path === `/`) {
    internalComponentName = `ComponentIndex`;
  } else {
    internalComponentName = `Component${page.path}`;
  }
  const invalidPathSegments = tooLongSegmentsInPath(page.path);
  if (invalidPathSegments.length > 0) {
    const truncatedPath = truncatePath(page.path);
    report.warn(report.stripIndent(`
        The path to the following page is longer than the supported limit on most
        operating systems and will cause an ENAMETOOLONG error. The path has been
        truncated to prevent this.

        Original Path: ${page.path}

        Truncated Path: ${truncatedPath}
      `));
    page.path = truncatedPath;
  }
  page.path = applyTrailingSlashOption(page.path, trailingSlash);
  const internalPage = {
    internalComponentName,
    path: page.path,
    matchPath: page.matchPath,
    component: normalizePath(page.component),
    componentPath: normalizePath(page.component),
    componentChunkName: generateComponentChunkName(page.component),
    isCreatedByStatefulCreatePages: (actionOptions === null || actionOptions === void 0 ? void 0 : actionOptions.traceId) === `initial-createPagesStatefully`,
    // Ensure the page has a context object
    context: page.context || {},
    updatedAt: Date.now(),
    slices: (page === null || page === void 0 ? void 0 : page.slices) || {},
    // Link page to its plugin.
    pluginCreator___NODE: (_plugin$id = plugin.id) !== null && _plugin$id !== void 0 ? _plugin$id : ``,
    pluginCreatorId: (_plugin$id2 = plugin.id) !== null && _plugin$id2 !== void 0 ? _plugin$id2 : ``
  };
  if (page.defer) {
    internalPage.defer = true;
  }
  // Note: mode is updated in the end of the build after we get access to all page components,
  // see materializePageMode in utils/page-mode.ts
  internalPage.mode = getPageMode(internalPage);
  if (page.ownerNodeId) {
    internalPage.ownerNodeId = page.ownerNodeId;
  }

  // If the path doesn't have an initial forward slash, add it.
  if (internalPage.path[0] !== `/`) {
    internalPage.path = `/${internalPage.path}`;
  }
  const oldPage = store.getState().pages.get(internalPage.path);
  const contextModified = !!oldPage && !_.isEqual(oldPage.context, internalPage.context);
  const componentModified = !!oldPage && !_.isEqual(oldPage.component, internalPage.component);
  const slicesModified = !!oldPage && !_.isEqual(oldPage.slices, internalPage.slices);
  const alternateSlashPath = page.path.endsWith(`/`) ? page.path.slice(0, -1) : page.path + `/`;
  if (store.getState().pages.has(alternateSlashPath)) {
    report.warn(chalk.bold.yellow(`Non-deterministic routing danger: `) + `Attempting to create page: "${page.path}", but page "${alternateSlashPath}" already exists\n` + chalk.bold.yellow(`This could lead to non-deterministic routing behavior`));
  }

  // just so it's easier to c&p from createPage action creator for now - ideally it's DRYed
  const {
    updatedAt,
    ...node
  } = internalPage;
  node.children = [];
  node.internal = {
    type: `SitePage`,
    contentDigest: createContentDigest(node)
  };
  node.id = `SitePage ${internalPage.path}`;
  const oldNode = getNode(node.id);
  let deleteActions;
  let updateNodeAction;
  // marking internal-data-bridge as owner of SitePage instead of plugin that calls createPage
  if (oldNode && !hasNodeChanged(node.id, node.internal.contentDigest)) {
    updateNodeAction = {
      ...actionOptions,
      plugin: {
        name: `internal-data-bridge`
      },
      type: `TOUCH_NODE`,
      typeName: node.internal.type,
      payload: node.id
    };
  } else {
    // Remove any previously created descendant nodes as they're all due
    // to be recreated.
    if (oldNode) {
      const createDeleteAction = node => {
        return {
          ...actionOptions,
          type: `DELETE_NODE`,
          plugin: {
            name: `internal-data-bridge`
          },
          payload: node,
          isRecursiveChildrenDelete: true
        };
      };
      deleteActions = findChildren(oldNode.children).map(getNode).map(createDeleteAction);
    }
    node.internal.counter = getNextNodeCounter();
    updateNodeAction = {
      ...actionOptions,
      type: `CREATE_NODE`,
      plugin: {
        name: `internal-data-bridge`
      },
      oldNode,
      payload: node
    };
  }

  // Sanitize page object so we don't attempt to serialize user-provided objects that are not serializable later
  const sanitizedPayload = (0, _sanitizeNode.sanitizeNode)(internalPage);
  const actions = [{
    ...actionOptions,
    type: `CREATE_PAGE`,
    contextModified,
    componentModified,
    slicesModified,
    plugin,
    payload: sanitizedPayload
  }];
  if (deleteActions && deleteActions.length) {
    actions.push(...deleteActions);
  }
  actions.push(updateNodeAction);
  return actions;
};

/**
 * Delete a node
 * @param {object} node A node object. See the "createNode" action for more information about the node object details.
 * @example
 * deleteNode(node)
 */
actions.deleteNode = (node, plugin) => {
  const id = node && node.id;

  // Always get node from the store, as the node we get as an arg
  // might already have been deleted.
  const internalNode = getNode(id);
  const createDeleteAction = node => {
    return {
      type: `DELETE_NODE`,
      plugin,
      payload: node,
      // main node need to be owned by plugin that calls deleteNode
      // child nodes should skip ownership check
      isRecursiveChildrenDelete: node !== internalNode
    };
  };
  const deleteAction = createDeleteAction(internalNode);

  // It's possible the file node was never created as sometimes tools will
  // write and then immediately delete temporary files to the file system.
  const deleteDescendantsActions = internalNode && findChildren(internalNode.children).map(getNode).map(createDeleteAction);
  if (deleteDescendantsActions && deleteDescendantsActions.length) {
    return [...deleteDescendantsActions, deleteAction];
  } else {
    return deleteAction;
  }
};

// We add a counter to node.internal for fast comparisons/intersections
// of various node slices. The counter must increase even across builds.
function getNextNodeCounter() {
  var _store$getState$statu;
  const lastNodeCounter = (_store$getState$statu = store.getState().status.LAST_NODE_COUNTER) !== null && _store$getState$statu !== void 0 ? _store$getState$statu : 0;
  if (lastNodeCounter >= Number.MAX_SAFE_INTEGER) {
    throw new Error(`Could not create more nodes. Maximum node count is reached: ${lastNodeCounter}`);
  }
  return lastNodeCounter + 1;
}

// memberof notation is added so this code can be referenced instead of the wrapper.
/**
 * Create a new node.
 * @memberof actions
 * @param {Object} node a node object
 * @param {string} node.id The node's ID. Must be globally unique.
 * @param {string} node.parent The ID of the parent's node. If the node is
 * derived from another node, set that node as the parent. Otherwise it can
 * just be `null`.
 * @param {Array} node.children An array of children node IDs. If you're
 * creating the children nodes while creating the parent node, add the
 * children node IDs here directly. If you're adding a child node to a
 * parent node created by a plugin, you can't mutate this value directly
 * to add your node id, instead use the action creator `createParentChildLink`.
 * @param {Object} node.internal node fields that aren't generally
 * interesting to consumers of node data but are very useful for plugin writers
 * and Gatsby core. Only fields described below are allowed in `internal` object.
 * Using any type of custom fields will result in validation errors.
 * @param {string} node.internal.mediaType An optional field to indicate to
 * transformer plugins that your node has raw content they can transform.
 * Use either an official media type (we use mime-db as our source
 * (https://www.npmjs.com/package/mime-db) or a made-up one if your data
 * doesn't fit in any existing bucket. Transformer plugins use node media types
 * for deciding if they should transform a node into a new one. E.g.
 * markdown transformers look for media types of
 * `text/markdown`.
 * @param {string} node.internal.type An arbitrary globally unique type
 * chosen by the plugin creating the node. Should be descriptive of the
 * node as the type is used in forming GraphQL types so users will query
 * for nodes based on the type chosen here. Nodes of a given type can
 * only be created by one plugin.
 * @param {string} node.internal.content An optional field. This is rarely
 * used. It is used when a source plugin sources data it doesn't know how
 * to transform e.g. a markdown string pulled from an API. The source plugin
 * can defer the transformation to a specialized transformer plugin like
 * gatsby-transformer-remark. This `content` field holds the raw content
 * (so for the markdown case, the markdown string).
 *
 * Data that's already structured should be added to the top-level of the node
 * object and _not_ added here. You should not `JSON.stringify` your node's
 * data here.
 *
 * If the content is very large and can be lazy-loaded, e.g. a file on disk,
 * you can define a `loadNodeContent` function for this node and the node
 * content will be lazy loaded when it's needed.
 * @param {string} node.internal.contentDigest the digest for the content
 * of this node. Helps Gatsby avoid doing extra work on data that hasn't
 * changed.
 * @param {string} node.internal.description An optional field. Human
 * readable description of what this node represent / its source. It will
 * be displayed when type conflicts are found, making it easier to find
 * and correct type conflicts.
 * @param {string} node.internal.contentFilePath An optional field. A plugin
 * can add an absolute path to a content file (e.g. markdown file) here
 * while creating the node. Example: gatsby-plugin-mdx adds the absolute path
 * of the `File` node to the `Mdx` node under `internal.contentFilePath`.
 * @returns {Promise} The returned Promise resolves when all cascading
 * `onCreateNode` API calls triggered by `createNode` have finished.
 * @example
 * createNode({
 *   // Data for the node.
 *   field1: `a string`,
 *   field2: 10,
 *   field3: true,
 *   ...arbitraryOtherData,
 *
 *   // Required fields.
 *   id: `a-node-id`,
 *   parent: `the-id-of-the-parent-node`, // or null if it's a source node without a parent
 *   children: [],
 *   internal: {
 *     type: `CoolServiceMarkdownField`,
 *     contentDigest: crypto
 *       .createHash(`md5`)
 *       .update(JSON.stringify(fieldData))
 *       .digest(`hex`),
 *     mediaType: `text/markdown`, // optional
 *     content: JSON.stringify(fieldData), // optional
 *     description: `Cool Service: "Title of entry"`, // optional
 *   }
 * })
 */
const createNode = (node, plugin, actionOptions = {}) => {
  if (!_.isObject(node)) {
    return console.log(chalk.bold.red(`The node passed to the "createNode" action creator must be an object`));
  }

  // Ensure the new node has an internals object.
  if (!node.internal) {
    node.internal = {};
  }

  // Ensure the new node has a children array.
  if (!node.array && !_.isArray(node.children)) {
    node.children = [];
  }

  // Ensure the new node has a parent field
  if (!node.parent) {
    node.parent = null;
  }

  // Tell user not to set the owner name themself.
  if (node.internal.owner) {
    report.error(JSON.stringify(node, null, 4));
    report.panic(chalk.bold.red(`The node internal.owner field is set automatically by Gatsby and not by plugins`));
  }
  const trackParams = {};
  // Add the plugin name to the internal object.
  if (plugin) {
    node.internal.owner = plugin.name;
    trackParams[`pluginName`] = `${plugin.name}@${plugin.version}`;
  }
  const result = _joi.nodeSchema.validate(node);
  if (result.error) {
    if (!hasErroredBecauseOfNodeValidation.has(result.error.message)) {
      const errorObj = {
        id: `11467`,
        context: {
          validationErrorMessage: result.error.message,
          node
        }
      };
      const possiblyCodeFrame = getNonGatsbyCodeFrame();
      if (possiblyCodeFrame) {
        errorObj.context.codeFrame = possiblyCodeFrame.codeFrame;
        errorObj.filePath = possiblyCodeFrame.fileName;
        errorObj.location = {
          start: {
            line: possiblyCodeFrame.line,
            column: possiblyCodeFrame.column
          }
        };
      }
      report.error(errorObj);
      hasErroredBecauseOfNodeValidation.add(result.error.message);
    }
    return {
      type: `VALIDATION_ERROR`,
      error: true
    };
  }

  // Ensure node isn't directly setting fields.
  if (node.fields) {
    throw new Error(stripIndent`
      Plugins creating nodes can not set data on the reserved field "fields"
      as this is reserved for plugins which wish to extend your nodes.

      If your plugin didn't add "fields" you're probably seeing this
      error because you're reusing an old node object.

      Node:

      ${JSON.stringify(node, null, 4)}

      Plugin that created the node:

      ${JSON.stringify(plugin, null, 4)}
    `);
  }
  node = (0, _sanitizeNode.sanitizeNode)(node);
  const oldNode = getNode(node.id);
  if (actionOptions.parentSpan) {
    actionOptions.parentSpan.setTag(`nodeId`, node.id);
    actionOptions.parentSpan.setTag(`nodeType`, node.id);
  }
  let deleteActions;
  let updateNodeAction;
  // Check if the node has already been processed.
  if (oldNode && !hasNodeChanged(node.id, node.internal.contentDigest)) {
    updateNodeAction = {
      ...actionOptions,
      plugin,
      type: `TOUCH_NODE`,
      payload: node.id,
      typeName: node.internal.type
    };
  } else {
    // Remove any previously created descendant nodes as they're all due
    // to be recreated.
    if (oldNode) {
      const createDeleteAction = node => {
        return {
          ...actionOptions,
          type: `DELETE_NODE`,
          plugin,
          payload: node,
          isRecursiveChildrenDelete: true
        };
      };
      deleteActions = findChildren(oldNode.children).map(getNode).map(createDeleteAction);
    }
    node.internal.counter = getNextNodeCounter();
    updateNodeAction = {
      ...actionOptions,
      type: `CREATE_NODE`,
      plugin,
      oldNode,
      payload: node
    };
  }
  if (deleteActions && deleteActions.length) {
    return [...deleteActions, updateNodeAction];
  } else {
    return updateNodeAction;
  }
};
actions.createNode = (...args) => dispatch => {
  const actions = createNode(...args);
  dispatch(actions);
  const createNodeAction = (Array.isArray(actions) ? actions : [actions]).find(action => action.type === `CREATE_NODE`);
  if (!createNodeAction) {
    return Promise.resolve(undefined);
  }
  const {
    payload: node,
    traceId,
    parentSpan
  } = createNodeAction;
  const maybePromise = apiRunnerNode(`onCreateNode`, {
    node: (0, _detectNodeMutations.wrapNode)(node),
    traceId,
    parentSpan,
    traceTags: {
      nodeId: node.id,
      nodeType: node.internal.type
    }
  });
  if (maybePromise !== null && maybePromise !== void 0 && maybePromise.then) {
    return maybePromise.then(res => getDataStore().ready().then(() => res));
  } else {
    return getDataStore().ready().then(() => maybePromise);
  }
};

/**
 * "Touch" a node. Tells Gatsby a node still exists and shouldn't
 * be garbage collected. Primarily useful for source plugins fetching
 * nodes from a remote system that can return only nodes that have
 * updated. The source plugin then touches all the nodes that haven't
 * updated but still exist so Gatsby knows to keep them.
 * @param {Object} node A node object. See the "createNode" action for more information about the node object details.
 * @example
 * touchNode(node)
 */
actions.touchNode = (node, plugin) => {
  const nodeId = node === null || node === void 0 ? void 0 : node.id;
  if (!nodeId) {
    // if we don't have a node id, we don't want to dispatch this action
    return [];
  }
  return {
    type: `TOUCH_NODE`,
    plugin,
    payload: nodeId,
    typeName: node.internal.type
  };
};
/**
 * Extend another node. The new node field is placed under the `fields`
 * key on the extended node object.
 *
 * Once a plugin has claimed a field name the field name can't be used by
 * other plugins.  Also since nodes are immutable, you can't mutate the node
 * directly. So to extend another node, use this.
 * @param {Object} $0
 * @param {Object} $0.node the target node object
 * @param {string} $0.name the name for the field
 * @param {any} $0.value the value for the field
 * @example
 * createNodeField({
 *   node,
 *   name: `happiness`,
 *   value: `is sweet graphql queries`
 * })
 *
 * // The field value is now accessible at node.fields.happiness
 */
actions.createNodeField = ({
  node,
  name,
  value
}, plugin, actionOptions) => {
  // Ensure required fields are set.
  if (!node.internal.fieldOwners) {
    node.internal.fieldOwners = {};
  }
  if (!node.fields) {
    node.fields = {};
  }

  // Normalized name of the field that will be used in schema
  const schemaFieldName = _.includes(name, `___NODE`) ? name.split(`___`)[0] : name;

  // Check that this field isn't owned by another plugin.
  const fieldOwner = node.internal.fieldOwners[schemaFieldName];
  if (fieldOwner && fieldOwner !== plugin.name) {
    throw new Error(stripIndent`
      A plugin tried to update a node field that it doesn't own:

      Node id: ${node.id}
      Plugin: ${plugin.name}
      name: ${name}
      value: ${value}
      `);
  }

  // Update node
  node.fields[name] = value;
  node.internal.fieldOwners[schemaFieldName] = plugin.name;
  node = (0, _sanitizeNode.sanitizeNode)(node);
  return {
    ...actionOptions,
    type: `ADD_FIELD_TO_NODE`,
    plugin,
    payload: node,
    addedField: name
  };
};

/**
 * Creates a link between a parent and child node. This is used when you
 * transform content from a node creating a new child node. You need to add
 * this new child node to the `children` array of the parent but since you
 * don't have direct access to the immutable parent node, use this action
 * instead.
 * @param {Object} $0
 * @param {Object} $0.parent the parent node object
 * @param {Object} $0.child the child node object
 * @example
 * createParentChildLink({ parent: parentNode, child: childNode })
 */
actions.createParentChildLink = ({
  parent,
  child
}, plugin) => {
  if (!parent.children.includes(child.id)) {
    parent.children.push(child.id);
  }
  return {
    type: `ADD_CHILD_NODE_TO_PARENT_NODE`,
    plugin,
    payload: parent
  };
};

/**
 * Merge additional configuration into the current webpack config. A few
 * configurations options will be ignored if set, in order to try prevent accidental breakage.
 * Specifically, any change to `entry`, `output`, `target`, or `resolveLoaders` will be ignored.
 *
 * For full control over the webpack config, use `replaceWebpackConfig()`.
 *
 * @param {Object} config partial webpack config, to be merged into the current one
 */
actions.setWebpackConfig = (config, plugin = null) => {
  var _config$node;
  if (((_config$node = config.node) === null || _config$node === void 0 ? void 0 : _config$node.fs) === `empty`) {
    report.warn(`[deprecated${plugin ? ` ` + plugin.name : ``}] node.fs is deprecated. Please set "resolve.fallback.fs = false".`);
    delete config.node.fs;
    config.resolve = config.resolve || {};
    config.resolve.fallback = config.resolve.fallback || {};
    config.resolve.fallback.fs = false;
  }
  return {
    type: `SET_WEBPACK_CONFIG`,
    plugin,
    payload: config
  };
};

/**
 * Completely replace the webpack config for the current stage. This can be
 * dangerous and break Gatsby if certain configuration options are changed.
 *
 * Generally only useful for cases where you need to handle config merging logic
 * yourself, in which case consider using `webpack-merge`.
 *
 * @param {Object} config complete webpack config
 */
actions.replaceWebpackConfig = (config, plugin = null) => {
  var _config$node2;
  if (((_config$node2 = config.node) === null || _config$node2 === void 0 ? void 0 : _config$node2.fs) === `empty`) {
    report.warn(`[deprecated${plugin ? ` ` + plugin.name : ``}] node.fs is deprecated. Please set "resolve.fallback.fs = false".`);
    delete config.node.fs;
    config.resolve = config.resolve || {};
    config.resolve.fallback = config.resolve.fallback || {};
    config.resolve.fallback.fs = false;
  }
  return {
    type: `REPLACE_WEBPACK_CONFIG`,
    plugin,
    payload: config
  };
};

/**
 * Set top-level Babel options. Plugins and presets will be ignored. Use
 * setBabelPlugin and setBabelPreset for this.
 * @param {Object} config An options object in the shape of a normal babelrc JavaScript object
 * @example
 * setBabelOptions({
 *   options: {
 *     sourceMaps: `inline`,
 *   }
 * })
 */
actions.setBabelOptions = (options, plugin = null) => {
  // Validate
  let name = `The plugin "${plugin.name}"`;
  if (plugin.name === `default-site-plugin`) {
    name = `Your site's "gatsby-node.js"`;
  }
  if (!_.isObject(options)) {
    console.log(`${name} must pass an object to "setBabelOptions"`);
    console.log(JSON.stringify(options, null, 4));
    if (isNotTestEnv) {
      process.exit(1);
    }
  }
  if (!_.isObject(options.options)) {
    console.log(`${name} must pass options to "setBabelOptions"`);
    console.log(JSON.stringify(options, null, 4));
    if (isNotTestEnv) {
      process.exit(1);
    }
  }
  return {
    type: `SET_BABEL_OPTIONS`,
    plugin,
    payload: options
  };
};

/**
 * Add new plugins or merge options into existing Babel plugins.
 * @param {Object} config A config object describing the Babel plugin to be added.
 * @param {string} config.name The name of the Babel plugin
 * @param {Object} config.options Options to pass to the Babel plugin.
 * @example
 * setBabelPlugin({
 *   name:  `@emotion/babel-plugin`,
 *   options: {
 *     sourceMap: true,
 *   },
 * })
 */
actions.setBabelPlugin = (config, plugin = null) => {
  // Validate
  let name = `The plugin "${plugin.name}"`;
  if (plugin.name === `default-site-plugin`) {
    name = `Your site's "gatsby-node.js"`;
  }
  if (!config.name) {
    console.log(`${name} must set the name of the Babel plugin`);
    console.log(JSON.stringify(config, null, 4));
    if (isNotTestEnv) {
      process.exit(1);
    }
  }
  if (!config.options) {
    config.options = {};
  }
  return {
    type: `SET_BABEL_PLUGIN`,
    plugin,
    payload: config
  };
};

/**
 * Add new presets or merge options into existing Babel presets.
 * @param {Object} config A config object describing the Babel plugin to be added.
 * @param {string} config.name The name of the Babel preset.
 * @param {Object} config.options Options to pass to the Babel preset.
 * @example
 * setBabelPreset({
 *   name: `@babel/preset-react`,
 *   options: {
 *     pragma: `Glamor.createElement`,
 *   },
 * })
 */
actions.setBabelPreset = (config, plugin = null) => {
  // Validate
  let name = `The plugin "${plugin.name}"`;
  if (plugin.name === `default-site-plugin`) {
    name = `Your site's "gatsby-node.js"`;
  }
  if (!config.name) {
    console.log(`${name} must set the name of the Babel preset`);
    console.log(JSON.stringify(config, null, 4));
    if (isNotTestEnv) {
      process.exit(1);
    }
  }
  if (!config.options) {
    config.options = {};
  }
  return {
    type: `SET_BABEL_PRESET`,
    plugin,
    payload: config
  };
};

/**
 * DEPRECATED. Use createJobV2 instead.
 *
 * Create a "job". This is a long-running process that is generally
 * started as a side-effect to a GraphQL query.
 * [`gatsby-plugin-sharp`](/plugins/gatsby-plugin-sharp/) uses this for
 * example.
 *
 * Gatsby doesn't finish its process until all jobs are ended.
 * @param {Object} job A job object with at least an id set
 * @param {id} job.id The id of the job
 * @deprecated Use "createJobV2" instead
 * @example
 * createJob({ id: `write file id: 123`, fileName: `something.jpeg` })
 */
actions.createJob = (job, plugin = null) => {
  let msg = `Action "createJob" is deprecated. Please use "createJobV2" instead`;
  if (plugin !== null && plugin !== void 0 && plugin.name) {
    msg = msg + ` (called by ${plugin.name})`;
  }
  (0, _reportOnce.reportOnce)(msg);
  return {
    type: `CREATE_JOB`,
    plugin,
    payload: job
  };
};

/**
 * Create a "job". This is a long-running process that is generally
 * started as a side-effect to a GraphQL query.
 * [`gatsby-plugin-sharp`](/plugins/gatsby-plugin-sharp/) uses this for
 * example.
 *
 * Gatsby doesn't finish its process until all jobs are ended.
 * @param {Object} job A job object with name, inputPaths, outputDir and args
 * @param {string} job.name The name of the job you want to execute
 * @param {string[]} job.inputPaths The inputPaths that are needed to run
 * @param {string} job.outputDir The directory where all files are being saved to
 * @param {Object} job.args The arguments the job needs to execute
 * @returns {Promise<object>} Promise to see if the job is done executing
 * @example
 * createJobV2({ name: `IMAGE_PROCESSING`, inputPaths: [`something.jpeg`], outputDir: `public/static`, args: { width: 100, height: 100 } })
 */
actions.createJobV2 = (job, plugin) => (dispatch, getState) => {
  const internalJob = createInternalJob(job, plugin);
  const maybeWorkerPromise = (0, _workerMessaging.maybeSendJobToMainProcess)(internalJob);
  if (maybeWorkerPromise) {
    return maybeWorkerPromise;
  }
  return (0, _internal.createJobV2FromInternalJob)(internalJob)(dispatch, getState);
};
actions.addGatsbyImageSourceUrl = sourceUrl => {
  return {
    type: `PROCESS_GATSBY_IMAGE_SOURCE_URL`,
    payload: {
      sourceUrl
    }
  };
};

/**
 * DEPRECATED. Use createJobV2 instead.
 *
 * Set (update) a "job". Sometimes on really long running jobs you want
 * to update the job as it continues.
 *
 * @param {Object} job A job object with at least an id set
 * @param {id} job.id The id of the job
 * @deprecated Use "createJobV2" instead
 * @example
 * setJob({ id: `write file id: 123`, progress: 50 })
 */
actions.setJob = (job, plugin = null) => {
  let msg = `Action "setJob" is deprecated. Please use "createJobV2" instead`;
  if (plugin !== null && plugin !== void 0 && plugin.name) {
    msg = msg + ` (called by ${plugin.name})`;
  }
  (0, _reportOnce.reportOnce)(msg);
  return {
    type: `SET_JOB`,
    plugin,
    payload: job
  };
};

/**
 * DEPRECATED. Use createJobV2 instead.
 *
 * End a "job".
 *
 * Gatsby doesn't finish its process until all jobs are ended.
 * @param {Object} job  A job object with at least an id set
 * @param {id} job.id The id of the job
 * @deprecated Use "createJobV2" instead
 * @example
 * endJob({ id: `write file id: 123` })
 */
actions.endJob = (job, plugin = null) => {
  let msg = `Action "endJob" is deprecated. Please use "createJobV2" instead`;
  if (plugin !== null && plugin !== void 0 && plugin.name) {
    msg = msg + ` (called by ${plugin.name})`;
  }
  (0, _reportOnce.reportOnce)(msg);
  return {
    type: `END_JOB`,
    plugin,
    payload: job
  };
};

/**
 * Set plugin status. A plugin can use this to save status keys e.g. the last
 * it fetched something. These values are persisted between runs of Gatsby.
 *
 * @param {Object} status  An object with arbitrary values set
 * @example
 * setPluginStatus({ lastFetched: Date.now() })
 */
actions.setPluginStatus = (status, plugin) => {
  return {
    type: `SET_PLUGIN_STATUS`,
    plugin,
    payload: status
  };
};

// Check if path is absolute and add pathPrefix in front if it's not
const maybeAddPathPrefix = (path, pathPrefix) => {
  const parsed = url.parse(path);
  const isRelativeProtocol = path.startsWith(`//`);
  return `${parsed.protocol != null || isRelativeProtocol ? `` : pathPrefix}${path}`;
};

/**
 * Create a redirect from one page to another.
 *
 * Redirects must be implemented by your deployment platform (e.g. Gatsby Cloud, Netlify, etc.). You can use an [adapter](/docs/how-to/previews-deploys-hosting/adapters/) or plugins for this. Alternatively, you can use [gatsby-plugin-meta-redirect](/plugins/gatsby-plugin-meta-redirect/) to generate meta redirect HTML files for redirecting on any static file host.
 *
 * You can read the source code of [gatsby-adapter-netlify](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-adapter-netlify) to see how redirects are implemented on Netlify. Redirects also work out of the box on Gatsby Cloud.
 *
 * Keep the redirects configuration in sync with trailing slash configuration from [Gatsby Config API](/docs/reference/config-files/gatsby-config/#trailingslash).
 *
 * @param {Object} redirect Redirect data
 * @param {string} redirect.fromPath Any valid URL. Must start with a forward slash
 * @param {boolean} redirect.isPermanent This is a permanent redirect; defaults to temporary
 * @param {string} redirect.toPath URL of a created page (see `createPage`)
 * @param {boolean} redirect.redirectInBrowser Redirects are generally for redirecting legacy URLs to their new configuration on the server. If you can't update your UI for some reason, set `redirectInBrowser` to true and Gatsby will handle redirecting in the client as well. You almost never need this so be sure your use case fits before enabling.
 * @param {boolean} redirect.force (Plugin-specific) Will trigger the redirect even if the `fromPath` matches a piece of content. This is not part of the Gatsby API, but implemented by (some) plugins that configure hosting provider redirects
 * @param {number} redirect.statusCode (Plugin-specific) Manually set the HTTP status code. This allows you to create a rewrite (status code 200) or custom error page (status code 404). Note that this will override the `isPermanent` option which also sets the status code. This is not part of the Gatsby API, but implemented by (some) plugins that configure hosting provider redirects
 * @param {boolean} redirect.ignoreCase (Plugin-specific) Ignore case when looking for redirects
 * @param {Object} redirect.conditions Specify a country or language based redirect
 * @param {(string|string[])} redirect.conditions.country A two-letter country code based on the regional indicator symbol
 * @param {(string|string[])} redirect.conditions.language A two-letter identifier defined by ISO 639-1
 * @example
 * // Generally you create redirects while creating pages.
 * exports.createPages = ({ graphql, actions }) => {
 *   const { createRedirect } = actions
 *
 *   createRedirect({ fromPath: '/old-url/', toPath: '/new-url/', isPermanent: true })
 *   createRedirect({ fromPath: '/url/', toPath: '/zn-CH/url/', conditions: { language: 'zn' }})
 *   createRedirect({ fromPath: '/url/', toPath: '/en/url/', conditions: { language: ['ca', 'us'] }})
 *   createRedirect({ fromPath: '/url/', toPath: '/ca/url/', conditions: { country: 'ca' }})
 *   createRedirect({ fromPath: '/url/', toPath: '/en/url/', conditions: { country: ['ca', 'us'] }})
 *   createRedirect({ fromPath: '/not_so-pretty_url/', toPath: '/pretty/url/', statusCode: 200 })
 *
 *   // Create pages here
 * }
 */
actions.createRedirect = ({
  fromPath,
  isPermanent = false,
  redirectInBrowser = false,
  toPath,
  ignoreCase = true,
  ...rest
}) => {
  let pathPrefix = ``;
  if (store.getState().program.prefixPaths) {
    pathPrefix = store.getState().config.pathPrefix;
  }
  return {
    type: `CREATE_REDIRECT`,
    payload: {
      fromPath: maybeAddPathPrefix(fromPath, pathPrefix),
      isPermanent,
      ignoreCase,
      redirectInBrowser,
      toPath: maybeAddPathPrefix(toPath, pathPrefix),
      ...rest
    }
  };
};

/**
 * Create a dependency between a page and data.
 *
 * @param {Object} $0
 * @param {string} $0.path the path to the page
 * @param {string} $0.nodeId A node ID
 * @param {string} $0.connection A connection type
 * @private
 */
actions.createPageDependency = ({
  path,
  nodeId,
  connection
}, plugin = ``) => {
  console.warn(`Calling "createPageDependency" directly from actions in deprecated. Use "createPageDependency" from "gatsby/dist/redux/actions/add-page-dependency".`);
  return {
    type: `CREATE_COMPONENT_DEPENDENCY`,
    plugin,
    payload: [{
      path,
      nodeId,
      connection
    }]
  };
};

/**
 * Record that a page was visited on the server..
 *
 * @param {Object} $0
 * @param {string} $0.id the chunkName for the page component.
 */
actions.createServerVisitedPage = chunkName => {
  var _store$getState$visit;
  if ((_store$getState$visit = store.getState().visitedPages.get(`server`)) !== null && _store$getState$visit !== void 0 && _store$getState$visit.has(chunkName)) {
    // we already have given chunk tracked, let's not emit `CREATE_SERVER_VISITED_PAGE`
    // action to not cause any additional work
    return [];
  }
  return {
    type: `CREATE_SERVER_VISITED_PAGE`,
    payload: {
      componentChunkName: chunkName
    }
  };
};

/**
 * Creates an individual node manifest.
 * This is used to tie the unique revision state within a data source at the current point in time to a page generated from the provided node when it's node manifest is processed.
 *
 * @param {Object} manifest Manifest data
 * @param {string} manifest.manifestId An id which ties the unique revision state of this manifest to the unique revision state of a data source.
 * @param {Object} manifest.node The Gatsby node to tie the manifestId to. See the "createNode" action for more information about the node object details.
 * @param {string} manifest.updatedAtUTC (optional) The time in which the node was last updated. If this parameter is not included, a manifest is created for every node that gets called. By default, node manifests are created for content updated in the last 30 days. To change this, set a `NODE_MANIFEST_MAX_DAYS_OLD` environment variable.
 * @example
 * unstable_createNodeManifest({
 *   manifestId: `post-id-1--updated-53154315`,
 *   updatedAtUTC: `2021-07-08T21:52:28.791+01:00`,
 *   node: {
 *      id: `post-id-1`
 *   },
 * })
 */
actions.unstable_createNodeManifest = ({
  manifestId,
  node,
  updatedAtUTC
}, plugin) => {
  return {
    type: `CREATE_NODE_MANIFEST`,
    payload: {
      manifestId,
      node,
      pluginName: plugin.name,
      updatedAtUTC
    }
  };
};

/**
 * Marks a source plugin as "stateful" which disables automatically deleting untouched nodes. Stateful source plugins manage deleting their own nodes without stale node checks in Gatsby.
 * Enabling this is a major performance improvement for source plugins that manage their own node deletion. It also lowers the total memory required by a source plugin.
 * When using this action, check if it's supported first with `hasFeature('stateful-source-nodes')`, `hasFeature` is exported from `gatsby-plugin-utils`.
 *
 * @example
 * import { hasFeature } from "gatsby-plugin-utils"
 *
 * exports.sourceNodes = ({ actions }) => {
 *    if (hasFeature(`stateful-source-nodes`)) {
 *      actions.enableStatefulSourceNodes()
 *    } else {
 *     // fallback to old behavior where all nodes are iterated on and touchNode is called.
 *    }
 * }
 *
 * @param {void} $0
 */
actions.enableStatefulSourceNodes = plugin => {
  return {
    type: `ENABLE_STATEFUL_SOURCE_PLUGIN`,
    plugin
  };
};

/**
 * Stores request headers for a given domain to be later used when making requests for Image CDN (and potentially other features).
 *
 * @param {Object} $0
 * @param {string} $0.domain The domain to store the headers for.
 * @param {Object} $0.headers The headers to store.
 */
actions.setRequestHeaders = ({
  domain,
  headers
}, plugin) => {
  var _url$parse;
  const headersIsObject = typeof headers === `object` && headers !== null && !Array.isArray(headers);
  const noHeaders = !headersIsObject;
  const noDomain = typeof domain !== `string`;
  if (noHeaders) {
    reporter.warn(`Plugin ${plugin.name} called actions.setRequestHeaders with a headers property that isn't an object.`);
  }
  if (noDomain) {
    reporter.warn(`Plugin ${plugin.name} called actions.setRequestHeaders with a domain property that isn't a string.`);
  }
  if (noDomain || noHeaders) {
    reporter.panic(`Plugin ${plugin.name} attempted to set request headers with invalid arguments. See above warnings for more info.`);
    return null;
  }
  const baseDomain = (_url$parse = url.parse(domain)) === null || _url$parse === void 0 ? void 0 : _url$parse.hostname;
  if (baseDomain) {
    return {
      type: `SET_REQUEST_HEADERS`,
      payload: {
        domain: baseDomain,
        headers
      }
    };
  } else {
    reporter.panic(`Plugin ${plugin.name} attempted to set request headers for a domain that is not a valid URL. (${domain})`);
    return null;
  }
};
module.exports = {
  actions
};
//# sourceMappingURL=public.js.map