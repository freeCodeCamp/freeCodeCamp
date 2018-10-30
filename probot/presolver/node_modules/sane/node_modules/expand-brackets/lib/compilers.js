'use strict';

var posix = require('posix-character-classes');

module.exports = function(brackets) {
  brackets.compiler

    /**
     * Escaped characters
     */

    .set('escape', function(node) {
      return this.emit('\\' + node.val.replace(/^\\/, ''), node);
    })

    /**
     * Text
     */

    .set('text', function(node) {
      return this.emit(node.val.replace(/([{}])/g, '\\$1'), node);
    })

    /**
     * POSIX character classes
     */

    .set('posix', function(node) {
      if (node.val === '[::]') {
        return this.emit('\\[::\\]', node);
      }

      var val = posix[node.inner];
      if (typeof val === 'undefined') {
        val = '[' + node.inner + ']';
      }
      return this.emit(val, node);
    })

    /**
     * Non-posix brackets
     */

    .set('bracket', function(node) {
      return this.mapVisit(node.nodes);
    })
    .set('bracket.open', function(node) {
      return this.emit(node.val, node);
    })
    .set('bracket.inner', function(node) {
      var inner = node.val;

      if (inner === '[' || inner === ']') {
        return this.emit('\\' + node.val, node);
      }
      if (inner === '^]') {
        return this.emit('^\\]', node);
      }
      if (inner === '^') {
        return this.emit('^', node);
      }

      if (/-/.test(inner) && !/(\d-\d|\w-\w)/.test(inner)) {
        inner = inner.split('-').join('\\-');
      }

      var isNegated = inner.charAt(0) === '^';
      // add slashes to negated brackets, per spec
      if (isNegated && inner.indexOf('/') === -1) {
        inner += '/';
      }
      if (isNegated && inner.indexOf('.') === -1) {
        inner += '.';
      }

      // don't unescape `0` (octal literal)
      inner = inner.replace(/\\([1-9])/g, '$1');
      return this.emit(inner, node);
    })
    .set('bracket.close', function(node) {
      var val = node.val.replace(/^\\/, '');
      if (node.parent.escaped === true) {
        return this.emit('\\' + val, node);
      }
      return this.emit(val, node);
    });
};
