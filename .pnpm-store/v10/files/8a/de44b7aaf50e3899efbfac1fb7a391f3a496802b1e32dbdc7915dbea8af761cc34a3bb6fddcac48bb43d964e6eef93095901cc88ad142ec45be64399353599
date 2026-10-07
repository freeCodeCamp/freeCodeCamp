import type { VenmoPresentationModeOptions, VenmoOneTimePaymentSessionOptions, VenmoOneTimePaymentSessionPromise, BasePaymentSessionReturn, WithOptionalPresentationMode } from "../types";
export type UseVenmoOneTimePaymentSessionProps = ((Omit<VenmoOneTimePaymentSessionOptions, "orderId"> & {
    createOrder: () => VenmoOneTimePaymentSessionPromise;
    orderId?: never;
}) | (VenmoOneTimePaymentSessionOptions & {
    createOrder?: never;
    orderId: string;
})) & WithOptionalPresentationMode<VenmoPresentationModeOptions>;
/**
 * Hook for managing Venmo one-time payment sessions.
 *
 * This hook creates and manages a Venmo payment session. It handles session lifecycle
 * and provides methods to start, cancel, and destroy the session.
 *
 * @returns Object with: `error` (any session error), `isPending` (SDK loading), `handleClick` (starts session), `handleCancel` (cancels session), `handleDestroy` (cleanup)
 *
 * `presentationMode` is optional and defaults to `"auto"`.
 *
 * @example
 * function VenmoCheckout() {
 *   const { error, isPending, handleClick, handleCancel } = useVenmoOneTimePaymentSession({
 *     createOrder: async () => ({ orderId: 'ORDER-123' }),
 *     onApprove: (data) => console.log('Approved:', data),
 *     onCancel: () => console.log('Cancelled'),
 *   });
 *
 *   if (isPending) return null;
 *   if (error) return <div>Error: {error.message}</div>;
 *
 *   return (
 *     <venmo-button onClick={handleClick} onCancel={handleCancel} />
 *   );
 * }
 */
export declare function useVenmoOneTimePaymentSession({ presentationMode, fullPageOverlay, createOrder, orderId, ...callbacks }: UseVenmoOneTimePaymentSessionProps): BasePaymentSessionReturn;
