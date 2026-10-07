import type { UsePayPalCreditOneTimePaymentSessionProps } from "../hooks/usePayPalCreditOneTimePaymentSession";
export type PayPalCreditOneTimePaymentButtonProps = UsePayPalCreditOneTimePaymentSessionProps & {
    autoRedirect?: never;
    disabled?: boolean;
};
/**
 * `PayPalCreditOneTimePaymentButton` is a button that provides a PayPal Credit payment flow.
 *
 * The `countryCode` is automatically populated from the eligibility API response
 * (available via `usePayPal().eligiblePaymentMethods`). The button requires eligibility to be configured
 * in the parent `PayPalProvider`, using either the `useEligibleMethods` hook client-side or `fetchEligibleMethods` server-side.
 *
 * **Eligibility must be fetched first.** Until eligibility is available, internally the button has no
 * `countryCode` to render with. Fetch eligibility (and wait for it) before rendering.
 *
 * Note, `autoRedirect` is not allowed because if given a `presentationMode` of `"redirect"` the button
 * would not be able to provide back `redirectURL` from `start`. Advanced integrations that need
 * `redirectURL` should use the {@link usePayPalCreditOneTimePaymentSession} hook directly.
 *
 * `presentationMode` is optional and defaults to `"auto"`.
 *
 * @example
 * function CreditCheckout() {
 *   // Fetch eligibility before rendering the button (or hydrate it server-side
 *   // via fetchEligibleMethods)
 *   const { eligiblePaymentMethods, isLoading } = useEligibleMethods({
 *     payload: { purchase_units: [{ amount: { currency_code: "USD" } }] },
 *   });
 *
 *   if (isLoading) return <Spinner />;
 *   if (!eligiblePaymentMethods?.isEligible("credit")) {
 *     return null;
 *   }
 *
 *   return (
 *     <PayPalCreditOneTimePaymentButton
 *       onApprove={() => {
 *         // ... on approve logic
 *       }}
 *       orderId="your-order-id"
 *     />
 *   );
 * }
 */
export declare const PayPalCreditOneTimePaymentButton: ({ disabled, ...hookProps }: PayPalCreditOneTimePaymentButtonProps) => JSX.Element | null;
