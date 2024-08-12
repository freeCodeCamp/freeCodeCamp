const path = require('path');
const { sortChallengeFiles } = require('../sort-challengefiles');
const {
  challengeTypes,
  viewTypes
} = require('../../../shared/config/challenge-types');

const backend = path.resolve(
  __dirname,
  '../../src/templates/Challenges/projects/backend/show.tsx'
);
const classic = path.resolve(
  __dirname,
  '../../src/templates/Challenges/classic/show.tsx'
);
const frontend = path.resolve(
  __dirname,
  '../../src/templates/Challenges/projects/frontend/show.tsx'
);
const codeAlly = path.resolve(
  __dirname,
  '../../src/templates/Challenges/codeally/show.tsx'
);
const intro = path.resolve(
  __dirname,
  '../../src/templates/Introduction/intro.tsx'
);
const superBlockIntro = path.resolve(
  __dirname,
  '../../src/templates/Introduction/super-block-intro.tsx'
);
const video = path.resolve(
  __dirname,
  '../../src/templates/Challenges/video/show.tsx'
);

const odin = path.resolve(
  __dirname,
  '../../src/templates/Challenges/odin/show.tsx'
);

const exam = path.resolve(
  __dirname,
  '../../src/templates/Challenges/exam/show.tsx'
);

const msTrophy = path.resolve(
  __dirname,
  '../../src/templates/Challenges/ms-trophy/show.tsx'
);

const dialogue = path.resolve(
  __dirname,
  '../../src/templates/Challenges/dialogue/show.tsx'
);

const fillInTheBlank = path.resolve(
  __dirname,
  '../../src/templates/Challenges/fill-in-the-blank/show.tsx'
);

const views = {
  backend,
  classic,
  modern: classic,
  frontend,
  video,
  codeAlly,
  odin,
  exam,
  msTrophy,
  dialogue,
  fillInTheBlank
  // quiz: Quiz
};

function getIsFirstStepInBlock(id, edges) {
  const current = edges[id];
  const previous = edges[id - 1];

  if (!previous) return true;
  return previous.node.challenge.block !== current.node.challenge.block;
}

function getNextChallengePath(id, edges) {
  const next = edges[id + 1];
  return next ? next.node.challenge.fields.slug : null;
}

function getPrevChallengePath(id, edges) {
  const prev = edges[id - 1];
  return prev ? prev.node.challenge.fields.slug : null;
}

function getTemplateComponent(challengeType) {
  return views[viewTypes[challengeType]];
}

function getNextBlock(id, edges) {
  const next = edges[id + 1];
  return next ? next.node.challenge.block : null;
}

exports.createChallengePages = function (createPage) {
  return function ({ node: { challenge } }, index, allChallengeEdges) {
    const {
      dashedName,
      disableLoopProtectTests,
      disableLoopProtectPreview,
      certification,
      superBlock,
      block,
      fields: { slug, blockHashSlug },
      required = [],
      template,
      challengeType,
      id
    } = challenge;
    // TODO: challengeType === 7 and isPrivate are the same, right? If so, we
    // should remove one of them.

    createPage({
      path: slug,
      component: getTemplateComponent(challengeType),
      context: {
        challengeMeta: {
          blockHashSlug,
          dashedName,
          certification,
          disableLoopProtectTests,
          disableLoopProtectPreview,
          superBlock,
          block,
          isFirstStep: getIsFirstStepInBlock(index, allChallengeEdges),
          template,
          required,
          nextBlock: getNextBlock(index, allChallengeEdges),
          nextChallengePath: getNextChallengePath(index, allChallengeEdges),
          prevChallengePath: getPrevChallengePath(index, allChallengeEdges),
          id
        },
        projectPreview: getProjectPreviewConfig(challenge, allChallengeEdges),
        slug
      }
    });
  };
};

// TODO: figure out a cleaner way to get the last challenge in a block. Create
// it during the curriculum build process and attach it to the first challenge?
// That would remove the need to analyse allChallengeEdges.
function getProjectPreviewConfig(challenge, allChallengeEdges) {
  const { block, challengeOrder, challengeType, usesMultifileEditor } =
    challenge;

  const challengesInBlock = allChallengeEdges
    .filter(({ node: { challenge } }) => challenge.block === block)
    .map(({ node: { challenge } }) => challenge);
  const lastChallenge = challengesInBlock[challengesInBlock.length - 1];
  const solutionToLastChallenge = sortChallengeFiles(
    lastChallenge.solutions[0] ?? []
  );
  const lastChallengeFiles = sortChallengeFiles(
    lastChallenge.challengeFiles ?? []
  );
  const projectPreviewChallengeFiles = lastChallengeFiles.map((file, id) => ({
    ...file,
    contents: solutionToLastChallenge[id]?.contents ?? file.contents
  }));

  return {
    showProjectPreview:
      challengeOrder === 0 &&
      usesMultifileEditor &&
      // TODO: handle the special cases better. Create a meta property for
      // showProjectPreview, maybe? Then we can remove all the following cases
      challengeType !== challengeTypes.multifileCertProject &&
      challengeType !== challengeTypes.multifilePythonCertProject &&
      challengeType !== challengeTypes.python &&
      challengeType !== challengeTypes.js,
    challengeData: {
      challengeType: lastChallenge.challengeType,
      challengeFiles: projectPreviewChallengeFiles
    }
  };
}

exports.createBlockIntroPages = function (createPage) {
  return function (edge) {
    const {
      fields: { slug },
      frontmatter: { block }
    } = edge.node;

    createPage({
      path: slug,
      component: intro,
      context: {
        block,
        slug
      }
    });
  };
};

exports.createSuperBlockIntroPages = function (createPage) {
  return function (edge) {
    const {
      fields: { slug },
      frontmatter: { superBlock, certification }
    } = edge.node;

    if (!certification) {
      throw Error(
        `superBlockIntro page, '${superBlock}' must have certification in frontmatter`
      );
    }

    // TODO: throw if it encounters an unknown certification. Also, handle
    // coding-interview-prep. it's not a certification, but it is a superBlock.

    createPage({
      path: slug,
      component: superBlockIntro,
      context: {
        certification,
        superBlock,
        slug
      }
    });
  };
};
