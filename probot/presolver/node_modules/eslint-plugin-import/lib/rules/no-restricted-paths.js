'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _containsPath = require('contains-path');

var _containsPath2 = _interopRequireDefault(_containsPath);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _resolve = require('eslint-module-utils/resolve');

var _resolve2 = _interopRequireDefault(_resolve);

var _staticRequire = require('../core/staticRequire');

var _staticRequire2 = _interopRequireDefault(_staticRequire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  meta: {
    docs: {},

    schema: [{
      type: 'object',
      properties: {
        zones: {
          type: 'array',
          minItems: 1,
          items: {
            type: 'object',
            properties: {
              target: { type: 'string' },
              from: { type: 'string' }
            },
            additionalProperties: false
          }
        },
        basePath: { type: 'string' }
      },
      additionalProperties: false
    }]
  },

  create: function noRestrictedPaths(context) {
    const options = context.options[0] || {};
    const restrictedPaths = options.zones || [];
    const basePath = options.basePath || process.cwd();
    const currentFilename = context.getFilename();
    const matchingZones = restrictedPaths.filter(zone => {
      const targetPath = _path2.default.resolve(basePath, zone.target);

      return (0, _containsPath2.default)(currentFilename, targetPath);
    });

    function checkForRestrictedImportPath(importPath, node) {
      const absoluteImportPath = (0, _resolve2.default)(importPath, context);

      if (!absoluteImportPath) {
        return;
      }

      matchingZones.forEach(zone => {
        const absoluteFrom = _path2.default.resolve(basePath, zone.from);

        if ((0, _containsPath2.default)(absoluteImportPath, absoluteFrom)) {
          context.report({
            node,
            message: `Unexpected path "${ importPath }" imported in restricted zone.`
          });
        }
      });
    }

    return {
      ImportDeclaration(node) {
        checkForRestrictedImportPath(node.source.value, node.source);
      },
      CallExpression(node) {
        if ((0, _staticRequire2.default)(node)) {
          var _node$arguments = _slicedToArray(node.arguments, 1);

          const firstArgument = _node$arguments[0];


          checkForRestrictedImportPath(firstArgument.value, firstArgument);
        }
      }
    };
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25vLXJlc3RyaWN0ZWQtcGF0aHMuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIm1ldGEiLCJkb2NzIiwic2NoZW1hIiwidHlwZSIsInByb3BlcnRpZXMiLCJ6b25lcyIsIm1pbkl0ZW1zIiwiaXRlbXMiLCJ0YXJnZXQiLCJmcm9tIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJiYXNlUGF0aCIsImNyZWF0ZSIsIm5vUmVzdHJpY3RlZFBhdGhzIiwiY29udGV4dCIsIm9wdGlvbnMiLCJyZXN0cmljdGVkUGF0aHMiLCJwcm9jZXNzIiwiY3dkIiwiY3VycmVudEZpbGVuYW1lIiwiZ2V0RmlsZW5hbWUiLCJtYXRjaGluZ1pvbmVzIiwiZmlsdGVyIiwiem9uZSIsInRhcmdldFBhdGgiLCJyZXNvbHZlIiwiY2hlY2tGb3JSZXN0cmljdGVkSW1wb3J0UGF0aCIsImltcG9ydFBhdGgiLCJub2RlIiwiYWJzb2x1dGVJbXBvcnRQYXRoIiwiZm9yRWFjaCIsImFic29sdXRlRnJvbSIsInJlcG9ydCIsIm1lc3NhZ2UiLCJJbXBvcnREZWNsYXJhdGlvbiIsInNvdXJjZSIsInZhbHVlIiwiQ2FsbEV4cHJlc3Npb24iLCJhcmd1bWVudHMiLCJmaXJzdEFyZ3VtZW50Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBQSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLFFBQU07QUFDSkMsVUFBTSxFQURGOztBQUdKQyxZQUFRLENBQ047QUFDRUMsWUFBTSxRQURSO0FBRUVDLGtCQUFZO0FBQ1ZDLGVBQU87QUFDTEYsZ0JBQU0sT0FERDtBQUVMRyxvQkFBVSxDQUZMO0FBR0xDLGlCQUFPO0FBQ0xKLGtCQUFNLFFBREQ7QUFFTEMsd0JBQVk7QUFDVkksc0JBQVEsRUFBRUwsTUFBTSxRQUFSLEVBREU7QUFFVk0sb0JBQU0sRUFBRU4sTUFBTSxRQUFSO0FBRkksYUFGUDtBQU1MTyxrQ0FBc0I7QUFOakI7QUFIRixTQURHO0FBYVZDLGtCQUFVLEVBQUVSLE1BQU0sUUFBUjtBQWJBLE9BRmQ7QUFpQkVPLDRCQUFzQjtBQWpCeEIsS0FETTtBQUhKLEdBRFM7O0FBMkJmRSxVQUFRLFNBQVNDLGlCQUFULENBQTJCQyxPQUEzQixFQUFvQztBQUMxQyxVQUFNQyxVQUFVRCxRQUFRQyxPQUFSLENBQWdCLENBQWhCLEtBQXNCLEVBQXRDO0FBQ0EsVUFBTUMsa0JBQWtCRCxRQUFRVixLQUFSLElBQWlCLEVBQXpDO0FBQ0EsVUFBTU0sV0FBV0ksUUFBUUosUUFBUixJQUFvQk0sUUFBUUMsR0FBUixFQUFyQztBQUNBLFVBQU1DLGtCQUFrQkwsUUFBUU0sV0FBUixFQUF4QjtBQUNBLFVBQU1DLGdCQUFnQkwsZ0JBQWdCTSxNQUFoQixDQUF3QkMsSUFBRCxJQUFVO0FBQ3JELFlBQU1DLGFBQWEsZUFBS0MsT0FBTCxDQUFhZCxRQUFiLEVBQXVCWSxLQUFLZixNQUE1QixDQUFuQjs7QUFFQSxhQUFPLDRCQUFhVyxlQUFiLEVBQThCSyxVQUE5QixDQUFQO0FBQ0QsS0FKcUIsQ0FBdEI7O0FBTUEsYUFBU0UsNEJBQVQsQ0FBc0NDLFVBQXRDLEVBQWtEQyxJQUFsRCxFQUF3RDtBQUNwRCxZQUFNQyxxQkFBcUIsdUJBQVFGLFVBQVIsRUFBb0JiLE9BQXBCLENBQTNCOztBQUVBLFVBQUksQ0FBQ2Usa0JBQUwsRUFBeUI7QUFDdkI7QUFDRDs7QUFFRFIsb0JBQWNTLE9BQWQsQ0FBdUJQLElBQUQsSUFBVTtBQUM5QixjQUFNUSxlQUFlLGVBQUtOLE9BQUwsQ0FBYWQsUUFBYixFQUF1QlksS0FBS2QsSUFBNUIsQ0FBckI7O0FBRUEsWUFBSSw0QkFBYW9CLGtCQUFiLEVBQWlDRSxZQUFqQyxDQUFKLEVBQW9EO0FBQ2xEakIsa0JBQVFrQixNQUFSLENBQWU7QUFDYkosZ0JBRGE7QUFFYksscUJBQVUscUJBQW1CTixVQUFXO0FBRjNCLFdBQWY7QUFJRDtBQUNGLE9BVEQ7QUFVSDs7QUFFRCxXQUFPO0FBQ0xPLHdCQUFrQk4sSUFBbEIsRUFBd0I7QUFDdEJGLHFDQUE2QkUsS0FBS08sTUFBTCxDQUFZQyxLQUF6QyxFQUFnRFIsS0FBS08sTUFBckQ7QUFDRCxPQUhJO0FBSUxFLHFCQUFlVCxJQUFmLEVBQXFCO0FBQ25CLFlBQUksNkJBQWdCQSxJQUFoQixDQUFKLEVBQTJCO0FBQUEsK0NBQ0NBLEtBQUtVLFNBRE47O0FBQUEsZ0JBQ2pCQyxhQURpQjs7O0FBR3pCYix1Q0FBNkJhLGNBQWNILEtBQTNDLEVBQWtERyxhQUFsRDtBQUNEO0FBQ0Y7QUFWSSxLQUFQO0FBWUQ7QUFyRWMsQ0FBakIiLCJmaWxlIjoicnVsZXMvbm8tcmVzdHJpY3RlZC1wYXRocy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb250YWluc1BhdGggZnJvbSAnY29udGFpbnMtcGF0aCdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbmltcG9ydCByZXNvbHZlIGZyb20gJ2VzbGludC1tb2R1bGUtdXRpbHMvcmVzb2x2ZSdcbmltcG9ydCBpc1N0YXRpY1JlcXVpcmUgZnJvbSAnLi4vY29yZS9zdGF0aWNSZXF1aXJlJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWV0YToge1xuICAgIGRvY3M6IHt9LFxuXG4gICAgc2NoZW1hOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgem9uZXM6IHtcbiAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICBtaW5JdGVtczogMSxcbiAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICAgICAgICAgICAgZnJvbTogeyB0eXBlOiAnc3RyaW5nJyB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYmFzZVBhdGg6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXG4gIGNyZWF0ZTogZnVuY3Rpb24gbm9SZXN0cmljdGVkUGF0aHMoY29udGV4dCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBjb250ZXh0Lm9wdGlvbnNbMF0gfHwge31cbiAgICBjb25zdCByZXN0cmljdGVkUGF0aHMgPSBvcHRpb25zLnpvbmVzIHx8IFtdXG4gICAgY29uc3QgYmFzZVBhdGggPSBvcHRpb25zLmJhc2VQYXRoIHx8IHByb2Nlc3MuY3dkKClcbiAgICBjb25zdCBjdXJyZW50RmlsZW5hbWUgPSBjb250ZXh0LmdldEZpbGVuYW1lKClcbiAgICBjb25zdCBtYXRjaGluZ1pvbmVzID0gcmVzdHJpY3RlZFBhdGhzLmZpbHRlcigoem9uZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0UGF0aCA9IHBhdGgucmVzb2x2ZShiYXNlUGF0aCwgem9uZS50YXJnZXQpXG5cbiAgICAgIHJldHVybiBjb250YWluc1BhdGgoY3VycmVudEZpbGVuYW1lLCB0YXJnZXRQYXRoKVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBjaGVja0ZvclJlc3RyaWN0ZWRJbXBvcnRQYXRoKGltcG9ydFBhdGgsIG5vZGUpIHtcbiAgICAgICAgY29uc3QgYWJzb2x1dGVJbXBvcnRQYXRoID0gcmVzb2x2ZShpbXBvcnRQYXRoLCBjb250ZXh0KVxuXG4gICAgICAgIGlmICghYWJzb2x1dGVJbXBvcnRQYXRoKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBtYXRjaGluZ1pvbmVzLmZvckVhY2goKHpvbmUpID0+IHtcbiAgICAgICAgICBjb25zdCBhYnNvbHV0ZUZyb20gPSBwYXRoLnJlc29sdmUoYmFzZVBhdGgsIHpvbmUuZnJvbSlcblxuICAgICAgICAgIGlmIChjb250YWluc1BhdGgoYWJzb2x1dGVJbXBvcnRQYXRoLCBhYnNvbHV0ZUZyb20pKSB7XG4gICAgICAgICAgICBjb250ZXh0LnJlcG9ydCh7XG4gICAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGBVbmV4cGVjdGVkIHBhdGggXCIke2ltcG9ydFBhdGh9XCIgaW1wb3J0ZWQgaW4gcmVzdHJpY3RlZCB6b25lLmAsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgSW1wb3J0RGVjbGFyYXRpb24obm9kZSkge1xuICAgICAgICBjaGVja0ZvclJlc3RyaWN0ZWRJbXBvcnRQYXRoKG5vZGUuc291cmNlLnZhbHVlLCBub2RlLnNvdXJjZSlcbiAgICAgIH0sXG4gICAgICBDYWxsRXhwcmVzc2lvbihub2RlKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY1JlcXVpcmUobm9kZSkpIHtcbiAgICAgICAgICBjb25zdCBbIGZpcnN0QXJndW1lbnQgXSA9IG5vZGUuYXJndW1lbnRzXG5cbiAgICAgICAgICBjaGVja0ZvclJlc3RyaWN0ZWRJbXBvcnRQYXRoKGZpcnN0QXJndW1lbnQudmFsdWUsIGZpcnN0QXJndW1lbnQpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuICB9LFxufVxuIl19