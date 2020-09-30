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
    ignored: /(^|[\/\\])\../,
    persistent: true,
    usePolling: true,
    cwd: curriculumPath
  });

  watcher.on('change', filePath =>
    /\.md$/.test(filePath)
      ? onSourceChange(filePath)
          .then(challenge => {
            reporter.info(
              `
File changed at ${filePath}, replacing challengeNode id ${challenge.id}
              `
            );
            createVisibleChallenge(challenge);
          })
          .catch(e =>
            reporter.error(`fcc-replace-challenge
  attempting to replace ${filePath}

  ${e.message}

  `)
          )
      : null
  );

  function sourceAndCreateNodes() {
    return source()
      .then(challenges => Promise.all(challenges))
      .then(challenges =>
        challenges.map(challenge => createVisibleChallenge(challenge))
      )
      .catch(e =>
        reporter.panic(`fcc-source-challenges

  ${e.message}

  `)
      );
  }

  function createVisibleChallenge(challenge) {
    createNode(createChallengeNode(challenge, reporter));
  }

  return new Promise((resolve, reject) => {
    watcher.on('ready', () => sourceAndCreateNodes().then(resolve, reject));
  });
};
