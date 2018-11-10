const dedent = require("dedent");

const allowedLangDirNames = [
  "arabic",
  "chinese",
  "english",
  "portuguese",
  "russian",
  "spanish"
];

const createErrorMsg = (errors, user) => {
  let errorMsgHeader = dedent`
    Hi @${user},

    Thanks for this pull request (PR).

    Unfortunately, these changes have failed some of our recommended guidelines. Please correct the issue(s) listed below, so we can consider merging your content.

    | Issue | Description | File Path |
    | :---: | --- | --- |
  `;

  let errorMsgTable = errors.reduce((msgStr, { msg, fullPath }, idx) => {
    return (msgStr += "\n" + dedent`
      | ${idx + 1} | ${msg} | ${fullPath} |
    `);
  }, "");

  let errorMsgFooter = dedent`
    P.S: I am just friendly bot. You should reach out to the [Contributors Chat room](https://gitter.im/FreeCodeCamp/Contributors) for more help.
  `;

  return errorMsgHeader + errorMsgTable + "\n\n" + errorMsgFooter;
};

const checkPath = fullPath => {
  let errorMsgs = [];
  const remaining = fullPath.split("/");

  if (!allowedLangDirNames.includes(remaining[1])) {
    errorMsgs.push({
      msg: `\`${remaining[1]}\` is not a valid language directory`,
      fullPath
    });
  }

  if (remaining[remaining.length - 1] !== "index.md") {
    errorMsgs.push({
      msg: `\`${remaining[remaining.length - 1]}\` is not a valid file name, please use \`index.md\``,
      fullPath
    });
  } else if (remaining[2] === "index.md") {
    errorMsgs.push({
      msg: `This file is not in its own sub-directory`,
      fullPath
    });
  }

  const dirName = fullPath.replace("/index.md", "");
  if (dirName.replace(/(\s|\_)/, "") !== dirName) {
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

  return errorMsgs;
};

const guideFolderChecks = (prFiles, user) => {
  const prErrors = prFiles.reduce((errorsFound, { filename: fullPath }) => {
    let newErrors;
    if (/^guide\//.test(fullPath)) {
      newErrors = checkPath(fullPath);
    }
    return newErrors ? errorsFound.concat(newErrors) : errorsFound;
  }, []);

  return createErrorMsg(prErrors, user);
};

exports.guideFolderChecks = guideFolderChecks;
