const fs = require('fs');
const path = require('path');
const util = require('util');
const yaml = require('js-yaml');
const { findIndex } = require('lodash');
const readDirP = require('readdirp');
const { helpCategoryMap } = require('../client/utils/challenge-types');
const { showUpcomingChanges } = require('../config/env.json');
const { curriculum: curriculumLangs } =
  require('../config/i18n/all-langs').availableLangs;
const { parseMD } = require('../tools/challenge-parser/parser');
/* eslint-disable max-len */
const {
  translateCommentsInChallenge
} = require('../tools/challenge-parser/translation-parser');
/* eslint-enable max-len*/

const { isAuditedCert } = require('../utils/is-audited');
const { createPoly } = require('../utils/polyvinyl');
const { dasherize } = require('../utils/slugs');
const { getSuperOrder, getSuperBlockFromDir } = require('./utils');

const access = util.promisify(fs.access);

const challengesDir = path.resolve(__dirname, './challenges');
const metaDir = path.resolve(challengesDir, '_meta');
exports.challengesDir = challengesDir;
exports.metaDir = metaDir;

const COMMENT_TRANSLATIONS = createCommentMap(
  path.resolve(__dirname, './dictionaries')
);

function getTranslatableComments(dictionariesDir) {
  const COMMENTS_TO_TRANSLATE = require(path.resolve(
    dictionariesDir,
    'english',
    'comments.json'
  ));
  return Object.values(COMMENTS_TO_TRANSLATE);
}

exports.getTranslatableComments = getTranslatableComments;

function createCommentMap(dictionariesDir) {
  // get all the languages for which there are dictionaries.
  const languages = fs
    .readdirSync(dictionariesDir)
    .filter(x => x !== 'english');

  // get all their dictionaries
  const dictionaries = languages.reduce(
    (acc, lang) => ({
      ...acc,
      [lang]: require(path.resolve(dictionariesDir, lang, 'comments.json'))
    }),
    {}
  );

  // get the english dicts
  const COMMENTS_TO_TRANSLATE = require(path.resolve(
    dictionariesDir,
    'english',
    'comments.json'
  ));

  const COMMENTS_TO_NOT_TRANSLATE = require(path.resolve(
    dictionariesDir,
    'english',
    'comments-to-not-translate'
  ));

  // map from english comment text to translations
  const translatedCommentMap = Object.entries(COMMENTS_TO_TRANSLATE).reduce(
    (acc, [id, text]) => {
      return {
        ...acc,
        [text]: getTranslationEntry(dictionaries, { engId: id, text })
      };
    },
    {}
  );

  // map from english comment text to itself
  const untranslatableCommentMap = Object.values(
    COMMENTS_TO_NOT_TRANSLATE
  ).reduce((acc, text) => {
    const englishEntry = languages.reduce(
      (acc, lang) => ({
        ...acc,
        [lang]: text
      }),
      {}
    );
    return {
      ...acc,
      [text]: englishEntry
    };
  }, {});

  return { ...translatedCommentMap, ...untranslatableCommentMap };
}

exports.createCommentMap = createCommentMap;

function getTranslationEntry(dicts, { engId, text }) {
  return Object.keys(dicts).reduce((acc, lang) => {
    const entry = dicts[lang][engId];
    if (entry) {
      return { ...acc, [lang]: entry };
    } else {
      throw Error(`Missing translation for comment
'${text}'
        with id of ${engId}`);
    }
  }, {});
}

function getChallengesDirForLang(lang) {
  return path.resolve(challengesDir, `./${lang}`);
}

function getMetaForBlock(block) {
  return JSON.parse(
    fs.readFileSync(path.resolve(metaDir, `./${block}/meta.json`), 'utf8')
  );
}

function parseCert(filePath) {
  return yaml.load(fs.readFileSync(filePath, 'utf8'));
}

exports.getChallengesDirForLang = getChallengesDirForLang;
exports.getMetaForBlock = getMetaForBlock;

// This recursively walks the directories starting at root, and calls cb for
// each file/directory and only resolves once all the callbacks do.
const walk = (root, target, options, cb) => {
  return new Promise(resolve => {
    let running = 1;
    function done() {
      if (--running === 0) {
        resolve(target);
      }
    }
    readDirP(root, options)
      .on('data', file => {
        running++;
        cb(file, target).then(done);
      })
      .on('end', done);
  });
};

exports.getChallengesForLang = async function getChallengesForLang(lang) {
  const root = getChallengesDirForLang(lang);
  // scaffold the curriculum, first set up the superblocks, then recurse into
  // the blocks
  const curriculum = await walk(
    root,
    {},
    { type: 'directories', depth: 0 },
    buildSuperBlocks
  );
  const cb = (file, curriculum) => buildChallenges(file, curriculum, lang);
  // fill the scaffold with the challenges
  return walk(
    root,
    curriculum,
    { type: 'files', fileFilter: ['*.md', '*.yml'] },
    cb
  );
};

async function buildBlocks({ basename: blockName }, curriculum, superBlock) {
  const metaPath = path.resolve(
    __dirname,
    `./challenges/_meta/${blockName}/meta.json`
  );

  if (fs.existsSync(metaPath)) {
    // try to read the file, if the meta path does not exist it should be a certification.
    // As they do not have meta files.

    const blockMeta = JSON.parse(fs.readFileSync(metaPath));

    const { isUpcomingChange } = blockMeta;

    if (typeof isUpcomingChange !== 'boolean') {
      throw Error(
        `meta file at ${metaPath} is missing 'isUpcomingChange', it must be 'true' or 'false'`
      );
    }

    if (!isUpcomingChange || showUpcomingChanges) {
      // add the block to the superBlock
      const blockInfo = { meta: blockMeta, challenges: [] };
      curriculum[superBlock].blocks[blockName] = blockInfo;
    }
  } else {
    curriculum['certifications'].blocks[blockName] = { challenges: [] };
  }
}

async function buildSuperBlocks({ path, fullPath }, curriculum) {
  const superBlock = getSuperBlockFromDir(getBaseDir(path));
  curriculum[superBlock] = { blocks: {} };

  const cb = (file, curriculum) => buildBlocks(file, curriculum, superBlock);
  return walk(fullPath, curriculum, { depth: 1, type: 'directories' }, cb);
}

async function buildChallenges({ path: filePath }, curriculum, lang) {
  // path is relative to getChallengesDirForLang(lang)
  const block = getBlockNameFromPath(filePath);
  const superBlockDir = getBaseDir(filePath);
  const superBlock = getSuperBlockFromDir(superBlockDir);
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
    console.log(`failed to create superBlock from ${superBlockDir}`);
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }
  const { meta } = challengeBlock;
  const isCert = path.extname(filePath) === '.yml';
  // TODO: there's probably a better way, but this makes sure we don't build any
  // of the new curriculum when we don't want it.
  if (
    process.env.SHOW_NEW_CURRICULUM !== 'true' &&
    meta?.superBlock === '2022/responsive-web-design'
  ) {
    return;
  }
  const challenge = isCert
    ? await createCertification(challengesDir, filePath, lang)
    : await createChallenge(challengesDir, filePath, lang, meta);

  challengeBlock.challenges = [...challengeBlock.challenges, challenge];
}

async function parseTranslation(transPath, dict, lang, parse = parseMD) {
  const translatedChal = await parse(transPath);

  const { challengeType } = translatedChal;
  // challengeType 11 is for video challenges and 3 is for front-end projects
  // neither of which have seeds.
  return challengeType !== 11 && challengeType !== 3
    ? translateCommentsInChallenge(translatedChal, lang, dict)
    : translatedChal;
}

// eslint-disable-next-line no-unused-vars
async function createCertification(basePath, filePath, lang) {
  function getFullPath(pathLang) {
    return path.resolve(__dirname, basePath, pathLang, filePath);
  }
  // TODO: restart using isAudited() once we can determine a) the superBlocks
  // (plural) a certification belongs to and b) get that info from the parsed
  // certification, rather than the path. ASSUMING that this is used by the
  // client.  If not, delete this comment and the lang param.
  return parseCert(getFullPath('english'));
}

async function createChallenge(basePath, filePath, lang, maybeMeta) {
  function getFullPath(pathLang) {
    return path.resolve(__dirname, basePath, pathLang, filePath);
  }
  let meta;
  if (maybeMeta) {
    meta = maybeMeta;
  } else {
    const metaPath = path.resolve(
      metaDir,
      `./${getBlockNameFromPath(filePath)}/meta.json`
    );
    meta = require(metaPath);
  }
  const { superBlock } = meta;
  if (!curriculumLangs.includes(lang))
    throw Error(`${lang} is not a accepted language.
  Trying to parse ${filePath}`);
  if (lang !== 'english' && !(await hasEnglishSource(basePath, filePath)))
    throw Error(`Missing English challenge for
${filePath}
It should be in
${getFullPath('english')}
`);
  // assumes superblock names are unique
  // while the auditing is ongoing, we default to English for un-audited certs
  // once that's complete, we can revert to using isEnglishChallenge(fullPath)
  const useEnglish = lang === 'english' || !isAuditedCert(lang, superBlock);

  const challenge = await (useEnglish
    ? parseMD(getFullPath('english'))
    : parseTranslation(getFullPath(lang), COMMENT_TRANSLATIONS, lang));

  const challengeOrder = findIndex(
    meta.challengeOrder,
    ([id]) => id === challenge.id
  );
  const {
    name: blockName,
    hasEditableBoundaries,
    order,
    isPrivate,
    required = [],
    template,
    time,
    usesMultifileEditor
  } = meta;
  challenge.block = dasherize(blockName);
  challenge.hasEditableBoundaries = !!hasEditableBoundaries;
  challenge.order = order;
  const superOrder = getSuperOrder(superBlock, {
    showNewCurriculum: process.env.SHOW_NEW_CURRICULUM === 'true'
  });
  if (superOrder !== null) challenge.superOrder = superOrder;
  /* Since there can be more than one way to complete a certification (using the
   legacy curriculum or the new one, for instance), we need a certification
   field to track which certification this belongs to. */
  // TODO: generalize this to all superBlocks
  challenge.certification =
    superBlock === '2022/responsive-web-design'
      ? 'responsive-web-design'
      : superBlock;
  challenge.superBlock = superBlock;
  challenge.challengeOrder = challengeOrder;
  challenge.isPrivate = challenge.isPrivate || isPrivate;
  challenge.required = required.concat(challenge.required || []);
  challenge.template = template;
  challenge.time = time;
  challenge.helpCategory =
    challenge.helpCategory || helpCategoryMap[challenge.block];
  challenge.translationPending =
    lang !== 'english' && !isAuditedCert(lang, superBlock);
  challenge.usesMultifileEditor = !!usesMultifileEditor;
  if (challenge.challengeFiles) {
    // The client expects the challengeFiles to be an array of polyvinyls
    challenge.challengeFiles = challengeFilesToPolys(challenge.challengeFiles);
  }
  if (challenge.solutions?.length) {
    // The test runner needs the solutions to be arrays of polyvinyls so it
    // can sort them correctly.
    challenge.solutions = challenge.solutions.map(challengeFilesToPolys);
  }

  return challenge;
}

function challengeFilesToPolys(files) {
  return files.reduce((challengeFiles, challengeFile) => {
    return [
      ...challengeFiles,
      {
        ...createPoly(challengeFile),
        seed: challengeFile.contents.slice(0)
      }
    ];
  }, []);
}

async function hasEnglishSource(basePath, translationPath) {
  const englishRoot = path.resolve(__dirname, basePath, 'english');
  return await access(
    path.join(englishRoot, translationPath),
    fs.constants.F_OK
  )
    .then(() => true)
    .catch(() => false);
}

function getBaseDir(filePath) {
  const [baseDir] = filePath.split(path.sep);
  return baseDir;
}

function getBlockNameFromPath(filePath) {
  const [, block] = filePath.split(path.sep);
  return block;
}

exports.hasEnglishSource = hasEnglishSource;
exports.parseTranslation = parseTranslation;
exports.createChallenge = createChallenge;
