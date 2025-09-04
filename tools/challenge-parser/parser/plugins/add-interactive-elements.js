const { root } = require('mdast-builder');
const { isEmpty } = require('lodash');

const { getAllSections, getSection } = require('./utils/get-section');
const mdastToHtml = require('./utils/mdast-to-html');
const { getFilenames } = require('./utils/get-file-visitor');

function plugin() {
  return transformer;
  function transformer(fullTree, file) {
    // Get all --interactive-- sections
    const interactiveSections = getAllSections(fullTree, '--interactive--');

    if (!isEmpty(interactiveSections)) {
      // Process each interactive section
      const interactiveElements = interactiveSections.map(interactiveNodes => {
        const tree = root(interactiveNodes);
        const descriptionSection = getSection(tree, '--description--');
        const filesSection = getSection(tree, '--files--');
        const instructionsSection = getSection(tree, '--instructions--');

        validate({ descriptionSection, filesSection, instructionsSection });

        return {
          ...(!isEmpty(descriptionSection) && {
            description: mdastToHtml(descriptionSection)
          }),
          ...(!isEmpty(filesSection) && {
            files: getFiles(filesSection)
          }),
          ...(!isEmpty(instructionsSection) && {
            instructions: mdastToHtml(instructionsSection)
          })
        };
      });

      if (!isEmpty(interactiveElements)) {
        file.data.interactiveElements = interactiveElements;
      }
    }
  }
}

function validate({ descriptionSection, filesSection, instructionsSection }) {
  if (!isEmpty(descriptionSection) && !isEmpty(filesSection)) {
    throw Error(
      'Each interactive element should either contain a --description-- or --files--, not both.'
    );
  }
  if (isEmpty(filesSection) && !isEmpty(instructionsSection)) {
    throw Error(
      '--instructions-- must be in the same section as --files--. If you want a standalone description, use --description--'
    );
  }
  if (
    isEmpty(descriptionSection) &&
    isEmpty(filesSection) &&
    isEmpty(instructionsSection)
  ) {
    throw Error(
      'Each interactive element must contain at least one subsection, e.g. --description-- or --files--'
    );
  }
}

function getFiles(filesNodes) {
  const invalidNode = filesNodes.find(node => node.type !== 'code');
  if (invalidNode) {
    throw Error('The --files-- section should only contain code blocks.');
  }

  // TODO: refactor into two steps, 1) count languages, 2) map to files
  const counts = {};

  return filesNodes.map(node => {
    counts[node.lang] = counts[node.lang] ? counts[node.lang] + 1 : 1;
    const out = {
      contents: node.value,
      ext: node.lang,
      name:
        getFilenames(node.lang) +
        (counts[node.lang] ? `-${counts[node.lang]}` : '')
    };

    return out;
  });
}

module.exports = plugin;
