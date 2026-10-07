'use strict';var _path = require('path');var _path2 = _interopRequireDefault(_path);
var _contextCompat = require('eslint-module-utils/contextCompat');
var _moduleVisitor = require('eslint-module-utils/moduleVisitor');var _moduleVisitor2 = _interopRequireDefault(_moduleVisitor);

var _importType = require('../core/importType');
var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Static analysis',
      description: 'Forbid import of modules using absolute paths.',
      url: (0, _docsUrl2['default'])('no-absolute-path') },

    fixable: 'code',
    schema: [(0, _moduleVisitor.makeOptionsSchema)()] },


  create: function () {function create(context) {
      function reportIfAbsolute(source) {
        if ((0, _importType.isAbsolute)(source.value)) {
          context.report({
            node: source,
            message: 'Do not import modules using an absolute path',
            fix: function () {function fix(fixer) {
                // node.js and web imports work with posix style paths ("/")
                var relativePath = _path2['default'].posix.relative(_path2['default'].dirname((0, _contextCompat.getPhysicalFilename)(context)), source.value);
                if (!relativePath.startsWith('.')) {
                  relativePath = './' + String(relativePath);
                }
                return fixer.replaceText(source, JSON.stringify(relativePath));
              }return fix;}() });

        }
      }

      var options = Object.assign({ esmodule: true, commonjs: true }, context.options[0]);
      return (0, _moduleVisitor2['default'])(reportIfAbsolute, options);
    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby1hYnNvbHV0ZS1wYXRoLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJtZXRhIiwidHlwZSIsImRvY3MiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwidXJsIiwiZml4YWJsZSIsInNjaGVtYSIsImNyZWF0ZSIsImNvbnRleHQiLCJyZXBvcnRJZkFic29sdXRlIiwic291cmNlIiwidmFsdWUiLCJyZXBvcnQiLCJub2RlIiwibWVzc2FnZSIsImZpeCIsImZpeGVyIiwicmVsYXRpdmVQYXRoIiwicGF0aCIsInBvc2l4IiwicmVsYXRpdmUiLCJkaXJuYW1lIiwic3RhcnRzV2l0aCIsInJlcGxhY2VUZXh0IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9wdGlvbnMiLCJlc21vZHVsZSIsImNvbW1vbmpzIl0sIm1hcHBpbmdzIjoiYUFBQSw0QjtBQUNBO0FBQ0Esa0U7O0FBRUE7QUFDQSxxQzs7QUFFQUEsT0FBT0MsT0FBUCxHQUFpQjtBQUNmQyxRQUFNO0FBQ0pDLFVBQU0sWUFERjtBQUVKQyxVQUFNO0FBQ0pDLGdCQUFVLGlCQUROO0FBRUpDLG1CQUFhLGdEQUZUO0FBR0pDLFdBQUssMEJBQVEsa0JBQVIsQ0FIRCxFQUZGOztBQU9KQyxhQUFTLE1BUEw7QUFRSkMsWUFBUSxDQUFDLHVDQUFELENBUkosRUFEUzs7O0FBWWZDLFFBWmUsK0JBWVJDLE9BWlEsRUFZQztBQUNkLGVBQVNDLGdCQUFULENBQTBCQyxNQUExQixFQUFrQztBQUNoQyxZQUFJLDRCQUFXQSxPQUFPQyxLQUFsQixDQUFKLEVBQThCO0FBQzVCSCxrQkFBUUksTUFBUixDQUFlO0FBQ2JDLGtCQUFNSCxNQURPO0FBRWJJLHFCQUFTLDhDQUZJO0FBR2JDLGVBSGEsNEJBR1RDLEtBSFMsRUFHRjtBQUNUO0FBQ0Esb0JBQUlDLGVBQWVDLGtCQUFLQyxLQUFMLENBQVdDLFFBQVgsQ0FBb0JGLGtCQUFLRyxPQUFMLENBQWEsd0NBQW9CYixPQUFwQixDQUFiLENBQXBCLEVBQWdFRSxPQUFPQyxLQUF2RSxDQUFuQjtBQUNBLG9CQUFJLENBQUNNLGFBQWFLLFVBQWIsQ0FBd0IsR0FBeEIsQ0FBTCxFQUFtQztBQUNqQ0wsK0NBQW9CQSxZQUFwQjtBQUNEO0FBQ0QsdUJBQU9ELE1BQU1PLFdBQU4sQ0FBa0JiLE1BQWxCLEVBQTBCYyxLQUFLQyxTQUFMLENBQWVSLFlBQWYsQ0FBMUIsQ0FBUDtBQUNELGVBVlksZ0JBQWY7O0FBWUQ7QUFDRjs7QUFFRCxVQUFNUywwQkFBWUMsVUFBVSxJQUF0QixFQUE0QkMsVUFBVSxJQUF0QyxJQUErQ3BCLFFBQVFrQixPQUFSLENBQWdCLENBQWhCLENBQS9DLENBQU47QUFDQSxhQUFPLGdDQUFjakIsZ0JBQWQsRUFBZ0NpQixPQUFoQyxDQUFQO0FBQ0QsS0FoQ2MsbUJBQWpCIiwiZmlsZSI6Im5vLWFic29sdXRlLXBhdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IGdldFBoeXNpY2FsRmlsZW5hbWUgfSBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL2NvbnRleHRDb21wYXQnO1xuaW1wb3J0IG1vZHVsZVZpc2l0b3IsIHsgbWFrZU9wdGlvbnNTY2hlbWEgfSBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL21vZHVsZVZpc2l0b3InO1xuXG5pbXBvcnQgeyBpc0Fic29sdXRlIH0gZnJvbSAnLi4vY29yZS9pbXBvcnRUeXBlJztcbmltcG9ydCBkb2NzVXJsIGZyb20gJy4uL2RvY3NVcmwnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWV0YToge1xuICAgIHR5cGU6ICdzdWdnZXN0aW9uJyxcbiAgICBkb2NzOiB7XG4gICAgICBjYXRlZ29yeTogJ1N0YXRpYyBhbmFseXNpcycsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvcmJpZCBpbXBvcnQgb2YgbW9kdWxlcyB1c2luZyBhYnNvbHV0ZSBwYXRocy4nLFxuICAgICAgdXJsOiBkb2NzVXJsKCduby1hYnNvbHV0ZS1wYXRoJyksXG4gICAgfSxcbiAgICBmaXhhYmxlOiAnY29kZScsXG4gICAgc2NoZW1hOiBbbWFrZU9wdGlvbnNTY2hlbWEoKV0sXG4gIH0sXG5cbiAgY3JlYXRlKGNvbnRleHQpIHtcbiAgICBmdW5jdGlvbiByZXBvcnRJZkFic29sdXRlKHNvdXJjZSkge1xuICAgICAgaWYgKGlzQWJzb2x1dGUoc291cmNlLnZhbHVlKSkge1xuICAgICAgICBjb250ZXh0LnJlcG9ydCh7XG4gICAgICAgICAgbm9kZTogc291cmNlLFxuICAgICAgICAgIG1lc3NhZ2U6ICdEbyBub3QgaW1wb3J0IG1vZHVsZXMgdXNpbmcgYW4gYWJzb2x1dGUgcGF0aCcsXG4gICAgICAgICAgZml4KGZpeGVyKSB7XG4gICAgICAgICAgICAvLyBub2RlLmpzIGFuZCB3ZWIgaW1wb3J0cyB3b3JrIHdpdGggcG9zaXggc3R5bGUgcGF0aHMgKFwiL1wiKVxuICAgICAgICAgICAgbGV0IHJlbGF0aXZlUGF0aCA9IHBhdGgucG9zaXgucmVsYXRpdmUocGF0aC5kaXJuYW1lKGdldFBoeXNpY2FsRmlsZW5hbWUoY29udGV4dCkpLCBzb3VyY2UudmFsdWUpO1xuICAgICAgICAgICAgaWYgKCFyZWxhdGl2ZVBhdGguc3RhcnRzV2l0aCgnLicpKSB7XG4gICAgICAgICAgICAgIHJlbGF0aXZlUGF0aCA9IGAuLyR7cmVsYXRpdmVQYXRofWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZml4ZXIucmVwbGFjZVRleHQoc291cmNlLCBKU09OLnN0cmluZ2lmeShyZWxhdGl2ZVBhdGgpKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zID0geyBlc21vZHVsZTogdHJ1ZSwgY29tbW9uanM6IHRydWUsIC4uLmNvbnRleHQub3B0aW9uc1swXSB9O1xuICAgIHJldHVybiBtb2R1bGVWaXNpdG9yKHJlcG9ydElmQWJzb2x1dGUsIG9wdGlvbnMpO1xuICB9LFxufTtcbiJdfQ==