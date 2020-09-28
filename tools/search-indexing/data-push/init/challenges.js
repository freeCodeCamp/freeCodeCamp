const { client } = require('../../algolia');
const debug = require('debug');
const getChallengeData = require('../../data-sources/challenges');

const log = debug('fcc:search:init:challenge');

const index = client.initIndex('challenge');

index.setSettings(
  {
    searchableAttributes: ['title', 'description', 'blockName'],
    distinct: true,
    attributeForDistinct: 'id',
    attributesForFaceting: ['blockName']
  },
  (err, response) => {
    if (err) {
      log(err.message);
      log(err.debugData);
      throw new Error(err);
    }
    log('setSettings\n\n' + JSON.stringify(response, null, 2));
  }
);

exports.insertChallenges = function insertChallenges() {
  return getChallengeData().subscribe(
    challenges => {
      index.addObjects(challenges, err => {
        if (err) {
          throw new Error(err);
        }
      });
    },
    err => {
      throw new Error(err);
    },
    () => log('complete')
  );
};
