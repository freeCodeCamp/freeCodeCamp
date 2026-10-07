import { c as colorize } from './shared/consola.DXBYu-KD.mjs';
export { b as align, d as box, a as centerAlign, e as colors, g as getColor, l as leftAlign, r as rightAlign, s as stripAnsi } from './shared/consola.DXBYu-KD.mjs';
import 'node:tty';

function formatTree(items, options) {
  options = {
    prefix: "  ",
    ellipsis: "...",
    ...options
  };
  const tree = _buildTree(items, options).join("");
  if (options && options.color) {
    return colorize(options.color, tree);
  }
  return tree;
}
function _buildTree(items, options) {
  const chunks = [];
  const total = items.length - 1;
  for (let i = 0; i <= total; i++) {
    const item = items[i];
    const isItemString = typeof item === "string";
    const isLimit = options?.maxDepth != null && options.maxDepth <= 0;
    if (isLimit) {
      const ellipsis = `${options.prefix}${options.ellipsis}
`;
      return [
        isItemString ? ellipsis : item.color ? colorize(item.color, ellipsis) : ellipsis
        // prettier-ignore
      ];
    }
    const isLast = i === total;
    const prefix = isLast ? `${options?.prefix}\u2514\u2500` : `${options?.prefix}\u251C\u2500`;
    if (isItemString) {
      chunks.push(`${prefix}${item}
`);
    } else {
      const log = `${prefix}${item.text}
`;
      chunks.push(item.color ? colorize(item.color, log) : log);
      if (item.children) {
        const _tree = _buildTree(item.children, {
          ...options,
          maxDepth: options?.maxDepth == null ? void 0 : options.maxDepth - 1,
          prefix: `${options?.prefix}${isLast ? "  " : "\u2502  "}`
        });
        chunks.push(..._tree);
      }
    }
  }
  return chunks;
}

export { colorize, formatTree };
