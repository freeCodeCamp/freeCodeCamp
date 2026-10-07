'use strict';




var _contextCompat = require('eslint-module-utils/contextCompat');

var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };} /**
                                                                                                                                                                                       * @fileoverview Rule to prefer ES6 to CJS
                                                                                                                                                                                       * @author Jamund Ferguson
                                                                                                                                                                                       */var EXPORT_MESSAGE = 'Expected "export" or "export default"';var IMPORT_MESSAGE = 'Expected "import" instead of "require()"';

function normalizeLegacyOptions(options) {
  if (options.indexOf('allow-primitive-modules') >= 0) {
    return { allowPrimitiveModules: true };
  }
  return options[0] || {};
}

function allowPrimitive(node, options) {
  if (!options.allowPrimitiveModules) {return false;}
  if (node.parent.type !== 'AssignmentExpression') {return false;}
  return node.parent.right.type !== 'ObjectExpression';
}

function allowRequire(node, options) {
  return options.allowRequire;
}

function allowConditionalRequire(node, options) {
  return options.allowConditionalRequire !== false;
}

function validateScope(scope) {
  return scope.variableScope.type === 'module';
}

// https://github.com/estree/estree/blob/HEAD/es5.md
function isConditional(node) {
  if (
  node.type === 'IfStatement' ||
  node.type === 'TryStatement' ||
  node.type === 'LogicalExpression' ||
  node.type === 'ConditionalExpression')
  {
    return true;
  }
  if (node.parent) {return isConditional(node.parent);}
  return false;
}

function isLiteralString(node) {
  return node.type === 'Literal' && typeof node.value === 'string' ||
  node.type === 'TemplateLiteral' && node.expressions.length === 0;
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

var schemaString = { 'enum': ['allow-primitive-modules'] };
var schemaObject = {
  type: 'object',
  properties: {
    allowPrimitiveModules: { type: 'boolean' },
    allowRequire: { type: 'boolean' },
    allowConditionalRequire: { type: 'boolean' } },

  additionalProperties: false };


module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Module systems',
      description: 'Forbid CommonJS `require` calls and `module.exports` or `exports.*`.',
      url: (0, _docsUrl2['default'])('no-commonjs') },


    schema: {
      anyOf: [
      {
        type: 'array',
        items: [schemaString],
        additionalItems: false },

      {
        type: 'array',
        items: [schemaObject],
        additionalItems: false }] } },





  create: function () {function create(context) {
      var options = normalizeLegacyOptions(context.options);

      return {

        MemberExpression: function () {function MemberExpression(node) {

            // module.exports
            if (node.object.name === 'module' && node.property.name === 'exports') {
              if (allowPrimitive(node, options)) {return;}
              context.report({ node: node, message: EXPORT_MESSAGE });
            }

            // exports.
            if (node.object.name === 'exports') {
              var isInScope = (0, _contextCompat.getScope)(context, node).
              variables.
              some(function (variable) {return variable.name === 'exports';});
              if (!isInScope) {
                context.report({ node: node, message: EXPORT_MESSAGE });
              }
            }

          }return MemberExpression;}(),
        CallExpression: function () {function CallExpression(call) {
            if (!validateScope((0, _contextCompat.getScope)(context, call))) {return;}

            if (call.callee.type !== 'Identifier') {return;}
            if (call.callee.name !== 'require') {return;}

            if (call.arguments.length !== 1) {return;}
            if (!isLiteralString(call.arguments[0])) {return;}

            if (allowRequire(call, options)) {return;}

            if (allowConditionalRequire(call, options) && isConditional(call.parent)) {return;}

            // keeping it simple: all 1-string-arg `require` calls are reported
            context.report({
              node: call.callee,
              message: IMPORT_MESSAGE });

          }return CallExpression;}() };


    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby1jb21tb25qcy5qcyJdLCJuYW1lcyI6WyJFWFBPUlRfTUVTU0FHRSIsIklNUE9SVF9NRVNTQUdFIiwibm9ybWFsaXplTGVnYWN5T3B0aW9ucyIsIm9wdGlvbnMiLCJpbmRleE9mIiwiYWxsb3dQcmltaXRpdmVNb2R1bGVzIiwiYWxsb3dQcmltaXRpdmUiLCJub2RlIiwicGFyZW50IiwidHlwZSIsInJpZ2h0IiwiYWxsb3dSZXF1aXJlIiwiYWxsb3dDb25kaXRpb25hbFJlcXVpcmUiLCJ2YWxpZGF0ZVNjb3BlIiwic2NvcGUiLCJ2YXJpYWJsZVNjb3BlIiwiaXNDb25kaXRpb25hbCIsImlzTGl0ZXJhbFN0cmluZyIsInZhbHVlIiwiZXhwcmVzc2lvbnMiLCJsZW5ndGgiLCJzY2hlbWFTdHJpbmciLCJzY2hlbWFPYmplY3QiLCJwcm9wZXJ0aWVzIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwibWV0YSIsImRvY3MiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwidXJsIiwic2NoZW1hIiwiYW55T2YiLCJpdGVtcyIsImFkZGl0aW9uYWxJdGVtcyIsImNyZWF0ZSIsImNvbnRleHQiLCJNZW1iZXJFeHByZXNzaW9uIiwib2JqZWN0IiwibmFtZSIsInByb3BlcnR5IiwicmVwb3J0IiwibWVzc2FnZSIsImlzSW5TY29wZSIsInZhcmlhYmxlcyIsInNvbWUiLCJ2YXJpYWJsZSIsIkNhbGxFeHByZXNzaW9uIiwiY2FsbCIsImNhbGxlZSIsImFyZ3VtZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQTs7QUFFQSxxQyxpSkFQQTs7O3lMQVNBLElBQU1BLGlCQUFpQix1Q0FBdkIsQ0FDQSxJQUFNQyxpQkFBaUIsMENBQXZCOztBQUVBLFNBQVNDLHNCQUFULENBQWdDQyxPQUFoQyxFQUF5QztBQUN2QyxNQUFJQSxRQUFRQyxPQUFSLENBQWdCLHlCQUFoQixLQUE4QyxDQUFsRCxFQUFxRDtBQUNuRCxXQUFP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LElBQXhCLEVBQThCOUMsT0FBOUIsS0FBMENhLGNBQWNpQyxLQUFLekMsTUFBbkIsQ0FBOUMsRUFBMEUsQ0FBRSxPQUFTOztBQUVyRjtBQUNBNkIsb0JBQVFLLE1BQVIsQ0FBZTtBQUNibkMsb0JBQU0wQyxLQUFLQyxNQURFO0FBRWJQLHVCQUFTMUMsY0FGSSxFQUFmOztBQUlELFdBdkNJLDJCQUFQOzs7QUEwQ0QsS0F0RWMsbUJBQWpCIiwiZmlsZSI6Im5vLWNvbW1vbmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFJ1bGUgdG8gcHJlZmVyIEVTNiB0byBDSlNcbiAqIEBhdXRob3IgSmFtdW5kIEZlcmd1c29uXG4gKi9cblxuaW1wb3J0IHsgZ2V0U2NvcGUgfSBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL2NvbnRleHRDb21wYXQnO1xuXG5pbXBvcnQgZG9jc1VybCBmcm9tICcuLi9kb2NzVXJsJztcblxuY29uc3QgRVhQT1JUX01FU1NBR0UgPSAnRXhwZWN0ZWQgXCJleHBvcnRcIiBvciBcImV4cG9ydCBkZWZhdWx0XCInO1xuY29uc3QgSU1QT1JUX01FU1NBR0UgPSAnRXhwZWN0ZWQgXCJpbXBvcnRcIiBpbnN0ZWFkIG9mIFwicmVxdWlyZSgpXCInO1xuXG5mdW5jdGlvbiBub3JtYWxpemVMZWdhY3lPcHRpb25zKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMuaW5kZXhPZignYWxsb3ctcHJpbWl0aXZlLW1vZHVsZXMnKSA+PSAwKSB7XG4gICAgcmV0dXJuIHsgYWxsb3dQcmltaXRpdmVNb2R1bGVzOiB0cnVlIH07XG4gIH1cbiAgcmV0dXJuIG9wdGlvbnNbMF0gfHwge307XG59XG5cbmZ1bmN0aW9uIGFsbG93UHJpbWl0aXZlKG5vZGUsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zLmFsbG93UHJpbWl0aXZlTW9kdWxlcykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKG5vZGUucGFyZW50LnR5cGUgIT09ICdBc3NpZ25tZW50RXhwcmVzc2lvbicpIHsgcmV0dXJuIGZhbHNlOyB9XG4gIHJldHVybiBub2RlLnBhcmVudC5yaWdodC50eXBlICE9PSAnT2JqZWN0RXhwcmVzc2lvbic7XG59XG5cbmZ1bmN0aW9uIGFsbG93UmVxdWlyZShub2RlLCBvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zLmFsbG93UmVxdWlyZTtcbn1cblxuZnVuY3Rpb24gYWxsb3dDb25kaXRpb25hbFJlcXVpcmUobm9kZSwgb3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucy5hbGxvd0NvbmRpdGlvbmFsUmVxdWlyZSAhPT0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlU2NvcGUoc2NvcGUpIHtcbiAgcmV0dXJuIHNjb3BlLnZhcmlhYmxlU2NvcGUudHlwZSA9PT0gJ21vZHVsZSc7XG59XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9lc3RyZWUvZXN0cmVlL2Jsb2IvSEVBRC9lczUubWRcbmZ1bmN0aW9uIGlzQ29uZGl0aW9uYWwobm9kZSkge1xuICBpZiAoXG4gICAgbm9kZS50eXBlID09PSAnSWZTdGF0ZW1lbnQnXG4gICAgfHwgbm9kZS50eXBlID09PSAnVHJ5U3RhdGVtZW50J1xuICAgIHx8IG5vZGUudHlwZSA9PT0gJ0xvZ2ljYWxFeHByZXNzaW9uJ1xuICAgIHx8IG5vZGUudHlwZSA9PT0gJ0NvbmRpdGlvbmFsRXhwcmVzc2lvbidcbiAgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKG5vZGUucGFyZW50KSB7IHJldHVybiBpc0NvbmRpdGlvbmFsKG5vZGUucGFyZW50KTsgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzTGl0ZXJhbFN0cmluZyhub2RlKSB7XG4gIHJldHVybiBub2RlLnR5cGUgPT09ICdMaXRlcmFsJyAmJiB0eXBlb2Ygbm9kZS52YWx1ZSA9PT0gJ3N0cmluZydcbiAgICB8fCBub2RlLnR5cGUgPT09ICdUZW1wbGF0ZUxpdGVyYWwnICYmIG5vZGUuZXhwcmVzc2lvbnMubGVuZ3RoID09PSAwO1xufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUnVsZSBEZWZpbml0aW9uXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBzY2hlbWFTdHJpbmcgPSB7IGVudW06IFsnYWxsb3ctcHJpbWl0aXZlLW1vZHVsZXMnXSB9O1xuY29uc3Qgc2NoZW1hT2JqZWN0ID0ge1xuICB0eXBlOiAnb2JqZWN0JyxcbiAgcHJvcGVydGllczoge1xuICAgIGFsbG93UHJpbWl0aXZlTW9kdWxlczogeyB0eXBlOiAnYm9vbGVhbicgfSxcbiAgICBhbGxvd1JlcXVpcmU6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gICAgYWxsb3dDb25kaXRpb25hbFJlcXVpcmU6IHsgdHlwZTogJ2Jvb2xlYW4nIH0sXG4gIH0sXG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtZXRhOiB7XG4gICAgdHlwZTogJ3N1Z2dlc3Rpb24nLFxuICAgIGRvY3M6IHtcbiAgICAgIGNhdGVnb3J5OiAnTW9kdWxlIHN5c3RlbXMnLFxuICAgICAgZGVzY3JpcHRpb246ICdGb3JiaWQgQ29tbW9uSlMgYHJlcXVpcmVgIGNhbGxzIGFuZCBgbW9kdWxlLmV4cG9ydHNgIG9yIGBleHBvcnRzLipgLicsXG4gICAgICB1cmw6IGRvY3NVcmwoJ25vLWNvbW1vbmpzJyksXG4gICAgfSxcblxuICAgIHNjaGVtYToge1xuICAgICAgYW55T2Y6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICAgICAgaXRlbXM6IFtzY2hlbWFTdHJpbmddLFxuICAgICAgICAgIGFkZGl0aW9uYWxJdGVtczogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgIGl0ZW1zOiBbc2NoZW1hT2JqZWN0XSxcbiAgICAgICAgICBhZGRpdGlvbmFsSXRlbXM6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuXG4gIGNyZWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IG5vcm1hbGl6ZUxlZ2FjeU9wdGlvbnMoY29udGV4dC5vcHRpb25zKTtcblxuICAgIHJldHVybiB7XG5cbiAgICAgIE1lbWJlckV4cHJlc3Npb24obm9kZSkge1xuXG4gICAgICAgIC8vIG1vZHVsZS5leHBvcnRzXG4gICAgICAgIGlmIChub2RlLm9iamVjdC5uYW1lID09PSAnbW9kdWxlJyAmJiBub2RlLnByb3BlcnR5Lm5hbWUgPT09ICdleHBvcnRzJykge1xuICAgICAgICAgIGlmIChhbGxvd1ByaW1pdGl2ZShub2RlLCBvcHRpb25zKSkgeyByZXR1cm47IH1cbiAgICAgICAgICBjb250ZXh0LnJlcG9ydCh7IG5vZGUsIG1lc3NhZ2U6IEVYUE9SVF9NRVNTQUdFIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZXhwb3J0cy5cbiAgICAgICAgaWYgKG5vZGUub2JqZWN0Lm5hbWUgPT09ICdleHBvcnRzJykge1xuICAgICAgICAgIGNvbnN0IGlzSW5TY29wZSA9IGdldFNjb3BlKGNvbnRleHQsIG5vZGUpXG4gICAgICAgICAgICAudmFyaWFibGVzXG4gICAgICAgICAgICAuc29tZSgodmFyaWFibGUpID0+IHZhcmlhYmxlLm5hbWUgPT09ICdleHBvcnRzJyk7XG4gICAgICAgICAgaWYgKCFpc0luU2NvcGUpIHtcbiAgICAgICAgICAgIGNvbnRleHQucmVwb3J0KHsgbm9kZSwgbWVzc2FnZTogRVhQT1JUX01FU1NBR0UgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH0sXG4gICAgICBDYWxsRXhwcmVzc2lvbihjYWxsKSB7XG4gICAgICAgIGlmICghdmFsaWRhdGVTY29wZShnZXRTY29wZShjb250ZXh0LCBjYWxsKSkpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgaWYgKGNhbGwuY2FsbGVlLnR5cGUgIT09ICdJZGVudGlmaWVyJykgeyByZXR1cm47IH1cbiAgICAgICAgaWYgKGNhbGwuY2FsbGVlLm5hbWUgIT09ICdyZXF1aXJlJykgeyByZXR1cm47IH1cblxuICAgICAgICBpZiAoY2FsbC5hcmd1bWVudHMubGVuZ3RoICE9PSAxKSB7IHJldHVybjsgfVxuICAgICAgICBpZiAoIWlzTGl0ZXJhbFN0cmluZyhjYWxsLmFyZ3VtZW50c1swXSkpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgaWYgKGFsbG93UmVxdWlyZShjYWxsLCBvcHRpb25zKSkgeyByZXR1cm47IH1cblxuICAgICAgICBpZiAoYWxsb3dDb25kaXRpb25hbFJlcXVpcmUoY2FsbCwgb3B0aW9ucykgJiYgaXNDb25kaXRpb25hbChjYWxsLnBhcmVudCkpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgLy8ga2VlcGluZyBpdCBzaW1wbGU6IGFsbCAxLXN0cmluZy1hcmcgYHJlcXVpcmVgIGNhbGxzIGFyZSByZXBvcnRlZFxuICAgICAgICBjb250ZXh0LnJlcG9ydCh7XG4gICAgICAgICAgbm9kZTogY2FsbC5jYWxsZWUsXG4gICAgICAgICAgbWVzc2FnZTogSU1QT1JUX01FU1NBR0UsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9O1xuXG4gIH0sXG59O1xuIl19