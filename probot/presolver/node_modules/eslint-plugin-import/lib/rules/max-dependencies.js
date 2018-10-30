'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _staticRequire = require('../core/staticRequire');

var _staticRequire2 = _interopRequireDefault(_staticRequire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DEFAULT_MAX = 10;

const countDependencies = (dependencies, lastNode, context) => {
  var _ref = context.options[0] || { max: DEFAULT_MAX };

  const max = _ref.max;


  if (dependencies.size > max) {
    context.report(lastNode, `Maximum number of dependencies (${ max }) exceeded.`);
  }
};

module.exports = {
  meta: {
    docs: {},

    schema: [{
      'type': 'object',
      'properties': {
        'max': { 'type': 'number' }
      },
      'additionalProperties': false
    }]
  },

  create: context => {
    const dependencies = new Set(); // keep track of dependencies
    let lastNode; // keep track of the last node to report on

    return {
      ImportDeclaration(node) {
        dependencies.add(node.source.value);
        lastNode = node.source;
      },

      CallExpression(node) {
        if ((0, _staticRequire2.default)(node)) {
          var _node$arguments = _slicedToArray(node.arguments, 1);

          const requirePath = _node$arguments[0];

          dependencies.add(requirePath.value);
          lastNode = node;
        }
      },

      'Program:exit': function () {
        countDependencies(dependencies, lastNode, context);
      }
    };
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL21heC1kZXBlbmRlbmNpZXMuanMiXSwibmFtZXMiOlsiREVGQVVMVF9NQVgiLCJjb3VudERlcGVuZGVuY2llcyIsImRlcGVuZGVuY2llcyIsImxhc3ROb2RlIiwiY29udGV4dCIsIm9wdGlvbnMiLCJtYXgiLCJzaXplIiwicmVwb3J0IiwibW9kdWxlIiwiZXhwb3J0cyIsIm1ldGEiLCJkb2NzIiwic2NoZW1hIiwiY3JlYXRlIiwiU2V0IiwiSW1wb3J0RGVjbGFyYXRpb24iLCJub2RlIiwiYWRkIiwic291cmNlIiwidmFsdWUiLCJDYWxsRXhwcmVzc2lvbiIsImFyZ3VtZW50cyIsInJlcXVpcmVQYXRoIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7OztBQUVBLE1BQU1BLGNBQWMsRUFBcEI7O0FBRUEsTUFBTUMsb0JBQW9CLENBQUNDLFlBQUQsRUFBZUMsUUFBZixFQUF5QkMsT0FBekIsS0FBcUM7QUFBQSxhQUMvQ0EsUUFBUUMsT0FBUixDQUFnQixDQUFoQixLQUFzQixFQUFFQyxLQUFLTixXQUFQLEVBRHlCOztBQUFBLFFBQ3RETSxHQURzRCxRQUN0REEsR0FEc0Q7OztBQUc3RCxNQUFJSixhQUFhSyxJQUFiLEdBQW9CRCxHQUF4QixFQUE2QjtBQUMzQkYsWUFBUUksTUFBUixDQUNFTCxRQURGLEVBRUcsb0NBQWtDRyxHQUFJLGNBRnpDO0FBSUQ7QUFDRixDQVREOztBQVdBRyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLFFBQU07QUFDSkMsVUFBTSxFQURGOztBQUdKQyxZQUFRLENBQ047QUFDRSxjQUFRLFFBRFY7QUFFRSxvQkFBYztBQUNaLGVBQU8sRUFBRSxRQUFRLFFBQVY7QUFESyxPQUZoQjtBQUtFLDhCQUF3QjtBQUwxQixLQURNO0FBSEosR0FEUzs7QUFlZkMsVUFBUVYsV0FBVztBQUNqQixVQUFNRixlQUFlLElBQUlhLEdBQUosRUFBckIsQ0FEaUIsQ0FDYztBQUMvQixRQUFJWixRQUFKLENBRmlCLENBRUo7O0FBRWIsV0FBTztBQUNMYSx3QkFBa0JDLElBQWxCLEVBQXdCO0FBQ3RCZixxQkFBYWdCLEdBQWIsQ0FBaUJELEtBQUtFLE1BQUwsQ0FBWUMsS0FBN0I7QUFDQWpCLG1CQUFXYyxLQUFLRSxNQUFoQjtBQUNELE9BSkk7O0FBTUxFLHFCQUFlSixJQUFmLEVBQXFCO0FBQ25CLFlBQUksNkJBQWdCQSxJQUFoQixDQUFKLEVBQTJCO0FBQUEsK0NBQ0RBLEtBQUtLLFNBREo7O0FBQUEsZ0JBQ2pCQyxXQURpQjs7QUFFekJyQix1QkFBYWdCLEdBQWIsQ0FBaUJLLFlBQVlILEtBQTdCO0FBQ0FqQixxQkFBV2MsSUFBWDtBQUNEO0FBQ0YsT0FaSTs7QUFjTCxzQkFBZ0IsWUFBWTtBQUMxQmhCLDBCQUFrQkMsWUFBbEIsRUFBZ0NDLFFBQWhDLEVBQTBDQyxPQUExQztBQUNEO0FBaEJJLEtBQVA7QUFrQkQ7QUFyQ2MsQ0FBakIiLCJmaWxlIjoicnVsZXMvbWF4LWRlcGVuZGVuY2llcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpc1N0YXRpY1JlcXVpcmUgZnJvbSAnLi4vY29yZS9zdGF0aWNSZXF1aXJlJ1xuXG5jb25zdCBERUZBVUxUX01BWCA9IDEwXG5cbmNvbnN0IGNvdW50RGVwZW5kZW5jaWVzID0gKGRlcGVuZGVuY2llcywgbGFzdE5vZGUsIGNvbnRleHQpID0+IHtcbiAgY29uc3Qge21heH0gPSBjb250ZXh0Lm9wdGlvbnNbMF0gfHwgeyBtYXg6IERFRkFVTFRfTUFYIH1cblxuICBpZiAoZGVwZW5kZW5jaWVzLnNpemUgPiBtYXgpIHtcbiAgICBjb250ZXh0LnJlcG9ydChcbiAgICAgIGxhc3ROb2RlLFxuICAgICAgYE1heGltdW0gbnVtYmVyIG9mIGRlcGVuZGVuY2llcyAoJHttYXh9KSBleGNlZWRlZC5gXG4gICAgKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtZXRhOiB7XG4gICAgZG9jczoge30sXG5cbiAgICBzY2hlbWE6IFtcbiAgICAgIHtcbiAgICAgICAgJ3R5cGUnOiAnb2JqZWN0JyxcbiAgICAgICAgJ3Byb3BlcnRpZXMnOiB7XG4gICAgICAgICAgJ21heCc6IHsgJ3R5cGUnOiAnbnVtYmVyJyB9LFxuICAgICAgICB9LFxuICAgICAgICAnYWRkaXRpb25hbFByb3BlcnRpZXMnOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcblxuICBjcmVhdGU6IGNvbnRleHQgPT4ge1xuICAgIGNvbnN0IGRlcGVuZGVuY2llcyA9IG5ldyBTZXQoKSAvLyBrZWVwIHRyYWNrIG9mIGRlcGVuZGVuY2llc1xuICAgIGxldCBsYXN0Tm9kZSAvLyBrZWVwIHRyYWNrIG9mIHRoZSBsYXN0IG5vZGUgdG8gcmVwb3J0IG9uXG5cbiAgICByZXR1cm4ge1xuICAgICAgSW1wb3J0RGVjbGFyYXRpb24obm9kZSkge1xuICAgICAgICBkZXBlbmRlbmNpZXMuYWRkKG5vZGUuc291cmNlLnZhbHVlKVxuICAgICAgICBsYXN0Tm9kZSA9IG5vZGUuc291cmNlXG4gICAgICB9LFxuXG4gICAgICBDYWxsRXhwcmVzc2lvbihub2RlKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY1JlcXVpcmUobm9kZSkpIHtcbiAgICAgICAgICBjb25zdCBbIHJlcXVpcmVQYXRoIF0gPSBub2RlLmFyZ3VtZW50c1xuICAgICAgICAgIGRlcGVuZGVuY2llcy5hZGQocmVxdWlyZVBhdGgudmFsdWUpXG4gICAgICAgICAgbGFzdE5vZGUgPSBub2RlXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgICdQcm9ncmFtOmV4aXQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvdW50RGVwZW5kZW5jaWVzKGRlcGVuZGVuY2llcywgbGFzdE5vZGUsIGNvbnRleHQpXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbn1cbiJdfQ==