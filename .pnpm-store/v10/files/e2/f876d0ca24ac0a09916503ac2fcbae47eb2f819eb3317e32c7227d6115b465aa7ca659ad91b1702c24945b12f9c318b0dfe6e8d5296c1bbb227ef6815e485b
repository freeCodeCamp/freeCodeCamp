import type { BraintreeOneTimePaymentSessionOptions } from "../../types/braintree";
export type UseBraintreePayPalOneTimePaymentSessionProps = BraintreeOneTimePaymentSessionOptions;
export interface UseBraintreePayPalOneTimePaymentSessionReturn {
    error: Error | null;
    isPending: boolean;
    handleClick: () => void;
}
/**
 * Hook for managing one-time payment sessions with Braintree PayPal.
 *
 * The hook returns an `isPending` flag that indicates whether the Braintree checkout
 * instance is still being initialized. Buttons should wait to render until `isPending`
 * is false.
 *
 * For a ready-to-use component that wraps this hook, see `BraintreePayPalOneTimePaymentButton`.
 *
 * @returns Object with: `error` (any session error), `isPending` (checkout instance loading), `handleClick` (starts session)
 *
 * @example
 * // Custom button using the hook directly with a <paypal-button> web component
 * function PayPalOneTimePaymentButton(props: UseBraintreePayPalOneTimePaymentSessionProps) {
 *   const { isPending, handleClick } = useBraintreePayPalOneTimePaymentSession(props);
 *
 *   return (
 *     <paypal-button
 *       type="pay"
 *       onClick={() => handleClick()}
 *       disabled={isPending}
 *     />
 *   );
 * }
 *
 * // Usage with tokenization in onApprove:
 * function Checkout() {
 *   const { braintreePayPalCheckoutInstance } = useBraintreePayPal();
 *
 *   const handleOnApprove = async (data) => {
 *     const { nonce } = await braintreePayPalCheckoutInstance.tokenizePayment({
 *       orderID: data.orderId,
 *       payerID: data.payerId,
 *     });
 *     // Send nonce to your server to complete the transaction
 *   };
 *
 *   return (
 *     <PayPalOneTimePaymentButton
 *       amount="10.00"
 *       currency="USD"
 *       onApprove={handleOnApprove}
 *     />
 *   );
 * }
 */
export declare function useBraintreePayPalOneTimePaymentSession({ onApprove, onCancel, onError: onErrorCallback, onShippingAddressChange, onShippingOptionsChange, amount, currency, intent, commit, offerCredit, userAuthenticationEmail, returnUrl, cancelUrl, displayName, presentationMode, shippingCallbackUrl, lineItems, shippingOptions, amountBreakdown, shippingAddressOverride, }: UseBraintreePayPalOneTimePaymentSessionProps): UseBraintreePayPalOneTimePaymentSessionReturn;
