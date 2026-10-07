import type { ButtonProps } from "../types";
import type { UseVenmoOneTimePaymentSessionProps } from "../hooks/useVenmoOneTimePaymentSession";
type VenmoOneTimePaymentButtonProps = UseVenmoOneTimePaymentSessionProps & ButtonProps & {
    autoRedirect?: never;
};
/**
 * `VenmoOneTimePaymentButton` is a button that provides a standard Venmo payment flow.
 *
 * `VenmoOneTimePaymentButtonProps` combines the arguments for {@link UseVenmoOneTimePaymentSessionProps}
 * and {@link ButtonProps}.
 *
 * `presentationMode` is optional and defaults to `"auto"`.
 *
 * @example
 * <VenmoOneTimePaymentButton
 *   onApprove={() => {
 *      // ... on approve logic
 *   }}
 *   orderId="your-order-id"
 * />
 */
export declare const VenmoOneTimePaymentButton: ({ type, disabled, ...hookProps }: VenmoOneTimePaymentButtonProps) => JSX.Element | null;
export {};
