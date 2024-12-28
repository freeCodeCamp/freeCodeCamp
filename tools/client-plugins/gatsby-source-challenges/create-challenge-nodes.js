const crypto = require('crypto');

const createdIds = new Set();

function createChallengeNode(
  challenge,
  reporter,
  { isReloading } = { isReloading: false }
) {
  const contentDigest = crypto
    .createHash('md5')
    .update(JSON.stringify(challenge))
    .digest('hex');
  const internal = {
    contentDigest,
    type: challenge.challengeType === 7 ? 'CertificateNode' : 'ChallengeNode'
  };

  if (internal.type === 'ChallengeNode') {
    const { tests = [], block, dashedName, superBlock } = challenge;
    const slug = `/learn/${superBlock}/${block}/${dashedName}`;
    const blockHashSlug = `/learn/${superBlock}/#${block}`;

    challenge.fields = {
      slug,
      blockName: block,
      tests,
      blockHashSlug
    };
  }

  // Challenge id should be unique for CertificateNodes, but not for
  // ChallengeNodes
  const id =
    internal.type === 'ChallengeNode' ? challenge.fields.slug : challenge.id;

  if (createdIds.has(id) && !isReloading) {
    throw Error(`
    Challenge slugs must be unique, but ${id} already exists.
    `);
  }
  createdIds.add(id);

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
        { challenge },
        {
          id
        }
      )
    )
  );
}

exports.createChallengeNode = createChallengeNode;
