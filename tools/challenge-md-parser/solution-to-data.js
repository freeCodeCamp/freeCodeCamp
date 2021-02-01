const visit = require('unist-util-visit');
const { selectAll } = require('hast-util-select');

const { sectionFilter } = require('./utils');
const { createCodeGetter, defaultFile } = require('./challengeSeed-to-data');
const { isEmpty } = require('lodash');

const solutionRE = /(.+)-solution$/;

function indexByKey(obj) {
  return { [obj.key]: { ...obj } };
}

function createPlugin() {
  return function transformer(tree, file) {
    function visitor(node) {
      if (sectionFilter(node, 'solution')) {
        // fallback for single-file challenges
        const rawSolutions = selectAll('code', node).map(element => ({
          lang: element.properties.className[0].split('-')[1],
          contents: element.children[0].value
        }));

        const solutionFiles = {};

        const codeDivs = selectAll('div', node);
        const solutionContainers = codeDivs.filter(({ properties: { id } }) =>
          solutionRE.test(id)
        );
        solutionContainers.forEach(
          createCodeGetter('contents', solutionRE, solutionFiles)
        );

        const solutionsAsFiles = rawSolutions
          .map(({ lang, contents }) => ({
            ...defaultFile(lang),
            contents
          }))
          .map(indexByKey);

        const solutions = isEmpty(solutionFiles)
          ? solutionsAsFiles
          : [solutionFiles];

        file.data = {
          ...file.data,
          solutions
        };
      }
    }
    visit(tree, 'element', visitor);
  };
}

module.exports = createPlugin;
