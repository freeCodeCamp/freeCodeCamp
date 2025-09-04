const { root } = require('mdast-builder');
const { isEmpty } = require('lodash');

const { getAllSections, getSection } = require('./utils/get-section');
const mdastToHtml = require('./utils/mdast-to-html');

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

        if (!isEmpty(descriptionSection)) {
          return {
            type: 'description',
            content: mdastToHtml(descriptionSection)
          };
        }

        if (!isEmpty(filesSection)) {
          return {
            type: 'editor',
            files: getFiles(filesSection),
            ...(!isEmpty(instructionsSection) && {
              instructions: mdastToHtml(instructionsSection)
            })
          };
        }
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

  return filesNodes.map(node => ({ contents: node.value }));
}

module.exports = plugin;
