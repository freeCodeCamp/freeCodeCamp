import {
  BasePaymentSessionOptions,
  BasePaymentSession,
  PresentationModeOptionsForPopup,
  PresentationModeOptionsForModal,
  PresentationModeOptionsForAuto,
  PresentationModeOptionsForPaymentHandler,
} from "./base-component";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PayPalPaymentsInstance } from "./paypal-payments.d";

export type OnApproveDataBillingAgreements = {
  billingToken: string;
  payerId?: string;
};

export type OnCancelDataBillingAgreements = {
  billingToken?: string;
};

export type PayPalLegacyBillingAgreementsSessionOptions = Omit<
  BasePaymentSessionOptions,
  "onApprove" | "onCancel"
> & {
  billingToken?: string;
  onApprove: (data: OnApproveDataBillingAgreements) => Promise<void>;
  onCancel?: (data: OnCancelDataBillingAgreements) => void;
};

export type PayPalLegacyBillingPresentationModeOptions =
  | PresentationModeOptionsForAuto
  | PresentationModeOptionsForPopup
  | PresentationModeOptionsForModal
  | PresentationModeOptionsForPaymentHandler;

export type PayPalLegacyBillingAgreementsSessionPromise = Promise<{
  billingToken: string;
}>;

export type PayPalLegacyBillingAgreementsSession = Omit<
  BasePaymentSession,
  "start"
> & {
  start: (
    presentationModeOptions?: PayPalLegacyBillingPresentationModeOptions = {
      presentationMode: "auto",
    },
    paymentSessionPromise?: PayPalLegacyBillingAgreementsSessionPromise,
  ) => Promise<void>;
};

/**
 * Interface for PayPal legacy billing agreement functionality.
 *
 * @deprecated This interface provides legacy billing agreement methods that should not be used for new implementations.
 * Use the newer vault setup token approach with {@link PayPalPaymentsInstance.createPayPalSavePaymentSession} instead.
 *
 * @remarks
 * Provides methods for creating billing agreements without requiring an immediate purchase.
 * This legacy interface allows merchants to set up recurring payment agreements with customers
 * that can be used for future transactions.
 *
 * @example
 * ```typescript
 * // Legacy billing agreement setup (deprecated)
 * const billingAgreementWithoutPurchaseSession = sdkInstance.createPayPalBillingAgreementWithoutPurchase({
 *   billingToken: 'your-billing-token',
 *   onApprove: (data) => {
 *     console.log('Billing agreement approved:', data);
 *   },
 *   onCancel: () => {
 *     console.log('Billing agreement canceled');
 *   },
 *   onError: (data) => {
 *     console.error('Billing agreement error:', data);
 *   }
 * });
 *
 * // Start the billing agreement flow
 * await billingAgreementWithoutPurchaseSession.start({
 *   mode: 'popup'
 * });
 * ```
 *
 * @see {@link PayPalPaymentsInstance.createPayPalSavePaymentSession} For the recommended modern approach
 */
export interface PayPalLegacyBillingInstance {
  /**
   * Creates a PayPal billing agreement session without requiring an immediate purchase.
   *
   * @deprecated This method is legacy and should not be used for new implementations.
   * Use the newer vault setup token approach with {@link PayPalPaymentsInstance.createPayPalSavePaymentSession} instead.
   *
   * @remarks
   * This legacy method allows merchants to set up recurring payment agreements with customers
   * that can be used for future transactions.
   *
   * @param paymentSessionOptions - Configuration options for the billing agreement session
   * @returns A session object that can be used to start the billing agreement flow
   *
   * @example
   * ```typescript
   * const billingSession = sdkInstance.createPayPalBillingAgreementWithoutPurchase({
   *   billingToken: 'your-billing-token',
   *   onApprove: (data) => {
   *     console.log('Billing agreement approved:', data);
   *   },
   *   onCancel: () => {
   *     console.log('Billing agreement canceled');
   *   },
   *   onError: (data) => {
   *     console.error('Billing agreement error:', data);
   *   }
   * });
   * ```
   */
  createPayPalBillingAgreementWithoutPurchase: (
    paymentSessionOptions: PayPalLegacyBillingAgreementsSessionOptions,
  ) => PayPalLegacyBillingAgreementsSession;
}
