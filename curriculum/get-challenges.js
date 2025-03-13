const fs = require('fs');
const path = require('path');
const util = require('util');
const yaml = require('js-yaml');
const { findIndex } = require('lodash');
const readDirP = require('readdirp');

const { curriculum: curriculumLangs } =
  require('../shared/config/i18n').availableLangs;
const { parseMD } = require('../tools/challenge-parser/parser');

const {
  translateCommentsInChallenge
} = require('../tools/challenge-parser/translation-parser');

const { isAuditedSuperBlock } = require('../shared/utils/is-audited');
const { createPoly } = require('../shared/utils/polyvinyl');
const {
  getSuperOrder,
  getSuperBlockFromDir,
  getChapterFromBlock,
  getModuleFromBlock,
  getBlockOrder
} = require('./utils');
const { metaSchemaValidator } = require('./schema/meta-schema');
const {
  assertSuperBlockStructure
} = require('./schema/superblock-structure-schema');

const fullStackSuperBlockStructure = require('./superblock-structure/full-stack.json');

assertSuperBlockStructure(fullStackSuperBlockStructure);

const access = util.promisify(fs.access);

const ENGLISH_CHALLENGES_DIR = path.resolve(__dirname, 'challenges');
const ENGLISH_DICTIONARIES_DIR = path.resolve(__dirname, 'dictionaries');
const META_DIR = path.resolve(ENGLISH_CHALLENGES_DIR, '_meta');

// This is to allow English to build without having to download the i18n files.
// It fails when trying to resolve the i18n-curriculum path if they don't exist.
const curriculumLocale = process.env.CURRICULUM_LOCALE ?? 'english';
const I18N_CURRICULUM_DIR = path.resolve(
  __dirname,
  curriculumLocale === 'english' ? '.' : 'i18n-curriculum/curriculum'
);

const I18N_CHALLENGES_DIR = path.resolve(I18N_CURRICULUM_DIR, 'challenges');
const I18N_DICTIONARIES_DIR = path.resolve(I18N_CURRICULUM_DIR, 'dictionaries');

exports.ENGLISH_CHALLENGES_DIR = ENGLISH_CHALLENGES_DIR;
exports.META_DIR = META_DIR;
exports.I18N_CHALLENGES_DIR = I18N_CHALLENGES_DIR;

const COMMENT_TRANSLATIONS = createCommentMap(
  I18N_DICTIONARIES_DIR,
  ENGLISH_DICTIONARIES_DIR
);

function createCommentMap(dictionariesDir, englishDictionariesDir) {
  const languages = fs.readdirSync(dictionariesDir);

  // get all their dictionaries
  const dictionaries = languages.reduce(
    (acc, lang) => ({
      ...acc,
      [lang]: require(path.resolve(dictionariesDir, lang, 'comments.json'))
    }),
    {}
  );

  // get the english dicts
  const COMMENTS_TO_TRANSLATE = require(
    path.resolve(englishDictionariesDir, 'english', 'comments.json')
  );

  const COMMENTS_TO_NOT_TRANSLATE = require(
    path.resolve(
      englishDictionariesDir,
      'english',
      'comments-to-not-translate.json'
    )
  );

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

  const allComments = { ...translatedCommentMap, ...untranslatableCommentMap };

  // the english entries need to be added here, because english is not in
  // languages
  Object.keys(allComments).forEach(comment => {
    allComments[comment].english = comment;
  });

  return allComments;
}

exports.createCommentMap = createCommentMap;

function getTranslationEntry(dicts, { engId, text }) {
  return Object.keys(dicts).reduce((acc, lang) => {
    const entry = dicts[lang][engId];
    if (entry) {
      return { ...acc, [lang]: entry };
    } else {
      // default to english
      return { ...acc, [lang]: text };
    }
  }, {});
}

function getChallengesDirForLang(lang) {
  if (lang === 'english') {
    return path.resolve(ENGLISH_CHALLENGES_DIR, `${lang}`);
  } else {
    return path.resolve(I18N_CHALLENGES_DIR, `${lang}`);
  }
}

function getMetaForBlock(block) {
  return JSON.parse(
    fs.readFileSync(path.resolve(META_DIR, `${block}/meta.json`), 'utf8')
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
  const invalidLang = !curriculumLangs.includes(lang);
  if (invalidLang)
    throw Error(`${lang} is not a accepted language.
Accepted languages are ${curriculumLangs.join(', ')}`);
  // english determines the shape of the curriculum, all other languages mirror
  // it.
  const root = getChallengesDirForLang('english');
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

async function buildBlocks(file, curriculum, superBlock) {
  const { basename: blockName } = file;
  const metaPath = path.resolve(META_DIR, `${blockName}/meta.json`);
  const isCertification = !fs.existsSync(metaPath);
  const isEmptyDir = fs.readdirSync(file.fullPath).length === 0;
  if (isEmptyDir) {
    throw Error(
      `Block directory, ${file.fullPath}, is empty.
If this block should exist, please add challenge files to it.
If this block should not exist, please remove the directory.`
    );
  }
  if (isCertification && superBlock !== 'certifications') {
    throw Error(
      `superblock ${superBlock} is missing meta.json for ${blockName}`
    );
  }

  if (isCertification) {
    curriculum['certifications'].blocks[blockName] = { challenges: [] };
  } else {
    const blockMeta = JSON.parse(fs.readFileSync(metaPath));

    const validateMeta = metaSchemaValidator(blockMeta);
    if (validateMeta.error) {
      throw Error(
        `${validateMeta.error} in meta.json for block '${blockName}'`
      );
    }

    const { isUpcomingChange } = blockMeta;

    if (!isUpcomingChange || process.env.SHOW_UPCOMING_CHANGES === 'true') {
      // add the block to the superBlock
      const blockInfo = { meta: blockMeta, challenges: [] };
      curriculum[superBlock].blocks[blockName] = blockInfo;
    }
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
    process.exit(1);
  }
  const { meta } = challengeBlock;
  const isCert = path.extname(filePath) === '.yml';
  const englishPath = path.resolve(
    __dirname,
    ENGLISH_CHALLENGES_DIR,
    'english',
    filePath
  );
  const i18nPath = path.resolve(__dirname, I18N_CHALLENGES_DIR, lang, filePath);
  const createChallenge = generateChallengeCreator(lang, englishPath, i18nPath);

  await assertHasEnglishSource(filePath, lang, englishPath);
  const challenge = isCert
    ? await parseCert(englishPath)
    : await createChallenge(filePath, meta);

  challengeBlock.challenges = [...challengeBlock.challenges, challenge];
}

function isSuperBlockWithChapters(superBlock) {
  return superBlock === 'full-stack-developer';
}

// This is a slightly weird abstraction, but it lets us define helper functions
// without passing around a ton of arguments.
function generateChallengeCreator(lang, englishPath, i18nPath) {
  function addMetaToChallenge(challenge, meta) {
    function addChapterAndModuleToChallenge(challenge) {
      if (isSuperBlockWithChapters(challenge.superBlock)) {
        challenge.chapter = getChapterFromBlock(
          challenge.block,
          fullStackSuperBlockStructure
        );
        challenge.module = getModuleFromBlock(
          challenge.block,
          fullStackSuperBlockStructure
        );
      }
    }
    const challengeOrder = findIndex(
      meta.challengeOrder,
      ({ id }) => id === challenge.id
    );

    const isLastChallengeInBlock =
      meta.challengeOrder.length - 1 === challengeOrder;

    const isObjectIdFilename = /\/[a-z0-9]{24}\.md$/.test(englishPath);
    if (isObjectIdFilename) {
      const filename = englishPath.split('/').pop();
      if (filename !== `${challenge.id}.md`) {
        throw Error(
          `Filename matches MongoDB ObjectID pattern, but ${filename} does not match challenge id ${challenge.id}`
        );
      }
    }

    challenge.block = meta.dashedName;
    challenge.blockType = meta.blockType;
    challenge.blockLayout = meta.blockLayout;
    challenge.hasEditableBoundaries = !!meta.hasEditableBoundaries;
    challenge.order = isSuperBlockWithChapters(meta.superBlock)
      ? getBlockOrder(meta.dashedName, fullStackSuperBlockStructure)
      : meta.order;

    if (!challenge.description) challenge.description = '';
    if (!challenge.instructions) challenge.instructions = '';
    if (!challenge.questions) challenge.questions = [];

    // const superOrder = getSuperOrder(meta.superBlock);
    // NOTE: Use this version when a super block is in beta.
    const superOrder = getSuperOrder(meta.superBlock);
    if (superOrder !== null) challenge.superOrder = superOrder;
    /* Since there can be more than one way to complete a certification (using the
   legacy curriculum or the new one, for instance), we need a certification
   field to track which certification this belongs to. */
    const dupeCertifications = [
      {
        certification: 'responsive-web-design',
        dupe: '2022/responsive-web-design'
      }
    ];
    const hasDupe = dupeCertifications.find(
      cert => cert.dupe === meta.superBlock
    );
    challenge.certification = hasDupe ? hasDupe.certification : meta.superBlock;
    challenge.superBlock = meta.superBlock;
    challenge.challengeOrder = challengeOrder;
    challenge.isLastChallengeInBlock = isLastChallengeInBlock;
    challenge.isPrivate = challenge.isPrivate || meta.isPrivate;
    challenge.required = (meta.required || []).concat(challenge.required || []);
    challenge.template = meta.template;
    challenge.helpCategory = challenge.helpCategory || meta.helpCategory;
    challenge.usesMultifileEditor = !!meta.usesMultifileEditor;
    challenge.disableLoopProtectTests = !!meta.disableLoopProtectTests;
    challenge.disableLoopProtectPreview = !!meta.disableLoopProtectPreview;

    addChapterAndModuleToChallenge(challenge);
  }

  function fixChallengeProperties(challenge) {
    if (challenge.challengeFiles) {
      // The client expects the challengeFiles to be an array of polyvinyls
      challenge.challengeFiles = challengeFilesToPolys(
        challenge.challengeFiles
      );
    }
    if (challenge.solutions?.length) {
      // The test runner needs the solutions to be arrays of polyvinyls so it
      // can sort them correctly.
      challenge.solutions = challenge.solutions.map(challengeFilesToPolys);
    }
  }

  async function createChallenge(filePath, maybeMeta) {
    const meta = maybeMeta
      ? maybeMeta
      : require(
          path.resolve(META_DIR, `${getBlockNameFromPath(filePath)}/meta.json`)
        );

    const isAudited = isAuditedSuperBlock(lang, meta.superBlock);

    // If we can use the language, do so. Otherwise, default to english.
    const langUsed = isAudited && fs.existsSync(i18nPath) ? lang : 'english';

    const challenge = translateCommentsInChallenge(
      await parseMD(langUsed === 'english' ? englishPath : i18nPath),
      langUsed,
      COMMENT_TRANSLATIONS
    );
    challenge.translationPending = lang !== 'english' && !isAudited;
    addMetaToChallenge(challenge, meta);
    fixChallengeProperties(challenge);

    return challenge;
  }
  return createChallenge;
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

async function assertHasEnglishSource(filePath, lang, englishPath) {
  const missingEnglish =
    lang !== 'english' &&
    !(await hasEnglishSource(ENGLISH_CHALLENGES_DIR, filePath));
  if (missingEnglish)
    throw Error(`Missing English challenge for
${filePath}
It should be in
${englishPath}
`);
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
exports.generateChallengeCreator = generateChallengeCreator;
