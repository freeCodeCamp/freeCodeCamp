define(['exports', 'module', './visitor'], function (exports, module, _visitor) {
  'use strict';

  // istanbul ignore next

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _Visitor = _interopRequireDefault(_visitor);

  function WhitespaceControl() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    this.options = options;
  }
  WhitespaceControl.prototype = new _Visitor['default']();

  WhitespaceControl.prototype.Program = function (program) {
    var doStandalone = !this.options.ignoreStandalone;

    var isRoot = !this.isRootSeen;
    this.isRootSeen = true;

    var body = program.body;
    for (var i = 0, l = body.length; i < l; i++) {
      var current = body[i],
          strip = this.accept(current);

      if (!strip) {
        continue;
      }

      var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
          _isNextWhitespace = isNextWhitespace(body, i, isRoot),
          openStandalone = strip.openStandalone && _isPrevWhitespace,
          closeStandalone = strip.closeStandalone && _isNextWhitespace,
          inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;

      if (strip.close) {
        omitRight(body, i, true);
      }
      if (strip.open) {
        omitLeft(body, i, true);
      }

      if (doStandalone && inlineStandalone) {
        omitRight(body, i);

        if (omitLeft(body, i)) {
          // If we are on a standalone node, save the indent info for partials
          if (current.type === 'PartialStatement') {
            // Pull out the whitespace from the final line
            current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
          }
        }
      }
      if (doStandalone && openStandalone) {
        omitRight((current.program || current.inverse).body);

        // Strip out the previous content node if it's whitespace only
        omitLeft(body, i);
      }
      if (doStandalone && closeStandalone) {
        // Always strip the next node
        omitRight(body, i);

        omitLeft((current.inverse || current.program).body);
      }
    }

    return program;
  };

  WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function (block) {
    this.accept(block.program);
    this.accept(block.inverse);

    // Find the inverse program that is involed with whitespace stripping.
    var program = block.program || block.inverse,
        inverse = block.program && block.inverse,
        firstInverse = inverse,
        lastInverse = inverse;

    if (inverse && inverse.chained) {
      firstInverse = inverse.body[0].program;

      // Walk the inverse chain to find the last inverse that is actually in the chain.
      while (lastInverse.chained) {
        lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
      }
    }

    var strip = {
      open: block.openStrip.open,
      close: block.closeStrip.close,

      // Determine the standalone candiacy. Basically flag our content as being possibly standalone
      // so our parent can determine if we actually are standalone
      openStandalone: isNextWhitespace(program.body),
      closeStandalone: isPrevWhitespace((firstInverse || program).body)
    };

    if (block.openStrip.close) {
      omitRight(program.body, null, true);
    }

    if (inverse) {
      var inverseStrip = block.inverseStrip;

      if (inverseStrip.open) {
        omitLeft(program.body, null, true);
      }

      if (inverseStrip.close) {
        omitRight(firstInverse.body, null, true);
      }
      if (block.closeStrip.open) {
        omitLeft(lastInverse.body, null, true);
      }

      // Find standalone else statments
      if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
        omitLeft(program.body);
        omitRight(firstInverse.body);
      }
    } else if (block.closeStrip.open) {
      omitLeft(program.body, null, true);
    }

    return strip;
  };

  WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function (mustache) {
    return mustache.strip;
  };

  WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function (node) {
    /* istanbul ignore next */
    var strip = node.strip || {};
    return {
      inlineStandalone: true,
      open: strip.open,
      close: strip.close
    };
  };

  function isPrevWhitespace(body, i, isRoot) {
    if (i === undefined) {
      i = body.length;
    }

    // Nodes that end with newlines are considered whitespace (but are special
    // cased for strip operations)
    var prev = body[i - 1],
        sibling = body[i - 2];
    if (!prev) {
      return isRoot;
    }

    if (prev.type === 'ContentStatement') {
      return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
    }
  }
  function isNextWhitespace(body, i, isRoot) {
    if (i === undefined) {
      i = -1;
    }

    var next = body[i + 1],
        sibling = body[i + 2];
    if (!next) {
      return isRoot;
    }

    if (next.type === 'ContentStatement') {
      return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
    }
  }

  // Marks the node to the right of the position as omitted.
  // I.e. {{foo}}' ' will mark the ' ' node as omitted.
  //
  // If i is undefined, then the first child will be marked as such.
  //
  // If mulitple is truthy then all whitespace will be stripped out until non-whitespace
  // content is met.
  function omitRight(body, i, multiple) {
    var current = body[i == null ? 0 : i + 1];
    if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) {
      return;
    }

    var original = current.value;
    current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
    current.rightStripped = current.value !== original;
  }

  // Marks the node to the left of the position as omitted.
  // I.e. ' '{{foo}} will mark the ' ' node as omitted.
  //
  // If i is undefined then the last child will be marked as such.
  //
  // If mulitple is truthy then all whitespace will be stripped out until non-whitespace
  // content is met.
  function omitLeft(body, i, multiple) {
    var current = body[i == null ? body.length - 1 : i - 1];
    if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) {
      return;
    }

    // We omit the last node if it's whitespace only and not preceeded by a non-content node.
    var original = current.value;
    current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
    current.leftStripped = current.value !== original;
    return current.leftStripped;
  }

  module.exports = WhitespaceControl;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2NvbXBpbGVyL3doaXRlc3BhY2UtY29udHJvbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQSxXQUFTLGlCQUFpQixHQUFlO1FBQWQsT0FBTyx5REFBRyxFQUFFOztBQUNyQyxRQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztHQUN4QjtBQUNELG1CQUFpQixDQUFDLFNBQVMsR0FBRyx5QkFBYSxDQUFDOztBQUU1QyxtQkFBaUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLFVBQVMsT0FBTyxFQUFFO0FBQ3RELFFBQU0sWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzs7QUFFcEQsUUFBSSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQzlCLFFBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDOztBQUV2QixRQUFJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0FBQ3hCLFNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDM0MsVUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztVQUNqQixLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFakMsVUFBSSxDQUFDLEtBQUssRUFBRTtBQUNWLGlCQUFTO09BQ1Y7O0FBRUQsVUFBSSxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQztVQUNyRCxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQztVQUVyRCxjQUFjLEdBQUcsS0FBSyxDQUFDLGNBQWMsSUFBSSxpQkFBaUI7VUFDMUQsZUFBZSxHQUFHLEtB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QUN4RCxRQUFJLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssa0JBQWtCLElBQUssQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLFlBQVksQUFBQyxFQUFFO0FBQzFGLGFBQU87S0FDUjs7O0FBR0QsUUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztBQUM3QixXQUFPLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBSSxNQUFNLEdBQUssU0FBUyxBQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDN0UsV0FBTyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQztBQUNsRCxXQUFPLE9BQU8sQ0FBQyxZQUFZLENBQUM7R0FDN0I7O21CQUVjLGlCQUFpQiIsImZpbGUiOiJ3aGl0ZXNwYWNlLWNvbnRyb2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlzaXRvciBmcm9tICcuL3Zpc2l0b3InO1xuXG5mdW5jdGlvbiBXaGl0ZXNwYWNlQ29udHJvbChvcHRpb25zID0ge30pIHtcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbn1cbldoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZSA9IG5ldyBWaXNpdG9yKCk7XG5cbldoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5Qcm9ncmFtID0gZnVuY3Rpb24ocHJvZ3JhbSkge1xuICBjb25zdCBkb1N0YW5kYWxvbmUgPSAhdGhpcy5vcHRpb25zLmlnbm9yZVN0YW5kYWxvbmU7XG5cbiAgbGV0IGlzUm9vdCA9ICF0aGlzLmlzUm9vdFNlZW47XG4gIHRoaXMuaXNSb290U2VlbiA9IHRydWU7XG5cbiAgbGV0IGJvZHkgPSBwcm9ncmFtLmJvZHk7XG4gIGZvciAobGV0IGkgPSAwLCBsID0gYm9keS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZXQgY3VycmVudCA9IGJvZHlbaV0sXG4gICAgICAgIHN0cmlwID0gdGhpcy5hY2NlcHQoY3VycmVudCk7XG5cbiAgICBpZiAoIXN0cmlwKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBsZXQgX2lzUHJldldoaXRlc3BhY2UgPSBpc1ByZXZXaGl0ZXNwYWNlKGJvZHksIGksIGlzUm9vdCksXG4gICAgICAgIF9pc05leHRXaGl0ZXNwYWNlID0gaXNOZXh0V2hpdGVzcGFjZShib2R5LCBpLCBpc1Jvb3QpLFxuXG4gICAgICAgIG9wZW5TdGFuZGFsb25lID0gc3RyaXAub3BlblN0YW5kYWxvbmUgJiYgX2lzUHJldldoaXRlc3BhY2UsXG4gICAgICAgIGNsb3NlU3RhbmRhbG9uZSA9IHN0cmlwLmNsb3NlU3RhbmRhbG9uZSAmJiBfaXNOZXh0V2hpdGVzcGFjZSxcbiAgICAgICAgaW5saW5lU3RhbmRhbG9uZSA9IHN0cmlwLmlubGluZVN0YW5kYWxvbmUgJiYgX2lzUHJldldoaXRlc3BhY2UgJiYgX2lzTmV4dFdoaXRlc3BhY2U7XG5cbiAgICBpZiAoc3RyaXAuY2xvc2UpIHtcbiAgICAgIG9taXRSaWdodChib2R5LCBpLCB0cnVlKTtcbiAgICB9XG4gICAgaWYgKHN0cmlwLm9wZW4pIHtcbiAgICAgIG9taXRMZWZ0KGJvZHksIGksIHRydWUpO1xuICAgIH1cblxuICAgIGlmIChkb1N0YW5kYWxvbmUgJiYgaW5saW5lU3RhbmRhbG9uZSkge1xuICAgICAgb21pdFJpZ2h0KGJvZHksIGkpO1xuXG4gICAgICBpZiAob21pdExlZnQoYm9keSwgaSkpIHtcbiAgICAgICAgLy8gSWYgd2UgYXJlIG9uIGEgc3RhbmRhbG9uZSBub2RlLCBzYXZlIHRoZSBpbmRlbnQgaW5mbyBmb3IgcGFydGlhbHNcbiAgICAgICAgaWYgKGN1cnJlbnQudHlwZSA9PT0gJ1BhcnRpYWxTdGF0ZW1lbnQnKSB7XG4gICAgICAgICAgLy8gUHVsbCBvdXQgdGhlIHdoaXRlc3BhY2UgZnJvbSB0aGUgZmluYWwgbGluZVxuICAgICAgICAgIGN1cnJlbnQuaW5kZW50ID0gKC8oWyBcXHRdKyQpLykuZXhlYyhib2R5W2kgLSAxXS5vcmlnaW5hbClbMV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRvU3RhbmRhbG9uZSAmJiBvcGVuU3RhbmRhbG9uZSkge1xuICAgICAgb21pdFJpZ2h0KChjdXJyZW50LnByb2dyYW0gfHwgY3VycmVudC5pbnZlcnNlKS5ib2R5KTtcblxuICAgICAgLy8gU3RyaXAgb3V0IHRoZSBwcmV2aW91cyBjb250ZW50IG5vZGUgaWYgaXQncyB3aGl0ZXNwYWNlIG9ubHlcbiAgICAgIG9taXRMZWZ0KGJvZHksIGkpO1xuICAgIH1cbiAgICBpZiAoZG9TdGFuZGFsb25lICYmIGNsb3NlU3RhbmRhbG9uZSkge1xuICAgICAgLy8gQWx3YXlzIHN0cmlwIHRoZSBuZXh0IG5vZGVcbiAgICAgIG9taXRSaWdodChib2R5LCBpKTtcblxuICAgICAgb21pdExlZnQoKGN1cnJlbnQuaW52ZXJzZSB8fCBjdXJyZW50LnByb2dyYW0pLmJvZHkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9ncmFtO1xufTtcblxuV2hpdGVzcGFjZUNvbnRyb2wucHJvdG90eXBlLkJsb2NrU3RhdGVtZW50ID1cbldoaXRlc3BhY2VDb250cm9sLnByb3RvdHlwZS5EZWNvcmF0b3JCbG9jayA9XG5XaGl0ZXNwYWNlQ29udHJvbC5wcm90b3R5cGUuUGFydGlhbEJsb2NrU3RhdGVtZW50ID0gZnVuY3Rpb24oYmxvY2spIHtcbiAgdGhpcy5hY2NlcHQoYmxvY2sucHJvZ3JhbSk7XG4gIHRoaXMuYWNjZXB0KGJsb2NrLmludmVyc2UpO1xuXG4gIC8vIEZpbmQgdGhlIGludmVyc2UgcHJvZ3JhbSB0aGF0IGlzIGludm9sZWQgd2l0aCB3aGl0ZXNwYWNlIHN0cmlwcGluZy5cbiAgbGV0IHByb2dyYW0gPSBibG9jay5wcm9ncmFtIHx8IGJsb2NrLmludmVyc2UsXG4gICAgICBpbnZlcnNlID0gYmxvY2sucHJvZ3JhbSAmJiBibG9jay5pbnZlcnNlLFxuICAgICAgZmlyc3RJbnZlcnNlID0gaW52ZXJzZSxcbiAgICAgIGxhc3RJbnZlcnNlID0gaW52ZXJzZTtcblxuICBpZiAoaW52ZXJzZSAmJiBpbnZlcnNlLmNoYWluZWQpIHtcbiAgICBmaXJzdEludmVyc2UgPSBpbnZlcnNlLmJvZHlbMF0ucHJvZ3JhbTtcblxuICAgIC8vIFdhbGsgdGhlIGludmVyc2UgY2hhaW4gdG8gZmluZCB0aGUgbGFzdCBpbnZlcnNlIHRoYXQgaXMgYWN0dWFsbHkgaW4gdGhlIGNoYWluLlxuICAgIHdoaWxlIChsYXN0SW52ZXJzZS5jaGFpbmVkKSB7XG4gICAgICBsYXN0SW52ZXJzZSA9IGxhc3RJbnZlcnNlLmJvZHlbbGFzdEludmVyc2UuYm9keS5sZW5ndGggLSAxXS5wcm9ncmFtO1xuICAgIH1cbiAgfVxuXG4gIGxldCBzdHJpcCA9IHtcbiAgICBvcGVuOiBibG9jay5vcGVuU3RyaXAub3BlbixcbiAgICBjbG9zZTogYmxvY2suY2xvc2VTdHJpcC5jbG9zZSxcblxuICAgIC8vIERldGVybWluZSB0aGUgc3RhbmRhbG9uZSBjYW5kaWFjeS4gQmFzaWNhbGx5IGZsYWcgb3VyIGNvbnRlbnQgYXMgYmVpbmcgcG9zc2libHkgc3RhbmRhbG9uZVxuICAgIC8vIHNvIG91ciBwYXJlbnQgY2FuIGRldGVybWluZSBpZiB3ZSBhY3R1YWxseSBhcmUgc3RhbmRhbG9uZVxuICAgIG9wZW5TdGFuZGFsb25lOiBpc05leHRXaGl0ZXNwYWNlKHByb2dyYW0uYm9keSksXG4gICAgY2xvc2VTdGFuZGFsb25lOiBpc1ByZXZXaGl0ZXNwYWNlKChmaXJzdEludmVyc2UgfHwgcHJvZ3JhbSkuYm9keSlcbiAgfTtcblxuICBpZiAoYmxvY2sub3BlblN0cmlwLmNsb3NlKSB7XG4gICAgb21pdFJpZ2h0KHByb2dyYW0uYm9keSwgbnVsbCwgdHJ1ZSk7XG4gIH1cblxuICBpZiAoaW52ZXJzZSkge1xuICAgIGxldCBpbnZlcnNlU3RyaXAgPSBibG9jay5pbnZlcnNlU3RyaXA7XG5cbiAgICBpZiAoaW52ZXJzZVN0cmlwLm9wZW4pIHtcbiAgICAgIG9taXRMZWZ0KHByb2dyYW0uYm9keSwgbnVsbCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKGludmVyc2VTdHJpcC5jbG9zZSkge1xuICAgICAgb21pdFJpZ2h0KGZpcnN0SW52ZXJzZS5ib2R5LCBudWxsLCB0cnVlKTtcbiAgICB9XG4gICAgaWYgKGJsb2NrLmNsb3NlU3RyaXAub3Blbikge1xuICAgICAgb21pdExlZnQobGFzdEludmVyc2UuYm9keSwgbnVsbCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gRmluZCBzdGFuZGFsb25lIGVsc2Ugc3RhdG1lbnRzXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuaWdub3JlU3RhbmRhbG9uZVxuICAgICAgICAmJiBpc1ByZXZXaGl0ZXNwYWNlKHByb2dyYW0uYm9keSlcbiAgICAgICAgJiYgaXNOZXh0V2hpdGVzcGFjZShmaXJzdEludmVyc2UuYm9keSkpIHtcbiAgICAgIG9taXRMZWZ0KHByb2dyYW0uYm9keSk7XG4gICAgICBvbWl0UmlnaHQoZmlyc3RJbnZlcnNlLmJvZHkpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChibG9jay5jbG9zZVN0cmlwLm9wZW4pIHtcbiAgICBvbWl0TGVmdChwcm9ncmFtLmJvZHksIG51bGwsIHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIHN0cmlwO1xufTtcblxuV2hpdGVzcGFjZUNvbnRyb2wucHJvdG90eXBlLkRlY29yYXRvciA9XG5XaGl0ZXNwYWNlQ29udHJvbC5wcm90b3R5cGUuTXVzdGFjaGVTdGF0ZW1lbnQgPSBmdW5jdGlvbihtdXN0YWNoZSkge1xuICByZXR1cm4gbXVzdGFjaGUuc3RyaXA7XG59O1xuXG5XaGl0ZXNwYWNlQ29udHJvbC5wcm90b3R5cGUuUGFydGlhbFN0YXRlbWVudCA9XG4gICAgV2hpdGVzcGFjZUNvbnRyb2wucHJvdG90eXBlLkNvbW1lbnRTdGF0ZW1lbnQgPSBmdW5jdGlvbihub2RlKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGxldCBzdHJpcCA9IG5vZGUuc3RyaXAgfHwge307XG4gIHJldHVybiB7XG4gICAgaW5saW5lU3RhbmRhbG9uZTogdHJ1ZSxcbiAgICBvcGVuOiBzdHJpcC5vcGVuLFxuICAgIGNsb3NlOiBzdHJpcC5jbG9zZVxuICB9O1xufTtcblxuXG5mdW5jdGlvbiBpc1ByZXZXaGl0ZXNwYWNlKGJvZHksIGksIGlzUm9vdCkge1xuICBpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaSA9IGJvZHkubGVuZ3RoO1xuICB9XG5cbiAgLy8gTm9kZXMgdGhhdCBlbmQgd2l0aCBuZXdsaW5lcyBhcmUgY29uc2lkZXJlZCB3aGl0ZXNwYWNlIChidXQgYXJlIHNwZWNpYWxcbiAgLy8gY2FzZWQgZm9yIHN0cmlwIG9wZXJhdGlvbnMpXG4gIGxldCBwcmV2ID0gYm9keVtpIC0gMV0sXG4gICAgICBzaWJsaW5nID0gYm9keVtpIC0gMl07XG4gIGlmICghcHJldikge1xuICAgIHJldHVybiBpc1Jvb3Q7XG4gIH1cblxuICBpZiAocHJldi50eXBlID09PSAnQ29udGVudFN0YXRlbWVudCcpIHtcbiAgICByZXR1cm4gKHNpYmxpbmcgfHwgIWlzUm9vdCA/ICgvXFxyP1xcblxccyo/JC8pIDogKC8oXnxcXHI/XFxuKVxccyo/JC8pKS50ZXN0KHByZXYub3JpZ2luYWwpO1xuICB9XG59XG5mdW5jdGlvbiBpc05leHRXaGl0ZXNwYWNlKGJvZHksIGksIGlzUm9vdCkge1xuICBpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaSA9IC0xO1xuICB9XG5cbiAgbGV0IG5leHQgPSBib2R5W2kgKyAxXSxcbiAgICAgIHNpYmxpbmcgPSBib2R5W2kgKyAyXTtcbiAgaWYgKCFuZXh0KSB7XG4gICAgcmV0dXJuIGlzUm9vdDtcbiAgfVxuXG4gIGlmIChuZXh0LnR5cGUgPT09ICdDb250ZW50U3RhdGVtZW50Jykge1xuICAgIHJldHVybiAoc2libGluZyB8fCAhaXNSb290ID8gKC9eXFxzKj9cXHI/XFxuLykgOiAoL15cXHMqPyhcXHI/XFxufCQpLykpLnRlc3QobmV4dC5vcmlnaW5hbCk7XG4gIH1cbn1cblxuLy8gTWFya3MgdGhlIG5vZGUgdG8gdGhlIHJpZ2h0IG9mIHRoZSBwb3NpdGlvbiBhcyBvbWl0dGVkLlxuLy8gSS5lLiB7e2Zvb319JyAnIHdpbGwgbWFyayB0aGUgJyAnIG5vZGUgYXMgb21pdHRlZC5cbi8vXG4vLyBJZiBpIGlzIHVuZGVmaW5lZCwgdGhlbiB0aGUgZmlyc3QgY2hpbGQgd2lsbCBiZSBtYXJrZWQgYXMgc3VjaC5cbi8vXG4vLyBJZiBtdWxpdHBsZSBpcyB0cnV0aHkgdGhlbiBhbGwgd2hpdGVzcGFjZSB3aWxsIGJlIHN0cmlwcGVkIG91dCB1bnRpbCBub24td2hpdGVzcGFjZVxuLy8gY29udGVudCBpcyBtZXQuXG5mdW5jdGlvbiBvbWl0UmlnaHQoYm9keSwgaSwgbXVsdGlwbGUpIHtcbiAgbGV0IGN1cnJlbnQgPSBib2R5W2kgPT0gbnVsbCA/IDAgOiBpICsgMV07XG4gIGlmICghY3VycmVudCB8fCBjdXJyZW50LnR5cGUgIT09ICdDb250ZW50U3RhdGVtZW50JyB8fCAoIW11bHRpcGxlICYmIGN1cnJlbnQucmlnaHRTdHJpcHBlZCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgb3JpZ2luYWwgPSBjdXJyZW50LnZhbHVlO1xuICBjdXJyZW50LnZhbHVlID0gY3VycmVudC52YWx1ZS5yZXBsYWNlKG11bHRpcGxlID8gKC9eXFxzKy8pIDogKC9eWyBcXHRdKlxccj9cXG4/LyksICcnKTtcbiAgY3VycmVudC5yaWdodFN0cmlwcGVkID0gY3VycmVudC52YWx1ZSAhPT0gb3JpZ2luYWw7XG59XG5cbi8vIE1hcmtzIHRoZSBub2RlIHRvIHRoZSBsZWZ0IG9mIHRoZSBwb3NpdGlvbiBhcyBvbWl0dGVkLlxuLy8gSS5lLiAnICd7e2Zvb319IHdpbGwgbWFyayB0aGUgJyAnIG5vZGUgYXMgb21pdHRlZC5cbi8vXG4vLyBJZiBpIGlzIHVuZGVmaW5lZCB0aGVuIHRoZSBsYXN0IGNoaWxkIHdpbGwgYmUgbWFya2VkIGFzIHN1Y2guXG4vL1xuLy8gSWYgbXVsaXRwbGUgaXMgdHJ1dGh5IHRoZW4gYWxsIHdoaXRlc3BhY2Ugd2lsbCBiZSBzdHJpcHBlZCBvdXQgdW50aWwgbm9uLXdoaXRlc3BhY2Vcbi8vIGNvbnRlbnQgaXMgbWV0LlxuZnVuY3Rpb24gb21pdExlZnQoYm9keSwgaSwgbXVsdGlwbGUpIHtcbiAgbGV0IGN1cnJlbnQgPSBib2R5W2kgPT0gbnVsbCA/IGJvZHkubGVuZ3RoIC0gMSA6IGkgLSAxXTtcbiAgaWYgKCFjdXJyZW50IHx8IGN1cnJlbnQudHlwZSAhPT0gJ0NvbnRlbnRTdGF0ZW1lbnQnIHx8ICghbXVsdGlwbGUgJiYgY3VycmVudC5sZWZ0U3RyaXBwZWQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gV2Ugb21pdCB0aGUgbGFzdCBub2RlIGlmIGl0J3Mgd2hpdGVzcGFjZSBvbmx5IGFuZCBub3QgcHJlY2VlZGVkIGJ5IGEgbm9uLWNvbnRlbnQgbm9kZS5cbiAgbGV0IG9yaWdpbmFsID0gY3VycmVudC52YWx1ZTtcbiAgY3VycmVudC52YWx1ZSA9IGN1cnJlbnQudmFsdWUucmVwbGFjZShtdWx0aXBsZSA/ICgvXFxzKyQvKSA6ICgvWyBcXHRdKyQvKSwgJycpO1xuICBjdXJyZW50LmxlZnRTdHJpcHBlZCA9IGN1cnJlbnQudmFsdWUgIT09IG9yaWdpbmFsO1xuICByZXR1cm4gY3VycmVudC5sZWZ0U3RyaXBwZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdoaXRlc3BhY2VDb250cm9sO1xuIl19
