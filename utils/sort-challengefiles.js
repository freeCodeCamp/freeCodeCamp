exports.sortChallengeFiles = function sortChallengeFiles(challengeFiles) {
  const xs = challengeFiles.slice();
  // TODO: refactor this to use an ext array ['html', 'js', 'css'] and loop over
  // that.
  xs.sort((a, b) => {
    if (a.ext === 'html') return -1;
    if (b.ext === 'html') return 1;
    if (a.ext === 'css') return -1;
    if (b.ext === 'css') return 1;
    if (a.ext === 'jsx') return -1;
    if (b.ext === 'jsx') return 1;
    if (a.ext === 'js') return -1;
    if (b.ext === 'js') return 1;
    return 0;
  });
  return xs;
};
