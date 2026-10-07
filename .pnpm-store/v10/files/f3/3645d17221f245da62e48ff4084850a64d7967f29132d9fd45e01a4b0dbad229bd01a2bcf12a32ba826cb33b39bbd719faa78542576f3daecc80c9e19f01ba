import type { ButtonProps } from "../types";
import type { UsePayPalSavePaymentSessionProps } from "../hooks/usePayPalSavePaymentSession";
type PayPalSavePaymentButtonProps = UsePayPalSavePaymentSessionProps & ButtonProps & {
    autoRedirect?: never;
};
/**
 * `PayPalSavePaymentButton` is a button that provides a PayPal vault/save payment flow
 * (without purchase).
 *
 * `PayPalSavePaymentButtonProps` combines the arguments for {@link UsePayPalSavePaymentSessionProps}
 * and {@link ButtonProps}.
 *
 * Note, `autoRedirect` is not allowed because if given a `presentationMode` of `"redirect"` the button
 * would not be able to provide back `redirectURL` from `start`. Advanced integrations that need
 * `redirectURL` should use the {@link usePayPalSavePaymentSession} hook directly.
 *
 * `presentationMode` is optional and defaults to `"auto"`.
 *
 * @example
 * <PayPalSavePaymentButton
 *   onApprove={() => {
 *      // ... on approve logic
 *   }}
 *   vaultSetupToken="your-vault-setup-token"
 * />
 */
export declare const PayPalSavePaymentButton: ({ type, disabled, ...hookProps }: PayPalSavePaymentButtonProps) => JSX.Element | null;
export {};
