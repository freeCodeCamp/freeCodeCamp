const path = require('path');
const fs = require('fs');
const readdirp = require('readdirp-walk');
const matter = require('gray-matter');
const _ = require('lodash');

const guideRoot = path.resolve(__dirname, '../../../guide');

const allowedLangDirNames = [
  'arabic',
  'chinese',
  'english',
  'portuguese',
  'russian',
  'spanish'
];

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
    return checkDirName(name, fullPath).catch(err => {
      throw err;
    });
  }
  return checkFileName(name, fullPath)
    .then(() => checkFrontmatter(fullPath))
    .catch(err => {
      console.log(`

    The below occured in:

    ${fullPath}

  `);
      console.error(err);
      // eslint-disable-next-line no-process-exit
      process.exit(1);
    });
}

readdirp({ root: guideRoot })
  .on('data', file =>
    checkFile(file).catch(err => {
      console.error(err);
      // eslint-disable-next-line no-process-exit
      process.exit(1);
    })
  )
  .on('end', () => {
    console.log(`

    guide directory naming checks complete

`);
    // eslint-disable-next-line no-process-exit
    process.exit(0);
  });

function checkDirName(dirName, fullPath) {
  return new Promise((resolve, reject) => {
    if (dirName.replace(/(\s|\_)/, '') !== dirName) {
      return reject(
        new Error(`
    Invalid character found in '${dirName}', please use '-' for spaces

      Found in:
        ${fullPath}
    `)
      );
    }
    if (dirName.toLowerCase() !== dirName) {
      return reject(
        new Error(`
Upper case characters found in ${dirName}, all folder names must be lower case

  Found in :
    ${fullPath}
`)
      );
    }
    return resolve();
  });
}

function checkFileName(fileName, fullPath) {
  return new Promise((resolve, reject) => {
    if (fileName !== 'index.md') {
      return reject(
        new Error(
          `${fileName} is not a valid file name, please use 'index.md'

      Found in:
        ${fullPath}
    `
        )
      );
    }
    return resolve();
  });
}

function checkFrontmatter(fullPath) {
  return new Promise((resolve, reject) =>
    fs.readFile(fullPath, 'utf8', (err, content) => {
      if (err) {
        return reject(new Error(err));
      }
      try {
        const { data: frontmatter } = matter(content);
        if (!frontmatter || _.isEmpty(frontmatter) || !frontmatter.title) {
          return reject(
            new Error(`
  The article at: ${fullPath} is missing frontmatter.

  Example:

  ---
  title: The Article Title
  localeTitle: The Translated Title # Only required for translations
  ---

  < The Article Body >

  `)
          );
          // process.exit(1);
        }
        return resolve();
      } catch (e) {
        console.log(`

  The below occured in:

  ${fullPath}

  `);
        throw e;
      }
    })
  );
}
