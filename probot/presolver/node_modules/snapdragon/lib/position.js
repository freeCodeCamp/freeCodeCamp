'use strict';

var define = require('define-property');

/**
 * Store position for a node
 */

module.exports = function Position(start, parser) {
  this.start = start;
  this.end = { line: parser.line, column: parser.column };
  define(this, 'content', parser.orig);
  define(this, 'source', parser.options.source);
};
