const crypto = require('crypto');

function createChallengeNode(challenge, reporter) {
  // challengeType 11 is for video challenges (they only have instructions)
  // challengeType 7 is for certificates (they only have tests)
  if (
    typeof challenge.description[0] !== 'string' &&
    (challenge.challengeType !== 11 && challenge.challengeType !== 7)
  ) {
    reporter.warn(`

    ${challenge.title} has a description that will break things!

    `);
  }
  const contentDigest = crypto
    .createHash('md5')
    .update(JSON.stringify(challenge))
    .digest('hex');
  const internal = {
    contentDigest,
    type: challenge.challengeType === 7 ? 'CertificateNode' : 'ChallengeNode'
  };

  /* eslint-disable prefer-object-spread/prefer-object-spread */
  return JSON.parse(
    JSON.stringify(
      Object.assign(
        {},
        {
          children: [],
          parent: null,
          internal,
          sourceInstanceName: 'challenge'
        },
        challenge
      )
    )
  );
}

exports.createChallengeNode = createChallengeNode;
