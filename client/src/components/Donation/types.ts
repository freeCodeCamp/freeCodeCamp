import type { PaymentIntentResult } from '@stripe/stripe-js';

export type PaymentContext = 'modal' | 'donate page' | 'certificate';
export type PaymentProvider = 'patreon' | 'paypal' | 'stripe' | 'stripe card';

export type HandleAuthentication = (
  clientSecret: string,
  paymentMethod: string
) => Promise<PaymentIntentResult | { error: { type: string } }>;

export interface PostPayment {
  paymentProvider: PaymentProvider;
  data?: DonationApprovalData;
  payerEmail?: string | undefined;
  payerName?: string | undefined;
  paymentMethodId?: string;
  handleAuthentication?: HandleAuthentication;
  subscriptionId?: string;
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
