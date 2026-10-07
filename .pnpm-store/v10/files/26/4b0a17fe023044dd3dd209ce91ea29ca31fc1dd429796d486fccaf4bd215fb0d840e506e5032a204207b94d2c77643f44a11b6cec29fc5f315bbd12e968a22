import type { BraintreeBillingAgreementSessionOptions } from "../../types/braintree";
export type UseBraintreePayPalBillingAgreementSessionProps = BraintreeBillingAgreementSessionOptions;
export interface UseBraintreePayPalBillingAgreementSessionReturn {
    error: Error | null;
    isPending: boolean;
    handleClick: () => void;
}
/**
 * Hook for managing billing agreement sessions with Braintree PayPal.
 *
 * Supports all billing agreement plan types: basic vault-only (no planType),
 * RECURRING, SUBSCRIPTION, UNSCHEDULED, and INSTALLMENTS.
 *
 * The hook returns an `isPending` flag that indicates whether the Braintree checkout
 * instance is still being initialized. Buttons should wait to render until `isPending`
 * is false.
 *
 * For a ready-to-use component that wraps this hook, see `BraintreePayPalBillingAgreementButton`.
 *
 * @returns Object with: `error` (any session error), `isPending` (checkout instance loading), `handleClick` (starts session)
 *
 * @example
 * // Custom button using the hook directly with a <paypal-button> web component
 * function PayPalBillingAgreementButton(props: UseBraintreePayPalBillingAgreementSessionProps) {
 *   const { isPending, handleClick } = useBraintreePayPalBillingAgreementSession(props);
 *
 *   return (
 *     <paypal-button
 *       type="checkout"
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
 *   const handleApprove = async (data) => {
 *     const { nonce } = await braintreePayPalCheckoutInstance.tokenizePayment({
 *       billingToken: data.billingToken,
 *     });
 *     // Send nonce to your server to vault the payment method
 *   };
 *
 *   return (
 *     <PayPalBillingAgreementButton
 *       onApprove={handleApprove}
 *       onCancel={(data) => console.log("onCancel", data)}
 *       onError={(err) => console.error("onError", err)}
 *     />
 *   );
 * }
 *
 * @example
 * // Subscription billing agreement with plan metadata
 * <PayPalBillingAgreementButton
 *   billingAgreementDescription="Monthly subscription"
 *   planType="SUBSCRIPTION"
 *   planMetadata={{
 *     currencyIsoCode: "USD",
 *     name: "Premium Plan",
 *     billingCycles: [{
 *       billingFrequency: 1,
 *       billingFrequencyUnit: "MONTH",
 *       numberOfExecutions: 0,
 *       sequence: 1,
 *       startDate: "2025-12-01T00:00:00Z",
 *       trial: false,
 *       pricingScheme: { pricingModel: "FIXED", price: "9.99" },
 *     }],
 *   }}
 *   onApprove={handleApprove}
 * />
 */
export declare function useBraintreePayPalBillingAgreementSession({ onApprove, onCancel, onError: onErrorCallback, billingAgreementDescription, planType, amount, currency, offerCredit, userAction, displayName, returnUrl, cancelUrl, presentationMode, planMetadata, shippingAddressOverride, }: UseBraintreePayPalBillingAgreementSessionProps): UseBraintreePayPalBillingAgreementSessionReturn;
