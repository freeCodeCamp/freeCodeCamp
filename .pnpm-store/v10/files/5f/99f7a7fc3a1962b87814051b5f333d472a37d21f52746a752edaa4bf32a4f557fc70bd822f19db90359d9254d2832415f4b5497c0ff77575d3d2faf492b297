import type { BasePaymentSessionReturn, PayPalSubscriptionPresentationModeOptions, PayPalSubscriptionSessionOptions, WithOptionalPresentationMode } from "../types";
export type UsePayPalSubscriptionPaymentSessionProps = PayPalSubscriptionSessionOptions & WithOptionalPresentationMode<PayPalSubscriptionPresentationModeOptions> & {
    createSubscription: () => Promise<{
        subscriptionId: string;
    }>;
};
/**
 * Hook for managing PayPal subscription payment sessions.
 *
 * This hook creates and manages a PayPal subscription payment session, supporting multiple presentation modes
 * including popup and modal. It handles session lifecycle and provides methods to start, cancel, and destroy the session.
 *
 * @param props - Configuration options including presentation mode and callbacks
 * @param props.createSubscription - Function that returns a promise resolving to an object with subscriptionId
 * @param props.presentationMode - (Optional, defaults to `'auto'`) How the subscription experience is presented: 'popup', 'modal', 'auto', or 'payment-handler'
 * @param props.fullPageOverlay - Whether to show a full-page overlay during the subscription flow
 * @returns Object with: `error` (any session error), `isPending` (SDK loading), `handleClick` (starts session), `handleCancel` (cancels session), `handleDestroy` (cleanup)
 *
 * `presentationMode` is optional and defaults to `"auto"`.
 *
 * @example
 * function SubscriptionCheckoutButton() {
 *   const { error, isPending, handleClick, handleCancel } = usePayPalSubscriptionPaymentSession({
 *     presentationMode: 'popup',
 *     createSubscription: async () => ({ subscriptionId: 'SUB-123' }),
 *     onApprove: (data) => console.log('Subscription approved:', data),
 *     onCancel: () => console.log('Subscription cancelled'),
 *     onError: (err) => console.error('Subscription error:', err),
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
export declare function usePayPalSubscriptionPaymentSession({ presentationMode, fullPageOverlay, createSubscription, ...callbacks }: UsePayPalSubscriptionPaymentSessionProps): BasePaymentSessionReturn;
