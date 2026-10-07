"use strict";

const fs = require(`fs-extra`);
const path = require(`path`);
const fileType = require(`file-type`);
const {
  createFileNode
} = require(`./create-file-node`);
const {
  createContentDigest,
  createFilePath
} = require(`gatsby-core-utils`);
const cacheId = hash => `create-file-node-from-buffer-${hash}`;

/********************
 * Type Definitions *
 ********************/

/**
 * @typedef {GatsbyCache}
 * @see gatsby/packages/gatsby/utils/cache.js
 */

/**
 * @typedef {CreateFileNodeFromBufferPayload}
 * @typedef {Object}
 * @description Create File Node From Buffer Payload
 *
 * @param  {Buffer} options.buffer
 * @param  {String} options.hash
 * @param  {GatsbyCache} options.cache
 * @param  {Function} options.getCache
 * @param  {Function} options.createNode
 */

/**
 * writeBuffer
 * --
 * Write the contents of `buffer` to `filename`
 *
 *
 * @param {String} filename
 * @param {Buffer} buffer
 * @returns {Promise<void>}
 */
const writeBuffer = (filename, buffer) => new Promise((resolve, reject) => {
  fs.writeFile(filename, buffer, err => err ? reject(err) : resolve());
});

/**
 * processBufferNode
 * --
 * Write the buffer contents out to disk and return the fileNode
 *
 * @param {CreateFileNodeFromBufferPayload} options
 * @return {Promise<Object>} Resolves with the fileNode
 */
async function processBufferNode({
  buffer,
  hash,
  cache,
  createNode,
  parentNodeId,
  createNodeId,
  ext,
  name
}) {
  const pluginCacheDir = cache.directory;

  // See if there's a cache file for this buffer's contents from
  // a previous run
  let filename = await cache.get(cacheId(hash));
  if (!filename) {
    // If the user did not provide an extension and we couldn't get
    // one from remote file, try and guess one
    if (typeof ext === `undefined`) {
      const filetype = await fileType.fromBuffer(buffer);
      ext = filetype ? `.${filetype.ext}` : `.bin`;
    }
    filename = createFilePath(path.join(pluginCacheDir, hash), name, ext);
    await fs.ensureDir(path.dirname(filename));

    // Cache the buffer contents
    await writeBuffer(filename, buffer);

    // Save the cache file path for future use
    await cache.set(cacheId(hash), filename);
  }

  // Create the file node.
  const fileNode = await createFileNode(filename, createNodeId, {});
  fileNode.internal.description = `File "Buffer<${hash}>"`;
  fileNode.hash = hash;
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
 * Index of promises resolving to File node from buffer cache
 */
const processingCache = {};

/***************
 * Entry Point *
 ***************/

/**
 * createFileNodeFromBuffer
 * --
 *
 * Cache a buffer's contents to disk
 * First checks cache to ensure duplicate buffers aren't processed
 *
 * @param {CreateFileNodeFromBufferPayload} options
 * @return {Promise<Object>}                  Returns the created node
 */
module.exports = ({
  buffer,
  hash,
  cache,
  createNode,
  getCache,
  parentNodeId = null,
  createNodeId,
  ext,
  name
}) => {
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
  if (!buffer) {
    return Promise.reject(`bad buffer: ${buffer}`);
  }
  if (!hash) {
    hash = createContentDigest(buffer);
  }
  if (!name) {
    name = hash;
  }

  // Check if we already requested node for this remote file
  // and return stored promise if we did.
  if (processingCache[hash]) {
    return processingCache[hash];
  }
  const bufferCachePromise = processBufferNode({
    buffer,
    hash,
    cache,
    createNode,
    parentNodeId,
    createNodeId,
    ext,
    name
  });
  processingCache[hash] = bufferCachePromise;
  return processingCache[hash];
};