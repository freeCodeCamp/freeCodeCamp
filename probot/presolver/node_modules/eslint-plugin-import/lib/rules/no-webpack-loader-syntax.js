'use strict';

var _staticRequire = require('../core/staticRequire');

var _staticRequire2 = _interopRequireDefault(_staticRequire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reportIfNonStandard(context, node, name) {
  if (name.indexOf('!') !== -1) {
    context.report(node, `Unexpected '!' in '${ name }'. ` + 'Do not use import syntax to configure webpack loaders.');
  }
}

module.exports = {
  meta: {
    docs: {}
  },

  create: function (context) {
    return {
      ImportDeclaration: function handleImports(node) {
        reportIfNonStandard(context, node, node.source.value);
      },
      CallExpression: function handleRequires(node) {
        if ((0, _staticRequire2.default)(node)) {
          reportIfNonStandard(context, node, node.arguments[0].value);
        }
      }
    };
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25vLXdlYnBhY2stbG9hZGVyLXN5bnRheC5qcyJdLCJuYW1lcyI6WyJyZXBvcnRJZk5vblN0YW5kYXJkIiwiY29udGV4dCIsIm5vZGUiLCJuYW1lIiwiaW5kZXhPZiIsInJlcG9ydCIsIm1vZHVsZSIsImV4cG9ydHMiLCJtZXRhIiwiZG9jcyIsImNyZWF0ZSIsIkltcG9ydERlY2xhcmF0aW9uIiwiaGFuZGxlSW1wb3J0cyIsInNvdXJjZSIsInZhbHVlIiwiQ2FsbEV4cHJlc3Npb24iLCJoYW5kbGVSZXF1aXJlcyIsImFyZ3VtZW50cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBRUEsU0FBU0EsbUJBQVQsQ0FBNkJDLE9BQTdCLEVBQXNDQyxJQUF0QyxFQUE0Q0MsSUFBNUMsRUFBa0Q7QUFDaEQsTUFBSUEsS0FBS0MsT0FBTCxDQUFhLEdBQWIsTUFBc0IsQ0FBQyxDQUEzQixFQUE4QjtBQUM1QkgsWUFBUUksTUFBUixDQUFlSCxJQUFmLEVBQXNCLHVCQUFxQkMsSUFBSyxNQUEzQixHQUNuQix3REFERjtBQUdEO0FBQ0Y7O0FBRURHLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsUUFBTTtBQUNKQyxVQUFNO0FBREYsR0FEUzs7QUFLZkMsVUFBUSxVQUFVVCxPQUFWLEVBQW1CO0FBQ3pCLFdBQU87QUFDTFUseUJBQW1CLFNBQVNDLGFBQVQsQ0FBdUJWLElBQXZCLEVBQTZCO0FBQzlDRiw0QkFBb0JDLE9BQXBCLEVBQTZCQyxJQUE3QixFQUFtQ0EsS0FBS1csTUFBTCxDQUFZQyxLQUEvQztBQUNELE9BSEk7QUFJTEMsc0JBQWdCLFNBQVNDLGNBQVQsQ0FBd0JkLElBQXhCLEVBQThCO0FBQzVDLFlBQUksNkJBQWdCQSxJQUFoQixDQUFKLEVBQTJCO0FBQ3pCRiw4QkFBb0JDLE9BQXBCLEVBQTZCQyxJQUE3QixFQUFtQ0EsS0FBS2UsU0FBTCxDQUFlLENBQWYsRUFBa0JILEtBQXJEO0FBQ0Q7QUFDRjtBQVJJLEtBQVA7QUFVRDtBQWhCYyxDQUFqQiIsImZpbGUiOiJydWxlcy9uby13ZWJwYWNrLWxvYWRlci1zeW50YXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaXNTdGF0aWNSZXF1aXJlIGZyb20gJy4uL2NvcmUvc3RhdGljUmVxdWlyZSdcblxuZnVuY3Rpb24gcmVwb3J0SWZOb25TdGFuZGFyZChjb250ZXh0LCBub2RlLCBuYW1lKSB7XG4gIGlmIChuYW1lLmluZGV4T2YoJyEnKSAhPT0gLTEpIHtcbiAgICBjb250ZXh0LnJlcG9ydChub2RlLCBgVW5leHBlY3RlZCAnIScgaW4gJyR7bmFtZX0nLiBgICtcbiAgICAgICdEbyBub3QgdXNlIGltcG9ydCBzeW50YXggdG8gY29uZmlndXJlIHdlYnBhY2sgbG9hZGVycy4nXG4gICAgKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtZXRhOiB7XG4gICAgZG9jczoge30sXG4gIH0sXG5cbiAgY3JlYXRlOiBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgIHJldHVybiB7XG4gICAgICBJbXBvcnREZWNsYXJhdGlvbjogZnVuY3Rpb24gaGFuZGxlSW1wb3J0cyhub2RlKSB7XG4gICAgICAgIHJlcG9ydElmTm9uU3RhbmRhcmQoY29udGV4dCwgbm9kZSwgbm9kZS5zb3VyY2UudmFsdWUpXG4gICAgICB9LFxuICAgICAgQ2FsbEV4cHJlc3Npb246IGZ1bmN0aW9uIGhhbmRsZVJlcXVpcmVzKG5vZGUpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljUmVxdWlyZShub2RlKSkge1xuICAgICAgICAgIHJlcG9ydElmTm9uU3RhbmRhcmQoY29udGV4dCwgbm9kZSwgbm9kZS5hcmd1bWVudHNbMF0udmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuICB9LFxufVxuIl19