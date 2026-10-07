'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _fs = require('fs');var _fs2 = _interopRequireDefault(_fs);

var _doctrine = require('doctrine');var _doctrine2 = _interopRequireDefault(_doctrine);

var _debug = require('debug');var _debug2 = _interopRequireDefault(_debug);

var _parse2 = require('eslint-module-utils/parse');var _parse3 = _interopRequireDefault(_parse2);
var _visit = require('eslint-module-utils/visit');var _visit2 = _interopRequireDefault(_visit);
var _resolve = require('eslint-module-utils/resolve');var _resolve2 = _interopRequireDefault(_resolve);
var _ignore = require('eslint-module-utils/ignore');var _ignore2 = _interopRequireDefault(_ignore);

var _hash = require('eslint-module-utils/hash');
var _unambiguous = require('eslint-module-utils/unambiguous');var unambiguous = _interopRequireWildcard(_unambiguous);

var _ = require('.');var _2 = _interopRequireDefault(_);
var _childContext = require('./childContext');var _childContext2 = _interopRequireDefault(_childContext);
var _typescript = require('./typescript');
var _remotePath = require('./remotePath');
var _visitor = require('./visitor');var _visitor2 = _interopRequireDefault(_visitor);function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj['default'] = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}

var log = (0, _debug2['default'])('eslint-plugin-import:ExportMap');

var exportCache = new Map();

/**
                              * The creation of this closure is isolated from other scopes
                              * to avoid over-retention of unrelated variables, which has
                              * caused memory leaks. See #1266.
                              */
function thunkFor(p, context) {
  // eslint-disable-next-line no-use-before-define
  return function () {return ExportMapBuilder['for']((0, _childContext2['default'])(p, context));};
}var

ExportMapBuilder = function () {function ExportMapBuilder() {_classCallCheck(this, ExportMapBuilder);}_createClass(ExportMapBuilder, null, [{ key: 'get', value: function () {function get(
      source, context) {
        var path = (0, _resolve2['default'])(source, context);
        if (path == null) {return null;}

        return ExportMapBuilder['for']((0, _childContext2['default'])(path, context));
      }return get;}() }, { key: 'for', value: function () {function _for(

      context) {var
        path = context.path;

        var cacheKey = context.cacheKey || (0, _hash.hashObject)(context).digest('hex');
        var exportMap = exportCache.get(cacheKey);

        // return cached ignore
        if (exportMap === null) {return null;}

        var stats = _fs2['default'].statSync(path);
        if (exportMap != null) {
          // date equality check
          if (exportMap.mtime - stats.mtime === 0) {
            return exportMap;
          }
          // future: check content equality?
        }

        // check valid extensions first
        if (!(0, _ignore.hasValidExtension)(path, context)) {
          exportCache.set(cacheKey, null);
          return null;
        }

        // check for and cache ignore
        if ((0, _ignore2['default'])(path, context)) {
          log('ignored path due to ignore settings:', path);
          exportCache.set(cacheKey, null);
          return null;
        }

        var content = _fs2['default'].readFileSync(path, { encoding: 'utf8' });

        // check for and cache unambiguous modules
        if (!unambiguous.test(content)) {
          log('ignored path due to unambiguous regex:', path);
          exportCache.set(cacheKey, null);
          return null;
        }

        log('cache miss', cacheKey, 'for path', path);
        exportMap = ExportMapBuilder.parse(path, content, context);

        // ambiguous modules return null
        if (exportMap == null) {
          log('ignored path due to ambiguous parse:', path);
          exportCache.set(cacheKey, null);
          return null;
        }

        exportMap.mtime = stats.mtime;

        // If the visitor keys were not populated, then we shouldn't save anything to the cache,
        // since the parse results may not be reliable.
        if (exportMap.visitorKeys) {
          exportCache.set(cacheKey, exportMap);
        }
        return exportMap;
      }return _for;}() }, { key: 'parse', value: function () {function parse(

      path, content, context) {
        var exportMap = new _2['default'](path);
        var isEsModuleInteropTrue = (0, _typescript.isEsModuleInterop)(context);

        var ast = void 0;
        var visitorKeys = void 0;
        try {
          var result = (0, _parse3['default'])(path, content, context);
          ast = result.ast;
          visitorKeys = result.visitorKeys;
        } catch (err) {
          exportMap.errors.push(err);
          return exportMap; // can't continue
        }

        exportMap.visitorKeys = visitorKeys;

        var hasDynamicImports = false;

        var remotePathResolver = new _remotePath.RemotePath(path, context);

        function processDynamicImport(source) {
          hasDynamicImports = true;
          if (source.type !== 'Literal') {
            return null;
          }
          var p = remotePathResolver.resolve(source.value);
          if (p == null) {
            return null;
          }
          var importedSpecifiers = new Set();
          importedSpecifiers.add('ImportNamespaceSpecifier');
          var getter = thunkFor(p, context);
          exportMap.imports.set(p, {
            getter: getter,
            declarations: new Set([{
              source: {
                // capturing actual node reference holds full AST in memory!
                value: source.value,
                loc: source.loc },

              importedSpecifiers: importedSpecifiers,
              dynamic: true }]) });


        }

        (0, _visit2['default'])(ast, visitorKeys, {
          ImportExpression: function () {function ImportExpression(node) {
              processDynamicImport(node.source);
            }return ImportExpression;}(),
          CallExpression: function () {function CallExpression(node) {
              if (node.callee.type === 'Import') {
                processDynamicImport(node.arguments[0]);
              }
            }return CallExpression;}() });


        var unambiguouslyESM = unambiguous.isModule(ast);
        if (!unambiguouslyESM && !hasDynamicImports) {return null;}

        // attempt to collect module doc
        if (ast.comments) {
          ast.comments.some(function (c) {
            if (c.type !== 'Block') {return false;}
            try {
              var doc = _doctrine2['default'].parse(c.value, { unwrap: true });
              if (doc.tags.some(function (t) {return t.title === 'module';})) {
                exportMap.doc = doc;
                return true;
              }
            } catch (err) {/* ignore */}
            return false;
          });
        }

        var visitorBuilder = new _visitor2['default'](
        path,
        context,
        exportMap,
        ExportMapBuilder,
        content,
        ast,
        isEsModuleInteropTrue,
        thunkFor);

        ast.body.forEach(function (astNode) {
          var visitor = visitorBuilder.build(astNode);

          if (visitor[astNode.type]) {
            visitor[astNode.type].call(visitorBuilder);
          }
        });

        if (
        isEsModuleInteropTrue // esModuleInterop is on in tsconfig
        && exportMap.namespace.size > 0 // anything is exported
        && !exportMap.namespace.has('default') // and default isn't added already
        ) {
            exportMap.namespace.set('default', {}); // add default export
          }

        if (unambiguouslyESM) {
          exportMap.parseGoal = 'Module';
        }
        return exportMap;
      }return parse;}() }]);return ExportMapBuilder;}();exports['default'] = ExportMapBuilder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHBvcnRNYXAvYnVpbGRlci5qcyJdLCJuYW1lcyI6WyJ1bmFtYmlndW91cyIsImxvZyIsImV4cG9ydENhY2hlIiwiTWFwIiwidGh1bmtGb3IiLCJwIiwiY29udGV4dCIsIkV4cG9ydE1hcEJ1aWxkZXIiLCJzb3VyY2UiLCJwYXRoIiwiY2FjaGVLZXkiLCJkaWdlc3QiLCJleHBvcnRNYXAiLCJnZXQiLCJzdGF0cyIsImZzIiwic3RhdFN5bmMiLCJtdGltZSIsInNldCIsImNvbnRlbnQiLCJyZWFkRmlsZVN5bmMiLCJlbmNvZGluZyIsInRlc3QiLCJwYXJzZSIsInZpc2l0b3JLZXlzIiwiRXhwb3J0TWFwIiwiaXNFc01vZHVsZUludGVyb3BUcnVlIiwiYXN0IiwicmVzdWx0IiwiZXJyIiwiZXJyb3JzIiwicHVzaCIsImhhc0R5bmFtaWNJbXBvcnRzIiwicmVtb3RlUGF0aFJlc29sdmVyIiwiUmVtb3RlUGF0aCIsInByb2Nlc3NEeW5hbWljSW1wb3J0IiwidHlwZSIsInJlc29sdmUiLCJ2YWx1ZSIsImltcG9ydGVkU3BlY2lmaWVycyIsIlNldCIsImFkZCIsImdldHRlciIsImltcG9ydHMiLCJkZWNsYXJhdGlvbnMiLCJsb2MiLCJkeW5hbWljIiwiSW1wb3J0RXhwcmVzc2lvbiIsIm5vZGUiLCJDYWxsRXhwcmVzc2lvbiIsImNhbGxlZSIsImFyZ3VtZW50cyIsInVuYW1iaWd1b3VzbHlFU00iLCJpc01vZHVsZSIsImNvbW1lbnRzIiwic29tZSIsImMiLCJkb2MiLCJkb2N0cmluZSIsInVud3JhcCIsInRhZ3MiLCJ0IiwidGl0bGUiLCJ2aXNpdG9yQnVpbGRlciIsIkltcG9ydEV4cG9ydFZpc2l0b3JCdWlsZGVyIiwiYm9keSIsImZvckVhY2giLCJhc3ROb2RlIiwidmlzaXRvciIsImJ1aWxkIiwiY2FsbCIsIm5hbWVzcGFjZSIsInNpemUiLCJoYXMiLCJwYXJzZUdvYWwiXSwibWFwcGluZ3MiOiJnbkJBQUEsd0I7O0FBRUEsb0M7O0FBRUEs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LEVBQWdEO0FBQzlDbEQsMEJBQVU2QyxHQUFWLEdBQWdCQSxHQUFoQjtBQUNBLHVCQUFPLElBQVA7QUFDRDtBQUNGLGFBTkQsQ0FNRSxPQUFPNUIsR0FBUCxFQUFZLENBQUUsWUFBYztBQUM5QixtQkFBTyxLQUFQO0FBQ0QsV0FWRDtBQVdEOztBQUVELFlBQU1rQyxpQkFBaUIsSUFBSUMsb0JBQUo7QUFDckJ2RCxZQURxQjtBQUVyQkgsZUFGcUI7QUFHckJNLGlCQUhxQjtBQUlyQkwsd0JBSnFCO0FBS3JCWSxlQUxxQjtBQU1yQlEsV0FOcUI7QUFPckJELDZCQVBxQjtBQVFyQnRCLGdCQVJxQixDQUF2Qjs7QUFVQXVCLFlBQUlzQyxJQUFKLENBQVNDLE9BQVQsQ0FBaUIsVUFBVUMsT0FBVixFQUFtQjtBQUNsQyxjQUFNQyxVQUFVTCxlQUFlTSxLQUFmLENBQXFCRixPQUFyQixDQUFoQjs7QUFFQSxjQUFJQyxRQUFRRCxRQUFRL0IsSUFBaEIsQ0FBSixFQUEyQjtBQUN6QmdDLG9CQUFRRCxRQUFRL0IsSUFBaEIsRUFBc0JrQyxJQUF0QixDQUEyQlAsY0FBM0I7QUFDRDtBQUNGLFNBTkQ7O0FBUUE7QUFDRXJDLDhCQUFzQjtBQUF0QixXQUNHZCxVQUFVMkQsU0FBVixDQUFvQkMsSUFBcEIsR0FBMkIsQ0FEOUIsQ0FDZ0M7QUFEaEMsV0FFRyxDQUFDNUQsVUFBVTJELFNBQVYsQ0FBb0JFLEdBQXBCLENBQXdCLFNBQXhCLENBSE4sQ0FHeUM7QUFIekMsVUFJRTtBQUNBN0Qsc0JBQVUyRCxTQUFWLENBQW9CckQsR0FBcEIsQ0FBd0IsU0FBeEIsRUFBbUMsRUFBbkMsRUFEQSxDQUN3QztBQUN6Qzs7QUFFRCxZQUFJa0MsZ0JBQUosRUFBc0I7QUFDcEJ4QyxvQkFBVThELFNBQVYsR0FBc0IsUUFBdEI7QUFDRDtBQUNELGVBQU85RCxTQUFQO0FBQ0QsTyxzRUE5S2tCTCxnQiIsImZpbGUiOiJidWlsZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcblxuaW1wb3J0IGRvY3RyaW5lIGZyb20gJ2RvY3RyaW5lJztcblxuaW1wb3J0IGRlYnVnIGZyb20gJ2RlYnVnJztcblxuaW1wb3J0IHBhcnNlIGZyb20gJ2VzbGludC1tb2R1bGUtdXRpbHMvcGFyc2UnO1xuaW1wb3J0IHZpc2l0IGZyb20gJ2VzbGludC1tb2R1bGUtdXRpbHMvdmlzaXQnO1xuaW1wb3J0IHJlc29sdmUgZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy9yZXNvbHZlJztcbmltcG9ydCBpc0lnbm9yZWQsIHsgaGFzVmFsaWRFeHRlbnNpb24gfSBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL2lnbm9yZSc7XG5cbmltcG9ydCB7IGhhc2hPYmplY3QgfSBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL2hhc2gnO1xuaW1wb3J0ICogYXMgdW5hbWJpZ3VvdXMgZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy91bmFtYmlndW91cyc7XG5cbmltcG9ydCBFeHBvcnRNYXAgZnJvbSAnLic7XG5pbXBvcnQgY2hpbGRDb250ZXh0IGZyb20gJy4vY2hpbGRDb250ZXh0JztcbmltcG9ydCB7IGlzRXNNb2R1bGVJbnRlcm9wIH0gZnJvbSAnLi90eXBlc2NyaXB0JztcbmltcG9ydCB7IFJlbW90ZVBhdGggfSBmcm9tICcuL3JlbW90ZVBhdGgnO1xuaW1wb3J0IEltcG9ydEV4cG9ydFZpc2l0b3JCdWlsZGVyIGZyb20gJy4vdmlzaXRvcic7XG5cbmNvbnN0IGxvZyA9IGRlYnVnKCdlc2xpbnQtcGx1Z2luLWltcG9ydDpFeHBvcnRNYXAnKTtcblxuY29uc3QgZXhwb3J0Q2FjaGUgPSBuZXcgTWFwKCk7XG5cbi8qKlxuICogVGhlIGNyZWF0aW9uIG9mIHRoaXMgY2xvc3VyZSBpcyBpc29sYXRlZCBmcm9tIG90aGVyIHNjb3Blc1xuICogdG8gYXZvaWQgb3Zlci1yZXRlbnRpb24gb2YgdW5yZWxhdGVkIHZhcmlhYmxlcywgd2hpY2ggaGFzXG4gKiBjYXVzZWQgbWVtb3J5IGxlYWtzLiBTZWUgIzEyNjYuXG4gKi9cbmZ1bmN0aW9uIHRodW5rRm9yKHAsIGNvbnRleHQpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gIHJldHVybiAoKSA9PiBFeHBvcnRNYXBCdWlsZGVyLmZvcihjaGlsZENvbnRleHQocCwgY29udGV4dCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBvcnRNYXBCdWlsZGVyIHtcbiAgc3RhdGljIGdldChzb3VyY2UsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwYXRoID0gcmVzb2x2ZShzb3VyY2UsIGNvbnRleHQpO1xuICAgIGlmIChwYXRoID09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cblxuICAgIHJldHVybiBFeHBvcnRNYXBCdWlsZGVyLmZvcihjaGlsZENvbnRleHQocGF0aCwgY29udGV4dCkpO1xuICB9XG5cbiAgc3RhdGljIGZvcihjb250ZXh0KSB7XG4gICAgY29uc3QgeyBwYXRoIH0gPSBjb250ZXh0O1xuXG4gICAgY29uc3QgY2FjaGVLZXkgPSBjb250ZXh0LmNhY2hlS2V5IHx8IGhhc2hPYmplY3QoY29udGV4dCkuZGlnZXN0KCdoZXgnKTtcbiAgICBsZXQgZXhwb3J0TWFwID0gZXhwb3J0Q2FjaGUuZ2V0KGNhY2hlS2V5KTtcblxuICAgIC8vIHJldHVybiBjYWNoZWQgaWdub3JlXG4gICAgaWYgKGV4cG9ydE1hcCA9PT0gbnVsbCkgeyByZXR1cm4gbnVsbDsgfVxuXG4gICAgY29uc3Qgc3RhdHMgPSBmcy5zdGF0U3luYyhwYXRoKTtcbiAgICBpZiAoZXhwb3J0TWFwICE9IG51bGwpIHtcbiAgICAgIC8vIGRhdGUgZXF1YWxpdHkgY2hlY2tcbiAgICAgIGlmIChleHBvcnRNYXAubXRpbWUgLSBzdGF0cy5tdGltZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZXhwb3J0TWFwO1xuICAgICAgfVxuICAgICAgLy8gZnV0dXJlOiBjaGVjayBjb250ZW50IGVxdWFsaXR5P1xuICAgIH1cblxuICAgIC8vIGNoZWNrIHZhbGlkIGV4dGVuc2lvbnMgZmlyc3RcbiAgICBpZiAoIWhhc1ZhbGlkRXh0ZW5zaW9uKHBhdGgsIGNvbnRleHQpKSB7XG4gICAgICBleHBvcnRDYWNoZS5zZXQoY2FjaGVLZXksIG51bGwpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgZm9yIGFuZCBjYWNoZSBpZ25vcmVcbiAgICBpZiAoaXNJZ25vcmVkKHBhdGgsIGNvbnRleHQpKSB7XG4gICAgICBsb2coJ2lnbm9yZWQgcGF0aCBkdWUgdG8gaWdub3JlIHNldHRpbmdzOicsIHBhdGgpO1xuICAgICAgZXhwb3J0Q2FjaGUuc2V0KGNhY2hlS2V5LCBudWxsKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMocGF0aCwgeyBlbmNvZGluZzogJ3V0ZjgnIH0pO1xuXG4gICAgLy8gY2hlY2sgZm9yIGFuZCBjYWNoZSB1bmFtYmlndW91cyBtb2R1bGVzXG4gICAgaWYgKCF1bmFtYmlndW91cy50ZXN0KGNvbnRlbnQpKSB7XG4gICAgICBsb2coJ2lnbm9yZWQgcGF0aCBkdWUgdG8gdW5hbWJpZ3VvdXMgcmVnZXg6JywgcGF0aCk7XG4gICAgICBleHBvcnRDYWNoZS5zZXQoY2FjaGVLZXksIG51bGwpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbG9nKCdjYWNoZSBtaXNzJywgY2FjaGVLZXksICdmb3IgcGF0aCcsIHBhdGgpO1xuICAgIGV4cG9ydE1hcCA9IEV4cG9ydE1hcEJ1aWxkZXIucGFyc2UocGF0aCwgY29udGVudCwgY29udGV4dCk7XG5cbiAgICAvLyBhbWJpZ3VvdXMgbW9kdWxlcyByZXR1cm4gbnVsbFxuICAgIGlmIChleHBvcnRNYXAgPT0gbnVsbCkge1xuICAgICAgbG9nKCdpZ25vcmVkIHBhdGggZHVlIHRvIGFtYmlndW91cyBwYXJzZTonLCBwYXRoKTtcbiAgICAgIGV4cG9ydENhY2hlLnNldChjYWNoZUtleSwgbnVsbCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBleHBvcnRNYXAubXRpbWUgPSBzdGF0cy5tdGltZTtcblxuICAgIC8vIElmIHRoZSB2aXNpdG9yIGtleXMgd2VyZSBub3QgcG9wdWxhdGVkLCB0aGVuIHdlIHNob3VsZG4ndCBzYXZlIGFueXRoaW5nIHRvIHRoZSBjYWNoZSxcbiAgICAvLyBzaW5jZSB0aGUgcGFyc2UgcmVzdWx0cyBtYXkgbm90IGJlIHJlbGlhYmxlLlxuICAgIGlmIChleHBvcnRNYXAudmlzaXRvcktleXMpIHtcbiAgICAgIGV4cG9ydENhY2hlLnNldChjYWNoZUtleSwgZXhwb3J0TWFwKTtcbiAgICB9XG4gICAgcmV0dXJuIGV4cG9ydE1hcDtcbiAgfVxuXG4gIHN0YXRpYyBwYXJzZShwYXRoLCBjb250ZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZXhwb3J0TWFwID0gbmV3IEV4cG9ydE1hcChwYXRoKTtcbiAgICBjb25zdCBpc0VzTW9kdWxlSW50ZXJvcFRydWUgPSBpc0VzTW9kdWxlSW50ZXJvcChjb250ZXh0KTtcblxuICAgIGxldCBhc3Q7XG4gICAgbGV0IHZpc2l0b3JLZXlzO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBwYXJzZShwYXRoLCBjb250ZW50LCBjb250ZXh0KTtcbiAgICAgIGFzdCA9IHJlc3VsdC5hc3Q7XG4gICAgICB2aXNpdG9yS2V5cyA9IHJlc3VsdC52aXNpdG9yS2V5cztcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGV4cG9ydE1hcC5lcnJvcnMucHVzaChlcnIpO1xuICAgICAgcmV0dXJuIGV4cG9ydE1hcDsgLy8gY2FuJ3QgY29udGludWVcbiAgICB9XG5cbiAgICBleHBvcnRNYXAudmlzaXRvcktleXMgPSB2aXNpdG9yS2V5cztcblxuICAgIGxldCBoYXNEeW5hbWljSW1wb3J0cyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVtb3RlUGF0aFJlc29sdmVyID0gbmV3IFJlbW90ZVBhdGgocGF0aCwgY29udGV4dCk7XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzRHluYW1pY0ltcG9ydChzb3VyY2UpIHtcbiAgICAgIGhhc0R5bmFtaWNJbXBvcnRzID0gdHJ1ZTtcbiAgICAgIGlmIChzb3VyY2UudHlwZSAhPT0gJ0xpdGVyYWwnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgY29uc3QgcCA9IHJlbW90ZVBhdGhSZXNvbHZlci5yZXNvbHZlKHNvdXJjZS52YWx1ZSk7XG4gICAgICBpZiAocCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgY29uc3QgaW1wb3J0ZWRTcGVjaWZpZXJzID0gbmV3IFNldCgpO1xuICAgICAgaW1wb3J0ZWRTcGVjaWZpZXJzLmFkZCgnSW1wb3J0TmFtZXNwYWNlU3BlY2lmaWVyJyk7XG4gICAgICBjb25zdCBnZXR0ZXIgPSB0aHVua0ZvcihwLCBjb250ZXh0KTtcbiAgICAgIGV4cG9ydE1hcC5pbXBvcnRzLnNldChwLCB7XG4gICAgICAgIGdldHRlcixcbiAgICAgICAgZGVjbGFyYXRpb25zOiBuZXcgU2V0KFt7XG4gICAgICAgICAgc291cmNlOiB7XG4gICAgICAgICAgLy8gY2FwdHVyaW5nIGFjdHVhbCBub2RlIHJlZmVyZW5jZSBob2xkcyBmdWxsIEFTVCBpbiBtZW1vcnkhXG4gICAgICAgICAgICB2YWx1ZTogc291cmNlLnZhbHVlLFxuICAgICAgICAgICAgbG9jOiBzb3VyY2UubG9jLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW1wb3J0ZWRTcGVjaWZpZXJzLFxuICAgICAgICAgIGR5bmFtaWM6IHRydWUsXG4gICAgICAgIH1dKSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZpc2l0KGFzdCwgdmlzaXRvcktleXMsIHtcbiAgICAgIEltcG9ydEV4cHJlc3Npb24obm9kZSkge1xuICAgICAgICBwcm9jZXNzRHluYW1pY0ltcG9ydChub2RlLnNvdXJjZSk7XG4gICAgICB9LFxuICAgICAgQ2FsbEV4cHJlc3Npb24obm9kZSkge1xuICAgICAgICBpZiAobm9kZS5jYWxsZWUudHlwZSA9PT0gJ0ltcG9ydCcpIHtcbiAgICAgICAgICBwcm9jZXNzRHluYW1pY0ltcG9ydChub2RlLmFyZ3VtZW50c1swXSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCB1bmFtYmlndW91c2x5RVNNID0gdW5hbWJpZ3VvdXMuaXNNb2R1bGUoYXN0KTtcbiAgICBpZiAoIXVuYW1iaWd1b3VzbHlFU00gJiYgIWhhc0R5bmFtaWNJbXBvcnRzKSB7IHJldHVybiBudWxsOyB9XG5cbiAgICAvLyBhdHRlbXB0IHRvIGNvbGxlY3QgbW9kdWxlIGRvY1xuICAgIGlmIChhc3QuY29tbWVudHMpIHtcbiAgICAgIGFzdC5jb21tZW50cy5zb21lKChjKSA9PiB7XG4gICAgICAgIGlmIChjLnR5cGUgIT09ICdCbG9jaycpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgZG9jID0gZG9jdHJpbmUucGFyc2UoYy52YWx1ZSwgeyB1bndyYXA6IHRydWUgfSk7XG4gICAgICAgICAgaWYgKGRvYy50YWdzLnNvbWUoKHQpID0+IHQudGl0bGUgPT09ICdtb2R1bGUnKSkge1xuICAgICAgICAgICAgZXhwb3J0TWFwLmRvYyA9IGRvYztcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7IC8qIGlnbm9yZSAqLyB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHZpc2l0b3JCdWlsZGVyID0gbmV3IEltcG9ydEV4cG9ydFZpc2l0b3JCdWlsZGVyKFxuICAgICAgcGF0aCxcbiAgICAgIGNvbnRleHQsXG4gICAgICBleHBvcnRNYXAsXG4gICAgICBFeHBvcnRNYXBCdWlsZGVyLFxuICAgICAgY29udGVudCxcbiAgICAgIGFzdCxcbiAgICAgIGlzRXNNb2R1bGVJbnRlcm9wVHJ1ZSxcbiAgICAgIHRodW5rRm9yLFxuICAgICk7XG4gICAgYXN0LmJvZHkuZm9yRWFjaChmdW5jdGlvbiAoYXN0Tm9kZSkge1xuICAgICAgY29uc3QgdmlzaXRvciA9IHZpc2l0b3JCdWlsZGVyLmJ1aWxkKGFzdE5vZGUpO1xuXG4gICAgICBpZiAodmlzaXRvclthc3ROb2RlLnR5cGVdKSB7XG4gICAgICAgIHZpc2l0b3JbYXN0Tm9kZS50eXBlXS5jYWxsKHZpc2l0b3JCdWlsZGVyKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChcbiAgICAgIGlzRXNNb2R1bGVJbnRlcm9wVHJ1ZSAvLyBlc01vZHVsZUludGVyb3AgaXMgb24gaW4gdHNjb25maWdcbiAgICAgICYmIGV4cG9ydE1hcC5uYW1lc3BhY2Uuc2l6ZSA+IDAgLy8gYW55dGhpbmcgaXMgZXhwb3J0ZWRcbiAgICAgICYmICFleHBvcnRNYXAubmFtZXNwYWNlLmhhcygnZGVmYXVsdCcpIC8vIGFuZCBkZWZhdWx0IGlzbid0IGFkZGVkIGFscmVhZHlcbiAgICApIHtcbiAgICAgIGV4cG9ydE1hcC5uYW1lc3BhY2Uuc2V0KCdkZWZhdWx0Jywge30pOyAvLyBhZGQgZGVmYXVsdCBleHBvcnRcbiAgICB9XG5cbiAgICBpZiAodW5hbWJpZ3VvdXNseUVTTSkge1xuICAgICAgZXhwb3J0TWFwLnBhcnNlR29hbCA9ICdNb2R1bGUnO1xuICAgIH1cbiAgICByZXR1cm4gZXhwb3J0TWFwO1xuICB9XG59XG4iXX0=