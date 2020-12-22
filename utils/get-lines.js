const { isEmpty } = require('lodash');

// TODO: secure with tests
function getLines(contents, range) {
  if (isEmpty(range)) {
    return '';
  }
  const lines = contents.split('\n');
  const editableLines =
    isEmpty(lines) || range[1] <= range[0]
      ? []
      : lines.slice(range[0], range[1] - 1);
  return editableLines.join('\n');
}

exports.getLines = getLines;
