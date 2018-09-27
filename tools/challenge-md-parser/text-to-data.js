const visit = require('unist-util-visit');
const toHTML = require('hast-util-to-html');

const sectionFilter = (
  { type, tagName, properties: { id = '' } },
  sectionId
) => {
  return type === 'element' && tagName === 'section' && id === sectionId;
};

function textToData(sectionIds) {
  if (!sectionIds || !Array.isArray(sectionIds) || sectionIds.length <= 0) {
    throw new Error("textToData must have an array of section id's supplied");
  }
  function transformer(tree, file) {
    visit(tree, 'element', visitor);
    function visitor(node) {
      sectionIds.forEach(sectionId => {
        if (sectionFilter(node, sectionId)) {
          const textArray = toHTML(node);
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
