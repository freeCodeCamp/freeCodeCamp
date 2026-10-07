'use strict';
const colors = require('./colornames.js');

const widths = new Set(['thin', 'medium', 'thick']);
const styles = new Set([
  'none',
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
 * @param {string} value
 * @return {boolean}
 */
function isStyle(value) {
  return value !== undefined && styles.has(value.toLowerCase());
}

/**
 * @param {string} value
 * @return {boolean}
 */
function isWidth(value) {
  return (
    (value && widths.has(value.toLowerCase())) ||
    /^(\d+(\.\d+)?|\.\d+)(\w+)?$/.test(value)
  );
}

/**
 * @param {string} value
 * @return {boolean}
 */
function isColor(value) {
  if (!value) {
    return false;
  }

  value = value.toLowerCase();

  if (/rgba?\(/.test(value)) {
    return true;
  }

  if (/hsla?\(/.test(value)) {
    return true;
  }

  if (/#([0-9a-z]{6}|[0-9a-z]{3})/.test(value)) {
    return true;
  }

  if (value === 'transparent') {
    return true;
  }

  if (value === 'currentcolor') {
    return true;
  }

  return colors.has(value);
}

/**
 * @param {[string, string, string]} wscs
 * @return {boolean}
 */
function isValidWsc(wscs) {
  const validWidth = isWidth(wscs[0]);
  const validStyle = isStyle(wscs[1]);
  const validColor = isColor(wscs[2]);

  return (
    (validWidth && validStyle) ||
    (validWidth && validColor) ||
    (validStyle && validColor)
  );
}

module.exports = { isStyle, isWidth, isColor, isValidWsc };
