const chokidar = require('chokidar');

const { createChallengeNode } = require('./create-challenge-nodes');

exports.sourceNodes = function sourceChallengesSourceNodes(
  { actions, reporter },
  pluginOptions
) {
  const { source, onSourceChange, curriculumPath } = pluginOptions;
  if (typeof source !== 'function') {
    reporter.panic(`
    "source" is a required option for fcc-source-challenges. It must be a
    function that delivers challenge objects to the plugin
    `);
  }
  if (typeof onSourceChange !== 'function') {
    reporter.panic(`
    "onSourceChange" is a required option for fcc-source-challenges. It must be
    a function that delivers a new challenge object to the plugin
    `);
  }
  if (typeof curriculumPath !== 'string') {
    reporter.panic(`
    "curriculumPath" is a required option for fcc-source-challenges. It must be
    a path to a curriculum directory
    `);
  }
  const { createNode } = actions;
  const watcher = chokidar.watch(curriculumPath, {
    ignored: /(^|[/\\])\../,
    ignoreInitial: true,
    persistent: true,
    usePolling: true,
    cwd: curriculumPath
  });

  function handleChallengeUpdate(filePath, action = 'changed') {
    return onSourceChange(filePath)
      .then(challenges => {
        const actionText = action === 'added' ? 'creating' : 'replacing';
        reporter.info(
          `Challenge file ${action}: ${filePath}, ${actionText} challengeNodes with ids ${challenges.map(({ id }) => id).join(', ')}`
        );
        challenges.forEach(challenge =>
          createVisibleChallenge(challenge, { isReloading: true })
        );
      })
      .catch(e =>
        reporter.error(
          `fcc-replace-challenge\nattempting to replace ${filePath}\n\n${e.message}\n${e.stack ? `  ${e.stack}` : ''}`
        )
      );
  }

  // On file change, replace only the changed challenge. The key is ensuring
  // onSourceChange returns a challenge with complete metadata.
  watcher.on('change', filePath =>
    /\.md?$/.test(filePath) ? handleChallengeUpdate(filePath, 'changed') : null
  );

  // On file add, replace just the new challenge.
  watcher.on('add', filePath => {
    if (!/\.md?$/.test(filePath)) return;
    handleChallengeUpdate(filePath, 'added');
  });

  function sourceAndCreateNodes() {
    return source()
      .then(challenges => Promise.all(challenges))
      .then(challenges =>
        challenges.map(challenge => createVisibleChallenge(challenge))
      )
      .catch(e => {
        console.log(e);
        reporter.panic(`fcc-source-challenges

  ${e.message}

  `);
      });
  }

  function createVisibleChallenge(challenge, options) {
    createNode(createChallengeNode(challenge, reporter, options));
  }

  return new Promise((resolve, reject) => {
    watcher.on('ready', () => sourceAndCreateNodes().then(resolve, reject));
  });
};
