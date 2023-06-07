const getAllBetween = require('./utils/between-headings');

const mdastToHtml = require('./utils/mdast-to-html');
const { splitOnThematicBreak } = require('./utils/split-on-thematic-break');

function plugin() {
  return transformer;

  function transformer(tree, file) {
    const assigmentNodes = getAllBetween(tree, '--assignment--');

    const assignment = getAssignments(assigmentNodes).filter(a => a != '');

    file.data.assignments = assignment;
  }

  function getAssignments(assignmentNodes) {
    const assignmentGroups = splitOnThematicBreak(assignmentNodes);

    return assignmentGroups.map(assignment => mdastToHtml(assignment));
  }
}

module.exports = plugin;
