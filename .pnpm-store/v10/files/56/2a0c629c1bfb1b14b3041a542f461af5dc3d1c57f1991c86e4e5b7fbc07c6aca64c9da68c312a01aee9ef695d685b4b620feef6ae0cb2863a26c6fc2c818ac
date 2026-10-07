"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validate;
exports.validateChild = validateChild;
exports.validateField = validateField;
exports.validateInternal = validateInternal;
var _index = require("../definitions/index.js");
function validate(node, key, val) {
  if (!node) return;
  const fields = _index.NODE_FIELDS[node.type];
  if (!fields) return;
  const field = fields[key];
  validateField(node, key, val, field);
  validateChild(node, key, val);
}
function validateInternal(field, node, key, val, maybeNode) {
  if (!(field != null && field.validate)) return;
  if (field.optional && val == null) return;
  field.validate(node, key, val);
  if (maybeNode) {
    var _NODE_PARENT_VALIDATI;
    const type = val.type;
    if (type == null) return;
    (_NODE_PARENT_VALIDATI = _index.NODE_PARENT_VALIDATIONS[type]) == null || _NODE_PARENT_VALIDATI.call(_index.NODE_PARENT_VALIDATIONS, node, key, val);
  }
}
function validateField(node, key, val, field) {
  if (!(field != null && field.validate)) return;
  if (field.optional && val == null) return;
  field.validate(node, key, val);
}
function validateChild(node, key, val) {
  var _NODE_PARENT_VALIDATI2;
  const type = val == null ? void 0 : val.type;
  if (type == null) return;
  (_NODE_PARENT_VALIDATI2 = _index.NODE_PARENT_VALIDATIONS[type]) == null || _NODE_PARENT_VALIDATI2.call(_index.NODE_PARENT_VALIDATIONS, node, key, val);
}

//# sourceMappingURL=validate.js.map
