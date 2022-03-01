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

    const superBlocks = Object.keys(curriculum).slice(1);

    const superBlockObj = { superblocks: superBlocks };

    writeToFile('availableSuperblocks', superBlockObj);

    let blocks = {};

    for (let i = 0; i < superBlocks.length; i++) {
      // blockNames = object parent without key-name

      const blockNames = Object.keys(curriculum[superBlocks[i]].blocks);

      if (blockNames.length === 0) continue;

      blocks[superBlocks[i]] = {};
      blocks[superBlocks[i]]['blocks'] = {};

      for (let j = 0; j < blockNames.length; j++) {
        blocks[superBlocks[i]]['blocks'][blockNames[j]] = {};
        blocks[superBlocks[i]]['blocks'][blockNames[j]]['challenges'] =
          curriculum[superBlocks[i]]['blocks'][blockNames[j]]['meta'];
      }

      writeToFile(superBlocks[i], blocks);
      blocks = {};
    }
  }

  function writeToFile(filename, json) {
    fs.writeFileSync(
      `${mobileStaticPath}/mobile/${filename}.json`,
      JSON.stringify(json, null, 2)
    );
  }
};
