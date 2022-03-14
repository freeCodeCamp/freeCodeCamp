const fs = require('fs');
const path = require('path');

exports.buildMobileCurriculum = function buildMobileCurriculum(json) {
  const mobileStaticPath = path.resolve(__dirname, '../../../client/static');

  fs.mkdirSync(`${mobileStaticPath}/mobile`, { recursive: true });
  writeAndParseCurriculumJson(json);

  function writeAndParseCurriculumJson(curriculum) {
    const superBlockKeys = Object.keys(curriculum).filter(
      key => key !== 'certifications'
    );

    writeToFile('availableSuperblocks', { superblocks: superBlockKeys });

    for (let i = 0; i < superBlockKeys.length; i++) {
      const superBlock = {};
      const blockNames = Object.keys(curriculum[superBlockKeys[i]].blocks);

      if (blockNames.length === 0) continue;

      superBlock[superBlockKeys[i]] = {};
      superBlock[superBlockKeys[i]]['blocks'] = {};

      for (let j = 0; j < blockNames.length; j++) {
        superBlock[superBlockKeys[i]]['blocks'][blockNames[j]] = {};
        superBlock[superBlockKeys[i]]['blocks'][blockNames[j]]['challenges'] =
          curriculum[superBlockKeys[i]]['blocks'][blockNames[j]]['meta'];
      }

      writeToFile(superBlockKeys[i], superBlock);
    }
  }

  function writeToFile(filename, json) {
    const fullPath = `${mobileStaticPath}/mobile/${filename}.json`;
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, JSON.stringify(json, null, 2));
  }
};
