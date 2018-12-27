const { frontmatterCheck } = require('./frontmatter-check');

const allowedLangDirNames = [
  'arabic',
  'chinese',
  'english',
  'portuguese',
  'russian',
  'spanish'
];

const checkPath = (fullPath, fileContent) => {
  let errorMsgs = [];
  const remaining = fullPath.split('/');

  if (!allowedLangDirNames.includes(remaining[1])) {
    errorMsgs.push({
      msg: `\`${remaining[1]}\` is not a valid language directory`,
      fullPath
    });
  }

  if (remaining[remaining.length - 1] !== 'index.md') {
    errorMsgs.push({
      msg: `\`${
        remaining[remaining.length - 1]
      }\` is not a valid file name, please use \`index.md\``,
      fullPath
    });
  } else if (remaining[2] === 'index.md') {
    errorMsgs.push({
      msg: `This file is not in its own sub-directory`,
      fullPath
    });
  }

  const dirName = fullPath.replace('/index.md', '');
  if (dirName.replace(/(\s|\_)/, '') !== dirName) {
    errorMsgs.push({
      msg: `Invalid character found in a directory name, please use \`-\` as separators`,
      fullPath
    });
  }

  if (dirName.toLowerCase() !== dirName) {
    errorMsgs.push({
      msg: `Upper case characters found in the file path, all file paths must be lower case`,
      fullPath
    });
  }

  const isTranslation =
    allowedLangDirNames.includes(remaining[1]) && remaining[1] !== 'english';
  const frontMatterErrMsgs = frontmatterCheck(
    fullPath,
    isTranslation,
    fileContent
  );

  return errorMsgs.concat(frontMatterErrMsgs);
};

module.exports = { checkPath };
