const path = require('path');
const { viewTypes } = require('@freecodecamp/shared/config/challenge-types');

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
const freeCodeCampOs = path.resolve(
  __dirname,
  '../../src/templates/Challenges/freecodecamp-os/show.tsx'
);
const superBlockIntro = path.resolve(
  __dirname,
  '../../src/templates/Introduction/super-block-intro.tsx'
);
const quiz = path.resolve(
  __dirname,
  '../../src/templates/Challenges/quiz/show.tsx'
);

const exam = path.resolve(
  __dirname,
  '../../src/templates/Challenges/exam/show.tsx'
);

const msTrophy = path.resolve(
  __dirname,
  '../../src/templates/Challenges/ms-trophy/show.tsx'
);

const fillInTheBlank = path.resolve(
  __dirname,
  '../../src/templates/Challenges/fill-in-the-blank/show.tsx'
);

const generic = path.resolve(
  __dirname,
  '../../src/templates/Challenges/generic/show.tsx'
);

const examDownload = path.resolve(
  __dirname,
  '../../src/templates/Challenges/exam-download/show.tsx'
);

const views = {
  backend,
  classic,
  modern: classic,
  frontend,
  quiz,
  codeAlly,
  freeCodeCampOs,
  exam,
  msTrophy,
  fillInTheBlank,
  generic,
  examDownload
};

function getIsFirstStepInBlock(id, nodes) {
  const current = nodes[id];
  const previous = nodes[id - 1];

  if (!previous) return true;
  return previous.challenge.block !== current.challenge.block;
}

function getTemplateComponent(challengeType) {
  return views[viewTypes[challengeType]];
}

exports.getTemplateComponent = getTemplateComponent;

exports.createChallengePages = function (
  createPage,
  { idToNextPathCurrentCurriculum, idToPrevPathCurrentCurriculum }
) {
  // allChallengeNodes is the same array reference across every call in a
  // given forEach, so the grouping only needs to be built once and reused,
  // rather than re-filtering the entire node list for every single page.
  let challengesByBlockSource = null;
  let challengesByBlock = null;

  return function (node, index, allChallengeNodes) {
    const {
      dashedName,
      disableLoopProtectTests,
      disableLoopProtectPreview,
      certification,
      superBlock,
      chapter,
      module,
      block,
      fields: { slug, blockHashSlug },
      required = [],
      template,
      challengeType,
      id,
      isLastChallengeInBlock,
      saveSubmissionToDB
    } = node.challenge;

    if (challengesByBlockSource !== allChallengeNodes) {
      challengesByBlockSource = allChallengeNodes;
      challengesByBlock = groupChallengesByBlock(allChallengeNodes);
    }

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
          chapter,
          module,
          block,
          isFirstStep: getIsFirstStepInBlock(index, allChallengeNodes),
          template,
          required,
          isLastChallengeInBlock: isLastChallengeInBlock,
          nextChallengePath: idToNextPathCurrentCurriculum[node.id],
          prevChallengePath: idToPrevPathCurrentCurriculum[node.id],
          id,
          saveSubmissionToDB
        },
        projectPreview: getProjectPreviewConfig(
          node.challenge,
          challengesByBlock
        ),
        id: node.id
      }
    });
  };
};

function groupChallengesByBlock(allChallengeNodes) {
  const challengesByBlock = new Map();
  for (const { challenge } of allChallengeNodes) {
    const existing = challengesByBlock.get(challenge.block);
    if (existing) {
      existing.push(challenge);
    } else {
      challengesByBlock.set(challenge.block, [challenge]);
    }
  }
  return challengesByBlock;
}

// TODO: figure out a cleaner way to get the last challenge in a block.
function getProjectPreviewConfig(challenge, challengesByBlock) {
  const { block } = challenge;

  const challengesInBlock = challengesByBlock.get(block) ?? [];
  const lastChallenge = challengesInBlock[challengesInBlock.length - 1];
  const solutionFiles = lastChallenge.solutions[0] ?? [];
  const lastChallengeFiles = lastChallenge.challengeFiles ?? [];

  const findFileByKey = (key, files) =>
    files.find(file => file.fileKey === key);

  const projectPreviewChallengeFiles = lastChallengeFiles.map(file => ({
    ...file,
    contents:
      findFileByKey(file.fileKey, solutionFiles)?.contents ?? file.contents
  }));

  return {
    challengeData: {
      challengeType: lastChallenge.challengeType,
      challengeFiles: projectPreviewChallengeFiles
    }
  };
}

exports.createSuperBlockIntroPages = function (createPage) {
  return function ({ superBlock }) {
    createPage({
      path: `/learn/${superBlock}/`,
      component: superBlockIntro,
      context: {
        superBlock
      }
    });
  };
};
