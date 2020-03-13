// Configuration for client side
const durationsConfig = {
  year: 'yearly',
  month: 'monthly',
  onetime: 'one-time'
};
const amountsConfig = {
  year: [100000, 25000, 3500],
  month: [5000, 3500, 500],
  onetime: [100000, 25000, 3500]
};
const defaultAmount = {
  year: 25000,
  month: 3500,
  onetime: 25000
};
const defaultStateConfig = {
  donationAmount: defaultAmount['month'],
  donationDuration: 'month',
  paymentType: 'Card'
};
const modalDefaultStateConfig = {
  donationAmount: 500,
  donationDuration: 'month',
  paymentType: 'Card'
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
const paypalConfig = {
  production: {
    webhookId: '8AM40465WC915574A',
    durationPlans: {
      month: {
        '500': {
          planId: 'P-1L11422374370240ULZKX3PA'
        }
      }
    }
  },
  development: {
    webhookId: '2UL63757DN298592C',
    durationPlans: {
      month: {
        '500': {
          planId: 'P-146249205C631091BLZKRHGA'
        }
      }
    }
  }
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
  paypalConfig
};
