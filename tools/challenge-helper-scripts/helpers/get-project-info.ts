export function getProjectPath(): string {
  return (process.env.INIT_CWD || process.cwd()) + '/';
}

export function getProjectName(): string {
  return getProjectPath().split('/').slice(-2)[0];
}
