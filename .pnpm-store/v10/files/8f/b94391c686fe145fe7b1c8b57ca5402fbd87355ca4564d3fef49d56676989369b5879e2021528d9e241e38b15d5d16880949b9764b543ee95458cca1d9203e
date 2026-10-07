/**
 * @author Richard Smith-Unna
 * @copyright 2016 Richard Smith-Unnar
 * @license MIT
 * @module unist:find
 * @fileoverview Unist node finder
 *
 * @typedef {import('unist').Node} Node
 *
 * @typedef {string} TestStr
 *   Finds first node with a truthy property matching string.
 * @typedef {Object.<string, unknown>} TestObj
 *   Finds first node that has matching values for all properties of object.
 * @typedef {<V extends Node>(node: V) => boolean} TestFn
 *   Finds first node for which function returns true when passed node as argument.
 */

var visit = require('unist-util-visit')
var iteratee = require('lodash.iteratee')

/**
 * Unist node finder utility.
 *
 * @param tree
 *   Node to search.
 * @param condition
 *   Condition used to test each node.
 * @returns
 *   The first node that matches condition, or undefined if no node matches.
 * @type {<V extends Node>(tree: Node, condition: TestStr | TestObj | TestFn) => V | undefined}
 */
module.exports = function find (tree, condition) {
  if (!tree) throw new Error('unist-util-find requires a tree to search')
  if (!condition) throw new Error('unist-util-find requires a condition')

  const predicate = iteratee(condition)
  let result

  visit(tree, function (node) {
    if (predicate(node)) {
      result = node
      return false
    }
  })

  return result
}
