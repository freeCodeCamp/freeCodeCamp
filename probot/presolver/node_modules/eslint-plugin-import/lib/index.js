'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const rules = exports.rules = {
  'no-unresolved': require('./rules/no-unresolved'),
  'named': require('./rules/named'),
  'default': require('./rules/default'),
  'namespace': require('./rules/namespace'),
  'no-namespace': require('./rules/no-namespace'),
  'export': require('./rules/export'),
  'no-mutable-exports': require('./rules/no-mutable-exports'),
  'extensions': require('./rules/extensions'),
  'no-restricted-paths': require('./rules/no-restricted-paths'),
  'no-internal-modules': require('./rules/no-internal-modules'),

  'no-named-default': require('./rules/no-named-default'),
  'no-named-as-default': require('./rules/no-named-as-default'),
  'no-named-as-default-member': require('./rules/no-named-as-default-member'),

  'no-commonjs': require('./rules/no-commonjs'),
  'no-amd': require('./rules/no-amd'),
  'no-duplicates': require('./rules/no-duplicates'),
  'first': require('./rules/first'),
  'max-dependencies': require('./rules/max-dependencies'),
  'no-extraneous-dependencies': require('./rules/no-extraneous-dependencies'),
  'no-absolute-path': require('./rules/no-absolute-path'),
  'no-nodejs-modules': require('./rules/no-nodejs-modules'),
  'no-webpack-loader-syntax': require('./rules/no-webpack-loader-syntax'),
  'order': require('./rules/order'),
  'newline-after-import': require('./rules/newline-after-import'),
  'prefer-default-export': require('./rules/prefer-default-export'),
  'no-dynamic-require': require('./rules/no-dynamic-require'),
  'unambiguous': require('./rules/unambiguous'),
  'no-unassigned-import': require('./rules/no-unassigned-import'),

  // metadata-based
  'no-deprecated': require('./rules/no-deprecated'),

  // deprecated aliases to rules
  'imports-first': require('./rules/imports-first')
};

const configs = exports.configs = {
  'recommended': require('../config/recommended'),

  'errors': require('../config/errors'),
  'warnings': require('../config/warnings'),

  // shhhh... work in progress "secret" rules
  'stage-0': require('../config/stage-0'),

  // useful stuff for folks using various environments
  'react': require('../config/react'),
  'react-native': require('../config/react-native'),
  'electron': require('../config/electron')
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJ1bGVzIiwicmVxdWlyZSIsImNvbmZpZ3MiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sTUFBTUEsd0JBQVE7QUFDbkIsbUJBQWlCQyxRQUFRLHVCQUFSLENBREU7QUFFbkIsV0FBU0EsUUFBUSxlQUFSLENBRlU7QUFHbkIsYUFBV0EsUUFBUSxpQkFBUixDQUhRO0FBSW5CLGVBQWFBLFFBQVEsbUJBQVIsQ0FKTTtBQUtuQixrQkFBZ0JBLFFBQVEsc0JBQVIsQ0FMRztBQU1uQixZQUFVQSxRQUFRLGdCQUFSLENBTlM7QUFPbkIsd0JBQXNCQSxRQUFRLDRCQUFSLENBUEg7QUFRbkIsZ0JBQWNBLFFBQVEsb0JBQVIsQ0FSSztBQVNuQix5QkFBdUJBLFFBQVEsNkJBQVIsQ0FUSjtBQVVuQix5QkFBdUJBLFFBQVEsNkJBQVIsQ0FWSjs7QUFZbkIsc0JBQW9CQSxRQUFRLDBCQUFSLENBWkQ7QUFhbkIseUJBQXVCQSxRQUFRLDZCQUFSLENBYko7QUFjbkIsZ0NBQThCQSxRQUFRLG9DQUFSLENBZFg7O0FBZ0JuQixpQkFBZUEsUUFBUSxxQkFBUixDQWhCSTtBQWlCbkIsWUFBVUEsUUFBUSxnQkFBUixDQWpCUztBQWtCbkIsbUJBQWlCQSxRQUFRLHVCQUFSLENBbEJFO0FBbUJuQixXQUFTQSxRQUFRLGVBQVIsQ0FuQlU7QUFvQm5CLHNCQUFvQkEsUUFBUSwwQkFBUixDQXBCRDtBQXFCbkIsZ0NBQThCQSxRQUFRLG9DQUFSLENBckJYO0FBc0JuQixzQkFBb0JBLFFBQVEsMEJBQVIsQ0F0QkQ7QUF1Qm5CLHVCQUFxQkEsUUFBUSwyQkFBUixDQXZCRjtBQXdCbkIsOEJBQTRCQSxRQUFRLGtDQUFSLENBeEJUO0FBeUJuQixXQUFTQSxRQUFRLGVBQVIsQ0F6QlU7QUEwQm5CLDBCQUF3QkEsUUFBUSw4QkFBUixDQTFCTDtBQTJCbkIsMkJBQXlCQSxRQUFRLCtCQUFSLENBM0JOO0FBNEJuQix3QkFBc0JBLFFBQVEsNEJBQVIsQ0E1Qkg7QUE2Qm5CLGlCQUFlQSxRQUFRLHFCQUFSLENBN0JJO0FBOEJuQiwwQkFBd0JBLFFBQVEsOEJBQVIsQ0E5Qkw7O0FBZ0NuQjtBQUNBLG1CQUFpQkEsUUFBUSx1QkFBUixDQWpDRTs7QUFtQ25CO0FBQ0EsbUJBQWlCQSxRQUFRLHVCQUFSO0FBcENFLENBQWQ7O0FBdUNBLE1BQU1DLDRCQUFVO0FBQ3JCLGlCQUFlRCxRQUFRLHVCQUFSLENBRE07O0FBR3JCLFlBQVVBLFFBQVEsa0JBQVIsQ0FIVztBQUlyQixjQUFZQSxRQUFRLG9CQUFSLENBSlM7O0FBTXJCO0FBQ0EsYUFBV0EsUUFBUSxtQkFBUixDQVBVOztBQVNyQjtBQUNBLFdBQVNBLFFBQVEsaUJBQVIsQ0FWWTtBQVdyQixrQkFBZ0JBLFFBQVEsd0JBQVIsQ0FYSztBQVlyQixjQUFZQSxRQUFRLG9CQUFSO0FBWlMsQ0FBaEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcnVsZXMgPSB7XG4gICduby11bnJlc29sdmVkJzogcmVxdWlyZSgnLi9ydWxlcy9uby11bnJlc29sdmVkJyksXG4gICduYW1lZCc6IHJlcXVpcmUoJy4vcnVsZXMvbmFtZWQnKSxcbiAgJ2RlZmF1bHQnOiByZXF1aXJlKCcuL3J1bGVzL2RlZmF1bHQnKSxcbiAgJ25hbWVzcGFjZSc6IHJlcXVpcmUoJy4vcnVsZXMvbmFtZXNwYWNlJyksXG4gICduby1uYW1lc3BhY2UnOiByZXF1aXJlKCcuL3J1bGVzL25vLW5hbWVzcGFjZScpLFxuICAnZXhwb3J0JzogcmVxdWlyZSgnLi9ydWxlcy9leHBvcnQnKSxcbiAgJ25vLW11dGFibGUtZXhwb3J0cyc6IHJlcXVpcmUoJy4vcnVsZXMvbm8tbXV0YWJsZS1leHBvcnRzJyksXG4gICdleHRlbnNpb25zJzogcmVxdWlyZSgnLi9ydWxlcy9leHRlbnNpb25zJyksXG4gICduby1yZXN0cmljdGVkLXBhdGhzJzogcmVxdWlyZSgnLi9ydWxlcy9uby1yZXN0cmljdGVkLXBhdGhzJyksXG4gICduby1pbnRlcm5hbC1tb2R1bGVzJzogcmVxdWlyZSgnLi9ydWxlcy9uby1pbnRlcm5hbC1tb2R1bGVzJyksXG5cbiAgJ25vLW5hbWVkLWRlZmF1bHQnOiByZXF1aXJlKCcuL3J1bGVzL25vLW5hbWVkLWRlZmF1bHQnKSxcbiAgJ25vLW5hbWVkLWFzLWRlZmF1bHQnOiByZXF1aXJlKCcuL3J1bGVzL25vLW5hbWVkLWFzLWRlZmF1bHQnKSxcbiAgJ25vLW5hbWVkLWFzLWRlZmF1bHQtbWVtYmVyJzogcmVxdWlyZSgnLi9ydWxlcy9uby1uYW1lZC1hcy1kZWZhdWx0LW1lbWJlcicpLFxuXG4gICduby1jb21tb25qcyc6IHJlcXVpcmUoJy4vcnVsZXMvbm8tY29tbW9uanMnKSxcbiAgJ25vLWFtZCc6IHJlcXVpcmUoJy4vcnVsZXMvbm8tYW1kJyksXG4gICduby1kdXBsaWNhdGVzJzogcmVxdWlyZSgnLi9ydWxlcy9uby1kdXBsaWNhdGVzJyksXG4gICdmaXJzdCc6IHJlcXVpcmUoJy4vcnVsZXMvZmlyc3QnKSxcbiAgJ21heC1kZXBlbmRlbmNpZXMnOiByZXF1aXJlKCcuL3J1bGVzL21heC1kZXBlbmRlbmNpZXMnKSxcbiAgJ25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzJzogcmVxdWlyZSgnLi9ydWxlcy9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llcycpLFxuICAnbm8tYWJzb2x1dGUtcGF0aCc6IHJlcXVpcmUoJy4vcnVsZXMvbm8tYWJzb2x1dGUtcGF0aCcpLFxuICAnbm8tbm9kZWpzLW1vZHVsZXMnOiByZXF1aXJlKCcuL3J1bGVzL25vLW5vZGVqcy1tb2R1bGVzJyksXG4gICduby13ZWJwYWNrLWxvYWRlci1zeW50YXgnOiByZXF1aXJlKCcuL3J1bGVzL25vLXdlYnBhY2stbG9hZGVyLXN5bnRheCcpLFxuICAnb3JkZXInOiByZXF1aXJlKCcuL3J1bGVzL29yZGVyJyksXG4gICduZXdsaW5lLWFmdGVyLWltcG9ydCc6IHJlcXVpcmUoJy4vcnVsZXMvbmV3bGluZS1hZnRlci1pbXBvcnQnKSxcbiAgJ3ByZWZlci1kZWZhdWx0LWV4cG9ydCc6IHJlcXVpcmUoJy4vcnVsZXMvcHJlZmVyLWRlZmF1bHQtZXhwb3J0JyksXG4gICduby1keW5hbWljLXJlcXVpcmUnOiByZXF1aXJlKCcuL3J1bGVzL25vLWR5bmFtaWMtcmVxdWlyZScpLFxuICAndW5hbWJpZ3VvdXMnOiByZXF1aXJlKCcuL3J1bGVzL3VuYW1iaWd1b3VzJyksXG4gICduby11bmFzc2lnbmVkLWltcG9ydCc6IHJlcXVpcmUoJy4vcnVsZXMvbm8tdW5hc3NpZ25lZC1pbXBvcnQnKSxcblxuICAvLyBtZXRhZGF0YS1iYXNlZFxuICAnbm8tZGVwcmVjYXRlZCc6IHJlcXVpcmUoJy4vcnVsZXMvbm8tZGVwcmVjYXRlZCcpLFxuXG4gIC8vIGRlcHJlY2F0ZWQgYWxpYXNlcyB0byBydWxlc1xuICAnaW1wb3J0cy1maXJzdCc6IHJlcXVpcmUoJy4vcnVsZXMvaW1wb3J0cy1maXJzdCcpLFxufVxuXG5leHBvcnQgY29uc3QgY29uZmlncyA9IHtcbiAgJ3JlY29tbWVuZGVkJzogcmVxdWlyZSgnLi4vY29uZmlnL3JlY29tbWVuZGVkJyksXG5cbiAgJ2Vycm9ycyc6IHJlcXVpcmUoJy4uL2NvbmZpZy9lcnJvcnMnKSxcbiAgJ3dhcm5pbmdzJzogcmVxdWlyZSgnLi4vY29uZmlnL3dhcm5pbmdzJyksXG5cbiAgLy8gc2hoaGguLi4gd29yayBpbiBwcm9ncmVzcyBcInNlY3JldFwiIHJ1bGVzXG4gICdzdGFnZS0wJzogcmVxdWlyZSgnLi4vY29uZmlnL3N0YWdlLTAnKSxcblxuICAvLyB1c2VmdWwgc3R1ZmYgZm9yIGZvbGtzIHVzaW5nIHZhcmlvdXMgZW52aXJvbm1lbnRzXG4gICdyZWFjdCc6IHJlcXVpcmUoJy4uL2NvbmZpZy9yZWFjdCcpLFxuICAncmVhY3QtbmF0aXZlJzogcmVxdWlyZSgnLi4vY29uZmlnL3JlYWN0LW5hdGl2ZScpLFxuICAnZWxlY3Ryb24nOiByZXF1aXJlKCcuLi9jb25maWcvZWxlY3Ryb24nKSxcbn1cbiJdfQ==