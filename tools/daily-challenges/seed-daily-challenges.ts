/*
  Script to seed daily challenges to freeCodeCamp database, DailyCodingChallenges collection.
  It gets the daily challenge data from the dev-playground superblock using GraphQL.
  The main client needs to be running with upcoming changes shown to get the info from GraphQL.
*/

import 'dotenv/config';
import { MongoClient } from 'mongodb';
import { fetchChallenge } from './fetch-challenge';

const { MONGOHQ_URL } = process.env;

const NUMBER_OF_CHALLENGES = 2;

function handleError(err: Error, client: MongoClient) {
  if (err) {
    console.error('Oh noes!! Error seeding Daily Challenges.');
    console.error(err);
    try {
      client.close();
    } catch {
      // no-op
    } finally {
      process.exit(1);
    }
  }
}

const client = new MongoClient(
  MONGOHQ_URL || 'mongodb://127.0.0.1:27017/freecodecamp?directConnection=true'
);

const run = async () => {
  await client.db('admin').command({ ping: 1 });
  console.log('Connected successfully to mongo');

  const db = client.db('test');
  const dailyCodingChallenges = db.collection('DailyCodingChallenges');

  const allChallenges = [];

  for (
    let challengeNumber = 1;
    challengeNumber <= NUMBER_OF_CHALLENGES;
    challengeNumber++
  ) {
    const challenge = await fetchChallenge(challengeNumber);

    if (!challenge) {
      throw Error(
        `Failed to create challenge for challenge number ${challengeNumber}`
      );
    }
    allChallenges.push(challenge);
  }

  console.log(allChallenges);

  // Replace if the object exists, create new one if it doesn't
  const bulkOps = allChallenges.map(challenge => ({
    replaceOne: {
      filter: { _id: challenge._id },
      replacement: challenge,
      upsert: true
    }
  }));

  await dailyCodingChallenges.bulkWrite(bulkOps);
};

run()
  .then(() => client.close())
  .catch(err => handleError(err, client));
