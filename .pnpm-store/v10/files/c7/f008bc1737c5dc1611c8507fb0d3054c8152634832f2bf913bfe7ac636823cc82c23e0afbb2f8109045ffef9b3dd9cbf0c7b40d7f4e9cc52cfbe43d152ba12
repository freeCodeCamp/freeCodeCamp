'use strict';





var _builder = require('../exportMap/builder');var _builder2 = _interopRequireDefault(_builder);
var _importDeclaration = require('../importDeclaration');var _importDeclaration2 = _interopRequireDefault(_importDeclaration);
var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Helpful warnings',
      description: 'Forbid use of exported name as property of default export.',
      url: (0, _docsUrl2['default'])('no-named-as-default-member') },

    schema: [] },


  create: function () {function create(context) {
      var fileImports = new Map();
      var allPropertyLookups = new Map();

      function storePropertyLookup(objectName, propName, node) {
        var lookups = allPropertyLookups.get(objectName) || [];
        lookups.push({ node: node, propName: propName });
        allPropertyLookups.set(objectName, lookups);
      }

      return {
        ImportDefaultSpecifier: function () {function ImportDefaultSpecifier(node) {
            var declaration = (0, _importDeclaration2['default'])(context, node);
            var exportMap = _builder2['default'].get(declaration.source.value, context);
            if (exportMap == null) {return;}

            if (exportMap.errors.length) {
              exportMap.reportErrors(context, declaration);
              return;
            }

            fileImports.set(node.local.name, {
              exportMap: exportMap,
              sourcePath: declaration.source.value });

          }return ImportDefaultSpecifier;}(),

        MemberExpression: function () {function MemberExpression(node) {
            var objectName = node.object.name;
            var propName = node.property.name;
            storePropertyLookup(objectName, propName, node);
          }return MemberExpression;}(),

        VariableDeclarator: function () {function VariableDeclarator(node) {
            var isDestructure = node.id.type === 'ObjectPattern' &&
            node.init != null &&
            node.init.type === 'Identifier';
            if (!isDestructure) {return;}

            var objectName = node.init.name;var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
              for (var _iterator = node.id.properties[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var _ref = _step.value;var key = _ref.key;
                if (key == null) {continue;} // true for rest properties
                storePropertyLookup(objectName, key.name, key);
              }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator['return']) {_iterator['return']();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
          }return VariableDeclarator;}(),

        'Program:exit': function () {function ProgramExit() {
            allPropertyLookups.forEach(function (lookups, objectName) {
              var fileImport = fileImports.get(objectName);
              if (fileImport == null) {return;}var _iteratorNormalCompletion2 = true;var _didIteratorError2 = false;var _iteratorError2 = undefined;try {

                for (var _iterator2 = lookups[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {var _ref2 = _step2.value;var propName = _ref2.propName,node = _ref2.node;
                  // the default import can have a "default" property
                  if (propName === 'default') {continue;}
                  if (!fileImport.exportMap.namespace.has(propName)) {continue;}

                  context.report({
                    node: node,
                    message: 'Caution: `' + String(objectName) + '` also has a named export `' + String(propName) + '`. Check if you meant to write `import {' + String(propName) + '} from \'' + String(fileImport.sourcePath) + '\'` instead.' });

                }} catch (err) {_didIteratorError2 = true;_iteratorError2 = err;} finally {try {if (!_iteratorNormalCompletion2 && _iterator2['return']) {_iterator2['return']();}} finally {if (_didIteratorError2) {throw _iteratorError2;}}}
            });
          }return ProgramExit;}() };

    }return create;}() }; /**
                           * @fileoverview Rule to warn about potentially confused use of name exports
                           * @author Desmond Brand
                           * @copyright 2016 Desmond Brand. All rights reserved.
                           * See LICENSE in root directory for full license.
                           */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby1uYW1lZC1hcy1kZWZhdWx0LW1lbWJlci5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibWV0YSIsInR5cGUiLCJkb2NzIiwiY2F0ZWdvcnkiLCJkZXNjcmlwdGlvbiIsInVybCIsInNjaGVtYSIsImNyZWF0ZSIsImNvbnRleHQiLCJmaWxlSW1wb3J0cyIsIk1hcCIsImFsbFByb3BlcnR5TG9va3VwcyIsInN0b3JlUHJvcGVydHlMb29rdXAiLCJvYmplY3ROYW1lIiwicHJvcE5hbWUiLCJub2RlIiwibG9va3VwcyIsImdldCIsInB1c2giLCJzZXQiLCJJbXBvcnREZWZhdWx0U3BlY2lmaWVyIiwiZGVjbGFyYXRpb24iLCJleHBvcnRNYXAiLCJFeHBvcnRNYXBCdWlsZGVyIiwic291cmNlIiwidmFsdWUiLCJlcnJvcnMiLCJsZW5ndGgiLCJyZXBvcnRFcnJvcnMiLCJsb2NhbCIsIm5hbWUiLCJzb3VyY2VQYXRoIiwiTWVtYmVyRXhwcmVzc2lvbiIsIm9iamVjdCIsInByb3BlcnR5IiwiVmFyaWFibGVEZWNsYXJhdG9yIiwiaXNEZXN0cnVjdHVyZSIsImlkIiwiaW5pdCIsInByb3BlcnRpZXMiLCJrZXkiLCJmb3JFYWNoIiwiZmlsZUltcG9ydCIsIm5hbWVzcGFjZSIsImhhcyIsInJlcG9ydCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQU1BLCtDO0FBQ0EseUQ7QUFDQSxxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUFBLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsUUFBTTtBQUNKQyxVQUFNLFlBREY7QUFFSkMsVUFBTTtBQUNKQyxnQkFBVSxrQkFETjtBQUVKQyxtQkFBYSw0REFGVDtBQUdKQyxXQUFLLDBCQUFRLDRCQUFSLENBSEQsRUFGRjs7QUFPSkMsWUFBUSxFQVBKLEVBRFM7OztBQVdmQyxRQVhlLCtCQVdSQyxPQVhRLEVBV0M7QUFDZCxVQUFNQyxjQUFjLElBQUlDLEdBQUosRUFBcEI7QUFDQSxV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LHdEQUFzSEEsUUFBdEgseUJBQXlJNEIsV0FBV1gsVUFBcEosa0JBRmEsRUFBZjs7QUFJRCxpQkFiaUQ7QUFjbkQsYUFkRDtBQWVELFdBcERJLHdCQUFQOztBQXNERCxLQTNFYyxtQkFBakIsQyxDQWRBIiwiZmlsZSI6Im5vLW5hbWVkLWFzLWRlZmF1bHQtbWVtYmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFJ1bGUgdG8gd2FybiBhYm91dCBwb3RlbnRpYWxseSBjb25mdXNlZCB1c2Ugb2YgbmFtZSBleHBvcnRzXG4gKiBAYXV0aG9yIERlc21vbmQgQnJhbmRcbiAqIEBjb3B5cmlnaHQgMjAxNiBEZXNtb25kIEJyYW5kLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogU2VlIExJQ0VOU0UgaW4gcm9vdCBkaXJlY3RvcnkgZm9yIGZ1bGwgbGljZW5zZS5cbiAqL1xuaW1wb3J0IEV4cG9ydE1hcEJ1aWxkZXIgZnJvbSAnLi4vZXhwb3J0TWFwL2J1aWxkZXInO1xuaW1wb3J0IGltcG9ydERlY2xhcmF0aW9uIGZyb20gJy4uL2ltcG9ydERlY2xhcmF0aW9uJztcbmltcG9ydCBkb2NzVXJsIGZyb20gJy4uL2RvY3NVcmwnO1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUnVsZSBEZWZpbml0aW9uXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWV0YToge1xuICAgIHR5cGU6ICdzdWdnZXN0aW9uJyxcbiAgICBkb2NzOiB7XG4gICAgICBjYXRlZ29yeTogJ0hlbHBmdWwgd2FybmluZ3MnLFxuICAgICAgZGVzY3JpcHRpb246ICdGb3JiaWQgdXNlIG9mIGV4cG9ydGVkIG5hbWUgYXMgcHJvcGVydHkgb2YgZGVmYXVsdCBleHBvcnQuJyxcbiAgICAgIHVybDogZG9jc1VybCgnbm8tbmFtZWQtYXMtZGVmYXVsdC1tZW1iZXInKSxcbiAgICB9LFxuICAgIHNjaGVtYTogW10sXG4gIH0sXG5cbiAgY3JlYXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBmaWxlSW1wb3J0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBhbGxQcm9wZXJ0eUxvb2t1cHMgPSBuZXcgTWFwKCk7XG5cbiAgICBmdW5jdGlvbiBzdG9yZVByb3BlcnR5TG9va3VwKG9iamVjdE5hbWUsIHByb3BOYW1lLCBub2RlKSB7XG4gICAgICBjb25zdCBsb29rdXBzID0gYWxsUHJvcGVydHlMb29rdXBzLmdldChvYmplY3ROYW1lKSB8fCBbXTtcbiAgICAgIGxvb2t1cHMucHVzaCh7IG5vZGUsIHByb3BOYW1lIH0pO1xuICAgICAgYWxsUHJvcGVydHlMb29rdXBzLnNldChvYmplY3ROYW1lLCBsb29rdXBzKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgSW1wb3J0RGVmYXVsdFNwZWNpZmllcihub2RlKSB7XG4gICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gaW1wb3J0RGVjbGFyYXRpb24oY29udGV4dCwgbm9kZSk7XG4gICAgICAgIGNvbnN0IGV4cG9ydE1hcCA9IEV4cG9ydE1hcEJ1aWxkZXIuZ2V0KGRlY2xhcmF0aW9uLnNvdXJjZS52YWx1ZSwgY29udGV4dCk7XG4gICAgICAgIGlmIChleHBvcnRNYXAgPT0gbnVsbCkgeyByZXR1cm47IH1cblxuICAgICAgICBpZiAoZXhwb3J0TWFwLmVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICBleHBvcnRNYXAucmVwb3J0RXJyb3JzKGNvbnRleHQsIGRlY2xhcmF0aW9uKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmaWxlSW1wb3J0cy5zZXQobm9kZS5sb2NhbC5uYW1lLCB7XG4gICAgICAgICAgZXhwb3J0TWFwLFxuICAgICAgICAgIHNvdXJjZVBhdGg6IGRlY2xhcmF0aW9uLnNvdXJjZS52YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBNZW1iZXJFeHByZXNzaW9uKG5vZGUpIHtcbiAgICAgICAgY29uc3Qgb2JqZWN0TmFtZSA9IG5vZGUub2JqZWN0Lm5hbWU7XG4gICAgICAgIGNvbnN0IHByb3BOYW1lID0gbm9kZS5wcm9wZXJ0eS5uYW1lO1xuICAgICAgICBzdG9yZVByb3BlcnR5TG9va3VwKG9iamVjdE5hbWUsIHByb3BOYW1lLCBub2RlKTtcbiAgICAgIH0sXG5cbiAgICAgIFZhcmlhYmxlRGVjbGFyYXRvcihub2RlKSB7XG4gICAgICAgIGNvbnN0IGlzRGVzdHJ1Y3R1cmUgPSBub2RlLmlkLnR5cGUgPT09ICdPYmplY3RQYXR0ZXJuJ1xuICAgICAgICAgICYmIG5vZGUuaW5pdCAhPSBudWxsXG4gICAgICAgICAgJiYgbm9kZS5pbml0LnR5cGUgPT09ICdJZGVudGlmaWVyJztcbiAgICAgICAgaWYgKCFpc0Rlc3RydWN0dXJlKSB7IHJldHVybjsgfVxuXG4gICAgICAgIGNvbnN0IG9iamVjdE5hbWUgPSBub2RlLmluaXQubmFtZTtcbiAgICAgICAgZm9yIChjb25zdCB7IGtleSB9IG9mIG5vZGUuaWQucHJvcGVydGllcykge1xuICAgICAgICAgIGlmIChrZXkgPT0gbnVsbCkgeyBjb250aW51ZTsgfSAgLy8gdHJ1ZSBmb3IgcmVzdCBwcm9wZXJ0aWVzXG4gICAgICAgICAgc3RvcmVQcm9wZXJ0eUxvb2t1cChvYmplY3ROYW1lLCBrZXkubmFtZSwga2V5KTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgJ1Byb2dyYW06ZXhpdCcoKSB7XG4gICAgICAgIGFsbFByb3BlcnR5TG9va3Vwcy5mb3JFYWNoKChsb29rdXBzLCBvYmplY3ROYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgZmlsZUltcG9ydCA9IGZpbGVJbXBvcnRzLmdldChvYmplY3ROYW1lKTtcbiAgICAgICAgICBpZiAoZmlsZUltcG9ydCA9PSBudWxsKSB7IHJldHVybjsgfVxuXG4gICAgICAgICAgZm9yIChjb25zdCB7IHByb3BOYW1lLCBub2RlIH0gb2YgbG9va3Vwcykge1xuICAgICAgICAgICAgLy8gdGhlIGRlZmF1bHQgaW1wb3J0IGNhbiBoYXZlIGEgXCJkZWZhdWx0XCIgcHJvcGVydHlcbiAgICAgICAgICAgIGlmIChwcm9wTmFtZSA9PT0gJ2RlZmF1bHQnKSB7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICBpZiAoIWZpbGVJbXBvcnQuZXhwb3J0TWFwLm5hbWVzcGFjZS5oYXMocHJvcE5hbWUpKSB7IGNvbnRpbnVlOyB9XG5cbiAgICAgICAgICAgIGNvbnRleHQucmVwb3J0KHtcbiAgICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgICAgbWVzc2FnZTogYENhdXRpb246IFxcYCR7b2JqZWN0TmFtZX1cXGAgYWxzbyBoYXMgYSBuYW1lZCBleHBvcnQgXFxgJHtwcm9wTmFtZX1cXGAuIENoZWNrIGlmIHlvdSBtZWFudCB0byB3cml0ZSBcXGBpbXBvcnQgeyR7cHJvcE5hbWV9fSBmcm9tICcke2ZpbGVJbXBvcnQuc291cmNlUGF0aH0nXFxgIGluc3RlYWQuYCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG59O1xuIl19