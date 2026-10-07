'use strict';

const box = require('./shared/consola.DwRq1yyg.cjs');
require('node:tty');

function formatTree(items, options) {
  options = {
    prefix: "  ",
    ellipsis: "...",
    ...options
  };
  const tree = _buildTree(items, options).join("");
  if (options && options.color) {
    return box.colorize(options.color, tree);
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
        isItemString ? ellipsis : item.color ? box.colorize(item.color, ellipsis) : ellipsis
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
      chunks.push(item.color ? box.colorize(item.color, log) : log);
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

exports.align = box.align;
exports.box = box.box;
exports.centerAlign = box.centerAlign;
exports.colorize = box.colorize;
exports.colors = box.colors;
exports.getColor = box.getColor;
exports.leftAlign = box.leftAlign;
exports.rightAlign = box.rightAlign;
exports.stripAnsi = box.stripAnsi;
exports.formatTree = formatTree;
