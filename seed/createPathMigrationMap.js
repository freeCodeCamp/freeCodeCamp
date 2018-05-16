require('babel-register');

const fs = require('fs');
const path = require('path');
const { Observable } = require('rx');
const getChallenges = require('./getChallenges');
const { dasherize } = require('../server/utils');

let pathMap = {};

function createPathMigrationMap() {
  return new Promise(resolve => {
  Observable.of(getChallenges())
.map(blocks => {
  blocks.forEach(block => {
    const {name: blockName, superBlock, challenges } = block;
    if (!(dasherize(superBlock) in pathMap)) {
      pathMap[dasherize(superBlock)] = {};
    }
    if (!(dasherize(blockName) in pathMap[superBlock])) {
      pathMap[dasherize(superBlock)][dasherize(blockName)] = challenges
        .map(({ title, challengeType }) => ({
          dashedName: dasherize(title),
          challengeType
        }));
    }
  });
})
  .subscribe(() => {}, console.error, () => {
    const migMap = Object.keys(pathMap)
      .filter(key => !key.includes('certificate'))
      .map(superBlock => {
        return Object.keys(pathMap[superBlock])
        .map(block => {
          return pathMap[superBlock][block]
            .reduce((map, {dashedName, challengeType}) => ({
              ...map,
              [dashedName]: challengeType === 7 ?
                `/${superBlock}/${block}` :
                `/${superBlock}/${block}/${dashedName}`
            }), {});
          }).reduce((acc, current) => ({
            ...acc,
            ...current
          }), {});
        }).reduce((acc, current) => ({
          ...acc,
          ...current
        }), {});
      fs.writeFileSync(
        path.resolve(__dirname, '../server/resources/pathMigration.json'),
        JSON.stringify(migMap, null, 2)
      );
      resolve();
    });
  });
}


  exports.createPathMigrationMap = createPathMigrationMap;
