import type { ButtonProps } from "../types";
import type { UsePayPalSubscriptionPaymentSessionProps } from "../hooks/usePayPalSubscriptionPaymentSession";
export type PayPalSubscriptionButtonProps = UsePayPalSubscriptionPaymentSessionProps & ButtonProps & {
    autoRedirect?: never;
};
/**
 * `PayPalSubscriptionButton` is a button that provides a PayPal subscription payment flow.
 *
 * `PayPalSubscriptionButtonProps` combines the arguments for {@link UsePayPalSubscriptionPaymentSessionProps}
 * and {@link ButtonProps}.
 *
 * Note, `autoRedirect` is not allowed because if given a `presentationMode` of `"redirect"` the button
 * would not be able to provide back `redirectURL` from `start`. Advanced integrations that need
 * `redirectURL` should use the {@link usePayPalSubscriptionPaymentSession} hook directly.
 *
 * `presentationMode` is optional and defaults to `"auto"`.
 *
 * @example
 * <PayPalSubscriptionButton
 *   onApprove={() => {
 *      // ... on approve logic
 *   }}
 *   createSubscription={() => Promise.resolve({ subscriptionId: "SUB-123" })}
 * />
 */
export declare const PayPalSubscriptionButton: ({ type, disabled, ...hookProps }: PayPalSubscriptionButtonProps) => JSX.Element | null;
