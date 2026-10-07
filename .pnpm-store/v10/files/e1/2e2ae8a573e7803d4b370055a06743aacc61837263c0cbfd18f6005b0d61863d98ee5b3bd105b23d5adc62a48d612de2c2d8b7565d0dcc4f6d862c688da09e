/*istanbul ignore start*/
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Diff;

/*istanbul ignore end*/
function Diff() {}

Diff.prototype = {
  /*istanbul ignore start*/

  /*istanbul ignore end*/
  diff: function diff(oldString, newString) {
    /*istanbul ignore start*/
    var _options$timeout;

    var
    /*istanbul ignore end*/
    options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var callback = options.callback;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    this.options = options;
    var self = this;

    function done(value) {
      if (callback) {
        setTimeout(function () {
          callback(undefined, value);
        }, 0);
        return true;
      } else {
        return value;
      }
    } // Allow subclasses to massage the input prior to running


    oldString = this.castInput(oldString);
    newString = this.castInput(newString);
    oldString = this.removeEmpty(this.tokenize(oldString));
    newString = this.removeEmpty(this.tokenize(newString));
    var newLen = newString.length,
        oldLen = oldString.length;
    var editLength = 1;
    var maxEditLength = newLen + oldLen;

    if (options.maxEditLength) {
      maxEditLength = Math.min(maxEditLength, options.maxEditLength);
    }

    var maxExecutionTime =
    /*istanbul ignore start*/
    (_options$timeout =
    /*istanbul ignore end*/
    options.timeout) !== null && _options$timeout !== void 0 ? _options$timeout : Infinity;
    var abortAfterTimestamp = Date.now() + maxExecutionTime;
    var bestPath = [{
      oldPos: -1,
      lastComponent: undefined
    }]; // Seed editLength = 0, i.e. the content starts with the same values

    var newPos = this.extractCommon(bestPath[0], newString, oldString, 0);

    if (bestPath[0].oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
      // Identity per the equality and tokenizer
      return done([{
        value: this.join(newString),
        count: newString.length
      }]);
    } // Once we hit the right edge of the edit graph on some diagonal k, we can
    // definitely reach the end of the edit graph in no more than k edits, so
    // there's no point in considering any moves to diagonal k+1 any more (from
    // which we're guaranteed to need at least k+1 more edits).
    // Similarly, once we've reached the bottom of the edit graph, there's no
    // point considering moves to lower diagonals.
    // We record this fact by setting minDiagonalToConsider and
    // maxDiagonalToConsider to some finite value once we've hit the edge of
    // the edit graph.
    // This optimization is not faithful to the original algorithm presented in
    // Myers's paper, which instead pointlessly extends D-paths off the end of
    // the edit graph - see page 7 of Myers's paper which notes this point
    // explicitly and illustrates it with a diagram. This has major performance
    // implications for some common scenarios. For instance, to compute a diff
    // where the new text simply appends d characters on the end of the
    // original text of length n, the true Myers algorithm will take O(n+d^2)
    // time while this optimization needs only O(n+d) time.


    var minDiagonalToConsider = -Infinity,
        maxDiagonalToConsider = Infinity; // Main worker method. checks all permutations of a given edit length for acceptance.

    function execEditLength() {
      for (var diagonalPath = Math.max(minDiagonalToConsider, -editLength); diagonalPath <= Math.min(maxDiagonalToConsider, editLength); diagonalPath += 2) {
        var basePath =
        /*istanbul ignore start*/
        void 0
        /*istanbul ignore end*/
        ;
        var removePath = bestPath[diagonalPath - 1],
            addPath = bestPath[diagonalPath + 1];

        if (removePath) {
          // No one else is going to attempt to use this value, clear it
          bestPath[diagonalPath - 1] = undefined;
        }

        var canAdd = false;

        if (addPath) {
          // what newPos will be after we do an insertion:
          var addPathNewPos = addPath.oldPos - diagonalPath;
          canAdd = addPath && 0 <= addPathNewPos && addPathNewPos < newLen;
        }

        var canRemove = removePath && removePath.oldPos + 1 < oldLen;

        if (!canAdd && !canRemove) {
          // If this path is a terminal then prune
          bestPath[diagonalPath] = undefined;
          continue;
        } // Select the diagonal that we want to branch from. We select the prior
        // path whose position in the old string is the farthest from the origin
        // and does not pass the bounds of the diff graph
        // TODO: Remove the `+ 1` here to make behavior match Myers algorithm
        //       and prefer to order removals before insertions.


        if (!canRemove || canAdd && removePath.oldPos + 1 < addPath.oldPos) {
          basePath = self.addToPath(addPath, true, undefined, 0);
        } else {
          basePath = self.addToPath(removePath, undefined, true, 1);
        }

        newPos = self.extractCommon(basePath, newString, oldString, diagonalPath);

        if (basePath.oldPos + 1 >= oldLen && newPos + 1 >= newLen) {
          // If we have hit the end of both strings, then we are done
          return done(buildValues(self, basePath.lastComponent, newString, oldString, self.useLongestToken));
        } else {
          bestPath[diagonalPath] = basePath;

          if (basePath.oldPos + 1 >= oldLen) {
            maxDiagonalToConsider = Math.min(maxDiagonalToConsider, diagonalPath - 1);
          }

          if (newPos + 1 >= newLen) {
            minDiagonalToConsider = Math.max(minDiagonalToConsider, diagonalPath + 1);
          }
        }
      }

      editLength++;
    } // Performs the length of edit iteration. Is a bit fugly as this has to support the
    // sync and async mode which is never fun. Loops over execEditLength until a value
    // is produced, or until the edit length exceeds options.maxEditLength (if given),
    // in which case it will return undefined.


    if (callback) {
      (function exec() {
        setTimeout(function () {
          if (editLength > maxEditLength || Date.now() > abortAfterTimestamp) {
            return callback();
          }

          if (!execEditLength()) {
            exec();
          }
        }, 0);
      })();
    } else {
      while (editLength <= maxEditLength && Date.now() <= abortAfterTimestamp) {
        var ret = execEditLength();

        if (ret) {
          return ret;
        }
      }
    }
  },

  /*istanbul ignore start*/

  /*istanbul ignore end*/
  addToPath: function addToPath(path, added, removed, oldPosInc) {
    var last = path.lastComponent;

    if (last && last.added === added && last.removed === removed) {
      return {
        oldPos: path.oldPos + oldPosInc,
        lastComponent: {
          count: last.count + 1,
          added: added,
          removed: removed,
          previousComponent: last.previousComponent
        }
      };
    } else {
      return {
        oldPos: path.oldPos + oldPosInc,
        lastComponent: {
          count: 1,
          added: added,
          removed: removed,
          previousComponent: last
        }
      };
    }
  },

  /*istanbul ignore start*/

  /*istanbul ignore end*/
  extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
    var newLen = newString.length,
        oldLen = oldString.length,
        oldPos = basePath.oldPos,
        newPos = oldPos - diagonalPath,
        commonCount = 0;

    while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
      newPos++;
      oldPos++;
      commonCount++;
    }

    if (commonCount) {
      basePath.lastComponent = {
        count: commonCount,
        previousComponent: basePath.lastComponent
      };
    }

    basePath.oldPos = oldPos;
    return newPos;
  },

  /*istanbul ignore start*/

  /*istanbul ignore end*/
  equals: function equals(left, right) {
    if (this.options.comparator) {
      return this.options.comparator(left, right);
    } else {
      return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
    }
  },

  /*istanbul ignore start*/

  /*istanbul ignore end*/
  removeEmpty: function removeEmpty(array) {
    var ret = [];

    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        ret.push(array[i]);
      }
    }

    return ret;
  },

  /*istanbul ignore start*/

  /*istanbul ignore end*/
  castInput: function castInput(value) {
    return value;
  },

  /*istanbul ignore start*/

  /*istanbul ignore end*/
  tokenize: function tokenize(value) {
    return value.split('');
  },

  /*istanbul ignore start*/

  /*istanbul ignore end*/
  join: function join(chars) {
    return chars.join('');
  }
};

function buildValues(diff, lastComponent, newString, oldString, useLongestToken) {
  // First we convert our linked list of components in reverse order to an
  // array in the right order:
  var components = [];
  var nextComponent;

  while (lastComponent) {
    components.push(lastComponent);
    nextComponent = lastComponent.previousComponent;
    delete lastComponent.previousComponent;
    lastComponent = nextComponent;
  }

  components.reverse();
  var componentPos = 0,
      componentLen = components.length,
      newPos = 0,
      oldPos = 0;

  for (; componentPos < componentLen; componentPos++) {
    var component = components[componentPos];

    if (!component.removed) {
      if (!component.added && useLongestToken) {
        var value = newString.slice(newPos, newPos + component.count);
        value = value.map(function (value, i) {
          var oldValue = oldString[oldPos + i];
          return oldValue.length > value.length ? oldValue : value;
        });
        component.value = diff.join(value);
      } else {
        component.value = diff.join(newString.slice(newPos, newPos + component.count));
      }

      newPos += component.count; // Common case

      if (!component.added) {
        oldPos += component.count;
      }
    } else {
      component.value = diff.join(oldString.slice(oldPos, oldPos + component.count));
      oldPos += component.count; // Reverse add and remove so removes are output first to match common convention
      // The diffing algorithm is tied to add then remove output and this is the simplest
      // route to get the desired output with minimal overhead.

      if (componentPos && components[componentPos - 1].added) {
        var tmp = components[componentPos - 1];
        components[componentPos - 1] = components[componentPos];
        components[componentPos] = tmp;
      }
    }
  } // Special case handle for when one terminal is ignored (i.e. whitespace).
  // For this case we merge the terminal into the prior string and drop the change.
  // This is only available for string mode.


  var finalComponent = components[componentLen - 1];

  if (componentLen > 1 && typeof finalComponent.value === 'string' && (finalComponent.added || finalComponent.removed) && diff.equals('', finalComponent.value)) {
    components[componentLen - 2].value += finalComponent.value;
    components.pop();
  }

  return components;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2Jhc2UuanMiXSwibmFtZXMiOlsiRGlmZiIsInByb3RvdHlwZSIsImRpZmYiLCJvbGRTdHJpbmciLCJuZXdTdHJpbmciLCJvcHRpb25zIiwiY2FsbGJhY2siLCJzZWxmIiwiZG9uZSIsInZhbHVlIiwic2V0VGltZW91dCIsInVuZGVmaW5lZCIsImNhc3RJbnB1dCIsInJlbW92ZUVtcHR5IiwidG9rZW5pemUiLCJuZXdMZW4iLCJsZW5ndGgiLCJvbGRMZW4iLCJlZGl0TGVuZ3RoIiwibWF4RWRpdExlbmd0aCIsIk1hdGgiLCJtaW4iLCJtYXhFeGVjdXRpb25UaW1lIiwidGltZW91dCIsIkluZmluaXR5IiwiYWJvcnRBZnRlclRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJiZXN0UGF0aCIsIm9sZFBvcyIsImxhc3RDb21wb25lbnQiLCJuZXdQb3MiLCJleHRyYWN0Q29tbW9uIiwiam9pbiIsImNvdW50IiwibWluRGlhZ29uYWxUb0NvbnNpZGVyIiwibWF4RGlhZ29uYWxUb0NvbnNpZGVyIiwiZXhlY0VkaXRMZW5ndGgiLCJkaWFnb25hbFBhdGgiLCJtYXgiLCJiYXNlUGF0aCIsInJlbW92ZVBhdGgiLCJhZGRQYXRoIiwiY2FuQWRkIiwiYWRkUGF0aE5ld1BvcyIsImNhblJlbW92ZSIsImFkZFRvUGF0aCIsImJ1aWxkVmFsdWVzIiwidXNlTG9uZ2VzdFRva2VuIiwiZXhlYyIsInJldCIsInBhdGgiLCJhZGRlZCIsInJlbW92ZWQiLCJvbGRQb3NJbmMiLCJsYXN0IiwicHJldmlvdXNDb21wb25lbnQiLCJjb21tb25Db3VudCIsImVxdWFscyIsImxlZnQiLCJyaWdodCIsImNvbXBhcmF0b3IiLCJpZ25vcmVDYXNlIiwidG9Mb3dlckNhc2UiLCJhcnJheSIsImkiLCJwdXNoIiwic3BsaXQiLCJjaGFycyIsImNvbXBvbmVudHMiLCJuZXh0Q29tcG9uZW50IiwicmV2ZXJzZSIsImNvbXBvbmVudFBvcyIsImNvbXBvbmVudExlbiIsImNvbXBv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IERpZmYoKSB7fVxuXG5EaWZmLnByb3RvdHlwZSA9IHtcbiAgZGlmZihvbGRTdHJpbmcsIG5ld1N0cmluZywgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IGNhbGxiYWNrID0gb3B0aW9ucy5jYWxsYmFjaztcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGRvbmUodmFsdWUpIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjYWxsYmFjayh1bmRlZmluZWQsIHZhbHVlKTsgfSwgMCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFsbG93IHN1YmNsYXNzZXMgdG8gbWFzc2FnZSB0aGUgaW5wdXQgcHJpb3IgdG8gcnVubmluZ1xuICAgIG9sZFN0cmluZyA9IHRoaXMuY2FzdElucHV0KG9sZFN0cmluZyk7XG4gICAgbmV3U3RyaW5nID0gdGhpcy5jYXN0SW5wdXQobmV3U3RyaW5nKTtcblxuICAgIG9sZFN0cmluZyA9IHRoaXMucmVtb3ZlRW1wdHkodGhpcy50b2tlbml6ZShvbGRTdHJpbmcpKTtcbiAgICBuZXdTdHJpbmcgPSB0aGlzLnJlbW92ZUVtcHR5KHRoaXMudG9rZW5pemUobmV3U3RyaW5nKSk7XG5cbiAgICBsZXQgbmV3TGVuID0gbmV3U3RyaW5nLmxlbmd0aCwgb2xkTGVuID0gb2xkU3RyaW5nLmxlbmd0aDtcbiAgICBsZXQgZWRpdExlbmd0aCA9IDE7XG4gICAgbGV0IG1heEVkaXRMZW5ndGggPSBuZXdMZW4gKyBvbGRMZW47XG4gICAgaWYob3B0aW9ucy5tYXhFZGl0TGVuZ3RoKSB7XG4gICAgICBtYXhFZGl0TGVuZ3RoID0gTWF0aC5taW4obWF4RWRpdExlbmd0aCwgb3B0aW9ucy5tYXhFZGl0TGVuZ3RoKTtcbiAgICB9XG4gICAgY29uc3QgbWF4RXhlY3V0aW9uVGltZSA9IG9wdGlvbnMudGltZW91dCA/PyBJbmZpbml0eTtcbiAgICBjb25zdCBhYm9ydEFmdGVyVGltZXN0YW1wID0gRGF0ZS5ub3coKSArIG1heEV4ZWN1dGlvblRpbWU7XG5cbiAgICBsZXQgYmVzdFBhdGggPSBbeyBvbGRQb3M6IC0xLCBsYXN0Q29tcG9uZW50OiB1bmRlZmluZWQgfV07XG5cbiAgICAvLyBTZWVkIGVkaXRMZW5ndGggPSAwLCBpLmUuIHRoZSBjb250ZW50IHN0YXJ0cyB3aXRoIHRoZSBzYW1lIHZhbHVlc1xuICAgIGxldCBuZXdQb3MgPSB0aGlzLmV4dHJhY3RDb21tb24oYmVzdFBhdGhbMF0sIG5ld1N0cmluZywgb2xkU3RyaW5nLCAwKTtcbiAgICBpZiAoYmVzdFBhdGhbMF0ub2xkUG9zICsgMSA+PSBvbGRMZW4gJiYgbmV3UG9zICsgMSA+PSBuZXdMZW4pIHtcbiAgICAgIC8vIElkZW50aXR5IHBlciB0aGUgZXF1YWxpdHkgYW5kIHRva2VuaXplclxuICAgICAgcmV0dXJuIGRvbmUoW3t2YWx1ZTogdGhpcy5qb2luKG5ld1N0cmluZyksIGNvdW50OiBuZXdTdHJpbmcubGVuZ3RofV0pO1xuICAgIH1cblxuICAgIC8vIE9uY2Ugd2UgaGl0IHRoZSByaWdodCBlZGdlIG9mIHRoZSBlZGl0IGdyYXBoIG9uIHNvbWUgZGlhZ29uYWwgaywgd2UgY2FuXG4gICAgLy8gZGVmaW5pdGVseSByZWFjaCB0aGUgZW5kIG9mIHRoZSBlZGl0IGdyYXBoIGluIG5vIG1vcmUgdGhhbiBrIGVkaXRzLCBzb1xuICAgIC8vIHRoZXJlJ3Mgbm8gcG9pbnQgaW4gY29uc2lkZXJpbmcgYW55IG1vdmVzIHRvIGRpYWdvbmFsIGsrMSBhbnkgbW9yZSAoZnJvbVxuICAgIC8vIHdoaWNoIHdlJ3JlIGd1YXJhbnRlZWQgdG8gbmVlZCBhdCBsZWFzdCBrKzEgbW9yZSBlZGl0cykuXG4gICAgLy8gU2ltaWxhcmx5LCBvbmNlIHdlJ3ZlIHJlYWNoZWQgdGhlIGJvdHRvbSBvZiB0aGUgZWRpdCBncmFwaCwgdGhlcmUncyBub1xuICAgIC8vIHBvaW50IGNvbnNpZGVyaW5nIG1vdmVzIHRvIGxvd2VyIGRpYWdvbmFscy5cbiAgICAvLyBXZSByZWNvcmQgdGhpcyBmYWN0IGJ5IHNldHRpbmcgbWluRGlhZ29uYWxUb0NvbnNpZGVyIGFuZFxuICAgIC8vIG1heERpYWdvbmFsVG9Db25zaWRlciB0byBzb21lIGZpbml0ZSB2YWx1ZSBvbmNlIHdlJ3ZlIGhpdCB0aGUgZWRnZSBvZlxuICAgIC8vIHRoZSBlZGl0IGdyYXBoLlxuICAgIC8vIFRoaXMgb3B0aW1pemF0aW9uIGlzIG5vdCBmYWl0aGZ1bCB0byB0aGUgb3JpZ2luYWwgYWxnb3JpdGhtIHByZXNlbnRlZCBpblxuICAgIC8vIE15ZXJzJ3MgcGFwZXIsIHdoaWNoIGluc3RlYWQgcG9pbnRsZXNzbHkgZXh0ZW5kcyBELXBhdGhzIG9mZiB0aGUgZW5kIG9mXG4gICAgLy8gdGhlIGVkaXQgZ3JhcGggLSBzZWUgcGFnZSA3IG9mIE15ZXJzJ3MgcGFwZXIgd2hpY2ggbm90ZXMgdGhpcyBwb2ludFxuICAgIC8vIGV4cGxpY2l0bHkgYW5kIGlsbHVzdHJhdGVzIGl0IHdpdGggYSBkaWFncmFtLiBUaGlzIGhhcyBtYWpvciBwZXJmb3JtYW5jZVxuICAgIC8vIGltcGxpY2F0aW9ucyBmb3Igc29tZSBjb21tb24gc2NlbmFyaW9zLiBGb3IgaW5zdGFuY2UsIHRvIGNvbXB1dGUgYSBkaWZmXG4gICAgLy8gd2hlcmUgdGhlIG5ldyB0ZXh0IHNpbXBseSBhcHBlbmRzIGQgY2hhcmFjdGVycyBvbiB0aGUgZW5kIG9mIHRoZVxuICAgIC8vIG9yaWdpbmFsIHRleHQgb2YgbGVuZ3RoIG4sIHRoZSB0cnVlIE15ZXJzIGFsZ29yaXRobSB3aWxsIHRha2UgTyhuK2ReMilcbiAgICAvLyB0aW1lIHdoaWxlIHRoaXMgb3B0aW1pemF0aW9uIG5lZWRzIG9ubHkgTyhuK2QpIHRpbWUuXG4gICAgbGV0IG1pbkRpYWdvbmFsVG9Db25zaWRlciA9IC1JbmZpbml0eSwgbWF4RGlhZ29uYWxUb0NvbnNpZGVyID0gSW5maW5pdHk7XG5cbiAgICAvLyBNYWluIHdvcmtlciBtZXRob2QuIGNoZWNrcyBhbGwgcGVybXV0YXRpb25zIG9mIGEgZ2l2ZW4gZWRpdCBsZW5ndGggZm9yIGFjY2VwdGFuY2UuXG4gICAgZnVuY3Rpb24gZXhlY0VkaXRMZW5ndGgoKSB7XG4gICAgICBmb3IgKFxuICAgICAgICBsZXQgZGlhZ29uYWxQYXRoID0gTWF0aC5tYXgobWluRGlhZ29uYWxUb0NvbnNpZGVyLCAtZWRpdExlbmd0aCk7XG4gICAgICAgIGRpYWdvbmFsUGF0aCA8PSBNYXRoLm1pbihtYXhEaWFnb25hbFRvQ29uc2lkZXIsIGVkaXRMZW5ndGgpO1xuICAgICAgICBkaWFnb25hbFBhdGggKz0gMlxuICAgICAgKSB7XG4gICAgICAgIGxldCBiYXNlUGF0aDtcbiAgICAgICAgbGV0IHJlbW92ZVBhdGggPSBiZXN0UGF0aFtkaWFnb25hbFBhdGggLSAxXSxcbiAgICAgICAgICAgIGFkZFBhdGggPSBiZXN0UGF0aFtkaWFnb25hbFBhdGggKyAxXTtcbiAgICAgICAgaWYgKHJlbW92ZVBhdGgpIHtcbiAgICAgICAgICAvLyBObyBvbmUgZWxzZSBpcyBnb2luZyB0byBhdHRlbXB0IHRvIHVzZSB0aGlzIHZhbHVlLCBjbGVhciBpdFxuICAgICAgICAgIGJlc3RQYXRoW2RpYWdvbmFsUGF0aCAtIDFdID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNhbkFkZCA9IGZhbHNlO1xuICAgICAgICBpZiAoYWRkUGF0aCkge1xuICAgICAgICAgIC8vIHdoYXQgbmV3UG9zIHdpbGwgYmUgYWZ0ZXIgd2UgZG8gYW4gaW5zZXJ0aW9uOlxuICAgICAgICAgIGNvbnN0IGFkZFBhdGhOZXdQb3MgPSBhZGRQYXRoLm9sZFBvcyAtIGRpYWdvbmFsUGF0aDtcbiAgICAgICAgICBjYW5BZGQgPSBhZGRQYXRoICYmIDAgPD0gYWRkUGF0aE5ld1BvcyAmJiBhZGRQYXRoTmV3UG9zIDwgbmV3TGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNhblJlbW92ZSA9IHJlbW92ZVBhdGggJiYgcmVtb3ZlUGF0aC5vbGRQb3MgKyAxIDwgb2xkTGVuO1xuICAgICAgICBpZiAoIWNhbkFkZCAmJiAhY2FuUmVtb3ZlKSB7XG4gICAgICAgICAgLy8gSWYgdGhpcyBwYXRoIGlzIGEgdGVybWluYWwgdGhlbiBwcnVuZVxuICAgICAgICAgIGJlc3RQYXRoW2RpYWdvbmFsUGF0aF0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZWxlY3QgdGhlIGRpYWdvbmFsIHRoYXQgd2Ugd2FudCB0byBicmFuY2ggZnJvbS4gV2Ugc2VsZWN0IHRoZSBwcmlvclxuICAgICAgICAvLyBwYXRoIHdob3NlIHBvc2l0aW9uIGluIHRoZSBvbGQgc3RyaW5nIGlzIHRoZSBmYXJ0aGVzdCBmcm9tIHRoZSBvcmlnaW5cbiAgICAgICAgLy8gYW5kIGRvZXMgbm90IHBhc3MgdGhlIGJvdW5kcyBvZiB0aGUgZGlmZiBncmFwaFxuICAgICAgICAvLyBUT0RPOiBSZW1vdmUgdGhlIGArIDFgIGhlcmUgdG8gbWFrZSBiZWhhdmlvciBtYXRjaCBNeWVycyBhbGdvcml0aG1cbiAgICAgICAgLy8gICAgICAgYW5kIHByZWZlciB0byBvcmRlciByZW1vdmFscyBiZWZvcmUgaW5zZXJ0aW9ucy5cbiAgICAgICAgaWYgKCFjYW5SZW1vdmUgfHwgKGNhbkFkZCAmJiByZW1vdmVQYXRoLm9sZFBvcyArIDEgPCBhZGRQYXRoLm9sZFBvcykpIHtcbiAgICAgICAgICBiYXNlUGF0aCA9IHNlbGYuYWRkVG9QYXRoKGFkZFBhdGgsIHRydWUsIHVuZGVmaW5lZCwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYmFzZVBhdGggPSBzZWxmLmFkZFRvUGF0aChyZW1vdmVQYXRoLCB1bmRlZmluZWQsIHRydWUsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3UG9zID0gc2VsZi5leHRyYWN0Q29tbW9uKGJhc2VQYXRoLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgZGlhZ29uYWxQYXRoKTtcblxuICAgICAgICBpZiAoYmFzZVBhdGgub2xkUG9zICsgMSA+PSBvbGRMZW4gJiYgbmV3UG9zICsgMSA+PSBuZXdMZW4pIHtcbiAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGhpdCB0aGUgZW5kIG9mIGJvdGggc3RyaW5ncywgdGhlbiB3ZSBhcmUgZG9uZVxuICAgICAgICAgIHJldHVybiBkb25lKGJ1aWxkVmFsdWVzKHNlbGYsIGJhc2VQYXRoLmxhc3RDb21wb25lbnQsIG5ld1N0cmluZywgb2xkU3RyaW5nLCBzZWxmLnVzZUxvbmdlc3RUb2tlbikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJlc3RQYXRoW2RpYWdvbmFsUGF0aF0gPSBiYXNlUGF0aDtcbiAgICAgICAgICBpZiAoYmFzZVBhdGgub2xkUG9zICsgMSA+PSBvbGRMZW4pIHtcbiAgICAgICAgICAgIG1heERpYWdvbmFsVG9Db25zaWRlciA9IE1hdGgubWluKG1heERpYWdvbmFsVG9Db25zaWRlciwgZGlhZ29uYWxQYXRoIC0gMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChuZXdQb3MgKyAxID49IG5ld0xlbikge1xuICAgICAgICAgICAgbWluRGlhZ29uYWxUb0NvbnNpZGVyID0gTWF0aC5tYXgobWluRGlhZ29uYWxUb0NvbnNpZGVyLCBkaWFnb25hbFBhdGggKyAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZWRpdExlbmd0aCsrO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm1zIHRoZSBsZW5ndGggb2YgZWRpdCBpdGVyYXRpb24uIElzIGEgYml0IGZ1Z2x5IGFzIHRoaXMgaGFzIHRvIHN1cHBvcnQgdGhlXG4gICAgLy8gc3luYyBhbmQgYXN5bmMgbW9kZSB3aGljaCBpcyBuZXZlciBmdW4uIExvb3BzIG92ZXIgZXhlY0VkaXRMZW5ndGggdW50aWwgYSB2YWx1ZVxuICAgIC8vIGlzIHByb2R1Y2VkLCBvciB1bnRpbCB0aGUgZWRpdCBsZW5ndGggZXhjZWVkcyBvcHRpb25zLm1heEVkaXRMZW5ndGggKGlmIGdpdmVuKSxcbiAgICAvLyBpbiB3aGljaCBjYXNlIGl0IHdpbGwgcmV0dXJuIHVuZGVmaW5lZC5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIChmdW5jdGlvbiBleGVjKCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChlZGl0TGVuZ3RoID4gbWF4RWRpdExlbmd0aCB8fCBEYXRlLm5vdygpID4gYWJvcnRBZnRlclRpbWVzdGFtcCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFleGVjRWRpdExlbmd0aCgpKSB7XG4gICAgICAgICAgICBleGVjKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICAgIH0oKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChlZGl0TGVuZ3RoIDw9IG1heEVkaXRMZW5ndGggJiYgRGF0ZS5ub3coKSA8PSBhYm9ydEFmdGVyVGltZXN0YW1wKSB7XG4gICAgICAgIGxldCByZXQgPSBleGVjRWRpdExlbmd0aCgpO1xuICAgICAgICBpZiAocmV0KSB7XG4gICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBhZGRUb1BhdGgocGF0aCwgYWRkZWQsIHJlbW92ZWQsIG9sZFBvc0luYykge1xuICAgIGxldCBsYXN0ID0gcGF0aC5sYXN0Q29tcG9uZW50O1xuICAgIGlmIChsYXN0ICYmIGxhc3QuYWRkZWQgPT09IGFkZGVkICYmIGxhc3QucmVtb3ZlZCA9PT0gcmVtb3ZlZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb2xkUG9zOiBwYXRoLm9sZFBvcyArIG9sZFBvc0luYyxcbiAgICAgICAgbGFzdENvbXBvbmVudDoge2NvdW50OiBsYXN0LmNvdW50ICsgMSwgYWRkZWQ6IGFkZGVkLCByZW1vdmVkOiByZW1vdmVkLCBwcmV2aW91c0NvbXBvbmVudDogbGFzdC5wcmV2aW91c0NvbXBvbmVudCB9XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBvbGRQb3M6IHBhdGgub2xkUG9zICsgb2xkUG9zSW5jLFxuICAgICAgICBsYXN0Q29tcG9uZW50OiB7Y291bnQ6IDEsIGFkZGVkOiBhZGRlZCwgcmVtb3ZlZDogcmVtb3ZlZCwgcHJldmlvdXNDb21wb25lbnQ6IGxhc3QgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIGV4dHJhY3RDb21tb24oYmFzZVBhdGgsIG5ld1N0cmluZywgb2xkU3RyaW5nLCBkaWFnb25hbFBhdGgpIHtcbiAgICBsZXQgbmV3TGVuID0gbmV3U3RyaW5nLmxlbmd0aCxcbiAgICAgICAgb2xkTGVuID0gb2xkU3RyaW5nLmxlbmd0aCxcbiAgICAgICAgb2xkUG9zID0gYmFzZVBhdGgub2xkUG9zLFxuICAgICAgICBuZXdQb3MgPSBvbGRQb3MgLSBkaWFnb25hbFBhdGgsXG5cbiAgICAgICAgY29tbW9uQ291bnQgPSAwO1xuICAgIHdoaWxlIChuZXdQb3MgKyAxIDwgbmV3TGVuICYmIG9sZFBvcyArIDEgPCBvbGRMZW4gJiYgdGhpcy5lcXVhbHMobmV3U3RyaW5nW25ld1BvcyArIDFdLCBvbGRTdHJpbmdbb2xkUG9zICsgMV0pKSB7XG4gICAgICBuZXdQb3MrKztcbiAgICAgIG9sZFBvcysrO1xuICAgICAgY29tbW9uQ291bnQrKztcbiAgICB9XG5cbiAgICBpZiAoY29tbW9uQ291bnQpIHtcbiAgICAgIGJhc2VQYXRoLmxhc3RDb21wb25lbnQgPSB7Y291bnQ6IGNvbW1vbkNvdW50LCBwcmV2aW91c0NvbXBvbmVudDogYmFzZVBhdGgubGFzdENvbXBvbmVudH07XG4gICAgfVxuXG4gICAgYmFzZVBhdGgub2xkUG9zID0gb2xkUG9zO1xuICAgIHJldHVybiBuZXdQb3M7XG4gIH0sXG5cbiAgZXF1YWxzKGxlZnQsIHJpZ2h0KSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jb21wYXJhdG9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNvbXBhcmF0b3IobGVmdCwgcmlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbGVmdCA9PT0gcmlnaHRcbiAgICAgICAgfHwgKHRoaXMub3B0aW9ucy5pZ25vcmVDYXNlICYmIGxlZnQudG9Mb3dlckNhc2UoKSA9PT0gcmlnaHQudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuICB9LFxuICByZW1vdmVFbXB0eShhcnJheSkge1xuICAgIGxldCByZXQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYXJyYXlbaV0pIHtcbiAgICAgICAgcmV0LnB1c2goYXJyYXlbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9LFxuICBjYXN0SW5wdXQodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG4gIHRva2VuaXplKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnNwbGl0KCcnKTtcbiAgfSxcbiAgam9pbihjaGFycykge1xuICAgIHJldHVybiBjaGFycy5qb2luKCcnKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gYnVpbGRWYWx1ZXMoZGlmZiwgbGFzdENvbXBvbmVudCwgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIHVzZUxvbmdlc3RUb2tlbikge1xuICAvLyBGaXJzdCB3ZSBjb252ZXJ0IG91ciBsaW5rZWQgbGlzdCBvZiBjb21wb25lbnRzIGluIHJldmVyc2Ugb3JkZXIgdG8gYW5cbiAgLy8gYXJyYXkgaW4gdGhlIHJpZ2h0IG9yZGVyOlxuICBjb25zdCBjb21wb25lbnRzID0gW107XG4gIGxldCBuZXh0Q29tcG9uZW50O1xuICB3aGlsZSAobGFzdENvbXBvbmVudCkge1xuICAgIGNvbXBvbmVudHMucHVzaChsYXN0Q29tcG9uZW50KTtcbiAgICBuZXh0Q29tcG9uZW50ID0gbGFzdENvbXBvbmVudC5wcmV2aW91c0NvbXBvbmVudDtcbiAgICBkZWxldGUgbGFzdENvbXBvbmVudC5wcmV2aW91c0NvbXBvbmVudDtcbiAgICBsYXN0Q29tcG9uZW50ID0gbmV4dENvbXBvbmVudDtcbiAgfVxuICBjb21wb25lbnRzLnJldmVyc2UoKTtcblxuICBsZXQgY29tcG9uZW50UG9zID0gMCxcbiAgICAgIGNvbXBvbmVudExlbiA9IGNvbXBvbmVudHMubGVuZ3RoLFxuICAgICAgbmV3UG9zID0gMCxcbiAgICAgIG9sZFBvcyA9IDA7XG5cbiAgZm9yICg7IGNvbXBvbmVudFBvcyA8IGNvbXBvbmVudExlbjsgY29tcG9uZW50UG9zKyspIHtcbiAgICBsZXQgY29tcG9uZW50ID0gY29tcG9uZW50c1tjb21wb25lbnRQb3NdO1xuICAgIGlmICghY29tcG9uZW50LnJlbW92ZWQpIHtcbiAgICAgIGlmICghY29tcG9uZW50LmFkZGVkICYmIHVzZUxvbmdlc3RUb2tlbikge1xuICAgICAgICBsZXQgdmFsdWUgPSBuZXdTdHJpbmcuc2xpY2UobmV3UG9zLCBuZXdQb3MgKyBjb21wb25lbnQuY291bnQpO1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLm1hcChmdW5jdGlvbih2YWx1ZSwgaSkge1xuICAgICAgICAgIGxldCBvbGRWYWx1ZSA9IG9sZFN0cmluZ1tvbGRQb3MgKyBpXTtcbiAgICAgICAgICByZXR1cm4gb2xkVmFsdWUubGVuZ3RoID4gdmFsdWUubGVuZ3RoID8gb2xkVmFsdWUgOiB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29tcG9uZW50LnZhbHVlID0gZGlmZi5qb2luKHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudC52YWx1ZSA9IGRpZmYuam9pbihuZXdTdHJpbmcuc2xpY2UobmV3UG9zLCBuZXdQb3MgKyBjb21wb25lbnQuY291bnQpKTtcbiAgICAgIH1cbiAgICAgIG5ld1BvcyArPSBjb21wb25lbnQuY291bnQ7XG5cbiAgICAgIC8vIENvbW1vbiBjYXNlXG4gICAgICBpZiAoIWNvbXBvbmVudC5hZGRlZCkge1xuICAgICAgICBvbGRQb3MgKz0gY29tcG9uZW50LmNvdW50O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wb25lbnQudmFsdWUgPSBkaWZmLmpvaW4ob2xkU3RyaW5nLnNsaWNlKG9sZFBvcywgb2xkUG9zICsgY29tcG9uZW50LmNvdW50KSk7XG4gICAgICBvbGRQb3MgKz0gY29tcG9uZW50LmNvdW50O1xuXG4gICAgICAvLyBSZXZlcnNlIGFkZCBhbmQgcmVtb3ZlIHNvIHJlbW92ZXMgYXJlIG91dHB1dCBmaXJzdCB0byBtYXRjaCBjb21tb24gY29udmVudGlvblxuICAgICAgLy8gVGhlIGRpZmZpbmcgYWxnb3JpdGhtIGlzIHRpZWQgdG8gYWRkIHRoZW4gcmVtb3ZlIG91dHB1dCBhbmQgdGhpcyBpcyB0aGUgc2ltcGxlc3RcbiAgICAgIC8vIHJvdXRlIHRvIGdldCB0aGUgZGVzaXJlZCBvdXRwdXQgd2l0aCBtaW5pbWFsIG92ZXJoZWFkLlxuICAgICAgaWYgKGNvbXBvbmVudFBvcyAmJiBjb21wb25lbnRzW2NvbXBvbmVudFBvcyAtIDFdLmFkZGVkKSB7XG4gICAgICAgIGxldCB0bXAgPSBjb21wb25lbnRzW2NvbXBvbmVudFBvcyAtIDFdO1xuICAgICAgICBjb21wb25lbnRzW2NvbXBvbmVudFBvcyAtIDFdID0gY29tcG9uZW50c1tjb21wb25lbnRQb3NdO1xuICAgICAgICBjb21wb25lbnRzW2NvbXBvbmVudFBvc10gPSB0bXA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU3BlY2lhbCBjYXNlIGhhbmRsZSBmb3Igd2hlbiBvbmUgdGVybWluYWwgaXMgaWdub3JlZCAoaS5lLiB3aGl0ZXNwYWNlKS5cbiAgLy8gRm9yIHRoaXMgY2FzZSB3ZSBtZXJnZSB0aGUgdGVybWluYWwgaW50byB0aGUgcHJpb3Igc3RyaW5nIGFuZCBkcm9wIHRoZSBjaGFuZ2UuXG4gIC8vIFRoaXMgaXMgb25seSBhdmFpbGFibGUgZm9yIHN0cmluZyBtb2RlLlxuICBsZXQgZmluYWxDb21wb25lbnQgPSBjb21wb25lbnRzW2NvbXBvbmVudExlbiAtIDFdO1xuICBpZiAoY29tcG9uZW50TGVuID4gMVxuICAgICAgJiYgdHlwZW9mIGZpbmFsQ29tcG9uZW50LnZhbHVlID09PSAnc3RyaW5nJ1xuICAgICAgJiYgKGZpbmFsQ29tcG9uZW50LmFkZGVkIHx8IGZpbmFsQ29tcG9uZW50LnJlbW92ZWQpXG4gICAgICAmJiBkaWZmLmVxdWFscygnJywgZmluYWxDb21wb25lbnQudmFsdWUpKSB7XG4gICAgY29tcG9uZW50c1tjb21wb25lbnRMZW4gLSAyXS52YWx1ZSArPSBmaW5hbENvbXBvbmVudC52YWx1ZTtcbiAgICBjb21wb25lbnRzLnBvcCgpO1xuICB9XG5cbiAgcmV0dXJuIGNvbXBvbmVudHM7XG59XG4iXX0=
