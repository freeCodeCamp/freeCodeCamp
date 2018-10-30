'use strict';

var _importType = require('../core/importType');

var _importType2 = _interopRequireDefault(_importType);

var _staticRequire = require('../core/staticRequire');

var _staticRequire2 = _interopRequireDefault(_staticRequire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reportIfMissing(context, node, name) {
  if ((0, _importType2.default)(name, context) === 'absolute') {
    context.report(node, 'Do not import modules using an absolute path');
  }
}

module.exports = {
  meta: {
    docs: {}
  },

  create: function (context) {
    return {
      ImportDeclaration: function handleImports(node) {
        reportIfMissing(context, node, node.source.value);
      },
      CallExpression: function handleRequires(node) {
        if ((0, _staticRequire2.default)(node)) {
          reportIfMissing(context, node, node.arguments[0].value);
        }
      }
    };
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25vLWFic29sdXRlLXBhdGguanMiXSwibmFtZXMiOlsicmVwb3J0SWZNaXNzaW5nIiwiY29udGV4dCIsIm5vZGUiLCJuYW1lIiwicmVwb3J0IiwibW9kdWxlIiwiZXhwb3J0cyIsIm1ldGEiLCJkb2NzIiwiY3JlYXRlIiwiSW1wb3J0RGVjbGFyYXRpb24iLCJoYW5kbGVJbXBvcnRzIiwic291cmNlIiwidmFsdWUiLCJDYWxsRXhwcmVzc2lvbiIsImhhbmRsZVJlcXVpcmVzIiwiYXJndW1lbnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLGVBQVQsQ0FBeUJDLE9BQXpCLEVBQWtDQyxJQUFsQyxFQUF3Q0MsSUFBeEMsRUFBOEM7QUFDNUMsTUFBSSwwQkFBV0EsSUFBWCxFQUFpQkYsT0FBakIsTUFBOEIsVUFBbEMsRUFBOEM7QUFDNUNBLFlBQVFHLE1BQVIsQ0FBZUYsSUFBZixFQUFxQiw4Q0FBckI7QUFDRDtBQUNGOztBQUVERyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLFFBQU07QUFDSkMsVUFBTTtBQURGLEdBRFM7O0FBS2ZDLFVBQVEsVUFBVVIsT0FBVixFQUFtQjtBQUN6QixXQUFPO0FBQ0xTLHlCQUFtQixTQUFTQyxhQUFULENBQXVCVCxJQUF2QixFQUE2QjtBQUM5Q0Ysd0JBQWdCQyxPQUFoQixFQUF5QkMsSUFBekIsRUFBK0JBLEtBQUtVLE1BQUwsQ0FBWUMsS0FBM0M7QUFDRCxPQUhJO0FBSUxDLHNCQUFnQixTQUFTQyxjQUFULENBQXdCYixJQUF4QixFQUE4QjtBQUM1QyxZQUFJLDZCQUFnQkEsSUFBaEIsQ0FBSixFQUEyQjtBQUN6QkYsMEJBQWdCQyxPQUFoQixFQUF5QkMsSUFBekIsRUFBK0JBLEtBQUtjLFNBQUwsQ0FBZSxDQUFmLEVBQWtCSCxLQUFqRDtBQUNEO0FBQ0Y7QUFSSSxLQUFQO0FBVUQ7QUFoQmMsQ0FBakIiLCJmaWxlIjoicnVsZXMvbm8tYWJzb2x1dGUtcGF0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbXBvcnRUeXBlIGZyb20gJy4uL2NvcmUvaW1wb3J0VHlwZSdcbmltcG9ydCBpc1N0YXRpY1JlcXVpcmUgZnJvbSAnLi4vY29yZS9zdGF0aWNSZXF1aXJlJ1xuXG5mdW5jdGlvbiByZXBvcnRJZk1pc3NpbmcoY29udGV4dCwgbm9kZSwgbmFtZSkge1xuICBpZiAoaW1wb3J0VHlwZShuYW1lLCBjb250ZXh0KSA9PT0gJ2Fic29sdXRlJykge1xuICAgIGNvbnRleHQucmVwb3J0KG5vZGUsICdEbyBub3QgaW1wb3J0IG1vZHVsZXMgdXNpbmcgYW4gYWJzb2x1dGUgcGF0aCcpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1ldGE6IHtcbiAgICBkb2NzOiB7fSxcbiAgfSxcblxuICBjcmVhdGU6IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIEltcG9ydERlY2xhcmF0aW9uOiBmdW5jdGlvbiBoYW5kbGVJbXBvcnRzKG5vZGUpIHtcbiAgICAgICAgcmVwb3J0SWZNaXNzaW5nKGNvbnRleHQsIG5vZGUsIG5vZGUuc291cmNlLnZhbHVlKVxuICAgICAgfSxcbiAgICAgIENhbGxFeHByZXNzaW9uOiBmdW5jdGlvbiBoYW5kbGVSZXF1aXJlcyhub2RlKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY1JlcXVpcmUobm9kZSkpIHtcbiAgICAgICAgICByZXBvcnRJZk1pc3NpbmcoY29udGV4dCwgbm9kZSwgbm9kZS5hcmd1bWVudHNbMF0udmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuICB9LFxufVxuIl19