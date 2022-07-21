import { access, readdir } from 'fs/promises';
import { join } from 'path';

import { availableLangs, auditedCerts } from '../../config/i18n/all-langs';

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
  '2022/javascript-algorithms-and-data-structures':
    '15-javascript-algorithms-and-data-structures-22'
};

// These blocks are in the incorrect superblock. They should be moved but, for
// the audit, we just ignore them.
const blocksThatNeedToMove = ['d3-dashboard'];

void (async () => {
  let actionShouldFail = false;
  const languagesFailing: string[] = [];
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
    lang => lang !== 'english'
  );
  for (const lang of langsToCheck) {
    let languageIsFailing = false;
    console.log(`\n=== ${lang} ===`);
    const certs = auditedCerts[lang as keyof typeof auditedCerts];
    const langCurriculumDirectory = join(
      process.cwd(),
      'curriculum',
      'challenges',
      lang
    );
    const auditedFiles = englishFilePaths.filter(file =>
      certs.some(cert => file.startsWith(superBlockFolderMap[cert]))
    );
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
        languageIsFailing = true;
      }
    }
    if (languageIsFailing) {
      languagesFailing.push(lang);
      actionShouldFail = true;
    } else {
      console.log(`All expected files found.`);
    }
  }
  actionShouldFail ? process.exit(1) : process.exit(0);
})();
