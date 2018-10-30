define(['exports', './parser', './whitespace-control', './helpers', '../utils'], function (exports, _parser, _whitespaceControl, _helpers, _utils) {
  'use strict';

  exports.__esModule = true;
  exports.parse = parse;
  // istanbul ignore next

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _parser2 = _interopRequireDefault(_parser);

  var _WhitespaceControl = _interopRequireDefault(_whitespaceControl);

  exports.parser = _parser2['default'];

  var yy = {};
  _utils.extend(yy, _helpers);

  function parse(input, options) {
    // Just return if an already-compiled AST was passed in.
    if (input.type === 'Program') {
      return input;
    }

    _parser2['default'].yy = yy;

    // Altering the shared object here, but this is ok as parser is a sync operation
    yy.locInfo = function (locInfo) {
      return new yy.SourceLocation(options && options.srcName, locInfo);
    };

    var strip = new _WhitespaceControl['default'](options);
    return strip.accept(_parser2['default'].parse(input));
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2NvbXBpbGVyL2Jhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztVQUtTLE1BQU07O0FBRWYsTUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ1osU0FMUyxNQUFNLENBS1IsRUFBRSxXQUFVLENBQUM7O0FBRWIsV0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRTs7QUFFcEMsUUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtBQUFFLGFBQU8sS0FBSyxDQUFDO0tBQUU7O0FBRS9DLHdCQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7OztBQUdmLE1BQUUsQ0FBQyxPQUFPLEdBQUcsVUFBUyxPQUFPLEVBQUU7QUFDN0IsYUFBTyxJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDbkUsQ0FBQzs7QUFFRixRQUFJLEtBQUssR0FBRyxrQ0FBc0IsT0FBTyxDQUFDLENBQUM7QUFDM0MsV0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLG9CQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0dBQzFDIiwiZmlsZSI6ImJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGFyc2VyIGZyb20gJy4vcGFyc2VyJztcbmltcG9ydCBXaGl0ZXNwYWNlQ29udHJvbCBmcm9tICcuL3doaXRlc3BhY2UtY29udHJvbCc7XG5pbXBvcnQgKiBhcyBIZWxwZXJzIGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCB7IHBhcnNlciB9O1xuXG5sZXQgeXkgPSB7fTtcbmV4dGVuZCh5eSwgSGVscGVycyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShpbnB1dCwgb3B0aW9ucykge1xuICAvLyBKdXN0IHJldHVybiBpZiBhbiBhbHJlYWR5LWNvbXBpbGVkIEFTVCB3YXMgcGFzc2VkIGluLlxuICBpZiAoaW5wdXQudHlwZSA9PT0gJ1Byb2dyYW0nKSB7IHJldHVybiBpbnB1dDsgfVxuXG4gIHBhcnNlci55eSA9IHl5O1xuXG4gIC8vIEFsdGVyaW5nIHRoZSBzaGFyZWQgb2JqZWN0IGhlcmUsIGJ1dCB0aGlzIGlzIG9rIGFzIHBhcnNlciBpcyBhIHN5bmMgb3BlcmF0aW9uXG4gIHl5LmxvY0luZm8gPSBmdW5jdGlvbihsb2NJbmZvKSB7XG4gICAgcmV0dXJuIG5ldyB5eS5Tb3VyY2VMb2NhdGlvbihvcHRpb25zICYmIG9wdGlvbnMuc3JjTmFtZSwgbG9jSW5mbyk7XG4gIH07XG5cbiAgbGV0IHN0cmlwID0gbmV3IFdoaXRlc3BhY2VDb250cm9sKG9wdGlvbnMpO1xuICByZXR1cm4gc3RyaXAuYWNjZXB0KHBhcnNlci5wYXJzZShpbnB1dCkpO1xufVxuIl19
