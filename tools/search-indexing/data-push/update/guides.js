const { client } = require('../../algolia');
const _ = require('lodash');
const { getGuideArticleData } = require('../../data-sources/guides');
const debug = require('debug');

const log = debug('fcc:search:update:guides');
const index = client.initIndex('guides');

const concatContents = (doc, current) => ({
  ...current,
  content: doc.content.concat([current.content])
});

exports.updateGuides = async function updateGuides() {
  const newDocs = await getGuideArticleData().toPromise();
  let hits = [];
  const browseAll = index.browseAll();
  browseAll.on('result', function onResult(content) {
    hits = hits.concat(content.hits);
  });
  browseAll.on('end', function onEnd() {
    log('Finished browsing this index');
    log(`We got ${hits.length} records`);
    const docIds = _.uniq(hits.map(doc => doc.id));
    docIds.map(id => {
      const allCurrentForId = hits.filter(doc => doc.id === id);
      const allNewForId = newDocs.filter(doc => doc.id === id);
      const newForId = allNewForId.reduce(concatContents, { content: [] });
      const currentForId = allCurrentForId.reduce(concatContents, {
        content: []
      });
      const isDiff = newForId.content.some(
        snippet => !currentForId.content.includes(snippet)
      );
      if (isDiff) {
        log(id, 'cyan');
        const objectIDs = allCurrentForId.map(doc => doc.objectID);
        index.addObjects(allNewForId, err => {
          if (err) {
            throw new Error(err);
          }
          index.deleteObjects(objectIDs, err => {
            if (err) {
              throw new Error(err);
            }
            log(`purge of stale data for ${id} complete`, 'magenta');
          });
        });
      }
    });
  });
  browseAll.on('error', function onError(err) {
    throw err;
  });
};
