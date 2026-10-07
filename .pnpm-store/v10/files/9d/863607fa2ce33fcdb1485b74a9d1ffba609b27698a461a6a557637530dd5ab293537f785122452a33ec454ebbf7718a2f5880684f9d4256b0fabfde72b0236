'use strict';var _builder = require('../exportMap/builder');var _builder2 = _interopRequireDefault(_builder);
var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      category: 'Static analysis',
      description: 'Ensure a default export is present, given a default import.',
      url: (0, _docsUrl2['default'])('default') },

    schema: [] },


  create: function () {function create(context) {
      function checkDefault(specifierType, node) {
        var defaultSpecifier = node.specifiers.find(
        function (specifier) {return specifier.type === specifierType;});


        if (!defaultSpecifier) {return;}
        var imports = _builder2['default'].get(node.source.value, context);
        if (imports == null) {return;}

        if (imports.errors.length) {
          imports.reportErrors(context, node);
        } else if (imports.get('default') === undefined) {
          context.report({
            node: defaultSpecifier,
            message: 'No default export found in imported module "' + String(node.source.value) + '".' });

        }
      }

      return {
        ImportDeclaration: checkDefault.bind(null, 'ImportDefaultSpecifier'),
        ExportNamedDeclaration: checkDefault.bind(null, 'ExportDefaultSpecifier') };

    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9kZWZhdWx0LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJtZXRhIiwidHlwZSIsImRvY3MiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwidXJsIiwic2NoZW1hIiwiY3JlYXRlIiwiY29udGV4dCIsImNoZWNrRGVmYXVsdCIsInNwZWNpZmllclR5cGUiLCJub2RlIiwiZGVmYXVsdFNwZWNpZmllciIsInNwZWNpZmllcnMiLCJmaW5kIiwic3BlY2lmaWVyIiwiaW1wb3J0cyIsIkV4cG9ydE1hcEJ1aWxkZXIiLCJnZXQiLCJzb3VyY2UiLCJ2YWx1ZSIsImVycm9ycyIsImxlbmd0aCIsInJlcG9ydEVycm9ycyIsInVuZGVmaW5lZCIsInJlcG9ydCIsIm1lc3NhZ2UiLCJJbXBvcnREZWNsYXJhdGlvbiIsImJpbmQiLCJFeHBvcnROYW1lZERlY2xhcmF0aW9uIl0sIm1hcHBpbmdzIjoiYUFBQSwrQztBQUNBLHFDOztBQUVBQSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLFFBQU07QUFDSkMsVUFBTSxTQURGO0FBRUpDLFVBQU07QUFDSkMsZ0JBQVUsaUJBRE47QUFFSkMsbUJBQWEsNkRBRlQ7QUFHSkMsV0FBSywwQkFBUSxTQUFSLENBSEQsRUFGRjs7QUFPSkMsWUFBUSxFQVBKLEVBRFM7OztBQVdmQyxRQVhlLCtCQVdSQyxPQVhRLEVBV0M7QUFDZCxlQUFTQyxZQUFULENBQXNCQyxhQUF0QixFQUFxQ0MsSUFBckMsRUFBMkM7QUFDekMsWUFBTUMsbUJBQW1CRCxLQUFLRSxVQUFMLENBQWdCQyxJQUFoQjtBQUN2QixrQkFBQ0MsU0FBRCxVQUFlQSxVQUFVZCxJQUFWLEtBQW1CUyxhQUFsQyxFQUR1QixDQUF6Qjs7O0FBSUEsWUFBSSxDQUFDRSxnQkFBTCxFQUF1QixDQUFFLE9BQVM7QUFDbEMsWUFBTUksVUFBVUMscUJBQWlCQyxHQUFqQixDQUFxQlAsS0FBS1EsTUFBTCxDQUFZQyxLQUFqQyxFQUF3Q1osT0FBeEMsQ0FBaEI7QUFDQSxZQUFJUSxXQUFXLElBQWYsRUFBcUIsQ0FBRSxPQUFTOztBQUVoQyxZQUFJQSxRQUFRSyxNQUFSLENBQWVDLE1BQW5CLEVBQTJCO0FBQ3pCTixrQkFBUU8sWUFBUixDQUFxQmYsT0FBckIsRUFBOEJHLElBQTlCO0FBQ0QsU0FGRCxNQUVPLElBQUlLLFFBQVFFLEdBQVIsQ0FBWSxTQUFaLE1BQTJCTSxTQUEvQixFQUEwQztBQUMvQ2hCLGtCQUFRaUIsTUFBUixDQUFlO0FBQ2JkLGtCQUFNQyxnQkFETztBQUViYyw2RUFBd0RmLEtBQUtRLE1BQUwsQ0FBWUMsS0FBcEUsUUFGYSxFQUFmOztBQUlEO0FBQ0Y7O0FBRUQsYUFBTztBQUNMTywyQkFBbUJsQixhQUFhbUIsSUFBYixDQUFrQixJQUFsQixFQUF3Qix3QkFBeEIsQ0FEZDtBQUVMQyxnQ0FBd0JwQixhQUFhbUIsSUFBYixDQUFrQixJQUFsQixFQUF3Qix3QkFBeEIsQ0FGbkIsRUFBUDs7QUFJRCxLQW5DYyxtQkFBakIiLCJmaWxlIjoiZGVmYXVsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeHBvcnRNYXBCdWlsZGVyIGZyb20gJy4uL2V4cG9ydE1hcC9idWlsZGVyJztcbmltcG9ydCBkb2NzVXJsIGZyb20gJy4uL2RvY3NVcmwnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWV0YToge1xuICAgIHR5cGU6ICdwcm9ibGVtJyxcbiAgICBkb2NzOiB7XG4gICAgICBjYXRlZ29yeTogJ1N0YXRpYyBhbmFseXNpcycsXG4gICAgICBkZXNjcmlwdGlvbjogJ0Vuc3VyZSBhIGRlZmF1bHQgZXhwb3J0IGlzIHByZXNlbnQsIGdpdmVuIGEgZGVmYXVsdCBpbXBvcnQuJyxcbiAgICAgIHVybDogZG9jc1VybCgnZGVmYXVsdCcpLFxuICAgIH0sXG4gICAgc2NoZW1hOiBbXSxcbiAgfSxcblxuICBjcmVhdGUoY29udGV4dCkge1xuICAgIGZ1bmN0aW9uIGNoZWNrRGVmYXVsdChzcGVjaWZpZXJUeXBlLCBub2RlKSB7XG4gICAgICBjb25zdCBkZWZhdWx0U3BlY2lmaWVyID0gbm9kZS5zcGVjaWZpZXJzLmZpbmQoXG4gICAgICAgIChzcGVjaWZpZXIpID0+IHNwZWNpZmllci50eXBlID09PSBzcGVjaWZpZXJUeXBlLFxuICAgICAgKTtcblxuICAgICAgaWYgKCFkZWZhdWx0U3BlY2lmaWVyKSB7IHJldHVybjsgfVxuICAgICAgY29uc3QgaW1wb3J0cyA9IEV4cG9ydE1hcEJ1aWxkZXIuZ2V0KG5vZGUuc291cmNlLnZhbHVlLCBjb250ZXh0KTtcbiAgICAgIGlmIChpbXBvcnRzID09IG51bGwpIHsgcmV0dXJuOyB9XG5cbiAgICAgIGlmIChpbXBvcnRzLmVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgaW1wb3J0cy5yZXBvcnRFcnJvcnMoY29udGV4dCwgbm9kZSk7XG4gICAgICB9IGVsc2UgaWYgKGltcG9ydHMuZ2V0KCdkZWZhdWx0JykgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250ZXh0LnJlcG9ydCh7XG4gICAgICAgICAgbm9kZTogZGVmYXVsdFNwZWNpZmllcixcbiAgICAgICAgICBtZXNzYWdlOiBgTm8gZGVmYXVsdCBleHBvcnQgZm91bmQgaW4gaW1wb3J0ZWQgbW9kdWxlIFwiJHtub2RlLnNvdXJjZS52YWx1ZX1cIi5gLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgSW1wb3J0RGVjbGFyYXRpb246IGNoZWNrRGVmYXVsdC5iaW5kKG51bGwsICdJbXBvcnREZWZhdWx0U3BlY2lmaWVyJyksXG4gICAgICBFeHBvcnROYW1lZERlY2xhcmF0aW9uOiBjaGVja0RlZmF1bHQuYmluZChudWxsLCAnRXhwb3J0RGVmYXVsdFNwZWNpZmllcicpLFxuICAgIH07XG4gIH0sXG59O1xuIl19