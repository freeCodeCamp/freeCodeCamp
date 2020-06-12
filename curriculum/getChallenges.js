const path = require('path');
const { findIndex, reduce, toString } = require('lodash');
const readDirP = require('readdirp-walk');
const { parseMarkdown } = require('../tools/challenge-md-parser');
const fs = require('fs');
/* eslint-disable max-len */
const {
  mergeChallenges,
  translateCommentsInChallenge
} = require('../tools/challenge-md-parser/translation-parser/translation-parser');
/* eslint-enable max-len*/
const { COMMENT_TRANSLATIONS } = require('./comment-dictionary');

const { isAuditedCert } = require('../utils/is-audited');
const { dasherize, nameify } = require('../utils/slugs');
const { createPoly } = require('../utils/polyvinyl');
const { blockNameify } = require('../utils/block-nameify');

const challengesDir = path.resolve(__dirname, './challenges');
const metaDir = path.resolve(challengesDir, '_meta');
exports.challengesDir = challengesDir;
exports.metaDir = metaDir;

function getChallengesDirForLang(lang) {
  return path.resolve(challengesDir, `./${lang}`);
}

function getMetaForBlock(block) {
  return JSON.parse(
    fs.readFileSync(path.resolve(metaDir, `./${block}/meta.json`), 'utf8')
  );
}

exports.getChallengesDirForLang = getChallengesDirForLang;
exports.getMetaForBlock = getMetaForBlock;

exports.getChallengesForLang = function getChallengesForLang(lang) {
  let curriculum = {};
  return new Promise(resolve => {
    let running = 1;
    function done() {
      if (--running === 0) {
        resolve(curriculum);
      }
    }
    readDirP({ root: getChallengesDirForLang(lang) })
      .on('data', file => {
        running++;
        buildCurriculum(file, curriculum).then(done);
      })
      .on('end', done);
  });
};

async function buildCurriculum(file, curriculum) {
  const { name, depth, path: filePath, fullPath, stat } = file;
  if (depth === 1 && stat.isDirectory()) {
    // extract the superBlock info
    const { order, name: superBlock } = superBlockInfo(name);
    curriculum[superBlock] = { superBlock, order, blocks: {} };
    return;
  }
  if (depth === 2 && stat.isDirectory()) {
    const blockName = getBlockNameFromPath(filePath);
    const metaPath = path.resolve(
      __dirname,
      `./challenges/_meta/${blockName}/meta.json`
    );
    const blockMeta = require(metaPath);
    const { isUpcomingChange } = blockMeta;
    if (typeof isUpcomingChange !== 'boolean') {
      throw Error(
        `meta file at ${metaPath} is missing 'isUpcomingChange', it must be 'true' or 'false'`
      );
    }

    if (!isUpcomingChange || process.env.SHOW_UPCOMING_CHANGES === 'true') {
      // add the block to the superBlock
      const { name: superBlock } = superBlockInfoFromPath(filePath);
      const blockInfo = { meta: blockMeta, challenges: [] };
      curriculum[superBlock].blocks[name] = blockInfo;
    }
    return;
  }
  if (name === 'meta.json' || name === '.DS_Store') {
    return;
  }

  const block = getBlockNameFromPath(filePath);
  const { name: superBlock } = superBlockInfoFromPath(filePath);
  let challengeBlock;

  // TODO: this try block and process exit can all go once errors terminate the
  // tests correctly.
  try {
    challengeBlock = curriculum[superBlock].blocks[block];
    if (!challengeBlock) {
      // this should only happen when a isUpcomingChange block is skipped
      return;
    }
  } catch (e) {
    console.log(`failed to create superBlock ${superBlock}`);
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }
  const { meta } = challengeBlock;

  const challenge = await createChallenge(fullPath, meta);

  challengeBlock.challenges = [...challengeBlock.challenges, challenge];
}

async function parseTranslation(engPath, transPath, dict) {
  const engChal = await parseMarkdown(engPath);
  const translatedChal = await parseMarkdown(transPath);
  const codeLang =
    engChal.files && engChal.files[0] ? engChal.files[0].ext : null;

  const engWithTranslatedComments = codeLang
    ? translateCommentsInChallenge(
        engChal,
        getChallengeLang(transPath),
        dict,
        codeLang
      )
    : engChal;
  return mergeChallenges(engWithTranslatedComments, translatedChal);
}

exports.parseTranslation = parseTranslation;

async function createChallenge(fullPath, maybeMeta) {
  let meta;
  if (maybeMeta) {
    meta = maybeMeta;
  } else {
    const metaPath = path.resolve(
      metaDir,
      `./${getBlockNameFromFullPath(fullPath)}/meta.json`
    );
    meta = require(metaPath);
  }
  const { name: superBlock } = superBlockInfoFromFullPath(fullPath);
  const lang = getChallengeLang(fullPath);
  if (!isAcceptedLanguage(lang))
    throw Error(`${lang} is not a accepted language.
Trying to parse ${fullPath}`);
  // assumes superblock names are unique
  // while the auditing is ongoing, we default to English for un-audited certs
  // once that's complete, we can revert to using isEnglishChallenge(fullPath)
  const isEnglish =
    isEnglishChallenge(fullPath) || !isAuditedCert(lang, superBlock);
  if (isEnglish) fullPath = getEnglishPath(fullPath);
  const challenge = await (isEnglish
    ? parseMarkdown(fullPath)
    : parseTranslation(
        getEnglishPath(fullPath),
        fullPath,
        COMMENT_TRANSLATIONS
      ));
  const challengeOrder = findIndex(
    meta.challengeOrder,
    ([id]) => id === challenge.id
  );
  const {
    name: blockName,
    order,
    superOrder,
    isPrivate,
    required = [],
    template,
    time
  } = meta;
  challenge.block = blockName;
  challenge.dashedName = dasherize(challenge.title);
  challenge.order = order;
  challenge.superOrder = superOrder;
  challenge.superBlock = superBlock;
  challenge.challengeOrder = challengeOrder;
  challenge.isPrivate = challenge.isPrivate || isPrivate;
  challenge.required = required.concat(challenge.required || []);
  challenge.template = template;
  challenge.time = time;

  return prepareChallenge(challenge);
}

// TODO: tests and more descriptive name.
function filesToObject(files) {
  return reduce(
    files,
    (map, file) => {
      map[file.key] = {
        ...file,
        head: arrToString(file.head),
        contents: arrToString(file.contents),
        tail: arrToString(file.tail)
      };
      return map;
    },
    {}
  );
}

// gets the challenge ready for sourcing into Gatsby
function prepareChallenge(challenge) {
  challenge.name = nameify(challenge.title);
  if (challenge.files) {
    challenge.files = filesToObject(challenge.files);
    // TODO: This should be something that can be folded into the above reduce
    // EDIT: maybe not, now that we're doing the same for solutionFiles.
    challenge.files = Object.keys(challenge.files)
      .filter(key => challenge.files[key])
      .map(key => challenge.files[key])
      .reduce(
        (files, file) => ({
          ...files,
          [file.key]: {
            ...createPoly(file),
            seed: file.contents.slice(0)
          }
        }),
        {}
      );
  }

  if (challenge.solutionFiles) {
    challenge.solutionFiles = filesToObject(challenge.solutionFiles);
  }
  challenge.block = dasherize(challenge.block);
  challenge.superBlock = blockNameify(challenge.superBlock);
  return challenge;
}

exports.createChallenge = createChallenge;

function getEnglishPath(fullPath) {
  const posix = path
    .normalize(fullPath)
    .split(path.sep)
    .join(path.posix.sep);
  const match = posix.match(/(.*curriculum\/challenges\/)([^/]*)(.*)(\2)(.*)/);
  const lang = getChallengeLang(fullPath);
  if (!isAcceptedLanguage(lang))
    throw Error(`${getChallengeLang(fullPath)} is not a accepted language.
Trying to parse ${fullPath}`);
  if (match) {
    return path.join(match[1], 'english', match[3] + 'english' + match[5]);
  } else {
    throw Error(`Malformed challenge path, ${fullPath} unable to parse.`);
  }
}

function getChallengeLang(fullPath) {
  const match = fullPath.match(/\.(\w+)\.md$/);
  if (!match || match.length < 2)
    throw Error(`Missing language extension for
${fullPath}`);
  return fullPath.match(/\.(\w+)\.md$/)[1];
}

function isEnglishChallenge(fullPath) {
  return getChallengeLang(fullPath) === 'english';
}

function isAcceptedLanguage(lang) {
  const acceptedLanguages = ['english', 'chinese'];
  return acceptedLanguages.includes(lang);
}

exports.getChallengeLang = getChallengeLang;
exports.getEnglishPath = getEnglishPath;
exports.isEnglishChallenge = isEnglishChallenge;

function superBlockInfoFromPath(filePath) {
  const [maybeSuper] = filePath.split(path.sep);
  return superBlockInfo(maybeSuper);
}

function superBlockInfoFromFullPath(fullFilePath) {
  const [, , maybeSuper] = fullFilePath.split(path.sep).reverse();
  return superBlockInfo(maybeSuper);
}

function superBlockInfo(fileName) {
  const [maybeOrder, ...superBlock] = fileName.split('-');
  let order = parseInt(maybeOrder, 10);
  if (isNaN(order)) {
    return { order: 0, name: fileName };
  } else {
    return {
      order: order,
      name: superBlock.join('-')
    };
  }
}

function getBlockNameFromPath(filePath) {
  const [, block] = filePath.split(path.sep);
  return block;
}

function getBlockNameFromFullPath(fullFilePath) {
  const [, block] = fullFilePath.split(path.sep).reverse();
  return block;
}

function arrToString(arr) {
  return Array.isArray(arr) ? arr.join('\n') : toString(arr);
}
