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
 * @typedef {{ msUsername?: boolean, completedSurvey?: boolean }} UserRelations
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
 * @param {UserRelations} [relations]
 * @returns {Promise<{ unsubscribeId: string }>}
 */
async function seedIsolatedUser(email, preset, overrides, relations = {}) {
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

    if (relations.msUsername) {
      await client
        .db('freecodecamp')
        .collection('MsUsername')
        .updateOne(
          { userId: existingUser._id },
          {
            $set: {
              msUsername: existingUser.username,
              ttl: 77760000000
            }
          },
          { upsert: true }
        );
    }

    if (relations.completedSurvey) {
      await client
        .db('freecodecamp')
        .collection('Survey')
        .updateOne(
          { userId: existingUser._id },
          {
            $set: {
              title: 'Foundational C# with Microsoft Survey',
              responses: []
            }
          },
          { upsert: true }
        );
    }

    return { unsubscribeId: existingUser.unsubscribeId };
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
    const userId =
      'id' in identifier
        ? new ObjectId(identifier.id)
        : (
            await db
              .collection('user')
              .findOne({ email: identifier.email }, { projection: { _id: 1 } })
          )?._id;

    if (!userId) return;

    await Promise.all(
      ['UserToken', 'AuthToken', 'MsUsername', 'Survey', 'DripCampaign'].map(
        collection => db.collection(collection).deleteMany({ userId })
      )
    );
    await db.collection('user').deleteOne({ _id: userId });
  } finally {
    await client.close();
  }
}

module.exports = { seedIsolatedUser, removeIsolatedUser };
