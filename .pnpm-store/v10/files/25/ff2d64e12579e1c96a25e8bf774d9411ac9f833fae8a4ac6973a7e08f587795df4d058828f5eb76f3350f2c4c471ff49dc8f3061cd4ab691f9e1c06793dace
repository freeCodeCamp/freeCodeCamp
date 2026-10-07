'use strict';var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var _slicedToArray = function () {function sliceIterator(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"]) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}return function (arr, i) {if (Array.isArray(arr)) {return arr;} else if (Symbol.iterator in Object(arr)) {return sliceIterator(arr, i);} else {throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @fileOverview Ensures that no imported module imports the linted module.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Ben Mosher
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var _contextCompat = require('eslint-module-utils/contextCompat');
var _moduleVisitor = require('eslint-module-utils/moduleVisitor');var _moduleVisitor2 = _interopRequireDefault(_moduleVisitor);
var _resolve = require('eslint-module-utils/resolve');var _resolve2 = _interopRequireDefault(_resolve);

var _builder = require('../exportMap/builder');var _builder2 = _interopRequireDefault(_builder);
var _scc = require('../scc');var _scc2 = _interopRequireDefault(_scc);
var _importType = require('../core/importType');
var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}}

var traversed = new Set();

function routeString(route) {
  return route.map(function (s) {return String(s.value) + ':' + String(s.loc.start.line);}).join('=>');
}

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Static analysis',
      description: 'Forbid a module from importing a module with a dependency path back to itself.',
      url: (0, _docsUrl2['default'])('no-cycle') },

    schema: [(0, _moduleVisitor.makeOptionsSchema)({
      maxDepth: {
        anyOf: [
        {
          description: 'maximum dependency depth to traverse',
          type: 'integer',
          minimum: 1 },

        {
          'enum': ['∞'],
          type: 'string' }] },



      ignoreExternal: {
        description: 'ignore external modules',
        type: 'boolean',
        'default': false },

      allowUnsafeDynamicCyclicDependency: {
        description: 'Allow cyclic dependency if there is at least one dynamic import in the chain',
        type: 'boolean',
        'default': false },

      disableScc: {
        description: 'When true, don\'t calculate a strongly-connected-components graph. SCC is used to reduce the time-complexity of cycle detection, but adds overhead.',
        type: 'boolean',
        'default': false } })] },




  create: function () {function create(context) {
      var myPath = (0, _contextCompat.getPhysicalFilename)(context);
      if (myPath === '<text>') {return {};} // can't cycle-check a non-file

      var options = context.options[0] || {};
      var maxDepth = typeof options.maxDepth === 'number' ? options.maxDepth : Infinity;
      var ignoreModule = function () {function ignoreModule(name) {return options.ignoreExternal && (0, _importType.isExternalModule)(
          name,
          (0, _resolve2['default'])(name, context),
          context);}return ignoreModule;}();


      var scc = options.disableScc ? {} : _scc2['default'].get(myPath, context);

      function checkSourceValue(sourceNode, importer) {
        if (ignoreModule(sourceNode.value)) {
          return; // ignore external modules
        }
        if (
        options.allowUnsafeDynamicCyclicDependency && (
        // Ignore `import()`
        importer.type === 'ImportExpression'
        // `require()` calls are always checked (if possible)
        || importer.type === 'CallExpression' && importer.callee.name !== 'require'))

        {
          return; // cycle via dynamic import allowed by config
        }

        if (
        importer.type === 'ImportDeclaration' && (
        // import type { Foo } (TS and Flow)
        importer.importKind === 'type'
        // import { type Foo } (Flow)
        || importer.specifiers.every(function (_ref) {var importKind = _ref.importKind;return importKind === 'type';})))

        {
          return; // ignore type imports
        }

        var imported = _builder2['default'].get(sourceNode.value, context);

        if (imported == null) {
          return; // no-unresolved territory
        }

        if (imported.path === myPath) {
          return; // no-self-import territory
        }

        /* If we're in the same Strongly Connected Component,
           * Then there exists a path from each node in the SCC to every other node in the SCC,
           * Then there exists at least one path from them to us and from us to them,
           * Then we have a cycle between us.
           */
        var hasDependencyCycle = options.disableScc || scc[myPath] === scc[imported.path];
        if (!hasDependencyCycle) {
          return;
        }

        var untraversed = [{ mget: function () {function mget() {return imported;}return mget;}(), route: [] }];
        function detectCycle(_ref2) {var mget = _ref2.mget,route = _ref2.route;
          var m = mget();
          if (m == null) {return;}
          if (traversed.has(m.path)) {return;}
          traversed.add(m.path);var _loop = function () {function _loop(

            path, getter, declarations) {
              // If we're in different SCCs, we can't have a circular dependency
              if (!options.disableScc && scc[myPath] !== scc[path]) {return 'continue';}

              if (traversed.has(path)) {return 'continue';}
              var toTraverse = [].concat(_toConsumableArray(declarations)).filter(function (_ref5) {var source = _ref5.source,isOnlyImportingTypes = _ref5.isOnlyImportingTypes;return !ignoreModule(source.value)
                // Ignore only type imports
                && !isOnlyImportingTypes;});


              /*
                                             If cyclic dependency is allowed via dynamic import, skip checking if any module is imported dynamically
                                             */
              if (options.allowUnsafeDynamicCyclicDependency && toTraverse.some(function (d) {return d.dynamic;})) {return { v: void 0 };}

              /*
                                                                                                                                           Only report as a cycle if there are any import declarations that are considered by
                                                                                                                                           the rule. For example:
                                                                                                                                            a.ts:
                                                                                                                                           import { foo } from './b' // should not be reported as a cycle
                                                                                                                                            b.ts:
                                                                                                                                           import type { Bar } from './a'
                                                                                                                                           */


              if (path === myPath && toTraverse.length > 0) {return { v: true };}
              if (route.length + 1 < maxDepth) {
                toTraverse.forEach(function (_ref6) {var source = _ref6.source;
                  untraversed.push({ mget: getter, route: route.concat(source) });
                });
              }}return _loop;}();var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {for (var _iterator = m.imports[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var _ref3 = _step.value;var _ref4 = _slicedToArray(_ref3, 2);var path = _ref4[0];var _ref4$ = _ref4[1];var getter = _ref4$.getter;var declarations = _ref4$.declarations;var _ret = _loop(path, getter, declarations);switch (_ret) {case 'continue':continue;default:if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;}
            }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator['return']) {_iterator['return']();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
        }

        while (untraversed.length > 0) {
          var next = untraversed.shift(); // bfs!
          if (detectCycle(next)) {
            var message = next.route.length > 0 ? 'Dependency cycle via ' + String(
            routeString(next.route)) :
            'Dependency cycle detected.';
            context.report(importer, message);
            return;
          }
        }
      }

      return Object.assign((0, _moduleVisitor2['default'])(checkSourceValue, context.options[0]), {
        'Program:exit': function () {function ProgramExit() {
            traversed.clear();
          }return ProgramExit;}() });

    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby1jeWNsZS5qcyJdLCJuYW1lcyI6WyJ0cmF2ZXJzZWQiLCJTZXQiLCJyb3V0ZVN0cmluZyIsInJvdXRlIiwibWFwIiwicyIsInZhbHVlIiwibG9jIiwic3RhcnQiLCJsaW5lIiwiam9pbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJtZXRhIiwidHlwZSIsImRvY3MiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwidXJsIiwic2NoZW1hIiwibWF4RGVwdGgiLCJhbnlPZiIsIm1pbmltdW0iLCJpZ25vcmVFeHRlcm5hbCIsImFsbG93VW5zYWZlRHluYW1pY0N5Y2xpY0RlcGVuZGVuY3kiLCJkaXNhYmxlU2NjIiwiY3JlYXRlIiwiY29udGV4dCIsIm15UGF0aCIsIm9wdGlvbnMiLCJJbmZpbml0eSIsImlnbm9yZU1vZHVsZSIsIm5hbWUiLCJzY2MiLCJTdHJvbmdseUNvbm5lY3RlZENvbXBvbmVudHNCdWlsZGVyIiwiZ2V0IiwiY2hlY2tTb3VyY2VWYWx1ZSIsInNvdXJjZU5vZGUiLCJpbXBvcnRlciIsImNhbGxlZSIsImltcG9ydEtpbmQiLCJzcGVjaWZpZXJzIiwiZXZlcnkiLCJpbXBvcnRlZCIsIkV4cG9ydE1hcEJ1aWxkZXIiLCJwYXRoIiwiaGFzRGVwZW5kZW5jeUN5Y2xlIiwidW50cmF2ZXJzZWQiLCJtZ2V0IiwiZGV0ZWN0Q3ljbGUiLCJtIiwiaGFzIiwiYWRkIiwiZ2V0dGVyIiwiZGVjbGFyYXRpb25zIiwidG9UcmF2ZXJzZSIsImZpbHRlciIsInNvdXJjZSIsImlzT25seUltcG9ydGluZ1R5cGVzIiwic29tZSIsImQiLCJkeW5hbWljIiwibGVuZ3RoIiwiZm9yRWFjaCIsInB1c2giLCJjb25jYXQiLCJpbXBvcnRzIiwibmV4dCIsInNoaWZ0IiwibWVzc2FnZSIsInJlcG9ydCIsIk9iamVjdCIsImFzc2lnbiIsImNsZWFyIl0sIm1hcHBpbmdzIjoiKzRCQUFBOzs7OztBQUtBO0FBQ0Esa0U7QUFDQSxzRDs7QUFFQSwrQztB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QURaO0FBRVosd0NBRko7QUFHQXdCLG9CQUFRMkMsTUFBUixDQUFlaEMsUUFBZixFQUF5QitCLE9BQXpCO0FBQ0E7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsYUFBT0UsT0FBT0MsTUFBUCxDQUFjLGdDQUFjcEMsZ0JBQWQsRUFBZ0NULFFBQVFFLE9BQVIsQ0FBZ0IsQ0FBaEIsQ0FBaEMsQ0FBZCxFQUFtRTtBQUN4RSxzQkFEd0Usc0NBQ3ZEO0FBQ2Y3QixzQkFBVXlFLEtBQVY7QUFDRCxXQUh1RSx3QkFBbkUsQ0FBUDs7QUFLRCxLQTlKYyxtQkFBakIiLCJmaWxlIjoibm8tY3ljbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlT3ZlcnZpZXcgRW5zdXJlcyB0aGF0IG5vIGltcG9ydGVkIG1vZHVsZSBpbXBvcnRzIHRoZSBsaW50ZWQgbW9kdWxlLlxuICogQGF1dGhvciBCZW4gTW9zaGVyXG4gKi9cblxuaW1wb3J0IHsgZ2V0UGh5c2ljYWxGaWxlbmFtZSB9IGZyb20gJ2VzbGludC1tb2R1bGUtdXRpbHMvY29udGV4dENvbXBhdCc7XG5pbXBvcnQgbW9kdWxlVmlzaXRvciwgeyBtYWtlT3B0aW9uc1NjaGVtYSB9IGZyb20gJ2VzbGludC1tb2R1bGUtdXRpbHMvbW9kdWxlVmlzaXRvcic7XG5pbXBvcnQgcmVzb2x2ZSBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL3Jlc29sdmUnO1xuXG5pbXBvcnQgRXhwb3J0TWFwQnVpbGRlciBmcm9tICcuLi9leHBvcnRNYXAvYnVpbGRlcic7XG5pbXBvcnQgU3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnRzQnVpbGRlciBmcm9tICcuLi9zY2MnO1xuaW1wb3J0IHsgaXNFeHRlcm5hbE1vZHVsZSB9IGZyb20gJy4uL2NvcmUvaW1wb3J0VHlwZSc7XG5pbXBvcnQgZG9jc1VybCBmcm9tICcuLi9kb2NzVXJsJztcblxuY29uc3QgdHJhdmVyc2VkID0gbmV3IFNldCgpO1xuXG5mdW5jdGlvbiByb3V0ZVN0cmluZyhyb3V0ZSkge1xuICByZXR1cm4gcm91dGUubWFwKChzKSA9PiBgJHtzLnZhbHVlfToke3MubG9jLnN0YXJ0LmxpbmV9YCkuam9pbignPT4nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1ldGE6IHtcbiAgICB0eXBlOiAnc3VnZ2VzdGlvbicsXG4gICAgZG9jczoge1xuICAgICAgY2F0ZWdvcnk6ICdTdGF0aWMgYW5hbHlzaXMnLFxuICAgICAgZGVzY3JpcHRpb246ICdGb3JiaWQgYSBtb2R1bGUgZnJvbSBpbXBvcnRpbmcgYSBtb2R1bGUgd2l0aCBhIGRlcGVuZGVuY3kgcGF0aCBiYWNrIHRvIGl0c2VsZi4nLFxuICAgICAgdXJsOiBkb2NzVXJsKCduby1jeWNsZScpLFxuICAgIH0sXG4gICAgc2NoZW1hOiBbbWFrZU9wdGlvbnNTY2hlbWEoe1xuICAgICAgbWF4RGVwdGg6IHtcbiAgICAgICAgYW55T2Y6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ21heGltdW0gZGVwZW5kZW5jeSBkZXB0aCB0byB0cmF2ZXJzZScsXG4gICAgICAgICAgICB0eXBlOiAnaW50ZWdlcicsXG4gICAgICAgICAgICBtaW5pbXVtOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZW51bTogWyfiiJ4nXSxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgaWdub3JlRXh0ZXJuYWw6IHtcbiAgICAgICAgZGVzY3JpcHRpb246ICdpZ25vcmUgZXh0ZXJuYWwgbW9kdWxlcycsXG4gICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICB9LFxuICAgICAgYWxsb3dVbnNhZmVEeW5hbWljQ3ljbGljRGVwZW5kZW5jeToge1xuICAgICAgICBkZXNjcmlwdGlvbjogJ0FsbG93IGN5Y2xpYyBkZXBlbmRlbmN5IGlmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBkeW5hbWljIGltcG9ydCBpbiB0aGUgY2hhaW4nLFxuICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGRpc2FibGVTY2M6IHtcbiAgICAgICAgZGVzY3JpcHRpb246ICdXaGVuIHRydWUsIGRvblxcJ3QgY2FsY3VsYXRlIGEgc3Ryb25nbHktY29ubmVjdGVkLWNvbXBvbmVudHMgZ3JhcGguIFNDQyBpcyB1c2VkIHRvIHJlZHVjZSB0aGUgdGltZS1jb21wbGV4aXR5IG9mIGN5Y2xlIGRldGVjdGlvbiwgYnV0IGFkZHMgb3ZlcmhlYWQuJyxcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSldLFxuICB9LFxuXG4gIGNyZWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgbXlQYXRoID0gZ2V0UGh5c2ljYWxGaWxlbmFtZShjb250ZXh0KTtcbiAgICBpZiAobXlQYXRoID09PSAnPHRleHQ+JykgeyByZXR1cm4ge307IH0gLy8gY2FuJ3QgY3ljbGUtY2hlY2sgYSBub24tZmlsZVxuXG4gICAgY29uc3Qgb3B0aW9ucyA9IGNvbnRleHQub3B0aW9uc1swXSB8fCB7fTtcbiAgICBjb25zdCBtYXhEZXB0aCA9IHR5cGVvZiBvcHRpb25zLm1heERlcHRoID09PSAnbnVtYmVyJyA/IG9wdGlvbnMubWF4RGVwdGggOiBJbmZpbml0eTtcbiAgICBjb25zdCBpZ25vcmVNb2R1bGUgPSAobmFtZSkgPT4gb3B0aW9ucy5pZ25vcmVFeHRlcm5hbCAmJiBpc0V4dGVybmFsTW9kdWxlKFxuICAgICAgbmFtZSxcbiAgICAgIHJlc29sdmUobmFtZSwgY29udGV4dCksXG4gICAgICBjb250ZXh0LFxuICAgICk7XG5cbiAgICBjb25zdCBzY2MgPSBvcHRpb25zLmRpc2FibGVTY2MgPyB7fSA6IFN0cm9uZ2x5Q29ubmVjdGVkQ29tcG9uZW50c0J1aWxkZXIuZ2V0KG15UGF0aCwgY29udGV4dCk7XG5cbiAgICBmdW5jdGlvbiBjaGVja1NvdXJjZVZhbHVlKHNvdXJjZU5vZGUsIGltcG9ydGVyKSB7XG4gICAgICBpZiAoaWdub3JlTW9kdWxlKHNvdXJjZU5vZGUudmFsdWUpKSB7XG4gICAgICAgIHJldHVybjsgLy8gaWdub3JlIGV4dGVybmFsIG1vZHVsZXNcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgb3B0aW9ucy5hbGxvd1Vuc2FmZUR5bmFtaWNDeWNsaWNEZXBlbmRlbmN5ICYmIChcbiAgICAgICAgICAvLyBJZ25vcmUgYGltcG9ydCgpYFxuICAgICAgICAgIGltcG9ydGVyLnR5cGUgPT09ICdJbXBvcnRFeHByZXNzaW9uJ1xuICAgICAgICAgIC8vIGByZXF1aXJlKClgIGNhbGxzIGFyZSBhbHdheXMgY2hlY2tlZCAoaWYgcG9zc2libGUpXG4gICAgICAgICAgfHwgaW1wb3J0ZXIudHlwZSA9PT0gJ0NhbGxFeHByZXNzaW9uJyAmJiBpbXBvcnRlci5jYWxsZWUubmFtZSAhPT0gJ3JlcXVpcmUnXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICByZXR1cm47IC8vIGN5Y2xlIHZpYSBkeW5hbWljIGltcG9ydCBhbGxvd2VkIGJ5IGNvbmZpZ1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIGltcG9ydGVyLnR5cGUgPT09ICdJbXBvcnREZWNsYXJhdGlvbicgJiYgKFxuICAgICAgICAgIC8vIGltcG9ydCB0eXBlIHsgRm9vIH0gKFRTIGFuZCBGbG93KVxuICAgICAgICAgIGltcG9ydGVyLmltcG9ydEtpbmQgPT09ICd0eXBlJ1xuICAgICAgICAgIC8vIGltcG9ydCB7IHR5cGUgRm9vIH0gKEZsb3cpXG4gICAgICAgICAgfHwgaW1wb3J0ZXIuc3BlY2lmaWVycy5ldmVyeSgoeyBpbXBvcnRLaW5kIH0pID0+IGltcG9ydEtpbmQgPT09ICd0eXBlJylcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjsgLy8gaWdub3JlIHR5cGUgaW1wb3J0c1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpbXBvcnRlZCA9IEV4cG9ydE1hcEJ1aWxkZXIuZ2V0KHNvdXJjZU5vZGUudmFsdWUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoaW1wb3J0ZWQgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47ICAvLyBuby11bnJlc29sdmVkIHRlcnJpdG9yeVxuICAgICAgfVxuXG4gICAgICBpZiAoaW1wb3J0ZWQucGF0aCA9PT0gbXlQYXRoKSB7XG4gICAgICAgIHJldHVybjsgIC8vIG5vLXNlbGYtaW1wb3J0IHRlcnJpdG9yeVxuICAgICAgfVxuXG4gICAgICAvKiBJZiB3ZSdyZSBpbiB0aGUgc2FtZSBTdHJvbmdseSBDb25uZWN0ZWQgQ29tcG9uZW50LFxuICAgICAgICogVGhlbiB0aGVyZSBleGlzdHMgYSBwYXRoIGZyb20gZWFjaCBub2RlIGluIHRoZSBTQ0MgdG8gZXZlcnkgb3RoZXIgbm9kZSBpbiB0aGUgU0NDLFxuICAgICAgICogVGhlbiB0aGVyZSBleGlzdHMgYXQgbGVhc3Qgb25lIHBhdGggZnJvbSB0aGVtIHRvIHVzIGFuZCBmcm9tIHVzIHRvIHRoZW0sXG4gICAgICAgKiBUaGVuIHdlIGhhdmUgYSBjeWNsZSBiZXR3ZWVuIHVzLlxuICAgICAgICovXG4gICAgICBjb25zdCBoYXNEZXBlbmRlbmN5Q3ljbGUgPSBvcHRpb25zLmRpc2FibGVTY2MgfHwgc2NjW215UGF0aF0gPT09IHNjY1tpbXBvcnRlZC5wYXRoXTtcbiAgICAgIGlmICghaGFzRGVwZW5kZW5jeUN5Y2xlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdW50cmF2ZXJzZWQgPSBbeyBtZ2V0OiAoKSA9PiBpbXBvcnRlZCwgcm91dGU6IFtdIH1dO1xuICAgICAgZnVuY3Rpb24gZGV0ZWN0Q3ljbGUoeyBtZ2V0LCByb3V0ZSB9KSB7XG4gICAgICAgIGNvbnN0IG0gPSBtZ2V0KCk7XG4gICAgICAgIGlmIChtID09IG51bGwpIHsgcmV0dXJuOyB9XG4gICAgICAgIGlmICh0cmF2ZXJzZWQuaGFzKG0ucGF0aCkpIHsgcmV0dXJuOyB9XG4gICAgICAgIHRyYXZlcnNlZC5hZGQobS5wYXRoKTtcblxuICAgICAgICBmb3IgKGNvbnN0IFtwYXRoLCB7IGdldHRlciwgZGVjbGFyYXRpb25zIH1dIG9mIG0uaW1wb3J0cykge1xuICAgICAgICAgIC8vIElmIHdlJ3JlIGluIGRpZmZlcmVudCBTQ0NzLCB3ZSBjYW4ndCBoYXZlIGEgY2lyY3VsYXIgZGVwZW5kZW5jeVxuICAgICAgICAgIGlmICghb3B0aW9ucy5kaXNhYmxlU2NjICYmIHNjY1tteVBhdGhdICE9PSBzY2NbcGF0aF0pIHsgY29udGludWU7IH1cblxuICAgICAgICAgIGlmICh0cmF2ZXJzZWQuaGFzKHBhdGgpKSB7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgY29uc3QgdG9UcmF2ZXJzZSA9IFsuLi5kZWNsYXJhdGlvbnNdLmZpbHRlcigoeyBzb3VyY2UsIGlzT25seUltcG9ydGluZ1R5cGVzIH0pID0+ICFpZ25vcmVNb2R1bGUoc291cmNlLnZhbHVlKVxuICAgICAgICAgICAgLy8gSWdub3JlIG9ubHkgdHlwZSBpbXBvcnRzXG4gICAgICAgICAgICAmJiAhaXNPbmx5SW1wb3J0aW5nVHlwZXMsXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIC8qXG4gICAgICAgICAgSWYgY3ljbGljIGRlcGVuZGVuY3kgaXMgYWxsb3dlZCB2aWEgZHluYW1pYyBpbXBvcnQsIHNraXAgY2hlY2tpbmcgaWYgYW55IG1vZHVsZSBpcyBpbXBvcnRlZCBkeW5hbWljYWxseVxuICAgICAgICAgICovXG4gICAgICAgICAgaWYgKG9wdGlvbnMuYWxsb3dVbnNhZmVEeW5hbWljQ3ljbGljRGVwZW5kZW5jeSAmJiB0b1RyYXZlcnNlLnNvbWUoKGQpID0+IGQuZHluYW1pYykpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAvKlxuICAgICAgICAgIE9ubHkgcmVwb3J0IGFzIGEgY3ljbGUgaWYgdGhlcmUgYXJlIGFueSBpbXBvcnQgZGVjbGFyYXRpb25zIHRoYXQgYXJlIGNvbnNpZGVyZWQgYnlcbiAgICAgICAgICB0aGUgcnVsZS4gRm9yIGV4YW1wbGU6XG5cbiAgICAgICAgICBhLnRzOlxuICAgICAgICAgIGltcG9ydCB7IGZvbyB9IGZyb20gJy4vYicgLy8gc2hvdWxkIG5vdCBiZSByZXBvcnRlZCBhcyBhIGN5Y2xlXG5cbiAgICAgICAgICBiLnRzOlxuICAgICAgICAgIGltcG9ydCB0eXBlIHsgQmFyIH0gZnJvbSAnLi9hJ1xuICAgICAgICAgICovXG4gICAgICAgICAgaWYgKHBhdGggPT09IG15UGF0aCAmJiB0b1RyYXZlcnNlLmxlbmd0aCA+IDApIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgICBpZiAocm91dGUubGVuZ3RoICsgMSA8IG1heERlcHRoKSB7XG4gICAgICAgICAgICB0b1RyYXZlcnNlLmZvckVhY2goKHsgc291cmNlIH0pID0+IHtcbiAgICAgICAgICAgICAgdW50cmF2ZXJzZWQucHVzaCh7IG1nZXQ6IGdldHRlciwgcm91dGU6IHJvdXRlLmNvbmNhdChzb3VyY2UpIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHdoaWxlICh1bnRyYXZlcnNlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IG5leHQgPSB1bnRyYXZlcnNlZC5zaGlmdCgpOyAvLyBiZnMhXG4gICAgICAgIGlmIChkZXRlY3RDeWNsZShuZXh0KSkge1xuICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXh0LnJvdXRlLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gYERlcGVuZGVuY3kgY3ljbGUgdmlhICR7cm91dGVTdHJpbmcobmV4dC5yb3V0ZSl9YFxuICAgICAgICAgICAgOiAnRGVwZW5kZW5jeSBjeWNsZSBkZXRlY3RlZC4nO1xuICAgICAgICAgIGNvbnRleHQucmVwb3J0KGltcG9ydGVyLCBtZXNzYWdlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihtb2R1bGVWaXNpdG9yKGNoZWNrU291cmNlVmFsdWUsIGNvbnRleHQub3B0aW9uc1swXSksIHtcbiAgICAgICdQcm9ncmFtOmV4aXQnKCkge1xuICAgICAgICB0cmF2ZXJzZWQuY2xlYXIoKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sXG59O1xuIl19