"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.is = exports.default = void 0;
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _sourceNodesApiRunner = require("./source-nodes-api-runner");
var _redux = require("../redux");
var _datastore = require("../datastore");
var _actions = require("../redux/actions");
const {
  deleteNode
} = _actions.actions;

/**
 * Finds the name of all plugins which implement Gatsby APIs that
 * may create nodes, but which have not actually created any nodes.
 */
function discoverPluginNamesWithoutNodes() {
  const {
    typeOwners,
    flattenedPlugins
  } = _redux.store.getState();

  // Find out which plugins own already created nodes
  const pluginNamesThatCreatedNodes = new Set([`default-site-plugin`,
  // each plugin that owns node types created a node at some point
  ...Array.from(typeOwners.pluginsToTypes.keys())]);
  return flattenedPlugins.filter(plugin =>
  // "Can generate nodes"
  plugin.nodeAPIs.includes(`sourceNodes`) &&
  // "Has not generated nodes"
  !pluginNamesThatCreatedNodes.has(plugin.name)).map(plugin => plugin.name);
}

/**
 * Warn about plugins that should have created nodes but didn't.
 */
function warnForPluginsWithoutNodes() {
  const pluginNamesWithNoNodes = discoverPluginNamesWithoutNodes();
  pluginNamesWithNoNodes.map(name => _reporter.default.warn(`The ${name} plugin has generated no Gatsby nodes. Do you need it? This could also suggest the plugin is misconfigured.`));
}

/**
 * Return the set of nodes for which its root node has not been touched
 */
function getStaleNodes(state, nodes) {
  return nodes.filter(node => {
    let rootNode = node;
    let next = undefined;
    let whileCount = 0;
    do {
      next = rootNode.parent ? (0, _datastore.getNode)(rootNode.parent) : undefined;
      if (next) {
        rootNode = next;
      }
    } while (next && ++whileCount < 101);
    if (whileCount > 100) {
      console.log(`It looks like you have a node that's set its parent as itself`, rootNode);
    }
    if (state.statefulSourcePlugins.has(rootNode.internal.owner)) {
      return false;
    }
    return !state.nodesTouched.has(rootNode.id);
  });
}

/**
 * Find all stale nodes and delete them unless the node type has been opted out of stale node garbage collection.
 */
async function deleteStaleNodes(previouslyExistingNodeTypeNames) {
  const state = _redux.store.getState();
  let deleteCount = 0;
  const cleanupStaleNodesActivity = _reporter.default.createProgress(`Clean up stale nodes`);
  cleanupStaleNodesActivity.start();
  const {
    typeOwners,
    statefulSourcePlugins
  } = state;
  for (const typeName of previouslyExistingNodeTypeNames) {
    const pluginName = typeOwners.typesToPlugins.get(typeName);

    // no need to check this type if its owner has declared its a stateful source plugin
    if (pluginName && statefulSourcePlugins.has(pluginName)) {
      continue;
    }
    _reporter.default.verbose(`Checking for stale ${typeName} nodes`);
    const nodes = (0, _datastore.getDataStore)().iterateNodesByType(typeName);
    const staleNodes = getStaleNodes(state, nodes);
    for (const node of staleNodes) {
      _redux.store.dispatch(deleteNode(node));
      cleanupStaleNodesActivity.tick();
      if (++deleteCount % 5000) {
        // dont block event loop
        await new Promise(res => {
          setImmediate(() => {
            res(null);
          });
        });
      }
    }
  }
  cleanupStaleNodesActivity.end();
}

// exported for unit tests purposes only to allow internal module state resets
const is = {
  initialSourceNodesOfCurrentNodeProcess: true
};
exports.is = is;
let sourcingCount = 0;
var _default = async ({
  webhookBody,
  pluginName,
  parentSpan,
  deferNodeMutation = false
}) => {
  const traceId = is.initialSourceNodesOfCurrentNodeProcess ? `initial-sourceNodes` : `sourceNodes #${sourcingCount}`;

  // this is persisted to cache between builds, so it will always have an up to date list of previously created types by plugin name
  const {
    typeOwners
  } = _redux.store.getState();
  const previouslyExistingNodeTypeNames = Array.from(typeOwners.typesToPlugins.keys() || []);
  await (0, _sourceNodesApiRunner.sourceNodesApiRunner)({
    traceId,
    deferNodeMutation,
    parentSpan,
    webhookBody,
    pluginName
  });
  await (0, _datastore.getDataStore)().ready();

  // We only warn for plugins w/o nodes and delete stale nodes on the first sourceNodes call of the current process.
  if (is.initialSourceNodesOfCurrentNodeProcess) {
    is.initialSourceNodesOfCurrentNodeProcess = false;
    warnForPluginsWithoutNodes();
    if (
    // if this is the very first source and no types existed before this sourceNodes run, there's no need to check for stale nodes. They wont be stale because they were just created. Only check for stale nodes in node types that never existed before.
    previouslyExistingNodeTypeNames.length > 0) {
      await deleteStaleNodes(previouslyExistingNodeTypeNames);
    }
  }
  _redux.store.dispatch(_actions.actions.apiFinished({
    apiName: `sourceNodes`
  }));
  sourcingCount += 1;
};
exports.default = _default;
//# sourceMappingURL=source-nodes.js.map