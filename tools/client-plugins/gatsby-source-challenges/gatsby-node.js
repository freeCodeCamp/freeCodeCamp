/* eslint-disable import/no-unresolved */
const path = require('path');
const chokidar = require('chokidar');
const readdirp = require('readdirp');

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

  // On file change, rebuild all challenges in the containing block. This keeps
  // ordering consistent (challengeOrder is block-scoped) with minimal reload.
  watcher.on('change', filePath => {
    if (!/\.md?$/.test(filePath)) return null;
    const blockPath = path.dirname(filePath);
    const fullBlockPath = path.join(curriculumPath, blockPath);
    reporter.info(
      `Challenge file changed: ${filePath}. Reloading block: ${blockPath}`
    );
    return readdirp(fullBlockPath, { fileFilter: '*.md' })
      .on('data', entry => {
        const { path: siblingPath } = entry;
        const relativePath = path.join(blockPath, siblingPath);
        onSourceChange(relativePath)
          .then(challenge =>
            createVisibleChallenge(challenge, { isReloading: true })
          )
          .catch(e =>
            reporter.error(
              `fcc-replace-challenge\n  attempting to replace ${relativePath}\n\n  ${e.message}\n  ${e.stack}\n`
            )
          );
      })
      .on('warn', error => console.error('non-fatal error', error))
      .on('error', error => console.error('fatal error', error));
  });

  // On file add, the challengeOrder for the block can change. Rebuild the block.
  watcher.on('add', filePath => {
    if (!/\.md?$/.test(filePath)) return;
    const blockPath = path.dirname(filePath);
    const fullBlockPath = path.join(curriculumPath, blockPath);
    reporter.info(
      `Challenge file added: ${filePath}. Reloading block: ${blockPath}`
    );
    readdirp(fullBlockPath, { fileFilter: '*.md' })
      .on('data', entry => {
        const { path: siblingPath } = entry;
        const relativePath = path.join(blockPath, siblingPath);
        onSourceChange(relativePath)
          .then(challenge =>
            createVisibleChallenge(challenge, { isReloading: true })
          )
          .catch(e =>
            reporter.error(
              `fcc-replace-challenge\nattempting to replace ${relativePath}\n\n${e.message}\n`
            )
          );
      })
      .on('warn', error => console.error('non-fatal error', error))
      .on('error', error => console.error('fatal error', error));
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

  // Full-reload path intentionally removed in favor of block-scoped reloads.

  function createVisibleChallenge(challenge, options) {
    createNode(createChallengeNode(challenge, reporter, options));
  }

  return new Promise((resolve, reject) => {
    watcher.on('ready', () => sourceAndCreateNodes().then(resolve, reject));
  });
};
