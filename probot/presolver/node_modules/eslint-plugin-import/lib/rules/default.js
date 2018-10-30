'use strict';

var _ExportMap = require('../ExportMap');

var _ExportMap2 = _interopRequireDefault(_ExportMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  meta: {
    docs: {}
  },

  create: function (context) {

    function checkDefault(specifierType, node) {

      // poor man's Array.find
      let defaultSpecifier;
      node.specifiers.some(n => {
        if (n.type === specifierType) {
          defaultSpecifier = n;
          return true;
        }
      });

      if (!defaultSpecifier) return;
      var imports = _ExportMap2.default.get(node.source.value, context);
      if (imports == null) return;

      if (imports.errors.length) {
        imports.reportErrors(context, node);
      } else if (imports.get('default') === undefined) {
        context.report(defaultSpecifier, 'No default export found in module.');
      }
    }

    return {
      'ImportDeclaration': checkDefault.bind(null, 'ImportDefaultSpecifier'),
      'ExportNamedDeclaration': checkDefault.bind(null, 'ExportDefaultSpecifier')
    };
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2RlZmF1bHQuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIm1ldGEiLCJkb2NzIiwiY3JlYXRlIiwiY29udGV4dCIsImNoZWNrRGVmYXVsdCIsInNwZWNpZmllclR5cGUiLCJub2RlIiwiZGVmYXVsdFNwZWNpZmllciIsInNwZWNpZmllcnMiLCJzb21lIiwibiIsInR5cGUiLCJpbXBvcnRzIiwiZ2V0Iiwic291cmNlIiwidmFsdWUiLCJlcnJvcnMiLCJsZW5ndGgiLCJyZXBvcnRFcnJvcnMiLCJ1bmRlZmluZWQiLCJyZXBvcnQiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7QUFFQUEsT0FBT0MsT0FBUCxHQUFpQjtBQUNmQyxRQUFNO0FBQ0pDLFVBQU07QUFERixHQURTOztBQUtmQyxVQUFRLFVBQVVDLE9BQVYsRUFBbUI7O0FBRXpCLGFBQVNDLFlBQVQsQ0FBc0JDLGFBQXRCLEVBQXFDQyxJQUFyQyxFQUEyQzs7QUFFekM7QUFDQSxVQUFJQyxnQkFBSjtBQUNBRCxXQUFLRSxVQUFMLENBQWdCQyxJQUFoQixDQUFzQkMsQ0FBRCxJQUFPO0FBQzFCLFlBQUlBLEVBQUVDLElBQUYsS0FBV04sYUFBZixFQUE4QjtBQUM1QkUsNkJBQW1CRyxDQUFuQjtBQUNBLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BTEQ7O0FBT0EsVUFBSSxDQUFDSCxnQkFBTCxFQUF1QjtBQUN2QixVQUFJSyxVQUFVLG9CQUFRQyxHQUFSLENBQVlQLEtBQUtRLE1BQUwsQ0FBWUMsS0FBeEIsRUFBK0JaLE9BQS9CLENBQWQ7QUFDQSxVQUFJUyxXQUFXLElBQWYsRUFBcUI7O0FBRXJCLFVBQUlBLFFBQVFJLE1BQVIsQ0FBZUMsTUFBbkIsRUFBMkI7QUFDekJMLGdCQUFRTSxZQUFSLENBQXFCZixPQUFyQixFQUE4QkcsSUFBOUI7QUFDRCxPQUZELE1BRU8sSUFBSU0sUUFBUUMsR0FBUixDQUFZLFNBQVosTUFBMkJNLFNBQS9CLEVBQTBDO0FBQy9DaEIsZ0JBQVFpQixNQUFSLENBQWViLGdCQUFmLEVBQWlDLG9DQUFqQztBQUNEO0FBQ0Y7O0FBRUQsV0FBTztBQUNMLDJCQUFxQkgsYUFBYWlCLElBQWIsQ0FBa0IsSUFBbEIsRUFBd0Isd0JBQXhCLENBRGhCO0FBRUwsZ0NBQTBCakIsYUFBYWlCLElBQWIsQ0FBa0IsSUFBbEIsRUFBd0Isd0JBQXhCO0FBRnJCLEtBQVA7QUFJRDtBQWpDYyxDQUFqQiIsImZpbGUiOiJydWxlcy9kZWZhdWx0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4cG9ydHMgZnJvbSAnLi4vRXhwb3J0TWFwJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWV0YToge1xuICAgIGRvY3M6IHt9LFxuICB9LFxuXG4gIGNyZWF0ZTogZnVuY3Rpb24gKGNvbnRleHQpIHtcblxuICAgIGZ1bmN0aW9uIGNoZWNrRGVmYXVsdChzcGVjaWZpZXJUeXBlLCBub2RlKSB7XG5cbiAgICAgIC8vIHBvb3IgbWFuJ3MgQXJyYXkuZmluZFxuICAgICAgbGV0IGRlZmF1bHRTcGVjaWZpZXJcbiAgICAgIG5vZGUuc3BlY2lmaWVycy5zb21lKChuKSA9PiB7XG4gICAgICAgIGlmIChuLnR5cGUgPT09IHNwZWNpZmllclR5cGUpIHtcbiAgICAgICAgICBkZWZhdWx0U3BlY2lmaWVyID0gblxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGlmICghZGVmYXVsdFNwZWNpZmllcikgcmV0dXJuXG4gICAgICB2YXIgaW1wb3J0cyA9IEV4cG9ydHMuZ2V0KG5vZGUuc291cmNlLnZhbHVlLCBjb250ZXh0KVxuICAgICAgaWYgKGltcG9ydHMgPT0gbnVsbCkgcmV0dXJuXG5cbiAgICAgIGlmIChpbXBvcnRzLmVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgaW1wb3J0cy5yZXBvcnRFcnJvcnMoY29udGV4dCwgbm9kZSlcbiAgICAgIH0gZWxzZSBpZiAoaW1wb3J0cy5nZXQoJ2RlZmF1bHQnKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRleHQucmVwb3J0KGRlZmF1bHRTcGVjaWZpZXIsICdObyBkZWZhdWx0IGV4cG9ydCBmb3VuZCBpbiBtb2R1bGUuJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgJ0ltcG9ydERlY2xhcmF0aW9uJzogY2hlY2tEZWZhdWx0LmJpbmQobnVsbCwgJ0ltcG9ydERlZmF1bHRTcGVjaWZpZXInKSxcbiAgICAgICdFeHBvcnROYW1lZERlY2xhcmF0aW9uJzogY2hlY2tEZWZhdWx0LmJpbmQobnVsbCwgJ0V4cG9ydERlZmF1bHRTcGVjaWZpZXInKSxcbiAgICB9XG4gIH0sXG59XG4iXX0=