'use strict';

module.exports = {
  meta: {
    docs: {}
  },

  create: function (context) {
    function isPossibleDirective(node) {
      return node.type === 'ExpressionStatement' && node.expression.type === 'Literal' && typeof node.expression.value === 'string';
    }

    return {
      'Program': function (n) {
        const body = n.body,
              absoluteFirst = context.options[0] === 'absolute-first';
        let nonImportCount = 0,
            anyExpressions = false,
            anyRelative = false;
        body.forEach(function (node) {
          if (!anyExpressions && isPossibleDirective(node)) {
            return;
          }

          anyExpressions = true;

          if (node.type === 'ImportDeclaration') {
            if (absoluteFirst) {
              if (/^\./.test(node.source.value)) {
                anyRelative = true;
              } else if (anyRelative) {
                context.report({
                  node: node.source,
                  message: 'Absolute imports should come before relative imports.'
                });
              }
            }
            if (nonImportCount > 0) {
              context.report({
                node,
                message: 'Import in body of module; reorder to top.'
              });
            }
          } else {
            nonImportCount++;
          }
        });
      }
    };
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2ZpcnN0LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJtZXRhIiwiZG9jcyIsImNyZWF0ZSIsImNvbnRleHQiLCJpc1Bvc3NpYmxlRGlyZWN0aXZlIiwibm9kZSIsInR5cGUiLCJleHByZXNzaW9uIiwidmFsdWUiLCJuIiwiYm9keSIsImFic29sdXRlRmlyc3QiLCJvcHRpb25zIiwibm9uSW1wb3J0Q291bnQiLCJhbnlFeHByZXNzaW9ucyIsImFueVJlbGF0aXZlIiwiZm9yRWFjaCIsInRlc3QiLCJzb3VyY2UiLCJyZXBvcnQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLFFBQU07QUFDSkMsVUFBTTtBQURGLEdBRFM7O0FBS2ZDLFVBQVEsVUFBVUMsT0FBVixFQUFtQjtBQUN6QixhQUFTQyxtQkFBVCxDQUE4QkMsSUFBOUIsRUFBb0M7QUFDbEMsYUFBT0EsS0FBS0MsSUFBTCxLQUFjLHFCQUFkLElBQ0xELEtBQUtFLFVBQUwsQ0FBZ0JELElBQWhCLEtBQXlCLFNBRHBCLElBRUwsT0FBT0QsS0FBS0UsVUFBTCxDQUFnQkMsS0FBdkIsS0FBaUMsUUFGbkM7QUFHRDs7QUFFRCxXQUFPO0FBQ0wsaUJBQVcsVUFBVUMsQ0FBVixFQUFhO0FBQ3RCLGNBQU1DLE9BQU9ELEVBQUVDLElBQWY7QUFBQSxjQUNNQyxnQkFBZ0JSLFFBQVFTLE9BQVIsQ0FBZ0IsQ0FBaEIsTUFBdUIsZ0JBRDdDO0FBRUEsWUFBSUMsaUJBQWlCLENBQXJCO0FBQUEsWUFDSUMsaUJBQWlCLEtBRHJCO0FBQUEsWUFFSUMsY0FBYyxLQUZsQjtBQUdBTCxhQUFLTSxPQUFMLENBQWEsVUFBVVgsSUFBVixFQUFlO0FBQzFCLGNBQUksQ0FBQ1MsY0FBRCxJQUFtQlYsb0JBQW9CQyxJQUFwQixDQUF2QixFQUFrRDtBQUNoRDtBQUNEOztBQUVEUywyQkFBaUIsSUFBakI7O0FBRUEsY0FBSVQsS0FBS0MsSUFBTCxLQUFjLG1CQUFsQixFQUF1QztBQUNyQyxnQkFBSUssYUFBSixFQUFtQjtBQUNqQixrQkFBSSxNQUFNTSxJQUFOLENBQVdaLEtBQUthLE1BQUwsQ0FBWVYsS0FBdkIsQ0FBSixFQUFtQztBQUNqQ08sOEJBQWMsSUFBZDtBQUNELGVBRkQsTUFFTyxJQUFJQSxXQUFKLEVBQWlCO0FBQ3RCWix3QkFBUWdCLE1BQVIsQ0FBZTtBQUNiZCx3QkFBTUEsS0FBS2EsTUFERTtBQUViRSwyQkFBUztBQUZJLGlCQUFmO0FBSUQ7QUFDRjtBQUNELGdCQUFJUCxpQkFBaUIsQ0FBckIsRUFBd0I7QUFDdEJWLHNCQUFRZ0IsTUFBUixDQUFlO0FBQ2JkLG9CQURhO0FBRWJlLHlCQUFTO0FBRkksZUFBZjtBQUlEO0FBQ0YsV0FqQkQsTUFpQk87QUFDTFA7QUFDRDtBQUNGLFNBM0JEO0FBNEJEO0FBbkNJLEtBQVA7QUFxQ0Q7QUFqRGMsQ0FBakIiLCJmaWxlIjoicnVsZXMvZmlyc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWV0YToge1xuICAgIGRvY3M6IHt9LFxuICB9LFxuXG4gIGNyZWF0ZTogZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICBmdW5jdGlvbiBpc1Bvc3NpYmxlRGlyZWN0aXZlIChub2RlKSB7XG4gICAgICByZXR1cm4gbm9kZS50eXBlID09PSAnRXhwcmVzc2lvblN0YXRlbWVudCcgJiZcbiAgICAgICAgbm9kZS5leHByZXNzaW9uLnR5cGUgPT09ICdMaXRlcmFsJyAmJlxuICAgICAgICB0eXBlb2Ygbm9kZS5leHByZXNzaW9uLnZhbHVlID09PSAnc3RyaW5nJ1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAnUHJvZ3JhbSc6IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBuLmJvZHlcbiAgICAgICAgICAgICwgYWJzb2x1dGVGaXJzdCA9IGNvbnRleHQub3B0aW9uc1swXSA9PT0gJ2Fic29sdXRlLWZpcnN0J1xuICAgICAgICBsZXQgbm9uSW1wb3J0Q291bnQgPSAwXG4gICAgICAgICAgLCBhbnlFeHByZXNzaW9ucyA9IGZhbHNlXG4gICAgICAgICAgLCBhbnlSZWxhdGl2ZSA9IGZhbHNlXG4gICAgICAgIGJvZHkuZm9yRWFjaChmdW5jdGlvbiAobm9kZSl7XG4gICAgICAgICAgaWYgKCFhbnlFeHByZXNzaW9ucyAmJiBpc1Bvc3NpYmxlRGlyZWN0aXZlKG5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhbnlFeHByZXNzaW9ucyA9IHRydWVcblxuICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdJbXBvcnREZWNsYXJhdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChhYnNvbHV0ZUZpcnN0KSB7XG4gICAgICAgICAgICAgIGlmICgvXlxcLi8udGVzdChub2RlLnNvdXJjZS52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBhbnlSZWxhdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChhbnlSZWxhdGl2ZSkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQucmVwb3J0KHtcbiAgICAgICAgICAgICAgICAgIG5vZGU6IG5vZGUuc291cmNlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Fic29sdXRlIGltcG9ydHMgc2hvdWxkIGNvbWUgYmVmb3JlIHJlbGF0aXZlIGltcG9ydHMuJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm9uSW1wb3J0Q291bnQgPiAwKSB7XG4gICAgICAgICAgICAgIGNvbnRleHQucmVwb3J0KHtcbiAgICAgICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdJbXBvcnQgaW4gYm9keSBvZiBtb2R1bGU7IHJlb3JkZXIgdG8gdG9wLicsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vbkltcG9ydENvdW50KytcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbn1cbiJdfQ==