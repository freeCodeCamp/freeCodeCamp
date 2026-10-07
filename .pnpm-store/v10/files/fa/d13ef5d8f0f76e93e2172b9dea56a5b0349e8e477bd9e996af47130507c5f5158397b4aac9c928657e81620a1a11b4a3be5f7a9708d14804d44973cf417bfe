'use strict';




var _contextCompat = require('eslint-module-utils/contextCompat');
var _ignore = require('eslint-module-utils/ignore');
var _moduleVisitor = require('eslint-module-utils/moduleVisitor');var _moduleVisitor2 = _interopRequireDefault(_moduleVisitor);
var _resolve = require('eslint-module-utils/resolve');var _resolve2 = _interopRequireDefault(_resolve);
var _path = require('path');var _path2 = _interopRequireDefault(_path);
var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

/**
                                                                                                                                                                                       * convert a potentially relative path from node utils into a true
                                                                                                                                                                                       * relative path.
                                                                                                                                                                                       *
                                                                                                                                                                                       * ../ -> ..
                                                                                                                                                                                       * ./ -> .
                                                                                                                                                                                       * .foo/bar -> ./.foo/bar
                                                                                                                                                                                       * ..foo/bar -> ./..foo/bar
                                                                                                                                                                                       * foo/bar -> ./foo/bar
                                                                                                                                                                                       *
                                                                                                                                                                                       * @param relativePath {string} relative posix path potentially missing leading './'
                                                                                                                                                                                       * @returns {string} relative posix path that always starts with a ./
                                                                                                                                                                                       **/ /**
                                                                                                                                                                                            * @fileOverview Ensures that there are no useless path segments
                                                                                                                                                                                            * @author Thomas Grainger
                                                                                                                                                                                            */function toRelativePath(relativePath) {var stripped = relativePath.replace(/\/$/g, ''); // Remove trailing /
  return (/^((\.\.)|(\.))($|\/)/.test(stripped) ? stripped : './' + String(stripped));
}

function normalize(fn) {
  return toRelativePath(_path2['default'].posix.normalize(fn));
}

function countRelativeParents(pathSegments) {
  return pathSegments.filter(function (x) {return x === '..';}).length;
}

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Static analysis',
      description: 'Forbid unnecessary path segments in import and require statements.',
      url: (0, _docsUrl2['default'])('no-useless-path-segments') },


    fixable: 'code',

    schema: [
    {
      type: 'object',
      properties: {
        commonjs: { type: 'boolean' },
        noUselessIndex: { type: 'boolean' } },

      additionalProperties: false }] },




  create: function () {function create(context) {
      var currentDir = _path2['default'].dirname((0, _contextCompat.getPhysicalFilename)(context));
      var options = context.options[0];

      function checkSourceValue(source) {var
        importPath = source.value;

        function reportWithProposedPath(proposedPath) {
          context.report({
            node: source,
            // Note: Using messageIds is not possible due to the support for ESLint 2 and 3
            message: 'Useless path segments for "' + String(importPath) + '", should be "' + String(proposedPath) + '"',
            fix: function () {function fix(fixer) {return proposedPath && fixer.replaceText(source, JSON.stringify(proposedPath));}return fix;}() });

        }

        // Only relative imports are relevant for this rule --> Skip checking
        if (!importPath.startsWith('.')) {
          return;
        }

        // Report rule violation if path is not the shortest possible
        var resolvedPath = (0, _resolve2['default'])(importPath, context);
        var normedPath = normalize(importPath);
        var resolvedNormedPath = (0, _resolve2['default'])(normedPath, context);
        if (normedPath !== importPath && resolvedPath === resolvedNormedPath) {
          return reportWithProposedPath(normedPath);
        }

        var fileExtensions = (0, _ignore.getFileExtensions)(context.settings);
        var regexUnnecessaryIndex = new RegExp('.*\\/index(\\' + String(
        Array.from(fileExtensions).join('|\\')) + ')?$');


        // Check if path contains unnecessary index (including a configured extension)
        if (options && options.noUselessIndex && regexUnnecessaryIndex.test(importPath)) {
          var parentDirectory = _path2['default'].dirname(importPath);

          // Try to find ambiguous imports
          if (parentDirectory !== '.' && parentDirectory !== '..') {var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
              for (var _iterator = fileExtensions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var fileExtension = _step.value;
                if ((0, _resolve2['default'])('' + String(parentDirectory) + String(fileExtension), context)) {
                  return reportWithProposedPath(String(parentDirectory) + '/');
                }
              }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator['return']) {_iterator['return']();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
          }

          return reportWithProposedPath(parentDirectory);
        }

        // Path is shortest possible + starts from the current directory --> Return directly
        if (importPath.startsWith('./')) {
          return;
        }

        // Path is not existing --> Return directly (following code requires path to be defined)
        if (resolvedPath === undefined) {
          return;
        }

        var expected = _path2['default'].relative(currentDir, resolvedPath); // Expected import path
        var expectedSplit = expected.split(_path2['default'].sep); // Split by / or \ (depending on OS)
        var importPathSplit = importPath.replace(/^\.\//, '').split('/');
        var countImportPathRelativeParents = countRelativeParents(importPathSplit);
        var countExpectedRelativeParents = countRelativeParents(expectedSplit);
        var diff = countImportPathRelativeParents - countExpectedRelativeParents;

        // Same number of relative parents --> Paths are the same --> Return directly
        if (diff <= 0) {
          return;
        }

        // Report and propose minimal number of required relative parents
        return reportWithProposedPath(
        toRelativePath(
        importPathSplit.
        slice(0, countExpectedRelativeParents).
        concat(importPathSplit.slice(countImportPathRelativeParents + diff)).
        join('/')));


      }

      return (0, _moduleVisitor2['default'])(checkSourceValue, options);
    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby11c2VsZXNzLXBhdGgtc2VnbWVudHMuanMiXSwibmFtZXMiOlsidG9SZWxhdGl2ZVBhdGgiLCJyZWxhdGl2ZVBhdGgiLCJzdHJpcHBlZCIsInJlcGxhY2UiLCJ0ZXN0Iiwibm9ybWFsaXplIiwiZm4iLCJwYXRoIiwicG9zaXgiLCJjb3VudFJlbGF0aXZlUGFyZW50cyIsInBhdGhTZWdtZW50cyIsImZpbHRlciIsIngiLCJsZW5ndGgiLCJtb2R1bGUiLCJleHBvcnRzIiwibWV0YSIsInR5cGUiLCJkb2NzIiwiY2F0ZWdvcnkiLCJkZXNjcmlwdGlvbiIsInVybCIsImZpeGFibGUiLCJzY2hlbWEiLCJwcm9wZXJ0aWVzIiwiY29tbW9uanMiLCJub1VzZWxlc3NJbmRleCIsImFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiY3JlYXRlIiwiY29udGV4dCIsImN1cnJlbnREaXIiLCJkaXJuYW1lIiwib3B0aW9ucyIsImNoZWNrU291cmNlVmFsdWUiLCJzb3VyY2UiLCJpbXBvcnRQYXRoIiwidmFsdWUiLCJyZXBvcnRXaXRoUHJvcG9zZWRQYXRoIiwicHJvcG9zZWRQYXRoIiwicmVwb3J0Iiwibm9kZSIsIm1lc3NhZ2UiLCJmaXgiLCJmaXhlciIsInJlcGxhY2VUZXh0IiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXJ0c1dpdGgiLCJyZXNvbHZlZFBhdGgiLCJub3JtZWRQYXRoIiwicmVzb2x2ZWROb3JtZWRQYXRoIiwiZmlsZUV4dGVuc2lvbnMiLCJzZXR0aW5ncyIsInJlZ2V4VW5uZWNlc3NhcnlJbmRleCIsIlJlZ0V4cCIsIkFycmF5IiwiZnJvbSIsImpvaW4iLCJwYXJlbnREaXJlY3RvcnkiLCJmaWxlRXh0ZW5zaW9uIiwidW5kZWZpbmVkIiwiZXhwZWN0ZWQiLCJyZWxhdGl2ZSIsImV4cGVjdGVkU3BsaXQiLCJzcGxpdCIsInNlcCIsImltcG9ydFBhdGhTcGxpdCIsImNvdW50SW1wb3J0UGF0aFJlbGF0aXZlUGFyZW50cyIsImNvdW50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Riw0QkFEWjtBQUVHRyxjQUZILENBRVVMLGdCQUFnQkksS0FBaEIsQ0FBc0JILGlDQUFpQ0UsSUFBdkQsQ0FGVjtBQUdHWixZQUhILENBR1EsR0FIUixDQURGLENBREssQ0FBUDs7O0FBUUQ7O0FBRUQsYUFBTyxnQ0FBY3hCLGdCQUFkLEVBQWdDRCxPQUFoQyxDQUFQO0FBQ0QsS0EzR2MsbUJBQWpCIiwiZmlsZSI6Im5vLXVzZWxlc3MtcGF0aC1zZWdtZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlldyBFbnN1cmVzIHRoYXQgdGhlcmUgYXJlIG5vIHVzZWxlc3MgcGF0aCBzZWdtZW50c1xuICogQGF1dGhvciBUaG9tYXMgR3JhaW5nZXJcbiAqL1xuXG5pbXBvcnQgeyBnZXRQaHlzaWNhbEZpbGVuYW1lIH0gZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy9jb250ZXh0Q29tcGF0JztcbmltcG9ydCB7IGdldEZpbGVFeHRlbnNpb25zIH0gZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy9pZ25vcmUnO1xuaW1wb3J0IG1vZHVsZVZpc2l0b3IgZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy9tb2R1bGVWaXNpdG9yJztcbmltcG9ydCByZXNvbHZlIGZyb20gJ2VzbGludC1tb2R1bGUtdXRpbHMvcmVzb2x2ZSc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBkb2NzVXJsIGZyb20gJy4uL2RvY3NVcmwnO1xuXG4vKipcbiAqIGNvbnZlcnQgYSBwb3RlbnRpYWxseSByZWxhdGl2ZSBwYXRoIGZyb20gbm9kZSB1dGlscyBpbnRvIGEgdHJ1ZVxuICogcmVsYXRpdmUgcGF0aC5cbiAqXG4gKiAuLi8gLT4gLi5cbiAqIC4vIC0+IC5cbiAqIC5mb28vYmFyIC0+IC4vLmZvby9iYXJcbiAqIC4uZm9vL2JhciAtPiAuLy4uZm9vL2JhclxuICogZm9vL2JhciAtPiAuL2Zvby9iYXJcbiAqXG4gKiBAcGFyYW0gcmVsYXRpdmVQYXRoIHtzdHJpbmd9IHJlbGF0aXZlIHBvc2l4IHBhdGggcG90ZW50aWFsbHkgbWlzc2luZyBsZWFkaW5nICcuLydcbiAqIEByZXR1cm5zIHtzdHJpbmd9IHJlbGF0aXZlIHBvc2l4IHBhdGggdGhhdCBhbHdheXMgc3RhcnRzIHdpdGggYSAuL1xuICoqL1xuZnVuY3Rpb24gdG9SZWxhdGl2ZVBhdGgocmVsYXRpdmVQYXRoKSB7XG4gIGNvbnN0IHN0cmlwcGVkID0gcmVsYXRpdmVQYXRoLnJlcGxhY2UoL1xcLyQvZywgJycpOyAvLyBSZW1vdmUgdHJhaWxpbmcgL1xuXG4gIHJldHVybiAoL14oKFxcLlxcLil8KFxcLikpKCR8XFwvKS8pLnRlc3Qoc3RyaXBwZWQpID8gc3RyaXBwZWQgOiBgLi8ke3N0cmlwcGVkfWA7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZShmbikge1xuICByZXR1cm4gdG9SZWxhdGl2ZVBhdGgocGF0aC5wb3NpeC5ub3JtYWxpemUoZm4pKTtcbn1cblxuZnVuY3Rpb24gY291bnRSZWxhdGl2ZVBhcmVudHMocGF0aFNlZ21lbnRzKSB7XG4gIHJldHVybiBwYXRoU2VnbWVudHMuZmlsdGVyKCh4KSA9PiB4ID09PSAnLi4nKS5sZW5ndGg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtZXRhOiB7XG4gICAgdHlwZTogJ3N1Z2dlc3Rpb24nLFxuICAgIGRvY3M6IHtcbiAgICAgIGNhdGVnb3J5OiAnU3RhdGljIGFuYWx5c2lzJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRm9yYmlkIHVubmVjZXNzYXJ5IHBhdGggc2VnbWVudHMgaW4gaW1wb3J0IGFuZCByZXF1aXJlIHN0YXRlbWVudHMuJyxcbiAgICAgIHVybDogZG9jc1VybCgnbm8tdXNlbGVzcy1wYXRoLXNlZ21lbnRzJyksXG4gICAgfSxcblxuICAgIGZpeGFibGU6ICdjb2RlJyxcblxuICAgIHNjaGVtYTogW1xuICAgICAge1xuICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIGNvbW1vbmpzOiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICAgICAgICAgIG5vVXNlbGVzc0luZGV4OiB7IHR5cGU6ICdib29sZWFuJyB9LFxuICAgICAgICB9LFxuICAgICAgICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5cbiAgY3JlYXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBjdXJyZW50RGlyID0gcGF0aC5kaXJuYW1lKGdldFBoeXNpY2FsRmlsZW5hbWUoY29udGV4dCkpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBjb250ZXh0Lm9wdGlvbnNbMF07XG5cbiAgICBmdW5jdGlvbiBjaGVja1NvdXJjZVZhbHVlKHNvdXJjZSkge1xuICAgICAgY29uc3QgeyB2YWx1ZTogaW1wb3J0UGF0aCB9ID0gc291cmNlO1xuXG4gICAgICBmdW5jdGlvbiByZXBvcnRXaXRoUHJvcG9zZWRQYXRoKHByb3Bvc2VkUGF0aCkge1xuICAgICAgICBjb250ZXh0LnJlcG9ydCh7XG4gICAgICAgICAgbm9kZTogc291cmNlLFxuICAgICAgICAgIC8vIE5vdGU6IFVzaW5nIG1lc3NhZ2VJZHMgaXMgbm90IHBvc3NpYmxlIGR1ZSB0byB0aGUgc3VwcG9ydCBmb3IgRVNMaW50IDIgYW5kIDNcbiAgICAgICAgICBtZXNzYWdlOiBgVXNlbGVzcyBwYXRoIHNlZ21lbnRzIGZvciBcIiR7aW1wb3J0UGF0aH1cIiwgc2hvdWxkIGJlIFwiJHtwcm9wb3NlZFBhdGh9XCJgLFxuICAgICAgICAgIGZpeDogKGZpeGVyKSA9PiBwcm9wb3NlZFBhdGggJiYgZml4ZXIucmVwbGFjZVRleHQoc291cmNlLCBKU09OLnN0cmluZ2lmeShwcm9wb3NlZFBhdGgpKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIE9ubHkgcmVsYXRpdmUgaW1wb3J0cyBhcmUgcmVsZXZhbnQgZm9yIHRoaXMgcnVsZSAtLT4gU2tpcCBjaGVja2luZ1xuICAgICAgaWYgKCFpbXBvcnRQYXRoLnN0YXJ0c1dpdGgoJy4nKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFJlcG9ydCBydWxlIHZpb2xhdGlvbiBpZiBwYXRoIGlzIG5vdCB0aGUgc2hvcnRlc3QgcG9zc2libGVcbiAgICAgIGNvbnN0IHJlc29sdmVkUGF0aCA9IHJlc29sdmUoaW1wb3J0UGF0aCwgY29udGV4dCk7XG4gICAgICBjb25zdCBub3JtZWRQYXRoID0gbm9ybWFsaXplKGltcG9ydFBhdGgpO1xuICAgICAgY29uc3QgcmVzb2x2ZWROb3JtZWRQYXRoID0gcmVzb2x2ZShub3JtZWRQYXRoLCBjb250ZXh0KTtcbiAgICAgIGlmIChub3JtZWRQYXRoICE9PSBpbXBvcnRQYXRoICYmIHJlc29sdmVkUGF0aCA9PT0gcmVzb2x2ZWROb3JtZWRQYXRoKSB7XG4gICAgICAgIHJldHVybiByZXBvcnRXaXRoUHJvcG9zZWRQYXRoKG5vcm1lZFBhdGgpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmaWxlRXh0ZW5zaW9ucyA9IGdldEZpbGVFeHRlbnNpb25zKGNvbnRleHQuc2V0dGluZ3MpO1xuICAgICAgY29uc3QgcmVnZXhVbm5lY2Vzc2FyeUluZGV4ID0gbmV3IFJlZ0V4cChcbiAgICAgICAgYC4qXFxcXC9pbmRleChcXFxcJHtBcnJheS5mcm9tKGZpbGVFeHRlbnNpb25zKS5qb2luKCd8XFxcXCcpfSk/JGAsXG4gICAgICApO1xuXG4gICAgICAvLyBDaGVjayBpZiBwYXRoIGNvbnRhaW5zIHVubmVjZXNzYXJ5IGluZGV4IChpbmNsdWRpbmcgYSBjb25maWd1cmVkIGV4dGVuc2lvbilcbiAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMubm9Vc2VsZXNzSW5kZXggJiYgcmVnZXhVbm5lY2Vzc2FyeUluZGV4LnRlc3QoaW1wb3J0UGF0aCkpIHtcbiAgICAgICAgY29uc3QgcGFyZW50RGlyZWN0b3J5ID0gcGF0aC5kaXJuYW1lKGltcG9ydFBhdGgpO1xuXG4gICAgICAgIC8vIFRyeSB0byBmaW5kIGFtYmlndW91cyBpbXBvcnRzXG4gICAgICAgIGlmIChwYXJlbnREaXJlY3RvcnkgIT09ICcuJyAmJiBwYXJlbnREaXJlY3RvcnkgIT09ICcuLicpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGZpbGVFeHRlbnNpb24gb2YgZmlsZUV4dGVuc2lvbnMpIHtcbiAgICAgICAgICAgIGlmIChyZXNvbHZlKGAke3BhcmVudERpcmVjdG9yeX0ke2ZpbGVFeHRlbnNpb259YCwgY29udGV4dCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlcG9ydFdpdGhQcm9wb3NlZFBhdGgoYCR7cGFyZW50RGlyZWN0b3J5fS9gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVwb3J0V2l0aFByb3Bvc2VkUGF0aChwYXJlbnREaXJlY3RvcnkpO1xuICAgICAgfVxuXG4gICAgICAvLyBQYXRoIGlzIHNob3J0ZXN0IHBvc3NpYmxlICsgc3RhcnRzIGZyb20gdGhlIGN1cnJlbnQgZGlyZWN0b3J5IC0tPiBSZXR1cm4gZGlyZWN0bHlcbiAgICAgIGlmIChpbXBvcnRQYXRoLnN0YXJ0c1dpdGgoJy4vJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQYXRoIGlzIG5vdCBleGlzdGluZyAtLT4gUmV0dXJuIGRpcmVjdGx5IChmb2xsb3dpbmcgY29kZSByZXF1aXJlcyBwYXRoIHRvIGJlIGRlZmluZWQpXG4gICAgICBpZiAocmVzb2x2ZWRQYXRoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBleHBlY3RlZCA9IHBhdGgucmVsYXRpdmUoY3VycmVudERpciwgcmVzb2x2ZWRQYXRoKTsgLy8gRXhwZWN0ZWQgaW1wb3J0IHBhdGhcbiAgICAgIGNvbnN0IGV4cGVjdGVkU3BsaXQgPSBleHBlY3RlZC5zcGxpdChwYXRoLnNlcCk7IC8vIFNwbGl0IGJ5IC8gb3IgXFwgKGRlcGVuZGluZyBvbiBPUylcbiAgICAgIGNvbnN0IGltcG9ydFBhdGhTcGxpdCA9IGltcG9ydFBhdGgucmVwbGFjZSgvXlxcLlxcLy8sICcnKS5zcGxpdCgnLycpO1xuICAgICAgY29uc3QgY291bnRJbXBvcnRQYXRoUmVsYXRpdmVQYXJlbnRzID0gY291bnRSZWxhdGl2ZVBhcmVudHMoaW1wb3J0UGF0aFNwbGl0KTtcbiAgICAgIGNvbnN0IGNvdW50RXhwZWN0ZWRSZWxhdGl2ZVBhcmVudHMgPSBjb3VudFJlbGF0aXZlUGFyZW50cyhleHBlY3RlZFNwbGl0KTtcbiAgICAgIGNvbnN0IGRpZmYgPSBjb3VudEltcG9ydFBhdGhSZWxhdGl2ZVBhcmVudHMgLSBjb3VudEV4cGVjdGVkUmVsYXRpdmVQYXJlbnRzO1xuXG4gICAgICAvLyBTYW1lIG51bWJlciBvZiByZWxhdGl2ZSBwYXJlbnRzIC0tPiBQYXRocyBhcmUgdGhlIHNhbWUgLS0+IFJldHVybiBkaXJlY3RseVxuICAgICAgaWYgKGRpZmYgPD0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFJlcG9ydCBhbmQgcHJvcG9zZSBtaW5pbWFsIG51bWJlciBvZiByZXF1aXJlZCByZWxhdGl2ZSBwYXJlbnRzXG4gICAgICByZXR1cm4gcmVwb3J0V2l0aFByb3Bvc2VkUGF0aChcbiAgICAgICAgdG9SZWxhdGl2ZVBhdGgoXG4gICAgICAgICAgaW1wb3J0UGF0aFNwbGl0XG4gICAgICAgICAgICAuc2xpY2UoMCwgY291bnRFeHBlY3RlZFJlbGF0aXZlUGFyZW50cylcbiAgICAgICAgICAgIC5jb25jYXQoaW1wb3J0UGF0aFNwbGl0LnNsaWNlKGNvdW50SW1wb3J0UGF0aFJlbGF0aXZlUGFyZW50cyArIGRpZmYpKVxuICAgICAgICAgICAgLmpvaW4oJy8nKSxcbiAgICAgICAgKSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vZHVsZVZpc2l0b3IoY2hlY2tTb3VyY2VWYWx1ZSwgb3B0aW9ucyk7XG4gIH0sXG59O1xuIl19