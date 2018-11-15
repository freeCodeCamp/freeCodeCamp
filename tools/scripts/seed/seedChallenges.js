const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });
const { MongoClient, ObjectID } = require('mongodb');
const { getChallengesForLang } = require('@freecodecamp/curriculum');
const { flatten } = require('lodash');
const debug = require('debug');

const { createPathMigrationMap } = require('./createPathMigrationMap');

const log = debug('fcc:tools:seedChallenges');
const { MONGOHQ_URL, LOCALE: lang = 'english' } = process.env;

function handleError(err, client) {
  if (err) {
    console.error('Oh noes!!');
    console.error(err);
    try {
      client.close();
    } catch (e) {
      // no-op
    } finally {
      /* eslint-disable-next-line no-process-exit */
      process.exit(1);
    }
  }
}

MongoClient.connect(
  MONGOHQ_URL,
  { useNewUrlParser: true },
  function(err, client) {
    handleError(err, client);

    log('Connected successfully to mongo at %s', MONGOHQ_URL);

    const db = client.db('freecodecamp');
    const challengeCollection = db.collection('challenge');

    challengeCollection.deleteMany({}, err => {
      handleError(err, client);

      log('deleted all the challenges');

      const curriculum = getChallengesForLang(lang);

      const allChallenges = Object.keys(curriculum)
        .map(key => curriculum[key].blocks)
        .reduce((challengeArray, superBlock) => {
          const challengesForBlock = Object.keys(superBlock).map(
            key => superBlock[key].challenges
          );
          return [...challengeArray, ...flatten(challengesForBlock)];
        }, [])
        .map(challenge => {
          const currentId = challenge.id.slice(0);
          challenge._id = ObjectID(currentId);
          delete challenge.id;
          return challenge;
        });

      try {
        challengeCollection.insertMany(
          allChallenges,
          { ordered: false },
          err => {
            handleError(err, client);
            log('challenge seed complete');
            client.close();
          }
        );
      } catch (e) {
        handleError(e, client);
      } finally {
        log('generating path migration map');
        const pathMap = createPathMigrationMap(curriculum);
        const outputDir = path.resolve(
          __dirname,
          '../../../api-server/server/resources/pathMigration.json'
        );
        fs.writeFile(outputDir, JSON.stringify(pathMap), err => {
          if (err) {
            console.error('Oh noes!!');
            console.error(err);
          }
          log('path migration map generated');
        });
      }
    });
  }
);
