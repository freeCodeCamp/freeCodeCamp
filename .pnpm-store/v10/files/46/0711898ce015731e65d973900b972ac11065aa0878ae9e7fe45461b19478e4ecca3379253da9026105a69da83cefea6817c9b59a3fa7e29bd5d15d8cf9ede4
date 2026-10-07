'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * strips indentation from a template literal
 * @param  {String} type = 'initial' - whether to remove all indentation or just leading indentation. can be 'all' or 'initial'
 * @return {Object}                  - a TemplateTag transformer
 */
var stripIndentTransformer = function stripIndentTransformer() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'initial';
  return {
    onEndResult: function onEndResult(endResult) {
      if (type === 'initial') {
        // remove the shortest leading indentation from each line
        var match = endResult.match(/^[^\S\n]*(?=\S)/gm);
        var indent = match && Math.min.apply(Math, _toConsumableArray(match.map(function (el) {
          return el.length;
        })));
        if (indent) {
          var regexp = new RegExp('^.{' + indent + '}', 'gm');
          return endResult.replace(regexp, '');
        }
        return endResult;
      }
      if (type === 'all') {
        // remove all indentation from each line
        return endResult.replace(/^[^\S\n]+/gm, '');
      }
      throw new Error('Unknown type: ' + type);
    }
  };
};

exports.default = stripIndentTransformer;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJpcEluZGVudFRyYW5zZm9ybWVyL3N0cmlwSW5kZW50VHJhbnNmb3JtZXIuanMiXSwibmFtZXMiOlsic3RyaXBJbmRlbnRUcmFuc2Zvcm1lciIsInR5cGUiLCJvbkVuZFJlc3VsdCIsImVuZFJlc3VsdCIsIm1hdGNoIiwiaW5kZW50IiwiTWF0aCIsIm1pbiIsIm1hcCIsImVsIiwibGVuZ3RoIiwicmVnZXhwIiwiUmVnRXhwIiwicmVwbGFjZSIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7OztBQUtBLElBQU1BLHlCQUF5QixTQUF6QkEsc0JBQXlCO0FBQUEsTUFBQ0MsSUFBRCx1RUFBUSxTQUFSO0FBQUEsU0FBdUI7QUFDcERDLGVBRG9ELHVCQUN4Q0MsU0FEd0MsRUFDN0I7QUFDckIsVUFBSUYsU0FBUyxTQUFiLEVBQXdCO0FBQ3RCO0FBQ0EsWUFBTUcsUUFBUUQsVUFBVUMsS0FBVixDQUFnQixtQkFBaEIsQ0FBZDtBQUNBLFlBQU1DLFNBQVNELFNBQVNFLEtBQUtDLEdBQUwsZ0NBQVlILE1BQU1JLEdBQU4sQ0FBVTtBQUFBLGlCQUFNQyxHQUFHQyxNQUFUO0FBQUEsU0FBVixDQUFaLEVBQXhCO0FBQ0EsWUFBSUwsTUFBSixFQUFZO0FBQ1YsY0FBTU0sU0FBUyxJQUFJQyxNQUFKLFNBQWlCUCxNQUFqQixRQUE0QixJQUE1QixDQUFmO0FBQ0EsaUJBQU9GLFVBQVVVLE9BQVYsQ0FBa0JGLE1BQWxCLEVBQTBCLEVBQTFCLENBQVA7QUFDRDtBQUNELGVBQU9SLFNBQVA7QUFDRDtBQUNELFVBQUlGLFNBQVMsS0FBYixFQUFvQjtBQUNsQjtBQUNBLGVBQU9FLFVBQVVVLE9BQVYsQ0FBa0IsYUFBbEIsRUFBaUMsRUFBakMsQ0FBUDtBQUNEO0FBQ0QsWUFBTSxJQUFJQyxLQUFKLG9CQUEyQmIsSUFBM0IsQ0FBTjtBQUNEO0FBakJtRCxHQUF2QjtBQUFBLENBQS9COztrQkFvQmVELHNCIiwiZmlsZSI6InN0cmlwSW5kZW50VHJhbnNmb3JtZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIHN0cmlwcyBpbmRlbnRhdGlvbiBmcm9tIGEgdGVtcGxhdGUgbGl0ZXJhbFxuICogQHBhcmFtICB7U3RyaW5nfSB0eXBlID0gJ2luaXRpYWwnIC0gd2hldGhlciB0byByZW1vdmUgYWxsIGluZGVudGF0aW9uIG9yIGp1c3QgbGVhZGluZyBpbmRlbnRhdGlvbi4gY2FuIGJlICdhbGwnIG9yICdpbml0aWFsJ1xuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgICAgICAgIC0gYSBUZW1wbGF0ZVRhZyB0cmFuc2Zvcm1lclxuICovXG5jb25zdCBzdHJpcEluZGVudFRyYW5zZm9ybWVyID0gKHR5cGUgPSAnaW5pdGlhbCcpID0+ICh7XG4gIG9uRW5kUmVzdWx0KGVuZFJlc3VsdCkge1xuICAgIGlmICh0eXBlID09PSAnaW5pdGlhbCcpIHtcbiAgICAgIC8vIHJlbW92ZSB0aGUgc2hvcnRlc3QgbGVhZGluZyBpbmRlbnRhdGlvbiBmcm9tIGVhY2ggbGluZVxuICAgICAgY29uc3QgbWF0Y2ggPSBlbmRSZXN1bHQubWF0Y2goL15bXlxcU1xcbl0qKD89XFxTKS9nbSk7XG4gICAgICBjb25zdCBpbmRlbnQgPSBtYXRjaCAmJiBNYXRoLm1pbiguLi5tYXRjaC5tYXAoZWwgPT4gZWwubGVuZ3RoKSk7XG4gICAgICBpZiAoaW5kZW50KSB7XG4gICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoYF4ueyR7aW5kZW50fX1gLCAnZ20nKTtcbiAgICAgICAgcmV0dXJuIGVuZFJlc3VsdC5yZXBsYWNlKHJlZ2V4cCwgJycpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVuZFJlc3VsdDtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdhbGwnKSB7XG4gICAgICAvLyByZW1vdmUgYWxsIGluZGVudGF0aW9uIGZyb20gZWFjaCBsaW5lXG4gICAgICByZXR1cm4gZW5kUmVzdWx0LnJlcGxhY2UoL15bXlxcU1xcbl0rL2dtLCAnJyk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biB0eXBlOiAke3R5cGV9YCk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcjtcbiJdfQ==