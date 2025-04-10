const path = require('path');
const debug = require('debug');
const { MongoClient, ObjectId } = require('mongodb');

const { userIds } = require('./user-data');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

const args = process.argv.slice(2);

const allowedArgs = ['delete-only'];

// Check for invalid arguments
args.forEach(arg => {
  if (!allowedArgs.includes(arg))
    throw new Error(
      `Invalid argument ${arg}. Allowed arguments are ${allowedArgs.join(', ')}`
    );
});

const log = debug('fcc:tools:seedSurveyInfo');
const { MONGOHQ_URL } = process.env;

function handleError(err, client) {
  if (err) {
    console.error('Oh noes!! Error seeding survey info.');
    console.error(err);
    try {
      client.close();
    } catch (e) {
      // no-op
    } finally {
      process.exit(1);
    }
  }
}

const surveyIds = [
  new ObjectId('651c5a2a5f9b639b584028bc'),
  new ObjectId('651c5a4c5f9b639b584028bd')
];

const defaultUserSurvey = {
  _id: surveyIds[0],
  title: 'Foundational C# with Microsoft Survey',
  responses: [
    {
      question: 'Please describe your role:',
      response: 'Beginner developer (less than 2 years experience)'
    },
    {
      question:
        'Prior to this course, how experienced were you with .NET and C#?',
      response: 'Novice (no prior experience)'
    }
  ],
  userId: new ObjectId('5bd30e0f1caf6ac3ddddddb5')
};

const certifiedUserSurvey = {
  _id: surveyIds[1],
  title: 'Foundational C# with Microsoft Survey',
  responses: [
    {
      question: 'Please describe your role:',
      response: 'Experienced developer (more than 5 years experience)'
    },
    {
      question:
        'Prior to this course, how experienced were you with .NET and C#?',
      response: 'Expert'
    }
  ],
  userId: new ObjectId('5fa2db00a25c1c1fa49ce067')
};

const client = new MongoClient(MONGOHQ_URL);

const run = async () => {
  await client.db('admin').command({ ping: 1 });
  log('Connected successfully to mongo');

  const db = client.db('freecodecamp');
  const survey = db.collection('Survey');

  await survey.deleteMany({ userId: { $in: userIds } });
  log('Survey info deleted');

  if (!args.includes('delete-only')) {
    await survey.insertOne(defaultUserSurvey);
    await survey.insertOne(certifiedUserSurvey);
    log('Survey info seeded');
  }
};

run()
  .then(() => client.close())
  .catch(err => handleError(err, client));
