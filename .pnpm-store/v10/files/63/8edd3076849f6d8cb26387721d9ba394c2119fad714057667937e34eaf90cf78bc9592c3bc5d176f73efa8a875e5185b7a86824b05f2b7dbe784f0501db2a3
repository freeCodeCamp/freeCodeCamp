import type { BraintreePayLaterSessionOptions } from "../../types/braintree";
export type UseBraintreePayPalPayLaterSessionProps = BraintreePayLaterSessionOptions;
export interface UseBraintreePayPalPayLaterSessionReturn {
    error: Error | null;
    isPending: boolean;
    handleClick: () => void;
}
/**
 * Hook for managing Pay Later (Buy Now, Pay Later) sessions with Braintree PayPal.
 *
 * The hook returns an `isPending` flag that indicates whether the Braintree checkout
 * instance is still being initialized. Buttons should wait to render until `isPending`
 * is false.
 *
 * @returns Object with: `error` (any session error), `isPending` (checkout instance loading), `handleClick` (starts session)
 *
 * @example
 * // Custom button using the hook directly with a <paypal-pay-later-button> web component
 * function PayPalPayLaterButton(props: UseBraintreePayPalPayLaterSessionProps) {
 *   const { isPending, handleClick } = useBraintreePayPalPayLaterSession(props);
 *   const { isLoading, eligiblePaymentMethods } = useBraintreeEligibleMethods({
 *     currency: "USD"
 *   });
 *
 *   if (isPending || isLoading) return <Spinner />;
 *
 *   if (!eligiblePaymentMethods?.paylater) {
 *    return null;
 *   }
 *
 *   const payLaterDetails = eligiblePaymentMethods.getDetails("paylater");
 *
 *   return (
 *     <paypal-pay-later-button
 *       onClick={() => handleClick()}
 *       disabled={isPending}
 *       countryCode={payLaterDetails?.countryCode}
 *       productCode={payLaterDetails?.productCode}
 *     />
 *   );
 * }
 *
 * // Pass your custom button props from a parent component:
 * function Checkout() {
 *   const { braintreePayPalCheckoutInstance } = useBraintreePayPal();
 *
 *   // Tokenize payment in the onApprove callback and send the nonce to your server
 *   const handleOnApprove = async (data) => {
 *     const { nonce } = await braintreePayPalCheckoutInstance.tokenizePayment(data);
 *     // Send nonce to your server to complete the transaction
 *   };
 *
 *   return (
 *     <PayPalPayLaterButton
 *       amount="100.00"
 *       currency="USD"
 *       onApprove={handleOnApprove}
 *       // ...other props (onCancel, onError, etc.)
 *     />
 *   );
 * }
 */
export declare function useBraintreePayPalPayLaterSession({ onApprove, onCancel, onComplete, onError: onErrorCallback, onShippingAddressChange, onShippingOptionsChange, amount, currency, intent, userAuthenticationEmail, returnUrl, cancelUrl, displayName, presentationMode, shippingCallbackUrl, lineItems, shippingOptions, amountBreakdown, shippingAddressOverride, contactPreference, }: UseBraintreePayPalPayLaterSessionProps): UseBraintreePayPalPayLaterSessionReturn;
