'use strict';var _slicedToArray = function () {function sliceIterator(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"]) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}return function (arr, i) {if (Array.isArray(arr)) {return arr;} else if (Symbol.iterator in Object(arr)) {return sliceIterator(arr, i);} else {throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _builder = require('../exportMap/builder');var _builder2 = _interopRequireDefault(_builder);
var _patternCapture = require('../exportMap/patternCapture');var _patternCapture2 = _interopRequireDefault(_patternCapture);
var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);
var _arrayIncludes = require('array-includes');var _arrayIncludes2 = _interopRequireDefault(_arrayIncludes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

/*
                                                                                                                                                                                                            Notes on TypeScript namespaces aka TSModuleDeclaration:
                                                                                                                                                                                                            
                                                                                                                                                                                                            There are two forms:
                                                                                                                                                                                                            - active namespaces: namespace Foo {} / module Foo {}
                                                                                                                                                                                                            - ambient modules; declare module "eslint-plugin-import" {}
                                                                                                                                                                                                            
                                                                                                                                                                                                            active namespaces:
                                                                                                                                                                                                            - cannot contain a default export
                                                                                                                                                                                                            - cannot contain an export all
                                                                                                                                                                                                            - cannot contain a multi name export (export { a, b })
                                                                                                                                                                                                            - can have active namespaces nested within them
                                                                                                                                                                                                            
                                                                                                                                                                                                            ambient namespaces:
                                                                                                                                                                                                            - can only be defined in .d.ts files
                                                                                                                                                                                                            - cannot be nested within active namespaces
                                                                                                                                                                                                            - have no other restrictions
                                                                                                                                                                                                            */

var rootProgram = 'root';
var tsTypePrefix = 'type:';

/**
                             * remove function overloads like:
                             * ```ts
                             * export function foo(a: number);
                             * export function foo(a: string);
                             * ```
                             * @param {Set<Object>} nodes
                             */
function removeTypescriptFunctionOverloads(nodes) {
  nodes.forEach(function (node) {
    var declType = node.type === 'ExportDefaultDeclaration' ? node.declaration.type : node.parent.type;
    if (
    // eslint 6+
    declType === 'TSDeclareFunction'
    // eslint 4-5
    || declType === 'TSEmptyBodyFunctionDeclaration')
    {
      nodes['delete'](node);
    }
  });
}

/**
   * Detect merging Namespaces with Classes, Functions, or Enums like:
   * ```ts
   * export class Foo { }
   * export namespace Foo { }
   * ```
   * @param {Set<Object>} nodes
   * @returns {boolean}
   */
function isTypescriptNamespaceMerging(nodes) {
  var types = new Set(Array.from(nodes, function (node) {return node.parent.type;}));
  var noNamespaceNodes = Array.from(nodes).filter(function (node) {return node.parent.type !== 'TSModuleDeclaration';});

  return types.has('TSModuleDeclaration') && (

  types.size === 1
  // Merging with functions
  || types.size === 2 && (types.has('FunctionDeclaration') || types.has('TSDeclareFunction')) ||
  types.size === 3 && types.has('FunctionDeclaration') && types.has('TSDeclareFunction')
  // Merging with classes or enums
  || types.size === 2 && (types.has('ClassDeclaration') || types.has('TSEnumDeclaration')) && noNamespaceNodes.length === 1);

}

/**
   * Detect if a typescript namespace node should be reported as multiple export:
   * ```ts
   * export class Foo { }
   * export function Foo();
   * export namespace Foo { }
   * ```
   * @param {Object} node
   * @param {Set<Object>} nodes
   * @returns {boolean}
   */
function shouldSkipTypescriptNamespace(node, nodes) {
  var types = new Set(Array.from(nodes, function (node) {return node.parent.type;}));

  return !isTypescriptNamespaceMerging(nodes) &&
  node.parent.type === 'TSModuleDeclaration' && (

  types.has('TSEnumDeclaration') ||
  types.has('ClassDeclaration') ||
  types.has('FunctionDeclaration') ||
  types.has('TSDeclareFunction'));

}

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      category: 'Helpful warnings',
      description: 'Forbid any invalid exports, i.e. re-export of the same name.',
      url: (0, _docsUrl2['default'])('export') },

    schema: [] },


  create: function () {function create(context) {
      var namespace = new Map([[rootProgram, new Map()]]);

      function addNamed(name, node, parent, isType) {
        if (!namespace.has(parent)) {
          namespace.set(parent, new Map());
        }
        var named = namespace.get(parent);

        var key = isType ? '' + tsTypePrefix + String(name) : name;
        var nodes = named.get(key);

        if (nodes == null) {
          nodes = new Set();
          named.set(key, nodes);
        }

        nodes.add(node);
      }

      function getParent(node) {
        if (node.parent && node.parent.type === 'TSModuleBlock') {
          return node.parent.parent;
        }

        // just in case somehow a non-ts namespace export declaration isn't directly
        // parented to the root Program node
        return rootProgram;
      }

      return {
        ExportDefaultDeclaration: function () {function ExportDefaultDeclaration(node) {
            addNamed('default', node, getParent(node));
          }return ExportDefaultDeclaration;}(),

        ExportSpecifier: function () {function ExportSpecifier(node) {
            addNamed(
            node.exported.name || node.exported.value,
            node.exported,
            getParent(node.parent));

          }return ExportSpecifier;}(),

        ExportNamedDeclaration: function () {function ExportNamedDeclaration(node) {
            if (node.declaration == null) {return;}

            var parent = getParent(node);
            // support for old TypeScript versions
            var isTypeVariableDecl = node.declaration.kind === 'type';

            if (node.declaration.id != null) {
              if ((0, _arrayIncludes2['default'])([
              'TSTypeAliasDeclaration',
              'TSInterfaceDeclaration'],
              node.declaration.type)) {
                addNamed(node.declaration.id.name, node.declaration.id, parent, true);
              } else {
                addNamed(node.declaration.id.name, node.declaration.id, parent, isTypeVariableDecl);
              }
            }

            if (node.declaration.declarations != null) {var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
                for (var _iterator = node.declaration.declarations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var declaration = _step.value;
                  (0, _patternCapture2['default'])(declaration.id, function (v) {addNamed(v.name, v, parent, isTypeVariableDecl);});
                }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator['return']) {_iterator['return']();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
            }
          }return ExportNamedDeclaration;}(),

        ExportAllDeclaration: function () {function ExportAllDeclaration(node) {
            if (node.source == null) {return;} // not sure if this is ever true

            // `export * as X from 'path'` does not conflict
            if (node.exported && node.exported.name) {return;}

            var remoteExports = _builder2['default'].get(node.source.value, context);
            if (remoteExports == null) {return;}

            if (remoteExports.errors.length) {
              remoteExports.reportErrors(context, node);
              return;
            }

            var parent = getParent(node);

            var any = false;
            remoteExports.forEach(function (v, name) {
              if (name !== 'default') {
                any = true; // poor man's filter
                addNamed(name, node, parent);
              }
            });

            if (!any) {
              context.report(
              node.source, 'No named exports found in module \'' + String(
              node.source.value) + '\'.');

            }
          }return ExportAllDeclaration;}(),

        'Program:exit': function () {function ProgramExit() {var _iteratorNormalCompletion2 = true;var _didIteratorError2 = false;var _iteratorError2 = undefined;try {
              for (var _iterator2 = namespace[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {var _ref = _step2.value;var _ref2 = _slicedToArray(_ref, 2);var named = _ref2[1];var _iteratorNormalCompletion3 = true;var _didIteratorError3 = false;var _iteratorError3 = undefined;try {
                  for (var _iterator3 = named[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {var _ref3 = _step3.value;var _ref4 = _slicedToArray(_ref3, 2);var name = _ref4[0];var nodes = _ref4[1];
                    removeTypescriptFunctionOverloads(nodes);

                    if (nodes.size <= 1) {continue;}

                    if (isTypescriptNamespaceMerging(nodes)) {continue;}var _iteratorNormalCompletion4 = true;var _didIteratorError4 = false;var _iteratorError4 = undefined;try {

                      for (var _iterator4 = nodes[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {var node = _step4.value;
                        if (shouldSkipTypescriptNamespace(node, nodes)) {continue;}

                        if (name === 'default') {
                          context.report(node, 'Multiple default exports.');
                        } else {
                          context.report(
                          node, 'Multiple exports of name \'' + String(
                          name.replace(tsTypePrefix, '')) + '\'.');

                        }
                      }} catch (err) {_didIteratorError4 = true;_iteratorError4 = err;} finally {try {if (!_iteratorNormalCompletion4 && _iterator4['return']) {_iterator4['return']();}} finally {if (_didIteratorError4) {throw _iteratorError4;}}}
                  }} catch (err) {_didIteratorError3 = true;_iteratorError3 = err;} finally {try {if (!_iteratorNormalCompletion3 && _iterator3['return']) {_iterator3['return']();}} finally {if (_didIteratorError3) {throw _iteratorError3;}}}
              }} catch (err) {_didIteratorError2 = true;_iteratorError2 = err;} finally {try {if (!_iteratorNormalCompletion2 && _iterator2['return']) {_iterator2['return']();}} finally {if (_didIteratorError2) {throw _iteratorError2;}}}
          }return ProgramExit;}() };

    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9leHBvcnQuanMiXSwibmFtZXMiOlsicm9vdFByb2dyYW0iLCJ0c1R5cGVQcmVmaXgiLCJyZW1vdmVUeXBlc2NyaXB0RnVuY3Rpb25PdmVybG9hZHMiLCJub2RlcyIsImZvckVhY2giLCJub2RlIiwiZGVjbFR5cGUiLCJ0eXBlIiwiZGVjbGFyYXRpb24iLCJwYXJlbnQiLCJpc1R5cGVzY3JpcHROYW1lc3BhY2VNZXJnaW5nIiwidHlwZXMiLCJTZXQiLCJBcnJheSIsImZyb20iLCJub05hbWVzcGFjZU5vZGVzIiwiZmlsdGVyIiwiaGFzIiwic2l6ZSIsImxlbmd0aCIsInNob3VsZFNraXBUeXBlc2NyaXB0TmFtZXNwYWNlIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1ldGEiLCJkb2NzIiwiY2F0ZWdvcnkiLCJkZXNjcmlwdGlvbiIsInVybCIsInNjaGVtYSIsImNyZWF0ZSIsImNvbnRleHQiLCJuYW1lc3BhY2UiLCJNYXAiLCJhZGROYW1lZCIsIm5hbWUiLCJpc1R5cGUiLCJzZXQiLCJuYW1lZCIsImdldCIsImtleSIsImFkZCIsImdldFBhcmVudCIsIkV4cG9ydERlZmF1bHREZWNsYXJhdGlvbiIsIkV4cG9ydFNwZWNpZmllciIsImV4cG9ydGVkIiwidmFsdWUiLCJFeHBvcnROYW1lZERlY2xhcmF0aW9uIiwiaXNUeXBlVmFyaWFibGVEZWNsIiwia2luZCIsImlkIiwiZGVjbGFyYXRpb25zIiwidiIsIkV4cG9ydEFsbERlY2xhcmF0aW9uIiwic291cmNlIiwicmVtb3RlRXhwb3J0cyIsIkV4cG9ydE1hcEJ1aWxkZXIiLCJlcnJvcnMiLCJyZXBvcnRFcnJvcnMiLCJhbnkiLCJyZXBvcnQiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoicW9CQUFBLCtDO0FBQ0EsNkQ7QUFDQSxxQztBQUNBLCtDOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBLElBQU1BLGNBQWMsTUFBcEI7QUFDQSxJQUFNQyxlQUFlLE9BQXJCOztBQUVBOzs7Ozs7OztBQVFBLFNBQVNDLGlDQUFULENBQTJDQyxLQUEzQyxFQUFrRDtBQUNoREEsUUFBTUMsT0FBTixDQUFjLFVBQUNDLElBQUQsRUFBVTtBQUN0QixRQUFNQyxXQUFXRCxLQUFLRSxJQUFMLEtBQWMsMEJBQWQsR0FBMkNGLEtBQUtHLFdBQUwsQ0FBaUJELElBQTVELEdBQW1FRixLQUFLSSxNQUFMLENBQVlGLElBQWhHO0FBQ0E7QUFDRTtBQUNBRCxpQkFBYTtBQUNiO0FBREEsT0FFR0EsYUFBYSxnQ0FKbEI7QUFLRTtBQUNBSCxzQkFBYUUsSUFBYjtBQUNEO0FBQ0YsR0FWRDtBQVdEOztBQUVEOzs7Ozs7Ozs7QUFTQSxTQUFTSyw0QkFBVCxDQUFzQ1AsS0FBdEMsRUFBNkM7QUFDM0MsTUFBTVEsUUFBUSxJQUFJQyxHQUFKLENBQVFDLE1BQU1DLElBQU4sQ0FBV1gsS0FBWCxFQUFrQixVQUFDRSxJQUFELFVBQVVBLEtBQUtJLE1BQUwsQ0FBWUYsSUFBdEIsRUFBbEIsQ0FBUixDQUFkO0FBQ0EsTUFBTVEsbUJBQW1CRixNQUFNQyxJQUFOLENBQVdYLEtBQVgsRUFBa0JhLE1BQWxCLENBQXlCLFVBQUNYLElBQUQsVUFBVUEsS0FBS0ksTUFBTCxDQUFZRixJQUFaLEtBQXFCLHFCQUEvQixFQUF6QixDQUF6Qjs7QUFFQSxTQUFPSSxNQUFNTSxHQUFOLENBQVUscUJBQVY7O0FBRUhOLFFBQU1PLElBQU4sS0FBZTtBQUNmO0FBREEsS0FFR1AsTUFBTU8sSUFBTixLQUFlLENBQWYsS0FBcUJQLE1BQU1NLEdBQU4sQ0FBVSxxQkFBVixLQUFvQ04sTUFBTU0sR0FBTixDQUFVLG1CQUFWLENBQXpELENBRkg7QUFHR04sUUFBTU8sSUFBTixLQUFlLENBQWYsSUFBb0JQLE1BQU1NLEdBQU4sQ0FBVSxxQkFBVixDQUFwQixJQUF3RE4sTUFBTU0sR0FBTixDQUFVLG1CQUFWO0FBQzNEO0FBSkEsS0FLR04sTUFBTU8sSUFBTixLQUFlLENBQWYsS0FBcUJQLE1BQU1NLEdBQU4sQ0FBVSxrQkFBVixLQUFpQ04sTUFBTU0sR0FBTixDQUFVLG1CQUFWLENBQXRELEtBQXlGRixpQkFBaUJJLE1BQWpCLEtBQTRCLENBUHJILENBQVA7O0FBU0Q7O0FBRUQ7Ozs7Ozs7Ozs7O0FBV0EsU0FBU0MsNkJBQVQsQ0FBdUNmLElBQXZDLEVBQTZDRixLQUE3QyxFQUFvRDtBQUNsRCxNQUFNUSxRQUFRLElBQUlDLEdBQUosQ0FBUUMsTUFBTUMsSUFBTixDQUFXWCxLQUFYLEVBQWtCLFVBQUNFLElBQUQsVUFBVUEsS0FBS0ksTUFBTCxDQUFZRixJQUF0QixFQUFsQixDQUFSLENBQWQ7O0FBRUEsU0FBTyxDQUFDRyw2QkFBNkJQLEtBQTdCLENBQUQ7QUFDRkUsT0FBS0ksTUFBTCxDQUFZRixJQUFaLEtBQXFCLHFCQURuQjs7QUFHSEksUUFBTU0sR0FBTixDQUFVLG1CQUFWO0FBQ0dOLFFBQU1NLEdBQU4sQ0FBVSxrQkFBVixDQURIO0FBRUdOLFFBQU1NLEdBQU4sQ0FBVSxxQkFBVixDQUZIO0FBR0dOLFFBQU1NLEdBQU4sQ0FBVSxtQkFBVixDQU5BLENBQVA7O0FBUUQ7O0FBRURJLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsUUFBTTtBQUNKaEIsVUFBTSxTQURGO0FBRUppQixVQUFNO0FBQ0pDLGdCQUFVLGtCQUROO0FBRUpDLG1CQUFhLDhEQUZUO0FBR0pDLFdBQUssMEJBQVEsUUFBUixDQUhELEVBRkY7O0FBT0pDLFlBQVEsRUFQSixFQURTOzs7QUFXZkMsUUFYZSwrQkFXUkMsT0FYUSxFQVdDO0FBQ2QsVUFBTUMsWUFBWSxJQUFJQyxHQUFKLENBQVEsQ0FBQyxDQUFDaEMsV0FBRCxFQUFjLElBQUlnQyxHQUFKLEVBQWQsQ0FBRCxDQUFSLENBQWxCOztBQUVBLGVBQVNDLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCN0IsSUFBeEIsRUFBOEJJLE1BQTlCLEVBQXNDMEIsTUFBdEMsRUFBOEM7QUFDNUMsWUFBSSxDQUFDSixVQUFVZCxHQUFWLENBQWNSLE1BQWQsQ0FBTCxFQUE0QjtBQUMxQnNCLG9CQUFVSyxHQUFWLENBQWMzQixNQUFkLEVBQXNCLElBQUl1QixHQUFKLEVBQXRCO0FBQ0Q7QUFDRCxZQUFNSyxRQUFRTixVQUFVTyxHQUFWLENBQWM3QixNQUFkLENBQWQ7O0FBRUEsWUFBTThCLE1BQU1KLGNBQVlsQyxZQUFaLFVBQTJCaUMsSUFBM0IsSUFBb0NBLElBQWhEO0FBQ0EsWUFBSS9CLFFBQVFrQyxNQUFNQyxHQUFOLENBQVVDLEdBQVYsQ0FBWjs7QUFFQSxZQUFJcEMsU0FBUyxJQUFiLEVBQW1CO0FBQ2pCQSxrQkFBUSxJQUFJUyxHQUFKLEVBQVI7QUFDQXlCLGdCQUFNRCxHQUFOLENBQVVHLEdBQVYsRUFBZXBDLEtBQWY7QUFDRDs7QUFFREEsY0FBTXFDLEdBQU4sQ0FBVW5DLElBQVY7QUFDRDs7QUFFRCxlQUFTb0MsU0FBVCxDQUFtQnBDLElBQW5CLEVBQXlCO0FBQ3ZCLFlBQUlBLEtBQUtJLE1BQUwsSUFBZUosS0FBS0ksTUFBTCxDQUFZRixJQUFaLEtBQXFCLGVBQXhDLEVBQXlEO0FBQ3ZELGlCQUFPRixLQUFLSSxNQUFMLENBQVlBLE1BQW5CO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBLGVBQU9ULFdBQVA7QUFDRDs7QUFFRCxhQUFPO0FBQ0wwQyxnQ0FESyxpREFDb0JyQyxJQURwQixFQUMwQjtBQUM3QjRCLHFCQUFTLFNBQVQsRUFBb0I1QixJQUFwQixFQUEwQm9DLFVBQVVwQyxJQUFWLENBQTFCO0FBQ0QsV0FISTs7QUFLTHNDLHVCQUxLLHdDQUtXdEMsSUFMWCxFQUtpQjtBQUNwQjRCO0FBQ0U1QixpQkFBS3VDLFFBQUwsQ0FBY1YsSUFBZCxJQUFzQjdCLEtBQUt1QyxRQUFMLENBQWNDLEtBRHRDO0FBRUV4QyxpQkFBS3VDLFFBRlA7QUFHRUgsc0JBQVVwQyxLQUFLSSxNQUFmLENBSEY7O0FBS0QsV0FYSTs7QUFhTHFDLDhCQWJLLCtDQWFrQnpDLElBYmxCLEVBYXdCO0FBQzNCLGdCQUFJQSxLQUFLRyxXQUFMLElBQW9CLElBQXhCLEVBQThCLENBQUUsT0FBUzs7QUFFekMsZ0JBQU1DLFNBQVNnQyxVQUFVcEMsSUFBVixDQUFmO0FBQ0E7QUFDQSxnQkFBTTBDLHFCQUFxQjFDLEtBQUtHLFdBQUwsQ0FBaUJ3QyxJQUFqQixLQUEwQixNQUFyRDs7QUFFQSxnQkFBSTNDLEtBQUtHLFdBQUwsQ0FBaUJ5QyxFQUFqQixJQUF1QixJQUEzQixFQUFpQztBQUMvQixrQkFBSSxnQ0FBUztBQUNYLHNDQURXO0FBRVgsc0NBRlcsQ0FBVDtBQUdENUMsbUJBQUtHLFdBQUwsQ0FBaUJELElBSGhCLENBQUosRUFHMkI7QUFDekIwQix5QkFBUzVCLEtBQUtHLFdBQUwsQ0FBaUJ5QyxFQUFqQixDQUFvQmYsSUFBN0IsRUFBbUM3QixLQUFLRyxXQUFMLENBQWlCeUMsRUFBcEQsRUFBd0R4QyxNQUF4RCxFQUFnRSxJQUFoRTtBQUNELGVBTEQsTUFLTztBQUNMd0IseUJBQVM1QixLQUFLRyxXQUFMLENBQWlCeUMsRUFBakIsQ0FBb0JmLElBQTdCLEVBQW1DN0IsS0FBS0csV0FBTCxDQUFpQnlDLEVBQXBELEVBQXdEeEMsTUFBeEQsRUFBZ0VzQyxrQkFBaEU7QUFDRDtBQUNGOztBQUVELGdCQUFJMUMsS0FBS0csV0FBTCxDQUFpQjBDLFlBQWpCLElBQWlDLElBQXJDLEVBQTJDO0FBQ3pDLHFDQUEwQjdDLEtBQUtHLFdBQUwsQ0FBaUIwQyxZQUEzQyw4SEFBeUQsS0FBOUMxQyxXQUE4QztBQUN2RCxtREFBd0JBLFlBQVl5QyxFQUFwQyxFQUF3QyxVQUFDRSxDQUFELEVBQU8sQ0FBRWxCLFNBQVNrQixFQUFFakIsSUFBWCxFQUFpQmlCLENBQWpCLEVBQW9CMUMsTUFBcEIsRUFBNEJzQyxrQkFBNUIsRUFBa0QsQ0FBbkc7QUFDRCxpQkFId0M7QUFJMUM7QUFDRixXQXBDSTs7QUFzQ0xLLDRCQXRDSyw2Q0FzQ2dCL0MsSUF0Q2hCLEVBc0NzQjtBQUN6QixnQkFBSUEsS0FBS2dELE1BQUwsSUFBZSxJQUFuQixFQUF5QixDQUFFLE9BQVMsQ0FEWCxDQUNZOztBQUVyQztBQUNBLGdCQUFJaEQsS0FBS3VDLFFBQUwsSUFBaUJ2QyxLQUFLdUMsUUFBTCxDQUFjVixJQUFuQyxFQUF5QyxDQUFFLE9BQVM7O0FBRXBELGdCQUFNb0IsZ0JBQWdCQyxxQkFBaUJqQixHQUFqQixDQUFxQmpDLEtBQUtnRCxNQUFMLENBQVlSLEtBQWpDLEVBQXdDZixPQUF4QyxDQUF0QjtBQUNBLGdCQUFJd0IsaUJBQWlCLElBQXJCLEVBQTJCLENBQUUsT0FBUzs7QUFFdEMsZ0JBQUlBLGNBQWNFLE1BQWQsQ0FBcUJyQyxNQUF6QixFQUFpQztBQUMvQm1DLDRCQUFjRyxZQUFkLENBQTJCM0IsT0FBM0IsRUFBb0N6QixJQUFwQztBQUNBO0FBQ0Q7O0FBRUQsZ0JBQU1JLFNBQVNnQyxVQUFVcEMsSUFBVixDQUFmOztBQUVBLGdCQUFJcUQsTUFBTSxLQUFWO0FBQ0FKLDBCQUFjbEQsT0FBZCxDQUFzQixVQUFDK0MsQ0FBRCxFQUFJakIsSUFBSixFQUFhO0FBQ2pDLGtCQUFJQSxTQUFTLFNBQWIsRUFBd0I7QUFDdEJ3QixzQkFBTSxJQUFOLENBRHNCLENBQ1Y7QUFDWnpCLHlCQUFTQyxJQUFULEVBQWU3QixJQUFmLEVBQXFCSSxNQUFyQjtBQUNEO0FBQ0YsYUFMRDs7QUFPQSxnQkFBSSxDQUFDaUQsR0FBTCxFQUFVO0FBQ1I1QixzQkFBUTZCLE1BQVI7QUFDRXRELG1CQUFLZ0QsTUFEUDtBQUV1Q2hELG1CQUFLZ0QsTUFBTCxDQUFZUixLQUZuRDs7QUFJRDtBQUNGLFdBcEVJOztBQXNFTCxzQkF0RUssc0NBc0VZO0FBQ2Ysb0NBQXdCZCxTQUF4QixtSUFBbUMsaUVBQXJCTSxLQUFxQjtBQUNqQyx3Q0FBNEJBLEtBQTVCLG1JQUFtQyxtRUFBdkJILElBQXVCLGdCQUFqQi9CLEtBQWlCO0FBQ2pDRCxzREFBa0NDLEtBQWxDOztBQUVBLHdCQUFJQSxNQUFNZSxJQUFOLElBQWMsQ0FBbEIsRUFBcUIsQ0FBRSxTQUFXOztBQUVsQyx3QkFBSVIsNkJBQTZCUCxLQUE3QixDQUFKLEVBQXlDLENBQUUsU0FBVyxDQUxyQjs7QUFPakMsNENBQW1CQSxLQUFuQixtSUFBMEIsS0FBZkUsSUFBZTtBQUN4Qiw0QkFBSWUsOEJBQThCZixJQUE5QixFQUFvQ0YsS0FBcEMsQ0FBSixFQUFnRCxDQUFFLFNBQVc7O0FBRTdELDRCQUFJK0IsU0FBUyxTQUFiLEVBQXdCO0FBQ3RCSixrQ0FBUTZCLE1BQVIsQ0FBZXRELElBQWYsRUFBcUIsMkJBQXJCO0FBQ0QseUJBRkQsTUFFTztBQUNMeUIsa0NBQVE2QixNQUFSO0FBQ0V0RCw4QkFERjtBQUUrQjZCLCtCQUFLMEIsT0FBTCxDQUFhM0QsWUFBYixFQUEyQixFQUEzQixDQUYvQjs7QUFJRDtBQUNGLHVCQWxCZ0M7QUFtQmxDLG1CQXBCZ0M7QUFxQmxDLGVBdEJjO0FBdUJoQixXQTdGSSx3QkFBUDs7QUErRkQsS0F4SWMsbUJBQWpCIiwiZmlsZSI6ImV4cG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeHBvcnRNYXBCdWlsZGVyIGZyb20gJy4uL2V4cG9ydE1hcC9idWlsZGVyJztcbmltcG9ydCByZWN1cnNpdmVQYXR0ZXJuQ2FwdHVyZSBmcm9tICcuLi9leHBvcnRNYXAvcGF0dGVybkNhcHR1cmUnO1xuaW1wb3J0IGRvY3NVcmwgZnJvbSAnLi4vZG9jc1VybCc7XG5pbXBvcnQgaW5jbHVkZXMgZnJvbSAnYXJyYXktaW5jbHVkZXMnO1xuXG4vKlxuTm90ZXMgb24gVHlwZVNjcmlwdCBuYW1lc3BhY2VzIGFrYSBUU01vZHVsZURlY2xhcmF0aW9uOlxuXG5UaGVyZSBhcmUgdHdvIGZvcm1zOlxuLSBhY3RpdmUgbmFtZXNwYWNlczogbmFtZXNwYWNlIEZvbyB7fSAvIG1vZHVsZSBGb28ge31cbi0gYW1iaWVudCBtb2R1bGVzOyBkZWNsYXJlIG1vZHVsZSBcImVzbGludC1wbHVnaW4taW1wb3J0XCIge31cblxuYWN0aXZlIG5hbWVzcGFjZXM6XG4tIGNhbm5vdCBjb250YWluIGEgZGVmYXVsdCBleHBvcnRcbi0gY2Fubm90IGNvbnRhaW4gYW4gZXhwb3J0IGFsbFxuLSBjYW5ub3QgY29udGFpbiBhIG11bHRpIG5hbWUgZXhwb3J0IChleHBvcnQgeyBhLCBiIH0pXG4tIGNhbiBoYXZlIGFjdGl2ZSBuYW1lc3BhY2VzIG5lc3RlZCB3aXRoaW4gdGhlbVxuXG5hbWJpZW50IG5hbWVzcGFjZXM6XG4tIGNhbiBvbmx5IGJlIGRlZmluZWQgaW4gLmQudHMgZmlsZXNcbi0gY2Fubm90IGJlIG5lc3RlZCB3aXRoaW4gYWN0aXZlIG5hbWVzcGFjZXNcbi0gaGF2ZSBubyBvdGhlciByZXN0cmljdGlvbnNcbiovXG5cbmNvbnN0IHJvb3RQcm9ncmFtID0gJ3Jvb3QnO1xuY29uc3QgdHNUeXBlUHJlZml4ID0gJ3R5cGU6JztcblxuLyoqXG4gKiByZW1vdmUgZnVuY3Rpb24gb3ZlcmxvYWRzIGxpa2U6XG4gKiBgYGB0c1xuICogZXhwb3J0IGZ1bmN0aW9uIGZvbyhhOiBudW1iZXIpO1xuICogZXhwb3J0IGZ1bmN0aW9uIGZvbyhhOiBzdHJpbmcpO1xuICogYGBgXG4gKiBAcGFyYW0ge1NldDxPYmplY3Q+fSBub2Rlc1xuICovXG5mdW5jdGlvbiByZW1vdmVUeXBlc2NyaXB0RnVuY3Rpb25PdmVybG9hZHMobm9kZXMpIHtcbiAgbm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgIGNvbnN0IGRlY2xUeXBlID0gbm9kZS50eXBlID09PSAnRXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uJyA/IG5vZGUuZGVjbGFyYXRpb24udHlwZSA6IG5vZGUucGFyZW50LnR5cGU7XG4gICAgaWYgKFxuICAgICAgLy8gZXNsaW50IDYrXG4gICAgICBkZWNsVHlwZSA9PT0gJ1RTRGVjbGFyZUZ1bmN0aW9uJ1xuICAgICAgLy8gZXNsaW50IDQtNVxuICAgICAgfHwgZGVjbFR5cGUgPT09ICdUU0VtcHR5Qm9keUZ1bmN0aW9uRGVjbGFyYXRpb24nXG4gICAgKSB7XG4gICAgICBub2Rlcy5kZWxldGUobm9kZSk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBEZXRlY3QgbWVyZ2luZyBOYW1lc3BhY2VzIHdpdGggQ2xhc3NlcywgRnVuY3Rpb25zLCBvciBFbnVtcyBsaWtlOlxuICogYGBgdHNcbiAqIGV4cG9ydCBjbGFzcyBGb28geyB9XG4gKiBleHBvcnQgbmFtZXNwYWNlIEZvbyB7IH1cbiAqIGBgYFxuICogQHBhcmFtIHtTZXQ8T2JqZWN0Pn0gbm9kZXNcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1R5cGVzY3JpcHROYW1lc3BhY2VNZXJnaW5nKG5vZGVzKSB7XG4gIGNvbnN0IHR5cGVzID0gbmV3IFNldChBcnJheS5mcm9tKG5vZGVzLCAobm9kZSkgPT4gbm9kZS5wYXJlbnQudHlwZSkpO1xuICBjb25zdCBub05hbWVzcGFjZU5vZGVzID0gQXJyYXkuZnJvbShub2RlcykuZmlsdGVyKChub2RlKSA9PiBub2RlLnBhcmVudC50eXBlICE9PSAnVFNNb2R1bGVEZWNsYXJhdGlvbicpO1xuXG4gIHJldHVybiB0eXBlcy5oYXMoJ1RTTW9kdWxlRGVjbGFyYXRpb24nKVxuICAgICYmIChcbiAgICAgIHR5cGVzLnNpemUgPT09IDFcbiAgICAgIC8vIE1lcmdpbmcgd2l0aCBmdW5jdGlvbnNcbiAgICAgIHx8IHR5cGVzLnNpemUgPT09IDIgJiYgKHR5cGVzLmhhcygnRnVuY3Rpb25EZWNsYXJhdGlvbicpIHx8IHR5cGVzLmhhcygnVFNEZWNsYXJlRnVuY3Rpb24nKSlcbiAgICAgIHx8IHR5cGVzLnNpemUgPT09IDMgJiYgdHlwZXMuaGFzKCdGdW5jdGlvbkRlY2xhcmF0aW9uJykgJiYgdHlwZXMuaGFzKCdUU0RlY2xhcmVGdW5jdGlvbicpXG4gICAgICAvLyBNZXJnaW5nIHdpdGggY2xhc3NlcyBvciBlbnVtc1xuICAgICAgfHwgdHlwZXMuc2l6ZSA9PT0gMiAmJiAodHlwZXMuaGFzKCdDbGFzc0RlY2xhcmF0aW9uJykgfHwgdHlwZXMuaGFzKCdUU0VudW1EZWNsYXJhdGlvbicpKSAmJiBub05hbWVzcGFjZU5vZGVzLmxlbmd0aCA9PT0gMVxuICAgICk7XG59XG5cbi8qKlxuICogRGV0ZWN0IGlmIGEgdHlwZXNjcmlwdCBuYW1lc3BhY2Ugbm9kZSBzaG91bGQgYmUgcmVwb3J0ZWQgYXMgbXVsdGlwbGUgZXhwb3J0OlxuICogYGBgdHNcbiAqIGV4cG9ydCBjbGFzcyBGb28geyB9XG4gKiBleHBvcnQgZnVuY3Rpb24gRm9vKCk7XG4gKiBleHBvcnQgbmFtZXNwYWNlIEZvbyB7IH1cbiAqIGBgYFxuICogQHBhcmFtIHtPYmplY3R9IG5vZGVcbiAqIEBwYXJhbSB7U2V0PE9iamVjdD59IG5vZGVzXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gc2hvdWxkU2tpcFR5cGVzY3JpcHROYW1lc3BhY2Uobm9kZSwgbm9kZXMpIHtcbiAgY29uc3QgdHlwZXMgPSBuZXcgU2V0KEFycmF5LmZyb20obm9kZXMsIChub2RlKSA9PiBub2RlLnBhcmVudC50eXBlKSk7XG5cbiAgcmV0dXJuICFpc1R5cGVzY3JpcHROYW1lc3BhY2VNZXJnaW5nKG5vZGVzKVxuICAgICYmIG5vZGUucGFyZW50LnR5cGUgPT09ICdUU01vZHVsZURlY2xhcmF0aW9uJ1xuICAgICYmIChcbiAgICAgIHR5cGVzLmhhcygnVFNFbnVtRGVjbGFyYXRpb24nKVxuICAgICAgfHwgdHlwZXMuaGFzKCdDbGFzc0RlY2xhcmF0aW9uJylcbiAgICAgIHx8IHR5cGVzLmhhcygnRnVuY3Rpb25EZWNsYXJhdGlvbicpXG4gICAgICB8fCB0eXBlcy5oYXMoJ1RTRGVjbGFyZUZ1bmN0aW9uJylcbiAgICApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWV0YToge1xuICAgIHR5cGU6ICdwcm9ibGVtJyxcbiAgICBkb2NzOiB7XG4gICAgICBjYXRlZ29yeTogJ0hlbHBmdWwgd2FybmluZ3MnLFxuICAgICAgZGVzY3JpcHRpb246ICdGb3JiaWQgYW55IGludmFsaWQgZXhwb3J0cywgaS5lLiByZS1leHBvcnQgb2YgdGhlIHNhbWUgbmFtZS4nLFxuICAgICAgdXJsOiBkb2NzVXJsKCdleHBvcnQnKSxcbiAgICB9LFxuICAgIHNjaGVtYTogW10sXG4gIH0sXG5cbiAgY3JlYXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBuYW1lc3BhY2UgPSBuZXcgTWFwKFtbcm9vdFByb2dyYW0sIG5ldyBNYXAoKV1dKTtcblxuICAgIGZ1bmN0aW9uIGFkZE5hbWVkKG5hbWUsIG5vZGUsIHBhcmVudCwgaXNUeXBlKSB7XG4gICAgICBpZiAoIW5hbWVzcGFjZS5oYXMocGFyZW50KSkge1xuICAgICAgICBuYW1lc3BhY2Uuc2V0KHBhcmVudCwgbmV3IE1hcCgpKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5hbWVkID0gbmFtZXNwYWNlLmdldChwYXJlbnQpO1xuXG4gICAgICBjb25zdCBrZXkgPSBpc1R5cGUgPyBgJHt0c1R5cGVQcmVmaXh9JHtuYW1lfWAgOiBuYW1lO1xuICAgICAgbGV0IG5vZGVzID0gbmFtZWQuZ2V0KGtleSk7XG5cbiAgICAgIGlmIChub2RlcyA9PSBudWxsKSB7XG4gICAgICAgIG5vZGVzID0gbmV3IFNldCgpO1xuICAgICAgICBuYW1lZC5zZXQoa2V5LCBub2Rlcyk7XG4gICAgICB9XG5cbiAgICAgIG5vZGVzLmFkZChub2RlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQYXJlbnQobm9kZSkge1xuICAgICAgaWYgKG5vZGUucGFyZW50ICYmIG5vZGUucGFyZW50LnR5cGUgPT09ICdUU01vZHVsZUJsb2NrJykge1xuICAgICAgICByZXR1cm4gbm9kZS5wYXJlbnQucGFyZW50O1xuICAgICAgfVxuXG4gICAgICAvLyBqdXN0IGluIGNhc2Ugc29tZWhvdyBhIG5vbi10cyBuYW1lc3BhY2UgZXhwb3J0IGRlY2xhcmF0aW9uIGlzbid0IGRpcmVjdGx5XG4gICAgICAvLyBwYXJlbnRlZCB0byB0aGUgcm9vdCBQcm9ncmFtIG5vZGVcbiAgICAgIHJldHVybiByb290UHJvZ3JhbTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgRXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uKG5vZGUpIHtcbiAgICAgICAgYWRkTmFtZWQoJ2RlZmF1bHQnLCBub2RlLCBnZXRQYXJlbnQobm9kZSkpO1xuICAgICAgfSxcblxuICAgICAgRXhwb3J0U3BlY2lmaWVyKG5vZGUpIHtcbiAgICAgICAgYWRkTmFtZWQoXG4gICAgICAgICAgbm9kZS5leHBvcnRlZC5uYW1lIHx8IG5vZGUuZXhwb3J0ZWQudmFsdWUsXG4gICAgICAgICAgbm9kZS5leHBvcnRlZCxcbiAgICAgICAgICBnZXRQYXJlbnQobm9kZS5wYXJlbnQpLFxuICAgICAgICApO1xuICAgICAgfSxcblxuICAgICAgRXhwb3J0TmFtZWREZWNsYXJhdGlvbihub2RlKSB7XG4gICAgICAgIGlmIChub2RlLmRlY2xhcmF0aW9uID09IG51bGwpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgY29uc3QgcGFyZW50ID0gZ2V0UGFyZW50KG5vZGUpO1xuICAgICAgICAvLyBzdXBwb3J0IGZvciBvbGQgVHlwZVNjcmlwdCB2ZXJzaW9uc1xuICAgICAgICBjb25zdCBpc1R5cGVWYXJpYWJsZURlY2wgPSBub2RlLmRlY2xhcmF0aW9uLmtpbmQgPT09ICd0eXBlJztcblxuICAgICAgICBpZiAobm9kZS5kZWNsYXJhdGlvbi5pZCAhPSBudWxsKSB7XG4gICAgICAgICAgaWYgKGluY2x1ZGVzKFtcbiAgICAgICAgICAgICdUU1R5cGVBbGlhc0RlY2xhcmF0aW9uJyxcbiAgICAgICAgICAgICdUU0ludGVyZmFjZURlY2xhcmF0aW9uJyxcbiAgICAgICAgICBdLCBub2RlLmRlY2xhcmF0aW9uLnR5cGUpKSB7XG4gICAgICAgICAgICBhZGROYW1lZChub2RlLmRlY2xhcmF0aW9uLmlkLm5hbWUsIG5vZGUuZGVjbGFyYXRpb24uaWQsIHBhcmVudCwgdHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkZE5hbWVkKG5vZGUuZGVjbGFyYXRpb24uaWQubmFtZSwgbm9kZS5kZWNsYXJhdGlvbi5pZCwgcGFyZW50LCBpc1R5cGVWYXJpYWJsZURlY2wpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLmRlY2xhcmF0aW9uLmRlY2xhcmF0aW9ucyAhPSBudWxsKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBkZWNsYXJhdGlvbiBvZiBub2RlLmRlY2xhcmF0aW9uLmRlY2xhcmF0aW9ucykge1xuICAgICAgICAgICAgcmVjdXJzaXZlUGF0dGVybkNhcHR1cmUoZGVjbGFyYXRpb24uaWQsICh2KSA9PiB7IGFkZE5hbWVkKHYubmFtZSwgdiwgcGFyZW50LCBpc1R5cGVWYXJpYWJsZURlY2wpOyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIEV4cG9ydEFsbERlY2xhcmF0aW9uKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUuc291cmNlID09IG51bGwpIHsgcmV0dXJuOyB9IC8vIG5vdCBzdXJlIGlmIHRoaXMgaXMgZXZlciB0cnVlXG5cbiAgICAgICAgLy8gYGV4cG9ydCAqIGFzIFggZnJvbSAncGF0aCdgIGRvZXMgbm90IGNvbmZsaWN0XG4gICAgICAgIGlmIChub2RlLmV4cG9ydGVkICYmIG5vZGUuZXhwb3J0ZWQubmFtZSkgeyByZXR1cm47IH1cblxuICAgICAgICBjb25zdCByZW1vdGVFeHBvcnRzID0gRXhwb3J0TWFwQnVpbGRlci5nZXQobm9kZS5zb3VyY2UudmFsdWUsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVtb3RlRXhwb3J0cyA9PSBudWxsKSB7IHJldHVybjsgfVxuXG4gICAgICAgIGlmIChyZW1vdGVFeHBvcnRzLmVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICByZW1vdGVFeHBvcnRzLnJlcG9ydEVycm9ycyhjb250ZXh0LCBub2RlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYXJlbnQgPSBnZXRQYXJlbnQobm9kZSk7XG5cbiAgICAgICAgbGV0IGFueSA9IGZhbHNlO1xuICAgICAgICByZW1vdGVFeHBvcnRzLmZvckVhY2goKHYsIG5hbWUpID0+IHtcbiAgICAgICAgICBpZiAobmFtZSAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBhbnkgPSB0cnVlOyAvLyBwb29yIG1hbidzIGZpbHRlclxuICAgICAgICAgICAgYWRkTmFtZWQobmFtZSwgbm9kZSwgcGFyZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghYW55KSB7XG4gICAgICAgICAgY29udGV4dC5yZXBvcnQoXG4gICAgICAgICAgICBub2RlLnNvdXJjZSxcbiAgICAgICAgICAgIGBObyBuYW1lZCBleHBvcnRzIGZvdW5kIGluIG1vZHVsZSAnJHtub2RlLnNvdXJjZS52YWx1ZX0nLmAsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgJ1Byb2dyYW06ZXhpdCcoKSB7XG4gICAgICAgIGZvciAoY29uc3QgWywgbmFtZWRdIG9mIG5hbWVzcGFjZSkge1xuICAgICAgICAgIGZvciAoY29uc3QgW25hbWUsIG5vZGVzXSBvZiBuYW1lZCkge1xuICAgICAgICAgICAgcmVtb3ZlVHlwZXNjcmlwdEZ1bmN0aW9uT3ZlcmxvYWRzKG5vZGVzKTtcblxuICAgICAgICAgICAgaWYgKG5vZGVzLnNpemUgPD0gMSkgeyBjb250aW51ZTsgfVxuXG4gICAgICAgICAgICBpZiAoaXNUeXBlc2NyaXB0TmFtZXNwYWNlTWVyZ2luZyhub2RlcykpIHsgY29udGludWU7IH1cblxuICAgICAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgICAgICAgIGlmIChzaG91bGRTa2lwVHlwZXNjcmlwdE5hbWVzcGFjZShub2RlLCBub2RlcykpIHsgY29udGludWU7IH1cblxuICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5yZXBvcnQobm9kZSwgJ011bHRpcGxlIGRlZmF1bHQgZXhwb3J0cy4nKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnJlcG9ydChcbiAgICAgICAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICAgICAgICBgTXVsdGlwbGUgZXhwb3J0cyBvZiBuYW1lICcke25hbWUucmVwbGFjZSh0c1R5cGVQcmVmaXgsICcnKX0nLmAsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuICB9LFxufTtcbiJdfQ==