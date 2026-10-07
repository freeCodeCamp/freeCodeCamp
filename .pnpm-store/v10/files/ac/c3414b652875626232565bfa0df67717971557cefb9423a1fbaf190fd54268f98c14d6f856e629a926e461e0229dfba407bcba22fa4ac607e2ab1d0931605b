'use strict';var _moduleVisitor = require('eslint-module-utils/moduleVisitor');var _moduleVisitor2 = _interopRequireDefault(_moduleVisitor);
var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

function reportIfNonStandard(context, node, name) {
  if (name && name.indexOf('!') !== -1) {
    context.report(node, 'Unexpected \'!\' in \'' + String(name) + '\'. Do not use import syntax to configure webpack loaders.');
  }
}

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      category: 'Static analysis',
      description: 'Forbid webpack loader syntax in imports.',
      url: (0, _docsUrl2['default'])('no-webpack-loader-syntax') },

    schema: [] },


  create: function () {function create(context) {
      return (0, _moduleVisitor2['default'])(function (source, node) {
        reportIfNonStandard(context, node, source.value);
      }, { commonjs: true });
    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby13ZWJwYWNrLWxvYWRlci1zeW50YXguanMiXSwibmFtZXMiOlsicmVwb3J0SWZOb25TdGFuZGFyZCIsImNvbnRleHQiLCJub2RlIiwibmFtZSIsImluZGV4T2YiLCJyZXBvcnQiLCJtb2R1bGUiLCJleHBvcnRzIiwibWV0YSIsInR5cGUiLCJkb2NzIiwiY2F0ZWdvcnkiLCJkZXNjcmlwdGlvbiIsInVybCIsInNjaGVtYSIsImNyZWF0ZSIsInNvdXJjZSIsInZhbHVlIiwiY29tbW9uanMiXSwibWFwcGluZ3MiOiJhQUFBLGtFO0FBQ0EscUM7O0FBRUEsU0FBU0EsbUJBQVQsQ0FBNkJDLE9BQTdCLEVBQXNDQyxJQUF0QyxFQUE0Q0MsSUFBNUMsRUFBa0Q7QUFDaEQsTUFBSUEsUUFBUUEsS0FBS0MsT0FBTCxDQUFhLEdBQWIsTUFBc0IsQ0FBQyxDQUFuQyxFQUFzQztBQUNwQ0gsWUFBUUksTUFBUixDQUFlSCxJQUFmLG9DQUEyQ0MsSUFBM0M7QUFDRDtBQUNGOztBQUVERyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLFFBQU07QUFDSkMsVUFBTSxTQURGO0FBRUpDLFVBQU07QUFDSkMsZ0JBQVUsaUJBRE47QUFFSkMsbUJBQWEsMENBRlQ7QUFHSkMsV0FBSywwQkFBUSwwQkFBUixDQUhELEVBRkY7O0FBT0pDLFlBQVEsRUFQSixFQURTOzs7QUFXZkMsUUFYZSwrQkFXUmQsT0FYUSxFQVdDO0FBQ2QsYUFBTyxnQ0FBYyxVQUFDZSxNQUFELEVBQVNkLElBQVQsRUFBa0I7QUFDckNGLDRCQUFvQkMsT0FBcEIsRUFBNkJDLElBQTdCLEVBQW1DYyxPQUFPQyxLQUExQztBQUNELE9BRk0sRUFFSixFQUFFQyxVQUFVLElBQVosRUFGSSxDQUFQO0FBR0QsS0FmYyxtQkFBakIiLCJmaWxlIjoibm8td2VicGFjay1sb2FkZXItc3ludGF4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZHVsZVZpc2l0b3IgZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy9tb2R1bGVWaXNpdG9yJztcbmltcG9ydCBkb2NzVXJsIGZyb20gJy4uL2RvY3NVcmwnO1xuXG5mdW5jdGlvbiByZXBvcnRJZk5vblN0YW5kYXJkKGNvbnRleHQsIG5vZGUsIG5hbWUpIHtcbiAgaWYgKG5hbWUgJiYgbmFtZS5pbmRleE9mKCchJykgIT09IC0xKSB7XG4gICAgY29udGV4dC5yZXBvcnQobm9kZSwgYFVuZXhwZWN0ZWQgJyEnIGluICcke25hbWV9Jy4gRG8gbm90IHVzZSBpbXBvcnQgc3ludGF4IHRvIGNvbmZpZ3VyZSB3ZWJwYWNrIGxvYWRlcnMuYCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1ldGE6IHtcbiAgICB0eXBlOiAncHJvYmxlbScsXG4gICAgZG9jczoge1xuICAgICAgY2F0ZWdvcnk6ICdTdGF0aWMgYW5hbHlzaXMnLFxuICAgICAgZGVzY3JpcHRpb246ICdGb3JiaWQgd2VicGFjayBsb2FkZXIgc3ludGF4IGluIGltcG9ydHMuJyxcbiAgICAgIHVybDogZG9jc1VybCgnbm8td2VicGFjay1sb2FkZXItc3ludGF4JyksXG4gICAgfSxcbiAgICBzY2hlbWE6IFtdLFxuICB9LFxuXG4gIGNyZWF0ZShjb250ZXh0KSB7XG4gICAgcmV0dXJuIG1vZHVsZVZpc2l0b3IoKHNvdXJjZSwgbm9kZSkgPT4ge1xuICAgICAgcmVwb3J0SWZOb25TdGFuZGFyZChjb250ZXh0LCBub2RlLCBzb3VyY2UudmFsdWUpO1xuICAgIH0sIHsgY29tbW9uanM6IHRydWUgfSk7XG4gIH0sXG59O1xuIl19