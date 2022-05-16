import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { superBlockMobileAppOrder } from '../../../curriculum/utils';

export function buildMobileCurriculum(json) {
  const mobileStaticPath = resolve(__dirname, '../../../client/static');
  const blockIntroPath = resolve(
    __dirname,
    '../../../client/i18n/locales/english/intro.json'
  );

  mkdirSync(`${mobileStaticPath}/mobile`, { recursive: true });
  writeAndParseCurriculumJson(json);

  function writeAndParseCurriculumJson(curriculum) {
    const superBlockKeys = Object.keys(curriculum).filter(
      key => key !== 'certifications'
    );

    writeToFile('availableSuperblocks', {
      // removing "/" as it will create an extra sub-path when accessed via an endpoint

      superblocks: [
        superBlockMobileAppOrder,
        getSuperBlockNames(superBlockMobileAppOrder)
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

      writeToFile(superBlockKeys[i].replace(/\//, '-'), superBlock);
    }
  }

  function getBlockDescription(superBlockKey, blockKey) {
    const intros = JSON.parse(readFileSync(blockIntroPath));

    return intros[superBlockKey]['blocks'][blockKey]['intro'];
  }

  function getSuperBlockNames(superBlockObj) {
    const superBlocks = JSON.parse(readFileSync(blockIntroPath));

    const superBlockArr = Object.entries(superBlockObj);

    return superBlockArr.map(superBlock => superBlocks[superBlock[0]].title);
  }

  function writeToFile(fileName, json) {
    const fullPath = `${mobileStaticPath}/mobile/${fileName}.json`;
    mkdirSync(dirname(fullPath), { recursive: true });
    writeFileSync(fullPath, JSON.stringify(json, null, 2));
  }
}
