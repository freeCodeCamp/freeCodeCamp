import type { BraintreeNamespace } from "./../../types/braintreePayPalButtonTypes";
import type { BraintreePayPalCheckout } from "../../types/braintree/paypalCheckout";
import type { BraintreePayPalButtonsComponentProps } from "../../types";
/**
 * Use `actions.braintree` to provide an interface for the paypalCheckoutInstance
 * through the createOrder, createBillingAgreement and onApprove callbacks
 *
 * @param braintreeButtonProps the component button options
 * @returns a new copy of the component button options casted as {@link PayPalButtonsComponentProps}
 */
export declare const decorateActions: (buttonProps: BraintreePayPalButtonsComponentProps, payPalCheckoutInstance: BraintreePayPalCheckout) => BraintreePayPalButtonsComponentProps;
/**
 * Get the Braintree namespace from the component props.
 * If the prop `braintreeNamespace` is undefined will try to load it from the CDN.
 * This function allows users to set the braintree manually on the `BraintreePayPalButtons` component.
 *
 * Use case can be for example legacy sites using AMD/UMD modules,
 * trying to integrate the `BraintreePayPalButtons` component.
 * If we attempt to load the Braintree from the CDN won't define the braintree namespace.
 * This happens because the braintree script is an UMD module.
 * After detecting the AMD on the global scope will create an anonymous module using `define`
 * and the `BraintreePayPalButtons` won't be able to get access to the `window.braintree` namespace
 * from the global context.
 *
 * @param braintreeSource the source {@link BraintreeNamespace}
 * @returns the {@link BraintreeNamespace}
 */
export declare const getBraintreeNamespace: (braintreeSource?: BraintreeNamespace) => Promise<BraintreeNamespace>;
