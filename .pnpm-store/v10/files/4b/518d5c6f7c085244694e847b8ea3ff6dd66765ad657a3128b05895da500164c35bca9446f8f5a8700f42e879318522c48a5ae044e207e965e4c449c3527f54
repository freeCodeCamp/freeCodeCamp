'use strict';var _contextCompat = require('eslint-module-utils/contextCompat');

var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

function getImportValue(node) {
  return node.type === 'ImportDeclaration' ?
  node.source.value :
  node.moduleReference.expression.value;
}

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Style guide',
      description: 'Ensure all imports appear before other statements.',
      url: (0, _docsUrl2['default'])('first') },

    fixable: 'code',
    schema: [
    {
      type: 'string',
      'enum': ['absolute-first', 'disable-absolute-first'] }] },




  create: function () {function create(context) {
      function isPossibleDirective(node) {
        return node.type === 'ExpressionStatement' &&
        node.expression.type === 'Literal' &&
        typeof node.expression.value === 'string';
      }

      return {
        Program: function () {function Program(n) {
            var body = n.body;
            if (!body) {
              return;
            }
            var absoluteFirst = context.options[0] === 'absolute-first';
            var message = 'Import in body of module; reorder to top.';
            var sourceCode = (0, _contextCompat.getSourceCode)(context);
            var originSourceCode = sourceCode.getText();
            var nonImportCount = 0;
            var anyExpressions = false;
            var anyRelative = false;
            var lastLegalImp = null;
            var errorInfos = [];
            var shouldSort = true;
            var lastSortNodesIndex = 0;
            body.forEach(function (node, index) {
              if (!anyExpressions && isPossibleDirective(node)) {
                return;
              }

              anyExpressions = true;

              if (node.type === 'ImportDeclaration' || node.type === 'TSImportEqualsDeclaration') {
                if (absoluteFirst) {
                  if (/^\./.test(getImportValue(node))) {
                    anyRelative = true;
                  } else if (anyRelative) {
                    context.report({
                      node: node.type === 'ImportDeclaration' ? node.source : node.moduleReference,
                      message: 'Absolute imports should come before relative imports.' });

                  }
                }
                if (nonImportCount > 0) {var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
                    for (var _iterator = (0, _contextCompat.getDeclaredVariables)(context, node)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var variable = _step.value;
                      if (!shouldSort) {break;}
                      var references = variable.references;
                      if (references.length) {var _iteratorNormalCompletion2 = true;var _didIteratorError2 = false;var _iteratorError2 = undefined;try {
                          for (var _iterator2 = references[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {var reference = _step2.value;
                            if (reference.identifier.range[0] < node.range[1]) {
                              shouldSort = false;
                              break;
                            }
                          }} catch (err) {_didIteratorError2 = true;_iteratorError2 = err;} finally {try {if (!_iteratorNormalCompletion2 && _iterator2['return']) {_iterator2['return']();}} finally {if (_didIteratorError2) {throw _iteratorError2;}}}
                      }
                    }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator['return']) {_iterator['return']();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
                  shouldSort && (lastSortNodesIndex = errorInfos.length);
                  errorInfos.push({
                    node: node,
                    range: [body[index - 1].range[1], node.range[1]] });

                } else {
                  lastLegalImp = node;
                }
              } else {
                nonImportCount++;
              }
            });
            if (!errorInfos.length) {return;}
            errorInfos.forEach(function (errorInfo, index) {
              var node = errorInfo.node;
              var infos = {
                node: node,
                message: message };

              if (index < lastSortNodesIndex) {
                infos.fix = function (fixer) {
                  return fixer.insertTextAfter(node, '');
                };
              } else if (index === lastSortNodesIndex) {
                var sortNodes = errorInfos.slice(0, lastSortNodesIndex + 1);
                infos.fix = function (fixer) {
                  var removeFixers = sortNodes.map(function (_errorInfo) {
                    return fixer.removeRange(_errorInfo.range);
                  });
                  var range = [0, removeFixers[removeFixers.length - 1].range[1]];
                  var insertSourceCode = sortNodes.map(function (_errorInfo) {
                    var nodeSourceCode = String.prototype.slice.apply(
                    originSourceCode, _errorInfo.range);

                    if (/\S/.test(nodeSourceCode[0])) {
                      return '\n' + String(nodeSourceCode);
                    }
                    return nodeSourceCode;
                  }).join('');
                  var insertFixer = null;
                  var replaceSourceCode = '';
                  if (!lastLegalImp) {
                    insertSourceCode = insertSourceCode.trim() + insertSourceCode.match(/^(\s+)/)[0];
                  }
                  insertFixer = lastLegalImp ?
                  fixer.insertTextAfter(lastLegalImp, insertSourceCode) :
                  fixer.insertTextBefore(body[0], insertSourceCode);

                  var fixers = [insertFixer].concat(removeFixers);
                  fixers.forEach(function (computedFixer, i) {
                    replaceSourceCode += originSourceCode.slice(
                    fixers[i - 1] ? fixers[i - 1].range[1] : 0, computedFixer.range[0]) +
                    computedFixer.text;
                  });

                  return fixer.replaceTextRange(range, replaceSourceCode);
                };
              }
              context.report(infos);
            });
          }return Program;}() };

    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9maXJzdC5qcyJdLCJuYW1lcyI6WyJnZXRJbXBvcnRWYWx1ZSIsIm5vZGUiLCJ0eXBlIiwic291cmNlIiwidmFsdWUiLCJtb2R1bGVSZWZlcmVuY2UiLCJleHByZXNzaW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1ldGEiLCJkb2NzIiwiY2F0ZWdvcnkiLCJkZXNjcmlwdGlvbiIsInVybCIsImZpeGFibGUiLCJzY2hlbWEiLCJjcmVhdGUiLCJjb250ZXh0IiwiaXNQb3NzaWJsZURpcmVjdGl2ZSIsIlByb2dyYW0iLCJuIiwiYm9keSIsImFic29sdXRlRmlyc3QiLCJvcHRpb25zIiwibWVzc2FnZSIsInNvdXJjZUNvZGUiLCJvcmlnaW5Tb3VyY2VDb2RlIiwiZ2V0VGV4dCIsIm5vbkltcG9ydENvdW50IiwiYW55RXhwcmVzc2lvbnMiLCJhbnlSZWxhdGl2ZSIsImxhc3RMZWdhbEltcCIsImVycm9ySW5mb3MiLCJzaG91bGRTb3J0IiwibGFzdFNvcnROb2Rlc0luZGV4IiwiZm9yRWFjaCIsImluZGV4IiwidGVzdCIsInJlcG9ydCIsInZhcmlhYmxlIiwicmVmZXJlbmNlcyIsImxlbmd0aCIsInJlZmVyZW5jZSIsImlkZW50aWZpZXIiLCJyYW5nZSIsInB1c2giLCJlcnJvckluZm8iLCJpbmZvcyIsImZpeCIsImZpeGVyIiwiaW5zZXJ0VGV4dEFmdGVyIiwic29ydE5vZGVzIiwic2xpY2UiLCJyZW1vdmVGaXhlcnMiLCJtYXAiLCJfZXJyb3JJbmZvIiwicmVtb3ZlUmFuZ2UiLCJpbnNlcnRTb3VyY2VDb2RlIiwibm9kZVNvdXJjZUNvZGUiLCJTdHJpbmciLCJwcm90b3R5cGUiLCJhcHBseSIsImpvaW4iLCJpbnNlcnRGaXhlciIsInJlcGxhY2VTb3VyY2VDb2RlIiwidHJpbSIsIm1hdGNoIiwiaW5zZXJ0VGV4dEJlZm9yZSIsImZpeGVycyIsImNvbmNhdCIsImNvbXB1dGVkRml4ZXIiLCJpIiwidGV4dCIsInJlcGxhY2VUZXh0UmFu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Q25CZ0IsMkJBQU9HLElBQUksQ0FBWCxJQUFnQkgsT0FBT0csSUFBSSxDQUFYLEVBQWMzQixLQUFkLENBQW9CLENBQXBCLENBQWhCLEdBQXlDLENBRHRCLEVBQ3lCMEIsY0FBYzFCLEtBQWQsQ0FBb0IsQ0FBcEIsQ0FEekI7QUFFakIwQixrQ0FBY0UsSUFGbEI7QUFHRCxtQkFKRDs7QUFNQSx5QkFBT3ZCLE1BQU13QixnQkFBTixDQUF1QjdCLEtBQXZCLEVBQThCb0IsaUJBQTlCLENBQVA7QUFDRCxpQkEvQkQ7QUFnQ0Q7QUFDRC9DLHNCQUFRcUIsTUFBUixDQUFlUyxLQUFmO0FBQ0QsYUE5Q0Q7QUErQ0QsV0E1R0ksb0JBQVA7O0FBOEdELEtBdEljLG1CQUFqQiIsImZpbGUiOiJmaXJzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldERlY2xhcmVkVmFyaWFibGVzLCBnZXRTb3VyY2VDb2RlIH0gZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy9jb250ZXh0Q29tcGF0JztcblxuaW1wb3J0IGRvY3NVcmwgZnJvbSAnLi4vZG9jc1VybCc7XG5cbmZ1bmN0aW9uIGdldEltcG9ydFZhbHVlKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ0ltcG9ydERlY2xhcmF0aW9uJ1xuICAgID8gbm9kZS5zb3VyY2UudmFsdWVcbiAgICA6IG5vZGUubW9kdWxlUmVmZXJlbmNlLmV4cHJlc3Npb24udmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtZXRhOiB7XG4gICAgdHlwZTogJ3N1Z2dlc3Rpb24nLFxuICAgIGRvY3M6IHtcbiAgICAgIGNhdGVnb3J5OiAnU3R5bGUgZ3VpZGUnLFxuICAgICAgZGVzY3JpcHRpb246ICdFbnN1cmUgYWxsIGltcG9ydHMgYXBwZWFyIGJlZm9yZSBvdGhlciBzdGF0ZW1lbnRzLicsXG4gICAgICB1cmw6IGRvY3NVcmwoJ2ZpcnN0JyksXG4gICAgfSxcbiAgICBmaXhhYmxlOiAnY29kZScsXG4gICAgc2NoZW1hOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBlbnVtOiBbJ2Fic29sdXRlLWZpcnN0JywgJ2Rpc2FibGUtYWJzb2x1dGUtZmlyc3QnXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcblxuICBjcmVhdGUoY29udGV4dCkge1xuICAgIGZ1bmN0aW9uIGlzUG9zc2libGVEaXJlY3RpdmUobm9kZSkge1xuICAgICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ0V4cHJlc3Npb25TdGF0ZW1lbnQnXG4gICAgICAgICYmIG5vZGUuZXhwcmVzc2lvbi50eXBlID09PSAnTGl0ZXJhbCdcbiAgICAgICAgJiYgdHlwZW9mIG5vZGUuZXhwcmVzc2lvbi52YWx1ZSA9PT0gJ3N0cmluZyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIFByb2dyYW0obikge1xuICAgICAgICBjb25zdCBib2R5ID0gbi5ib2R5O1xuICAgICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWJzb2x1dGVGaXJzdCA9IGNvbnRleHQub3B0aW9uc1swXSA9PT0gJ2Fic29sdXRlLWZpcnN0JztcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdJbXBvcnQgaW4gYm9keSBvZiBtb2R1bGU7IHJlb3JkZXIgdG8gdG9wLic7XG4gICAgICAgIGNvbnN0IHNvdXJjZUNvZGUgPSBnZXRTb3VyY2VDb2RlKGNvbnRleHQpO1xuICAgICAgICBjb25zdCBvcmlnaW5Tb3VyY2VDb2RlID0gc291cmNlQ29kZS5nZXRUZXh0KCk7XG4gICAgICAgIGxldCBub25JbXBvcnRDb3VudCA9IDA7XG4gICAgICAgIGxldCBhbnlFeHByZXNzaW9ucyA9IGZhbHNlO1xuICAgICAgICBsZXQgYW55UmVsYXRpdmUgPSBmYWxzZTtcbiAgICAgICAgbGV0IGxhc3RMZWdhbEltcCA9IG51bGw7XG4gICAgICAgIGNvbnN0IGVycm9ySW5mb3MgPSBbXTtcbiAgICAgICAgbGV0IHNob3VsZFNvcnQgPSB0cnVlO1xuICAgICAgICBsZXQgbGFzdFNvcnROb2Rlc0luZGV4ID0gMDtcbiAgICAgICAgYm9keS5mb3JFYWNoKGZ1bmN0aW9uIChub2RlLCBpbmRleCkge1xuICAgICAgICAgIGlmICghYW55RXhwcmVzc2lvbnMgJiYgaXNQb3NzaWJsZURpcmVjdGl2ZShub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFueUV4cHJlc3Npb25zID0gdHJ1ZTtcblxuICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdJbXBvcnREZWNsYXJhdGlvbicgfHwgbm9kZS50eXBlID09PSAnVFNJbXBvcnRFcXVhbHNEZWNsYXJhdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChhYnNvbHV0ZUZpcnN0KSB7XG4gICAgICAgICAgICAgIGlmICgoL15cXC4vKS50ZXN0KGdldEltcG9ydFZhbHVlKG5vZGUpKSkge1xuICAgICAgICAgICAgICAgIGFueVJlbGF0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChhbnlSZWxhdGl2ZSkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQucmVwb3J0KHtcbiAgICAgICAgICAgICAgICAgIG5vZGU6IG5vZGUudHlwZSA9PT0gJ0ltcG9ydERlY2xhcmF0aW9uJyA/IG5vZGUuc291cmNlIDogbm9kZS5tb2R1bGVSZWZlcmVuY2UsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQWJzb2x1dGUgaW1wb3J0cyBzaG91bGQgY29tZSBiZWZvcmUgcmVsYXRpdmUgaW1wb3J0cy4nLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm9uSW1wb3J0Q291bnQgPiAwKSB7XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgdmFyaWFibGUgb2YgZ2V0RGVjbGFyZWRWYXJpYWJsZXMoY29udGV4dCwgbm9kZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNob3VsZFNvcnQpIHsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICBjb25zdCByZWZlcmVuY2VzID0gdmFyaWFibGUucmVmZXJlbmNlcztcbiAgICAgICAgICAgICAgICBpZiAocmVmZXJlbmNlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcmVmZXJlbmNlIG9mIHJlZmVyZW5jZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZmVyZW5jZS5pZGVudGlmaWVyLnJhbmdlWzBdIDwgbm9kZS5yYW5nZVsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgIHNob3VsZFNvcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzaG91bGRTb3J0ICYmIChsYXN0U29ydE5vZGVzSW5kZXggPSBlcnJvckluZm9zLmxlbmd0aCk7XG4gICAgICAgICAgICAgIGVycm9ySW5mb3MucHVzaCh7XG4gICAgICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgICAgICByYW5nZTogW2JvZHlbaW5kZXggLSAxXS5yYW5nZVsxXSwgbm9kZS5yYW5nZVsxXV0sXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbGFzdExlZ2FsSW1wID0gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9uSW1wb3J0Q291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWVycm9ySW5mb3MubGVuZ3RoKSB7IHJldHVybjsgfVxuICAgICAgICBlcnJvckluZm9zLmZvckVhY2goZnVuY3Rpb24gKGVycm9ySW5mbywgaW5kZXgpIHtcbiAgICAgICAgICBjb25zdCBub2RlID0gZXJyb3JJbmZvLm5vZGU7XG4gICAgICAgICAgY29uc3QgaW5mb3MgPSB7XG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChpbmRleCA8IGxhc3RTb3J0Tm9kZXNJbmRleCkge1xuICAgICAgICAgICAgaW5mb3MuZml4ID0gZnVuY3Rpb24gKGZpeGVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmaXhlci5pbnNlcnRUZXh0QWZ0ZXIobm9kZSwgJycpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBsYXN0U29ydE5vZGVzSW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IHNvcnROb2RlcyA9IGVycm9ySW5mb3Muc2xpY2UoMCwgbGFzdFNvcnROb2Rlc0luZGV4ICsgMSk7XG4gICAgICAgICAgICBpbmZvcy5maXggPSBmdW5jdGlvbiAoZml4ZXIpIHtcbiAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlRml4ZXJzID0gc29ydE5vZGVzLm1hcChmdW5jdGlvbiAoX2Vycm9ySW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaXhlci5yZW1vdmVSYW5nZShfZXJyb3JJbmZvLnJhbmdlKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gWzAsIHJlbW92ZUZpeGVyc1tyZW1vdmVGaXhlcnMubGVuZ3RoIC0gMV0ucmFuZ2VbMV1dO1xuICAgICAgICAgICAgICBsZXQgaW5zZXJ0U291cmNlQ29kZSA9IHNvcnROb2Rlcy5tYXAoZnVuY3Rpb24gKF9lcnJvckluZm8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlU291cmNlQ29kZSA9IFN0cmluZy5wcm90b3R5cGUuc2xpY2UuYXBwbHkoXG4gICAgICAgICAgICAgICAgICBvcmlnaW5Tb3VyY2VDb2RlLCBfZXJyb3JJbmZvLnJhbmdlLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKCgvXFxTLykudGVzdChub2RlU291cmNlQ29kZVswXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBgXFxuJHtub2RlU291cmNlQ29kZX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZVNvdXJjZUNvZGU7XG4gICAgICAgICAgICAgIH0pLmpvaW4oJycpO1xuICAgICAgICAgICAgICBsZXQgaW5zZXJ0Rml4ZXIgPSBudWxsO1xuICAgICAgICAgICAgICBsZXQgcmVwbGFjZVNvdXJjZUNvZGUgPSAnJztcbiAgICAgICAgICAgICAgaWYgKCFsYXN0TGVnYWxJbXApIHtcbiAgICAgICAgICAgICAgICBpbnNlcnRTb3VyY2VDb2RlID0gaW5zZXJ0U291cmNlQ29kZS50cmltKCkgKyBpbnNlcnRTb3VyY2VDb2RlLm1hdGNoKC9eKFxccyspLylbMF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaW5zZXJ0Rml4ZXIgPSBsYXN0TGVnYWxJbXBcbiAgICAgICAgICAgICAgICA/IGZpeGVyLmluc2VydFRleHRBZnRlcihsYXN0TGVnYWxJbXAsIGluc2VydFNvdXJjZUNvZGUpXG4gICAgICAgICAgICAgICAgOiBmaXhlci5pbnNlcnRUZXh0QmVmb3JlKGJvZHlbMF0sIGluc2VydFNvdXJjZUNvZGUpO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGZpeGVycyA9IFtpbnNlcnRGaXhlcl0uY29uY2F0KHJlbW92ZUZpeGVycyk7XG4gICAgICAgICAgICAgIGZpeGVycy5mb3JFYWNoKChjb21wdXRlZEZpeGVyLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVwbGFjZVNvdXJjZUNvZGUgKz0gb3JpZ2luU291cmNlQ29kZS5zbGljZShcbiAgICAgICAgICAgICAgICAgIGZpeGVyc1tpIC0gMV0gPyBmaXhlcnNbaSAtIDFdLnJhbmdlWzFdIDogMCwgY29tcHV0ZWRGaXhlci5yYW5nZVswXSxcbiAgICAgICAgICAgICAgICApICsgY29tcHV0ZWRGaXhlci50ZXh0O1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICByZXR1cm4gZml4ZXIucmVwbGFjZVRleHRSYW5nZShyYW5nZSwgcmVwbGFjZVNvdXJjZUNvZGUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGV4dC5yZXBvcnQoaW5mb3MpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbn07XG4iXX0=