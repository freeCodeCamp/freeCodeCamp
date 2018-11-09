const allowedLangDirNames = [
  'arabic',
  'chinese',
  'english',
  'portuguese',
  'russian',
  'spanish'
];

const createErrorMsg = (errors, user, hasPrevComments) => {
  let finalMsg = `**Hi @${user},**\n`;
  if (!hasPrevComments) {
    finalMsg += `
**Thanks for this pull request (PR).**\n
\n
Unfortunately, some of your commits have caused our CI tests to fail.\n
\n`;
  }
  finalMsg += `Please correct the issue(s) listed below, so we can consider merging your content.\n
\n`;
  finalMsg += errors.reduce((msgStr, error, idx) => {
    return msgStr += `#### Issue ${idx + 1}:\n
> ${error}\n
\n`;
}, '');

  return `\n${finalMsg}\n
\n
P.S: I am just friendly bot. You should reach out to the [Contributors Chat room](https://gitter.im/FreeCodeCamp/Contributors) for more help.
`;
}

const checkPath = fullPath => {
  let errorMsgs = [];
  const remaining = fullPath.split('/');
  if (!allowedLangDirNames.includes(remaining[1])) {
    errorMsgs.push(`${remaining[1]} should not be in the guide directory`);
  }

  if (remaining[remaining.length - 1] !== 'index.md') {
    errorMsgs.push(`${remaining[remaining.length - 1]} is not a valid file name, please use 'index.md'
Found in:
${fullPath}`);
  }

  if (remaining[2] === 'index.md') {
    errorMsgs.push(`${remaining[2]} is not valid in the guide directory`);
  }

  const dirName = fullPath.replace('/index.md', '');
  if (dirName.replace(/(\s|\_)/, '') !== dirName) {
    errorMsgs.push(`Invalid character found in a folder name, please use '-' for spaces and underscores\n
Found in:\n
${fullPath}`);
  }

  if (dirName.toLowerCase() !== dirName) {
    errorMsgs.push(`Upper case characters found in a folder name, all folder names must be lower case\n
Found in :\n
${fullPath}`);
  }

  return errorMsgs;
};

const guideFolderChecks = (fullPath, user, hasPrevComments) => {
  if (/^guide\//.test(fullPath)) {
    const errors = checkPath(fullPath);
    if (errors.length) {
      return createErrorMsg(errors, user, hasPrevComments);
    }
  }
};

exports.guideFolderChecks = guideFolderChecks;
