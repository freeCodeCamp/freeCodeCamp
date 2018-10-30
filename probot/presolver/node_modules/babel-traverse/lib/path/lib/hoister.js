"use strict";

exports.__esModule = true;

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _babelTypes = require("babel-types");

var t = _interopRequireWildcard(_babelTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var referenceVisitor = {
  ReferencedIdentifier: function ReferencedIdentifier(path, state) {
    if (path.isJSXIdentifier() && _babelTypes.react.isCompatTag(path.node.name) && !path.parentPath.isJSXMemberExpression()) {
      return;
    }

    if (path.node.name === "this") {
      var scope = path.scope;
      do {
        if (scope.path.isFunction() && !scope.path.isArrowFunctionExpression()) break;
      } while (scope = scope.parent);
      if (scope) state.breakOnScopePaths.push(scope.path);
    }

    var binding = path.scope.getBinding(path.node.name);
    if (!binding) return;

    if (binding !== state.scope.getBinding(path.node.name)) return;

    state.bindings[path.node.name] = binding;
  }
};

var PathHoister = function () {
  function PathHoister(path, scope) {
    (0, _classCallCheck3.default)(this, PathHoister);

    this.breakOnScopePaths = [];

    this.bindings = {};

    this.scopes = [];

    this.scope = scope;
    this.path = path;

    this.attachAfter = false;
  }

  PathHoister.prototype.isCompatibleScope = function isCompatibleScope(scope) {
    for (var key in this.bindings) {
      var binding = this.bindings[key];
      if (!scope.bindingIdentifierEquals(key, binding.identifier)) {
        return false;
      }
    }

    return true;
  };

  PathHoister.prototype.getCompatibleScopes = function getCompatibleScopes() {
    var scope = this.path.scope;
    do {
      if (this.isCompatibleScope(scope)) {
        this.scopes.push(scope);
      } else {
        break;
      }

      if (this.breakOnScopePaths.indexOf(scope.path) >= 0) {
        break;
      }
    } while (scope = scope.parent);
  };

  PathHoister.prototype.getAttachmentPath = function getAttachmentPath() {
    var path = this._getAttachmentPath();
    if (!path) return;

    var targetScope = path.scope;

    if (targetScope.path === path) {
      targetScope = path.scope.parent;
    }

    if (targetScope.path.isProgram() || targetScope.path.isFunction()) {
      for (var name in this.bindings) {
        if (!targetScope.hasOwnBinding(name)) continue;

        var binding = this.bindings[name];

        if (binding.kind === "param") continue;

        if (this.getAttachmentParentForPath(binding.path).key > path.key) {
          this.attachAfter = true;
          path = binding.path;

          for (var _iterator = binding.constantViolations, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
            var _ref;

            if (_isArray) {
              if (_i >= _iterator.length) break;
              _ref = _iterator[_i++];
            } else {
              _i = _iterator.next();
              if (_i.done) break;
              _ref = _i.value;
            }

            var violationPath = _ref;

            if (this.getAttachmentParentForPath(violationPath).key > path.key) {
              path = violationPath;
            }
          }
        }
      }
    }

    if (path.parentPath.isExportDeclaration()) {
      path = path.parentPath;
    }

    return path;
  };

  PathHoister.prototype._getAttachmentPath = function _getAttachmentPath() {
    var scopes = this.scopes;

    var scope = scopes.pop();

    if (!scope) return;

    if (scope.path.isFunction()) {
      if (this.hasOwnParamBindings(scope)) {
        if (this.scope === scope) return;

        return scope.path.get("body").get("body")[0];
      } else {
        return this.getNextScopeAttachmentParent();
      }
    } else if (scope.path.isProgram()) {
      return this.getNextScopeAttachmentParent();
    }
  };

  PathHoister.prototype.getNextScopeAttachmentParent = function getNextScopeAttachmentParent() {
    var scope = this.scopes.pop();
    if (scope) return this.getAttachmentParentForPath(scope.path);
  };

  PathHoister.prototype.getAttachmentParentForPath = function getAttachmentParentForPath(path) {
    do {
      if (!path.parentPath || Array.isArray(path.container) && path.isStatement() || path.isVariableDeclarator() && path.parentPath.node !== null && path.parentPath.node.declarations.length > 1) return path;
    } while (path = path.parentPath);
  };

  PathHoister.prototype.hasOwnParamBindings = function hasOwnParamBindings(scope) {
    for (var name in this.bindings) {
      if (!scope.hasOwnBinding(name)) continue;

      var binding = this.bindings[name];

      if (binding.kind === "param" && binding.constant) return true;
    }
    return false;
  };

  PathHoister.prototype.run = function run() {
    var node = this.path.node;
    if (node._hoisted) return;
    node._hoisted = true;

    this.path.traverse(referenceVisitor, this);

    this.getCompatibleScopes();

    var attachTo = this.getAttachmentPath();
    if (!attachTo) return;

    if (attachTo.getFunctionParent() === this.path.getFunctionParent()) return;

    var uid = attachTo.scope.generateUidIdentifier("ref");
    var declarator = t.variableDeclarator(uid, this.path.node);

    var insertFn = this.attachAfter ? "insertAfter" : "insertBefore";
    attachTo[insertFn]([attachTo.isVariableDeclarator() ? declarator : t.variableDeclaration("var", [declarator])]);

    var parent = this.path.parentPath;
    if (parent.isJSXElement() && this.path.container === parent.node.children) {
      uid = t.JSXExpressionContainer(uid);
    }

    this.path.replaceWith(uid);
  };

  return PathHoister;
}();

exports.default = PathHoister;
module.exports = exports["default"];