'use strict';var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Style guide',
      description: 'Forbid named default exports.',
      url: (0, _docsUrl2['default'])('no-named-default') },

    schema: [] },


  create: function () {function create(context) {
      return {
        ImportDeclaration: function () {function ImportDeclaration(node) {
            node.specifiers.forEach(function (im) {
              if (im.importKind === 'type' || im.importKind === 'typeof') {
                return;
              }

              if (im.type === 'ImportSpecifier' && (im.imported.name || im.imported.value) === 'default') {
                context.report({
                  node: im.local,
                  message: 'Use default import syntax to import \'' + String(im.local.name) + '\'.' });
              }
            });
          }return ImportDeclaration;}() };

    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby1uYW1lZC1kZWZhdWx0LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJtZXRhIiwidHlwZSIsImRvY3MiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwidXJsIiwic2NoZW1hIiwiY3JlYXRlIiwiY29udGV4dCIsIkltcG9ydERlY2xhcmF0aW9uIiwibm9kZSIsInNwZWNpZmllcnMiLCJmb3JFYWNoIiwiaW0iLCJpbXBvcnRLaW5kIiwiaW1wb3J0ZWQiLCJuYW1lIiwidmFsdWUiLCJyZXBvcnQiLCJsb2NhbCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJhQUFBLHFDOztBQUVBQSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLFFBQU07QUFDSkMsVUFBTSxZQURGO0FBRUpDLFVBQU07QUFDSkMsZ0JBQVUsYUFETjtBQUVKQyxtQkFBYSwrQkFGVDtBQUdKQyxXQUFLLDBCQUFRLGtCQUFSLENBSEQsRUFGRjs7QUFPSkMsWUFBUSxFQVBKLEVBRFM7OztBQVdmQyxRQVhlLCtCQVdSQyxPQVhRLEVBV0M7QUFDZCxhQUFPO0FBQ0xDLHlCQURLLDBDQUNhQyxJQURiLEVBQ21CO0FBQ3RCQSxpQkFBS0MsVUFBTCxDQUFnQkMsT0FBaEIsQ0FBd0IsVUFBVUMsRUFBVixFQUFjO0FBQ3BDLGtCQUFJQSxHQUFHQyxVQUFILEtBQWtCLE1BQWxCLElBQTRCRCxHQUFHQyxVQUFILEtBQWtCLFFBQWxELEVBQTREO0FBQzFEO0FBQ0Q7O0FBRUQsa0JBQUlELEdBQUdaLElBQUgsS0FBWSxpQkFBWixJQUFpQyxDQUFDWSxHQUFHRSxRQUFILENBQVlDLElBQVosSUFBb0JILEdBQUdFLFFBQUgsQ0FBWUUsS0FBakMsTUFBNEMsU0FBakYsRUFBNEY7QUFDMUZULHdCQUFRVSxNQUFSLENBQWU7QUFDYlIsd0JBQU1HLEdBQUdNLEtBREk7QUFFYkMsNkVBQWlEUCxHQUFHTSxLQUFILENBQVNILElBQTFELFNBRmEsRUFBZjtBQUdEO0FBQ0YsYUFWRDtBQVdELFdBYkksOEJBQVA7O0FBZUQsS0EzQmMsbUJBQWpCIiwiZmlsZSI6Im5vLW5hbWVkLWRlZmF1bHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZG9jc1VybCBmcm9tICcuLi9kb2NzVXJsJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1ldGE6IHtcbiAgICB0eXBlOiAnc3VnZ2VzdGlvbicsXG4gICAgZG9jczoge1xuICAgICAgY2F0ZWdvcnk6ICdTdHlsZSBndWlkZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvcmJpZCBuYW1lZCBkZWZhdWx0IGV4cG9ydHMuJyxcbiAgICAgIHVybDogZG9jc1VybCgnbm8tbmFtZWQtZGVmYXVsdCcpLFxuICAgIH0sXG4gICAgc2NoZW1hOiBbXSxcbiAgfSxcblxuICBjcmVhdGUoY29udGV4dCkge1xuICAgIHJldHVybiB7XG4gICAgICBJbXBvcnREZWNsYXJhdGlvbihub2RlKSB7XG4gICAgICAgIG5vZGUuc3BlY2lmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChpbSkge1xuICAgICAgICAgIGlmIChpbS5pbXBvcnRLaW5kID09PSAndHlwZScgfHwgaW0uaW1wb3J0S2luZCA9PT0gJ3R5cGVvZicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW0udHlwZSA9PT0gJ0ltcG9ydFNwZWNpZmllcicgJiYgKGltLmltcG9ydGVkLm5hbWUgfHwgaW0uaW1wb3J0ZWQudmFsdWUpID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRleHQucmVwb3J0KHtcbiAgICAgICAgICAgICAgbm9kZTogaW0ubG9jYWwsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGBVc2UgZGVmYXVsdCBpbXBvcnQgc3ludGF4IHRvIGltcG9ydCAnJHtpbS5sb2NhbC5uYW1lfScuYCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9O1xuICB9LFxufTtcbiJdfQ==