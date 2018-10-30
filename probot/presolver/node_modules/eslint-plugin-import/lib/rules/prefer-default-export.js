'use strict';

module.exports = {
  meta: {
    docs: {}
  },

  create: function (context) {
    let specifierExportCount = 0;
    let hasDefaultExport = false;
    let hasStarExport = false;
    let namedExportNode = null;

    function captureDeclaration(identifierOrPattern) {
      if (identifierOrPattern.type === 'ObjectPattern') {
        // recursively capture
        identifierOrPattern.properties.forEach(function (property) {
          captureDeclaration(property.value);
        });
      } else {
        // assume it's a single standard identifier
        specifierExportCount++;
      }
    }

    return {
      'ExportDefaultSpecifier': function () {
        hasDefaultExport = true;
      },

      'ExportSpecifier': function (node) {
        if (node.exported.name === 'default') {
          hasDefaultExport = true;
        } else {
          specifierExportCount++;
          namedExportNode = node;
        }
      },

      'ExportNamedDeclaration': function (node) {
        // if there are specifiers, node.declaration should be null
        if (!node.declaration) return;

        // don't count flow types exports
        if (node.exportKind === 'type') return;

        if (node.declaration.declarations) {
          node.declaration.declarations.forEach(function (declaration) {
            captureDeclaration(declaration.id);
          });
        } else {
          // captures 'export function foo() {}' syntax
          specifierExportCount++;
        }

        namedExportNode = node;
      },

      'ExportDefaultDeclaration': function () {
        hasDefaultExport = true;
      },

      'ExportAllDeclaration': function () {
        hasStarExport = true;
      },

      'Program:exit': function () {
        if (specifierExportCount === 1 && !hasDefaultExport && !hasStarExport) {
          context.report(namedExportNode, 'Prefer default export.');
        }
      }
    };
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3ByZWZlci1kZWZhdWx0LWV4cG9ydC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibWV0YSIsImRvY3MiLCJjcmVhdGUiLCJjb250ZXh0Iiwic3BlY2lmaWVyRXhwb3J0Q291bnQiLCJoYXNEZWZhdWx0RXhwb3J0IiwiaGFzU3RhckV4cG9ydCIsIm5hbWVkRXhwb3J0Tm9kZSIsImNhcHR1cmVEZWNsYXJhdGlvbiIsImlkZW50aWZpZXJPclBhdHRlcm4iLCJ0eXBlIiwicHJvcGVydGllcyIsImZvckVhY2giLCJwcm9wZXJ0eSIsInZhbHVlIiwibm9kZSIsImV4cG9ydGVkIiwibmFtZSIsImRlY2xhcmF0aW9uIiwiZXhwb3J0S2luZCIsImRlY2xhcmF0aW9ucyIsImlkIiwicmVwb3J0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsT0FBT0MsT0FBUCxHQUFpQjtBQUNmQyxRQUFNO0FBQ0pDLFVBQU07QUFERixHQURTOztBQUtmQyxVQUFRLFVBQVNDLE9BQVQsRUFBa0I7QUFDeEIsUUFBSUMsdUJBQXVCLENBQTNCO0FBQ0EsUUFBSUMsbUJBQW1CLEtBQXZCO0FBQ0EsUUFBSUMsZ0JBQWdCLEtBQXBCO0FBQ0EsUUFBSUMsa0JBQWtCLElBQXRCOztBQUVBLGFBQVNDLGtCQUFULENBQTRCQyxtQkFBNUIsRUFBaUQ7QUFDL0MsVUFBSUEsb0JBQW9CQyxJQUFwQixLQUE2QixlQUFqQyxFQUFrRDtBQUNoRDtBQUNBRCw0QkFBb0JFLFVBQXBCLENBQ0dDLE9BREgsQ0FDVyxVQUFTQyxRQUFULEVBQW1CO0FBQzFCTCw2QkFBbUJLLFNBQVNDLEtBQTVCO0FBQ0QsU0FISDtBQUlELE9BTkQsTUFNTztBQUNQO0FBQ0VWO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPO0FBQ0wsZ0NBQTBCLFlBQVc7QUFDbkNDLDJCQUFtQixJQUFuQjtBQUNELE9BSEk7O0FBS0wseUJBQW1CLFVBQVNVLElBQVQsRUFBZTtBQUNoQyxZQUFJQSxLQUFLQyxRQUFMLENBQWNDLElBQWQsS0FBdUIsU0FBM0IsRUFBc0M7QUFDcENaLDZCQUFtQixJQUFuQjtBQUNELFNBRkQsTUFFTztBQUNMRDtBQUNBRyw0QkFBa0JRLElBQWxCO0FBQ0Q7QUFDRixPQVpJOztBQWNMLGdDQUEwQixVQUFTQSxJQUFULEVBQWU7QUFDdkM7QUFDQSxZQUFJLENBQUNBLEtBQUtHLFdBQVYsRUFBdUI7O0FBRXZCO0FBQ0EsWUFBSUgsS0FBS0ksVUFBTCxLQUFvQixNQUF4QixFQUFnQzs7QUFFaEMsWUFBSUosS0FBS0csV0FBTCxDQUFpQkUsWUFBckIsRUFBbUM7QUFDakNMLGVBQUtHLFdBQUwsQ0FBaUJFLFlBQWpCLENBQThCUixPQUE5QixDQUFzQyxVQUFTTSxXQUFULEVBQXNCO0FBQzFEViwrQkFBbUJVLFlBQVlHLEVBQS9CO0FBQ0QsV0FGRDtBQUdELFNBSkQsTUFLSztBQUNIO0FBQ0FqQjtBQUNEOztBQUVERywwQkFBa0JRLElBQWxCO0FBQ0QsT0FoQ0k7O0FBa0NMLGtDQUE0QixZQUFXO0FBQ3JDViwyQkFBbUIsSUFBbkI7QUFDRCxPQXBDSTs7QUFzQ0wsOEJBQXdCLFlBQVc7QUFDakNDLHdCQUFnQixJQUFoQjtBQUNELE9BeENJOztBQTBDTCxzQkFBZ0IsWUFBVztBQUN6QixZQUFJRix5QkFBeUIsQ0FBekIsSUFBOEIsQ0FBQ0MsZ0JBQS9CLElBQW1ELENBQUNDLGFBQXhELEVBQXVFO0FBQ3JFSCxrQkFBUW1CLE1BQVIsQ0FBZWYsZUFBZixFQUFnQyx3QkFBaEM7QUFDRDtBQUNGO0FBOUNJLEtBQVA7QUFnREQ7QUF4RWMsQ0FBakIiLCJmaWxlIjoicnVsZXMvcHJlZmVyLWRlZmF1bHQtZXhwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtZXRhOiB7XG4gICAgZG9jczoge30sXG4gIH0sXG5cbiAgY3JlYXRlOiBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgbGV0IHNwZWNpZmllckV4cG9ydENvdW50ID0gMFxuICAgIGxldCBoYXNEZWZhdWx0RXhwb3J0ID0gZmFsc2VcbiAgICBsZXQgaGFzU3RhckV4cG9ydCA9IGZhbHNlXG4gICAgbGV0IG5hbWVkRXhwb3J0Tm9kZSA9IG51bGxcblxuICAgIGZ1bmN0aW9uIGNhcHR1cmVEZWNsYXJhdGlvbihpZGVudGlmaWVyT3JQYXR0ZXJuKSB7XG4gICAgICBpZiAoaWRlbnRpZmllck9yUGF0dGVybi50eXBlID09PSAnT2JqZWN0UGF0dGVybicpIHtcbiAgICAgICAgLy8gcmVjdXJzaXZlbHkgY2FwdHVyZVxuICAgICAgICBpZGVudGlmaWVyT3JQYXR0ZXJuLnByb3BlcnRpZXNcbiAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihwcm9wZXJ0eSkge1xuICAgICAgICAgICAgY2FwdHVyZURlY2xhcmF0aW9uKHByb3BlcnR5LnZhbHVlKVxuICAgICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gYXNzdW1lIGl0J3MgYSBzaW5nbGUgc3RhbmRhcmQgaWRlbnRpZmllclxuICAgICAgICBzcGVjaWZpZXJFeHBvcnRDb3VudCsrXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICdFeHBvcnREZWZhdWx0U3BlY2lmaWVyJzogZnVuY3Rpb24oKSB7XG4gICAgICAgIGhhc0RlZmF1bHRFeHBvcnQgPSB0cnVlXG4gICAgICB9LFxuXG4gICAgICAnRXhwb3J0U3BlY2lmaWVyJzogZnVuY3Rpb24obm9kZSkge1xuICAgICAgICBpZiAobm9kZS5leHBvcnRlZC5uYW1lID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICBoYXNEZWZhdWx0RXhwb3J0ID0gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNwZWNpZmllckV4cG9ydENvdW50KytcbiAgICAgICAgICBuYW1lZEV4cG9ydE5vZGUgPSBub2RlXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgICdFeHBvcnROYW1lZERlY2xhcmF0aW9uJzogZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAvLyBpZiB0aGVyZSBhcmUgc3BlY2lmaWVycywgbm9kZS5kZWNsYXJhdGlvbiBzaG91bGQgYmUgbnVsbFxuICAgICAgICBpZiAoIW5vZGUuZGVjbGFyYXRpb24pIHJldHVyblxuXG4gICAgICAgIC8vIGRvbid0IGNvdW50IGZsb3cgdHlwZXMgZXhwb3J0c1xuICAgICAgICBpZiAobm9kZS5leHBvcnRLaW5kID09PSAndHlwZScpIHJldHVyblxuXG4gICAgICAgIGlmIChub2RlLmRlY2xhcmF0aW9uLmRlY2xhcmF0aW9ucykge1xuICAgICAgICAgIG5vZGUuZGVjbGFyYXRpb24uZGVjbGFyYXRpb25zLmZvckVhY2goZnVuY3Rpb24oZGVjbGFyYXRpb24pIHtcbiAgICAgICAgICAgIGNhcHR1cmVEZWNsYXJhdGlvbihkZWNsYXJhdGlvbi5pZClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vIGNhcHR1cmVzICdleHBvcnQgZnVuY3Rpb24gZm9vKCkge30nIHN5bnRheFxuICAgICAgICAgIHNwZWNpZmllckV4cG9ydENvdW50KytcbiAgICAgICAgfVxuXG4gICAgICAgIG5hbWVkRXhwb3J0Tm9kZSA9IG5vZGVcbiAgICAgIH0sXG5cbiAgICAgICdFeHBvcnREZWZhdWx0RGVjbGFyYXRpb24nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaGFzRGVmYXVsdEV4cG9ydCA9IHRydWVcbiAgICAgIH0sXG5cbiAgICAgICdFeHBvcnRBbGxEZWNsYXJhdGlvbic6IGZ1bmN0aW9uKCkge1xuICAgICAgICBoYXNTdGFyRXhwb3J0ID0gdHJ1ZVxuICAgICAgfSxcblxuICAgICAgJ1Byb2dyYW06ZXhpdCc6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoc3BlY2lmaWVyRXhwb3J0Q291bnQgPT09IDEgJiYgIWhhc0RlZmF1bHRFeHBvcnQgJiYgIWhhc1N0YXJFeHBvcnQpIHtcbiAgICAgICAgICBjb250ZXh0LnJlcG9ydChuYW1lZEV4cG9ydE5vZGUsICdQcmVmZXIgZGVmYXVsdCBleHBvcnQuJylcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG4gIH0sXG59XG4iXX0=