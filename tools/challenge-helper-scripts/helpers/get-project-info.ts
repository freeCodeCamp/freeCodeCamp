export function getProjectPath(): string {
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  return (process.env.INIT_CWD || process.cwd()) + '/';
}

export function getProjectName(): string {
  return getProjectPath().split('/').slice(-2)[0];
}
