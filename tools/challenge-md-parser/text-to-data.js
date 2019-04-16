const visit = require('unist-util-visit');
const toHTML = require('hast-util-to-html');

const { sectionFilter } = require('./utils');

function createPNode() {
  return {
    type: 'element',
    tagName: 'p',
    children: [],
    properties: {}
  };
}
function createBlankLineNode() {
  return {
    type: 'text',
    value: '\n'
  };
}

function textToData(sectionIds) {
  if (!sectionIds || !Array.isArray(sectionIds) || sectionIds.length <= 0) {
    throw new Error("textToData must have an array of section id's supplied");
  }
  function transformer(tree, file) {
    visit(tree, 'element', visitor);
    function visitor(node) {
      sectionIds.forEach(sectionId => {
        if (sectionFilter(node, sectionId)) {
          const newChildren = [];
          let currentParagraph = null;
          node.children.forEach(child => {
            if (child.type !== 'text') {
              if (child.type === 'element' && child.tagName === 'p') {
                newChildren.push(child);
                currentParagraph = null;
              } else {
                if (!currentParagraph) {
                  currentParagraph = createPNode();
                  newChildren.push(currentParagraph);
                }
                currentParagraph.children.push(child);
              }
            } else {
              const lines = child.value.split('\n');
              if (lines.filter(Boolean).length > 0) {
                lines.forEach((line, index) => {
                  if (line === '') {
                    currentParagraph = null;
                  } else {
                    if (!currentParagraph || index > 0) {
                      newChildren.push(createBlankLineNode());
                      currentParagraph = createPNode();
                      newChildren.push(currentParagraph);
                    }
                    currentParagraph.children.push({ ...child, value: line });
                  }
                });
              } else {
                currentParagraph = null;
                newChildren.push(createBlankLineNode());
              }
            }
          });
          const hasData = newChildren.some(
            node => node.type !== 'text' || !/^\s*$/.test(node.value)
          );
          const textArray = hasData
            ? toHTML({ ...node, children: newChildren })
            : '';
          file.data = {
            ...file.data,
            [sectionId]: textArray
          };
        }
      });
    }
  }
  return transformer;
}

module.exports = textToData;
