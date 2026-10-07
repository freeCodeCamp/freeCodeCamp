/* eslint-disable tsdoc/syntax */
/**
 * @module
 * @internal
 */
/* eslint-enable tsdoc/syntax */

export type OnApproveDataOneTimePayments = {
  orderId: string;
  payerId?: string;
  billingToken?: string;
};

export type OnCancelDataOneTimePayments = {
  orderId?: string;
};

export type OnCompleteData = {
  paymentSessionState: "approved" | "canceled" | "error";
};

export interface PayPalError extends Error {
  code: string;
  name: string;
  isRecoverable: boolean;
}

export interface PayPalWarning {
  code: string;
  message: string;
  name: string;
}

export type OnErrorData = PayPalError;

/**
 * use Omit\<BasePaymentSessionOptions, "onApprove"\> to change the arguments for onApprove()
 */
export type BasePaymentSessionOptions = {
  onApprove: (data: OnApproveDataOneTimePayments) => Promise<void>;
  onCancel?: (data: OnCancelDataOneTimePayments) => void;
  onComplete?: (data: OnCompleteData) => void;
  onError?: (data: OnErrorData) => void;
  testBuyerCountry?: string;
};

export type PresentationModeOptionsForPopup = {
  presentationMode: "popup";
  fullPageOverlay?: { enabled: boolean };
  autoRedirect?: undefined;
};

export type PresentationModeOptionsForModal = {
  presentationMode: "modal";
  fullPageOverlay?: undefined;
  autoRedirect?: undefined;
};

export type PresentationModeOptionsForRedirect = {
  presentationMode: "redirect";
  autoRedirect?: { enabled: boolean };
  fullPageOverlay?: { enabled: boolean };
};

export type PresentationModeOptionsForPaymentHandler = {
  presentationMode: "payment-handler";
  fullPageOverlay?: undefined;
  autoRedirect?: undefined;
};

export type PresentationModeOptionsForAuto = {
  presentationMode: "auto";
  fullPageOverlay?: { enabled: boolean };
  autoRedirect?: undefined;
};

export type PresentationModeOptionsForDirectAppSwitch = {
  presentationMode: "direct-app-switch";
  fullPageOverlay?: { enabled: boolean };
  autoRedirect?: { enabled: boolean };
};

export type CreateOrderPromise = Promise<{ orderId: string }>;

export type CreateOrderCallback = () => CreateOrderPromise;

/**
 * use Omit\<BasePaymentSession, "start"\> to change the arguments for start()
 */
export type BasePaymentSession = {
  start: (
    options?: PresentationModeOptionsForAuto = { presentationMode: "auto" },
    PaymentSessionPromise?: CreateOrderPromise,
  ) => Promise<void>;
  destroy: () => void;
  cancel: () => void;
};
