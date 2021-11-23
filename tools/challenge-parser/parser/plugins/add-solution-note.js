/* const { isEmpty } = require('lodash');
const getAllBetween = require('./utils/between-headings');
const mdastToHTML = require('./utils/mdast-to-html');
const { root } = require('mdast-builder');

function addNotes() {
  function transformer(tree, file) {
    console.log('*****************');
    console.log(file);
    console.log('--------------');
    console.log(tree);
    console.log('!!!!!!!!!!!!!!!!!!!!');

//    const file2path = 

    const notes = {};
    const notesTree = root(getAllBetween(tree, `--notes--`));
    console.log(notesTree);

    const info = getAllBetween(tree, `--info--`);
    console.log('mmmmmmmmmmmmmm');
    console.log(info);

    const sectionText = mdastToHTML(info);
    console.log('+++++++++++++++++sectionText');
    console.log(sectionText);

    if (!isEmpty(sectionText)) {
      notes.data = {
        ...notes.data,
        [sectionId]: `<section id="${sectionId}">
${sectionText}
</section>`
      };
    }
  }

  return transformer;
}

module.exports = addNotes;*/
