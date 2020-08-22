const path = require('path');
const { dasherize } = require('../../../utils/slugs');

const { viewTypes } = require('../challengeTypes');

const backend = path.resolve(
  __dirname,
  '../../src/templates/Challenges/projects/backend/Show.js'
);
const classic = path.resolve(
  __dirname,
  '../../src/templates/Challenges/classic/Show.js'
);
const frontend = path.resolve(
  __dirname,
  '../../src/templates/Challenges/projects/frontend/Show.js'
);
const intro = path.resolve(
  __dirname,
  '../../src/templates/Introduction/Intro.js'
);
const superBlockIntro = path.resolve(
  __dirname,
  '../../src/templates/Introduction/SuperBlockIntro.js'
);
const video = path.resolve(
  __dirname,
  '../../src/templates/Challenges/video/Show.js'
);

const views = {
  backend,
  classic,
  modern: classic,
  frontend,
  video
  // quiz: Quiz
};

const getNextChallengePath = (node, index, nodeArray) => {
  const next = nodeArray[index + 1];
  return next ? next.node.fields.slug : '/learn';
};

const getPrevChallengePath = (node, index, nodeArray) => {
  const prev = nodeArray[index - 1];
  return prev ? prev.node.fields.slug : '/learn';
};

const getTemplateComponent = challengeType => views[viewTypes[challengeType]];

const getIntroIfRequired = (node, index, nodeArray) => {
  const next = nodeArray[index + 1];
  const isEndOfBlock = next && next.node.challengeOrder === 0;
  let nextSuperBlock = '';
  let nextBlock = '';
  if (next) {
    const { superBlock, block } = next.node;
    nextSuperBlock = superBlock;
    nextBlock = block;
  }
  return isEndOfBlock
    ? `/learn/${dasherize(nextSuperBlock)}/${dasherize(nextBlock)}`
    : '';
};

exports.createChallengePages = createPage => ({ node }, index, thisArray) => {
  const {
    superBlock,
    block,
    fields: { slug },
    required = [],
    template,
    challengeType,
    id
  } = node;
  // TODO: challengeType === 7 and isPrivate are the same, right? If so, we
  // should remove one of them.
  if (challengeType === 7) {
    return null;
  }

  return createPage({
    path: slug,
    component: getTemplateComponent(challengeType),
    context: {
      challengeMeta: {
        superBlock,
        block: block,
        introPath: getIntroIfRequired(node, index, thisArray),
        template,
        required,
        nextChallengePath: getNextChallengePath(node, index, thisArray),
        prevChallengePath: getPrevChallengePath(node, index, thisArray),
        id
      },
      slug
    }
  });
};

exports.createBlockIntroPages = createPage => edge => {
  const {
    fields: { slug },
    frontmatter: { block }
  } = edge.node;

  return createPage({
    path: slug,
    component: intro,
    context: {
      block: dasherize(block),
      slug
    }
  });
};

exports.createSuperBlockIntroPages = createPage => edge => {
  const {
    fields: { slug },
    frontmatter: { superBlock }
  } = edge.node;

  return createPage({
    path: slug,
    component: superBlockIntro,
    context: {
      superBlock: dasherize(superBlock),
      slug
    }
  });
};
