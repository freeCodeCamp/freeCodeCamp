'use strict';

var _importType = require('../core/importType');

var _importType2 = _interopRequireDefault(_importType);

var _staticRequire = require('../core/staticRequire');

var _staticRequire2 = _interopRequireDefault(_staticRequire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reportIfMissing(context, node, allowed, name) {
  if (allowed.indexOf(name) === -1 && (0, _importType2.default)(name, context) === 'builtin') {
    context.report(node, 'Do not import Node.js builtin module "' + name + '"');
  }
}

module.exports = {
  meta: {
    docs: {}
  },

  create: function (context) {
    const options = context.options[0] || {};
    const allowed = options.allow || [];

    return {
      ImportDeclaration: function handleImports(node) {
        reportIfMissing(context, node, allowed, node.source.value);
      },
      CallExpression: function handleRequires(node) {
        if ((0, _staticRequire2.default)(node)) {
          reportIfMissing(context, node, allowed, node.arguments[0].value);
        }
      }
    };
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25vLW5vZGVqcy1tb2R1bGVzLmpzIl0sIm5hbWVzIjpbInJlcG9ydElmTWlzc2luZyIsImNvbnRleHQiLCJub2RlIiwiYWxsb3dlZCIsIm5hbWUiLCJpbmRleE9mIiwicmVwb3J0IiwibW9kdWxlIiwiZXhwb3J0cyIsIm1ldGEiLCJkb2NzIiwiY3JlYXRlIiwib3B0aW9ucyIsImFsbG93IiwiSW1wb3J0RGVjbGFyYXRpb24iLCJoYW5kbGVJbXBvcnRzIiwic291cmNlIiwidmFsdWUiLCJDYWxsRXhwcmVzc2lvbiIsImhhbmRsZVJlcXVpcmVzIiwiYXJndW1lbnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLGVBQVQsQ0FBeUJDLE9BQXpCLEVBQWtDQyxJQUFsQyxFQUF3Q0MsT0FBeEMsRUFBaURDLElBQWpELEVBQXVEO0FBQ3JELE1BQUlELFFBQVFFLE9BQVIsQ0FBZ0JELElBQWhCLE1BQTBCLENBQUMsQ0FBM0IsSUFBZ0MsMEJBQVdBLElBQVgsRUFBaUJILE9BQWpCLE1BQThCLFNBQWxFLEVBQTZFO0FBQzNFQSxZQUFRSyxNQUFSLENBQWVKLElBQWYsRUFBcUIsMkNBQTJDRSxJQUEzQyxHQUFrRCxHQUF2RTtBQUNEO0FBQ0Y7O0FBRURHLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsUUFBTTtBQUNKQyxVQUFNO0FBREYsR0FEUzs7QUFLZkMsVUFBUSxVQUFVVixPQUFWLEVBQW1CO0FBQ3pCLFVBQU1XLFVBQVVYLFFBQVFXLE9BQVIsQ0FBZ0IsQ0FBaEIsS0FBc0IsRUFBdEM7QUFDQSxVQUFNVCxVQUFVUyxRQUFRQyxLQUFSLElBQWlCLEVBQWpDOztBQUVBLFdBQU87QUFDTEMseUJBQW1CLFNBQVNDLGFBQVQsQ0FBdUJiLElBQXZCLEVBQTZCO0FBQzlDRix3QkFBZ0JDLE9BQWhCLEVBQXlCQyxJQUF6QixFQUErQkMsT0FBL0IsRUFBd0NELEtBQUtjLE1BQUwsQ0FBWUMsS0FBcEQ7QUFDRCxPQUhJO0FBSUxDLHNCQUFnQixTQUFTQyxjQUFULENBQXdCakIsSUFBeEIsRUFBOEI7QUFDNUMsWUFBSSw2QkFBZ0JBLElBQWhCLENBQUosRUFBMkI7QUFDekJGLDBCQUFnQkMsT0FBaEIsRUFBeUJDLElBQXpCLEVBQStCQyxPQUEvQixFQUF3Q0QsS0FBS2tCLFNBQUwsQ0FBZSxDQUFmLEVBQWtCSCxLQUExRDtBQUNEO0FBQ0Y7QUFSSSxLQUFQO0FBVUQ7QUFuQmMsQ0FBakIiLCJmaWxlIjoicnVsZXMvbm8tbm9kZWpzLW1vZHVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW1wb3J0VHlwZSBmcm9tICcuLi9jb3JlL2ltcG9ydFR5cGUnXG5pbXBvcnQgaXNTdGF0aWNSZXF1aXJlIGZyb20gJy4uL2NvcmUvc3RhdGljUmVxdWlyZSdcblxuZnVuY3Rpb24gcmVwb3J0SWZNaXNzaW5nKGNvbnRleHQsIG5vZGUsIGFsbG93ZWQsIG5hbWUpIHtcbiAgaWYgKGFsbG93ZWQuaW5kZXhPZihuYW1lKSA9PT0gLTEgJiYgaW1wb3J0VHlwZShuYW1lLCBjb250ZXh0KSA9PT0gJ2J1aWx0aW4nKSB7XG4gICAgY29udGV4dC5yZXBvcnQobm9kZSwgJ0RvIG5vdCBpbXBvcnQgTm9kZS5qcyBidWlsdGluIG1vZHVsZSBcIicgKyBuYW1lICsgJ1wiJylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWV0YToge1xuICAgIGRvY3M6IHt9LFxuICB9LFxuXG4gIGNyZWF0ZTogZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICBjb25zdCBvcHRpb25zID0gY29udGV4dC5vcHRpb25zWzBdIHx8IHt9XG4gICAgY29uc3QgYWxsb3dlZCA9IG9wdGlvbnMuYWxsb3cgfHwgW11cblxuICAgIHJldHVybiB7XG4gICAgICBJbXBvcnREZWNsYXJhdGlvbjogZnVuY3Rpb24gaGFuZGxlSW1wb3J0cyhub2RlKSB7XG4gICAgICAgIHJlcG9ydElmTWlzc2luZyhjb250ZXh0LCBub2RlLCBhbGxvd2VkLCBub2RlLnNvdXJjZS52YWx1ZSlcbiAgICAgIH0sXG4gICAgICBDYWxsRXhwcmVzc2lvbjogZnVuY3Rpb24gaGFuZGxlUmVxdWlyZXMobm9kZSkge1xuICAgICAgICBpZiAoaXNTdGF0aWNSZXF1aXJlKG5vZGUpKSB7XG4gICAgICAgICAgcmVwb3J0SWZNaXNzaW5nKGNvbnRleHQsIG5vZGUsIGFsbG93ZWQsIG5vZGUuYXJndW1lbnRzWzBdLnZhbHVlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH1cbiAgfSxcbn1cbiJdfQ==