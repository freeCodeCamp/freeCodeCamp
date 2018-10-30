'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recursivePatternCapture = recursivePatternCapture;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _doctrine = require('doctrine');

var _doctrine2 = _interopRequireDefault(_doctrine);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _parse = require('eslint-module-utils/parse');

var _parse2 = _interopRequireDefault(_parse);

var _resolve = require('eslint-module-utils/resolve');

var _resolve2 = _interopRequireDefault(_resolve);

var _ignore = require('eslint-module-utils/ignore');

var _ignore2 = _interopRequireDefault(_ignore);

var _hash = require('eslint-module-utils/hash');

var _unambiguous = require('eslint-module-utils/unambiguous');

var unambiguous = _interopRequireWildcard(_unambiguous);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const log = (0, _debug2.default)('eslint-plugin-import:ExportMap');

const exportCache = new Map();

class ExportMap {
  constructor(path) {
    this.path = path;
    this.namespace = new Map();
    // todo: restructure to key on path, value is resolver + map of names
    this.reexports = new Map();
    this.dependencies = new Map();
    this.errors = [];
  }

  get hasDefault() {
    return this.get('default') != null;
  } // stronger than this.has

  get size() {
    let size = this.namespace.size + this.reexports.size;
    this.dependencies.forEach(dep => size += dep().size);
    return size;
  }

  /**
   * Note that this does not check explicitly re-exported names for existence
   * in the base namespace, but it will expand all `export * from '...'` exports
   * if not found in the explicit namespace.
   * @param  {string}  name
   * @return {Boolean} true if `name` is exported by this module.
   */
  has(name) {
    if (this.namespace.has(name)) return true;
    if (this.reexports.has(name)) return true;

    // default exports must be explicitly re-exported (#328)
    if (name !== 'default') {
      for (let dep of this.dependencies.values()) {
        let innerMap = dep();

        // todo: report as unresolved?
        if (!innerMap) continue;

        if (innerMap.has(name)) return true;
      }
    }

    return false;
  }

  /**
   * ensure that imported name fully resolves.
   * @param  {[type]}  name [description]
   * @return {Boolean}      [description]
   */
  hasDeep(name) {
    if (this.namespace.has(name)) return { found: true, path: [this] };

    if (this.reexports.has(name)) {
      const reexports = this.reexports.get(name),
            imported = reexports.getImport();

      // if import is ignored, return explicit 'null'
      if (imported == null) return { found: true, path: [this] };

      // safeguard against cycles, only if name matches
      if (imported.path === this.path && reexports.local === name) {
        return { found: false, path: [this] };
      }

      const deep = imported.hasDeep(reexports.local);
      deep.path.unshift(this);

      return deep;
    }

    // default exports must be explicitly re-exported (#328)
    if (name !== 'default') {
      for (let dep of this.dependencies.values()) {
        let innerMap = dep();
        // todo: report as unresolved?
        if (!innerMap) continue;

        // safeguard against cycles
        if (innerMap.path === this.path) continue;

        let innerValue = innerMap.hasDeep(name);
        if (innerValue.found) {
          innerValue.path.unshift(this);
          return innerValue;
        }
      }
    }

    return { found: false, path: [this] };
  }

  get(name) {
    if (this.namespace.has(name)) return this.namespace.get(name);

    if (this.reexports.has(name)) {
      const reexports = this.reexports.get(name),
            imported = reexports.getImport();

      // if import is ignored, return explicit 'null'
      if (imported == null) return null;

      // safeguard against cycles, only if name matches
      if (imported.path === this.path && reexports.local === name) return undefined;

      return imported.get(reexports.local);
    }

    // default exports must be explicitly re-exported (#328)
    if (name !== 'default') {
      for (let dep of this.dependencies.values()) {
        let innerMap = dep();
        // todo: report as unresolved?
        if (!innerMap) continue;

        // safeguard against cycles
        if (innerMap.path === this.path) continue;

        let innerValue = innerMap.get(name);
        if (innerValue !== undefined) return innerValue;
      }
    }

    return undefined;
  }

  forEach(callback, thisArg) {
    this.namespace.forEach((v, n) => callback.call(thisArg, v, n, this));

    this.reexports.forEach((reexports, name) => {
      const reexported = reexports.getImport();
      // can't look up meta for ignored re-exports (#348)
      callback.call(thisArg, reexported && reexported.get(reexports.local), name, this);
    });

    this.dependencies.forEach(dep => dep().forEach((v, n) => n !== 'default' && callback.call(thisArg, v, n, this)));
  }

  // todo: keys, values, entries?

  reportErrors(context, declaration) {
    context.report({
      node: declaration.source,
      message: `Parse errors in imported module '${ declaration.source.value }': ` + `${ this.errors.map(e => `${ e.message } (${ e.lineNumber }:${ e.column })`).join(', ') }`
    });
  }
}

exports.default = ExportMap; /**
                              * parse docs from the first node that has leading comments
                              * @param  {...[type]} nodes [description]
                              * @return {{doc: object}}
                              */

function captureDoc(docStyleParsers) {
  const metadata = {},
        nodes = Array.prototype.slice.call(arguments, 1);

  // 'some' short-circuits on first 'true'
  nodes.some(n => {
    if (!n.leadingComments) return false;

    for (let name in docStyleParsers) {
      const doc = docStyleParsers[name](n.leadingComments);
      if (doc) {
        metadata.doc = doc;
      }
    }

    return true;
  });

  return metadata;
}

const availableDocStyleParsers = {
  jsdoc: captureJsDoc,
  tomdoc: captureTomDoc
};

/**
 * parse JSDoc from leading comments
 * @param  {...[type]} comments [description]
 * @return {{doc: object}}
 */
function captureJsDoc(comments) {
  let doc;

  // capture XSDoc
  comments.forEach(comment => {
    // skip non-block comments
    if (comment.value.slice(0, 4) !== '*\n *') return;
    try {
      doc = _doctrine2.default.parse(comment.value, { unwrap: true });
    } catch (err) {
      /* don't care, for now? maybe add to `errors?` */
    }
  });

  return doc;
}

/**
  * parse TomDoc section from comments
  */
function captureTomDoc(comments) {
  // collect lines up to first paragraph break
  const lines = [];
  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];
    if (comment.value.match(/^\s*$/)) break;
    lines.push(comment.value.trim());
  }

  // return doctrine-like object
  const statusMatch = lines.join(' ').match(/^(Public|Internal|Deprecated):\s*(.+)/);
  if (statusMatch) {
    return {
      description: statusMatch[2],
      tags: [{
        title: statusMatch[1].toLowerCase(),
        description: statusMatch[2]
      }]
    };
  }
}

ExportMap.get = function (source, context) {
  const path = (0, _resolve2.default)(source, context);
  if (path == null) return null;

  return ExportMap.for(path, context);
};

ExportMap.for = function (path, context) {
  let exportMap;

  const cacheKey = (0, _hash.hashObject)({
    settings: context.settings,
    parserPath: context.parserPath,
    parserOptions: context.parserOptions,
    path
  }).digest('hex');

  exportMap = exportCache.get(cacheKey);

  // return cached ignore
  if (exportMap === null) return null;

  const stats = _fs2.default.statSync(path);
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

  const content = _fs2.default.readFileSync(path, { encoding: 'utf8' });

  // check for and cache ignore
  if ((0, _ignore2.default)(path, context) || !unambiguous.test(content)) {
    log('ignored path due to unambiguous regex or ignore settings:', path);
    exportCache.set(cacheKey, null);
    return null;
  }

  exportMap = ExportMap.parse(path, content, context);

  // ambiguous modules return null
  if (exportMap == null) return null;

  exportMap.mtime = stats.mtime;

  exportCache.set(cacheKey, exportMap);
  return exportMap;
};

ExportMap.parse = function (path, content, context) {
  var m = new ExportMap(path);

  try {
    var ast = (0, _parse2.default)(path, content, context);
  } catch (err) {
    log('parse error:', path, err);
    m.errors.push(err);
    return m; // can't continue
  }

  if (!unambiguous.isModule(ast)) return null;

  const docstyle = context.settings && context.settings['import/docstyle'] || ['jsdoc'];
  const docStyleParsers = {};
  docstyle.forEach(style => {
    docStyleParsers[style] = availableDocStyleParsers[style];
  });

  // attempt to collect module doc
  ast.comments.some(c => {
    if (c.type !== 'Block') return false;
    try {
      const doc = _doctrine2.default.parse(c.value, { unwrap: true });
      if (doc.tags.some(t => t.title === 'module')) {
        m.doc = doc;
        return true;
      }
    } catch (err) {/* ignore */}
    return false;
  });

  const namespaces = new Map();

  function remotePath(node) {
    return _resolve2.default.relative(node.source.value, path, context.settings);
  }

  function resolveImport(node) {
    const rp = remotePath(node);
    if (rp == null) return null;
    return ExportMap.for(rp, context);
  }

  function getNamespace(identifier) {
    if (!namespaces.has(identifier.name)) return;

    return function () {
      return resolveImport(namespaces.get(identifier.name));
    };
  }

  function addNamespace(object, identifier) {
    const nsfn = getNamespace(identifier);
    if (nsfn) {
      Object.defineProperty(object, 'namespace', { get: nsfn });
    }

    return object;
  }

  ast.body.forEach(function (n) {

    if (n.type === 'ExportDefaultDeclaration') {
      const exportMeta = captureDoc(docStyleParsers, n);
      if (n.declaration.type === 'Identifier') {
        addNamespace(exportMeta, n.declaration);
      }
      m.namespace.set('default', exportMeta);
      return;
    }

    if (n.type === 'ExportAllDeclaration') {
      let remoteMap = remotePath(n);
      if (remoteMap == null) return;
      m.dependencies.set(remoteMap, () => ExportMap.for(remoteMap, context));
      return;
    }

    // capture namespaces in case of later export
    if (n.type === 'ImportDeclaration') {
      let ns;
      if (n.specifiers.some(s => s.type === 'ImportNamespaceSpecifier' && (ns = s))) {
        namespaces.set(ns.local.name, n);
      }
      return;
    }

    if (n.type === 'ExportNamedDeclaration') {
      // capture declaration
      if (n.declaration != null) {
        switch (n.declaration.type) {
          case 'FunctionDeclaration':
          case 'ClassDeclaration':
          case 'TypeAlias':
            // flowtype with babel-eslint parser
            m.namespace.set(n.declaration.id.name, captureDoc(docStyleParsers, n));
            break;
          case 'VariableDeclaration':
            n.declaration.declarations.forEach(d => recursivePatternCapture(d.id, id => m.namespace.set(id.name, captureDoc(docStyleParsers, d, n))));
            break;
        }
      }

      n.specifiers.forEach(s => {
        const exportMeta = {};
        let local;

        switch (s.type) {
          case 'ExportDefaultSpecifier':
            if (!n.source) return;
            local = 'default';
            break;
          case 'ExportNamespaceSpecifier':
            m.namespace.set(s.exported.name, Object.defineProperty(exportMeta, 'namespace', {
              get() {
                return resolveImport(n);
              }
            }));
            return;
          case 'ExportSpecifier':
            if (!n.source) {
              m.namespace.set(s.exported.name, addNamespace(exportMeta, s.local));
              return;
            }
          // else falls through
          default:
            local = s.local.name;
            break;
        }

        // todo: JSDoc
        m.reexports.set(s.exported.name, { local, getImport: () => resolveImport(n) });
      });
    }
  });

  return m;
};

/**
 * Traverse a pattern/identifier node, calling 'callback'
 * for each leaf identifier.
 * @param  {node}   pattern
 * @param  {Function} callback
 * @return {void}
 */
function recursivePatternCapture(pattern, callback) {
  switch (pattern.type) {
    case 'Identifier':
      // base case
      callback(pattern);
      break;

    case 'ObjectPattern':
      pattern.properties.forEach(p => {
        recursivePatternCapture(p.value, callback);
      });
      break;

    case 'ArrayPattern':
      pattern.elements.forEach(element => {
        if (element == null) return;
        recursivePatternCapture(element, callback);
      });
      break;
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkV4cG9ydE1hcC5qcyJdLCJuYW1lcyI6WyJyZWN1cnNpdmVQYXR0ZXJuQ2FwdHVyZSIsInVuYW1iaWd1b3VzIiwibG9nIiwiZXhwb3J0Q2FjaGUiLCJNYXAiLCJFeHBvcnRNYXAiLCJjb25zdHJ1Y3RvciIsInBhdGgiLCJuYW1lc3BhY2UiLCJyZWV4cG9ydHMiLCJkZXBlbmRlbmNpZXMiLCJlcnJvcnMiLCJoYXNEZWZhdWx0IiwiZ2V0Iiwic2l6ZSIsImZvckVhY2giLCJkZXAiLCJoYXMiLCJuYW1lIiwidmFsdWVzIiwiaW5uZXJNYXAiLCJoYXNEZWVwIiwiZm91bmQiLCJpbXBvcnRlZCIsImdldEltcG9ydCIsImxvY2FsIiwiZGVlcCIsInVuc2hpZnQiLCJpbm5lclZhbHVlIiwidW5kZWZpbmVkIiwiY2FsbGJhY2siLCJ0aGlzQXJnIiwidiIsIm4iLCJjYWxsIiwicmVleHBvcnRlZCIsInJlcG9ydEVycm9ycyIsImNvbnRleHQiLCJkZWNsYXJhdGlvbiIsInJlcG9ydCIsIm5vZGUiLCJzb3VyY2UiLCJtZXNzYWdlIiwidmFsdWUiLCJtYXAiLCJlIiwibGluZU51bWJlciIsImNvbHVtbiIsImpvaW4iLCJjYXB0dXJlRG9jIiwiZG9jU3R5bGVQYXJzZXJzIiwibWV0YWRhdGEiLCJub2RlcyIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJhcmd1bWVudHMiLCJzb21lIiwibGVhZGluZ0NvbW1lbnRzIiwiZG9jIiwiYXZhaWxhYmxlRG9jU3R5bGVQYXJzZXJzIiwianNkb2MiLCJjYXB0dXJlSnNEb2MiLCJ0b21kb2MiLCJjYXB0dXJlVG9tRG9jIiwiY29tbWVudHMiLCJjb21tZW50IiwicGFyc2UiLCJ1bndyYXAiLCJlcnIiLCJsaW5lcyIsImkiLCJsZW5ndGgiLCJtYXRjaCIsInB1c2giLCJ0cmltIiwic3RhdHVzTWF0Y2giLCJkZXNjcmlwdGlvbiIsInRhZ3MiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiZm9yIiwiZXhwb3J0TWFwIiwiY2FjaGVLZXkiLCJzZXR0aW5ncyIsInBhcnNlclBhdGgiLCJwYXJzZXJPcHRpb25zIiwiZGlnZXN0Iiwic3RhdHMiLCJzdGF0U3luYyIsIm10aW1lIiwic2V0IiwiY29udGVudCIsInJlYWRGaWxlU3luYyIsImVuY29kaW5nIiwidGVzdCIsIm0iLCJhc3QiLCJpc01vZHVsZSIsImRvY3N0eWxlIiwic3R5bGUiLCJjIiwidHlwZSIsInQiLCJuYW1lc3BhY2VzIiwicmVtb3RlUGF0aCIsInJlbGF0aXZlIiwicmVzb2x2ZUltcG9ydCIsInJwIiwiZ2V0TmFtZXNwYWNlIiwiaWRlbnRpZmllciIsImFkZE5hbWVzcGFjZSIsIm9iamVjdCIsIm5zZm4iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImJvZHkiLCJleHBvcnRNZXRhIiwicmVtb3RlTWFwIiwibnMiLCJzcGVjaWZpZXJzIiwicyIsImlkIiwiZGVjbGFyYXRpb25zIiwiZCIsImV4cG9ydGVkIiwicGF0dGVybiIsInByb3BlcnRpZXMiLCJwIiwiZWxlbWVudHMiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7OztRQXNjZ0JBLHVCLEdBQUFBLHVCOztBQXRjaEI7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7O0lBQVlDLFc7Ozs7OztBQUVaLE1BQU1DLE1BQU0scUJBQU0sZ0NBQU4sQ0FBWjs7QUFFQSxNQUFNQyxjQUFjLElBQUlDLEdBQUosRUFBcEI7O0FBRWUsTUFBTUMsU0FBTixDQUFnQjtBQUM3QkMsY0FBWUMsSUFBWixFQUFrQjtBQUNoQixTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLElBQUlKLEdBQUosRUFBakI7QUFDQTtBQUNBLFNBQUtLLFNBQUwsR0FBaUIsSUFBSUwsR0FBSixFQUFqQjtBQUNBLFNBQUtNLFlBQUwsR0FBb0IsSUFBSU4sR0FBSixFQUFwQjtBQUNBLFNBQUtPLE1BQUwsR0FBYyxFQUFkO0FBQ0Q7O0FBRUQsTUFBSUMsVUFBSixHQUFpQjtBQUFFLFdB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RixHQXpFRDs7QUEyRUEsU0FBTytELENBQVA7QUFDRCxDQTFJRDs7QUE2SUE7Ozs7Ozs7QUFPTyxTQUFTaEcsdUJBQVQsQ0FBaUM4SCxPQUFqQyxFQUEwQ2hHLFFBQTFDLEVBQW9EO0FBQ3pELFVBQVFnRyxRQUFReEIsSUFBaEI7QUFDRSxTQUFLLFlBQUw7QUFBbUI7QUFDakJ4RSxlQUFTZ0csT0FBVDtBQUNBOztBQUVGLFNBQUssZUFBTDtBQUNFQSxjQUFRQyxVQUFSLENBQW1CaEgsT0FBbkIsQ0FBMkJpSCxLQUFLO0FBQzlCaEksZ0NBQXdCZ0ksRUFBRXJGLEtBQTFCLEVBQWlDYixRQUFqQztBQUNELE9BRkQ7QUFHQTs7QUFFRixTQUFLLGNBQUw7QUFDRWdHLGNBQVFHLFFBQVIsQ0FBaUJsSCxPQUFqQixDQUEwQm1ILE9BQUQsSUFBYTtBQUNwQyxZQUFJQSxXQUFXLElBQWYsRUFBcUI7QUFDckJsSSxnQ0FBd0JrSSxPQUF4QixFQUFpQ3BHLFFBQWpDO0FBQ0QsT0FIRDtBQUlBO0FBaEJKO0FBa0JEIiwiZmlsZSI6IkV4cG9ydE1hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcydcblxuaW1wb3J0IGRvY3RyaW5lIGZyb20gJ2RvY3RyaW5lJ1xuXG5pbXBvcnQgZGVidWcgZnJvbSAnZGVidWcnXG5cbmltcG9ydCBwYXJzZSBmcm9tICdlc2xpbnQtbW9kdWxlLXV0aWxzL3BhcnNlJ1xuaW1wb3J0IHJlc29sdmUgZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy9yZXNvbHZlJ1xuaW1wb3J0IGlzSWdub3JlZCwgeyBoYXNWYWxpZEV4dGVuc2lvbiB9IGZyb20gJ2VzbGludC1tb2R1bGUtdXRpbHMvaWdub3JlJ1xuXG5pbXBvcnQgeyBoYXNoT2JqZWN0IH0gZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy9oYXNoJ1xuaW1wb3J0ICogYXMgdW5hbWJpZ3VvdXMgZnJvbSAnZXNsaW50LW1vZHVsZS11dGlscy91bmFtYmlndW91cydcblxuY29uc3QgbG9nID0gZGVidWcoJ2VzbGludC1wbHVnaW4taW1wb3J0OkV4cG9ydE1hcCcpXG5cbmNvbnN0IGV4cG9ydENhY2hlID0gbmV3IE1hcCgpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cG9ydE1hcCB7XG4gIGNvbnN0cnVjdG9yKHBhdGgpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoXG4gICAgdGhpcy5uYW1lc3BhY2UgPSBuZXcgTWFwKClcbiAgICAvLyB0b2RvOiByZXN0cnVjdHVyZSB0byBrZXkgb24gcGF0aCwgdmFsdWUgaXMgcmVzb2x2ZXIgKyBtYXAgb2YgbmFtZXNcbiAgICB0aGlzLnJlZXhwb3J0cyA9IG5ldyBNYXAoKVxuICAgIHRoaXMuZGVwZW5kZW5jaWVzID0gbmV3IE1hcCgpXG4gICAgdGhpcy5lcnJvcnMgPSBbXVxuICB9XG5cbiAgZ2V0IGhhc0RlZmF1bHQoKSB7IHJldHVybiB0aGlzLmdldCgnZGVmYXVsdCcpICE9IG51bGwgfSAvLyBzdHJvbmdlciB0aGFuIHRoaXMuaGFzXG5cbiAgZ2V0IHNpemUoKSB7XG4gICAgbGV0IHNpemUgPSB0aGlzLm5hbWVzcGFjZS5zaXplICsgdGhpcy5yZWV4cG9ydHMuc2l6ZVxuICAgIHRoaXMuZGVwZW5kZW5jaWVzLmZvckVhY2goZGVwID0+IHNpemUgKz0gZGVwKCkuc2l6ZSlcbiAgICByZXR1cm4gc2l6ZVxuICB9XG5cbiAgLyoqXG4gICAqIE5vdGUgdGhhdCB0aGlzIGRvZXMgbm90IGNoZWNrIGV4cGxpY2l0bHkgcmUtZXhwb3J0ZWQgbmFtZXMgZm9yIGV4aXN0ZW5jZVxuICAgKiBpbiB0aGUgYmFzZSBuYW1lc3BhY2UsIGJ1dCBpdCB3aWxsIGV4cGFuZCBhbGwgYGV4cG9ydCAqIGZyb20gJy4uLidgIGV4cG9ydHNcbiAgICogaWYgbm90IGZvdW5kIGluIHRoZSBleHBsaWNpdCBuYW1lc3BhY2UuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gIG5hbWVcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiBgbmFtZWAgaXMgZXhwb3J0ZWQgYnkgdGhpcyBtb2R1bGUuXG4gICAqL1xuICBoYXMobmFtZSkge1xuICAgIGlmICh0aGlzLm5hbWVzcGFjZS5oYXMobmFtZSkpIHJldHVybiB0cnVlXG4gICAgaWYgKHRoaXMucmVleHBvcnRzLmhhcyhuYW1lKSkgcmV0dXJuIHRydWVcblxuICAgIC8vIGRlZmF1bHQgZXhwb3J0cyBtdXN0IGJlIGV4cGxpY2l0bHkgcmUtZXhwb3J0ZWQgKCMzMjgpXG4gICAgaWYgKG5hbWUgIT09ICdkZWZhdWx0Jykge1xuICAgICAgZm9yIChsZXQgZGVwIG9mIHRoaXMuZGVwZW5kZW5jaWVzLnZhbHVlcygpKSB7XG4gICAgICAgIGxldCBpbm5lck1hcCA9IGRlcCgpXG5cbiAgICAgICAgLy8gdG9kbzogcmVwb3J0IGFzIHVucmVzb2x2ZWQ/XG4gICAgICAgIGlmICghaW5uZXJNYXApIGNvbnRpbnVlXG5cbiAgICAgICAgaWYgKGlubmVyTWFwLmhhcyhuYW1lKSkgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBlbnN1cmUgdGhhdCBpbXBvcnRlZCBuYW1lIGZ1bGx5IHJlc29sdmVzLlxuICAgKiBAcGFyYW0gIHtbdHlwZV19ICBuYW1lIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7Qm9vbGVhbn0gICAgICBbZGVzY3JpcHRpb25dXG4gICAqL1xuICBoYXNEZWVwKG5hbWUpIHtcbiAgICBpZiAodGhpcy5uYW1lc3BhY2UuaGFzKG5hbWUpKSByZXR1cm4geyBmb3VuZDogdHJ1ZSwgcGF0aDogW3RoaXNdIH1cblxuICAgIGlmICh0aGlzLnJlZXhwb3J0cy5oYXMobmFtZSkpIHtcbiAgICAgIGNvbnN0IHJlZXhwb3J0cyA9IHRoaXMucmVleHBvcnRzLmdldChuYW1lKVxuICAgICAgICAgICwgaW1wb3J0ZWQgPSByZWV4cG9ydHMuZ2V0SW1wb3J0KClcblxuICAgICAgLy8gaWYgaW1wb3J0IGlzIGlnbm9yZWQsIHJldHVybiBleHBsaWNpdCAnbnVsbCdcbiAgICAgIGlmIChpbXBvcnRlZCA9PSBudWxsKSByZXR1cm4geyBmb3VuZDogdHJ1ZSwgcGF0aDogW3RoaXNdIH1cblxuICAgICAgLy8gc2FmZWd1YXJkIGFnYWluc3QgY3ljbGVzLCBvbmx5IGlmIG5hbWUgbWF0Y2hlc1xuICAgICAgaWYgKGltcG9ydGVkLnBhdGggPT09IHRoaXMucGF0aCAmJiByZWV4cG9ydHMubG9jYWwgPT09IG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHsgZm91bmQ6IGZhbHNlLCBwYXRoOiBbdGhpc10gfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZWVwID0gaW1wb3J0ZWQuaGFzRGVlcChyZWV4cG9ydHMubG9jYWwpXG4gICAgICBkZWVwLnBhdGgudW5zaGlmdCh0aGlzKVxuXG4gICAgICByZXR1cm4gZGVlcFxuICAgIH1cblxuXG4gICAgLy8gZGVmYXVsdCBleHBvcnRzIG11c3QgYmUgZXhwbGljaXRseSByZS1leHBvcnRlZCAoIzMyOClcbiAgICBpZiAobmFtZSAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgICBmb3IgKGxldCBkZXAgb2YgdGhpcy5kZXBlbmRlbmNpZXMudmFsdWVzKCkpIHtcbiAgICAgICAgbGV0IGlubmVyTWFwID0gZGVwKClcbiAgICAgICAgLy8gdG9kbzogcmVwb3J0IGFzIHVucmVzb2x2ZWQ/XG4gICAgICAgIGlmICghaW5uZXJNYXApIGNvbnRpbnVlXG5cbiAgICAgICAgLy8gc2FmZWd1YXJkIGFnYWluc3QgY3ljbGVzXG4gICAgICAgIGlmIChpbm5lck1hcC5wYXRoID09PSB0aGlzLnBhdGgpIGNvbnRpbnVlXG5cbiAgICAgICAgbGV0IGlubmVyVmFsdWUgPSBpbm5lck1hcC5oYXNEZWVwKG5hbWUpXG4gICAgICAgIGlmIChpbm5lclZhbHVlLmZvdW5kKSB7XG4gICAgICAgICAgaW5uZXJWYWx1ZS5wYXRoLnVuc2hpZnQodGhpcylcbiAgICAgICAgICByZXR1cm4gaW5uZXJWYWx1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZm91bmQ6IGZhbHNlLCBwYXRoOiBbdGhpc10gfVxuICB9XG5cbiAgZ2V0KG5hbWUpIHtcbiAgICBpZiAodGhpcy5uYW1lc3BhY2UuaGFzKG5hbWUpKSByZXR1cm4gdGhpcy5uYW1lc3BhY2UuZ2V0KG5hbWUpXG5cbiAgICBpZiAodGhpcy5yZWV4cG9ydHMuaGFzKG5hbWUpKSB7XG4gICAgICBjb25zdCByZWV4cG9ydHMgPSB0aGlzLnJlZXhwb3J0cy5nZXQobmFtZSlcbiAgICAgICAgICAsIGltcG9ydGVkID0gcmVleHBvcnRzLmdldEltcG9ydCgpXG5cbiAgICAgIC8vIGlmIGltcG9ydCBpcyBpZ25vcmVkLCByZXR1cm4gZXhwbGljaXQgJ251bGwnXG4gICAgICBpZiAoaW1wb3J0ZWQgPT0gbnVsbCkgcmV0dXJuIG51bGxcblxuICAgICAgLy8gc2FmZWd1YXJkIGFnYWluc3QgY3ljbGVzLCBvbmx5IGlmIG5hbWUgbWF0Y2hlc1xuICAgICAgaWYgKGltcG9ydGVkLnBhdGggPT09IHRoaXMucGF0aCAmJiByZWV4cG9ydHMubG9jYWwgPT09IG5hbWUpIHJldHVybiB1bmRlZmluZWRcblxuICAgICAgcmV0dXJuIGltcG9ydGVkLmdldChyZWV4cG9ydHMubG9jYWwpXG4gICAgfVxuXG4gICAgLy8gZGVmYXVsdCBleHBvcnRzIG11c3QgYmUgZXhwbGljaXRseSByZS1leHBvcnRlZCAoIzMyOClcbiAgICBpZiAobmFtZSAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgICBmb3IgKGxldCBkZXAgb2YgdGhpcy5kZXBlbmRlbmNpZXMudmFsdWVzKCkpIHtcbiAgICAgICAgbGV0IGlubmVyTWFwID0gZGVwKClcbiAgICAgICAgLy8gdG9kbzogcmVwb3J0IGFzIHVucmVzb2x2ZWQ/XG4gICAgICAgIGlmICghaW5uZXJNYXApIGNvbnRpbnVlXG5cbiAgICAgICAgLy8gc2FmZWd1YXJkIGFnYWluc3QgY3ljbGVzXG4gICAgICAgIGlmIChpbm5lck1hcC5wYXRoID09PSB0aGlzLnBhdGgpIGNvbnRpbnVlXG5cbiAgICAgICAgbGV0IGlubmVyVmFsdWUgPSBpbm5lck1hcC5nZXQobmFtZSlcbiAgICAgICAgaWYgKGlubmVyVmFsdWUgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGlubmVyVmFsdWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICBmb3JFYWNoKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgdGhpcy5uYW1lc3BhY2UuZm9yRWFjaCgodiwgbikgPT5cbiAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdiwgbiwgdGhpcykpXG5cbiAgICB0aGlzLnJlZXhwb3J0cy5mb3JFYWNoKChyZWV4cG9ydHMsIG5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHJlZXhwb3J0ZWQgPSByZWV4cG9ydHMuZ2V0SW1wb3J0KClcbiAgICAgIC8vIGNhbid0IGxvb2sgdXAgbWV0YSBmb3IgaWdub3JlZCByZS1leHBvcnRzICgjMzQ4KVxuICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCByZWV4cG9ydGVkICYmIHJlZXhwb3J0ZWQuZ2V0KHJlZXhwb3J0cy5sb2NhbCksIG5hbWUsIHRoaXMpXG4gICAgfSlcblxuICAgIHRoaXMuZGVwZW5kZW5jaWVzLmZvckVhY2goZGVwID0+IGRlcCgpLmZvckVhY2goKHYsIG4pID0+XG4gICAgICBuICE9PSAnZGVmYXVsdCcgJiYgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB2LCBuLCB0aGlzKSkpXG4gIH1cblxuICAvLyB0b2RvOiBrZXlzLCB2YWx1ZXMsIGVudHJpZXM/XG5cbiAgcmVwb3J0RXJyb3JzKGNvbnRleHQsIGRlY2xhcmF0aW9uKSB7XG4gICAgY29udGV4dC5yZXBvcnQoe1xuICAgICAgbm9kZTogZGVjbGFyYXRpb24uc291cmNlLFxuICAgICAgbWVzc2FnZTogYFBhcnNlIGVycm9ycyBpbiBpbXBvcnRlZCBtb2R1bGUgJyR7ZGVjbGFyYXRpb24uc291cmNlLnZhbHVlfSc6IGAgK1xuICAgICAgICAgICAgICAgICAgYCR7dGhpcy5lcnJvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZSA9PiBgJHtlLm1lc3NhZ2V9ICgke2UubGluZU51bWJlcn06JHtlLmNvbHVtbn0pYClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcsICcpfWAsXG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIHBhcnNlIGRvY3MgZnJvbSB0aGUgZmlyc3Qgbm9kZSB0aGF0IGhhcyBsZWFkaW5nIGNvbW1lbnRzXG4gKiBAcGFyYW0gIHsuLi5bdHlwZV19IG5vZGVzIFtkZXNjcmlwdGlvbl1cbiAqIEByZXR1cm4ge3tkb2M6IG9iamVjdH19XG4gKi9cbmZ1bmN0aW9uIGNhcHR1cmVEb2MoZG9jU3R5bGVQYXJzZXJzKSB7XG4gIGNvbnN0IG1ldGFkYXRhID0ge31cbiAgICAgICAsIG5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuXG4gIC8vICdzb21lJyBzaG9ydC1jaXJjdWl0cyBvbiBmaXJzdCAndHJ1ZSdcbiAgbm9kZXMuc29tZShuID0+IHtcbiAgICBpZiAoIW4ubGVhZGluZ0NvbW1lbnRzKSByZXR1cm4gZmFsc2VcblxuICAgIGZvciAobGV0IG5hbWUgaW4gZG9jU3R5bGVQYXJzZXJzKSB7XG4gICAgICBjb25zdCBkb2MgPSBkb2NTdHlsZVBhcnNlcnNbbmFtZV0obi5sZWFkaW5nQ29tbWVudHMpXG4gICAgICBpZiAoZG9jKSB7XG4gICAgICAgIG1ldGFkYXRhLmRvYyA9IGRvY1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH0pXG5cbiAgcmV0dXJuIG1ldGFkYXRhXG59XG5cbmNvbnN0IGF2YWlsYWJsZURvY1N0eWxlUGFyc2VycyA9IHtcbiAganNkb2M6IGNhcHR1cmVKc0RvYyxcbiAgdG9tZG9jOiBjYXB0dXJlVG9tRG9jLFxufVxuXG4vKipcbiAqIHBhcnNlIEpTRG9jIGZyb20gbGVhZGluZyBjb21tZW50c1xuICogQHBhcmFtICB7Li4uW3R5cGVdfSBjb21tZW50cyBbZGVzY3JpcHRpb25dXG4gKiBAcmV0dXJuIHt7ZG9jOiBvYmplY3R9fVxuICovXG5mdW5jdGlvbiBjYXB0dXJlSnNEb2MoY29tbWVudHMpIHtcbiAgbGV0IGRvY1xuXG4gIC8vIGNhcHR1cmUgWFNEb2NcbiAgY29tbWVudHMuZm9yRWFjaChjb21tZW50ID0+IHtcbiAgICAvLyBza2lwIG5vbi1ibG9jayBjb21tZW50c1xuICAgIGlmIChjb21tZW50LnZhbHVlLnNsaWNlKDAsIDQpICE9PSAnKlxcbiAqJykgcmV0dXJuXG4gICAgdHJ5IHtcbiAgICAgIGRvYyA9IGRvY3RyaW5lLnBhcnNlKGNvbW1lbnQudmFsdWUsIHsgdW53cmFwOiB0cnVlIH0pXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvKiBkb24ndCBjYXJlLCBmb3Igbm93PyBtYXliZSBhZGQgdG8gYGVycm9ycz9gICovXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBkb2Ncbn1cblxuLyoqXG4gICogcGFyc2UgVG9tRG9jIHNlY3Rpb24gZnJvbSBjb21tZW50c1xuICAqL1xuZnVuY3Rpb24gY2FwdHVyZVRvbURvYyhjb21tZW50cykge1xuICAvLyBjb2xsZWN0IGxpbmVzIHVwIHRvIGZpcnN0IHBhcmFncmFwaCBicmVha1xuICBjb25zdCBsaW5lcyA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29tbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjb21tZW50ID0gY29tbWVudHNbaV1cbiAgICBpZiAoY29tbWVudC52YWx1ZS5tYXRjaCgvXlxccyokLykpIGJyZWFrXG4gICAgbGluZXMucHVzaChjb21tZW50LnZhbHVlLnRyaW0oKSlcbiAgfVxuXG4gIC8vIHJldHVybiBkb2N0cmluZS1saWtlIG9iamVjdFxuICBjb25zdCBzdGF0dXNNYXRjaCA9IGxpbmVzLmpvaW4oJyAnKS5tYXRjaCgvXihQdWJsaWN8SW50ZXJuYWx8RGVwcmVjYXRlZCk6XFxzKiguKykvKVxuICBpZiAoc3RhdHVzTWF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVzY3JpcHRpb246IHN0YXR1c01hdGNoWzJdLFxuICAgICAgdGFnczogW3tcbiAgICAgICAgdGl0bGU6IHN0YXR1c01hdGNoWzFdLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIGRlc2NyaXB0aW9uOiBzdGF0dXNNYXRjaFsyXSxcbiAgICAgIH1dLFxuICAgIH1cbiAgfVxufVxuXG5FeHBvcnRNYXAuZ2V0ID0gZnVuY3Rpb24gKHNvdXJjZSwgY29udGV4dCkge1xuICBjb25zdCBwYXRoID0gcmVzb2x2ZShzb3VyY2UsIGNvbnRleHQpXG4gIGlmIChwYXRoID09IG51bGwpIHJldHVybiBudWxsXG5cbiAgcmV0dXJuIEV4cG9ydE1hcC5mb3IocGF0aCwgY29udGV4dClcbn1cblxuRXhwb3J0TWFwLmZvciA9IGZ1bmN0aW9uIChwYXRoLCBjb250ZXh0KSB7XG4gIGxldCBleHBvcnRNYXBcblxuICBjb25zdCBjYWNoZUtleSA9IGhhc2hPYmplY3Qoe1xuICAgIHNldHRpbmdzOiBjb250ZXh0LnNldHRpbmdzLFxuICAgIHBhcnNlclBhdGg6IGNvbnRleHQucGFyc2VyUGF0aCxcbiAgICBwYXJzZXJPcHRpb25zOiBjb250ZXh0LnBhcnNlck9wdGlvbnMsXG4gICAgcGF0aCxcbiAgfSkuZGlnZXN0KCdoZXgnKVxuXG4gIGV4cG9ydE1hcCA9IGV4cG9ydENhY2hlLmdldChjYWNoZUtleSlcblxuICAvLyByZXR1cm4gY2FjaGVkIGlnbm9yZVxuICBpZiAoZXhwb3J0TWFwID09PSBudWxsKSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IHN0YXRzID0gZnMuc3RhdFN5bmMocGF0aClcbiAgaWYgKGV4cG9ydE1hcCAhPSBudWxsKSB7XG4gICAgLy8gZGF0ZSBlcXVhbGl0eSBjaGVja1xuICAgIGlmIChleHBvcnRNYXAubXRpbWUgLSBzdGF0cy5tdGltZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIGV4cG9ydE1hcFxuICAgIH1cbiAgICAvLyBmdXR1cmU6IGNoZWNrIGNvbnRlbnQgZXF1YWxpdHk/XG4gIH1cblxuICAvLyBjaGVjayB2YWxpZCBleHRlbnNpb25zIGZpcnN0XG4gIGlmICghaGFzVmFsaWRFeHRlbnNpb24ocGF0aCwgY29udGV4dCkpIHtcbiAgICBleHBvcnRDYWNoZS5zZXQoY2FjaGVLZXksIG51bGwpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IGNvbnRlbnQgPSBmcy5yZWFkRmlsZVN5bmMocGF0aCwgeyBlbmNvZGluZzogJ3V0ZjgnIH0pXG5cbiAgLy8gY2hlY2sgZm9yIGFuZCBjYWNoZSBpZ25vcmVcbiAgaWYgKGlzSWdub3JlZChwYXRoLCBjb250ZXh0KSB8fCAhdW5hbWJpZ3VvdXMudGVzdChjb250ZW50KSkge1xuICAgIGxvZygnaWdub3JlZCBwYXRoIGR1ZSB0byB1bmFtYmlndW91cyByZWdleCBvciBpZ25vcmUgc2V0dGluZ3M6JywgcGF0aClcbiAgICBleHBvcnRDYWNoZS5zZXQoY2FjaGVLZXksIG51bGwpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGV4cG9ydE1hcCA9IEV4cG9ydE1hcC5wYXJzZShwYXRoLCBjb250ZW50LCBjb250ZXh0KVxuXG4gIC8vIGFtYmlndW91cyBtb2R1bGVzIHJldHVybiBudWxsXG4gIGlmIChleHBvcnRNYXAgPT0gbnVsbCkgcmV0dXJuIG51bGxcblxuICBleHBvcnRNYXAubXRpbWUgPSBzdGF0cy5tdGltZVxuXG4gIGV4cG9ydENhY2hlLnNldChjYWNoZUtleSwgZXhwb3J0TWFwKVxuICByZXR1cm4gZXhwb3J0TWFwXG59XG5cblxuRXhwb3J0TWFwLnBhcnNlID0gZnVuY3Rpb24gKHBhdGgsIGNvbnRlbnQsIGNvbnRleHQpIHtcbiAgdmFyIG0gPSBuZXcgRXhwb3J0TWFwKHBhdGgpXG5cbiAgdHJ5IHtcbiAgICB2YXIgYXN0ID0gcGFyc2UocGF0aCwgY29udGVudCwgY29udGV4dClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbG9nKCdwYXJzZSBlcnJvcjonLCBwYXRoLCBlcnIpXG4gICAgbS5lcnJvcnMucHVzaChlcnIpXG4gICAgcmV0dXJuIG0gLy8gY2FuJ3QgY29udGludWVcbiAgfVxuXG4gIGlmICghdW5hbWJpZ3VvdXMuaXNNb2R1bGUoYXN0KSkgcmV0dXJuIG51bGxcblxuICBjb25zdCBkb2NzdHlsZSA9IChjb250ZXh0LnNldHRpbmdzICYmIGNvbnRleHQuc2V0dGluZ3NbJ2ltcG9ydC9kb2NzdHlsZSddKSB8fCBbJ2pzZG9jJ11cbiAgY29uc3QgZG9jU3R5bGVQYXJzZXJzID0ge31cbiAgZG9jc3R5bGUuZm9yRWFjaChzdHlsZSA9PiB7XG4gICAgZG9jU3R5bGVQYXJzZXJzW3N0eWxlXSA9IGF2YWlsYWJsZURvY1N0eWxlUGFyc2Vyc1tzdHlsZV1cbiAgfSlcblxuICAvLyBhdHRlbXB0IHRvIGNvbGxlY3QgbW9kdWxlIGRvY1xuICBhc3QuY29tbWVudHMuc29tZShjID0+IHtcbiAgICBpZiAoYy50eXBlICE9PSAnQmxvY2snKSByZXR1cm4gZmFsc2VcbiAgICB0cnkge1xuICAgICAgY29uc3QgZG9jID0gZG9jdHJpbmUucGFyc2UoYy52YWx1ZSwgeyB1bndyYXA6IHRydWUgfSlcbiAgICAgIGlmIChkb2MudGFncy5zb21lKHQgPT4gdC50aXRsZSA9PT0gJ21vZHVsZScpKSB7XG4gICAgICAgIG0uZG9jID0gZG9jXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7IC8qIGlnbm9yZSAqLyB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0pXG5cbiAgY29uc3QgbmFtZXNwYWNlcyA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIHJlbW90ZVBhdGgobm9kZSkge1xuICAgIHJldHVybiByZXNvbHZlLnJlbGF0aXZlKG5vZGUuc291cmNlLnZhbHVlLCBwYXRoLCBjb250ZXh0LnNldHRpbmdzKVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZUltcG9ydChub2RlKSB7XG4gICAgY29uc3QgcnAgPSByZW1vdGVQYXRoKG5vZGUpXG4gICAgaWYgKHJwID09IG51bGwpIHJldHVybiBudWxsXG4gICAgcmV0dXJuIEV4cG9ydE1hcC5mb3IocnAsIGNvbnRleHQpXG4gIH1cblxuICBmdW5jdGlvbiBnZXROYW1lc3BhY2UoaWRlbnRpZmllcikge1xuICAgIGlmICghbmFtZXNwYWNlcy5oYXMoaWRlbnRpZmllci5uYW1lKSkgcmV0dXJuXG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlc29sdmVJbXBvcnQobmFtZXNwYWNlcy5nZXQoaWRlbnRpZmllci5uYW1lKSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGROYW1lc3BhY2Uob2JqZWN0LCBpZGVudGlmaWVyKSB7XG4gICAgY29uc3QgbnNmbiA9IGdldE5hbWVzcGFjZShpZGVudGlmaWVyKVxuICAgIGlmIChuc2ZuKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCAnbmFtZXNwYWNlJywgeyBnZXQ6IG5zZm4gfSlcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqZWN0XG4gIH1cblxuXG4gIGFzdC5ib2R5LmZvckVhY2goZnVuY3Rpb24gKG4pIHtcblxuICAgIGlmIChuLnR5cGUgPT09ICdFeHBvcnREZWZhdWx0RGVjbGFyYXRpb24nKSB7XG4gICAgICBjb25zdCBleHBvcnRNZXRhID0gY2FwdHVyZURvYyhkb2NTdHlsZVBhcnNlcnMsIG4pXG4gICAgICBpZiAobi5kZWNsYXJhdGlvbi50eXBlID09PSAnSWRlbnRpZmllcicpIHtcbiAgICAgICAgYWRkTmFtZXNwYWNlKGV4cG9ydE1ldGEsIG4uZGVjbGFyYXRpb24pXG4gICAgICB9XG4gICAgICBtLm5hbWVzcGFjZS5zZXQoJ2RlZmF1bHQnLCBleHBvcnRNZXRhKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKG4udHlwZSA9PT0gJ0V4cG9ydEFsbERlY2xhcmF0aW9uJykge1xuICAgICAgbGV0IHJlbW90ZU1hcCA9IHJlbW90ZVBhdGgobilcbiAgICAgIGlmIChyZW1vdGVNYXAgPT0gbnVsbCkgcmV0dXJuXG4gICAgICBtLmRlcGVuZGVuY2llcy5zZXQocmVtb3RlTWFwLCAoKSA9PiBFeHBvcnRNYXAuZm9yKHJlbW90ZU1hcCwgY29udGV4dCkpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBjYXB0dXJlIG5hbWVzcGFjZXMgaW4gY2FzZSBvZiBsYXRlciBleHBvcnRcbiAgICBpZiAobi50eXBlID09PSAnSW1wb3J0RGVjbGFyYXRpb24nKSB7XG4gICAgICBsZXQgbnNcbiAgICAgIGlmIChuLnNwZWNpZmllcnMuc29tZShzID0+IHMudHlwZSA9PT0gJ0ltcG9ydE5hbWVzcGFjZVNwZWNpZmllcicgJiYgKG5zID0gcykpKSB7XG4gICAgICAgIG5hbWVzcGFjZXMuc2V0KG5zLmxvY2FsLm5hbWUsIG4pXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAobi50eXBlID09PSAnRXhwb3J0TmFtZWREZWNsYXJhdGlvbicpe1xuICAgICAgLy8gY2FwdHVyZSBkZWNsYXJhdGlvblxuICAgICAgaWYgKG4uZGVjbGFyYXRpb24gIT0gbnVsbCkge1xuICAgICAgICBzd2l0Y2ggKG4uZGVjbGFyYXRpb24udHlwZSkge1xuICAgICAgICAgIGNhc2UgJ0Z1bmN0aW9uRGVjbGFyYXRpb24nOlxuICAgICAgICAgIGNhc2UgJ0NsYXNzRGVjbGFyYXRpb24nOlxuICAgICAgICAgIGNhc2UgJ1R5cGVBbGlhcyc6IC8vIGZsb3d0eXBlIHdpdGggYmFiZWwtZXNsaW50IHBhcnNlclxuICAgICAgICAgICAgbS5uYW1lc3BhY2Uuc2V0KG4uZGVjbGFyYXRpb24uaWQubmFtZSwgY2FwdHVyZURvYyhkb2NTdHlsZVBhcnNlcnMsIG4pKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlICdWYXJpYWJsZURlY2xhcmF0aW9uJzpcbiAgICAgICAgICAgIG4uZGVjbGFyYXRpb24uZGVjbGFyYXRpb25zLmZvckVhY2goKGQpID0+XG4gICAgICAgICAgICAgIHJlY3Vyc2l2ZVBhdHRlcm5DYXB0dXJlKGQuaWQsXG4gICAgICAgICAgICAgICAgaWQgPT4gbS5uYW1lc3BhY2Uuc2V0KGlkLm5hbWUsIGNhcHR1cmVEb2MoZG9jU3R5bGVQYXJzZXJzLCBkLCBuKSkpKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBuLnNwZWNpZmllcnMuZm9yRWFjaCgocykgPT4ge1xuICAgICAgICBjb25zdCBleHBvcnRNZXRhID0ge31cbiAgICAgICAgbGV0IGxvY2FsXG5cbiAgICAgICAgc3dpdGNoIChzLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdFeHBvcnREZWZhdWx0U3BlY2lmaWVyJzpcbiAgICAgICAgICAgIGlmICghbi5zb3VyY2UpIHJldHVyblxuICAgICAgICAgICAgbG9jYWwgPSAnZGVmYXVsdCdcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY2FzZSAnRXhwb3J0TmFtZXNwYWNlU3BlY2lmaWVyJzpcbiAgICAgICAgICAgIG0ubmFtZXNwYWNlLnNldChzLmV4cG9ydGVkLm5hbWUsIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRNZXRhLCAnbmFtZXNwYWNlJywge1xuICAgICAgICAgICAgICBnZXQoKSB7IHJldHVybiByZXNvbHZlSW1wb3J0KG4pIH0sXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIGNhc2UgJ0V4cG9ydFNwZWNpZmllcic6XG4gICAgICAgICAgICBpZiAoIW4uc291cmNlKSB7XG4gICAgICAgICAgICAgIG0ubmFtZXNwYWNlLnNldChzLmV4cG9ydGVkLm5hbWUsIGFkZE5hbWVzcGFjZShleHBvcnRNZXRhLCBzLmxvY2FsKSlcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlbHNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbG9jYWwgPSBzLmxvY2FsLm5hbWVcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyB0b2RvOiBKU0RvY1xuICAgICAgICBtLnJlZXhwb3J0cy5zZXQocy5leHBvcnRlZC5uYW1lLCB7IGxvY2FsLCBnZXRJbXBvcnQ6ICgpID0+IHJlc29sdmVJbXBvcnQobikgfSlcbiAgICAgIH0pXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBtXG59XG5cblxuLyoqXG4gKiBUcmF2ZXJzZSBhIHBhdHRlcm4vaWRlbnRpZmllciBub2RlLCBjYWxsaW5nICdjYWxsYmFjaydcbiAqIGZvciBlYWNoIGxlYWYgaWRlbnRpZmllci5cbiAqIEBwYXJhbSAge25vZGV9ICAgcGF0dGVyblxuICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVjdXJzaXZlUGF0dGVybkNhcHR1cmUocGF0dGVybiwgY2FsbGJhY2spIHtcbiAgc3dpdGNoIChwYXR0ZXJuLnR5cGUpIHtcbiAgICBjYXNlICdJZGVudGlmaWVyJzogLy8gYmFzZSBjYXNlXG4gICAgICBjYWxsYmFjayhwYXR0ZXJuKVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgJ09iamVjdFBhdHRlcm4nOlxuICAgICAgcGF0dGVybi5wcm9wZXJ0aWVzLmZvckVhY2gocCA9PiB7XG4gICAgICAgIHJlY3Vyc2l2ZVBhdHRlcm5DYXB0dXJlKHAudmFsdWUsIGNhbGxiYWNrKVxuICAgICAgfSlcbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlICdBcnJheVBhdHRlcm4nOlxuICAgICAgcGF0dGVybi5lbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50ID09IG51bGwpIHJldHVyblxuICAgICAgICByZWN1cnNpdmVQYXR0ZXJuQ2FwdHVyZShlbGVtZW50LCBjYWxsYmFjaylcbiAgICAgIH0pXG4gICAgICBicmVha1xuICB9XG59XG4iXX0=