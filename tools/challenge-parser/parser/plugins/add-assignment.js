const { getSection } = require('./utils/get-section');

const mdastToHtml = require('./utils/mdast-to-html');
const { splitOnThematicBreak } = require('./utils/split-on-thematic-break');

function plugin() {
  return transformer;

  function transformer(tree, file) {
    const assignmentNodes = getSection(tree, '--assignment--');

    const assignment = getAssignments(assignmentNodes, {
      lang: file.data.lang
    }).filter(a => a != '');

    file.data.assignments = assignment;
  }

  function getAssignments(assignmentNodes, { lang }) {
    const assignmentGroups = splitOnThematicBreak(assignmentNodes);
    return assignmentGroups.map(assignment =>
      mdastToHtml(assignment, { lang })
    );
  }
}

module.exports = plugin;
