'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _minimatch = require('minimatch');

var _minimatch2 = _interopRequireDefault(_minimatch);

var _resolve = require('eslint-module-utils/resolve');

var _resolve2 = _interopRequireDefault(_resolve);

var _importType = require('../core/importType');

var _importType2 = _interopRequireDefault(_importType);

var _staticRequire = require('../core/staticRequire');

var _staticRequire2 = _interopRequireDefault(_staticRequire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  meta: {
    docs: {},

    schema: [{
      type: 'object',
      properties: {
        allow: {
          type: 'array',
          items: {
            type: 'string'
          }
        }
      },
      additionalProperties: false
    }]
  },

  create: function noReachingInside(context) {
    const options = context.options[0] || {};
    const allowRegexps = (options.allow || []).map(p => _minimatch2.default.makeRe(p));

    // test if reaching to this destination is allowed
    function reachingAllowed(importPath) {
      return allowRegexps.some(re => re.test(importPath));
    }

    // minimatch patterns are expected to use / path separators, like import
    // statements, so normalize paths to use the same
    function normalizeSep(somePath) {
      return somePath.split('\\').join('/');
    }

    // find a directory that is being reached into, but which shouldn't be
    function isReachViolation(importPath) {
      const steps = normalizeSep(importPath).split('/').reduce((acc, step) => {
        if (!step || step === '.') {
          return acc;
        } else if (step === '..') {
          return acc.slice(0, -1);
        } else {
          return acc.concat(step);
        }
      }, []);

      const nonScopeSteps = steps.filter(step => step.indexOf('@') !== 0);
      if (nonScopeSteps.length <= 1) return false;

      // before trying to resolve, see if the raw import (with relative
      // segments resolved) matches an allowed pattern
      const justSteps = steps.join('/');
      if (reachingAllowed(justSteps) || reachingAllowed(`/${ justSteps }`)) return false;

      // if the import statement doesn't match directly, try to match the
      // resolved path if the import is resolvable
      const resolved = (0, _resolve2.default)(importPath, context);
      if (!resolved || reachingAllowed(normalizeSep(resolved))) return false;

      // this import was not allowed by the allowed paths, and reaches
      // so it is a violation
      return true;
    }

    function checkImportForReaching(importPath, node) {
      const potentialViolationTypes = ['parent', 'index', 'sibling', 'external', 'internal'];
      if (potentialViolationTypes.indexOf((0, _importType2.default)(importPath, context)) !== -1 && isReachViolation(importPath)) {
        context.report({
          node,
          message: `Reaching to "${ importPath }" is not allowed.`
        });
      }
    }

    return {
      ImportDeclaration(node) {
        checkImportForReaching(node.source.value, node.source);
      },
      CallExpression(node) {
        if ((0, _staticRequire2.default)(node)) {
          var _node$arguments = _slicedToArray(node.arguments, 1);

          const firstArgument = _node$arguments[0];

          checkImportForReaching(firstArgument.value, firstArgument);
        }
      }
    };
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25vLWludGVybmFsLW1vZHVsZXMuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIm1ldGEiLCJkb2NzIiwic2NoZW1hIiwidHlwZSIsInByb3BlcnRpZXMiLCJhbGxvdyIsIml0ZW1zIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJjcmVhdGUiLCJub1JlYWNoaW5nSW5zaWRlIiwiY29udGV4dCIsIm9wdGlvbnMiLCJhbGxvd1JlZ2V4cHMiLCJtYXAiLCJwIiwibWFrZVJlIiwicmVhY2hpbmdBbGxvd2VkIiwiaW1wb3J0UGF0aCIsInNvbWUiLCJyZSIsInRlc3QiLCJub3JtYWxpemVTZXAiLCJzb21lUGF0aCIsInNwbGl0Iiwiam9pbiIsImlzUmVhY2hWaW9sYXRpb24iLCJzdGVwcyIsInJlZHVjZSIsImFjYyIsInN0ZXAiLCJzbGljZSIsImNvbmNhdCIsIm5vblNjb3BlU3RlcHMiLCJmaWx0ZXIiLCJpbmRleE9mIiwibGVuZ3RoIiwianVzdFN0ZXBzIiwicmVzb2x2ZWQiLCJjaGVja0ltcG9ydEZvclJlYWNoaW5nIiwibm9kZSIsInBvdGVudGlhbFZpb2xhdGlvblR5cGVzIiwicmVwb3J0IiwibWVzc2FnZSIsIkltcG9ydERlY2xhcmF0aW9uIiwic291cmNlIiwidmFsdWUiLCJDYWxsRXhwcmVzc2lvbiIsImFyZ3VtZW50cyIsImZpcnN0QXJndW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUFBLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsUUFBTTtBQUNKQyxVQUFNLEVBREY7O0FBR0pDLFlBQVEsQ0FDTjtBQUNFQyxZQUFNLFFBRFI7QUFFRUMsa0JBQVk7QUFDVkMsZUFBTztBQUNMRixnQkFBTSxPQUREO0FBRUxHLGlCQUFPO0FBQ0xILGtCQUFNO0FBREQ7QUFGRjtBQURHLE9BRmQ7QUFVRUksNEJBQXNCO0FBVnhCLEtBRE07QUFISixHQURTOztBQW9CZkMsVUFBUSxTQUFT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QUFDRDtBQUNGO0FBVEksS0FBUDtBQVdEO0FBMUZjLENBQWpCIiwiZmlsZSI6InJ1bGVzL25vLWludGVybmFsLW1vZHVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWluaW1hdGNoIGZyb20gJ21pbmltYXRjaCdcblxuaW1wb3J0IHJlc29sdmUgZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy9yZXNvbHZlJ1xuaW1wb3J0IGltcG9ydFR5cGUgZnJvbSAnLi4vY29yZS9pbXBvcnRUeXBlJ1xuaW1wb3J0IGlzU3RhdGljUmVxdWlyZSBmcm9tICcuLi9jb3JlL3N0YXRpY1JlcXVpcmUnXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtZXRhOiB7XG4gICAgZG9jczoge30sXG5cbiAgICBzY2hlbWE6IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICBhbGxvdzoge1xuICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5cbiAgY3JlYXRlOiBmdW5jdGlvbiBub1JlYWNoaW5nSW5zaWRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBvcHRpb25zID0gY29udGV4dC5vcHRpb25zWzBdIHx8IHt9XG4gICAgY29uc3QgYWxsb3dSZWdleHBzID0gKG9wdGlvbnMuYWxsb3cgfHwgW10pLm1hcChwID0+IG1pbmltYXRjaC5tYWtlUmUocCkpXG5cbiAgICAvLyB0ZXN0IGlmIHJlYWNoaW5nIHRvIHRoaXMgZGVzdGluYXRpb24gaXMgYWxsb3dlZFxuICAgIGZ1bmN0aW9uIHJlYWNoaW5nQWxsb3dlZChpbXBvcnRQYXRoKSB7XG4gICAgICByZXR1cm4gYWxsb3dSZWdleHBzLnNvbWUocmUgPT4gcmUudGVzdChpbXBvcnRQYXRoKSlcbiAgICB9XG5cbiAgICAvLyBtaW5pbWF0Y2ggcGF0dGVybnMgYXJlIGV4cGVjdGVkIHRvIHVzZSAvIHBhdGggc2VwYXJhdG9ycywgbGlrZSBpbXBvcnRcbiAgICAvLyBzdGF0ZW1lbnRzLCBzbyBub3JtYWxpemUgcGF0aHMgdG8gdXNlIHRoZSBzYW1lXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplU2VwKHNvbWVQYXRoKSB7XG4gICAgICByZXR1cm4gc29tZVBhdGguc3BsaXQoJ1xcXFwnKS5qb2luKCcvJylcbiAgICB9XG5cbiAgICAvLyBmaW5kIGEgZGlyZWN0b3J5IHRoYXQgaXMgYmVpbmcgcmVhY2hlZCBpbnRvLCBidXQgd2hpY2ggc2hvdWxkbid0IGJlXG4gICAgZnVuY3Rpb24gaXNSZWFjaFZpb2xhdGlvbihpbXBvcnRQYXRoKSB7XG4gICAgICBjb25zdCBzdGVwcyA9IG5vcm1hbGl6ZVNlcChpbXBvcnRQYXRoKVxuICAgICAgICAuc3BsaXQoJy8nKVxuICAgICAgICAucmVkdWNlKChhY2MsIHN0ZXApID0+IHtcbiAgICAgICAgICBpZiAoIXN0ZXAgfHwgc3RlcCA9PT0gJy4nKSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjXG4gICAgICAgICAgfSBlbHNlIGlmIChzdGVwID09PSAnLi4nKSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjLnNsaWNlKDAsIC0xKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjLmNvbmNhdChzdGVwKVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgW10pXG5cbiAgICAgIGNvbnN0IG5vblNjb3BlU3RlcHMgPSBzdGVwcy5maWx0ZXIoc3RlcCA9PiBzdGVwLmluZGV4T2YoJ0AnKSAhPT0gMClcbiAgICAgIGlmIChub25TY29wZVN0ZXBzLmxlbmd0aCA8PSAxKSByZXR1cm4gZmFsc2VcblxuICAgICAgLy8gYmVmb3JlIHRyeWluZyB0byByZXNvbHZlLCBzZWUgaWYgdGhlIHJhdyBpbXBvcnQgKHdpdGggcmVsYXRpdmVcbiAgICAgIC8vIHNlZ21lbnRzIHJlc29sdmVkKSBtYXRjaGVzIGFuIGFsbG93ZWQgcGF0dGVyblxuICAgICAgY29uc3QganVzdFN0ZXBzID0gc3RlcHMuam9pbignLycpXG4gICAgICBpZiAocmVhY2hpbmdBbGxvd2VkKGp1c3RTdGVwcykgfHwgcmVhY2hpbmdBbGxvd2VkKGAvJHtqdXN0U3RlcHN9YCkpIHJldHVybiBmYWxzZVxuXG4gICAgICAvLyBpZiB0aGUgaW1wb3J0IHN0YXRlbWVudCBkb2Vzbid0IG1hdGNoIGRpcmVjdGx5LCB0cnkgdG8gbWF0Y2ggdGhlXG4gICAgICAvLyByZXNvbHZlZCBwYXRoIGlmIHRoZSBpbXBvcnQgaXMgcmVzb2x2YWJsZVxuICAgICAgY29uc3QgcmVzb2x2ZWQgPSByZXNvbHZlKGltcG9ydFBhdGgsIGNvbnRleHQpXG4gICAgICBpZiAoIXJlc29sdmVkIHx8IHJlYWNoaW5nQWxsb3dlZChub3JtYWxpemVTZXAocmVzb2x2ZWQpKSkgcmV0dXJuIGZhbHNlXG5cbiAgICAgIC8vIHRoaXMgaW1wb3J0IHdhcyBub3QgYWxsb3dlZCBieSB0aGUgYWxsb3dlZCBwYXRocywgYW5kIHJlYWNoZXNcbiAgICAgIC8vIHNvIGl0IGlzIGEgdmlvbGF0aW9uXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrSW1wb3J0Rm9yUmVhY2hpbmcoaW1wb3J0UGF0aCwgbm9kZSkge1xuICAgICAgY29uc3QgcG90ZW50aWFsVmlvbGF0aW9uVHlwZXMgPSBbJ3BhcmVudCcsICdpbmRleCcsICdzaWJsaW5nJywgJ2V4dGVybmFsJywgJ2ludGVybmFsJ11cbiAgICAgIGlmIChwb3RlbnRpYWxWaW9sYXRpb25UeXBlcy5pbmRleE9mKGltcG9ydFR5cGUoaW1wb3J0UGF0aCwgY29udGV4dCkpICE9PSAtMSAmJlxuICAgICAgICBpc1JlYWNoVmlvbGF0aW9uKGltcG9ydFBhdGgpXG4gICAgICApIHtcbiAgICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgbWVzc2FnZTogYFJlYWNoaW5nIHRvIFwiJHtpbXBvcnRQYXRofVwiIGlzIG5vdCBhbGxvd2VkLmAsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIEltcG9ydERlY2xhcmF0aW9uKG5vZGUpIHtcbiAgICAgICAgY2hlY2tJbXBvcnRGb3JSZWFjaGluZyhub2RlLnNvdXJjZS52YWx1ZSwgbm9kZS5zb3VyY2UpXG4gICAgICB9LFxuICAgICAgQ2FsbEV4cHJlc3Npb24obm9kZSkge1xuICAgICAgICBpZiAoaXNTdGF0aWNSZXF1aXJlKG5vZGUpKSB7XG4gICAgICAgICAgY29uc3QgWyBmaXJzdEFyZ3VtZW50IF0gPSBub2RlLmFyZ3VtZW50c1xuICAgICAgICAgIGNoZWNrSW1wb3J0Rm9yUmVhY2hpbmcoZmlyc3RBcmd1bWVudC52YWx1ZSwgZmlyc3RBcmd1bWVudClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG4gIH0sXG59XG4iXX0=