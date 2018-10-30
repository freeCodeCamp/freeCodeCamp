'use strict';

var _staticRequire = require('../core/staticRequire');

var _staticRequire2 = _interopRequireDefault(_staticRequire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function report(context, node) {
  context.report({
    node,
    message: 'Imported module should be assigned'
  });
}

function create(context) {
  return {
    ImportDeclaration(node) {
      if (node.specifiers.length === 0) {
        report(context, node);
      }
    },
    ExpressionStatement(node) {
      if (node.expression.type === 'CallExpression' && (0, _staticRequire2.default)(node.expression)) {
        report(context, node.expression);
      }
    }
  };
}

module.exports = {
  create,
  meta: {
    docs: {},
    schema: [{
      'type': 'object',
      'properties': {
        'devDependencies': { 'type': ['boolean', 'array'] },
        'optionalDependencies': { 'type': ['boolean', 'array'] },
        'peerDependencies': { 'type': ['boolean', 'array'] }
      },
      'additionalProperties': false
    }]
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25vLXVuYXNzaWduZWQtaW1wb3J0LmpzIl0sIm5hbWVzIjpbInJlcG9ydCIsImNvbnRleHQiLCJub2RlIiwibWVzc2FnZSIsImNyZWF0ZSIsIkltcG9ydERlY2xhcmF0aW9uIiwic3BlY2lmaWVycyIsImxlbmd0aCIsIkV4cHJlc3Npb25TdGF0ZW1lbnQiLCJleHByZXNzaW9uIiwidHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJtZXRhIiwiZG9jcyIsInNjaGVtYSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsT0FBaEIsRUFBeUJDLElBQXpCLEVBQStCO0FBQzdCRCxVQUFRRCxNQUFSLENBQWU7QUFDYkUsUUFEYTtBQUViQyxhQUFTO0FBRkksR0FBZjtBQUlEOztBQUVELFNBQVNDLE1BQVQsQ0FBZ0JILE9BQWhCLEVBQXlCO0FBQ3ZCLFNBQU87QUFDTEksc0JBQWtCSCxJQUFsQixFQUF3QjtBQUN0QixVQUFJQSxLQUFLSSxVQUFMLENBQWdCQyxNQUFoQixLQUEyQixDQUEvQixFQUFrQztBQUNoQ1AsZUFBT0MsT0FBUCxFQUFnQkMsSUFBaEI7QUFDRDtBQUNGLEtBTEk7QUFNTE0sd0JBQW9CTixJQUFwQixFQUEwQjtBQUN4QixVQUFJQSxLQUFLTyxVQUFMLENBQWdCQyxJQUFoQixLQUF5QixnQkFBekIsSUFBNkMsNkJBQWdCUixLQUFLTyxVQUFyQixDQUFqRCxFQUFtRjtBQUNqRlQsZUFBT0MsT0FBUCxFQUFnQkMsS0FBS08sVUFBckI7QUFDRDtBQUNGO0FBVkksR0FBUDtBQVlEOztBQUVERSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZSLFFBRGU7QUFFZlMsUUFBTTtBQUNKQyxVQUFNLEVBREY7QUFFSkMsWUFBUSxDQUNOO0FBQ0UsY0FBUSxRQURWO0FBRUUsb0JBQWM7QUFDWiwyQkFBbUIsRUFBRSxRQUFRLENBQUMsU0FBRCxFQUFZLE9BQVosQ0FBVixFQURQO0FBRVosZ0NBQXdCLEVBQUUsUUFBUSxDQUFDLFNBQUQsRUFBWSxPQUFaLENBQVYsRUFGWjtBQUdaLDRCQUFvQixFQUFFLFFBQVEsQ0FBQyxTQUFELEVBQVksT0FBWixDQUFWO0FBSFIsT0FGaEI7QUFPRSw4QkFBd0I7QUFQMUIsS0FETTtBQUZKO0FBRlMsQ0FBakIiLCJmaWxlIjoicnVsZXMvbm8tdW5hc3NpZ25lZC1pbXBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaXNTdGF0aWNSZXF1aXJlIGZyb20gJy4uL2NvcmUvc3RhdGljUmVxdWlyZSdcblxuZnVuY3Rpb24gcmVwb3J0KGNvbnRleHQsIG5vZGUpIHtcbiAgY29udGV4dC5yZXBvcnQoe1xuICAgIG5vZGUsXG4gICAgbWVzc2FnZTogJ0ltcG9ydGVkIG1vZHVsZSBzaG91bGQgYmUgYXNzaWduZWQnLFxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGUoY29udGV4dCkge1xuICByZXR1cm4ge1xuICAgIEltcG9ydERlY2xhcmF0aW9uKG5vZGUpIHtcbiAgICAgIGlmIChub2RlLnNwZWNpZmllcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlcG9ydChjb250ZXh0LCBub2RlKVxuICAgICAgfVxuICAgIH0sXG4gICAgRXhwcmVzc2lvblN0YXRlbWVudChub2RlKSB7XG4gICAgICBpZiAobm9kZS5leHByZXNzaW9uLnR5cGUgPT09ICdDYWxsRXhwcmVzc2lvbicgJiYgaXNTdGF0aWNSZXF1aXJlKG5vZGUuZXhwcmVzc2lvbikpIHtcbiAgICAgICAgcmVwb3J0KGNvbnRleHQsIG5vZGUuZXhwcmVzc2lvbilcbiAgICAgIH1cbiAgICB9LFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGUsXG4gIG1ldGE6IHtcbiAgICBkb2NzOiB7fSxcbiAgICBzY2hlbWE6IFtcbiAgICAgIHtcbiAgICAgICAgJ3R5cGUnOiAnb2JqZWN0JyxcbiAgICAgICAgJ3Byb3BlcnRpZXMnOiB7XG4gICAgICAgICAgJ2RldkRlcGVuZGVuY2llcyc6IHsgJ3R5cGUnOiBbJ2Jvb2xlYW4nLCAnYXJyYXknXSB9LFxuICAgICAgICAgICdvcHRpb25hbERlcGVuZGVuY2llcyc6IHsgJ3R5cGUnOiBbJ2Jvb2xlYW4nLCAnYXJyYXknXSB9LFxuICAgICAgICAgICdwZWVyRGVwZW5kZW5jaWVzJzogeyAndHlwZSc6IFsnYm9vbGVhbicsICdhcnJheSddIH0sXG4gICAgICAgIH0sXG4gICAgICAgICdhZGRpdGlvbmFsUHJvcGVydGllcyc6IGZhbHNlLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxufVxuIl19