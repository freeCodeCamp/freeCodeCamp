'use strict';var _contextCompat = require('eslint-module-utils/contextCompat');

var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);
var _sourceType = require('../core/sourceType');var _sourceType2 = _interopRequireDefault(_sourceType);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Style guide',
      description: 'Forbid default exports.',
      url: (0, _docsUrl2['default'])('no-default-export') },

    schema: [] },


  create: function () {function create(context) {
      // ignore non-modules
      if ((0, _sourceType2['default'])(context) !== 'module') {
        return {};
      }

      var preferNamed = 'Prefer named exports.';
      var noAliasDefault = function () {function noAliasDefault(_ref) {var local = _ref.local;return 'Do not alias `' + String(local.name) + '` as `default`. Just export `' + String(local.name) + '` itself instead.';}return noAliasDefault;}();

      return {
        ExportDefaultDeclaration: function () {function ExportDefaultDeclaration(node) {var _ref2 =
            (0, _contextCompat.getSourceCode)(context).getFirstTokens(node)[1] || {},loc = _ref2.loc;
            context.report({ node: node, message: preferNamed, loc: loc });
          }return ExportDefaultDeclaration;}(),

        ExportNamedDeclaration: function () {function ExportNamedDeclaration(node) {
            node.specifiers.
            filter(function (specifier) {return (specifier.exported.name || specifier.exported.value) === 'default';}).
            forEach(function (specifier) {var _ref3 =
              (0, _contextCompat.getSourceCode)(context).getFirstTokens(node)[1] || {},loc = _ref3.loc;
              if (specifier.type === 'ExportDefaultSpecifier') {
                context.report({ node: node, message: preferNamed, loc: loc });
              } else if (specifier.type === 'ExportSpecifier') {
                context.report({ node: node, message: noAliasDefault(specifier), loc: loc });
              }
            });
          }return ExportNamedDeclaration;}() };

    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby1kZWZhdWx0LWV4cG9ydC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibWV0YSIsInR5cGUiLCJkb2NzIiwiY2F0ZWdvcnkiLCJkZXNjcmlwdGlvbiIsInVybCIsInNjaGVtYSIsImNyZWF0ZSIsImNvbnRleHQiLCJwcmVmZXJOYW1lZCIsIm5vQWxpYXNEZWZhdWx0IiwibG9jYWwiLCJuYW1lIiwiRXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uIiwibm9kZSIsImdldEZpcnN0VG9rZW5zIiwibG9jIiwicmVwb3J0IiwibWVzc2FnZSIsIkV4cG9ydE5hbWVkRGVjbGFyYXRpb24iLCJzcGVjaWZpZXJzIiwiZmlsdGVyIiwic3BlY2lmaWVyIiwiZXhwb3J0ZWQiLCJ2YWx1ZSIsImZvckVhY2giXSwibWFwcGluZ3MiOiJhQUFBOztBQUVBLHFDO0FBQ0EsZ0Q7O0FBRUFBLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsUUFBTTtBQUNKQyxVQUFNLFlBREY7QUFFSkMsVUFBTTtBQUNKQyxnQkFBVSxhQUROO0FBRUpDLG1CQUFhLHlCQUZUO0FBR0pDLFdBQUssMEJBQVEsbUJBQVIsQ0FIRCxFQUZGOztBQU9KQyxZQUFRLEVBUEosRUFEUzs7O0FBV2ZDLFFBWGUsK0JBV1JDLE9BWFEsRUFXQztBQUNkO0FBQ0EsVUFBSSw2QkFBV0EsT0FBWCxNQUF3QixRQUE1QixFQUFzQztBQUNwQyxlQUFPLEVBQVA7QUFDRDs7QUFFRCxVQUFNQyxjQUFjLHVCQUFwQjtBQUNBLFVBQU1DLDhCQUFpQixTQUFqQkEsY0FBaUIsWUFBR0MsS0FBSCxRQUFHQSxLQUFILGtDQUFpQ0EsTUFBTUMsSUFBdkMsNkNBQStFRCxNQUFNQyxJQUFyRix5QkFBakIseUJBQU47O0FBRUEsYUFBTztBQUNMQyxnQ0FESyxpREFDb0JDLElBRHBCLEVBQzBCO0FBQ2IsOENBQWNOLE9BQWQsRUFBdUJPLGNBQXZCLENBQXNDRCxJQUF0QyxFQUE0QyxDQUE1QyxLQUFrRCxFQURyQyxDQUNyQkUsR0FEcUIsU0FDckJBLEdBRHFCO0FBRTdCUixvQkFBUVMsTUFBUixDQUFlLEVBQUVILFVBQUYsRUFBUUksU0FBU1QsV0FBakIsRUFBOEJPLFFBQTlCLEVBQWY7QUFDRCxXQUpJOztBQU1MRyw4QkFOSywrQ0FNa0JMLElBTmxCLEVBTXdCO0FBQzNCQSxpQkFBS00sVUFBTDtBQUNHQyxrQkFESCxDQUNVLFVBQUNDLFNBQUQsVUFBZSxDQUFDQSxVQUFVQyxRQUFWLENBQW1CWCxJQUFuQixJQUEyQlUsVUFBVUMsUUFBVixDQUFtQkMsS0FBL0MsTUFBMEQsU0FBekUsRUFEVjtBQUVHQyxtQkFGSCxDQUVXLFVBQUNILFNBQUQsRUFBZTtBQUNOLGdEQUFjZCxPQUFkLEVBQXVCTyxjQUF2QixDQUFzQ0QsSUFBdEMsRUFBNEMsQ0FBNUMsS0FBa0QsRUFENUMsQ0FDZEUsR0FEYyxTQUNkQSxHQURjO0FBRXRCLGtCQUFJTSxVQUFVckIsSUFBVixLQUFtQix3QkFBdkIsRUFBaUQ7QUFDL0NPLHdCQUFRUyxNQUFSLENBQWUsRUFBRUgsVUFBRixFQUFRSSxTQUFTVCxXQUFqQixFQUE4Qk8sUUFBOUIsRUFBZjtBQUNELGVBRkQsTUFFTyxJQUFJTSxVQUFVckIsSUFBVixLQUFtQixpQkFBdkIsRUFBMEM7QUFDL0NPLHdCQUFRUyxNQUFSLENBQWUsRUFBRUgsVUFBRixFQUFRSSxTQUFTUixlQUFlWSxTQUFmLENBQWpCLEVBQTRDTixRQUE1QyxFQUFmO0FBQ0Q7QUFDRixhQVRIO0FBVUQsV0FqQkksbUNBQVA7O0FBbUJELEtBdkNjLG1CQUFqQiIsImZpbGUiOiJuby1kZWZhdWx0LWV4cG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNvdXJjZUNvZGUgfSBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL2NvbnRleHRDb21wYXQnO1xuXG5pbXBvcnQgZG9jc1VybCBmcm9tICcuLi9kb2NzVXJsJztcbmltcG9ydCBzb3VyY2VUeXBlIGZyb20gJy4uL2NvcmUvc291cmNlVHlwZSc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtZXRhOiB7XG4gICAgdHlwZTogJ3N1Z2dlc3Rpb24nLFxuICAgIGRvY3M6IHtcbiAgICAgIGNhdGVnb3J5OiAnU3R5bGUgZ3VpZGUnLFxuICAgICAgZGVzY3JpcHRpb246ICdGb3JiaWQgZGVmYXVsdCBleHBvcnRzLicsXG4gICAgICB1cmw6IGRvY3NVcmwoJ25vLWRlZmF1bHQtZXhwb3J0JyksXG4gICAgfSxcbiAgICBzY2hlbWE6IFtdLFxuICB9LFxuXG4gIGNyZWF0ZShjb250ZXh0KSB7XG4gICAgLy8gaWdub3JlIG5vbi1tb2R1bGVzXG4gICAgaWYgKHNvdXJjZVR5cGUoY29udGV4dCkgIT09ICdtb2R1bGUnKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgY29uc3QgcHJlZmVyTmFtZWQgPSAnUHJlZmVyIG5hbWVkIGV4cG9ydHMuJztcbiAgICBjb25zdCBub0FsaWFzRGVmYXVsdCA9ICh7IGxvY2FsIH0pID0+IGBEbyBub3QgYWxpYXMgXFxgJHtsb2NhbC5uYW1lfVxcYCBhcyBcXGBkZWZhdWx0XFxgLiBKdXN0IGV4cG9ydCBcXGAke2xvY2FsLm5hbWV9XFxgIGl0c2VsZiBpbnN0ZWFkLmA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgRXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uKG5vZGUpIHtcbiAgICAgICAgY29uc3QgeyBsb2MgfSA9IGdldFNvdXJjZUNvZGUoY29udGV4dCkuZ2V0Rmlyc3RUb2tlbnMobm9kZSlbMV0gfHwge307XG4gICAgICAgIGNvbnRleHQucmVwb3J0KHsgbm9kZSwgbWVzc2FnZTogcHJlZmVyTmFtZWQsIGxvYyB9KTtcbiAgICAgIH0sXG5cbiAgICAgIEV4cG9ydE5hbWVkRGVjbGFyYXRpb24obm9kZSkge1xuICAgICAgICBub2RlLnNwZWNpZmllcnNcbiAgICAgICAgICAuZmlsdGVyKChzcGVjaWZpZXIpID0+IChzcGVjaWZpZXIuZXhwb3J0ZWQubmFtZSB8fCBzcGVjaWZpZXIuZXhwb3J0ZWQudmFsdWUpID09PSAnZGVmYXVsdCcpXG4gICAgICAgICAgLmZvckVhY2goKHNwZWNpZmllcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBsb2MgfSA9IGdldFNvdXJjZUNvZGUoY29udGV4dCkuZ2V0Rmlyc3RUb2tlbnMobm9kZSlbMV0gfHwge307XG4gICAgICAgICAgICBpZiAoc3BlY2lmaWVyLnR5cGUgPT09ICdFeHBvcnREZWZhdWx0U3BlY2lmaWVyJykge1xuICAgICAgICAgICAgICBjb250ZXh0LnJlcG9ydCh7IG5vZGUsIG1lc3NhZ2U6IHByZWZlck5hbWVkLCBsb2MgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNwZWNpZmllci50eXBlID09PSAnRXhwb3J0U3BlY2lmaWVyJykge1xuICAgICAgICAgICAgICBjb250ZXh0LnJlcG9ydCh7IG5vZGUsIG1lc3NhZ2U6IG5vQWxpYXNEZWZhdWx0KHNwZWNpZmllciksIGxvYyAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG59O1xuIl19