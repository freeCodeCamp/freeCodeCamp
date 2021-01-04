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

const baseProcessor = () =>
  unified()
    .use(remarkParse)
    .use(remarkStringify)
    .use(tableAndStrikethrough)
    .data('settings', { fences: true, emphasis: '*' });

const annotateCode = md =>
  baseProcessor()
    .data('settings', { handlers: { inlineCode: wrapInlineCode } })
    .processSync(md).contents;

const stringifyMd = nodes => baseProcessor().stringify(root(nodes));

module.exports.stringifyMd = stringifyMd;
module.exports.annotateCode = annotateCode;
module.exports.baseProcessor = baseProcessor;
module.exports.notranslateStart = notranslateStart;
module.exports.notranslateEnd = notranslateEnd;
