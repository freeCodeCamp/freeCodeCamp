/*istanbul ignore start*/
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diffLines = diffLines;
exports.diffTrimmedLines = diffTrimmedLines;
exports.lineDiff = void 0;

/*istanbul ignore end*/
var
/*istanbul ignore start*/
_base = _interopRequireDefault(require("./base"))
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_params = require("../util/params")
/*istanbul ignore end*/
;

/*istanbul ignore start*/ function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*istanbul ignore end*/
var lineDiff = new
/*istanbul ignore start*/
_base
/*istanbul ignore end*/
[
/*istanbul ignore start*/
"default"
/*istanbul ignore end*/
]();

/*istanbul ignore start*/
exports.lineDiff = lineDiff;

/*istanbul ignore end*/
lineDiff.tokenize = function (value) {
  if (this.options.stripTrailingCr) {
    // remove one \r before \n to match GNU diff's --strip-trailing-cr behavior
    value = value.replace(/\r\n/g, '\n');
  }

  var retLines = [],
      linesAndNewlines = value.split(/(\n|\r\n)/); // Ignore the final empty token that occurs if the string ends with a new line

  if (!linesAndNewlines[linesAndNewlines.length - 1]) {
    linesAndNewlines.pop();
  } // Merge the content and line separators into single tokens


  for (var i = 0; i < linesAndNewlines.length; i++) {
    var line = linesAndNewlines[i];

    if (i % 2 && !this.options.newlineIsToken) {
      retLines[retLines.length - 1] += line;
    } else {
      if (this.options.ignoreWhitespace) {
        line = line.trim();
      }

      retLines.push(line);
    }
  }

  return retLines;
};

function diffLines(oldStr, newStr, callback) {
  return lineDiff.diff(oldStr, newStr, callback);
}

function diffTrimmedLines(oldStr, newStr, callback) {
  var options =
  /*istanbul ignore start*/
  (0,
  /*istanbul ignore end*/

  /*istanbul ignore start*/
  _params
  /*istanbul ignore end*/
  .
  /*istanbul ignore start*/
  generateOptions)
  /*istanbul ignore end*/
  (callback, {
    ignoreWhitespace: true
  });
  return lineDiff.diff(oldStr, newStr, options);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2xpbmUuanMiXSwibmFtZXMiOlsibGluZURpZmYiLCJEaWZmIiwidG9rZW5pemUiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJzdHJpcFRyYWlsaW5nQ3IiLCJyZXBsYWNlIiwicmV0TGluZXMiLCJsaW5lc0FuZE5ld2xpbmVzIiwic3BsaXQiLCJsZW5ndGgiLCJwb3AiLCJpIiwibGluZSIsIm5ld2xpbmVJc1Rva2VuIiwiaWdub3JlV2hpdGVzcGFjZSIsInRyaW0iLCJwdXNoIiwiZGlmZkxpbmVzIiwib2xkU3RyIiwibmV3U3RyIiwiY2FsbGJhY2siLCJkaWZmIiwiZGlmZlRyaW1tZWRMaW5lcyIsImdlbmVyYXRlT3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBRU8sSUFBTUEsUUFBUSxHQUFHO0FBQUlDO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBLENBQUosRUFBakI7Ozs7OztBQUNQRCxRQUFRLENBQUNFLFFBQVQsR0FBb0IsVUFBU0MsS0FBVCxFQUFnQjtBQUNsQyxNQUFHLEtBQUtDLE9BQUwsQ0FBYUMsZUFBaEIsRUFBaUM7QUFDL0I7QUFDQUYsSUFBQUEsS0FBSyxHQUFHQSxLQUFLLENBQUNHLE9BQU4sQ0FBYyxPQUFkLEVBQXVCLElBQXZCLENBQVI7QUFDRDs7QUFFRCxNQUFJQyxRQUFRLEdBQUcsRUFBZjtBQUFBLE1BQ0lDLGdCQUFnQixHQUFHTCxLQUFLLENBQUNNLEtBQU4sQ0FBWSxXQUFaLENBRHZCLENBTmtDLENBU2xDOztBQUNBLE1BQUksQ0FBQ0QsZ0JBQWdCLENBQUNBLGdCQUFnQixDQUFDRSxNQUFqQixHQUEwQixDQUEzQixDQUFyQixFQUFvRDtBQUNsREYsSUFBQUEsZ0JBQWdCLENBQUNHLEdBQWpCO0FBQ0QsR0FaaUMsQ0FjbEM7OztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0osZ0JBQWdCLENBQUNFLE1BQXJDLEVBQTZDRSxDQUFDLEVBQTlDLEVBQWtEO0FBQ2hELFFBQUlDLElBQUksR0FBR0wsZ0JBQWdCLENBQUNJLENBQUQsQ0FBM0I7O0FBRUEsUUFBSUEsQ0FBQyxHQUFHLENBQUosSUFBUyxDQUFDLEtBQUtSLE9BQUwsQ0FBYVUsY0FBM0IsRUFBMkM7QUFDekNQLE1BQUFBLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDRyxNQUFULEdBQWtCLENBQW5CLENBQVIsSUFBaUNHLElBQWpDO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsVUFBSSxLQUFLVCxPQUFMLENBQWFXLGdCQUFqQixFQUFtQztBQUNqQ0YsUUFBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUNHLElBQUwsRUFBUDtBQUNEOztBQUNEVCxNQUFBQSxRQUFRLENBQUNVLElBQVQsQ0FBY0osSUFBZDtBQUNEO0FBQ0Y7O0FBRUQsU0FBT04sUUFBUDtBQUNELENBN0JEOztBQStCTyxTQUFTVyxTQUFULENBQW1CQyxNQUFuQixFQUEyQkMsTUFBM0IsRUFBbUNDLFFBQW5DLEVBQTZDO0FBQUUsU0FBT3JCLFFBQVEsQ0FBQ3NCLElBQVQsQ0FBY0gsTUFBZCxFQUFzQkMsTUFBdEIsRUFBOEJDLFFBQTlCLENBQVA7QUFBaUQ7O0FBQ2hHLFNBQVNFLGdCQUFULENBQTBCSixNQUExQixFQUFrQ0MsTUFBbEMsRUFBMENDLFFBQTFDLEVBQW9EO0FBQ3pELE1BQUlqQixPQUFPO0FBQUc7QUFBQTtBQUFBOztBQUFBb0I7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQTtBQUFBLEdBQWdCSCxRQUFoQixFQUEwQjtBQUFDTixJQUFBQSxnQkFBZ0IsRUFBRTtBQUFuQixHQUExQixDQUFkO0FBQ0EsU0FBT2YsUUFBUSxDQUFDc0IsSUFBVCxDQUFjSCxNQUFkLEVBQXNCQyxNQUF0QixFQUE4QmhCLE9BQTlCLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWZmIGZyb20gJy4vYmFzZSc7XG5pbXBvcnQge2dlbmVyYXRlT3B0aW9uc30gZnJvbSAnLi4vdXRpbC9wYXJhbXMnO1xuXG5leHBvcnQgY29uc3QgbGluZURpZmYgPSBuZXcgRGlmZigpO1xubGluZURpZmYudG9rZW5pemUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBpZih0aGlzLm9wdGlvbnMuc3RyaXBUcmFpbGluZ0NyKSB7XG4gICAgLy8gcmVtb3ZlIG9uZSBcXHIgYmVmb3JlIFxcbiB0byBtYXRjaCBHTlUgZGlmZidzIC0tc3RyaXAtdHJhaWxpbmctY3IgYmVoYXZpb3JcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcclxcbi9nLCAnXFxuJyk7XG4gIH1cblxuICBsZXQgcmV0TGluZXMgPSBbXSxcbiAgICAgIGxpbmVzQW5kTmV3bGluZXMgPSB2YWx1ZS5zcGxpdCgvKFxcbnxcXHJcXG4pLyk7XG5cbiAgLy8gSWdub3JlIHRoZSBmaW5hbCBlbXB0eSB0b2tlbiB0aGF0IG9jY3VycyBpZiB0aGUgc3RyaW5nIGVuZHMgd2l0aCBhIG5ldyBsaW5lXG4gIGlmICghbGluZXNBbmROZXdsaW5lc1tsaW5lc0FuZE5ld2xpbmVzLmxlbmd0aCAtIDFdKSB7XG4gICAgbGluZXNBbmROZXdsaW5lcy5wb3AoKTtcbiAgfVxuXG4gIC8vIE1lcmdlIHRoZSBjb250ZW50IGFuZCBsaW5lIHNlcGFyYXRvcnMgaW50byBzaW5nbGUgdG9rZW5zXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXNBbmROZXdsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBsaW5lID0gbGluZXNBbmROZXdsaW5lc1tpXTtcblxuICAgIGlmIChpICUgMiAmJiAhdGhpcy5vcHRpb25zLm5ld2xpbmVJc1Rva2VuKSB7XG4gICAgICByZXRMaW5lc1tyZXRMaW5lcy5sZW5ndGggLSAxXSArPSBsaW5lO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmlnbm9yZVdoaXRlc3BhY2UpIHtcbiAgICAgICAgbGluZSA9IGxpbmUudHJpbSgpO1xuICAgICAgfVxuICAgICAgcmV0TGluZXMucHVzaChsaW5lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmV0TGluZXM7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGlmZkxpbmVzKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjaykgeyByZXR1cm4gbGluZURpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spOyB9XG5leHBvcnQgZnVuY3Rpb24gZGlmZlRyaW1tZWRMaW5lcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHtcbiAgbGV0IG9wdGlvbnMgPSBnZW5lcmF0ZU9wdGlvbnMoY2FsbGJhY2ssIHtpZ25vcmVXaGl0ZXNwYWNlOiB0cnVlfSk7XG4gIHJldHVybiBsaW5lRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbn1cbiJdfQ==
