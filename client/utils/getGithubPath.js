exports.getGithubPath = function getGithubPath(fileAbsolutePath) {
  const { NODE_ENV: env } = process.env;
  const guideType = env === 'production' ? 'guide' : 'mock-guide';
  let githubFilePath =
    'https://github.com/freeCodeCamp/freeCodeCamp/blob/master/CONTRIBUTING.md#research-write-and-update-our-guide-articles';
  const pathIndex = fileAbsolutePath.indexOf(`/${guideType}`);
  if (pathIndex > -1) {
    const newPath = fileAbsolutePath.slice(pathIndex);
    githubFilePath = `https://github.com/freeCodeCamp/freeCodeCamp/blob/master${newPath}`;
  }
  return githubFilePath;
};
