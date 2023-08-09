const getAllBetween = require('./utils/between-headings');
const mdastToHTML = require('./utils/mdast-to-html');
const { splitOnThematicBreak } = require('./utils/split-on-thematic-break');

function plugin(){
  return transformer;


  function transformer(tree, file){
    const sandpackNodes = getAllBetween(tree, `--sandpack--`);

    const sandpack = getSandpacks(sandpackNodes).filter(a => a != '');


    file.data.sandpack = sandpack;
  }


  function getSandpacks(sandpackNodes) {
    const assignmentGroups = splitOnThematicBreak(sandpackNodes);

    return assignmentGroups.map(sandpack => mdastToHTML(sandpack));
  }

}

module.exports = plugin;
