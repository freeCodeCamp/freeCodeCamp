import {
  OnShippingAddressChangeData,
  OnShippingOptionsChangeData,
} from "./paypal-payments";
import {
  PresentationModeOptionsForAuto,
  PresentationModeOptionsForModal,
  PresentationModeOptionsForPopup,
  PresentationModeOptionsForPaymentHandler,
  BasePaymentSessionOptions,
  BasePaymentSession,
} from "./base-component";

export type OnApproveDataSubscriptions = {
  subscriptionId: string;
  payerId?: string;
};

export type PayPalSubscriptionSessionOptions = Omit<
  BasePaymentSessionOptions,
  "onApprove"
> & {
  onApprove?: (data: OnApproveDataSubscriptions) => Promise<void>;
  onShippingAddressChange?: (
    data: OnShippingAddressChangeData,
  ) => Promise<void>;
  onShippingOptionsChange?: (
    data: OnShippingOptionsChangeData,
  ) => Promise<void>;
};

export type PayPalSubscriptionPaymentSession = Omit<
  BasePaymentSession,
  "start"
> & {
  start: (
    presentationModeOptions?: PayPalSubscriptionPresentationModeOptions = {
      presentationMode: "auto",
    },
    subscriptionsOptionsPromise?: Promise<{ subscriptionId: string }>,
  ) => Promise<void | { redirectURL?: string }>;
  hasReturned?: () => boolean;
  resume?: () => Promise<void>;
};

export interface PayPalSubscriptionsInstance {
  createPayPalSubscriptionPaymentSession: (
    subscriptionSessionOptions: PayPalSubscriptionSessionOptions,
  ) => PayPalSubscriptionPaymentSession;
}

export type PayPalSubscriptionPresentationModeOptions =
  | PresentationModeOptionsForAuto
  | PresentationModeOptionsForPopup
  | PresentationModeOptionsForModal
  | PresentationModeOptionsForPaymentHandler;
