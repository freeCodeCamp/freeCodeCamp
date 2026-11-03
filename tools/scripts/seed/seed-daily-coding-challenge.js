const path = require('path');
const { MongoClient, ObjectId } = require('mongodb');

require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

const { MONGOHQ_URL } = process.env;
const id = '6814d8e1516e86b171929de4';

const dailyCodingChallenge = {
  _id: new ObjectId(id),
  challengeNumber: 1,
  title: 'Vowel Balance',
  date: new Date('2025-08-11T00:00:00.000Z'),
  description:
    'Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.',
  javascript: {
    tests: [
      {
        text: 'isBalanced("racecar") should return true.',
        testString: 'assert.isTrue(isBalanced("racecar"));'
      },
      {
        text: 'isBalanced("Lorem Ipsum") should return true.',
        testString: 'assert.isTrue(isBalanced("Lorem Ipsum"));'
      },
      {
        text: 'isBalanced("Kitty Ipsum") should return false.',
        testString: 'assert.isFalse(isBalanced("Kitty Ipsum"));'
      },
      {
        text: 'isBalanced("string") should return false.',
        testString: 'assert.isFalse(isBalanced("string"));'
      },
      {
        text: 'isBalanced(" ") should return true.',
        testString: 'assert.isTrue(isBalanced(" "));'
      },
      {
        text: 'isBalanced("abcdefghijklmnopqrstuvwxyz") should return false.',
        testString: 'assert.isFalse(isBalanced("abcdefghijklmnopqrstuvwxyz"));'
      },
      {
        text: 'isBalanced("123A#b!E&*456-o.U") should return true.',
        testString: 'assert.isTrue(isBalanced("123A#b!E&*456-o.U"));'
      }
    ],
    challengeFiles: [
      {
        fileKey: 'scriptjs',
        contents: 'function isBalanced(s) {\n\n  return s;\n}'
      }
    ]
  },
  python: {
    tests: [
      {
        text: 'is_balanced("racecar") should return True.',
        testString:
          '({test: () => { runPython(`assert is_balanced("racecar") == True`)}})'
      }
    ],
    challengeFiles: [
      {
        fileKey: 'mainpy',
        contents: 'def is_balanced(s):\n\n    return s'
      }
    ]
  }
};

const client = new MongoClient(
  MONGOHQ_URL ?? 'mongodb://127.0.0.1:27017/freecodecamp?directConnection=true'
);

async function seedDailyCodingChallenge() {
  await client
    .db('freecodecamp')
    .collection('DailyCodingChallenges')
    .replaceOne({ _id: dailyCodingChallenge._id }, dailyCodingChallenge, {
      upsert: true
    });
}

seedDailyCodingChallenge()
  .then(() => client.close())
  .catch(async error => {
    console.error('Could not seed the daily coding challenge.', error);
    await client.close();
    process.exit(1);
  });
