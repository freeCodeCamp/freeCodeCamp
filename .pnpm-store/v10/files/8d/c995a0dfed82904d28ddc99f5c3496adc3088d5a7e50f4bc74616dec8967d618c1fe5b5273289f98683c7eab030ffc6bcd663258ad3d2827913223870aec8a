import type { GooglePayConfig, GooglePayConfigFromFindEligibleMethods, GooglePayButtonOptions, GooglePayApprovePaymentResponse, GooglePayTransactionInfo, BasePaymentSessionReturn } from "../types";
export type UseGooglePayOneTimePaymentSessionProps = {
    /**
     * Google Pay configuration from findEligibleMethods.
     * Used to format the payment request with allowed payment methods and merchant info.
     */
    googlePayConfig: GooglePayConfigFromFindEligibleMethods;
    /**
     * Transaction info for the Google Pay payment request.
     */
    transactionInfo: GooglePayTransactionInfo;
    /**
     * Google Pay environment. Use "TEST" for sandbox and "PRODUCTION" for live.
     * @default "TEST"
     */
    environment?: "TEST" | "PRODUCTION";
    /**
     * Callback function to create an order.
     * Should return a promise that resolves to an object with orderId.
     */
    createOrder: () => Promise<{
        orderId: string;
    }>;
    /**
     * Callback invoked when the payment is successfully approved.
     */
    onApprove: (data: GooglePayApprovePaymentResponse) => void | Promise<void>;
    /**
     * Optional callback invoked when the payment is cancelled.
     */
    onCancel?: () => void;
    /**
     * Optional callback invoked when an error occurs.
     */
    onError?: (error: Error) => void;
};
export type UseGooglePayOneTimePaymentSessionReturn = BasePaymentSessionReturn & {
    /**
     * The Google Pay PaymentsClient instance.
     * Used internally to check readiness and create the payment button.
     * Advanced users may interact with this directly if needed.
     * @default null (until session is fully initialized)
     */
    paymentsClient: google.payments.api.PaymentsClient | null;
    /**
     * The formatted Google Pay configuration for the payment request.
     * Includes allowed payment methods, merchant info, and API versions.
     * @default null (until session is fully initialized)
     */
    formattedConfig: GooglePayConfig | null;
    /**
     * Creates the native Google Pay button after checking eligibility via isReadyToPay.
     * Setup errors are captured in hook state and forwarded to onError.
     */
    createGooglePayButton: (options: GooglePayButtonOptions) => Promise<HTMLElement | null>;
};
/**
 * Hook for managing Google Pay one-time payment sessions.
 *
 * This hook creates and manages a complete Google Pay payment session, handling the entire
 * flow from button click through payment authorization to order confirmation.
 *
 * Unlike Apple Pay and Venmo (which use web components), Google Pay uses Google's PaymentsClient
 * to drive the payment UI. This hook returns the PaymentsClient and formatted config so the
 * GooglePayOneTimePaymentButton component can:
 * 1. Check device/browser readiness with `isReadyToPay()`
 * 2. Create the native Google Pay button before user interaction
 * 3. Load payment data and handle payment callbacks
 *
 * The hook manages the entire session lifecycle including order creation, payment confirmation,
 * 3DS (PAYER_ACTION_REQUIRED) handling, and error management.
 *
 * @example
 * ```typescript
 * function GooglePayCheckoutButton() {
 *   const { sdkInstance } = usePayPal();
 *   const [googlePayConfig, setGooglePayConfig] = useState(null);
 *
 *   useEffect(() => {
 *     const fetchConfig = async () => {
 *       const methods = await sdkInstance?.findEligibleMethods({ currencyCode: "USD" });
 *       if (methods?.isEligible("googlepay")) {
 *         setGooglePayConfig(methods.getDetails("googlepay").config);
 *       }
 *     };
 *     fetchConfig();
 *   }, [sdkInstance]);
 *
 *   const { isPending, error, handleClick } = useGooglePayOneTimePaymentSession({
 *     googlePayConfig,
 *     transactionInfo: {
 *       countryCode: "US",
 *       currencyCode: "USD",
 *       totalPriceStatus: "FINAL",
 *       totalPrice: "100.00",
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
 *   if (isPending || !googlePayConfig) return null;
 *   if (error) return <div>Error: {error.message}</div>;
 *
 *   return <button onClick={handleClick}>Pay with Google Pay</button>;
 * }
 * ```
 */
export declare function useGooglePayOneTimePaymentSession({ googlePayConfig, transactionInfo, environment, createOrder, ...callbacks }: UseGooglePayOneTimePaymentSessionProps): UseGooglePayOneTimePaymentSessionReturn;
