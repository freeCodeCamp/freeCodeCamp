"use strict";

exports.__esModule = true;
exports.default = void 0;
var _babel = _interopRequireWildcard(require("@babel/core"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const {
  types: t
} = _babel.default || _babel;
class ImportsCachedInjector {
  constructor(resolver, getPreferredIndex) {
    this._imports = new WeakMap();
    this._anonymousImports = new WeakMap();
    this._lastImports = new WeakMap();
    this._resolver = resolver;
    this._getPreferredIndex = getPreferredIndex;
  }
  storeAnonymous(programPath, url, moduleName, getVal) {
    const key = this._normalizeKey(programPath, url);
    const imports = this._ensure(this._anonymousImports, programPath, Set);
    if (imports.has(key)) return;
    const node = getVal(programPath.node.sourceType === "script", t.stringLiteral(this._resolver(url)));
    imports.add(key);
    this._injectImport(programPath, node, moduleName);
  }
  storeNamed(programPath, url, name, moduleName, getVal) {
    const key = this._normalizeKey(programPath, url, name);
    const imports = this._ensure(this._imports, programPath, Map);
    if (!imports.has(key)) {
      const {
        node,
        name: id
      } = getVal(programPath.node.sourceType === "script", t.stringLiteral(this._resolver(url)), t.identifier(name));
      imports.set(key, id);
      this._injectImport(programPath, node, moduleName);
    }
    return t.identifier(imports.get(key));
  }
  _injectImport(programPath, node, moduleName) {
    var _this$_lastImports$ge;
    const newIndex = this._getPreferredIndex(moduleName);
    const lastImports = (_this$_lastImports$ge = this._lastImports.get(programPath)) != null ? _this$_lastImports$ge : [];
    const isPathStillValid = path => path.node &&
    // Sometimes the AST is modified and the "last import"
    // we have has been replaced
    path.parent === programPath.node && path.container === programPath.node.body;
    let last;
    if (newIndex === Infinity) {
      // Fast path: we can always just insert at the end if newIndex is `Infinity`
      if (lastImports.length > 0) {
        last = lastImports[lastImports.length - 1].path;
        if (!isPathStillValid(last)) last = undefined;
      }
    } else {
      for (const [i, data] of lastImports.entries()) {
        const {
          path,
          index
        } = data;
        if (isPathStillValid(path)) {
          if (newIndex < index) {
            const [newPath] = path.insertBefore(node);
            lastImports.splice(i, 0, {
              path: newPath,
              index: newIndex
            });
            return;
          }
          last = path;
        }
      }
    }
    if (last) {
      const [newPath] = last.insertAfter(node);
      lastImports.push({
        path: newPath,
        index: newIndex
      });
    } else {
      const [newPath] = programPath.unshiftContainer("body", node);
      this._lastImports.set(programPath, [{
        path: newPath,
        index: newIndex
      }]);
    }
  }
  _ensure(map, programPath, Collection) {
    let collection = map.get(programPath);
    if (!collection) {
      collection = new Collection();
      map.set(programPath, collection);
    }
    return collection;
  }
  _normalizeKey(programPath, url, name = "") {
    const {
      sourceType
    } = programPath.node;

    // If we rely on the imported binding (the "name" parameter), we also need to cache
    // based on the sourceType. This is because the module transforms change the names
    // of the import variables.
    return `${name && sourceType}::${url}::${name}`;
  }
}
exports.default = ImportsCachedInjector;