import { ReactNode } from "react";
import type { PayPalCardFieldsComponentOptions } from "@paypal/paypal-js";
type CardFieldsProviderProps = PayPalCardFieldsComponentOptions & {
    children: ReactNode;
};
/**
The `<PayPalCardFieldsProvider />` is a context provider that is designed to support the rendering and state management of PayPal CardFields in your application.

The context provider will initialize the `CardFields` instance from the JS SDK and determine eligibility to render the CardField components. Once the `CardFields` are initialized, the context provider will manage the state of the `CardFields` instance as well as the reference to each individual card field.

Passing the `inputEvents` and `style` props to the context provider will apply them to each of the individual field components.

The state managed by the provider is accessible through our custom hook `usePayPalCardFields`.

*/
export declare const PayPalCardFieldsProvider: ({ children, ...props }: CardFieldsProviderProps) => JSX.Element;
export {};
