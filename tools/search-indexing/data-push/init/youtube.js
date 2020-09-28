const { client } = require('../../algolia');
const debug = require('debug');
const { getYoutubeData } = require('../../data-sources/youtube');

const log = debug('fcc:search:init:youtube');

const index = client.initIndex('youtube');

index.setSettings(
  {
    searchableAttributes: ['title', 'description', 'playlistTitle'],
    distinct: true,
    attributeForDistinct: 'id',
    attributesForFaceting: ['playlistTitle']
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

exports.insertYoutube = function insertYoutube() {
  getYoutubeData().subscribe(
    videos =>
      index.addObjects(videos, err => {
        if (err) {
          throw new Error(err);
        }
      }),
    err => log(err, 'red'),
    () => log('Complete', 'blue')
  );
};
