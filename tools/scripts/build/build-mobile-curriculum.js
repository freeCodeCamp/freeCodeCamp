const fs = require('fs');
const path = require('path');

exports.buildMobileCurriculum = function buildMobileCurriculum(json) {
  const mobileStaticPath = path.resolve(__dirname, '../../../client/static');

  if (!fs.existsSync(`${mobileStaticPath}/mobile`)) {
    fs.mkdirSync(`${mobileStaticPath}/mobile`);
    writeAndParseCurriculumJson(json);
  } else {
    writeAndParseCurriculumJson(json);
  }

  function writeAndParseCurriculumJson(curriculum) {
    curriculum = JSON.parse(curriculum);

    const superBlockKeys = Object.keys(curriculum).filter(
      key => key !== '00-certifications'
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
    fs.writeFileSync(
      `${mobileStaticPath}/mobile/${filename}.json`,
      JSON.stringify(json, null, 2)
    );
  }
};
