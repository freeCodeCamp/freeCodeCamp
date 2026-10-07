/**
 * Supported networks for Apple Pay transactions.
 */
export type ApplePaySupportedNetwork =
  | "amex"
  | "cartesBancaires"
  | "discover"
  | "jcb"
  | "maestro"
  | "masterCard"
  | "visa";

/**
 * Merchant capabilities for Apple Pay transactions.
 */
export type ApplePayMerchantCapability =
  | "supports3DS"
  | "supportsCredit"
  | "supportsDebit";

/**
 * Apple Pay contact information provided during payment authorization.
 */
export type ApplePayContact = {
  emailAddress?: string;
  familyName?: string;
  givenName?: string;
  phoneNumber?: string;
  addressLines?: string[];
  locality?: string;
  postalCode?: string;
  administrativeArea?: string;
  country?: string;
  countryCode?: string;
};

/**
 * Apple Pay payment token received from Apple Pay SDK.
 */
export type ApplePayPaymentToken = {
  paymentData: {
    version?: string;
    data?: string;
    signature?: string;
    header?: {
      ephemeralPublicKey?: string;
      publicKeyHash?: string;
      transactionId?: string;
    };
  };
  paymentMethod: {
    displayName?: string;
    network?: string;
    type?: string;
  };
  transactionIdentifier: string;
};

/**
 * Apple Pay merchant session returned after validation.
 */
export type ApplePayMerchantSession = {
  merchantSession: {
    epochTimestamp: number;
    expiresAt: number;
    merchantSessionIdentifier: string;
    nonce: string;
    merchantIdentifier: string;
    domainName: string;
    displayName: string;
    signature: string;
    operationalAnalyticsIdentifier: string;
    retries: number;
    pspId: string;
  };
};

/**
 * Options for validating Apple Pay merchant.
 */
export type ValidateMerchantOptions = {
  validationUrl: string;
  displayName?: string;
  domainName?: string;
};

/**
 * Options for confirming an Apple Pay order.
 */
export type ConfirmOrderOptions = {
  orderId: string;
  token: ApplePayPaymentToken | string;
  billingContact: ApplePayContact | string;
  shippingContact?: ApplePayContact | string;
};

/**
 * Response from confirming an Apple Pay order.
 */
export type ConfirmOrderResponse = {
  approveApplePayPayment: {
    id: string;
    status: string;
    payment_source: {
      apple_pay: {
        name: string;
        card: unknown;
      };
    };
    links?: unknown[];
  };
};

/**
 * Apple Pay payment request configuration returned from eligible methods.
 */
export type ApplePayConfig = {
  merchantCapabilities: ApplePayMerchantCapability[];
  supportedNetworks: ApplePaySupportedNetwork[];
  merchantCountry?: string;
  isEligible?: boolean;
  tokenNotificationURL: string;
};

/**
 * Apple Pay one-time payment session interface.
 */
export type ApplePayOneTimePaymentSession = {
  /**
   * Formats the Apple Pay configuration for use in an Apple Pay payment request.
   *
   * @param config - The Apple Pay configuration from eligible payment methods
   * @returns Formatted Apple Pay payment request configuration
   *
   * @example
   * ```typescript
   * const paymentRequest = {
   *   ...applePaySession.formatConfigForPaymentRequest(config),
   *   countryCode: "US",
   *   currencyCode: "USD",
   *   total: {
   *     label: "Demo Store",
   *     amount: "100.00",
   *     type: "final",
   *   },
   * };
   * ```
   */
  formatConfigForPaymentRequest: (config: ApplePayConfig) => {
    merchantCapabilities: ApplePayMerchantCapability[];
    supportedNetworks: ApplePaySupportedNetwork[];
    merchantCountry?: string;
    tokenNotificationURL: string;
  };

  /**
   * Validates the merchant with Apple Pay.
   *
   * @param options - Validation options containing the validation URL, display name, and domain name
   * @returns Promise resolving to the Apple Pay merchant session
   *
   * @example
   * ```typescript
   * appleSdkSession.onvalidatemerchant = async (event) => {
   *   const payload = await applePaySession.validateMerchant({
   *     validationUrl: event.validationURL,
   *     displayName: "My Store",
   *     domainName: "example.com",
   *   });
   *   appleSdkSession.completeMerchantValidation(payload.merchantSession);
   * };
   * ```
   */
  validateMerchant: (
    options: ValidateMerchantOptions,
  ) => Promise<ApplePayMerchantSession>;

  /**
   * Confirms the order with PayPal after Apple Pay authorization.
   *
   * @param options - Confirmation options including order ID, token, and contact information
   * @returns Promise resolving to the confirmed order response
   *
   * @example
   * ```typescript
   * appleSdkSession.onpaymentauthorized = async (event) => {
   *   const order = await createOrder();
   *   await applePaySession.confirmOrder({
   *     orderId: order.orderId,
   *     token: event.payment.token,
   *     billingContact: event.payment.billingContact,
   *     shippingContact: event.payment.shippingContact,
   *   });
   *   appleSdkSession.completePayment({
   *     status: ApplePaySession.STATUS_SUCCESS,
   *   });
   * };
   * ```
   */
  confirmOrder: (options: ConfirmOrderOptions) => Promise<ConfirmOrderResponse>;
};

/**
 * Interface for managing Apple Pay payment operations within the PayPal SDK.
 *
 * @remarks
 * This interface provides methods for creating and managing Apple Pay payment sessions,
 * allowing merchants to integrate Apple Pay as a payment method in their applications.
 *
 * The {@link ApplePayPaymentsInstance} enables seamless integration with Apple Pay's payment flow,
 * providing a secure and user-friendly way to process payments through the Apple Pay platform.
 *
 */
export interface ApplePayPaymentsInstance {
  /**
   * Creates an Apple Pay one-time payment session for processing payments through Apple Pay.
   *
   * @remarks
   * This method creates a session object that provides helper methods to bridge between
   * Apple's native ApplePaySession and PayPal's payment processing.
   *
   * The session provides methods to:
   * - Format configuration for Apple Pay payment requests
   * - Validate the merchant with Apple Pay
   * - Confirm orders with PayPal after Apple Pay authorization
   *
   * @returns A session object with methods to manage the Apple Pay payment flow
   *
   * @example
   * ```typescript
   * // Check if Apple Pay is available
   * const isApplePayAvailable =
   *   window.ApplePaySession && ApplePaySession.canMakePayments();
   *
   * if (!isApplePayAvailable) {
   *   return;
   * }
   *
   * // Create PayPal SDK Apple Pay session
   * const applePaySession = sdkInstance.createApplePayOneTimePaymentSession();
   *
   * // Get Apple Pay config from eligible methods
   * const paymentMethods = await sdkInstance.findEligibleMethods({
   *   currencyCode: "USD",
   * });
   *
   * if (paymentMethods.isEligible("applepay")) {
   *   const applePayConfig = paymentMethods.getDetails("applepay").config;
   *
   *   // Handle Apple Pay button click
   *   applePayButton.onclick = async () => {
   *     // Create Apple Pay payment request using the helper method
   *     const paymentRequest = {
   *       ...applePaySession.formatConfigForPaymentRequest(applePayConfig),
   *       countryCode: "US",
   *       currencyCode: "USD",
   *       total: {
   *         label: "Demo Store",
   *         amount: "100.00",
   *         type: "final",
   *       },
   *     };
   *
   *     // Start Apple's native ApplePaySession
   *     const appleSdkSession = new ApplePaySession(4, paymentRequest);
   *
   *     // Use Apple's native event handlers with PayPal SDK bridge methods
   *     appleSdkSession.onvalidatemerchant = async (event) => {
   *       const payload = await applePaySession.validateMerchant({
   *         validationUrl: event.validationURL,
   *         displayName: "My Store",
   *         domainName: "example.com",
   *       });
   *       appleSdkSession.completeMerchantValidation(payload.merchantSession);
   *     };
   *
   *     appleSdkSession.onpaymentauthorized = async (event) => {
   *       const order = await createOrder();
   *       await applePaySession.confirmOrder({
   *         orderId: order.orderId,
   *         token: event.payment.token,
   *         billingContact: event.payment.billingContact,
   *         shippingContact: event.payment.shippingContact,
   *       });
   *       appleSdkSession.completePayment({
   *         status: ApplePaySession.STATUS_SUCCESS,
   *       });
   *     };
   *
   *     appleSdkSession.begin();
   *   };
   * }
   * ```
   */
  createApplePayOneTimePaymentSession: () => ApplePayOneTimePaymentSession;
}

/**
 * Native Apple Pay session API (Safari-only).
 * @see https://developer.apple.com/documentation/apple_pay_on_the_web/applepaysession
 */
declare class ApplePaySession {
  static STATUS_SUCCESS: number;
  static STATUS_FAILURE: number;
  static canMakePayments(): boolean;
  static supportsVersion(version: number): boolean;
  constructor(version: number, paymentRequest: unknown);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onvalidatemerchant: ((event: any) => void) | null;
  onpaymentmethodselected: (() => void) | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onpaymentauthorized: ((event: any) => void) | null;
  oncancel: (() => void) | null;

  completeMerchantValidation(merchantSession: unknown): void;
  completePaymentMethodSelection(update: unknown): void;
  completePayment(result: { status: number }): void;
  begin(): void;
  abort(): void;
}

declare global {
  interface Window {
    ApplePaySession?: typeof ApplePaySession;
  }
}
