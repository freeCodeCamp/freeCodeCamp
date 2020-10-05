const is = require('unist-util-is');
const { isEmpty } = require('lodash');

const getId = require('./get-id');

const keyToSection = {
  head: 'before-user-code',
  tail: 'after-user-code'
};
const supportedLanguages = ['js', 'css', 'html', 'jsx', 'py'];

function defaultFile(lang, id) {
  return {
    key: `index${lang}`,
    ext: lang,
    name: 'index',
    contents: '',
    head: '',
    tail: '',
    id
  };
}

function getFileVisitor(seeds, seedKey, validate) {
  return (node, index, parent) => {
    if (is(node, 'root')) return;
    if (is(node, 'code')) {
      codeToData(node, seeds, seedKey, validate);
      return;
    }
    idToData(node, index, parent, seeds);
  };
}

function codeToData(node, seeds, seedKey, validate) {
  if (validate) validate(node);
  const lang = node.lang;
  if (!supportedLanguages.includes(lang))
    throw Error(
      lang +
        ' is not a supported language. Please use one of\n' +
        'js, css, html, jsx or py'
    );
  const key = `index${lang}`;
  const id = seeds[key] ? seeds[key].id : '';
  // the contents will be missing if there is an id preceeding this code
  // block.
  if (!seeds[key]) {
    seeds[key] = defaultFile(lang, id);
  }
  if (isEmpty(node.value) && seedKey !== 'contents') {
    const section = keyToSection[seedKey];
    throw Error(`Empty code block in --${section}-- section`);
  }

  seeds[key][seedKey] = isEmpty(seeds[key][seedKey])
    ? node.value
    : seeds[key][seedKey] + '\n' + node.value;
}

function idToData(node, index, parent, seeds) {
  const id = getId(node);

  if (!id) {
    throw Error(
      'Unexpected syntax in --seed-contents--,\n' +
        'must be ``` fenced code or ![id]\n'
    );
  }
  const codeNode = parent.children[index + 1];
  if (codeNode && is(codeNode, 'code')) {
    const key = `index${codeNode.lang}`;
    if (seeds[key]) throw Error('![id]s must come before code blocks');
    seeds[key] = defaultFile(codeNode.lang, id);
  } else {
    throw Error('![id]s must come before code blocks');
  }
}

module.exports.getFileVisitor = getFileVisitor;
