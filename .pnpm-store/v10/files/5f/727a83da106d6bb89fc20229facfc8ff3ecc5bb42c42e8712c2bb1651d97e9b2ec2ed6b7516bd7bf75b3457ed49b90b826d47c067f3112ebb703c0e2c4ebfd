import {SetupIntentConfirmParams} from '../api';

import {
  CreatePaymentMethodAcssDebitData,
  CreatePaymentMethodAuBecsDebitData,
  CreatePaymentMethodBancontactData,
  CreatePaymentMethodCardData,
  CreatePaymentMethodCashappData,
  CreatePaymentMethodIdealData,
  CreatePaymentMethodSepaDebitData,
  CreatePaymentMethodSofortData,
  CreatePaymentMethodPayPalData,
  CreatePaymentMethodBacsDebitData,
  CreatePaymentMethodUsBankAccountData,
  CollectBankAccountParams,
} from './payment-intents';

import {Omit} from '../utils';

/**
 * Data to be sent with a `stripe.confirmCardSetup` request.
 * Refer to the [Setup Intents API](https://stripe.com/docs/api/setup_intents/confirm) for a full list of parameters.
 */
export interface ConfirmCardSetupData extends SetupIntentConfirmParams {
  /*
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `SetupIntent`.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodCardData, 'type'>;
}

/**
 * An options object to control the behavior of `stripe.confirmCardSetup`.
 */
export interface ConfirmCardSetupOptions {
  /*
   * Set this to `false` if you want to [handle next actions yourself](https://stripe.com/docs/payments/payment-intents/verifying-status#next-actions), or if you want to defer next action handling until later (e.g. for use in the [PaymentRequest API](https://stripe.com/docs/stripe-js/elements/payment-request-button#complete-payment-intents)).
   * Default is `true`.
   */
  handleActions?: boolean;
}

export interface ConfirmCashappSetupData extends SetupIntentConfirmParams {
  /*
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `SetupIntent`.
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
 * An options object to control the behavior of `stripe.confirmCashappSetup`.
 */
interface ConfirmCashappSetupOptions {
  /*
   * Set this to `false` if you want to [manually handle the authorization QR code or redirect](https://stripe.com/docs/payments/cash-app-pay/set-up-payment?platform=web&ui=API#web-create-setup-intent).
   * Default is `true`.
   */
  handleActions?: boolean;
}

/**
 * Data to be sent with a `stripe.confirmIdealSetup` request.
 * Refer to the [Setup Intents API](https://stripe.com/docs/api/setup_intents/confirm) for a full list of parameters.
 */
export interface ConfirmIdealSetupData extends SetupIntentConfirmParams {
  /*
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `SetupIntent`.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodIdealData, 'type'>;
}

/**
 * Data to be sent with a `stripe.confirmIdealSetup` request.
 * Refer to the [Setup Intents API](https://stripe.com/docs/api/setup_intents/confirm) for a full list of parameters.
 */
export interface ConfirmPayPalSetupData extends SetupIntentConfirmParams {
  /*
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `SetupIntent`.
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
 * Data to be sent with a `stripe.confirmSepaDebitSetup` request.
 * Refer to the [Setup Intents API](https://stripe.com/docs/api/setup_intents/confirm) for a full list of parameters.
 */
export interface ConfirmSepaDebitSetupData extends SetupIntentConfirmParams {
  /*
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `SetupIntent`.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodSepaDebitData, 'type'>;
}

/**
 * Data to be sent with a `stripe.confirmSofortSetup` request.
 * Refer to the [Setup Intents API](https://stripe.com/docs/api/setup_intents/confirm) for a full list of parameters.
 */
export interface ConfirmSofortSetupData extends SetupIntentConfirmParams {
  /*
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `SetupIntent`.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodSofortData, 'type'>;
}

/**
 * An options object to control the behavior of `stripe.confirmSofortSetup`.
 */
export interface ConfirmSofortSetupOptions {
  /**
   * Set this to `false` if you want to [manually handle the authorization redirect](https://stripe.com/docs/payments/sofort/accept-a-payment?platform=web#handle-redirect).
   * Default is `true`.
   */
  handleActions?: boolean;
}

/**
 * Data to be sent with a `stripe.confirmAuBecsDebitSetup` request.
 * Refer to the [Setup Intents API](https://stripe.com/docs/api/setup_intents/confirm) for a full list of parameters.
 */
export interface ConfirmAuBecsDebitSetupData extends SetupIntentConfirmParams {
  /*
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `SetupIntent`.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodAuBecsDebitData, 'type'>;
}

/**
 * Data to be sent with a `stripe.confirmBacsDebitSetup` request.
 * Refer to the [Setup Intents API](https://stripe.com/docs/api/setup_intents/confirm) for a full list of parameters.
 */
export interface ConfirmBacsDebitSetupData extends SetupIntentConfirmParams {
  /*
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `SetupIntent`.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodBacsDebitData, 'type'>;
}

/**
 * Data to be sent with a `stripe.confirmBancontactSetup` request.
 * Refer to the [Setup Intents API](https://stripe.com/docs/api/setup_intents/confirm) for a full list of parameters.
 */
export interface ConfirmBancontactSetupData extends SetupIntentConfirmParams {
  /*
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `SetupIntent`.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodBancontactData, 'type'>;
}

/**
 * Data to be sent with a `stripe.confirmAcssDebitSetup` request.
 * Refer to the [Setup Intents API](https://stripe.com/docs/api/setup_intents/confirm) for a full list of parameters.
 */
export interface ConfirmAcssDebitSetupData extends SetupIntentConfirmParams {
  /**
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `SetupIntent`.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodAcssDebitData, 'type'>;
}

/**
 * An options object to control the behavior of `stripe.confirmAcssDebitSetup`.
 */
export interface ConfirmAcssDebitSetupOptions {
  /**
   * Set this to true if you want to skip displaying the mandate confirmation.
   */
  skipMandate?: boolean;
}

/**
 * Data to be sent with a `stripe.verifyMicrodepositsForSetup` request.
 */
export interface VerifyMicrodepositsForSetupData {
  /**
   * An array of two positive integers, in cents, equal to the values of the microdeposits sent to the bank account.
   */
  amounts?: Array<number>;

  /**
   * A six-character code starting with SM present in the microdeposit sent to the bank account.
   */
  descriptor_code?: string;
}

export interface ConfirmUsBankAccountSetupData
  extends SetupIntentConfirmParams {
  /**
   * Either the `id` of an existing [PaymentMethod](https://stripe.com/docs/api/payment_methods), or an object containing data to create a `PaymentMethod` with.
   * This field is optional if a `PaymentMethod` has already been attached to this `SetupIntent`.
   *
   * @recommended
   */
  payment_method?: string | Omit<CreatePaymentMethodUsBankAccountData, 'type'>;
}

/**
 * Data to be sent with a `stripe.collectBankAccountForSetup` request.
 */
export interface CollectBankAccountForSetupOptions {
  /**
   * The client secret of the SetupIntent.
   */
  clientSecret: string;

  params: CollectBankAccountParams;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
