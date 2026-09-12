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

const identityFields = [
  '_id',
  'id',
  'email',
  'username',
  'usernameDisplay',
  'unsubscribeId'
];

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
    const db = client.db('freecodecamp');
    const users = db.collection('user');
    const existingUser = await users.findOne({ email });

    if (!existingUser) {
      throw new Error(`Could not find isolated user with email ${email}.`);
    }

    const { _id: userId, username, unsubscribeId } = existingUser;
    const userUpdates = {
      ..._.omit(presets[preset], identityFields),
      ...overrides
    };

    await users.updateOne({ _id: userId }, { $set: userUpdates });

    if (relations.msUsername) {
      await db.collection('MsUsername').updateOne(
        { userId },
        {
          $set: {
            msUsername: username,
            ttl: 77760000000
          }
        },
        { upsert: true }
      );
    }

    if (relations.completedSurvey) {
      await db.collection('Survey').updateOne(
        { userId },
        {
          $set: {
            title: 'Foundational C# with Microsoft Survey',
            responses: []
          }
        },
        { upsert: true }
      );
    }

    return { unsubscribeId };
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
