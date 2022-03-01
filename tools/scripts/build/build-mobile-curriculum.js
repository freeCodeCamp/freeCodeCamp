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

    const superBlockKeys = Object.keys(curriculum).slice(1);

    const superBlockObj = { superblocks: superBlockKeys };

    writeToFile('availableSuperblocks', superBlockObj);

    let superBlocks = {};

    for (let i = 0; i < superBlockKeys.length; i++) {
      const blockNames = Object.keys(curriculum[superBlockKeys[i]].blocks);

      if (blockNames.length === 0) continue;

      superBlocks[superBlockKeys[i]] = {};
      superBlocks[superBlockKeys[i]]['blocks'] = {};

      for (let j = 0; j < blockNames.length; j++) {
        superBlocks[superBlockKeys[i]]['blocks'][blockNames[j]] = {};
        superBlocks[superBlockKeys[i]]['blocks'][blockNames[j]]['challenges'] =
          curriculum[superBlockKeys[i]]['blocks'][blockNames[j]]['meta'];
      }

      writeToFile(superBlockKeys[i], superBlocks);
      superBlocks = {};
    }
  }

  function writeToFile(filename, json) {
    fs.writeFileSync(
      `${mobileStaticPath}/mobile/${filename}.json`,
      JSON.stringify(json, null, 2)
    );
  }
};
