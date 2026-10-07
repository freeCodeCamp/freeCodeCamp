'use strict';




var _contextCompat = require('eslint-module-utils/contextCompat');

var _staticRequire = require('../core/staticRequire');var _staticRequire2 = _interopRequireDefault(_staticRequire);
var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);

var _debug = require('debug');var _debug2 = _interopRequireDefault(_debug);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };} /**
                                                                                                                                                                            * @fileoverview Rule to enforce new line after import not followed by another import.
                                                                                                                                                                            * @author Radek Benkel
                                                                                                                                                                            */var log = (0, _debug2['default'])('eslint-plugin-import:rules:newline-after-import'); //------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

function containsNodeOrEqual(outerNode, innerNode) {
  return outerNode.range[0] <= innerNode.range[0] && outerNode.range[1] >= innerNode.range[1];
}

function getScopeBody(scope) {
  if (scope.block.type === 'SwitchStatement') {
    log('SwitchStatement scopes not supported');
    return null;
  }var

  body = scope.block.body;
  if (body && body.type === 'BlockStatement') {
    return body.body;
  }

  return body;
}

function findNodeIndexInScopeBody(body, nodeToFind) {
  return body.findIndex(function (node) {return containsNodeOrEqual(node, nodeToFind);});
}

function getLineDifference(node, nextNode) {
  return nextNode.loc.start.line - node.loc.end.line;
}

function isClassWithDecorator(node) {
  return node.type === 'ClassDeclaration' && node.decorators && node.decorators.length;
}

function isExportDefaultClass(node) {
  return node.type === 'ExportDefaultDeclaration' && node.declaration.type === 'ClassDeclaration';
}

function isExportNameClass(node) {

  return node.type === 'ExportNamedDeclaration' && node.declaration && node.declaration.type === 'ClassDeclaration';
}

module.exports = {
  meta: {
    type: 'layout',
    docs: {
      category: 'Style guide',
      description: 'Enforce a newline after import statements.',
      url: (0, _docsUrl2['default'])('newline-after-import') },

    fixable: 'whitespace',
    schema: [
    {
      type: 'object',
      properties: {
        count: {
          type: 'integer',
          minimum: 1 },

        exactCount: { type: 'boolean' },
        considerComments: { type: 'boolean' } },

      additionalProperties: false }] },



  create: function () {function create(context) {
      var level = 0;
      var requireCalls = [];
      var options = Object.assign({
        count: 1,
        exactCount: false,
        considerComments: false },
      context.options[0]);


      function checkForNewLine(node, nextNode, type) {
        if (isExportDefaultClass(nextNode) || isExportNameClass(nextNode)) {
          var classNode = nextNode.declaration;

          if (isClassWithDecorator(classNode)) {
            nextNode = classNode.decorators[0];
          }
        } else if (isClassWithDecorator(nextNode)) {
          nextNode = nextNode.decorators[0];
        }

        var lineDifference = getLineDifference(node, nextNode);
        var EXPECTED_LINE_DIFFERENCE = options.count + 1;

        if (
        lineDifference < EXPECTED_LINE_DIFFERENCE ||
        options.exactCount && lineDifference !== EXPECTED_LINE_DIFFERENCE)
        {
          var column = node.loc.start.column;

          if (node.loc.start.line !== node.loc.end.line) {
            column = 0;
          }

          context.report({
            loc: {
              line: node.loc.end.line,
              column: column },

            message: 'Expected ' + String(options.count) + ' empty line' + (options.count > 1 ? 's' : '') + ' after ' + String(type) + ' statement not followed by another ' + String(type) + '.',
            fix: options.exactCount && EXPECTED_LINE_DIFFERENCE < lineDifference ? undefined : function (fixer) {return fixer.insertTextAfter(
              node,
              '\n'.repeat(EXPECTED_LINE_DIFFERENCE - lineDifference));} });


        }
      }

      function commentAfterImport(node, nextComment, type) {
        var lineDifference = getLineDifference(node, nextComment);
        var EXPECTED_LINE_DIFFERENCE = options.count + 1;

        if (lineDifference < EXPECTED_LINE_DIFFERENCE) {
          var column = node.loc.start.column;

          if (node.loc.start.line !== node.loc.end.line) {
            column = 0;
          }

          context.report({
            loc: {
              line: node.loc.end.line,
              column: column },

            message: 'Expected ' + String(options.count) + ' empty line' + (options.count > 1 ? 's' : '') + ' after ' + String(type) + ' statement not followed by another ' + String(type) + '.',
            fix: options.exactCount && EXPECTED_LINE_DIFFERENCE < lineDifference ? undefined : function (fixer) {return fixer.insertTextAfter(
              node,
              '\n'.repeat(EXPECTED_LINE_DIFFERENCE - lineDifference));} });


        }
      }

      function incrementLevel() {
        level++;
      }
      function decrementLevel() {
        level--;
      }

      function checkImport(node) {var
        parent = node.parent;

        if (!parent || !parent.body) {
          return;
        }

        var nodePosition = parent.body.indexOf(node);
        var nextNode = parent.body[nodePosition + 1];
        var endLine = node.loc.end.line;
        var nextComment = void 0;

        if (typeof parent.comments !== 'undefined' && options.considerComments) {
          nextComment = parent.comments.find(function (o) {return o.loc.start.line >= endLine && o.loc.start.line <= endLine + options.count + 1;});
        }

        // skip "export import"s
        if (node.type === 'TSImportEqualsDeclaration' && node.isExport) {
          return;
        }

        if (nextComment && typeof nextComment !== 'undefined') {
          commentAfterImport(node, nextComment, 'import');
        } else if (nextNode && nextNode.type !== 'ImportDeclaration' && (nextNode.type !== 'TSImportEqualsDeclaration' || nextNode.isExport)) {
          checkForNewLine(node, nextNode, 'import');
        }
      }

      return {
        ImportDeclaration: checkImport,
        TSImportEqualsDeclaration: checkImport,
        CallExpression: function () {function CallExpression(node) {
            if ((0, _staticRequire2['default'])(node) && level === 0) {
              requireCalls.push(node);
            }
          }return CallExpression;}(),
        'Program:exit': function () {function ProgramExit(node) {
            log('exit processing for', (0, _contextCompat.getPhysicalFilename)(context));
            var scopeBody = getScopeBody((0, _contextCompat.getScope)(context, node));
            log('got scope:', scopeBody);

            requireCalls.forEach(function (node, index) {
              var nodePosition = findNodeIndexInScopeBody(scopeBody, node);
              log('node position in scope:', nodePosition);

              var statementWithRequireCall = scopeBody[nodePosition];
              var nextStatement = scopeBody[nodePosition + 1];
              var nextRequireCall = requireCalls[index + 1];

              if (nextRequireCall && containsNodeOrEqual(statementWithRequireCall, nextRequireCall)) {
                return;
              }

              if (
              nextStatement && (
              !nextRequireCall ||
              !containsNodeOrEqual(nextStatement, nextRequireCall)))

              {
                var nextComment = void 0;
                if (typeof statementWithRequireCall.parent.comments !== 'undefined' && options.considerComments) {
                  var endLine = node.loc.end.line;
                  nextComment = statementWithRequireCall.parent.comments.find(function (o) {return o.loc.start.line >= endLine && o.loc.start.line <= endLine + options.count + 1;});
                }

                if (nextComment && typeof nextComment !== 'undefined') {

                  commentAfterImport(statementWithRequireCall, nextComment, 'require');
                } else {
                  checkForNewLine(statementWithRequireCall, nextStatement, 'require');
                }
              }
            });
          }return ProgramExit;}(),
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
        'Decorator:exit': decrementLevel };

    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uZXdsaW5lLWFmdGVyLWltcG9ydC5qcyJdLCJuYW1lcyI6WyJsb2ciLCJjb250YWluc05vZGVPckVxdWFsIiwib3V0ZXJOb2RlIiwiaW5uZXJOb2RlIiwicmFuZ2UiLCJnZXRTY29wZUJvZHkiLCJzY29wZSIsImJsb2NrIiwidHlwZSIsImJvZHkiLCJmaW5kTm9kZUluZGV4SW5TY29wZUJvZHkiLCJub2RlVG9GaW5kIiwiZmluZEluZGV4Iiwibm9kZSIsImdldExpbmVEaWZmZXJlbmNlIiwibmV4dE5vZGUiLCJsb2MiLCJzdGFydCIsImxpbmUiLCJlbmQiLCJpc0NsYXNzV2l0aERlY29yYXRvciIsImRlY29yYXRvcnMiLCJsZW5ndGgiLCJpc0V4cG9ydERlZmF1bHRDbGFzcyIsImRlY2xhcmF0aW9uIiwiaXNFeHBvcnROYW1lQ2xhc3MiLCJtb2R1bGUiLCJleHBvcnRzIiwibWV0YSIsImRvY3MiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwidXJsIiwiZml4YWJsZSIsInNjaGVtYSIsInByb3BlcnRpZXMiLCJjb3VudCIsIm1pbmltdW0iLCJleGFjdENvdW50IiwiY29uc2lkZXJDb21tZW50cyIsImFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiY3JlYXRlIiwiY29udGV4dCIsImxldmVsIiwicmVxdWlyZUNhbGxzIiwib3B0aW9ucyIsImNoZWNrRm9yTmV3TGluZSIsImNsYXNzTm9kZSIsImxpbmVEaWZmZXJlbmNlIiwiRVhQRUNURURfTElORV9ESUZGRVJFTkNFIiwiY29sdW1uIiwicmVwb3J0IiwibWVzc2FnZSIsImZpeCIsInVuZGVmaW5lZCIsImZpeGVyIiwiaW5zZXJ0VGV4dEFmdGVyIiwicmVwZWF0IiwiY29tbWVudEFmdGVySW1wb3J0IiwibmV4dENvbW1lbnQiLCJpbmNyZW1lbnRMZXZlbCIsImRlY3JlbWVudExldmVsIiwiY2hlY2tJbXBvcnQiLCJwYXJlbnQiLCJub2RlUG9zaXRpb24iLCJpbmRleE9mIiwiZW5kTGluZSIsImNvbW1lbnRzIiwiZmluZCIsIm8iLCJpc0V4cG9ydCIsIkltcG9ydERlY2xhcmF0aW9uIiwiVFNJbXBvcnRFcXVhbHNEZWNsYXJhdGlvbiIsIkNhbGxFeHByZXNzaW9uIiwicHVzaCIsInNjb3BlQm9keSIsImZvckVhY2giLCJpbmRleCIsInN0YXRlbWVudFdpdGhSZXF1aXJlQ2FsbCIsIm5leHRTdGF0ZW1lbnQiLCJuZXh0UmVxdWlyZUNhbGwiLCJGdW5jdGlvbkRlY2xhcmF0aW9uIiwiRnVuY3Rpb25FeHByZXNzaW9uIiwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24iLCJCbG9ja1N0YXRlbWVudCIsIk9iamVjdEV4cHJlc3Npb24iLCJEZWNvcmF0b3IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0E7O0FBRUEsc0Q7QUFDQSxxQzs7QUFFQSw4Qiw2SUFWQTs7OzhLQVdBLElBQU1BLE1BQU0sd0JBQU0saURBQU4sQ0FBWixDLENBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNDLG1CQUFULENBQTZCQyxTQUE3QixFQUF3Q0MsU0FBeEMsRUFBbUQ7QUFDakQsU0FBT0QsVUFBVUUsS0FBVixDQUFnQixDQUFoQixLQUFzQkQsVUFBVUMsS0FBVixDQUFnQixDQUFoQixDQUF0QixJQUE0Q0YsVUFBVUUsS0FBVixDQUFnQixDQUFoQixLQUFzQkQsVUFBVUMsS0FBVixDQUFnQixDQUFoQixDQUF6RTtBQUNEOztBQUVELFNBQVNDLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQzNCLE1BQUlBLE1BQU1DLEtBQU4sQ0FBWUMsSUFBWixLQUFxQixpQkFBekIsRUFBNEM7QUFDMUNSLFFBQUksc0NBQUo7QUFDQSxXQUFPLElBQVA7QUFDRCxHQUowQjs7QUFNbkJTLE1BTm1CLEdBTVZILE1BQU1DLEtBTkksQ0FNbkJFLElBTm1CO0FBTzNCLE1BQUlBLFFBQVFBLEtBQUtELElBQUwsS0FBYyxnQkFBMUIsRUFBNEM7QUFDMUMsV0FBT0MsS0FBS0EsSUFBWjtBQUNEOztBQUVELFNBQU9BLElBQVA7QUFDRDs7QUFFRCxTQUFT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QS9CRDtBQWdDRCxXQTdDSTtBQThDTEUsNkJBQXFCckIsY0E5Q2hCO0FBK0NMc0IsNEJBQW9CdEIsY0EvQ2Y7QUFnREx1QixpQ0FBeUJ2QixjQWhEcEI7QUFpREx3Qix3QkFBZ0J4QixjQWpEWDtBQWtETHlCLDBCQUFrQnpCLGNBbERiO0FBbURMMEIsbUJBQVcxQixjQW5ETjtBQW9ETCxvQ0FBNEJDLGNBcER2QjtBQXFETCxtQ0FBMkJBLGNBckR0QjtBQXNETCx3Q0FBZ0NBLGNBdEQzQjtBQXVETCwrQkFBdUJBLGNBdkRsQjtBQXdETCxpQ0FBeUJBLGNBeERwQjtBQXlETCwwQkFBa0JBLGNBekRiLEVBQVA7O0FBMkRELEtBL0xjLG1CQUFqQiIsImZpbGUiOiJuZXdsaW5lLWFmdGVyLWltcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVvdmVydmlldyBSdWxlIHRvIGVuZm9yY2UgbmV3IGxpbmUgYWZ0ZXIgaW1wb3J0IG5vdCBmb2xsb3dlZCBieSBhbm90aGVyIGltcG9ydC5cbiAqIEBhdXRob3IgUmFkZWsgQmVua2VsXG4gKi9cblxuaW1wb3J0IHsgZ2V0UGh5c2ljYWxGaWxlbmFtZSwgZ2V0U2NvcGUgfSBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL2NvbnRleHRDb21wYXQnO1xuXG5pbXBvcnQgaXNTdGF0aWNSZXF1aXJlIGZyb20gJy4uL2NvcmUvc3RhdGljUmVxdWlyZSc7XG5pbXBvcnQgZG9jc1VybCBmcm9tICcuLi9kb2NzVXJsJztcblxuaW1wb3J0IGRlYnVnIGZyb20gJ2RlYnVnJztcbmNvbnN0IGxvZyA9IGRlYnVnKCdlc2xpbnQtcGx1Z2luLWltcG9ydDpydWxlczpuZXdsaW5lLWFmdGVyLWltcG9ydCcpO1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUnVsZSBEZWZpbml0aW9uXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBjb250YWluc05vZGVPckVxdWFsKG91dGVyTm9kZSwgaW5uZXJOb2RlKSB7XG4gIHJldHVybiBvdXRlck5vZGUucmFuZ2VbMF0gPD0gaW5uZXJOb2RlLnJhbmdlWzBdICYmIG91dGVyTm9kZS5yYW5nZVsxXSA+PSBpbm5lck5vZGUucmFuZ2VbMV07XG59XG5cbmZ1bmN0aW9uIGdldFNjb3BlQm9keShzY29wZSkge1xuICBpZiAoc2NvcGUuYmxvY2sudHlwZSA9PT0gJ1N3aXRjaFN0YXRlbWVudCcpIHtcbiAgICBsb2coJ1N3aXRjaFN0YXRlbWVudCBzY29wZXMgbm90IHN1cHBvcnRlZCcpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgeyBib2R5IH0gPSBzY29wZS5ibG9jaztcbiAgaWYgKGJvZHkgJiYgYm9keS50eXBlID09PSAnQmxvY2tTdGF0ZW1lbnQnKSB7XG4gICAgcmV0dXJuIGJvZHkuYm9keTtcbiAgfVxuXG4gIHJldHVybiBib2R5O1xufVxuXG5mdW5jdGlvbiBmaW5kTm9kZUluZGV4SW5TY29wZUJvZHkoYm9keSwgbm9kZVRvRmluZCkge1xuICByZXR1cm4gYm9keS5maW5kSW5kZXgoKG5vZGUpID0+IGNvbnRhaW5zTm9kZU9yRXF1YWwobm9kZSwgbm9kZVRvRmluZCkpO1xufVxuXG5mdW5jdGlvbiBnZXRMaW5lRGlmZmVyZW5jZShub2RlLCBuZXh0Tm9kZSkge1xuICByZXR1cm4gbmV4dE5vZGUubG9jLnN0YXJ0LmxpbmUgLSBub2RlLmxvYy5lbmQubGluZTtcbn1cblxuZnVuY3Rpb24gaXNDbGFzc1dpdGhEZWNvcmF0b3Iobm9kZSkge1xuICByZXR1cm4gbm9kZS50eXBlID09PSAnQ2xhc3NEZWNsYXJhdGlvbicgJiYgbm9kZS5kZWNvcmF0b3JzICYmIG5vZGUuZGVjb3JhdG9ycy5sZW5ndGg7XG59XG5cbmZ1bmN0aW9uIGlzRXhwb3J0RGVmYXVsdENsYXNzKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ0V4cG9ydERlZmF1bHREZWNsYXJhdGlvbicgJiYgbm9kZS5kZWNsYXJhdGlvbi50eXBlID09PSAnQ2xhc3NEZWNsYXJhdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzRXhwb3J0TmFtZUNsYXNzKG5vZGUpIHtcblxuICByZXR1cm4gbm9kZS50eXBlID09PSAnRXhwb3J0TmFtZWREZWNsYXJhdGlvbicgJiYgbm9kZS5kZWNsYXJhdGlvbiAmJiBub2RlLmRlY2xhcmF0aW9uLnR5cGUgPT09ICdDbGFzc0RlY2xhcmF0aW9uJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1ldGE6IHtcbiAgICB0eXBlOiAnbGF5b3V0JyxcbiAgICBkb2NzOiB7XG4gICAgICBjYXRlZ29yeTogJ1N0eWxlIGd1aWRlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRW5mb3JjZSBhIG5ld2xpbmUgYWZ0ZXIgaW1wb3J0IHN0YXRlbWVudHMuJyxcbiAgICAgIHVybDogZG9jc1VybCgnbmV3bGluZS1hZnRlci1pbXBvcnQnKSxcbiAgICB9LFxuICAgIGZpeGFibGU6ICd3aGl0ZXNwYWNlJyxcbiAgICBzY2hlbWE6IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICBjb3VudDoge1xuICAgICAgICAgICAgdHlwZTogJ2ludGVnZXInLFxuICAgICAgICAgICAgbWluaW11bTogMSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4YWN0Q291bnQ6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gICAgICAgICAgY29uc2lkZXJDb21tZW50czogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBjcmVhdGUoY29udGV4dCkge1xuICAgIGxldCBsZXZlbCA9IDA7XG4gICAgY29uc3QgcmVxdWlyZUNhbGxzID0gW107XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGNvdW50OiAxLFxuICAgICAgZXhhY3RDb3VudDogZmFsc2UsXG4gICAgICBjb25zaWRlckNvbW1lbnRzOiBmYWxzZSxcbiAgICAgIC4uLmNvbnRleHQub3B0aW9uc1swXSxcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gY2hlY2tGb3JOZXdMaW5lKG5vZGUsIG5leHROb2RlLCB0eXBlKSB7XG4gICAgICBpZiAoaXNFeHBvcnREZWZhdWx0Q2xhc3MobmV4dE5vZGUpIHx8IGlzRXhwb3J0TmFtZUNsYXNzKG5leHROb2RlKSkge1xuICAgICAgICBjb25zdCBjbGFzc05vZGUgPSBuZXh0Tm9kZS5kZWNsYXJhdGlvbjtcblxuICAgICAgICBpZiAoaXNDbGFzc1dpdGhEZWNvcmF0b3IoY2xhc3NOb2RlKSkge1xuICAgICAgICAgIG5leHROb2RlID0gY2xhc3NOb2RlLmRlY29yYXRvcnNbMF07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNDbGFzc1dpdGhEZWNvcmF0b3IobmV4dE5vZGUpKSB7XG4gICAgICAgIG5leHROb2RlID0gbmV4dE5vZGUuZGVjb3JhdG9yc1swXTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbGluZURpZmZlcmVuY2UgPSBnZXRMaW5lRGlmZmVyZW5jZShub2RlLCBuZXh0Tm9kZSk7XG4gICAgICBjb25zdCBFWFBFQ1RFRF9MSU5FX0RJRkZFUkVOQ0UgPSBvcHRpb25zLmNvdW50ICsgMTtcblxuICAgICAgaWYgKFxuICAgICAgICBsaW5lRGlmZmVyZW5jZSA8IEVYUEVDVEVEX0xJTkVfRElGRkVSRU5DRVxuICAgICAgICB8fCBvcHRpb25zLmV4YWN0Q291bnQgJiYgbGluZURpZmZlcmVuY2UgIT09IEVYUEVDVEVEX0xJTkVfRElGRkVSRU5DRVxuICAgICAgKSB7XG4gICAgICAgIGxldCBjb2x1bW4gPSBub2RlLmxvYy5zdGFydC5jb2x1bW47XG5cbiAgICAgICAgaWYgKG5vZGUubG9jLnN0YXJ0LmxpbmUgIT09IG5vZGUubG9jLmVuZC5saW5lKSB7XG4gICAgICAgICAgY29sdW1uID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQucmVwb3J0KHtcbiAgICAgICAgICBsb2M6IHtcbiAgICAgICAgICAgIGxpbmU6IG5vZGUubG9jLmVuZC5saW5lLFxuICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWVzc2FnZTogYEV4cGVjdGVkICR7b3B0aW9ucy5jb3VudH0gZW1wdHkgbGluZSR7b3B0aW9ucy5jb3VudCA+IDEgPyAncycgOiAnJ30gYWZ0ZXIgJHt0eXBlfSBzdGF0ZW1lbnQgbm90IGZvbGxvd2VkIGJ5IGFub3RoZXIgJHt0eXBlfS5gLFxuICAgICAgICAgIGZpeDogb3B0aW9ucy5leGFjdENvdW50ICYmIEVYUEVDVEVEX0xJTkVfRElGRkVSRU5DRSA8IGxpbmVEaWZmZXJlbmNlID8gdW5kZWZpbmVkIDogKGZpeGVyKSA9PiBmaXhlci5pbnNlcnRUZXh0QWZ0ZXIoXG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgJ1xcbicucmVwZWF0KEVYUEVDVEVEX0xJTkVfRElGRkVSRU5DRSAtIGxpbmVEaWZmZXJlbmNlKSxcbiAgICAgICAgICApLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb21tZW50QWZ0ZXJJbXBvcnQobm9kZSwgbmV4dENvbW1lbnQsIHR5cGUpIHtcbiAgICAgIGNvbnN0IGxpbmVEaWZmZXJlbmNlID0gZ2V0TGluZURpZmZlcmVuY2Uobm9kZSwgbmV4dENvbW1lbnQpO1xuICAgICAgY29uc3QgRVhQRUNURURfTElORV9ESUZGRVJFTkNFID0gb3B0aW9ucy5jb3VudCArIDE7XG5cbiAgICAgIGlmIChsaW5lRGlmZmVyZW5jZSA8IEVYUEVDVEVEX0xJTkVfRElGRkVSRU5DRSkge1xuICAgICAgICBsZXQgY29sdW1uID0gbm9kZS5sb2Muc3RhcnQuY29sdW1uO1xuXG4gICAgICAgIGlmIChub2RlLmxvYy5zdGFydC5saW5lICE9PSBub2RlLmxvYy5lbmQubGluZSkge1xuICAgICAgICAgIGNvbHVtbiA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0LnJlcG9ydCh7XG4gICAgICAgICAgbG9jOiB7XG4gICAgICAgICAgICBsaW5lOiBub2RlLmxvYy5lbmQubGluZSxcbiAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1lc3NhZ2U6IGBFeHBlY3RlZCAke29wdGlvbnMuY291bnR9IGVtcHR5IGxpbmUke29wdGlvbnMuY291bnQgPiAxID8gJ3MnIDogJyd9IGFmdGVyICR7dHlwZX0gc3RhdGVtZW50IG5vdCBmb2xsb3dlZCBieSBhbm90aGVyICR7dHlwZX0uYCxcbiAgICAgICAgICBmaXg6IG9wdGlvbnMuZXhhY3RDb3VudCAmJiBFWFBFQ1RFRF9MSU5FX0RJRkZFUkVOQ0UgPCBsaW5lRGlmZmVyZW5jZSA/IHVuZGVmaW5lZCA6IChmaXhlcikgPT4gZml4ZXIuaW5zZXJ0VGV4dEFmdGVyKFxuICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgICdcXG4nLnJlcGVhdChFWFBFQ1RFRF9MSU5FX0RJRkZFUkVOQ0UgLSBsaW5lRGlmZmVyZW5jZSksXG4gICAgICAgICAgKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5jcmVtZW50TGV2ZWwoKSB7XG4gICAgICBsZXZlbCsrO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZWNyZW1lbnRMZXZlbCgpIHtcbiAgICAgIGxldmVsLS07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tJbXBvcnQobm9kZSkge1xuICAgICAgY29uc3QgeyBwYXJlbnQgfSA9IG5vZGU7XG5cbiAgICAgIGlmICghcGFyZW50IHx8ICFwYXJlbnQuYm9keSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vZGVQb3NpdGlvbiA9IHBhcmVudC5ib2R5LmluZGV4T2Yobm9kZSk7XG4gICAgICBjb25zdCBuZXh0Tm9kZSA9IHBhcmVudC5ib2R5W25vZGVQb3NpdGlvbiArIDFdO1xuICAgICAgY29uc3QgZW5kTGluZSA9IG5vZGUubG9jLmVuZC5saW5lO1xuICAgICAgbGV0IG5leHRDb21tZW50O1xuXG4gICAgICBpZiAodHlwZW9mIHBhcmVudC5jb21tZW50cyAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0aW9ucy5jb25zaWRlckNvbW1lbnRzKSB7XG4gICAgICAgIG5leHRDb21tZW50ID0gcGFyZW50LmNvbW1lbnRzLmZpbmQoKG8pID0+IG8ubG9jLnN0YXJ0LmxpbmUgPj0gZW5kTGluZSAmJiBvLmxvYy5zdGFydC5saW5lIDw9IGVuZExpbmUgKyBvcHRpb25zLmNvdW50ICsgMSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNraXAgXCJleHBvcnQgaW1wb3J0XCJzXG4gICAgICBpZiAobm9kZS50eXBlID09PSAnVFNJbXBvcnRFcXVhbHNEZWNsYXJhdGlvbicgJiYgbm9kZS5pc0V4cG9ydCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXh0Q29tbWVudCAmJiB0eXBlb2YgbmV4dENvbW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbW1lbnRBZnRlckltcG9ydChub2RlLCBuZXh0Q29tbWVudCwgJ2ltcG9ydCcpO1xuICAgICAgfSBlbHNlIGlmIChuZXh0Tm9kZSAmJiBuZXh0Tm9kZS50eXBlICE9PSAnSW1wb3J0RGVjbGFyYXRpb24nICYmIChuZXh0Tm9kZS50eXBlICE9PSAnVFNJbXBvcnRFcXVhbHNEZWNsYXJhdGlvbicgfHwgbmV4dE5vZGUuaXNFeHBvcnQpKSB7XG4gICAgICAgIGNoZWNrRm9yTmV3TGluZShub2RlLCBuZXh0Tm9kZSwgJ2ltcG9ydCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBJbXBvcnREZWNsYXJhdGlvbjogY2hlY2tJbXBvcnQsXG4gICAgICBUU0ltcG9ydEVxdWFsc0RlY2xhcmF0aW9uOiBjaGVja0ltcG9ydCxcbiAgICAgIENhbGxFeHByZXNzaW9uKG5vZGUpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljUmVxdWlyZShub2RlKSAmJiBsZXZlbCA9PT0gMCkge1xuICAgICAgICAgIHJlcXVpcmVDYWxscy5wdXNoKG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJ1Byb2dyYW06ZXhpdCcobm9kZSkge1xuICAgICAgICBsb2coJ2V4aXQgcHJvY2Vzc2luZyBmb3InLCBnZXRQaHlzaWNhbEZpbGVuYW1lKGNvbnRleHQpKTtcbiAgICAgICAgY29uc3Qgc2NvcGVCb2R5ID0gZ2V0U2NvcGVCb2R5KGdldFNjb3BlKGNvbnRleHQsIG5vZGUpKTtcbiAgICAgICAgbG9nKCdnb3Qgc2NvcGU6Jywgc2NvcGVCb2R5KTtcblxuICAgICAgICByZXF1aXJlQ2FsbHMuZm9yRWFjaCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBub2RlUG9zaXRpb24gPSBmaW5kTm9kZUluZGV4SW5TY29wZUJvZHkoc2NvcGVCb2R5LCBub2RlKTtcbiAgICAgICAgICBsb2coJ25vZGUgcG9zaXRpb24gaW4gc2NvcGU6Jywgbm9kZVBvc2l0aW9uKTtcblxuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudFdpdGhSZXF1aXJlQ2FsbCA9IHNjb3BlQm9keVtub2RlUG9zaXRpb25dO1xuICAgICAgICAgIGNvbnN0IG5leHRTdGF0ZW1lbnQgPSBzY29wZUJvZHlbbm9kZVBvc2l0aW9uICsgMV07XG4gICAgICAgICAgY29uc3QgbmV4dFJlcXVpcmVDYWxsID0gcmVxdWlyZUNhbGxzW2luZGV4ICsgMV07XG5cbiAgICAgICAgICBpZiAobmV4dFJlcXVpcmVDYWxsICYmIGNvbnRhaW5zTm9kZU9yRXF1YWwoc3RhdGVtZW50V2l0aFJlcXVpcmVDYWxsLCBuZXh0UmVxdWlyZUNhbGwpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgbmV4dFN0YXRlbWVudCAmJiAoXG4gICAgICAgICAgICAgICFuZXh0UmVxdWlyZUNhbGxcbiAgICAgICAgICAgICAgfHwgIWNvbnRhaW5zTm9kZU9yRXF1YWwobmV4dFN0YXRlbWVudCwgbmV4dFJlcXVpcmVDYWxsKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgbGV0IG5leHRDb21tZW50O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZW1lbnRXaXRoUmVxdWlyZUNhbGwucGFyZW50LmNvbW1lbnRzICE9PSAndW5kZWZpbmVkJyAmJiBvcHRpb25zLmNvbnNpZGVyQ29tbWVudHMpIHtcbiAgICAgICAgICAgICAgY29uc3QgZW5kTGluZSA9IG5vZGUubG9jLmVuZC5saW5lO1xuICAgICAgICAgICAgICBuZXh0Q29tbWVudCA9IHN0YXRlbWVudFdpdGhSZXF1aXJlQ2FsbC5wYXJlbnQuY29tbWVudHMuZmluZCgobykgPT4gby5sb2Muc3RhcnQubGluZSA+PSBlbmRMaW5lICYmIG8ubG9jLnN0YXJ0LmxpbmUgPD0gZW5kTGluZSArIG9wdGlvbnMuY291bnQgKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5leHRDb21tZW50ICYmIHR5cGVvZiBuZXh0Q29tbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgICBjb21tZW50QWZ0ZXJJbXBvcnQoc3RhdGVtZW50V2l0aFJlcXVpcmVDYWxsLCBuZXh0Q29tbWVudCwgJ3JlcXVpcmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNoZWNrRm9yTmV3TGluZShzdGF0ZW1lbnRXaXRoUmVxdWlyZUNhbGwsIG5leHRTdGF0ZW1lbnQsICdyZXF1aXJlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBGdW5jdGlvbkRlY2xhcmF0aW9uOiBpbmNyZW1lbnRMZXZlbCxcbiAgICAgIEZ1bmN0aW9uRXhwcmVzc2lvbjogaW5jcmVtZW50TGV2ZWwsXG4gICAgICBBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbjogaW5jcmVtZW50TGV2ZWwsXG4gICAgICBCbG9ja1N0YXRlbWVudDogaW5jcmVtZW50TGV2ZWwsXG4gICAgICBPYmplY3RFeHByZXNzaW9uOiBpbmNyZW1lbnRMZXZlbCxcbiAgICAgIERlY29yYXRvcjogaW5jcmVtZW50TGV2ZWwsXG4gICAgICAnRnVuY3Rpb25EZWNsYXJhdGlvbjpleGl0JzogZGVjcmVtZW50TGV2ZWwsXG4gICAgICAnRnVuY3Rpb25FeHByZXNzaW9uOmV4aXQnOiBkZWNyZW1lbnRMZXZlbCxcbiAgICAgICdBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbjpleGl0JzogZGVjcmVtZW50TGV2ZWwsXG4gICAgICAnQmxvY2tTdGF0ZW1lbnQ6ZXhpdCc6IGRlY3JlbWVudExldmVsLFxuICAgICAgJ09iamVjdEV4cHJlc3Npb246ZXhpdCc6IGRlY3JlbWVudExldmVsLFxuICAgICAgJ0RlY29yYXRvcjpleGl0JzogZGVjcmVtZW50TGV2ZWwsXG4gICAgfTtcbiAgfSxcbn07XG4iXX0=