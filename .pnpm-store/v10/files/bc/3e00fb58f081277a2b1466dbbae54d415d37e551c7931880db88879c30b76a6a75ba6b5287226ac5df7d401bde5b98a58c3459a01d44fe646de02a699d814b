'use strict';var _importType = require('../core/importType');var _importType2 = _interopRequireDefault(_importType);
var _moduleVisitor = require('eslint-module-utils/moduleVisitor');var _moduleVisitor2 = _interopRequireDefault(_moduleVisitor);
var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

function reportIfMissing(context, node, allowed, name) {
  if (allowed.indexOf(name) === -1 && (0, _importType2['default'])(name, context) === 'builtin') {
    context.report(node, 'Do not import Node.js builtin module "' + String(name) + '"');
  }
}

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Module systems',
      description: 'Forbid Node.js builtin modules.',
      url: (0, _docsUrl2['default'])('no-nodejs-modules') },

    schema: [
    {
      type: 'object',
      properties: {
        allow: {
          type: 'array',
          uniqueItems: true,
          items: {
            type: 'string' } } },



      additionalProperties: false }] },




  create: function () {function create(context) {
      var options = context.options[0] || {};
      var allowed = options.allow || [];

      return (0, _moduleVisitor2['default'])(function (source, node) {
        reportIfMissing(context, node, allowed, source.value);
      }, { commonjs: true });
    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby1ub2RlanMtbW9kdWxlcy5qcyJdLCJuYW1lcyI6WyJyZXBvcnRJZk1pc3NpbmciLCJjb250ZXh0Iiwibm9kZSIsImFsbG93ZWQiLCJuYW1lIiwiaW5kZXhPZiIsInJlcG9ydCIsIm1vZHVsZSIsImV4cG9ydHMiLCJtZXRhIiwidHlwZSIsImRvY3MiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwidXJsIiwic2NoZW1hIiwicHJvcGVydGllcyIsImFsbG93IiwidW5pcXVlSXRlbXMiLCJpdGVtcyIsImFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiY3JlYXRlIiwib3B0aW9ucyIsInNvdXJjZSIsInZhbHVlIiwiY29tbW9uanMiXSwibWFwcGluZ3MiOiJhQUFBLGdEO0FBQ0Esa0U7QUFDQSxxQzs7QUFFQSxTQUFTQSxlQUFULENBQXlCQyxPQUF6QixFQUFrQ0MsSUFBbEMsRUFBd0NDLE9BQXhDLEVBQWlEQyxJQUFqRCxFQUF1RDtBQUNyRCxNQUFJRCxRQUFRRSxPQUFSLENBQWdCRCxJQUFoQixNQUEwQixDQUFDLENBQTNCLElBQWdDLDZCQUFXQSxJQUFYLEVBQWlCSCxPQUFqQixNQUE4QixTQUFsRSxFQUE2RTtBQUMzRUEsWUFBUUssTUFBUixDQUFlSixJQUFmLG9EQUE4REUsSUFBOUQ7QUFDRDtBQUNGOztBQUVERyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLFFBQU07QUFDSkMsVUFBTSxZQURGO0FBRUpDLFVBQU07QUFDSkMsZ0JBQVUsZ0JBRE47QUFFSkMsbUJBQWEsaUNBRlQ7QUFHSkMsV0FBSywwQkFBUSxtQkFBUixDQUhELEVBRkY7O0FBT0pDLFlBQVE7QUFDTjtBQUNFTCxZQUFNLFFBRFI7QUFFRU0sa0JBQVk7QUFDVkMsZUFBTztBQUNMUCxnQkFBTSxPQUREO0FBRUxRLHVCQUFhLElBRlI7QUFHTEMsaUJBQU87QUFDTFQsa0JBQU0sUUFERCxFQUhGLEVBREcsRUFGZDs7OztBQVdFVSw0QkFBc0IsS0FYeEIsRUFETSxDQVBKLEVBRFM7Ozs7O0FBeUJmQyxRQXpCZSwrQkF5QlJwQixPQXpCUSxFQXlCQztBQUNkLFVBQU1xQixVQUFVckIsUUFBUXFCLE9BQVIsQ0FBZ0IsQ0FBaEIsS0FBc0IsRUFBdEM7QUFDQSxVQUFNbkIsVUFBVW1CLFFBQVFMLEtBQVIsSUFBaUIsRUFBakM7O0FBRUEsYUFBTyxnQ0FBYyxVQUFDTSxNQUFELEVBQVNyQixJQUFULEVBQWtCO0FBQ3JDRix3QkFBZ0JDLE9BQWhCLEVBQXlCQyxJQUF6QixFQUErQkMsT0FBL0IsRUFBd0NvQixPQUFPQyxLQUEvQztBQUNELE9BRk0sRUFFSixFQUFFQyxVQUFVLElBQVosRUFGSSxDQUFQO0FBR0QsS0FoQ2MsbUJBQWpCIiwiZmlsZSI6Im5vLW5vZGVqcy1tb2R1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGltcG9ydFR5cGUgZnJvbSAnLi4vY29yZS9pbXBvcnRUeXBlJztcbmltcG9ydCBtb2R1bGVWaXNpdG9yIGZyb20gJ2VzbGludC1tb2R1bGUtdXRpbHMvbW9kdWxlVmlzaXRvcic7XG5pbXBvcnQgZG9jc1VybCBmcm9tICcuLi9kb2NzVXJsJztcblxuZnVuY3Rpb24gcmVwb3J0SWZNaXNzaW5nKGNvbnRleHQsIG5vZGUsIGFsbG93ZWQsIG5hbWUpIHtcbiAgaWYgKGFsbG93ZWQuaW5kZXhPZihuYW1lKSA9PT0gLTEgJiYgaW1wb3J0VHlwZShuYW1lLCBjb250ZXh0KSA9PT0gJ2J1aWx0aW4nKSB7XG4gICAgY29udGV4dC5yZXBvcnQobm9kZSwgYERvIG5vdCBpbXBvcnQgTm9kZS5qcyBidWlsdGluIG1vZHVsZSBcIiR7bmFtZX1cImApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtZXRhOiB7XG4gICAgdHlwZTogJ3N1Z2dlc3Rpb24nLFxuICAgIGRvY3M6IHtcbiAgICAgIGNhdGVnb3J5OiAnTW9kdWxlIHN5c3RlbXMnLFxuICAgICAgZGVzY3JpcHRpb246ICdGb3JiaWQgTm9kZS5qcyBidWlsdGluIG1vZHVsZXMuJyxcbiAgICAgIHVybDogZG9jc1VybCgnbm8tbm9kZWpzLW1vZHVsZXMnKSxcbiAgICB9LFxuICAgIHNjaGVtYTogW1xuICAgICAge1xuICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIGFsbG93OiB7XG4gICAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgICAgdW5pcXVlSXRlbXM6IHRydWUsXG4gICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXG4gIGNyZWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGNvbnRleHQub3B0aW9uc1swXSB8fCB7fTtcbiAgICBjb25zdCBhbGxvd2VkID0gb3B0aW9ucy5hbGxvdyB8fCBbXTtcblxuICAgIHJldHVybiBtb2R1bGVWaXNpdG9yKChzb3VyY2UsIG5vZGUpID0+IHtcbiAgICAgIHJlcG9ydElmTWlzc2luZyhjb250ZXh0LCBub2RlLCBhbGxvd2VkLCBzb3VyY2UudmFsdWUpO1xuICAgIH0sIHsgY29tbW9uanM6IHRydWUgfSk7XG4gIH0sXG59O1xuIl19