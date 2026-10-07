"use strict";

/* eslint-disable no-unused-vars */

/***/
const GatsbyReporter = {
  /**
   * @callback GatsbyReporterFn
   * @param {string} message Message to display
   * @returns {void}
   */

  /**
   * @callback GatsbyReporterFnWithError
   * @param {string} message Message to display
   * @param {Error}[error] Optional error object
   * @returns {void}
   */

  /**
   * @type {GatsbyReporterFn}
   * @example
   * reporter.info(`text`)
   */
  info: true,
  /**
   * @type {GatsbyReporterFn}
   * @example
   * reporter.warn(`text`)
   */
  warn: true,
  /**
   * @type {GatsbyReporterFnWithError}
   * @example
   * reporter.error(`text`, new Error('something'))
   */
  error: true,
  /**
   * @type {GatsbyReporterFnWithError}
   * @example
   * reporter.panic(`text`, new Error('something'))
   */
  panic: true,
  /**
   * @type {GatsbyReporterFnWithError}
   * @example
   * reporter.panicOnBuild(`text`, new Error('something'))
   */
  panicOnBuild: true,
  /**
   * Note that this method only works if the --verbose option has
   * been passed to the CLI
   * @type {GatsbyReporterFn}
   * @example
   * reporter.verbose(`text`)
   */
  verbose: true,
  /**
   * @callback GatsbyReporterActivityTimerFn
   * @param {string} message Timer message to display
   * @returns {ITimerReporter}
   */

  /**
   * Creates a new activity timer with the provided message.
   * Check the full [return type definition here](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-cli/src/reporter/reporter-timer.ts#L19).
   * @type {GatsbyReporterActivityTimerFn}
   * @example
   * const activity = reporter.activityTimer(`Timer text`)
   *
   * activity.start()
   * activity.setStatus(`status text`)
   * activity.end()
   */
  activityTimer: true
};

/***/
const GatsbyCache = {
  /**
   * Retrieve cached value
   * @param {string} key Cache key
   * @returns {Promise<any>} Promise resolving to cached value
   * @example
   * const value = await cache.get(`unique-key`)
   */
  get: true,
  /**
   * Cache value
   * @param {string} key Cache key
   * @param {any} value Value to be cached
   * @returns {Promise<any>} Promise resolving to cached value
   * @example
   * await cache.set(`unique-key`, value)
   */
  set: true,
  /**
   * Deletes cached value
   * @param {string} key Cache key
   * @returns {Promise<void>} Promise resolving once key is deleted from cache
   * @example
   * await cache.del(`unique-key`)
   */
  del: true
};

/***/
const GatsbyTracing = {
  /**
   * Global tracer instance. Check
   * [opentracing Tracer documentation](https://opentracing-javascript.surge.sh/classes/tracer.html)
   * for more details.
   * @type {Opentracing.Tracer}
   */
  tracer: true,
  /**
   * Tracer span representing API run. Check
   * [opentracing Span documentation](https://opentracing-javascript.surge.sh/classes/span.html)
   * for more details.
   * @type {Opentracing.Span}
   */
  parentSpan: true,
  /**
   * @callback GatsbyTracing.StartSpan
   * @param {string} spanName name of the span
   * @returns {Opentracing.Span}
   */

  /**
   * Start a tracing span. The span will be created as a child of the currently
   * running API span. This is a convenience wrapper for
   * ```js
   * tracing.tracer.startSpan(`span-name`, { childOf: tracing.parentSpan}).
   * ```
   * @type {GatsbyTracing.StartSpan}
   * @example
   * exports.sourceNodes = async ({ actions, tracing }) => {
   *   const span = tracing.startSpan(`foo`)
   *
   *   // Perform any span operations. E.g. add a tag to your span
   *   span.setTag(`bar`, `baz`)
   *
   *   // Rest of your plugin code
   *
   *   span.finish()
   * }
   */
  startSpan: true
};

/**
 * Get cache instance by name - this should only be used by plugins that
 * accept subplugins.
 * @param {string} id id of the node
 * @returns {GatsbyCache} See [`cache`](#cache) section for reference.
 */
module.exports.getCache = true;

/**
 * Key-value store used to persist results of time/memory/cpu intensive
 * tasks. All functions are async and return promises.
 * @type {GatsbyCache}
 */
module.exports.cache = true;

/**
 * Create a stable content digest from a string or object, you can use the
 * result of this function to set the `internal.contentDigest` field
 * on nodes. Gatsby uses the value of this field to invalidate stale data
 * when your content changes.
 * @param {(string|object)} input
 * @returns {string} Hash string
 * @example
 * const node = {
 *   ...nodeData,
 *   internal: {
 *     type: `TypeOfNode`,
 *     contentDigest: createContentDigest(nodeData)
 *   }
 * }
 */
module.exports.createContentDigest = true;

/**
 * Collection of functions used to programmatically modify Gatsby’s internal state.
 *
 * See [`actions`](/docs/actions/) reference.
 * @type {Actions}
 */
module.exports.actions = true;

/**
 * Get content for a node from the plugin that created it.
 * @param {Node} node
 * @returns {Promise<string>}
 * @example
 * module.exports = async function onCreateNode(
 *   { node, loadNodeContent, actions, createNodeId }
 * ) {
 *   if (node.internal.mediaType === 'text/markdown') {
 *     const { createNode, createParentChildLink } = actions
 *     const textContent = await loadNodeContent(node)
 *     // process textContent and create child nodes
 *   }
 * }
 */
module.exports.loadNodeContent = true;

/**
 * Internal redux state used for application state. Do not use, unless you
 * absolutely must. Store is considered a private API and can change with
 * any version.
 * @type {Redux.Store}
 */
module.exports.store = true;

/**
 * Internal event emitter / listener.  Do not use, unless you absolutely
 * must. Emitter is considered a private API and can change with any version.
 * @type {Emitter}
 */
module.exports.emitter = true;

/**
 * Get array of all nodes.
 * @returns {Node[]} Array of nodes.
 * @example
 * const allNodes = getNodes()
 */
module.exports.getNodes = true;

/**
 * Get single node by given ID.
 * Don't use this in graphql resolvers - see
 * [`getNodeAndSavePathDependency`](#getNodeAndSavePathDependency).
 * @param {string} ID id of the node.
 * @returns {Node} Single node instance.
 * @example
 * const node = getNode(id)
 */
module.exports.getNode = true;

/**
 * Get array of nodes of given type.
 * @param {string} Type of nodes
 * @returns {Node[]} Array of nodes.
 * @example
 * const markdownNodes = getNodesByType(`MarkdownRemark`)
 */
module.exports.getNodesByType = true;

/**
 * Set of utilities to output information to user
 * @type {GatsbyReporter}
 */
module.exports.reporter = true;

/**
 * Get single node by given ID and create dependency for given path.
 * This should be used instead of `getNode` in graphql resolvers to enable
 * tracking dependencies for query results. If it's not used Gatsby will
 * not rerun query if node changes leading to stale query results. See
 * [Page -> Node Dependency Tracking](/docs/page-node-dependencies/)
 * for more details.
 * @param {string} ID id of the node.
 * @param {string} path of the node.
 * @returns {Node} Single node instance.
 */
module.exports.getNodeAndSavePathDependency = true;

/**
 * Utility function useful to generate globally unique and stable node IDs.
 * It will generate different IDs for different plugins if they use same
 * input.
 *
 * @param {string} input
 * @returns {string} UUIDv5 ID string
 * @example
 * const node = {
 *   id: createNodeId(`${backendData.type}${backendData.id}`),
 *   ...restOfNodeData
 * }
 */
module.exports.createNodeId = true;

/**
 * Set of utilities that allow adding more detailed tracing for plugins.
 * Check
 * [Performance tracing](https://www.gatsbyjs.com/docs/performance-tracing)
 * page for more details.
 * @type {GatsbyTracing}
 */
module.exports.tracing = true;

/**
 * Use to prefix resources URLs. `pathPrefix` will be either empty string or
 * path that starts with slash and doesn't end with slash. `pathPrefix` also
 * becomes `<assetPrefix>/<pathPrefix>` when you pass both `assetPrefix` and
 * `pathPrefix` in your `gatsby-config.js`.
 *
 * See [Adding a Path Prefix](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/path-prefix/)
 * page for details about path prefixing.
 * @type {string}
 */
module.exports.pathPrefix = true;

/**
 * This is the same as `pathPrefix` passed in `gatsby-config.js`.
 * It's an empty string if you don't pass `pathPrefix`.
 * When using assetPrefix, you can use this instead of pathPrefix to recieve the string you set in `gatsby-config.js`.
 * It won't include the `assetPrefix`.
 * @type {string}
 */
module.exports.basePath = true;

/**
 * Tracer span representing the passed through span from Gatsby to its plugins.
 * Learn more: [opentracing Span documentation](https://opentracing-javascript.surge.sh/classes/span.html)
 * @type {Opentracing.Span}
 */
module.exports.parentSpan = true;
//# sourceMappingURL=api-node-helpers-docs.js.map