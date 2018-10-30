'use strict';

var _ExportMap = require('../ExportMap');

var _ExportMap2 = _interopRequireDefault(_ExportMap);

var _importDeclaration = require('../importDeclaration');

var _importDeclaration2 = _interopRequireDefault(_importDeclaration);

var _declaredScope = require('eslint-module-utils/declaredScope');

var _declaredScope2 = _interopRequireDefault(_declaredScope);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  meta: {
    schema: [{
      'type': 'object',
      'properties': {
        'allowComputed': {
          'description': 'If `false`, will report computed (and thus, un-lintable) references ' + 'to namespace members.',
          'type': 'boolean',
          'default': false
        }
      },
      'additionalProperties': false
    }]
  },

  create: function namespaceRule(context) {

    // read options
    var _ref = context.options[0] || {};

    var _ref$allowComputed = _ref.allowComputed;
    const allowComputed = _ref$allowComputed === undefined ? false : _ref$allowComputed;


    const namespaces = new Map();

    function makeMessage(last, namepath) {
      return `'${ last.name }' not found in` + (namepath.length > 1 ? ' deeply ' : ' ') + `imported namespace '${ namepath.join('.') }'.`;
    }

    return {

      // pick up all imports at body entry time, to properly respect hoisting
      'Program': function (_ref2) {
        let body = _ref2.body;

        function processBodyStatement(declaration) {
          if (declaration.type !== 'ImportDeclaration') return;

          if (declaration.specifiers.length === 0) return;

          const imports = _ExportMap2.default.get(declaration.source.value, context);
          if (imports == null) return null;

          if (imports.errors.length) {
            imports.reportErrors(context, declaration);
            return;
          }

          for (let specifier of declaration.specifiers) {
            switch (specifier.type) {
              case 'ImportNamespaceSpecifier':
                if (!imports.size) {
                  context.report(specifier, `No exported names found in module '${ declaration.source.value }'.`);
                }
                namespaces.set(specifier.local.name, imports);
                break;
              case 'ImportDefaultSpecifier':
              case 'ImportSpecifier':
                {
                  const meta = imports.get(
                  // default to 'default' for default http://i.imgur.com/nj6qAWy.jpg
                  specifier.imported ? specifier.imported.name : 'default');
                  if (!meta || !meta.namespace) break;
                  namespaces.set(specifier.local.name, meta.namespace);
                  break;
                }
            }
          }
        }
        body.forEach(processBodyStatement);
      },

      // same as above, but does not add names to local map
      'ExportNamespaceSpecifier': function (namespace) {
        var declaration = (0, _importDeclaration2.default)(context);

        var imports = _ExportMap2.default.get(declaration.source.value, context);
        if (imports == null) return null;

        if (imports.errors.length) {
          imports.reportErrors(context, declaration);
          return;
        }

        if (!imports.size) {
          context.report(namespace, `No exported names found in module '${ declaration.source.value }'.`);
        }
      },

      // todo: check for possible redefinition

      'MemberExpression': function (dereference) {
        if (dereference.object.type !== 'Identifier') return;
        if (!namespaces.has(dereference.object.name)) return;

        if (dereference.parent.type === 'AssignmentExpression' && dereference.parent.left === dereference) {
          context.report(dereference.parent, `Assignment to member of namespace '${ dereference.object.name }'.`);
        }

        // go deep
        var namespace = namespaces.get(dereference.object.name);
        var namepath = [dereference.object.name];
        // while property is namespace and parent is member expression, keep validating
        while (namespace instanceof _ExportMap2.default && dereference.type === 'MemberExpression') {

          if (dereference.computed) {
            if (!allowComputed) {
              context.report(dereference.property, 'Unable to validate computed reference to imported namespace \'' + dereference.object.name + '\'.');
            }
            return;
          }

          if (!namespace.has(dereference.property.name)) {
            context.report(dereference.property, makeMessage(dereference.property, namepath));
            break;
          }

          const exported = namespace.get(dereference.property.name);
          if (exported == null) return;

          // stash and pop
          namepath.push(dereference.property.name);
          namespace = exported.namespace;
          dereference = dereference.parent;
        }
      },

      'VariableDeclarator': function (_ref3) {
        let id = _ref3.id;
        let init = _ref3.init;

        if (init == null) return;
        if (init.type !== 'Identifier') return;
        if (!namespaces.has(init.name)) return;

        // check for redefinition in intermediate scopes
        if ((0, _declaredScope2.default)(context, init.name) !== 'module') return;

        // DFS traverse child namespaces
        function testKey(pattern, namespace) {
          let path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [init.name];

          if (!(namespace instanceof _ExportMap2.default)) return;

          if (pattern.type !== 'ObjectPattern') return;

          for (let property of pattern.properties) {

            if (property.key.type !== 'Identifier') {
              context.report({
                node: property,
                message: 'Only destructure top-level names.'
              });
              continue;
            }

            if (!namespace.has(property.key.name)) {
              context.report({
                node: property,
                message: makeMessage(property.key, path)
              });
              continue;
            }

            path.push(property.key.name);
            testKey(property.value, namespace.get(property.key.name).namespace, path);
            path.pop();
          }
        }

        testKey(id, namespaces.get(init.name));
      }
    };
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25hbWVzcGFjZS5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibWV0YSIsInNjaGVtYSIsImNyZWF0ZSIsIm5hbWVzcGFjZVJ1bGUiLCJjb250ZXh0Iiwib3B0aW9ucyIsImFsbG93Q29tcHV0ZWQiLCJuYW1lc3BhY2VzIiwiTWFwIiwibWFrZU1lc3NhZ2UiLCJsYXN0IiwibmFtZXBhdGgiLCJuYW1lIiwibGVuZ3RoIiwiam9pbiIsImJvZHkiLCJwcm9jZXNzQm9keVN0YXRlbWVudCIsImRlY2xhcmF0aW9uIiwidHlwZSIsInNwZWNpZmllcnMiLCJpbXBvcnRzIiwiZ2V0Iiwic291cmNlIiwidmFsdWUiLCJlcnJvcnMiLCJyZXBvcnRFcnJvcnMiLCJzcGVjaWZpZXIiLCJzaXplIiwicmVwb3J0Iiwic2V0IiwibG9jYWwiLCJpbXBvcnRlZCIsIm5hbWVzcGFjZSIsImZvckVhY2giLCJkZXJlZmVyZW5jZSIsIm9iamVjdCIsImhhcyIsInBhcmVudCIsImxlZnQiLCJjb21wdXRlZCIsInByb3BlcnR5IiwiZXhwb3J0ZWQiLCJwdXNoIiwiaWQiLCJpbml0IiwidGVzdEtleSIsInBhdHRlcm4iLCJwYXRoIiwicHJvcGVydGllcyIsImtleSIsIm5vZGUiLCJtZXNzYWdlIiwicG9wIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUFBLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsUUFBTTtBQUNKQyxZQUFRLENBQ047QUFDRSxjQUFRLFFBRFY7QUFFRSxvQkFBYztBQUNaLHlCQUFpQjtBQUNmLHlCQUNFLHlFQUNBLHVCQUhhO0FBSWYsa0JBQVEsU0FKTztBQUtmLHFCQUFXO0FBTEk7QUFETCxPQUZoQjtBQVdFLDhCQUF3QjtBQVgxQixLQURNO0FBREosR0FEUzs7QUFtQmZDLFVBQVEsU0FBU0MsYUFBVCxDQUF1QkMsT0FBdkIsRUFBZ0M7O0FBRXRDO0FBRnNDLGVBS2xDQSxRQUFRQyxPQUFSLENBQWdCLENBQWhC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O0FBRkksZUFBZjtBQUlBO0FBQ0Q7O0FBRURBLGlCQUFLTCxJQUFMLENBQVVGLFNBQVNTLEdBQVQsQ0FBYXJDLElBQXZCO0FBQ0FpQyxvQkFBUUwsU0FBU2pCLEtBQWpCLEVBQXdCUyxVQUFVWCxHQUFWLENBQWNtQixTQUFTUyxHQUFULENBQWFyQyxJQUEzQixFQUFpQ29CLFNBQXpELEVBQW9FZSxJQUFwRTtBQUNBQSxpQkFBS0ssR0FBTDtBQUNEO0FBQ0Y7O0FBRURQLGdCQUFRRixFQUFSLEVBQVlwQyxXQUFXYyxHQUFYLENBQWV1QixLQUFLaEMsSUFBcEIsQ0FBWjtBQUNEO0FBaEpJLEtBQVA7QUFrSkQ7QUFwTGMsQ0FBakIiLCJmaWxlIjoicnVsZXMvbmFtZXNwYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4cG9ydHMgZnJvbSAnLi4vRXhwb3J0TWFwJ1xuaW1wb3J0IGltcG9ydERlY2xhcmF0aW9uIGZyb20gJy4uL2ltcG9ydERlY2xhcmF0aW9uJ1xuaW1wb3J0IGRlY2xhcmVkU2NvcGUgZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy9kZWNsYXJlZFNjb3BlJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWV0YToge1xuICAgIHNjaGVtYTogW1xuICAgICAge1xuICAgICAgICAndHlwZSc6ICdvYmplY3QnLFxuICAgICAgICAncHJvcGVydGllcyc6IHtcbiAgICAgICAgICAnYWxsb3dDb21wdXRlZCc6IHtcbiAgICAgICAgICAgICdkZXNjcmlwdGlvbic6XG4gICAgICAgICAgICAgICdJZiBgZmFsc2VgLCB3aWxsIHJlcG9ydCBjb21wdXRlZCAoYW5kIHRodXMsIHVuLWxpbnRhYmxlKSByZWZlcmVuY2VzICcgK1xuICAgICAgICAgICAgICAndG8gbmFtZXNwYWNlIG1lbWJlcnMuJyxcbiAgICAgICAgICAgICd0eXBlJzogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgJ2RlZmF1bHQnOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICAnYWRkaXRpb25hbFByb3BlcnRpZXMnOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcblxuICBjcmVhdGU6IGZ1bmN0aW9uIG5hbWVzcGFjZVJ1bGUoY29udGV4dCkge1xuXG4gICAgLy8gcmVhZCBvcHRpb25zXG4gICAgY29uc3Qge1xuICAgICAgYWxsb3dDb21wdXRlZCA9IGZhbHNlLFxuICAgIH0gPSBjb250ZXh0Lm9wdGlvbnNbMF0gfHwge31cblxuICAgIGNvbnN0IG5hbWVzcGFjZXMgPSBuZXcgTWFwKClcblxuICAgIGZ1bmN0aW9uIG1ha2VNZXNzYWdlKGxhc3QsIG5hbWVwYXRoKSB7XG4gICAgICAgcmV0dXJuIGAnJHtsYXN0Lm5hbWV9JyBub3QgZm91bmQgaW5gICtcbiAgICAgICAgICAgICAgKG5hbWVwYXRoLmxlbmd0aCA+IDEgPyAnIGRlZXBseSAnIDogJyAnKSArXG4gICAgICAgICAgICAgIGBpbXBvcnRlZCBuYW1lc3BhY2UgJyR7bmFtZXBhdGguam9pbignLicpfScuYFxuICAgIH1cblxuICAgIHJldHVybiB7XG5cbiAgICAgIC8vIHBpY2sgdXAgYWxsIGltcG9ydHMgYXQgYm9keSBlbnRyeSB0aW1lLCB0byBwcm9wZXJseSByZXNwZWN0IGhvaXN0aW5nXG4gICAgICAnUHJvZ3JhbSc6IGZ1bmN0aW9uICh7IGJvZHkgfSkge1xuICAgICAgICBmdW5jdGlvbiBwcm9jZXNzQm9keVN0YXRlbWVudChkZWNsYXJhdGlvbikge1xuICAgICAgICAgIGlmIChkZWNsYXJhdGlvbi50eXBlICE9PSAnSW1wb3J0RGVjbGFyYXRpb24nKSByZXR1cm5cblxuICAgICAgICAgIGlmIChkZWNsYXJhdGlvbi5zcGVjaWZpZXJzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgICAgICAgICBjb25zdCBpbXBvcnRzID0gRXhwb3J0cy5nZXQoZGVjbGFyYXRpb24uc291cmNlLnZhbHVlLCBjb250ZXh0KVxuICAgICAgICAgIGlmIChpbXBvcnRzID09IG51bGwpIHJldHVybiBudWxsXG5cbiAgICAgICAgICBpZiAoaW1wb3J0cy5lcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpbXBvcnRzLnJlcG9ydEVycm9ycyhjb250ZXh0LCBkZWNsYXJhdGlvbilcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAobGV0IHNwZWNpZmllciBvZiBkZWNsYXJhdGlvbi5zcGVjaWZpZXJzKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHNwZWNpZmllci50eXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ0ltcG9ydE5hbWVzcGFjZVNwZWNpZmllcic6XG4gICAgICAgICAgICAgICAgaWYgKCFpbXBvcnRzLnNpemUpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnRleHQucmVwb3J0KHNwZWNpZmllcixcbiAgICAgICAgICAgICAgICAgICAgYE5vIGV4cG9ydGVkIG5hbWVzIGZvdW5kIGluIG1vZHVsZSAnJHtkZWNsYXJhdGlvbi5zb3VyY2UudmFsdWV9Jy5gKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuYW1lc3BhY2VzLnNldChzcGVjaWZpZXIubG9jYWwubmFtZSwgaW1wb3J0cylcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICBjYXNlICdJbXBvcnREZWZhdWx0U3BlY2lmaWVyJzpcbiAgICAgICAgICAgICAgY2FzZSAnSW1wb3J0U3BlY2lmaWVyJzoge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1ldGEgPSBpbXBvcnRzLmdldChcbiAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHQgdG8gJ2RlZmF1bHQnIGZvciBkZWZhdWx0IGh0dHA6Ly9pLmltZ3VyLmNvbS9uajZxQVd5LmpwZ1xuICAgICAgICAgICAgICAgICAgc3BlY2lmaWVyLmltcG9ydGVkID8gc3BlY2lmaWVyLmltcG9ydGVkLm5hbWUgOiAnZGVmYXVsdCcpXG4gICAgICAgICAgICAgICAgaWYgKCFtZXRhIHx8ICFtZXRhLm5hbWVzcGFjZSkgYnJlYWtcbiAgICAgICAgICAgICAgICBuYW1lc3BhY2VzLnNldChzcGVjaWZpZXIubG9jYWwubmFtZSwgbWV0YS5uYW1lc3BhY2UpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBib2R5LmZvckVhY2gocHJvY2Vzc0JvZHlTdGF0ZW1lbnQpXG4gICAgICB9LFxuXG4gICAgICAvLyBzYW1lIGFzIGFib3ZlLCBidXQgZG9lcyBub3QgYWRkIG5hbWVzIHRvIGxvY2FsIG1hcFxuICAgICAgJ0V4cG9ydE5hbWVzcGFjZVNwZWNpZmllcic6IGZ1bmN0aW9uIChuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIGRlY2xhcmF0aW9uID0gaW1wb3J0RGVjbGFyYXRpb24oY29udGV4dClcblxuICAgICAgICB2YXIgaW1wb3J0cyA9IEV4cG9ydHMuZ2V0KGRlY2xhcmF0aW9uLnNvdXJjZS52YWx1ZSwgY29udGV4dClcbiAgICAgICAgaWYgKGltcG9ydHMgPT0gbnVsbCkgcmV0dXJuIG51bGxcblxuICAgICAgICBpZiAoaW1wb3J0cy5lcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgaW1wb3J0cy5yZXBvcnRFcnJvcnMoY29udGV4dCwgZGVjbGFyYXRpb24pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWltcG9ydHMuc2l6ZSkge1xuICAgICAgICAgIGNvbnRleHQucmVwb3J0KG5hbWVzcGFjZSxcbiAgICAgICAgICAgIGBObyBleHBvcnRlZCBuYW1lcyBmb3VuZCBpbiBtb2R1bGUgJyR7ZGVjbGFyYXRpb24uc291cmNlLnZhbHVlfScuYClcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLy8gdG9kbzogY2hlY2sgZm9yIHBvc3NpYmxlIHJlZGVmaW5pdGlvblxuXG4gICAgICAnTWVtYmVyRXhwcmVzc2lvbic6IGZ1bmN0aW9uIChkZXJlZmVyZW5jZSkge1xuICAgICAgICBpZiAoZGVyZWZlcmVuY2Uub2JqZWN0LnR5cGUgIT09ICdJZGVudGlmaWVyJykgcmV0dXJuXG4gICAgICAgIGlmICghbmFtZXNwYWNlcy5oYXMoZGVyZWZlcmVuY2Uub2JqZWN0Lm5hbWUpKSByZXR1cm5cblxuICAgICAgICBpZiAoZGVyZWZlcmVuY2UucGFyZW50LnR5cGUgPT09ICdBc3NpZ25tZW50RXhwcmVzc2lvbicgJiZcbiAgICAgICAgICAgIGRlcmVmZXJlbmNlLnBhcmVudC5sZWZ0ID09PSBkZXJlZmVyZW5jZSkge1xuICAgICAgICAgICAgY29udGV4dC5yZXBvcnQoZGVyZWZlcmVuY2UucGFyZW50LFxuICAgICAgICAgICAgICAgIGBBc3NpZ25tZW50IHRvIG1lbWJlciBvZiBuYW1lc3BhY2UgJyR7ZGVyZWZlcmVuY2Uub2JqZWN0Lm5hbWV9Jy5gKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ28gZGVlcFxuICAgICAgICB2YXIgbmFtZXNwYWNlID0gbmFtZXNwYWNlcy5nZXQoZGVyZWZlcmVuY2Uub2JqZWN0Lm5hbWUpXG4gICAgICAgIHZhciBuYW1lcGF0aCA9IFtkZXJlZmVyZW5jZS5vYmplY3QubmFtZV1cbiAgICAgICAgLy8gd2hpbGUgcHJvcGVydHkgaXMgbmFtZXNwYWNlIGFuZCBwYXJlbnQgaXMgbWVtYmVyIGV4cHJlc3Npb24sIGtlZXAgdmFsaWRhdGluZ1xuICAgICAgICB3aGlsZSAobmFtZXNwYWNlIGluc3RhbmNlb2YgRXhwb3J0cyAmJlxuICAgICAgICAgICAgICAgZGVyZWZlcmVuY2UudHlwZSA9PT0gJ01lbWJlckV4cHJlc3Npb24nKSB7XG5cbiAgICAgICAgICBpZiAoZGVyZWZlcmVuY2UuY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIGlmICghYWxsb3dDb21wdXRlZCkge1xuICAgICAgICAgICAgICBjb250ZXh0LnJlcG9ydChkZXJlZmVyZW5jZS5wcm9wZXJ0eSxcbiAgICAgICAgICAgICAgICAnVW5hYmxlIHRvIHZhbGlkYXRlIGNvbXB1dGVkIHJlZmVyZW5jZSB0byBpbXBvcnRlZCBuYW1lc3BhY2UgXFwnJyArXG4gICAgICAgICAgICAgICAgZGVyZWZlcmVuY2Uub2JqZWN0Lm5hbWUgKyAnXFwnLicpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIW5hbWVzcGFjZS5oYXMoZGVyZWZlcmVuY2UucHJvcGVydHkubmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnRleHQucmVwb3J0KFxuICAgICAgICAgICAgICBkZXJlZmVyZW5jZS5wcm9wZXJ0eSxcbiAgICAgICAgICAgICAgbWFrZU1lc3NhZ2UoZGVyZWZlcmVuY2UucHJvcGVydHksIG5hbWVwYXRoKSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZXhwb3J0ZWQgPSBuYW1lc3BhY2UuZ2V0KGRlcmVmZXJlbmNlLnByb3BlcnR5Lm5hbWUpXG4gICAgICAgICAgaWYgKGV4cG9ydGVkID09IG51bGwpIHJldHVyblxuXG4gICAgICAgICAgLy8gc3Rhc2ggYW5kIHBvcFxuICAgICAgICAgIG5hbWVwYXRoLnB1c2goZGVyZWZlcmVuY2UucHJvcGVydHkubmFtZSlcbiAgICAgICAgICBuYW1lc3BhY2UgPSBleHBvcnRlZC5uYW1lc3BhY2VcbiAgICAgICAgICBkZXJlZmVyZW5jZSA9IGRlcmVmZXJlbmNlLnBhcmVudFxuICAgICAgICB9XG5cbiAgICAgIH0sXG5cbiAgICAgICdWYXJpYWJsZURlY2xhcmF0b3InOiBmdW5jdGlvbiAoeyBpZCwgaW5pdCB9KSB7XG4gICAgICAgIGlmIChpbml0ID09IG51bGwpIHJldHVyblxuICAgICAgICBpZiAoaW5pdC50eXBlICE9PSAnSWRlbnRpZmllcicpIHJldHVyblxuICAgICAgICBpZiAoIW5hbWVzcGFjZXMuaGFzKGluaXQubmFtZSkpIHJldHVyblxuXG4gICAgICAgIC8vIGNoZWNrIGZvciByZWRlZmluaXRpb24gaW4gaW50ZXJtZWRpYXRlIHNjb3Blc1xuICAgICAgICBpZiAoZGVjbGFyZWRTY29wZShjb250ZXh0LCBpbml0Lm5hbWUpICE9PSAnbW9kdWxlJykgcmV0dXJuXG5cbiAgICAgICAgLy8gREZTIHRyYXZlcnNlIGNoaWxkIG5hbWVzcGFjZXNcbiAgICAgICAgZnVuY3Rpb24gdGVzdEtleShwYXR0ZXJuLCBuYW1lc3BhY2UsIHBhdGggPSBbaW5pdC5uYW1lXSkge1xuICAgICAgICAgIGlmICghKG5hbWVzcGFjZSBpbnN0YW5jZW9mIEV4cG9ydHMpKSByZXR1cm5cblxuICAgICAgICAgIGlmIChwYXR0ZXJuLnR5cGUgIT09ICdPYmplY3RQYXR0ZXJuJykgcmV0dXJuXG5cbiAgICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBvZiBwYXR0ZXJuLnByb3BlcnRpZXMpIHtcblxuICAgICAgICAgICAgaWYgKHByb3BlcnR5LmtleS50eXBlICE9PSAnSWRlbnRpZmllcicpIHtcbiAgICAgICAgICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICAgICAgICAgIG5vZGU6IHByb3BlcnR5LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdPbmx5IGRlc3RydWN0dXJlIHRvcC1sZXZlbCBuYW1lcy4nLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIW5hbWVzcGFjZS5oYXMocHJvcGVydHkua2V5Lm5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnRleHQucmVwb3J0KHtcbiAgICAgICAgICAgICAgICBub2RlOiBwcm9wZXJ0eSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBtYWtlTWVzc2FnZShwcm9wZXJ0eS5rZXksIHBhdGgpLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwYXRoLnB1c2gocHJvcGVydHkua2V5Lm5hbWUpXG4gICAgICAgICAgICB0ZXN0S2V5KHByb3BlcnR5LnZhbHVlLCBuYW1lc3BhY2UuZ2V0KHByb3BlcnR5LmtleS5uYW1lKS5uYW1lc3BhY2UsIHBhdGgpXG4gICAgICAgICAgICBwYXRoLnBvcCgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGVzdEtleShpZCwgbmFtZXNwYWNlcy5nZXQoaW5pdC5uYW1lKSlcbiAgICAgIH0sXG4gICAgfVxuICB9LFxufVxuIl19