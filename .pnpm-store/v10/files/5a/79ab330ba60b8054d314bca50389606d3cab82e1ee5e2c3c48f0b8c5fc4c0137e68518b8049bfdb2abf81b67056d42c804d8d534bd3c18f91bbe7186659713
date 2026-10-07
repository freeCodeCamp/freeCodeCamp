'use strict';var _declaredScope = require('eslint-module-utils/declaredScope');var _declaredScope2 = _interopRequireDefault(_declaredScope);
var _builder = require('../exportMap/builder');var _builder2 = _interopRequireDefault(_builder);
var _exportMap = require('../exportMap');var _exportMap2 = _interopRequireDefault(_exportMap);
var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

function message(deprecation) {
  return 'Deprecated' + (deprecation.description ? ': ' + String(deprecation.description) : '.');
}

function getDeprecation(metadata) {
  if (!metadata || !metadata.doc) {return;}

  return metadata.doc.tags.find(function (t) {return t.title === 'deprecated';});
}

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Helpful warnings',
      description: 'Forbid imported names marked with `@deprecated` documentation tag.',
      url: (0, _docsUrl2['default'])('no-deprecated') },

    schema: [] },


  create: function () {function create(context) {
      var deprecated = new Map();
      var namespaces = new Map();

      function checkSpecifiers(node) {
        if (node.type !== 'ImportDeclaration') {return;}
        if (node.source == null) {return;} // local export, ignore

        var imports = _builder2['default'].get(node.source.value, context);
        if (imports == null) {return;}

        var moduleDeprecation = imports.doc && imports.doc.tags.find(function (t) {return t.title === 'deprecated';});
        if (moduleDeprecation) {
          context.report({ node: node, message: message(moduleDeprecation) });
        }

        if (imports.errors.length) {
          imports.reportErrors(context, node);
          return;
        }

        node.specifiers.forEach(function (im) {
          var imported = void 0;var local = void 0;
          switch (im.type) {

            case 'ImportNamespaceSpecifier':{
                if (!imports.size) {return;}
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

            default:return; // can't handle this one
          }

          // unknown thing can't be deprecated
          var exported = imports.get(imported);
          if (exported == null) {return;}

          // capture import of deep namespace
          if (exported.namespace) {namespaces.set(local, exported.namespace);}

          var deprecation = getDeprecation(imports.get(imported));
          if (!deprecation) {return;}

          context.report({ node: im, message: message(deprecation) });

          deprecated.set(local, deprecation);

        });
      }

      return {
        Program: function () {function Program(_ref) {var body = _ref.body;return body.forEach(checkSpecifiers);}return Program;}(),

        Identifier: function () {function Identifier(node) {
            if (node.parent.type === 'MemberExpression' && node.parent.property === node) {
              return; // handled by MemberExpression
            }

            // ignore specifier identifiers
            if (node.parent.type.slice(0, 6) === 'Import') {return;}

            if (!deprecated.has(node.name)) {return;}

            if ((0, _declaredScope2['default'])(context, node.name, node) !== 'module') {return;}
            context.report({
              node: node,
              message: message(deprecated.get(node.name)) });

          }return Identifier;}(),

        MemberExpression: function () {function MemberExpression(dereference) {
            if (dereference.object.type !== 'Identifier') {return;}
            if (!namespaces.has(dereference.object.name)) {return;}

            if ((0, _declaredScope2['default'])(context, dereference.object.name, dereference) !== 'module') {return;}

            // go deep
            var namespace = namespaces.get(dereference.object.name);
            var namepath = [dereference.object.name];
            // while property is namespace and parent is member expression, keep validating
            while (namespace instanceof _exportMap2['default'] && dereference.type === 'MemberExpression') {
              // ignore computed parts for now
              if (dereference.computed) {return;}

              var metadata = namespace.get(dereference.property.name);

              if (!metadata) {break;}
              var deprecation = getDeprecation(metadata);

              if (deprecation) {
                context.report({ node: dereference.property, message: message(deprecation) });
              }

              // stash and pop
              namepath.push(dereference.property.name);
              namespace = metadata.namespace;
              dereference = dereference.parent;
            }
          }return MemberExpression;}() };

    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby1kZXByZWNhdGVkLmpzIl0sIm5hbWVzIjpbIm1lc3NhZ2UiLCJkZXByZWNhdGlvbiIsImRlc2NyaXB0aW9uIiwiZ2V0RGVwcmVjYXRpb24iLCJtZXRhZGF0YSIsImRvYyIsInRhZ3MiLCJmaW5kIiwidCIsInRpdGxlIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1ldGEiLCJ0eXBlIiwiZG9jcyIsImNhdGVnb3J5IiwidXJsIiwic2NoZW1hIiwiY3JlYXRlIiwiY29udGV4dCIsImRlcHJlY2F0ZWQiLCJNYXAiLCJuYW1lc3BhY2VzIiwiY2hlY2tTcGVjaWZpZXJzIiwibm9kZSIsInNvdXJjZSIsImltcG9ydHMiLCJFeHBvcnRNYXBCdWlsZGVyIiwiZ2V0IiwidmFsdWUiLCJtb2R1bGVEZXByZWNhdGlvbiIsInJlcG9ydCIsImVycm9ycyIsImxlbmd0aCIsInJlcG9ydEVycm9ycyIsInNwZWNpZmllcnMiLCJmb3JFYWNoIiwiaW0iLCJpbXBvcnRlZCIsImxvY2FsIiwic2l6ZSIsInNldCIsIm5hbWUiLCJleHBvcnRlZCIsIm5hbWVzcGFjZSIsIlByb2dyYW0iLCJib2R5IiwiSWRlbnRpZmllciIsInBhcmVudCIsInByb3BlcnR5Iiwic2xpY2UiLCJoYXMiLCJNZW1iZXJFeHByZXNzaW9uIiwiZGVyZWZlcmVuY2UiLCJvYmplY3QiLCJuYW1lcGF0aCIsIkV4cG9ydE1hcCIsImNvbXB1dGVkIiwicHVzaCJdLCJtYXBwaW5ncyI6ImFBQUEsa0U7QUFDQSwrQztBQUNBLHlDO0FBQ0EscUM7O0FBRUEsU0FBU0EsT0FBVCxDQUFpQkMsV0FBakIsRUFBOEI7QUFDNUIseUJBQW9CQSxZQUFZQyxXQUFaLGlCQUErQkQsWUFBWUMsV0FBM0MsSUFBMkQsR0FBL0U7QUFDRDs7QUFFRCxTQUFTQyxjQUFULENBQXdCQyxRQUF4QixFQUFrQztBQUNoQyxNQUFJLENBQUNBLFFBQUQsSUFBYSxDQUFDQSxTQUFTQyxHQUEzQixFQUFnQyxDQUFFLE9BQVM7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LEVBQWdEVyxXQUFoRCxNQUFpRSxRQUFyRSxFQUErRSxDQUFFLE9BQVM7O0FBRTFGO0FBQ0EsZ0JBQUlULFlBQVl0QixXQUFXTSxHQUFYLENBQWV5QixZQUFZQyxNQUFaLENBQW1CWixJQUFsQyxDQUFoQjtBQUNBLGdCQUFNYSxXQUFXLENBQUNGLFlBQVlDLE1BQVosQ0FBbUJaLElBQXBCLENBQWpCO0FBQ0E7QUFDQSxtQkFBT0UscUJBQXFCWSxzQkFBckIsSUFBa0NILFlBQVl4QyxJQUFaLEtBQXFCLGtCQUE5RCxFQUFrRjtBQUNoRjtBQUNBLGtCQUFJd0MsWUFBWUksUUFBaEIsRUFBMEIsQ0FBRSxPQUFTOztBQUVyQyxrQkFBTXJELFdBQVd3QyxVQUFVaEIsR0FBVixDQUFjeUIsWUFBWUosUUFBWixDQUFxQlAsSUFBbkMsQ0FBakI7O0FBRUEsa0JBQUksQ0FBQ3RDLFFBQUwsRUFBZSxDQUFFLE1BQVE7QUFDekIsa0JBQU1ILGNBQWNFLGVBQWVDLFFBQWYsQ0FBcEI7O0FBRUEsa0JBQUlILFdBQUosRUFBaUI7QUFDZmtCLHdCQUFRWSxNQUFSLENBQWUsRUFBRVAsTUFBTTZCLFlBQVlKLFFBQXBCLEVBQThCakQsU0FBU0EsUUFBUUMsV0FBUixDQUF2QyxFQUFmO0FBQ0Q7O0FBRUQ7QUFDQXNELHVCQUFTRyxJQUFULENBQWNMLFlBQVlKLFFBQVosQ0FBcUJQLElBQW5DO0FBQ0FFLDBCQUFZeEMsU0FBU3dDLFNBQXJCO0FBQ0FTLDRCQUFjQSxZQUFZTCxNQUExQjtBQUNEO0FBQ0YsV0FoREksNkJBQVA7O0FBa0RELEtBMUhjLG1CQUFqQiIsImZpbGUiOiJuby1kZXByZWNhdGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRlY2xhcmVkU2NvcGUgZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy9kZWNsYXJlZFNjb3BlJztcbmltcG9ydCBFeHBvcnRNYXBCdWlsZGVyIGZyb20gJy4uL2V4cG9ydE1hcC9idWlsZGVyJztcbmltcG9ydCBFeHBvcnRNYXAgZnJvbSAnLi4vZXhwb3J0TWFwJztcbmltcG9ydCBkb2NzVXJsIGZyb20gJy4uL2RvY3NVcmwnO1xuXG5mdW5jdGlvbiBtZXNzYWdlKGRlcHJlY2F0aW9uKSB7XG4gIHJldHVybiBgRGVwcmVjYXRlZCR7ZGVwcmVjYXRpb24uZGVzY3JpcHRpb24gPyBgOiAke2RlcHJlY2F0aW9uLmRlc2NyaXB0aW9ufWAgOiAnLid9YDtcbn1cblxuZnVuY3Rpb24gZ2V0RGVwcmVjYXRpb24obWV0YWRhdGEpIHtcbiAgaWYgKCFtZXRhZGF0YSB8fCAhbWV0YWRhdGEuZG9jKSB7IHJldHVybjsgfVxuXG4gIHJldHVybiBtZXRhZGF0YS5kb2MudGFncy5maW5kKCh0KSA9PiB0LnRpdGxlID09PSAnZGVwcmVjYXRlZCcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWV0YToge1xuICAgIHR5cGU6ICdzdWdnZXN0aW9uJyxcbiAgICBkb2NzOiB7XG4gICAgICBjYXRlZ29yeTogJ0hlbHBmdWwgd2FybmluZ3MnLFxuICAgICAgZGVzY3JpcHRpb246ICdGb3JiaWQgaW1wb3J0ZWQgbmFtZXMgbWFya2VkIHdpdGggYEBkZXByZWNhdGVkYCBkb2N1bWVudGF0aW9uIHRhZy4nLFxuICAgICAgdXJsOiBkb2NzVXJsKCduby1kZXByZWNhdGVkJyksXG4gICAgfSxcbiAgICBzY2hlbWE6IFtdLFxuICB9LFxuXG4gIGNyZWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgZGVwcmVjYXRlZCA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBuYW1lc3BhY2VzID0gbmV3IE1hcCgpO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tTcGVjaWZpZXJzKG5vZGUpIHtcbiAgICAgIGlmIChub2RlLnR5cGUgIT09ICdJbXBvcnREZWNsYXJhdGlvbicpIHsgcmV0dXJuOyB9XG4gICAgICBpZiAobm9kZS5zb3VyY2UgPT0gbnVsbCkgeyByZXR1cm47IH0gLy8gbG9jYWwgZXhwb3J0LCBpZ25vcmVcblxuICAgICAgY29uc3QgaW1wb3J0cyA9IEV4cG9ydE1hcEJ1aWxkZXIuZ2V0KG5vZGUuc291cmNlLnZhbHVlLCBjb250ZXh0KTtcbiAgICAgIGlmIChpbXBvcnRzID09IG51bGwpIHsgcmV0dXJuOyB9XG5cbiAgICAgIGNvbnN0IG1vZHVsZURlcHJlY2F0aW9uID0gaW1wb3J0cy5kb2MgJiYgaW1wb3J0cy5kb2MudGFncy5maW5kKCh0KSA9PiB0LnRpdGxlID09PSAnZGVwcmVjYXRlZCcpO1xuICAgICAgaWYgKG1vZHVsZURlcHJlY2F0aW9uKSB7XG4gICAgICAgIGNvbnRleHQucmVwb3J0KHsgbm9kZSwgbWVzc2FnZTogbWVzc2FnZShtb2R1bGVEZXByZWNhdGlvbikgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbXBvcnRzLmVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgaW1wb3J0cy5yZXBvcnRFcnJvcnMoY29udGV4dCwgbm9kZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbm9kZS5zcGVjaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKGltKSB7XG4gICAgICAgIGxldCBpbXBvcnRlZDsgbGV0IGxvY2FsO1xuICAgICAgICBzd2l0Y2ggKGltLnR5cGUpIHtcblxuICAgICAgICAgIGNhc2UgJ0ltcG9ydE5hbWVzcGFjZVNwZWNpZmllcic6IHtcbiAgICAgICAgICAgIGlmICghaW1wb3J0cy5zaXplKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgbmFtZXNwYWNlcy5zZXQoaW0ubG9jYWwubmFtZSwgaW1wb3J0cyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSAnSW1wb3J0RGVmYXVsdFNwZWNpZmllcic6XG4gICAgICAgICAgICBpbXBvcnRlZCA9ICdkZWZhdWx0JztcbiAgICAgICAgICAgIGxvY2FsID0gaW0ubG9jYWwubmFtZTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnSW1wb3J0U3BlY2lmaWVyJzpcbiAgICAgICAgICAgIGltcG9ydGVkID0gaW0uaW1wb3J0ZWQubmFtZTtcbiAgICAgICAgICAgIGxvY2FsID0gaW0ubG9jYWwubmFtZTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDogcmV0dXJuOyAvLyBjYW4ndCBoYW5kbGUgdGhpcyBvbmVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVua25vd24gdGhpbmcgY2FuJ3QgYmUgZGVwcmVjYXRlZFxuICAgICAgICBjb25zdCBleHBvcnRlZCA9IGltcG9ydHMuZ2V0KGltcG9ydGVkKTtcbiAgICAgICAgaWYgKGV4cG9ydGVkID09IG51bGwpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgLy8gY2FwdHVyZSBpbXBvcnQgb2YgZGVlcCBuYW1lc3BhY2VcbiAgICAgICAgaWYgKGV4cG9ydGVkLm5hbWVzcGFjZSkgeyBuYW1lc3BhY2VzLnNldChsb2NhbCwgZXhwb3J0ZWQubmFtZXNwYWNlKTsgfVxuXG4gICAgICAgIGNvbnN0IGRlcHJlY2F0aW9uID0gZ2V0RGVwcmVjYXRpb24oaW1wb3J0cy5nZXQoaW1wb3J0ZWQpKTtcbiAgICAgICAgaWYgKCFkZXByZWNhdGlvbikgeyByZXR1cm47IH1cblxuICAgICAgICBjb250ZXh0LnJlcG9ydCh7IG5vZGU6IGltLCBtZXNzYWdlOiBtZXNzYWdlKGRlcHJlY2F0aW9uKSB9KTtcblxuICAgICAgICBkZXByZWNhdGVkLnNldChsb2NhbCwgZGVwcmVjYXRpb24pO1xuXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgUHJvZ3JhbTogKHsgYm9keSB9KSA9PiBib2R5LmZvckVhY2goY2hlY2tTcGVjaWZpZXJzKSxcblxuICAgICAgSWRlbnRpZmllcihub2RlKSB7XG4gICAgICAgIGlmIChub2RlLnBhcmVudC50eXBlID09PSAnTWVtYmVyRXhwcmVzc2lvbicgJiYgbm9kZS5wYXJlbnQucHJvcGVydHkgPT09IG5vZGUpIHtcbiAgICAgICAgICByZXR1cm47IC8vIGhhbmRsZWQgYnkgTWVtYmVyRXhwcmVzc2lvblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWdub3JlIHNwZWNpZmllciBpZGVudGlmaWVyc1xuICAgICAgICBpZiAobm9kZS5wYXJlbnQudHlwZS5zbGljZSgwLCA2KSA9PT0gJ0ltcG9ydCcpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgaWYgKCFkZXByZWNhdGVkLmhhcyhub2RlLm5hbWUpKSB7IHJldHVybjsgfVxuXG4gICAgICAgIGlmIChkZWNsYXJlZFNjb3BlKGNvbnRleHQsIG5vZGUubmFtZSwgbm9kZSkgIT09ICdtb2R1bGUnKSB7IHJldHVybjsgfVxuICAgICAgICBjb250ZXh0LnJlcG9ydCh7XG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlKGRlcHJlY2F0ZWQuZ2V0KG5vZGUubmFtZSkpLFxuICAgICAgICB9KTtcbiAgICAgIH0sXG5cbiAgICAgIE1lbWJlckV4cHJlc3Npb24oZGVyZWZlcmVuY2UpIHtcbiAgICAgICAgaWYgKGRlcmVmZXJlbmNlLm9iamVjdC50eXBlICE9PSAnSWRlbnRpZmllcicpIHsgcmV0dXJuOyB9XG4gICAgICAgIGlmICghbmFtZXNwYWNlcy5oYXMoZGVyZWZlcmVuY2Uub2JqZWN0Lm5hbWUpKSB7IHJldHVybjsgfVxuXG4gICAgICAgIGlmIChkZWNsYXJlZFNjb3BlKGNvbnRleHQsIGRlcmVmZXJlbmNlLm9iamVjdC5uYW1lLCBkZXJlZmVyZW5jZSkgIT09ICdtb2R1bGUnKSB7IHJldHVybjsgfVxuXG4gICAgICAgIC8vIGdvIGRlZXBcbiAgICAgICAgbGV0IG5hbWVzcGFjZSA9IG5hbWVzcGFjZXMuZ2V0KGRlcmVmZXJlbmNlLm9iamVjdC5uYW1lKTtcbiAgICAgICAgY29uc3QgbmFtZXBhdGggPSBbZGVyZWZlcmVuY2Uub2JqZWN0Lm5hbWVdO1xuICAgICAgICAvLyB3aGlsZSBwcm9wZXJ0eSBpcyBuYW1lc3BhY2UgYW5kIHBhcmVudCBpcyBtZW1iZXIgZXhwcmVzc2lvbiwga2VlcCB2YWxpZGF0aW5nXG4gICAgICAgIHdoaWxlIChuYW1lc3BhY2UgaW5zdGFuY2VvZiBFeHBvcnRNYXAgJiYgZGVyZWZlcmVuY2UudHlwZSA9PT0gJ01lbWJlckV4cHJlc3Npb24nKSB7XG4gICAgICAgICAgLy8gaWdub3JlIGNvbXB1dGVkIHBhcnRzIGZvciBub3dcbiAgICAgICAgICBpZiAoZGVyZWZlcmVuY2UuY29tcHV0ZWQpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgICBjb25zdCBtZXRhZGF0YSA9IG5hbWVzcGFjZS5nZXQoZGVyZWZlcmVuY2UucHJvcGVydHkubmFtZSk7XG5cbiAgICAgICAgICBpZiAoIW1ldGFkYXRhKSB7IGJyZWFrOyB9XG4gICAgICAgICAgY29uc3QgZGVwcmVjYXRpb24gPSBnZXREZXByZWNhdGlvbihtZXRhZGF0YSk7XG5cbiAgICAgICAgICBpZiAoZGVwcmVjYXRpb24pIHtcbiAgICAgICAgICAgIGNvbnRleHQucmVwb3J0KHsgbm9kZTogZGVyZWZlcmVuY2UucHJvcGVydHksIG1lc3NhZ2U6IG1lc3NhZ2UoZGVwcmVjYXRpb24pIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHN0YXNoIGFuZCBwb3BcbiAgICAgICAgICBuYW1lcGF0aC5wdXNoKGRlcmVmZXJlbmNlLnByb3BlcnR5Lm5hbWUpO1xuICAgICAgICAgIG5hbWVzcGFjZSA9IG1ldGFkYXRhLm5hbWVzcGFjZTtcbiAgICAgICAgICBkZXJlZmVyZW5jZSA9IGRlcmVmZXJlbmNlLnBhcmVudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuICB9LFxufTtcbiJdfQ==