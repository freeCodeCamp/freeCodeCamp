'use strict';var _path = require('path');var _path2 = _interopRequireDefault(_path);
var _minimatch = require('minimatch');var _minimatch2 = _interopRequireDefault(_minimatch);
var _contextCompat = require('eslint-module-utils/contextCompat');

var _staticRequire = require('../core/staticRequire');var _staticRequire2 = _interopRequireDefault(_staticRequire);
var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

function report(context, node) {
  context.report({
    node: node,
    message: 'Imported module should be assigned' });

}

function testIsAllow(globs, filename, source) {
  if (!Array.isArray(globs)) {
    return false; // default doesn't allow any patterns
  }

  var filePath = void 0;

  if (source[0] !== '.' && source[0] !== '/') {// a node module
    filePath = source;
  } else {
    filePath = _path2['default'].resolve(_path2['default'].dirname(filename), source); // get source absolute path
  }

  return globs.find(function (glob) {return (0, _minimatch2['default'])(filePath, glob) ||
    (0, _minimatch2['default'])(filePath, _path2['default'].join(process.cwd(), glob));}) !==
  undefined;
}

function create(context) {
  var options = context.options[0] || {};
  var filename = (0, _contextCompat.getPhysicalFilename)(context);
  var isAllow = function isAllow(source) {return testIsAllow(options.allow, filename, source);};

  return {
    ImportDeclaration: function () {function ImportDeclaration(node) {
        if (node.specifiers.length === 0 && !isAllow(node.source.value)) {
          report(context, node);
        }
      }return ImportDeclaration;}(),
    ExpressionStatement: function () {function ExpressionStatement(node) {
        if (
        node.expression.type === 'CallExpression' &&
        (0, _staticRequire2['default'])(node.expression) &&
        !isAllow(node.expression.arguments[0].value))
        {
          report(context, node.expression);
        }
      }return ExpressionStatement;}() };

}

module.exports = {
  create: create,
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Style guide',
      description: 'Forbid unassigned imports',
      url: (0, _docsUrl2['default'])('no-unassigned-import') },

    schema: [
    {
      type: 'object',
      properties: {
        devDependencies: { type: ['boolean', 'array'] },
        optionalDependencies: { type: ['boolean', 'array'] },
        peerDependencies: { type: ['boolean', 'array'] },
        allow: {
          type: 'array',
          items: {
            type: 'string' } } },



      additionalProperties: false }] } };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby11bmFzc2lnbmVkLWltcG9ydC5qcyJdLCJuYW1lcyI6WyJyZXBvcnQiLCJjb250ZXh0Iiwibm9kZSIsIm1lc3NhZ2UiLCJ0ZXN0SXNBbGxvdyIsImdsb2JzIiwiZmlsZW5hbWUiLCJzb3VyY2UiLCJBcnJheSIsImlzQXJyYXkiLCJmaWxlUGF0aCIsInBhdGgiLCJyZXNvbHZlIiwiZGlybmFtZSIsImZpbmQiLCJnbG9iIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJ1bmRlZmluZWQiLCJjcmVhdGUiLCJvcHRpb25zIiwiaXNBbGxvdyIsImFsbG93IiwiSW1wb3J0RGVjbGFyYXRpb24iLCJzcGVjaWZpZXJzIiwibGVuZ3RoIiwidmFsdWUiLCJFeHByZXNzaW9uU3RhdGVtZW50IiwiZXhwcmVzc2lvbiIsInR5cGUiLCJhcmd1bWVudHMiLCJtb2R1bGUiLCJleHBvcnRzIiwibWV0YSIsImRvY3MiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwidXJsIiwic2NoZW1hIiwicHJvcGVydGllcyIsImRldkRlcGVuZGVuY2llcyIsIm9wdGlvbmFsRGVwZW5kZW5jaWVzIiwicGVlckRlcGVuZGVuY2llcyIsIml0ZW1zIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiXSwibWFwcGluZ3MiOiJhQUFBLDRCO0FBQ0Esc0M7QUFDQTs7QUFFQSxzRDtBQUNBLHFDOztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0JDLE9BQWhCLEVBQXlCQyxJQUF6QixFQUErQjtBQUM3QkQsVUFBUUQsTUFBUixDQUFlO0FBQ2JFLGNBRGE7QUFFYkMsYUFBUyxvQ0FGSSxFQUFmOztBQUlEOztBQUVELFNBQVNDLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCQyxRQUE1QixFQUFzQ0MsTUFBdEMsRUFBOEM7QUFDNUMsTUFBSSxDQUFDQyxNQUFNQyxPQUFOLENBQWNKLEtBQWQsQ0FBTCxFQUEyQjtBQUN6QixXQUFPLEtBQVAsQ0FEeUIsQ0FDWDtBQUNmOztBQUVELE1BQUlLLGlCQUFKOztBQUVBLE1BQUlILE9BQU8sQ0FBUCxNQUFjLEdBQWQsSUFBcUJBLE9BQU8sQ0FBUCxNQUFjLEdBQXZDLEVBQTRDLENBQUU7QUFDNUNHLGVBQVdILE1BQVg7QUFDRCxHQUZELE1BRU87QUFDTEcsZUFBV0Msa0JBQUtDLE9BQUwsQ0FBYUQsa0JBQUtFLE9BQUwsQ0FBYVAsUUFBYixDQUFiLEVBQXFDQyxNQUFyQyxDQUFYLENBREssQ0FDb0Q7QUFDMUQ7O0FBRUQsU0FBT0YsTUFBTVMsSUFBTixDQUFXLFVBQUNDLElBQUQsVUFBVSw0QkFBVUwsUUFBVixFQUFvQkssSUFBcEI7QUFDdkIsZ0NBQVVMLFFBQVYsRUFBb0JDLGtCQUFLSyxJQUFMLENBQVVDLFFBQVFDLEdBQVIsRUFBVixFQUF5QkgsSUFBekIsQ0FBcEIsQ0FEYSxFQUFYO0FBRURJLFdBRk47QUFHRDs7QUFFRCxTQUFTQyxNQUFULENBQWdCbkIsT0FBaEIsRUFBeUI7QUFDdkIsTUFBTW9CLFVBQVVwQixRQUFRb0IsT0FBUixDQUFnQixDQUFoQixLQUFzQixFQUF0QztBQUNBLE1BQU1mLFdBQVcsd0NBQW9CTCxPQUFwQixDQUFqQjtBQUNBLE1BQU1xQixVQUFVLFNBQVZBLE9BQVUsQ0FBQ2YsTUFBRCxVQUFZSCxZQUFZaUIsUUFBUUUsS0FBcEIsRUFBMkJqQixRQUEzQixFQUFxQ0MsTUFBckMsQ0FBWixFQUFoQjs7QUFFQSxTQUFPO0FBQ0xpQixxQkFESywwQ0FDYXRCLElBRGIsRUFDbUI7QUFDdEIsWUFBSUEsS0FBS3VCLFVBQUwsQ0FBZ0JDLE1BQWhCLEtBQTJCLENBQTNCLElBQWdDLENBQUNKLFFBQVFwQixLQUFLSyxNQUFMLENBQVlvQixLQUFwQixDQUFyQyxFQUFpRTtBQUMvRDNCLGlCQUFPQyxPQUFQLEVBQWdCQyxJQUFoQjtBQUNEO0FBQ0YsT0FMSTtBQU1MMEIsdUJBTkssNENBTWUxQixJQU5mLEVBTXFCO0FBQ3hCO0FBQ0VBLGFBQUsyQixVQUFMLENBQWdCQyxJQUFoQixLQUF5QixnQkFBekI7QUFDRyx3Q0FBZ0I1QixLQUFLMkIsVUFBckIsQ0FESDtBQUVHLFNBQUNQLFFBQVFwQixLQUFLMkIsVUFBTCxDQUFnQkUsU0FBaEIsQ0FBMEIsQ0FBMUIsRUFBNkJKLEtBQXJDLENBSE47QUFJRTtBQUNBM0IsaUJBQU9DLE9BQVAsRUFBZ0JDLEtBQUsyQixVQUFyQjtBQUNEO0FBQ0YsT0FkSSxnQ0FBUDs7QUFnQkQ7O0FBRURHLE9BQU9DLE9BQVAsR0FBaUI7QUFDZmIsZ0JBRGU7QUFFZmMsUUFBTTtBQUNKSixVQUFNLFlBREY7QUFFSkssVUFBTTtBQUNKQyxnQkFBVSxhQUROO0FBRUpDLG1CQUFhLDJCQUZUO0FBR0pDLFdBQUssMEJBQVEsc0JBQVIsQ0FIRCxFQUZGOztBQU9KQyxZQUFRO0FBQ047QUFDRVQsWUFBTSxRQURSO0FBRUVVLGtCQUFZO0FBQ1ZDLHlCQUFpQixFQUFFWCxNQUFNLENBQUMsU0FBRCxFQUFZLE9BQVosQ0FBUixFQURQO0FBRVZZLDhCQUFzQixFQUFFWixNQUFNLENBQUMsU0FBRCxFQUFZLE9BQVosQ0FBUixFQUZaO0FBR1ZhLDBCQUFrQixFQUFFYixNQUFNLENBQUMsU0FBRCxFQUFZLE9BQVosQ0FBUixFQUhSO0FBSVZQLGVBQU87QUFDTE8sZ0JBQU0sT0FERDtBQUVMYyxpQkFBTztBQUNMZCxrQkFBTSxRQURELEVBRkYsRUFKRyxFQUZkOzs7O0FBYUVlLDRCQUFzQixLQWJ4QixFQURNLENBUEosRUFGUyxFQUFqQiIsImZpbGUiOiJuby11bmFzc2lnbmVkLWltcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IG1pbmltYXRjaCBmcm9tICdtaW5pbWF0Y2gnO1xuaW1wb3J0IHsgZ2V0UGh5c2ljYWxGaWxlbmFtZSB9IGZyb20gJ2VzbGludC1tb2R1bGUtdXRpbHMvY29udGV4dENvbXBhdCc7XG5cbmltcG9ydCBpc1N0YXRpY1JlcXVpcmUgZnJvbSAnLi4vY29yZS9zdGF0aWNSZXF1aXJlJztcbmltcG9ydCBkb2NzVXJsIGZyb20gJy4uL2RvY3NVcmwnO1xuXG5mdW5jdGlvbiByZXBvcnQoY29udGV4dCwgbm9kZSkge1xuICBjb250ZXh0LnJlcG9ydCh7XG4gICAgbm9kZSxcbiAgICBtZXNzYWdlOiAnSW1wb3J0ZWQgbW9kdWxlIHNob3VsZCBiZSBhc3NpZ25lZCcsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0ZXN0SXNBbGxvdyhnbG9icywgZmlsZW5hbWUsIHNvdXJjZSkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoZ2xvYnMpKSB7XG4gICAgcmV0dXJuIGZhbHNlOyAvLyBkZWZhdWx0IGRvZXNuJ3QgYWxsb3cgYW55IHBhdHRlcm5zXG4gIH1cblxuICBsZXQgZmlsZVBhdGg7XG5cbiAgaWYgKHNvdXJjZVswXSAhPT0gJy4nICYmIHNvdXJjZVswXSAhPT0gJy8nKSB7IC8vIGEgbm9kZSBtb2R1bGVcbiAgICBmaWxlUGF0aCA9IHNvdXJjZTtcbiAgfSBlbHNlIHtcbiAgICBmaWxlUGF0aCA9IHBhdGgucmVzb2x2ZShwYXRoLmRpcm5hbWUoZmlsZW5hbWUpLCBzb3VyY2UpOyAvLyBnZXQgc291cmNlIGFic29sdXRlIHBhdGhcbiAgfVxuXG4gIHJldHVybiBnbG9icy5maW5kKChnbG9iKSA9PiBtaW5pbWF0Y2goZmlsZVBhdGgsIGdsb2IpXG4gICAgfHwgbWluaW1hdGNoKGZpbGVQYXRoLCBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgZ2xvYikpLFxuICApICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZShjb250ZXh0KSB7XG4gIGNvbnN0IG9wdGlvbnMgPSBjb250ZXh0Lm9wdGlvbnNbMF0gfHwge307XG4gIGNvbnN0IGZpbGVuYW1lID0gZ2V0UGh5c2ljYWxGaWxlbmFtZShjb250ZXh0KTtcbiAgY29uc3QgaXNBbGxvdyA9IChzb3VyY2UpID0+IHRlc3RJc0FsbG93KG9wdGlvbnMuYWxsb3csIGZpbGVuYW1lLCBzb3VyY2UpO1xuXG4gIHJldHVybiB7XG4gICAgSW1wb3J0RGVjbGFyYXRpb24obm9kZSkge1xuICAgICAgaWYgKG5vZGUuc3BlY2lmaWVycy5sZW5ndGggPT09IDAgJiYgIWlzQWxsb3cobm9kZS5zb3VyY2UudmFsdWUpKSB7XG4gICAgICAgIHJlcG9ydChjb250ZXh0LCBub2RlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIEV4cHJlc3Npb25TdGF0ZW1lbnQobm9kZSkge1xuICAgICAgaWYgKFxuICAgICAgICBub2RlLmV4cHJlc3Npb24udHlwZSA9PT0gJ0NhbGxFeHByZXNzaW9uJ1xuICAgICAgICAmJiBpc1N0YXRpY1JlcXVpcmUobm9kZS5leHByZXNzaW9uKVxuICAgICAgICAmJiAhaXNBbGxvdyhub2RlLmV4cHJlc3Npb24uYXJndW1lbnRzWzBdLnZhbHVlKVxuICAgICAgKSB7XG4gICAgICAgIHJlcG9ydChjb250ZXh0LCBub2RlLmV4cHJlc3Npb24pO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGUsXG4gIG1ldGE6IHtcbiAgICB0eXBlOiAnc3VnZ2VzdGlvbicsXG4gICAgZG9jczoge1xuICAgICAgY2F0ZWdvcnk6ICdTdHlsZSBndWlkZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvcmJpZCB1bmFzc2lnbmVkIGltcG9ydHMnLFxuICAgICAgdXJsOiBkb2NzVXJsKCduby11bmFzc2lnbmVkLWltcG9ydCcpLFxuICAgIH0sXG4gICAgc2NoZW1hOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgZGV2RGVwZW5kZW5jaWVzOiB7IHR5cGU6IFsnYm9vbGVhbicsICdhcnJheSddIH0sXG4gICAgICAgICAgb3B0aW9uYWxEZXBlbmRlbmNpZXM6IHsgdHlwZTogWydib29sZWFuJywgJ2FycmF5J10gfSxcbiAgICAgICAgICBwZWVyRGVwZW5kZW5jaWVzOiB7IHR5cGU6IFsnYm9vbGVhbicsICdhcnJheSddIH0sXG4gICAgICAgICAgYWxsb3c6IHtcbiAgICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxufTtcbiJdfQ==