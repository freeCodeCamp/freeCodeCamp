// Configuration for client side

export type DonationAmount = 500 | 1000 | 2000 | 4000;
export type DonationDuration = 'one-time' | 'month';
export interface DonationConfig {
  donationAmount: DonationAmount;
  donationDuration: DonationDuration;
}

export const subscriptionAmounts: DonationAmount[] = [500, 1000, 2000, 4000];

export const defaultDonation: DonationConfig = {
  donationAmount: 500,
  donationDuration: 'month'
};

export const defaultTierAmount: DonationAmount = 2000;

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
    month: 'monthly'
  },
  plans: {
    month: subscriptionAmounts
  }
};

// Shared paypal configuration
// keep the 5 dollars for the modal
export const paypalConfigTypes = {
  live: {
    month: {
      500: { planId: 'P-6B636789V3105190KMTJFH7A' },
      1000: { planId: 'P-53P76823N8780520DMVTWF3I' },
      2000: { planId: 'P-8HY47434FB9663500MVTWFOA' },
      3000: { planId: 'P-1KY930839N8045117L6E4BKY' },
      4000: { planId: 'P-0MH28916302828423MVTWEBI' },
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

const stripeProductIds = {
  live: {
    month: {
      500: 'prod_Cc9bIxB2NvjpLy',
      1000: 'prod_BuiSxWk7jGSFlJ',
      2000: 'prod_IElpZVK7kOn6Fe',
      4000: 'prod_IElq1foW39g3Cx'
    }
  },
  staging: {
    month: {
      500: 'prod_GD1GGbJsqQaupl',
      1000: 'prod_GD1IzNEXfSCGgy',
      2000: 'prod_IEkNp8M03xvsuB',
      4000: 'prod_IEkPebxS63mVbs'
    }
  }
};

export const allStripeProductIdsArray = [
  ...Object.values(stripeProductIds['live']['month']),
  ...Object.values(stripeProductIds['staging']['month'])
];
