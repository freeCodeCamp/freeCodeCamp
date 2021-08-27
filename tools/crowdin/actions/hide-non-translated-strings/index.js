require('dotenv').config({ path: `${__dirname}/../../.env` });
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { getFiles } = require('../../utils/files');
const { getStrings, updateFileString } = require('../../utils/strings');

const createChallengeTitleLookup = (
  lookup,
  { fileId, path: crowdinFilePath }
) => {
  const challengeFilePath = path.join(
    __dirname,
    '/../../../../',
    crowdinFilePath
  );
  try {
    const challengeContent = fs.readFileSync(challengeFilePath);
    const {
      data: { title: challengeTitle }
    } = matter(challengeContent);
    return {
      ...lookup,
      [fileId]: {
        crowdinFilePath,
        challengeTitle
      }
    };
  } catch (err) {
    console.log(err.name);
    console.log(err.message);
  }
  return lookup;
};

const hideNonTranslatedStrings = async projectId => {
  console.log('hide non-translated strings...');
  const crowdinFiles = await getFiles(projectId);
  if (crowdinFiles && crowdinFiles.length) {
    const challengeTitleLookup = crowdinFiles.reduce(
      createChallengeTitleLookup,
      {}
    );
    const crowdinStrings = await getStrings({ projectId });
    if (crowdinStrings && crowdinStrings.length) {
      for (let string of crowdinStrings) {
        const { crowdinFilePath, challengeTitle } =
          challengeTitleLookup[string.data.fileId];
        await updateFileString({
          projectId,
          string,
          challengeTitle,
          crowdinFilePath
        });
      }
    }
  }
  console.log('complete');
};

const projectId = process.env.CROWDIN_PROJECT_ID;
hideNonTranslatedStrings(projectId);
