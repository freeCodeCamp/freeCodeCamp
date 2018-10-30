'use strict';

module.exports = {
  meta: {
    docs: {}
  },

  create: function (context) {
    function checkDeclaration(node) {
      const kind = node.kind;

      if (kind === 'var' || kind === 'let') {
        context.report(node, `Exporting mutable '${ kind }' binding, use 'const' instead.`);
      }
    }

    function checkDeclarationsInScope(_ref, name) {
      let variables = _ref.variables;

      for (let variable of variables) {
        if (variable.name === name) {
          for (let def of variable.defs) {
            if (def.type === 'Variable') {
              checkDeclaration(def.parent);
            }
          }
        }
      }
    }

    function handleExportDefault(node) {
      const scope = context.getScope();

      if (node.declaration.name) {
        checkDeclarationsInScope(scope, node.declaration.name);
      }
    }

    function handleExportNamed(node) {
      const scope = context.getScope();

      if (node.declaration) {
        checkDeclaration(node.declaration);
      } else if (!node.source) {
        for (let specifier of node.specifiers) {
          checkDeclarationsInScope(scope, specifier.local.name);
        }
      }
    }

    return {
      'ExportDefaultDeclaration': handleExportDefault,
      'ExportNamedDeclaration': handleExportNamed
    };
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25vLW11dGFibGUtZXhwb3J0cy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibWV0YSIsImRvY3MiLCJjcmVhdGUiLCJjb250ZXh0IiwiY2hlY2tEZWNsYXJhdGlvbiIsIm5vZGUiLCJraW5kIiwicmVwb3J0IiwiY2hlY2tEZWNsYXJhdGlvbnNJblNjb3BlIiwibmFtZSIsInZhcmlhYmxlcyIsInZhcmlhYmxlIiwiZGVmIiwiZGVmcyIsInR5cGUiLCJwYXJlbnQiLCJoYW5kbGVFeHBvcnREZWZhdWx0Iiwic2NvcGUiLCJnZXRTY29wZSIsImRlY2xhcmF0aW9uIiwiaGFuZGxlRXhwb3J0TmFtZWQiLCJzb3VyY2UiLCJzcGVjaWZpZXIiLCJzcGVjaWZpZXJzIiwibG9jYWwiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsUUFBTTtBQUNKQyxVQUFNO0FBREYsR0FEUzs7QUFLZkMsVUFBUSxVQUFVQyxPQUFWLEVBQW1CO0FBQ3pCLGFBQVNDLGdCQUFULENBQTBCQyxJQUExQixFQUFnQztBQUFBLFlBQ3ZCQyxJQUR1QixHQUNmRCxJQURlLENBQ3ZCQyxJQUR1Qjs7QUFFOUIsVUFBSUEsU0FBUyxLQUFULElBQWtCQSxTQUFTLEtBQS9CLEVBQXNDO0FBQ3BDSCxnQkFBUUksTUFBUixDQUFlRixJQUFmLEVBQXNCLHVCQUFxQkMsSUFBSyxrQ0FBaEQ7QUFDRDtBQUNGOztBQUVELGFBQVNFLHdCQUFULE9BQStDQyxJQUEvQyxFQUFxRDtBQUFBLFVBQWxCQyxTQUFrQixRQUFsQkEsU0FBa0I7O0FBQ25ELFdBQUssSUFBSUMsUUFBVCxJQUFxQkQsU0FBckIsRUFBZ0M7QUFDOUIsWUFBSUMsU0FBU0YsSUFBVCxLQUFrQkEsSUFBdEIsRUFBNEI7QUFDMUIsZUFBSyxJQUFJRyxHQUFULElBQWdCRCxTQUFTRSxJQUF6QixFQUErQjtBQUM3QixnQkFBSUQsSUFBSUUsSUFBSixLQUFhLFVBQWpCLEVBQTZCO0FBQzNCViwrQkFBaUJRLElBQUlHLE1BQXJCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7QUFDRjs7QUFFRCxhQUFTQyxtQkFBVCxDQUE2QlgsSUFBN0IsRUFBbUM7QUFDakMsWUFBTVksUUFBUWQsUUFBUWUsUUFBUixFQUFkOztBQUVBLFVBQUliLEtBQUtjLFdBQUwsQ0FBaUJWLElBQXJCLEVBQTJCO0FBQ3pCRCxpQ0FBeUJTLEtBQXpCLEVBQWdDWixLQUFLYyxXQUFMLENBQWlCVixJQUFqRDtBQUNEO0FBQ0Y7O0FBRUQsYUFBU1csaUJBQVQsQ0FBMkJmLElBQTNCLEVBQWlDO0FBQy9CLFlBQU1ZLFFBQVFkLFFBQVFlLFFBQVIsRUFBZDs7QUFFQSxVQUFJYixLQUFLYyxXQUFULEVBQXVCO0FBQ3JCZix5QkFBaUJDLEtBQUtjLFdBQXRCO0FBQ0QsT0FGRCxNQUVPLElBQUksQ0FBQ2QsS0FBS2dCLE1BQVYsRUFBa0I7QUFDdkIsYUFBSyxJQUFJQyxTQUFULElBQXNCakIsS0FBS2tCLFVBQTNCLEVBQXVDO0FBQ3JDZixtQ0FBeUJTLEtBQXpCLEVBQWdDSyxVQUFVRSxLQUFWLENBQWdCZixJQUFoRDtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxXQUFPO0FBQ0wsa0NBQTRCTyxtQkFEdkI7QUFFTCxnQ0FBMEJJO0FBRnJCLEtBQVA7QUFJRDtBQWpEYyxDQUFqQiIsImZpbGUiOiJydWxlcy9uby1tdXRhYmxlLWV4cG9ydHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWV0YToge1xuICAgIGRvY3M6IHt9LFxuICB9LFxuXG4gIGNyZWF0ZTogZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICBmdW5jdGlvbiBjaGVja0RlY2xhcmF0aW9uKG5vZGUpIHtcbiAgICAgIGNvbnN0IHtraW5kfSA9IG5vZGVcbiAgICAgIGlmIChraW5kID09PSAndmFyJyB8fCBraW5kID09PSAnbGV0Jykge1xuICAgICAgICBjb250ZXh0LnJlcG9ydChub2RlLCBgRXhwb3J0aW5nIG11dGFibGUgJyR7a2luZH0nIGJpbmRpbmcsIHVzZSAnY29uc3QnIGluc3RlYWQuYClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0RlY2xhcmF0aW9uc0luU2NvcGUoe3ZhcmlhYmxlc30sIG5hbWUpIHtcbiAgICAgIGZvciAobGV0IHZhcmlhYmxlIG9mIHZhcmlhYmxlcykge1xuICAgICAgICBpZiAodmFyaWFibGUubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgIGZvciAobGV0IGRlZiBvZiB2YXJpYWJsZS5kZWZzKSB7XG4gICAgICAgICAgICBpZiAoZGVmLnR5cGUgPT09ICdWYXJpYWJsZScpIHtcbiAgICAgICAgICAgICAgY2hlY2tEZWNsYXJhdGlvbihkZWYucGFyZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUV4cG9ydERlZmF1bHQobm9kZSkge1xuICAgICAgY29uc3Qgc2NvcGUgPSBjb250ZXh0LmdldFNjb3BlKClcblxuICAgICAgaWYgKG5vZGUuZGVjbGFyYXRpb24ubmFtZSkge1xuICAgICAgICBjaGVja0RlY2xhcmF0aW9uc0luU2NvcGUoc2NvcGUsIG5vZGUuZGVjbGFyYXRpb24ubmFtZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVFeHBvcnROYW1lZChub2RlKSB7XG4gICAgICBjb25zdCBzY29wZSA9IGNvbnRleHQuZ2V0U2NvcGUoKVxuXG4gICAgICBpZiAobm9kZS5kZWNsYXJhdGlvbikgIHtcbiAgICAgICAgY2hlY2tEZWNsYXJhdGlvbihub2RlLmRlY2xhcmF0aW9uKVxuICAgICAgfSBlbHNlIGlmICghbm9kZS5zb3VyY2UpIHtcbiAgICAgICAgZm9yIChsZXQgc3BlY2lmaWVyIG9mIG5vZGUuc3BlY2lmaWVycykge1xuICAgICAgICAgIGNoZWNrRGVjbGFyYXRpb25zSW5TY29wZShzY29wZSwgc3BlY2lmaWVyLmxvY2FsLm5hbWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgJ0V4cG9ydERlZmF1bHREZWNsYXJhdGlvbic6IGhhbmRsZUV4cG9ydERlZmF1bHQsXG4gICAgICAnRXhwb3J0TmFtZWREZWNsYXJhdGlvbic6IGhhbmRsZUV4cG9ydE5hbWVkLFxuICAgIH1cbiAgfSxcbn1cbiJdfQ==