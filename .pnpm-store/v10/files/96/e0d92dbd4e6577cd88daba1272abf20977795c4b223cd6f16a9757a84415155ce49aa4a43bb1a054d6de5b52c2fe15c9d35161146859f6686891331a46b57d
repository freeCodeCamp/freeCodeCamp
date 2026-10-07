'use strict';

var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

var SINGLE_EXPORT_ERROR_MESSAGE = 'Prefer default export on a file with single export.';
var ANY_EXPORT_ERROR_MESSAGE = 'Prefer default export to be present on every file that has export.';

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Style guide',
      description: 'Prefer a default export if module exports a single name or multiple names.',
      url: (0, _docsUrl2['default'])('prefer-default-export') },

    schema: [{
      type: 'object',
      properties: {
        target: {
          type: 'string',
          'enum': ['single', 'any'],
          'default': 'single' } },


      additionalProperties: false }] },



  create: function () {function create(context) {
      var specifierExportCount = 0;
      var hasDefaultExport = false;
      var hasStarExport = false;
      var hasTypeExport = false;
      var namedExportNode = null;
      // get options. by default we look into files with single export
      var _ref = context.options[0] || {},_ref$target = _ref.target,target = _ref$target === undefined ? 'single' : _ref$target;
      function captureDeclaration(identifierOrPattern) {
        if (identifierOrPattern && identifierOrPattern.type === 'ObjectPattern') {
          // recursively capture
          identifierOrPattern.properties.
          forEach(function (property) {
            captureDeclaration(property.value);
          });
        } else if (identifierOrPattern && identifierOrPattern.type === 'ArrayPattern') {
          identifierOrPattern.elements.
          forEach(captureDeclaration);
        } else {
          // assume it's a single standard identifier
          specifierExportCount++;
        }
      }

      return {
        ExportDefaultSpecifier: function () {function ExportDefaultSpecifier() {
            hasDefaultExport = true;
          }return ExportDefaultSpecifier;}(),

        ExportSpecifier: function () {function ExportSpecifier(node) {
            if ((node.exported.name || node.exported.value) === 'default') {
              hasDefaultExport = true;
            } else {
              specifierExportCount++;
              namedExportNode = node;
            }
          }return ExportSpecifier;}(),

        ExportNamedDeclaration: function () {function ExportNamedDeclaration(node) {
            // if there are specifiers, node.declaration should be null
            if (!node.declaration) {return;}var

            type = node.declaration.type;

            if (
            type === 'TSTypeAliasDeclaration' ||
            type === 'TypeAlias' ||
            type === 'TSInterfaceDeclaration' ||
            type === 'InterfaceDeclaration')
            {
              specifierExportCount++;
              hasTypeExport = true;
              return;
            }

            if (node.declaration.declarations) {
              node.declaration.declarations.forEach(function (declaration) {
                captureDeclaration(declaration.id);
              });
            } else {
              // captures 'export function foo() {}' syntax
              specifierExportCount++;
            }

            namedExportNode = node;
          }return ExportNamedDeclaration;}(),

        ExportDefaultDeclaration: function () {function ExportDefaultDeclaration() {
            hasDefaultExport = true;
          }return ExportDefaultDeclaration;}(),

        ExportAllDeclaration: function () {function ExportAllDeclaration() {
            hasStarExport = true;
          }return ExportAllDeclaration;}(),

        'Program:exit': function () {function ProgramExit() {
            if (hasDefaultExport || hasStarExport || hasTypeExport) {
              return;
            }
            if (target === 'single' && specifierExportCount === 1) {
              context.report(namedExportNode, SINGLE_EXPORT_ERROR_MESSAGE);
            } else if (target === 'any' && specifierExportCount > 0) {
              context.report(namedExportNode, ANY_EXPORT_ERROR_MESSAGE);
            }
          }return ProgramExit;}() };

    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9wcmVmZXItZGVmYXVsdC1leHBvcnQuanMiXSwibmFtZXMiOlsiU0lOR0xFX0VYUE9SVF9FUlJPUl9NRVNTQUdFIiwiQU5ZX0VYUE9SVF9FUlJPUl9NRVNTQUdFIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1ldGEiLCJ0eXBlIiwiZG9jcyIsImNhdGVnb3J5IiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJzY2hlbWEiLCJwcm9wZXJ0aWVzIiwidGFyZ2V0IiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJjcmVhdGUiLCJjb250ZXh0Iiwic3BlY2lmaWVyRXhwb3J0Q291bnQiLCJoYXNEZWZhdWx0RXhwb3J0IiwiaGFzU3RhckV4cG9ydCIsImhhc1R5cGVFeHBvcnQiLCJuYW1lZEV4cG9ydE5vZGUiLCJvcHRpb25zIiwiY2FwdHVyZURlY2xhcmF0aW9uIiwiaWRlbnRpZmllck9yUGF0dGVybiIsImZvckVhY2giLCJwcm9wZXJ0eSIsInZhbHVlIiwiZWxlbWVudHMiLCJFeHBvcnREZWZhdWx0U3BlY2lmaWVyIiwiRXhwb3J0U3BlY2lmaWVyIiwibm9kZSIsImV4cG9ydGVkIiwibmFtZSIsIkV4cG9ydE5hbWVkRGVjbGFyYXRpb24iLCJkZWNsYXJhdGlvbiIsImRlY2xhcmF0aW9ucyIsImlkIiwiRXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uIiwiRXhwb3J0QWxsRGVjbGFyYXRpb24iLCJyZXBvcnQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLHFDOztBQUVBLElBQU1BLDhCQUE4QixxREFBcEM7QUFDQSxJQUFNQywyQkFBMkIsb0VBQWpDOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLFFBQU07QUFDSkMsVUFBTSxZQURGO0FBRUpDLFVBQU07QUFDSkMsZ0JBQVUsYUFETjtBQUVKQyxtQkFBYSw0RUFGVDtBQUdKQyxXQUFLLDBCQUFRLHVCQUFSLENBSEQsRUFGRjs7QUFPSkMsWUFBUSxDQUFDO0FBQ1BMLFlBQU0sUUFEQztBQUVQTSxrQkFB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Q25CLHdCQUFoQztBQUNEO0FBQ0YsV0E1REksd0JBQVA7O0FBOERELEtBM0djLG1CQUFqQiIsImZpbGUiOiJwcmVmZXItZGVmYXVsdC1leHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBkb2NzVXJsIGZyb20gJy4uL2RvY3NVcmwnO1xuXG5jb25zdCBTSU5HTEVfRVhQT1JUX0VSUk9SX01FU1NBR0UgPSAnUHJlZmVyIGRlZmF1bHQgZXhwb3J0IG9uIGEgZmlsZSB3aXRoIHNpbmdsZSBleHBvcnQuJztcbmNvbnN0IEFOWV9FWFBPUlRfRVJST1JfTUVTU0FHRSA9ICdQcmVmZXIgZGVmYXVsdCBleHBvcnQgdG8gYmUgcHJlc2VudCBvbiBldmVyeSBmaWxlIHRoYXQgaGFzIGV4cG9ydC4nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWV0YToge1xuICAgIHR5cGU6ICdzdWdnZXN0aW9uJyxcbiAgICBkb2NzOiB7XG4gICAgICBjYXRlZ29yeTogJ1N0eWxlIGd1aWRlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUHJlZmVyIGEgZGVmYXVsdCBleHBvcnQgaWYgbW9kdWxlIGV4cG9ydHMgYSBzaW5nbGUgbmFtZSBvciBtdWx0aXBsZSBuYW1lcy4nLFxuICAgICAgdXJsOiBkb2NzVXJsKCdwcmVmZXItZGVmYXVsdC1leHBvcnQnKSxcbiAgICB9LFxuICAgIHNjaGVtYTogW3tcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICB0YXJnZXQ6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBlbnVtOiBbJ3NpbmdsZScsICdhbnknXSxcbiAgICAgICAgICBkZWZhdWx0OiAnc2luZ2xlJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4gICAgfV0sXG4gIH0sXG5cbiAgY3JlYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgc3BlY2lmaWVyRXhwb3J0Q291bnQgPSAwO1xuICAgIGxldCBoYXNEZWZhdWx0RXhwb3J0ID0gZmFsc2U7XG4gICAgbGV0IGhhc1N0YXJFeHBvcnQgPSBmYWxzZTtcbiAgICBsZXQgaGFzVHlwZUV4cG9ydCA9IGZhbHNlO1xuICAgIGxldCBuYW1lZEV4cG9ydE5vZGUgPSBudWxsO1xuICAgIC8vIGdldCBvcHRpb25zLiBieSBkZWZhdWx0IHdlIGxvb2sgaW50byBmaWxlcyB3aXRoIHNpbmdsZSBleHBvcnRcbiAgICBjb25zdCB7IHRhcmdldCA9ICdzaW5nbGUnIH0gPSAgY29udGV4dC5vcHRpb25zWzBdIHx8IHt9O1xuICAgIGZ1bmN0aW9uIGNhcHR1cmVEZWNsYXJhdGlvbihpZGVudGlmaWVyT3JQYXR0ZXJuKSB7XG4gICAgICBpZiAoaWRlbnRpZmllck9yUGF0dGVybiAmJiBpZGVudGlmaWVyT3JQYXR0ZXJuLnR5cGUgPT09ICdPYmplY3RQYXR0ZXJuJykge1xuICAgICAgICAvLyByZWN1cnNpdmVseSBjYXB0dXJlXG4gICAgICAgIGlkZW50aWZpZXJPclBhdHRlcm4ucHJvcGVydGllc1xuICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgICAgICAgY2FwdHVyZURlY2xhcmF0aW9uKHByb3BlcnR5LnZhbHVlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoaWRlbnRpZmllck9yUGF0dGVybiAmJiBpZGVudGlmaWVyT3JQYXR0ZXJuLnR5cGUgPT09ICdBcnJheVBhdHRlcm4nKSB7XG4gICAgICAgIGlkZW50aWZpZXJPclBhdHRlcm4uZWxlbWVudHNcbiAgICAgICAgICAuZm9yRWFjaChjYXB0dXJlRGVjbGFyYXRpb24pO1xuICAgICAgfSBlbHNlICB7XG4gICAgICAvLyBhc3N1bWUgaXQncyBhIHNpbmdsZSBzdGFuZGFyZCBpZGVudGlmaWVyXG4gICAgICAgIHNwZWNpZmllckV4cG9ydENvdW50Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIEV4cG9ydERlZmF1bHRTcGVjaWZpZXIoKSB7XG4gICAgICAgIGhhc0RlZmF1bHRFeHBvcnQgPSB0cnVlO1xuICAgICAgfSxcblxuICAgICAgRXhwb3J0U3BlY2lmaWVyKG5vZGUpIHtcbiAgICAgICAgaWYgKChub2RlLmV4cG9ydGVkLm5hbWUgfHwgbm9kZS5leHBvcnRlZC52YWx1ZSkgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgIGhhc0RlZmF1bHRFeHBvcnQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNwZWNpZmllckV4cG9ydENvdW50Kys7XG4gICAgICAgICAgbmFtZWRFeHBvcnROb2RlID0gbm9kZTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgRXhwb3J0TmFtZWREZWNsYXJhdGlvbihub2RlKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGFyZSBzcGVjaWZpZXJzLCBub2RlLmRlY2xhcmF0aW9uIHNob3VsZCBiZSBudWxsXG4gICAgICAgIGlmICghbm9kZS5kZWNsYXJhdGlvbikgeyByZXR1cm47IH1cblxuICAgICAgICBjb25zdCB7IHR5cGUgfSA9IG5vZGUuZGVjbGFyYXRpb247XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHR5cGUgPT09ICdUU1R5cGVBbGlhc0RlY2xhcmF0aW9uJ1xuICAgICAgICAgIHx8IHR5cGUgPT09ICdUeXBlQWxpYXMnXG4gICAgICAgICAgfHwgdHlwZSA9PT0gJ1RTSW50ZXJmYWNlRGVjbGFyYXRpb24nXG4gICAgICAgICAgfHwgdHlwZSA9PT0gJ0ludGVyZmFjZURlY2xhcmF0aW9uJ1xuICAgICAgICApIHtcbiAgICAgICAgICBzcGVjaWZpZXJFeHBvcnRDb3VudCsrO1xuICAgICAgICAgIGhhc1R5cGVFeHBvcnQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLmRlY2xhcmF0aW9uLmRlY2xhcmF0aW9ucykge1xuICAgICAgICAgIG5vZGUuZGVjbGFyYXRpb24uZGVjbGFyYXRpb25zLmZvckVhY2goZnVuY3Rpb24gKGRlY2xhcmF0aW9uKSB7XG4gICAgICAgICAgICBjYXB0dXJlRGVjbGFyYXRpb24oZGVjbGFyYXRpb24uaWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNhcHR1cmVzICdleHBvcnQgZnVuY3Rpb24gZm9vKCkge30nIHN5bnRheFxuICAgICAgICAgIHNwZWNpZmllckV4cG9ydENvdW50Kys7XG4gICAgICAgIH1cblxuICAgICAgICBuYW1lZEV4cG9ydE5vZGUgPSBub2RlO1xuICAgICAgfSxcblxuICAgICAgRXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uKCkge1xuICAgICAgICBoYXNEZWZhdWx0RXhwb3J0ID0gdHJ1ZTtcbiAgICAgIH0sXG5cbiAgICAgIEV4cG9ydEFsbERlY2xhcmF0aW9uKCkge1xuICAgICAgICBoYXNTdGFyRXhwb3J0ID0gdHJ1ZTtcbiAgICAgIH0sXG5cbiAgICAgICdQcm9ncmFtOmV4aXQnKCkge1xuICAgICAgICBpZiAoaGFzRGVmYXVsdEV4cG9ydCB8fCBoYXNTdGFyRXhwb3J0IHx8IGhhc1R5cGVFeHBvcnQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldCA9PT0gJ3NpbmdsZScgJiYgc3BlY2lmaWVyRXhwb3J0Q291bnQgPT09IDEpIHtcbiAgICAgICAgICBjb250ZXh0LnJlcG9ydChuYW1lZEV4cG9ydE5vZGUsIFNJTkdMRV9FWFBPUlRfRVJST1JfTUVTU0FHRSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSAnYW55JyAmJiBzcGVjaWZpZXJFeHBvcnRDb3VudCA+IDApIHtcbiAgICAgICAgICBjb250ZXh0LnJlcG9ydChuYW1lZEV4cG9ydE5vZGUsIEFOWV9FWFBPUlRfRVJST1JfTUVTU0FHRSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbn07XG4iXX0=