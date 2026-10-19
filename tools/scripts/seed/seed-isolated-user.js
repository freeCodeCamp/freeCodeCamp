const path = require('path');
const { MongoClient } = require('mongodb');
const _ = require('lodash');

require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });
const {
  demoUser,
  fullyCertifiedUser,
  almostFullyCertifiedUser,
  unclaimedUser
} = require('./user-data');

/**
 * @typedef {'new' | 'development' | 'certified' | 'certified-with-survey' | 'almost-certified' | 'unclaimed'} UserPreset
 */

const testUserData = {
  new: {},
  development: demoUser,
  certified: fullyCertifiedUser,
  'certified-with-survey': fullyCertifiedUser,
  'almost-certified': almostFullyCertifiedUser,
  unclaimed: unclaimedUser
};

/**
 * Apply a preset to an existing isolated account, preserving its identity unless
 * explicitly overridden.
 *
 * @param {string} email
 * @param {UserPreset} preset
 * @param {Record<string, boolean>} overrides
 * @returns {Promise<void>}
 */
async function seedIsolatedUser(email, preset, overrides) {
  const client = new MongoClient(process.env.MONGOHQ_URL);

  try {
    const user = client.db('freecodecamp').collection('user');
    const existingUser = await user.findOne({ email });

    if (!existingUser) {
      throw new Error(`Could not find isolated user with email ${email}.`);
    }

    const seed = {
      ..._.omit(testUserData[preset], [
        '_id',
        'id',
        'email',
        'username',
        'usernameDisplay',
        'unsubscribeId'
      ]),
      ...overrides
    };

    await user.updateOne({ _id: existingUser._id }, { $set: seed });

    if (preset === 'certified-with-survey') {
      await client.db('freecodecamp').collection('Survey').insertOne({
        userId: existingUser._id,
        title: 'Foundational C# with Microsoft Survey',
        responses: []
      });
    }
  } finally {
    await client.close();
  }
}

/**
 * @param {string} email
 * @returns {Promise<string>}
 */
async function getUnsubscribeId(email) {
  const client = new MongoClient(process.env.MONGOHQ_URL);
  try {
    const user = await client
      .db('freecodecamp')
      .collection('user')
      .findOne({ email });
    if (typeof user?.unsubscribeId !== 'string') {
      throw new Error(`Could not find an unsubscribe ID for ${email}.`);
    }
    return user.unsubscribeId;
  } finally {
    await client.close();
  }
}

/** @param {string} email */
async function seedMsUsername(email) {
  const client = new MongoClient(process.env.MONGOHQ_URL);
  try {
    const db = client.db('freecodecamp');
    const user = await db.collection('user').findOne({ email });
    if (!user)
      throw new Error(`Could not find isolated user with email ${email}.`);

    await db
      .collection('MsUsername')
      .updateOne(
        { userId: user._id },
        { $set: { msUsername: user.username, ttl: 77760000000 } },
        { upsert: true }
      );
  } finally {
    await client.close();
  }
}

module.exports = {
  seedIsolatedUser,
  getUnsubscribeId,
  seedMsUsername
};
