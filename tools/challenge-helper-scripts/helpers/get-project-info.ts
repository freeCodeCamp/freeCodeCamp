import path from 'path';

export function getProjectPath(): string {
  return (process.env.CALLING_DIR || process.cwd()) + path.sep;
}

export function getProjectName(): string {
  return process.env.CALLING_DIR
    ? process.env.CALLING_DIR.split(path.sep).slice(-1).toString()
    : process.cwd().split(path.sep).slice(-1).toString();
}
