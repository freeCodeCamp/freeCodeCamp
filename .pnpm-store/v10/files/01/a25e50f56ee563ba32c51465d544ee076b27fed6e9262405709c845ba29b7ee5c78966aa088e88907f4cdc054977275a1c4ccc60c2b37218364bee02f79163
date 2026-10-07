'use strict';




var _contextCompat = require('eslint-module-utils/contextCompat');

var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
/**
 * @fileoverview Rule to prefer imports to AMD
 * @author Jamund Ferguson
 */module.exports = { meta: { type: 'suggestion',
    docs: {
      category: 'Module systems',
      description: 'Forbid AMD `require` and `define` calls.',
      url: (0, _docsUrl2['default'])('no-amd') },

    schema: [] },


  create: function () {function create(context) {
      return {
        CallExpression: function () {function CallExpression(node) {
            if ((0, _contextCompat.getScope)(context, node).type !== 'module') {return;}

            if (node.callee.type !== 'Identifier') {return;}
            if (node.callee.name !== 'require' && node.callee.name !== 'define') {return;}

            // todo: capture define((require, module, exports) => {}) form?
            if (node.arguments.length !== 2) {return;}

            var modules = node.arguments[0];
            if (modules.type !== 'ArrayExpression') {return;}

            // todo: check second arg type? (identifier or callback)

            context.report(node, 'Expected imports instead of AMD ' + String(node.callee.name) + '().');
          }return CallExpression;}() };


    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby1hbWQuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIm1ldGEiLCJ0eXBlIiwiZG9jcyIsImNhdGVnb3J5IiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJzY2hlbWEiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ2FsbEV4cHJlc3Npb24iLCJub2RlIiwiY2FsbGVlIiwibmFtZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsIm1vZHVsZXMiLCJyZXBvcnQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0E7O0FBRUEscUM7O0FBRUE7QUFDQTtBQUNBO0FBWEE7OztHQWFBQSxPQUFPQyxPQUFQLEdBQWlCLEVBQ2ZDLE1BQU0sRUFDSkMsTUFBTSxZQURGO0FBRUpDLFVBQU07QUFDSkMsZ0JBQVUsZ0JBRE47QUFFSkMsbUJBQWEsMENBRlQ7QUFHSkMsV0FBSywwQkFBUSxRQUFSLENBSEQsRUFGRjs7QUFPSkMsWUFBUSxFQVBKLEVBRFM7OztBQVdmQyxRQVhlLCtCQVdSQyxPQVhRLEVBV0M7QUFDZCxhQUFPO0FBQ0xDLHNCQURLLHVDQUNVQyxJQURWLEVBQ2dCO0FBQ25CLGdCQUFJLDZCQUFTRixPQUFULEVBQWtCRSxJQUFsQixFQUF3QlQsSUFBeEIsS0FBaUMsUUFBckMsRUFBK0MsQ0FBRSxPQUFTOztBQUUxRCxnQkFBSVMsS0FBS0MsTUFBTCxDQUFZVixJQUFaLEtBQXFCLFlBQXpCLEVBQXVDLENBQUUsT0FBUztBQUNsRCxnQkFBSVMsS0FBS0MsTUFBTCxDQUFZQyxJQUFaLEtBQXFCLFNBQXJCLElBQWtDRixLQUFLQyxNQUFMLENBQVlDLElBQVosS0FBcUIsUUFBM0QsRUFBcUUsQ0FBRSxPQUFTOztBQUVoRjtBQUNBLGdCQUFJRixLQUFLRyxTQUFMLENBQWVDLE1BQWYsS0FBMEIsQ0FBOUIsRUFBaUMsQ0FBRSxPQUFTOztBQUU1QyxnQkFBTUMsVUFBVUwsS0FBS0csU0FBTCxDQUFlLENBQWYsQ0FBaEI7QUFDQSxnQkFBSUUsUUFBUWQsSUFBUixLQUFpQixpQkFBckIsRUFBd0MsQ0FBRSxPQUFTOztBQUVuRDs7QUFFQU8sb0JBQVFRLE1BQVIsQ0FBZU4sSUFBZiw4Q0FBd0RBLEtBQUtDLE1BQUwsQ0FBWUMsSUFBcEU7QUFDRCxXQWhCSSwyQkFBUDs7O0FBbUJELEtBL0JjLG1CQUFqQiIsImZpbGUiOiJuby1hbWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgUnVsZSB0byBwcmVmZXIgaW1wb3J0cyB0byBBTURcbiAqIEBhdXRob3IgSmFtdW5kIEZlcmd1c29uXG4gKi9cblxuaW1wb3J0IHsgZ2V0U2NvcGUgfSBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL2NvbnRleHRDb21wYXQnO1xuXG5pbXBvcnQgZG9jc1VybCBmcm9tICcuLi9kb2NzVXJsJztcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFJ1bGUgRGVmaW5pdGlvblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1ldGE6IHtcbiAgICB0eXBlOiAnc3VnZ2VzdGlvbicsXG4gICAgZG9jczoge1xuICAgICAgY2F0ZWdvcnk6ICdNb2R1bGUgc3lzdGVtcycsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvcmJpZCBBTUQgYHJlcXVpcmVgIGFuZCBgZGVmaW5lYCBjYWxscy4nLFxuICAgICAgdXJsOiBkb2NzVXJsKCduby1hbWQnKSxcbiAgICB9LFxuICAgIHNjaGVtYTogW10sXG4gIH0sXG5cbiAgY3JlYXRlKGNvbnRleHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgQ2FsbEV4cHJlc3Npb24obm9kZSkge1xuICAgICAgICBpZiAoZ2V0U2NvcGUoY29udGV4dCwgbm9kZSkudHlwZSAhPT0gJ21vZHVsZScpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgaWYgKG5vZGUuY2FsbGVlLnR5cGUgIT09ICdJZGVudGlmaWVyJykgeyByZXR1cm47IH1cbiAgICAgICAgaWYgKG5vZGUuY2FsbGVlLm5hbWUgIT09ICdyZXF1aXJlJyAmJiBub2RlLmNhbGxlZS5uYW1lICE9PSAnZGVmaW5lJykgeyByZXR1cm47IH1cblxuICAgICAgICAvLyB0b2RvOiBjYXB0dXJlIGRlZmluZSgocmVxdWlyZSwgbW9kdWxlLCBleHBvcnRzKSA9PiB7fSkgZm9ybT9cbiAgICAgICAgaWYgKG5vZGUuYXJndW1lbnRzLmxlbmd0aCAhPT0gMikgeyByZXR1cm47IH1cblxuICAgICAgICBjb25zdCBtb2R1bGVzID0gbm9kZS5hcmd1bWVudHNbMF07XG4gICAgICAgIGlmIChtb2R1bGVzLnR5cGUgIT09ICdBcnJheUV4cHJlc3Npb24nKSB7IHJldHVybjsgfVxuXG4gICAgICAgIC8vIHRvZG86IGNoZWNrIHNlY29uZCBhcmcgdHlwZT8gKGlkZW50aWZpZXIgb3IgY2FsbGJhY2spXG5cbiAgICAgICAgY29udGV4dC5yZXBvcnQobm9kZSwgYEV4cGVjdGVkIGltcG9ydHMgaW5zdGVhZCBvZiBBTUQgJHtub2RlLmNhbGxlZS5uYW1lfSgpLmApO1xuICAgICAgfSxcbiAgICB9O1xuXG4gIH0sXG59O1xuIl19