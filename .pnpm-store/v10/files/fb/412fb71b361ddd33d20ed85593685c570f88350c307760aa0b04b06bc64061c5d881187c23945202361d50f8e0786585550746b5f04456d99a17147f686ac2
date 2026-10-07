/*istanbul ignore start*/
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcLineCount = calcLineCount;
exports.merge = merge;

/*istanbul ignore end*/
var
/*istanbul ignore start*/
_create = require("./create")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_parse = require("./parse")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_array = require("../util/array")
/*istanbul ignore end*/
;

/*istanbul ignore start*/ function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*istanbul ignore end*/
function calcLineCount(hunk) {
  /*istanbul ignore start*/
  var _calcOldNewLineCount =
  /*istanbul ignore end*/
  calcOldNewLineCount(hunk.lines),
      oldLines = _calcOldNewLineCount.oldLines,
      newLines = _calcOldNewLineCount.newLines;

  if (oldLines !== undefined) {
    hunk.oldLines = oldLines;
  } else {
    delete hunk.oldLines;
  }

  if (newLines !== undefined) {
    hunk.newLines = newLines;
  } else {
    delete hunk.newLines;
  }
}

function merge(mine, theirs, base) {
  mine = loadPatch(mine, base);
  theirs = loadPatch(theirs, base);
  var ret = {}; // For index we just let it pass through as it doesn't have any necessary meaning.
  // Leaving sanity checks on this to the API consumer that may know more about the
  // meaning in their own context.

  if (mine.index || theirs.index) {
    ret.index = mine.index || theirs.index;
  }

  if (mine.newFileName || theirs.newFileName) {
    if (!fileNameChanged(mine)) {
      // No header or no change in ours, use theirs (and ours if theirs does not exist)
      ret.oldFileName = theirs.oldFileName || mine.oldFileName;
      ret.newFileName = theirs.newFileName || mine.newFileName;
      ret.oldHeader = theirs.oldHeader || mine.oldHeader;
      ret.newHeader = theirs.newHeader || mine.newHeader;
    } else if (!fileNameChanged(theirs)) {
      // No header or no change in theirs, use ours
      ret.oldFileName = mine.oldFileName;
      ret.newFileName = mine.newFileName;
      ret.oldHeader = mine.oldHeader;
      ret.newHeader = mine.newHeader;
    } else {
      // Both changed... figure it out
      ret.oldFileName = selectField(ret, mine.oldFileName, theirs.oldFileName);
      ret.newFileName = selectField(ret, mine.newFileName, theirs.newFileName);
      ret.oldHeader = selectField(ret, mine.oldHeader, theirs.oldHeader);
      ret.newHeader = selectField(ret, mine.newHeader, theirs.newHeader);
    }
  }

  ret.hunks = [];
  var mineIndex = 0,
      theirsIndex = 0,
      mineOffset = 0,
      theirsOffset = 0;

  while (mineIndex < mine.hunks.length || theirsIndex < theirs.hunks.length) {
    var mineCurrent = mine.hunks[mineIndex] || {
      oldStart: Infinity
    },
        theirsCurrent = theirs.hunks[theirsIndex] || {
      oldStart: Infinity
    };

    if (hunkBefore(mineCurrent, theirsCurrent)) {
      // This patch does not overlap with any of the others, yay.
      ret.hunks.push(cloneHunk(mineCurrent, mineOffset));
      mineIndex++;
      theirsOffset += mineCurrent.newLines - mineCurrent.oldLines;
    } else if (hunkBefore(theirsCurrent, mineCurrent)) {
      // This patch does not overlap with any of the others, yay.
      ret.hunks.push(cloneHunk(theirsCurrent, theirsOffset));
      theirsIndex++;
      mineOffset += theirsCurrent.newLines - theirsCurrent.oldLines;
    } else {
      // Overlap, merge as best we can
      var mergedHunk = {
        oldStart: Math.min(mineCurrent.oldStart, theirsCurrent.oldStart),
        oldLines: 0,
        newStart: Math.min(mineCurrent.newStart + mineOffset, theirsCurrent.oldStart + theirsOffset),
        newLines: 0,
        lines: []
      };
      mergeLines(mergedHunk, mineCurrent.oldStart, mineCurrent.lines, theirsCurrent.oldStart, theirsCurrent.lines);
      theirsIndex++;
      mineIndex++;
      ret.hunks.push(mergedHunk);
    }
  }

  return ret;
}

function loadPatch(param, base) {
  if (typeof param === 'string') {
    if (/^@@/m.test(param) || /^Index:/m.test(param)) {
      return (
        /*istanbul ignore start*/
        (0,
        /*istanbul ignore end*/

        /*istanbul ignore start*/
        _parse
        /*istanbul ignore end*/
        .
        /*istanbul ignore start*/
        parsePatch)
        /*istanbul ignore end*/
        (param)[0]
      );
    }

    if (!base) {
      throw new Error('Must provide a base reference or pass in a patch');
    }

    return (
      /*istanbul ignore start*/
      (0,
      /*istanbul ignore end*/

      /*istanbul ignore start*/
      _create
      /*istanbul ignore end*/
      .
      /*istanbul ignore start*/
      structuredPatch)
      /*istanbul ignore end*/
      (undefined, undefined, base, param)
    );
  }

  return param;
}

function fileNameChanged(patch) {
  return patch.newFileName && patch.newFileName !== patch.oldFileName;
}

function selectField(index, mine, theirs) {
  if (mine === theirs) {
    return mine;
  } else {
    index.conflict = true;
    return {
      mine: mine,
      theirs: theirs
    };
  }
}

function hunkBefore(test, check) {
  return test.oldStart < check.oldStart && test.oldStart + test.oldLines < check.oldStart;
}

function cloneHunk(hunk, offset) {
  return {
    oldStart: hunk.oldStart,
    oldLines: hunk.oldLines,
    newStart: hunk.newStart + offset,
    newLines: hunk.newLines,
    lines: hunk.lines
  };
}

function mergeLines(hunk, mineOffset, mineLines, theirOffset, theirLines) {
  // This will generally result in a conflicted hunk, but there are cases where the context
  // is the only overlap where we can successfully merge the content here.
  var mine = {
    offset: mineOffset,
    lines: mineLines,
    index: 0
  },
      their = {
    offset: theirOffset,
    lines: theirLines,
    index: 0
  }; // Handle any leading content

  insertLeading(hunk, mine, their);
  insertLeading(hunk, their, mine); // Now in the overlap content. Scan through and select the best changes from each.

  while (mine.index < mine.lines.length && their.index < their.lines.length) {
    var mineCurrent = mine.lines[mine.index],
        theirCurrent = their.lines[their.index];

    if ((mineCurrent[0] === '-' || mineCurrent[0] === '+') && (theirCurrent[0] === '-' || theirCurrent[0] === '+')) {
      // Both modified ...
      mutualChange(hunk, mine, their);
    } else if (mineCurrent[0] === '+' && theirCurrent[0] === ' ') {
      /*istanbul ignore start*/
      var _hunk$lines;

      /*istanbul ignore end*/
      // Mine inserted

      /*istanbul ignore start*/

      /*istanbul ignore end*/

      /*istanbul ignore start*/
      (_hunk$lines =
      /*istanbul ignore end*/
      hunk.lines).push.apply(
      /*istanbul ignore start*/
      _hunk$lines
      /*istanbul ignore end*/
      ,
      /*istanbul ignore start*/
      _toConsumableArray(
      /*istanbul ignore end*/
      collectChange(mine)));
    } else if (theirCurrent[0] === '+' && mineCurrent[0] === ' ') {
      /*istanbul ignore start*/
      var _hunk$lines2;

      /*istanbul ignore end*/
      // Theirs inserted

      /*istanbul ignore start*/

      /*istanbul ignore end*/

      /*istanbul ignore start*/
      (_hunk$lines2 =
      /*istanbul ignore end*/
      hunk.lines).push.apply(
      /*istanbul ignore start*/
      _hunk$lines2
      /*istanbul ignore end*/
      ,
      /*istanbul ignore start*/
      _toConsumableArray(
      /*istanbul ignore end*/
      collectChange(their)));
    } else if (mineCurrent[0] === '-' && theirCurrent[0] === ' ') {
      // Mine removed or edited
      removal(hunk, mine, their);
    } else if (theirCurrent[0] === '-' && mineCurrent[0] === ' ') {
      // Their removed or edited
      removal(hunk, their, mine, true);
    } else if (mineCurrent === theirCurrent) {
      // Context identity
      hunk.lines.push(mineCurrent);
      mine.index++;
      their.index++;
    } else {
      // Context mismatch
      conflict(hunk, collectChange(mine), collectChange(their));
    }
  } // Now push anything that may be remaining


  insertTrailing(hunk, mine);
  insertTrailing(hunk, their);
  calcLineCount(hunk);
}

function mutualChange(hunk, mine, their) {
  var myChanges = collectChange(mine),
      theirChanges = collectChange(their);

  if (allRemoves(myChanges) && allRemoves(theirChanges)) {
    // Special case for remove changes that are supersets of one another
    if (
    /*istanbul ignore start*/
    (0,
    /*istanbul ignore end*/

    /*istanbul ignore start*/
    _array
    /*istanbul ignore end*/
    .
    /*istanbul ignore start*/
    arrayStartsWith)
    /*istanbul ignore end*/
    (myChanges, theirChanges) && skipRemoveSuperset(their, myChanges, myChanges.length - theirChanges.length)) {
      /*istanbul ignore start*/
      var _hunk$lines3;

      /*istanbul ignore end*/

      /*istanbul ignore start*/

      /*istanbul ignore end*/

      /*istanbul ignore start*/
      (_hunk$lines3 =
      /*istanbul ignore end*/
      hunk.lines).push.apply(
      /*istanbul ignore start*/
      _hunk$lines3
      /*istanbul ignore end*/
      ,
      /*istanbul ignore start*/
      _toConsumableArray(
      /*istanbul ignore end*/
      myChanges));

      return;
    } else if (
    /*istanbul ignore start*/
    (0,
    /*istanbul ignore end*/

    /*istanbul ignore start*/
    _array
    /*istanbul ignore end*/
    .
    /*istanbul ignore start*/
    arrayStartsWith)
    /*istanbul ignore end*/
    (theirChanges, myChanges) && skipRemoveSuperset(mine, theirChanges, theirChanges.length - myChanges.length)) {
      /*istanbul ignore start*/
      var _hunk$lines4;

      /*istanbul ignore end*/

      /*istanbul ignore start*/

      /*istanbul ignore end*/

      /*istanbul ignore start*/
      (_hunk$lines4 =
      /*istanbul ignore end*/
      hunk.lines).push.apply(
      /*istanbul ignore start*/
      _hunk$lines4
      /*istanbul ignore end*/
      ,
      /*istanbul ignore start*/
      _toConsumableArray(
      /*istanbul ignore end*/
      theirChanges));

      return;
    }
  } else if (
  /*istanbul ignore start*/
  (0,
  /*istanbul ignore end*/

  /*istanbul ignore start*/
  _array
  /*istanbul ignore end*/
  .
  /*istanbul ignore start*/
  arrayEqual)
  /*istanbul ignore end*/
  (myChanges, theirChanges)) {
    /*istanbul ignore start*/
    var _hunk$lines5;

    /*istanbul ignore end*/

    /*istanbul ignore start*/

    /*istanbul ignore end*/

    /*istanbul ignore start*/
    (_hunk$lines5 =
    /*istanbul ignore end*/
    hunk.lines).push.apply(
    /*istanbul ignore start*/
    _hunk$lines5
    /*istanbul ignore end*/
    ,
    /*istanbul ignore start*/
    _toConsumableArray(
    /*istanbul ignore end*/
    myChanges));

    return;
  }

  conflict(hunk, myChanges, theirChanges);
}

function removal(hunk, mine, their, swap) {
  var myChanges = collectChange(mine),
      theirChanges = collectContext(their, myChanges);

  if (theirChanges.merged) {
    /*istanbul ignore start*/
    var _hunk$lines6;

    /*istanbul ignore end*/

    /*istanbul ignore start*/

    /*istanbul ignore end*/

    /*istanbul ignore start*/
    (_hunk$lines6 =
    /*istanbul ignore end*/
    hunk.lines).push.apply(
    /*istanbul ignore start*/
    _hunk$lines6
    /*istanbul ignore end*/
    ,
    /*istanbul ignore start*/
    _toConsumableArray(
    /*istanbul ignore end*/
    theirChanges.merged));
  } else {
    conflict(hunk, swap ? theirChanges : myChanges, swap ? myChanges : theirChanges);
  }
}

function conflict(hunk, mine, their) {
  hunk.conflict = true;
  hunk.lines.push({
    conflict: true,
    mine: mine,
    theirs: their
  });
}

function insertLeading(hunk, insert, their) {
  while (insert.offset < their.offset && insert.index < insert.lines.length) {
    var line = insert.lines[insert.index++];
    hunk.lines.push(line);
    insert.offset++;
  }
}

function insertTrailing(hunk, insert) {
  while (insert.index < insert.lines.length) {
    var line = insert.lines[insert.index++];
    hunk.lines.push(line);
  }
}

function collectChange(state) {
  var ret = [],
      operation = state.lines[state.index][0];

  while (state.index < state.lines.length) {
    var line = state.lines[state.index]; // Group additions that are immediately after subtractions and treat them as one "atomic" modify change.

    if (operation === '-' && line[0] === '+') {
      operation = '+';
    }

    if (operation === line[0]) {
      ret.push(line);
      state.index++;
    } else {
      break;
    }
  }

  return ret;
}

function collectContext(state, matchChanges) {
  var changes = [],
      merged = [],
      matchIndex = 0,
      contextChanges = false,
      conflicted = false;

  while (matchIndex < matchChanges.length && state.index < state.lines.length) {
    var change = state.lines[state.index],
        match = matchChanges[matchIndex]; // Once we've hit our add, then we are done

    if (match[0] === '+') {
      break;
    }

    contextChanges = contextChanges || change[0] !== ' ';
    merged.push(match);
    matchIndex++; // Consume any additions in the other block as a conflict to attempt
    // to pull in the remaining context after this

    if (change[0] === '+') {
      conflicted = true;

      while (change[0] === '+') {
        changes.push(change);
        change = state.lines[++state.index];
      }
    }

    if (match.substr(1) === change.substr(1)) {
      changes.push(change);
      state.index++;
    } else {
      conflicted = true;
    }
  }

  if ((matchChanges[matchIndex] || '')[0] === '+' && contextChanges) {
    conflicted = true;
  }

  if (conflicted) {
    return changes;
  }

  while (matchIndex < matchChanges.length) {
    merged.push(matchChanges[matchIndex++]);
  }

  return {
    merged: merged,
    changes: changes
  };
}

function allRemoves(changes) {
  return changes.reduce(function (prev, change) {
    return prev && change[0] === '-';
  }, true);
}

function skipRemoveSuperset(state, removeChanges, delta) {
  for (var i = 0; i < delta; i++) {
    var changeContent = removeChanges[removeChanges.length - delta + i].substr(1);

    if (state.lines[state.index + i] !== ' ' + changeContent) {
      return false;
    }
  }

  state.index += delta;
  return true;
}

function calcOldNewLineCount(lines) {
  var oldLines = 0;
  var newLines = 0;
  lines.forEach(function (line) {
    if (typeof line !== 'string') {
      var myCount = calcOldNewLineCount(line.mine);
      var theirCount = calcOldNewLineCount(line.theirs);

      if (oldLines !== undefined) {
        if (myCount.oldLines === theirCount.oldLines) {
          oldLines += myCount.oldLines;
        } else {
          oldLines = undefined;
        }
      }

      if (newLines !== undefined) {
        if (myCount.newLines === theirCount.newLines) {
          newLines += myCount.newLines;
        } else {
          newLines = undefined;
        }
      }
    } else {
      if (newLines !== undefined && (line[0] === '+' || line[0] === ' ')) {
        newLines++;
      }

      if (oldLines !== undefined && (line[0] === '-' || line[0] === ' ')) {
        oldLines++;
      }
    }
  });
  return {
    oldLines: oldLines,
    newLines: newLines
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9tZXJnZS5qcyJdLCJuYW1lcyI6WyJjYWxjTGluZUNvdW50IiwiaHVuayIsImNhbGNPbGROZXdMaW5lQ291bnQiLCJsaW5lcyIsIm9sZExpbmVzIiwibmV3TGluZXMiLCJ1bmRlZmluZWQiLCJtZXJnZSIsIm1pbmUiLCJ0aGVpcnMiLCJiYXNlIiwibG9hZFBhdGNoIiwicmV0IiwiaW5kZXgiLCJuZXdGaWxlTmFtZSIsImZpbGVOYW1lQ2hhbmdlZCIsIm9sZEZpbGVOYW1lIiwib2xkSGVhZGVyIiwibmV3SGVhZGVyIiwic2VsZWN0RmllbGQiLCJodW5rcyIsIm1pbmVJbmRleCIsInRoZWlyc0luZGV4IiwibWluZU9mZnNldCIsInRoZWlyc09mZnNldCIsImxlbmd0aCIsIm1pbmVDdXJyZW50Iiwib2xkU3RhcnQiLCJJbmZpbml0eSIsInRoZWlyc0N1cnJlbnQiLCJodW5rQmVmb3JlIiwicHVzaCIsImNsb25lSHVuayIsIm1lcmdlZEh1bmsiLCJNYXRoIiwibWluIiwibmV3U3RhcnQiLCJtZXJnZUxpbmVzIiwicGFyYW0iLCJ0ZXN0IiwicGFyc2VQYXRjaCIsIkVycm9yIiwic3RydWN0dXJlZFBhdGNoIiwicGF0Y2giLCJjb25mbGljdCIsImNoZWNrIiwib2Zmc2V0IiwibWluZUxpbmVzIiwidGhlaXJPZmZzZXQiLCJ0aGVpckxpbmVzIiwidGhlaXIiLCJpbnNlcnRMZWFkaW5nIiwidGhlaXJDdXJyZW50IiwibXV0dWFsQ2hhbmdlIiwiY29sbGVjdENoYW5nZSIsInJlbW92YWwiLCJpbnNlcnRUcmFpbGluZyIsIm15Q2hhbmdlcyIsInRoZWlyQ2hhbmdlcyIsImFsbFJlbW92ZXMiLCJhcnJheVN0YXJ0c1dpdGgiLCJza2lwUmVtb3ZlU3VwZXJzZXQiLCJhcnJheUVxdWFsIiwic3dhcCIsImNvbGxlY3RDb250ZXh0IiwibWVyZ2VkIiwiaW5zZXJ0IiwibGluZSIsInN0YXRlIiwib3BlcmF0aW9uIiwibWF0Y2hDaGFuZ2VzIiwiY2hhbmdlcyIsIm1hdGNoSW5kZXgiLCJjb250ZXh0Q2hhbmdlcyIsImNvbmZsaWN0ZWQiLCJjaGFuZ2UiLCJtYXRjaCIsInN1YnN0ciIsInJlZHVjZSIsInByZXYiLCJyZW1vdmVDaGFuZ2VzIiwiZGVsdGEiLCJpIiwiY2hhbmdlQ29udGVudCIsImZvckVhY2giLCJteUNvdW50IiwidGhlaXJDb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUFFTyxTQUFTQSxhQUFULENBQXVCQyxJQUF2QixFQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUNMQyxFQUFBQSxtQkFBbUIsQ0FBQ0QsSUFBSSxDQUFDRSxLQUFOLENBRGQ7QUFBQSxNQUMzQkMsUUFEMkIsd0JBQzNCQSxRQUQyQjtBQUFBLE1BQ2pCQyxRQURpQix3QkFDakJBLFFBRGlCOztBQUdsQyxNQUFJRCxRQUFRLEtBQUtFLFNBQWpCLEVBQTRCO0FBQzFCTCxJQUFBQSxJQUFJLENBQUNHLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBT0gsSUFBSSxDQUFDRyxRQUFaO0FBQ0Q7O0FBRUQsTUFBSUMsUUFBUSxLQUFLQyxTQUFqQixFQUE0QjtBQUMxQkwsSUFBQUEsSUFBSSxDQUFDSSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNELEdBRkQsTUFFTztBQUNMLFdBQU9KLElBQUksQ0FBQ0ksUUFBWjtBQUNEO0FBQ0Y7O0FBRU0sU0FBU0UsS0FBVCxDQUFlQyxJQUFmLEVBQXFCQyxNQUFyQixFQUE2QkMsSUFBN0IsRUFBbUM7QUFDeENGLEVBQUFBLElBQUksR0FBR0csU0FBUyxDQUFDSCxJQUFELEVBQU9FLElBQVAsQ0FBaEI7QUFDQUQsRUFBQUEsTUFBTSxHQUFHRSxTQUFTLENBQUNGLE1BQUQsRUFBU0MsSUFBVCxDQUFsQjtBQUVBLE1BQUlFLEdBQUcsR0FBRyxFQUFWLENBSndD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QUFKLEVBQW9FO0FBQ2xFL0QsUUFBQUEsUUFBUTtBQUNUO0FBQ0Y7QUFDRixHQTVCRDtBQThCQSxTQUFPO0FBQUNBLElBQUFBLFFBQVEsRUFBUkEsUUFBRDtBQUFXQyxJQUFBQSxRQUFRLEVBQVJBO0FBQVgsR0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzdHJ1Y3R1cmVkUGF0Y2h9IGZyb20gJy4vY3JlYXRlJztcbmltcG9ydCB7cGFyc2VQYXRjaH0gZnJvbSAnLi9wYXJzZSc7XG5cbmltcG9ydCB7YXJyYXlFcXVhbCwgYXJyYXlTdGFydHNXaXRofSBmcm9tICcuLi91dGlsL2FycmF5JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGNMaW5lQ291bnQoaHVuaykge1xuICBjb25zdCB7b2xkTGluZXMsIG5ld0xpbmVzfSA9IGNhbGNPbGROZXdMaW5lQ291bnQoaHVuay5saW5lcyk7XG5cbiAgaWYgKG9sZExpbmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICBodW5rLm9sZExpbmVzID0gb2xkTGluZXM7XG4gIH0gZWxzZSB7XG4gICAgZGVsZXRlIGh1bmsub2xkTGluZXM7XG4gIH1cblxuICBpZiAobmV3TGluZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGh1bmsubmV3TGluZXMgPSBuZXdMaW5lcztcbiAgfSBlbHNlIHtcbiAgICBkZWxldGUgaHVuay5uZXdMaW5lcztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UobWluZSwgdGhlaXJzLCBiYXNlKSB7XG4gIG1pbmUgPSBsb2FkUGF0Y2gobWluZSwgYmFzZSk7XG4gIHRoZWlycyA9IGxvYWRQYXRjaCh0aGVpcnMsIGJhc2UpO1xuXG4gIGxldCByZXQgPSB7fTtcblxuICAvLyBGb3IgaW5kZXggd2UganVzdCBsZXQgaXQgcGFzcyB0aHJvdWdoIGFzIGl0IGRvZXNuJ3QgaGF2ZSBhbnkgbmVjZXNzYXJ5IG1lYW5pbmcuXG4gIC8vIExlYXZpbmcgc2FuaXR5IGNoZWNrcyBvbiB0aGlzIHRvIHRoZSBBUEkgY29uc3VtZXIgdGhhdCBtYXkga25vdyBtb3JlIGFib3V0IHRoZVxuICAvLyBtZWFuaW5nIGluIHRoZWlyIG93biBjb250ZXh0LlxuICBpZiAobWluZS5pbmRleCB8fCB0aGVpcnMuaW5kZXgpIHtcbiAgICByZXQuaW5kZXggPSBtaW5lLmluZGV4IHx8IHRoZWlycy5pbmRleDtcbiAgfVxuXG4gIGlmIChtaW5lLm5ld0ZpbGVOYW1lIHx8IHRoZWlycy5uZXdGaWxlTmFtZSkge1xuICAgIGlmICghZmlsZU5hbWVDaGFuZ2VkKG1pbmUpKSB7XG4gICAgICAvLyBObyBoZWFkZXIgb3Igbm8gY2hhbmdlIGluIG91cnMsIHVzZSB0aGVpcnMgKGFuZCBvdXJzIGlmIHRoZWlycyBkb2VzIG5vdCBleGlzdClcbiAgICAgIHJldC5vbGRGaWxlTmFtZSA9IHRoZWlycy5vbGRGaWxlTmFtZSB8fCBtaW5lLm9sZEZpbGVOYW1lO1xuICAgICAgcmV0Lm5ld0ZpbGVOYW1lID0gdGhlaXJzLm5ld0ZpbGVOYW1lIHx8IG1pbmUubmV3RmlsZU5hbWU7XG4gICAgICByZXQub2xkSGVhZGVyID0gdGhlaXJzLm9sZEhlYWRlciB8fCBtaW5lLm9sZEhlYWRlcjtcbiAgICAgIHJldC5uZXdIZWFkZXIgPSB0aGVpcnMubmV3SGVhZGVyIHx8IG1pbmUubmV3SGVhZGVyO1xuICAgIH0gZWxzZSBpZiAoIWZpbGVOYW1lQ2hhbmdlZCh0aGVpcnMpKSB7XG4gICAgICAvLyBObyBoZWFkZXIgb3Igbm8gY2hhbmdlIGluIHRoZWlycywgdXNlIG91cnNcbiAgICAgIHJldC5vbGRGaWxlTmFtZSA9IG1pbmUub2xkRmlsZU5hbWU7XG4gICAgICByZXQubmV3RmlsZU5hbWUgPSBtaW5lLm5ld0ZpbGVOYW1lO1xuICAgICAgcmV0Lm9sZEhlYWRlciA9IG1pbmUub2xkSGVhZGVyO1xuICAgICAgcmV0Lm5ld0hlYWRlciA9IG1pbmUubmV3SGVhZGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBCb3RoIGNoYW5nZWQuLi4gZmlndXJlIGl0IG91dFxuICAgICAgcmV0Lm9sZEZpbGVOYW1lID0gc2VsZWN0RmllbGQocmV0LCBtaW5lLm9sZEZpbGVOYW1lLCB0aGVpcnMub2xkRmlsZU5hbWUpO1xuICAgICAgcmV0Lm5ld0ZpbGVOYW1lID0gc2VsZWN0RmllbGQocmV0LCBtaW5lLm5ld0ZpbGVOYW1lLCB0aGVpcnMubmV3RmlsZU5hbWUpO1xuICAgICAgcmV0Lm9sZEhlYWRlciA9IHNlbGVjdEZpZWxkKHJldCwgbWluZS5vbGRIZWFkZXIsIHRoZWlycy5vbGRIZWFkZXIpO1xuICAgICAgcmV0Lm5ld0hlYWRlciA9IHNlbGVjdEZpZWxkKHJldCwgbWluZS5uZXdIZWFkZXIsIHRoZWlycy5uZXdIZWFkZXIpO1xuICAgIH1cbiAgfVxuXG4gIHJldC5odW5rcyA9IFtdO1xuXG4gIGxldCBtaW5lSW5kZXggPSAwLFxuICAgICAgdGhlaXJzSW5kZXggPSAwLFxuICAgICAgbWluZU9mZnNldCA9IDAsXG4gICAgICB0aGVpcnNPZmZzZXQgPSAwO1xuXG4gIHdoaWxlIChtaW5lSW5kZXggPCBtaW5lLmh1bmtzLmxlbmd0aCB8fCB0aGVpcnNJbmRleCA8IHRoZWlycy5odW5rcy5sZW5ndGgpIHtcbiAgICBsZXQgbWluZUN1cnJlbnQgPSBtaW5lLmh1bmtzW21pbmVJbmRleF0gfHwge29sZFN0YXJ0OiBJbmZpbml0eX0sXG4gICAgICAgIHRoZWlyc0N1cnJlbnQgPSB0aGVpcnMuaHVua3NbdGhlaXJzSW5kZXhdIHx8IHtvbGRTdGFydDogSW5maW5pdHl9O1xuXG4gICAgaWYgKGh1bmtCZWZvcmUobWluZUN1cnJlbnQsIHRoZWlyc0N1cnJlbnQpKSB7XG4gICAgICAvLyBUaGlzIHBhdGNoIGRvZXMgbm90IG92ZXJsYXAgd2l0aCBhbnkgb2YgdGhlIG90aGVycywgeWF5LlxuICAgICAgcmV0Lmh1bmtzLnB1c2goY2xvbmVIdW5rKG1pbmVDdXJyZW50LCBtaW5lT2Zmc2V0KSk7XG4gICAgICBtaW5lSW5kZXgrKztcbiAgICAgIHRoZWlyc09mZnNldCArPSBtaW5lQ3VycmVudC5uZXdMaW5lcyAtIG1pbmVDdXJyZW50Lm9sZExpbmVzO1xuICAgIH0gZWxzZSBpZiAoaHVua0JlZm9yZSh0aGVpcnNDdXJyZW50LCBtaW5lQ3VycmVudCkpIHtcbiAgICAgIC8vIFRoaXMgcGF0Y2ggZG9lcyBub3Qgb3ZlcmxhcCB3aXRoIGFueSBvZiB0aGUgb3RoZXJzLCB5YXkuXG4gICAgICByZXQuaHVua3MucHVzaChjbG9uZUh1bmsodGhlaXJzQ3VycmVudCwgdGhlaXJzT2Zmc2V0KSk7XG4gICAgICB0aGVpcnNJbmRleCsrO1xuICAgICAgbWluZU9mZnNldCArPSB0aGVpcnNDdXJyZW50Lm5ld0xpbmVzIC0gdGhlaXJzQ3VycmVudC5vbGRMaW5lcztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT3ZlcmxhcCwgbWVyZ2UgYXMgYmVzdCB3ZSBjYW5cbiAgICAgIGxldCBtZXJnZWRIdW5rID0ge1xuICAgICAgICBvbGRTdGFydDogTWF0aC5taW4obWluZUN1cnJlbnQub2xkU3RhcnQsIHRoZWlyc0N1cnJlbnQub2xkU3RhcnQpLFxuICAgICAgICBvbGRMaW5lczogMCxcbiAgICAgICAgbmV3U3RhcnQ6IE1hdGgubWluKG1pbmVDdXJyZW50Lm5ld1N0YXJ0ICsgbWluZU9mZnNldCwgdGhlaXJzQ3VycmVudC5vbGRTdGFydCArIHRoZWlyc09mZnNldCksXG4gICAgICAgIG5ld0xpbmVzOiAwLFxuICAgICAgICBsaW5lczogW11cbiAgICAgIH07XG4gICAgICBtZXJnZUxpbmVzKG1lcmdlZEh1bmssIG1pbmVDdXJyZW50Lm9sZFN0YXJ0LCBtaW5lQ3VycmVudC5saW5lcywgdGhlaXJzQ3VycmVudC5vbGRTdGFydCwgdGhlaXJzQ3VycmVudC5saW5lcyk7XG4gICAgICB0aGVpcnNJbmRleCsrO1xuICAgICAgbWluZUluZGV4Kys7XG5cbiAgICAgIHJldC5odW5rcy5wdXNoKG1lcmdlZEh1bmspO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGxvYWRQYXRjaChwYXJhbSwgYmFzZSkge1xuICBpZiAodHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJykge1xuICAgIGlmICgoL15AQC9tKS50ZXN0KHBhcmFtKSB8fCAoKC9eSW5kZXg6L20pLnRlc3QocGFyYW0pKSkge1xuICAgICAgcmV0dXJuIHBhcnNlUGF0Y2gocGFyYW0pWzBdO1xuICAgIH1cblxuICAgIGlmICghYmFzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IHByb3ZpZGUgYSBiYXNlIHJlZmVyZW5jZSBvciBwYXNzIGluIGEgcGF0Y2gnKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cnVjdHVyZWRQYXRjaCh1bmRlZmluZWQsIHVuZGVmaW5lZCwgYmFzZSwgcGFyYW0pO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtO1xufVxuXG5mdW5jdGlvbiBmaWxlTmFtZUNoYW5nZWQocGF0Y2gpIHtcbiAgcmV0dXJuIHBhdGNoLm5ld0ZpbGVOYW1lICYmIHBhdGNoLm5ld0ZpbGVOYW1lICE9PSBwYXRjaC5vbGRGaWxlTmFtZTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0RmllbGQoaW5kZXgsIG1pbmUsIHRoZWlycykge1xuICBpZiAobWluZSA9PT0gdGhlaXJzKSB7XG4gICAgcmV0dXJuIG1pbmU7XG4gIH0gZWxzZSB7XG4gICAgaW5kZXguY29uZmxpY3QgPSB0cnVlO1xuICAgIHJldHVybiB7bWluZSwgdGhlaXJzfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBodW5rQmVmb3JlKHRlc3QsIGNoZWNrKSB7XG4gIHJldHVybiB0ZXN0Lm9sZFN0YXJ0IDwgY2hlY2sub2xkU3RhcnRcbiAgICAmJiAodGVzdC5vbGRTdGFydCArIHRlc3Qub2xkTGluZXMpIDwgY2hlY2sub2xkU3RhcnQ7XG59XG5cbmZ1bmN0aW9uIGNsb25lSHVuayhodW5rLCBvZmZzZXQpIHtcbiAgcmV0dXJuIHtcbiAgICBvbGRTdGFydDogaHVuay5vbGRTdGFydCwgb2xkTGluZXM6IGh1bmsub2xkTGluZXMsXG4gICAgbmV3U3RhcnQ6IGh1bmsubmV3U3RhcnQgKyBvZmZzZXQsIG5ld0xpbmVzOiBodW5rLm5ld0xpbmVzLFxuICAgIGxpbmVzOiBodW5rLmxpbmVzXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1lcmdlTGluZXMoaHVuaywgbWluZU9mZnNldCwgbWluZUxpbmVzLCB0aGVpck9mZnNldCwgdGhlaXJMaW5lcykge1xuICAvLyBUaGlzIHdpbGwgZ2VuZXJhbGx5IHJlc3VsdCBpbiBhIGNvbmZsaWN0ZWQgaHVuaywgYnV0IHRoZXJlIGFyZSBjYXNlcyB3aGVyZSB0aGUgY29udGV4dFxuICAvLyBpcyB0aGUgb25seSBvdmVybGFwIHdoZXJlIHdlIGNhbiBzdWNjZXNzZnVsbHkgbWVyZ2UgdGhlIGNvbnRlbnQgaGVyZS5cbiAgbGV0IG1pbmUgPSB7b2Zmc2V0OiBtaW5lT2Zmc2V0LCBsaW5lczogbWluZUxpbmVzLCBpbmRleDogMH0sXG4gICAgICB0aGVpciA9IHtvZmZzZXQ6IHRoZWlyT2Zmc2V0LCBsaW5lczogdGhlaXJMaW5lcywgaW5kZXg6IDB9O1xuXG4gIC8vIEhhbmRsZSBhbnkgbGVhZGluZyBjb250ZW50XG4gIGluc2VydExlYWRpbmcoaHVuaywgbWluZSwgdGhlaXIpO1xuICBpbnNlcnRMZWFkaW5nKGh1bmssIHRoZWlyLCBtaW5lKTtcblxuICAvLyBOb3cgaW4gdGhlIG92ZXJsYXAgY29udGVudC4gU2NhbiB0aHJvdWdoIGFuZCBzZWxlY3QgdGhlIGJlc3QgY2hhbmdlcyBmcm9tIGVhY2guXG4gIHdoaWxlIChtaW5lLmluZGV4IDwgbWluZS5saW5lcy5sZW5ndGggJiYgdGhlaXIuaW5kZXggPCB0aGVpci5saW5lcy5sZW5ndGgpIHtcbiAgICBsZXQgbWluZUN1cnJlbnQgPSBtaW5lLmxpbmVzW21pbmUuaW5kZXhdLFxuICAgICAgICB0aGVpckN1cnJlbnQgPSB0aGVpci5saW5lc1t0aGVpci5pbmRleF07XG5cbiAgICBpZiAoKG1pbmVDdXJyZW50WzBdID09PSAnLScgfHwgbWluZUN1cnJlbnRbMF0gPT09ICcrJylcbiAgICAgICAgJiYgKHRoZWlyQ3VycmVudFswXSA9PT0gJy0nIHx8IHRoZWlyQ3VycmVudFswXSA9PT0gJysnKSkge1xuICAgICAgLy8gQm90aCBtb2RpZmllZCAuLi5cbiAgICAgIG11dHVhbENoYW5nZShodW5rLCBtaW5lLCB0aGVpcik7XG4gICAgfSBlbHNlIGlmIChtaW5lQ3VycmVudFswXSA9PT0gJysnICYmIHRoZWlyQ3VycmVudFswXSA9PT0gJyAnKSB7XG4gICAgICAvLyBNaW5lIGluc2VydGVkXG4gICAgICBodW5rLmxpbmVzLnB1c2goLi4uIGNvbGxlY3RDaGFuZ2UobWluZSkpO1xuICAgIH0gZWxzZSBpZiAodGhlaXJDdXJyZW50WzBdID09PSAnKycgJiYgbWluZUN1cnJlbnRbMF0gPT09ICcgJykge1xuICAgICAgLy8gVGhlaXJzIGluc2VydGVkXG4gICAgICBodW5rLmxpbmVzLnB1c2goLi4uIGNvbGxlY3RDaGFuZ2UodGhlaXIpKTtcbiAgICB9IGVsc2UgaWYgKG1pbmVDdXJyZW50WzBdID09PSAnLScgJiYgdGhlaXJDdXJyZW50WzBdID09PSAnICcpIHtcbiAgICAgIC8vIE1pbmUgcmVtb3ZlZCBvciBlZGl0ZWRcbiAgICAgIHJlbW92YWwoaHVuaywgbWluZSwgdGhlaXIpO1xuICAgIH0gZWxzZSBpZiAodGhlaXJDdXJyZW50WzBdID09PSAnLScgJiYgbWluZUN1cnJlbnRbMF0gPT09ICcgJykge1xuICAgICAgLy8gVGhlaXIgcmVtb3ZlZCBvciBlZGl0ZWRcbiAgICAgIHJlbW92YWwoaHVuaywgdGhlaXIsIG1pbmUsIHRydWUpO1xuICAgIH0gZWxzZSBpZiAobWluZUN1cnJlbnQgPT09IHRoZWlyQ3VycmVudCkge1xuICAgICAgLy8gQ29udGV4dCBpZGVudGl0eVxuICAgICAgaHVuay5saW5lcy5wdXNoKG1pbmVDdXJyZW50KTtcbiAgICAgIG1pbmUuaW5kZXgrKztcbiAgICAgIHRoZWlyLmluZGV4Kys7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENvbnRleHQgbWlzbWF0Y2hcbiAgICAgIGNvbmZsaWN0KGh1bmssIGNvbGxlY3RDaGFuZ2UobWluZSksIGNvbGxlY3RDaGFuZ2UodGhlaXIpKTtcbiAgICB9XG4gIH1cblxuICAvLyBOb3cgcHVzaCBhbnl0aGluZyB0aGF0IG1heSBiZSByZW1haW5pbmdcbiAgaW5zZXJ0VHJhaWxpbmcoaHVuaywgbWluZSk7XG4gIGluc2VydFRyYWlsaW5nKGh1bmssIHRoZWlyKTtcblxuICBjYWxjTGluZUNvdW50KGh1bmspO1xufVxuXG5mdW5jdGlvbiBtdXR1YWxDaGFuZ2UoaHVuaywgbWluZSwgdGhlaXIpIHtcbiAgbGV0IG15Q2hhbmdlcyA9IGNvbGxlY3RDaGFuZ2UobWluZSksXG4gICAgICB0aGVpckNoYW5nZXMgPSBjb2xsZWN0Q2hhbmdlKHRoZWlyKTtcblxuICBpZiAoYWxsUmVtb3ZlcyhteUNoYW5nZXMpICYmIGFsbFJlbW92ZXModGhlaXJDaGFuZ2VzKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgcmVtb3ZlIGNoYW5nZXMgdGhhdCBhcmUgc3VwZXJzZXRzIG9mIG9uZSBhbm90aGVyXG4gICAgaWYgKGFycmF5U3RhcnRzV2l0aChteUNoYW5nZXMsIHRoZWlyQ2hhbmdlcylcbiAgICAgICAgJiYgc2tpcFJlbW92ZVN1cGVyc2V0KHRoZWlyLCBteUNoYW5nZXMsIG15Q2hhbmdlcy5sZW5ndGggLSB0aGVpckNoYW5nZXMubGVuZ3RoKSkge1xuICAgICAgaHVuay5saW5lcy5wdXNoKC4uLiBteUNoYW5nZXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoYXJyYXlTdGFydHNXaXRoKHRoZWlyQ2hhbmdlcywgbXlDaGFuZ2VzKVxuICAgICAgICAmJiBza2lwUmVtb3ZlU3VwZXJzZXQobWluZSwgdGhlaXJDaGFuZ2VzLCB0aGVpckNoYW5nZXMubGVuZ3RoIC0gbXlDaGFuZ2VzLmxlbmd0aCkpIHtcbiAgICAgIGh1bmsubGluZXMucHVzaCguLi4gdGhlaXJDaGFuZ2VzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0gZWxzZSBpZiAoYXJyYXlFcXVhbChteUNoYW5nZXMsIHRoZWlyQ2hhbmdlcykpIHtcbiAgICBodW5rLmxpbmVzLnB1c2goLi4uIG15Q2hhbmdlcyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uZmxpY3QoaHVuaywgbXlDaGFuZ2VzLCB0aGVpckNoYW5nZXMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmFsKGh1bmssIG1pbmUsIHRoZWlyLCBzd2FwKSB7XG4gIGxldCBteUNoYW5nZXMgPSBjb2xsZWN0Q2hhbmdlKG1pbmUpLFxuICAgICAgdGhlaXJDaGFuZ2VzID0gY29sbGVjdENvbnRleHQodGhlaXIsIG15Q2hhbmdlcyk7XG4gIGlmICh0aGVpckNoYW5nZXMubWVyZ2VkKSB7XG4gICAgaHVuay5saW5lcy5wdXNoKC4uLiB0aGVpckNoYW5nZXMubWVyZ2VkKTtcbiAgfSBlbHNlIHtcbiAgICBjb25mbGljdChodW5rLCBzd2FwID8gdGhlaXJDaGFuZ2VzIDogbXlDaGFuZ2VzLCBzd2FwID8gbXlDaGFuZ2VzIDogdGhlaXJDaGFuZ2VzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb25mbGljdChodW5rLCBtaW5lLCB0aGVpcikge1xuICBodW5rLmNvbmZsaWN0ID0gdHJ1ZTtcbiAgaHVuay5saW5lcy5wdXNoKHtcbiAgICBjb25mbGljdDogdHJ1ZSxcbiAgICBtaW5lOiBtaW5lLFxuICAgIHRoZWlyczogdGhlaXJcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGluc2VydExlYWRpbmcoaHVuaywgaW5zZXJ0LCB0aGVpcikge1xuICB3aGlsZSAoaW5zZXJ0Lm9mZnNldCA8IHRoZWlyLm9mZnNldCAmJiBpbnNlcnQuaW5kZXggPCBpbnNlcnQubGluZXMubGVuZ3RoKSB7XG4gICAgbGV0IGxpbmUgPSBpbnNlcnQubGluZXNbaW5zZXJ0LmluZGV4KytdO1xuICAgIGh1bmsubGluZXMucHVzaChsaW5lKTtcbiAgICBpbnNlcnQub2Zmc2V0Kys7XG4gIH1cbn1cbmZ1bmN0aW9uIGluc2VydFRyYWlsaW5nKGh1bmssIGluc2VydCkge1xuICB3aGlsZSAoaW5zZXJ0LmluZGV4IDwgaW5zZXJ0LmxpbmVzLmxlbmd0aCkge1xuICAgIGxldCBsaW5lID0gaW5zZXJ0LmxpbmVzW2luc2VydC5pbmRleCsrXTtcbiAgICBodW5rLmxpbmVzLnB1c2gobGluZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29sbGVjdENoYW5nZShzdGF0ZSkge1xuICBsZXQgcmV0ID0gW10sXG4gICAgICBvcGVyYXRpb24gPSBzdGF0ZS5saW5lc1tzdGF0ZS5pbmRleF1bMF07XG4gIHdoaWxlIChzdGF0ZS5pbmRleCA8IHN0YXRlLmxpbmVzLmxlbmd0aCkge1xuICAgIGxldCBsaW5lID0gc3RhdGUubGluZXNbc3RhdGUuaW5kZXhdO1xuXG4gICAgLy8gR3JvdXAgYWRkaXRpb25zIHRoYXQgYXJlIGltbWVkaWF0ZWx5IGFmdGVyIHN1YnRyYWN0aW9ucyBhbmQgdHJlYXQgdGhlbSBhcyBvbmUgXCJhdG9taWNcIiBtb2RpZnkgY2hhbmdlLlxuICAgIGlmIChvcGVyYXRpb24gPT09ICctJyAmJiBsaW5lWzBdID09PSAnKycpIHtcbiAgICAgIG9wZXJhdGlvbiA9ICcrJztcbiAgICB9XG5cbiAgICBpZiAob3BlcmF0aW9uID09PSBsaW5lWzBdKSB7XG4gICAgICByZXQucHVzaChsaW5lKTtcbiAgICAgIHN0YXRlLmluZGV4Kys7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5mdW5jdGlvbiBjb2xsZWN0Q29udGV4dChzdGF0ZSwgbWF0Y2hDaGFuZ2VzKSB7XG4gIGxldCBjaGFuZ2VzID0gW10sXG4gICAgICBtZXJnZWQgPSBbXSxcbiAgICAgIG1hdGNoSW5kZXggPSAwLFxuICAgICAgY29udGV4dENoYW5nZXMgPSBmYWxzZSxcbiAgICAgIGNvbmZsaWN0ZWQgPSBmYWxzZTtcbiAgd2hpbGUgKG1hdGNoSW5kZXggPCBtYXRjaENoYW5nZXMubGVuZ3RoXG4gICAgICAgICYmIHN0YXRlLmluZGV4IDwgc3RhdGUubGluZXMubGVuZ3RoKSB7XG4gICAgbGV0IGNoYW5nZSA9IHN0YXRlLmxpbmVzW3N0YXRlLmluZGV4XSxcbiAgICAgICAgbWF0Y2ggPSBtYXRjaENoYW5nZXNbbWF0Y2hJbmRleF07XG5cbiAgICAvLyBPbmNlIHdlJ3ZlIGhpdCBvdXIgYWRkLCB0aGVuIHdlIGFyZSBkb25lXG4gICAgaWYgKG1hdGNoWzBdID09PSAnKycpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnRleHRDaGFuZ2VzID0gY29udGV4dENoYW5nZXMgfHwgY2hhbmdlWzBdICE9PSAnICc7XG5cbiAgICBtZXJnZWQucHVzaChtYXRjaCk7XG4gICAgbWF0Y2hJbmRleCsrO1xuXG4gICAgLy8gQ29uc3VtZSBhbnkgYWRkaXRpb25zIGluIHRoZSBvdGhlciBibG9jayBhcyBhIGNvbmZsaWN0IHRvIGF0dGVtcHRcbiAgICAvLyB0byBwdWxsIGluIHRoZSByZW1haW5pbmcgY29udGV4dCBhZnRlciB0aGlzXG4gICAgaWYgKGNoYW5nZVswXSA9PT0gJysnKSB7XG4gICAgICBjb25mbGljdGVkID0gdHJ1ZTtcblxuICAgICAgd2hpbGUgKGNoYW5nZVswXSA9PT0gJysnKSB7XG4gICAgICAgIGNoYW5nZXMucHVzaChjaGFuZ2UpO1xuICAgICAgICBjaGFuZ2UgPSBzdGF0ZS5saW5lc1srK3N0YXRlLmluZGV4XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWF0Y2guc3Vic3RyKDEpID09PSBjaGFuZ2Uuc3Vic3RyKDEpKSB7XG4gICAgICBjaGFuZ2VzLnB1c2goY2hhbmdlKTtcbiAgICAgIHN0YXRlLmluZGV4Kys7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZsaWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICgobWF0Y2hDaGFuZ2VzW21hdGNoSW5kZXhdIHx8ICcnKVswXSA9PT0gJysnXG4gICAgICAmJiBjb250ZXh0Q2hhbmdlcykge1xuICAgIGNvbmZsaWN0ZWQgPSB0cnVlO1xuICB9XG5cbiAgaWYgKGNvbmZsaWN0ZWQpIHtcbiAgICByZXR1cm4gY2hhbmdlcztcbiAgfVxuXG4gIHdoaWxlIChtYXRjaEluZGV4IDwgbWF0Y2hDaGFuZ2VzLmxlbmd0aCkge1xuICAgIG1lcmdlZC5wdXNoKG1hdGNoQ2hhbmdlc1ttYXRjaEluZGV4KytdKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbWVyZ2VkLFxuICAgIGNoYW5nZXNcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWxsUmVtb3ZlcyhjaGFuZ2VzKSB7XG4gIHJldHVybiBjaGFuZ2VzLnJlZHVjZShmdW5jdGlvbihwcmV2LCBjaGFuZ2UpIHtcbiAgICByZXR1cm4gcHJldiAmJiBjaGFuZ2VbMF0gPT09ICctJztcbiAgfSwgdHJ1ZSk7XG59XG5mdW5jdGlvbiBza2lwUmVtb3ZlU3VwZXJzZXQoc3RhdGUsIHJlbW92ZUNoYW5nZXMsIGRlbHRhKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGVsdGE7IGkrKykge1xuICAgIGxldCBjaGFuZ2VDb250ZW50ID0gcmVtb3ZlQ2hhbmdlc1tyZW1vdmVDaGFuZ2VzLmxlbmd0aCAtIGRlbHRhICsgaV0uc3Vic3RyKDEpO1xuICAgIGlmIChzdGF0ZS5saW5lc1tzdGF0ZS5pbmRleCArIGldICE9PSAnICcgKyBjaGFuZ2VDb250ZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc3RhdGUuaW5kZXggKz0gZGVsdGE7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjYWxjT2xkTmV3TGluZUNvdW50KGxpbmVzKSB7XG4gIGxldCBvbGRMaW5lcyA9IDA7XG4gIGxldCBuZXdMaW5lcyA9IDA7XG5cbiAgbGluZXMuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgaWYgKHR5cGVvZiBsaW5lICE9PSAnc3RyaW5nJykge1xuICAgICAgbGV0IG15Q291bnQgPSBjYWxjT2xkTmV3TGluZUNvdW50KGxpbmUubWluZSk7XG4gICAgICBsZXQgdGhlaXJDb3VudCA9IGNhbGNPbGROZXdMaW5lQ291bnQobGluZS50aGVpcnMpO1xuXG4gICAgICBpZiAob2xkTGluZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAobXlDb3VudC5vbGRMaW5lcyA9PT0gdGhlaXJDb3VudC5vbGRMaW5lcykge1xuICAgICAgICAgIG9sZExpbmVzICs9IG15Q291bnQub2xkTGluZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2xkTGluZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG5ld0xpbmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKG15Q291bnQubmV3TGluZXMgPT09IHRoZWlyQ291bnQubmV3TGluZXMpIHtcbiAgICAgICAgICBuZXdMaW5lcyArPSBteUNvdW50Lm5ld0xpbmVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0xpbmVzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChuZXdMaW5lcyAhPT0gdW5kZWZpbmVkICYmIChsaW5lWzBdID09PSAnKycgfHwgbGluZVswXSA9PT0gJyAnKSkge1xuICAgICAgICBuZXdMaW5lcysrO1xuICAgICAgfVxuICAgICAgaWYgKG9sZExpbmVzICE9PSB1bmRlZmluZWQgJiYgKGxpbmVbMF0gPT09ICctJyB8fCBsaW5lWzBdID09PSAnICcpKSB7XG4gICAgICAgIG9sZExpbmVzKys7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4ge29sZExpbmVzLCBuZXdMaW5lc307XG59XG4iXX0=
