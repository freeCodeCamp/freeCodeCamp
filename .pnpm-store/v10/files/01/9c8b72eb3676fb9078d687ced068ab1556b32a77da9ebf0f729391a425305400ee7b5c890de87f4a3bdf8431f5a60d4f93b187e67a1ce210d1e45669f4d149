import type { UsePayPalGuestPaymentSessionProps } from "../hooks/usePayPalGuestPaymentSession";
type PayPalGuestPaymentButtonProps = UsePayPalGuestPaymentSessionProps & {
    disabled?: boolean;
};
/**
 * `PayPalGuestPaymentButton` is a button that provides a guest checkout (BCDC) payment flow.
 *
 * `PayPalGuestPaymentButtonProps` combines the arguments for {@link UsePayPalGuestPaymentSessionProps}
 * with a `disabled` prop.
 *
 * This component automatically wraps the button with `<paypal-basic-card-container>` which is
 * required for the guest checkout form to display properly.
 *
 * @example
 * <PayPalGuestPaymentButton
 *   createOrder={createOrder}
 *   onApprove={() => {
 *      // ... on approve logic
 *   }}
 * />
 */
export declare const PayPalGuestPaymentButton: ({ disabled, ...hookProps }: PayPalGuestPaymentButtonProps) => JSX.Element | null;
export {};
