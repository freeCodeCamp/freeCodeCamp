import {
  BasePaymentSessionOptions,
  BasePaymentSession,
  PresentationModeOptionsForPopup,
  PresentationModeOptionsForModal,
  PresentationModeOptionsForAuto,
} from "./base-component";

export type VenmoOneTimePaymentSessionOptions = BasePaymentSessionOptions & {
  orderId?: string;
};

export type VenmoSavePaymentSessionOptions = Omit<
  VenmoOneTimePaymentSessionOptions,
  "onApprove"
> & {
  vaultSetupToken?: string;
  onApprove?: (data: { vaultSetupToken: string }) => Promise<void>;
};

export type VenmoPresentationModeOptions =
  | PresentationModeOptionsForAuto
  | PresentationModeOptionsForPopup
  | PresentationModeOptionsForModal;

export type VenmoOneTimePaymentSessionPromise = Promise<{ orderId: string }>;

export type VenmoSavePaymentSessionPromise = Promise<{
  vaultSetupToken: string;
}>;

export type VenmoOneTimePaymentSession = Omit<BasePaymentSession, "start"> & {
  start: (
    presentationModeOptions?: VenmoPresentationModeOptions = {
      presentationMode: "auto",
    },
    paymentSessionPromise?: VenmoOneTimePaymentSessionPromise,
  ) => Promise<void>;
};

export type VenmoSavePaymentSession = Omit<BasePaymentSession, "start"> & {
  start: (
    presentationModeOptions?: VenmoPresentationModeOptions = {
      presentationMode: "auto",
    },
    paymentSessionPromise?: VenmoSavePaymentSessionPromise,
  ) => Promise<void>;
};

/**
 * Interface for managing Venmo payment operations within the PayPal SDK.
 *
 * @remarks
 * This interface provides methods for creating and managing Venmo payment sessions,
 * allowing merchants to integrate Venmo as a payment method in their applications.
 *
 * The {@link VenmoPaymentsInstance} enables seamless integration with Venmo's payment flow,
 * providing a secure and user-friendly way to process payments through the Venmo platform.
 */
export interface VenmoPaymentsInstance {
  /**
   * Creates a Venmo one-time payment session for processing payments through Venmo.
   *
   * @remarks
   * This method allows you to configure callback functions to handle different stages
   * of the Venmo checkout process, including payment approval, cancelation, and errors.
   *
   * @param paymentSessionOptions - Configuration options for the Venmo payment session
   * @returns A session object that can be used to start the payment flow
   *
   * @example
   * ```typescript
   * const venmoSession = sdkInstance.createVenmoOneTimePaymentSession({
   *   onApprove: (data) => {
   *     console.log('Venmo payment approved:', data);
   *   },
   *   onCancel: () => {
   *     console.log('Venmo payment canceled');
   *   },
   *   onError: (data) => {
   *     console.error('Venmo payment error:', data);
   *   }
   * });
   * ```
   */
  createVenmoOneTimePaymentSession: (
    paymentSessionOptions: VenmoOneTimePaymentSessionOptions,
  ) => VenmoOneTimePaymentSession;
  /**
   * Creates a Venmo save payment session for storing payment methods for future use.
   *
   * @remarks
   * This method allows you to configure a Venmo vault setup flow where a buyer can
   * save their Venmo account for future transactions without a purchase.
   *
   * @param paymentSessionOptions - Configuration options for the Venmo save payment session
   * @returns A session object that can be used to start the vault setup flow
   *
   * @example
   * ```typescript
   * const venmoSaveSession = sdkInstance.createVenmoSavePaymentSession({
   *   onApprove: async ({ vaultSetupToken }) => {
   *     console.log('Venmo payment method saved:', vaultSetupToken);
   *   },
   *   onCancel: () => {
   *     console.log('Venmo save payment canceled');
   *   },
   *   onError: (data) => {
   *     console.error('Venmo save payment error:', data);
   *   }
   * });
   *
   * const createVaultSetupToken = () =>
   *   Promise.resolve({ vaultSetupToken: 'vault_setup_token' });
   *
   * await venmoSaveSession.start(
   *   { presentationMode: 'auto' },
   *   createVaultSetupToken()
   * );
   * ```
   */
  createVenmoSavePaymentSession: (
    paymentSessionOptions: VenmoSavePaymentSessionOptions,
  ) => VenmoSavePaymentSession;
}
