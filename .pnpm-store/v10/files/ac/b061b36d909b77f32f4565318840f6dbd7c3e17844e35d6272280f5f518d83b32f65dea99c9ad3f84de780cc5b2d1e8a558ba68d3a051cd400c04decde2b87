/** @internal */
export const Color = {
  Red: 0,
  Black: 1 << 0
};
/** @internal */
export const clone = ({
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
export function swap(n, v) {
  n.key = v.key;
  n.value = v.value;
  n.left = v.left;
  n.right = v.right;
  n.color = v.color;
  n.count = v.count;
}
/** @internal */
export const repaint = ({
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
export const recount = node => {
  node.count = 1 + (node.left?.count ?? 0) + (node.right?.count ?? 0);
};
//# sourceMappingURL=node.js.map