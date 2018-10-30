'use strict';

var _staticRequire = require('../core/staticRequire');

var _staticRequire2 = _interopRequireDefault(_staticRequire);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @fileoverview Rule to enforce new line after import not followed by another import.
 * @author Radek Benkel
 */

const log = (0, _debug2.default)('eslint-plugin-import:rules:newline-after-import');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

function containsNodeOrEqual(outerNode, innerNode) {
  return outerNode.range[0] <= innerNode.range[0] && outerNode.range[1] >= innerNode.range[1];
}

function getScopeBody(scope) {
  if (scope.block.type === 'SwitchStatement') {
    log('SwitchStatement scopes not supported');
    return null;
  }

  const body = scope.block.body;

  if (body && body.type === 'BlockStatement') {
    return body.body;
  }

  return body;
}

function findNodeIndexInScopeBody(body, nodeToFind) {
  return body.findIndex(node => containsNodeOrEqual(node, nodeToFind));
}

function getLineDifference(node, nextNode) {
  return nextNode.loc.start.line - node.loc.end.line;
}

function isClassWithDecorator(node) {
  return node.type === 'ClassDeclaration' && node.decorators && node.decorators.length;
}

module.exports = {
  meta: {
    docs: {}
  },
  create: function (context) {
    let level = 0;
    const requireCalls = [];

    function checkForNewLine(node, nextNode, type) {
      if (isClassWithDecorator(nextNode)) {
        nextNode = nextNode.decorators[0];
      }

      if (getLineDifference(node, nextNode) < 2) {
        let column = node.loc.start.column;

        if (node.loc.start.line !== node.loc.end.line) {
          column = 0;
        }

        context.report({
          loc: {
            line: node.loc.end.line,
            column
          },
          message: `Expected empty line after ${ type } statement not followed by another ${ type }.`
        });
      }
    }

    function incrementLevel() {
      level++;
    }
    function decrementLevel() {
      level--;
    }

    return {
      ImportDeclaration: function (node) {
        const parent = node.parent;

        const nodePosition = parent.body.indexOf(node);
        const nextNode = parent.body[nodePosition + 1];

        if (nextNode && nextNode.type !== 'ImportDeclaration') {
          checkForNewLine(node, nextNode, 'import');
        }
      },
      CallExpression: function (node) {
        if ((0, _staticRequire2.default)(node) && level === 0) {
          requireCalls.push(node);
        }
      },
      'Program:exit': function () {
        log('exit processing for', context.getFilename());
        const scopeBody = getScopeBody(context.getScope());
        log('got scope:', scopeBody);

        requireCalls.forEach(function (node, index) {
          const nodePosition = findNodeIndexInScopeBody(scopeBody, node);
          log('node position in scope:', nodePosition);

          const statementWithRequireCall = scopeBody[nodePosition];
          const nextStatement = scopeBody[nodePosition + 1];
          const nextRequireCall = requireCalls[index + 1];

          if (nextRequireCall && containsNodeOrEqual(statementWithRequireCall, nextRequireCall)) {
            return;
          }

          if (nextStatement && (!nextRequireCall || !containsNodeOrEqual(nextStatement, nextRequireCall))) {

            checkForNewLine(statementWithRequireCall, nextStatement, 'require');
          }
        });
      },
      FunctionDeclaration: incrementLevel,
      FunctionExpression: incrementLevel,
      ArrowFunctionExpression: incrementLevel,
      BlockStatement: incrementLevel,
      ObjectExpression: incrementLevel,
      Decorator: incrementLevel,
      'FunctionDeclaration:exit': decrementLevel,
      'FunctionExpression:exit': decrementLevel,
      'ArrowFunctionExpression:exit': decrementLevel,
      'BlockStatement:exit': decrementLevel,
      'ObjectExpression:exit': decrementLevel,
      'Decorator:exit': decrementLevel
    };
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25ld2xpbmUtYWZ0ZXItaW1wb3J0LmpzIl0sIm5hbWVzIjpbImxvZyIsImNvbnRhaW5zTm9kZU9yRXF1YWwiLCJvdXRlck5vZGUiLCJpbm5lck5vZGUiLCJyYW5nZSIsImdldFNjb3BlQm9keSIsInNjb3BlIiwiYmxvY2siLCJ0eXBlIiwiYm9keSIsImZpbmROb2RlSW5kZXhJblNjb3BlQm9keSIsIm5vZGVUb0ZpbmQiLCJmaW5kSW5kZXgiLCJub2RlIiwiZ2V0TGluZURpZmZlcmVuY2UiLCJuZXh0Tm9kZSIsImxvYyIsInN0YXJ0IiwibGluZSIsImVuZCIsImlzQ2xhc3NXaXRoRGVjb3JhdG9yIiwiZGVjb3JhdG9ycyIsImxlbmd0aCIsIm1vZHVsZSIsImV4cG9ydHMiLCJtZXRhIiwiZG9jcyIsImNyZWF0ZSIsImNvbnRleHQiLCJsZXZlbCIsInJlcXVpcmVDYWxscyIsImNoZWNrRm9yTmV3TGluZSIsImNvbHVtbiIsInJlcG9ydCIsIm1lc3NhZ2UiLCJpbmNyZW1lbnRMZXZlbCIsImRlY3JlbWVudExldmVsIiwiSW1wb3J0RGVjbGFyYXRpb24iLCJwYXJlbnQiLCJub2RlUG9zaXRpb24iLCJpbmRleE9mIiwiQ2FsbEV4cHJlc3Npb24iLCJwdXNoIiwiZ2V0RmlsZW5hbWUiLCJzY29wZUJvZHkiLCJnZXRTY29wZSIsImZvckVhY2giLCJpbmRleCIsInN0YXRlbWVudFdpdGhSZXF1aXJlQ2FsbCIsIm5leHRTdGF0ZW1lbnQiLCJuZXh0UmVxdWlyZUNhbGwiLCJGdW5jdGlvbkRlY2xhcmF0aW9uIiwiRnVuY3Rpb25FeHByZXNzaW9uIiwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24iLCJCbG9ja1N0YXRlbWVudCIsIk9iamVjdEV4cHJlc3Npb24iLCJEZWNvcmF0b3IiXSwibWFwcGluZ3MiOiI7O0FBS0E7Ozs7QUFFQTs7Ozs7O0FBUEE7Ozs7O0FBUUEsTUFBTUEsTUFBTSxxQkFBTSxpREFBTixDQUFaOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFT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QXZDaEI7QUF3Q0xpQiwwQkFBb0JqQixjQXhDZjtBQXlDTGtCLCtCQUF5QmxCLGNBekNwQjtBQTBDTG1CLHNCQUFnQm5CLGNBMUNYO0FBMkNMb0Isd0JBQWtCcEIsY0EzQ2I7QUE0Q0xxQixpQkFBV3JCLGNBNUNOO0FBNkNMLGtDQUE0QkMsY0E3Q3ZCO0FBOENMLGlDQUEyQkEsY0E5Q3RCO0FBK0NMLHNDQUFnQ0EsY0EvQzNCO0FBZ0RMLDZCQUF1QkEsY0FoRGxCO0FBaURMLCtCQUF5QkEsY0FqRHBCO0FBa0RMLHdCQUFrQkE7QUFsRGIsS0FBUDtBQW9ERDtBQXpGYyxDQUFqQiIsImZpbGUiOiJydWxlcy9uZXdsaW5lLWFmdGVyLWltcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVvdmVydmlldyBSdWxlIHRvIGVuZm9yY2UgbmV3IGxpbmUgYWZ0ZXIgaW1wb3J0IG5vdCBmb2xsb3dlZCBieSBhbm90aGVyIGltcG9ydC5cbiAqIEBhdXRob3IgUmFkZWsgQmVua2VsXG4gKi9cblxuaW1wb3J0IGlzU3RhdGljUmVxdWlyZSBmcm9tICcuLi9jb3JlL3N0YXRpY1JlcXVpcmUnXG5cbmltcG9ydCBkZWJ1ZyBmcm9tICdkZWJ1ZydcbmNvbnN0IGxvZyA9IGRlYnVnKCdlc2xpbnQtcGx1Z2luLWltcG9ydDpydWxlczpuZXdsaW5lLWFmdGVyLWltcG9ydCcpXG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBSdWxlIERlZmluaXRpb25cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGNvbnRhaW5zTm9kZU9yRXF1YWwob3V0ZXJOb2RlLCBpbm5lck5vZGUpIHtcbiAgICByZXR1cm4gb3V0ZXJOb2RlLnJhbmdlWzBdIDw9IGlubmVyTm9kZS5yYW5nZVswXSAmJiBvdXRlck5vZGUucmFuZ2VbMV0gPj0gaW5uZXJOb2RlLnJhbmdlWzFdXG59XG5cbmZ1bmN0aW9uIGdldFNjb3BlQm9keShzY29wZSkge1xuICAgIGlmIChzY29wZS5ibG9jay50eXBlID09PSAnU3dpdGNoU3RhdGVtZW50Jykge1xuICAgICAgbG9nKCdTd2l0Y2hTdGF0ZW1lbnQgc2NvcGVzIG5vdCBzdXBwb3J0ZWQnKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCB7IGJvZHkgfSA9IHNjb3BlLmJsb2NrXG4gICAgaWYgKGJvZHkgJiYgYm9keS50eXBlID09PSAnQmxvY2tTdGF0ZW1lbnQnKSB7XG4gICAgICAgIHJldHVybiBib2R5LmJvZHlcbiAgICB9XG5cbiAgICByZXR1cm4gYm9keVxufVxuXG5mdW5jdGlvbiBmaW5kTm9kZUluZGV4SW5TY29wZUJvZHkoYm9keSwgbm9kZVRvRmluZCkge1xuICAgIHJldHVybiBib2R5LmZpbmRJbmRleCgobm9kZSkgPT4gY29udGFpbnNOb2RlT3JFcXVhbChub2RlLCBub2RlVG9GaW5kKSlcbn1cblxuZnVuY3Rpb24gZ2V0TGluZURpZmZlcmVuY2Uobm9kZSwgbmV4dE5vZGUpIHtcbiAgcmV0dXJuIG5leHROb2RlLmxvYy5zdGFydC5saW5lIC0gbm9kZS5sb2MuZW5kLmxpbmVcbn1cblxuZnVuY3Rpb24gaXNDbGFzc1dpdGhEZWNvcmF0b3Iobm9kZSkge1xuICByZXR1cm4gbm9kZS50eXBlID09PSAnQ2xhc3NEZWNsYXJhdGlvbicgJiYgbm9kZS5kZWNvcmF0b3JzICYmIG5vZGUuZGVjb3JhdG9ycy5sZW5ndGhcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1ldGE6IHtcbiAgICBkb2NzOiB7fSxcbiAgfSxcbiAgY3JlYXRlOiBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgIGxldCBsZXZlbCA9IDBcbiAgICBjb25zdCByZXF1aXJlQ2FsbHMgPSBbXVxuXG4gICAgZnVuY3Rpb24gY2hlY2tGb3JOZXdMaW5lKG5vZGUsIG5leHROb2RlLCB0eXBlKSB7XG4gICAgICBpZiAoaXNDbGFzc1dpdGhEZWNvcmF0b3IobmV4dE5vZGUpKSB7XG4gICAgICAgIG5leHROb2RlID0gbmV4dE5vZGUuZGVjb3JhdG9yc1swXVxuICAgICAgfVxuXG4gICAgICBpZiAoZ2V0TGluZURpZmZlcmVuY2Uobm9kZSwgbmV4dE5vZGUpIDwgMikge1xuICAgICAgICBsZXQgY29sdW1uID0gbm9kZS5sb2Muc3RhcnQuY29sdW1uXG5cbiAgICAgICAgaWYgKG5vZGUubG9jLnN0YXJ0LmxpbmUgIT09IG5vZGUubG9jLmVuZC5saW5lKSB7XG4gICAgICAgICAgY29sdW1uID0gMFxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICAgIGxvYzoge1xuICAgICAgICAgICAgbGluZTogbm9kZS5sb2MuZW5kLmxpbmUsXG4gICAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtZXNzYWdlOiBgRXhwZWN0ZWQgZW1wdHkgbGluZSBhZnRlciAke3R5cGV9IHN0YXRlbWVudCBub3QgZm9sbG93ZWQgYnkgYW5vdGhlciAke3R5cGV9LmAsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5jcmVtZW50TGV2ZWwoKSB7XG4gICAgICBsZXZlbCsrXG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlY3JlbWVudExldmVsKCkge1xuICAgICAgbGV2ZWwtLVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBJbXBvcnREZWNsYXJhdGlvbjogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgY29uc3QgeyBwYXJlbnQgfSA9IG5vZGVcbiAgICAgICAgY29uc3Qgbm9kZVBvc2l0aW9uID0gcGFyZW50LmJvZHkuaW5kZXhPZihub2RlKVxuICAgICAgICBjb25zdCBuZXh0Tm9kZSA9IHBhcmVudC5ib2R5W25vZGVQb3NpdGlvbiArIDFdXG5cbiAgICAgICAgaWYgKG5leHROb2RlICYmIG5leHROb2RlLnR5cGUgIT09ICdJbXBvcnREZWNsYXJhdGlvbicpIHtcbiAgICAgICAgICBjaGVja0Zvck5ld0xpbmUobm9kZSwgbmV4dE5vZGUsICdpbXBvcnQnKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgQ2FsbEV4cHJlc3Npb246IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljUmVxdWlyZShub2RlKSAmJiBsZXZlbCA9PT0gMCkge1xuICAgICAgICAgIHJlcXVpcmVDYWxscy5wdXNoKG5vZGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnUHJvZ3JhbTpleGl0JzogZnVuY3Rpb24gKCkge1xuICAgICAgICBsb2coJ2V4aXQgcHJvY2Vzc2luZyBmb3InLCBjb250ZXh0LmdldEZpbGVuYW1lKCkpXG4gICAgICAgIGNvbnN0IHNjb3BlQm9keSA9IGdldFNjb3BlQm9keShjb250ZXh0LmdldFNjb3BlKCkpXG4gICAgICAgIGxvZygnZ290IHNjb3BlOicsIHNjb3BlQm9keSlcblxuICAgICAgICByZXF1aXJlQ2FsbHMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSwgaW5kZXgpIHtcbiAgICAgICAgICBjb25zdCBub2RlUG9zaXRpb24gPSBmaW5kTm9kZUluZGV4SW5TY29wZUJvZHkoc2NvcGVCb2R5LCBub2RlKVxuICAgICAgICAgIGxvZygnbm9kZSBwb3NpdGlvbiBpbiBzY29wZTonLCBub2RlUG9zaXRpb24pXG5cbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRXaXRoUmVxdWlyZUNhbGwgPSBzY29wZUJvZHlbbm9kZVBvc2l0aW9uXVxuICAgICAgICAgIGNvbnN0IG5leHRTdGF0ZW1lbnQgPSBzY29wZUJvZHlbbm9kZVBvc2l0aW9uICsgMV1cbiAgICAgICAgICBjb25zdCBuZXh0UmVxdWlyZUNhbGwgPSByZXF1aXJlQ2FsbHNbaW5kZXggKyAxXVxuXG4gICAgICAgICAgaWYgKG5leHRSZXF1aXJlQ2FsbCAmJiBjb250YWluc05vZGVPckVxdWFsKHN0YXRlbWVudFdpdGhSZXF1aXJlQ2FsbCwgbmV4dFJlcXVpcmVDYWxsKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG5leHRTdGF0ZW1lbnQgJiZcbiAgICAgICAgICAgICAoIW5leHRSZXF1aXJlQ2FsbCB8fCAhY29udGFpbnNOb2RlT3JFcXVhbChuZXh0U3RhdGVtZW50LCBuZXh0UmVxdWlyZUNhbGwpKSkge1xuXG4gICAgICAgICAgICBjaGVja0Zvck5ld0xpbmUoc3RhdGVtZW50V2l0aFJlcXVpcmVDYWxsLCBuZXh0U3RhdGVtZW50LCAncmVxdWlyZScpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIEZ1bmN0aW9uRGVjbGFyYXRpb246IGluY3JlbWVudExldmVsLFxuICAgICAgRnVuY3Rpb25FeHByZXNzaW9uOiBpbmNyZW1lbnRMZXZlbCxcbiAgICAgIEFycm93RnVuY3Rpb25FeHByZXNzaW9uOiBpbmNyZW1lbnRMZXZlbCxcbiAgICAgIEJsb2NrU3RhdGVtZW50OiBpbmNyZW1lbnRMZXZlbCxcbiAgICAgIE9iamVjdEV4cHJlc3Npb246IGluY3JlbWVudExldmVsLFxuICAgICAgRGVjb3JhdG9yOiBpbmNyZW1lbnRMZXZlbCxcbiAgICAgICdGdW5jdGlvbkRlY2xhcmF0aW9uOmV4aXQnOiBkZWNyZW1lbnRMZXZlbCxcbiAgICAgICdGdW5jdGlvbkV4cHJlc3Npb246ZXhpdCc6IGRlY3JlbWVudExldmVsLFxuICAgICAgJ0Fycm93RnVuY3Rpb25FeHByZXNzaW9uOmV4aXQnOiBkZWNyZW1lbnRMZXZlbCxcbiAgICAgICdCbG9ja1N0YXRlbWVudDpleGl0JzogZGVjcmVtZW50TGV2ZWwsXG4gICAgICAnT2JqZWN0RXhwcmVzc2lvbjpleGl0JzogZGVjcmVtZW50TGV2ZWwsXG4gICAgICAnRGVjb3JhdG9yOmV4aXQnOiBkZWNyZW1lbnRMZXZlbCxcbiAgICB9XG4gIH0sXG59XG4iXX0=