'use strict';
/**
 * @typedef {object} Plugin
 * @prop {Set<string>} targets
 * @prop {Set<string>} nodeTypes
 * @prop {(node: import('postcss').Node) => void} detectAndResolve
 * @prop {(node: import('postcss').Node) => void} detectAndWarn
 */

/** 
 * @typedef {import('postcss').Node & {_stylehacks: {
                                          message: string, 
                                          browsers: Set<string>, 
                                          identifier: string, 
                                          hack: string }}} NodeWithInfo
 */

module.exports = class BasePlugin {
  /**
   * @param {string[]} targets
   * @param {string[]} nodeTypes
   * @param {import('postcss').Result=} result
   */
  constructor(targets, nodeTypes, result) {
    /** @type {NodeWithInfo[]} */
    this.nodes = [];
    this.targets = new Set(targets);
    this.nodeTypes = new Set(nodeTypes);
    this.result = result;
  }

  /**
   * @param {import('postcss').Node} node
   * @param {{identifier: string, hack: string}} metadata
   * @return {void}
   */
  push(node, metadata) {
    /** @type {NodeWithInfo} */ (node)._stylehacks = Object.assign(
      {},
      metadata,
      {
        message: `Bad ${metadata.identifier}: ${metadata.hack}`,
        browsers: this.targets,
      }
    );

    this.nodes.push(/** @type {NodeWithInfo} */ (node));
  }

  /**
   * @param {import('postcss').Node} node
   * @return {boolean}
   */
  any(node) {
    if (this.nodeTypes.has(node.type)) {
      this.detect(node);

      return /** @type {NodeWithInfo} */ (node)._stylehacks !== undefined;
    }

    return false;
  }

  /**
   * @param {import('postcss').Node} node
   * @return {void}
   */
  detectAndResolve(node) {
    this.nodes = [];

    this.detect(node);

    return this.resolve();
  }

  /**
   * @param {import('postcss').Node} node
   * @return {void}
   */
  detectAndWarn(node) {
    this.nodes = [];

    this.detect(node);

    return this.warn();
  }
  /** @param {import('postcss').Node} node */
  // eslint-disable-next-line no-unused-vars
  detect(node) {
    throw new Error('You need to implement this method in a subclass.');
  }

  /** @return {void} */
  resolve() {
    return this.nodes.forEach((node) => node.remove());
  }

  warn() {
    return this.nodes.forEach((node) => {
      const { message, browsers, identifier, hack } = node._stylehacks;

      return node.warn(
        /** @type {import('postcss').Result} */ (this.result),
        message + JSON.stringify({ browsers, identifier, hack })
      );
    });
  }
};
