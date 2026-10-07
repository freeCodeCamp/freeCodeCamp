'use strict';var _arrayPrototype = require('array.prototype.findlastindex');var _arrayPrototype2 = _interopRequireDefault(_arrayPrototype);

var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

function isNonExportStatement(_ref) {var type = _ref.type;
  return type !== 'ExportDefaultDeclaration' &&
  type !== 'ExportNamedDeclaration' &&
  type !== 'ExportAllDeclaration';
}

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Style guide',
      description: 'Ensure all exports appear after other statements.',
      url: (0, _docsUrl2['default'])('exports-last') },

    schema: [] },


  create: function () {function create(context) {
      return {
        Program: function () {function Program(_ref2) {var body = _ref2.body;
            var lastNonExportStatementIndex = (0, _arrayPrototype2['default'])(body, isNonExportStatement);

            if (lastNonExportStatementIndex !== -1) {
              body.slice(0, lastNonExportStatementIndex).forEach(function (node) {
                if (!isNonExportStatement(node)) {
                  context.report({
                    node: node,
                    message: 'Export statements should appear at the end of the file' });

                }
              });
            }
          }return Program;}() };

    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9leHBvcnRzLWxhc3QuanMiXSwibmFtZXMiOlsiaXNOb25FeHBvcnRTdGF0ZW1lbnQiLCJ0eXBlIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1ldGEiLCJkb2NzIiwiY2F0ZWdvcnkiLCJkZXNjcmlwdGlvbiIsInVybCIsInNjaGVtYSIsImNyZWF0ZSIsImNvbnRleHQiLCJQcm9ncmFtIiwiYm9keSIsImxhc3ROb25FeHBvcnRTdGF0ZW1lbnRJbmRleCIsInNsaWNlIiwiZm9yRWFjaCIsIm5vZGUiLCJyZXBvcnQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiYUFBQSwrRDs7QUFFQSxxQzs7QUFFQSxTQUFTQSxvQkFBVCxPQUF3QyxLQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDdEMsU0FBT0EsU0FBUywwQkFBVDtBQUNGQSxXQUFTLHdCQURQO0FBRUZBLFdBQVMsc0JBRmQ7QUFHRDs7QUFFREMsT0FBT0MsT0FBUCxHQUFpQjtBQUNmQyxRQUFNO0FBQ0pILFVBQU0sWUFERjtBQUVKSSxVQUFNO0FBQ0pDLGdCQUFVLGFBRE47QUFFSkMsbUJBQWEsbURBRlQ7QUFHSkMsV0FBSywwQkFBUSxjQUFSLENBSEQsRUFGRjs7QUFPSkMsWUFBUSxFQVBKLEVBRFM7OztBQVdmQyxRQVhlLCtCQVdSQyxPQVhRLEVBV0M7QUFDZCxhQUFPO0FBQ0xDLGVBREssdUNBQ2EsS0FBUkMsSUFBUSxTQUFSQSxJQUFRO0FBQ2hCLGdCQUFNQyw4QkFBOEIsaUNBQWNELElBQWQsRUFBb0JiLG9CQUFwQixDQUFwQzs7QUFFQSxnQkFBSWMsZ0NBQWdDLENBQUMsQ0FBckMsRUFBd0M7QUFDdENELG1CQUFLRSxLQUFMLENBQVcsQ0FBWCxFQUFjRCwyQkFBZCxFQUEyQ0UsT0FBM0MsQ0FBbUQsVUFBQ0MsSUFBRCxFQUFVO0FBQzNELG9CQUFJLENBQUNqQixxQkFBcUJpQixJQUFyQixDQUFMLEVBQWlDO0FBQy9CTiwwQkFBUU8sTUFBUixDQUFlO0FBQ2JELDhCQURhO0FBRWJFLDZCQUFTLHdEQUZJLEVBQWY7O0FBSUQ7QUFDRixlQVBEO0FBUUQ7QUFDRixXQWRJLG9CQUFQOztBQWdCRCxLQTVCYyxtQkFBakIiLCJmaWxlIjoiZXhwb3J0cy1sYXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpbmRMYXN0SW5kZXggZnJvbSAnYXJyYXkucHJvdG90eXBlLmZpbmRsYXN0aW5kZXgnO1xuXG5pbXBvcnQgZG9jc1VybCBmcm9tICcuLi9kb2NzVXJsJztcblxuZnVuY3Rpb24gaXNOb25FeHBvcnRTdGF0ZW1lbnQoeyB0eXBlIH0pIHtcbiAgcmV0dXJuIHR5cGUgIT09ICdFeHBvcnREZWZhdWx0RGVjbGFyYXRpb24nXG4gICAgJiYgdHlwZSAhPT0gJ0V4cG9ydE5hbWVkRGVjbGFyYXRpb24nXG4gICAgJiYgdHlwZSAhPT0gJ0V4cG9ydEFsbERlY2xhcmF0aW9uJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1ldGE6IHtcbiAgICB0eXBlOiAnc3VnZ2VzdGlvbicsXG4gICAgZG9jczoge1xuICAgICAgY2F0ZWdvcnk6ICdTdHlsZSBndWlkZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0Vuc3VyZSBhbGwgZXhwb3J0cyBhcHBlYXIgYWZ0ZXIgb3RoZXIgc3RhdGVtZW50cy4nLFxuICAgICAgdXJsOiBkb2NzVXJsKCdleHBvcnRzLWxhc3QnKSxcbiAgICB9LFxuICAgIHNjaGVtYTogW10sXG4gIH0sXG5cbiAgY3JlYXRlKGNvbnRleHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgUHJvZ3JhbSh7IGJvZHkgfSkge1xuICAgICAgICBjb25zdCBsYXN0Tm9uRXhwb3J0U3RhdGVtZW50SW5kZXggPSBmaW5kTGFzdEluZGV4KGJvZHksIGlzTm9uRXhwb3J0U3RhdGVtZW50KTtcblxuICAgICAgICBpZiAobGFzdE5vbkV4cG9ydFN0YXRlbWVudEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIGJvZHkuc2xpY2UoMCwgbGFzdE5vbkV4cG9ydFN0YXRlbWVudEluZGV4KS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWlzTm9uRXhwb3J0U3RhdGVtZW50KG5vZGUpKSB7XG4gICAgICAgICAgICAgIGNvbnRleHQucmVwb3J0KHtcbiAgICAgICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFeHBvcnQgc3RhdGVtZW50cyBzaG91bGQgYXBwZWFyIGF0IHRoZSBlbmQgb2YgdGhlIGZpbGUnLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuICB9LFxufTtcbiJdfQ==