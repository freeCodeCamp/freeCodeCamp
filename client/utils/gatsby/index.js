const path = require('path');
const select = require('unist-util-select');
const { head } = require('lodash');

const { dasherize } = require('..');
const { isAStubRE } = require('../regEx');

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

const guideArticle = path.resolve(
  __dirname,
  '../../src/templates/Guide/GuideArticle.js'
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

exports.createGuideArticlePages = createPage => ({
  node: {
    htmlAst,
    excerpt,
    fields: { slug },
    id
  }
}) => {
  let meta = {};

  if (!isAStubRE.test(excerpt)) {
    const featureImage = head(select(htmlAst, 'element[tagName=img]'));
    meta.featureImage = featureImage
      ? featureImage.properties.src
      : 'https://s3.amazonaws.com/freecodecamp' +
        '/reecodecamp-square-logo-large.jpg';

    const description = head(select(htmlAst, 'element[tagName=p]'));
    meta.description = description ? description.children[0].value : '';
  }

  return createPage({
    path: `/guide${slug}`,
    component: guideArticle,
    context: {
      id,
      meta
    }
  });
};
