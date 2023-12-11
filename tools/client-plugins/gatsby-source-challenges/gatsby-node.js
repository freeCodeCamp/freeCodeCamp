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

  watcher.on('change', filePath =>
    /\.md?$/.test(filePath)
      ? onSourceChange(filePath)
          .then(challenge => {
            reporter.info(
              `
File changed at ${filePath}, replacing challengeNode id ${challenge.id}
              `
            );
            createVisibleChallenge(challenge, { isReloading: true });
          })
          .catch(e =>
            reporter.error(`fcc-replace-challenge
  attempting to replace ${filePath}

  ${e.message}

  `)
          )
      : null
  );

  // if a file is added, that might change the order of the challenges in the
  // containing block, so we recreate them all
  watcher.on('add', filePath => {
    if (/\.md?$/.test(filePath)) {
      const blockPath = path.dirname(filePath);
      const fullBlockPath = path.join(
        __dirname,
        '../../../curriculum/challenges/english/',
        blockPath
      );
      readdirp(fullBlockPath, { fileFilter: '*.md' })
        .on('data', entry => {
          const { path: siblingPath } = entry;
          const relativePath = path.join(blockPath, siblingPath);
          onSourceChange(relativePath)
            .then(challenge => {
              reporter.info(
                `
File changed at ${relativePath}, replacing challengeNode id ${challenge.id}
            `
              );
              createVisibleChallenge(challenge);
            })
            .catch(e =>
              reporter.error(`fcc-replace-challenge
attempting to replace ${relativePath}

${e.message}

`)
            );
        })
        .on('warn', error => console.error('non-fatal error', error))
        .on('error', error => console.error('fatal error', error));
    }
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
