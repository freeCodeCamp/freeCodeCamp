"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repaint = exports.recount = exports.clone = exports.Color = void 0;
exports.swap = swap;
/** @internal */
const Color = exports.Color = {
  Red: 0,
  Black: 1 << 0
};
/** @internal */
const clone = ({
  color,
  count,
  key,
  left,
  right,
  value
}) => ({
  color,
  key,
  value,
  left,
  right,
  count
});
/** @internal */
exports.clone = clone;
function swap(n, v) {
  n.key = v.key;
  n.value = v.value;
  n.left = v.left;
  n.right = v.right;
  n.color = v.color;
  n.count = v.count;
}
/** @internal */
const repaint = ({
  count,
  key,
  left,
  right,
  value
}, color) => ({
  color,
  key,
  value,
  left,
  right,
  count
});
/** @internal */
exports.repaint = repaint;
const recount = node => {
  node.count = 1 + (node.left?.count ?? 0) + (node.right?.count ?? 0);
};
exports.recount = recount;
//# sourceMappingURL=node.js.map