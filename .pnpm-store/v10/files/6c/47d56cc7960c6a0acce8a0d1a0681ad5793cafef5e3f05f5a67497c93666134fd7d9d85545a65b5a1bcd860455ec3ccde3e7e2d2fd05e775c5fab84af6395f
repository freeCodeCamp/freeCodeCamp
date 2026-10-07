'use strict';




var _unambiguous = require('eslint-module-utils/unambiguous');
var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);
var _sourceType = require('../core/sourceType');var _sourceType2 = _interopRequireDefault(_sourceType);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Module systems',
      description: 'Forbid potentially ambiguous parse goal (`script` vs. `module`).',
      url: (0, _docsUrl2['default'])('unambiguous') },

    schema: [] },


  create: function () {function create(context) {
      // ignore non-modules
      if ((0, _sourceType2['default'])(context) !== 'module') {
        return {};
      }

      return {
        Program: function () {function Program(ast) {
            if (!(0, _unambiguous.isModule)(ast)) {
              context.report({
                node: ast,
                message: 'This module could be parsed as a valid script.' });

            }
          }return Program;}() };


    }return create;}() }; /**
                           * @fileOverview Report modules that could parse incorrectly as scripts.
                           * @author Ben Mosher
                           */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy91bmFtYmlndW91cy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibWV0YSIsInR5cGUiLCJkb2NzIiwiY2F0ZWdvcnkiLCJkZXNjcmlwdGlvbiIsInVybCIsInNjaGVtYSIsImNyZWF0ZSIsImNvbnRleHQiLCJQcm9ncmFtIiwiYXN0IiwicmVwb3J0Iiwibm9kZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0E7QUFDQSxxQztBQUNBLGdEOztBQUVBQSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLFFBQU07QUFDSkMsVUFBTSxZQURGO0FBRUpDLFVBQU07QUFDSkMsZ0JBQVUsZ0JBRE47QUFFSkMsbUJBQWEsa0VBRlQ7QUFHSkMsV0FBSywwQkFBUSxhQUFSLENBSEQsRUFGRjs7QUFPSkMsWUFBUSxFQVBKLEVBRFM7OztBQVdmQyxRQVhlLCtCQVdSQyxPQVhRLEVBV0M7QUFDZDtBQUNBLFVBQUksNkJBQVdBLE9BQVgsTUFBd0IsUUFBNUIsRUFBc0M7QUFDcEMsZUFBTyxFQUFQO0FBQ0Q7O0FBRUQsYUFBTztBQUNMQyxlQURLLGdDQUNHQyxHQURILEVBQ1E7QUFDWCxnQkFBSSxDQUFDLDJCQUFTQSxHQUFULENBQUwsRUFBb0I7QUFDbEJGLHNCQUFRRyxNQUFSLENBQWU7QUFDYkMsc0JBQU1GLEdBRE87QUFFYkcseUJBQVMsZ0RBRkksRUFBZjs7QUFJRDtBQUNGLFdBUkksb0JBQVA7OztBQVdELEtBNUJjLG1CQUFqQixDLENBVEEiLCJmaWxlIjoidW5hbWJpZ3VvdXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgUmVwb3J0IG1vZHVsZXMgdGhhdCBjb3VsZCBwYXJzZSBpbmNvcnJlY3RseSBhcyBzY3JpcHRzLlxuICogQGF1dGhvciBCZW4gTW9zaGVyXG4gKi9cblxuaW1wb3J0IHsgaXNNb2R1bGUgfSBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL3VuYW1iaWd1b3VzJztcbmltcG9ydCBkb2NzVXJsIGZyb20gJy4uL2RvY3NVcmwnO1xuaW1wb3J0IHNvdXJjZVR5cGUgZnJvbSAnLi4vY29yZS9zb3VyY2VUeXBlJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1ldGE6IHtcbiAgICB0eXBlOiAnc3VnZ2VzdGlvbicsXG4gICAgZG9jczoge1xuICAgICAgY2F0ZWdvcnk6ICdNb2R1bGUgc3lzdGVtcycsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvcmJpZCBwb3RlbnRpYWxseSBhbWJpZ3VvdXMgcGFyc2UgZ29hbCAoYHNjcmlwdGAgdnMuIGBtb2R1bGVgKS4nLFxuICAgICAgdXJsOiBkb2NzVXJsKCd1bmFtYmlndW91cycpLFxuICAgIH0sXG4gICAgc2NoZW1hOiBbXSxcbiAgfSxcblxuICBjcmVhdGUoY29udGV4dCkge1xuICAgIC8vIGlnbm9yZSBub24tbW9kdWxlc1xuICAgIGlmIChzb3VyY2VUeXBlKGNvbnRleHQpICE9PSAnbW9kdWxlJykge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBQcm9ncmFtKGFzdCkge1xuICAgICAgICBpZiAoIWlzTW9kdWxlKGFzdCkpIHtcbiAgICAgICAgICBjb250ZXh0LnJlcG9ydCh7XG4gICAgICAgICAgICBub2RlOiBhc3QsXG4gICAgICAgICAgICBtZXNzYWdlOiAnVGhpcyBtb2R1bGUgY291bGQgYmUgcGFyc2VkIGFzIGEgdmFsaWQgc2NyaXB0LicsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcblxuICB9LFxufTtcbiJdfQ==