/* eslint-disable import/no-unresolved */
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

  // On file change, rebuild all challenges to ensure all meta (superBlock,
  // order, superOrder) are in sync. This avoids changed nodes being sorted to
  // the end due to missing meta during hot reload.
  watcher.on('change', filePath => {
    if (!/\.md?$/.test(filePath)) return null;
    reporter.info(`Challenge file changed: ${filePath}. Reloading all nodes.`);
    return reloadAllChallenges();
  });

  // if a file is added, that might change the order of the challenges in the
  // containing block, so we recreate them all
  watcher.on('add', filePath => {
    if (!/\.md?$/.test(filePath)) return;
    reporter.info(`Challenge file added: ${filePath}. Reloading all nodes.`);
    void reloadAllChallenges();
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

  function reloadAllChallenges() {
    return source()
      .then(challenges => Promise.all(challenges))
      .then(challenges =>
        challenges.map(challenge =>
          createVisibleChallenge(challenge, { isReloading: true })
        )
      )
      .catch(e => {
        console.log(e);
        reporter.error(`fcc-replace-challenge

  Failed to reload all challenges

  ${e.message}
  ${e.stack}

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
