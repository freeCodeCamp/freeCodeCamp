/*
 * script to remove unused curriculum files from i18n's
 *
 * when challenges are removed from english, the crowdin
 * sync doesn't remove the files from i18n's folders
 *
 * be careful, as this removes files from your filesystem
 * and it doesn't really have any safeguards
 */

// minimum safeguard - only run command from within this folder
if (!process.env.PWD.endsWith('/freeCodeCamp/tools/scripts')) {
  console.log(
    "Be sure to run the script from the '/freeCodeCamp/tools/scripts' folder, exiting..."
  );
  process.exit(1);
}

const fs = require('fs');
const path = require('path');

const root = '../..';
const challengesPath = path.join(root, 'curriculum/challenges');
const i18nConfigPath = path.join(root, 'config/i18n.js');
const englishPath = path.join(challengesPath, 'english');

const langObj = require(i18nConfigPath).Languages;
delete langObj.English;

// array of all languages (minus 'english')
const langFolders = Object.values(langObj);

// remove pesky .DS_Store files
function rmDsStore(dirPath) {
  const dir = fs.readdirSync(dirPath);

  if (dir.includes('.DS_Store')) {
    console.log(`Removing ${dirPath}/.DS_Store`);
    fs.rmSync(path.join(dirPath, '.DS_Store'));
  }
}

// remove non-directories from array (not fs)
function filterDirs(dirPath) {
  const dir = fs.readdirSync(dirPath);

  const filtered = dir.filter(subDir => {
    const subDirPath = path.join(dirPath, subDir);
    return fs.existsSync(subDirPath) && fs.lstatSync(subDirPath).isDirectory();
  });

  return filtered;
}

// remove non-challenge files from array (not fs)
function filterFiles(dirPath) {
  const dir = fs.readdirSync(dirPath);

  const filtered = dir.filter(file => {
    return (
      file.endsWith('.md') || file.endsWith('.yaml') || file.endsWith('.yml')
    );
  });

  return filtered;
}

// check if dir is empty
function isEmpty(dirPath) {
  return fs.readdirSync(dirPath).length === 0;
}

langFolders.forEach(lang => {
  const langPath = path.join(challengesPath, lang);
  const langDir = filterDirs(langPath);
  console.log(`Searching '${lang}' for unused files...`);

  rmDsStore(langPath);

  langDir.forEach(superBlock => {
    const superBlockPath = path.join(langPath, superBlock);
    const superBlockDir = filterDirs(superBlockPath);

    rmDsStore(superBlockPath);

    superBlockDir.forEach(block => {
      const blockPath = path.join(superBlockPath, block);
      const blockDir = filterFiles(blockPath);

      rmDsStore(blockPath);

      blockDir.forEach(file => {
        const i18nFilePath = path.join(blockPath, file);
        const englishFilePath = path.join(englishPath, superBlock, block, file);

        // if english file doesn't exist, remove i18n file
        if (!fs.existsSync(englishFilePath)) {
          console.log(`Removing '${path.join(lang, superBlock, block, file)}'`);
          fs.rmSync(i18nFilePath);
        }
      });

      // if blockdir is empty, remove it
      if (isEmpty(blockPath)) {
        console.log(
          `Removing '${path.join(lang, superBlock, block)}' directory...`
        );
        fs.rmdirSync(blockPath);
      }
    });

    // if superblockdir is empty, remove it
    if (isEmpty(superBlockPath)) {
      console.log(`Removing '${path.join(lang, superBlock)}' directory...`);
      fs.rmdirSync(superBlockPath);
    }
  });
});
