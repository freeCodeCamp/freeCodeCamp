const { isEmpty } = require('lodash');
const { getSection } = require('./utils/get-section');
const mdastToHTML = require('./utils/mdast-to-html');

function addText(sectionIds) {
  if (!sectionIds || !Array.isArray(sectionIds) || sectionIds.length <= 0) {
    throw new Error('addText must have an array of section ids supplied');
  }
  function transformer(tree, file) {
    for (const sectionId of sectionIds) {
      const textNodes = getSection(tree, `--${sectionId}--`);
      const sectionText = mdastToHTML(textNodes);

      if (!isEmpty(sectionText)) {
        file.data = {
          ...file.data,
          [sectionId]: `<section id="${sectionId}">
${sectionText}
</section>`
        };
      }
    }
  }
  return transformer;
}

module.exports = addText;
