import type { BraintreeCheckoutWithVaultSessionOptions } from "../../types/braintree";
export type UseBraintreePayPalCheckoutWithVaultSessionProps = BraintreeCheckoutWithVaultSessionOptions;
export interface UseBraintreePayPalCheckoutWithVaultSessionReturn {
    error: Error | null;
    isPending: boolean;
    handleClick: () => void;
}
/**
 * Hook for managing checkout with vault sessions with Braintree PayPal.
 *
 * Combines a one-time charge and billing agreement consent in a single flow,
 * enabling merchants to charge a customer and save their payment method together.
 *
 * The hook returns an `isPending` flag that indicates whether the Braintree checkout
 * instance is still being initialized. Buttons should wait to render until `isPending`
 * is false.
 *
 * @returns Object with: `error` (any session error), `isPending` (checkout instance loading), `handleClick` (starts session)
 *
 * @example
 * function BraintreeCheckoutWithVaultButton() {
 *   const { braintreePayPalCheckoutInstance } = useBraintreePayPal();
 *   const { isPending, error, handleClick } = useBraintreePayPalCheckoutWithVaultSession({
 *     amount: "10.00",
 *     currency: "USD",
 *     billingAgreementDetails: { description: "Save payment method for future use" },
 *     onApprove: async (data) => {
 *       const payload = await braintreePayPalCheckoutInstance.tokenizePayment({
 *         payerID: data.payerId,
 *         orderID: data.orderId,
 *       });
 *       // Send payload.nonce to your server
 *     },
 *   });
 *
 *   if (isPending) return null;
 *   if (error) return <div>Error: {error.message}</div>;
 *
 *   return <button onClick={handleClick}>Pay and Save Payment Method</button>;
 * }
 */
export declare function useBraintreePayPalCheckoutWithVaultSession({ onApprove, onCancel, onError: onErrorCallback, onShippingAddressChange, onShippingOptionsChange, amount, currency, intent, commit, userAuthenticationEmail, returnUrl, cancelUrl, displayName, presentationMode, shippingCallbackUrl, billingAgreementDetails, lineItems, shippingOptions, amountBreakdown, }: UseBraintreePayPalCheckoutWithVaultSessionProps): UseBraintreePayPalCheckoutWithVaultSessionReturn;
