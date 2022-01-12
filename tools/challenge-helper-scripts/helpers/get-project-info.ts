import path from 'path';

export function getProjectPath(): string {
  return (process.env.CALLING_DIR || process.cwd()) + path.sep;
}

export function getProjectName(): string {
  return getProjectPath().split(path.sep).slice(-2)[0];
}
