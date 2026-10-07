'use strict';
const { list } = require('postcss');
/** @type {(v: string | string[]) => [string, string, string, string]} */
module.exports = (v) => {
  const s = typeof v === 'string' ? list.space(v) : v;
  return [
    s[0], // top
    s[1] || s[0], // right
    s[2] || s[0], // bottom
    s[3] || s[1] || s[0], // left
  ];
};
