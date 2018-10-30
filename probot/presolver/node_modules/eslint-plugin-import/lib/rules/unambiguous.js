'use strict';

var _unambiguous = require('eslint-module-utils/unambiguous');

module.exports = {
  meta: {},

  create: function (context) {
    // ignore non-modules
    if (context.parserOptions.sourceType !== 'module') {
      return {};
    }

    return {
      Program: function (ast) {
        if (!(0, _unambiguous.isModule)(ast)) {
          context.report({
            node: ast,
            message: 'This module could be parsed as a valid script.'
          });
        }
      }
    };
  }
}; /**
    * @fileOverview Report modules that could parse incorrectly as scripts.
    * @author Ben Mosher
    */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3VuYW1iaWd1b3VzLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJtZXRhIiwiY3JlYXRlIiwiY29udGV4dCIsInBhcnNlck9wdGlvbnMiLCJzb3VyY2VUeXBlIiwiUHJvZ3JhbSIsImFzdCIsInJlcG9ydCIsIm5vZGUiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOztBQUtBOztBQUVBQSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLFFBQU0sRUFEUzs7QUFHZkMsVUFBUSxVQUFVQyxPQUFWLEVBQW1CO0FBQ3pCO0FBQ0EsUUFBSUEsUUFBUUMsYUFBUixDQUFzQkMsVUFBdEIsS0FBcUMsUUFBekMsRUFBbUQ7QUFDakQsYUFBTyxFQUFQO0FBQ0Q7O0FBRUQsV0FBTztBQUNMQyxlQUFTLFVBQVVDLEdBQVYsRUFBZTtBQUN0QixZQUFJLENBQUMsMkJBQVNBLEdBQVQsQ0FBTCxFQUFvQjtBQUNsQkosa0JBQVFLLE1BQVIsQ0FBZTtBQUNiQyxrQkFBTUYsR0FETztBQUViRyxxQkFBUztBQUZJLFdBQWY7QUFJRDtBQUNGO0FBUkksS0FBUDtBQVdEO0FBcEJjLENBQWpCLEMsQ0FQQSIsImZpbGUiOiJydWxlcy91bmFtYmlndW91cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlldyBSZXBvcnQgbW9kdWxlcyB0aGF0IGNvdWxkIHBhcnNlIGluY29ycmVjdGx5IGFzIHNjcmlwdHMuXG4gKiBAYXV0aG9yIEJlbiBNb3NoZXJcbiAqL1xuXG5pbXBvcnQgeyBpc01vZHVsZSB9IGZyb20gJ2VzbGludC1tb2R1bGUtdXRpbHMvdW5hbWJpZ3VvdXMnXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtZXRhOiB7fSxcblxuICBjcmVhdGU6IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgLy8gaWdub3JlIG5vbi1tb2R1bGVzXG4gICAgaWYgKGNvbnRleHQucGFyc2VyT3B0aW9ucy5zb3VyY2VUeXBlICE9PSAnbW9kdWxlJykge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIFByb2dyYW06IGZ1bmN0aW9uIChhc3QpIHtcbiAgICAgICAgaWYgKCFpc01vZHVsZShhc3QpKSB7XG4gICAgICAgICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgICAgICAgbm9kZTogYXN0LFxuICAgICAgICAgICAgbWVzc2FnZTogJ1RoaXMgbW9kdWxlIGNvdWxkIGJlIHBhcnNlZCBhcyBhIHZhbGlkIHNjcmlwdC4nLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuXG4gIH0sXG59XG4iXX0=