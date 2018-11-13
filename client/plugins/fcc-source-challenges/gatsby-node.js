const path = require('path');
const chokidar = require('chokidar');

const curriculumPath = path.resolve(__dirname, '../../../curriculum');

const { createChallengeNodes } = require('./create-Challenge-nodes');

exports.sourceNodes = function sourceChallengesSourceNodes(
  { actions, reporter },
  pluginOptions
) {
  if (typeof pluginOptions.source !== 'function') {
    reporter.panic(`
    "source" is a required option for fcc-source-challenges. It must be a
    function that delivers challenge objects to the plugin
    `);
  }
  const { createNode } = actions;
  const watcher = chokidar.watch(curriculumPath, {
    ignored: [/(^|[\/\\])\../, /node_modules/],
    persistent: true
  });

  watcher.on('ready', sourceAndCreateNodes).on('change', sourceAndCreateNodes);

  function sourceAndCreateNodes(filePath) {
    if (filePath) {
      reporter.info(`File ${filePath} has been changed`);
    }
    const { source } = pluginOptions;
    return source()
      .then(challenges =>
        challenges
          .filter(challenge => challenge.superBlock !== 'Certificates')
          .map(challenge => createChallengeNodes(challenge, reporter))
          .map(node => createNode(node))
      )
      .catch(e =>
        reporter.panic(`fcc-source-challenges

  ${e.message}

  `)
      );
  }
};
