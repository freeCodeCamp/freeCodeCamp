import { access, readdir } from 'fs/promises';
import { join, resolve } from 'path';

import { flatten } from 'lodash/fp';
import { config } from 'dotenv';

const envPath = resolve(__dirname, '../../.env');
config({ path: envPath });

import { availableLangs } from '../../shared/config/i18n';
import { getChallengesForLang } from '../../curriculum/get-challenges';
import {
  SuperBlocks,
  getAuditedSuperBlocks
} from '../../shared/config/curriculum';

// TODO: re-organise the types to a common 'types' folder that can be shared
// between the workspaces so we don't have to declare ChallengeNode here and in
// the client.

// This cannot be imported from the client, without causing tsc to attempt to
// compile the client (something it cannot do)
type ChallengeNode = {
  block: string;
  dashedName: string;
  superBlock: SuperBlocks;
  id: string;
  challengeType: number;
};

const superBlockFolderMap = {
  'responsive-web-design': '01-responsive-web-design',
  'javascript-algorithms-and-data-structures':
    '02-javascript-algorithms-and-data-structures',
  'front-end-development-libraries': '03-front-end-development-libraries',
  'data-visualization': '04-data-visualization',
  'back-end-development-and-apis': '05-back-end-development-and-apis',
  'quality-assurance': '06-quality-assurance',
  'scientific-computing-with-python': '07-scientific-computing-with-python',
  'data-analysis-with-python': '08-data-analysis-with-python',
  'information-security': '09-information-security',
  'machine-learning-with-python': '10-machine-learning-with-python',
  'coding-interview-prep': '11-coding-interview-prep',
  'relational-database': '13-relational-database',
  '2022/responsive-web-design': '14-responsive-web-design-22',
  'javascript-algorithms-and-data-structures-v8':
    '15-javascript-algorithms-and-data-structures-22',
  'the-odin-project': '16-the-odin-project',
  'college-algebra-with-python': '17-college-algebra-with-python',
  'project-euler': '18-project-euler',
  'foundational-c-sharp-with-microsoft':
    '19-foundational-c-sharp-with-microsoft',
  'upcoming-python': '20-upcoming-python',
  'a2-english-for-developers': '21-a2-english-for-developers',
  'rosetta-code': '22-rosetta-code',
  'python-for-everybody': '23-python-for-everybody',
  'b1-english-for-developers': '24-b1-english-for-developers',
  'front-end-development': '25-front-end-development'
};

// These blocks are in the incorrect superblock. They should be moved but, for
// the audit, we just ignore them.
const blocksThatNeedToMove = ['d3-dashboard'];

// Adding types for getChallengesForLang is possible, but not worth the effort
// at this time.
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

const getChallenges = async (lang: string) => {
  const curriculum = await getChallengesForLang(lang);
  return Object.keys(curriculum)
    .map(key => curriculum[key].blocks)
    .reduce((challengeArray, superBlock) => {
      const challengesForBlock = Object.keys(superBlock).map(
        key => superBlock[key].challenges
      );
      return [...challengeArray, ...flatten(challengesForBlock)];
    }, []) as unknown as ChallengeNode[];
};

/* eslint-enable @typescript-eslint/no-unsafe-return */
/* eslint-enable @typescript-eslint/no-unsafe-argument */
/* eslint-enable @typescript-eslint/no-unsafe-assignment */
/* eslint-enable @typescript-eslint/no-unsafe-member-access */

void (async () => {
  let actionShouldFail = false;
  const englishCurriculumDirectory = join(
    process.cwd(),
    'curriculum',
    'challenges',
    'english'
  );
  const englishFilePaths: string[] = [];
  const englishSuperblocks = await readdir(englishCurriculumDirectory);
  for (const englishSuperblock of englishSuperblocks) {
    const englishBlocks = await readdir(
      join(englishCurriculumDirectory, englishSuperblock)
    );
    for (const englishBlock of englishBlocks) {
      if (englishBlock.endsWith('.txt')) {
        continue;
      }
      const englishChallenges = await readdir(
        join(englishCurriculumDirectory, englishSuperblock, englishBlock)
      );
      for (const englishChallenge of englishChallenges) {
        englishFilePaths.push(
          join(englishSuperblock, englishBlock, englishChallenge)
        );
      }
    }
  }
  const langsToCheck = availableLangs.curriculum.filter(
    lang => String(lang) !== 'english'
  );
  for (const lang of langsToCheck) {
    console.log(`\n=== ${lang} ===`);
    const certs = getAuditedSuperBlocks({
      language: lang,
      showNewCurriculum: process.env.SHOW_NEW_CURRICULUM === 'true',
      showUpcomingChanges: process.env.SHOW_UPCOMING_CHANGES === 'true'
    });
    const langCurriculumDirectory = join(
      process.cwd(),
      'curriculum',
      'i18n-curriculum',
      'curriculum',
      'challenges',
      lang
    );
    const auditedFiles = englishFilePaths.filter(file =>
      certs.some(
        cert =>
          // we're not ready to audit the new curriculum yet
          (cert !== SuperBlocks.JsAlgoDataStructNew ||
            process.env.SHOW_UPCOMING_CHANGES === 'true') &&
          file.startsWith(superBlockFolderMap[cert])
      )
    );
    const noMissingFiles = await auditChallengeFiles(auditedFiles, {
      langCurriculumDirectory
    });
    const noDuplicateSlugs = await auditSlugs(lang, certs);
    if (noMissingFiles && noDuplicateSlugs) {
      console.log(`All challenges pass.`);
    } else {
      actionShouldFail = true;
    }
  }
  actionShouldFail ? process.exit(1) : process.exit(0);
})();

async function auditChallengeFiles(
  auditedFiles: string[],
  { langCurriculumDirectory }: { langCurriculumDirectory: string }
) {
  let auditPassed = true;
  for (const file of auditedFiles) {
    if (blocksThatNeedToMove.some(block => file.includes(`/${block}/`))) {
      continue;
    }
    const filePath = join(langCurriculumDirectory, file);
    const fileExists = await access(filePath)
      .then(() => true)
      .catch(() => false);
    if (!fileExists) {
      console.log(`${filePath} does not exist.`);
      auditPassed = false;
    }
  }
  return auditPassed;
}

async function auditSlugs(lang: string, certs: SuperBlocks[]) {
  let auditPassed = true;
  const slugs = new Map<string, string>();
  const challenges = await getChallenges(lang);

  for (const challenge of challenges) {
    const { block, dashedName, superBlock } = challenge;
    const slug = `/learn/${superBlock}/${block}/${dashedName}`;
    // Skipping certifications
    const isCertification = challenge.challengeType === 7;
    if (certs.includes(superBlock) && !isCertification && slugs.has(slug)) {
      console.log(
        `${slug} appears more than once: ${slugs.get(slug) ?? ''} and ${
          challenge.id
        }`
      );
      auditPassed = false;
    }
    slugs.set(slug, challenge.id);
  }

  return auditPassed;
}
