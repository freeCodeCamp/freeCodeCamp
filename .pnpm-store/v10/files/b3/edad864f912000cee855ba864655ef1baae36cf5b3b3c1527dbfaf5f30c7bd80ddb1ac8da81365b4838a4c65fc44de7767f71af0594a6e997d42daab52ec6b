import type { ButtonProps } from "../../types";
import type { UseBraintreePayPalCheckoutWithVaultSessionProps } from "../../hooks/Braintree/useBraintreePayPalCheckoutWithVaultSession";
export type BraintreePayPalCheckoutWithVaultButtonProps = UseBraintreePayPalCheckoutWithVaultSessionProps & ButtonProps;
/**
 * `BraintreePayPalCheckoutWithVaultButton` is a button that provides a Braintree PayPal checkout with vault flow.
 *
 * `BraintreePayPalCheckoutWithVaultButtonProps` combines the arguments for {@link UseBraintreePayPalCheckoutWithVaultSessionProps}
 * and {@link ButtonProps}.
 *
 * Must be rendered inside a `BraintreePayPalProvider`.
 *
 * @example
 * <BraintreePayPalCheckoutWithVaultButton
 *   amount="10.00"
 *   currency="USD"
 *   billingAgreementDetails={{ description: "Save payment method for future use" }}
 *   onApprove={async (data) => {
 *     const payload = await braintreePayPalCheckoutInstance.tokenizePayment({
 *       payerID: data.payerId,
 *       orderID: data.orderId,
 *     });
 *     // Send payload.nonce to your server
 *   }}
 * />
 */
export declare const BraintreePayPalCheckoutWithVaultButton: ({ type, disabled, onApprove, onCancel, onError, onShippingAddressChange, onShippingOptionsChange, amount, currency, intent, commit, userAuthenticationEmail, returnUrl, cancelUrl, displayName, presentationMode, billingAgreementDetails, lineItems, shippingOptions, amountBreakdown, }: BraintreePayPalCheckoutWithVaultButtonProps) => JSX.Element | null;
