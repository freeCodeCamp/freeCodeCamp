const stringify = require('remark-stringify');
const { root } = require('mdast-builder');
const unified = require('unified');

const stringifyMd = nodes =>
  unified()
    .use(stringify, { fences: true, emphasis: '*' })
    .stringify(root(nodes));

module.exports.stringifyMd = stringifyMd;
