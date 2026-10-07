import type { UseApplePayOneTimePaymentSessionProps } from "../hooks/useApplePayOneTimePaymentSession";
import type { ApplePayButtonElementProps } from "../types/sdkWebComponents";
export type ApplePayOneTimePaymentButtonProps = UseApplePayOneTimePaymentSessionProps & Omit<ApplePayButtonElementProps, "disabled">;
/**
 * `ApplePayOneTimePaymentButton` renders a native Apple Pay button and manages
 * the full Apple Pay payment flow via the PayPal SDK.
 *
 * @example
 * ```tsx
 * <ApplePayOneTimePaymentButton
 *   applePayConfig={applePayConfig}
 *   paymentRequest={{
 *     countryCode: "US",
 *     currencyCode: "USD",
 *     total: { label: "Demo Store", amount: "100.00", type: "final" },
 *   }}
 *   createOrder={async () => {
 *     const res = await fetch("/api/orders", { method: "POST" });
 *     const data = await res.json();
 *     return { orderId: data.id };
 *   }}
 *   onApprove={(data) => console.log("Approved:", data)}
 *   onError={(err) => console.error(err)}
 * />
 * ```
 */
export declare const ApplePayOneTimePaymentButton: ({ buttonstyle, type, locale, className, ...hookProps }: ApplePayOneTimePaymentButtonProps) => JSX.Element | null;
