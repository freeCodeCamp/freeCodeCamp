// Configuration for client side
const durationsConfig = {
  year: 'yearly',
  month: 'monthly',
  onetime: 'one-time'
};
const amountsConfig = {
  year: [100000, 25000, 6000],
  month: [25000, 3500, 500],
  onetime: [100000, 25000, 6000]
};
const defaultAmount = {
  year: 25000,
  month: 500,
  onetime: 25000
};
const defaultDonation = {
  donationAmount: defaultAmount['month'],
  donationDuration: 'month'
};
const modalDefaultDonation = {
  donationAmount: 500,
  donationDuration: 'month'
};

const onetimeSKUConfig = {
  live: [
    { amount: '100000', id: 'sku_GwHogRRJrCYGms' },
    { amount: '25000', id: 'sku_GwHnCde23uDH5R' },
    { amount: '6000', id: 'sku_H5mjFgpayAzJzT' }
  ],
  staging: [
    { amount: '100000', id: 'sku_GvAeUdWLsmGO9O' },
    { amount: '25000', id: 'sku_GvAdXbsotjFi7G' },
    { amount: '6000', id: 'sku_GvAeJDgwjnGAdy' }
  ]
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
    month: [25000, 3500, 500]
  }
};

// Shared paypal configuration
const paypalConfigTypes = {
  live: {
    month: {
      '500': {
        planId: 'P-1L11422374370240ULZKX3PA'
      },
      '3500': {
        planId: 'P-81U00703FF076883HLZ2PWMI'
      },
      '25000': {
        planId: 'P-7M045671FN915794KLZ2PW6I'
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
      },
      '3500': {
        planId: 'P-3E678937P5715503NLZZTRVY'
      },
      '25000': {
        planId: 'P-97K80194AU368022JLZ2Q27Y'
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

const paypalConfigurator = (donationAmount, donationDuration, paypalConfig) => {
  if (donationDuration === 'onetime') {
    return { amount: donationAmount, duration: donationDuration };
  }
  return {
    amount: donationAmount,
    duration: donationDuration,
    planId: paypalConfig[donationDuration]['' + donationAmount].planId
  };
};

//
const donationUrls = {
  successUrl: 'https://www.freecodecamp.org/news/thank-you-for-donating/',
  cancelUrl: 'https://freecodecamp.org/donate'
};

module.exports = {
  durationsConfig,
  amountsConfig,
  defaultAmount,
  defaultDonation,
  durationKeysConfig,
  donationOneTimeConfig,
  donationSubscriptionConfig,
  modalDefaultDonation,
  onetimeSKUConfig,
  paypalConfigTypes,
  paypalConfigurator,
  donationUrls
};
