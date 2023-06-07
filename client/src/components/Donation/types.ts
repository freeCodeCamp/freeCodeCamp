import type { Token, PaymentIntentResult } from '@stripe/stripe-js';

export type PaymentContext = 'modal' | 'donate page' | 'certificate';
export type PaymentProvider = 'patreon' | 'paypal' | 'stripe' | 'stripe card';

export type HandleAuthentication = (
  clientSecret: string,
  paymentMethod: string
) => Promise<PaymentIntentResult | { error: { type: string } }>;

export type DonationAmount = 500 | 1000 | 2000 | 3000 | 4000 | 5000;
export type DonationDuration = 'one-time' | 'month';
export interface DonationConfig {
  donationAmount: DonationAmount;
  donationDuration: DonationDuration;
}

export interface PostPayment {
  paymentProvider: PaymentProvider;
  data?: DonationApprovalData;
  token?: Token;
  payerEmail?: string | undefined;
  payerName?: string | undefined;
  paymentMethodId?: string;
  handleAuthentication?: HandleAuthentication;
}

export interface DonationApprovalData {
  redirecting: boolean;
  processing: boolean;
  success: boolean;
  error: string | null;
  loading?: {
    stripe: boolean;
    paypal: boolean;
  };
}
