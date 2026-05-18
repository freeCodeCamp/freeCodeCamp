const { root } = require('mdast-builder');
const find = require('unist-util-find');
const { isEmpty } = require('lodash');

const { getFilenames } = require('./utils/get-file-visitor');
const { getSection, isMarker } = require('./utils/get-section');
const mdastToHTML = require('./utils/mdast-to-html');

function plugin() {
  return transformer;

  function transformer(tree, file) {
    const interactiveNodes = getSection(tree, `--interactive--`, 1);
    const subSection = find(root(interactiveNodes), isMarker);
    if (subSection) {
      throw Error(
        `The --interactive-- section should not have any subsections. Found subsection ${subSection.children[0].value}`
      );
    }

    if (!isEmpty(interactiveNodes)) {
      const nodules =
        interactiveNodes.map(node => {
          if (
            node.type === 'containerDirective' &&
            node.name === 'interactive_editor'
          ) {
            return {
              type: 'interactiveEditor',
              files: getFiles(node.children)
            };
          } else {
            const paragraph = mdastToHTML([node]);
            return {
              type: 'paragraph',
              contents: paragraph
            };
          }
        }) ?? [];

      file.data.nodules = nodules;
    }
  }
}

function getFiles(filesNodes) {
  const invalidNode = filesNodes.find(node => node.type !== 'code');
  if (invalidNode) {
    throw Error('The :::interactive_editor should only contain code blocks.');
  }

  // TODO: refactor into two steps, 1) count languages, 2) map to files
  const counts = {};

  return filesNodes.map(node => {
    counts[node.lang] = counts[node.lang] ? counts[node.lang] + 1 : 1;

    const contentsHtml = mdastToHTML([node]);

    const out = {
      contents: node.value,
      ext: node.lang,
      name:
        getFilenames(node.lang) +
        (counts[node.lang] ? `-${counts[node.lang]}` : ''),
      contentsHtml
    };

    return out;
  });
}

module.exports = plugin;
