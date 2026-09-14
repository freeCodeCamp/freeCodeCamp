const path = require('path');
const { MongoClient, ObjectId } = require('mongodb');
const _ = require('lodash');

require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });
const {
  demoUser,
  fullyCertifiedUser,
  almostFullyCertifiedUser,
  unclaimedUser
} = require('./user-data');

/**
 * @typedef {'new' | 'development' | 'certified' | 'almost-certified' | 'unclaimed'} UserPreset
 */

const presets = {
  new: {},
  development: demoUser,
  certified: fullyCertifiedUser,
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
      ..._.omit(presets[preset], [
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
  } finally {
    await client.close();
  }
}

/**
 * Clean up by immutable ID, including after a test renames or deletes its user.
 * Fall back to email only when setup failed before obtaining the ID.
 *
 * @param {{ id: string } | { email: string }} identifier
 * @returns {Promise<void>}
 */
async function removeIsolatedUser(identifier) {
  const client = new MongoClient(process.env.MONGOHQ_URL);

  try {
    const db = client.db('freecodecamp');
    const users = db.collection('user');
    let userId;

    if ('id' in identifier) {
      userId = new ObjectId(identifier.id);
    } else {
      const existingUser = await users.findOne(
        { email: identifier.email },
        { projection: { _id: 1 } }
      );
      userId = existingUser?._id;
    }

    if (!userId) return;

    const relatedCollections = [
      'UserToken',
      'AuthToken',
      'MsUsername',
      'Survey',
      'DripCampaign'
    ];

    await Promise.all(
      relatedCollections.map(collection =>
        db.collection(collection).deleteMany({ userId })
      )
    );
    await users.deleteOne({ _id: userId });
  } finally {
    await client.close();
  }
}

module.exports = { seedIsolatedUser, removeIsolatedUser };
