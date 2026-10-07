import type { PayPalGuestOneTimePaymentSessionOptions, PayPalGuestOneTimePaymentSessionPromise, PayPalGuestPresentationModeOptions } from "@paypal/paypal-js/sdk-v6";
import type { BasePaymentSessionReturn } from "../types";
interface PayPalGuestPaymentSessionReturn extends BasePaymentSessionReturn {
    buttonRef: {
        current: HTMLElement | null;
    };
}
type PayPalGuestPresentationModeHookOptions = Omit<PayPalGuestPresentationModeOptions, "presentationMode" | "targetElement">;
export type UsePayPalGuestPaymentSessionProps = ((Omit<PayPalGuestOneTimePaymentSessionOptions, "orderId"> & {
    createOrder: () => PayPalGuestOneTimePaymentSessionPromise;
    orderId?: never;
}) | (PayPalGuestOneTimePaymentSessionOptions & {
    createOrder?: never;
    orderId: string;
})) & PayPalGuestPresentationModeHookOptions;
/**
 * `usePayPalGuestPaymentSession` is used to interface with a guest checkout session. Guest checkout
 * sessions require a `<paypal-basic-card-button>` to target for displaying the guest checkout form.
 *
 * @returns Object with: `buttonRef` (ref for the target button element), `error` (any session error), `isPending` (SDK loading), `handleClick` (starts session), `handleCancel` (cancels session), `handleDestroy` (cleanup)
 *
 * @example
 * function GuestCheckoutButton() {
 *   const { buttonRef, error, isPending, handleClick, handleCancel } =
 *     usePayPalGuestPaymentSession({
 *       createOrder: async () => ({ orderId: 'ORDER-123' }),
 *       onApprove: (data) => console.log('Approved:', data),
 *       onCancel: () => console.log('Cancelled'),
 *     });
 *
 *   if (isPending) return null;
 *   if (error) return <div>Error: {error.message}</div>;
 *
 *   return (
 *     <paypal-basic-card-container>
 *       <paypal-basic-card-button
 *         onClick={handleClick}
 *         onCancel={handleCancel}
 *         ref={buttonRef}
 *       />
 *     </paypal-basic-card-container>
 *   );
 * }
 */
export declare function usePayPalGuestPaymentSession({ fullPageOverlay, createOrder, orderId, onShippingAddressChange, onShippingOptionsChange, ...callbacks }: UsePayPalGuestPaymentSessionProps): PayPalGuestPaymentSessionReturn;
export {};
