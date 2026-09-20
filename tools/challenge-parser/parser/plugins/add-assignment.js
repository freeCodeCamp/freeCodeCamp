const { getSection } = require('./utils/get-section');

const { createMdastToHtml } = require('./utils/i18n-stringify');
const { splitOnThematicBreak } = require('./utils/split-on-thematic-break');

function plugin() {
  return transformer;

  function transformer(tree, file) {
    const toHtml = createMdastToHtml(file.data.lang);
    const assignmentNodes = getSection(tree, '--assignment--');

    function getAssignments(assignmentNodes) {
      const assignmentGroups = splitOnThematicBreak(assignmentNodes);
      return assignmentGroups.map(assignment => toHtml(assignment));
    }

    file.data.assignments = getAssignments(assignmentNodes).filter(
      a => a != ''
    );
  }
}

module.exports = plugin;
