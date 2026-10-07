'use strict';




var _resolve = require('eslint-module-utils/resolve');var _resolve2 = _interopRequireDefault(_resolve);
var _ModuleCache = require('eslint-module-utils/ModuleCache');var _ModuleCache2 = _interopRequireDefault(_ModuleCache);
var _moduleVisitor = require('eslint-module-utils/moduleVisitor');var _moduleVisitor2 = _interopRequireDefault(_moduleVisitor);
var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };} /**
                                                                                                                                                                                       * @fileOverview Ensures that an imported path exists, given resolution rules.
                                                                                                                                                                                       * @author Ben Mosher
                                                                                                                                                                                       */module.exports = { meta: {
    type: 'problem',
    docs: {
      category: 'Static analysis',
      description: 'Ensure imports point to a file/module that can be resolved.',
      url: (0, _docsUrl2['default'])('no-unresolved') },


    schema: [
    (0, _moduleVisitor.makeOptionsSchema)({
      caseSensitive: { type: 'boolean', 'default': true },
      caseSensitiveStrict: { type: 'boolean', 'default': false } })] },




  create: function () {function create(context) {
      var options = context.options[0] || {};

      function checkSourceValue(source, node) {
        // ignore type-only imports and exports
        if (node.importKind === 'type' || node.exportKind === 'type') {
          return;
        }

        var caseSensitive = !_resolve.CASE_SENSITIVE_FS && options.caseSensitive !== false;
        var caseSensitiveStrict = !_resolve.CASE_SENSITIVE_FS && options.caseSensitiveStrict;

        var resolvedPath = (0, _resolve2['default'])(source.value, context);

        if (resolvedPath === undefined) {
          context.report(
          source, 'Unable to resolve path to module \'' + String(
          source.value) + '\'.');

        } else if (caseSensitive || caseSensitiveStrict) {
          var cacheSettings = _ModuleCache2['default'].getSettings(context.settings);
          if (!(0, _resolve.fileExistsWithCaseSync)(resolvedPath, cacheSettings, caseSensitiveStrict)) {
            context.report(
            source, 'Casing of ' + String(
            source.value) + ' does not match the underlying filesystem.');

          }
        }
      }

      return (0, _moduleVisitor2['default'])(checkSourceValue, options);
    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby11bnJlc29sdmVkLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJtZXRhIiwidHlwZSIsImRvY3MiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwidXJsIiwic2NoZW1hIiwiY2FzZVNlbnNpdGl2ZSIsImNhc2VTZW5zaXRpdmVTdHJpY3QiLCJjcmVhdGUiLCJjb250ZXh0Iiwib3B0aW9ucyIsImNoZWNrU291cmNlVmFsdWUiLCJzb3VyY2UiLCJub2RlIiwiaW1wb3J0S2luZCIsImV4cG9ydEtpbmQiLCJDQVNFX1NFTlNJVElWRV9GUyIsInJlc29sdmVkUGF0aCIsInZhbHVlIiwidW5kZWZpbmVkIiwicmVwb3J0IiwiY2FjaGVTZXR0aW5ncyIsIk1vZHVsZUNhY2hlIiwiZ2V0U2V0dGluZ3MiLCJzZXR0aW5ncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxzRDtBQUNBLDhEO0FBQ0Esa0U7QUFDQSxxQyxpSkFSQTs7O3lMQVVBQSxPQUFPQyxPQUFQLEdBQWlCLEVBQ2ZDLE1BQU07QUFDSkMsVUFBTSxTQURGO0FBRUpDLFVBQU07QUFDSkMsZ0JBQVUsaUJBRE47QUFFSkMsbUJBQWEsNkRBRlQ7QUFHSkMsV0FBSywwQkFBUSxlQUFSLENBSEQsRUFGRjs7O0FBUUpDLFlBQVE7QUFDTiwwQ0FBa0I7QUFDaEJDLHFCQUFlLEVBQUVOLE1BQU0sU0FBUixFQUFtQixXQUFTLElBQTVCLEVBREM7QUFFaEJPLDJCQUFxQixFQUFFUCxNQUFNLFNBQVIsRUFBbUIsV0FBUyxLQUE1QixFQUZMLEVBQWxCLENBRE0sQ0FSSixFQURTOzs7OztBQWlCZlEsUUFqQmUsK0JBaUJSQyxPQWpCUSxFQWlCQztBQUNkLFVBQU1DLFVBQVVELFFBQVFDLE9BQVIsQ0FBZ0IsQ0FBaEIsS0FBc0IsRUFBdEM7O0FBRUEsZUFBU0MsZ0JBQVQsQ0FBMEJDLE1BQTFCLEVBQWtDQyxJQUFsQyxFQUF3QztBQUN0QztBQUNBLFlBQUlBLEtBQUtDLFVBQUwsS0FBb0IsTUFBcEIsSUFBOEJELEtBQUtFLFVBQUwsS0FBb0IsTUFBdEQsRUFBOEQ7QUFDNUQ7QUFDRDs7QUFFRCxZQUFNVCxnQkFBZ0IsQ0FBQ1UsMEJBQUQsSUFBc0JOLFFBQVFKLGFBQVIsS0FBMEIsS0FBdEU7QUFDQSxZQUFNQyxzQkFBc0IsQ0FBQ1MsMEJBQUQsSUFBc0JOLFFBQVFILG1CQUExRDs7QUFFQSxZQUFNVSxlQUFlLDBCQUFRTCxPQUFPTSxLQUFmLEVBQXNCVCxPQUF0QixDQUFyQjs7QUFFQSxZQUFJUSxpQkFBaUJFLFNBQXJCLEVBQWdDO0FBQzlCVixrQkFBUVcsTUFBUjtBQUNFUixnQkFERjtBQUV1Q0EsaUJBQU9NLEtBRjlDOztBQUlELFNBTEQsTUFLTyxJQUFJWixpQkFBaUJDLG1CQUFyQixFQUEwQztBQUMvQyxjQUFNYyxnQkFBZ0JDLHlCQUFZQyxXQUFaLENBQXdCZCxRQUFRZSxRQUFoQyxDQUF0QjtBQUNBLGNBQUksQ0FBQyxxQ0FBdUJQLFlBQXZCLEVBQXFDSSxhQUFyQyxFQUFvRGQsbUJBQXBELENBQUwsRUFBK0U7QUFDN0VFLG9CQUFRVyxNQUFSO0FBQ0VSLGtCQURGO0FBRWVBLG1CQUFPTSxLQUZ0Qjs7QUFJRDtBQUNGO0FBQ0Y7O0FBRUQsYUFBTyxnQ0FBY1AsZ0JBQWQsRUFBZ0NELE9BQWhDLENBQVA7QUFDRCxLQWhEYyxtQkFBakIiLCJmaWxlIjoibm8tdW5yZXNvbHZlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVPdmVydmlldyBFbnN1cmVzIHRoYXQgYW4gaW1wb3J0ZWQgcGF0aCBleGlzdHMsIGdpdmVuIHJlc29sdXRpb24gcnVsZXMuXG4gKiBAYXV0aG9yIEJlbiBNb3NoZXJcbiAqL1xuXG5pbXBvcnQgcmVzb2x2ZSwgeyBDQVNFX1NFTlNJVElWRV9GUywgZmlsZUV4aXN0c1dpdGhDYXNlU3luYyB9IGZyb20gJ2VzbGludC1tb2R1bGUtdXRpbHMvcmVzb2x2ZSc7XG5pbXBvcnQgTW9kdWxlQ2FjaGUgZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy9Nb2R1bGVDYWNoZSc7XG5pbXBvcnQgbW9kdWxlVmlzaXRvciwgeyBtYWtlT3B0aW9uc1NjaGVtYSB9IGZyb20gJ2VzbGludC1tb2R1bGUtdXRpbHMvbW9kdWxlVmlzaXRvcic7XG5pbXBvcnQgZG9jc1VybCBmcm9tICcuLi9kb2NzVXJsJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1ldGE6IHtcbiAgICB0eXBlOiAncHJvYmxlbScsXG4gICAgZG9jczoge1xuICAgICAgY2F0ZWdvcnk6ICdTdGF0aWMgYW5hbHlzaXMnLFxuICAgICAgZGVzY3JpcHRpb246ICdFbnN1cmUgaW1wb3J0cyBwb2ludCB0byBhIGZpbGUvbW9kdWxlIHRoYXQgY2FuIGJlIHJlc29sdmVkLicsXG4gICAgICB1cmw6IGRvY3NVcmwoJ25vLXVucmVzb2x2ZWQnKSxcbiAgICB9LFxuXG4gICAgc2NoZW1hOiBbXG4gICAgICBtYWtlT3B0aW9uc1NjaGVtYSh7XG4gICAgICAgIGNhc2VTZW5zaXRpdmU6IHsgdHlwZTogJ2Jvb2xlYW4nLCBkZWZhdWx0OiB0cnVlIH0sXG4gICAgICAgIGNhc2VTZW5zaXRpdmVTdHJpY3Q6IHsgdHlwZTogJ2Jvb2xlYW4nLCBkZWZhdWx0OiBmYWxzZSB9LFxuICAgICAgfSksXG4gICAgXSxcbiAgfSxcblxuICBjcmVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBjb250ZXh0Lm9wdGlvbnNbMF0gfHwge307XG5cbiAgICBmdW5jdGlvbiBjaGVja1NvdXJjZVZhbHVlKHNvdXJjZSwgbm9kZSkge1xuICAgICAgLy8gaWdub3JlIHR5cGUtb25seSBpbXBvcnRzIGFuZCBleHBvcnRzXG4gICAgICBpZiAobm9kZS5pbXBvcnRLaW5kID09PSAndHlwZScgfHwgbm9kZS5leHBvcnRLaW5kID09PSAndHlwZScpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYXNlU2Vuc2l0aXZlID0gIUNBU0VfU0VOU0lUSVZFX0ZTICYmIG9wdGlvbnMuY2FzZVNlbnNpdGl2ZSAhPT0gZmFsc2U7XG4gICAgICBjb25zdCBjYXNlU2Vuc2l0aXZlU3RyaWN0ID0gIUNBU0VfU0VOU0lUSVZFX0ZTICYmIG9wdGlvbnMuY2FzZVNlbnNpdGl2ZVN0cmljdDtcblxuICAgICAgY29uc3QgcmVzb2x2ZWRQYXRoID0gcmVzb2x2ZShzb3VyY2UudmFsdWUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVzb2x2ZWRQYXRoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGV4dC5yZXBvcnQoXG4gICAgICAgICAgc291cmNlLFxuICAgICAgICAgIGBVbmFibGUgdG8gcmVzb2x2ZSBwYXRoIHRvIG1vZHVsZSAnJHtzb3VyY2UudmFsdWV9Jy5gLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChjYXNlU2Vuc2l0aXZlIHx8IGNhc2VTZW5zaXRpdmVTdHJpY3QpIHtcbiAgICAgICAgY29uc3QgY2FjaGVTZXR0aW5ncyA9IE1vZHVsZUNhY2hlLmdldFNldHRpbmdzKGNvbnRleHQuc2V0dGluZ3MpO1xuICAgICAgICBpZiAoIWZpbGVFeGlzdHNXaXRoQ2FzZVN5bmMocmVzb2x2ZWRQYXRoLCBjYWNoZVNldHRpbmdzLCBjYXNlU2Vuc2l0aXZlU3RyaWN0KSkge1xuICAgICAgICAgIGNvbnRleHQucmVwb3J0KFxuICAgICAgICAgICAgc291cmNlLFxuICAgICAgICAgICAgYENhc2luZyBvZiAke3NvdXJjZS52YWx1ZX0gZG9lcyBub3QgbWF0Y2ggdGhlIHVuZGVybHlpbmcgZmlsZXN5c3RlbS5gLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbW9kdWxlVmlzaXRvcihjaGVja1NvdXJjZVZhbHVlLCBvcHRpb25zKTtcbiAgfSxcbn07XG4iXX0=