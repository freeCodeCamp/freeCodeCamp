import type { UsePayLaterOneTimePaymentSessionProps } from "../hooks/usePayLaterOneTimePaymentSession";
export type PayLaterOneTimePaymentButtonProps = UsePayLaterOneTimePaymentSessionProps & {
    autoRedirect?: never;
    disabled?: boolean;
};
/**
 * `PayLaterOneTimePaymentButton` is a button that provides a PayLater payment flow.
 *
 * `PayLaterOneTimePaymentButtonProps` combines the arguments for {@link UsePayLaterOneTimePaymentSessionProps}
 * with a `disabled` prop.
 *
 * The `countryCode` and `productCode` are automatically populated from the eligibility API response
 * (available via `usePayPal().eligiblePaymentMethods`). The button requires eligibility to be configured
 * in the parent `PayPalProvider`, using either the `useEligibleMethods` hook client-side or
 * `fetchEligibleMethods` server-side.
 *
 * **Eligibility must be fetched first.** Until eligibility is available, internally the button has no
 * `countryCode`/`productCode` to render with. Fetch eligibility (and wait for it) before rendering.
 *
 * Note, `autoRedirect` is not allowed because if given a `presentationMode` of `"redirect"` the button
 * would not be able to provide back `redirectURL` from `start`. Advanced integrations that need
 * `redirectURL` should use the {@link usePayLaterOneTimePaymentSession} hook directly.
 *
 * `presentationMode` is optional and defaults to `"auto"`.
 *
 * @example
 * function PayLaterCheckout() {
 *   // Fetch eligibility before rendering the button (or hydrate it server-side
 *   // via fetchEligibleMethods)
 *   const { eligiblePaymentMethods, isLoading } = useEligibleMethods({
 *     payload: { purchase_units: [{ amount: { currency_code: "USD" } }] },
 *   });
 *
 *   if (isLoading) return <Spinner />;
 *   if (!eligiblePaymentMethods?.isEligible("paylater")) {
 *     return null;
 *   }
 *
 *   return (
 *     <PayLaterOneTimePaymentButton
 *       onApprove={() => {
 *         // ... on approve logic
 *       }}
 *       orderId="your-order-id"
 *     />
 *   );
 * }
 */
export declare const PayLaterOneTimePaymentButton: ({ disabled, ...hookProps }: PayLaterOneTimePaymentButtonProps) => JSX.Element | null;
