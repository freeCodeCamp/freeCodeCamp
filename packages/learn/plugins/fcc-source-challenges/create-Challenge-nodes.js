const crypto = require('crypto');

function createChallengeNodes(
  path,
  pluginOptions = {}
) {
  const { source } = pluginOptions;
  return new Promise(resolve => {
    const challengeNodes = source(path)
    .reduce((nodes, { challenges, name }) => {
      const challengeNodes = challenges.map(challenge => {
        const contentDigest = crypto
        .createHash('md5')
        .update(JSON.stringify(challenge))
        .digest('hex');
        const internal = {
          contentDigest,
          type: 'ChallengeNode'
        };

        return JSON.parse(
          JSON.stringify({
            id: challenge.id,
            children: [],
            parent: null,
            internal,
            sourceInstanceName: pluginOptions.name || '__PROGRAMATTIC__',
            ...challenge
          })
        );
      });
      return nodes.concat(challengeNodes);
    }, []);
    resolve(challengeNodes);
  });
  }

  exports.createChallengeNodes = createChallengeNodes;
