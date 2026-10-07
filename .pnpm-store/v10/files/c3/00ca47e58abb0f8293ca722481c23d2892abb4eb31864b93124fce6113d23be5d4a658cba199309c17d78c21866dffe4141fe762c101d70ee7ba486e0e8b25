'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports['default'] =






recursivePatternCapture; /**
                          * Traverse a pattern/identifier node, calling 'callback'
                          * for each leaf identifier.
                          * @param  {node}   pattern
                          * @param  {Function} callback
                          * @return {void}
                          */function recursivePatternCapture(pattern, callback) {switch (pattern.type) {case 'Identifier': // base case
      callback(pattern);break;case 'ObjectPattern':pattern.properties.forEach(function (p) {
        if (p.type === 'ExperimentalRestProperty' || p.type === 'RestElement') {
          callback(p.argument);
          return;
        }
        recursivePatternCapture(p.value, callback);
      });
      break;

    case 'ArrayPattern':
      pattern.elements.forEach(function (element) {
        if (element == null) {return;}
        if (element.type === 'ExperimentalRestProperty' || element.type === 'RestElement') {
          callback(element.argument);
          return;
        }
        recursivePatternCapture(element, callback);
      });
      break;

    case 'AssignmentPattern':
      callback(pattern.left);
      break;
    default:}

}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHBvcnRNYXAvcGF0dGVybkNhcHR1cmUuanMiXSwibmFtZXMiOlsicmVjdXJzaXZlUGF0dGVybkNhcHR1cmUiLCJwYXR0ZXJuIiwiY2FsbGJhY2siLCJ0eXBlIiwicHJvcGVydGllcyIsImZvckVhY2giLCJwIiwiYXJndW1lbnQiLCJ2YWx1ZSIsImVsZW1lbnRzIiwiZWxlbWVudCIsImxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFPd0JBLHVCLEVBUHhCOzs7Ozs7NEJBT2UsU0FBU0EsdUJBQVQsQ0FBaUNDLE9BQWpDLEVBQTBDQyxRQUExQyxFQUFvRCxDQUNqRSxRQUFRRCxRQUFRRSxJQUFoQixHQUNFLEtBQUssWUFBTCxFQUFtQjtBQUNqQkQsZUFBU0QsT0FBVCxFQUNBLE1BRUYsS0FBSyxlQUFMLENBQ0VBLFFBQVFHLFVBQVIsQ0FBbUJDLE9BQW5CLENBQTJCLFVBQUNDLENBQUQsRUFBTztBQUNoQyxZQUFJQSxFQUFFSCxJQUFGLEtBQVcsMEJBQVgsSUFBeUNHLEVBQUVILElBQUYsS0FBVyxhQUF4RCxFQUF1RTtBQUNyRUQsbUJBQVNJLEVBQUVDLFFBQVg7QUFDQTtBQUNEO0FBQ0RQLGdDQUF3Qk0sRUFBRUUsS0FBMUIsRUFBaUNOLFFBQWpDO0FBQ0QsT0FORDtBQU9BOztBQUVGLFNBQUssY0FBTDtBQUNFRCxjQUFRUSxRQUFSLENBQWlCSixPQUFqQixDQUF5QixVQUFDSyxPQUFELEVBQWE7QUFDcEMsWUFBSUEsV0FBVyxJQUFmLEVBQXFCLENBQUUsT0FBUztBQUNoQyxZQUFJQSxRQUFRUCxJQUFSLEtBQWlCLDBCQUFqQixJQUErQ08sUUFBUVAsSUFBUixLQUFpQixhQUFwRSxFQUFtRjtBQUNqRkQsbUJBQVNRLFFBQVFILFFBQWpCO0FBQ0E7QUFDRDtBQUNEUCxnQ0FBd0JVLE9BQXhCLEVBQWlDUixRQUFqQztBQUNELE9BUEQ7QUFRQTs7QUFFRixTQUFLLG1CQUFMO0FBQ0VBLGVBQVNELFFBQVFVLElBQWpCO0FBQ0E7QUFDRixZQTdCRjs7QUErQkQiLCJmaWxlIjoicGF0dGVybkNhcHR1cmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRyYXZlcnNlIGEgcGF0dGVybi9pZGVudGlmaWVyIG5vZGUsIGNhbGxpbmcgJ2NhbGxiYWNrJ1xuICogZm9yIGVhY2ggbGVhZiBpZGVudGlmaWVyLlxuICogQHBhcmFtICB7bm9kZX0gICBwYXR0ZXJuXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlY3Vyc2l2ZVBhdHRlcm5DYXB0dXJlKHBhdHRlcm4sIGNhbGxiYWNrKSB7XG4gIHN3aXRjaCAocGF0dGVybi50eXBlKSB7XG4gICAgY2FzZSAnSWRlbnRpZmllcic6IC8vIGJhc2UgY2FzZVxuICAgICAgY2FsbGJhY2socGF0dGVybik7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ09iamVjdFBhdHRlcm4nOlxuICAgICAgcGF0dGVybi5wcm9wZXJ0aWVzLmZvckVhY2goKHApID0+IHtcbiAgICAgICAgaWYgKHAudHlwZSA9PT0gJ0V4cGVyaW1lbnRhbFJlc3RQcm9wZXJ0eScgfHwgcC50eXBlID09PSAnUmVzdEVsZW1lbnQnKSB7XG4gICAgICAgICAgY2FsbGJhY2socC5hcmd1bWVudCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlY3Vyc2l2ZVBhdHRlcm5DYXB0dXJlKHAudmFsdWUsIGNhbGxiYWNrKTtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdBcnJheVBhdHRlcm4nOlxuICAgICAgcGF0dGVybi5lbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50ID09IG51bGwpIHsgcmV0dXJuOyB9XG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdFeHBlcmltZW50YWxSZXN0UHJvcGVydHknIHx8IGVsZW1lbnQudHlwZSA9PT0gJ1Jlc3RFbGVtZW50Jykge1xuICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnQuYXJndW1lbnQpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZWN1cnNpdmVQYXR0ZXJuQ2FwdHVyZShlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnQXNzaWdubWVudFBhdHRlcm4nOlxuICAgICAgY2FsbGJhY2socGF0dGVybi5sZWZ0KTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gIH1cbn1cbiJdfQ==