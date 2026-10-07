"use strict";

exports.__esModule = true;
exports.default = void 0;
var _babel = _interopRequireWildcard(require("@babel/core"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const {
  types: t
} = _babel.default || _babel;
class ImportsCache {
  constructor(resolver) {
    this._imports = new WeakMap();
    this._anonymousImports = new WeakMap();
    this._lastImports = new WeakMap();
    this._resolver = resolver;
  }
  storeAnonymous(programPath, url,
  // eslint-disable-next-line no-undef
  getVal) {
    const key = this._normalizeKey(programPath, url);
    const imports = this._ensure(this._anonymousImports, programPath, Set);
    if (imports.has(key)) return;
    const node = getVal(programPath.node.sourceType === "script", t.stringLiteral(this._resolver(url)));
    imports.add(key);
    this._injectImport(programPath, node);
  }
  storeNamed(programPath, url, name, getVal) {
    const key = this._normalizeKey(programPath, url, name);
    const imports = this._ensure(this._imports, programPath, Map);
    if (!imports.has(key)) {
      const {
        node,
        name: id
      } = getVal(programPath.node.sourceType === "script", t.stringLiteral(this._resolver(url)), t.identifier(name));
      imports.set(key, id);
      this._injectImport(programPath, node);
    }
    return t.identifier(imports.get(key));
  }
  _injectImport(programPath, node) {
    const lastImport = this._lastImports.get(programPath);
    let newNodes;
    if (lastImport && lastImport.node &&
    // Sometimes the AST is modified and the "last import"
    // we have has been replaced
    lastImport.parent === programPath.node && lastImport.container === programPath.node.body) {
      newNodes = lastImport.insertAfter(node);
    } else {
      newNodes = programPath.unshiftContainer("body", node);
    }
    const newNode = newNodes[newNodes.length - 1];
    this._lastImports.set(programPath, newNode);

    /*
    let lastImport;
     programPath.get("body").forEach(path => {
      if (path.isImportDeclaration()) lastImport = path;
      if (
        path.isExpressionStatement() &&
        isRequireCall(path.get("expression"))
      ) {
        lastImport = path;
      }
      if (
        path.isVariableDeclaration() &&
        path.get("declarations").length === 1 &&
        (isRequireCall(path.get("declarations.0.init")) ||
          (path.get("declarations.0.init").isMemberExpression() &&
            isRequireCall(path.get("declarations.0.init.object"))))
      ) {
        lastImport = path;
      }
    });*/
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
exports.default = ImportsCache;