import type { BraintreePayPalState } from "../../context/BraintreePayPalContext";
/**
 * Returns the {@link BraintreePayPalState} provided by a parent {@link BraintreePayPalProvider}.
 *
 * The returned state includes:
 * - `braintreePayPalCheckoutInstance` — the Braintree PayPal Checkout V6 instance
 *   used for `tokenizePayment()`, `findEligibleMethods()`, and `updatePayment()`
 * - `eligiblePaymentMethods` — eligibility result cached by `useBraintreeEligibleMethods`,
 *   or `null` if it has not been fetched yet
 * - `eligiblePaymentMethodsPayload` — the options the cached `eligiblePaymentMethods` was
 *   fetched with, used to detect stale data
 * - `loadingStatus` — `"pending"`, `"resolved"`, or `"rejected"`
 * - `error` — any initialization error
 * - `isHydrated` — `false` during SSR, `true` after client hydration
 *
 * Must be used within a `BraintreePayPalProvider`.
 *
 * @returns {BraintreePayPalState}
 *
 * @example
 * function CheckoutButtons() {
 *   const { braintreePayPalCheckoutInstance, loadingStatus } = useBraintreePayPal();
 *
 *   const handleOnApprove = async (data) => {
 *     const { nonce } = await braintreePayPalCheckoutInstance.tokenizePayment({
 *       orderID: data.orderId,
 *       payerID: data.payerId,
 *     });
 *     // Send nonce to your server to complete the transaction
 *   };
 *
 *   if (loadingStatus !== "resolved") return <div>Loading...</div>;
 *
 *   return (
 *     <BraintreePayPalOneTimePaymentButton
 *       amount="100"
 *       currency="USD"
 *       onApprove={handleOnApprove}
 *     />
 *   );
 * }
 */
export declare function useBraintreePayPal(): BraintreePayPalState;
