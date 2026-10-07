"use strict";

exports.__esModule = true;
exports.createUtilsGetter = createUtilsGetter;
exports.getImportSource = getImportSource;
exports.getRequireSource = getRequireSource;
exports.has = has;
exports.intersection = intersection;
exports.resolveKey = resolveKey;
exports.resolveSource = resolveSource;
var _babel = _interopRequireWildcard(require("@babel/core"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const {
  types: t,
  template: template
} = _babel.default || _babel;
function intersection(a, b) {
  const result = new Set();
  a.forEach(v => b.has(v) && result.add(v));
  return result;
}
function has(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
}
function getType(target) {
  return Object.prototype.toString.call(target).slice(8, -1);
}
function resolveId(path) {
  if (path.isIdentifier() && !path.scope.hasBinding(path.node.name, /* noGlobals */true)) {
    return path.node.name;
  }
  if (path.isPure()) {
    const {
      deopt
    } = path.evaluate();
    if (deopt && deopt.isIdentifier()) {
      return deopt.node.name;
    }
  }
}
function resolveKey(path, computed = false) {
  const {
    scope
  } = path;
  if (path.isStringLiteral()) return path.node.value;
  const isIdentifier = path.isIdentifier();
  if (isIdentifier && !(computed || path.parent.computed)) {
    return path.node.name;
  }
  if (computed && path.isMemberExpression() && path.get("object").isIdentifier({
    name: "Symbol"
  }) && !scope.hasBinding("Symbol", /* noGlobals */true)) {
    const sym = resolveKey(path.get("property"), path.node.computed);
    if (sym) return "Symbol." + sym;
  }
  if (isIdentifier ? scope.hasBinding(path.node.name, /* noGlobals */true) : path.isPure()) {
    const {
      value
    } = path.evaluate();
    if (typeof value === "string") return value;
  }
}
function resolveSource(obj) {
  if (obj.isMemberExpression() && obj.get("property").isIdentifier({
    name: "prototype"
  })) {
    const id = resolveId(obj.get("object"));
    if (id) {
      return {
        id,
        placement: "prototype"
      };
    }
    return {
      id: null,
      placement: null
    };
  }
  const id = resolveId(obj);
  if (id) {
    return {
      id,
      placement: "static"
    };
  }
  if (obj.isRegExpLiteral()) {
    return {
      id: "RegExp",
      placement: "prototype"
    };
  } else if (obj.isFunction()) {
    return {
      id: "Function",
      placement: "prototype"
    };
  } else if (obj.isPure()) {
    const {
      value
    } = obj.evaluate();
    if (value !== undefined) {
      return {
        id: getType(value),
        placement: "prototype"
      };
    }
  }
  return {
    id: null,
    placement: null
  };
}
function getImportSource({
  node
}) {
  if (node.specifiers.length === 0) return node.source.value;
}
function getRequireSource({
  node
}) {
  if (!t.isExpressionStatement(node)) return;
  const {
    expression
  } = node;
  if (t.isCallExpression(expression) && t.isIdentifier(expression.callee) && expression.callee.name === "require" && expression.arguments.length === 1 && t.isStringLiteral(expression.arguments[0])) {
    return expression.arguments[0].value;
  }
}
function hoist(node) {
  // @ts-expect-error
  node._blockHoist = 3;
  return node;
}
function createUtilsGetter(cache) {
  return path => {
    const prog = path.findParent(p => p.isProgram());
    return {
      injectGlobalImport(url) {
        cache.storeAnonymous(prog, url, (isScript, source) => {
          return isScript ? template.statement.ast`require(${source})` : t.importDeclaration([], source);
        });
      },
      injectNamedImport(url, name, hint = name) {
        return cache.storeNamed(prog, url, name, (isScript, source, name) => {
          const id = prog.scope.generateUidIdentifier(hint);
          return {
            node: isScript ? hoist(template.statement.ast`
                  var ${id} = require(${source}).${name}
                `) : t.importDeclaration([t.importSpecifier(id, name)], source),
            name: id.name
          };
        });
      },
      injectDefaultImport(url, hint = url) {
        return cache.storeNamed(prog, url, "default", (isScript, source) => {
          const id = prog.scope.generateUidIdentifier(hint);
          return {
            node: isScript ? hoist(template.statement.ast`var ${id} = require(${source})`) : t.importDeclaration([t.importDefaultSpecifier(id)], source),
            name: id.name
          };
        });
      }
    };
  };
}