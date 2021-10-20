const path = require('path');

// Returns the path of a project
function getProjectPath() {
  return (process.env.CALLING_DIR || process.cwd()) + path.sep;
}

exports.getProjectPath = getProjectPath;
