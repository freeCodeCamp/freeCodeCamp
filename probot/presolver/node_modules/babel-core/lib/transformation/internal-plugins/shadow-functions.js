"use strict";

exports.__esModule = true;

var _symbol = require("babel-runtime/core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _plugin = require("../plugin");

var _plugin2 = _interopRequireDefault(_plugin);

var _babelTypes = require("babel-types");

var t = _interopRequireWildcard(_babelTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SUPER_THIS_BOUND = (0, _symbol2.default)("super this bound");

var superVisitor = {
  CallExpression: function CallExpression(path) {
    if (!path.get("callee").isSuper()) return;

    var node = path.node;

    if (node[SUPER_THIS_BOUND]) return;
    node[SUPER_THIS_BOUND] = true;

    path.replaceWith(t.assignmentExpression("=", this.id, node));
  }
};

exports.default = new _plugin2.default({
  name: "internal.shadowFunctions",

  visitor: {
    ThisExpression: function ThisExpression(path) {
      remap(path, "this");
    },
    ReferencedIdentifier: function ReferencedIdentifier(path) {
      if (path.node.name === "arguments") {
        remap(path, "arguments");
      }
    }
  }
});


function shouldShadow(path, shadowPath) {
  if (path.is("_forceShadow")) {
    return true;
  } else {
    return shadowPath;
  }
}

function remap(path, key) {
  var shadowPath = path.inShadow(key);
  if (!shouldShadow(path, shadowPath)) return;

  var shadowFunction = path.node._shadowedFunctionLiteral;

  var currentFunction = void 0;
  var passedShadowFunction = false;

  var fnPath = path.find(function (innerPath) {
    if (innerPath.parentPath && innerPath.parentPath.isClassProperty() && innerPath.key === "value") {
      return true;
    }
    if (path === innerPath) return false;
    if (innerPath.isProgram() || innerPath.isFunction()) {
      currentFunction = currentFunction || innerPath;
    }

    if (innerPath.isProgram()) {
      passedShadowFunction = true;

      return true;
    } else if (innerPath.isFunction() && !innerPath.isArrowFunctionExpression()) {
      if (shadowFunction) {
        if (innerPath === shadowFunction || innerPath.node === shadowFunction.node) return true;
      } else {
        if (!innerPath.is("shadow")) return true;
      }

      passedShadowFunction = true;
      return false;
    }

    return false;
  });

  if (shadowFunction && fnPath.isProgram() && !shadowFunction.isProgram()) {
    fnPath = path.findParent(function (p) {
      return p.isProgram() || p.isFunction();
    });
  }

  if (fnPath === currentFunction) return;

  if (!passedShadowFunction) return;

  var cached = fnPath.getData(key);
  if (!cached) {
    var id = path.scope.generateUidIdentifier(key);

    fnPath.setData(key, id);
    cached = id;

    var classPath = fnPath.findParent(function (p) {
      return p.isClass();
    });
    var hasSuperClass = !!(classPath && classPath.node && classPath.node.superClass);

    if (key === "this" && fnPath.isMethod({ kind: "constructor" }) && hasSuperClass) {
      fnPath.scope.push({ id: id });

      fnPath.traverse(superVisitor, { id: id });
    } else {
      var init = key === "this" ? t.thisExpression() : t.identifier(key);

      if (shadowFunction) init._shadowedFunctionLiteral = shadowFunction;

      fnPath.scope.push({ id: id, init: init });
    }
  }

  var node = t.cloneDeep(cached);
  node.loc = path.node.loc;

  return path.replaceWith(node);
}
module.exports = exports["default"];