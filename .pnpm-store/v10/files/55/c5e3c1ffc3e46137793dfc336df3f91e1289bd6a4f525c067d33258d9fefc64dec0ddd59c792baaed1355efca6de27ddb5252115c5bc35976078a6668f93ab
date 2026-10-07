import type { FC, ReactNode } from "react";
import type { PayPalMarksComponentOptions } from "@paypal/paypal-js";
export interface PayPalMarksComponentProps extends PayPalMarksComponentOptions {
    /**
     * Pass a css class to the div container.
     */
    className?: string;
    children?: ReactNode;
}
/**
The `<PayPalMarks />` component is used for conditionally rendering different payment options using radio buttons.
The [Display PayPal Buttons with other Payment Methods guide](https://developer.paypal.com/docs/business/checkout/add-capabilities/buyer-experience/#display-paypal-buttons-with-other-payment-methods) describes this style of integration in detail.
It relies on the `<PayPalScriptProvider />` parent component for managing state related to loading the JS SDK script.

This component can also be configured to use a single funding source similar to the [standalone buttons](https://developer.paypal.com/docs/business/checkout/configure-payments/standalone-buttons/) approach.
A `FUNDING` object is exported by this library which has a key for every available funding source option.
*/
export declare const PayPalMarks: FC<PayPalMarksComponentProps>;
