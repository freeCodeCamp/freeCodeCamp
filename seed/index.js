const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const MongoClient = require('mongodb').MongoClient;
const { getChallengesForLang } = require('@freecodecamp/curriculum');
const { flatten } = require('lodash');

const { MONGOHQ_URL, LOCALE: lang } = process.env;

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

    console.log('Connected successfully to mongo');

    const db = client.db('freecodecamp');
    const challenges = db.collection('challenges');

    challenges.deleteMany({}, err => {
      handleError(err, client);

      const curriculum = getChallengesForLang(lang);

      const allChallenges = Object.keys(curriculum)
        .map(key => curriculum[key].blocks)
        .reduce((challengeArray, superBlock) => {
          const challengesForBlock = Object.keys(superBlock).map(
            key => superBlock[key].challenges
          );
          return [...challengeArray, ...flatten(challengesForBlock)];
        }, []);

      try {
        challenges.insertMany(allChallenges, { ordered: false });
      } catch (e) {
        handleError(e, client);
      } finally {
        console.log('challenge seed complete');
        client.close();
      }
    });
  }
);
