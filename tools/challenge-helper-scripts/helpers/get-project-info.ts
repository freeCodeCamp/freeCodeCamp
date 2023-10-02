export function getProjectPath(): string {
  return (process.env.CALLING_DIR || process.cwd()) + '/';
}

export function getProjectName(): string {
  return getProjectPath().split('/').slice(-2)[0];
}
