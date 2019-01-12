const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });
const { MongoClient } = require('mongodb');

const { createNewsNode } = require('./create-news-node');
const { db } = require('../../../config/secrets');

exports.sourceNodes = function sourceChallengesSourceNodes(
  { actions, reporter },
  pluginOptions
) {
  function handleError(err, client, reject) {
    if (err) {
      if (client) {
        client.close();
      }
      reject(err);
      reporter.panic(err);
    }
  }
  const { maximumStaticRenderCount = 100 } = pluginOptions;
  const { createNode } = actions;

  return new Promise((resolve, reject) =>
    MongoClient.connect(
      db,
      { useNewUrlParser: true },
      async function(err, client) {
        handleError(err, client, reject);

        reporter.info('fcc-source-news connected successfully to mongo');
        const db = client.db('freecodecamp');
        const articleCollection = db.collection('article');

        articleCollection
          .aggregate([
            { $match: { featured: true } },
            { $sort: { firstPublishedDate: -1 } },
            { $limit: maximumStaticRenderCount }
          ])
          .toArray((err, articles) => {
            handleError(err, client, reject);

            articles
              .map(article => createNewsNode(article))
              .map(node => createNode(node));

            client.close();
            reporter.info('fcc-source-news mongo connection closed');
            return resolve();
          });
      }
    )
  );
};
