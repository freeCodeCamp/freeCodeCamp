const { createChallengeNodes } = require('./create-Challenge-nodes');

exports.sourceNodes = function sourceChallengesSourceNodes(
  { actions, reporter },
  pluginOptions
) {
  if (typeof pluginOptions.source !== 'function') {
    reporter.panic(`
"source" is a required option for fcc-source-challenges. It must be a function
that delivers challenge files to the plugin
      `);
  }
  // TODO: Add live seed updates
  const { createNode } = actions;

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
};
