'use strict';




var _contextCompat = require('eslint-module-utils/contextCompat');
var _resolve = require('eslint-module-utils/resolve');var _resolve2 = _interopRequireDefault(_resolve);
var _moduleVisitor = require('eslint-module-utils/moduleVisitor');var _moduleVisitor2 = _interopRequireDefault(_moduleVisitor);

var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };} /**
                                                                                                                                                                                       * @fileOverview Forbids a module from importing itself
                                                                                                                                                                                       * @author Gio d'Amelio
                                                                                                                                                                                       */function isImportingSelf(context, node, requireName) {var filePath = (0, _contextCompat.getPhysicalFilename)(context);

  // If the input is from stdin, this test can't fail
  if (filePath !== '<text>' && filePath === (0, _resolve2['default'])(requireName, context)) {
    context.report({
      node: node,
      message: 'Module imports itself.' });

  }
}

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      category: 'Static analysis',
      description: 'Forbid a module from importing itself.',
      recommended: true,
      url: (0, _docsUrl2['default'])('no-self-import') },


    schema: [] },

  create: function () {function create(context) {
      return (0, _moduleVisitor2['default'])(function (source, node) {
        isImportingSelf(context, node, source.value);
      }, { commonjs: true });
    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby1zZWxmLWltcG9ydC5qcyJdLCJuYW1lcyI6WyJpc0ltcG9ydGluZ1NlbGYiLCJjb250ZXh0Iiwibm9kZSIsInJlcXVpcmVOYW1lIiwiZmlsZVBhdGgiLCJyZXBvcnQiLCJtZXNzYWdlIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1ldGEiLCJ0eXBlIiwiZG9jcyIsImNhdGVnb3J5IiwiZGVzY3JpcHRpb24iLCJyZWNvbW1lbmRlZCIsInVybCIsInNjaGVtYSIsImNyZWF0ZSIsInNvdXJjZSIsInZhbHVlIiwiY29tbW9uanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0E7QUFDQSxzRDtBQUNBLGtFOztBQUVBLHFDLGlKQVRBOzs7eUxBV0EsU0FBU0EsZUFBVCxDQUF5QkMsT0FBekIsRUFBa0NDLElBQWxDLEVBQXdDQyxXQUF4QyxFQUFxRCxDQUNuRCxJQUFNQyxXQUFXLHdDQUFvQkgsT0FBcEIsQ0FBakI7O0FBRUE7QUFDQSxNQUFJRyxhQUFhLFFBQWIsSUFBeUJBLGFBQWEsMEJBQVFELFdBQVIsRUFBcUJGLE9BQXJCLENBQTFDLEVBQXlFO0FBQ3ZFQSxZQUFRSSxNQUFSLENBQWU7QUFDYkgsZ0JBRGE7QUFFYkksZUFBUyx3QkFGSSxFQUFmOztBQUlEO0FBQ0Y7O0FBRURDLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsUUFBTTtBQUNKQyxVQUFNLFNBREY7QUFFSkMsVUFBTTtBQUNKQyxnQkFBVSxpQkFETjtBQUVKQyxtQkFBYSx3Q0FGVDtBQUdKQyxtQkFBYSxJQUhUO0FBSUpDLFdBQUssMEJBQVEsZ0JBQVIsQ0FKRCxFQUZGOzs7QUFTSkMsWUFBUSxFQVRKLEVBRFM7O0FBWWZDLFFBWmUsK0JBWVJoQixPQVpRLEVBWUM7QUFDZCxhQUFPLGdDQUFjLFVBQUNpQixNQUFELEVBQVNoQixJQUFULEVBQWtCO0FBQ3JDRix3QkFBZ0JDLE9BQWhCLEVBQXlCQyxJQUF6QixFQUErQmdCLE9BQU9DLEtBQXRDO0FBQ0QsT0FGTSxFQUVKLEVBQUVDLFVBQVUsSUFBWixFQUZJLENBQVA7QUFHRCxLQWhCYyxtQkFBakIiLCJmaWxlIjoibm8tc2VsZi1pbXBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgRm9yYmlkcyBhIG1vZHVsZSBmcm9tIGltcG9ydGluZyBpdHNlbGZcbiAqIEBhdXRob3IgR2lvIGQnQW1lbGlvXG4gKi9cblxuaW1wb3J0IHsgZ2V0UGh5c2ljYWxGaWxlbmFtZSB9IGZyb20gJ2VzbGludC1tb2R1bGUtdXRpbHMvY29udGV4dENvbXBhdCc7XG5pbXBvcnQgcmVzb2x2ZSBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL3Jlc29sdmUnO1xuaW1wb3J0IG1vZHVsZVZpc2l0b3IgZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy9tb2R1bGVWaXNpdG9yJztcblxuaW1wb3J0IGRvY3NVcmwgZnJvbSAnLi4vZG9jc1VybCc7XG5cbmZ1bmN0aW9uIGlzSW1wb3J0aW5nU2VsZihjb250ZXh0LCBub2RlLCByZXF1aXJlTmFtZSkge1xuICBjb25zdCBmaWxlUGF0aCA9IGdldFBoeXNpY2FsRmlsZW5hbWUoY29udGV4dCk7XG5cbiAgLy8gSWYgdGhlIGlucHV0IGlzIGZyb20gc3RkaW4sIHRoaXMgdGVzdCBjYW4ndCBmYWlsXG4gIGlmIChmaWxlUGF0aCAhPT0gJzx0ZXh0PicgJiYgZmlsZVBhdGggPT09IHJlc29sdmUocmVxdWlyZU5hbWUsIGNvbnRleHQpKSB7XG4gICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgbm9kZSxcbiAgICAgIG1lc3NhZ2U6ICdNb2R1bGUgaW1wb3J0cyBpdHNlbGYuJyxcbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWV0YToge1xuICAgIHR5cGU6ICdwcm9ibGVtJyxcbiAgICBkb2NzOiB7XG4gICAgICBjYXRlZ29yeTogJ1N0YXRpYyBhbmFseXNpcycsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvcmJpZCBhIG1vZHVsZSBmcm9tIGltcG9ydGluZyBpdHNlbGYuJyxcbiAgICAgIHJlY29tbWVuZGVkOiB0cnVlLFxuICAgICAgdXJsOiBkb2NzVXJsKCduby1zZWxmLWltcG9ydCcpLFxuICAgIH0sXG5cbiAgICBzY2hlbWE6IFtdLFxuICB9LFxuICBjcmVhdGUoY29udGV4dCkge1xuICAgIHJldHVybiBtb2R1bGVWaXNpdG9yKChzb3VyY2UsIG5vZGUpID0+IHtcbiAgICAgIGlzSW1wb3J0aW5nU2VsZihjb250ZXh0LCBub2RlLCBzb3VyY2UudmFsdWUpO1xuICAgIH0sIHsgY29tbW9uanM6IHRydWUgfSk7XG4gIH0sXG59O1xuIl19