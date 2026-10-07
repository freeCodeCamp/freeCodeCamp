import type { BasePaymentSessionReturn, PayPalPresentationModeOptions, PayPalCreditOneTimePaymentSessionOptions, WithOptionalPresentationMode } from "../types";
export type UsePayPalCreditOneTimePaymentSessionProps = ((Omit<PayPalCreditOneTimePaymentSessionOptions, "orderId"> & {
    createOrder: () => Promise<{
        orderId: string;
    }>;
    orderId?: never;
}) | (PayPalCreditOneTimePaymentSessionOptions & {
    createOrder?: never;
    orderId: string;
})) & WithOptionalPresentationMode<PayPalPresentationModeOptions>;
/**
 * Hook for managing PayPal Credit one-time payment sessions.
 *
 * This hook creates and manages a PayPal Credit payment session. It handles session lifecycle, resume flows
 * for redirect-based flows, and provides methods to start, cancel, and destroy the session.
 *
 * Eligibility must be fetched separately (via the `useEligibleMethods` hook client-side or
 * `fetchEligibleMethods` server-side) to obtain the `countryCode` the
 * `<paypal-credit-button>` needs to render.
 *
 * @returns Object with: `error` (any session error), `isPending` (SDK loading), `handleClick` (starts session), `handleCancel` (cancels session), `handleDestroy` (cleanup)
 *
 * `presentationMode` is optional and defaults to `"auto"`.
 *
 * @example
 * function CreditCheckoutButton() {
 *   const { error, isPending, handleClick, handleCancel } = usePayPalCreditOneTimePaymentSession({
 *     presentationMode: 'popup',
 *     createOrder: async () => ({ orderId: 'ORDER-123' }),
 *     onApprove: (data) => console.log('Approved:', data),
 *     onCancel: () => console.log('Cancelled'),
 *   });
 *
 *   // Fetch eligibility (or hydrate server-side via fetchEligibleMethods)
 *   const { eligiblePaymentMethods, isLoading } = useEligibleMethods({
 *     payload: { purchase_units: [{ amount: { currency_code: "USD" } }] },
 *   });
 *   const creditDetails = eligiblePaymentMethods?.getDetails?.("credit");
 *
 *   if (isPending || isLoading) return null;
 *   if (error) return <div>Error: {error.message}</div>;
 *
 *   return (
 *     <paypal-credit-button
 *       countryCode={creditDetails?.countryCode}
 *       onClick={handleClick}
 *       onCancel={handleCancel}
 *     />
 *   );
 * }
 */
export declare function usePayPalCreditOneTimePaymentSession({ presentationMode, fullPageOverlay, autoRedirect, createOrder, orderId, ...callbacks }: UsePayPalCreditOneTimePaymentSessionProps): BasePaymentSessionReturn;
