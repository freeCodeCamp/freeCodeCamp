const visit = require('unist-util-visit');
const { selectAll, select } = require('hast-util-select');

const { sectionFilter } = require('./utils');

const seedRE = /(.+)-seed$/;
const headRE = /(.+)-setup$/;
const tailRE = /(.+)-teardown$/;

function defaultFile(lang) {
  return {
    key: `index${lang}`,
    ext: lang,
    name: 'index',
    contents: '',
    head: '',
    tail: ''
  };
}
function createCodeGetter(key, regEx, seeds) {
  return container => {
    const {
      properties: { id }
    } = container;
    const lang = id.match(regEx)[1];
    const code = select('code', container).children[0].value;
    if (lang in seeds) {
      seeds[lang] = {
        ...seeds[lang],
        [key]: code
      };
    } else {
      seeds[lang] = {
        ...defaultFile(lang),
        [key]: code
      };
    }
  };
}

function createPlugin() {
  return function transformer(tree, file) {
    function visitor(node) {
      if (sectionFilter(node, 'challengeSeed')) {
        let seeds = {};
        const codeDivs = selectAll('div', node);
        const seedConatiners = codeDivs.filter(({ properties: { id } }) =>
          seedRE.test(id)
        );
        seedConatiners.forEach(createCodeGetter('contents', seedRE, seeds));

        const headConatiners = codeDivs.filter(({ properties: { id } }) =>
          headRE.test(id)
        );
        headConatiners.forEach(createCodeGetter('head', headRE, seeds));

        const tailConatiners = codeDivs.filter(({ properties: { id } }) =>
          tailRE.test(id)
        );
        tailConatiners.forEach(createCodeGetter('tail', tailRE, seeds));

        file.data = {
          ...file.data,
          files: Object.keys(seeds).map(lang => seeds[lang])
        };
      }
    }
    visit(tree, 'element', visitor);
  };
}

module.exports = createPlugin;
