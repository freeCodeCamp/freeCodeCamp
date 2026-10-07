import {
  BasePaymentSessionOptions,
  BasePaymentSession,
  OnApproveDataOneTimePayments,
  PayPalWarning,
  PresentationModeOptionsForAuto,
} from "./base-component";
import {
  OnShippingAddressChangeData,
  OnShippingOptionsChangeData,
} from "./paypal-payments";

export type PayPalGuestOneTimePaymentSessionOptions =
  BasePaymentSessionOptions & {
    orderId?: string;
    onApprove: (data: OnApproveDataOneTimePayments) => Promise<void>;
    onWarn?: (data: PayPalWarning) => void;
  };

export type PayPalGuestPresentationModeOptions =
  PresentationModeOptionsForAuto & {
    targetElement?: string | EventTarget;
    buyerCountry?: string;
    onShippingAddressChange?: (
      data: OnShippingAddressChangeData,
    ) => Promise<void>;
    onShippingOptionsChange?: (
      data: OnShippingOptionsChangeData,
    ) => Promise<void>;
  };

export type PayPalGuestOneTimePaymentSessionPromise = Promise<{
  orderId: string;
}>;

export type PayPalGuestOneTimePaymentSession = Omit<
  BasePaymentSession,
  "start"
> & {
  start: (
    presentationModeOptions?: PayPalGuestPresentationModeOptions = {
      presentationMode: "auto",
    },
    paymentSessionPromise?: PayPalGuestOneTimePaymentSessionPromise,
  ) => Promise<void>;
};

/**
 * Interface for managing PayPal guest payment operations within the PayPal SDK.
 *
 * @remarks
 * This interface provides methods for creating and managing PayPal guest payment sessions,
 * allowing merchants to integrate the basic credit or debit button as a payment method in their applications.
 *
 * The {@link PayPalGuestPaymentsInstance} enables seamless integration with PayPal's guest payment flow,
 * providing a secure and user-friendly way to process payments through the PayPal platform.
 */
export interface PayPalGuestPaymentsInstance {
  createPayPalGuestOneTimePaymentSession: (
    paymentSessionOptions: PayPalGuestOneTimePaymentSessionOptions,
  ) => PayPalGuestOneTimePaymentSession;
}
