'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _resolve = require('eslint-module-utils/resolve');

var _resolve2 = _interopRequireDefault(_resolve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkImports(imported, context) {
  for (let _ref of imported.entries()) {
    var _ref2 = _slicedToArray(_ref, 2);

    let module = _ref2[0];
    let nodes = _ref2[1];

    if (nodes.size > 1) {
      for (let node of nodes) {
        context.report(node, `'${ module }' imported multiple times.`);
      }
    }
  }
}

module.exports = {
  meta: {
    docs: {}
  },

  create: function (context) {
    const imported = new Map();
    const typesImported = new Map();
    return {
      'ImportDeclaration': function (n) {
        // resolved path will cover aliased duplicates
        const resolvedPath = (0, _resolve2.default)(n.source.value, context) || n.source.value;
        const importMap = n.importKind === 'type' ? typesImported : imported;

        if (importMap.has(resolvedPath)) {
          importMap.get(resolvedPath).add(n.source);
        } else {
          importMap.set(resolvedPath, new Set([n.source]));
        }
      },

      'Program:exit': function () {
        checkImports(imported, context);
        checkImports(typesImported, context);
      }
    };
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25vLWR1cGxpY2F0ZXMuanMiXSwibmFtZXMiOlsiY2hlY2tJbXBvcnRzIiwiaW1wb3J0ZWQiLCJjb250ZXh0IiwiZW50cmllcyIsIm1vZHVsZSIsIm5vZGVzIiwic2l6ZSIsIm5vZGUiLCJyZXBvcnQiLCJleHBvcnRzIiwibWV0YSIsImRvY3MiLCJjcmVhdGUiLCJNYXAiLCJ0eXBlc0ltcG9ydGVkIiwibiIsInJlc29sdmVkUGF0aCIsInNvdXJjZSIsInZhbHVlIiwiaW1wb3J0TWFwIiwiaW1wb3J0S2luZCIsImhhcyIsImdldCIsImFkZCIsInNldCIsIlNldCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7QUFFQSxTQUFTQSxZQUFULENBQXNCQyxRQUF0QixFQUFnQ0MsT0FBaEMsRUFBeUM7QUFDdkMsbUJBQTRCRCxTQUFTRSxPQUFULEVBQTVCLEVBQWdEO0FBQUE7O0FBQUEsUUFBdENDLE1BQXNDO0FBQUEsUUFBOUJDLEtBQThCOztBQUM5QyxRQUFJQSxNQUFNQyxJQUFOLEdBQWEsQ0FBakIsRUFBb0I7QUFDbEIsV0FBSyxJQUFJQyxJQUFULElBQWlCRixLQUFqQixFQUF3QjtBQUN0QkgsZ0JBQVFNLE1BQVIsQ0FBZUQsSUFBZixFQUFzQixLQUFHSCxNQUFPLDZCQUFoQztBQUNEO0FBQ0Y7QUFDRjtBQUNGOztBQUVEQSxPQUFPSyxPQUFQLEdBQWlCO0FBQ2ZDLFFBQU07QUFDSkMsVUFBTTtBQURGLEdBRFM7O0FBS2ZDLFVBQVEsVUFBVVYsT0FBVixFQUFtQjtBQUN6QixVQUFNRCxXQUFXLElBQUlZLEdBQUosRUFBakI7QUFDQSxVQUFNQyxnQkFBZ0IsSUFBSUQsR0FBSixFQUF0QjtBQUNBLFdBQU87QUFDTCwyQkFBcUIsVUFBVUUsQ0FBVixFQUFhO0FBQ2hDO0FBQ0EsY0FBTUMsZUFBZSx1QkFBUUQsRUFBRUUsTUFBRixDQUFTQyxLQUFqQixFQUF3QmhCLE9BQXhCLEtBQW9DYSxFQUFFRSxNQUFGLENBQVNDLEtBQWxFO0FBQ0EsY0FBTUMsWUFBWUosRUFBRUssVUFBRixLQUFpQixNQUFqQixHQUEwQk4sYUFBMUIsR0FBMENiLFFBQTVEOztBQUVBLFlBQUlrQixVQUFVRSxHQUFWLENBQWNMLFlBQWQsQ0FBSixFQUFpQztBQUMvQkcsb0JBQVVHLEdBQVYsQ0FBY04sWUFBZCxFQUE0Qk8sR0FBNUIsQ0FBZ0NSLEVBQUVFLE1BQWxDO0FBQ0QsU0FGRCxNQUVPO0FBQ0xFLG9CQUFVSyxHQUFWLENBQWNSLFlBQWQsRUFBNEIsSUFBSVMsR0FBSixDQUFRLENBQUNWLEVBQUVFLE1BQUgsQ0FBUixDQUE1QjtBQUNEO0FBQ0YsT0FYSTs7QUFhTCxzQkFBZ0IsWUFBWTtBQUMxQmpCLHFCQUFhQyxRQUFiLEVBQXVCQyxPQUF2QjtBQUNBRixxQkFBYWMsYUFBYixFQUE0QlosT0FBNUI7QUFDRDtBQWhCSSxLQUFQO0FBa0JEO0FBMUJjLENBQWpCIiwiZmlsZSI6InJ1bGVzL25vLWR1cGxpY2F0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVzb2x2ZSBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL3Jlc29sdmUnXG5cbmZ1bmN0aW9uIGNoZWNrSW1wb3J0cyhpbXBvcnRlZCwgY29udGV4dCkge1xuICBmb3IgKGxldCBbbW9kdWxlLCBub2Rlc10gb2YgaW1wb3J0ZWQuZW50cmllcygpKSB7XG4gICAgaWYgKG5vZGVzLnNpemUgPiAxKSB7XG4gICAgICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XG4gICAgICAgIGNvbnRleHQucmVwb3J0KG5vZGUsIGAnJHttb2R1bGV9JyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcy5gKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWV0YToge1xuICAgIGRvY3M6IHt9LFxuICB9LFxuXG4gIGNyZWF0ZTogZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICBjb25zdCBpbXBvcnRlZCA9IG5ldyBNYXAoKVxuICAgIGNvbnN0IHR5cGVzSW1wb3J0ZWQgPSBuZXcgTWFwKClcbiAgICByZXR1cm4ge1xuICAgICAgJ0ltcG9ydERlY2xhcmF0aW9uJzogZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgLy8gcmVzb2x2ZWQgcGF0aCB3aWxsIGNvdmVyIGFsaWFzZWQgZHVwbGljYXRlc1xuICAgICAgICBjb25zdCByZXNvbHZlZFBhdGggPSByZXNvbHZlKG4uc291cmNlLnZhbHVlLCBjb250ZXh0KSB8fCBuLnNvdXJjZS52YWx1ZVxuICAgICAgICBjb25zdCBpbXBvcnRNYXAgPSBuLmltcG9ydEtpbmQgPT09ICd0eXBlJyA/IHR5cGVzSW1wb3J0ZWQgOiBpbXBvcnRlZFxuXG4gICAgICAgIGlmIChpbXBvcnRNYXAuaGFzKHJlc29sdmVkUGF0aCkpIHtcbiAgICAgICAgICBpbXBvcnRNYXAuZ2V0KHJlc29sdmVkUGF0aCkuYWRkKG4uc291cmNlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGltcG9ydE1hcC5zZXQocmVzb2x2ZWRQYXRoLCBuZXcgU2V0KFtuLnNvdXJjZV0pKVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAnUHJvZ3JhbTpleGl0JzogZnVuY3Rpb24gKCkge1xuICAgICAgICBjaGVja0ltcG9ydHMoaW1wb3J0ZWQsIGNvbnRleHQpXG4gICAgICAgIGNoZWNrSW1wb3J0cyh0eXBlc0ltcG9ydGVkLCBjb250ZXh0KVxuICAgICAgfSxcbiAgICB9XG4gIH0sXG59XG4iXX0=