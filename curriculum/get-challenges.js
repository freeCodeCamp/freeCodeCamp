const fs = require('fs');
const path = require('path');
const util = require('util');

const { curriculum: curriculumLangs } =
  require('../shared/config/i18n').availableLangs;
const { buildCurriculum } = require('./build-curriculum');

const access = util.promisify(fs.access);

exports.getChallengesForLang = async function getChallengesForLang(
  lang,
  filters
) {
  const invalidLang = !curriculumLangs.includes(lang);
  if (invalidLang)
    throw Error(`${lang} is not a accepted language.
Accepted languages are ${curriculumLangs.join(', ')}`);

  return buildCurriculum(lang, filters);
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

async function buildChallenges({ path: filePath }, curriculum, lang, filters) {
  // path is relative to getChallengesDirForLang(lang)
  const block = getBlockNameFromPath(filePath);
  if (filters?.block && block !== filters.block) {
    return;
  }
  const superBlockDir = getBaseDir(filePath);
  const superBlock = getSuperBlockFromDir(superBlockDir);
  if (filters?.superBlock && superBlock !== filters.superBlock) {
    return;
  }
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
    console.error(e);
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

  // this builds the entire block, even if we only want one challenge, which is
  // inefficient, but finding the next challenge without building the whole
  // block is fiddly.
  challengeBlock.challenges = [...challengeBlock.challenges, challenge];
}

// This is a slightly weird abstraction, but it lets us define helper functions
// without passing around a ton of arguments.
function generateChallengeCreator(lang, englishPath, i18nPath) {
  function addMetaToChallenge(challenge, meta) {
    function addChapterAndModuleToChallenge(challenge) {
      if (chapterBasedSuperBlocks.includes(challenge.superBlock)) {
        const chapter = getChapterFromBlock(
          challenge.block,
          fullStackSuperBlockStructure
        );

        if (!meta.isUpcomingChange && chapter.comingSoon) {
          throw Error(
            `The '${chapter.dashedName}' chapter is 'comingSoon', but its '${meta.dashedName}' block is not hidden. Set 'isUpcomingChange' to 'true' in the 'meta.json' for the block to hide it.`
          );
        }

        challenge.chapter = chapter.dashedName;

        const module = getModuleFromBlock(
          challenge.block,
          fullStackSuperBlockStructure
        );

        if (!meta.isUpcomingChange && module.comingSoon) {
          throw Error(
            `The '${chapter.dashedName}' module is 'comingSoon', but its '${meta.dashedName}' block is not hidden. Set 'isUpcomingChange' to 'true' in the 'meta.json' for the block to hide it.`
          );
        }

        challenge.module = module.dashedName;
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
    challenge.order = chapterBasedSuperBlocks.includes(meta.superBlock)
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

exports.hasEnglishSource = hasEnglishSource;
