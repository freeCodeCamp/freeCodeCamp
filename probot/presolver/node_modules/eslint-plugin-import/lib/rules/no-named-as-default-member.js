'use strict';

var _ExportMap = require('../ExportMap');

var _ExportMap2 = _interopRequireDefault(_ExportMap);

var _importDeclaration = require('../importDeclaration');

var _importDeclaration2 = _interopRequireDefault(_importDeclaration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * @fileoverview Rule to warn about potentially confused use of name exports
 * @author Desmond Brand
 * @copyright 2016 Desmond Brand. All rights reserved.
 * See LICENSE in root directory for full license.
 */
module.exports = {
  meta: {
    docs: {}
  },

  create: function (context) {

    const fileImports = new Map();
    const allPropertyLookups = new Map();

    function handleImportDefault(node) {
      const declaration = (0, _importDeclaration2.default)(context);
      const exportMap = _ExportMap2.default.get(declaration.source.value, context);
      if (exportMap == null) return;

      if (exportMap.errors.length) {
        exportMap.reportErrors(context, declaration);
        return;
      }

      fileImports.set(node.local.name, {
        exportMap,
        sourcePath: declaration.source.value
      });
    }

    function storePropertyLookup(objectName, propName, node) {
      const lookups = allPropertyLookups.get(objectName) || [];
      lookups.push({ node, propName });
      allPropertyLookups.set(objectName, lookups);
    }

    function handlePropLookup(node) {
      const objectName = node.object.name;
      const propName = node.property.name;
      storePropertyLookup(objectName, propName, node);
    }

    function handleDestructuringAssignment(node) {
      const isDestructure = node.id.type === 'ObjectPattern' && node.init != null && node.init.type === 'Identifier';
      if (!isDestructure) return;

      const objectName = node.init.name;
      for (const _ref of node.id.properties) {
        const key = _ref.key;

        if (key == null) continue; // true for rest properties
        storePropertyLookup(objectName, key.name, key);
      }
    }

    function handleProgramExit() {
      allPropertyLookups.forEach((lookups, objectName) => {
        const fileImport = fileImports.get(objectName);
        if (fileImport == null) return;

        for (const _ref2 of lookups) {
          const propName = _ref2.propName;
          const node = _ref2.node;

          // the default import can have a "default" property
          if (propName === 'default') continue;
          if (!fileImport.exportMap.namespace.has(propName)) continue;

          context.report({
            node,
            message: `Caution: \`${ objectName }\` also has a named export ` + `\`${ propName }\`. Check if you meant to write ` + `\`import {${ propName }} from '${ fileImport.sourcePath }'\` ` + 'instead.'
          });
        }
      });
    }

    return {
      'ImportDefaultSpecifier': handleImportDefault,
      'MemberExpression': handlePropLookup,
      'VariableDeclarator': handleDestructuringAssignment,
      'Program:exit': handleProgramExit
    };
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25vLW5hbWVkLWFzLWRlZmF1bHQtbWVtYmVyLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJtZXRhIiwiZG9jcyIsImNyZWF0ZSIsImNvbnRleHQiLCJmaWxlSW1wb3J0cyIsIk1hcCIsImFsbFByb3BlcnR5TG9va3VwcyIsImhhbmRsZUltcG9ydERlZmF1bHQiLCJub2RlIiwiZGVjbGFyYXRpb24iLCJleHBvcnRNYXAiLCJnZXQiLCJzb3VyY2UiLCJ2YWx1ZSIsImVycm9ycyIsImxlbmd0aCIsInJlcG9ydEVycm9ycyIsInNldCIsImxvY2FsIiwibmFtZSIsInNvdXJjZVBhdGgiLCJzdG9yZVByb3BlcnR5TG9va3VwIiwib2JqZWN0TmFtZSIsInByb3BOYW1lIiwibG9va3VwcyIsInB1c2giLCJoYW5kbGVQcm9wTG9va3VwIiwib2JqZWN0IiwicHJvcGVydHkiLCJoYW5kbGVEZXN0cnVjdHVyaW5nQXNzaWdubWVudCIsImlzRGVzdHJ1Y3R1cmUiLCJpZCIsInR5cGUiLCJpbml0IiwicHJvcGVydGllcyIsImtleSIsImhhbmRsZVByb2dyYW1FeGl0IiwiZm9yRWFjaCIsImZpbGVJbXBvcnQiLCJuYW1lc3BhY2UiLCJoYXMiLCJyZXBvcnQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOztBQU1BOzs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTs7QUFYQTs7Ozs7O0FBYUFBLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsUUFBTTtBQUNKQyxVQUFNO0FBREYsR0FEUzs7QUFLZkMsVUFBUSxVQUFTQyxPQUFULEVBQWtCOztBQUV4QixVQUFNQyxjQUFjLElBQUlDLEdBQUosRUFBcEI7QUFDQSxVQUFNQyxxQkFBcUIsSUFBSUQsR0FBSixFQUEzQjs7QUFFQSxhQUFTRSxtQkFBVCxDQUE2QkMsSUFBN0IsRUFBbUM7QUFDakMsWUFBTUMsY0FBYyxpQ0FBa0JOLE9BQWxCLENBQXBCO0FBQ0EsWUFBTU8sWUFBWSxvQkFBUUMsR0FBUixDQUFZRixZQUFZRyxNQUFaLENBQW1CQyxLQUEvQixFQUFzQ1YsT0FBdEMsQ0FBbEI7QUFDQSxVQUFJTyxhQUFhLElBQWpCLEVBQXVCOztBQUV2QixVQUFJQSxVQUFVSSxNQUFWLENBQWlCQyxNQUFyQixFQUE2QjtBQUMzQkwsa0JBQVVNLFlBQVYsQ0FBdUJiLE9BQXZCLEVBQWdDTSxXQUFoQztBQUNBO0FBQ0Q7O0FBRURMLGtCQUFZYSxHQUFaLENBQWdCVCxLQUFLVSxLQUFMLENBQVdDLElBQTNCLEVBQWlDO0FBQy9CVCxpQkFEK0I7QUFFL0JVLG9CQUFZWCxZQUFZRyxNQUFaLENBQW1CQztBQUZBLE9BQWpDO0FBSUQ7O0FBRUQsYUFBU1EsbUJBQVQsQ0FBNkJDLFVBQTdCLEVBQXlDQyxRQUF6QyxFQUFtRGYsSUFBbkQsRUFBeUQ7QUFDdkQsWUFBTWdCLFVBQVVsQixtQkFBbUJLLEdBQW5CLENBQXVCVyxVQUF2QixLQUFzQyxFQUF0RDtBQUNBRSxjQUFRQyxJQUFSLENBQWEsRUFBQ2pCLElBQUQsRUFBT2UsUUFBUCxFQUFiO0FBQ0FqQix5QkFBbUJXLEdBQW5CLENBQXVCSyxVQUF2QixFQUFtQ0UsT0FBbkM7QUFDRDs7QUFFRCxhQUFTRSxnQkFBVCxDQUEwQmxCLElBQTFCLEVBQWdDO0FBQzlCLFlBQU1jLGFBQWFkLEtBQUttQixNQUFMLENBQVlSLElBQS9CO0FBQ0EsWUFBTUksV0FBV2YsS0FBS29CLFFBQUwsQ0FBY1QsSUFBL0I7QUFDQUUsMEJBQW9CQyxVQUFwQixFQUFnQ0MsUUFBaEMsRUFBMENmLElBQTFDO0FBQ0Q7O0FBRUQsYUFBU3FCLDZCQUFULENBQXVDckIsSUFBdkMsRUFBNkM7QUFDM0MsWUFBTXNCLGdCQUNKdEIsS0FBS3VCLEVBQUwsQ0FBUUMsSUFBUixLQUFpQixlQUFqQixJQUNBeEIsS0FBS3lCLElBQUwsSUFBYSxJQURiLElBRUF6QixLQUFLeUIsSUFBTCxDQUFVRCxJQUFWLEtBQW1CLFlBSHJCO0FBS0EsVUFBSSxDQUFDRixhQUFMLEVBQW9COztBQUVwQixZQUFNUixhQUFhZCxLQUFLeUIsSUFBTCxDQUFVZCxJQUE3QjtBQUNBLHlCQUFzQlgsS0FBS3VCLEVBQUwsQ0FBUUcsVUFBOUIsRUFBMEM7QUFBQSxjQUE3QkMsR0FBNkIsUUFBN0JBLEdBQTZCOztBQUN4QyxZQUFJQSxPQUFPLElBQVgsRUFBaUIsU0FEdUIsQ0FDYjtBQUMzQmQsNEJBQW9CQyxVQUFwQixFQUFnQ2EsSUFBSWhCLElBQXBDLEVBQTBDZ0IsR0FBMUM7QUFDRDtBQUNGOztBQUVELGFBQVNDLGlCQUFULEdBQTZCO0FBQzNCOUIseUJBQW1CK0IsT0FBbkIsQ0FBMkIsQ0FBQ2IsT0FBRCxFQUFVRixVQUFWLEtBQXlCO0FBQ2xELGNBQU1nQixhQUFhbEMsWUFBWU8sR0FBWixDQUFnQlcsVUFBaEIsQ0FBbkI7QUFDQSxZQUFJZ0IsY0FBYyxJQUFsQixFQUF3Qjs7QUFFeEIsNEJBQStCZCxPQUEvQixFQUF3QztBQUFBLGdCQUE1QkQsUUFBNEIsU0FBNUJBLFFBQTRCO0FBQUEsZ0JBQWxCZixJQUFrQixTQUFsQkEsSUFBa0I7O0FBQ3RDO0FBQ0EsY0FBSWUsYUFBYSxTQUFqQixFQUE0QjtBQUM1QixjQUFJLENBQUNlLFdBQVc1QixTQUFYLENBQXFCNkIsU0FBckIsQ0FBK0JDLEdBQS9CLENBQW1DakIsUUFBbkMsQ0FBTCxFQUFtRDs7QUFFbkRwQixrQkFBUXNDLE1BQVIsQ0FBZTtBQUNiakMsZ0JBRGE7QUFFYmtDLHFCQUNHLGVBQWFwQixVQUFXLDhCQUF6QixHQUNDLE1BQUlDLFFBQVMsbUNBRGQsR0FFQyxjQUFZQSxRQUFTLGFBQVVlLFdBQVdsQixVQUFXLE9BRnRELEdBR0E7QUFOVyxXQUFmO0FBU0Q7QUFDRixPQW5CRDtBQW9CRDs7QUFFRCxXQUFPO0FBQ0wsZ0NBQTBCYixtQkFEckI7QUFFTCwwQkFBb0JtQixnQkFGZjtBQUdMLDRCQUFzQkcsNkJBSGpCO0FBSUwsc0JBQWdCTztBQUpYLEtBQVA7QUFNRDtBQWxGYyxDQUFqQiIsImZpbGUiOiJydWxlcy9uby1uYW1lZC1hcy1kZWZhdWx0LW1lbWJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVvdmVydmlldyBSdWxlIHRvIHdhcm4gYWJvdXQgcG90ZW50aWFsbHkgY29uZnVzZWQgdXNlIG9mIG5hbWUgZXhwb3J0c1xuICogQGF1dGhvciBEZXNtb25kIEJyYW5kXG4gKiBAY29weXJpZ2h0IDIwMTYgRGVzbW9uZCBCcmFuZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFNlZSBMSUNFTlNFIGluIHJvb3QgZGlyZWN0b3J5IGZvciBmdWxsIGxpY2Vuc2UuXG4gKi9cbmltcG9ydCBFeHBvcnRzIGZyb20gJy4uL0V4cG9ydE1hcCdcbmltcG9ydCBpbXBvcnREZWNsYXJhdGlvbiBmcm9tICcuLi9pbXBvcnREZWNsYXJhdGlvbidcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFJ1bGUgRGVmaW5pdGlvblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1ldGE6IHtcbiAgICBkb2NzOiB7fSxcbiAgfSxcblxuICBjcmVhdGU6IGZ1bmN0aW9uKGNvbnRleHQpIHtcblxuICAgIGNvbnN0IGZpbGVJbXBvcnRzID0gbmV3IE1hcCgpXG4gICAgY29uc3QgYWxsUHJvcGVydHlMb29rdXBzID0gbmV3IE1hcCgpXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVJbXBvcnREZWZhdWx0KG5vZGUpIHtcbiAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gaW1wb3J0RGVjbGFyYXRpb24oY29udGV4dClcbiAgICAgIGNvbnN0IGV4cG9ydE1hcCA9IEV4cG9ydHMuZ2V0KGRlY2xhcmF0aW9uLnNvdXJjZS52YWx1ZSwgY29udGV4dClcbiAgICAgIGlmIChleHBvcnRNYXAgPT0gbnVsbCkgcmV0dXJuXG5cbiAgICAgIGlmIChleHBvcnRNYXAuZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICBleHBvcnRNYXAucmVwb3J0RXJyb3JzKGNvbnRleHQsIGRlY2xhcmF0aW9uKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgZmlsZUltcG9ydHMuc2V0KG5vZGUubG9jYWwubmFtZSwge1xuICAgICAgICBleHBvcnRNYXAsXG4gICAgICAgIHNvdXJjZVBhdGg6IGRlY2xhcmF0aW9uLnNvdXJjZS52YWx1ZSxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcmVQcm9wZXJ0eUxvb2t1cChvYmplY3ROYW1lLCBwcm9wTmFtZSwgbm9kZSkge1xuICAgICAgY29uc3QgbG9va3VwcyA9IGFsbFByb3BlcnR5TG9va3Vwcy5nZXQob2JqZWN0TmFtZSkgfHwgW11cbiAgICAgIGxvb2t1cHMucHVzaCh7bm9kZSwgcHJvcE5hbWV9KVxuICAgICAgYWxsUHJvcGVydHlMb29rdXBzLnNldChvYmplY3ROYW1lLCBsb29rdXBzKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVByb3BMb29rdXAobm9kZSkge1xuICAgICAgY29uc3Qgb2JqZWN0TmFtZSA9IG5vZGUub2JqZWN0Lm5hbWVcbiAgICAgIGNvbnN0IHByb3BOYW1lID0gbm9kZS5wcm9wZXJ0eS5uYW1lXG4gICAgICBzdG9yZVByb3BlcnR5TG9va3VwKG9iamVjdE5hbWUsIHByb3BOYW1lLCBub2RlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZURlc3RydWN0dXJpbmdBc3NpZ25tZW50KG5vZGUpIHtcbiAgICAgIGNvbnN0IGlzRGVzdHJ1Y3R1cmUgPSAoXG4gICAgICAgIG5vZGUuaWQudHlwZSA9PT0gJ09iamVjdFBhdHRlcm4nICYmXG4gICAgICAgIG5vZGUuaW5pdCAhPSBudWxsICYmXG4gICAgICAgIG5vZGUuaW5pdC50eXBlID09PSAnSWRlbnRpZmllcidcbiAgICAgIClcbiAgICAgIGlmICghaXNEZXN0cnVjdHVyZSkgcmV0dXJuXG5cbiAgICAgIGNvbnN0IG9iamVjdE5hbWUgPSBub2RlLmluaXQubmFtZVxuICAgICAgZm9yIChjb25zdCB7IGtleSB9IG9mIG5vZGUuaWQucHJvcGVydGllcykge1xuICAgICAgICBpZiAoa2V5ID09IG51bGwpIGNvbnRpbnVlICAvLyB0cnVlIGZvciByZXN0IHByb3BlcnRpZXNcbiAgICAgICAgc3RvcmVQcm9wZXJ0eUxvb2t1cChvYmplY3ROYW1lLCBrZXkubmFtZSwga2V5KVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVByb2dyYW1FeGl0KCkge1xuICAgICAgYWxsUHJvcGVydHlMb29rdXBzLmZvckVhY2goKGxvb2t1cHMsIG9iamVjdE5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZUltcG9ydCA9IGZpbGVJbXBvcnRzLmdldChvYmplY3ROYW1lKVxuICAgICAgICBpZiAoZmlsZUltcG9ydCA9PSBudWxsKSByZXR1cm5cblxuICAgICAgICBmb3IgKGNvbnN0IHtwcm9wTmFtZSwgbm9kZX0gb2YgbG9va3Vwcykge1xuICAgICAgICAgIC8vIHRoZSBkZWZhdWx0IGltcG9ydCBjYW4gaGF2ZSBhIFwiZGVmYXVsdFwiIHByb3BlcnR5XG4gICAgICAgICAgaWYgKHByb3BOYW1lID09PSAnZGVmYXVsdCcpIGNvbnRpbnVlXG4gICAgICAgICAgaWYgKCFmaWxlSW1wb3J0LmV4cG9ydE1hcC5uYW1lc3BhY2UuaGFzKHByb3BOYW1lKSkgY29udGludWVcblxuICAgICAgICAgIGNvbnRleHQucmVwb3J0KHtcbiAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICBtZXNzYWdlOiAoXG4gICAgICAgICAgICAgIGBDYXV0aW9uOiBcXGAke29iamVjdE5hbWV9XFxgIGFsc28gaGFzIGEgbmFtZWQgZXhwb3J0IGAgK1xuICAgICAgICAgICAgICBgXFxgJHtwcm9wTmFtZX1cXGAuIENoZWNrIGlmIHlvdSBtZWFudCB0byB3cml0ZSBgICtcbiAgICAgICAgICAgICAgYFxcYGltcG9ydCB7JHtwcm9wTmFtZX19IGZyb20gJyR7ZmlsZUltcG9ydC5zb3VyY2VQYXRofSdcXGAgYCArXG4gICAgICAgICAgICAgICdpbnN0ZWFkLidcbiAgICAgICAgICAgICksXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgJ0ltcG9ydERlZmF1bHRTcGVjaWZpZXInOiBoYW5kbGVJbXBvcnREZWZhdWx0LFxuICAgICAgJ01lbWJlckV4cHJlc3Npb24nOiBoYW5kbGVQcm9wTG9va3VwLFxuICAgICAgJ1ZhcmlhYmxlRGVjbGFyYXRvcic6IGhhbmRsZURlc3RydWN0dXJpbmdBc3NpZ25tZW50LFxuICAgICAgJ1Byb2dyYW06ZXhpdCc6IGhhbmRsZVByb2dyYW1FeGl0LFxuICAgIH1cbiAgfSxcbn1cbiJdfQ==