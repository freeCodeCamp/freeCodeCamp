/*
  Script to seed daily challenges to freeCodeCamp database, DailyCodingChallenges collection.
  It gets the daily challenge data from the dev-playground superblock using GraphQL.
  The main client needs to be running with upcoming changes shown to get the info from GraphQL.
  Run the curriculum tests on the dev-playground superblock before seeding to make sure they pass.
*/

import 'dotenv/config';
import { MongoClient } from 'mongodb';
import { combineChallenges, fetchChallenges, handleError } from './helpers';

const { MONGOHQ_URL } = process.env;

// Number challenges in the dev-playground blocks
// Update this if the number of challenges changes
const EXPECTED_CHALLENGE_COUNT = 143;

// Date to set for the first challenge, second challenge will be one day later, etc...
// **DO NOT CHANGE THIS AFTER RELEASE (if seeding production - okay for local dev)**
const year = 2025;
const monthIndex = 7; // 0-indexed -> 5 = June
const day = 11;
const START_DATE = new Date(Date.UTC(year, monthIndex, day));
const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;

// Sanity check to make sure the start date hasn't unintentionally changed
// **IT SHOULD NOT CHANGE AFTER RELEASE**
const startDateString = '2025-08-11T00:00:00.000Z';
if (START_DATE.toISOString() !== startDateString) {
  throw new Error(
    `It appears the start date has changed from "${startDateString}".
    Are you sure you want to change that? If you are seeding production,
    you should not change the start date after the daily challenges have been release.
    `
  );
}

const client = new MongoClient(
  MONGOHQ_URL || 'mongodb://127.0.0.1:27017/freecodecamp?directConnection=true'
);

const seed = async () => {
  await client.db('admin').command({ ping: 1 });
  console.log('Successfully connected to mongo');

  const db = client.db('freecodecamp');
  const dailyCodingChallenges = db.collection('DailyCodingChallenges');

  console.log('Fetching challenges...');
  const jsChallenges = await fetchChallenges('javascript');
  const pyChallenges = await fetchChallenges('python');

  if (jsChallenges.length !== pyChallenges.length) {
    throw new Error(
      `Number of challenges do not match: ${jsChallenges.length} JavaScript vs ${pyChallenges.length} Python challenges found`
    );
  }

  if (jsChallenges.length !== EXPECTED_CHALLENGE_COUNT) {
    throw new Error(
      `Expected ${EXPECTED_CHALLENGE_COUNT} challenges, but found ${jsChallenges.length} challenges`
    );
  }

  console.log(`${jsChallenges.length} challenges found for each language`);
  console.log('Creating new challenges...');
  const newChallenges = [];

  for (let i = 0; i < jsChallenges.length; i++) {
    const jsChallenge = jsChallenges[i];
    const pyChallenge = pyChallenges[i];

    const newChallenge = combineChallenges({
      jsChallenge,
      pyChallenge,
      challengeNumber: i + 1,
      date: new Date(START_DATE.getTime() + i * ONE_DAY_IN_MS)
    });

    newChallenges.push(newChallenge);
  }

  console.log('Finished creating new challenges');
  console.log(`Writing ${newChallenges.length} challenges to database...`);

  // Replace if the object exists, create new one if it doesn't
  const bulkOps = newChallenges.map(challenge => ({
    replaceOne: {
      filter: { _id: challenge._id },
      replacement: challenge,
      upsert: true
    }
  }));

  await dailyCodingChallenges.bulkWrite(bulkOps);

  console.log(`Finished writing challenges to database`);

  const count = await dailyCodingChallenges.countDocuments();

  if (count !== EXPECTED_CHALLENGE_COUNT) {
    console.warn(
      '\n********** WARNING *********\n' +
        '*\n' +
        `* Expected ${EXPECTED_CHALLENGE_COUNT} challenges in the database,\n` +
        `* but found ${count} documents\n` +
        '*\n' +
        '********** WARNING *********\n'
    );
  }
};

seed()
  .then(() => client.close())
  .catch(err => handleError(err, client));
