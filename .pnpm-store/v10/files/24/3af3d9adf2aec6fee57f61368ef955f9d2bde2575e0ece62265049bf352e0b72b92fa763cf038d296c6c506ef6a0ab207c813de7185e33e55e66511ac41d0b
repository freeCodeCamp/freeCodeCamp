"use strict";

const {
  fetchRemoteFile
} = require(`gatsby-core-utils/fetch-remote-file`);
const {
  isWebUri
} = require(`valid-url`);
const {
  createFileNode
} = require(`./create-file-node`);

/********************
 * Type Definitions *
 ********************/

/**
 * @typedef {GatsbyCache}
 * @see gatsby/packages/gatsby/utils/cache.js
 */

/**
 * @typedef {Auth}
 * @type {Object}
 * @property {String} htaccess_pass
 * @property {String} htaccess_user
 */

/**
 * @typedef {CreateRemoteFileNodePayload}
 * @typedef {Object}
 * @description Create Remote File Node Payload
 *
 * @param  {String} options.url
 * @param  {GatsbyCache} options.cache
 * @param  {Function} options.createNode
 * @param  {Function} options.getCache
 * @param  {Auth} [options.auth]
 */

/******************
 * Core Functions *
 ******************/

/**
 * processRemoteNode
 * --
 * Request the remote file and return the fileNode
 *
 * @param {CreateRemoteFileNodePayload} options
 * @return {Promise<Object>} Resolves with the fileNode
 */
async function processRemoteNode({
  url,
  cache,
  createNode,
  parentNodeId,
  auth = {},
  httpHeaders = {},
  createNodeId,
  ext,
  name
}) {
  const filename = await fetchRemoteFile({
    url,
    cache,
    auth,
    httpHeaders,
    ext,
    name
  });

  // Create the file node.
  const fileNode = await createFileNode(filename, createNodeId, {});
  fileNode.internal.description = `File "${url}"`;
  fileNode.url = url;
  fileNode.parent = parentNodeId;
  // Override the default plugin as gatsby-source-filesystem needs to
  // be the owner of File nodes or there'll be conflicts if any other
  // File nodes are created through normal usages of
  // gatsby-source-filesystem.
  await createNode(fileNode, {
    name: `gatsby-source-filesystem`
  });
  return fileNode;
}

/**
 * Index of promises resolving to File node from remote url
 */
const processingCache = {};

/***************
 * Entry Point *
 ***************/

/**
 * createRemoteFileNode
 * --
 *
 * Download a remote file
 * First checks cache to ensure duplicate requests aren't processed
 * Then pushes to a queue
 *
 * @param {CreateRemoteFileNodePayload} options
 * @return {Promise<Object>}                  Returns the created node
 */
module.exports = function createRemoteFileNode({
  url,
  cache,
  createNode,
  getCache,
  parentNodeId = null,
  auth = {},
  httpHeaders = {},
  createNodeId,
  ext = null,
  name = null
}) {
  // validation of the input
  // without this it's notoriously easy to pass in the wrong `createNodeId`
  // see gatsbyjs/gatsby#6643
  if (typeof createNodeId !== `function`) {
    throw new Error(`createNodeId must be a function, was ${typeof createNodeId}`);
  }
  if (typeof createNode !== `function`) {
    throw new Error(`createNode must be a function, was ${typeof createNode}`);
  }
  if (typeof getCache === `function`) {
    // use cache of this plugin and not cache of function caller
    cache = getCache(`gatsby-source-filesystem`);
  }
  if (typeof cache !== `object`) {
    throw new Error(`Neither "cache" or "getCache" was passed. getCache must be function that return Gatsby cache, "cache" must be the Gatsby cache, was ${typeof cache}`);
  }

  // Check if we already requested node for this remote file
  // and return stored promise if we did.
  if (processingCache[url]) {
    return processingCache[url];
  }
  if (!url || isWebUri(url) === undefined) {
    throw new Error(`url passed to createRemoteFileNode is either missing or not a proper web uri: ${url}`);
  }
  const fileDownloadPromise = processRemoteNode({
    url,
    cache,
    createNode,
    parentNodeId,
    createNodeId,
    auth,
    httpHeaders,
    ext,
    name
  });
  processingCache[url] = fileDownloadPromise.then(node => node);
  return processingCache[url];
};