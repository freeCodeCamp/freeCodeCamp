'use strict';

var _ExportMap = require('../ExportMap');

var _ExportMap2 = _interopRequireDefault(_ExportMap);

var _declaredScope = require('eslint-module-utils/declaredScope');

var _declaredScope2 = _interopRequireDefault(_declaredScope);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function message(deprecation) {
  return 'Deprecated' + (deprecation.description ? ': ' + deprecation.description : '.');
}

function getDeprecation(metadata) {
  if (!metadata || !metadata.doc) return;

  let deprecation;
  if (metadata.doc.tags.some(t => t.title === 'deprecated' && (deprecation = t))) {
    return deprecation;
  }
}

module.exports = {
  meta: {
    docs: {}
  },

  create: function (context) {
    const deprecated = new Map(),
          namespaces = new Map();

    function checkSpecifiers(node) {
      if (node.type !== 'ImportDeclaration') return;
      if (node.source == null) return; // local export, ignore

      const imports = _ExportMap2.default.get(node.source.value, context);
      if (imports == null) return;

      let moduleDeprecation;
      if (imports.doc && imports.doc.tags.some(t => t.title === 'deprecated' && (moduleDeprecation = t))) {
        context.report({ node, message: message(moduleDeprecation) });
      }

      if (imports.errors.length) {
        imports.reportErrors(context, node);
        return;
      }

      node.specifiers.forEach(function (im) {
        let imported, local;
        switch (im.type) {

          case 'ImportNamespaceSpecifier':
            {
              if (!imports.size) return;
              namespaces.set(im.local.name, imports);
              return;
            }

          case 'ImportDefaultSpecifier':
            imported = 'default';
            local = im.local.name;
            break;

          case 'ImportSpecifier':
            imported = im.imported.name;
            local = im.local.name;
            break;

          default:
            return; // can't handle this one
        }

        // unknown thing can't be deprecated
        const exported = imports.get(imported);
        if (exported == null) return;

        // capture import of deep namespace
        if (exported.namespace) namespaces.set(local, exported.namespace);

        const deprecation = getDeprecation(imports.get(imported));
        if (!deprecation) return;

        context.report({ node: im, message: message(deprecation) });

        deprecated.set(local, deprecation);
      });
    }

    return {
      'Program': (_ref) => {
        let body = _ref.body;
        return body.forEach(checkSpecifiers);
      },

      'Identifier': function (node) {
        if (node.parent.type === 'MemberExpression' && node.parent.property === node) {
          return; // handled by MemberExpression
        }

        // ignore specifier identifiers
        if (node.parent.type.slice(0, 6) === 'Import') return;

        if (!deprecated.has(node.name)) return;

        if ((0, _declaredScope2.default)(context, node.name) !== 'module') return;
        context.report({
          node,
          message: message(deprecated.get(node.name))
        });
      },

      'MemberExpression': function (dereference) {
        if (dereference.object.type !== 'Identifier') return;
        if (!namespaces.has(dereference.object.name)) return;

        if ((0, _declaredScope2.default)(context, dereference.object.name) !== 'module') return;

        // go deep
        var namespace = namespaces.get(dereference.object.name);
        var namepath = [dereference.object.name];
        // while property is namespace and parent is member expression, keep validating
        while (namespace instanceof _ExportMap2.default && dereference.type === 'MemberExpression') {

          // ignore computed parts for now
          if (dereference.computed) return;

          const metadata = namespace.get(dereference.property.name);

          if (!metadata) break;
          const deprecation = getDeprecation(metadata);

          if (deprecation) {
            context.report({ node: dereference.property, message: message(deprecation) });
          }

          // stash and pop
          namepath.push(dereference.property.name);
          namespace = metadata.namespace;
          dereference = dereference.parent;
        }
      }
    };
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25vLWRlcHJlY2F0ZWQuanMiXSwibmFtZXMiOlsibWVzc2FnZSIsImRlcHJlY2F0aW9uIiwiZGVzY3JpcHRpb24iLCJnZXREZXByZWNhdGlvbiIsIm1ldGFkYXRhIiwiZG9jIiwidGFncyIsInNvbWUiLCJ0IiwidGl0bGUiLCJtb2R1bGUiLCJleHBvcnRzIiwibWV0YSIsImRvY3MiLCJjcmVhdGUiLCJjb250ZXh0IiwiZGVwcmVjYXRlZCIsIk1hcCIsIm5hbWVzcGFjZXMiLCJjaGVja1NwZWNpZmllcnMiLCJub2RlIiwidHlwZSIsInNvdXJjZSIsImltcG9ydHMiLCJnZXQiLCJ2YWx1ZSIsIm1vZHVsZURlcHJlY2F0aW9uIiwicmVwb3J0IiwiZXJyb3JzIiwibGVuZ3RoIiwicmVwb3J0RXJyb3JzIiwic3BlY2lmaWVycyIsImZvckVhY2giLCJpbSIsImltcG9ydGVkIiwibG9jYWwiLCJzaXplIiwic2V0IiwibmFtZSIsImV4cG9ydGVkIiwibmFtZXNwYWNlIiwiYm9keSIsInBhcmVudCIsInByb3BlcnR5Iiwic2xpY2UiLCJoYXMiLCJkZXJlZmVyZW5jZSIsIm9iamVjdCIsIm5hbWVwYXRoIiwiY29tcHV0ZWQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLE9BQVQsQ0FBaUJDLFdBQWpCLEVBQThCO0FBQzVCLFNBQU8sZ0JBQWdCQSxZQUFZQyxXQUFaLEdBQTBCLE9BQU9ELFlBQVlDLFdBQTdDLEdBQTJELEdBQTNFLENBQVA7QUFDRDs7QUFFRCxTQUFTQyxjQUFULENBQXdCQyxRQUF4QixFQUFrQztBQUNoQyxNQUFJLENBQUNBLFFBQUQsSUFBYSxDQUFDQSxTQUFTQyxHQUEzQixFQUFnQzs7QUFFaEMsTUFBSUosV0FBSjtBQUNBLE1BQUlHLFNBQVNDLEdBQVQsQ0FBYUMsSUFBYixDQUFrQkMsSUFBbEIsQ0FBdUJDLEtBQUtBLEVBQUVDLEtBQUYsS0FBWSxZQUFaLEtBQTZCUixjQUFjTyxDQUEzQyxD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QyxRQUFMLEVBQWU7QUFDZixnQkFBTUgsY0FBY0UsZUFBZUMsUUFBZixDQUFwQjs7QUFFQSxjQUFJSCxXQUFKLEVBQWlCO0FBQ2ZjLG9CQUFRWSxNQUFSLENBQWUsRUFBRVAsTUFBTTBCLFlBQVlILFFBQXBCLEVBQThCM0MsU0FBU0EsUUFBUUMsV0FBUixDQUF2QyxFQUFmO0FBQ0Q7O0FBRUQ7QUFDQStDLG1CQUFTRSxJQUFULENBQWNKLFlBQVlILFFBQVosQ0FBcUJMLElBQW5DO0FBQ0FFLHNCQUFZcEMsU0FBU29DLFNBQXJCO0FBQ0FNLHdCQUFjQSxZQUFZSixNQUExQjtBQUNEO0FBQ0Y7QUFsREksS0FBUDtBQW9ERDtBQXhIYyxDQUFqQiIsImZpbGUiOiJydWxlcy9uby1kZXByZWNhdGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4cG9ydHMgZnJvbSAnLi4vRXhwb3J0TWFwJ1xuaW1wb3J0IGRlY2xhcmVkU2NvcGUgZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy9kZWNsYXJlZFNjb3BlJ1xuXG5mdW5jdGlvbiBtZXNzYWdlKGRlcHJlY2F0aW9uKSB7XG4gIHJldHVybiAnRGVwcmVjYXRlZCcgKyAoZGVwcmVjYXRpb24uZGVzY3JpcHRpb24gPyAnOiAnICsgZGVwcmVjYXRpb24uZGVzY3JpcHRpb24gOiAnLicpXG59XG5cbmZ1bmN0aW9uIGdldERlcHJlY2F0aW9uKG1ldGFkYXRhKSB7XG4gIGlmICghbWV0YWRhdGEgfHwgIW1ldGFkYXRhLmRvYykgcmV0dXJuXG5cbiAgbGV0IGRlcHJlY2F0aW9uXG4gIGlmIChtZXRhZGF0YS5kb2MudGFncy5zb21lKHQgPT4gdC50aXRsZSA9PT0gJ2RlcHJlY2F0ZWQnICYmIChkZXByZWNhdGlvbiA9IHQpKSkge1xuICAgIHJldHVybiBkZXByZWNhdGlvblxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtZXRhOiB7XG4gICAgZG9jczoge30sXG4gIH0sXG5cbiAgY3JlYXRlOiBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgIGNvbnN0IGRlcHJlY2F0ZWQgPSBuZXcgTWFwKClcbiAgICAgICAgLCBuYW1lc3BhY2VzID0gbmV3IE1hcCgpXG5cbiAgICBmdW5jdGlvbiBjaGVja1NwZWNpZmllcnMobm9kZSkge1xuICAgICAgaWYgKG5vZGUudHlwZSAhPT0gJ0ltcG9ydERlY2xhcmF0aW9uJykgcmV0dXJuXG4gICAgICBpZiAobm9kZS5zb3VyY2UgPT0gbnVsbCkgcmV0dXJuIC8vIGxvY2FsIGV4cG9ydCwgaWdub3JlXG5cbiAgICAgIGNvbnN0IGltcG9ydHMgPSBFeHBvcnRzLmdldChub2RlLnNvdXJjZS52YWx1ZSwgY29udGV4dClcbiAgICAgIGlmIChpbXBvcnRzID09IG51bGwpIHJldHVyblxuXG4gICAgICBsZXQgbW9kdWxlRGVwcmVjYXRpb25cbiAgICAgIGlmIChpbXBvcnRzLmRvYyAmJlxuICAgICAgICAgIGltcG9ydHMuZG9jLnRhZ3Muc29tZSh0ID0+IHQudGl0bGUgPT09ICdkZXByZWNhdGVkJyAmJiAobW9kdWxlRGVwcmVjYXRpb24gPSB0KSkpIHtcbiAgICAgICAgY29udGV4dC5yZXBvcnQoeyBub2RlLCBtZXNzYWdlOiBtZXNzYWdlKG1vZHVsZURlcHJlY2F0aW9uKSB9KVxuICAgICAgfVxuXG4gICAgICBpZiAoaW1wb3J0cy5lcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIGltcG9ydHMucmVwb3J0RXJyb3JzKGNvbnRleHQsIG5vZGUpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBub2RlLnNwZWNpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAoaW0pIHtcbiAgICAgICAgbGV0IGltcG9ydGVkLCBsb2NhbFxuICAgICAgICBzd2l0Y2ggKGltLnR5cGUpIHtcblxuXG4gICAgICAgICAgY2FzZSAnSW1wb3J0TmFtZXNwYWNlU3BlY2lmaWVyJzp7XG4gICAgICAgICAgICBpZiAoIWltcG9ydHMuc2l6ZSkgcmV0dXJuXG4gICAgICAgICAgICBuYW1lc3BhY2VzLnNldChpbS5sb2NhbC5uYW1lLCBpbXBvcnRzKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSAnSW1wb3J0RGVmYXVsdFNwZWNpZmllcic6XG4gICAgICAgICAgICBpbXBvcnRlZCA9ICdkZWZhdWx0J1xuICAgICAgICAgICAgbG9jYWwgPSBpbS5sb2NhbC5uYW1lXG4gICAgICAgICAgICBicmVha1xuXG4gICAgICAgICAgY2FzZSAnSW1wb3J0U3BlY2lmaWVyJzpcbiAgICAgICAgICAgIGltcG9ydGVkID0gaW0uaW1wb3J0ZWQubmFtZVxuICAgICAgICAgICAgbG9jYWwgPSBpbS5sb2NhbC5uYW1lXG4gICAgICAgICAgICBicmVha1xuXG4gICAgICAgICAgZGVmYXVsdDogcmV0dXJuIC8vIGNhbid0IGhhbmRsZSB0aGlzIG9uZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdW5rbm93biB0aGluZyBjYW4ndCBiZSBkZXByZWNhdGVkXG4gICAgICAgIGNvbnN0IGV4cG9ydGVkID0gaW1wb3J0cy5nZXQoaW1wb3J0ZWQpXG4gICAgICAgIGlmIChleHBvcnRlZCA9PSBudWxsKSByZXR1cm5cblxuICAgICAgICAvLyBjYXB0dXJlIGltcG9ydCBvZiBkZWVwIG5hbWVzcGFjZVxuICAgICAgICBpZiAoZXhwb3J0ZWQubmFtZXNwYWNlKSBuYW1lc3BhY2VzLnNldChsb2NhbCwgZXhwb3J0ZWQubmFtZXNwYWNlKVxuXG4gICAgICAgIGNvbnN0IGRlcHJlY2F0aW9uID0gZ2V0RGVwcmVjYXRpb24oaW1wb3J0cy5nZXQoaW1wb3J0ZWQpKVxuICAgICAgICBpZiAoIWRlcHJlY2F0aW9uKSByZXR1cm5cblxuICAgICAgICBjb250ZXh0LnJlcG9ydCh7IG5vZGU6IGltLCBtZXNzYWdlOiBtZXNzYWdlKGRlcHJlY2F0aW9uKSB9KVxuXG4gICAgICAgIGRlcHJlY2F0ZWQuc2V0KGxvY2FsLCBkZXByZWNhdGlvbilcblxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgJ1Byb2dyYW0nOiAoeyBib2R5IH0pID0+IGJvZHkuZm9yRWFjaChjaGVja1NwZWNpZmllcnMpLFxuXG4gICAgICAnSWRlbnRpZmllcic6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLnBhcmVudC50eXBlID09PSAnTWVtYmVyRXhwcmVzc2lvbicgJiYgbm9kZS5wYXJlbnQucHJvcGVydHkgPT09IG5vZGUpIHtcbiAgICAgICAgICByZXR1cm4gLy8gaGFuZGxlZCBieSBNZW1iZXJFeHByZXNzaW9uXG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZ25vcmUgc3BlY2lmaWVyIGlkZW50aWZpZXJzXG4gICAgICAgIGlmIChub2RlLnBhcmVudC50eXBlLnNsaWNlKDAsIDYpID09PSAnSW1wb3J0JykgcmV0dXJuXG5cbiAgICAgICAgaWYgKCFkZXByZWNhdGVkLmhhcyhub2RlLm5hbWUpKSByZXR1cm5cblxuICAgICAgICBpZiAoZGVjbGFyZWRTY29wZShjb250ZXh0LCBub2RlLm5hbWUpICE9PSAnbW9kdWxlJykgcmV0dXJuXG4gICAgICAgIGNvbnRleHQucmVwb3J0KHtcbiAgICAgICAgICBub2RlLFxuICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UoZGVwcmVjYXRlZC5nZXQobm9kZS5uYW1lKSksXG4gICAgICAgIH0pXG4gICAgICB9LFxuXG4gICAgICAnTWVtYmVyRXhwcmVzc2lvbic6IGZ1bmN0aW9uIChkZXJlZmVyZW5jZSkge1xuICAgICAgICBpZiAoZGVyZWZlcmVuY2Uub2JqZWN0LnR5cGUgIT09ICdJZGVudGlmaWVyJykgcmV0dXJuXG4gICAgICAgIGlmICghbmFtZXNwYWNlcy5oYXMoZGVyZWZlcmVuY2Uub2JqZWN0Lm5hbWUpKSByZXR1cm5cblxuICAgICAgICBpZiAoZGVjbGFyZWRTY29wZShjb250ZXh0LCBkZXJlZmVyZW5jZS5vYmplY3QubmFtZSkgIT09ICdtb2R1bGUnKSByZXR1cm5cblxuICAgICAgICAvLyBnbyBkZWVwXG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSBuYW1lc3BhY2VzLmdldChkZXJlZmVyZW5jZS5vYmplY3QubmFtZSlcbiAgICAgICAgdmFyIG5hbWVwYXRoID0gW2RlcmVmZXJlbmNlLm9iamVjdC5uYW1lXVxuICAgICAgICAvLyB3aGlsZSBwcm9wZXJ0eSBpcyBuYW1lc3BhY2UgYW5kIHBhcmVudCBpcyBtZW1iZXIgZXhwcmVzc2lvbiwga2VlcCB2YWxpZGF0aW5nXG4gICAgICAgIHdoaWxlIChuYW1lc3BhY2UgaW5zdGFuY2VvZiBFeHBvcnRzICYmXG4gICAgICAgICAgICAgICBkZXJlZmVyZW5jZS50eXBlID09PSAnTWVtYmVyRXhwcmVzc2lvbicpIHtcblxuICAgICAgICAgIC8vIGlnbm9yZSBjb21wdXRlZCBwYXJ0cyBmb3Igbm93XG4gICAgICAgICAgaWYgKGRlcmVmZXJlbmNlLmNvbXB1dGVkKSByZXR1cm5cblxuICAgICAgICAgIGNvbnN0IG1ldGFkYXRhID0gbmFtZXNwYWNlLmdldChkZXJlZmVyZW5jZS5wcm9wZXJ0eS5uYW1lKVxuXG4gICAgICAgICAgaWYgKCFtZXRhZGF0YSkgYnJlYWtcbiAgICAgICAgICBjb25zdCBkZXByZWNhdGlvbiA9IGdldERlcHJlY2F0aW9uKG1ldGFkYXRhKVxuXG4gICAgICAgICAgaWYgKGRlcHJlY2F0aW9uKSB7XG4gICAgICAgICAgICBjb250ZXh0LnJlcG9ydCh7IG5vZGU6IGRlcmVmZXJlbmNlLnByb3BlcnR5LCBtZXNzYWdlOiBtZXNzYWdlKGRlcHJlY2F0aW9uKSB9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHN0YXNoIGFuZCBwb3BcbiAgICAgICAgICBuYW1lcGF0aC5wdXNoKGRlcmVmZXJlbmNlLnByb3BlcnR5Lm5hbWUpXG4gICAgICAgICAgbmFtZXNwYWNlID0gbWV0YWRhdGEubmFtZXNwYWNlXG4gICAgICAgICAgZGVyZWZlcmVuY2UgPSBkZXJlZmVyZW5jZS5wYXJlbnRcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG4gIH0sXG59XG4iXX0=