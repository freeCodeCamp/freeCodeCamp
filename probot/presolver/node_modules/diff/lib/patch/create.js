/*istanbul ignore start*/'use strict';

exports.__esModule = true;
exports. /*istanbul ignore end*/structuredPatch = structuredPatch;
/*istanbul ignore start*/exports. /*istanbul ignore end*/createTwoFilesPatch = createTwoFilesPatch;
/*istanbul ignore start*/exports. /*istanbul ignore end*/createPatch = createPatch;

var /*istanbul ignore start*/_line = require('../diff/line') /*istanbul ignore end*/;

/*istanbul ignore start*/function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*istanbul ignore end*/function structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
  if (!options) {
    options = {};
  }
  if (typeof options.context === 'undefined') {
    options.context = 4;
  }

  var diff = /*istanbul ignore start*/(0, _line.diffLines) /*istanbul ignore end*/(oldStr, newStr, options);
  diff.push({ value: '', lines: [] }); // Append an empty value to make cleanup easier

  function contextLines(lines) {
    return lines.map(function (entry) {
      return ' ' + entry;
    });
  }

  var hunks = [];
  var oldRangeStart = 0,
      newRangeStart = 0,
      curRange = [],
      oldLine = 1,
      newLine = 1;

  /*istanbul ignore start*/var _loop = function _loop( /*istanbul ignore end*/i) {
    var current = diff[i],
        lines = current.lines || current.value.replace(/\n$/, '').split('\n');
    current.lines = lines;

    if (current.added || current.removed) {
      /*istanbul ignore start*/var _curRange;

      /*istanbul ignore end*/ // If we have previous context, start with that
      if (!oldRangeStart) {
        var prev = diff[i - 1];
        oldRangeStart = oldLine;
        newRangeStart = newLine;

        if (prev) {
          curRange = options.context > 0 ? contextLines(prev.lines.slice(-options.context)) : [];
          oldRangeStart -= curRange.length;
          newRangeStart -= curRange.length;
        }
      }

      // Output our changes
      /*istanbul ignore start*/(_curRange = /*istanbul ignore end*/curRange).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_curRange /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/lines.map(function (entry) {
        return (current.added ? '+' : '-') + entry;
      })));

      // Track the updated file position
      if (current.added) {
        newLine += lines.length;
      } else {
        oldLine += lines.length;
      }
    } else {
      // Identical context lines. Track line changes
      if (oldRangeStart) {
        // Close out any changes that have been output (or join overlapping)
        if (lines.length <= options.context * 2 && i < diff.length - 2) {
          /*istanbul ignore start*/var _curRange2;

          /*istanbul ignore end*/ // Overlapping
          /*istanbul ignore start*/(_curRange2 = /*istanbul ignore end*/curRange).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_curRange2 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/contextLines(lines)));
        } else {
          /*istanbul ignore start*/var _curRange3;

          /*istanbul ignore end*/ // end the range and output
          var contextSize = Math.min(lines.length, options.context);
          /*istanbul ignore start*/(_curRange3 = /*istanbul ignore end*/curRange).push. /*istanbul ignore start*/apply /*istanbul ignore end*/( /*istanbul ignore start*/_curRange3 /*istanbul ignore end*/, /*istanbul ignore start*/_toConsumableArray( /*istanbul ignore end*/contextLines(lines.slice(0, contextSize))));

          var hunk = {
            oldStart: oldRangeStart,
            oldLines: oldLine - oldRangeStart + contextSize,
            newStart: newRangeStart,
            newLines: newLine - newRangeStart + contextSize,
            lines: curRange
          };
          if (i >= diff.length - 2 && lines.length <= options.context) {
            // EOF is inside this hunk
            var oldEOFNewline = /\n$/.test(oldStr);
            var newEOFNewline = /\n$/.test(newStr);
            if (lines.length == 0 && !oldEOFNewline) {
              // special case: old has no eol and no trailing context; no-nl can end up before adds
              curRange.splice(hunk.oldLines, 0, '\\ No newline at end of file');
            } else if (!oldEOFNewline || !newEOFNewline) {
              curRange.push('\\ No newline at end of file');
            }
          }
          hunks.push(hunk);

          oldRangeStart = 0;
          newRangeStart = 0;
          curRange = [];
        }
      }
      oldLine += lines.length;
      newLine += lines.length;
    }
  };

  for (var i = 0; i < diff.length; i++) {
    /*istanbul ignore start*/_loop( /*istanbul ignore end*/i);
  }

  return {
    oldFileName: oldFileName, newFileName: newFileName,
    oldHeader: oldHeader, newHeader: newHeader,
    hunks: hunks
  };
}

function createTwoFilesPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
  var diff = structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options);

  var ret = [];
  if (oldFileName == newFileName) {
    ret.push('Index: ' + oldFileName);
  }
  ret.push('===================================================================');
  ret.push('--- ' + diff.oldFileName + (typeof diff.oldHeader === 'undefined' ? '' : '\t' + diff.oldHeader));
  ret.push('+++ ' + diff.newFileName + (typeof diff.newHeader === 'undefined' ? '' : '\t' + diff.newHeader));

  for (var i = 0; i < diff.hunks.length; i++) {
    var hunk = diff.hunks[i];
    ret.push('@@ -' + hunk.oldStart + ',' + hunk.oldLines + ' +' + hunk.newStart + ',' + hunk.newLines + ' @@');
    ret.push.apply(ret, hunk.lines);
  }

  return ret.join('\n') + '\n';
}

function createPatch(fileName, oldStr, newStr, oldHeader, newHeader, options) {
  return createTwoFilesPatch(fileName, fileName, oldStr, newStr, oldHeader, newHeader, options);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9jcmVhdGUuanMiXSwibmFtZXMiOlsic3RydWN0dXJlZFBhdGNoIiwiY3JlYXRlVHdvRmlsZXNQYXRjaCIsImNyZWF0ZVBhdGNoIiwib2xkRmlsZU5hbWUiLCJuZXdGaWxlTmFtZSIsIm9sZFN0ciIsIm5ld1N0ciIsIm9sZEhlYWRlciIsIm5ld0hlYWRlciIsIm9wdGlvbnMiLCJjb250ZXh0IiwiZGlmZiIsInB1c2giLCJ2YWx1ZSIsImxpbmVzIiwiY29udGV4dExpbmVzIiwibWFwIiwiZW50cnkiLCJodW5rcyIsIm9sZFJhbmdlU3RhcnQiLCJuZXdSYW5nZVN0YXJ0IiwiY3VyUmFuZ2UiLCJvbGRMaW5lIiwibmV3TGluZSIsImkiLCJjdXJyZW50IiwicmVwbGFjZSIsInNwbGl0IiwiYWRkZWQiLCJyZW1vdmVkIiwicHJldiIsInNsaWNlIiwibGVuZ3RoIiwiY29udGV4dFNpemUiLCJNYXRoIiwibWluIiwiaHVuayIsIm9sZFN0YXJ0Iiwib2xkTGluZXMiLCJuZXdTdGFydCIsIm5ld0xpbmVzIiwib2xkRU9GTmV3bGluZSIsInRlc3QiLCJuZXdFT0ZOZXdsaW5lIiwic3BsaWNlIiwicmV0IiwiYXBwbHkiLCJqb2luIiwiZmlsZU5hbWUiXSwibWFwcGluZ3MiOiI7OztnQ0FFZ0JBLGUsR0FBQUEsZTt5REFpR0FDLG1CLEdBQUFBLG1CO3lEQXdCQUMsVyxHQUFBQSxXOztBQTNIaEI7Ozs7dUJBRU8sU0FBU0YsZUFBVCxDQUF5QkcsV0FBekIsRUFBc0NDLFdBQXRDLEVBQW1EQyxNQUFuRCxFQUEyREMsTUFBM0QsRUFBbUVDLFNBQW5FLEVBQThFQyxTQUE5RSxFQUF5RkMsT0FBekYsRUFBa0c7QUFDdkcsTUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWkEsY0FBVSxFQUFWO0FBQ0Q7QUFDRCxNQUFJLE9BQU9BLFFBQVFDLE9BQWYsS0FBMkIsV0FBL0IsRUFBNEM7QUFDMUNELFlBQVFDLE9BQVIsR0FBa0IsQ0FBbEI7QUFDRDs7QUFFRCxN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QUEvQyxFQUEwREMsU0FBMUQsRUFBcUVDLE9BQXJFLEVBQThFO0FBQ25GLFNBQU9SLG9CQUFvQitDLFFBQXBCLEVBQThCQSxRQUE5QixFQUF3QzNDLE1BQXhDLEVBQWdEQyxNQUFoRCxFQUF3REMsU0FBeEQsRUFBbUVDLFNBQW5FLEVBQThFQyxPQUE5RSxDQUFQO0FBQ0QiLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkaWZmTGluZXN9IGZyb20gJy4uL2RpZmYvbGluZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJ1Y3R1cmVkUGF0Y2gob2xkRmlsZU5hbWUsIG5ld0ZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5jb250ZXh0ID09PSAndW5kZWZpbmVkJykge1xuICAgIG9wdGlvbnMuY29udGV4dCA9IDQ7XG4gIH1cblxuICBjb25zdCBkaWZmID0gZGlmZkxpbmVzKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbiAgZGlmZi5wdXNoKHt2YWx1ZTogJycsIGxpbmVzOiBbXX0pOyAgIC8vIEFwcGVuZCBhbiBlbXB0eSB2YWx1ZSB0byBtYWtlIGNsZWFudXAgZWFzaWVyXG5cbiAgZnVuY3Rpb24gY29udGV4dExpbmVzKGxpbmVzKSB7XG4gICAgcmV0dXJuIGxpbmVzLm1hcChmdW5jdGlvbihlbnRyeSkgeyByZXR1cm4gJyAnICsgZW50cnk7IH0pO1xuICB9XG5cbiAgbGV0IGh1bmtzID0gW107XG4gIGxldCBvbGRSYW5nZVN0YXJ0ID0gMCwgbmV3UmFuZ2VTdGFydCA9IDAsIGN1clJhbmdlID0gW10sXG4gICAgICBvbGRMaW5lID0gMSwgbmV3TGluZSA9IDE7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZi5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBkaWZmW2ldLFxuICAgICAgICAgIGxpbmVzID0gY3VycmVudC5saW5lcyB8fCBjdXJyZW50LnZhbHVlLnJlcGxhY2UoL1xcbiQvLCAnJykuc3BsaXQoJ1xcbicpO1xuICAgIGN1cnJlbnQubGluZXMgPSBsaW5lcztcblxuICAgIGlmIChjdXJyZW50LmFkZGVkIHx8IGN1cnJlbnQucmVtb3ZlZCkge1xuICAgICAgLy8gSWYgd2UgaGF2ZSBwcmV2aW91cyBjb250ZXh0LCBzdGFydCB3aXRoIHRoYXRcbiAgICAgIGlmICghb2xkUmFuZ2VTdGFydCkge1xuICAgICAgICBjb25zdCBwcmV2ID0gZGlmZltpIC0gMV07XG4gICAgICAgIG9sZFJhbmdlU3RhcnQgPSBvbGRMaW5lO1xuICAgICAgICBuZXdSYW5nZVN0YXJ0ID0gbmV3TGluZTtcblxuICAgICAgICBpZiAocHJldikge1xuICAgICAgICAgIGN1clJhbmdlID0gb3B0aW9ucy5jb250ZXh0ID4gMCA/IGNvbnRleHRMaW5lcyhwcmV2LmxpbmVzLnNsaWNlKC1vcHRpb25zLmNvbnRleHQpKSA6IFtdO1xuICAgICAgICAgIG9sZFJhbmdlU3RhcnQgLT0gY3VyUmFuZ2UubGVuZ3RoO1xuICAgICAgICAgIG5ld1JhbmdlU3RhcnQgLT0gY3VyUmFuZ2UubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE91dHB1dCBvdXIgY2hhbmdlc1xuICAgICAgY3VyUmFuZ2UucHVzaCguLi4gbGluZXMubWFwKGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICAgIHJldHVybiAoY3VycmVudC5hZGRlZCA/ICcrJyA6ICctJykgKyBlbnRyeTtcbiAgICAgIH0pKTtcblxuICAgICAgLy8gVHJhY2sgdGhlIHVwZGF0ZWQgZmlsZSBwb3NpdGlvblxuICAgICAgaWYgKGN1cnJlbnQuYWRkZWQpIHtcbiAgICAgICAgbmV3TGluZSArPSBsaW5lcy5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbGRMaW5lICs9IGxpbmVzLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWRlbnRpY2FsIGNvbnRleHQgbGluZXMuIFRyYWNrIGxpbmUgY2hhbmdlc1xuICAgICAgaWYgKG9sZFJhbmdlU3RhcnQpIHtcbiAgICAgICAgLy8gQ2xvc2Ugb3V0IGFueSBjaGFuZ2VzIHRoYXQgaGF2ZSBiZWVuIG91dHB1dCAob3Igam9pbiBvdmVybGFwcGluZylcbiAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCA8PSBvcHRpb25zLmNvbnRleHQgKiAyICYmIGkgPCBkaWZmLmxlbmd0aCAtIDIpIHtcbiAgICAgICAgICAvLyBPdmVybGFwcGluZ1xuICAgICAgICAgIGN1clJhbmdlLnB1c2goLi4uIGNvbnRleHRMaW5lcyhsaW5lcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGVuZCB0aGUgcmFuZ2UgYW5kIG91dHB1dFxuICAgICAgICAgIGxldCBjb250ZXh0U2l6ZSA9IE1hdGgubWluKGxpbmVzLmxlbmd0aCwgb3B0aW9ucy5jb250ZXh0KTtcbiAgICAgICAgICBjdXJSYW5nZS5wdXNoKC4uLiBjb250ZXh0TGluZXMobGluZXMuc2xpY2UoMCwgY29udGV4dFNpemUpKSk7XG5cbiAgICAgICAgICBsZXQgaHVuayA9IHtcbiAgICAgICAgICAgIG9sZFN0YXJ0OiBvbGRSYW5nZVN0YXJ0LFxuICAgICAgICAgICAgb2xkTGluZXM6IChvbGRMaW5lIC0gb2xkUmFuZ2VTdGFydCArIGNvbnRleHRTaXplKSxcbiAgICAgICAgICAgIG5ld1N0YXJ0OiBuZXdSYW5nZVN0YXJ0LFxuICAgICAgICAgICAgbmV3TGluZXM6IChuZXdMaW5lIC0gbmV3UmFuZ2VTdGFydCArIGNvbnRleHRTaXplKSxcbiAgICAgICAgICAgIGxpbmVzOiBjdXJSYW5nZVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKGkgPj0gZGlmZi5sZW5ndGggLSAyICYmIGxpbmVzLmxlbmd0aCA8PSBvcHRpb25zLmNvbnRleHQpIHtcbiAgICAgICAgICAgIC8vIEVPRiBpcyBpbnNpZGUgdGhpcyBodW5rXG4gICAgICAgICAgICBsZXQgb2xkRU9GTmV3bGluZSA9ICgvXFxuJC8udGVzdChvbGRTdHIpKTtcbiAgICAgICAgICAgIGxldCBuZXdFT0ZOZXdsaW5lID0gKC9cXG4kLy50ZXN0KG5ld1N0cikpO1xuICAgICAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCA9PSAwICYmICFvbGRFT0ZOZXdsaW5lKSB7XG4gICAgICAgICAgICAgIC8vIHNwZWNpYWwgY2FzZTogb2xkIGhhcyBubyBlb2wgYW5kIG5vIHRyYWlsaW5nIGNvbnRleHQ7IG5vLW5sIGNhbiBlbmQgdXAgYmVmb3JlIGFkZHNcbiAgICAgICAgICAgICAgY3VyUmFuZ2Uuc3BsaWNlKGh1bmsub2xkTGluZXMsIDAsICdcXFxcIE5vIG5ld2xpbmUgYXQgZW5kIG9mIGZpbGUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIW9sZEVPRk5ld2xpbmUgfHwgIW5ld0VPRk5ld2xpbmUpIHtcbiAgICAgICAgICAgICAgY3VyUmFuZ2UucHVzaCgnXFxcXCBObyBuZXdsaW5lIGF0IGVuZCBvZiBmaWxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGh1bmtzLnB1c2goaHVuayk7XG5cbiAgICAgICAgICBvbGRSYW5nZVN0YXJ0ID0gMDtcbiAgICAgICAgICBuZXdSYW5nZVN0YXJ0ID0gMDtcbiAgICAgICAgICBjdXJSYW5nZSA9IFtdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBvbGRMaW5lICs9IGxpbmVzLmxlbmd0aDtcbiAgICAgIG5ld0xpbmUgKz0gbGluZXMubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb2xkRmlsZU5hbWU6IG9sZEZpbGVOYW1lLCBuZXdGaWxlTmFtZTogbmV3RmlsZU5hbWUsXG4gICAgb2xkSGVhZGVyOiBvbGRIZWFkZXIsIG5ld0hlYWRlcjogbmV3SGVhZGVyLFxuICAgIGh1bmtzOiBodW5rc1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHdvRmlsZXNQYXRjaChvbGRGaWxlTmFtZSwgbmV3RmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucykge1xuICBjb25zdCBkaWZmID0gc3RydWN0dXJlZFBhdGNoKG9sZEZpbGVOYW1lLCBuZXdGaWxlTmFtZSwgb2xkU3RyLCBuZXdTdHIsIG9sZEhlYWRlciwgbmV3SGVhZGVyLCBvcHRpb25zKTtcblxuICBjb25zdCByZXQgPSBbXTtcbiAgaWYgKG9sZEZpbGVOYW1lID09IG5ld0ZpbGVOYW1lKSB7XG4gICAgcmV0LnB1c2goJ0luZGV4OiAnICsgb2xkRmlsZU5hbWUpO1xuICB9XG4gIHJldC5wdXNoKCc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Jyk7XG4gIHJldC5wdXNoKCctLS0gJyArIGRpZmYub2xkRmlsZU5hbWUgKyAodHlwZW9mIGRpZmYub2xkSGVhZGVyID09PSAndW5kZWZpbmVkJyA/ICcnIDogJ1xcdCcgKyBkaWZmLm9sZEhlYWRlcikpO1xuICByZXQucHVzaCgnKysrICcgKyBkaWZmLm5ld0ZpbGVOYW1lICsgKHR5cGVvZiBkaWZmLm5ld0hlYWRlciA9PT0gJ3VuZGVmaW5lZCcgPyAnJyA6ICdcXHQnICsgZGlmZi5uZXdIZWFkZXIpKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZmYuaHVua3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBodW5rID0gZGlmZi5odW5rc1tpXTtcbiAgICByZXQucHVzaChcbiAgICAgICdAQCAtJyArIGh1bmsub2xkU3RhcnQgKyAnLCcgKyBodW5rLm9sZExpbmVzXG4gICAgICArICcgKycgKyBodW5rLm5ld1N0YXJ0ICsgJywnICsgaHVuay5uZXdMaW5lc1xuICAgICAgKyAnIEBAJ1xuICAgICk7XG4gICAgcmV0LnB1c2guYXBwbHkocmV0LCBodW5rLmxpbmVzKTtcbiAgfVxuXG4gIHJldHVybiByZXQuam9pbignXFxuJykgKyAnXFxuJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhdGNoKGZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGNyZWF0ZVR3b0ZpbGVzUGF0Y2goZmlsZU5hbWUsIGZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpO1xufVxuIl19
