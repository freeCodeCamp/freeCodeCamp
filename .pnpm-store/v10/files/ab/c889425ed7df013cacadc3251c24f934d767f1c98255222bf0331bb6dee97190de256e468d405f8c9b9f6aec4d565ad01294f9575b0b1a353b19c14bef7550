'use strict';var _sourceType = require('../core/sourceType');var _sourceType2 = _interopRequireDefault(_sourceType);
var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Style guide',
      description: 'Forbid named exports.',
      url: (0, _docsUrl2['default'])('no-named-export') },

    schema: [] },


  create: function () {function create(context) {
      // ignore non-modules
      if ((0, _sourceType2['default'])(context) !== 'module') {
        return {};
      }

      var message = 'Named exports are not allowed.';

      return {
        ExportAllDeclaration: function () {function ExportAllDeclaration(node) {
            context.report({ node: node, message: message });
          }return ExportAllDeclaration;}(),

        ExportNamedDeclaration: function () {function ExportNamedDeclaration(node) {
            if (node.specifiers.length === 0) {
              return context.report({ node: node, message: message });
            }

            var someNamed = node.specifiers.some(function (specifier) {return (specifier.exported.name || specifier.exported.value) !== 'default';});
            if (someNamed) {
              context.report({ node: node, message: message });
            }
          }return ExportNamedDeclaration;}() };

    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby1uYW1lZC1leHBvcnQuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIm1ldGEiLCJ0eXBlIiwiZG9jcyIsImNhdGVnb3J5IiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJzY2hlbWEiLCJjcmVhdGUiLCJjb250ZXh0IiwibWVzc2FnZSIsIkV4cG9ydEFsbERlY2xhcmF0aW9uIiwibm9kZSIsInJlcG9ydCIsIkV4cG9ydE5hbWVkRGVjbGFyYXRpb24iLCJzcGVjaWZpZXJzIiwibGVuZ3RoIiwic29tZU5hbWVkIiwic29tZSIsInNwZWNpZmllciIsImV4cG9ydGVkIiwibmFtZSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiYUFBQSxnRDtBQUNBLHFDOztBQUVBQSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLFFBQU07QUFDSkMsVUFBTSxZQURGO0FBRUpDLFVBQU07QUFDSkMsZ0JBQVUsYUFETjtBQUVKQyxtQkFBYSx1QkFGVDtBQUdKQyxXQUFLLDBCQUFRLGlCQUFSLENBSEQsRUFGRjs7QUFPSkMsWUFBUSxFQVBKLEVBRFM7OztBQVdmQyxRQVhlLCtCQVdSQyxPQVhRLEVBV0M7QUFDZDtBQUNBLFVBQUksNkJBQVdBLE9BQVgsTUFBd0IsUUFBNUIsRUFBc0M7QUFDcEMsZUFBTyxFQUFQO0FBQ0Q7O0FBRUQsVUFBTUMsVUFBVSxnQ0FBaEI7O0FBRUEsYUFBTztBQUNMQyw0QkFESyw2Q0FDZ0JDLElBRGhCLEVBQ3NCO0FBQ3pCSCxvQkFBUUksTUFBUixDQUFlLEVBQUVELFVBQUYsRUFBUUYsZ0JBQVIsRUFBZjtBQUNELFdBSEk7O0FBS0xJLDhCQUxLLCtDQUtrQkYsSUFMbEIsRUFLd0I7QUFDM0IsZ0JBQUlBLEtBQUtHLFVBQUwsQ0FBZ0JDLE1BQWhCLEtBQTJCLENBQS9CLEVBQWtDO0FBQ2hDLHFCQUFPUCxRQUFRSSxNQUFSLENBQWUsRUFBRUQsVUFBRixFQUFRRixnQkFBUixFQUFmLENBQVA7QUFDRDs7QUFFRCxnQkFBTU8sWUFBWUwsS0FBS0csVUFBTCxDQUFnQkcsSUFBaEIsQ0FBcUIsVUFBQ0MsU0FBRCxVQUFlLENBQUNBLFVBQVVDLFFBQVYsQ0FBbUJDLElBQW5CLElBQTJCRixVQUFVQyxRQUFWLENBQW1CRSxLQUEvQyxNQUEwRCxTQUF6RSxFQUFyQixDQUFsQjtBQUNBLGdCQUFJTCxTQUFKLEVBQWU7QUFDYlIsc0JBQVFJLE1BQVIsQ0FBZSxFQUFFRCxVQUFGLEVBQVFGLGdCQUFSLEVBQWY7QUFDRDtBQUNGLFdBZEksbUNBQVA7O0FBZ0JELEtBbkNjLG1CQUFqQiIsImZpbGUiOiJuby1uYW1lZC1leHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc291cmNlVHlwZSBmcm9tICcuLi9jb3JlL3NvdXJjZVR5cGUnO1xuaW1wb3J0IGRvY3NVcmwgZnJvbSAnLi4vZG9jc1VybCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtZXRhOiB7XG4gICAgdHlwZTogJ3N1Z2dlc3Rpb24nLFxuICAgIGRvY3M6IHtcbiAgICAgIGNhdGVnb3J5OiAnU3R5bGUgZ3VpZGUnLFxuICAgICAgZGVzY3JpcHRpb246ICdGb3JiaWQgbmFtZWQgZXhwb3J0cy4nLFxuICAgICAgdXJsOiBkb2NzVXJsKCduby1uYW1lZC1leHBvcnQnKSxcbiAgICB9LFxuICAgIHNjaGVtYTogW10sXG4gIH0sXG5cbiAgY3JlYXRlKGNvbnRleHQpIHtcbiAgICAvLyBpZ25vcmUgbm9uLW1vZHVsZXNcbiAgICBpZiAoc291cmNlVHlwZShjb250ZXh0KSAhPT0gJ21vZHVsZScpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlID0gJ05hbWVkIGV4cG9ydHMgYXJlIG5vdCBhbGxvd2VkLic7XG5cbiAgICByZXR1cm4ge1xuICAgICAgRXhwb3J0QWxsRGVjbGFyYXRpb24obm9kZSkge1xuICAgICAgICBjb250ZXh0LnJlcG9ydCh7IG5vZGUsIG1lc3NhZ2UgfSk7XG4gICAgICB9LFxuXG4gICAgICBFeHBvcnROYW1lZERlY2xhcmF0aW9uKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUuc3BlY2lmaWVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5yZXBvcnQoeyBub2RlLCBtZXNzYWdlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc29tZU5hbWVkID0gbm9kZS5zcGVjaWZpZXJzLnNvbWUoKHNwZWNpZmllcikgPT4gKHNwZWNpZmllci5leHBvcnRlZC5uYW1lIHx8IHNwZWNpZmllci5leHBvcnRlZC52YWx1ZSkgIT09ICdkZWZhdWx0Jyk7XG4gICAgICAgIGlmIChzb21lTmFtZWQpIHtcbiAgICAgICAgICBjb250ZXh0LnJlcG9ydCh7IG5vZGUsIG1lc3NhZ2UgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbn07XG4iXX0=