require('dotenv').config({ path: `${__dirname}/../../.env` });
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { getFiles } = require('../../utils/files');
const { updateFileStrings } = require('../../utils/strings');

const hideNonTranslatedStrings = async projectId => {
  console.log('start hiding non-translated strings...');
  const crowdinFiles = await getFiles(projectId);
  if (crowdinFiles && crowdinFiles.length) {
    for (let { fileId, path: crowdinFilePath } of crowdinFiles) {
      const challengeFilePath = path.join(
        __dirname,
        '/../../../../',
        crowdinFilePath
      );
      const challengeContent = fs.readFileSync(challengeFilePath);
      const {
        data: { title: challengeTitle }
      } = matter(challengeContent);
      await updateFileStrings({ projectId, fileId, challengeTitle });
    }
  }
  console.log('hiding non-translated strings complete');
};

const projectId = process.env.CROWDIN_PROJECT_ID;
hideNonTranslatedStrings(projectId);
