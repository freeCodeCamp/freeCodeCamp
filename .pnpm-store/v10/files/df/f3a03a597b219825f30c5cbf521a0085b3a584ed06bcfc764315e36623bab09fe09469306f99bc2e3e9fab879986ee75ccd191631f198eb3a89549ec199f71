'use strict'

module.exports = search

var toString = require('mdast-util-to-string')
var visit = require('unist-util-visit')
var convert = require('unist-util-is/convert')
var slugs = require('github-slugger')()
var toExpression = require('./to-expression')

// Search a node for a location.
function search(root, expression, settings) {
  var skip = settings.skip && toExpression(settings.skip)
  var parents = convert(settings.parents || root)
  var map = []
  var index
  var endIndex
  var opening

  slugs.reset()

  // Visit all headings in `root`.  We `slug` all headings (to account for
  // duplicates), but only create a TOC from top-level headings.
  visit(root, 'heading', onheading)

  return {
    index: index || -1,
    endIndex: index ? endIndex || root.children.length : -1,
    map: map
  }

  function onheading(node, position, parent) {
    var value = toString(node)
    /* istanbul ignore next - to do: remove this when `remark-attr` is up to
     * date w/ micromark. */
    var id = node.data && node.data.hProperties && node.data.hProperties.id
    var slug = slugs.slug(id || value)

    if (!parents(parent)) {
      return
    }

    // Our opening heading.
    if (expression && !index && expression.test(value)) {
      index = position + 1
      opening = node
      return
    }

    // Our closing heading.
    if (opening && !endIndex && node.depth <= opening.depth) {
      endIndex = position
    }

    // A non-empty heading after the closing (if we were looking for one).
    if (
      value &&
      (endIndex || !expression) &&
      (!settings.maxDepth || node.depth <= settings.maxDepth) &&
      (!skip || !skip.test(value))
    ) {
      map.push({depth: node.depth, children: node.children, id: slug})
    }
  }
}
