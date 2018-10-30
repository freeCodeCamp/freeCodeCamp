'use strict';

module.exports = {
  meta: {
    docs: {}
  },

  create: function (context) {
    return {
      'ImportDeclaration': function (node) {
        node.specifiers.forEach(function (im) {
          if (im.type === 'ImportSpecifier' && im.imported.name === 'default') {
            context.report({
              node: im.local,
              message: `Use default import syntax to import \'${ im.local.name }\'.` });
          }
        });
      }
    };
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25vLW5hbWVkLWRlZmF1bHQuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIm1ldGEiLCJkb2NzIiwiY3JlYXRlIiwiY29udGV4dCIsIm5vZGUiLCJzcGVjaWZpZXJzIiwiZm9yRWFjaCIsImltIiwidHlwZSIsImltcG9ydGVkIiwibmFtZSIsInJlcG9ydCIsImxvY2FsIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsT0FBUCxHQUFpQjtBQUNmQyxRQUFNO0FBQ0pDLFVBQU07QUFERixHQURTOztBQUtmQyxVQUFRLFVBQVVDLE9BQVYsRUFBbUI7QUFDekIsV0FBTztBQUNMLDJCQUFxQixVQUFVQyxJQUFWLEVBQWdCO0FBQ25DQSxhQUFLQyxVQUFMLENBQWdCQyxPQUFoQixDQUF3QixVQUFVQyxFQUFWLEVBQWM7QUFDcEMsY0FBSUEsR0FBR0MsSUFBSCxLQUFZLGlCQUFaLElBQWlDRCxHQUFHRSxRQUFILENBQVlDLElBQVosS0FBcUIsU0FBMUQsRUFBcUU7QUFDbkVQLG9CQUFRUSxNQUFSLENBQWU7QUFDYlAsb0JBQU1HLEdBQUdLLEtBREk7QUFFYkMsdUJBQVUsMENBQXdDTixHQUFHSyxLQUFILENBQVNGLElBQUssTUFGbkQsRUFBZjtBQUdEO0FBQ0YsU0FORDtBQU9EO0FBVEksS0FBUDtBQVdEO0FBakJjLENBQWpCIiwiZmlsZSI6InJ1bGVzL25vLW5hbWVkLWRlZmF1bHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWV0YToge1xuICAgIGRvY3M6IHt9LFxuICB9LFxuXG4gIGNyZWF0ZTogZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ0ltcG9ydERlY2xhcmF0aW9uJzogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgbm9kZS5zcGVjaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKGltKSB7XG4gICAgICAgICAgaWYgKGltLnR5cGUgPT09ICdJbXBvcnRTcGVjaWZpZXInICYmIGltLmltcG9ydGVkLm5hbWUgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICAgICAgICBub2RlOiBpbS5sb2NhbCxcbiAgICAgICAgICAgICAgbWVzc2FnZTogYFVzZSBkZWZhdWx0IGltcG9ydCBzeW50YXggdG8gaW1wb3J0IFxcJyR7aW0ubG9jYWwubmFtZX1cXCcuYCB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgfVxuICB9LFxufVxuIl19