require('dotenv').config({ path: `${__dirname}/../../.env` });
const core = require('@actions/core');
const { getFiles } = require('../../utils/files');
const { getStrings, changeHiddenStatus } = require('../../utils/strings');
// eslint-disable-next-line import/no-unresolved

const filename = core.getInput('filename');
const stringContent = core.getInput('string-content');

const hideString = async (projectId, fileName, string) => {
  const fileResponse = await getFiles(projectId);
  const targetFile = fileResponse.find(el => el.path.endsWith(filename));
  if (!targetFile) {
    core.setFailed(`${fileName} was not found.`);
    return;
  }

  const stringResponse = await getStrings({
    projectId,
    fileId: targetFile.fileId
  });

  const targetString = stringResponse.find(el => el.data.text === string);
  if (!targetString) {
    core.setFailed(`${string} was not found.`);
    return;
  }

  await changeHiddenStatus(projectId, targetString.data.id, true);
  console.log('string hidden!');
};

const projectId = process.env.CROWDIN_PROJECT_ID;
hideString(projectId, filename, stringContent);
