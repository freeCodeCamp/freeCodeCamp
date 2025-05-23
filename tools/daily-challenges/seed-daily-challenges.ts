/*
  Script to seed daily challenges to freeCodeCamp database, DailyCodingChallenges collection.
  It gets the daily challenge data from the dev-playground superblock using GraphQL.
  The main client needs to be running with upcoming changes shown to get the info from GraphQL.
  Run the curriculum tests on the dev-playground superblock before seeding to make sure they pass.
  TODO: Add some more validation before seeding - e.g: does the correct number of cdallenges exist,
  do the tests pass, is the data the right shape, etc.
*/

import 'dotenv/config';
import { MongoClient } from 'mongodb';
import { fetchChallenge, handleError } from './helpers';

const { MONGOHQ_URL } = process.env;

// Total number of challenges in the dev-playground superblock
const NUMBER_OF_CHALLENGES = 24;

// Date to set for the first challenge, second challenge will be one day later, etc...
// **DO NOT CHANGE THIS AFTER RELEASE**
const year = 2025;
const monthIndex = 4; // 0-indexed -> 4 = May
const day = 23;
const START_DATE = new Date(Date.UTC(year, monthIndex, day)); // Month is 0-indexed, so 3 = April
const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;

if (START_DATE.toISOString() !== '2025-05-23T00:00:00.000Z') {
  throw Error(
    `It appears the start date has changed from "2025-05-23T00:00:00.000Z".
    Are you sure you want to change that? If you are seeing production,
    you should not change the start date after the daily challenges have been release.
    `
  );
}

const client = new MongoClient(
  MONGOHQ_URL || 'mongodb://127.0.0.1:27017/freecodecamp?directConnection=true'
);

const seed = async () => {
  await client.db('admin').command({ ping: 1 });
  console.log('Connected successfully to mongo');

  const db = client.db('freecodecamp');
  const dailyCodingChallenges = db.collection('DailyCodingChallenges');

  const allChallenges = [];

  for (
    let challengeNumber = 1;
    challengeNumber <= NUMBER_OF_CHALLENGES;
    challengeNumber++
  ) {
    const date = new Date(
      START_DATE.getTime() + (challengeNumber - 1) * ONE_DAY_IN_MS
    );
    const challenge = await fetchChallenge(challengeNumber, date);

    if (!challenge) {
      throw Error(
        `Failed to create challenge for challenge number ${challengeNumber}`
      );
    }

    allChallenges.push(challenge);
  }

  console.log(
    `${allChallenges.length} challenges fetched, writing to database...`
  );

  // Replace if the object exists, create new one if it doesn't
  const bulkOps = allChallenges.map(challenge => ({
    replaceOne: {
      filter: { _id: challenge._id },
      replacement: challenge,
      upsert: true
    }
  }));

  await dailyCodingChallenges.bulkWrite(bulkOps);

  console.log(`Finished writing challenges to database.`);
};

seed()
  .then(() => client.close())
  .catch(err => handleError(err, client));
