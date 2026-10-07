import type { BasePaymentSessionReturn, CreateOrderCallback, PayLaterOneTimePaymentSessionOptions, PayPalPresentationModeOptions, WithOptionalPresentationMode } from "../types";
export type UsePayLaterOneTimePaymentSessionProps = ((Omit<PayLaterOneTimePaymentSessionOptions, "orderId"> & {
    createOrder: CreateOrderCallback;
    orderId?: never;
}) | (PayLaterOneTimePaymentSessionOptions & {
    createOrder?: never;
    orderId: string;
})) & WithOptionalPresentationMode<PayPalPresentationModeOptions>;
/**
 * Hook for managing Pay Later one-time payment sessions.
 *
 * This hook creates and manages a Pay Later payment session. It handles session lifecycle, resume flows
 * for redirect-based presentation modes (`"redirect"` and `"direct-app-switch"`), and provides methods
 * to start, cancel, and destroy the session.
 *
 * Eligibility must be fetched separately (via the `useEligibleMethods` hook client-side or
 * `fetchEligibleMethods` server-side) to obtain the `countryCode`/`productCode` the
 * `<paypal-pay-later-button>` needs to render.
 *
 * @returns Object with: `error` (any session error), `isPending` (SDK loading), `handleClick` (starts session), `handleCancel` (cancels session), `handleDestroy` (cleanup)
 *
 * `presentationMode` is optional and defaults to `"auto"`.
 *
 * @example
 * function PayLaterCheckoutButton() {
 *   const { error, isPending, handleClick, handleCancel } = usePayLaterOneTimePaymentSession({
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
 *
 *   if (isPending || isLoading) return <Spinner />;
 *
 *   if (!eligiblePaymentMethods?.isEligible("paylater")) {
 *     return null;
 *   }
 *
 *   const payLaterDetails = eligiblePaymentMethods?.getDetails?.("paylater");
 *
 *   if (error) return <div>Error: {error.message}</div>;
 *
 *   return (
 *     <paypal-pay-later-button
 *       countryCode={payLaterDetails?.countryCode}
 *       productCode={payLaterDetails?.productCode}
 *       onClick={handleClick}
 *       onCancel={handleCancel}
 *     />
 *   );
 * }
 */
export declare function usePayLaterOneTimePaymentSession({ presentationMode, fullPageOverlay, autoRedirect, createOrder, orderId, ...callbacks }: UsePayLaterOneTimePaymentSessionProps): BasePaymentSessionReturn;
