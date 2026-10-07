import type { ButtonProps } from "../../types";
import type { UseBraintreePayPalOneTimePaymentSessionProps } from "../../hooks/Braintree/useBraintreePayPalOneTimePaymentSession";
type BraintreePayPalButtonProps = UseBraintreePayPalOneTimePaymentSessionProps & ButtonProps;
/**
 * `BraintreePayPalOneTimePaymentButton` is a prebuilt button that renders a `<paypal-button>`
 * web component and manages the Braintree PayPal one-time payment flow.
 *
 * Combines {@link UseBraintreePayPalOneTimePaymentSessionProps} and {@link ButtonProps}.
 * Must be rendered inside a BraintreePayPalProvider.
 *
 * For full control over the button UI, use the {@link useBraintreePayPalOneTimePaymentSession}
 * hook directly instead.
 *
 * @example
 * function CheckoutButtons() {
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
 *     <BraintreePayPalOneTimePaymentButton
 *       amount="100"
 *       currency="USD"
 *       onApprove={handleOnApprove}
 *     />
 *   );
 * }
 */
export declare const BraintreePayPalOneTimePaymentButton: ({ type, disabled, onApprove, onCancel, onError, onShippingAddressChange, onShippingOptionsChange, amount, currency, intent, commit, offerCredit, userAuthenticationEmail, returnUrl, cancelUrl, displayName, presentationMode, lineItems, shippingOptions, amountBreakdown, }: BraintreePayPalButtonProps) => JSX.Element | null;
export {};
