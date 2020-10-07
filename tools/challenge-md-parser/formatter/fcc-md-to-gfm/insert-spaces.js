const unified = require('unified');
const visit = require('unist-util-visit');
const toHast = require('mdast-util-to-hast');
const raw = require('hast-util-raw');
const toHtml = require('hast-util-to-html');
const isEmpty = require('lodash/isEmpty');
const hastToMdast = require('hast-util-to-mdast');
const remarkStringify = require('remark-stringify');
const remarkParse = require('remark-parse');
const { text } = require('mdast-builder');
const parseEntities = require('parse-entities');
const find = require('unist-util-find');
const h = require('hastscript');
const phrasing = require('hast-util-phrasing');

const blankLine = { type: 'text', value: '\n\n' };

/* Currently the challenge parser behaves differently depending on whether a
section starts with an empty line or not.  If it does not, the parser interprets
single new-line (\n) characters as paragraph breaks.  It also does not parse
markdown syntax (such as `).  This makes formatting challenges harder than it
needs to be, since normal markdown rules do not apply (some of the time!)

For example
<section id='instructions'>
Sentence1.
Sentence2 `var x = 'y'`.
...

becomes


Sentence1.

Sentence2 `var x = 'y'`.


in the challenge, but should become


Sentence1. Sentence2 <code>var x = 'y'</code>.

---

This file converts the instructions and descriptions.  After this there will be
no need to handle the case where the first line is not empty and markdown syntax
will alway work.  The linter can check that the first blank line exists.
*/

var parser = unified().use(remarkParse);
var mdCompiler = unified().use(remarkStringify);

function stringifyMd(mdast) {
  return mdCompiler.stringify(mdast);
}

function parseMd(text) {
  return parser.parse(text);
}

function escapeMd(hastNode) {
  // defensive copy because stringify mutates objects its called on...
  hastNode = { ...hastNode };
  // These are added by getParagraphs so must not be touched
  if (hastNode.value === '\n\n') return hastNode;
  // A trailing space gets converted to \n, because hastToMdast will be told
  // told this is a paragraph, which it isn't
  const trailingSpace = /\s/.test(hastNode.value[hastNode.value.length - 1]);
  // leading spaces also get ignored, but need to be added in, since they can
  // be following html elements.
  const leadingSpace = /\s/.test(hastNode.value[0]);
  // fake a hast tree.  Is there a less hacky approach?
  const hastTree = {
    type: 'root',
    children: [hastNode]
  };
  let value = stringifyMd(hastToMdast(hastTree));
  // Removing the last character is always necessary, since stringify appends \n
  value = value.slice(0, -1);
  if (trailingSpace) value += ' ';
  if (leadingSpace) value = ' ' + value;
  // convert html entities into their characters
  return { type: 'text', value: parseEntities(value) };
}

function wrapBareUrls(hastNode) {
  const rawText = hastNode.value;
  // blank lines can't have urls.
  if (/^\s*$/.test(rawText)) return null;
  return wrapRecursive(rawText);
}

function wrapRecursive(rawText) {
  const mdNode = parseMd(rawText);

  const link = find(mdNode, { type: 'link' });

  if (link) {
    const url = correctUrl(link.url);
    const pos = rawText.indexOf(url);
    const head = rawText.slice(0, pos);
    const tail = rawText.slice(pos + url.length);
    return [text(head), h('code', url)].concat(wrapRecursive(tail));
  } else {
    return [text(rawText)];
  }
}

// remark-parse is overly eager when it comes to urls, this works around that.
function correctUrl(url) {
  var match = url.match(/"|'|!/);
  if (match) {
    return url.split(match[0])[0];
  } else {
    return url;
  }
}

function getParagraphs(node) {
  // Splitting generates unwanted expty nodes.
  if (node.value === '\n') {
    return blankLine;
  }

  let paragraphs = node.value.split('\n');
  // nothing to split
  if (paragraphs.length <= 1) {
    return node;
  }

  let children = paragraphs.reduce((acc, curr) => {
    return acc.concat([{ type: 'text', value: curr }, blankLine]);
  }, []);

  children = children.filter(({ value }) => value !== '');

  // Remove the trailing newLine.
  children.pop();
  return children;
}

function sectionFromTemplate(section, sectionContent, closingTag) {
  return (
    `<section id='${section.properties.id}'>` +
    '\n' +
    sectionContent +
    '\n' +
    closingTag
  );
}

function htmlVisitor(node) {
  // 'html' nodes contain un-parsed html strings, so we first convert them
  // to hast and then parse them to produce a syntax tree (so we can locate
  // and modify the instructions and description)
  const section = raw(toHast(node, { allowDangerousHtml: true }));
  if (
    section.type === 'element' &&
    (section.properties.id === 'instructions' ||
      section.properties.id === 'description') &&
    !isEmpty(section.children)
  ) {
    const hasClosingTag = /<\/section>\s*$/.test(node.value);
    // section contains the section tag and all the text up to the first
    // blank line.

    // This replaces single line breaks with empty lines, so
    // that the section text that previously required special treatment
    // becomes standard markdown.

    // Has to start with an empty line
    section.children.unshift(blankLine);

    // break the lines into paragraphs
    section.children = section.children.reduce(
      (acc, child) =>
        acc.concat(child.type === 'text' ? getParagraphs(child) : [child]),
      []
    );

    // next we escape the text nodes, so that syntax like * doesn't start
    // altering the formatting when it's interpretted as markdown

    visit(section, (node, id, parent) => {
      // no need to dive into non-phrasing nodes (once we're inside section)
      // since they don't get parsed as markdown.
      // An exception is made for 'big' because it is not considered to be
      // phrasing, but can have markdown (that will be parsed!) inside it.
      if (
        node.tagName &&
        node.tagName !== 'section' &&
        node.tagName !== 'big' &&
        !phrasing(node)
      ) {
        return visit.SKIP;
      } else if (node.type === 'text') {
        parent.children[id] = escapeMd(node);
        return visit.CONTINUE;
      } else {
        return visit.CONTINUE;
      }
    });

    // then wrap bare urls in code tags.
    visit(section, 'text', (node, id, parent) => {
      // skip if it's inside an anchor element
      if (parent.tagName && parent.tagName === 'a') return visit.CONTINUE;
      const wrapped = wrapBareUrls(node);
      if (wrapped) {
        parent.children.splice(id, 1, ...wrapped);
        return id + wrapped.length;
      } else {
        return visit.CONTINUE;
      }
    });

    // This can come from an unclosed <section>, so we have to pretend it's
    // a root element (otherwise it gets wrapped in a tag) and add the
    // opening <section> back in by hand.
    const sectionContent = toHtml(
      { type: 'root', children: section.children },
      {
        allowDangerousCharacters: true,
        allowDangerousHtml: true,
        quote: "'"
      }
    );

    const closingTag = hasClosingTag ? '</section>\n' : '';

    node.value = sectionFromTemplate(section, sectionContent, closingTag);
  }

  // If there is still a closing tag here, it should be seperated from the rest
  // of the html, so that it will be parsed as a distinct html element. This
  // will be important when we convert to mdx.
  const hasClosingTag = /<\/section>\s*$/.test(node.value);

  if (hasClosingTag) {
    node.value = node.value.replace(/<\/section>\s*$/, '\n\n</section>\n');
  }
}

function plugin() {
  return transformer;

  function transformer(tree) {
    return visit(tree, 'html', htmlVisitor);
  }
}

exports.insertSpaces = plugin;
exports.escapeMd = escapeMd;
exports.getParagraphs = getParagraphs;
exports.wrapBareUrls = wrapBareUrls;
exports.correctUrl = correctUrl;
exports.htmlVisitor = htmlVisitor;
