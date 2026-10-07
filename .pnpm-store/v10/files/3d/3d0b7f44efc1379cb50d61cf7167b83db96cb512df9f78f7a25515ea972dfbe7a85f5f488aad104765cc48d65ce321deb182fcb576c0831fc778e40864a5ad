'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var ExportMap = function () {
  function ExportMap(path) {_classCallCheck(this, ExportMap);
    this.path = path;
    this.namespace = new Map();
    // todo: restructure to key on path, value is resolver + map of names
    this.reexports = new Map();
    /**
                                 * star-exports
                                 * @type {Set<() => ExportMap>}
                                 */
    this.dependencies = new Set();
    /**
                                    * dependencies of this module that are not explicitly re-exported
                                    * @type {Map<string, () => ExportMap>}
                                    */
    this.imports = new Map();
    this.errors = [];
    /**
                       * type {'ambiguous' | 'Module' | 'Script'}
                       */
    this.parseGoal = 'ambiguous';
  }_createClass(ExportMap, [{ key: 'has',














    /**
                                           * Note that this does not check explicitly re-exported names for existence
                                           * in the base namespace, but it will expand all `export * from '...'` exports
                                           * if not found in the explicit namespace.
                                           * @param  {string}  name
                                           * @return {boolean} true if `name` is exported by this module.
                                           */value: function () {function has(
      name) {
        if (this.namespace.has(name)) {return true;}
        if (this.reexports.has(name)) {return true;}

        // default exports must be explicitly re-exported (#328)
        if (name !== 'default') {var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
            for (var _iterator = this.dependencies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var dep = _step.value;
              var innerMap = dep();

              // todo: report as unresolved?
              if (!innerMap) {continue;}

              if (innerMap.has(name)) {return true;}
            }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator['return']) {_iterator['return']();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
        }

        return false;
      }return has;}()

    /**
                       * ensure that imported name fully resolves.
                       * @param  {string} name
                       * @return {{ found: boolean, path: ExportMap[] }}
                       */ }, { key: 'hasDeep', value: function () {function hasDeep(
      name) {
        if (this.namespace.has(name)) {return { found: true, path: [this] };}

        if (this.reexports.has(name)) {
          var reexports = this.reexports.get(name);
          var imported = reexports.getImport();

          // if import is ignored, return explicit 'null'
          if (imported == null) {return { found: true, path: [this] };}

          // safeguard against cycles, only if name matches
          if (imported.path === this.path && reexports.local === name) {
            return { found: false, path: [this] };
          }

          var deep = imported.hasDeep(reexports.local);
          deep.path.unshift(this);

          return deep;
        }

        // default exports must be explicitly re-exported (#328)
        if (name !== 'default') {var _iteratorNormalCompletion2 = true;var _didIteratorError2 = false;var _iteratorError2 = undefined;try {
            for (var _iterator2 = this.dependencies[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {var dep = _step2.value;
              var innerMap = dep();
              if (innerMap == null) {return { found: true, path: [this] };}
              // todo: report as unresolved?
              if (!innerMap) {continue;}

              // safeguard against cycles
              if (innerMap.path === this.path) {continue;}

              var innerValue = innerMap.hasDeep(name);
              if (innerValue.found) {
                innerValue.path.unshift(this);
                return innerValue;
              }
            }} catch (err) {_didIteratorError2 = true;_iteratorError2 = err;} finally {try {if (!_iteratorNormalCompletion2 && _iterator2['return']) {_iterator2['return']();}} finally {if (_didIteratorError2) {throw _iteratorError2;}}}
        }

        return { found: false, path: [this] };
      }return hasDeep;}() }, { key: 'get', value: function () {function get(

      name) {
        if (this.namespace.has(name)) {return this.namespace.get(name);}

        if (this.reexports.has(name)) {
          var reexports = this.reexports.get(name);
          var imported = reexports.getImport();

          // if import is ignored, return explicit 'null'
          if (imported == null) {return null;}

          // safeguard against cycles, only if name matches
          if (imported.path === this.path && reexports.local === name) {return undefined;}

          return imported.get(reexports.local);
        }

        // default exports must be explicitly re-exported (#328)
        if (name !== 'default') {var _iteratorNormalCompletion3 = true;var _didIteratorError3 = false;var _iteratorError3 = undefined;try {
            for (var _iterator3 = this.dependencies[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {var dep = _step3.value;
              var innerMap = dep();
              // todo: report as unresolved?
              if (!innerMap) {continue;}

              // safeguard against cycles
              if (innerMap.path === this.path) {continue;}

              var innerValue = innerMap.get(name);
              if (innerValue !== undefined) {return innerValue;}
            }} catch (err) {_didIteratorError3 = true;_iteratorError3 = err;} finally {try {if (!_iteratorNormalCompletion3 && _iterator3['return']) {_iterator3['return']();}} finally {if (_didIteratorError3) {throw _iteratorError3;}}}
        }

        return undefined;
      }return get;}() }, { key: 'forEach', value: function () {function forEach(

      callback, thisArg) {var _this = this;
        this.namespace.forEach(function (v, n) {callback.call(thisArg, v, n, _this);});

        this.reexports.forEach(function (reexports, name) {
          var reexported = reexports.getImport();
          // can't look up meta for ignored re-exports (#348)
          callback.call(thisArg, reexported && reexported.get(reexports.local), name, _this);
        });

        this.dependencies.forEach(function (dep) {
          var d = dep();
          // CJS / ignored dependencies won't exist (#717)
          if (d == null) {return;}

          d.forEach(function (v, n) {
            if (n !== 'default') {
              callback.call(thisArg, v, n, _this);
            }
          });
        });
      }return forEach;}()

    // todo: keys, values, entries?
  }, { key: 'reportErrors', value: function () {function reportErrors(
      context, declaration) {
        var msg = this.errors.
        map(function (e) {return String(e.message) + ' (' + String(e.lineNumber) + ':' + String(e.column) + ')';}).
        join(', ');
        context.report({
          node: declaration.source,
          message: 'Parse errors in imported module \'' + String(declaration.source.value) + '\': ' + String(msg) });

      }return reportErrors;}() }, { key: 'hasDefault', get: function () {function get() {return this.get('default') != null;}return get;}() // stronger than this.has
  }, { key: 'size', get: function () {function get() {var size = this.namespace.size + this.reexports.size;this.dependencies.forEach(function (dep) {var d = dep(); // CJS / ignored dependencies won't exist (#717)
          if (d == null) {return;}size += d.size;});return size;}return get;}() }]);return ExportMap;}();exports['default'] = ExportMap;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHBvcnRNYXAvaW5kZXguanMiXSwibmFtZXMiOlsiRXhwb3J0TWFwIiwicGF0aCIsIm5hbWVzcGFjZSIsIk1hcCIsInJlZXhwb3J0cyIsImRlcGVuZGVuY2llcyIsIlNldCIsImltcG9ydHMiLCJlcnJvcnMiLCJwYXJzZUdvYWwiLCJuYW1lIiwiaGFzIiwiZGVwIiwiaW5uZXJNYXAiLCJmb3VuZCIsImdldCIsImltcG9ydGVkIiwiZ2V0SW1wb3J0IiwibG9jYWwiLCJkZWVwIiwiaGFzRGVlcCIsInVuc2hpZnQiLCJpbm5lclZhbHVlIiwidW5kZWZpbmVkIiwiY2FsbGJhY2siLCJ0aGlzQXJnIiwiZm9yRWFjaCIsInYiLCJuIiwiY2FsbCIsInJlZXhwb3J0ZWQiLCJkIiwiY29udGV4dCIsImRlY2xhcmF0aW9uIiwibXNnIiwibWFwIiwiZSIsIm1lc3NhZ2UiLCJsaW5lTnVtYmVyIiwiY29sdW1uIiwiam9pbiIsInJlcG9ydCIsIm5vZGUiLCJzb3VyY2UiLCJ2YWx1ZSIsInNpemUiXSwibWFwcGluZ3MiOiJ5d0JBQXFCQSxTO0FBQ25CLHFCQUFZQyxJQUFaLEVBQWtCO0FBQ2hCLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsSUFBSUMsR0FBSixFQUFqQjtBQUNBO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixJQUFJRCxHQUFKLEVBQWpCO0FBQ0E7Ozs7QUFJQSxTQUFLRSxZQUFMLEdBQW9CLElBQUlDLEdBQUosRUFBcEI7QUFDQTs7OztBQUlBLFNBQUtDLE9BQUwsR0FBZSxJQUFJSixHQUFKLEVBQWY7QUFDQSxTQUFLSyxNQUFMLEdBQWMsRUFBZDtBQUNBOzs7QUFHQSxTQUFLQyxTQUFMLEdBQWlCLFdBQWpCO0FBQ0QsRzs7Ozs7Ozs7Ozs7Ozs7O0FBZUQ7Ozs7Ozs7QUFPSUMsVSxFQUFNO0FBQ1IsWUFBSSxLQUFLUixTQUFMLENBQWVTLEdBQWYsQ0FBbUJELElBQW5CLENBQUosRUFBOEIsQ0FBRSxPQUFPLElB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SyxJQUFULEVBQWUsQ0FBRSxPQUFTLENBQzFCYyxRQUFRZCxFQUFFYyxJQUFWLENBQ0QsQ0FMRCxFQU1BLE9BQU9BLElBQVAsQ0FDRCxDLDZEQWxDa0I3QyxTIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwb3J0TWFwIHtcbiAgY29uc3RydWN0b3IocGF0aCkge1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy5uYW1lc3BhY2UgPSBuZXcgTWFwKCk7XG4gICAgLy8gdG9kbzogcmVzdHJ1Y3R1cmUgdG8ga2V5IG9uIHBhdGgsIHZhbHVlIGlzIHJlc29sdmVyICsgbWFwIG9mIG5hbWVzXG4gICAgdGhpcy5yZWV4cG9ydHMgPSBuZXcgTWFwKCk7XG4gICAgLyoqXG4gICAgICogc3Rhci1leHBvcnRzXG4gICAgICogQHR5cGUge1NldDwoKSA9PiBFeHBvcnRNYXA+fVxuICAgICAqL1xuICAgIHRoaXMuZGVwZW5kZW5jaWVzID0gbmV3IFNldCgpO1xuICAgIC8qKlxuICAgICAqIGRlcGVuZGVuY2llcyBvZiB0aGlzIG1vZHVsZSB0aGF0IGFyZSBub3QgZXhwbGljaXRseSByZS1leHBvcnRlZFxuICAgICAqIEB0eXBlIHtNYXA8c3RyaW5nLCAoKSA9PiBFeHBvcnRNYXA+fVxuICAgICAqL1xuICAgIHRoaXMuaW1wb3J0cyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgIC8qKlxuICAgICAqIHR5cGUgeydhbWJpZ3VvdXMnIHwgJ01vZHVsZScgfCAnU2NyaXB0J31cbiAgICAgKi9cbiAgICB0aGlzLnBhcnNlR29hbCA9ICdhbWJpZ3VvdXMnO1xuICB9XG5cbiAgZ2V0IGhhc0RlZmF1bHQoKSB7IHJldHVybiB0aGlzLmdldCgnZGVmYXVsdCcpICE9IG51bGw7IH0gLy8gc3Ryb25nZXIgdGhhbiB0aGlzLmhhc1xuXG4gIGdldCBzaXplKCkge1xuICAgIGxldCBzaXplID0gdGhpcy5uYW1lc3BhY2Uuc2l6ZSArIHRoaXMucmVleHBvcnRzLnNpemU7XG4gICAgdGhpcy5kZXBlbmRlbmNpZXMuZm9yRWFjaCgoZGVwKSA9PiB7XG4gICAgICBjb25zdCBkID0gZGVwKCk7XG4gICAgICAvLyBDSlMgLyBpZ25vcmVkIGRlcGVuZGVuY2llcyB3b24ndCBleGlzdCAoIzcxNylcbiAgICAgIGlmIChkID09IG51bGwpIHsgcmV0dXJuOyB9XG4gICAgICBzaXplICs9IGQuc2l6ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2l6ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOb3RlIHRoYXQgdGhpcyBkb2VzIG5vdCBjaGVjayBleHBsaWNpdGx5IHJlLWV4cG9ydGVkIG5hbWVzIGZvciBleGlzdGVuY2VcbiAgICogaW4gdGhlIGJhc2UgbmFtZXNwYWNlLCBidXQgaXQgd2lsbCBleHBhbmQgYWxsIGBleHBvcnQgKiBmcm9tICcuLi4nYCBleHBvcnRzXG4gICAqIGlmIG5vdCBmb3VuZCBpbiB0aGUgZXhwbGljaXQgbmFtZXNwYWNlLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9ICBuYW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgYG5hbWVgIGlzIGV4cG9ydGVkIGJ5IHRoaXMgbW9kdWxlLlxuICAgKi9cbiAgaGFzKG5hbWUpIHtcbiAgICBpZiAodGhpcy5uYW1lc3BhY2UuaGFzKG5hbWUpKSB7IHJldHVybiB0cnVlOyB9XG4gICAgaWYgKHRoaXMucmVleHBvcnRzLmhhcyhuYW1lKSkgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gICAgLy8gZGVmYXVsdCBleHBvcnRzIG11c3QgYmUgZXhwbGljaXRseSByZS1leHBvcnRlZCAoIzMyOClcbiAgICBpZiAobmFtZSAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgICBmb3IgKGNvbnN0IGRlcCBvZiB0aGlzLmRlcGVuZGVuY2llcykge1xuICAgICAgICBjb25zdCBpbm5lck1hcCA9IGRlcCgpO1xuXG4gICAgICAgIC8vIHRvZG86IHJlcG9ydCBhcyB1bnJlc29sdmVkP1xuICAgICAgICBpZiAoIWlubmVyTWFwKSB7IGNvbnRpbnVlOyB9XG5cbiAgICAgICAgaWYgKGlubmVyTWFwLmhhcyhuYW1lKSkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBlbnN1cmUgdGhhdCBpbXBvcnRlZCBuYW1lIGZ1bGx5IHJlc29sdmVzLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IG5hbWVcbiAgICogQHJldHVybiB7eyBmb3VuZDogYm9vbGVhbiwgcGF0aDogRXhwb3J0TWFwW10gfX1cbiAgICovXG4gIGhhc0RlZXAobmFtZSkge1xuICAgIGlmICh0aGlzLm5hbWVzcGFjZS5oYXMobmFtZSkpIHsgcmV0dXJuIHsgZm91bmQ6IHRydWUsIHBhdGg6IFt0aGlzXSB9OyB9XG5cbiAgICBpZiAodGhpcy5yZWV4cG9ydHMuaGFzKG5hbWUpKSB7XG4gICAgICBjb25zdCByZWV4cG9ydHMgPSB0aGlzLnJlZXhwb3J0cy5nZXQobmFtZSk7XG4gICAgICBjb25zdCBpbXBvcnRlZCA9IHJlZXhwb3J0cy5nZXRJbXBvcnQoKTtcblxuICAgICAgLy8gaWYgaW1wb3J0IGlzIGlnbm9yZWQsIHJldHVybiBleHBsaWNpdCAnbnVsbCdcbiAgICAgIGlmIChpbXBvcnRlZCA9PSBudWxsKSB7IHJldHVybiB7IGZvdW5kOiB0cnVlLCBwYXRoOiBbdGhpc10gfTsgfVxuXG4gICAgICAvLyBzYWZlZ3VhcmQgYWdhaW5zdCBjeWNsZXMsIG9ubHkgaWYgbmFtZSBtYXRjaGVzXG4gICAgICBpZiAoaW1wb3J0ZWQucGF0aCA9PT0gdGhpcy5wYXRoICYmIHJlZXhwb3J0cy5sb2NhbCA9PT0gbmFtZSkge1xuICAgICAgICByZXR1cm4geyBmb3VuZDogZmFsc2UsIHBhdGg6IFt0aGlzXSB9O1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkZWVwID0gaW1wb3J0ZWQuaGFzRGVlcChyZWV4cG9ydHMubG9jYWwpO1xuICAgICAgZGVlcC5wYXRoLnVuc2hpZnQodGhpcyk7XG5cbiAgICAgIHJldHVybiBkZWVwO1xuICAgIH1cblxuICAgIC8vIGRlZmF1bHQgZXhwb3J0cyBtdXN0IGJlIGV4cGxpY2l0bHkgcmUtZXhwb3J0ZWQgKCMzMjgpXG4gICAgaWYgKG5hbWUgIT09ICdkZWZhdWx0Jykge1xuICAgICAgZm9yIChjb25zdCBkZXAgb2YgdGhpcy5kZXBlbmRlbmNpZXMpIHtcbiAgICAgICAgY29uc3QgaW5uZXJNYXAgPSBkZXAoKTtcbiAgICAgICAgaWYgKGlubmVyTWFwID09IG51bGwpIHsgcmV0dXJuIHsgZm91bmQ6IHRydWUsIHBhdGg6IFt0aGlzXSB9OyB9XG4gICAgICAgIC8vIHRvZG86IHJlcG9ydCBhcyB1bnJlc29sdmVkP1xuICAgICAgICBpZiAoIWlubmVyTWFwKSB7IGNvbnRpbnVlOyB9XG5cbiAgICAgICAgLy8gc2FmZWd1YXJkIGFnYWluc3QgY3ljbGVzXG4gICAgICAgIGlmIChpbm5lck1hcC5wYXRoID09PSB0aGlzLnBhdGgpIHsgY29udGludWU7IH1cblxuICAgICAgICBjb25zdCBpbm5lclZhbHVlID0gaW5uZXJNYXAuaGFzRGVlcChuYW1lKTtcbiAgICAgICAgaWYgKGlubmVyVmFsdWUuZm91bmQpIHtcbiAgICAgICAgICBpbm5lclZhbHVlLnBhdGgudW5zaGlmdCh0aGlzKTtcbiAgICAgICAgICByZXR1cm4gaW5uZXJWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IGZvdW5kOiBmYWxzZSwgcGF0aDogW3RoaXNdIH07XG4gIH1cblxuICBnZXQobmFtZSkge1xuICAgIGlmICh0aGlzLm5hbWVzcGFjZS5oYXMobmFtZSkpIHsgcmV0dXJuIHRoaXMubmFtZXNwYWNlLmdldChuYW1lKTsgfVxuXG4gICAgaWYgKHRoaXMucmVleHBvcnRzLmhhcyhuYW1lKSkge1xuICAgICAgY29uc3QgcmVleHBvcnRzID0gdGhpcy5yZWV4cG9ydHMuZ2V0KG5hbWUpO1xuICAgICAgY29uc3QgaW1wb3J0ZWQgPSByZWV4cG9ydHMuZ2V0SW1wb3J0KCk7XG5cbiAgICAgIC8vIGlmIGltcG9ydCBpcyBpZ25vcmVkLCByZXR1cm4gZXhwbGljaXQgJ251bGwnXG4gICAgICBpZiAoaW1wb3J0ZWQgPT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxuXG4gICAgICAvLyBzYWZlZ3VhcmQgYWdhaW5zdCBjeWNsZXMsIG9ubHkgaWYgbmFtZSBtYXRjaGVzXG4gICAgICBpZiAoaW1wb3J0ZWQucGF0aCA9PT0gdGhpcy5wYXRoICYmIHJlZXhwb3J0cy5sb2NhbCA9PT0gbmFtZSkgeyByZXR1cm4gdW5kZWZpbmVkOyB9XG5cbiAgICAgIHJldHVybiBpbXBvcnRlZC5nZXQocmVleHBvcnRzLmxvY2FsKTtcbiAgICB9XG5cbiAgICAvLyBkZWZhdWx0IGV4cG9ydHMgbXVzdCBiZSBleHBsaWNpdGx5IHJlLWV4cG9ydGVkICgjMzI4KVxuICAgIGlmIChuYW1lICE9PSAnZGVmYXVsdCcpIHtcbiAgICAgIGZvciAoY29uc3QgZGVwIG9mIHRoaXMuZGVwZW5kZW5jaWVzKSB7XG4gICAgICAgIGNvbnN0IGlubmVyTWFwID0gZGVwKCk7XG4gICAgICAgIC8vIHRvZG86IHJlcG9ydCBhcyB1bnJlc29sdmVkP1xuICAgICAgICBpZiAoIWlubmVyTWFwKSB7IGNvbnRpbnVlOyB9XG5cbiAgICAgICAgLy8gc2FmZWd1YXJkIGFnYWluc3QgY3ljbGVzXG4gICAgICAgIGlmIChpbm5lck1hcC5wYXRoID09PSB0aGlzLnBhdGgpIHsgY29udGludWU7IH1cblxuICAgICAgICBjb25zdCBpbm5lclZhbHVlID0gaW5uZXJNYXAuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAoaW5uZXJWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7IHJldHVybiBpbm5lclZhbHVlOyB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZvckVhY2goY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICB0aGlzLm5hbWVzcGFjZS5mb3JFYWNoKCh2LCBuKSA9PiB7IGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdiwgbiwgdGhpcyk7IH0pO1xuXG4gICAgdGhpcy5yZWV4cG9ydHMuZm9yRWFjaCgocmVleHBvcnRzLCBuYW1lKSA9PiB7XG4gICAgICBjb25zdCByZWV4cG9ydGVkID0gcmVleHBvcnRzLmdldEltcG9ydCgpO1xuICAgICAgLy8gY2FuJ3QgbG9vayB1cCBtZXRhIGZvciBpZ25vcmVkIHJlLWV4cG9ydHMgKCMzNDgpXG4gICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHJlZXhwb3J0ZWQgJiYgcmVleHBvcnRlZC5nZXQocmVleHBvcnRzLmxvY2FsKSwgbmFtZSwgdGhpcyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRlcGVuZGVuY2llcy5mb3JFYWNoKChkZXApID0+IHtcbiAgICAgIGNvbnN0IGQgPSBkZXAoKTtcbiAgICAgIC8vIENKUyAvIGlnbm9yZWQgZGVwZW5kZW5jaWVzIHdvbid0IGV4aXN0ICgjNzE3KVxuICAgICAgaWYgKGQgPT0gbnVsbCkgeyByZXR1cm47IH1cblxuICAgICAgZC5mb3JFYWNoKCh2LCBuKSA9PiB7XG4gICAgICAgIGlmIChuICE9PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHYsIG4sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHRvZG86IGtleXMsIHZhbHVlcywgZW50cmllcz9cblxuICByZXBvcnRFcnJvcnMoY29udGV4dCwgZGVjbGFyYXRpb24pIHtcbiAgICBjb25zdCBtc2cgPSB0aGlzLmVycm9yc1xuICAgICAgLm1hcCgoZSkgPT4gYCR7ZS5tZXNzYWdlfSAoJHtlLmxpbmVOdW1iZXJ9OiR7ZS5jb2x1bW59KWApXG4gICAgICAuam9pbignLCAnKTtcbiAgICBjb250ZXh0LnJlcG9ydCh7XG4gICAgICBub2RlOiBkZWNsYXJhdGlvbi5zb3VyY2UsXG4gICAgICBtZXNzYWdlOiBgUGFyc2UgZXJyb3JzIGluIGltcG9ydGVkIG1vZHVsZSAnJHtkZWNsYXJhdGlvbi5zb3VyY2UudmFsdWV9JzogJHttc2d9YCxcbiAgICB9KTtcbiAgfVxufVxuIl19