'use strict';




var _hasown = require('hasown');var _hasown2 = _interopRequireDefault(_hasown);
var _object = require('object.values');var _object2 = _interopRequireDefault(_object);
var _object3 = require('object.fromentries');var _object4 = _interopRequireDefault(_object3);

var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };} /**
                                                                                                                                                                                       * @fileoverview Rule to disallow anonymous default exports.
                                                                                                                                                                                       * @author Duncan Beevers
                                                                                                                                                                                       */var defs = { ArrayExpression: {
    option: 'allowArray',
    description: 'If `false`, will report default export of an array',
    message: 'Assign array to a variable before exporting as module default' },

  ArrowFunctionExpression: {
    option: 'allowArrowFunction',
    description: 'If `false`, will report default export of an arrow function',
    message: 'Assign arrow function to a variable before exporting as module default' },

  CallExpression: {
    option: 'allowCallExpression',
    description: 'If `false`, will report default export of a function call',
    message: 'Assign call result to a variable before exporting as module default',
    'default': true },

  ClassDeclaration: {
    option: 'allowAnonymousClass',
    description: 'If `false`, will report default export of an anonymous class',
    message: 'Unexpected default export of anonymous class',
    forbid: function () {function forbid(node) {return !node.declaration.id;}return forbid;}() },

  FunctionDeclaration: {
    option: 'allowAnonymousFunction',
    description: 'If `false`, will report default export of an anonymous function',
    message: 'Unexpected default export of anonymous function',
    forbid: function () {function forbid(node) {return !node.declaration.id;}return forbid;}() },

  Literal: {
    option: 'allowLiteral',
    description: 'If `false`, will report default export of a literal',
    message: 'Assign literal to a variable before exporting as module default' },

  ObjectExpression: {
    option: 'allowObject',
    description: 'If `false`, will report default export of an object expression',
    message: 'Assign object to a variable before exporting as module default' },

  TemplateLiteral: {
    option: 'allowLiteral',
    description: 'If `false`, will report default export of a literal',
    message: 'Assign literal to a variable before exporting as module default' },

  NewExpression: {
    option: 'allowNew',
    description: 'If `false`, will report default export of a class instantiation',
    message: 'Assign instance to a variable before exporting as module default' } };



var schemaProperties = (0, _object4['default'])((0, _object2['default'])(defs).map(function (def) {return [def.option, {
    description: def.description,
    type: 'boolean' }];}));


var defaults = (0, _object4['default'])((0, _object2['default'])(defs).map(function (def) {return [def.option, (0, _hasown2['default'])(def, 'default') ? def['default'] : false];}));

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Style guide',
      description: 'Forbid anonymous values as default exports.',
      url: (0, _docsUrl2['default'])('no-anonymous-default-export') },


    schema: [
    {
      type: 'object',
      properties: schemaProperties,
      additionalProperties: false }] },




  create: function () {function create(context) {
      var options = Object.assign({}, defaults, context.options[0]);

      return {
        ExportDefaultDeclaration: function () {function ExportDefaultDeclaration(node) {
            var def = defs[node.declaration.type];

            // Recognized node type and allowed by configuration,
            //   and has no forbid check, or forbid check return value is truthy
            if (def && !options[def.option] && (!def.forbid || def.forbid(node))) {
              context.report({ node: node, message: def.message });
            }
          }return ExportDefaultDeclaration;}() };

    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby1hbm9ueW1vdXMtZGVmYXVsdC1leHBvcnQuanMiXSwibmFtZXMiOlsiZGVmcyIsIkFycmF5RXhwcmVzc2lvbiIsIm9wdGlvbiIsImRlc2NyaXB0aW9uIiwibWVzc2FnZSIsIkFycm93RnVuY3Rpb25FeHByZXNzaW9uIiwiQ2FsbEV4cHJlc3Npb24iLCJDbGFzc0RlY2xhcmF0aW9uIiwiZm9yYmlkIiwibm9kZSIsImRlY2xhcmF0aW9uIiwiaWQiLCJGdW5jdGlvbkRlY2xhcmF0aW9uIiwiTGl0ZXJhbCIsIk9iamVjdEV4cHJlc3Npb24iLCJUZW1wbGF0ZUxpdGVyYWwiLCJOZXdFeHByZXNzaW9uIiwic2NoZW1hUHJvcGVydGllcyIsIm1hcCIsImRlZiIsInR5cGUiLCJkZWZhdWx0cyIsIm1vZHVsZSIsImV4cG9ydHMiLCJtZXRhIiwiZG9jcyIsImNhdGVnb3J5IiwidXJsIiwic2NoZW1hIiwicHJvcGVydGllcyIsImFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiY3JlYXRlIiwiY29udGV4dCIsIm9wdGlvbnMiLCJFeHBvcnREZWZhdWx0RGVjbGFyYXRpb24iLCJyZXBvcnQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsZ0M7QUFDQSx1QztBQUNBLDZDOztBQUVBLHFDLGlKQVRBOzs7eUxBV0EsSUFBTUEsT0FBTyxFQUNYQyxpQkFBaUI7QUFDZkMsWUFBUSxZQURPO0FBRWZDLGlCQUFhLG9EQUZFO0FBR2ZDLGFBQVMsK0RBSE0sRUFETjs7QUFNWEMsMkJBQXlCO0FBQ3ZCSCxZQUFRLG9CQURlO0FBRXZCQyxpQkFBYSw2REFGVTtBQUd2QkMsYUFBUyx3RUFIYyxFQU5kOztBQVdYRSxrQkFBZ0I7QUFDZEosWUFBUSxxQkFETTtBQUVkQyxpQkFBYSwyREFGQztBQUdkQyxhQUFTLHFFQUhLO0FBSWQsZUFBUyxJQUpLLEVBWEw7O0FBaUJYRyxvQkFBa0I7QUFDaEJMLFlBQVEscUJBRFE7QUFFaEJDLGlCQUFhLDhEQUZHO0FBR2hCQyxhQUFTLDhDQUhPO0FBSWhCSSx5QkFBUSxnQkFBQ0MsSUFBRCxVQUFVLENBQUNBLEtBQUtDLFdBQUwsQ0FBaUJDLEVBQTVCLEVBQVIsaUJBSmdCLEVBakJQOztBQXVCWEMsdUJBQXFCO0FBQ25CVixZQUFRLHdCQURXO0FBRW5CQyxpQkFBYSxpRUFGTTtBQUduQkMsYUFBUyxpREFIVTtBQUluQkkseUJBQVEsZ0JBQUNDLElBQUQsVUFBVSxDQUFDQSxLQUFLQyxXQUFMLENBQWlCQyxFQUE1QixFQUFSLGlCQUptQixFQXZCVjs7QUE2QlhFLFdBQVM7QUFDUFgsWUFBUSxjQUREO0FBRVBDLGlCQUFhLHFEQUZOO0FBR1BDLGFBQVMsaUVBSEYsRUE3QkU7O0FBa0NYVSxvQkFBa0I7QUFDaEJaLFlBQVEsYUFEUTtBQUVoQkMsaUJBQWEsZ0VBRkc7QUFHaEJDLGFBQVMsZ0VBSE8sRUFsQ1A7O0FBdUNYVyxtQkFBaUI7QUFDZmIsWUFBUSxjQURPO0FBRWZDLGlCQUFhLHFEQUZFO0FBR2ZDLGFBQVMsaUVBSE0sRUF2Q047O0FBNENYWSxpQkFBZTtBQUNiZCxZQUFRLFVBREs7QUFFYkMsaUJBQWEsaUVBRkE7QUFHYkMsYUFBUyxrRUFISSxFQTVDSixFQUFiOzs7O0FBbURBLElBQU1hLG1CQUFtQix5QkFBWSx5QkFBT2pCLElBQVAsRUFBYWtCLEdBQWIsQ0FBaUIsVUFBQ0MsR0FBRCxVQUFTLENBQUNBLElBQUlqQixNQUFMLEVBQWE7QUFDMUVDLGlCQUFhZ0IsSUFBSWhCLFdBRHlEO0FBRTFFaUIsVUFBTSxTQUZvRSxFQUFiLENBQVQsRUFBakIsQ0FBWixDQUF6Qjs7O0FBS0EsSUFBTUMsV0FBVyx5QkFBWSx5QkFBT3JCLElBQVAsRUFBYWtCLEdBQWIsQ0FBaUIsVUFBQ0MsR0FBRCxVQUFTLENBQUNBLElBQUlqQixNQUFMLEVBQWEseUJBQU9pQixHQUFQLEVBQVksU0FBWixJQUF5QkEsY0FBekIsR0FBdUMsS0FBcEQsQ0FBVCxFQUFqQixDQUFaLENBQWpCOztBQUVBRyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLFFBQU07QUFDSkosVUFBTSxZQURGO0FBRUpLLFVBQU07QUFDSkMsZ0JBQVUsYUFETjtBQUVKdkIsbUJBQWEsNkNBRlQ7QUFHSndCLFdBQUssMEJBQVEsNkJBQVIsQ0FIRCxFQUZGOzs7QUFRSkMsWUFBUTtBQUNOO0FBQ0VSLFlBQU0sUUFEUjtBQUVFUyxrQkFBWVosZ0JBRmQ7QUFHRWEsNEJBQXNCLEtBSHhCLEVBRE0sQ0FSSixFQURTOzs7OztBQWtCZkMsUUFsQmUsK0JBa0JSQyxPQWxCUSxFQWtCQztBQUNkLFVBQU1DLDRCQUFlWixRQUFmLEVBQTRCVyxRQUFRQyxPQUFSLENBQWdCLENBQWhCLENBQTVCLENBQU47O0FBRUEsYUFBTztBQUNMQyxnQ0FESyxpREFDb0J6QixJQURwQixFQUMwQjtBQUM3QixnQkFBTVUsTUFBTW5CLEtBQUtTLEtBQUtDLFdBQUwsQ0FBaUJVLElBQXRCLENBQVo7O0FBRUE7QUFDQTtBQUNBLGdCQUFJRCxPQUFPLENBQUNjLFFBQVFkLElBQUlqQixNQUFaLENBQVIsS0FBZ0MsQ0FBQ2lCLElBQUlYLE1BQUwsSUFBZVcsSUFBSVgsTUFBSixDQUFXQyxJQUFYLENBQS9DLENBQUosRUFBc0U7QUFDcEV1QixzQkFBUUcsTUFBUixDQUFlLEVBQUUxQixVQUFGLEVBQVFMLFNBQVNlLElBQUlmLE9BQXJCLEVBQWY7QUFDRDtBQUNGLFdBVEkscUNBQVA7O0FBV0QsS0FoQ2MsbUJBQWpCIiwiZmlsZSI6Im5vLWFub255bW91cy1kZWZhdWx0LWV4cG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVvdmVydmlldyBSdWxlIHRvIGRpc2FsbG93IGFub255bW91cyBkZWZhdWx0IGV4cG9ydHMuXG4gKiBAYXV0aG9yIER1bmNhbiBCZWV2ZXJzXG4gKi9cblxuaW1wb3J0IGhhc093biBmcm9tICdoYXNvd24nO1xuaW1wb3J0IHZhbHVlcyBmcm9tICdvYmplY3QudmFsdWVzJztcbmltcG9ydCBmcm9tRW50cmllcyBmcm9tICdvYmplY3QuZnJvbWVudHJpZXMnO1xuXG5pbXBvcnQgZG9jc1VybCBmcm9tICcuLi9kb2NzVXJsJztcblxuY29uc3QgZGVmcyA9IHtcbiAgQXJyYXlFeHByZXNzaW9uOiB7XG4gICAgb3B0aW9uOiAnYWxsb3dBcnJheScsXG4gICAgZGVzY3JpcHRpb246ICdJZiBgZmFsc2VgLCB3aWxsIHJlcG9ydCBkZWZhdWx0IGV4cG9ydCBvZiBhbiBhcnJheScsXG4gICAgbWVzc2FnZTogJ0Fzc2lnbiBhcnJheSB0byBhIHZhcmlhYmxlIGJlZm9yZSBleHBvcnRpbmcgYXMgbW9kdWxlIGRlZmF1bHQnLFxuICB9LFxuICBBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbjoge1xuICAgIG9wdGlvbjogJ2FsbG93QXJyb3dGdW5jdGlvbicsXG4gICAgZGVzY3JpcHRpb246ICdJZiBgZmFsc2VgLCB3aWxsIHJlcG9ydCBkZWZhdWx0IGV4cG9ydCBvZiBhbiBhcnJvdyBmdW5jdGlvbicsXG4gICAgbWVzc2FnZTogJ0Fzc2lnbiBhcnJvdyBmdW5jdGlvbiB0byBhIHZhcmlhYmxlIGJlZm9yZSBleHBvcnRpbmcgYXMgbW9kdWxlIGRlZmF1bHQnLFxuICB9LFxuICBDYWxsRXhwcmVzc2lvbjoge1xuICAgIG9wdGlvbjogJ2FsbG93Q2FsbEV4cHJlc3Npb24nLFxuICAgIGRlc2NyaXB0aW9uOiAnSWYgYGZhbHNlYCwgd2lsbCByZXBvcnQgZGVmYXVsdCBleHBvcnQgb2YgYSBmdW5jdGlvbiBjYWxsJyxcbiAgICBtZXNzYWdlOiAnQXNzaWduIGNhbGwgcmVzdWx0IHRvIGEgdmFyaWFibGUgYmVmb3JlIGV4cG9ydGluZyBhcyBtb2R1bGUgZGVmYXVsdCcsXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgfSxcbiAgQ2xhc3NEZWNsYXJhdGlvbjoge1xuICAgIG9wdGlvbjogJ2FsbG93QW5vbnltb3VzQ2xhc3MnLFxuICAgIGRlc2NyaXB0aW9uOiAnSWYgYGZhbHNlYCwgd2lsbCByZXBvcnQgZGVmYXVsdCBleHBvcnQgb2YgYW4gYW5vbnltb3VzIGNsYXNzJyxcbiAgICBtZXNzYWdlOiAnVW5leHBlY3RlZCBkZWZhdWx0IGV4cG9ydCBvZiBhbm9ueW1vdXMgY2xhc3MnLFxuICAgIGZvcmJpZDogKG5vZGUpID0+ICFub2RlLmRlY2xhcmF0aW9uLmlkLFxuICB9LFxuICBGdW5jdGlvbkRlY2xhcmF0aW9uOiB7XG4gICAgb3B0aW9uOiAnYWxsb3dBbm9ueW1vdXNGdW5jdGlvbicsXG4gICAgZGVzY3JpcHRpb246ICdJZiBgZmFsc2VgLCB3aWxsIHJlcG9ydCBkZWZhdWx0IGV4cG9ydCBvZiBhbiBhbm9ueW1vdXMgZnVuY3Rpb24nLFxuICAgIG1lc3NhZ2U6ICdVbmV4cGVjdGVkIGRlZmF1bHQgZXhwb3J0IG9mIGFub255bW91cyBmdW5jdGlvbicsXG4gICAgZm9yYmlkOiAobm9kZSkgPT4gIW5vZGUuZGVjbGFyYXRpb24uaWQsXG4gIH0sXG4gIExpdGVyYWw6IHtcbiAgICBvcHRpb246ICdhbGxvd0xpdGVyYWwnLFxuICAgIGRlc2NyaXB0aW9uOiAnSWYgYGZhbHNlYCwgd2lsbCByZXBvcnQgZGVmYXVsdCBleHBvcnQgb2YgYSBsaXRlcmFsJyxcbiAgICBtZXNzYWdlOiAnQXNzaWduIGxpdGVyYWwgdG8gYSB2YXJpYWJsZSBiZWZvcmUgZXhwb3J0aW5nIGFzIG1vZHVsZSBkZWZhdWx0JyxcbiAgfSxcbiAgT2JqZWN0RXhwcmVzc2lvbjoge1xuICAgIG9wdGlvbjogJ2FsbG93T2JqZWN0JyxcbiAgICBkZXNjcmlwdGlvbjogJ0lmIGBmYWxzZWAsIHdpbGwgcmVwb3J0IGRlZmF1bHQgZXhwb3J0IG9mIGFuIG9iamVjdCBleHByZXNzaW9uJyxcbiAgICBtZXNzYWdlOiAnQXNzaWduIG9iamVjdCB0byBhIHZhcmlhYmxlIGJlZm9yZSBleHBvcnRpbmcgYXMgbW9kdWxlIGRlZmF1bHQnLFxuICB9LFxuICBUZW1wbGF0ZUxpdGVyYWw6IHtcbiAgICBvcHRpb246ICdhbGxvd0xpdGVyYWwnLFxuICAgIGRlc2NyaXB0aW9uOiAnSWYgYGZhbHNlYCwgd2lsbCByZXBvcnQgZGVmYXVsdCBleHBvcnQgb2YgYSBsaXRlcmFsJyxcbiAgICBtZXNzYWdlOiAnQXNzaWduIGxpdGVyYWwgdG8gYSB2YXJpYWJsZSBiZWZvcmUgZXhwb3J0aW5nIGFzIG1vZHVsZSBkZWZhdWx0JyxcbiAgfSxcbiAgTmV3RXhwcmVzc2lvbjoge1xuICAgIG9wdGlvbjogJ2FsbG93TmV3JyxcbiAgICBkZXNjcmlwdGlvbjogJ0lmIGBmYWxzZWAsIHdpbGwgcmVwb3J0IGRlZmF1bHQgZXhwb3J0IG9mIGEgY2xhc3MgaW5zdGFudGlhdGlvbicsXG4gICAgbWVzc2FnZTogJ0Fzc2lnbiBpbnN0YW5jZSB0byBhIHZhcmlhYmxlIGJlZm9yZSBleHBvcnRpbmcgYXMgbW9kdWxlIGRlZmF1bHQnLFxuICB9LFxufTtcblxuY29uc3Qgc2NoZW1hUHJvcGVydGllcyA9IGZyb21FbnRyaWVzKHZhbHVlcyhkZWZzKS5tYXAoKGRlZikgPT4gW2RlZi5vcHRpb24sIHtcbiAgZGVzY3JpcHRpb246IGRlZi5kZXNjcmlwdGlvbixcbiAgdHlwZTogJ2Jvb2xlYW4nLFxufV0pKTtcblxuY29uc3QgZGVmYXVsdHMgPSBmcm9tRW50cmllcyh2YWx1ZXMoZGVmcykubWFwKChkZWYpID0+IFtkZWYub3B0aW9uLCBoYXNPd24oZGVmLCAnZGVmYXVsdCcpID8gZGVmLmRlZmF1bHQgOiBmYWxzZV0pKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1ldGE6IHtcbiAgICB0eXBlOiAnc3VnZ2VzdGlvbicsXG4gICAgZG9jczoge1xuICAgICAgY2F0ZWdvcnk6ICdTdHlsZSBndWlkZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvcmJpZCBhbm9ueW1vdXMgdmFsdWVzIGFzIGRlZmF1bHQgZXhwb3J0cy4nLFxuICAgICAgdXJsOiBkb2NzVXJsKCduby1hbm9ueW1vdXMtZGVmYXVsdC1leHBvcnQnKSxcbiAgICB9LFxuXG4gICAgc2NoZW1hOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICBwcm9wZXJ0aWVzOiBzY2hlbWFQcm9wZXJ0aWVzLFxuICAgICAgICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5cbiAgY3JlYXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBvcHRpb25zID0geyAuLi5kZWZhdWx0cywgLi4uY29udGV4dC5vcHRpb25zWzBdIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgRXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uKG5vZGUpIHtcbiAgICAgICAgY29uc3QgZGVmID0gZGVmc1tub2RlLmRlY2xhcmF0aW9uLnR5cGVdO1xuXG4gICAgICAgIC8vIFJlY29nbml6ZWQgbm9kZSB0eXBlIGFuZCBhbGxvd2VkIGJ5IGNvbmZpZ3VyYXRpb24sXG4gICAgICAgIC8vICAgYW5kIGhhcyBubyBmb3JiaWQgY2hlY2ssIG9yIGZvcmJpZCBjaGVjayByZXR1cm4gdmFsdWUgaXMgdHJ1dGh5XG4gICAgICAgIGlmIChkZWYgJiYgIW9wdGlvbnNbZGVmLm9wdGlvbl0gJiYgKCFkZWYuZm9yYmlkIHx8IGRlZi5mb3JiaWQobm9kZSkpKSB7XG4gICAgICAgICAgY29udGV4dC5yZXBvcnQoeyBub2RlLCBtZXNzYWdlOiBkZWYubWVzc2FnZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuICB9LFxufTtcbiJdfQ==