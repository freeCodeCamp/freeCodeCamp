const fs = require('fs');
const path = require('path');

exports.buildMobileCurriculum = function buildMobileCurriculum(json) {
  const mobileStaticPath = path.resolve(__dirname, '../../../client/static');
  const blockIntroPath = path.resolve(
    __dirname,
    '../../../client/i18n/locales/english/intro.json'
  );

  fs.mkdirSync(`${mobileStaticPath}/mobile`, { recursive: true });
  writeAndParseCurriculumJson(json);

  function writeAndParseCurriculumJson(curriculum) {
    const superBlockKeys = Object.keys(curriculum).filter(
      key => key !== 'certifications'
    );

    writeToFile('availableSuperblocks', {
      // removing "/" as it will create an extra sub-path when accessed via an endpoint

      superblocks: [
        superBlockKeys.map(key => key.replace(/\//, '-')),
        getSuperBlockNames(superBlockKeys)
      ]
    });

    for (let i = 0; i < superBlockKeys.length; i++) {
      const superBlock = {};
      const blockNames = Object.keys(curriculum[superBlockKeys[i]].blocks);

      if (blockNames.length === 0) continue;

      superBlock[superBlockKeys[i]] = {};
      superBlock[superBlockKeys[i]]['blocks'] = {};

      for (let j = 0; j < blockNames.length; j++) {
        superBlock[superBlockKeys[i]]['blocks'][blockNames[j]] = {};

        superBlock[superBlockKeys[i]]['blocks'][blockNames[j]]['desc'] =
          getBlockDescription(superBlockKeys[i], blockNames[j]);

        superBlock[superBlockKeys[i]]['blocks'][blockNames[j]]['challenges'] =
          curriculum[superBlockKeys[i]]['blocks'][blockNames[j]]['meta'];
      }

      writeToFile(superBlockKeys[i], superBlock);
    }
  }

  function getBlockDescription(superBlockKey, blockKey) {
    const intros = JSON.parse(fs.readFileSync(blockIntroPath));

    return intros[superBlockKey]['blocks'][blockKey]['intro'];
  }

  function getSuperBlockNames(superBlockKeys) {
    const superBlocks = JSON.parse(fs.readFileSync(blockIntroPath));

    return superBlockKeys.map(key => superBlocks[key].title);
  }

  function writeToFile(fileName, json) {
    fileName = fileName.replace(/\//, '-');

    const fullPath = `${mobileStaticPath}/mobile/${fileName}.json`;
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, JSON.stringify(json, null, 2));
  }
};
