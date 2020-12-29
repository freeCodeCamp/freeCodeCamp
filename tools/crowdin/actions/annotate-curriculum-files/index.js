const fs = require('fs');
const path = require('path');
const readDirP = require('readdirp');
const {
  annotate
} = require('../../../formatter/translation-annotation/annotate');

const ignoredFilesRE = /(part-\d\d\d\.md$)|(^\d\d-certificates)/i;
const challengeDir = path.join(
  __dirname,
  '/../../../../curriculum/challenges/english'
);

const annotateCurriculumFiles = async file => {
  try {
    const match = file.path.match(ignoredFilesRE);
    if (!match) {
      const challengeFilePath = challengeDir + '/' + file.path;
      const annotatedContent = await annotate(challengeFilePath);
      fs.writeFileSync(challengeFilePath, annotatedContent);
    }
  } catch (err) {
    console.log(err);
  }
};

readDirP(challengeDir, { fileFilter: ['*.md'], type: 'files' }).on(
  'data',
  annotateCurriculumFiles
);
