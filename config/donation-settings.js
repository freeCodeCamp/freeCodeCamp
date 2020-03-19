const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

// Configuration for client side
const durationsConfig = {
  year: 'yearly',
  // month: 'monthly',
  onetime: 'one-time'
};
const amountsConfig = {
  year: [100000, 25000, 6000],
  // month: [5000, 3500, 500],
  onetime: [100000, 25000, 3500]
};
const defaultAmount = {
  year: 6000,
  month: 3500,
  onetime: 25000
};
const defaultStateConfig = {
  donationAmount: defaultAmount['year'],
  donationDuration: 'year'
};
const modalDefaultStateConfig = {
  donationAmount: 6000,
  donationDuration: 'year'
};

// Configuration for server side
const durationKeysConfig = ['year', 'month', 'onetime'];
const donationOneTimeConfig = [100000, 25000, 3500];
const donationSubscriptionConfig = {
  duration: {
    year: 'Yearly',
    month: 'Monthly'
  },
  plans: {
    year: [100000, 25000, 3500],
    month: [5000, 3500, 500]
  }
};

// Shared paypal configuration
const paypalConfigTypes = {
  live: {
    durationPlans: {
      month: {
        '500': {
          planId: 'P-1L11422374370240ULZKX3PA'
        }
      }
    }
  },
  staging: {
    durationPlans: {
      month: {
        '500': {
          planId: 'P-37N14480BW163382FLZYPVMA'
        }
      },
      year: {
        '6000': {
          planId: 'P-0UY77185EM3077131LZYP6VY'
        }
      }
    }
  }
};

const paypalConfig =
  process.env.DEPLOYMENT_ENV && process.env.DEPLOYMENT_ENV === 'live'
    ? paypalConfigTypes['live']
    : paypalConfigTypes['staging'];

module.exports = {
  durationsConfig,
  amountsConfig,
  defaultAmount,
  defaultStateConfig,
  durationKeysConfig,
  donationOneTimeConfig,
  donationSubscriptionConfig,
  modalDefaultStateConfig,
  paypalConfig
};
