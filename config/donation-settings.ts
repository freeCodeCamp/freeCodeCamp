// Configuration for client side
import { DonationConfig } from '../client/src/components/Donation/types';

export const durationsConfig: {
  month: 'monthly';
  onetime: 'one-time';
} = {
  month: 'monthly',
  onetime: 'one-time'
};

export const amountsConfig = {
  month: [1000, 2000, 3000, 4000, 5000],
  onetime: [2500, 5000, 7500, 10000, 15000]
};
export const defaultAmount: { month: 500; onetime: 7500 } = {
  month: 500,
  onetime: 7500
};
export const defaultDonation: DonationConfig = {
  donationAmount: defaultAmount.month,
  donationDuration: 'month'
};
export const modalDefaultDonation: DonationConfig = {
  donationAmount: 500,
  donationDuration: 'month'
};

export const onetimeSKUConfig = {
  live: [
    { amount: '15000', id: 'sku_IElisJHup0nojP' },
    { amount: '10000', id: 'sku_IEliodY88lglPk' },
    { amount: '7500', id: 'sku_IEli9AXW8DwNtT' },
    { amount: '5000', id: 'sku_IElhJxkNh9UgDp' },
    { amount: '2500', id: 'sku_IElhQtqLgKZC8y' }
  ],
  staging: [
    { amount: '15000', id: 'sku_IEPNpHACYJmUwz' },
    { amount: '10000', id: 'sku_IEPMY1OXxnY4WU' },
    { amount: '7500', id: 'sku_IEPLOotEqlMOWC' },
    { amount: '5000', id: 'sku_IEPKAxxAxfMnUI' },
    { amount: '2500', id: 'sku_IEPIgLRzViwq5z' }
  ]
};

// Configuration for server side
export const durationKeysConfig = ['month', 'one-time'];
export const donationOneTimeConfig = [100000, 25000, 6000];
export const donationSubscriptionConfig = {
  duration: {
    month: 'Monthly'
  },
  plans: {
    month: [25000, 3500, 500]
  }
};

// Shared paypal configuration
// keep the 5 dollars for the modal
export const paypalConfigTypes = {
  live: {
    month: {
      500: { planId: 'P-1L11422374370240ULZKX3PA' },
      1000: { planId: 'P-61K21421WY874920PL6E36YI' },
      2000: { planId: 'P-31999436LF709112VL6E374A' },
      3000: { planId: 'P-1KY930839N8045117L6E4BKY' },
      4000: { planId: 'P-0JW4843250567551AL6E4CAI' },
      5000: { planId: 'P-0WR49877YD949401BL6E4CTA' }
    }
  },
  staging: {
    month: {
      500: { planId: 'P-37N14480BW163382FLZYPVMA' },
      1000: { planId: 'P-28B62039J8092810UL6E3FXA' },
      2000: { planId: 'P-7HR706961M9170433L6HI5VI' },
      3000: { planId: 'P-35V33574BU596924JL6HI6XY' },
      4000: { planId: 'P-45M45060289267734L6HJSXA' },
      5000: { planId: 'P-0MD70861FY4172444L6HJTUQ' }
    }
  }
};

type DonationAmount = 500 | 1000 | 2000 | 3000 | 4000 | 5000;

interface OneTimeConfig {
  amount: DonationAmount;
  duration: 'one-time';
  planId: null;
}

interface SubscriptionConfig {
  amount: DonationAmount;
  duration: 'month';
  planId: string;
}

export const paypalConfigurator = (
  donationAmount: DonationAmount,
  donationDuration: 'one-time' | 'month',
  paypalConfig: {
    month: {
      500: { planId: string };
      1000: { planId: string };
      2000: { planId: string };
      3000: { planId: string };
      4000: { planId: string };
      5000: { planId: string };
    };
  }
): OneTimeConfig | SubscriptionConfig => {
  if (donationDuration === 'one-time') {
    return { amount: donationAmount, duration: donationDuration, planId: null };
  }
  return {
    amount: donationAmount,
    duration: donationDuration,
    planId: paypalConfig[donationDuration][donationAmount].planId
  };
};

export const donationUrls = {
  successUrl: 'https://www.freecodecamp.org/news/thank-you-for-donating/',
  cancelUrl: 'https://freecodecamp.org/donate'
};

export const patreonDefaultPledgeAmount = 500;

export const aBTestConfig = {
  isTesting: true,
  type: 'secureIconButtonOnly'
};

export enum PaymentContext {
  Modal = 'modal',
  DonatePage = 'donate page',
  Certificate = 'certificate'
}

export enum PaymentProvider {
  Paypal = 'paypal',
  Patreon = 'patreon',
  Stripe = 'stripe',
  StripeCard = 'stripe card'
}
