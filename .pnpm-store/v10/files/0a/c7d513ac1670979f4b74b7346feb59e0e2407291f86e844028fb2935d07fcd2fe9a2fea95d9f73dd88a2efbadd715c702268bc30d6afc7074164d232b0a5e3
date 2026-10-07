'use strict';var _declaredScope = require('eslint-module-utils/declaredScope');var _declaredScope2 = _interopRequireDefault(_declaredScope);
var _builder = require('../exportMap/builder');var _builder2 = _interopRequireDefault(_builder);
var _exportMap = require('../exportMap');var _exportMap2 = _interopRequireDefault(_exportMap);
var _importDeclaration = require('../importDeclaration');var _importDeclaration2 = _interopRequireDefault(_importDeclaration);
var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

function processBodyStatement(context, namespaces, declaration) {
  if (declaration.type !== 'ImportDeclaration') {return;}

  if (declaration.specifiers.length === 0) {return;}

  var imports = _builder2['default'].get(declaration.source.value, context);
  if (imports == null) {return null;}

  if (imports.errors.length > 0) {
    imports.reportErrors(context, declaration);
    return;
  }

  declaration.specifiers.forEach(function (specifier) {
    switch (specifier.type) {
      case 'ImportNamespaceSpecifier':
        if (!imports.size) {
          context.report(
          specifier, 'No exported names found in module \'' + String(
          declaration.source.value) + '\'.');

        }
        namespaces.set(specifier.local.name, imports);
        break;
      case 'ImportDefaultSpecifier':
      case 'ImportSpecifier':{
          var meta = imports.get(
          // default to 'default' for default https://i.imgur.com/nj6qAWy.jpg
          specifier.imported ? specifier.imported.name || specifier.imported.value : 'default');

          if (!meta || !meta.namespace) {break;}
          namespaces.set(specifier.local.name, meta.namespace);
          break;
        }
      default:}

  });
}

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      category: 'Static analysis',
      description: 'Ensure imported namespaces contain dereferenced properties as they are dereferenced.',
      url: (0, _docsUrl2['default'])('namespace') },


    schema: [
    {
      type: 'object',
      properties: {
        allowComputed: {
          description: 'If `false`, will report computed (and thus, un-lintable) references to namespace members.',
          type: 'boolean',
          'default': false } },


      additionalProperties: false }] },




  create: function () {function namespaceRule(context) {
      // read options
      var _ref =

      context.options[0] || {},_ref$allowComputed = _ref.allowComputed,allowComputed = _ref$allowComputed === undefined ? false : _ref$allowComputed;

      var namespaces = new Map();

      function makeMessage(last, namepath) {
        return '\'' + String(last.name) + '\' not found in ' + (namepath.length > 1 ? 'deeply ' : '') + 'imported namespace \'' + String(namepath.join('.')) + '\'.';
      }

      return {
        // pick up all imports at body entry time, to properly respect hoisting
        Program: function () {function Program(_ref2) {var body = _ref2.body;
            body.forEach(function (x) {processBodyStatement(context, namespaces, x);});
          }return Program;}(),

        // same as above, but does not add names to local map
        ExportNamespaceSpecifier: function () {function ExportNamespaceSpecifier(namespace) {
            var declaration = (0, _importDeclaration2['default'])(context, namespace);

            var imports = _builder2['default'].get(declaration.source.value, context);
            if (imports == null) {return null;}

            if (imports.errors.length) {
              imports.reportErrors(context, declaration);
              return;
            }

            if (!imports.size) {
              context.report(
              namespace, 'No exported names found in module \'' + String(
              declaration.source.value) + '\'.');

            }
          }return ExportNamespaceSpecifier;}(),

        // todo: check for possible redefinition

        MemberExpression: function () {function MemberExpression(dereference) {
            if (dereference.object.type !== 'Identifier') {return;}
            if (!namespaces.has(dereference.object.name)) {return;}
            if ((0, _declaredScope2['default'])(context, dereference.object.name, dereference) !== 'module') {return;}

            if (dereference.parent.type === 'AssignmentExpression' && dereference.parent.left === dereference) {
              context.report(
              dereference.parent, 'Assignment to member of namespace \'' + String(
              dereference.object.name) + '\'.');

            }

            // go deep
            var namespace = namespaces.get(dereference.object.name);
            var namepath = [dereference.object.name];
            // while property is namespace and parent is member expression, keep validating
            while (namespace instanceof _exportMap2['default'] && dereference.type === 'MemberExpression') {
              if (dereference.computed) {
                if (!allowComputed) {
                  context.report(
                  dereference.property, 'Unable to validate computed reference to imported namespace \'' + String(
                  dereference.object.name) + '\'.');

                }
                return;
              }

              if (!namespace.has(dereference.property.name)) {
                context.report(
                dereference.property,
                makeMessage(dereference.property, namepath));

                break;
              }

              var exported = namespace.get(dereference.property.name);
              if (exported == null) {return;}

              // stash and pop
              namepath.push(dereference.property.name);
              namespace = exported.namespace;
              dereference = dereference.parent;
            }
          }return MemberExpression;}(),

        VariableDeclarator: function () {function VariableDeclarator(_ref3) {var id = _ref3.id,init = _ref3.init;
            if (init == null) {return;}
            if (init.type !== 'Identifier') {return;}
            if (!namespaces.has(init.name)) {return;}

            // check for redefinition in intermediate scopes
            if ((0, _declaredScope2['default'])(context, init.name, init) !== 'module') {return;}

            // DFS traverse child namespaces
            function testKey(pattern, namespace) {var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [init.name];
              if (!(namespace instanceof _exportMap2['default'])) {return;}

              if (pattern.type !== 'ObjectPattern') {return;}var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {

                for (var _iterator = pattern.properties[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var property = _step.value;
                  if (
                  property.type === 'ExperimentalRestProperty' ||
                  property.type === 'RestElement' ||
                  !property.key)
                  {
                    continue;
                  }

                  if (property.key.type !== 'Identifier') {
                    context.report({
                      node: property,
                      message: 'Only destructure top-level names.' });

                    continue;
                  }

                  if (!namespace.has(property.key.name)) {
                    context.report({
                      node: property,
                      message: makeMessage(property.key, path) });

                    continue;
                  }

                  path.push(property.key.name);
                  var dependencyExportMap = namespace.get(property.key.name);
                  // could be null when ignored or ambiguous
                  if (dependencyExportMap !== null) {
                    testKey(property.value, dependencyExportMap.namespace, path);
                  }
                  path.pop();
                }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator['return']) {_iterator['return']();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
            }

            testKey(id, namespaces.get(init.name));
          }return VariableDeclarator;}(),

        JSXMemberExpression: function () {function JSXMemberExpression(_ref4) {var object = _ref4.object,property = _ref4.property;
            if (!namespaces.has(object.name)) {return;}
            var namespace = namespaces.get(object.name);
            if (!namespace.has(property.name)) {
              context.report({
                node: property,
                message: makeMessage(property, [object.name]) });

            }
          }return JSXMemberExpression;}() };

    }return namespaceRule;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uYW1lc3BhY2UuanMiXSwibmFtZXMiOlsicHJvY2Vzc0JvZHlTdGF0ZW1lbnQiLCJjb250ZXh0IiwibmFtZXNwYWNlcyIsImRlY2xhcmF0aW9uIiwidHlwZSIsInNwZWNpZmllcnMiLCJsZW5ndGgiLCJpbXBvcnRzIiwiRXhwb3J0TWFwQnVpbGRlciIsImdldCIsInNvdXJjZSIsInZhbHVlIiwiZXJyb3JzIiwicmVwb3J0RXJyb3JzIiwiZm9yRWFjaCIsInNwZWNpZmllciIsInNpemUiLCJyZXBvcnQiLCJzZXQiLCJsb2NhbCIsIm5hbWUiLCJtZXRhIiwiaW1wb3J0ZWQiLCJuYW1lc3BhY2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiZG9jcyIsImNhdGVnb3J5IiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJzY2hlbWEiLCJwcm9wZXJ0aWVzIiwiYWxsb3dDb21wdXRlZCIsImFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiY3JlYXRlIiwibmFtZXNwYWNlUnVsZSIsIm9wdGlvbnMiLCJNYXAiLCJtYWtlTWVzc2FnZSIsImxhc3QiLCJuYW1lcGF0aCIsImpvaW4iLCJQcm9ncmFtIiwiYm9keSIsIngiLCJFeHBvcnROYW1lc3BhY2VTcGVjaWZpZXIiLCJNZW1iZXJFeHByZXNzaW9uIiwiZGVyZWZlcmVuY2UiLCJvYmplY3QiLCJoYXMiLCJwYXJlbnQiLCJsZWZ0IiwiRXhwb3J0TWFwIiwiY29tcHV0ZWQiLCJwcm9wZXJ0eSIsImV4cG9ydGVkIiwicHVzaCIsIlZhcmlhYmxlRGVjbGFyYXRvciIsImlkIiwiaW5pdCIsInRlc3RLZXkiLCJwYXR0ZXJuIiwicGF0aCIsImtleSIsIm5vZGUiLCJtZXNzYWdlIiwiZGVwZW5kZW5jeUV4cG9ydE1hcCIsInBvcCIsIkpTWE1lbWJlckV4cHJlc3Npb24iXSwibWFwcGluZ3MiOiJhQUFBLGtFO0FBQ0EsK0M7QUFDQSx5QztBQUNBLHlEO0FBQ0EscUM7O0FBRUEsU0FBU0Esb0JBQVQsQ0FBOEJDLE9BQTlCLEVB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QUFTUyxHQUFULENBQWEzQyxJQUF2QjtBQUNBLHNCQUFNOEMsc0JBQXNCM0MsVUFBVWQsR0FBVixDQUFjNkMsU0FBU1MsR0FBVCxDQUFhM0MsSUFBM0IsQ0FBNUI7QUFDQTtBQUNBLHNCQUFJOEMsd0JBQXdCLElBQTVCLEVBQWtDO0FBQ2hDTiw0QkFBUU4sU0FBUzNDLEtBQWpCLEVBQXdCdUQsb0JBQW9CM0MsU0FBNUMsRUFBdUR1QyxJQUF2RDtBQUNEO0FBQ0RBLHVCQUFLSyxHQUFMO0FBQ0QsaUJBckNzRDtBQXNDeEQ7O0FBRURQLG9CQUFRRixFQUFSLEVBQVl4RCxXQUFXTyxHQUFYLENBQWVrRCxLQUFLdkMsSUFBcEIsQ0FBWjtBQUNELFdBM0hJOztBQTZITGdELDJCQTdISyxtREE2SHFDLEtBQXBCcEIsTUFBb0IsU0FBcEJBLE1BQW9CLENBQVpNLFFBQVksU0FBWkEsUUFBWTtBQUN4QyxnQkFBSSxDQUFDcEQsV0FBVytDLEdBQVgsQ0FBZUQsT0FBTzVCLElBQXRCLENBQUwsRUFBa0MsQ0FBRSxPQUFTO0FBQzdDLGdCQUFNRyxZQUFZckIsV0FBV08sR0FBWCxDQUFldUMsT0FBTzVCLElBQXRCLENBQWxCO0FBQ0EsZ0JBQUksQ0FBQ0csVUFBVTBCLEdBQVYsQ0FBY0ssU0FBU2xDLElBQXZCLENBQUwsRUFBbUM7QUFDakNuQixzQkFBUWdCLE1BQVIsQ0FBZTtBQUNiK0Msc0JBQU1WLFFBRE87QUFFYlcseUJBQVMzQixZQUFZZ0IsUUFBWixFQUFzQixDQUFDTixPQUFPNUIsSUFBUixDQUF0QixDQUZJLEVBQWY7O0FBSUQ7QUFDRixXQXRJSSxnQ0FBUDs7QUF3SUQsS0FwSkQsT0FBaUJlLGFBQWpCLElBeEJlLEVBQWpCIiwiZmlsZSI6Im5hbWVzcGFjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZWNsYXJlZFNjb3BlIGZyb20gJ2VzbGludC1tb2R1bGUtdXRpbHMvZGVjbGFyZWRTY29wZSc7XG5pbXBvcnQgRXhwb3J0TWFwQnVpbGRlciBmcm9tICcuLi9leHBvcnRNYXAvYnVpbGRlcic7XG5pbXBvcnQgRXhwb3J0TWFwIGZyb20gJy4uL2V4cG9ydE1hcCc7XG5pbXBvcnQgaW1wb3J0RGVjbGFyYXRpb24gZnJvbSAnLi4vaW1wb3J0RGVjbGFyYXRpb24nO1xuaW1wb3J0IGRvY3NVcmwgZnJvbSAnLi4vZG9jc1VybCc7XG5cbmZ1bmN0aW9uIHByb2Nlc3NCb2R5U3RhdGVtZW50KGNvbnRleHQsIG5hbWVzcGFjZXMsIGRlY2xhcmF0aW9uKSB7XG4gIGlmIChkZWNsYXJhdGlvbi50eXBlICE9PSAnSW1wb3J0RGVjbGFyYXRpb24nKSB7IHJldHVybjsgfVxuXG4gIGlmIChkZWNsYXJhdGlvbi5zcGVjaWZpZXJzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm47IH1cblxuICBjb25zdCBpbXBvcnRzID0gRXhwb3J0TWFwQnVpbGRlci5nZXQoZGVjbGFyYXRpb24uc291cmNlLnZhbHVlLCBjb250ZXh0KTtcbiAgaWYgKGltcG9ydHMgPT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxuXG4gIGlmIChpbXBvcnRzLmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgaW1wb3J0cy5yZXBvcnRFcnJvcnMoY29udGV4dCwgZGVjbGFyYXRpb24pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGRlY2xhcmF0aW9uLnNwZWNpZmllcnMuZm9yRWFjaCgoc3BlY2lmaWVyKSA9PiB7XG4gICAgc3dpdGNoIChzcGVjaWZpZXIudHlwZSkge1xuICAgICAgY2FzZSAnSW1wb3J0TmFtZXNwYWNlU3BlY2lmaWVyJzpcbiAgICAgICAgaWYgKCFpbXBvcnRzLnNpemUpIHtcbiAgICAgICAgICBjb250ZXh0LnJlcG9ydChcbiAgICAgICAgICAgIHNwZWNpZmllcixcbiAgICAgICAgICAgIGBObyBleHBvcnRlZCBuYW1lcyBmb3VuZCBpbiBtb2R1bGUgJyR7ZGVjbGFyYXRpb24uc291cmNlLnZhbHVlfScuYCxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIG5hbWVzcGFjZXMuc2V0KHNwZWNpZmllci5sb2NhbC5uYW1lLCBpbXBvcnRzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdJbXBvcnREZWZhdWx0U3BlY2lmaWVyJzpcbiAgICAgIGNhc2UgJ0ltcG9ydFNwZWNpZmllcic6IHtcbiAgICAgICAgY29uc3QgbWV0YSA9IGltcG9ydHMuZ2V0KFxuICAgICAgICAvLyBkZWZhdWx0IHRvICdkZWZhdWx0JyBmb3IgZGVmYXVsdCBodHRwczovL2kuaW1ndXIuY29tL25qNnFBV3kuanBnXG4gICAgICAgICAgc3BlY2lmaWVyLmltcG9ydGVkID8gc3BlY2lmaWVyLmltcG9ydGVkLm5hbWUgfHwgc3BlY2lmaWVyLmltcG9ydGVkLnZhbHVlIDogJ2RlZmF1bHQnLFxuICAgICAgICApO1xuICAgICAgICBpZiAoIW1ldGEgfHwgIW1ldGEubmFtZXNwYWNlKSB7IGJyZWFrOyB9XG4gICAgICAgIG5hbWVzcGFjZXMuc2V0KHNwZWNpZmllci5sb2NhbC5uYW1lLCBtZXRhLm5hbWVzcGFjZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWV0YToge1xuICAgIHR5cGU6ICdwcm9ibGVtJyxcbiAgICBkb2NzOiB7XG4gICAgICBjYXRlZ29yeTogJ1N0YXRpYyBhbmFseXNpcycsXG4gICAgICBkZXNjcmlwdGlvbjogJ0Vuc3VyZSBpbXBvcnRlZCBuYW1lc3BhY2VzIGNvbnRhaW4gZGVyZWZlcmVuY2VkIHByb3BlcnRpZXMgYXMgdGhleSBhcmUgZGVyZWZlcmVuY2VkLicsXG4gICAgICB1cmw6IGRvY3NVcmwoJ25hbWVzcGFjZScpLFxuICAgIH0sXG5cbiAgICBzY2hlbWE6IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICBhbGxvd0NvbXB1dGVkOiB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0lmIGBmYWxzZWAsIHdpbGwgcmVwb3J0IGNvbXB1dGVkIChhbmQgdGh1cywgdW4tbGludGFibGUpIHJlZmVyZW5jZXMgdG8gbmFtZXNwYWNlIG1lbWJlcnMuJyxcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcblxuICBjcmVhdGU6IGZ1bmN0aW9uIG5hbWVzcGFjZVJ1bGUoY29udGV4dCkge1xuICAgIC8vIHJlYWQgb3B0aW9uc1xuICAgIGNvbnN0IHtcbiAgICAgIGFsbG93Q29tcHV0ZWQgPSBmYWxzZSxcbiAgICB9ID0gY29udGV4dC5vcHRpb25zWzBdIHx8IHt9O1xuXG4gICAgY29uc3QgbmFtZXNwYWNlcyA9IG5ldyBNYXAoKTtcblxuICAgIGZ1bmN0aW9uIG1ha2VNZXNzYWdlKGxhc3QsIG5hbWVwYXRoKSB7XG4gICAgICByZXR1cm4gYCcke2xhc3QubmFtZX0nIG5vdCBmb3VuZCBpbiAke25hbWVwYXRoLmxlbmd0aCA+IDEgPyAnZGVlcGx5ICcgOiAnJ31pbXBvcnRlZCBuYW1lc3BhY2UgJyR7bmFtZXBhdGguam9pbignLicpfScuYDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLy8gcGljayB1cCBhbGwgaW1wb3J0cyBhdCBib2R5IGVudHJ5IHRpbWUsIHRvIHByb3Blcmx5IHJlc3BlY3QgaG9pc3RpbmdcbiAgICAgIFByb2dyYW0oeyBib2R5IH0pIHtcbiAgICAgICAgYm9keS5mb3JFYWNoKCh4KSA9PiB7IHByb2Nlc3NCb2R5U3RhdGVtZW50KGNvbnRleHQsIG5hbWVzcGFjZXMsIHgpOyB9KTtcbiAgICAgIH0sXG5cbiAgICAgIC8vIHNhbWUgYXMgYWJvdmUsIGJ1dCBkb2VzIG5vdCBhZGQgbmFtZXMgdG8gbG9jYWwgbWFwXG4gICAgICBFeHBvcnROYW1lc3BhY2VTcGVjaWZpZXIobmFtZXNwYWNlKSB7XG4gICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gaW1wb3J0RGVjbGFyYXRpb24oY29udGV4dCwgbmFtZXNwYWNlKTtcblxuICAgICAgICBjb25zdCBpbXBvcnRzID0gRXhwb3J0TWFwQnVpbGRlci5nZXQoZGVjbGFyYXRpb24uc291cmNlLnZhbHVlLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKGltcG9ydHMgPT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxuXG4gICAgICAgIGlmIChpbXBvcnRzLmVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICBpbXBvcnRzLnJlcG9ydEVycm9ycyhjb250ZXh0LCBkZWNsYXJhdGlvbik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpbXBvcnRzLnNpemUpIHtcbiAgICAgICAgICBjb250ZXh0LnJlcG9ydChcbiAgICAgICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgICAgIGBObyBleHBvcnRlZCBuYW1lcyBmb3VuZCBpbiBtb2R1bGUgJyR7ZGVjbGFyYXRpb24uc291cmNlLnZhbHVlfScuYCxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvLyB0b2RvOiBjaGVjayBmb3IgcG9zc2libGUgcmVkZWZpbml0aW9uXG5cbiAgICAgIE1lbWJlckV4cHJlc3Npb24oZGVyZWZlcmVuY2UpIHtcbiAgICAgICAgaWYgKGRlcmVmZXJlbmNlLm9iamVjdC50eXBlICE9PSAnSWRlbnRpZmllcicpIHsgcmV0dXJuOyB9XG4gICAgICAgIGlmICghbmFtZXNwYWNlcy5oYXMoZGVyZWZlcmVuY2Uub2JqZWN0Lm5hbWUpKSB7IHJldHVybjsgfVxuICAgICAgICBpZiAoZGVjbGFyZWRTY29wZShjb250ZXh0LCBkZXJlZmVyZW5jZS5vYmplY3QubmFtZSwgZGVyZWZlcmVuY2UpICE9PSAnbW9kdWxlJykgeyByZXR1cm47IH1cblxuICAgICAgICBpZiAoZGVyZWZlcmVuY2UucGFyZW50LnR5cGUgPT09ICdBc3NpZ25tZW50RXhwcmVzc2lvbicgJiYgZGVyZWZlcmVuY2UucGFyZW50LmxlZnQgPT09IGRlcmVmZXJlbmNlKSB7XG4gICAgICAgICAgY29udGV4dC5yZXBvcnQoXG4gICAgICAgICAgICBkZXJlZmVyZW5jZS5wYXJlbnQsXG4gICAgICAgICAgICBgQXNzaWdubWVudCB0byBtZW1iZXIgb2YgbmFtZXNwYWNlICcke2RlcmVmZXJlbmNlLm9iamVjdC5uYW1lfScuYCxcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ28gZGVlcFxuICAgICAgICBsZXQgbmFtZXNwYWNlID0gbmFtZXNwYWNlcy5nZXQoZGVyZWZlcmVuY2Uub2JqZWN0Lm5hbWUpO1xuICAgICAgICBjb25zdCBuYW1lcGF0aCA9IFtkZXJlZmVyZW5jZS5vYmplY3QubmFtZV07XG4gICAgICAgIC8vIHdoaWxlIHByb3BlcnR5IGlzIG5hbWVzcGFjZSBhbmQgcGFyZW50IGlzIG1lbWJlciBleHByZXNzaW9uLCBrZWVwIHZhbGlkYXRpbmdcbiAgICAgICAgd2hpbGUgKG5hbWVzcGFjZSBpbnN0YW5jZW9mIEV4cG9ydE1hcCAmJiBkZXJlZmVyZW5jZS50eXBlID09PSAnTWVtYmVyRXhwcmVzc2lvbicpIHtcbiAgICAgICAgICBpZiAoZGVyZWZlcmVuY2UuY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIGlmICghYWxsb3dDb21wdXRlZCkge1xuICAgICAgICAgICAgICBjb250ZXh0LnJlcG9ydChcbiAgICAgICAgICAgICAgICBkZXJlZmVyZW5jZS5wcm9wZXJ0eSxcbiAgICAgICAgICAgICAgICBgVW5hYmxlIHRvIHZhbGlkYXRlIGNvbXB1dGVkIHJlZmVyZW5jZSB0byBpbXBvcnRlZCBuYW1lc3BhY2UgJyR7ZGVyZWZlcmVuY2Uub2JqZWN0Lm5hbWV9Jy5gLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghbmFtZXNwYWNlLmhhcyhkZXJlZmVyZW5jZS5wcm9wZXJ0eS5uYW1lKSkge1xuICAgICAgICAgICAgY29udGV4dC5yZXBvcnQoXG4gICAgICAgICAgICAgIGRlcmVmZXJlbmNlLnByb3BlcnR5LFxuICAgICAgICAgICAgICBtYWtlTWVzc2FnZShkZXJlZmVyZW5jZS5wcm9wZXJ0eSwgbmFtZXBhdGgpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGV4cG9ydGVkID0gbmFtZXNwYWNlLmdldChkZXJlZmVyZW5jZS5wcm9wZXJ0eS5uYW1lKTtcbiAgICAgICAgICBpZiAoZXhwb3J0ZWQgPT0gbnVsbCkgeyByZXR1cm47IH1cblxuICAgICAgICAgIC8vIHN0YXNoIGFuZCBwb3BcbiAgICAgICAgICBuYW1lcGF0aC5wdXNoKGRlcmVmZXJlbmNlLnByb3BlcnR5Lm5hbWUpO1xuICAgICAgICAgIG5hbWVzcGFjZSA9IGV4cG9ydGVkLm5hbWVzcGFjZTtcbiAgICAgICAgICBkZXJlZmVyZW5jZSA9IGRlcmVmZXJlbmNlLnBhcmVudDtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgVmFyaWFibGVEZWNsYXJhdG9yKHsgaWQsIGluaXQgfSkge1xuICAgICAgICBpZiAoaW5pdCA9PSBudWxsKSB7IHJldHVybjsgfVxuICAgICAgICBpZiAoaW5pdC50eXBlICE9PSAnSWRlbnRpZmllcicpIHsgcmV0dXJuOyB9XG4gICAgICAgIGlmICghbmFtZXNwYWNlcy5oYXMoaW5pdC5uYW1lKSkgeyByZXR1cm47IH1cblxuICAgICAgICAvLyBjaGVjayBmb3IgcmVkZWZpbml0aW9uIGluIGludGVybWVkaWF0ZSBzY29wZXNcbiAgICAgICAgaWYgKGRlY2xhcmVkU2NvcGUoY29udGV4dCwgaW5pdC5uYW1lLCBpbml0KSAhPT0gJ21vZHVsZScpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgLy8gREZTIHRyYXZlcnNlIGNoaWxkIG5hbWVzcGFjZXNcbiAgICAgICAgZnVuY3Rpb24gdGVzdEtleShwYXR0ZXJuLCBuYW1lc3BhY2UsIHBhdGggPSBbaW5pdC5uYW1lXSkge1xuICAgICAgICAgIGlmICghKG5hbWVzcGFjZSBpbnN0YW5jZW9mIEV4cG9ydE1hcCkpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgICBpZiAocGF0dGVybi50eXBlICE9PSAnT2JqZWN0UGF0dGVybicpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHBhdHRlcm4ucHJvcGVydGllcykge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBwcm9wZXJ0eS50eXBlID09PSAnRXhwZXJpbWVudGFsUmVzdFByb3BlcnR5J1xuICAgICAgICAgICAgICB8fCBwcm9wZXJ0eS50eXBlID09PSAnUmVzdEVsZW1lbnQnXG4gICAgICAgICAgICAgIHx8ICFwcm9wZXJ0eS5rZXlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByb3BlcnR5LmtleS50eXBlICE9PSAnSWRlbnRpZmllcicpIHtcbiAgICAgICAgICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICAgICAgICAgIG5vZGU6IHByb3BlcnR5LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdPbmx5IGRlc3RydWN0dXJlIHRvcC1sZXZlbCBuYW1lcy4nLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghbmFtZXNwYWNlLmhhcyhwcm9wZXJ0eS5rZXkubmFtZSkpIHtcbiAgICAgICAgICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICAgICAgICAgIG5vZGU6IHByb3BlcnR5LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1ha2VNZXNzYWdlKHByb3BlcnR5LmtleSwgcGF0aCksXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGF0aC5wdXNoKHByb3BlcnR5LmtleS5uYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGRlcGVuZGVuY3lFeHBvcnRNYXAgPSBuYW1lc3BhY2UuZ2V0KHByb3BlcnR5LmtleS5uYW1lKTtcbiAgICAgICAgICAgIC8vIGNvdWxkIGJlIG51bGwgd2hlbiBpZ25vcmVkIG9yIGFtYmlndW91c1xuICAgICAgICAgICAgaWYgKGRlcGVuZGVuY3lFeHBvcnRNYXAgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGVzdEtleShwcm9wZXJ0eS52YWx1ZSwgZGVwZW5kZW5jeUV4cG9ydE1hcC5uYW1lc3BhY2UsIHBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGF0aC5wb3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0ZXN0S2V5KGlkLCBuYW1lc3BhY2VzLmdldChpbml0Lm5hbWUpKTtcbiAgICAgIH0sXG5cbiAgICAgIEpTWE1lbWJlckV4cHJlc3Npb24oeyBvYmplY3QsIHByb3BlcnR5IH0pIHtcbiAgICAgICAgaWYgKCFuYW1lc3BhY2VzLmhhcyhvYmplY3QubmFtZSkpIHsgcmV0dXJuOyB9XG4gICAgICAgIGNvbnN0IG5hbWVzcGFjZSA9IG5hbWVzcGFjZXMuZ2V0KG9iamVjdC5uYW1lKTtcbiAgICAgICAgaWYgKCFuYW1lc3BhY2UuaGFzKHByb3BlcnR5Lm5hbWUpKSB7XG4gICAgICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICAgICAgbm9kZTogcHJvcGVydHksXG4gICAgICAgICAgICBtZXNzYWdlOiBtYWtlTWVzc2FnZShwcm9wZXJ0eSwgW29iamVjdC5uYW1lXSksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbn07XG4iXX0=