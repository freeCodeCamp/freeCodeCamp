import { PayPalPresentationModeOptions, PayPalOneTimePaymentSessionOptions, BasePaymentSessionReturn, WithOptionalPresentationMode } from "../types";
export type UsePayPalOneTimePaymentSessionProps = ((Omit<PayPalOneTimePaymentSessionOptions, "orderId"> & {
    createOrder: () => Promise<{
        orderId: string;
    }>;
    orderId?: never;
}) | (PayPalOneTimePaymentSessionOptions & {
    createOrder?: never;
    orderId: string;
})) & WithOptionalPresentationMode<PayPalPresentationModeOptions>;
/**
 * Hook for managing one-time payment sessions with PayPal.
 *
 * The hook returns an `isPending` flag that indicates whether the SDK instance is still being
 * initialized. This is useful when using deferred clientToken loading - buttons should wait
 * to render until `isPending` is false.
 *
 * @returns Object with: `error` (any session error), `isPending` (SDK loading), `handleClick` (starts session), `handleCancel` (cancels session), `handleDestroy` (cleanup)
 *
 * `presentationMode` is optional and defaults to `"auto"`.
 *
 * @example
 * function PayPalCheckoutButton() {
 *   const { isPending, error, handleClick, handleCancel } = usePayPalOneTimePaymentSession({
 *     orderId: "ORDER-123",
 *     onApprove: (data) => console.log("Approved:", data),
 *   });
 *
 *   if (isPending) return null;
 *   if (error) return <div>Error: {error.message}</div>;
 *
 *   return (
 *     <paypal-button onClick={handleClick} onCancel={handleCancel} />
 *   );
 * }
 */
export declare function usePayPalOneTimePaymentSession({ presentationMode, fullPageOverlay, autoRedirect, createOrder, orderId, savePayment, testBuyerCountry, ...callbacks }: UsePayPalOneTimePaymentSessionProps): BasePaymentSessionReturn;
