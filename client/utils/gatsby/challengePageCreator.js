const path = require('path');
const { dasherize } = require('..');

const { viewTypes } = require('../challengeTypes');

const backend = path.resolve(
  __dirname,
  '../../src/templates/Challenges/backend/Show.js'
);
const classic = path.resolve(
  __dirname,
  '../../src/templates/Challenges/classic/Show.js'
);
const project = path.resolve(
  __dirname,
  '../../src/templates/Challenges/project/Show.js'
);
const intro = path.resolve(
  __dirname,
  '../../src/templates/Introduction/Intro.js'
);
const superBlockIntro = path.resolve(
  __dirname,
  '../../src/templates/Introduction/SuperBlockIntro.js'
);

const views = {
  backend,
  classic,
  modern: classic,
  project
  // quiz: Quiz
};

const getNextChallengePath = (node, index, nodeArray) => {
  const next = nodeArray[index + 1];
  return next ? next.node.fields.slug : '/';
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
    fields: { slug },
    required = [],
    template,
    challengeType,
    id
  } = node;
  if (challengeType === 7) {
    return null;
  }

  return createPage({
    path: slug,
    component: getTemplateComponent(challengeType),
    context: {
      challengeMeta: {
        introPath: getIntroIfRequired(node, index, thisArray),
        template,
        required,
        nextChallengePath: getNextChallengePath(node, index, thisArray),
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
