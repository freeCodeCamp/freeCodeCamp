const crypto = require('crypto');
const { blockNameify } = require('../../../utils/block-nameify');

const createdIds = new Set();

function createChallengeNode(
  challenge,
  reporter,
  { isReloading } = { isReloading: false }
) {
  // challengeType 11 is for video challenges (they only have instructions)
  // challengeType 7 is for certificates (they only have tests)
  // challengeType 12 is for CodeAlly/CodeRoad challenge

  // TODO: either handle empty descriptions inside Gatsby OR ensure that
  // description defaults to '' when creating challenges.
  // ditto for seeds and instructions.
  // create-md should, then, not create empty seed, description or instruction
  // sections.
  if (
    typeof challenge.description !== 'string' &&
    challenge.challengeType !== 11 &&
    challenge.challengeType !== 7 &&
    challenge.challengeType !== 12
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

  if (internal.type === 'ChallengeNode') {
    const { tests = [], block, dashedName, superBlock } = challenge;
    const slug = `/learn/${superBlock}/${block}/${dashedName}`;

    challenge.fields = {
      slug,
      blockName: blockNameify(block),
      tests
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
