'use strict';

var brackets = require('expand-brackets');

/**
 * Extglob compilers
 */

module.exports = function(extglob) {
  function star() {
    if (typeof extglob.options.star === 'function') {
      return extglob.options.star.apply(this, arguments);
    }
    if (typeof extglob.options.star === 'string') {
      return extglob.options.star;
    }
    return '.*?';
  }

  /**
   * Use `expand-brackets` compilers
   */

  extglob.use(brackets.compilers);
  extglob.compiler

    /**
     * Escaped: "\\*"
     */

    .set('escape', function(node) {
      return this.emit(node.val, node);
    })

    /**
     * Dot: "."
     */

    .set('dot', function(node) {
      return this.emit('\\' + node.val, node);
    })

    /**
     * Question mark: "?"
     */

    .set('qmark', function(node) {
      var val = '[^\\\\/.]';
      var prev = this.prev();

      if (node.parsed.slice(-1) === '(') {
        var ch = node.rest.charAt(0);
        if (ch !== '!' && ch !== '=' && ch !== ':') {
          return this.emit(val, node);
        }
        return this.emit(node.val, node);
      }

      if (prev.type === 'text' && prev.val) {
        return this.emit(val, node);
      }

      if (node.val.length > 1) {
        val += '{' + node.val.length + '}';
      }
      return this.emit(val, node);
    })

    /**
     * Plus: "+"
     */

    .set('plus', function(node) {
      var prev = node.parsed.slice(-1);
      if (prev === ']' || prev === ')') {
        return this.emit(node.val, node);
      }
      var ch = this.output.slice(-1);
      if (!this.output || (/[?*+]/.test(ch) && node.parent.type !== 'bracket')) {
        return this.emit('\\+', node);
      }
      if (/\w/.test(ch) && !node.inside) {
        return this.emit('+\\+?', node);
      }
      return this.emit('+', node);
    })

    /**
     * Star: "*"
     */

    .set('star', function(node) {
      var prev = this.prev();
      var prefix = prev.type !== 'text' && prev.type !== 'escape'
        ? '(?!\\.)'
        : '';

      return this.emit(prefix + star.call(this, node), node);
    })

    /**
     * Parens
     */

    .set('paren', function(node) {
      return this.mapVisit(node.nodes);
    })
    .set('paren.open', function(node) {
      var capture = this.options.capture ? '(' : '';

      switch (node.parent.prefix) {
        case '!':
        case '^':
          return this.emit(capture + '(?:(?!(?:', node);
        case '*':
        case '+':
        case '?':
        case '@':
          return this.emit(capture + '(?:', node);
        default: {
          var val = node.val;
          if (this.options.bash === true) {
            val = '\\' + val;
          } else if (!this.options.capture && val === '(' && node.parent.rest[0] !== '?') {
            val += '?:';
          }

          return this.emit(val, node);
        }
      }
    })
    .set('paren.close', function(node) {
      var capture = this.options.capture ? ')' : '';

      switch (node.prefix) {
        case '!':
        case '^':
          var prefix = /^(\)|$)/.test(node.rest) ? '$' : '';
          var str = star.call(this, node);

          // if the extglob has a slash explicitly defined, we know the user wants
          // to match slashes, so we need to ensure the "star" regex allows for it
          if (node.parent.hasSlash && !this.options.star && this.options.slash !== false) {
            str = '.*?';
          }

          return this.emit(prefix + ('))' + str + ')') + capture, node);
        case '*':
        case '+':
        case '?':
          return this.emit(')' + node.prefix + capture, node);
        case '@':
          return this.emit(')' + capture, node);
        default: {
          var val = (this.options.bash === true ? '\\' : '') + ')';
          return this.emit(val, node);
        }
      }
    })

    /**
     * Text
     */

    .set('text', function(node) {
      var val = node.val.replace(/[\[\]]/g, '\\$&');
      return this.emit(val, node);
    });
};
