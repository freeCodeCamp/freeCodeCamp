"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.get = get;
exports.getDependencies = getDependencies;
exports.isInternal = isInternal;
exports.list = void 0;
exports.minVersion = minVersion;
var _t = require("@babel/types");
var _helpersGenerated = require("./helpers-generated.js");
const {
  cloneNode,
  identifier
} = _t;
function deep(obj, path, value) {
  try {
    const parts = path.split(".");
    let last = parts.shift();
    while (parts.length > 0) {
      obj = obj[last];
      last = parts.shift();
    }
    if (arguments.length > 2) {
      obj[last] = value;
    } else {
      return obj[last];
    }
  } catch (e) {
    e.message += ` (when accessing ${path})`;
    throw e;
  }
}
function permuteHelperAST(ast, metadata, bindingName, localBindings, getDependency, adjustAst) {
  const {
    locals,
    dependencies,
    exportBindingAssignments,
    exportName
  } = metadata;
  const bindings = new Set(localBindings || []);
  if (bindingName) bindings.add(bindingName);
  for (const [name, paths] of (Object.entries || (o => Object.keys(o).map(k => [k, o[k]])))(locals)) {
    let newName = name;
    if (bindingName && name === exportName) {
      newName = bindingName;
    } else {
      while (bindings.has(newName)) newName = "_" + newName;
    }
    if (newName !== name) {
      for (const path of paths) {
        deep(ast, path, identifier(newName));
      }
    }
  }
  for (const [name, paths] of (Object.entries || (o => Object.keys(o).map(k => [k, o[k]])))(dependencies)) {
    const ref = typeof getDependency === "function" && getDependency(name) || identifier(name);
    for (const path of paths) {
      deep(ast, path, cloneNode(ref));
    }
  }
  adjustAst == null || adjustAst(ast, exportName, map => {
    exportBindingAssignments.forEach(p => deep(ast, p, map(deep(ast, p))));
  });
}
const helperData = Object.create(null);
function loadHelper(name) {
  if (!helperData[name]) {
    const helper = _helpersGenerated.default[name];
    if (!helper) {
      throw Object.assign(new ReferenceError(`Unknown helper ${name}`), {
        code: "BABEL_HELPER_UNKNOWN",
        helper: name
      });
    }
    helperData[name] = {
      minVersion: helper.minVersion,
      build(getDependency, bindingName, localBindings, adjustAst) {
        const ast = helper.ast();
        permuteHelperAST(ast, helper.metadata, bindingName, localBindings, getDependency, adjustAst);
        return {
          nodes: ast.body,
          globals: helper.metadata.globals
        };
      },
      getDependencies() {
        return Object.keys(helper.metadata.dependencies);
      }
    };
  }
  return helperData[name];
}
function get(name, getDependency, bindingName, localBindings, adjustAst) {
  if (typeof bindingName === "object") {
    const id = bindingName;
    if ((id == null ? void 0 : id.type) === "Identifier") {
      bindingName = id.name;
    } else {
      bindingName = undefined;
    }
  }
  return loadHelper(name).build(getDependency, bindingName, localBindings, adjustAst);
}
function minVersion(name) {
  return loadHelper(name).minVersion;
}
function getDependencies(name) {
  return loadHelper(name).getDependencies();
}
function isInternal(name) {
  var _helpers$name;
  return (_helpers$name = _helpersGenerated.default[name]) == null ? void 0 : _helpers$name.metadata.internal;
}
exports.ensure = name => {
  loadHelper(name);
};
const list = exports.list = Object.keys(_helpersGenerated.default).map(name => name.replace(/^_/, ""));
var _default = exports.default = get;

//# sourceMappingURL=index.js.map
