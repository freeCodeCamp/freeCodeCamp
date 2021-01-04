const { root } = require('mdast-builder');
const unified = require('unified');
const { inlineCode } = require('mdast-util-to-markdown/lib/handle');
const remarkParse = require('remark-parse');
const remarkStringify = require('remark-stringify');
const tableAndStrikethrough = require('../../../challenge-md-parser/mdx/plugins/table-and-strikethrough');

const notranslateStart = '<notranslate>';
const notranslateEnd = '</notranslate>';

const wrapInlineCode = (...args) =>
  notranslateStart + inlineCode(...args) + notranslateEnd;

const annotateCode = md =>
  unified()
    .use(remarkParse)
    .use(tableAndStrikethrough)
    .use(remarkStringify, {
      fences: true,
      emphasis: '*',
      handlers: { inlineCode: wrapInlineCode }
    })
    .processSync(md).contents;

const stringifyMd = nodes =>
  unified()
    .use(remarkStringify, { fences: true, emphasis: '*' })
    .use(tableAndStrikethrough)
    .stringify(root(nodes));

module.exports.stringifyMd = stringifyMd;
module.exports.annotateCode = annotateCode;
module.exports.notranslateStart = notranslateStart;
module.exports.notranslateEnd = notranslateEnd;
