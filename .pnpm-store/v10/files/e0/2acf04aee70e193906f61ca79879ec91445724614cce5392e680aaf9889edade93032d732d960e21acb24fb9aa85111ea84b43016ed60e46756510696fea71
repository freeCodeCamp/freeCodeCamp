import {
  BasePaymentSessionOptions,
  BasePaymentSession,
  OnApproveDataOneTimePayments,
  PresentationModeOptionsForPopup,
  PresentationModeOptionsForModal,
  PresentationModeOptionsForAuto,
  PresentationModeOptionsForPaymentHandler,
  PresentationModeOptionsForRedirect,
  PresentationModeOptionsForDirectAppSwitch,
} from "./base-component";

export type PayLaterCountryCodes =
  | "AU"
  | "CA"
  | "DE"
  | "ES"
  | "FR"
  | "GB"
  | "IT"
  | "US";

export type PayLaterProductCodes = "PAYLATER" | "PAY_LATER_SHORT_TERM";

export type PayPalCreditCountryCodes = "US" | "GB";

export type ShippingAddressErrorType =
  | "ADDRESS_ERROR"
  | "COUNTRY_ERROR"
  | "STATE_ERROR"
  | "ZIP_ERROR";

export type ShippingAddressErrorMessages = Record<
  ShippingAddressErrorType,
  string
>;

export type ShippingOptionsErrorType =
  | "METHOD_UNAVAILABLE"
  | "STORE_UNAVAILABLE";

export type ShippingOptionsErrorMessages = Record<
  ShippingOptionsErrorType,
  string
>;

export type OnShippingAddressChangeData = {
  errors: ShippingAddressErrorMessages;
  orderId: string;
  shippingAddress: {
    city?: string;
    countryCode: string;
    postalCode?: string;
    state?: string;
  };
};

export type OnShippingOptionsChangeData = {
  errors: ShippingOptionsErrorMessages;
  orderId: string;
  selectedShippingOption: {
    amount: {
      currencyCode: string;
      value: string;
    };
    id: string;
    label: string;
    selected: boolean;
    type: string;
  };
};

export type OnApproveDataSavePayments = {
  vaultSetupToken: string;
  payerId?: string;
};

export type OnCancelDataSavePayments = {
  vaultSetupToken?: string;
};

export type PayPalOneTimePaymentSessionOptions = BasePaymentSessionOptions & {
  commit?: boolean;
  orderId?: string;
  onApprove?: (data: OnApproveDataOneTimePayments) => Promise<void>;
  onShippingAddressChange?: (
    data: OnShippingAddressChangeData,
  ) => Promise<void>;
  onShippingOptionsChange?: (
    data: OnShippingOptionsChangeData,
  ) => Promise<void>;
  savePayment?: boolean;
};

export type SavePaymentSessionOptions = Omit<
  BasePaymentSessionOptions,
  "onApprove" | "onCancel"
> & {
  clientMetadataId?: string;
  orderId?: never;
  vaultSetupToken?: string;
  onApprove?: (data: OnApproveDataSavePayments) => Promise<void>;
  onCancel?: (data: OnCancelDataSavePayments) => void;
};

export type PayPalPresentationModeOptions =
  | PresentationModeOptionsForAuto
  | PresentationModeOptionsForPopup
  | PresentationModeOptionsForModal
  | PresentationModeOptionsForPaymentHandler
  | PresentationModeOptionsForRedirect
  | PresentationModeOptionsForDirectAppSwitch;

export type OneTimePaymentSession = BasePaymentSession & {
  start: (
    presentationModeOptions?: PayPalPresentationModeOptions = {
      presentationMode: "auto",
    },
    paymentSessionPromise?: Promise<{ orderId: string }>,
  ) => Promise<void | { redirectURL?: string }>;
  hasReturned?: () => boolean;
  resume?: () => Promise<void>;
};

export type SavePaymentSession = Omit<BasePaymentSession, "start"> & {
  start: (
    presentationModeOptions?: PayPalPresentationModeOptions = {
      presentationMode: "auto",
    },
    paymentSessionPromise?: Promise<{ vaultSetupToken: string }>,
  ) => Promise<void>;
  hasReturned?: () => boolean;
  resume?: () => Promise<void>;
};

export type PayLaterOneTimePaymentSessionOptions =
  PayPalOneTimePaymentSessionOptions;

export type PayPalCreditOneTimePaymentSessionOptions =
  PayPalOneTimePaymentSessionOptions;

/**
 * PayPal Payments Instance interface for creating and managing different types of PayPal payment sessions.
 *
 * @remarks
 * This interface provides methods to create various PayPal payment flows including:
 * - One-time payments with standard PayPal
 * - Save payment methods for future use (vaulting)
 * - PayPal Pay Later financing options
 * - PayPal Credit transactions
 *
 * Each method returns a payment session object that can be used to initiate the corresponding
 * payment flow with different presentation modes (popup, modal, redirect, etc.).
 *
 * @example
 * ```typescript
 * // Create a one-time payment session
 * const paypalCheckout = sdkInstance.createPayPalOneTimePaymentSession({
 *   onApprove: (data) => console.log('Payment approved:', data),
 *   onCancel: () => console.log('Payment canceled'),
 *   onError: (data) => console.error('Payment error:', data)
 * });
 *
 * // Start the payment flow
 * await paypalCheckout.start({ mode: 'auto' });
 * ```
 */
export interface PayPalPaymentsInstance {
  /**
   * Creates a PayPal one-time payment session for processing single payments through PayPal.
   *
   * @remarks
   * This method allows you to configure callback functions to handle different stages
   * of the PayPal checkout process, including payment approval, shipping address changes,
   * shipping option changes, cancelation, and errors.
   *
   * @param paymentSessionOptions - Configuration options for the PayPal payment session
   * @returns A session object that can be used to start the payment flow
   *
   * @example
   * ```typescript
   * const paypalSession = sdkInstance.createPayPalOneTimePaymentSession({
   *   onApprove: (data) => {
   *     console.log('PayPal payment approved:', data);
   *   },
   *   onShippingAddressChange: (data) => {
   *     console.log('Shipping address changed:', data);
   *   },
   *   onShippingOptionsChange: (data) => {
   *     console.log('Shipping options changed:', data);
   *   },
   *   onCancel: () => {
   *     console.log('PayPal payment canceled');
   *   },
   *   onError: (data) => {
   *     console.error('PayPal payment error:', data);
   *   }
   * });
   * ```
   */
  createPayPalOneTimePaymentSession: (
    paymentSessionOptions: PayPalOneTimePaymentSessionOptions,
  ) => OneTimePaymentSession;
  /**
   * Creates a PayPal save payment session for storing payment methods for future use.
   *
   * @remarks
   * This method allows you to set up vault payment sessions where customers can save
   * their PayPal payment method for future transactions without re-entering details.
   *
   * @param paymentSessionOptions - Configuration options for the save payment session
   * @returns A session object that can be used to start the vault setup flow
   *
   * @example
   * ```typescript
   * const savePaymentSession = sdkInstance.createPayPalSavePaymentSession({
   *   vaultSetupToken: 'your-vault-setup-token',
   *   onApprove: (data) => {
   *     console.log('Payment method saved:', data);
   *   },
   *   onCancel: () => {
   *     console.log('Save payment canceled');
   *   },
   *   onError: (data) => {
   *     console.error('Save payment error:', data);
   *   }
   * });
   * ```
   */
  createPayPalSavePaymentSession: (
    paymentSessionOptions: SavePaymentSessionOptions,
  ) => SavePaymentSession;
  /**
   * Creates a PayPal Pay Later one-time payment session for buy now, pay later transactions.
   *
   * @remarks
   * This method enables customers to make purchases and pay for them over time through
   * PayPal's Pay Later financing options. Available in supported countries.
   *
   * @param paymentSessionOptions - Configuration options for the Pay Later payment session
   * @returns A session object that can be used to start the Pay Later flow
   *
   * @example
   * ```typescript
   * const payLaterSession = sdkInstance.createPayLaterOneTimePaymentSession({
   *   onApprove: (data) => {
   *     console.log('Pay Later payment approved:', data);
   *   },
   *   onCancel: () => {
   *     console.log('Pay Later payment canceled');
   *   },
   *   onError: (data) => {
   *     console.error('Pay Later payment error:', data);
   *   }
   * });
   * ```
   */
  createPayLaterOneTimePaymentSession: (
    paymentSessionOptions: PayLaterOneTimePaymentSessionOptions,
  ) => OneTimePaymentSession;
  /**
   * Creates a PayPal Credit one-time payment session for credit-based transactions.
   *
   * @remarks
   * This method enables customers to make purchases using PayPal Credit, allowing them
   * to pay over time with financing options. Available in supported countries.
   *
   * @param paymentSessionOptions - Configuration options for the PayPal Credit payment session
   * @returns A session object that can be used to start the PayPal Credit flow
   *
   * @example
   * ```typescript
   * const creditSession = sdkInstance.createPayPalCreditOneTimePaymentSession({
   *   onApprove: (data) => {
   *     console.log('PayPal Credit payment approved:', data);
   *   },
   *   onCancel: () => {
   *     console.log('PayPal Credit payment canceled');
   *   },
   *   onError: (data) => {
   *     console.error('PayPal Credit payment error:', data);
   *   }
   * });
   * ```
   */
  createPayPalCreditOneTimePaymentSession: (
    paymentSessionOptions: PayPalCreditOneTimePaymentSessionOptions,
  ) => OneTimePaymentSession;
  /**
   * Creates a PayPal Credit save payment session for storing PayPal Credit payment methods for future use.
   *
   * @remarks
   * This method allows you to set up vault payment sessions where customers can save
   * their PayPal Credit payment method for future transactions without re-entering details.
   * Available in supported countries.
   *
   * @param paymentSessionOptions - Configuration options for the PayPal Credit save payment session
   * @returns A session object that can be used to start the PayPal Credit vault setup flow
   *
   * @example
   * ```typescript
   * const savePayPalCreditSession = sdkInstance.createPayPalCreditSavePaymentSession({
   *   vaultSetupToken: 'your-vault-setup-token',
   *   onApprove: (data) => {
   *     console.log('PayPal Credit payment method saved:', data);
   *   },
   *   onCancel: () => {
   *     console.log('Save PayPal Credit payment canceled');
   *   },
   *   onError: (data) => {
   *     console.error('Save PayPal Credit payment error:', data);
   *   }
   * });
   * ```
   */
  createPayPalCreditSavePaymentSession: (
    paymentSessionOptions: SavePaymentSessionOptions,
  ) => SavePaymentSession;
}
