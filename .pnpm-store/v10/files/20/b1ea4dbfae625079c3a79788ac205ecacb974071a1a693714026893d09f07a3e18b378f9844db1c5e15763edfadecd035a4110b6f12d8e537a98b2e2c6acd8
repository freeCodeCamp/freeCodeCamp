"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAnnotatedForRemoval;

function isAnnotatedForRemoval(node) {
  var comments = node.trailingComments || [];
  return Boolean(comments.find(function (_ref) {
    var value = _ref.value;
    return value.trim() === 'remove-proptypes';
  }));
}