'use strict';var _path = require('path');
var _contextCompat = require('eslint-module-utils/contextCompat');
var _moduleVisitor = require('eslint-module-utils/moduleVisitor');var _moduleVisitor2 = _interopRequireDefault(_moduleVisitor);
var _resolve = require('eslint-module-utils/resolve');var _resolve2 = _interopRequireDefault(_resolve);

var _importType = require('../core/importType');var _importType2 = _interopRequireDefault(_importType);
var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Static analysis',
      description: 'Forbid importing modules from parent directories.',
      url: (0, _docsUrl2['default'])('no-relative-parent-imports') },

    schema: [(0, _moduleVisitor.makeOptionsSchema)()] },


  create: function () {function noRelativePackages(context) {
      var myPath = (0, _contextCompat.getPhysicalFilename)(context);
      if (myPath === '<text>') {return {};} // can't check a non-file

      function checkSourceValue(sourceNode) {
        var depPath = sourceNode.value;

        if ((0, _importType2['default'])(depPath, context) === 'external') {// ignore packages
          return;
        }

        var absDepPath = (0, _resolve2['default'])(depPath, context);

        if (!absDepPath) {// unable to resolve path
          return;
        }

        var relDepPath = (0, _path.relative)((0, _path.dirname)(myPath), absDepPath);

        if ((0, _importType2['default'])(relDepPath, context) === 'parent') {
          context.report({
            node: sourceNode,
            message: 'Relative imports from parent directories are not allowed. Please either pass what you\'re importing through at runtime (dependency injection), move `' + String((0, _path.basename)(myPath)) + '` to same directory as `' + String(depPath) + '` or consider making `' + String(depPath) + '` a package.' });

        }
      }

      return (0, _moduleVisitor2['default'])(checkSourceValue, context.options[0]);
    }return noRelativePackages;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby1yZWxhdGl2ZS1wYXJlbnQtaW1wb3J0cy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibWV0YSIsInR5cGUiLCJkb2NzIiwiY2F0ZWdvcnkiLCJkZXNjcmlwdGlvbiIsInVybCIsInNjaGVtYSIsImNyZWF0ZSIsIm5vUmVsYXRpdmVQYWNrYWdlcyIsImNvbnRleHQiLCJteVBhdGgiLCJjaGVja1NvdXJjZVZhbHVlIiwic291cmNlTm9kZSIsImRlcFBhdGgiLCJ2YWx1ZSIsImFic0RlcFBhdGgiLCJyZWxEZXBQYXRoIiwicmVwb3J0Iiwibm9kZSIsIm1lc3NhZ2UiLCJvcHRpb25zIl0sIm1hcHBpbmdzIjoiYUFBQTtBQUNBO0FBQ0Esa0U7QUFDQSxzRDs7QUFFQSxnRDtBQUNBLHFDOztBQUVBQSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLFFBQU07QUFDSkMsVUFBTSxZQURGO0FBRUpDLFVBQU07QUFDSkMsZ0JBQVUsaUJBRE47QUFFSkMsbUJBQWEsbURBRlQ7QUFHSkMsV0FBSywwQkFBUSw0QkFBUixDQUhELEVBRkY7O0FBT0pDLFlBQVEsQ0FBQyx1Q0FBRCxDQVBKLEVBRFM7OztBQVdmQyx1QkFBUSxTQUFTQyxrQkFBVCxDQUE0QkMsT0FBNUIsRUFBcUM7QUFDM0MsVUFBTUMsU0FBUyx3Q0FBb0JELE9BQXBCLENBQWY7QUFDQSxVQUFJQyxXQUFXLFFBQWYsRUFBeUIsQ0FBRSxPQUFPLEVBQVAsQ0FBWSxDQUZJLENBRUg7O0FBRXhDLGVBQVNDLGdCQUFULENBQTBCQyxVQUExQixFQUFzQztBQUNwQyxZQUFNQyxVQUFVRCxXQUFXRSxLQUEzQjs7QUFFQSxZQUFJLDZCQUFXRCxPQUFYLEVBQW9CSixPQUFwQixNQUFpQyxVQUFyQyxFQUFpRCxDQUFFO0FBQ2pEO0FBQ0Q7O0FBRUQsWUFBTU0sYUFBYSwwQkFBUUYsT0FBUixFQUFpQkosT0FBakIsQ0FBbkI7O0FBRUEsWUFBSSxDQUFDTSxVQUFMLEVBQWlCLENBQUU7QUFDakI7QUFDRDs7QUFFRCxZQUFNQyxhQUFhLG9CQUFTLG1CQUFRTixNQUFSLENBQVQsRUFBMEJLLFVBQTFCLENBQW5COztBQUVBLFlBQUksNkJBQVdDLFVBQVgsRUFBdUJQLE9BQXZCLE1BQW9DLFFBQXhDLEVBQWtEO0FBQ2hEQSxrQkFBUVEsTUFBUixDQUFlO0FBQ2JDLGtCQUFNTixVQURPO0FBRWJPLHNMQUFpSyxvQkFBU1QsTUFBVCxDQUFqSyx3Q0FBOE1HLE9BQTlNLHNDQUFnUEEsT0FBaFAsa0JBRmEsRUFBZjs7QUFJRDtBQUNGOztBQUVELGFBQU8sZ0NBQWNGLGdCQUFkLEVBQWdDRixRQUFRVyxPQUFSLENBQWdCLENBQWhCLENBQWhDLENBQVA7QUFDRCxLQTVCRCxPQUFpQlosa0JBQWpCLElBWGUsRUFBakIiLCJmaWxlIjoibm8tcmVsYXRpdmUtcGFyZW50LWltcG9ydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiYXNlbmFtZSwgZGlybmFtZSwgcmVsYXRpdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IGdldFBoeXNpY2FsRmlsZW5hbWUgfSBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL2NvbnRleHRDb21wYXQnO1xuaW1wb3J0IG1vZHVsZVZpc2l0b3IsIHsgbWFrZU9wdGlvbnNTY2hlbWEgfSBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL21vZHVsZVZpc2l0b3InO1xuaW1wb3J0IHJlc29sdmUgZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy9yZXNvbHZlJztcblxuaW1wb3J0IGltcG9ydFR5cGUgZnJvbSAnLi4vY29yZS9pbXBvcnRUeXBlJztcbmltcG9ydCBkb2NzVXJsIGZyb20gJy4uL2RvY3NVcmwnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWV0YToge1xuICAgIHR5cGU6ICdzdWdnZXN0aW9uJyxcbiAgICBkb2NzOiB7XG4gICAgICBjYXRlZ29yeTogJ1N0YXRpYyBhbmFseXNpcycsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvcmJpZCBpbXBvcnRpbmcgbW9kdWxlcyBmcm9tIHBhcmVudCBkaXJlY3Rvcmllcy4nLFxuICAgICAgdXJsOiBkb2NzVXJsKCduby1yZWxhdGl2ZS1wYXJlbnQtaW1wb3J0cycpLFxuICAgIH0sXG4gICAgc2NoZW1hOiBbbWFrZU9wdGlvbnNTY2hlbWEoKV0sXG4gIH0sXG5cbiAgY3JlYXRlOiBmdW5jdGlvbiBub1JlbGF0aXZlUGFja2FnZXMoY29udGV4dCkge1xuICAgIGNvbnN0IG15UGF0aCA9IGdldFBoeXNpY2FsRmlsZW5hbWUoY29udGV4dCk7XG4gICAgaWYgKG15UGF0aCA9PT0gJzx0ZXh0PicpIHsgcmV0dXJuIHt9OyB9IC8vIGNhbid0IGNoZWNrIGEgbm9uLWZpbGVcblxuICAgIGZ1bmN0aW9uIGNoZWNrU291cmNlVmFsdWUoc291cmNlTm9kZSkge1xuICAgICAgY29uc3QgZGVwUGF0aCA9IHNvdXJjZU5vZGUudmFsdWU7XG5cbiAgICAgIGlmIChpbXBvcnRUeXBlKGRlcFBhdGgsIGNvbnRleHQpID09PSAnZXh0ZXJuYWwnKSB7IC8vIGlnbm9yZSBwYWNrYWdlc1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFic0RlcFBhdGggPSByZXNvbHZlKGRlcFBhdGgsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoIWFic0RlcFBhdGgpIHsgLy8gdW5hYmxlIHRvIHJlc29sdmUgcGF0aFxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlbERlcFBhdGggPSByZWxhdGl2ZShkaXJuYW1lKG15UGF0aCksIGFic0RlcFBhdGgpO1xuXG4gICAgICBpZiAoaW1wb3J0VHlwZShyZWxEZXBQYXRoLCBjb250ZXh0KSA9PT0gJ3BhcmVudCcpIHtcbiAgICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICAgIG5vZGU6IHNvdXJjZU5vZGUsXG4gICAgICAgICAgbWVzc2FnZTogYFJlbGF0aXZlIGltcG9ydHMgZnJvbSBwYXJlbnQgZGlyZWN0b3JpZXMgYXJlIG5vdCBhbGxvd2VkLiBQbGVhc2UgZWl0aGVyIHBhc3Mgd2hhdCB5b3UncmUgaW1wb3J0aW5nIHRocm91Z2ggYXQgcnVudGltZSAoZGVwZW5kZW5jeSBpbmplY3Rpb24pLCBtb3ZlIFxcYCR7YmFzZW5hbWUobXlQYXRoKX1cXGAgdG8gc2FtZSBkaXJlY3RvcnkgYXMgXFxgJHtkZXBQYXRofVxcYCBvciBjb25zaWRlciBtYWtpbmcgXFxgJHtkZXBQYXRofVxcYCBhIHBhY2thZ2UuYCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vZHVsZVZpc2l0b3IoY2hlY2tTb3VyY2VWYWx1ZSwgY29udGV4dC5vcHRpb25zWzBdKTtcbiAgfSxcbn07XG4iXX0=