import type { ButtonProps } from "../../types";
import type { UseBraintreePayPalBillingAgreementSessionProps } from "../../hooks/Braintree/useBraintreePayPalBillingAgreementSession";
export type BraintreePayPalBillingAgreementButtonProps = UseBraintreePayPalBillingAgreementSessionProps & ButtonProps;
/**
 * `BraintreePayPalBillingAgreementButton` is a prebuilt button that renders a `<paypal-button>`
 * web component and manages the Braintree PayPal billing agreement flow.
 *
 * Combines UseBraintreePayPalBillingAgreementSessionProps and ButtonProps.
 * Must be rendered inside a BraintreePayPalProvider.
 *
 * For full control over the button UI, use the {@link useBraintreePayPalBillingAgreementSession}
 * hook directly instead.
 *
 * @example
 * function CheckoutButtons() {
 *   const { braintreePayPalCheckoutInstance } = useBraintreePayPal();
 *
 *   const handleApprove = async (data) => {
 *     const { nonce } = await braintreePayPalCheckoutInstance.tokenizePayment({
 *       billingToken: data.billingToken,
 *     });
 *     // Send nonce to your server to vault the payment method
 *   };
 *
 *   return (
 *     <BraintreePayPalBillingAgreementButton
 *       onApprove={handleApprove}
 *       onCancel={(data) => console.log("onCancel", data)}
 *       onError={(err) => console.error("onError", err)}
 *     />
 *   );
 * }
 */
export declare const BraintreePayPalBillingAgreementButton: ({ type, disabled, onApprove, onCancel, onError, billingAgreementDescription, planType, amount, currency, offerCredit, userAction, displayName, returnUrl, cancelUrl, presentationMode, planMetadata, shippingAddressOverride, }: BraintreePayPalBillingAgreementButtonProps) => JSX.Element | null;
