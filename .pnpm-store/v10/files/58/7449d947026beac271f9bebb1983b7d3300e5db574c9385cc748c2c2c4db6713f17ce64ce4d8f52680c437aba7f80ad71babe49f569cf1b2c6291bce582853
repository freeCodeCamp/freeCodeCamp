'use strict';
const { unit, stringify } = require('postcss-value-parser');
const mathFunctions = require('../lib/mathfunctions.js');

// border: <line-width> || <line-style> || <color>
// outline: <outline-color> || <outline-style> || <outline-width>

const borderWidths = new Set(['thin', 'medium', 'thick']);

const borderStyles = new Set([
  'none',
  'auto', // only in outline-style
  'hidden',
  'dotted',
  'dashed',
  'solid',
  'double',
  'groove',
  'ridge',
  'inset',
  'outset',
]);

/**
 * @param {import('postcss-value-parser').ParsedValue} border
 * @return {string}
 */
module.exports = function normalizeBorder(border) {
  const order = { width: '', style: '', color: '' };

  border.walk((node) => {
    const { type, value } = node;
    if (type === 'word') {
      if (borderStyles.has(value.toLowerCase())) {
        order.style = value;
        return false;
      }
      if (borderWidths.has(value.toLowerCase()) || unit(value.toLowerCase())) {
        if (order.width !== '') {
          order.width = `${order.width} ${value}`;
          return false;
        }
        order.width = value;
        return false;
      }
      order.color = value;
      return false;
    }
    if (type === 'function') {
      if (mathFunctions.has(value.toLowerCase())) {
        order.width = stringify(node);
      } else {
        order.color = stringify(node);
      }
      return false;
    }
  });

  return `${order.width} ${order.style} ${order.color}`.trim();
};
