'use strict'

const {
  kUntrackNode,
  kTrackNode,
  kGetParent,
  kGetNode,
  kAddNode
} = require('./symbols')

/**
 * Node of the TimeTree
 * @typedef {object} TimeTreeNode
 * @property {string} id
 * @property {string|null} parent
 * @property {string} label
 * @property {Array<TimeTreeNode>} nodes
 * @property {number} start
 * @property {number|undefined} stop
 * @property {number|undefined} diff
 */

class TimeTree {
  constructor () {
    /**
     * @type {TimeTreeNode|null} root
     * @public
     */
    this.root = null

    /**
     * @type {Map<string, TimeTreeNode>} tableId
     * @public
     */
    this.tableId = new Map()

    /**
     * @type {Map<string, Array<TimeTreeNode>>} tableLabel
     * @public
     */
    this.tableLabel = new Map()
  }

  /**
   * @param {TimeTreeNode} node
   */
  [kTrackNode] (node) {
    this.tableId.set(node.id, node)
    if (this.tableLabel.has(node.label)) {
      this.tableLabel.get(node.label).push(node)
    } else {
      this.tableLabel.set(node.label, [node])
    }
  }

  /**
   * @param {TimeTreeNode} node
   */
  [kUntrackNode] (node) {
    this.tableId.delete(node.id)

    const labelNode = this.tableLabel.get(node.label)
    labelNode.pop()

    if (labelNode.length === 0) {
      this.tableLabel.delete(node.label)
    }
  }

  /**
   * @param {string} parent
   * @returns {TimeTreeNode}
   */
  [kGetParent] (parent) {
    if (parent === null) {
      return null
    } else if (this.tableLabel.has(parent)) {
      const parentNode = this.tableLabel.get(parent)
      return parentNode[parentNode.length - 1]
    } else {
      return null
    }
  }

  /**
   *
   * @param {string} nodeId
   * @returns {TimeTreeNode}
   */
  [kGetNode] (nodeId) {
    return this.tableId.get(nodeId)
  }

  /**
   * @param {string} parent
   * @param {string} label
   * @param {number} start
   * @returns {TimeTreeNode["id"]}
   */
  [kAddNode] (parent, label, start) {
    const parentNode = this[kGetParent](parent)
    const isRoot = parentNode === null

    if (isRoot) {
      this.root = {
        parent: null,
        id: 'root',
        label,
        nodes: [],
        start,
        stop: null,
        diff: -1
      }
      this[kTrackNode](this.root)
      return this.root.id
    }

    const nodeId = `${label}-${Math.random()}`
    /**
     * @type {TimeTreeNode}
     */
    const childNode = {
      parent,
      id: nodeId,
      label,
      nodes: [],
      start,
      stop: null,
      diff: -1
    }
    parentNode.nodes.push(childNode)
    this[kTrackNode](childNode)
    return nodeId
  }

  /**
   * @param {string} parent
   * @param {string} label
   * @param {number|undefined} start
   * @returns {TimeTreeNode["id"]}
   */
  start (parent, label, start = Date.now()) {
    return this[kAddNode](parent, label, start)
  }

  /**
   * @param {string} nodeId
   * @param {number|undefined} stop
   */
  stop (nodeId, stop = Date.now()) {
    const node = this[kGetNode](nodeId)
    if (node) {
      node.stop = stop
      node.diff = (node.stop - node.start) || 0
      this[kUntrackNode](node)
    }
  }

  /**
   * @returns {TimeTreeNode}
   */
  toJSON () {
    return Object.assign({}, this.root)
  }

  /**
   * @returns {string}
   */
  prettyPrint () {
    return prettyPrintTimeTree(this.toJSON())
  }
}

/**
 * @param {TimeTreeNode} obj
 * @param {string|undefined} prefix
 * @returns {string}
 */
function prettyPrintTimeTree (obj, prefix = '') {
  let result = prefix

  const nodesCount = obj.nodes.length
  const lastIndex = nodesCount - 1
  result += `${obj.label} ${obj.diff} ms\n`

  for (let i = 0; i < nodesCount; ++i) {
    const node = obj.nodes[i]
    const prefix_ = prefix + (i === lastIndex ? '  ' : '│ ')

    result += prefix
    result += (i === lastIndex ? '└─' : '├─')
    result += (node.nodes.length === 0 ? '─ ' : '┬ ')
    result += prettyPrintTimeTree(node, prefix_).slice(prefix.length + 2)
  }
  return result
}

module.exports = {
  TimeTree
}
