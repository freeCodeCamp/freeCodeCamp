"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function helpers() {
  const data = require("@babel/helpers");
  helpers = function () {
    return data;
  };
  return data;
}
function _traverse() {
  const data = require("@babel/traverse");
  _traverse = function () {
    return data;
  };
  return data;
}
function _codeFrame() {
  const data = require("@babel/code-frame");
  _codeFrame = function () {
    return data;
  };
  return data;
}
function _t() {
  const data = require("@babel/types");
  _t = function () {
    return data;
  };
  return data;
}
function _semver() {
  const data = require("semver");
  _semver = function () {
    return data;
  };
  return data;
}
var _babel7Helpers = require("./babel-7-helpers.cjs");
const {
  cloneNode,
  interpreterDirective,
  traverseFast
} = _t();
class File {
  constructor(options, {
    code,
    ast,
    inputMap
  }) {
    this._map = new Map();
    this.opts = void 0;
    this.declarations = {};
    this.path = void 0;
    this.ast = void 0;
    this.scope = void 0;
    this.metadata = {};
    this.code = "";
    this.inputMap = void 0;
    this.hub = {
      file: this,
      getCode: () => this.code,
      getScope: () => this.scope,
      addHelper: this.addHelper.bind(this),
      buildError: this.buildCodeFrameError.bind(this)
    };
    this.opts = options;
    this.code = code;
    this.ast = ast;
    this.inputMap = inputMap;
    this.path = _traverse().NodePath.get({
      hub: this.hub,
      parentPath: null,
      parent: this.ast,
      container: this.ast,
      key: "program"
    }).setContext();
    this.scope = this.path.scope;
  }
  get shebang() {
    const {
      interpreter
    } = this.path.node;
    return interpreter ? interpreter.value : "";
  }
  set shebang(value) {
    if (value) {
      this.path.get("interpreter").replaceWith(interpreterDirective(value));
    } else {
      this.path.get("interpreter").remove();
    }
  }
  set(key, val) {
    {
      if (key === "helpersNamespace") {
        throw new Error("Babel 7.0.0-beta.56 has dropped support for the 'helpersNamespace' utility." + "If you are using @babel/plugin-external-helpers you will need to use a newer " + "version than the one you currently have installed. " + "If you have your own implementation, you'll want to explore using 'helperGenerator' " + "alongside 'file.availableHelper()'.");
      }
    }
    this._map.set(key, val);
  }
  get(key) {
    return this._map.get(key);
  }
  has(key) {
    return this._map.has(key);
  }
  availableHelper(name, versionRange) {
    if (helpers().isInternal(name)) return false;
    let minVersion;
    try {
      minVersion = helpers().minVersion(name);
    } catch (err) {
      if (err.code !== "BABEL_HELPER_UNKNOWN") throw err;
      return false;
    }
    if (typeof versionRange !== "string") return true;
    if (_semver().valid(versionRange)) versionRange = `^${versionRange}`;
    {
      return !_semver().intersects(`<${minVersion}`, versionRange) && !_semver().intersects(`>=8.0.0`, versionRange);
    }
  }
  addHelper(name) {
    if (helpers().isInternal(name)) {
      throw new Error("Cannot use internal helper " + name);
    }
    return this._addHelper(name);
  }
  _addHelper(name) {
    const declar = this.declarations[name];
    if (declar) return cloneNode(declar);
    const generator = this.get("helperGenerator");
    if (generator) {
      const res = generator(name);
      if (res) return res;
    }
    helpers().minVersion(name);
    const uid = this.declarations[name] = this.scope.generateUidIdentifier(name);
    const dependencies = {};
    for (const dep of helpers().getDependencies(name)) {
      dependencies[dep] = this._addHelper(dep);
    }
    const {
      nodes,
      globals
    } = helpers().get(name, dep => dependencies[dep], uid.name, Object.keys(this.scope.getAllBindings()));
    globals.forEach(name => {
      if (this.path.scope.hasBinding(name, true)) {
        this.path.scope.rename(name);
      }
    });
    nodes.forEach(node => {
      node._compact = true;
    });
    const added = this.path.unshiftContainer("body", nodes);
    for (const path of added) {
      if (path.isVariableDeclaration()) this.scope.registerDeclaration(path);
    }
    return uid;
  }
  buildCodeFrameError(node, msg, _Error = SyntaxError) {
    let loc = node == null ? void 0 : node.loc;
    if (!loc && node) {
      traverseFast(node, function (node) {
        if (node.loc) {
          loc = node.loc;
          return traverseFast.stop;
        }
      });
      let txt = "This is an error on an internal node. Probably an internal error.";
      if (loc) txt += " Location has been estimated.";
      msg += ` (${txt})`;
    }
    if (loc) {
      const {
        highlightCode = true
      } = this.opts;
      msg += "\n" + (0, _codeFrame().codeFrameColumns)(this.code, {
        start: {
          line: loc.start.line,
          column: loc.start.column + 1
        },
        end: loc.end && loc.start.line === loc.end.line ? {
          line: loc.end.line,
          column: loc.end.column + 1
        } : undefined
      }, {
        highlightCode
      });
    }
    return new _Error(msg);
  }
}
exports.default = File;
{
  File.prototype.addImport = function addImport() {
    throw new Error("This API has been removed. If you're looking for this " + "functionality in Babel 7, you should import the " + "'@babel/helper-module-imports' module and use the functions exposed " + " from that module, such as 'addNamed' or 'addDefault'.");
  };
  File.prototype.addTemplateObject = function addTemplateObject() {
    throw new Error("This function has been moved into the template literal transform itself.");
  };
  {
    File.prototype.getModuleName = function getModuleName() {
      return _babel7Helpers.getModuleName()(this.opts, this.opts);
    };
  }
}
0 && 0;

//# sourceMappingURL=file.js.map
