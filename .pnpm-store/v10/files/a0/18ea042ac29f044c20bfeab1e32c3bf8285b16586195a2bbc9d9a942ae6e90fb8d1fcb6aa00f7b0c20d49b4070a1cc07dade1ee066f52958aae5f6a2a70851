import type { UseGooglePayOneTimePaymentSessionProps } from "../hooks/useGooglePayOneTimePaymentSession";
import type { GooglePayButtonOptions } from "../types";
export type GooglePayButtonStyle = Omit<GooglePayButtonOptions, "onClick">;
export type GooglePayOneTimePaymentButtonProps = UseGooglePayOneTimePaymentSessionProps & GooglePayButtonStyle & {
    /**
     * Whether the button is disabled.
     * @default false
     */
    disabled?: boolean;
};
/**
 * `GooglePayOneTimePaymentButton` renders a native Google Pay button and manages
 * the full Google Pay payment flow via the PayPal SDK.
 *
 * Unlike PayPal/Venmo buttons (which use PayPal web components), this component
 * mounts the native Google Pay button created by `google.payments.api.PaymentsClient.createButton()`.
 *
 * @example
 * ```tsx
 * <GooglePayOneTimePaymentButton
 *   googlePayConfig={googlePayConfig}
 *   transactionInfo={{
 *     countryCode: "US",
 *     currencyCode: "USD",
 *     totalPriceStatus: "FINAL",
 *     totalPrice: "100.00",
 *   }}
 *   createOrder={async () => {
 *     const res = await fetch("/api/orders", { method: "POST" });
 *     const data = await res.json();
 *     return { orderId: data.id };
 *   }}
 *   onApprove={(data) => console.log("Approved:", data)}
 *   onError={(err) => console.error(err)}
 *   buttonColor="black"
 *   buttonType="pay"
 * />
 * ```
 */
export declare const GooglePayOneTimePaymentButton: ({ disabled, buttonType, buttonColor, buttonSizeMode, buttonLocale, ...hookProps }: GooglePayOneTimePaymentButtonProps) => JSX.Element | null;
