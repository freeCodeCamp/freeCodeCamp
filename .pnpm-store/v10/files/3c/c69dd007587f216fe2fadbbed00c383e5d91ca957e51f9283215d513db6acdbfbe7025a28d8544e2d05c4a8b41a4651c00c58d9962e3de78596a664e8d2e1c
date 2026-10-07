'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _scc = require('@rtsao/scc');var _scc2 = _interopRequireDefault(_scc);
var _hash = require('eslint-module-utils/hash');
var _resolve = require('eslint-module-utils/resolve');var _resolve2 = _interopRequireDefault(_resolve);
var _builder = require('./exportMap/builder');var _builder2 = _interopRequireDefault(_builder);
var _childContext = require('./exportMap/childContext');var _childContext2 = _interopRequireDefault(_childContext);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}

var cache = new Map();var

StronglyConnectedComponentsBuilder = function () {function StronglyConnectedComponentsBuilder() {_classCallCheck(this, StronglyConnectedComponentsBuilder);}_createClass(StronglyConnectedComponentsBuilder, null, [{ key: 'clearCache', value: function () {function clearCache()
      {
        cache = new Map();
      }return clearCache;}() }, { key: 'get', value: function () {function get(

      source, context) {
        var path = (0, _resolve2['default'])(source, context);
        if (path == null) {return null;}
        return StronglyConnectedComponentsBuilder['for']((0, _childContext2['default'])(path, context));
      }return get;}() }, { key: 'for', value: function () {function _for(

      context) {
        var settingsHash = (0, _hash.hashObject)({
          settings: context.settings,
          parserOptions: context.parserOptions,
          parserPath: context.parserPath }).
        digest('hex');
        var cacheKey = context.path + settingsHash;
        if (cache.has(cacheKey)) {
          return cache.get(cacheKey);
        }
        var scc = StronglyConnectedComponentsBuilder.calculate(context);
        var visitedFiles = Object.keys(scc);
        visitedFiles.forEach(function (filePath) {return cache.set(filePath + settingsHash, scc);});
        return scc;
      }return _for;}() }, { key: 'calculate', value: function () {function calculate(

      context) {
        var exportMap = _builder2['default']['for'](context);
        var adjacencyList = this.exportMapToAdjacencyList(exportMap);
        var calculatedScc = (0, _scc2['default'])(adjacencyList);
        return StronglyConnectedComponentsBuilder.calculatedSccToPlainObject(calculatedScc);
      }return calculate;}()

    /** @returns {Map<string, Set<string>>} for each dep, what are its direct deps */ }, { key: 'exportMapToAdjacencyList', value: function () {function exportMapToAdjacencyList(
      initialExportMap) {
        var adjacencyList = new Map();
        // BFS
        function visitNode(exportMap) {
          if (!exportMap) {
            return;
          }
          exportMap.imports.forEach(function (v, importedPath) {
            var from = exportMap.path;
            var to = importedPath;

            // Ignore type-only imports, because we care only about SCCs of value imports
            var toTraverse = [].concat(_toConsumableArray(v.declarations)).filter(function (_ref) {var isOnlyImportingTypes = _ref.isOnlyImportingTypes;return !isOnlyImportingTypes;});
            if (toTraverse.length === 0) {return;}

            if (!adjacencyList.has(from)) {
              adjacencyList.set(from, new Set());
            }

            if (adjacencyList.get(from).has(to)) {
              return; // prevent endless loop
            }
            adjacencyList.get(from).add(to);
            visitNode(v.getter());
          });
        }
        visitNode(initialExportMap);
        // Fill gaps
        adjacencyList.forEach(function (values) {
          values.forEach(function (value) {
            if (!adjacencyList.has(value)) {
              adjacencyList.set(value, new Set());
            }
          });
        });
        return adjacencyList;
      }return exportMapToAdjacencyList;}()

    /** @returns {Record<string, number>} for each key, its SCC's index */ }, { key: 'calculatedSccToPlainObject', value: function () {function calculatedSccToPlainObject(
      sccs) {
        var obj = {};
        sccs.forEach(function (scc, index) {
          scc.forEach(function (node) {
            obj[node] = index;
          });
        });
        return obj;
      }return calculatedSccToPlainObject;}() }]);return StronglyConnectedComponentsBuilder;}();exports['default'] = StronglyConnectedComponentsBuilder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zY2MuanMiXSwibmFtZXMiOlsiY2FjaGUiLCJNYXAiLCJTdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudHNCdWlsZGVyIiwic291cmNlIiwiY29udGV4dCIsInBhdGgiLCJzZXR0aW5nc0hhc2giLCJzZXR0aW5ncyIsInBhcnNlck9wdGlvbnMiLCJwYXJzZXJQYXRoIiwiZGlnZXN0IiwiY2FjaGVLZXkiLCJoYXMiLCJnZXQiLCJzY2MiLCJjYWxjdWxhdGUiLCJ2aXNpdGVkRmlsZXMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImZpbGVQYXRoIiwic2V0IiwiZXhwb3J0TWFwIiwiRXhwb3J0TWFwQnVpbGRlciIsImFkamFjZW5jeUxpc3QiLCJleHBvcnRNYXBUb0FkamFjZW5jeUxpc3QiLCJjYWxjdWxhdGVkU2NjIiwiY2FsY3VsYXRlZFNjY1RvUGxhaW5PYmplY3QiLCJpbml0aWFsRXhwb3J0TWFwIiwidmlzaXROb2RlIiwiaW1wb3J0cyIsInYiLCJpbXBvcnRlZFBhdGgiLCJmcm9tIiwidG8iLCJ0b1RyYXZlcnNlIiwiZGVjbGFyYXRpb25zIiwiZmlsdGVyIiwiaXNPbmx5SW1wb3J0aW5nVHlwZXMiLCJsZW5ndGgiLCJTZXQiLCJhZGQiLCJnZXR0ZXIiLCJ2YWx1ZXMiLCJ2YWx1ZSIsInNjY3MiLCJvYmoiLCJpbmRleCIsIm5vZGUiXSwibWFwcGluZ3MiOiJnbkJBQUEsaUM7QUFDQTtBQUNBLHNEO0FBQ0EsOEM7QUFDQSx3RDs7QUFFQSxJQUFJQSxRQUFRLElBQUlDLEdBQUosRUFBWixDOztBQUVxQkMsa0M7QUFDQztBQUNsQkYsZ0JBQVEsSUFBSUMsR0FBSixFQUFSO0FBQ0QsTzs7QUFFVUUsWSxFQUFRQyxPLEVBQVM7QUFDMUIsWUFBTUMsT0FBTywwQkFBUUYsTUFBUixFQUFnQkMsT0FBaEIsQ0FBYjtBQUNBLFlBQUlDLFFBQVEsSUFBWixFQUFrQixDQUFFLE9BQU8sSUFBUCxDQUFjO0FBQ2xDLGVBQU9ILDBDQUF1QywrQkFBYUcsSUFB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QWEsVUFBQ0wsR0FBRCxFQUFNaUMsS0FBTixFQUFnQjtBQUMzQmpDLGNBQUlLLE9BQUosQ0FBWSxVQUFDNkIsSUFBRCxFQUFVO0FBQ3BCRixnQkFBSUUsSUFBSixJQUFZRCxLQUFaO0FBQ0QsV0FGRDtBQUdELFNBSkQ7QUFLQSxlQUFPRCxHQUFQO0FBQ0QsTyw2R0FsRmtCNUMsa0MiLCJmaWxlIjoic2NjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNhbGN1bGF0ZVNjYyBmcm9tICdAcnRzYW8vc2NjJztcbmltcG9ydCB7IGhhc2hPYmplY3QgfSBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL2hhc2gnO1xuaW1wb3J0IHJlc29sdmUgZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy9yZXNvbHZlJztcbmltcG9ydCBFeHBvcnRNYXBCdWlsZGVyIGZyb20gJy4vZXhwb3J0TWFwL2J1aWxkZXInO1xuaW1wb3J0IGNoaWxkQ29udGV4dCBmcm9tICcuL2V4cG9ydE1hcC9jaGlsZENvbnRleHQnO1xuXG5sZXQgY2FjaGUgPSBuZXcgTWFwKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50c0J1aWxkZXIge1xuICBzdGF0aWMgY2xlYXJDYWNoZSgpIHtcbiAgICBjYWNoZSA9IG5ldyBNYXAoKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQoc291cmNlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcGF0aCA9IHJlc29sdmUoc291cmNlLCBjb250ZXh0KTtcbiAgICBpZiAocGF0aCA9PSBudWxsKSB7IHJldHVybiBudWxsOyB9XG4gICAgcmV0dXJuIFN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50c0J1aWxkZXIuZm9yKGNoaWxkQ29udGV4dChwYXRoLCBjb250ZXh0KSk7XG4gIH1cblxuICBzdGF0aWMgZm9yKGNvbnRleHQpIHtcbiAgICBjb25zdCBzZXR0aW5nc0hhc2ggPSBoYXNoT2JqZWN0KHtcbiAgICAgIHNldHRpbmdzOiBjb250ZXh0LnNldHRpbmdzLFxuICAgICAgcGFyc2VyT3B0aW9uczogY29udGV4dC5wYXJzZXJPcHRpb25zLFxuICAgICAgcGFyc2VyUGF0aDogY29udGV4dC5wYXJzZXJQYXRoLFxuICAgIH0pLmRpZ2VzdCgnaGV4Jyk7XG4gICAgY29uc3QgY2FjaGVLZXkgPSBjb250ZXh0LnBhdGggKyBzZXR0aW5nc0hhc2g7XG4gICAgaWYgKGNhY2hlLmhhcyhjYWNoZUtleSkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoY2FjaGVLZXkpO1xuICAgIH1cbiAgICBjb25zdCBzY2MgPSBTdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudHNCdWlsZGVyLmNhbGN1bGF0ZShjb250ZXh0KTtcbiAgICBjb25zdCB2aXNpdGVkRmlsZXMgPSBPYmplY3Qua2V5cyhzY2MpO1xuICAgIHZpc2l0ZWRGaWxlcy5mb3JFYWNoKChmaWxlUGF0aCkgPT4gY2FjaGUuc2V0KGZpbGVQYXRoICsgc2V0dGluZ3NIYXNoLCBzY2MpKTtcbiAgICByZXR1cm4gc2NjO1xuICB9XG5cbiAgc3RhdGljIGNhbGN1bGF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgZXhwb3J0TWFwID0gRXhwb3J0TWFwQnVpbGRlci5mb3IoY29udGV4dCk7XG4gICAgY29uc3QgYWRqYWNlbmN5TGlzdCA9IHRoaXMuZXhwb3J0TWFwVG9BZGphY2VuY3lMaXN0KGV4cG9ydE1hcCk7XG4gICAgY29uc3QgY2FsY3VsYXRlZFNjYyA9IGNhbGN1bGF0ZVNjYyhhZGphY2VuY3lMaXN0KTtcbiAgICByZXR1cm4gU3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnRzQnVpbGRlci5jYWxjdWxhdGVkU2NjVG9QbGFpbk9iamVjdChjYWxjdWxhdGVkU2NjKTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJucyB7TWFwPHN0cmluZywgU2V0PHN0cmluZz4+fSBmb3IgZWFjaCBkZXAsIHdoYXQgYXJlIGl0cyBkaXJlY3QgZGVwcyAqL1xuICBzdGF0aWMgZXhwb3J0TWFwVG9BZGphY2VuY3lMaXN0KGluaXRpYWxFeHBvcnRNYXApIHtcbiAgICBjb25zdCBhZGphY2VuY3lMaXN0ID0gbmV3IE1hcCgpO1xuICAgIC8vIEJGU1xuICAgIGZ1bmN0aW9uIHZpc2l0Tm9kZShleHBvcnRNYXApIHtcbiAgICAgIGlmICghZXhwb3J0TWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV4cG9ydE1hcC5pbXBvcnRzLmZvckVhY2goKHYsIGltcG9ydGVkUGF0aCkgPT4ge1xuICAgICAgICBjb25zdCBmcm9tID0gZXhwb3J0TWFwLnBhdGg7XG4gICAgICAgIGNvbnN0IHRvID0gaW1wb3J0ZWRQYXRoO1xuXG4gICAgICAgIC8vIElnbm9yZSB0eXBlLW9ubHkgaW1wb3J0cywgYmVjYXVzZSB3ZSBjYXJlIG9ubHkgYWJvdXQgU0NDcyBvZiB2YWx1ZSBpbXBvcnRzXG4gICAgICAgIGNvbnN0IHRvVHJhdmVyc2UgPSBbLi4udi5kZWNsYXJhdGlvbnNdLmZpbHRlcigoeyBpc09ubHlJbXBvcnRpbmdUeXBlcyB9KSA9PiAhaXNPbmx5SW1wb3J0aW5nVHlwZXMpO1xuICAgICAgICBpZiAodG9UcmF2ZXJzZS5sZW5ndGggPT09IDApIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgaWYgKCFhZGphY2VuY3lMaXN0Lmhhcyhmcm9tKSkge1xuICAgICAgICAgIGFkamFjZW5jeUxpc3Quc2V0KGZyb20sIG5ldyBTZXQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWRqYWNlbmN5TGlzdC5nZXQoZnJvbSkuaGFzKHRvKSkge1xuICAgICAgICAgIHJldHVybjsgLy8gcHJldmVudCBlbmRsZXNzIGxvb3BcbiAgICAgICAgfVxuICAgICAgICBhZGphY2VuY3lMaXN0LmdldChmcm9tKS5hZGQodG8pO1xuICAgICAgICB2aXNpdE5vZGUodi5nZXR0ZXIoKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdmlzaXROb2RlKGluaXRpYWxFeHBvcnRNYXApO1xuICAgIC8vIEZpbGwgZ2Fwc1xuICAgIGFkamFjZW5jeUxpc3QuZm9yRWFjaCgodmFsdWVzKSA9PiB7XG4gICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKCFhZGphY2VuY3lMaXN0Lmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgICBhZGphY2VuY3lMaXN0LnNldCh2YWx1ZSwgbmV3IFNldCgpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFkamFjZW5jeUxpc3Q7XG4gIH1cblxuICAvKiogQHJldHVybnMge1JlY29yZDxzdHJpbmcsIG51bWJlcj59IGZvciBlYWNoIGtleSwgaXRzIFNDQydzIGluZGV4ICovXG4gIHN0YXRpYyBjYWxjdWxhdGVkU2NjVG9QbGFpbk9iamVjdChzY2NzKSB7XG4gICAgY29uc3Qgb2JqID0ge307XG4gICAgc2Njcy5mb3JFYWNoKChzY2MsIGluZGV4KSA9PiB7XG4gICAgICBzY2MuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBvYmpbbm9kZV0gPSBpbmRleDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBvYmo7XG4gIH1cbn1cbiJdfQ==