import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import * as stripeJs from "@stripe/stripe-js";
import { StripeError } from "@stripe/stripe-js";
interface ElementProps {
    /**
     * Passes through to the [Element’s container](https://stripe.com/docs/js/element/the_element_container).
     */
    id?: string;
    /**
     * Passes through to the [Element’s container](https://stripe.com/docs/js/element/the_element_container).
     */
    className?: string;
    /**
     * Triggered when the Element loses focus.
     */
    onBlur?: (event: {
        elementType: stripeJs.StripeElementType;
    }) => any;
    /**
     * Triggered when the Element receives focus.
     */
    onFocus?: (event: {
        elementType: stripeJs.StripeElementType;
    }) => any;
}
interface AuBankAccountElementProps extends ElementProps {
    /**
     * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=auBankAccount).
     */
    options?: stripeJs.StripeAuBankAccountElementOptions;
    /**
     * Triggered when data exposed by this Element is changed (e.g., when there is an error).
     * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=auBankAccountElement).
     */
    onChange?: (event: stripeJs.StripeAuBankAccountElementChangeEvent) => any;
    /**
     * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
     * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
     */
    onReady?: (element: stripeJs.StripeAuBankAccountElement) => any;
    /**
     * Triggered when the escape key is pressed within the Element.
     */
    onEscape?: () => any;
}
type AuBankAccountElementComponent = FunctionComponent<AuBankAccountElementProps>;
interface CardElementProps extends ElementProps {
    /**
     * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=card).
     */
    options?: stripeJs.StripeCardElementOptions;
    /**
     * Triggered when data exposed by this Element is changed (e.g., when there is an error).
     * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=cardElement).
     */
    onChange?: (event: stripeJs.StripeCardElementChangeEvent) => any;
    /**
     * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
     * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
     */
    onReady?: (element: stripeJs.StripeCardElement) => any;
    /**
     * Triggered when the escape key is pressed within the Element.
     */
    onEscape?: () => any;
    /**
     * Triggered when there is a change to the available networks the provided card can run on.
     * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_networkschange?type=cardElement).
     */
    onNetworksChange?: (event: {
        elementType: "card";
    }) => any;
}
type CardElementComponent = FunctionComponent<CardElementProps>;
interface CardNumberElementProps extends ElementProps {
    /**
     * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=cardNumber).
     */
    options?: stripeJs.StripeCardNumberElementOptions;
    /**
     * Triggered when data exposed by this Element is changed (e.g., when there is an error).
     * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=cardNumberElement).
     */
    onChange?: (event: stripeJs.StripeCardNumberElementChangeEvent) => any;
    /**
     * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
     * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
     */
    onReady?: (element: stripeJs.StripeCardNumberElement) => any;
    /**
     * Triggered when the escape key is pressed within the Element.
     */
    onEscape?: () => any;
    /**
     * Triggered when there is a change to the available networks the provided card can run on.
     * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_networkschange?type=cardNumberElement).
     */
    onNetworksChange?: (event: {
        elementType: "cardNumber";
    }) => any;
}
type CardNumberElementComponent = FunctionComponent<CardNumberElementProps>;
interface CardExpiryElementProps extends ElementProps {
    /**
     * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=cardExpiry).
     */
    options?: stripeJs.StripeCardExpiryElementOptions;
    /**
     * Triggered when data exposed by this Element is changed (e.g., when there is an error).
     * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=cardExpiryElement).
     */
    onChange?: (event: stripeJs.StripeCardExpiryElementChangeEvent) => any;
    /**
     * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
     * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
     */
    onReady?: (element: stripeJs.StripeCardExpiryElement) => any;
    /**
     * Triggered when the escape key is pressed within the Element.
     */
    onEscape?: () => any;
}
type CardExpiryElementComponent = FunctionComponent<CardExpiryElementProps>;
interface CardCvcElementProps extends ElementProps {
    /**
     * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=cardCvc).
     */
    options?: stripeJs.StripeCardCvcElementOptions;
    /**
     * Triggered when data exposed by this Element is changed (e.g., when there is an error).
     * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=cardCvcElement).
     */
    onChange?: (event: stripeJs.StripeCardCvcElementChangeEvent) => any;
    /**
     * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
     * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
     */
    onReady?: (element: stripeJs.StripeCardCvcElement) => any;
    /**
     * Triggered when the escape key is pressed within the Element.
     */
    onEscape?: () => any;
}
type CardCvcElementComponent = FunctionComponent<CardCvcElementProps>;
// CartElementProps does not extend ElementsProps because Cart Element does not have onBlur and onFocus events
interface CartElementProps {
    /**
     * Passes through to the [Element’s container](https://stripe.com/docs/js/element/the_element_container).
     */
    id?: string;
    /**
     * Passes through to the [Element’s container](https://stripe.com/docs/js/element/the_element_container).
     */
    className?: string;
    /**
     * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_cart_element#cart_element_create-options).
     */
    options?: stripeJs.StripeCartElementOptions;
    /**
     * Triggered when data exposed by this Element is changed (e.g., when there is an error).
     * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=cartElement).
     */
    onChange?: (event: stripeJs.StripeCartElementPayloadEvent) => any;
    /**
     * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
     * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
     */
    onReady?: (event: stripeJs.StripeCartElementPayloadEvent) => any;
    /**
     * Triggered when the Element fails to load.
     */
    onLoadError?: (event: {
        elementType: "cart";
        error: StripeError;
    }) => any;
    /**
     * Triggered when the "Checkout" button is clicked within the Element.
     */
    onCheckout?: (event: stripeJs.StripeCartElementPayloadEvent) => any;
    /**
     * Triggered when a line item's link is clicked within the Element.
     */
    onLineItemClick?: (event: stripeJs.StripeCartElementLineItemClickEvent) => any;
}
type CartElementComponent = FunctionComponent<CartElementProps>;
interface FpxBankElementProps extends ElementProps {
    /**
     * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=fpxBank).
     */
    options?: stripeJs.StripeFpxBankElementOptions;
    /**
     * Triggered when data exposed by this Element is changed (e.g., when there is an error).
     * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=fpxBankElement).
     */
    onChange?: (event: stripeJs.StripeFpxBankElementChangeEvent) => any;
    /**
     * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
     * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
     */
    onReady?: (element: stripeJs.StripeFpxBankElement) => any;
    /**
     * Triggered when the escape key is pressed within the Element.
     */
    onEscape?: () => any;
}
type FpxBankElementComponent = FunctionComponent<FpxBankElementProps>;
interface IbanElementProps extends ElementProps {
    /**
     * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=iban).
     */
    options?: stripeJs.StripeIbanElementOptions;
    /**
     * Triggered when data exposed by this Element is changed (e.g., when there is an error).
     * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=ibanElement).
     */
    onChange?: (event: stripeJs.StripeIbanElementChangeEvent) => any;
    /**
     * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
     * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
     */
    onReady?: (element: stripeJs.StripeIbanElement) => any;
    /**
     * Triggered when the escape key is pressed within the Element.
     */
    onEscape?: () => any;
}
type IbanElementComponent = FunctionComponent<IbanElementProps>;
interface IdealBankElementProps extends ElementProps {
    /**
     * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=idealBank).
     */
    options?: stripeJs.StripeIdealBankElementOptions;
    /**
     * Triggered when data exposed by this Element is changed (e.g., when there is an error).
     * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=idealBankElement).
     */
    onChange?: (event: stripeJs.StripeIdealBankElementChangeEvent) => any;
    /**
     * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
     * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
     */
    onReady?: (element: stripeJs.StripeIdealBankElement) => any;
    /**
     * Triggered when the escape key is pressed within the Element.
     */
    onEscape?: () => any;
}
type IdealBankElementComponent = FunctionComponent<IdealBankElementProps>;
interface P24BankElementProps extends ElementProps {
    /**
     * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=p24Bank).
     */
    options?: stripeJs.StripeP24BankElementOptions;
    /**
     * Triggered when data exposed by this Element is changed (e.g., when there is an error).
     * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=p24BankElement).
     */
    onChange?: (event: stripeJs.StripeP24BankElementChangeEvent) => any;
    /**
     * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
     * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
     */
    onReady?: (element: stripeJs.StripeP24BankElement) => any;
    /**
     * Triggered when the escape key is pressed within the Element.
     */
    onEscape?: () => any;
}
interface LinkAuthenticationElementProps extends ElementProps {
    /**
     * An object containing Element configuration options.
     */
    options?: stripeJs.StripeLinkAuthenticationElementOptions;
    /**
     * Triggered when data exposed by this Element is changed (e.g., when there is an error).
     * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=auBankAccountElement).
     */
    onChange?: (event: stripeJs.StripeLinkAuthenticationElementChangeEvent) => any;
    /**
     * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
     * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
     */
    onReady?: (element: stripeJs.StripeLinkAuthenticationElement) => any;
    /**
     * Triggered when the escape key is pressed within the Element.
     */
    onEscape?: () => any;
    /**
     * Triggered when the Element fails to load.
     */
    onLoadError?: (event: {
        elementType: "linkAuthentication";
        error: StripeError;
    }) => any;
    /**
     * Triggered when the [loader](https://stripe.com/docs/js/elements_object/create#stripe_elements-options-loader) UI is mounted to the DOM and ready to be displayed.
     */
    onLoaderStart?: (event: {
        elementType: "linkAuthentication";
    }) => any;
}
type LinkAuthenticationElementComponent = FunctionComponent<LinkAuthenticationElementProps>;
type P24BankElementComponent = FunctionComponent<P24BankElementProps>;
interface EpsBankElementProps extends ElementProps {
    /**
     * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=epsBank).
     */
    options?: stripeJs.StripeEpsBankElementOptions;
    /**
     * Triggered when data exposed by this Element is changed (e.g., when there is an error).
     * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=epsBankElement).
     */
    onChange?: (event: stripeJs.StripeEpsBankElementChangeEvent) => any;
    /**
     * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
     * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
     */
    onReady?: (element: stripeJs.StripeEpsBankElement) => any;
    /**
     * Triggered when the escape key is pressed within the Element.
     */
    onEscape?: () => any;
}
type EpsBankElementComponent = FunctionComponent<EpsBankElementProps>;
interface PaymentElementProps extends ElementProps {
    /**
     * An object containing Element configuration options.
     */
    options?: stripeJs.StripePaymentElementOptions;
    /**
     * Triggered when data exposed by this Element is changed.
     */
    onChange?: (event: stripeJs.StripePaymentElementChangeEvent) => any;
    /**
     * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
     * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
     */
    onReady?: (element: stripeJs.StripePaymentElement) => any;
    /**
     * Triggered when the escape key is pressed within the Element.
     */
    onEscape?: () => any;
    /**
     * Triggered when the Element fails to load.
     */
    onLoadError?: (event: {
        elementType: "payment";
        error: StripeError;
    }) => any;
    /**
     * Triggered when the [loader](https://stripe.com/docs/js/elements_object/create#stripe_elements-options-loader) UI is mounted to the DOM and ready to be displayed.
     */
    onLoaderStart?: (event: {
        elementType: "payment";
    }) => any;
}
type PaymentElementComponent = FunctionComponent<PaymentElementProps>;
interface PayButtonElementProps extends ElementProps {
    /**
     * An object containing Element configuration options.
     */
    options?: stripeJs.StripePayButtonElementOptions;
    /**
     * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
     * The list of payment methods that could possibly show in the element, or undefined if no payment methods can show.
     */
    onReady?: (event: stripeJs.StripePayButtonElementReadyEvent) => any;
    /**
     * Triggered when the escape key is pressed within the Element.
     */
    onEscape?: () => any;
    /**
     * Triggered when the Element fails to load.
     */
    onLoadError?: (event: {
        elementType: "payButton";
        error: StripeError;
    }) => any;
    /**
     * Triggered when a button on the Element is clicked.
     */
    onClick?: (event: stripeJs.StripePayButtonElementClickEvent) => any;
    /**
     * Triggered when a buyer authorizes a payment within a supported payment method.
     */
    onConfirm: (event: stripeJs.StripePayButtonElementConfirmEvent) => any;
    /**
     * Triggered when a payment interface is dismissed (e.g., a buyer closes the payment interface)
     */
    onCancel?: (event: {
        elementType: "payButton";
    }) => any;
    /**
     * Triggered when a buyer selects a different shipping address.
     */
    onShippingAddressChange?: (event: stripeJs.StripePayButtonElementShippingAddressChangeEvent) => any;
    /**
     * Triggered when a buyer selects a different shipping rate.
     */
    onShippingRateChange?: (event: stripeJs.StripePayButtonElementShippingRateChangeEvent) => any;
}
type PayButtonElementComponent = FunctionComponent<PayButtonElementProps>;
interface PaymentRequestButtonElementProps extends ElementProps {
    /**
     * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=paymentRequestButton).
     */
    options?: stripeJs.StripePaymentRequestButtonElementOptions;
    /**
     * Triggered when the Element is clicked.
     */
    onClick?: (event: stripeJs.StripePaymentRequestButtonElementClickEvent) => any;
    /**
     * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
     * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
     */
    onReady?: (element: stripeJs.StripePaymentRequestButtonElement) => any;
}
type PaymentRequestButtonElementComponent = FunctionComponent<PaymentRequestButtonElementProps>;
interface AddressElementProps extends ElementProps {
    /**
     * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_address_element#address_element_create-options).
     */
    options: stripeJs.StripeAddressElementOptions;
    /**
     * Triggered when data exposed by this Element is changed (e.g., when there is an error).
     * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=addressElement).
     */
    onChange?: (event: stripeJs.StripeAddressElementChangeEvent) => any;
    /**
     * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
     * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
     */
    onReady?: (element: stripeJs.StripeAddressElement) => any;
    /**
     * Triggered when the escape key is pressed within the Element.
     */
    onEscape?: () => any;
    /**
     * Triggered when the Element fails to load.
     */
    onLoadError?: (event: {
        elementType: "address";
        error: StripeError;
    }) => any;
    /**
     * Triggered when the [loader](https://stripe.com/docs/js/elements_object/create#stripe_elements-options-loader) UI is mounted to the DOM and ready to be displayed.
     */
    onLoaderStart?: (event: {
        elementType: "address";
    }) => any;
}
type AddressElementComponent = FunctionComponent<AddressElementProps>;
interface ShippingAddressElementProps extends ElementProps {
    /**
     * An object containing [Element configuration options](https://stripe.com/docs/js/deprecated/create_shipping_address_element#shipping_address_element_create-options).
     */
    options?: stripeJs.StripeShippingAddressElementOptions;
    /**
     * Triggered when data exposed by this Element is changed (e.g., when there is an error).
     * For more information, refer to the [Stripe.js reference](https://stripe.com/docs/js/element/events/on_change?type=shippingAddressElement).
     */
    onChange?: (event: stripeJs.StripeShippingAddressElementChangeEvent) => any;
    /**
     * Triggered when the Element is fully rendered and can accept imperative `element.focus()` calls.
     * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
     */
    onReady?: (element: stripeJs.StripeShippingAddressElement) => any;
    /**
     * Triggered when the escape key is pressed within the Element.
     */
    onEscape?: () => any;
    /**
     * Triggered when the Element fails to load.
     */
    onLoadError?: (event: {
        elementType: "shippingAddress";
        error: StripeError;
    }) => any;
    /**
     * Triggered when the [loader](https://stripe.com/docs/js/elements_object/create#stripe_elements-options-loader) UI is mounted to the DOM and ready to be displayed.
     */
    onLoaderStart?: (event: {
        elementType: "shippingAddress";
    }) => any;
}
type ShippingAddressElementComponent = FunctionComponent<ShippingAddressElementProps>;
interface PaymentMethodMessagingElementProps {
    /**
     * Passes through to the [Element’s container](https://stripe.com/docs/js/element/the_element_container).
     */
    id?: string;
    /**
     * Passes through to the [Element’s container](https://stripe.com/docs/js/element/the_element_container).
     */
    className?: string;
    /**
     * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=afterpayClearpayMessage).
     */
    options?: stripeJs.StripePaymentMethodMessagingElementOptions;
    /**
     * Triggered when the Element has been fully loaded, after initial method calls have been fired.
     * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
     */
    onReady?: (element: stripeJs.StripePaymentMethodMessagingElement) => any;
}
type PaymentMethodMessagingElementComponent = FunctionComponent<PaymentMethodMessagingElementProps>;
interface AffirmMessageElementProps {
    /**
     * Passes through to the [Element’s container](https://stripe.com/docs/js/element/the_element_container).
     */
    id?: string;
    /**
     * Passes through to the [Element’s container](https://stripe.com/docs/js/element/the_element_container).
     */
    className?: string;
    /**
     * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=afterpayClearpayMessage).
     */
    options?: stripeJs.StripeAffirmMessageElementOptions;
    /**
     * Triggered when the Element has been fully loaded, after initial method calls have been fired.
     * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
     */
    onReady?: (element: stripeJs.StripeAffirmMessageElement) => any;
}
type AffirmMessageElementComponent = FunctionComponent<AffirmMessageElementProps>;
interface AfterpayClearpayMessageElementProps {
    /**
     * Passes through to the [Element’s container](https://stripe.com/docs/js/element/the_element_container).
     */
    id?: string;
    /**
     * Passes through to the [Element’s container](https://stripe.com/docs/js/element/the_element_container).
     */
    className?: string;
    /**
     * An object containing [Element configuration options](https://stripe.com/docs/js/elements_object/create_element?type=afterpayClearpayMessage).
     */
    options?: stripeJs.StripeAfterpayClearpayMessageElementOptions;
    /**
     * Triggered when the Element has been fully loaded, after initial method calls have been fired.
     * Called with a reference to the underlying [Element instance](https://stripe.com/docs/js/element).
     */
    onReady?: (element: stripeJs.StripeAfterpayClearpayMessageElement) => any;
}
type AfterpayClearpayMessageElementComponent = FunctionComponent<AfterpayClearpayMessageElementProps>;
declare module "@stripe/stripe-js" {
    interface StripeElements {
        /**
         * Requires beta access:
         * Contact [Stripe support](https://support.stripe.com/) for more information.
         *
         * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=auBankAccount) for the `AuBankAccountElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
         * Returns `null` if no `AuBankAccountElement` is rendered in the current `Elements` provider tree.
         */
        getElement(component: AuBankAccountElementComponent): stripeJs.StripeAuBankAccountElement | null;
        /**
         * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=card) for the `CardElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
         * Returns `null` if no `CardElement` is rendered in the current `Elements` provider tree.
         */
        getElement(component: CardElementComponent): stripeJs.StripeCardElement | null;
        /**
         * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=card) for the `CardNumberElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
         * Returns `null` if no `CardNumberElement` is rendered in the current `Elements` provider tree.
         */
        getElement(component: CardNumberElementComponent): stripeJs.StripeCardNumberElement | null;
        /**
         * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=card) for the `CardCvcElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
         * Returns `null` if no `CardCvcElement` is rendered in the current `Elements` provider tree.
         */
        getElement(component: CardCvcElementComponent): stripeJs.StripeCardCvcElement | null;
        /**
         * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=card) for the `CardExpiryElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
         * Returns `null` if no `CardExpiryElement` is rendered in the current `Elements` provider tree.
         */
        getElement(component: CardExpiryElementComponent): stripeJs.StripeCardExpiryElement | null;
        /**
         * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=cart) for the `CartElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
         * Returns `null` if no `CartElement` is rendered in the current `Elements` provider tree.
         */
        getElement(component: CartElementComponent): stripeJs.StripeCartElement | null;
        /**
         * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=fpxBank) for the `FpxBankElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
         * Returns `null` if no `FpxBankElement` is rendered in the current `Elements` provider tree.
         */
        getElement(component: FpxBankElementComponent): stripeJs.StripeFpxBankElement | null;
        /**
         * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=card) for the `IbanElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
         * Returns `null` if no `IbanElement` is rendered in the current `Elements` provider tree.
         */
        getElement(component: IbanElementComponent): stripeJs.StripeIbanElement | null;
        /**
         * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=idealBank) for the `IdealBankElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
         * Returns `null` if no `IdealBankElement` is rendered in the current `Elements` provider tree.
         */
        getElement(component: IdealBankElementComponent): stripeJs.StripeIdealBankElement | null;
        /**
         * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=p24Bank) for the `P24BankElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
         * Returns `null` if no `P24BankElement` is rendered in the current `Elements` provider tree.
         */
        getElement(component: P24BankElementComponent): stripeJs.StripeP24BankElement | null;
        /**
         * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=epsBank) for the `EpsBankElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
         * Returns `null` if no `EpsBankElement` is rendered in the current `Elements` provider tree.
         */
        getElement(component: EpsBankElementComponent): stripeJs.StripeEpsBankElement | null;
        /**
         * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_link_authentication_element) for the `LinkAuthenticationElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
         * Returns `null` if no `LinkAuthenticationElement` is rendered in the current `Elements` provider tree.
         */
        getElement(component: LinkAuthenticationElementComponent): stripeJs.StripeLinkAuthenticationElement | null;
        /**
         * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_payment_element) for the `PaymentElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
         * Returns `null` if no `PaymentElement` is rendered in the current `Elements` provider tree.
         */
        getElement(component: PaymentElementComponent): stripeJs.StripeElement | null;
        /**
         * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_pay_button_element) for the `PayButtonElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
         * Returns `null` if no `PayButtonElement` is rendered in the current `Elements` provider tree.
         */
        getElement(component: PayButtonElementComponent): stripeJs.StripeElement | null;
        /**
         * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=card) for the `PaymentRequestButtonElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
         * Returns `null` if no `PaymentRequestButtonElement` is rendered in the current `Elements` provider tree.
         */
        getElement(component: PaymentRequestButtonElementComponent): stripeJs.StripePaymentRequestButtonElement | null;
        /**
         * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_address_element) for the `AddressElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
         * Returns `null` if no `AddressElement` is rendered in the current `Elements` provider tree.
         */
        getElement(component: AddressElementComponent): stripeJs.StripeAddressElement | null;
        /**
         * Returns the underlying [element instance](https://stripe.com/docs/js/deprecated/create_shipping_address_element) for the `ShippingAddressElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
         * Returns `null` if no `ShippingAddressElement` is rendered in the current `Elements` provider tree.
         */
        getElement(component: ShippingAddressElementComponent): stripeJs.StripeShippingAddressElement | null;
        /**
         * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=paymentMethodMessaging) for the `PaymentMethodMessagingElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
         * Returns `null` if no `PaymentMethodMessagingElement` is rendered in the current `Elements` provider tree.
         */
        getElement(component: PaymentMethodMessagingElementComponent): stripeJs.StripePaymentMethodMessagingElement | null;
        /**
         * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=card) for the `AffirmMessageElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
         * Returns `null` if no `AffirmMessageElement` is rendered in the current `Elements` provider tree.
         */
        getElement(component: AffirmMessageElementComponent): stripeJs.StripeAffirmMessageElement | null;
        /**
         * Returns the underlying [element instance](https://stripe.com/docs/js/elements_object/create_element?type=card) for the `AfterpayClearpayMessageElement` component in the current [Elements](https://stripe.com/docs/stripe-js/react#elements-provider) provider tree.
         * Returns `null` if no `AfterpayClearpayMessageElement` is rendered in the current `Elements` provider tree.
         */
        getElement(component: AfterpayClearpayMessageElementComponent): stripeJs.StripeAfterpayClearpayMessageElement | null;
    }
}
interface ElementsContextValue {
    elements: stripeJs.StripeElements | null;
    stripe: stripeJs.Stripe | null;
}
interface ElementsProps {
    /**
     * A [Stripe object](https://stripe.com/docs/js/initializing) or a `Promise` resolving to a `Stripe` object.
     * The easiest way to initialize a `Stripe` object is with the the [Stripe.js wrapper module](https://github.com/stripe/stripe-js/blob/master/README.md#readme).
     * Once this prop has been set, it can not be changed.
     *
     * You can also pass in `null` or a `Promise` resolving to `null` if you are performing an initial server-side render or when generating a static site.
     */
    stripe: PromiseLike<stripeJs.Stripe | null> | stripeJs.Stripe | null;
    /**
     * Optional [Elements configuration options](https://stripe.com/docs/js/elements_object/create).
     * Once the stripe prop has been set, these options cannot be changed.
     */
    options?: stripeJs.StripeElementsOptions;
}
/**
 * The `Elements` provider allows you to use [Element components](https://stripe.com/docs/stripe-js/react#element-components) and access the [Stripe object](https://stripe.com/docs/js/initializing) in any nested component.
 * Render an `Elements` provider at the root of your React app so that it is available everywhere you need it.
 *
 * To use the `Elements` provider, call `loadStripe` from `@stripe/stripe-js` with your publishable key.
 * The `loadStripe` function will asynchronously load the Stripe.js script and initialize a `Stripe` object.
 * Pass the returned `Promise` to `Elements`.
 *
 * @docs https://stripe.com/docs/stripe-js/react#elements-provider
 */
declare const Elements: FunctionComponent<PropsWithChildren<ElementsProps>>;
/**
 * @docs https://stripe.com/docs/stripe-js/react#useelements-hook
 */
declare const useElements: () => stripeJs.StripeElements | null;
/**
 * @docs https://stripe.com/docs/stripe-js/react#usestripe-hook
 */
declare const useStripe: () => stripeJs.Stripe | null;
/**
 * @docs https://stripe.com/docs/payments/checkout/cart-element
 */
declare const useCartElement: () => stripeJs.StripeCartElement | null;
/**
 * @docs https://stripe.com/docs/payments/checkout/cart-element
 */
declare const useCartElementState: () => stripeJs.StripeCartElementPayloadEvent | null;
interface ElementsConsumerProps {
    children: (props: ElementsContextValue) => ReactNode;
}
/**
 * @docs https://stripe.com/docs/stripe-js/react#elements-consumer
 */
declare const ElementsConsumer: FunctionComponent<ElementsConsumerProps>;
/**
 * Requires beta access:
 * Contact [Stripe support](https://support.stripe.com/) for more information.
 *
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
declare const AuBankAccountElement: AuBankAccountElementComponent;
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
declare const CardElement: CardElementComponent;
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
declare const CardNumberElement: CardNumberElementComponent;
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
declare const CardExpiryElement: CardExpiryElementComponent;
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
declare const CardCvcElement: CardCvcElementComponent;
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
declare const FpxBankElement: FpxBankElementComponent;
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
declare const IbanElement: IbanElementComponent;
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
declare const IdealBankElement: IdealBankElementComponent;
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
declare const P24BankElement: P24BankElementComponent;
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
declare const EpsBankElement: EpsBankElementComponent;
declare const PaymentElement: PaymentElementComponent;
/**
 * Requires beta access:
 * Contact [Stripe support](https://support.stripe.com/) for more information.
 *
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
declare const PayButtonElement: PayButtonElementComponent;
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
declare const PaymentRequestButtonElement: PaymentRequestButtonElementComponent;
/**
 * Requires beta access:
 * Contact [Stripe support](https://support.stripe.com/) for more information.
 *
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
declare const LinkAuthenticationElement: LinkAuthenticationElementComponent;
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
declare const AddressElement: AddressElementComponent;
/**
 * @deprecated
 * Use `AddressElement` instead.
 *
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
declare const ShippingAddressElement: ShippingAddressElementComponent;
/**
 * Requires beta access:
 * Contact [Stripe support](https://support.stripe.com/) for more information.
 *
 * @docs https://stripe.com/docs/elements/cart-element
 */
declare const CartElement: CartElementComponent;
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
declare const PaymentMethodMessagingElement: PaymentMethodMessagingElementComponent;
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
declare const AffirmMessageElement: AffirmMessageElementComponent;
/**
 * @docs https://stripe.com/docs/stripe-js/react#element-components
 */
declare const AfterpayClearpayMessageElement: AfterpayClearpayMessageElementComponent;
export { ElementProps, AuBankAccountElementProps, AuBankAccountElementComponent, CardElementProps, CardElementComponent, CardNumberElementProps, CardNumberElementComponent, CardExpiryElementProps, CardExpiryElementComponent, CardCvcElementProps, CardCvcElementComponent, CartElementProps, CartElementComponent, FpxBankElementProps, FpxBankElementComponent, IbanElementProps, IbanElementComponent, IdealBankElementProps, IdealBankElementComponent, P24BankElementProps, LinkAuthenticationElementProps, LinkAuthenticationElementComponent, P24BankElementComponent, EpsBankElementProps, EpsBankElementComponent, PaymentElementProps, PaymentElementComponent, PayButtonElementProps, PayButtonElementComponent, PaymentRequestButtonElementProps, PaymentRequestButtonElementComponent, AddressElementProps, AddressElementComponent, ShippingAddressElementProps, ShippingAddressElementComponent, PaymentMethodMessagingElementProps, PaymentMethodMessagingElementComponent, AffirmMessageElementProps, AffirmMessageElementComponent, AfterpayClearpayMessageElementProps, AfterpayClearpayMessageElementComponent, useElements, useStripe, useCartElement, useCartElementState, Elements, ElementsConsumer, AuBankAccountElement, CardElement, CardNumberElement, CardExpiryElement, CardCvcElement, FpxBankElement, IbanElement, IdealBankElement, P24BankElement, EpsBankElement, PaymentElement, PayButtonElement, PaymentRequestButtonElement, LinkAuthenticationElement, AddressElement, ShippingAddressElement, CartElement, PaymentMethodMessagingElement, AffirmMessageElement, AfterpayClearpayMessageElement };
