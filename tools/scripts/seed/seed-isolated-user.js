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

module.exports = { seedIsolatedUser };
