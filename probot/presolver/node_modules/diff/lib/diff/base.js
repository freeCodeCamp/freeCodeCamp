/*istanbul ignore start*/'use strict';

exports.__esModule = true;
exports['default'] = /*istanbul ignore end*/Diff;
function Diff() {}

Diff.prototype = {
  /*istanbul ignore start*/ /*istanbul ignore end*/diff: function diff(oldString, newString) {
    /*istanbul ignore start*/var /*istanbul ignore end*/options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

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
    }

    // Allow subclasses to massage the input prior to running
    oldString = this.castInput(oldString);
    newString = this.castInput(newString);

    oldString = this.removeEmpty(this.tokenize(oldString));
    newString = this.removeEmpty(this.tokenize(newString));

    var newLen = newString.length,
        oldLen = oldString.length;
    var editLength = 1;
    var maxEditLength = newLen + oldLen;
    var bestPath = [{ newPos: -1, components: [] }];

    // Seed editLength = 0, i.e. the content starts with the same values
    var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);
    if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
      // Identity per the equality and tokenizer
      return done([{ value: this.join(newString), count: newString.length }]);
    }

    // Main worker method. checks all permutations of a given edit length for acceptance.
    function execEditLength() {
      for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
        var basePath = /*istanbul ignore start*/void 0 /*istanbul ignore end*/;
        var addPath = bestPath[diagonalPath - 1],
            removePath = bestPath[diagonalPath + 1],
            _oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;
        if (addPath) {
          // No one else is going to attempt to use this value, clear it
          bestPath[diagonalPath - 1] = undefined;
        }

        var canAdd = addPath && addPath.newPos + 1 < newLen,
            canRemove = removePath && 0 <= _oldPos && _oldPos < oldLen;
        if (!canAdd && !canRemove) {
          // If this path is a terminal then prune
          bestPath[diagonalPath] = undefined;
          continue;
        }

        // Select the diagonal that we want to branch from. We select the prior
        // path whose position in the new string is the farthest from the origin
        // and does not pass the bounds of the diff graph
        if (!canAdd || canRemove && addPath.newPos < removePath.newPos) {
          basePath = clonePath(removePath);
          self.pushComponent(basePath.components, undefined, true);
        } else {
          basePath = addPath; // No need to clone, we've pulled it from the list
          basePath.newPos++;
          self.pushComponent(basePath.components, true, undefined);
        }

        _oldPos = self.extractCommon(basePath, newString, oldString, diagonalPath);

        // If we have hit the end of both strings, then we are done
        if (basePath.newPos + 1 >= newLen && _oldPos + 1 >= oldLen) {
          return done(buildValues(self, basePath.components, newString, oldString, self.useLongestToken));
        } else {
          // Otherwise track this path as a potential candidate and continue.
          bestPath[diagonalPath] = basePath;
        }
      }

      editLength++;
    }

    // Performs the length of edit iteration. Is a bit fugly as this has to support the
    // sync and async mode which is never fun. Loops over execEditLength until a value
    // is produced.
    if (callback) {
      (function exec() {
        setTimeout(function () {
          // This should not happen, but we want to be safe.
          /* istanbul ignore next */
          if (editLength > maxEditLength) {
            return callback();
          }

          if (!execEditLength()) {
            exec();
          }
        }, 0);
      })();
    } else {
      while (editLength <= maxEditLength) {
        var ret = execEditLength();
        if (ret) {
          return ret;
        }
      }
    }
  },
  /*istanbul ignore start*/ /*istanbul ignore end*/pushComponent: function pushComponent(components, added, removed) {
    var last = components[components.length - 1];
    if (last && last.added === added && last.removed === removed) {
      // We need to clone here as the component clone operation is just
      // as shallow array clone
      components[components.length - 1] = { count: last.count + 1, added: added, removed: removed };
    } else {
      components.push({ count: 1, added: added, removed: removed });
    }
  },
  /*istanbul ignore start*/ /*istanbul ignore end*/extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
    var newLen = newString.length,
        oldLen = oldString.length,
        newPos = basePath.newPos,
        oldPos = newPos - diagonalPath,
        commonCount = 0;
    while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
      newPos++;
      oldPos++;
      commonCount++;
    }

    if (commonCount) {
      basePath.components.push({ count: commonCount });
    }

    basePath.newPos = newPos;
    return oldPos;
  },
  /*istanbul ignore start*/ /*istanbul ignore end*/equals: function equals(left, right) {
    if (this.options.comparator) {
      return this.options.comparator(left, right);
    } else {
      return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
    }
  },
  /*istanbul ignore start*/ /*istanbul ignore end*/removeEmpty: function removeEmpty(array) {
    var ret = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        ret.push(array[i]);
      }
    }
    return ret;
  },
  /*istanbul ignore start*/ /*istanbul ignore end*/castInput: function castInput(value) {
    return value;
  },
  /*istanbul ignore start*/ /*istanbul ignore end*/tokenize: function tokenize(value) {
    return value.split('');
  },
  /*istanbul ignore start*/ /*istanbul ignore end*/join: function join(chars) {
    return chars.join('');
  }
};

function buildValues(diff, components, newString, oldString, useLongestToken) {
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
      newPos += component.count;

      // Common case
      if (!component.added) {
        oldPos += component.count;
      }
    } else {
      component.value = diff.join(oldString.slice(oldPos, oldPos + component.count));
      oldPos += component.count;

      // Reverse add and remove so removes are output first to match common convention
      // The diffing algorithm is tied to add then remove output and this is the simplest
      // route to get the desired output with minimal overhead.
      if (componentPos && components[componentPos - 1].added) {
        var tmp = components[componentPos - 1];
        components[componentPos - 1] = components[componentPos];
        components[componentPos] = tmp;
      }
    }
  }

  // Special case handle for when one terminal is ignored (i.e. whitespace).
  // For this case we merge the terminal into the prior string and drop the change.
  // This is only available for string mode.
  var lastComponent = components[componentLen - 1];
  if (componentLen > 1 && typeof lastComponent.value === 'string' && (lastComponent.added || lastComponent.removed) && diff.equals('', lastComponent.value)) {
    components[componentLen - 2].value += lastComponent.value;
    components.pop();
  }

  return components;
}

function clonePath(path) {
  return { newPos: path.newPos, components: path.components.slice(0) };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2Jhc2UuanMiXSwibmFtZXMiOlsiRGlmZiIsInByb3RvdHlwZSIsImRpZmYiLCJvbGRTdHJpbmciLCJuZXdTdHJpbmciLCJvcHRpb25zIiwiY2FsbGJhY2siLCJzZWxmIiwiZG9uZSIsInZhbHVlIiwic2V0VGltZW91dCIsInVuZGVmaW5lZCIsImNhc3RJbnB1dCIsInJlbW92ZUVtcHR5IiwidG9rZW5pemUiLCJuZXdMZW4iLCJsZW5ndGgiLCJvbGRMZW4iLCJlZGl0TGVuZ3RoIiwibWF4RWRpdExlbmd0aCIsImJlc3RQYXRoIiwibmV3UG9zIiwiY29tcG9uZW50cyIsIm9sZFBvcyIsImV4dHJhY3RDb21tb24iLCJqb2luIiwiY291bnQiLCJleGVjRWRpdExlbmd0aCIsImRpYWdvbmFsUGF0aCIsImJhc2VQYXRoIiwiYWRkUGF0aCIsInJlbW92ZVBhdGgiLCJjYW5BZGQiLCJjYW5SZW1vdmUiLCJjbG9uZVBhdGgiLCJwdXNoQ29tcG9uZW50IiwiYnVpbGRWYWx1ZXMiLCJ1c2VMb25nZXN0VG9rZW4iLCJleGVjIiwicmV0IiwiYWRkZWQiLCJyZW1vdmVkIiwibGFzdCIsInB1c2giLCJjb21tb25Db3VudCIsImVxdWFscyIsImxlZnQiLCJyaWdodCIsImNvbXBhcmF0b3IiLCJpZ25vcmVDYXNlIiwidG9Mb3dlckNhc2UiLCJhcnJheSIsImkiLCJzcGxpdCIsImNoYXJzIiwiY29tcG9uZW50UG9zIiwiY29tcG9uZW50TGVuIiwiY29tcG9uZW50Iiwic2xpY2UiLCJtYXAiLCJvbGRWYWx1ZSIsInRtcCIsImxhc3RDb21wb25lbnQiLCJwb3AiLCJwYXRoIl0sIm1hcHBpbmdzIjoiOzs7NENBQXdCQSxJO0FBQVQsU0FBU0EsSUFBVCxHQUFnQixDQUFFOztBQUVqQ0EsS0FBS0MsU0FBTCxHQUFpQjtBQUFBLG1EQUNmQyxJQURlLGdCQUNWQyxTQURVLEVBQ0NDLFNBREQsRUFDMEI7QUFBQSx3REFBZEMsT0FBYyx1RUFBSixFQUFJOztBQUN2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RUFBd0JBLFNBQVNrQyxVQUFVL0IsS0FBM0MsQ0FBVixDQUFsQjtBQUNBSCxnQkFBVWtDLFVBQVUvQixLQUFwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFJNkIsZ0JBQWdCakMsV0FBV2lDLGVBQWUsQ0FBMUIsRUFBNkJmLEtBQWpELEVBQXdEO0FBQ3RELFlBQUlxQixNQUFNdkMsV0FBV2lDLGVBQWUsQ0FBMUIsQ0FBVjtBQUNBakMsbUJBQVdpQyxlQUFlLENBQTFCLElBQStCakMsV0FBV2lDLFlBQVgsQ0FBL0I7QUFDQWpDLG1CQUFXaUMsWUFBWCxJQUEyQk0sR0FBM0I7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsTUFBSUMsZ0JBQWdCeEMsV0FBV2tDLGVBQWUsQ0FBMUIsQ0FBcEI7QUFDQSxNQUFJQSxlQUFlLENBQWYsSUFDRyxPQUFPTSxjQUFjckQsS0FBckIsS0FBK0IsUUFEbEMsS0FFSXFELGNBQWN0QixLQUFkLElBQXVCc0IsY0FBY3JCLE9BRnpDLEtBR0d2QyxLQUFLMkMsTUFBTCxDQUFZLEVBQVosRUFBZ0JpQixjQUFjckQsS0FBOUIsQ0FIUCxFQUc2QztBQUMzQ2EsZUFBV2tDLGVBQWUsQ0FBMUIsRUFBNkIvQyxLQUE3QixJQUFzQ3FELGNBQWNyRCxLQUFwRDtBQUNBYSxlQUFXeUMsR0FBWDtBQUNEOztBQUVELFNBQU96QyxVQUFQO0FBQ0Q7O0FBRUQsU0FBU1ksU0FBVCxDQUFtQjhCLElBQW5CLEVBQXlCO0FBQ3ZCLFNBQU8sRUFBRTNDLFFBQVEyQyxLQUFLM0MsTUFBZixFQUF1QkMsWUFBWTBDLEtBQUsxQyxVQUFMLENBQWdCb0MsS0FBaEIsQ0FBc0IsQ0FBdEIsQ0FBbkMsRUFBUDtBQUNEIiwiZmlsZSI6ImJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaWZmKCkge31cblxuRGlmZi5wcm90b3R5cGUgPSB7XG4gIGRpZmYob2xkU3RyaW5nLCBuZXdTdHJpbmcsIG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBjYWxsYmFjayA9IG9wdGlvbnMuY2FsbGJhY2s7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBmdW5jdGlvbiBkb25lKHZhbHVlKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgY2FsbGJhY2sodW5kZWZpbmVkLCB2YWx1ZSk7IH0sIDApO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBbGxvdyBzdWJjbGFzc2VzIHRvIG1hc3NhZ2UgdGhlIGlucHV0IHByaW9yIHRvIHJ1bm5pbmdcbiAgICBvbGRTdHJpbmcgPSB0aGlzLmNhc3RJbnB1dChvbGRTdHJpbmcpO1xuICAgIG5ld1N0cmluZyA9IHRoaXMuY2FzdElucHV0KG5ld1N0cmluZyk7XG5cbiAgICBvbGRTdHJpbmcgPSB0aGlzLnJlbW92ZUVtcHR5KHRoaXMudG9rZW5pemUob2xkU3RyaW5nKSk7XG4gICAgbmV3U3RyaW5nID0gdGhpcy5yZW1vdmVFbXB0eSh0aGlzLnRva2VuaXplKG5ld1N0cmluZykpO1xuXG4gICAgbGV0IG5ld0xlbiA9IG5ld1N0cmluZy5sZW5ndGgsIG9sZExlbiA9IG9sZFN0cmluZy5sZW5ndGg7XG4gICAgbGV0IGVkaXRMZW5ndGggPSAxO1xuICAgIGxldCBtYXhFZGl0TGVuZ3RoID0gbmV3TGVuICsgb2xkTGVuO1xuICAgIGxldCBiZXN0UGF0aCA9IFt7IG5ld1BvczogLTEsIGNvbXBvbmVudHM6IFtdIH1dO1xuXG4gICAgLy8gU2VlZCBlZGl0TGVuZ3RoID0gMCwgaS5lLiB0aGUgY29udGVudCBzdGFydHMgd2l0aCB0aGUgc2FtZSB2YWx1ZXNcbiAgICBsZXQgb2xkUG9zID0gdGhpcy5leHRyYWN0Q29tbW9uKGJlc3RQYXRoWzBdLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgMCk7XG4gICAgaWYgKGJlc3RQYXRoWzBdLm5ld1BvcyArIDEgPj0gbmV3TGVuICYmIG9sZFBvcyArIDEgPj0gb2xkTGVuKSB7XG4gICAgICAvLyBJZGVudGl0eSBwZXIgdGhlIGVxdWFsaXR5IGFuZCB0b2tlbml6ZXJcbiAgICAgIHJldHVybiBkb25lKFt7dmFsdWU6IHRoaXMuam9pbihuZXdTdHJpbmcpLCBjb3VudDogbmV3U3RyaW5nLmxlbmd0aH1dKTtcbiAgICB9XG5cbiAgICAvLyBNYWluIHdvcmtlciBtZXRob2QuIGNoZWNrcyBhbGwgcGVybXV0YXRpb25zIG9mIGEgZ2l2ZW4gZWRpdCBsZW5ndGggZm9yIGFjY2VwdGFuY2UuXG4gICAgZnVuY3Rpb24gZXhlY0VkaXRMZW5ndGgoKSB7XG4gICAgICBmb3IgKGxldCBkaWFnb25hbFBhdGggPSAtMSAqIGVkaXRMZW5ndGg7IGRpYWdvbmFsUGF0aCA8PSBlZGl0TGVuZ3RoOyBkaWFnb25hbFBhdGggKz0gMikge1xuICAgICAgICBsZXQgYmFzZVBhdGg7XG4gICAgICAgIGxldCBhZGRQYXRoID0gYmVzdFBhdGhbZGlhZ29uYWxQYXRoIC0gMV0sXG4gICAgICAgICAgICByZW1vdmVQYXRoID0gYmVzdFBhdGhbZGlhZ29uYWxQYXRoICsgMV0sXG4gICAgICAgICAgICBvbGRQb3MgPSAocmVtb3ZlUGF0aCA/IHJlbW92ZVBhdGgubmV3UG9zIDogMCkgLSBkaWFnb25hbFBhdGg7XG4gICAgICAgIGlmIChhZGRQYXRoKSB7XG4gICAgICAgICAgLy8gTm8gb25lIGVsc2UgaXMgZ29pbmcgdG8gYXR0ZW1wdCB0byB1c2UgdGhpcyB2YWx1ZSwgY2xlYXIgaXRcbiAgICAgICAgICBiZXN0UGF0aFtkaWFnb25hbFBhdGggLSAxXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjYW5BZGQgPSBhZGRQYXRoICYmIGFkZFBhdGgubmV3UG9zICsgMSA8IG5ld0xlbixcbiAgICAgICAgICAgIGNhblJlbW92ZSA9IHJlbW92ZVBhdGggJiYgMCA8PSBvbGRQb3MgJiYgb2xkUG9zIDwgb2xkTGVuO1xuICAgICAgICBpZiAoIWNhbkFkZCAmJiAhY2FuUmVtb3ZlKSB7XG4gICAgICAgICAgLy8gSWYgdGhpcyBwYXRoIGlzIGEgdGVybWluYWwgdGhlbiBwcnVuZVxuICAgICAgICAgIGJlc3RQYXRoW2RpYWdvbmFsUGF0aF0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZWxlY3QgdGhlIGRpYWdvbmFsIHRoYXQgd2Ugd2FudCB0byBicmFuY2ggZnJvbS4gV2Ugc2VsZWN0IHRoZSBwcmlvclxuICAgICAgICAvLyBwYXRoIHdob3NlIHBvc2l0aW9uIGluIHRoZSBuZXcgc3RyaW5nIGlzIHRoZSBmYXJ0aGVzdCBmcm9tIHRoZSBvcmlnaW5cbiAgICAgICAgLy8gYW5kIGRvZXMgbm90IHBhc3MgdGhlIGJvdW5kcyBvZiB0aGUgZGlmZiBncmFwaFxuICAgICAgICBpZiAoIWNhbkFkZCB8fCAoY2FuUmVtb3ZlICYmIGFkZFBhdGgubmV3UG9zIDwgcmVtb3ZlUGF0aC5uZXdQb3MpKSB7XG4gICAgICAgICAgYmFzZVBhdGggPSBjbG9uZVBhdGgocmVtb3ZlUGF0aCk7XG4gICAgICAgICAgc2VsZi5wdXNoQ29tcG9uZW50KGJhc2VQYXRoLmNvbXBvbmVudHMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYmFzZVBhdGggPSBhZGRQYXRoOyAgIC8vIE5vIG5lZWQgdG8gY2xvbmUsIHdlJ3ZlIHB1bGxlZCBpdCBmcm9tIHRoZSBsaXN0XG4gICAgICAgICAgYmFzZVBhdGgubmV3UG9zKys7XG4gICAgICAgICAgc2VsZi5wdXNoQ29tcG9uZW50KGJhc2VQYXRoLmNvbXBvbmVudHMsIHRydWUsIHVuZGVmaW5lZCk7XG4gICAgICAgIH1cblxuICAgICAgICBvbGRQb3MgPSBzZWxmLmV4dHJhY3RDb21tb24oYmFzZVBhdGgsIG5ld1N0cmluZywgb2xkU3RyaW5nLCBkaWFnb25hbFBhdGgpO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgaGl0IHRoZSBlbmQgb2YgYm90aCBzdHJpbmdzLCB0aGVuIHdlIGFyZSBkb25lXG4gICAgICAgIGlmIChiYXNlUGF0aC5uZXdQb3MgKyAxID49IG5ld0xlbiAmJiBvbGRQb3MgKyAxID49IG9sZExlbikge1xuICAgICAgICAgIHJldHVybiBkb25lKGJ1aWxkVmFsdWVzKHNlbGYsIGJhc2VQYXRoLmNvbXBvbmVudHMsIG5ld1N0cmluZywgb2xkU3RyaW5nLCBzZWxmLnVzZUxvbmdlc3RUb2tlbikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSB0cmFjayB0aGlzIHBhdGggYXMgYSBwb3RlbnRpYWwgY2FuZGlkYXRlIGFuZCBjb250aW51ZS5cbiAgICAgICAgICBiZXN0UGF0aFtkaWFnb25hbFBhdGhdID0gYmFzZVBhdGg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZWRpdExlbmd0aCsrO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm1zIHRoZSBsZW5ndGggb2YgZWRpdCBpdGVyYXRpb24uIElzIGEgYml0IGZ1Z2x5IGFzIHRoaXMgaGFzIHRvIHN1cHBvcnQgdGhlXG4gICAgLy8gc3luYyBhbmQgYXN5bmMgbW9kZSB3aGljaCBpcyBuZXZlciBmdW4uIExvb3BzIG92ZXIgZXhlY0VkaXRMZW5ndGggdW50aWwgYSB2YWx1ZVxuICAgIC8vIGlzIHByb2R1Y2VkLlxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgKGZ1bmN0aW9uIGV4ZWMoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gVGhpcyBzaG91bGQgbm90IGhhcHBlbiwgYnV0IHdlIHdhbnQgdG8gYmUgc2FmZS5cbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgIGlmIChlZGl0TGVuZ3RoID4gbWF4RWRpdExlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFleGVjRWRpdExlbmd0aCgpKSB7XG4gICAgICAgICAgICBleGVjKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICAgIH0oKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChlZGl0TGVuZ3RoIDw9IG1heEVkaXRMZW5ndGgpIHtcbiAgICAgICAgbGV0IHJldCA9IGV4ZWNFZGl0TGVuZ3RoKCk7XG4gICAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHB1c2hDb21wb25lbnQoY29tcG9uZW50cywgYWRkZWQsIHJlbW92ZWQpIHtcbiAgICBsZXQgbGFzdCA9IGNvbXBvbmVudHNbY29tcG9uZW50cy5sZW5ndGggLSAxXTtcbiAgICBpZiAobGFzdCAmJiBsYXN0LmFkZGVkID09PSBhZGRlZCAmJiBsYXN0LnJlbW92ZWQgPT09IHJlbW92ZWQpIHtcbiAgICAgIC8vIFdlIG5lZWQgdG8gY2xvbmUgaGVyZSBhcyB0aGUgY29tcG9uZW50IGNsb25lIG9wZXJhdGlvbiBpcyBqdXN0XG4gICAgICAvLyBhcyBzaGFsbG93IGFycmF5IGNsb25lXG4gICAgICBjb21wb25lbnRzW2NvbXBvbmVudHMubGVuZ3RoIC0gMV0gPSB7Y291bnQ6IGxhc3QuY291bnQgKyAxLCBhZGRlZDogYWRkZWQsIHJlbW92ZWQ6IHJlbW92ZWQgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcG9uZW50cy5wdXNoKHtjb3VudDogMSwgYWRkZWQ6IGFkZGVkLCByZW1vdmVkOiByZW1vdmVkIH0pO1xuICAgIH1cbiAgfSxcbiAgZXh0cmFjdENvbW1vbihiYXNlUGF0aCwgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIGRpYWdvbmFsUGF0aCkge1xuICAgIGxldCBuZXdMZW4gPSBuZXdTdHJpbmcubGVuZ3RoLFxuICAgICAgICBvbGRMZW4gPSBvbGRTdHJpbmcubGVuZ3RoLFxuICAgICAgICBuZXdQb3MgPSBiYXNlUGF0aC5uZXdQb3MsXG4gICAgICAgIG9sZFBvcyA9IG5ld1BvcyAtIGRpYWdvbmFsUGF0aCxcblxuICAgICAgICBjb21tb25Db3VudCA9IDA7XG4gICAgd2hpbGUgKG5ld1BvcyArIDEgPCBuZXdMZW4gJiYgb2xkUG9zICsgMSA8IG9sZExlbiAmJiB0aGlzLmVxdWFscyhuZXdTdHJpbmdbbmV3UG9zICsgMV0sIG9sZFN0cmluZ1tvbGRQb3MgKyAxXSkpIHtcbiAgICAgIG5ld1BvcysrO1xuICAgICAgb2xkUG9zKys7XG4gICAgICBjb21tb25Db3VudCsrO1xuICAgIH1cblxuICAgIGlmIChjb21tb25Db3VudCkge1xuICAgICAgYmFzZVBhdGguY29tcG9uZW50cy5wdXNoKHtjb3VudDogY29tbW9uQ291bnR9KTtcbiAgICB9XG5cbiAgICBiYXNlUGF0aC5uZXdQb3MgPSBuZXdQb3M7XG4gICAgcmV0dXJuIG9sZFBvcztcbiAgfSxcblxuICBlcXVhbHMobGVmdCwgcmlnaHQpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhcmF0b3IpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY29tcGFyYXRvcihsZWZ0LCByaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsZWZ0ID09PSByaWdodFxuICAgICAgICB8fCAodGhpcy5vcHRpb25zLmlnbm9yZUNhc2UgJiYgbGVmdC50b0xvd2VyQ2FzZSgpID09PSByaWdodC50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gIH0sXG4gIHJlbW92ZUVtcHR5KGFycmF5KSB7XG4gICAgbGV0IHJldCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhcnJheVtpXSkge1xuICAgICAgICByZXQucHVzaChhcnJheVtpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH0sXG4gIGNhc3RJbnB1dCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcbiAgdG9rZW5pemUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc3BsaXQoJycpO1xuICB9LFxuICBqb2luKGNoYXJzKSB7XG4gICAgcmV0dXJuIGNoYXJzLmpvaW4oJycpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBidWlsZFZhbHVlcyhkaWZmLCBjb21wb25lbnRzLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgdXNlTG9uZ2VzdFRva2VuKSB7XG4gIGxldCBjb21wb25lbnRQb3MgPSAwLFxuICAgICAgY29tcG9uZW50TGVuID0gY29tcG9uZW50cy5sZW5ndGgsXG4gICAgICBuZXdQb3MgPSAwLFxuICAgICAgb2xkUG9zID0gMDtcblxuICBmb3IgKDsgY29tcG9uZW50UG9zIDwgY29tcG9uZW50TGVuOyBjb21wb25lbnRQb3MrKykge1xuICAgIGxldCBjb21wb25lbnQgPSBjb21wb25lbnRzW2NvbXBvbmVudFBvc107XG4gICAgaWYgKCFjb21wb25lbnQucmVtb3ZlZCkge1xuICAgICAgaWYgKCFjb21wb25lbnQuYWRkZWQgJiYgdXNlTG9uZ2VzdFRva2VuKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IG5ld1N0cmluZy5zbGljZShuZXdQb3MsIG5ld1BvcyArIGNvbXBvbmVudC5jb3VudCk7XG4gICAgICAgIHZhbHVlID0gdmFsdWUubWFwKGZ1bmN0aW9uKHZhbHVlLCBpKSB7XG4gICAgICAgICAgbGV0IG9sZFZhbHVlID0gb2xkU3RyaW5nW29sZFBvcyArIGldO1xuICAgICAgICAgIHJldHVybiBvbGRWYWx1ZS5sZW5ndGggPiB2YWx1ZS5sZW5ndGggPyBvbGRWYWx1ZSA6IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb21wb25lbnQudmFsdWUgPSBkaWZmLmpvaW4odmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50LnZhbHVlID0gZGlmZi5qb2luKG5ld1N0cmluZy5zbGljZShuZXdQb3MsIG5ld1BvcyArIGNvbXBvbmVudC5jb3VudCkpO1xuICAgICAgfVxuICAgICAgbmV3UG9zICs9IGNvbXBvbmVudC5jb3VudDtcblxuICAgICAgLy8gQ29tbW9uIGNhc2VcbiAgICAgIGlmICghY29tcG9uZW50LmFkZGVkKSB7XG4gICAgICAgIG9sZFBvcyArPSBjb21wb25lbnQuY291bnQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBvbmVudC52YWx1ZSA9IGRpZmYuam9pbihvbGRTdHJpbmcuc2xpY2Uob2xkUG9zLCBvbGRQb3MgKyBjb21wb25lbnQuY291bnQpKTtcbiAgICAgIG9sZFBvcyArPSBjb21wb25lbnQuY291bnQ7XG5cbiAgICAgIC8vIFJldmVyc2UgYWRkIGFuZCByZW1vdmUgc28gcmVtb3ZlcyBhcmUgb3V0cHV0IGZpcnN0IHRvIG1hdGNoIGNvbW1vbiBjb252ZW50aW9uXG4gICAgICAvLyBUaGUgZGlmZmluZyBhbGdvcml0aG0gaXMgdGllZCB0byBhZGQgdGhlbiByZW1vdmUgb3V0cHV0IGFuZCB0aGlzIGlzIHRoZSBzaW1wbGVzdFxuICAgICAgLy8gcm91dGUgdG8gZ2V0IHRoZSBkZXNpcmVkIG91dHB1dCB3aXRoIG1pbmltYWwgb3ZlcmhlYWQuXG4gICAgICBpZiAoY29tcG9uZW50UG9zICYmIGNvbXBvbmVudHNbY29tcG9uZW50UG9zIC0gMV0uYWRkZWQpIHtcbiAgICAgICAgbGV0IHRtcCA9IGNvbXBvbmVudHNbY29tcG9uZW50UG9zIC0gMV07XG4gICAgICAgIGNvbXBvbmVudHNbY29tcG9uZW50UG9zIC0gMV0gPSBjb21wb25lbnRzW2NvbXBvbmVudFBvc107XG4gICAgICAgIGNvbXBvbmVudHNbY29tcG9uZW50UG9zXSA9IHRtcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTcGVjaWFsIGNhc2UgaGFuZGxlIGZvciB3aGVuIG9uZSB0ZXJtaW5hbCBpcyBpZ25vcmVkIChpLmUuIHdoaXRlc3BhY2UpLlxuICAvLyBGb3IgdGhpcyBjYXNlIHdlIG1lcmdlIHRoZSB0ZXJtaW5hbCBpbnRvIHRoZSBwcmlvciBzdHJpbmcgYW5kIGRyb3AgdGhlIGNoYW5nZS5cbiAgLy8gVGhpcyBpcyBvbmx5IGF2YWlsYWJsZSBmb3Igc3RyaW5nIG1vZGUuXG4gIGxldCBsYXN0Q29tcG9uZW50ID0gY29tcG9uZW50c1tjb21wb25lbnRMZW4gLSAxXTtcbiAgaWYgKGNvbXBvbmVudExlbiA+IDFcbiAgICAgICYmIHR5cGVvZiBsYXN0Q29tcG9uZW50LnZhbHVlID09PSAnc3RyaW5nJ1xuICAgICAgJiYgKGxhc3RDb21wb25lbnQuYWRkZWQgfHwgbGFzdENvbXBvbmVudC5yZW1vdmVkKVxuICAgICAgJiYgZGlmZi5lcXVhbHMoJycsIGxhc3RDb21wb25lbnQudmFsdWUpKSB7XG4gICAgY29tcG9uZW50c1tjb21wb25lbnRMZW4gLSAyXS52YWx1ZSArPSBsYXN0Q29tcG9uZW50LnZhbHVlO1xuICAgIGNvbXBvbmVudHMucG9wKCk7XG4gIH1cblxuICByZXR1cm4gY29tcG9uZW50cztcbn1cblxuZnVuY3Rpb24gY2xvbmVQYXRoKHBhdGgpIHtcbiAgcmV0dXJuIHsgbmV3UG9zOiBwYXRoLm5ld1BvcywgY29tcG9uZW50czogcGF0aC5jb21wb25lbnRzLnNsaWNlKDApIH07XG59XG4iXX0=
