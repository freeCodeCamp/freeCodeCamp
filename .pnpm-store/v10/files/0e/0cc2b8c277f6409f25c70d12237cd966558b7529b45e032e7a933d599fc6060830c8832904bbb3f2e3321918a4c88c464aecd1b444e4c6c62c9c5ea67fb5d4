'use strict';var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

function isRequire(node) {
  return node &&
  node.callee &&
  node.callee.type === 'Identifier' &&
  node.callee.name === 'require' &&
  node.arguments.length >= 1;
}

function isDynamicImport(node) {
  return node &&
  node.callee &&
  node.callee.type === 'Import';
}

function isStaticValue(arg) {
  return arg.type === 'Literal' ||
  arg.type === 'TemplateLiteral' && arg.expressions.length === 0;
}

var dynamicImportErrorMessage = 'Calls to import() should use string literals';

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Static analysis',
      description: 'Forbid `require()` calls with expressions.',
      url: (0, _docsUrl2['default'])('no-dynamic-require') },

    schema: [
    {
      type: 'object',
      properties: {
        esmodule: {
          type: 'boolean' } },


      additionalProperties: false }] },




  create: function () {function create(context) {
      var options = context.options[0] || {};

      return {
        CallExpression: function () {function CallExpression(node) {
            if (!node.arguments[0] || isStaticValue(node.arguments[0])) {
              return;
            }
            if (isRequire(node)) {
              return context.report({
                node: node,
                message: 'Calls to require() should use string literals' });

            }
            if (options.esmodule && isDynamicImport(node)) {
              return context.report({
                node: node,
                message: dynamicImportErrorMessage });

            }
          }return CallExpression;}(),
        ImportExpression: function () {function ImportExpression(node) {
            if (!options.esmodule || isStaticValue(node.source)) {
              return;
            }
            return context.report({
              node: node,
              message: dynamicImportErrorMessage });

          }return ImportExpression;}() };

    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby1keW5hbWljLXJlcXVpcmUuanMiXSwibmFtZXMiOlsiaXNSZXF1aXJlIiwibm9kZSIsImNhbGxlZSIsInR5cGUiLCJuYW1lIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiaXNEeW5hbWljSW1wb3J0IiwiaXNTdGF0aWNWYWx1ZSIsImFyZyIsImV4cHJlc3Npb25zIiwiZHluYW1pY0ltcG9ydEVycm9yTWVzc2FnZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJtZXRhIiwiZG9jcyIsImNhdGVnb3J5IiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJzY2hlbWEiLCJwcm9wZXJ0aWVzIiwiZXNtb2R1bGUiLCJhZGRpdGlvbmFsUHJvcGVydGllcyIsImNyZWF0ZSIsImNvbnRleHQiLCJvcHRpb25zIiwiQ2FsbEV4cHJlc3Npb24iLCJyZXBvcnQiLCJtZXNzYWdlIiwiSW1wb3J0RXhwcmVzc2lvbiIsInNvdXJjZSJdLCJtYXBwaW5ncyI6ImFBQUEscUM7O0FBRUEsU0FBU0EsU0FBVCxDQUFtQkMsSUFBbkIsRUFBeUI7QUFDdkIsU0FBT0E7QUFDRkEsT0FBS0MsTUFESDtBQUVGRCxPQUFLQyxNQUFMLENBQVlDLElBQVosS0FBcUIsWUFGbkI7QUFHRkYsT0FBS0MsTUFBTCxDQUFZRSxJQUFaLEtBQXFCLFNBSG5CO0FBSUZILE9BQUtJLFNBQUwsQ0FBZUMsTUFBZixJQUF5QixDQUo5QjtBQUtEOztBQUVELFNBQVNDLGVBQVQsQ0FBeUJOLElBQXpCLEVBQStCO0FBQzdCLFNBQU9BO0FBQ0ZBLE9BQUtDLE1BREg7QUFFRkQsT0FBS0MsTUFBTCxDQUFZQyxJQUFaLEtBQXFCLFFBRjFCO0FBR0Q7O0FBRUQsU0FBU0ssYUFBVCxDQUF1QkMsR0FBdkIsRUFBNEI7QUFDMUIsU0FBT0EsSUFBSU4sSUFBSixLQUFhLFNBQWI7QUFDRk0sTUFBSU4sSUFBSixLQUFhLGlCQUFiLElBQWtDTSxJQUFJQyxXQUFKLENBQWdCSixNQUFoQixLQUEyQixDQURsRTtBQUVEOztBQUVELElBQU1LLDRCQUE0Qiw4Q0FBbEM7O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsUUFBTTtBQUNKWCxVQUFNLFlBREY7QUFFSlksVUFBTTtBQUNKQyxnQkFBVSxpQkFETjtBQUVKQyxtQkFBYSw0Q0FGVDtBQUdKQyxXQUFLLDBCQUFRLG9CQUFSLENBSEQsRUFGRjs7QUFPSkMsWUFBUTtBQUNOO0FBQ0VoQixZQUFNLFFBRFI7QUFFRWlCLGtCQUFZO0FBQ1ZDLGtCQUFVO0FBQ1JsQixnQkFBTSxTQURFLEVBREEsRUFGZDs7O0FBT0VtQiw0QkFBc0IsS0FQeEIsRUFETSxDQVBKLEVBRFM7Ozs7O0FBcUJmQyxRQXJCZSwrQkFxQlJDLE9BckJRLEVBcUJDO0FBQ2QsVUFBTUMsVUFBVUQsUUFBUUMsT0FBUixDQUFnQixDQUFoQixLQUFzQixFQUF0Qzs7QUFFQSxhQUFPO0FBQ0xDLHNCQURLLHVDQUNVekIsSUFEVixFQUNnQjtBQUNuQixnQkFBSSxDQUFDQSxLQUFLSSxTQUFMLENBQWUsQ0FBZixDQUFELElBQXNCRyxjQUFjUCxLQUFLSSxTQUFMLENBQWUsQ0FBZixDQUFkLENBQTFCLEVBQTREO0FBQzFEO0FBQ0Q7QUFDRCxnQkFBSUwsVUFBVUMsSUFBVixDQUFKLEVBQXFCO0FBQ25CLHFCQUFPdUIsUUFBUUcsTUFBUixDQUFlO0FBQ3BCMUIsMEJBRG9CO0FBRXBCMkIseUJBQVMsK0NBRlcsRUFBZixDQUFQOztBQUlEO0FBQ0QsZ0JBQUlILFFBQVFKLFFBQVIsSUFBb0JkLGdCQUFnQk4sSUFBaEIsQ0FBeEIsRUFBK0M7QUFDN0MscUJBQU91QixRQUFRRyxNQUFSLENBQWU7QUFDcEIxQiwwQkFEb0I7QUFFcEIyQix5QkFBU2pCLHlCQUZXLEVBQWYsQ0FBUDs7QUFJRDtBQUNGLFdBakJJO0FBa0JMa0Isd0JBbEJLLHlDQWtCWTVCLElBbEJaLEVBa0JrQjtBQUNyQixnQkFBSSxDQUFDd0IsUUFBUUosUUFBVCxJQUFxQmIsY0FBY1AsS0FBSzZCLE1BQW5CLENBQXpCLEVBQXFEO0FBQ25EO0FBQ0Q7QUFDRCxtQkFBT04sUUFBUUcsTUFBUixDQUFlO0FBQ3BCMUIsd0JBRG9CO0FBRXBCMkIsdUJBQVNqQix5QkFGVyxFQUFmLENBQVA7O0FBSUQsV0ExQkksNkJBQVA7O0FBNEJELEtBcERjLG1CQUFqQiIsImZpbGUiOiJuby1keW5hbWljLXJlcXVpcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZG9jc1VybCBmcm9tICcuLi9kb2NzVXJsJztcblxuZnVuY3Rpb24gaXNSZXF1aXJlKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGVcbiAgICAmJiBub2RlLmNhbGxlZVxuICAgICYmIG5vZGUuY2FsbGVlLnR5cGUgPT09ICdJZGVudGlmaWVyJ1xuICAgICYmIG5vZGUuY2FsbGVlLm5hbWUgPT09ICdyZXF1aXJlJ1xuICAgICYmIG5vZGUuYXJndW1lbnRzLmxlbmd0aCA+PSAxO1xufVxuXG5mdW5jdGlvbiBpc0R5bmFtaWNJbXBvcnQobm9kZSkge1xuICByZXR1cm4gbm9kZVxuICAgICYmIG5vZGUuY2FsbGVlXG4gICAgJiYgbm9kZS5jYWxsZWUudHlwZSA9PT0gJ0ltcG9ydCc7XG59XG5cbmZ1bmN0aW9uIGlzU3RhdGljVmFsdWUoYXJnKSB7XG4gIHJldHVybiBhcmcudHlwZSA9PT0gJ0xpdGVyYWwnXG4gICAgfHwgYXJnLnR5cGUgPT09ICdUZW1wbGF0ZUxpdGVyYWwnICYmIGFyZy5leHByZXNzaW9ucy5sZW5ndGggPT09IDA7XG59XG5cbmNvbnN0IGR5bmFtaWNJbXBvcnRFcnJvck1lc3NhZ2UgPSAnQ2FsbHMgdG8gaW1wb3J0KCkgc2hvdWxkIHVzZSBzdHJpbmcgbGl0ZXJhbHMnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWV0YToge1xuICAgIHR5cGU6ICdzdWdnZXN0aW9uJyxcbiAgICBkb2NzOiB7XG4gICAgICBjYXRlZ29yeTogJ1N0YXRpYyBhbmFseXNpcycsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvcmJpZCBgcmVxdWlyZSgpYCBjYWxscyB3aXRoIGV4cHJlc3Npb25zLicsXG4gICAgICB1cmw6IGRvY3NVcmwoJ25vLWR5bmFtaWMtcmVxdWlyZScpLFxuICAgIH0sXG4gICAgc2NoZW1hOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgZXNtb2R1bGU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5cbiAgY3JlYXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBvcHRpb25zID0gY29udGV4dC5vcHRpb25zWzBdIHx8IHt9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIENhbGxFeHByZXNzaW9uKG5vZGUpIHtcbiAgICAgICAgaWYgKCFub2RlLmFyZ3VtZW50c1swXSB8fCBpc1N0YXRpY1ZhbHVlKG5vZGUuYXJndW1lbnRzWzBdKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNSZXF1aXJlKG5vZGUpKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQucmVwb3J0KHtcbiAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICBtZXNzYWdlOiAnQ2FsbHMgdG8gcmVxdWlyZSgpIHNob3VsZCB1c2Ugc3RyaW5nIGxpdGVyYWxzJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5lc21vZHVsZSAmJiBpc0R5bmFtaWNJbXBvcnQobm9kZSkpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5yZXBvcnQoe1xuICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGR5bmFtaWNJbXBvcnRFcnJvck1lc3NhZ2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBJbXBvcnRFeHByZXNzaW9uKG5vZGUpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zLmVzbW9kdWxlIHx8IGlzU3RhdGljVmFsdWUobm9kZS5zb3VyY2UpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0LnJlcG9ydCh7XG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICBtZXNzYWdlOiBkeW5hbWljSW1wb3J0RXJyb3JNZXNzYWdlLFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbn07XG4iXX0=