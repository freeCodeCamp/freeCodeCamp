import path from 'path';

// Returns the path of a project
function getProjectPath(): string {
  return (process.env.CALLING_DIR || process.cwd()) + path.sep;
}

export { getProjectPath };
