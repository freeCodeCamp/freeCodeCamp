import { PayPalPaymentsInstance } from "./components/paypal-payments";
import { PayPalGuestPaymentsInstance } from "./components/paypal-guest-payments";
import { PayPalLegacyBillingInstance } from "./components/paypal-legacy-billing-agreements";
import { VenmoPaymentsInstance } from "./components/venmo-payments";
import { ApplePayPaymentsInstance } from "./components/applepay-payments";
import { GooglePayPaymentsInstance } from "./components/googlepay-payments";
import {
  EligiblePaymentMethodsOutput,
  FindEligibleMethodsOptions,
  FindEligiblePaymentMethodsResponse,
} from "./components/find-eligible-methods";
import { CardFieldsInstance } from "./components/card-fields";
import { PayPalMessagesInstance } from "./components/paypal-messages";
import { PayPalSubscriptionsInstance } from "./components/paypal-subscriptions";

export interface PayPalV6Namespace {
  /**
   * Creates an SDK instance, which is the first step in an SDK integration. This instance serves as the base layer for all SDK components.
   *
   * @remarks
   * This is an asynchronous method that initializes the PayPal SDK with the provided
   * client token and components.
   *
   * @param createInstanceOptions - Configuration options for creating the SDK instance
   * @returns A promise that resolves to an SDK instance with methods based on the specified components
   *
   * @example
   * ```typescript
   * const sdkInstance = await window.paypal.createInstance({
   *   clientToken: "your-client-token",
   *   components: ["paypal-payments"],
   *   locale: "en-US",
   *   pageType: "checkout"
   * });
   * ```
   */
  createInstance: <T extends readonly Components[]>(
    createInstanceOptions: CreateInstanceOptions<T>,
  ) => Promise<SdkInstance<T>>;
  version: `${number}.${number}.${number}`;
}

export type Components =
  | "paypal-payments"
  | "paypal-guest-payments"
  | "paypal-messages"
  | "paypal-subscriptions"
  | "venmo-payments"
  | "paypal-legacy-billing-agreements"
  | "card-fields"
  | "applepay-payments"
  | "googlepay-payments";

export type PageTypes =
  | "cart"
  | "checkout"
  | "home"
  | "mini-cart"
  | "product-details"
  | "product-listing"
  | "search-results";

type BaseCreateInstanceOptions<T extends readonly Components[]> = {
  clientMetadataId?: string;
  components: T;
  locale?: string;
  pageType?: PageTypes;
  partnerAttributionId?: string;
  shopperSessionId?: string;
  testBuyerCountry?: string;
  merchantId?: string | string[];
};

export type CreateInstanceOptions<T extends readonly Components[]> =
  | (BaseCreateInstanceOptions<T> & {
      clientId?: never;
      clientToken: string;
    })
  | (BaseCreateInstanceOptions<T> & {
      clientId: string;
      clientToken?: never;
    });

/**
 * Dynamically typed SDK instance based on the components array provided to createInstance.
 *
 * @remarks
 * The return type changes based on which components are specified in the components array.
 *
 * **Always includes:**
 * - `findEligibleMethods()` - Base method that verifies buyer and merchant eligibility for various payment methods. Use this to conditionally render the appropriate payment buttons on your site.
 * - `updateLocale()` - Base method that updates the locale for the SDK instance. The locale should be specified using a BCP-47 code.
 *
 * **Conditionally includes methods based on components:**
 * - `"paypal-payments"` - Adds PayPalPaymentsInstance methods
 * - `"venmo-payments"` - Adds VenmoPaymentsInstance methods
 * - `"card-fields"` - Adds CardFieldsInstance methods
 * - `"paypal-legacy-billing-agreements"` - Adds PayPalLegacyBillingInstance methods
 * - `"paypal-guest-payments"` - Adds PayPalGuestPaymentsInstance methods
 * - `"paypal-messages"` - Adds PayPalMessagesInstance methods
 * - `"paypal-subscriptions"` - Adds PayPalSubscriptionsInstance methods
 * - `"applepay-payments"` - Adds ApplePayPaymentsInstance methods
 * - `"googlepay-payments"` - Adds GooglePayPaymentsInstance methods
 *
 * @example
 * ```typescript
 * // Only PayPal methods + base methods
 * const sdkInstance = await createInstance({
 *   clientToken: "token",
 *   components: ["paypal-payments"]
 * });
 *
 * const paymentMethods = await sdkInstance.findEligibleMethods();
 * const isPayPalEligible = paymentMethods.isEligible("paypal");
 *
 * if (isPayPalEligible) {
 *   sdkInstance.createPayPalOneTimePaymentSession(...); // ✅ Available
 *   sdkInstance.createVenmoOneTimePaymentSession(...);  // ❌ TypeScript error
 *   // Render PayPal button
 * }
 *
 * // Optionally update locale
 * sdkInstance.updateLocale("es-US");
 *
 * // Multiple components
 * const sdkInstance = await createInstance({
 *   clientToken: "token",
 *   components: ["paypal-payments", "venmo-payments"]
 * });
 *
 * const paymentMethods = await sdkInstance.findEligibleMethods();
 * const isPayPalEligible = paymentMethods.isEligible("paypal");
 * const isVenmoEligible = paymentMethods.isEligible("venmo");
 *
 * if (isPayPalEligible) {
 *   sdkInstance.createPayPalOneTimePaymentSession(...); // ✅ Available
 *   // Render PayPal button
 * }
 *
 * if (isVenmoEligible) {
 *   sdkInstance.createVenmoOneTimePaymentSession(...);  // ✅ Available
 *   // Render Venmo button
 * }
 *
 * // Optionally update locale
 * sdkInstance.updateLocale("es-US");
 * ```
 */
export type SdkInstance<T extends readonly Components[]> = BaseInstance &
  ("paypal-payments" extends T[number] ? PayPalPaymentsInstance : unknown) &
  ("paypal-guest-payments" extends T[number]
    ? PayPalGuestPaymentsInstance
    : unknown) &
  ("paypal-messages" extends T[number] ? PayPalMessagesInstance : unknown) &
  ("venmo-payments" extends T[number] ? VenmoPaymentsInstance : unknown) &
  ("paypal-legacy-billing-agreements" extends T[number]
    ? PayPalLegacyBillingInstance
    : unknown) &
  ("card-fields" extends T[number] ? CardFieldsInstance : unknown) &
  ("paypal-subscriptions" extends T[number]
    ? PayPalSubscriptionsInstance
    : unknown) &
  ("applepay-payments" extends T[number] ? ApplePayPaymentsInstance : unknown) &
  ("googlepay-payments" extends T[number]
    ? GooglePayPaymentsInstance
    : unknown);

/**
 * @internal
 */
export interface BaseInstance {
  /**
   * Checks eligibility for specific payment methods.
   *
   * @remarks
   * This method verifies buyer and merchant eligibility by interacting with PayPal's
   * public API to determine whether payment methods (such as PayPal or Venmo) can be used.
   * Use this to conditionally render the appropriate payment buttons on your site.
   *
   * @param findEligibleMethodsOptions - Options for checking payment method eligibility
   * @returns A promise that resolves to payment methods eligibility information
   *
   * @example
   * ```typescript
   * const paymentMethods = await sdkInstance.findEligibleMethods();
   * const isPayPalEligible = paymentMethods.isEligible("paypal");
   * if (isPayPalEligible) {
   *   // Render PayPal button
   * }
   * ```
   */
  findEligibleMethods: (
    findEligibleMethodsOptions?: FindEligibleMethodsOptions,
  ) => Promise<EligiblePaymentMethodsOutput>;
  /**
   * Updates the locale for the SDK instance.
   *
   * @remarks
   * This method allows you to dynamically change the locale of the SDK instance
   * after it has been initialized. The locale should be specified using a BCP-47 code.
   *
   * @param locale - The new locale to set, specified as a BCP-47 code (e.g., "en-US", "es-ES")
   * @returns void
   *
   * @example
   * ```typescript
   * sdkInstance.updateLocale("es-ES");
   * ```
   */
  updateLocale: (locale: string) => void;
  /**
   * Hydrates the SDK instance with eligible payment methods from a pre-fetched response.
   *
   * @remarks
   * This method allows you to provide a pre-fetched response to the SDK and receive a formatted output, the same as what is returned by `findEligibleMethods()`.
   *
   * @param eligibleMethodsResponse - The response object from the Eligibility API Request
   * @returns A formatted output containing formatted payment methods eligibility information
   *
   * @example
   * ```typescript
   * const paymentMethods = sdkInstance.hydrateEligibleMethods(eligibleMethodsResponse);
   * const isPayPalEligible = paymentMethods.isEligible("paypal");
   * if (isPayPalEligible) {
   *   // Render PayPal button
   * }
   * ```
   */
  hydrateEligibleMethods: (
    eligibleMethodsResponse: FindEligiblePaymentMethodsResponse,
  ) => EligiblePaymentMethodsOutput;
}

interface CoreSdkScriptDataAttributes {
  dataNamespace?: string;
  dataSdkIntegrationSource?: string;
}

export interface LoadCoreSdkScriptOptions extends CoreSdkScriptDataAttributes {
  environment: "production" | "sandbox";
  debug?: boolean;
}

export function loadCoreSdkScript(
  options: LoadCoreSdkScriptOptions,
): Promise<PayPalV6Namespace | null>;

// Components
export * from "./components/paypal-payments";
export * from "./components/paypal-guest-payments";
export * from "./components/paypal-legacy-billing-agreements";
export * from "./components/venmo-payments";
export * from "./components/find-eligible-methods";
export * from "./components/card-fields";
export * from "./components/paypal-messages";
export * from "./components/paypal-subscriptions";
export * from "./components/applepay-payments";
export * from "./components/googlepay-payments";
export * from "./components/web-components";

// export a subset of types from base-component
export {
  CreateOrderCallback,
  CreateOrderPromise,
  OnApproveDataOneTimePayments,
  OnCancelDataOneTimePayments,
  OnCompleteData,
  OnErrorData,
} from "./components/base-component";
