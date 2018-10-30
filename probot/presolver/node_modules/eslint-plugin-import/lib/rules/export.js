'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _ExportMap = require('../ExportMap');

var _ExportMap2 = _interopRequireDefault(_ExportMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  meta: {
    docs: {}
  },

  create: function (context) {
    const named = new Map();

    function addNamed(name, node) {
      let nodes = named.get(name);

      if (nodes == null) {
        nodes = new Set();
        named.set(name, nodes);
      }

      nodes.add(node);
    }

    return {
      'ExportDefaultDeclaration': node => addNamed('default', node),

      'ExportSpecifier': function (node) {
        addNamed(node.exported.name, node.exported);
      },

      'ExportNamedDeclaration': function (node) {
        if (node.declaration == null) return;

        if (node.declaration.id != null) {
          addNamed(node.declaration.id.name, node.declaration.id);
        }

        if (node.declaration.declarations != null) {
          for (let declaration of node.declaration.declarations) {
            (0, _ExportMap.recursivePatternCapture)(declaration.id, v => addNamed(v.name, v));
          }
        }
      },

      'ExportAllDeclaration': function (node) {
        if (node.source == null) return; // not sure if this is ever true

        const remoteExports = _ExportMap2.default.get(node.source.value, context);
        if (remoteExports == null) return;

        if (remoteExports.errors.length) {
          remoteExports.reportErrors(context, node);
          return;
        }
        let any = false;
        remoteExports.forEach((v, name) => name !== 'default' && (any = true) && // poor man's filter
        addNamed(name, node));

        if (!any) {
          context.report(node.source, `No named exports found in module '${ node.source.value }'.`);
        }
      },

      'Program:exit': function () {
        for (let _ref of named) {
          var _ref2 = _slicedToArray(_ref, 2);

          let name = _ref2[0];
          let nodes = _ref2[1];

          if (nodes.size <= 1) continue;

          for (let node of nodes) {
            if (name === 'default') {
              context.report(node, 'Multiple default exports.');
            } else context.report(node, `Multiple exports of name '${ name }'.`);
          }
        }
      }
    };
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2V4cG9ydC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibWV0YSIsImRvY3MiLCJjcmVhdGUiLCJjb250ZXh0IiwibmFtZWQiLCJNYXAiLCJhZGROYW1lZCIsIm5hbWUiLCJub2RlIiwibm9kZXMiLCJnZXQiLCJTZXQiLCJzZXQiLCJhZGQiLCJleHBvcnRlZCIsImRlY2xhcmF0aW9uIiwiaWQiLCJkZWNsYXJhdGlvbnMiLCJ2Iiwic291cmNlIiwicmVtb3RlRXhwb3J0cyIsInZhbHVlIiwiZXJyb3JzIiwibGVuZ3RoIiwicmVwb3J0RXJyb3JzIiwiYW55IiwiZm9yRWFjaCIsInJlcG9ydCIsInNpemUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7O0FBRUFBLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsUUFBTTtBQUNKQyxVQUFNO0FBREYsR0FEUzs7QUFLZkMsVUFBUSxVQUFVQyxPQUFWLEVBQW1CO0FBQ3pCLFVBQU1DLFFBQVEsSUFBSUMsR0FBSixFQUFkOztBQUVBLGFBQVNDLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCQyxJQUF4QixFQUE4QjtBQUM1QixVQUFJQyxRQUFRTCxNQUFNTSxHQUFOLENBQVVILElBQVYsQ0FBWjs7QUFFQSxVQUFJRSxTQUFTLElBQWIsRUFBbUI7QUFDakJBLGdCQUFRLElBQUlFLEdBQUosRUFBUjtBQUNBUCxjQUFNUSxHQUFOLENBQVVMLElBQVYsRUFBZ0JFLEtBQWhCO0FBQ0Q7O0FBRURBLFlBQU1JLEdBQU4sQ0FBVUwsSUFBVjtBQUNEOztBQUVELFdBQU87QUFDTCxrQ0FBNkJBLElBQUQsSUFBVUYsU0FBUyxTQUFULEVBQW9CRSxJQUFwQixDQURqQzs7QUFHTCx5QkFBbUIsVUFBVUEsSUFBVixFQUFnQjtBQUNqQ0YsaUJBQVNFLEtBQUtNLFFBQUwsQ0FBY1AsSUFBdkIsRUFBNkJDLEtBQUtNLFFBQWxDO0FBQ0QsT0FMSTs7QUFPTCxnQ0FBMEIsVUFBVU4sSUFBVixFQUFnQjtBQUN4QyxZQUFJQSxLQUFLTyxXQUFMLElBQW9CLElBQXhCLEVBQThCOztBQUU5QixZQUFJUCxLQUFLTyxXQUFMLENBQWlCQyxFQUFqQixJQUF1QixJQUEzQixFQUFpQztBQUMvQlYsbUJBQVNFLEtBQUtPLFdBQUwsQ0FBaUJDLEVBQWpCLENBQW9CVCxJQUE3QixFQUFtQ0MsS0FBS08sV0FBTCxDQUFpQkMsRUFBcEQ7QUFDRDs7QUFFRCxZQUFJUixLQUFLTyxXQUFMLENBQWlCRSxZQUFqQixJQUFpQyxJQUFyQyxFQUEyQztBQUN6QyxlQUFLLElBQUlGLFdBQVQsSUFBd0JQLEtBQUtPLFdBQUwsQ0FBaUJFLFlBQXpDLEVBQXVEO0FBQ3JELG9EQUF3QkYsWUFBWUMsRUFBcEMsRUFBd0NFLEtBQUtaLFNBQVNZLEVBQUVYLElBQVgsRUFBaUJXLENBQWpCLENBQTdDO0FBQ0Q7QUFDRjtBQUNGLE9BbkJJOztBQXFCTCw4QkFBd0IsVUFBVVYsSUFBVixFQUFnQjtBQUN0QyxZQUFJQSxLQUFLVyxNQUFMLElBQWUsSUFBbkIsRUFBeUIsT0FEYSxDQUNOOztBQUVoQyxjQUFNQyxnQkFBZ0Isb0JBQVVWLEdBQVYsQ0FBY0YsS0FBS1csTUFBTCxDQUFZRSxLQUExQixFQUFpQ2xCLE9BQWpDLENBQXRCO0FBQ0EsWUFBSWlCLGlCQUFpQixJQUFyQixFQUEyQjs7QUFFM0IsWUFBSUEsY0FBY0UsTUFBZCxDQUFxQkMsTUFBekIsRUFBaUM7QUFDL0JILHdCQUFjSSxZQUFkLENBQTJCckIsT0FBM0IsRUFBb0NLLElBQXBDO0FBQ0E7QUFDRDtBQUNELFlBQUlpQixNQUFNLEtBQVY7QUFDQUwsc0JBQWNNLE9BQWQsQ0FBc0IsQ0FBQ1IsQ0FBRCxFQUFJWCxJQUFKLEtBQ3BCQSxTQUFTLFNBQVQsS0FDQ2tCLE1BQU0sSUFEUCxLQUNnQjtBQUNoQm5CLGlCQUFTQyxJQUFULEVBQWVDLElBQWYsQ0FIRjs7QUFLQSxZQUFJLENBQUNpQixHQUFMLEVBQVU7QUFDUnRCLGtCQUFRd0IsTUFBUixDQUFlbkIsS0FBS1csTUFBcEIsRUFDRyxzQ0FBb0NYLEtBQUtXLE1BQUwsQ0FBWUUsS0FBTSxLQUR6RDtBQUVEO0FBQ0YsT0F6Q0k7O0FBMkNMLHNCQUFnQixZQUFZO0FBQzFCLHlCQUEwQmpCLEtBQTFCLEVBQWlDO0FBQUE7O0FBQUEsY0FBdkJHLElBQXVCO0FBQUEsY0FBakJFLEtBQWlCOztBQUMvQixjQUFJQSxNQUFNbUIsSUFBTixJQUFjLENBQWxCLEVBQXFCOztBQUVyQixlQUFLLElBQUlwQixJQUFULElBQWlCQyxLQUFqQixFQUF3QjtBQUN0QixnQkFBSUYsU0FBUyxTQUFiLEVBQXdCO0FBQ3RCSixzQkFBUXdCLE1BQVIsQ0FBZW5CLElBQWYsRUFBcUIsMkJBQXJCO0FBQ0QsYUFGRCxNQUVPTCxRQUFRd0IsTUFBUixDQUFlbkIsSUFBZixFQUFzQiw4QkFBNEJELElBQUssS0FBdkQ7QUFDUjtBQUNGO0FBQ0Y7QUFyREksS0FBUDtBQXVERDtBQTFFYyxDQUFqQiIsImZpbGUiOiJydWxlcy9leHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhwb3J0TWFwLCB7IHJlY3Vyc2l2ZVBhdHRlcm5DYXB0dXJlIH0gZnJvbSAnLi4vRXhwb3J0TWFwJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWV0YToge1xuICAgIGRvY3M6IHt9LFxuICB9LFxuXG4gIGNyZWF0ZTogZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICBjb25zdCBuYW1lZCA9IG5ldyBNYXAoKVxuXG4gICAgZnVuY3Rpb24gYWRkTmFtZWQobmFtZSwgbm9kZSkge1xuICAgICAgbGV0IG5vZGVzID0gbmFtZWQuZ2V0KG5hbWUpXG5cbiAgICAgIGlmIChub2RlcyA9PSBudWxsKSB7XG4gICAgICAgIG5vZGVzID0gbmV3IFNldCgpXG4gICAgICAgIG5hbWVkLnNldChuYW1lLCBub2RlcylcbiAgICAgIH1cblxuICAgICAgbm9kZXMuYWRkKG5vZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICdFeHBvcnREZWZhdWx0RGVjbGFyYXRpb24nOiAobm9kZSkgPT4gYWRkTmFtZWQoJ2RlZmF1bHQnLCBub2RlKSxcblxuICAgICAgJ0V4cG9ydFNwZWNpZmllcic6IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIGFkZE5hbWVkKG5vZGUuZXhwb3J0ZWQubmFtZSwgbm9kZS5leHBvcnRlZClcbiAgICAgIH0sXG5cbiAgICAgICdFeHBvcnROYW1lZERlY2xhcmF0aW9uJzogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUuZGVjbGFyYXRpb24gPT0gbnVsbCkgcmV0dXJuXG5cbiAgICAgICAgaWYgKG5vZGUuZGVjbGFyYXRpb24uaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFkZE5hbWVkKG5vZGUuZGVjbGFyYXRpb24uaWQubmFtZSwgbm9kZS5kZWNsYXJhdGlvbi5pZClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLmRlY2xhcmF0aW9uLmRlY2xhcmF0aW9ucyAhPSBudWxsKSB7XG4gICAgICAgICAgZm9yIChsZXQgZGVjbGFyYXRpb24gb2Ygbm9kZS5kZWNsYXJhdGlvbi5kZWNsYXJhdGlvbnMpIHtcbiAgICAgICAgICAgIHJlY3Vyc2l2ZVBhdHRlcm5DYXB0dXJlKGRlY2xhcmF0aW9uLmlkLCB2ID0+IGFkZE5hbWVkKHYubmFtZSwgdikpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAnRXhwb3J0QWxsRGVjbGFyYXRpb24nOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpZiAobm9kZS5zb3VyY2UgPT0gbnVsbCkgcmV0dXJuIC8vIG5vdCBzdXJlIGlmIHRoaXMgaXMgZXZlciB0cnVlXG5cbiAgICAgICAgY29uc3QgcmVtb3RlRXhwb3J0cyA9IEV4cG9ydE1hcC5nZXQobm9kZS5zb3VyY2UudmFsdWUsIGNvbnRleHQpXG4gICAgICAgIGlmIChyZW1vdGVFeHBvcnRzID09IG51bGwpIHJldHVyblxuXG4gICAgICAgIGlmIChyZW1vdGVFeHBvcnRzLmVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICByZW1vdGVFeHBvcnRzLnJlcG9ydEVycm9ycyhjb250ZXh0LCBub2RlKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGxldCBhbnkgPSBmYWxzZVxuICAgICAgICByZW1vdGVFeHBvcnRzLmZvckVhY2goKHYsIG5hbWUpID0+XG4gICAgICAgICAgbmFtZSAhPT0gJ2RlZmF1bHQnICYmXG4gICAgICAgICAgKGFueSA9IHRydWUpICYmIC8vIHBvb3IgbWFuJ3MgZmlsdGVyXG4gICAgICAgICAgYWRkTmFtZWQobmFtZSwgbm9kZSkpXG5cbiAgICAgICAgaWYgKCFhbnkpIHtcbiAgICAgICAgICBjb250ZXh0LnJlcG9ydChub2RlLnNvdXJjZSxcbiAgICAgICAgICAgIGBObyBuYW1lZCBleHBvcnRzIGZvdW5kIGluIG1vZHVsZSAnJHtub2RlLnNvdXJjZS52YWx1ZX0nLmApXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgICdQcm9ncmFtOmV4aXQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAobGV0IFtuYW1lLCBub2Rlc10gb2YgbmFtZWQpIHtcbiAgICAgICAgICBpZiAobm9kZXMuc2l6ZSA8PSAxKSBjb250aW51ZVxuXG4gICAgICAgICAgZm9yIChsZXQgbm9kZSBvZiBub2Rlcykge1xuICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgICBjb250ZXh0LnJlcG9ydChub2RlLCAnTXVsdGlwbGUgZGVmYXVsdCBleHBvcnRzLicpXG4gICAgICAgICAgICB9IGVsc2UgY29udGV4dC5yZXBvcnQobm9kZSwgYE11bHRpcGxlIGV4cG9ydHMgb2YgbmFtZSAnJHtuYW1lfScuYClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuICB9LFxufVxuIl19