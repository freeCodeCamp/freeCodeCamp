export type DonationAmount = 500 | 1000 | 2000 | 2500 | 4000;
export type DonationDuration = 'one-time' | 'month';
export interface DonationConfig {
    donationAmount: DonationAmount;
    donationDuration: DonationDuration;
}
export declare const subscriptionAmounts: DonationAmount[];
export declare const subscriptionAmountsB: DonationAmount[];
export declare const defaultDonation: DonationConfig;
export declare const defaultTierAmount: DonationAmount;
export declare const defaultTierAmountB: DonationAmount;
export declare const onetimeSKUConfig: {
    production: {
        amount: string;
        id: string;
    }[];
    staging: {
        amount: string;
        id: string;
    }[];
};
export declare const durationKeysConfig: string[];
export declare const donationOneTimeConfig: number[];
export declare const donationSubscriptionConfig: {
    duration: {
        month: string;
    };
    plans: {
        month: DonationAmount[];
    };
};
export declare const paypalConfigTypes: {
    production: {
        month: {
            500: {
                planId: string;
            };
            1000: {
                planId: string;
            };
            2000: {
                planId: string;
            };
            2500: {
                planId: string;
            };
            3000: {
                planId: string;
            };
            4000: {
                planId: string;
            };
            5000: {
                planId: string;
            };
        };
    };
    staging: {
        month: {
            500: {
                planId: string;
            };
            1000: {
                planId: string;
            };
            2000: {
                planId: string;
            };
            2500: {
                planId: string;
            };
            3000: {
                planId: string;
            };
            4000: {
                planId: string;
            };
            5000: {
                planId: string;
            };
        };
    };
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
export declare const paypalConfigurator: (donationAmount: DonationAmount, donationDuration: "one-time" | "month", paypalConfig: {
    month: {
        500: {
            planId: string;
        };
        1000: {
            planId: string;
        };
        2000: {
            planId: string;
        };
        2500: {
            planId: string;
        };
        3000: {
            planId: string;
        };
        4000: {
            planId: string;
        };
        5000: {
            planId: string;
        };
    };
}) => OneTimeConfig | SubscriptionConfig;
export declare const donationUrls: {
    successUrl: string;
    cancelUrl: string;
};
export declare enum PaymentContext {
    Modal = "modal",
    DonatePage = "donate page",
    Certificate = "certificate"
}
export declare enum PaymentProvider {
    Paypal = "paypal",
    Patreon = "patreon",
    Stripe = "stripe",
    StripeCard = "stripe card"
}
export declare const allStripeProductIdsArray: string[];
export {};
