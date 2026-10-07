'use strict';




var _minimatch = require('minimatch');var _minimatch2 = _interopRequireDefault(_minimatch);
var _contextCompat = require('eslint-module-utils/contextCompat');

var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

/**
                                                                                                                                                                                       * @param {MemberExpression} memberExpression
                                                                                                                                                                                       * @returns {string} the name of the member in the object expression, e.g. the `x` in `namespace.x`
                                                                                                                                                                                       */
function getMemberPropertyName(memberExpression) {
  return memberExpression.property.type === 'Identifier' ?
  memberExpression.property.name :
  memberExpression.property.value;
}

/**
   * @param {ScopeManager} scopeManager
   * @param {ASTNode} node
   * @return {Set<string>}
   */ /**
       * @fileoverview Rule to disallow namespace import
       * @author Radek Benkel
       */function getVariableNamesInScope(scopeManager, node) {var currentNode = node;var scope = scopeManager.acquire(currentNode);
  while (scope == null) {
    currentNode = currentNode.parent;
    scope = scopeManager.acquire(currentNode, true);
  }
  return new Set(scope.variables.concat(scope.upper.variables).map(function (variable) {return variable.name;}));
}

/**
   *
   * @param {*} names
   * @param {*} nameConflicts
   * @param {*} namespaceName
   */
function generateLocalNames(names, nameConflicts, namespaceName) {
  var localNames = {};
  names.forEach(function (name) {
    var localName = void 0;
    if (!nameConflicts[name].has(name)) {
      localName = name;
    } else if (!nameConflicts[name].has(String(namespaceName) + '_' + String(name))) {
      localName = String(namespaceName) + '_' + String(name);
    } else {
      for (var i = 1; i < Infinity; i++) {
        if (!nameConflicts[name].has(String(namespaceName) + '_' + String(name) + '_' + String(i))) {
          localName = String(namespaceName) + '_' + String(name) + '_' + String(i);
          break;
        }
      }
    }
    localNames[name] = localName;
  });
  return localNames;
}

/**
   * @param {Identifier[]} namespaceIdentifiers
   * @returns {boolean} `true` if the namespace variable is more than just a glorified constant
   */
function usesNamespaceAsObject(namespaceIdentifiers) {
  return !namespaceIdentifiers.every(function (identifier) {
    var parent = identifier.parent;

    // `namespace.x` or `namespace['x']`
    return (
      parent &&
      parent.type === 'MemberExpression' && (
      parent.property.type === 'Identifier' || parent.property.type === 'Literal'));

  });
}

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Style guide',
      description: 'Forbid namespace (a.k.a. "wildcard" `*`) imports.',
      url: (0, _docsUrl2['default'])('no-namespace') },

    fixable: 'code',
    schema: [{
      type: 'object',
      properties: {
        ignore: {
          type: 'array',
          items: {
            type: 'string' },

          uniqueItems: true } } }] },





  create: function () {function create(context) {
      var firstOption = context.options[0] || {};
      var ignoreGlobs = firstOption.ignore;

      return {
        ImportNamespaceSpecifier: function () {function ImportNamespaceSpecifier(node) {
            if (ignoreGlobs && ignoreGlobs.find(function (glob) {return (0, _minimatch2['default'])(node.parent.source.value, glob, { matchBase: true });})) {
              return;
            }

            var scopeVariables = (0, _contextCompat.getScope)(context, node).variables;
            var namespaceVariable = scopeVariables.find(function (variable) {return variable.defs[0].node === node;});
            var namespaceReferences = namespaceVariable.references;
            var namespaceIdentifiers = namespaceReferences.map(function (reference) {return reference.identifier;});
            var canFix = namespaceIdentifiers.length > 0 && !usesNamespaceAsObject(namespaceIdentifiers);

            context.report({
              node: node,
              message: 'Unexpected namespace import.',
              fix: canFix && function (fixer) {var _getSourceCode =
                (0, _contextCompat.getSourceCode)(context),scopeManager = _getSourceCode.scopeManager;
                var fixes = [];

                // Pass 1: Collect variable names that are already in scope for each reference we want
                // to transform, so that we can be sure that we choose non-conflicting import names
                var importNameConflicts = {};
                namespaceIdentifiers.forEach(function (identifier) {
                  var parent = identifier.parent;
                  if (parent && parent.type === 'MemberExpression') {
                    var importName = getMemberPropertyName(parent);
                    var localConflicts = getVariableNamesInScope(scopeManager, parent);
                    if (!importNameConflicts[importName]) {
                      importNameConflicts[importName] = localConflicts;
                    } else {
                      localConflicts.forEach(function (c) {return importNameConflicts[importName].add(c);});
                    }
                  }
                });

                // Choose new names for each import
                var importNames = Object.keys(importNameConflicts);
                var importLocalNames = generateLocalNames(
                importNames,
                importNameConflicts,
                namespaceVariable.name);


                // Replace the ImportNamespaceSpecifier with a list of ImportSpecifiers
                var namedImportSpecifiers = importNames.map(function (importName) {return importName === importLocalNames[importName] ?
                  importName : String(
                  importName) + ' as ' + String(importLocalNames[importName]);});

                fixes.push(fixer.replaceText(node, '{ ' + String(namedImportSpecifiers.join(', ')) + ' }'));

                // Pass 2: Replace references to the namespace with references to the named imports
                namespaceIdentifiers.forEach(function (identifier) {
                  var parent = identifier.parent;
                  if (parent && parent.type === 'MemberExpression') {
                    var importName = getMemberPropertyName(parent);
                    fixes.push(fixer.replaceText(parent, importLocalNames[importName]));
                  }
                });

                return fixes;
              } });

          }return ImportNamespaceSpecifier;}() };

    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby1uYW1lc3BhY2UuanMiXSwibmFtZXMiOlsiZ2V0TWVtYmVyUHJvcGVydHlOYW1lIiwibWVtYmVyRXhwcmVzc2lvbiIsInByb3BlcnR5IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImdldFZhcmlhYmxlTmFtZXNJblNjb3BlIiwic2NvcGVNYW5hZ2VyIiwibm9kZSIsImN1cnJlbnROb2RlIiwic2NvcGUiLCJhY3F1aXJlIiwicGFyZW50IiwiU2V0IiwidmFyaWFibGVzIiwiY29uY2F0IiwidXBwZXIiLCJtYXAiLCJ2YXJpYWJsZSIsImdlbmVyYXRlTG9jYWxOYW1lcyIsIm5hbWVzIiwibmFtZUNvbmZsaWN0cyIsIm5hbWVzcGFjZU5hbWUiLCJsb2NhbE5hbWVzIiwiZm9yRWFjaCIsImxvY2FsTmFtZSIsImhhcyIsImkiLCJJbmZpbml0eSIsInVzZXNOYW1lc3BhY2VBc09iamVjdCIsIm5hbWVzcGFjZUlkZW50aWZpZXJzIiwiZXZlcnkiLCJpZGVudGlmaWVyIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1ldGEiLCJkb2NzIiwiY2F0ZWdvcnkiLCJkZXNjcmlwdGlvbiIsInVybCIsImZpeGFibGUiLCJzY2hlbWEiLCJwcm9wZXJ0aWVzIiwiaWdub3JlIiwiaXRlbXMiLCJ1bmlxdWVJdGVtcyIsImNyZWF0ZSIsImNvbnRleHQiLCJmaXJzdE9wdGlvbiIsIm9wdGlvbnMiLCJpZ25vcmVHbG9icyIsIkltcG9ydE5hbWVzcGFjZVNwZWNpZmllciIsImZpbmQiLCJnbG9iIiwic291cmNlIiwibWF0Y2hCYXNlIiwic2NvcGVWYXJpYWJsZXMiLCJuYW1lc3BhY2VWYXJpYWJsZSIsImRlZnMiLCJuYW1lc3BhY2VSZWZlcmVuY2VzIiwicmVmZXJlbmNlcyIsInJlZmVyZW5jZSIsImNhbkZpeCIsImxlbmd0aCIsInJlcG9ydCIsIm1lc3NhZ2UiLCJmaXgiLCJmaXhlciIsImZpeGVzIiwiaW1wb3J0TmFtZUNvbmZsaWN0cyIsImltcG9ydE5hbWUiLCJsb2NhbENvbmZsaWN0cyIsImMiLCJhZGQiLCJpbXBvcnROYW1lcyIsIk9iamVjdCIsImtleXMiLCJpbXBvcnRMb2NhbE5hbWVzIiwibmFtZWRJbXBvcnRTcGVjaWZpZXJzIiwicHVzaCIsInJlcGxhY2VUZXh0Iiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxzQztBQUNBOztBQUVBLHFDOztBQUVBOzs7O0FBSUEsU0FBU0EscUJBQVQsQ0FBK0JDLGdCQUEvQixFQUFpRDtBQUMvQyxTQUFPQSxpQkFBaUJDLFFBQWpCLENBQTBCQyxJQUExQixLQUFtQyxZQUFuQztBQUNIRixtQkFBaUJDLFFBQWpCLENBQTBCRSxJQUR2QjtBQUVISCxtQkFBaUJDLFFBQWpCLENBQTBCRyxLQUY5QjtBQUdEOztBQUVEOzs7O01BcEJBOzs7U0F5QkEsU0FBU0MsdUJBQVQsQ0FBaUNDLFlBQWpDLEVBQStDQyxJQUEvQyxFQUFxRCxDQUNuRCxJQUFJQyxjQUFjRCxJQUFsQixDQUNBLElBQUlFLFFBQVFILGFBQWFJLE9BQWIsQ0FBcUJGLFdBQXJCLENBQVo7QUFDQSxTQUFPQyxTQUFTLElBQWhCLEVBQXNCO0FBQ3BCRCxrQkFBY0EsWUFBWUcsTUFBMUI7QUFDQUYsWUFBUUgsYUFBYUksT0FBYixDQUFxQkYsV0FBckIsRUFBa0MsSUFBbEMsQ0FBUjtBQUNEO0FBQ0QsU0FBTyxJQUFJSSxHQUFKLENBQVFILE1BQU1JLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCTCxNQUFNTSxLQUFOLENBQVlGLFNBQW5DLEVBQThDRyxHQUE5QyxDQUFrRCxVQUFDQyxRQUFELFVBQWNBLFNBQVNkLElBQXZCLEVBQWxELENBQVIsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7QUFNQSxTQUFTZSxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUNDLGFBQW5DLEVBQWtEQyxhQUFsRCxFQUFpRTtBQUMvRCxNQUFNQyxhQUFhLEVBQW5CO0FBQ0FILFFBQU1JLE9BQU4sQ0FBYyxVQUFDcEIsSUFBRCxFQUFVO0FBQ3RCLFFBQUlxQixrQkFBSjtBQUNBLFFBQUks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LG9CQUV0Q08saUJBQWlCUCxVQUFqQixDQUZzQyxDQUFoQixFQUFoQixDQUE5Qjs7QUFJQUYsc0JBQU1XLElBQU4sQ0FBV1osTUFBTWEsV0FBTixDQUFrQnhFLElBQWxCLGdCQUE2QnNFLHNCQUFzQkcsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBN0IsU0FBWDs7QUFFQTtBQUNBbkQscUNBQXFCTixPQUFyQixDQUE2QixVQUFDUSxVQUFELEVBQWdCO0FBQzNDLHNCQUFNcEIsU0FBU29CLFdBQVdwQixNQUExQjtBQUNBLHNCQUFJQSxVQUFVQSxPQUFPVCxJQUFQLEtBQWdCLGtCQUE5QixFQUFrRDtBQUNoRCx3QkFBTW1FLGFBQWF0RSxzQkFBc0JZLE1BQXRCLENBQW5CO0FBQ0F3RCwwQkFBTVcsSUFBTixDQUFXWixNQUFNYSxXQUFOLENBQWtCcEUsTUFBbEIsRUFBMEJpRSxpQkFBaUJQLFVBQWpCLENBQTFCLENBQVg7QUFDRDtBQUNGLGlCQU5EOztBQVFBLHVCQUFPRixLQUFQO0FBQ0QsZUFoRFksRUFBZjs7QUFrREQsV0E5REkscUNBQVA7O0FBZ0VELEtBM0ZjLG1CQUFqQiIsImZpbGUiOiJuby1uYW1lc3BhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgUnVsZSB0byBkaXNhbGxvdyBuYW1lc3BhY2UgaW1wb3J0XG4gKiBAYXV0aG9yIFJhZGVrIEJlbmtlbFxuICovXG5cbmltcG9ydCBtaW5pbWF0Y2ggZnJvbSAnbWluaW1hdGNoJztcbmltcG9ydCB7IGdldFNjb3BlLCBnZXRTb3VyY2VDb2RlIH0gZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy9jb250ZXh0Q29tcGF0JztcblxuaW1wb3J0IGRvY3NVcmwgZnJvbSAnLi4vZG9jc1VybCc7XG5cbi8qKlxuICogQHBhcmFtIHtNZW1iZXJFeHByZXNzaW9ufSBtZW1iZXJFeHByZXNzaW9uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSB0aGUgbmFtZSBvZiB0aGUgbWVtYmVyIGluIHRoZSBvYmplY3QgZXhwcmVzc2lvbiwgZS5nLiB0aGUgYHhgIGluIGBuYW1lc3BhY2UueGBcbiAqL1xuZnVuY3Rpb24gZ2V0TWVtYmVyUHJvcGVydHlOYW1lKG1lbWJlckV4cHJlc3Npb24pIHtcbiAgcmV0dXJuIG1lbWJlckV4cHJlc3Npb24ucHJvcGVydHkudHlwZSA9PT0gJ0lkZW50aWZpZXInXG4gICAgPyBtZW1iZXJFeHByZXNzaW9uLnByb3BlcnR5Lm5hbWVcbiAgICA6IG1lbWJlckV4cHJlc3Npb24ucHJvcGVydHkudmFsdWU7XG59XG5cbi8qKlxuICogQHBhcmFtIHtTY29wZU1hbmFnZXJ9IHNjb3BlTWFuYWdlclxuICogQHBhcmFtIHtBU1ROb2RlfSBub2RlXG4gKiBAcmV0dXJuIHtTZXQ8c3RyaW5nPn1cbiAqL1xuZnVuY3Rpb24gZ2V0VmFyaWFibGVOYW1lc0luU2NvcGUoc2NvcGVNYW5hZ2VyLCBub2RlKSB7XG4gIGxldCBjdXJyZW50Tm9kZSA9IG5vZGU7XG4gIGxldCBzY29wZSA9IHNjb3BlTWFuYWdlci5hY3F1aXJlKGN1cnJlbnROb2RlKTtcbiAgd2hpbGUgKHNjb3BlID09IG51bGwpIHtcbiAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudDtcbiAgICBzY29wZSA9IHNjb3BlTWFuYWdlci5hY3F1aXJlKGN1cnJlbnROb2RlLCB0cnVlKTtcbiAgfVxuICByZXR1cm4gbmV3IFNldChzY29wZS52YXJpYWJsZXMuY29uY2F0KHNjb3BlLnVwcGVyLnZhcmlhYmxlcykubWFwKCh2YXJpYWJsZSkgPT4gdmFyaWFibGUubmFtZSkpO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0geyp9IG5hbWVzXG4gKiBAcGFyYW0geyp9IG5hbWVDb25mbGljdHNcbiAqIEBwYXJhbSB7Kn0gbmFtZXNwYWNlTmFtZVxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZUxvY2FsTmFtZXMobmFtZXMsIG5hbWVDb25mbGljdHMsIG5hbWVzcGFjZU5hbWUpIHtcbiAgY29uc3QgbG9jYWxOYW1lcyA9IHt9O1xuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgbGV0IGxvY2FsTmFtZTtcbiAgICBpZiAoIW5hbWVDb25mbGljdHNbbmFtZV0uaGFzKG5hbWUpKSB7XG4gICAgICBsb2NhbE5hbWUgPSBuYW1lO1xuICAgIH0gZWxzZSBpZiAoIW5hbWVDb25mbGljdHNbbmFtZV0uaGFzKGAke25hbWVzcGFjZU5hbWV9XyR7bmFtZX1gKSkge1xuICAgICAgbG9jYWxOYW1lID0gYCR7bmFtZXNwYWNlTmFtZX1fJHtuYW1lfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgSW5maW5pdHk7IGkrKykge1xuICAgICAgICBpZiAoIW5hbWVDb25mbGljdHNbbmFtZV0uaGFzKGAke25hbWVzcGFjZU5hbWV9XyR7bmFtZX1fJHtpfWApKSB7XG4gICAgICAgICAgbG9jYWxOYW1lID0gYCR7bmFtZXNwYWNlTmFtZX1fJHtuYW1lfV8ke2l9YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBsb2NhbE5hbWVzW25hbWVdID0gbG9jYWxOYW1lO1xuICB9KTtcbiAgcmV0dXJuIGxvY2FsTmFtZXM7XG59XG5cbi8qKlxuICogQHBhcmFtIHtJZGVudGlmaWVyW119IG5hbWVzcGFjZUlkZW50aWZpZXJzXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIHRoZSBuYW1lc3BhY2UgdmFyaWFibGUgaXMgbW9yZSB0aGFuIGp1c3QgYSBnbG9yaWZpZWQgY29uc3RhbnRcbiAqL1xuZnVuY3Rpb24gdXNlc05hbWVzcGFjZUFzT2JqZWN0KG5hbWVzcGFjZUlkZW50aWZpZXJzKSB7XG4gIHJldHVybiAhbmFtZXNwYWNlSWRlbnRpZmllcnMuZXZlcnkoKGlkZW50aWZpZXIpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSBpZGVudGlmaWVyLnBhcmVudDtcblxuICAgIC8vIGBuYW1lc3BhY2UueGAgb3IgYG5hbWVzcGFjZVsneCddYFxuICAgIHJldHVybiAoXG4gICAgICBwYXJlbnRcbiAgICAgICYmIHBhcmVudC50eXBlID09PSAnTWVtYmVyRXhwcmVzc2lvbidcbiAgICAgICYmIChwYXJlbnQucHJvcGVydHkudHlwZSA9PT0gJ0lkZW50aWZpZXInIHx8IHBhcmVudC5wcm9wZXJ0eS50eXBlID09PSAnTGl0ZXJhbCcpXG4gICAgKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtZXRhOiB7XG4gICAgdHlwZTogJ3N1Z2dlc3Rpb24nLFxuICAgIGRvY3M6IHtcbiAgICAgIGNhdGVnb3J5OiAnU3R5bGUgZ3VpZGUnLFxuICAgICAgZGVzY3JpcHRpb246ICdGb3JiaWQgbmFtZXNwYWNlIChhLmsuYS4gXCJ3aWxkY2FyZFwiIGAqYCkgaW1wb3J0cy4nLFxuICAgICAgdXJsOiBkb2NzVXJsKCduby1uYW1lc3BhY2UnKSxcbiAgICB9LFxuICAgIGZpeGFibGU6ICdjb2RlJyxcbiAgICBzY2hlbWE6IFt7XG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgaWdub3JlOiB7XG4gICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB1bmlxdWVJdGVtczogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfV0sXG4gIH0sXG5cbiAgY3JlYXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBmaXJzdE9wdGlvbiA9IGNvbnRleHQub3B0aW9uc1swXSB8fCB7fTtcbiAgICBjb25zdCBpZ25vcmVHbG9icyA9IGZpcnN0T3B0aW9uLmlnbm9yZTtcblxuICAgIHJldHVybiB7XG4gICAgICBJbXBvcnROYW1lc3BhY2VTcGVjaWZpZXIobm9kZSkge1xuICAgICAgICBpZiAoaWdub3JlR2xvYnMgJiYgaWdub3JlR2xvYnMuZmluZCgoZ2xvYikgPT4gbWluaW1hdGNoKG5vZGUucGFyZW50LnNvdXJjZS52YWx1ZSwgZ2xvYiwgeyBtYXRjaEJhc2U6IHRydWUgfSkpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2NvcGVWYXJpYWJsZXMgPSBnZXRTY29wZShjb250ZXh0LCBub2RlKS52YXJpYWJsZXM7XG4gICAgICAgIGNvbnN0IG5hbWVzcGFjZVZhcmlhYmxlID0gc2NvcGVWYXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHZhcmlhYmxlLmRlZnNbMF0ubm9kZSA9PT0gbm9kZSk7XG4gICAgICAgIGNvbnN0IG5hbWVzcGFjZVJlZmVyZW5jZXMgPSBuYW1lc3BhY2VWYXJpYWJsZS5yZWZlcmVuY2VzO1xuICAgICAgICBjb25zdCBuYW1lc3BhY2VJZGVudGlmaWVycyA9IG5hbWVzcGFjZVJlZmVyZW5jZXMubWFwKChyZWZlcmVuY2UpID0+IHJlZmVyZW5jZS5pZGVudGlmaWVyKTtcbiAgICAgICAgY29uc3QgY2FuRml4ID0gbmFtZXNwYWNlSWRlbnRpZmllcnMubGVuZ3RoID4gMCAmJiAhdXNlc05hbWVzcGFjZUFzT2JqZWN0KG5hbWVzcGFjZUlkZW50aWZpZXJzKTtcblxuICAgICAgICBjb250ZXh0LnJlcG9ydCh7XG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICBtZXNzYWdlOiBgVW5leHBlY3RlZCBuYW1lc3BhY2UgaW1wb3J0LmAsXG4gICAgICAgICAgZml4OiBjYW5GaXggJiYgKChmaXhlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBzY29wZU1hbmFnZXIgfSA9IGdldFNvdXJjZUNvZGUoY29udGV4dCk7XG4gICAgICAgICAgICBjb25zdCBmaXhlcyA9IFtdO1xuXG4gICAgICAgICAgICAvLyBQYXNzIDE6IENvbGxlY3QgdmFyaWFibGUgbmFtZXMgdGhhdCBhcmUgYWxyZWFkeSBpbiBzY29wZSBmb3IgZWFjaCByZWZlcmVuY2Ugd2Ugd2FudFxuICAgICAgICAgICAgLy8gdG8gdHJhbnNmb3JtLCBzbyB0aGF0IHdlIGNhbiBiZSBzdXJlIHRoYXQgd2UgY2hvb3NlIG5vbi1jb25mbGljdGluZyBpbXBvcnQgbmFtZXNcbiAgICAgICAgICAgIGNvbnN0IGltcG9ydE5hbWVDb25mbGljdHMgPSB7fTtcbiAgICAgICAgICAgIG5hbWVzcGFjZUlkZW50aWZpZXJzLmZvckVhY2goKGlkZW50aWZpZXIpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gaWRlbnRpZmllci5wYXJlbnQ7XG4gICAgICAgICAgICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LnR5cGUgPT09ICdNZW1iZXJFeHByZXNzaW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltcG9ydE5hbWUgPSBnZXRNZW1iZXJQcm9wZXJ0eU5hbWUocGFyZW50KTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbENvbmZsaWN0cyA9IGdldFZhcmlhYmxlTmFtZXNJblNjb3BlKHNjb3BlTWFuYWdlciwgcGFyZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoIWltcG9ydE5hbWVDb25mbGljdHNbaW1wb3J0TmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgIGltcG9ydE5hbWVDb25mbGljdHNbaW1wb3J0TmFtZV0gPSBsb2NhbENvbmZsaWN0cztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbG9jYWxDb25mbGljdHMuZm9yRWFjaCgoYykgPT4gaW1wb3J0TmFtZUNvbmZsaWN0c1tpbXBvcnROYW1lXS5hZGQoYykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIENob29zZSBuZXcgbmFtZXMgZm9yIGVhY2ggaW1wb3J0XG4gICAgICAgICAgICBjb25zdCBpbXBvcnROYW1lcyA9IE9iamVjdC5rZXlzKGltcG9ydE5hbWVDb25mbGljdHMpO1xuICAgICAgICAgICAgY29uc3QgaW1wb3J0TG9jYWxOYW1lcyA9IGdlbmVyYXRlTG9jYWxOYW1lcyhcbiAgICAgICAgICAgICAgaW1wb3J0TmFtZXMsXG4gICAgICAgICAgICAgIGltcG9ydE5hbWVDb25mbGljdHMsXG4gICAgICAgICAgICAgIG5hbWVzcGFjZVZhcmlhYmxlLm5hbWUsXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBJbXBvcnROYW1lc3BhY2VTcGVjaWZpZXIgd2l0aCBhIGxpc3Qgb2YgSW1wb3J0U3BlY2lmaWVyc1xuICAgICAgICAgICAgY29uc3QgbmFtZWRJbXBvcnRTcGVjaWZpZXJzID0gaW1wb3J0TmFtZXMubWFwKChpbXBvcnROYW1lKSA9PiBpbXBvcnROYW1lID09PSBpbXBvcnRMb2NhbE5hbWVzW2ltcG9ydE5hbWVdXG4gICAgICAgICAgICAgID8gaW1wb3J0TmFtZVxuICAgICAgICAgICAgICA6IGAke2ltcG9ydE5hbWV9IGFzICR7aW1wb3J0TG9jYWxOYW1lc1tpbXBvcnROYW1lXX1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGZpeGVzLnB1c2goZml4ZXIucmVwbGFjZVRleHQobm9kZSwgYHsgJHtuYW1lZEltcG9ydFNwZWNpZmllcnMuam9pbignLCAnKX0gfWApKTtcblxuICAgICAgICAgICAgLy8gUGFzcyAyOiBSZXBsYWNlIHJlZmVyZW5jZXMgdG8gdGhlIG5hbWVzcGFjZSB3aXRoIHJlZmVyZW5jZXMgdG8gdGhlIG5hbWVkIGltcG9ydHNcbiAgICAgICAgICAgIG5hbWVzcGFjZUlkZW50aWZpZXJzLmZvckVhY2goKGlkZW50aWZpZXIpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gaWRlbnRpZmllci5wYXJlbnQ7XG4gICAgICAgICAgICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LnR5cGUgPT09ICdNZW1iZXJFeHByZXNzaW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltcG9ydE5hbWUgPSBnZXRNZW1iZXJQcm9wZXJ0eU5hbWUocGFyZW50KTtcbiAgICAgICAgICAgICAgICBmaXhlcy5wdXNoKGZpeGVyLnJlcGxhY2VUZXh0KHBhcmVudCwgaW1wb3J0TG9jYWxOYW1lc1tpbXBvcnROYW1lXSkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGZpeGVzO1xuICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbn07XG4iXX0=