import {
  PayLaterCountryCodes,
  PayLaterProductCodes,
  PayPalCreditCountryCodes,
} from "./paypal-payments";
import { ApplePayConfig } from "./applepay-payments";
import type { GooglePayConfigFromFindEligibleMethods } from "./googlepay-payments";

export type EligiblePaymentMethods =
  | "basic_cards"
  | "paypal_pay_later"
  | "paypal_credit"
  | "paypal"
  | "venmo"
  | "apple_pay"
  | "advanced_cards"
  | "google_pay";

export type PaymentFlow =
  | "ONE_TIME_PAYMENT"
  | "RECURRING_PAYMENT"
  | "VAULT_WITH_PAYMENT"
  | "VAULT_WITHOUT_PAYMENT";

export type FindEligibleMethodsOptions = {
  amount?: string;
  currencyCode?: string;
  paymentFlow?: PaymentFlow;
};

export type FundingSource =
  | "credit"
  | "paylater"
  | "paypal"
  | "venmo"
  | "card"
  | "advanced_cards"
  | "applepay"
  | "googlepay";

type BaseEligiblePaymentMethodDetails = {
  canBeVaulted: boolean;
};

type CreditEligiblePaymentMethodDetails = BaseEligiblePaymentMethodDetails & {
  countryCode: PayPalCreditCountryCodes;
};

type PayLaterEligiblePaymentMethodDetails = BaseEligiblePaymentMethodDetails & {
  countryCode: PayLaterCountryCodes;
  productCode: PayLaterProductCodes;
};

type CardFieldsEligiblePaymentMethodDetails = {
  supportsInstallments: boolean;
  cobrandedEnabled: boolean;
  vendors: CardFieldsEligibleVendorDetails[];
};

type CardFieldsCardNetwork =
  | "AMEX"
  | "CUP"
  | "DINERS"
  | "DISCOVER"
  | "JCB"
  | "MAESTRO"
  | "MASTERCARD"
  | "VISA";

type CardFieldsEligibleVendorDetails = {
  network: CardFieldsCardNetwork;
  eligible: boolean;
  canBeVaulted: boolean;
  branded: boolean;
};

type ApplePayEligiblePaymentMethodDetails = BaseEligiblePaymentMethodDetails & {
  config: ApplePayConfig;
};

type GooglePayEligiblePaymentMethodDetails = {
  canBeVaulted?: boolean;
  config: GooglePayConfigFromFindEligibleMethods;
};

export type FindEligibleMethodsGetDetails<T extends FundingSource> =
  T extends "credit"
    ? CreditEligiblePaymentMethodDetails
    : T extends "paylater"
      ? PayLaterEligiblePaymentMethodDetails
      : T extends "applepay"
        ? ApplePayEligiblePaymentMethodDetails
        : T extends "advanced_cards"
          ? CardFieldsEligiblePaymentMethodDetails
          : T extends "googlepay"
            ? GooglePayEligiblePaymentMethodDetails
            : BaseEligiblePaymentMethodDetails;

type EligiblePaymentMethodDetails = {
  can_be_vaulted?: boolean;
  eligible_in_paypal_network?: boolean;
  recommended?: boolean;
  recommended_priority?: number;
  country_code?: PayLaterCountryCodes | PayPalCreditCountryCodes;
  product_code?: PayLaterProductCodes;
};

export type FindEligiblePaymentMethodsResponse = {
  eligible_methods: {
    [key in EligiblePaymentMethods]?: EligiblePaymentMethodDetails;
  };
  supplementary_data?: {
    buyer_country_code?: string;
  };
};

/**
 * Result object returned by `findEligibleMethods()` containing methods to check payment method eligibility and retrieve payment method details.
 *
 * @remarks
 * This interface is returned by the SDK's `findEligibleMethods()` method. It provides
 * utilities to determine which PayPal payment methods are available and to retrieve details for payment setup.
 *
 * @example
 * ```typescript
 * const paymentMethods = await sdkInstance.findEligibleMethods({
 *   currencyCode: "USD",
 * });
 *
 * if (paymentMethods.isEligible("paypal")) {
 *   const paypalPaymentSession = sdkInstance.createPayPalOneTimePaymentSession({
 *     onApprove: (data) => console.log('Payment approved:', data),
 *   });
 *   // set up button
 *   // ...
 * }
 *
 * if (paymentMethods.isEligible("paylater")) {
 *   const paylaterPaymentMethodDetails = paymentMethods.getDetails("paylater");
 *   const { productCode, countryCode } = paylaterPaymentMethodDetails;
 *
 *   const paylaterPaymentSession = sdkInstance.createPayLaterOneTimePaymentSession({
 *     onApprove: (data) => console.log('Pay Later approved:', data),
 *   });
 *
 *   // set up button
 *   const paylaterButton = document.querySelector("#paylater-button");
 *   paylaterButton.productCode = productCode;
 *   paylaterButton.countryCode = countryCode;
 *   // ...
 * }
 *
 * if (paymentMethods.isEligible("credit")) {
 *   const paypalCreditPaymentMethodDetails = paymentMethods.getDetails("credit");
 *   const { countryCode } = paypalCreditPaymentMethodDetails;
 *
 *   const paypalCreditPaymentSession = sdkInstance.createPayPalCreditOneTimePaymentSession({
 *     onApprove: (data) => console.log('Credit approved:', data),
 *   });
 *
 *   // set up button
 *   const paypalCreditButton = document.querySelector("#paypal-credit-button");
 *   paypalCreditButton.countryCode = countryCode;
 *   // ...
 * }
 *
 * if (paymentMethods.isEligible("googlepay")) {
 *   const googlePayDetails = paymentMethods.getDetails("googlepay");
 *   const { config } = googlePayDetails;
 *
 *   const googlePaySession = sdkInstance.createGooglePayOneTimePaymentSession();
 *   const googlePayConfig = googlePaySession.formatConfigForPaymentRequest(config);
 *   // Use googlePayConfig with Google's PaymentsClient
 *   // ...
 * }
 * ```
 */
export interface EligiblePaymentMethodsOutput {
  /**
   * Determines if a specific payment method is eligible.
   *
   * @param paymentMethod - The funding source to check eligibility for
   * @returns `true` if the payment method is eligible, `false` otherwise
   */
  isEligible: (paymentMethod: FundingSource) => boolean;
  /**
   * Retrieves details for a specific funding source.
   *
   * @param fundingSource - The funding source to get details for
   * @returns Configuration details including country codes, product codes, and vaulting capabilities
   */
  getDetails: <T extends FundingSource>(
    fundingSource: T,
  ) => FindEligibleMethodsGetDetails<T>;
}
