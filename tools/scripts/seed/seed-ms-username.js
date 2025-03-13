const path = require('path');
const debug = require('debug');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

const log = debug('fcc:tools:seedMsUsername');
const { MONGOHQ_URL } = process.env;

const args = process.argv.slice(2);

const allowedArgs = ['--delete-only'];

// Check for invalid arguments
args.forEach(arg => {
  if (!allowedArgs.includes(arg))
    throw new Error(
      `Invalid argument ${arg}. Allowed arguments are ${allowedArgs.join(', ')}`
    );
});

function handleError(err, client) {
  if (err) {
    console.error('Oh noes!! Error seeding MS username.');
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

const msAccountId = new ObjectId('65785b25d4c5bd0565c0184d');

const certifiedUserAccount = {
  _id: msAccountId,
  userId: new ObjectId('5fa2db00a25c1c1fa49ce067'),
  ttl: 77760000000,
  msUsername: 'certifieduser'
};

const client = new MongoClient(MONGOHQ_URL);

const run = async () => {
  await client.db('admin').command({ ping: 1 });
  log('Connected successfully to mongo');

  const db = client.db('freecodecamp');
  const msUsername = db.collection('MsUsername');
  if (args.includes('--delete-only')) {
    await msUsername.deleteOne({
      _id: { $eq: msAccountId }
    });

    log('MS username deleted');
    return;
  }

  // Rewrite if the object exists, create new if it doesn't
  await msUsername.updateOne(
    { _id: msAccountId },
    { $set: certifiedUserAccount },
    { upsert: true }
  );

  log('MS username seeded');
};

run()
  .then(() => client.close())
  .catch(err => handleError(err, client));
