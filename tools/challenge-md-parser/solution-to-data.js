const visit = require('unist-util-visit');
const { selectAll } = require('hast-util-select');

const { sectionFilter } = require('./utils');
const { createCodeGetter } = require('./challengeSeed-to-data');

const solutionRE = /(.+)-solution$/;

function createPlugin() {
  return function transformer(tree, file) {
    function visitor(node) {
      if (sectionFilter(node, 'solution')) {
        // fallback for single-file challenges
        const solutions = selectAll('code', node).map(
          element => element.children[0].value
        );
        file.data = {
          ...file.data,
          solutions
        };
        const solutionFiles = {};
        const codeDivs = selectAll('div', node);
        const solutionContainers = codeDivs.filter(({ properties: { id } }) =>
          solutionRE.test(id)
        );
        solutionContainers.forEach(
          createCodeGetter('contents', solutionRE, solutionFiles)
        );

        file.data = {
          ...file.data,
          solutionFiles: Object.keys(solutionFiles).map(
            lang => solutionFiles[lang]
          )
        };
      }
    }
    visit(tree, 'element', visitor);
  };
}

module.exports = createPlugin;
