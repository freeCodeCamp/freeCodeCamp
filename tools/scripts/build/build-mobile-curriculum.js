const fs = require('fs');
const path = require('path');

exports.buildMobileCurriculum = function buildMobileCurriculum(json) {
  const mobileStaticPath = path.resolve(__dirname, '../../../client/static');

  if (!fs.existsSync(`${mobileStaticPath}/mobile`)) {
    fs.mkdirSync(`${mobileStaticPath}/mobile`)
    writeJson(json);
  } else {
    writeJson(json);
  }

  function writeJson(curriculum) {
    curriculum = JSON.parse(curriculum);

    const superBlocksAndCertifications = Object.keys(curriculum);

    const superBlockObj = { superblocks: superBlocksAndCertifications.slice(1) };

    writeToFile('availableSuperblocks', superBlockObj);

    let blockNames = {};

    for (let i = 0; i < superBlocks.length; i++) {
      // blockGroup = object parent without key-name

      const blockGroup = Object.keys(curriculum[superBlocks[i]].blocks);

      if (blockGroup.length === 0) continue;

      blockNames[superBlocks[i]] = {};
      blockNames[superBlocks[i]]['blocks'] = {};

      for (let j = 0; j < blockGroup.length; j++) {
        blockNames[superBlocks[i]]['blocks'][blockGroup[j]] = {};
        blockNames[superBlocks[i]]['blocks'][blockGroup[j]]['challenges'] =
          curriculum[superBlocks[i]]['blocks'][blockGroup[j]]['meta'];
      }

      writeToFile(superBlocks[i], blockNames);
      blockNames = {};
    }
  }

  function writeToFile(filename, json) {
    fs.writeFileSync(
      `${mobileStaticPath}/mobile/${filename}.json`,
      JSON.stringify(json, null, 2)
    );
  }
};
