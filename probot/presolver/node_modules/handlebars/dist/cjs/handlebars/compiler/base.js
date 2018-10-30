'use strict';

exports.__esModule = true;
exports.parse = parse;
// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _parser = require('./parser');

var _parser2 = _interopRequireDefault(_parser);

var _whitespaceControl = require('./whitespace-control');

var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);

var _helpers = require('./helpers');

var Helpers = _interopRequireWildcard(_helpers);

var _utils = require('../utils');

exports.parser = _parser2['default'];

var yy = {};
_utils.extend(yy, Helpers);

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

  var strip = new _whitespaceControl2['default'](options);
  return strip.accept(_parser2['default'].parse(input));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2NvbXBpbGVyL2Jhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O3NCQUFtQixVQUFVOzs7O2lDQUNDLHNCQUFzQjs7Ozt1QkFDM0IsV0FBVzs7SUFBeEIsT0FBTzs7cUJBQ0ksVUFBVTs7UUFFeEIsTUFBTTs7QUFFZixJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDWixjQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFYixTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFOztBQUVwQyxNQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO0FBQUUsV0FBTyxLQUFLLENBQUM7R0FBRTs7QUFFL0Msc0JBQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQzs7O0FBR2YsSUFBRSxDQUFDLE9BQU8sR0FBRyxVQUFTLE9BQU8sRUFBRTtBQUM3QixXQUFPLElBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztHQUNuRSxDQUFDOztBQUVGLE1BQUksS0FBSyxHQUFHLG1DQUFzQixPQUFPLENBQUMsQ0FBQztBQUMzQyxTQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsb0JBQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Q0FDMUMiLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXJzZXIgZnJvbSAnLi9wYXJzZXInO1xuaW1wb3J0IFdoaXRlc3BhY2VDb250cm9sIGZyb20gJy4vd2hpdGVzcGFjZS1jb250cm9sJztcbmltcG9ydCAqIGFzIEhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IHsgcGFyc2VyIH07XG5cbmxldCB5eSA9IHt9O1xuZXh0ZW5kKHl5LCBIZWxwZXJzKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKGlucHV0LCBvcHRpb25zKSB7XG4gIC8vIEp1c3QgcmV0dXJuIGlmIGFuIGFscmVhZHktY29tcGlsZWQgQVNUIHdhcyBwYXNzZWQgaW4uXG4gIGlmIChpbnB1dC50eXBlID09PSAnUHJvZ3JhbScpIHsgcmV0dXJuIGlucHV0OyB9XG5cbiAgcGFyc2VyLnl5ID0geXk7XG5cbiAgLy8gQWx0ZXJpbmcgdGhlIHNoYXJlZCBvYmplY3QgaGVyZSwgYnV0IHRoaXMgaXMgb2sgYXMgcGFyc2VyIGlzIGEgc3luYyBvcGVyYXRpb25cbiAgeXkubG9jSW5mbyA9IGZ1bmN0aW9uKGxvY0luZm8pIHtcbiAgICByZXR1cm4gbmV3IHl5LlNvdXJjZUxvY2F0aW9uKG9wdGlvbnMgJiYgb3B0aW9ucy5zcmNOYW1lLCBsb2NJbmZvKTtcbiAgfTtcblxuICBsZXQgc3RyaXAgPSBuZXcgV2hpdGVzcGFjZUNvbnRyb2wob3B0aW9ucyk7XG4gIHJldHVybiBzdHJpcC5hY2NlcHQocGFyc2VyLnBhcnNlKGlucHV0KSk7XG59XG4iXX0=
