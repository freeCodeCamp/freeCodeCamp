const { from } = require('rxjs');
const { toArray, switchMap } = require('rxjs/operators');
const _ = require('lodash');
const { client } = require('../../algolia');
const { getGuideArticleData } = require('../../data-sources/guides');
const debug = require('debug');

const log = debug('fcc:search:init:guides');

const index = client.initIndex('guide');

index.setSettings(
  {
    searchableAttributes: ['title', 'content', 'category'],
    distinct: true,
    attributeForDistinct: 'id',
    attributesForFaceting: ['category']
  },
  (err, response) => {
    if (err) {
      log(err.message);
      log(err.debugData);
      throw new Error(err);
    }
    log('setSettings\n' + JSON.stringify(response, null, 2));
  }
);

exports.insertGuides = function insertGuides() {
  return getGuideArticleData()
    .pipe(
      toArray(),
      switchMap(articles => {
        const chunks = _.chunk(articles, 200).map(_.flatten);
        return from(chunks);
      })
    )
    .subscribe(
      articles => {
        index.addObjects(articles, err => {
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
