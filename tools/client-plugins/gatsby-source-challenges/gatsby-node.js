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

  // On file change, replace only the changed challenge. The key is ensuring
  // onSourceChange returns a challenge with complete metadata.
  watcher.on('change', filePath =>
    /\.md?$/.test(filePath)
      ? onSourceChange(filePath)
          .then(challenge => {
            reporter.info(
              `Challenge file changed: ${filePath}, replacing challenge ${challenge.id}`
            );
            createVisibleChallenge(challenge, { isReloading: true });
          })
          .catch(e =>
            reporter.error(
              `fcc-replace-challenge\n  attempting to replace ${filePath}\n\n  ${e.message}\n  ${e.stack}\n`
            )
          )
      : null
  );

  // On file add, replace just the new challenge.
  watcher.on('add', filePath => {
    if (!/\.md?$/.test(filePath)) return;
    onSourceChange(filePath)
      .then(challenge => {
        reporter.info(
          `Challenge file added: ${filePath}, creating challenge ${challenge.id}`
        );
        createVisibleChallenge(challenge, { isReloading: true });
      })
      .catch(e =>
        reporter.error(
          `fcc-replace-challenge\nattempting to replace ${filePath}\n\n${e.message}\n`
        )
      );
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
