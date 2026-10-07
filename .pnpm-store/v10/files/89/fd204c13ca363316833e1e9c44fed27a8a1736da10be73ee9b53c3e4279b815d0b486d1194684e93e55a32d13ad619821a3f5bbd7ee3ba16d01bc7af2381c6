'use strict';var _minimatch = require('minimatch');var _minimatch2 = _interopRequireDefault(_minimatch);

var _resolve = require('eslint-module-utils/resolve');var _resolve2 = _interopRequireDefault(_resolve);
var _importType = require('../core/importType');var _importType2 = _interopRequireDefault(_importType);
var _moduleVisitor = require('eslint-module-utils/moduleVisitor');var _moduleVisitor2 = _interopRequireDefault(_moduleVisitor);
var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Static analysis',
      description: 'Forbid importing the submodules of other modules.',
      url: (0, _docsUrl2['default'])('no-internal-modules') },


    schema: [
    {
      anyOf: [
      {
        type: 'object',
        properties: {
          allow: {
            type: 'array',
            items: {
              type: 'string' } } },



        additionalProperties: false },

      {
        type: 'object',
        properties: {
          forbid: {
            type: 'array',
            items: {
              type: 'string' } } },



        additionalProperties: false }] }] },






  create: function () {function noReachingInside(context) {
      var options = context.options[0] || {};
      var allowRegexps = (options.allow || []).map(function (p) {return _minimatch2['default'].makeRe(p);});
      var forbidRegexps = (options.forbid || []).map(function (p) {return _minimatch2['default'].makeRe(p);});

      // minimatch patterns are expected to use / path separators, like import
      // statements, so normalize paths to use the same
      function normalizeSep(somePath) {
        return somePath.split('\\').join('/');
      }

      function toSteps(somePath) {
        return normalizeSep(somePath).
        split('/').
        filter(function (step) {return step && step !== '.';}).
        reduce(function (acc, step) {
          if (step === '..') {
            return acc.slice(0, -1);
          }
          return acc.concat(step);
        }, []);
      }

      // test if reaching to this destination is allowed
      function reachingAllowed(importPath) {
        return allowRegexps.some(function (re) {return re.test(importPath);});
      }

      // test if reaching to this destination is forbidden
      function reachingForbidden(importPath) {
        return forbidRegexps.some(function (re) {return re.test(importPath);});
      }

      function isAllowViolation(importPath) {
        var steps = toSteps(importPath);

        var nonScopeSteps = steps.filter(function (step) {return step.indexOf('@') !== 0;});
        if (nonScopeSteps.length <= 1) {return false;}

        // before trying to resolve, see if the raw import (with relative
        // segments resolved) matches an allowed pattern
        var justSteps = steps.join('/');
        if (reachingAllowed(justSteps) || reachingAllowed('/' + String(justSteps))) {return false;}

        // if the import statement doesn't match directly, try to match the
        // resolved path if the import is resolvable
        var resolved = (0, _resolve2['default'])(importPath, context);
        if (!resolved || reachingAllowed(normalizeSep(resolved))) {return false;}

        // this import was not allowed by the allowed paths, and reaches
        // so it is a violation
        return true;
      }

      function isForbidViolation(importPath) {
        var steps = toSteps(importPath);

        // before trying to resolve, see if the raw import (with relative
        // segments resolved) matches a forbidden pattern
        var justSteps = steps.join('/');

        if (reachingForbidden(justSteps) || reachingForbidden('/' + String(justSteps))) {return true;}

        // if the import statement doesn't match directly, try to match the
        // resolved path if the import is resolvable
        var resolved = (0, _resolve2['default'])(importPath, context);
        if (resolved && reachingForbidden(normalizeSep(resolved))) {return true;}

        // this import was not forbidden by the forbidden paths so it is not a violation
        return false;
      }

      // find a directory that is being reached into, but which shouldn't be
      var isReachViolation = options.forbid ? isForbidViolation : isAllowViolation;

      function checkImportForReaching(importPath, node) {
        var potentialViolationTypes = ['parent', 'index', 'sibling', 'external', 'internal'];
        if (
        potentialViolationTypes.indexOf((0, _importType2['default'])(importPath, context)) !== -1 &&
        isReachViolation(importPath))
        {
          context.report({
            node: node,
            message: 'Reaching to "' + String(importPath) + '" is not allowed.' });

        }
      }

      return (0, _moduleVisitor2['default'])(
      function (source) {
        checkImportForReaching(source.value, source);
      },
      { commonjs: true });

    }return noReachingInside;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby1pbnRlcm5hbC1tb2R1bGVzLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJtZXRhIiwidHlwZSIsImRvY3MiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwidXJsIiwic2NoZW1hIiwiYW55T2YiLCJwcm9wZXJ0aWVzIiwiYWxsb3ciLCJpdGVtcyIsImFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiZm9yYmlkIiwiY3JlYXRlIiwibm9SZWFjaGluZ0luc2lkZSIsImNvbnRleHQiLCJvcHRpb25zIiwiYWxsb3dSZWdleHBzIiwibWFwIiwicCIsIm1pbmltYXRjaCIsIm1ha2VSZSIsImZvcmJpZFJlZ2V4cHMiLCJub3JtYWxpemVTZXAiLCJzb21lUGF0aCIsInNwbGl0Iiwiam9pbiIsInRvU3RlcHMiLCJmaWx0ZXIiLCJzdGVwIiwicmVkdWNlIiwiYWNjIiwic2xpY2UiLCJjb25jYXQiLCJyZWFjaGluZ0FsbG93ZWQiLCJpbXBvcnRQYXRoIiwic29tZSIsInJlIiwidGVzdCIsInJlYWNoaW5nRm9yYmlkZGVuIiwiaXNBbGxvd1Zpb2xhdGlvbiIsInN0ZXBzIiwibm9uU2NvcGVTdGVwcyIsImluZGV4T2YiLCJsZW5ndGgiLCJqdXN0U3RlcHMiLCJyZXNvbHZlZCIsImlzRm9yYmlkVmlvbGF0aW9uIiwiaXNSZWFjaFZpb2xhdGlvbiIsImNoZWNrSW1wb3J0Rm9yUmVhY2hpbmciLCJub2RlIiwicG90ZW50aWFsVmlvbGF0aW9uVHlwZXMiLCJyZXBvcnQiLCJtZXNzYWdlIiwic291cmNlIiwidmFsdWUiLCJjb21tb25qcyJdLCJtYXBwaW5ncyI6ImFBQUEsc0M7O0FBRUEsc0Q7QUFDQSxnRDtBQUNBLGtFO0FBQ0EscUM7O0FBRUFBLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsUUFBTTtBQUNKQyxVQUFNLFlBREY7QUFFSkMsVUFBTTtBQUNKQyxnQkFBVSxpQkFETjtBQUVKQyxtQkFBYSxtREFGVDtBQUdKQyxXQUFLLDBCQUFR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QU87QUFDTCxnQkFBQ21CLE1BQUQsRUFBWTtBQUNWTCwrQkFBdUJLLE9BQU9DLEtBQTlCLEVBQXFDRCxNQUFyQztBQUNELE9BSEk7QUFJTCxRQUFFRSxVQUFVLElBQVosRUFKSyxDQUFQOztBQU1ELEtBOUZELE9BQWlCMUMsZ0JBQWpCLElBekNlLEVBQWpCIiwiZmlsZSI6Im5vLWludGVybmFsLW1vZHVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWluaW1hdGNoIGZyb20gJ21pbmltYXRjaCc7XG5cbmltcG9ydCByZXNvbHZlIGZyb20gJ2VzbGludC1tb2R1bGUtdXRpbHMvcmVzb2x2ZSc7XG5pbXBvcnQgaW1wb3J0VHlwZSBmcm9tICcuLi9jb3JlL2ltcG9ydFR5cGUnO1xuaW1wb3J0IG1vZHVsZVZpc2l0b3IgZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy9tb2R1bGVWaXNpdG9yJztcbmltcG9ydCBkb2NzVXJsIGZyb20gJy4uL2RvY3NVcmwnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWV0YToge1xuICAgIHR5cGU6ICdzdWdnZXN0aW9uJyxcbiAgICBkb2NzOiB7XG4gICAgICBjYXRlZ29yeTogJ1N0YXRpYyBhbmFseXNpcycsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvcmJpZCBpbXBvcnRpbmcgdGhlIHN1Ym1vZHVsZXMgb2Ygb3RoZXIgbW9kdWxlcy4nLFxuICAgICAgdXJsOiBkb2NzVXJsKCduby1pbnRlcm5hbC1tb2R1bGVzJyksXG4gICAgfSxcblxuICAgIHNjaGVtYTogW1xuICAgICAge1xuICAgICAgICBhbnlPZjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICBhbGxvdzoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgIGZvcmJpZDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5cbiAgY3JlYXRlOiBmdW5jdGlvbiBub1JlYWNoaW5nSW5zaWRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBvcHRpb25zID0gY29udGV4dC5vcHRpb25zWzBdIHx8IHt9O1xuICAgIGNvbnN0IGFsbG93UmVnZXhwcyA9IChvcHRpb25zLmFsbG93IHx8IFtdKS5tYXAoKHApID0+IG1pbmltYXRjaC5tYWtlUmUocCkpO1xuICAgIGNvbnN0IGZvcmJpZFJlZ2V4cHMgPSAob3B0aW9ucy5mb3JiaWQgfHwgW10pLm1hcCgocCkgPT4gbWluaW1hdGNoLm1ha2VSZShwKSk7XG5cbiAgICAvLyBtaW5pbWF0Y2ggcGF0dGVybnMgYXJlIGV4cGVjdGVkIHRvIHVzZSAvIHBhdGggc2VwYXJhdG9ycywgbGlrZSBpbXBvcnRcbiAgICAvLyBzdGF0ZW1lbnRzLCBzbyBub3JtYWxpemUgcGF0aHMgdG8gdXNlIHRoZSBzYW1lXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplU2VwKHNvbWVQYXRoKSB7XG4gICAgICByZXR1cm4gc29tZVBhdGguc3BsaXQoJ1xcXFwnKS5qb2luKCcvJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9TdGVwcyhzb21lUGF0aCkge1xuICAgICAgcmV0dXJuIG5vcm1hbGl6ZVNlcChzb21lUGF0aClcbiAgICAgICAgLnNwbGl0KCcvJylcbiAgICAgICAgLmZpbHRlcigoc3RlcCkgPT4gc3RlcCAmJiBzdGVwICE9PSAnLicpXG4gICAgICAgIC5yZWR1Y2UoKGFjYywgc3RlcCkgPT4ge1xuICAgICAgICAgIGlmIChzdGVwID09PSAnLi4nKSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGFjYy5jb25jYXQoc3RlcCk7XG4gICAgICAgIH0sIFtdKTtcbiAgICB9XG5cbiAgICAvLyB0ZXN0IGlmIHJlYWNoaW5nIHRvIHRoaXMgZGVzdGluYXRpb24gaXMgYWxsb3dlZFxuICAgIGZ1bmN0aW9uIHJlYWNoaW5nQWxsb3dlZChpbXBvcnRQYXRoKSB7XG4gICAgICByZXR1cm4gYWxsb3dSZWdleHBzLnNvbWUoKHJlKSA9PiByZS50ZXN0KGltcG9ydFBhdGgpKTtcbiAgICB9XG5cbiAgICAvLyB0ZXN0IGlmIHJlYWNoaW5nIHRvIHRoaXMgZGVzdGluYXRpb24gaXMgZm9yYmlkZGVuXG4gICAgZnVuY3Rpb24gcmVhY2hpbmdGb3JiaWRkZW4oaW1wb3J0UGF0aCkge1xuICAgICAgcmV0dXJuIGZvcmJpZFJlZ2V4cHMuc29tZSgocmUpID0+IHJlLnRlc3QoaW1wb3J0UGF0aCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQWxsb3dWaW9sYXRpb24oaW1wb3J0UGF0aCkge1xuICAgICAgY29uc3Qgc3RlcHMgPSB0b1N0ZXBzKGltcG9ydFBhdGgpO1xuXG4gICAgICBjb25zdCBub25TY29wZVN0ZXBzID0gc3RlcHMuZmlsdGVyKChzdGVwKSA9PiBzdGVwLmluZGV4T2YoJ0AnKSAhPT0gMCk7XG4gICAgICBpZiAobm9uU2NvcGVTdGVwcy5sZW5ndGggPD0gMSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgICAgLy8gYmVmb3JlIHRyeWluZyB0byByZXNvbHZlLCBzZWUgaWYgdGhlIHJhdyBpbXBvcnQgKHdpdGggcmVsYXRpdmVcbiAgICAgIC8vIHNlZ21lbnRzIHJlc29sdmVkKSBtYXRjaGVzIGFuIGFsbG93ZWQgcGF0dGVyblxuICAgICAgY29uc3QganVzdFN0ZXBzID0gc3RlcHMuam9pbignLycpO1xuICAgICAgaWYgKHJlYWNoaW5nQWxsb3dlZChqdXN0U3RlcHMpIHx8IHJlYWNoaW5nQWxsb3dlZChgLyR7anVzdFN0ZXBzfWApKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gICAgICAvLyBpZiB0aGUgaW1wb3J0IHN0YXRlbWVudCBkb2Vzbid0IG1hdGNoIGRpcmVjdGx5LCB0cnkgdG8gbWF0Y2ggdGhlXG4gICAgICAvLyByZXNvbHZlZCBwYXRoIGlmIHRoZSBpbXBvcnQgaXMgcmVzb2x2YWJsZVxuICAgICAgY29uc3QgcmVzb2x2ZWQgPSByZXNvbHZlKGltcG9ydFBhdGgsIGNvbnRleHQpO1xuICAgICAgaWYgKCFyZXNvbHZlZCB8fCByZWFjaGluZ0FsbG93ZWQobm9ybWFsaXplU2VwKHJlc29sdmVkKSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICAgIC8vIHRoaXMgaW1wb3J0IHdhcyBub3QgYWxsb3dlZCBieSB0aGUgYWxsb3dlZCBwYXRocywgYW5kIHJlYWNoZXNcbiAgICAgIC8vIHNvIGl0IGlzIGEgdmlvbGF0aW9uXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0ZvcmJpZFZpb2xhdGlvbihpbXBvcnRQYXRoKSB7XG4gICAgICBjb25zdCBzdGVwcyA9IHRvU3RlcHMoaW1wb3J0UGF0aCk7XG5cbiAgICAgIC8vIGJlZm9yZSB0cnlpbmcgdG8gcmVzb2x2ZSwgc2VlIGlmIHRoZSByYXcgaW1wb3J0ICh3aXRoIHJlbGF0aXZlXG4gICAgICAvLyBzZWdtZW50cyByZXNvbHZlZCkgbWF0Y2hlcyBhIGZvcmJpZGRlbiBwYXR0ZXJuXG4gICAgICBjb25zdCBqdXN0U3RlcHMgPSBzdGVwcy5qb2luKCcvJyk7XG5cbiAgICAgIGlmIChyZWFjaGluZ0ZvcmJpZGRlbihqdXN0U3RlcHMpIHx8IHJlYWNoaW5nRm9yYmlkZGVuKGAvJHtqdXN0U3RlcHN9YCkpIHsgcmV0dXJuIHRydWU7IH1cblxuICAgICAgLy8gaWYgdGhlIGltcG9ydCBzdGF0ZW1lbnQgZG9lc24ndCBtYXRjaCBkaXJlY3RseSwgdHJ5IHRvIG1hdGNoIHRoZVxuICAgICAgLy8gcmVzb2x2ZWQgcGF0aCBpZiB0aGUgaW1wb3J0IGlzIHJlc29sdmFibGVcbiAgICAgIGNvbnN0IHJlc29sdmVkID0gcmVzb2x2ZShpbXBvcnRQYXRoLCBjb250ZXh0KTtcbiAgICAgIGlmIChyZXNvbHZlZCAmJiByZWFjaGluZ0ZvcmJpZGRlbihub3JtYWxpemVTZXAocmVzb2x2ZWQpKSkgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gICAgICAvLyB0aGlzIGltcG9ydCB3YXMgbm90IGZvcmJpZGRlbiBieSB0aGUgZm9yYmlkZGVuIHBhdGhzIHNvIGl0IGlzIG5vdCBhIHZpb2xhdGlvblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGZpbmQgYSBkaXJlY3RvcnkgdGhhdCBpcyBiZWluZyByZWFjaGVkIGludG8sIGJ1dCB3aGljaCBzaG91bGRuJ3QgYmVcbiAgICBjb25zdCBpc1JlYWNoVmlvbGF0aW9uID0gb3B0aW9ucy5mb3JiaWQgPyBpc0ZvcmJpZFZpb2xhdGlvbiA6IGlzQWxsb3dWaW9sYXRpb247XG5cbiAgICBmdW5jdGlvbiBjaGVja0ltcG9ydEZvclJlYWNoaW5nKGltcG9ydFBhdGgsIG5vZGUpIHtcbiAgICAgIGNvbnN0IHBvdGVudGlhbFZpb2xhdGlvblR5cGVzID0gWydwYXJlbnQnLCAnaW5kZXgnLCAnc2libGluZycsICdleHRlcm5hbCcsICdpbnRlcm5hbCddO1xuICAgICAgaWYgKFxuICAgICAgICBwb3RlbnRpYWxWaW9sYXRpb25UeXBlcy5pbmRleE9mKGltcG9ydFR5cGUoaW1wb3J0UGF0aCwgY29udGV4dCkpICE9PSAtMVxuICAgICAgICAmJiBpc1JlYWNoVmlvbGF0aW9uKGltcG9ydFBhdGgpXG4gICAgICApIHtcbiAgICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgbWVzc2FnZTogYFJlYWNoaW5nIHRvIFwiJHtpbXBvcnRQYXRofVwiIGlzIG5vdCBhbGxvd2VkLmAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtb2R1bGVWaXNpdG9yKFxuICAgICAgKHNvdXJjZSkgPT4ge1xuICAgICAgICBjaGVja0ltcG9ydEZvclJlYWNoaW5nKHNvdXJjZS52YWx1ZSwgc291cmNlKTtcbiAgICAgIH0sXG4gICAgICB7IGNvbW1vbmpzOiB0cnVlIH0sXG4gICAgKTtcbiAgfSxcbn07XG4iXX0=