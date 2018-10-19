const path = require('path');
const fs = require('fs');
const readdirp = require('readdirp-walk');

const guideRoot = path.resolve(__dirname, '../../../guide');

const allowedLangDirNames = [
  'arabic',
  'chinese',
  'english',
  'portuguese',
  'russian',
  'spanish'
];

function checkDirName(dirName, fullPath) {
  if (dirName.replace(/(\s|\_)/, '') !== dirName) {
    const newDirName = dirName.replace(/\s/g, '-');
    fs.renameSync(fullPath, fullPath.replace(dirName, newDirName));
    // throw new Error(
    //   `Invalid character found in a folder named '${dirName}', please use '-' for spaces
    //   ${fullPath}
    //   `
    // );
    return;
  }
  if (dirName.toLowerCase() !== dirName) {
    const newPath = fullPath.replace(dirName, dirName.toLowerCase());
    console.log(`renaming ${dirName} to ${dirName.toLowerCase()}`);
    fs.renameSync(fullPath, newPath);
  }
}

function checkFileName(fileName, fullPath) {
  if (fileName !== 'index.md') {
    throw new Error(
      `${fileName} is not a valid file name, please use 'index.md'
      ${fullPath}
      `
    );
  }
}

function checkFile(file) {
  const { stat, depth, name, fullPath } = file;
  if (depth === 1) {
    if (stat.isFile()) {
      throw new Error(`${name} is not valid in the ${guideRoot} directory`);
    }
    if (!allowedLangDirNames.includes(name)) {
      throw new Error(`${name} should not be in the ${guideRoot} directory`);
    }
  }
  if (stat.isDirectory()) {
    return checkDirName(name, fullPath);
  }
  return checkFileName(name, fullPath);
}

readdirp({ root: guideRoot })
  .on('data', checkFile)
  .on('end', () => {
    /* eslint-disable no-process-exit */
    process.exit(0);
  });
