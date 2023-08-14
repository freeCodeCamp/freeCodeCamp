const fs = require('fs');
const path = require('path');
const util = require('util');
const yaml = require('js-yaml');
const { findIndex } = require('lodash');
const readDirP = require('readdirp');

const { curriculum: curriculumLangs } =
  require('../config/i18n').availableLangs;
const { parseMD } = require('../tools/challenge-parser/parser');
/* eslint-disable max-len */
const {
  translateCommentsInChallenge
} = require('../tools/challenge-parser/translation-parser');
/* eslint-enable max-len*/

const { isAuditedSuperBlock } = require('../utils/is-audited');
const { createPoly } = require('../utils/polyvinyl');
const { getSuperOrder, getSuperBlockFromDir } = require('./utils');

const access = util.promisify(fs.access);

const CHALLENGES_DIR = path.resolve(__dirname, 'challenges');
const META_DIR = path.resolve(CHALLENGES_DIR, '_meta');
exports.CHALLENGES_DIR = CHALLENGES_DIR;
exports.META_DIR = META_DIR;

const COMMENT_TRANSLATIONS = createCommentMap(
  path.resolve(__dirname, 'dictionaries')
);

function createCommentMap(dictionariesDir) {
  // get all the languages for which there are dictionaries.
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
      // default to english
      return { ...acc, [lang]: text };
    }
  }, {});
}

function getChallengesDirForLang(lang) {
  return path.resolve(CHALLENGES_DIR, `${lang}`);
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

async function buildBlocks({ basename: blockName }, curriculum, superBlock) {
  const metaPath = path.resolve(META_DIR, `${blockName}/meta.json`);
  const isCertification = !fs.existsSync(metaPath);
  if (isCertification && superBlock !== 'certifications')
    throw Error(
      `superblock ${superBlock} is missing meta.json for ${blockName}`
    );

  if (isCertification) {
    curriculum['certifications'].blocks[blockName] = { challenges: [] };
  } else {
    const blockMeta = JSON.parse(fs.readFileSync(metaPath));

    const { isUpcomingChange, helpCategory } = blockMeta;

    if (typeof isUpcomingChange !== 'boolean') {
      throw Error(
        `meta file at ${metaPath} is missing 'isUpcomingChange', it must be 'true' or 'false'`
      );
    }

    if (!helpCategory) {
      throw Error(`meta file at ${metaPath} is missing 'helpCategory'`);
    }

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
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }
  const { meta } = challengeBlock;
  const isCert = path.extname(filePath) === '.yml';
  const createChallenge = generateChallengeCreator(CHALLENGES_DIR, lang);
  const challenge = isCert
    ? await createCertification(CHALLENGES_DIR, filePath, lang)
    : await createChallenge(filePath, meta);

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

async function createCertification(basePath, filePath) {
  function getFullPath(pathLang) {
    return path.resolve(__dirname, basePath, pathLang, filePath);
  }
  // TODO: restart using isAudited() once we can determine a) the superBlocks
  // (plural) a certification belongs to and b) get that info from the parsed
  // certification, rather than the path. ASSUMING that this is used by the
  // client.  If not, delete this comment and the lang param.
  return parseCert(getFullPath('english'));
}

// This is a slightly weird abstraction, but it lets us define helper functions
// without passing around a ton of arguments.
function generateChallengeCreator(basePath, lang) {
  function getFullPath(pathLang, filePath) {
    return path.resolve(__dirname, basePath, pathLang, filePath);
  }

  async function validate(filePath) {
    const invalidLang = !curriculumLangs.includes(lang);
    if (invalidLang)
      throw Error(`${lang} is not a accepted language.
Trying to parse ${filePath}`);

    const missingEnglish =
      lang !== 'english' && !(await hasEnglishSource(basePath, filePath));
    if (missingEnglish)
      throw Error(`Missing English challenge for
${filePath}
It should be in
${getFullPath('english', filePath)}
`);
  }

  function addMetaToChallenge(challenge, meta) {
    const challengeOrder = findIndex(
      meta.challengeOrder,
      ({ id }) => id === challenge.id
    );

    if (!meta.dashedName)
      throw Error(
        `The 'meta.json' file for the block with challenge '${challenge.title}' has no 'dashedName' property`
      );

    challenge.block = meta.dashedName;
    challenge.hasEditableBoundaries = !!meta.hasEditableBoundaries;
    challenge.order = meta.order;
    // const superOrder = getSuperOrder(meta.superBlock);
    // NOTE: Use this version when a super block is in beta.
    const superOrder = getSuperOrder(meta.superBlock, {
      // switch this back to SHOW_NEW_CURRICULUM when we're ready to beta the JS superblock
      showNewCurriculum: process.env.SHOW_UPCOMING_CHANGES === 'true'
    });
    if (superOrder !== null) challenge.superOrder = superOrder;
    /* Since there can be more than one way to complete a certification (using the
   legacy curriculum or the new one, for instance), we need a certification
   field to track which certification this belongs to. */
    const dupeCertifications = [
      {
        certification: 'responsive-web-design',
        dupe: '2022/responsive-web-design'
      },
      {
        certification: 'javascript-algorithms-and-data-structures',
        dupe: '2022/javascript-algorithms-and-data-structures'
      }
    ];
    const hasDupe = dupeCertifications.find(
      cert => cert.dupe === meta.superBlock
    );
    challenge.certification = hasDupe ? hasDupe.certification : meta.superBlock;
    challenge.superBlock = meta.superBlock;
    challenge.challengeOrder = challengeOrder;
    challenge.isPrivate = challenge.isPrivate || meta.isPrivate;
    challenge.required = (meta.required || []).concat(challenge.required || []);
    challenge.template = meta.template;
    challenge.time = meta.time;
    challenge.helpCategory = challenge.helpCategory || meta.helpCategory;
    challenge.translationPending =
      lang !== 'english' &&
      !isAuditedSuperBlock(lang, meta.superBlock, {
        showNewCurriculum: process.env.SHOW_NEW_CURRICULUM === 'true',
        showUpcomingChanges: process.env.SHOW_UPCOMING_CHANGES === 'true'
      });
    challenge.usesMultifileEditor = !!meta.usesMultifileEditor;
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
    // if removeComments is not explicitly set, default to true
    if (typeof challenge.removeComments === 'undefined') {
      challenge.removeComments = true;
    }
  }

  async function createChallenge(filePath, maybeMeta) {
    const meta = maybeMeta
      ? maybeMeta
      : require(path.resolve(
          META_DIR,
          `${getBlockNameFromPath(filePath)}/meta.json`
        ));

    await validate(filePath, meta.superBlock);

    // We always try to translate comments (even English ones) to confirm that translations exist.
    const translateComments =
      isAuditedSuperBlock(lang, meta.superBlock, {
        showNewCurriculum: process.env.SHOW_NEW_CURRICULUM,
        showUpcomingChanges: process.env.SHOW_UPCOMING_CHANGES
      }) && fs.existsSync(getFullPath(lang, filePath));

    const challenge = await (translateComments
      ? parseTranslation(
          getFullPath(lang, filePath),
          COMMENT_TRANSLATIONS,
          lang
        )
      : parseMD(getFullPath('english', filePath)));

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
exports.generateChallengeCreator = generateChallengeCreator;
