/* eslint-disable import/no-unresolved */
const path = require('path');
const fs = require('fs-extra');
const opencc = require('node-opencc');

const getFiles = async (directory, fileList = []) => {
  const files = await fs.readdir(directory);
  for (const file of files) {
    const fileStat = await fs.stat(path.join(directory, file));
    if (fileStat.isDirectory()) {
      fileList = await getFiles(path.join(directory, file), fileList);
    } else {
      fileList.push(path.join(directory, file));
    }
  }
  return fileList;
};

(async () => {
  console.info('Getting file list...');
  const fileList = [];
  const curriculum = await getFiles(
    path.join(__dirname, '/../../../../curriculum/challenges/chinese')
  );
  fileList.push(...curriculum);

  const client = await getFiles(
    path.join(__dirname, '/../../../../client/i18n/locales/chinese')
  );
  fileList.push(...client);

  for (const file of fileList) {
    console.info(`Translating ${file}`);
    const fileText = await fs.readFile(file, 'utf-8');
    const translatedText = await opencc.simplifiedToTraditional(fileText);
    await fs.outputFile(
      file.replace('chinese', 'chinese-traditional'),
      translatedText
    );
  }
})();
