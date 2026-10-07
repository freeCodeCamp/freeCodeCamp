'use strict';var _minimatch = require('minimatch');var _minimatch2 = _interopRequireDefault(_minimatch);
var _path = require('path');var _path2 = _interopRequireDefault(_path);
var _contextCompat = require('eslint-module-utils/contextCompat');
var _pkgUp = require('eslint-module-utils/pkgUp');var _pkgUp2 = _interopRequireDefault(_pkgUp);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

function getEntryPoint(context) {
  var pkgPath = (0, _pkgUp2['default'])({ cwd: (0, _contextCompat.getPhysicalFilename)(context) });
  try {
    return require.resolve(_path2['default'].dirname(pkgPath));
  } catch (error) {
    // Assume the package has no entrypoint (e.g. CLI packages)
    // in which case require.resolve would throw.
    return null;
  }
}

function findScope(context, identifier) {var _getSourceCode =
  (0, _contextCompat.getSourceCode)(context),scopeManager = _getSourceCode.scopeManager;

  return scopeManager && scopeManager.scopes.slice().reverse().find(function (scope) {return scope.variables.some(function (variable) {return variable.identifiers.some(function (node) {return node.name === identifier;});});});
}

function findDefinition(objectScope, identifier) {
  var variable = objectScope.variables.find(function (variable) {return variable.name === identifier;});
  return variable.defs.find(function (def) {return def.name.name === identifier;});
}

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      category: 'Module systems',
      description: 'Forbid import statements with CommonJS module.exports.',
      recommended: true },

    fixable: 'code',
    schema: [
    {
      type: 'object',
      properties: {
        exceptions: { type: 'array' } },

      additionalProperties: false }] },



  create: function () {function create(context) {
      var importDeclarations = [];
      var entryPoint = getEntryPoint(context);
      var options = context.options[0] || {};
      var alreadyReported = false;

      function report(node) {
        var fileName = (0, _contextCompat.getPhysicalFilename)(context);
        var isEntryPoint = entryPoint === fileName;
        var isIdentifier = node.object.type === 'Identifier';
        var hasKeywords = /^(module|exports)$/.test(node.object.name);
        var objectScope = hasKeywords && findScope(context, node.object.name);
        var variableDefinition = objectScope && findDefinition(objectScope, node.object.name);
        var isImportBinding = variableDefinition && variableDefinition.type === 'ImportBinding';
        var hasCJSExportReference = hasKeywords && (!objectScope || objectScope.type === 'module');
        var isException = !!options.exceptions && options.exceptions.some(function (glob) {return (0, _minimatch2['default'])(fileName, glob);});

        if (isIdentifier && hasCJSExportReference && !isEntryPoint && !isException && !isImportBinding) {
          importDeclarations.forEach(function (importDeclaration) {
            context.report({
              node: importDeclaration,
              message: 'Cannot use import declarations in modules that export using CommonJS (module.exports = \'foo\' or exports.bar = \'hi\')' });

          });
          alreadyReported = true;
        }
      }

      return {
        ImportDeclaration: function () {function ImportDeclaration(node) {
            importDeclarations.push(node);
          }return ImportDeclaration;}(),
        MemberExpression: function () {function MemberExpression(node) {
            if (!alreadyReported) {
              report(node);
            }
          }return MemberExpression;}() };

    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby1pbXBvcnQtbW9kdWxlLWV4cG9ydHMuanMiXSwibmFtZXMiOlsiZ2V0RW50cnlQb2ludCIsImNvbnRleHQiLCJwa2dQYXRoIiwiY3dkIiwicmVxdWlyZSIsInJlc29sdmUiLCJwYXRoIiwiZGlybmFtZSIsImVycm9yIiwiZmluZFNjb3BlIiwiaWRlbnRpZmllciIsInNjb3BlTWFuYWdlciIsInNjb3BlcyIsInNsaWNlIiwicmV2ZXJzZSIsImZpbmQiLCJzY29wZSIsInZhcmlhYmxlcyIsInNvbWUiLCJ2YXJpYWJsZSIsImlkZW50aWZpZXJzIiwibm9kZSIsIm5hbWUiLCJmaW5kRGVmaW5pdGlvbiIsIm9iamVjdFNjb3BlIiwiZGVmcyIsImRlZiIsIm1vZHVsZSIsImV4cG9ydHMiLCJtZXRhIiwidHlwZSIsImRvY3MiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwicmVjb21tZW5kZWQiLCJmaXhhYmxlIiwic2NoZW1hIiwicHJvcGVydGllcyIsImV4Y2VwdGlvbnMiLCJhZGRpdGlvbmFsUHJvcGVydGllcyIsImNyZWF0ZSIsImltcG9ydERlY2xhcmF0aW9ucyIsImVudHJ5UG9pbnQiLCJvcHRpb25zIiwiYWxyZWFkeVJlcG9ydGVkIiwicmVwb3J0IiwiZmlsZU5hbWUiLCJpc0VudHJ5UG9pbnQiLCJpc0lkZW50aWZpZXIiLCJvYmplY3QiLCJoYXNLZXl3b3JkcyIsInRlc3QiLCJ2YXJpYWJsZURlZmluaXRpb24iLCJpc0ltcG9ydEJpbmRpbmciLCJoYXNDSlNFeHBvcnRSZWZlcmVuY2UiLCJpc0V4Y2VwdGlvbiIsImdsb2IiLCJmb3JFYWNoIiwiaW1wb3J0RGVjbGFyYXRpb24iLCJtZXNzYWdlIiwiSW1wb3J0RGVjbGFyYXRpb24iLCJwdXNoIiwiTWVtYmVyRXhwcmVzc2lvbiJdLCJtYXBwaW5ncyI6ImFBQUEsc0M7QUFDQSw0QjtBQUNBO0FBQ0Esa0Q7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QkMsT0FBdkIsRUFBZ0M7QUFD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QVFMLFVBQVIsQ0FBbUJwQixJQUFuQixDQUF3QixVQUFDc0MsSUFBRCxVQUFVLDRCQUFVVixRQUFWLEVBQW9CVSxJQUFwQixDQUFWLEVBQXhCLENBQTVDOztBQUVBLFlBQUlSLGdCQUFnQk0scUJBQWhCLElBQXlDLENBQUNQLFlBQTFDLElBQTBELENBQUNRLFdBQTNELElBQTBFLENBQUNGLGVBQS9FLEVBQWdHO0FBQzlGWiw2QkFBbUJnQixPQUFuQixDQUEyQixVQUFDQyxpQkFBRCxFQUF1QjtBQUNoRHpELG9CQUFRNEMsTUFBUixDQUFlO0FBQ2J4QixvQkFBTXFDLGlCQURPO0FBRWJDLGdKQUZhLEVBQWY7O0FBSUQsV0FMRDtBQU1BZiw0QkFBa0IsSUFBbEI7QUFDRDtBQUNGOztBQUVELGFBQU87QUFDTGdCLHlCQURLLDBDQUNhdkMsSUFEYixFQUNtQjtBQUN0Qm9CLCtCQUFtQm9CLElBQW5CLENBQXdCeEMsSUFBeEI7QUFDRCxXQUhJO0FBSUx5Qyx3QkFKSyx5Q0FJWXpDLElBSlosRUFJa0I7QUFDckIsZ0JBQUksQ0FBQ3VCLGVBQUwsRUFBc0I7QUFDcEJDLHFCQUFPeEIsSUFBUDtBQUNEO0FBQ0YsV0FSSSw2QkFBUDs7QUFVRCxLQXpEYyxtQkFBakIiLCJmaWxlIjoibm8taW1wb3J0LW1vZHVsZS1leHBvcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1pbmltYXRjaCBmcm9tICdtaW5pbWF0Y2gnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBnZXRQaHlzaWNhbEZpbGVuYW1lLCBnZXRTb3VyY2VDb2RlIH0gZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy9jb250ZXh0Q29tcGF0JztcbmltcG9ydCBwa2dVcCBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL3BrZ1VwJztcblxuZnVuY3Rpb24gZ2V0RW50cnlQb2ludChjb250ZXh0KSB7XG4gIGNvbnN0IHBrZ1BhdGggPSBwa2dVcCh7IGN3ZDogZ2V0UGh5c2ljYWxGaWxlbmFtZShjb250ZXh0KSB9KTtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcmVxdWlyZS5yZXNvbHZlKHBhdGguZGlybmFtZShwa2dQYXRoKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gQXNzdW1lIHRoZSBwYWNrYWdlIGhhcyBubyBlbnRyeXBvaW50IChlLmcuIENMSSBwYWNrYWdlcylcbiAgICAvLyBpbiB3aGljaCBjYXNlIHJlcXVpcmUucmVzb2x2ZSB3b3VsZCB0aHJvdy5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kU2NvcGUoY29udGV4dCwgaWRlbnRpZmllcikge1xuICBjb25zdCB7IHNjb3BlTWFuYWdlciB9ID0gZ2V0U291cmNlQ29kZShjb250ZXh0KTtcblxuICByZXR1cm4gc2NvcGVNYW5hZ2VyICYmIHNjb3BlTWFuYWdlci5zY29wZXMuc2xpY2UoKS5yZXZlcnNlKCkuZmluZCgoc2NvcGUpID0+IHNjb3BlLnZhcmlhYmxlcy5zb21lKCh2YXJpYWJsZSkgPT4gdmFyaWFibGUuaWRlbnRpZmllcnMuc29tZSgobm9kZSkgPT4gbm9kZS5uYW1lID09PSBpZGVudGlmaWVyKSkpO1xufVxuXG5mdW5jdGlvbiBmaW5kRGVmaW5pdGlvbihvYmplY3RTY29wZSwgaWRlbnRpZmllcikge1xuICBjb25zdCB2YXJpYWJsZSA9IG9iamVjdFNjb3BlLnZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4gdmFyaWFibGUubmFtZSA9PT0gaWRlbnRpZmllcik7XG4gIHJldHVybiB2YXJpYWJsZS5kZWZzLmZpbmQoKGRlZikgPT4gZGVmLm5hbWUubmFtZSA9PT0gaWRlbnRpZmllcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtZXRhOiB7XG4gICAgdHlwZTogJ3Byb2JsZW0nLFxuICAgIGRvY3M6IHtcbiAgICAgIGNhdGVnb3J5OiAnTW9kdWxlIHN5c3RlbXMnLFxuICAgICAgZGVzY3JpcHRpb246ICdGb3JiaWQgaW1wb3J0IHN0YXRlbWVudHMgd2l0aCBDb21tb25KUyBtb2R1bGUuZXhwb3J0cy4nLFxuICAgICAgcmVjb21tZW5kZWQ6IHRydWUsXG4gICAgfSxcbiAgICBmaXhhYmxlOiAnY29kZScsXG4gICAgc2NoZW1hOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgZXhjZXB0aW9uczogeyB0eXBlOiAnYXJyYXknIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgY3JlYXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBpbXBvcnREZWNsYXJhdGlvbnMgPSBbXTtcbiAgICBjb25zdCBlbnRyeVBvaW50ID0gZ2V0RW50cnlQb2ludChjb250ZXh0KTtcbiAgICBjb25zdCBvcHRpb25zID0gY29udGV4dC5vcHRpb25zWzBdIHx8IHt9O1xuICAgIGxldCBhbHJlYWR5UmVwb3J0ZWQgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIHJlcG9ydChub2RlKSB7XG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGdldFBoeXNpY2FsRmlsZW5hbWUoY29udGV4dCk7XG4gICAgICBjb25zdCBpc0VudHJ5UG9pbnQgPSBlbnRyeVBvaW50ID09PSBmaWxlTmFtZTtcbiAgICAgIGNvbnN0IGlzSWRlbnRpZmllciA9IG5vZGUub2JqZWN0LnR5cGUgPT09ICdJZGVudGlmaWVyJztcbiAgICAgIGNvbnN0IGhhc0tleXdvcmRzID0gKC9eKG1vZHVsZXxleHBvcnRzKSQvKS50ZXN0KG5vZGUub2JqZWN0Lm5hbWUpO1xuICAgICAgY29uc3Qgb2JqZWN0U2NvcGUgPSBoYXNLZXl3b3JkcyAmJiBmaW5kU2NvcGUoY29udGV4dCwgbm9kZS5vYmplY3QubmFtZSk7XG4gICAgICBjb25zdCB2YXJpYWJsZURlZmluaXRpb24gPSBvYmplY3RTY29wZSAmJiBmaW5kRGVmaW5pdGlvbihvYmplY3RTY29wZSwgbm9kZS5vYmplY3QubmFtZSk7XG4gICAgICBjb25zdCBpc0ltcG9ydEJpbmRpbmcgPSB2YXJpYWJsZURlZmluaXRpb24gJiYgdmFyaWFibGVEZWZpbml0aW9uLnR5cGUgPT09ICdJbXBvcnRCaW5kaW5nJztcbiAgICAgIGNvbnN0IGhhc0NKU0V4cG9ydFJlZmVyZW5jZSA9IGhhc0tleXdvcmRzICYmICghb2JqZWN0U2NvcGUgfHwgb2JqZWN0U2NvcGUudHlwZSA9PT0gJ21vZHVsZScpO1xuICAgICAgY29uc3QgaXNFeGNlcHRpb24gPSAhIW9wdGlvbnMuZXhjZXB0aW9ucyAmJiBvcHRpb25zLmV4Y2VwdGlvbnMuc29tZSgoZ2xvYikgPT4gbWluaW1hdGNoKGZpbGVOYW1lLCBnbG9iKSk7XG5cbiAgICAgIGlmIChpc0lkZW50aWZpZXIgJiYgaGFzQ0pTRXhwb3J0UmVmZXJlbmNlICYmICFpc0VudHJ5UG9pbnQgJiYgIWlzRXhjZXB0aW9uICYmICFpc0ltcG9ydEJpbmRpbmcpIHtcbiAgICAgICAgaW1wb3J0RGVjbGFyYXRpb25zLmZvckVhY2goKGltcG9ydERlY2xhcmF0aW9uKSA9PiB7XG4gICAgICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICAgICAgbm9kZTogaW1wb3J0RGVjbGFyYXRpb24sXG4gICAgICAgICAgICBtZXNzYWdlOiBgQ2Fubm90IHVzZSBpbXBvcnQgZGVjbGFyYXRpb25zIGluIG1vZHVsZXMgdGhhdCBleHBvcnQgdXNpbmcgQ29tbW9uSlMgKG1vZHVsZS5leHBvcnRzID0gJ2Zvbycgb3IgZXhwb3J0cy5iYXIgPSAnaGknKWAsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBhbHJlYWR5UmVwb3J0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBJbXBvcnREZWNsYXJhdGlvbihub2RlKSB7XG4gICAgICAgIGltcG9ydERlY2xhcmF0aW9ucy5wdXNoKG5vZGUpO1xuICAgICAgfSxcbiAgICAgIE1lbWJlckV4cHJlc3Npb24obm9kZSkge1xuICAgICAgICBpZiAoIWFscmVhZHlSZXBvcnRlZCkge1xuICAgICAgICAgIHJlcG9ydChub2RlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuICB9LFxufTtcbiJdfQ==