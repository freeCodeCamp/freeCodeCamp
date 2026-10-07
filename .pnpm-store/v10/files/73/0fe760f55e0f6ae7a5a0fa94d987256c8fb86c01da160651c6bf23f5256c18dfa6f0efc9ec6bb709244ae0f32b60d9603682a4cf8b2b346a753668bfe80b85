import {
  StripeIdealBankElement,
  StripeIbanElement,
  StripeP24BankElement,
  StripeEpsBankElement,
  StripeFpxBankElement,
  StripeCardCvcElement,
  StripeCardNumberElement,
  StripeCardElement,
  StripeAuBankAccountElement,
} from './elements';
import {PaymentMethodCreateParams, PaymentIntentConfirmParams} from '../api';
import {Omit} from '../utils';

export type CreatePaymentMethodData =
  | CreatePaymentMethodAcssDebitData
  | CreatePaymentMethodAffirmData
  | CreatePaymentMethodAfterpayClearpayData
  | CreatePaymentMethodAlipayData
  | CreatePaymentMethodAuBecsDebitData
  | CreatePaymentMethodBacsDebitData
  | CreatePaymentMethodBancontactData
  | CreatePaymentMethodBlikData
  | CreatePaymentMethodBoletoData
  | CreatePaymentMethodCardData
  | CreatePaymentMethodCashappData
  | CreatePaymentMethodCustomerBalanceData
  | CreatePaymentMethodEpsData
  | CreatePaymentMethodGiropayData
  | CreatePaymentMethodGrabPayData
  | CreatePaymentMethodIdealData
  | CreatePaymentMethodKlarnaData
  | CreatePaymentMethodKonbiniData
  | CreatePaymentMethodP24Data
  | CreatePaymentMethodPayPalData
  | CreatePaymentMethodPayNowData
  | CreatePaymentMethodPixData
  | CreatePaymentMethodPromptPayData
  | CreatePaymentMethodFpxData
  | CreatePaymentMethodUsBankAccountData
  | CreatePaymentMethodSepaDebitData
  | CreatePaymentMethodSofortData
  | CreatePaymentMethodWechatPayData;

export {
  CreatePaymentMethodFromElement,
  CreatePaymentMethodFromElements,
} from '../api';

export interface CreatePaymentMethodAlipayData
  extends PaymentMethodCreateParams {
  type: 'alipay';
}

export interface CreatePaymentMethodWechatPayData
  extends PaymentMethodCreateParams {
  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   */
  type: 'wechat_pay';
}

export interface CreatePaymentMethodAffirmData
  extends PaymentMethodCreateParams {
  type: 'affirm';

  /**
   * Can be omitted as there are no Affirm-specific fields.
   */
  affirm?: {}; // eslint-disable-line @typescript-eslint/ban-types
}

export interface CreatePaymentMethodAfterpayClearpayData
  extends PaymentMethodCreateParams {
  type: 'afterpay_clearpay';

  /**
   * Can be omitted as there are no AfterpayClearpay-specific fields.
   */
  afterpay_clearpay?: {}; // eslint-disable-line @typescript-eslint/ban-types
}

export interface CreatePaymentMethodBancontactData
  extends PaymentMethodCreateParams {
  type: 'bancontact';

  /**
   * The customer's billing details.
   * `name` is required.
   *
   * @docs https://stripe.com/docs/api/payment_methods/create#create_payment_method-billing_details
   */
  billing_details: PaymentMethodCreateParams.BillingDetails & {
    name: string;
  };
}

export interface CreatePaymentMethodBlikData extends PaymentMethodCreateParams {
  type: 'blik';

  /**
   * Details about the BLIK pament method. Currently there are no supported child attributes for this field.
   */
  blik?: {}; // eslint-disable-line @typescript-eslint/ban-types
}

export interface CreatePaymentMethodBoletoData
  extends PaymentMethodCreateParams {
  type: 'boleto';

  /**
   * The customer's billing details.
   * `name`, `email`, and full `address` is required.
   *
   * @docs https://stripe.com/docs/api/payment_methods/create#create_payment_method-billing_details
   */
  billing_details: PaymentMethodCreateParams.BillingDetails & {
    email: string;
    name: string;
    address: PaymentMethodCreateParams.BillingDetails.Address & {
      line1: string;
      city: string;
      postal_code: string;
      state: string;
      country: string;
    };
  };

  boleto: {
    tax_id: string;
  };
}

export interface CreatePaymentMethodCardData extends PaymentMethodCreateParams {
  type: 'card';

  card: StripeCardElement | StripeCardNumberElement | {token: string};
}

export interface CreatePaymentMethodCashappData
  extends PaymentMethodCreateParams {
  type: 'cashapp';
}

export interface CreatePaymentMethodCustomerBalanceData
  extends PaymentMethodCreateParams {
  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   */
  customer_balance: Record<string, never>;
}

export interface CreatePaymentMethodEpsData extends PaymentMethodCreateParams {
  type: 'eps';

  /**
   * The customer's billing details.
   * `name` is required.
   *
   * @docs https://stripe.com/docs/api/payment_methods/create#create_payment_method-billing_details
   */
  billing_details: PaymentMethodCreateParams.BillingDetails & {
    name: string;
  };

  eps:
    | StripeEpsBankElement
    | {
        /**
         * The customer's bank
         */
        bank?: string;
      };
}

export interface CreatePaymentMethodFpxData extends PaymentMethodCreateParams {
  type: 'fpx';

  fpx:
    | StripeFpxBankElement
    | {
        /**
         * The customer's bank.
         */
        bank: string;
      };
}

export interface CreatePaymentMethodGiropayData
  extends PaymentMethodCreateParams {
  type: 'giropay';

  /**
   * The customer's billing details.
   * `name` is required.
   *
   * @docs https://stripe.com/docs/api/payment_methods/create#create_payment_method-billing_details
   */
  billing_details: PaymentMethodCreateParams.BillingDetails & {
    name: string;
  };
}

export interface CreatePaymentMethodGrabPayData
  extends PaymentMethodCreateParams {
  type: 'grabpay';

  /**
   * Can be omitted as there are no GrabPay-specific fields.
   */
  grabpay?: {}; // eslint-disable-line @typescript-eslint/ban-types
}

export interface CreatePaymentMethodIdealData
  extends PaymentMethodCreateParams {
  type: 'ideal';

  ideal:
    | StripeIdealBankElement
    | {
        /**
         * The customer's bank.
         */
        bank?: string;
      };
}

export interface CreatePaymentMethodKlarnaData
  extends PaymentMethodCreateParams {
  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   */
  type: 'klarna';

  /**
   * The customer's billing details.
   * `address.country` is required.
   *
   * @docs https://stripe.com/docs/api/payment_methods/create#create_payment_method-billing_details
   */
  billing_details: PaymentMethodCreateParams.BillingDetails & {
    address: PaymentMethodCreateParams.BillingDetails.Address & {
      country: string;
    };
  };
}

export interface CreatePaymentMethodKonbiniData
  extends PaymentMethodCreateParams {
  type: 'konbini';

  /**
   * The customer's billing details.
   * `email` and `name` are required.
   *
   * @docs https://stripe.com/docs/api/payment_methods/create#create_payment_method-billing_details
   */
  billing_details: PaymentMethodCreateParams.BillingDetails & {
    email: string;
    name: string;
  };
}

export interface CreatePaymentMethodOxxoData extends PaymentMethodCreateParams {
  type: 'oxxo';

  /**
   * The customer's billing details.
   * `email` and `name` are required.
   *
   * @docs https://stripe.com/docs/api/payment_methods/create#create_payment_method-billing_details
   */
  billing_details: PaymentMethodCreateParams.BillingDetails & {
    email: string;
    name: string;
  };
}

export interface CreatePaymentMethodP24Data extends PaymentMethodCreateParams {
  type: 'p24';

  /**
   * The customer's billing details.
   * `email` is required.
   *
   * @docs https://stripe.com/docs/api/payment_methods/create#create_payment_method-billing_details
   */
  billing_details: PaymentMethodCreateParams.BillingDetails & {
    email: string;
  };
  p24?:
    | StripeP24BankElement
    | {
        /**
         * The customer's bank.
         */
        bank?: string;
      };
}

export interface CreatePaymentMethodPayNowData
  extends PaymentMethodCreateParams {
  type: 'paynow';
}

export interface CreatePaymentMethodPayPalData
  extends PaymentMethodCreateParams {
  type: 'paypal';
}

export interface CreatePaymentMethodPixData extends PaymentMethodCreateParams {
  type: 'pix';
}

export interface CreatePaymentMethodPromptPayData
  extends PaymentMethodCreateParams {
  type: 'promptpay';
}

export interface CreatePaymentMethodSepaDebitData
  extends PaymentMethodCreateParams {
  type: 'sepa_debit';

  sepa_debit:
    | StripeIbanElement
    | {
        /**
         * An IBAN account number.
         */
        iban: string;
      };

  /**
   * The customer's billing details.
   * `name` and `email` are required.
   *
   * @docs https://stripe.com/docs/api/payment_methods/create#create_payment_method-billing_details
   */
  billing_details: PaymentMethodCreateParams.BillingDetails & {
    name: string;
    email: string;
  };
}

export interface CreatePaymentMethodSofortData
  extends PaymentMethodCreateParams {
  type: 'sofort';

  sofort: {
    /**
     * The country code where customer's bank is located.
     */
    country: string;
  };

  /**
   * The customer's billing details.
   * Required when `setup_future_usage` is set to `off_session`.
   *
   * @docs https://stripe.com/docs/api/payment_methods/create#create_payment_method-billing_details
   */
  billing_details?: PaymentMethodCreateParams.BillingDetails;
}

export interface CreatePaymentMethodAuBecsDebitData
  extends PaymentMethodCreateParams {
  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   */
  type: 'au_becs_debit';

  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   */
  au_becs_debit:
    | StripeAuBankAccountElement
    | {
        /**
         * A BSB number.
         */
        bsb_number: string;

        /**
         * An account number.
         */
        account_number: string;
      };

  /**
   * The customer's billing details.
   * `name` and `email` are required.
   *
   * @docs https://stripe.com/docs/api/payment_methods/create#create_payment_method-billing_details
   */
  billing_details: PaymentMethodCreateParams.BillingDetails & {
    name: string;
    email: string;
  };
}

export interface CreatePaymentMethodBacsDebitData
  extends PaymentMethodCreateParams {
  type: 'bacs_debit';

  bacs_debit: {
    /**
     * A sort code.
     */
    sort_code: string;

    /**
     * An account number.
     */
    account_number: string;
  };

  /**
   * The customer's billing details.
   * `name`, `email`, and `address` are required.
   *
   * @docs https://stripe.com/docs/api/payment_methods/create#create_payment_method-billing_details
   */
  billing_details: PaymentMethodCreateParams.BillingDetails & {
    name: string;
    email: string;
    address: PaymentMethodCreateParams.BillingDetails.Address & {
      line1: string;
      city: string;
      country: string;
      postal_code: string;
    };
  };
}
export interface CreatePaymentMethodAcssDebitData
  extends PaymentMethodCreateParams {
  type: 'acss_debit';

  /**
   * Can be omitted as Stripe will help to collect bank account details and verification.
   * Refer to our [integration guide](https://stripe.com/docs/payments/acss-debit/accept-a-payment) for more details.
   */
  acss_debit?: {
    /**
     * Customer’s bank account number.
     */
    account_number: string;

    /**
     * Institution number of the customer’s bank.
     */
    institution_number: string;

    /**
     * Transit number of the customer’s bank.
     */
    transit_number: string;
  };

  /**
   * The customer's billing details.
   * `name`, `email`, and `address` are required.
   *
   * @docs https://stripe.com/docs/api/payment_methods/create#create_payment_method-billing_details
   */
  billing_details: PaymentMethodCreateParams.BillingDetails;
}

export interface CreatePaymentMethodUsBankAccountData
  extends PaymentMethodCreateParams {
  type: 'us_bank_account';

  /**
   * Can be omitted as Stripe will help to collect bank account details and verification.
   * Refer to our [integration guide](https://stripe.com/docs/payments/acss-debit/accept-a-payment) for more details.
   */
  us_bank_account: {
    /**
     * Customer’s bank account number.
     */
    account_number: string;

    /**
     * The routing transit number for the bank account.
     */
    routing_number: string;

    /**
     * The type of entity that holds the account. This can be either `individual` or `company`.
     */
    account_holder_type: string;

    /**
     * Account type: checkings or savings. Defaults to checking if omitted.
     */
    account_type?: string;
  };

  /**
   * The customer's billing details.
   * `name`, `email`, and `address` are required.
   *
   * @docs https://stripe.com/docs/api/payment_methods/create#create_payment_method-billing_details
   */
  billing_details: PaymentMethodCreateParams.BillingDetails;
}

export interface CollectBankAccountParams {
  /**
   * The payment method type for the bank account details (e.g. `us_bank_account`)
   */
  payment_method_type: string;
  /**
   * Payment method specific data to be sent with the request (billing details)
   */
  payment_method_data: CollectBankAccountPaymentMethodData;
}

export interface CollectBankAccountPaymentMethodData {
  /**
   * The customer's billing details.
   * `name`, `email`, and `address` are required.
   *
   * @docs https://stripe.com/docs/api/payment_methods/create#create_payment_method-billing_details
   */
  billing_details: PaymentMethodCreateParams.BillingDetails;
}

/**
 * Data to be sent with a `stripe.confirmBancontactPayment` request.
 * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
 */
export interface ConfirmBancontactPaymentData
  extends PaymentIntentConfirmParams {
  /**
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodBancontactData, 'type'>;

  /**
   * The url your customer will be directed to after they complete authentication.
   *
   * @recommended
   */
  return_url?: string;
}

/**
 * Data to be sent with a `stripe.ConfirmBlikPayment` request.
 * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
 */
export interface ConfirmBlikPaymentData extends PaymentIntentConfirmParams {
  /**
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodBlikData, 'type'>;

  /**
   * An object containing payment-method-specific configuration to confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents) with.
   */
  payment_method_options: {
    /**
     * A configuration for this BLIK payment.
     */
    blik: {
      /**
       * Your customer's 6-digit BLIK code.
       */
      code: string;
    };
  };
}

/**
 * Data to be sent with a `stripe.confirmBoletoPayment` request.
 * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
 */
export interface ConfirmBoletoPaymentData extends PaymentIntentConfirmParams {
  /**
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodBoletoData, 'type'>;
}

/**
 * An options object to control the behavior of `stripe.confirmBoletoPayment`.
 */
export interface ConfirmBoletoPaymentOptions {
  /**
   * Set this to `false` if you want to handle next actions yourself. Please refer to our [Stripe Boleto integration guide](https://stripe.com/docs/payments/boleto) for more info. Default is `true`.
   */
  handleActions?: boolean;
}

/**
 * Data to be sent with a `stripe.confirmAlipayPayment` request.
 * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
 */
export interface ConfirmAlipayPaymentData extends PaymentIntentConfirmParams {
  /**
   * The `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent` or a new `PaymentMethod` will be created.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodAlipayData, 'type'>;

  /**
   * The url your customer will be directed to after they complete authentication.
   *
   * @recommended
   */
  return_url?: string;
}

/**
 * An options object to control the behavior of `stripe.confirmAlipayPayment`.
 */
export interface ConfirmAlipayPaymentOptions {
  /**
   * Set this to `false` if you want to [manually handle the authorization redirect](https://stripe.com/docs/payments/alipay/accept-a-payment#handle-redirect).
   * Default is `true`.
   */
  handleActions?: boolean;
}

/**
 * An options object to control the behavior of `stripe.confirmBancontactPayment`.
 */
export interface ConfirmBancontactPaymentOptions {
  /**
   * Set this to `false` if you want to [manually handle the authorization redirect](https://stripe.com/docs/payments/bancontact#handle-redirect).
   * Default is `true`.
   */
  handleActions?: boolean;
}

/**
 * An options object to control the behavior of `stripe.confirmBlikPayment`.
 */
export interface ConfirmBlikPaymentOptions {
  /**
   * Set this to false if you want to manually determine if the confirmation has succeeded or failed.
   */
  handleActions?: boolean;
}

/**
 * Data to be sent with a `stripe.confirmCardPayment` request.
 * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
 */
export interface ConfirmCardPaymentData extends PaymentIntentConfirmParams {
  /**
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodCardData, 'type'>;

  /**
   * An object containing payment-method-specific configuration to confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents) with.
   */
  payment_method_options?: {
    /**
     * Configuration for this card payment.
     */
    card: {
      /**
       * Use the provided `CardCvcElement` when confirming the PaymentIntent with an existing PaymentMethod.
       */
      cvc?: StripeCardCvcElement;

      /**
       * Selected network to process this PaymentIntent on. Depends on the available networks of the card attached to the PaymentIntent.
       */
      network?: string;
    };
  };
}

/**
 * An options object to control the behavior of `stripe.confirmCardPayment`.
 */
export interface ConfirmCardPaymentOptions {
  /**
   * Set this to `false` if you want to [handle next actions yourself](https://stripe.com/docs/payments/payment-intents/verifying-status#next-actions), or if you want to defer next action handling until later (e.g. for use in the [PaymentRequest API](https://stripe.com/docs/stripe-js/elements/payment-request-button#complete-payment-intents)).
   * Default is `true`.
   */
  handleActions?: boolean;
}

/**
 * Data to be sent with a `stripe.confirmCashappPayment` request.
 * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
 */
export interface ConfirmCashappPaymentData extends PaymentIntentConfirmParams {
  /**
   * The `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent` or a new `PaymentMethod` will be created.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodCashappData, 'type'>;

  /**
   * The url your customer will be directed to after they complete authentication.
   */
  return_url?: string;
}

/**
 * An options object to control the behavior of `stripe.confirmCashappPayment`.
 */
export interface ConfirmCashappPaymentOptions {
  /**
   * Set this to `false` if you want to [manually handle the authorization QR code or redirect](https://stripe.com/docs/payments/cash-app-pay/accept-a-payment?platform=web&ui=API#handle-redirect).
   * Default is `true`.
   */
  handleActions?: boolean;
}

/**
 * Data to be sent with a `stripe.confirmCustomerBalancePayment` request.
 * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
 */
export interface ConfirmCustomerBalancePaymentData
  extends PaymentIntentConfirmParams {
  /**
   * An object specifying the `customer_balance` type.
   */
  payment_method: CreatePaymentMethodCustomerBalanceData;
  payment_method_options?: {
    customer_balance?: {
      funding_type?: 'bank_transfer';
      bank_transfer?: {
        type:
          | 'eu_bank_transfer'
          | 'gb_bank_transfer'
          | 'id_bank_transfer'
          | 'jp_bank_transfer'
          | 'mx_bank_transfer'
          | 'us_bank_transfer';
        eu_bank_transfer?: {
          country: 'DE' | 'ES' | 'FR' | 'IE' | 'NL';
        };
        id_bank_transfer?: {
          bank: 'bni' | 'bca';
        };
        requested_address_types?: Array<
          | 'aba'
          | 'swift'
          | 'sort_code'
          | 'zengin'
          | 'iban'
          | 'spei'
          | 'id_bban'
          | 'sepa'
        >;
      };
    };
  };
}

/**
 * An options object to control the behavior of `stripe.confirmCustomerBalancePayment`.
 */
export interface ConfirmCustomerBalancePaymentOptions {
  /**
   * This must be set to `false`.
   * The Customer Balance does not handle the next actions for you automatically (e.g. displaying bank transfer details).
   * To make future upgrades easier, this option is required to always be sent.
   * Please refer to our [Stripe Customer Balance integration guide](https://stripe.com/docs/payments/bank-transfers) for more info.
   */
  handleActions: false;
}

/**
 * Data to be sent with a `stripe.confirmEpsPayment` request.
 * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
 */
export interface ConfirmEpsPaymentData extends PaymentIntentConfirmParams {
  /**
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodEpsData, 'type'>;

  /**
   * The url your customer will be directed to after they complete authentication.
   *
   * @recommended
   */
  return_url?: string;
}

/**
 * An options object to control the behavior of `stripe.confirmEpsPayment`.
 */
export interface ConfirmEpsPaymentOptions {
  /**
   * Set this to `false` if you want to [manually handle the authorization redirect](https://stripe.com/docs/payments/eps#handle-redirect).
   * Default is `true`.
   */
  handleActions?: boolean;
}

/**
 * Data to be sent with a `stripe.confirmSepaDebitPayment` request.
 * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
 */
export interface ConfirmSepaDebitPaymentData
  extends PaymentIntentConfirmParams {
  /**
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodSepaDebitData, 'type'>;

  /**
   * To save the SEPA Direct Debit account for reuse, set this parameter to `off_session`.
   * SEPA Direct Debit only accepts an `off_session` value for this parameter.
   */
  setup_future_usage?: 'off_session';
}

/**
 * Data to be sent with a `stripe.confirmFpxPayment` request.
 * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
 */
export interface ConfirmFpxPaymentData extends PaymentIntentConfirmParams {
  /**
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodFpxData, 'type'>;

  /**
   * The url your customer will be directed to after they complete authentication.
   *
   * @recommended
   */
  return_url?: string;
}

/**
 * An options object to control the behavior of `stripe.confirmFpxPayment`.
 */
export interface ConfirmFpxPaymentOptions {
  /**
   * Set this to `false` if you want to [manually handle the authorization redirect](https://stripe.com/docs/payments/fpx#handle-redirect).
   * Default is `true`.
   */
  handleActions?: boolean;
}

/**
 * Data to be sent with a `stripe.confirmGiropayPayment` request.
 * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
 */
export interface ConfirmGiropayPaymentData extends PaymentIntentConfirmParams {
  /**
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodGiropayData, 'type'>;

  /**
   * The url your customer will be directed to after they complete authentication.
   *
   * @recommended
   */
  return_url?: string;
}

/**
 * An options object to control the behavior of `stripe.confirmGiropayPayment`.
 */
export interface ConfirmGiropayPaymentOptions {
  /**
   * Set this to `false` if you want to [manually handle the authorization redirect](https://stripe.com/docs/payments/giropay#handle-redirect).
   * Default is `true`.
   */
  handleActions?: boolean;
}

/**
 * Data to be sent with a `stripe.confirmGrabPayPayment` request.
 * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
 */
export interface ConfirmGrabPayPaymentData extends PaymentIntentConfirmParams {
  /**
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodGrabPayData, 'type'>;

  /**
   * The url your customer will be directed to after they complete authentication.
   *
   * @recommended
   */
  return_url?: string;
}

/**
 * An options object to control the behavior of `stripe.confirmGrabPayPayment`.
 */
export interface ConfirmGrabPayPaymentOptions {
  /**
   * Set this to `false` if you want to handle next actions yourself. Please refer to our [Stripe GrabPay integration guide](https://stripe.com/docs/payments/grabpay/accept-a-payment)
   * for more info. Default is `true`.
   */
  handleActions?: boolean;
}

/**
 * Data to be sent with a `stripe.confirmIdealPayment` request.
 * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
 */
export interface ConfirmIdealPaymentData extends PaymentIntentConfirmParams {
  /**
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodIdealData, 'type'>;

  /**
   * The url your customer will be directed to after they complete authentication.
   *
   * @recommended
   */
  return_url?: string;
}

/**
 * An options object to control the behavior of `stripe.confirmIdealPayment`.
 */
export interface ConfirmIdealPaymentOptions {
  /**
   * Set this to `false` if you want to [manually handle the authorization redirect](https://stripe.com/docs/payments/ideal#handle-redirect).
   * Default is `true`.
   */
  handleActions?: boolean;
}

/**
 * Data to be sent with a `stripe.confirmKlarnaPayment` request.
 * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
 */
export interface ConfirmKlarnaPaymentData extends PaymentIntentConfirmParams {
  /**
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodKlarnaData, 'type'>;

  /**
   * The url your customer will be directed to after they complete authentication.
   *
   * @recommended
   */
  return_url?: string;
}

/**
 * An options object to control the behavior of `stripe.confirmKlarnaPayment`.
 */
export interface ConfirmKlarnaPaymentOptions {
  /**
   * Set this to `false` if you want to [manually handle the authorization redirect](https://stripe.com/docs/payments/klarna#handle-redirect).
   * Default is `true`.
   */
  handleActions?: boolean;
}

/**
 * Data to be sent with a `stripe.confirmKonbiniPayment` request.
 * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
 */
export interface ConfirmKonbiniPaymentData extends PaymentIntentConfirmParams {
  /**
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodKonbiniData, 'type'>;

  /**
   * An object containing payment-method-specific configuration to confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents) with.
   */
  payment_method_options?: {
    /**
     * Configuration for this Konbini payment.
     */
    konbini: {
      /**
       * An optional 10 to 11 digit numeric-only string determining the confirmation code at applicable convenience stores. May not be all 0 and could be rejected in case of insufficient uniqueness. We recommend to use the customer’s phone number.
       */
      confirmation_number?: string;
    };
  };
}

/**
 * An options object to control the behavior of `stripe.confirmKonbiniPayment`.
 */
export interface ConfirmKonbiniPaymentOptions {
  /**
   * Set this to `false` if you want to handle next actions yourself. Please refer to our [integration guide](https://stripe.com/docs/payments/konbini/accept-a-payment) for more info. Default is `true`.
   */
  handleActions?: boolean;
}

/**
 * Data to be sent with a `stripe.confirmOxxoPayment` request.
 * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
 */
export interface ConfirmOxxoPaymentData extends PaymentIntentConfirmParams {
  /**
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodOxxoData, 'type'>;
}

/**
 * An options object to control the behavior of `stripe.confirmOxxoPayment`.
 */
export interface ConfirmOxxoPaymentOptions {
  /**
   * Set this to `false` if you want to handle next actions yourself. Please refer to our [Stripe OXXO integration guide](https://stripe.com/docs/payments/oxxo) for more info. Default is `true`.
   */
  handleActions?: boolean;
}

/**
 * Data to be sent with a `stripe.confirmP24Payment` request.
 * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
 */
export interface ConfirmP24PaymentData extends PaymentIntentConfirmParams {
  /**
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodP24Data, 'type'>;

  payment_method_options?: {
    /**
     * Configuration for this Przelewy24 payment.
     */
    p24: {
      /**
       * Specify that payer has agreed to the Przelewy24 Terms of Service
       */
      tos_shown_and_accepted?: boolean;
    };
  };

  /**
   * The url your customer will be directed to after they complete authentication.
   *
   * @recommended
   */
  return_url?: string;
}

/**
 * Data to be sent with a `stripe.confirmPayNowPayment` request.
 * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
 */
export interface ConfirmPayNowPaymentData extends PaymentIntentConfirmParams {
  /**
   * The `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent` or a new `PaymentMethod` will be created.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodPayNowData, 'type'>;
}

/**
 * An options object to control the behavior of `stripe.confirmPayNowPayment`.
 */
export interface ConfirmPayNowPaymentOptions {
  /**
   * Set this to `false` if you want to [manually handle the authorization redirect](https://stripe.com/docs/payments/p24#handle-redirect).
   * Default is `true`.
   */
  handleActions?: boolean;
}

/**
 * Data to be sent with a `stripe.confirmPayPalPayment` request.
 * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
 */
export interface ConfirmPayPalPaymentData extends PaymentIntentConfirmParams {
  /**
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodPayPalData, 'type'>;

  /**
   * The required url your customer will be directed to after they complete authentication.
   */
  return_url: string;
}

/**
 * An options object to control the behavior of `stripe.confirmP24Payment`.
 */
export interface ConfirmP24PaymentOptions {
  /**
   * Set this to `false` if you want to [manually handle the authorization redirect](https://stripe.com/docs/payments/p24#handle-redirect).
   * Default is `true`.
   */
  handleActions?: boolean;
}

/**
 * Data to be sent with a `stripe.confirmPixPayment` request.
 * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
 */
export interface ConfirmPixPaymentData extends PaymentIntentConfirmParams {
  /**
   * The `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent` or a new `PaymentMethod` will be created.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodPixData, 'type'>;
}

/**
 * An options object to control the behavior of `stripe.confirmPayNowPayment`.
 */
export interface ConfirmPixPaymentOptions {
  /**
   * Set this to `false` if you want to [manually handle the authorization redirect](https://stripe.com/docs/payments/p24#handle-redirect).
   * Default is `true`.
   */
  handleActions?: boolean;
}

/**
 * Data to be sent with a `stripe.confirmPayNowPayment` request.
 * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
 */
export interface ConfirmPromptPayPaymentData
  extends PaymentIntentConfirmParams {
  /**
   * The `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent` or a new `PaymentMethod` will be created.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodPromptPayData, 'type'>;
}

/**
 * An options object to control the behavior of `stripe.confirmPayNowPayment`.
 */
export interface ConfirmPromptPayPaymentOptions {
  /**
   * Set this to `false` if you want to [manually handle the authorization redirect](https://stripe.com/docs/payments/p24#handle-redirect).
   * Default is `true`.
   */
  handleActions?: boolean;
}

/**
 * Data to be sent with a `stripe.confirmSofortPayment` request.
 * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
 */
export interface ConfirmSofortPaymentData extends PaymentIntentConfirmParams {
  /**
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodSofortData, 'type'>;

  /**
   * The url your customer will be directed to after they complete authentication.
   *
   * @recommended
   */
  return_url?: string;

  /**
   * To set up a SEPA Direct Debit payment method using the bank details from this SOFORT payment, set this parameter to `off_session`.
   * When using this parameter, a `customer` will need to be set on the [PaymentIntent](https://stripe.com/docs/api/payment_intents).
   * The newly created SEPA Direct Debit [PaymentMethod](https://stripe.com/docs/api/payment_methods) will be attached to this customer.
   */
  setup_future_usage?: 'off_session';
}

/**
 * An options object to control the behavior of `stripe.confirmSofortPayment`.
 */
export interface ConfirmSofortPaymentOptions {
  /**
   * Set this to `false` if you want to [manually handle the authorization redirect](https://stripe.com/docs/payments/sofort/accept-a-payment?platform=web#handle-redirect).
   * Default is `true`.
   */
  handleActions?: boolean;
}

/**
 * Data to be sent with a `stripe.confirmWechatPayPayment` request.
 * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
 */
export interface ConfirmWechatPayPaymentData
  extends PaymentIntentConfirmParams {
  /**
   * The `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods).
   * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent` or a new `PaymentMethod` will be created.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodWechatPayData, 'type'>;

  /**
   * An object containing payment-method-specific configuration to confirm the [PaymentIntent](https://stripe.com/docs/api/payment_intents) with.
   */
  payment_method_options?: {
    /**
     * Configuration for this wechat payment.
     */
    wechat_pay: {
      client?: 'web';
    };
  };
}

/**
 * An options object to control the behavior of `stripe.confirmWechatPayPayment`.
 */
export interface ConfirmWechatPayPaymentOptions {
  /**
   * This must be set to false, and you are responsible for handling the next_action after confirming the PaymentIntent.
   */
  handleActions: boolean;
}

/**
 * Data to be sent with a `stripe.confirmAuBecsDebitPayment` request.
 * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
 */
export interface ConfirmAuBecsDebitPaymentData
  extends PaymentIntentConfirmParams {
  /**
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodAuBecsDebitData, 'type'>;

  /**
   * To save the BECS Direct Debit account for reuse, set this parameter to `off_session`.
   * BECS Direct Debit only accepts an `off_session` value for this parameter.
   */
  setup_future_usage?: 'off_session';
}

/**
 * Data to be sent with a `stripe.confirmAffirmPayment` request.
 * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
 */
export interface ConfirmAffirmPaymentData extends PaymentIntentConfirmParams {
  /**
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodAffirmData, 'type'>;

  /**
   * The url your customer will be directed to after they complete authentication.
   */
  return_url?: string;
}

/**
 * An options object to control the behavior of `stripe.confirmAffirmPayment`.
 */
export interface ConfirmAffirmPaymentOptions {
  /**
   * Set this to `false` if you want to handle next actions yourself. Please refer to our [Stripe Affirm integration guide](https://stripe.com/docs/payments/affirm/accept-a-payment)
   * for more info. Default is `true`.
   */
  handleActions?: boolean;
}

/**
 * Data to be sent with a `stripe.confirmAfterpayClearpayPayment` request.
 * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
 */
export interface ConfirmAfterpayClearpayPaymentData
  extends PaymentIntentConfirmParams {
  /**
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
   *
   * @recommended
   */
  payment_method?:
    | string
    | Omit<CreatePaymentMethodAfterpayClearpayData, 'type'>;

  /**
   * The url your customer will be directed to after they complete authentication.
   */
  return_url?: string;
}

/**
 * An options object to control the behavior of `stripe.confirmAfterpayClearpayPayment`.
 */
export interface ConfirmAfterpayClearpayPaymentOptions {
  /**
   * Set this to `false` if you want to handle next actions yourself. Please refer to our [Stripe Afterpay / Clearpay integration guide](https://stripe.com/docs/payments/afterpay-clearpay/accept-a-payment#handle-redirect)
   * for more info. Default is `true`.
   */
  handleActions?: boolean;
}

/**
 * Data to be sent with a `stripe.confirmAcssDebitPayment` request.
 * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
 */
export interface ConfirmAcssDebitPaymentData
  extends PaymentIntentConfirmParams {
  /**
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodAcssDebitData, 'type'>;
}

/**
 * An options object to control the behavior of `stripe.confirmAcssDebitPayment`.
 */
export interface ConfirmAcssDebitPaymentOptions {
  /**
   * Set `skipMandate` to `true` if you want to skip displaying the mandate confirmation screen.
   */
  skipMandate?: boolean;
}

export interface ConfirmUsBankAccountPaymentData
  extends PaymentIntentConfirmParams {
  /**
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `PaymentIntent`.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodUsBankAccountData, 'type'>;
}

/**
 * Data to be sent with a `stripe.confirmPayment` request.
 * Refer to the [Payment Intents API](https://stripe.com/docs/api/payment_intents/confirm) for a full list of parameters.
 */
export interface ConfirmPaymentData extends PaymentIntentConfirmParams {
  /**
   * The url your customer will be directed to after they complete payment.
   */
  return_url: string;

  /**
   * An object to attach additional billing_details to the PaymentMethod created via Elements.
   *
   * @docs https://stripe.com/docs/api/payment_intents/create#create_payment_intent-payment_method_data
   */
  payment_method_data?: {
    /**
     * The customer's billing details. Details collected by Elements will override values passed here.
     * Billing fields that are omitted in the Payment Element via the `fields` option required.
     *
     * @docs https://stripe.com/docs/api/payment_intents/create#create_payment_intent-payment_method_data-billing_details
     */
    billing_details?: PaymentMethodCreateParams.BillingDetails;
  };

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}

/**
 * Data to be sent with a `stripe.verifyMicrodepositsForPayment` request.
 */
export interface VerifyMicrodepositsForPaymentData {
  /**
   * An array of two positive integers, in cents, equal to the values of the microdeposits sent to the bank account.
   */
  amounts?: Array<number>;
}

/**
 * Data to be sent with a `stripe.collectBankAccountForPayment` request.
 */
export interface CollectBankAccountForPaymentOptions {
  /**
   * The client secret of the PaymentIntent.
   */
  clientSecret: string;

  params: CollectBankAccountParams;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
