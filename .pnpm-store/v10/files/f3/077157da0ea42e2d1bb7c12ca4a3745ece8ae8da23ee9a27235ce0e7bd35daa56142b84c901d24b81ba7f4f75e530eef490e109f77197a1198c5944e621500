import type { ButtonProps } from "../types";
import type { UsePayPalOneTimePaymentSessionProps } from "../hooks/usePayPalOneTimePaymentSession";
type PayPalOneTimePaymentButtonProps = UsePayPalOneTimePaymentSessionProps & ButtonProps & {
    autoRedirect?: never;
};
/**
 * `PayPalOneTimePaymentButton` is a button that provides a standard PayPal payment flow.
 *
 * `PayPalOneTimePaymentButtonProps` combines the arguments for {@link UsePayPalOneTimePaymentSessionProps}
 * and {@link ButtonProps}.
 *
 * Note, `autoRedirect` is not allowed because if given a `presentationMode` of `"redirect"` the button
 * would not be able to provide back `redirectURL` from `start`. Advanced integrations that need
 * `redirectURL` should use the {@link usePayPalOneTimePaymentSession} hook directly.
 *
 * `presentationMode` is optional and defaults to `"auto"`.
 *
 * @example
 * <PayPalOneTimePaymentButton
 *   onApprove={() => {
 *      // ... on approve logic
 *   }}
 *   orderId="your-order-id"
 * />
 */
export declare const PayPalOneTimePaymentButton: ({ type, disabled, ...hookProps }: PayPalOneTimePaymentButtonProps) => JSX.Element | null;
export {};
