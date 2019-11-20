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

module.exports = {
  durationsConfig,
  amountsConfig,
  defaultAmount,
  defaultStateConfig,
  durationKeysConfig,
  donationOneTimeConfig,
  donationSubscriptionConfig
};
