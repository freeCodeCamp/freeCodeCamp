'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _has = require('has');

var _has2 = _interopRequireDefault(_has);

var _resolve = require('eslint-module-utils/resolve');

var _resolve2 = _interopRequireDefault(_resolve);

var _importType = require('../core/importType');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const enumValues = { enum: ['always', 'never'] };
const patternProperties = {
  type: 'object',
  patternProperties: { '.*': enumValues }
};

module.exports = {
  meta: {
    docs: {},

    schema: {
      anyOf: [{
        type: 'array',
        items: [enumValues],
        additionalItems: false
      }, {
        type: 'array',
        items: [patternProperties],
        additionalItems: false
      }, {
        type: 'array',
        items: [enumValues, patternProperties],
        additionalItems: false
      }]
    }
  },

  create: function (context) {
    const configuration = context.options[0] || 'never';
    const defaultConfig = typeof configuration === 'string' ? configuration : null;
    const modifiers = Object.assign({}, typeof configuration === 'object' ? configuration : context.options[1]);

    function isUseOfExtensionRequired(extension) {
      if (!(0, _has2.default)(modifiers, extension)) {
        modifiers[extension] = defaultConfig;
      }
      return modifiers[extension] === 'always';
    }

    function isUseOfExtensionForbidden(extension) {
      if (!(0, _has2.default)(modifiers, extension)) {
        modifiers[extension] = defaultConfig;
      }
      return modifiers[extension] === 'never';
    }

    function isResolvableWithoutExtension(file) {
      const extension = _path2.default.extname(file);
      const fileWithoutExtension = file.slice(0, -extension.length);
      const resolvedFileWithoutExtension = (0, _resolve2.default)(fileWithoutExtension, context);

      return resolvedFileWithoutExtension === (0, _resolve2.default)(file, context);
    }

    function checkFileExtension(node) {
      const source = node.source;

      const importPath = source.value;

      // don't enforce anything on builtins
      if ((0, _importType.isBuiltIn)(importPath, context.settings)) return;

      const resolvedPath = (0, _resolve2.default)(importPath, context);

      // get extension from resolved path, if possible.
      // for unresolved, use source value.
      const extension = _path2.default.extname(resolvedPath || importPath).substring(1);

      if (!extension || !importPath.endsWith(extension)) {
        if (isUseOfExtensionRequired(extension) && !isUseOfExtensionForbidden(extension)) {
          context.report({
            node: source,
            message: `Missing file extension ${ extension ? `"${ extension }" ` : '' }for "${ importPath }"`
          });
        }
      } else if (extension) {
        if (isUseOfExtensionForbidden(extension) && isResolvableWithoutExtension(importPath)) {
          context.report({
            node: source,
            message: `Unexpected use of file extension "${ extension }" for "${ importPath }"`
          });
        }
      }
    }

    return {
      ImportDeclaration: checkFileExtension
    };
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2V4dGVuc2lvbnMuanMiXSwibmFtZXMiOlsiZW51bVZhbHVlcyIsImVudW0iLCJwYXR0ZXJuUHJvcGVydGllcyIsInR5cGUiLCJtb2R1bGUiLCJleHBvcnRzIiwibWV0YSIsImRvY3MiLCJzY2hlbWEiLCJhbnlPZiIsIml0ZW1zIiwiYWRkaXRpb25hbEl0ZW1zIiwiY3JlYXRlIiwiY29udGV4dCIsImNvbmZpZ3VyYXRpb24iLCJvcHRpb25zIiwiZGVmYXVsdENvbmZpZyIsIm1vZGlmaWVycyIsIk9iamVjdCIsImFzc2lnbiIsImlzVXNlT2ZFeHRlbnNpb25SZXF1aXJlZCIsImV4dGVuc2lvbiIsImlzVXNlT2ZFeHRlbnNpb25Gb3JiaWRkZW4iLCJpc1Jlc29sdmFibGVXaXRob3V0RXh0ZW5zaW9uIiwiZmlsZSIsImV4dG5hbWUiLCJmaWxlV2l0aG91dEV4dGVuc2lvbiIsInNsaWNlIiwibGVuZ3RoIiwicmVzb2x2ZWRGaWxlV2l0aG91dEV4dGVuc2lvbiIsImNoZWNrRmlsZUV4dGVuc2lvbiIsIm5vZGUiLCJzb3VyY2UiLCJpbXBvcnRQYXRoIiwidmFsdWUiLCJzZXR0aW5ncyIsInJlc29sdmVkUGF0aCIsInN1YnN0cmluZyIsImVuZHNXaXRoIiwicmVwb3J0IiwibWVzc2FnZSIsIkltcG9ydERlY2xhcmF0aW9uIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUEsTUFBTUEsYUFBYSxFQUFFQyxNQUFNLENBQUUsUUFBRixFQUFZLE9BQVosQ0FBUixFQUFuQjtBQUNBLE1BQU1DLG9CQUFvQjtBQUN4QkMsUUFBTSxRQURrQjtBQUV4QkQscUJBQW1CLEVBQUUsTUFBTUYsVUFBUjtBQUZLLENBQTFCOztBQUtBSSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLFFBQU07QUFDSkMsVUFBTSxFQURGOztBQUdKQyxZQUFRO0FBQ05DLGFBQU8sQ0FDTDtBQUNFTixjQUFNLE9BRFI7QUFFRU8sZUFBTyxDQUFDVixVQUFELENBRlQ7QUFHRVcseUJBQWlCO0FBSG5CLE9BREssRUFNTDtBQUNFUixjQUFNLE9BRFI7QUFFRU8sZUFBTyxDQUFDUixpQkFBRCxDQUZUO0FBR0VTLHlCQUFpQjtBQUhuQixPQU5LLEVBV0w7QUFDRVIsY0FBTSxPQURSO0FBRUVPLGVBQU8sQ0FDTFYsVUFESyxFQUVMRSxpQkFGSyxDQUZUO0FBTUVTLHlCQUFpQjtBQU5uQixPQVhLO0FBREQ7QUFISixHQURTOztBQTRCZkMsVUFBUSxVQUFVQyxPQUFWLEVBQW1CO0FBQ3pCLFVBQU1DLGdCQUFnQkQsUUFBUUUsT0FBUixDQUFnQixDQUFoQixLQUFzQixPQUE1QztBQUNBLFVBQU1DLGdCQUFnQixPQUFPRixhQUFQLEtBQXlCLFFBQXpCLEdBQW9DQSxhQUFwQyxHQUFvRCxJQUExRTtBQUNBLFVBQU1HLFlBQVlDLE9BQU9DLE1BQVAsQ0FDaEIsRUFEZ0IsRUFFaEIsT0FBT0wsYUFBUCxLQUF5QixRQUF6QixHQUFvQ0EsYUFBcEMsR0FBb0RELFFBQVFFLE9BQVIsQ0FBZ0IsQ0FBaEIsQ0FGcEMsQ0FBbEI7O0FBS0EsYUFBU0ssd0JBQVQsQ0FBa0NDLFNBQWxDLEVBQTZDO0FBQzNDLFVBQUksQ0FBQyxtQkFBSUosU0FBSixFQUFlSSxTQUFmLENBQUwsRUFBZ0M7QUFBRUosa0JBQVVJLFNBQVYsSUFBdUJMLGFBQXZCO0FBQXNDO0FBQ3hFLGFBQU9DLFVBQVVJLFNBQVYsTUFBeUIsUUFBaEM7QUFDRDs7QUFFRCxhQUFTQyx5QkFBVCxDQUFtQ0QsU0FBbkMsRUFBOEM7QUFDNUMsVUFBSSxDQUFDLG1CQUFJSixTQUFKLEVBQWVJLFNBQWYsQ0FBTCxFQUFnQztBQUFFSixrQkFBVUksU0FBVixJQUF1QkwsYUFBdkI7QUFBc0M7QUFDeEUsYUFBT0MsVUFBVUksU0FBVixNQUF5QixPQUFoQztBQUNEOztBQUVELGFBQVNFLDRCQUFULENBQXNDQyxJQUF0QyxFQUE0QztBQUMxQyxZQUFNSCxZQUFZLGVBQUtJLE9BQUwsQ0FBYUQsSUFBYixDQUFsQjtBQUNBLFlBQU1FLHVCQUF1QkYsS0FBS0csS0FBTCxDQUFXLENBQVgsRUFBYyxDQUFDTixVQUFVTyxNQUF6QixDQUE3QjtBQUNBLFlBQU1DLCtCQUErQix1QkFBUUgsb0JBQVIsRUFBOEJiLE9BQTlCLENBQXJDOztBQUVBLGFBQU9nQixpQ0FBaUMsdUJBQVFMLElBQVIsRUFBY1gsT0FBZCxDQUF4QztBQUNEOztBQUVELGFBQVNpQixrQkFBVCxDQUE0QkMsSUFBNUIsRUFBa0M7QUFBQSxZQUN4QkMsTUFEd0IsR0FDYkQsSUFEYSxDQUN4QkMsTUFEd0I7O0FBRWhDLFlBQU1DLGFBQWFELE9BQU9FLEtBQTFCOztBQUVBO0FBQ0EsVUFBSSwyQkFBVUQsVUFBVixFQUFzQnBCLFFBQVFzQixRQUE5QixDQUFKLEVBQTZDOztBQUU3QyxZQUFNQyxlQUFlLHVCQUFRSCxVQUFSLEVBQW9CcEIsT0FBcEIsQ0FBckI7O0FBRUE7QUFDQTtBQUNBLFlBQU1RLFlBQVksZUFBS0ksT0FBTCxDQUFhVyxnQkFBZ0JILFVBQTdCLEVBQXlDSSxTQUF6QyxDQUFtRCxDQUFuRCxDQUFsQjs7QUFFQSxVQUFJLENBQUNoQixTQUFELElBQWMsQ0FBQ1ksV0FBV0ssUUFBWCxDQUFvQmpCLFNBQXBCLENBQW5CLEVBQW1EO0FBQ2pELFlBQUlELHlCQUF5QkMsU0FBekIsS0FBdUMsQ0FBQ0MsMEJBQTBCRCxTQUExQixDQUE1QyxFQUFrRjtBQUNoRlIsa0JBQVEwQixNQUFSLENBQWU7QUFDYlIsa0JBQU1DLE1BRE87QUFFYlEscUJBQ0csMkJBQXlCbkIsWUFBYSxLQUFHQSxTQUFVLEtBQTFCLEdBQWdDLEVBQUcsVUFBT1ksVUFBVztBQUhwRSxXQUFmO0FBS0Q7QUFDRixPQVJELE1BUU8sSUFBSVosU0FBSixFQUFlO0FBQ3BCLFlBQUlDLDBCQUEwQkQsU0FBMUIsS0FBd0NFLDZCQUE2QlUsVUFBN0IsQ0FBNUMsRUFBc0Y7QUFDcEZwQixrQkFBUTBCLE1BQVIsQ0FBZTtBQUNiUixrQkFBTUMsTUFETztBQUViUSxxQkFBVSxzQ0FBb0NuQixTQUFVLFlBQVNZLFVBQVc7QUFGL0QsV0FBZjtBQUlEO0FBQ0Y7QUFDRjs7QUFFRCxXQUFPO0FBQ0xRLHlCQUFtQlg7QUFEZCxLQUFQO0FBR0Q7QUF4RmMsQ0FBakIiLCJmaWxlIjoicnVsZXMvZXh0ZW5zaW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgaGFzIGZyb20gJ2hhcydcblxuaW1wb3J0IHJlc29sdmUgZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy9yZXNvbHZlJ1xuaW1wb3J0IHsgaXNCdWlsdEluIH0gZnJvbSAnLi4vY29yZS9pbXBvcnRUeXBlJ1xuXG5jb25zdCBlbnVtVmFsdWVzID0geyBlbnVtOiBbICdhbHdheXMnLCAnbmV2ZXInIF0gfVxuY29uc3QgcGF0dGVyblByb3BlcnRpZXMgPSB7XG4gIHR5cGU6ICdvYmplY3QnLFxuICBwYXR0ZXJuUHJvcGVydGllczogeyAnLionOiBlbnVtVmFsdWVzIH0sXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtZXRhOiB7XG4gICAgZG9jczoge30sXG5cbiAgICBzY2hlbWE6IHtcbiAgICAgIGFueU9mOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgIGl0ZW1zOiBbZW51bVZhbHVlc10sXG4gICAgICAgICAgYWRkaXRpb25hbEl0ZW1zOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgaXRlbXM6IFtwYXR0ZXJuUHJvcGVydGllc10sXG4gICAgICAgICAgYWRkaXRpb25hbEl0ZW1zOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIGVudW1WYWx1ZXMsXG4gICAgICAgICAgICBwYXR0ZXJuUHJvcGVydGllcyxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGFkZGl0aW9uYWxJdGVtczogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG5cbiAgY3JlYXRlOiBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBjb250ZXh0Lm9wdGlvbnNbMF0gfHwgJ25ldmVyJ1xuICAgIGNvbnN0IGRlZmF1bHRDb25maWcgPSB0eXBlb2YgY29uZmlndXJhdGlvbiA9PT0gJ3N0cmluZycgPyBjb25maWd1cmF0aW9uIDogbnVsbFxuICAgIGNvbnN0IG1vZGlmaWVycyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIHR5cGVvZiBjb25maWd1cmF0aW9uID09PSAnb2JqZWN0JyA/IGNvbmZpZ3VyYXRpb24gOiBjb250ZXh0Lm9wdGlvbnNbMV1cbiAgICApXG5cbiAgICBmdW5jdGlvbiBpc1VzZU9mRXh0ZW5zaW9uUmVxdWlyZWQoZXh0ZW5zaW9uKSB7XG4gICAgICBpZiAoIWhhcyhtb2RpZmllcnMsIGV4dGVuc2lvbikpIHsgbW9kaWZpZXJzW2V4dGVuc2lvbl0gPSBkZWZhdWx0Q29uZmlnIH1cbiAgICAgIHJldHVybiBtb2RpZmllcnNbZXh0ZW5zaW9uXSA9PT0gJ2Fsd2F5cydcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1VzZU9mRXh0ZW5zaW9uRm9yYmlkZGVuKGV4dGVuc2lvbikge1xuICAgICAgaWYgKCFoYXMobW9kaWZpZXJzLCBleHRlbnNpb24pKSB7IG1vZGlmaWVyc1tleHRlbnNpb25dID0gZGVmYXVsdENvbmZpZyB9XG4gICAgICByZXR1cm4gbW9kaWZpZXJzW2V4dGVuc2lvbl0gPT09ICduZXZlcidcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1Jlc29sdmFibGVXaXRob3V0RXh0ZW5zaW9uKGZpbGUpIHtcbiAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHBhdGguZXh0bmFtZShmaWxlKVxuICAgICAgY29uc3QgZmlsZVdpdGhvdXRFeHRlbnNpb24gPSBmaWxlLnNsaWNlKDAsIC1leHRlbnNpb24ubGVuZ3RoKVxuICAgICAgY29uc3QgcmVzb2x2ZWRGaWxlV2l0aG91dEV4dGVuc2lvbiA9IHJlc29sdmUoZmlsZVdpdGhvdXRFeHRlbnNpb24sIGNvbnRleHQpXG5cbiAgICAgIHJldHVybiByZXNvbHZlZEZpbGVXaXRob3V0RXh0ZW5zaW9uID09PSByZXNvbHZlKGZpbGUsIGNvbnRleHQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tGaWxlRXh0ZW5zaW9uKG5vZGUpIHtcbiAgICAgIGNvbnN0IHsgc291cmNlIH0gPSBub2RlXG4gICAgICBjb25zdCBpbXBvcnRQYXRoID0gc291cmNlLnZhbHVlXG5cbiAgICAgIC8vIGRvbid0IGVuZm9yY2UgYW55dGhpbmcgb24gYnVpbHRpbnNcbiAgICAgIGlmIChpc0J1aWx0SW4oaW1wb3J0UGF0aCwgY29udGV4dC5zZXR0aW5ncykpIHJldHVyblxuXG4gICAgICBjb25zdCByZXNvbHZlZFBhdGggPSByZXNvbHZlKGltcG9ydFBhdGgsIGNvbnRleHQpXG5cbiAgICAgIC8vIGdldCBleHRlbnNpb24gZnJvbSByZXNvbHZlZCBwYXRoLCBpZiBwb3NzaWJsZS5cbiAgICAgIC8vIGZvciB1bnJlc29sdmVkLCB1c2Ugc291cmNlIHZhbHVlLlxuICAgICAgY29uc3QgZXh0ZW5zaW9uID0gcGF0aC5leHRuYW1lKHJlc29sdmVkUGF0aCB8fCBpbXBvcnRQYXRoKS5zdWJzdHJpbmcoMSlcblxuICAgICAgaWYgKCFleHRlbnNpb24gfHwgIWltcG9ydFBhdGguZW5kc1dpdGgoZXh0ZW5zaW9uKSkge1xuICAgICAgICBpZiAoaXNVc2VPZkV4dGVuc2lvblJlcXVpcmVkKGV4dGVuc2lvbikgJiYgIWlzVXNlT2ZFeHRlbnNpb25Gb3JiaWRkZW4oZXh0ZW5zaW9uKSkge1xuICAgICAgICAgIGNvbnRleHQucmVwb3J0KHtcbiAgICAgICAgICAgIG5vZGU6IHNvdXJjZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICAgIGBNaXNzaW5nIGZpbGUgZXh0ZW5zaW9uICR7ZXh0ZW5zaW9uID8gYFwiJHtleHRlbnNpb259XCIgYCA6ICcnfWZvciBcIiR7aW1wb3J0UGF0aH1cImAsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChleHRlbnNpb24pIHtcbiAgICAgICAgaWYgKGlzVXNlT2ZFeHRlbnNpb25Gb3JiaWRkZW4oZXh0ZW5zaW9uKSAmJiBpc1Jlc29sdmFibGVXaXRob3V0RXh0ZW5zaW9uKGltcG9ydFBhdGgpKSB7XG4gICAgICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICAgICAgbm9kZTogc291cmNlLFxuICAgICAgICAgICAgbWVzc2FnZTogYFVuZXhwZWN0ZWQgdXNlIG9mIGZpbGUgZXh0ZW5zaW9uIFwiJHtleHRlbnNpb259XCIgZm9yIFwiJHtpbXBvcnRQYXRofVwiYCxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIEltcG9ydERlY2xhcmF0aW9uOiBjaGVja0ZpbGVFeHRlbnNpb24sXG4gICAgfVxuICB9LFxufVxuIl19