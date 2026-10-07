'use strict';var _contextCompat = require('eslint-module-utils/contextCompat');

var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Helpful warnings',
      description: 'Forbid the use of mutable exports with `var` or `let`.',
      url: (0, _docsUrl2['default'])('no-mutable-exports') },

    schema: [] },


  create: function () {function create(context) {
      function checkDeclaration(node) {var
        kind = node.kind;
        if (kind === 'var' || kind === 'let') {
          context.report(node, 'Exporting mutable \'' + String(kind) + '\' binding, use \'const\' instead.');
        }
      }

      /** @type {(scope: import('eslint').Scope.Scope, name: string) => void} */
      function checkDeclarationsInScope(_ref, name) {var variables = _ref.variables;
        variables.
        filter(function (variable) {return variable.name === name;}).
        forEach(function (variable) {
          variable.defs.
          filter(function (def) {return def.type === 'Variable' && def.parent;}).
          forEach(function (def) {
            checkDeclaration(def.parent);
          });
        });
      }

      return {
        /** @param {import('estree').ExportDefaultDeclaration} node */
        ExportDefaultDeclaration: function () {function ExportDefaultDeclaration(node) {
            var scope = (0, _contextCompat.getScope)(context, node);

            if ('name' in node.declaration && node.declaration.name) {
              checkDeclarationsInScope(scope, node.declaration.name);
            }
          }return ExportDefaultDeclaration;}(),

        /** @param {import('estree').ExportNamedDeclaration} node */
        ExportNamedDeclaration: function () {function ExportNamedDeclaration(node) {
            var scope = (0, _contextCompat.getScope)(context, node);

            if ('declaration' in node && node.declaration) {
              checkDeclaration(node.declaration);
            } else if (!('source' in node) || !node.source) {
              node.specifiers.forEach(function (specifier) {
                checkDeclarationsInScope(scope, specifier.local.name);
              });
            }
          }return ExportNamedDeclaration;}() };

    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby1tdXRhYmxlLWV4cG9ydHMuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIm1ldGEiLCJ0eXBlIiwiZG9jcyIsImNhdGVnb3J5IiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJzY2hlbWEiLCJjcmVhdGUiLCJjb250ZXh0IiwiY2hlY2tEZWNsYXJhdGlvbiIsIm5vZGUiLCJraW5kIiwicmVwb3J0IiwiY2hlY2tEZWNsYXJhdGlvbnNJblNjb3BlIiwibmFtZSIsInZhcmlhYmxlcyIsImZpbHRlciIsInZhcmlhYmxlIiwiZm9yRWFjaCIsImRlZnMiLCJkZWYiLCJwYXJlbnQiLCJFeHBvcnREZWZhdWx0RGVjbGFyYXRpb24iLCJzY29wZSIsImRlY2xhcmF0aW9uIiwiRXhwb3J0TmFtZWREZWNsYXJhdGlvbiIsInNvdXJjZSIsInNwZWNpZmllcnMiLCJzcGVjaWZpZXIiLCJsb2NhbCJdLCJtYXBwaW5ncyI6ImFBQUE7O0FBRUEscUM7O0FBRUE7QUFDQUEsT0FBT0MsT0FBUCxHQUFpQjtBQUNmQyxRQUFNO0FBQ0pDLFVBQU0sWUFERjtBQUVKQyxVQUFNO0FBQ0pDLGdCQUFVLGtCQUROO0FBRUpDLG1CQUFhLHdEQUZUO0FBR0pDLFdBQUssMEJBQVEsb0JBQVIsQ0FIRCxFQUZGOztBQU9KQyxZQUFRLEVBUEosRUFEUzs7O0FBV2ZDLFFBWGUsK0JBV1JDLE9BWFEsRUFXQztBQUNkLGVBQVNDLGdCQUFULENBQTBCQyxJQUExQixFQUFnQztBQUN0QkMsWUFEc0IsR0FDYkQsSUFEYSxDQUN0QkMsSUFEc0I7QUFFOUIsWUFBSUEsU0FBUyxLQUFULElBQWtCQSxTQUFTLEtBQS9CLEVBQXNDO0FBQ3BDSCxrQkFBUUksTUFBUixDQUFlRixJQUFmLGtDQUEyQ0MsSUFBM0M7QUFDRDtBQUNGOztBQUVEO0FBQ0EsZUFBU0Usd0JBQVQsT0FBaURDLElBQWpELEVBQXVELEtBQW5CQyxTQUFtQixRQUFuQkEsU0FBbUI7QUFDckRBO0FBQ0dDLGNBREgsQ0FDVSxVQUFDQyxRQUFELFVBQWNBLFNBQVNILElBQVQsS0FBa0JBLElBQWhDLEVBRFY7QUFFR0ksZUFGSCxDQUVXLFVBQUNELFFBQUQsRUFBYztBQUNyQkEsbUJBQVNFLElBQVQ7QUFDR0gsZ0JBREgsQ0FDVSxVQUFDSSxHQUFELFVBQVNBLElBQUluQixJQUFKLEtBQWEsVUFBYixJQUEyQm1CLElBQUlDLE1BQXhDLEVBRFY7QUFFR0gsaUJBRkgsQ0FFVyxVQUFDRSxHQUFELEVBQVM7QUFDaEJYLDZCQUFpQlcsSUFBSUMsTUFBckI7QUFDRCxXQUpIO0FBS0QsU0FSSDtBQVNEOztBQUVELGFBQU87QUFDTDtBQUNBQyxnQ0FGSyxpREFFb0JaLElBRnBCLEVBRTBCO0FBQzdCLGdCQUFNYSxRQUFRLDZCQUFTZixPQUFULEVBQWtCRSxJQUFsQixDQUFkOztBQUVBLGdCQUFJLFVBQVVBLEtBQUtjLFdBQWYsSUFBOEJkLEtBQUtjLFdBQUwsQ0FBaUJWLElBQW5ELEVBQXlEO0FBQ3ZERCx1Q0FBeUJVLEtBQXpCLEVBQWdDYixLQUFLYyxXQUFMLENBQWlCVixJQUFqRDtBQUNEO0FBQ0YsV0FSSTs7QUFVTDtBQUNBVyw4QkFYSywrQ0FXa0JmLElBWGxCLEVBV3dCO0FBQzNCLGdCQUFNYSxRQUFRLDZCQUFTZixPQUFULEVBQWtCRSxJQUFsQixDQUFkOztBQUVBLGdCQUFJLGlCQUFpQkEsSUFBakIsSUFBeUJBLEtBQUtjLFdBQWxDLEVBQWdEO0FBQzlDZiwrQkFBaUJDLEtBQUtjLFdBQXRCO0FBQ0QsYUFGRCxNQUVPLElBQUksRUFBRSxZQUFZZCxJQUFkLEtBQXVCLENBQUNBLEtBQUtnQixNQUFqQyxFQUF5QztBQUM5Q2hCLG1CQUFLaUIsVUFBTCxDQUFnQlQsT0FBaEIsQ0FBd0IsVUFBQ1UsU0FBRCxFQUFlO0FBQ3JDZix5Q0FBeUJVLEtBQXpCLEVBQWdDSyxVQUFVQyxLQUFWLENBQWdCZixJQUFoRDtBQUNELGVBRkQ7QUFHRDtBQUNGLFdBckJJLG1DQUFQOztBQXVCRCxLQXZEYyxtQkFBakIiLCJmaWxlIjoibm8tbXV0YWJsZS1leHBvcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2NvcGUgfSBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL2NvbnRleHRDb21wYXQnO1xuXG5pbXBvcnQgZG9jc1VybCBmcm9tICcuLi9kb2NzVXJsJztcblxuLyoqIEB0eXBlIHtpbXBvcnQoJ2VzbGludCcpLlJ1bGUuUnVsZU1vZHVsZX0gKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtZXRhOiB7XG4gICAgdHlwZTogJ3N1Z2dlc3Rpb24nLFxuICAgIGRvY3M6IHtcbiAgICAgIGNhdGVnb3J5OiAnSGVscGZ1bCB3YXJuaW5ncycsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvcmJpZCB0aGUgdXNlIG9mIG11dGFibGUgZXhwb3J0cyB3aXRoIGB2YXJgIG9yIGBsZXRgLicsXG4gICAgICB1cmw6IGRvY3NVcmwoJ25vLW11dGFibGUtZXhwb3J0cycpLFxuICAgIH0sXG4gICAgc2NoZW1hOiBbXSxcbiAgfSxcblxuICBjcmVhdGUoY29udGV4dCkge1xuICAgIGZ1bmN0aW9uIGNoZWNrRGVjbGFyYXRpb24obm9kZSkge1xuICAgICAgY29uc3QgeyBraW5kIH0gPSBub2RlO1xuICAgICAgaWYgKGtpbmQgPT09ICd2YXInIHx8IGtpbmQgPT09ICdsZXQnKSB7XG4gICAgICAgIGNvbnRleHQucmVwb3J0KG5vZGUsIGBFeHBvcnRpbmcgbXV0YWJsZSAnJHtraW5kfScgYmluZGluZywgdXNlICdjb25zdCcgaW5zdGVhZC5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQHR5cGUgeyhzY29wZTogaW1wb3J0KCdlc2xpbnQnKS5TY29wZS5TY29wZSwgbmFtZTogc3RyaW5nKSA9PiB2b2lkfSAqL1xuICAgIGZ1bmN0aW9uIGNoZWNrRGVjbGFyYXRpb25zSW5TY29wZSh7IHZhcmlhYmxlcyB9LCBuYW1lKSB7XG4gICAgICB2YXJpYWJsZXNcbiAgICAgICAgLmZpbHRlcigodmFyaWFibGUpID0+IHZhcmlhYmxlLm5hbWUgPT09IG5hbWUpXG4gICAgICAgIC5mb3JFYWNoKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgIHZhcmlhYmxlLmRlZnNcbiAgICAgICAgICAgIC5maWx0ZXIoKGRlZikgPT4gZGVmLnR5cGUgPT09ICdWYXJpYWJsZScgJiYgZGVmLnBhcmVudClcbiAgICAgICAgICAgIC5mb3JFYWNoKChkZWYpID0+IHtcbiAgICAgICAgICAgICAgY2hlY2tEZWNsYXJhdGlvbihkZWYucGFyZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLyoqIEBwYXJhbSB7aW1wb3J0KCdlc3RyZWUnKS5FeHBvcnREZWZhdWx0RGVjbGFyYXRpb259IG5vZGUgKi9cbiAgICAgIEV4cG9ydERlZmF1bHREZWNsYXJhdGlvbihub2RlKSB7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gZ2V0U2NvcGUoY29udGV4dCwgbm9kZSk7XG5cbiAgICAgICAgaWYgKCduYW1lJyBpbiBub2RlLmRlY2xhcmF0aW9uICYmIG5vZGUuZGVjbGFyYXRpb24ubmFtZSkge1xuICAgICAgICAgIGNoZWNrRGVjbGFyYXRpb25zSW5TY29wZShzY29wZSwgbm9kZS5kZWNsYXJhdGlvbi5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqIEBwYXJhbSB7aW1wb3J0KCdlc3RyZWUnKS5FeHBvcnROYW1lZERlY2xhcmF0aW9ufSBub2RlICovXG4gICAgICBFeHBvcnROYW1lZERlY2xhcmF0aW9uKG5vZGUpIHtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSBnZXRTY29wZShjb250ZXh0LCBub2RlKTtcblxuICAgICAgICBpZiAoJ2RlY2xhcmF0aW9uJyBpbiBub2RlICYmIG5vZGUuZGVjbGFyYXRpb24pICB7XG4gICAgICAgICAgY2hlY2tEZWNsYXJhdGlvbihub2RlLmRlY2xhcmF0aW9uKTtcbiAgICAgICAgfSBlbHNlIGlmICghKCdzb3VyY2UnIGluIG5vZGUpIHx8ICFub2RlLnNvdXJjZSkge1xuICAgICAgICAgIG5vZGUuc3BlY2lmaWVycy5mb3JFYWNoKChzcGVjaWZpZXIpID0+IHtcbiAgICAgICAgICAgIGNoZWNrRGVjbGFyYXRpb25zSW5TY29wZShzY29wZSwgc3BlY2lmaWVyLmxvY2FsLm5hbWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG59O1xuIl19