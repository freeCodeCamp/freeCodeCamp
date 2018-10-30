"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Binding = function () {
  function Binding(_ref) {
    var existing = _ref.existing,
        identifier = _ref.identifier,
        scope = _ref.scope,
        path = _ref.path,
        kind = _ref.kind;
    (0, _classCallCheck3.default)(this, Binding);

    this.identifier = identifier;
    this.scope = scope;
    this.path = path;
    this.kind = kind;

    this.constantViolations = [];
    this.constant = true;

    this.referencePaths = [];
    this.referenced = false;
    this.references = 0;

    this.clearValue();

    if (existing) {
      this.constantViolations = [].concat(existing.path, existing.constantViolations, this.constantViolations);
    }
  }

  Binding.prototype.deoptValue = function deoptValue() {
    this.clearValue();
    this.hasDeoptedValue = true;
  };

  Binding.prototype.setValue = function setValue(value) {
    if (this.hasDeoptedValue) return;
    this.hasValue = true;
    this.value = value;
  };

  Binding.prototype.clearValue = function clearValue() {
    this.hasDeoptedValue = false;
    this.hasValue = false;
    this.value = null;
  };

  Binding.prototype.reassign = function reassign(path) {
    this.constant = false;
    if (this.constantViolations.indexOf(path) !== -1) {
      return;
    }
    this.constantViolations.push(path);
  };

  Binding.prototype.reference = function reference(path) {
    if (this.referencePaths.indexOf(path) !== -1) {
      return;
    }
    this.referenced = true;
    this.references++;
    this.referencePaths.push(path);
  };

  Binding.prototype.dereference = function dereference() {
    this.references--;
    this.referenced = !!this.references;
  };

  return Binding;
}();

exports.default = Binding;
module.exports = exports["default"];