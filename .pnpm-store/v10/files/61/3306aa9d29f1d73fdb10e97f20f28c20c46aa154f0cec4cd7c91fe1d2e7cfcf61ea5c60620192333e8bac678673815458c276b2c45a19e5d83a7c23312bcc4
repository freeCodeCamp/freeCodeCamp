import type { ApplePayConfig, ConfirmOrderResponse, BasePaymentSessionReturn } from "../types";
export type ApplePayLineItem = {
    label: string;
    amount: string;
    type?: "final" | "pending";
};
export type ApplePayPaymentRequest = {
    countryCode: string;
    currencyCode: string;
    total: ApplePayLineItem;
    requiredBillingContactFields?: string[];
    requiredShippingContactFields?: string[];
    shippingMethods?: unknown[];
    lineItems?: ApplePayLineItem[];
    applicationData?: string;
    /** Allows additional ApplePayPaymentRequest fields not explicitly typed above. */
    [key: string]: unknown;
};
export type UseApplePayOneTimePaymentSessionProps = {
    /**
     * Apple Pay configuration from findEligibleMethods.
     * Used to format the payment request with merchant capabilities and supported networks.
     */
    applePayConfig: ApplePayConfig;
    /**
     * Payment request configuration for Apple Pay.
     * This includes amount, country, currency, and other payment details.
     */
    paymentRequest: ApplePayPaymentRequest;
    /**
     * Optional display name for merchant validation.
     * Defaults to domain name if not provided.
     */
    displayName?: string;
    /**
     * Optional domain name for merchant validation.
     * Defaults to current domain if not provided.
     */
    domainName?: string;
    /**
     * Callback function to create an order.
     * Should return a promise that resolves to an object with orderId.
     */
    createOrder: () => Promise<{
        orderId: string;
    }>;
    /**
     * Callback invoked when the payment is successfully approved.
     * Keep this callback fast — it runs before Apple Pay session completion,
     * which has a strict timeout window (commonly around 30 seconds).
     * Move non-critical follow-up work to onApproveCompleted instead.
     */
    onApprove: (data: ConfirmOrderResponse) => void | Promise<void>;
    /**
     * Optional callback invoked after Apple Pay session completion succeeds.
     * Use this for non-critical follow-up work that should not block completion.
     */
    onApproveCompleted?: (data: ConfirmOrderResponse) => void | Promise<void>;
    /**
     * Optional callback invoked when the payment is cancelled.
     */
    onCancel?: () => void;
    /**
     * Optional callback invoked when an error occurs.
     */
    onError?: (error: Error) => void;
    /**
     * Apple Pay JS API version passed to the ApplePaySession constructor.
     * Must be at least 4 (required by completePaymentMethodSelection update object form).
     * Higher versions unlock newer payment request features but require newer devices.
     */
    applePaySessionVersion: number;
};
/**
 * Hook for managing Apple Pay one-time payment sessions.
 *
 * This hook creates and manages a complete Apple Pay payment session, handling the entire
 * flow from button click through merchant validation to payment confirmation.
 *
 * @example
 * ```typescript
 * function ApplePayCheckoutButton() {
 *   const { sdkInstance } = usePayPal();
 *   const [applePayConfig, setApplePayConfig] = useState(null);
 *
 *   useEffect(() => {
 *     const fetchConfig = async () => {
 *       const methods = await sdkInstance?.findEligibleMethods({ currencyCode: "USD" });
 *       if (methods?.isEligible("applepay")) {
 *         setApplePayConfig(methods.getDetails("applepay").config);
 *       }
 *     };
 *     fetchConfig();
 *   }, [sdkInstance]);
 *
 *   const { isPending, error, handleClick } = useApplePayOneTimePaymentSession({
 *     applePayConfig,
 *     paymentRequest: {
 *       countryCode: "US",
 *       currencyCode: "USD",
 *       total: { label: "Demo Store", amount: "100.00", type: "final" },
 *     },
 *     createOrder: async () => {
 *       const response = await fetch("/api/orders", { method: "POST" });
 *       const data = await response.json();
 *       return { orderId: data.id };
 *     },
 *     onApprove: (data) => console.log("Payment approved:", data),
 *     onError: (err) => console.error("Payment error:", err),
 *   });
 *
 *   if (isPending || !applePayConfig) return null;
 *   if (error) return <div>Error: {error.message}</div>;
 *
 *   return (
 *     <apple-pay-button
 *       buttonstyle="black"
 *       type="buy"
 *       locale="en"
 *       onClick={handleClick}
 *     />
 *   );
 * }
 * ```
 */
export declare function useApplePayOneTimePaymentSession({ applePayConfig, paymentRequest, displayName, domainName, createOrder, applePaySessionVersion, ...callbacks }: UseApplePayOneTimePaymentSessionProps): BasePaymentSessionReturn;
