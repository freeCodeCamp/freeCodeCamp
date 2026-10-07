/*istanbul ignore start*/
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reversePatch = reversePatch;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*istanbul ignore end*/
function reversePatch(structuredPatch) {
  if (Array.isArray(structuredPatch)) {
    return structuredPatch.map(reversePatch).reverse();
  }

  return (
    /*istanbul ignore start*/
    _objectSpread(_objectSpread({},
    /*istanbul ignore end*/
    structuredPatch), {}, {
      oldFileName: structuredPatch.newFileName,
      oldHeader: structuredPatch.newHeader,
      newFileName: structuredPatch.oldFileName,
      newHeader: structuredPatch.oldHeader,
      hunks: structuredPatch.hunks.map(function (hunk) {
        return {
          oldLines: hunk.newLines,
          oldStart: hunk.newStart,
          newLines: hunk.oldLines,
          newStart: hunk.oldStart,
          linedelimiters: hunk.linedelimiters,
          lines: hunk.lines.map(function (l) {
            if (l.startsWith('-')) {
              return (
                /*istanbul ignore start*/
                "+".concat(
                /*istanbul ignore end*/
                l.slice(1))
              );
            }

            if (l.startsWith('+')) {
              return (
                /*istanbul ignore start*/
                "-".concat(
                /*istanbul ignore end*/
                l.slice(1))
              );
            }

            return l;
          })
        };
      })
    })
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9yZXZlcnNlLmpzIl0sIm5hbWVzIjpbInJldmVyc2VQYXRjaCIsInN0cnVjdHVyZWRQYXRjaCIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsInJldmVyc2UiLCJvbGRGaWxlTmFtZSIsIm5ld0ZpbGVOYW1lIiwib2xkSGVhZGVyIiwibmV3SGVhZGVyIiwiaHVua3MiLCJodW5rIiwib2xkTGluZXMiLCJuZXdMaW5lcyIsIm9sZFN0YXJ0IiwibmV3U3RhcnQiLCJsaW5lZGVsaW1pdGVycyIsImxpbmVzIiwibCIsInN0YXJ0c1dpdGgiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sU0FBU0EsWUFBVCxDQUFzQkMsZUFBdEIsRUFBdUM7QUFDNUMsTUFBSUMsS0FBSyxDQUFDQyxPQUFOLENBQWNGLGVBQWQsQ0FBSixFQUFvQztBQUNsQyxXQUFPQSxlQUFlLENBQUNHLEdBQWhCLENBQW9CSixZQUFwQixFQUFrQ0ssT0FBbEMsRUFBUDtBQUNEOztBQUVEO0FBQUE7QUFBQTtBQUFBO0FBQ0tKLElBQUFBLGVBREw7QUFFRUssTUFBQUEsV0FBVyxFQUFFTCxlQUFlLENBQUNNLFdBRi9CO0FBR0VDLE1BQUFBLFNBQVMsRUFBRVAsZUFBZSxDQUFDUSxTQUg3QjtBQUlFRixNQUFBQSxXQUFXLEVBQUVOLGVBQWUsQ0FBQ0ssV0FKL0I7QUFLRUcsTUFBQUEsU0FBUyxFQUFFUixlQUFlLENBQUNPLFNBTDdCO0FBTUVFLE1BQUFBLEtBQUssRUFBRVQsZUFBZSxDQUFDUyxLQUFoQixDQUFzQk4sR0FBdEIsQ0FBMEIsVUFBQU8sSUFBSSxFQUFJO0FBQ3ZDLGVBQU87QUFDTEMsVUFBQUEsUUFBUSxFQUFFRCxJQUFJLENBQUNFLFFBRFY7QUFFTEMsVUFBQUEsUUFBUSxFQUFFSCxJQUFJLENBQUNJLFFBRlY7QUFHTEYsVUFBQUEsUUFBUSxFQUFFRixJQUFJLENBQUNDLFFBSFY7QUFJTEcsVUFBQUEsUUFBUSxFQUFFSixJQUFJLENBQUNHLFFBSlY7QUFLTEUsVUFBQUEsY0FBYyxFQUFFTCxJQUFJLENBQUNLLGNBTGhCO0FBTUxDLFVBQUFBLEtBQUssRUFBRU4sSUFBSSxDQUFDTSxLQUFMLENBQVdiLEdBQVgsQ0FBZSxVQUFBYyxDQUFDLEVBQUk7QUFDekIsZ0JBQUlBLENBQUMsQ0FBQ0MsVUFBRixDQUFhLEdBQWIsQ0FBSixFQUF1QjtBQUFFO0FBQUE7QUFBQTtBQUFBO0FBQVdELGdCQUFBQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxDQUFSLENBQVg7QUFBQTtBQUEwQjs7QUFDbkQsZ0JBQUlGLENBQUMsQ0FBQ0MsVUFBRixDQUFhLEdBQWIsQ0FBSixFQUF1QjtBQUFFO0FBQUE7QUFBQTtBQUFBO0FBQVdELGdCQUFBQSxDQUFDLENBQUNFLEtBQUYsQ0FBUSxDQUFSLENBQVg7QUFBQTtBQUEwQjs7QUFDbkQsbUJBQU9GLENBQVA7QUFDRCxXQUpNO0FBTkYsU0FBUDtBQVlELE9BYk07QUFOVDtBQUFBO0FBcUJEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHJldmVyc2VQYXRjaChzdHJ1Y3R1cmVkUGF0Y2gpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoc3RydWN0dXJlZFBhdGNoKSkge1xuICAgIHJldHVybiBzdHJ1Y3R1cmVkUGF0Y2gubWFwKHJldmVyc2VQYXRjaCkucmV2ZXJzZSgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdHJ1Y3R1cmVkUGF0Y2gsXG4gICAgb2xkRmlsZU5hbWU6IHN0cnVjdHVyZWRQYXRjaC5uZXdGaWxlTmFtZSxcbiAgICBvbGRIZWFkZXI6IHN0cnVjdHVyZWRQYXRjaC5uZXdIZWFkZXIsXG4gICAgbmV3RmlsZU5hbWU6IHN0cnVjdHVyZWRQYXRjaC5vbGRGaWxlTmFtZSxcbiAgICBuZXdIZWFkZXI6IHN0cnVjdHVyZWRQYXRjaC5vbGRIZWFkZXIsXG4gICAgaHVua3M6IHN0cnVjdHVyZWRQYXRjaC5odW5rcy5tYXAoaHVuayA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBvbGRMaW5lczogaHVuay5uZXdMaW5lcyxcbiAgICAgICAgb2xkU3RhcnQ6IGh1bmsubmV3U3RhcnQsXG4gICAgICAgIG5ld0xpbmVzOiBodW5rLm9sZExpbmVzLFxuICAgICAgICBuZXdTdGFydDogaHVuay5vbGRTdGFydCxcbiAgICAgICAgbGluZWRlbGltaXRlcnM6IGh1bmsubGluZWRlbGltaXRlcnMsXG4gICAgICAgIGxpbmVzOiBodW5rLmxpbmVzLm1hcChsID0+IHtcbiAgICAgICAgICBpZiAobC5zdGFydHNXaXRoKCctJykpIHsgcmV0dXJuIGArJHtsLnNsaWNlKDEpfWA7IH1cbiAgICAgICAgICBpZiAobC5zdGFydHNXaXRoKCcrJykpIHsgcmV0dXJuIGAtJHtsLnNsaWNlKDEpfWA7IH1cbiAgICAgICAgICByZXR1cm4gbDtcbiAgICAgICAgfSlcbiAgICAgIH07XG4gICAgfSlcbiAgfTtcbn1cbiJdfQ==
