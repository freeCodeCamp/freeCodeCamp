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
      key => key !== '00-certifications'
    );

    writeToFile('availableSuperblocks', {
      superblocks: [superBlockKeys, getSuperBlockNames()]
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
    try {
      const intros = JSON.parse(fs.readFileSync(blockIntroPath));

      if (superBlockKey == '14-responsive-web-design-22') {
        superBlockKey = '2022/responsive-web-design';
      } else if (superBlockKey == '13-relational-databases') {
        superBlockKey = 'relational-database';
      }

      const introValues = intros[superBlockKey]['blocks'][blockKey]['intro'];

      // remove numbers from key
      superBlockKey = superBlockKey.split('-').slice(1).join('-');

      return introValues.join('');
    } catch (e) {
      return '';
    }
  }

  function getSuperBlockNames() {
    try {
      const superBlocks = JSON.parse(fs.readFileSync(blockIntroPath));

      return Object.keys(superBlocks).map(
        superBlock => superBlocks[superBlock].title
      );
    } catch (e) {
      return [];
    }
  }

  function writeToFile(filename, json) {
    fs.writeFileSync(
      `${mobileStaticPath}/mobile/${filename}.json`,
      JSON.stringify(json, null, 2)
    );
  }
};
