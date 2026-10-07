import type { UsePayPalCreditSavePaymentSessionProps } from "../hooks/usePayPalCreditSavePaymentSession";
export type PayPalCreditSavePaymentButtonProps = UsePayPalCreditSavePaymentSessionProps & {
    autoRedirect?: never;
    disabled?: boolean;
};
/**
 * `PayPalCreditSavePaymentButton` is a button that provides a PayPal Credit save payment flow.
 *
 * The `countryCode` is automatically populated from the eligibility API response
 * (available via `usePayPal().eligiblePaymentMethods`). The button requires eligibility to be configured
 * in the parent `PayPalProvider`, using either the `useEligibleMethods` hook client-side or `fetchEligibleMethods` server-side.
 *
 * Note, `autoRedirect` is not allowed because if given a `presentationMode` of `"redirect"` the button
 * would not be able to provide back `redirectURL` from `start`. Advanced integrations that need
 * `redirectURL` should use the {@link usePayPalCreditSavePaymentSession} hook directly.
 *
 * `presentationMode` is optional and defaults to `"auto"`.
 *
 * @example
 * <PayPalCreditSavePaymentButton
 *   onApprove={() => {
 *      // ... on approve logic
 *   }}
 *   vaultSetupToken="your-vault-setup-token"
 * />
 */
export declare const PayPalCreditSavePaymentButton: ({ disabled, ...hookProps }: PayPalCreditSavePaymentButtonProps) => JSX.Element | null;
