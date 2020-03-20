const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

// Configuration for client side
const durationsConfig = {
  year: 'yearly',
  // month: 'monthly', // We have disabled montly payments
  onetime: 'one-time'
};
const amountsConfig = {
  year: [100000, 25000, 6000],
  month: [5000, 3500, 500],
  onetime: [100000, 25000, 6000]
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
const donationOneTimeConfig = [100000, 25000, 6000];
const donationSubscriptionConfig = {
  duration: {
    year: 'Yearly',
    month: 'Monthly'
  },
  plans: {
    year: [100000, 25000, 6000],
    month: [5000, 3500, 500]
  }
};

// Shared paypal configuration
const paypalConfigTypes = {
  live: {
    month: {
      '500': {
        planId: 'P-1L11422374370240ULZKX3PA'
      }
    },
    year: {
      '6000': {
        planId: 'P-9Y661558DW462253NLZZ2IMQ'
      },
      '25000': {
        planId: 'P-3NN39392MK1889318LZZ2KQY'
      },
      '100000': {
        planId: 'P-7YN43286C4599382LLZZ2JUI'
      }
    }
  },
  staging: {
    month: {
      '500': {
        planId: 'P-37N14480BW163382FLZYPVMA'
      }
    },
    year: {
      '6000': {
        planId: 'P-0UY77185EM3077131LZYP6VY'
      },
      '25000': {
        planId: 'P-7K1585908S634694XLZZTHUQ'
      },
      '100000': {
        planId: 'P-0J5231134H608574XLZZTDLQ'
      }
    }
  }
};

const paypalConfig =
  process.env.DEPLOYMENT_ENV && process.env.DEPLOYMENT_ENV === 'live'
    ? paypalConfigTypes['live']
    : paypalConfigTypes['staging'];

const paypalConfigurator = (donationAmount, donationDuration) => {
  if (donationDuration === 'onetime') {
    return { amount: donationAmount, duration: donationDuration };
  }
  return {
    amount: donationAmount,
    duration: donationDuration,
    planId: paypalConfig[donationDuration]['' + donationAmount].planId
  };
};

module.exports = {
  durationsConfig,
  amountsConfig,
  defaultAmount,
  defaultStateConfig,
  durationKeysConfig,
  donationOneTimeConfig,
  donationSubscriptionConfig,
  modalDefaultStateConfig,
  paypalConfig,
  paypalConfigurator
};
