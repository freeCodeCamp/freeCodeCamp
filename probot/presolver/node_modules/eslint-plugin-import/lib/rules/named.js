'use strict';

var _path = require('path');

var path = _interopRequireWildcard(_path);

var _ExportMap = require('../ExportMap');

var _ExportMap2 = _interopRequireDefault(_ExportMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = {
  meta: {
    docs: {}
  },

  create: function (context) {
    function checkSpecifiers(key, type, node) {
      if (node.source == null) return; // local export, ignore

      if (!node.specifiers.some(function (im) {
        return im.type === type;
      })) {
        return; // no named imports/exports
      }

      const imports = _ExportMap2.default.get(node.source.value, context);
      if (imports == null) return;

      if (imports.errors.length) {
        imports.reportErrors(context, node);
        return;
      }

      node.specifiers.forEach(function (im) {
        if (im.type !== type) return;

        const deepLookup = imports.hasDeep(im[key].name);

        if (!deepLookup.found) {
          if (deepLookup.path.length > 1) {
            const deepPath = deepLookup.path.map(i => path.relative(path.dirname(context.getFilename()), i.path)).join(' -> ');

            context.report(im[key], `${ im[key].name } not found via ${ deepPath }`);
          } else {
            context.report(im[key], im[key].name + ' not found in \'' + node.source.value + '\'');
          }
        }
      });
    }

    return {
      'ImportDeclaration': checkSpecifiers.bind(null, 'imported', 'ImportSpecifier'),

      'ExportNamedDeclaration': checkSpecifiers.bind(null, 'local', 'ExportSpecifier')
    };
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL25hbWVkLmpzIl0sIm5hbWVzIjpbInBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIiwibWV0YSIsImRvY3MiLCJjcmVhdGUiLCJjb250ZXh0IiwiY2hlY2tTcGVjaWZpZXJzIiwia2V5IiwidHlwZSIsIm5vZGUiLCJzb3VyY2UiLCJzcGVjaWZpZXJzIiwic29tZSIsImltIiwiaW1wb3J0cyIsImdldCIsInZhbHVlIiwiZXJyb3JzIiwibGVuZ3RoIiwicmVwb3J0RXJyb3JzIiwiZm9yRWFjaCIsImRlZXBMb29rdXAiLCJoYXNEZWVwIiwibmFtZSIsImZvdW5kIiwiZGVlcFBhdGgiLCJtYXAiLCJpIiwicmVsYXRpdmUiLCJkaXJuYW1lIiwiZ2V0RmlsZW5hbWUiLCJqb2luIiwicmVwb3J0IiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7SUFBWUEsSTs7QUFDWjs7Ozs7Ozs7QUFFQUMsT0FBT0MsT0FBUCxHQUFpQjtBQUNmQyxRQUFNO0FBQ0pDLFVBQU07QUFERixHQURTOztBQUtmQyxVQUFRLFVBQVVDLE9BQVYsRUFBbUI7QUFDekIsYUFBU0MsZUFBVCxDQUF5QkMsR0FBekIsRUFBOEJDLElBQTlCLEVBQW9DQyxJQUFwQyxFQUEwQztBQUN4QyxVQUFJQSxLQUFLQyxNQUFMLElBQWUsSUFBbkIsRUFBeUIsT0FEZSxDQUNSOztBQUVoQyxVQUFJLENBQUNELEtBQUtFLFVBQUwsQ0FDRUMsSUFERixDQUNPLFVBQVVDLEVBQVYsRUFBYztBQUFFLGVBQU9BLEdBQUdMLElBQUgsS0FBWUEsSUFBbkI7QUFBeUIsT0FEaEQsQ0FBTCxFQUN3RDtBQUN0RCxlQURzRCxDQUMvQztBQUNSOztBQUVELFlBQU1NLFVBQVUsb0JBQVFDLEdBQVIsQ0FBWU4sS0FBS0MsTUFBTCxDQUFZTSxLQUF4QixFQUErQlgsT0FBL0IsQ0FBaEI7QUFDQSxVQUFJUyxXQUFXLElBQWYsRUFBcUI7O0FBRXJCLFVBQUlBLFFBQVFHLE1BQVIsQ0FBZUMsTUFBbkIsRUFBMkI7QUFDekJKLGdCQUFRSyxZQUFSLENBQXFCZCxPQUFyQixFQUE4QkksSUFBOUI7QUFDQTtBQUNEOztBQUVEQSxXQUFLRSxVQUFMLENBQWdCUyxPQUFoQixDQUF3QixVQUFVUCxFQUFWLEVBQWM7QUFDcEMsWUFBSUEsR0FBR0wsSUFBSCxLQUFZQSxJQUFoQixFQUFzQjs7QUFFdEIsY0FBTWEsYUFBYVAsUUFBUVEsT0FBUixDQUFnQlQsR0FBR04sR0FBSCxFQUFRZ0IsSUFBeEIsQ0FBbkI7O0FBRUEsWUFBSSxDQUFDRixXQUFXRyxLQUFoQixFQUF1QjtBQUNyQixjQUFJSCxXQUFXdEIsSUFBWCxDQUFnQm1CLE1BQWhCLEdBQXlCLENBQTdCLEVBQWdDO0FBQzlCLGtCQUFNTyxXQUFXSixXQUFXdEIsSUFBWCxDQUNkMkIsR0FEYyxDQUNWQyxLQUFLNUIsS0FBSzZCLFFBQUwsQ0FBYzdCLEtBQUs4QixPQUFMLENBQWF4QixRQUFReUIsV0FBUixFQUFiLENBQWQsRUFBbURILEVBQUU1QixJQUFyRCxDQURLLEVBRWRnQyxJQUZjLENBRVQsTUFGUyxDQUFqQjs7QUFJQTFCLG9CQUFRMkIsTUFBUixDQUFlbkIsR0FBR04sR0FBSCxDQUFmLEVBQ0csSUFBRU0sR0FBR04sR0FBSCxFQUFRZ0IsSUFBSyxvQkFBaUJFLFFBQVMsR0FENUM7QUFFRCxXQVBELE1BT087QUFDTHBCLG9CQUFRMkIsTUFBUixDQUFlbkIsR0FBR04sR0FBSCxDQUFmLEVBQ0VNLEdBQUdOLEdBQUgsRUFBUWdCLElBQVIsR0FBZSxrQkFBZixHQUFvQ2QsS0FBS0MsTUFBTCxDQUFZTSxLQUFoRCxHQUF3RCxJQUQxRDtBQUVEO0FBQ0Y7QUFDRixPQWxCRDtBQW1CRDs7QUFFRCxXQUFPO0FBQ0wsMkJBQXFCVixnQkFBZ0IyQixJQUFoQixDQUFzQixJQUF0QixFQUNzQixVQUR0QixFQUVzQixpQkFGdEIsQ0FEaEI7O0FBTUwsZ0NBQTBCM0IsZ0JBQWdCMkIsSUFBaEIsQ0FBc0IsSUFBdEIsRUFDc0IsT0FEdEIsRUFFc0IsaUJBRnRCO0FBTnJCLEtBQVA7QUFZRDtBQXZEYyxDQUFqQiIsImZpbGUiOiJydWxlcy9uYW1lZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBFeHBvcnRzIGZyb20gJy4uL0V4cG9ydE1hcCdcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1ldGE6IHtcbiAgICBkb2NzOiB7fSxcbiAgfSxcblxuICBjcmVhdGU6IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgZnVuY3Rpb24gY2hlY2tTcGVjaWZpZXJzKGtleSwgdHlwZSwgbm9kZSkge1xuICAgICAgaWYgKG5vZGUuc291cmNlID09IG51bGwpIHJldHVybiAvLyBsb2NhbCBleHBvcnQsIGlnbm9yZVxuXG4gICAgICBpZiAoIW5vZGUuc3BlY2lmaWVyc1xuICAgICAgICAgICAgLnNvbWUoZnVuY3Rpb24gKGltKSB7IHJldHVybiBpbS50eXBlID09PSB0eXBlIH0pKSB7XG4gICAgICAgIHJldHVybiAvLyBubyBuYW1lZCBpbXBvcnRzL2V4cG9ydHNcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW1wb3J0cyA9IEV4cG9ydHMuZ2V0KG5vZGUuc291cmNlLnZhbHVlLCBjb250ZXh0KVxuICAgICAgaWYgKGltcG9ydHMgPT0gbnVsbCkgcmV0dXJuXG5cbiAgICAgIGlmIChpbXBvcnRzLmVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgaW1wb3J0cy5yZXBvcnRFcnJvcnMoY29udGV4dCwgbm9kZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIG5vZGUuc3BlY2lmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChpbSkge1xuICAgICAgICBpZiAoaW0udHlwZSAhPT0gdHlwZSkgcmV0dXJuXG5cbiAgICAgICAgY29uc3QgZGVlcExvb2t1cCA9IGltcG9ydHMuaGFzRGVlcChpbVtrZXldLm5hbWUpXG5cbiAgICAgICAgaWYgKCFkZWVwTG9va3VwLmZvdW5kKSB7XG4gICAgICAgICAgaWYgKGRlZXBMb29rdXAucGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjb25zdCBkZWVwUGF0aCA9IGRlZXBMb29rdXAucGF0aFxuICAgICAgICAgICAgICAubWFwKGkgPT4gcGF0aC5yZWxhdGl2ZShwYXRoLmRpcm5hbWUoY29udGV4dC5nZXRGaWxlbmFtZSgpKSwgaS5wYXRoKSlcbiAgICAgICAgICAgICAgLmpvaW4oJyAtPiAnKVxuXG4gICAgICAgICAgICBjb250ZXh0LnJlcG9ydChpbVtrZXldLFxuICAgICAgICAgICAgICBgJHtpbVtrZXldLm5hbWV9IG5vdCBmb3VuZCB2aWEgJHtkZWVwUGF0aH1gKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZXh0LnJlcG9ydChpbVtrZXldLFxuICAgICAgICAgICAgICBpbVtrZXldLm5hbWUgKyAnIG5vdCBmb3VuZCBpbiBcXCcnICsgbm9kZS5zb3VyY2UudmFsdWUgKyAnXFwnJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICdJbXBvcnREZWNsYXJhdGlvbic6IGNoZWNrU3BlY2lmaWVycy5iaW5kKCBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICwgJ2ltcG9ydGVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsICdJbXBvcnRTcGVjaWZpZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG5cbiAgICAgICdFeHBvcnROYW1lZERlY2xhcmF0aW9uJzogY2hlY2tTcGVjaWZpZXJzLmJpbmQoIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsICdsb2NhbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAsICdFeHBvcnRTcGVjaWZpZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICB9XG5cbiAgfSxcbn1cbiJdfQ==