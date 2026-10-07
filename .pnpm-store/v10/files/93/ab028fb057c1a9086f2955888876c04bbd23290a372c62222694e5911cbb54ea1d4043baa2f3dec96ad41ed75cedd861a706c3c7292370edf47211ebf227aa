export type StripePaymentMethodMessagingElement = {
  /**
   * The `element.mount` method attaches your [Element](https://stripe.com/docs/js/element) to the DOM.
   * `element.mount` accepts either a CSS Selector (e.g., `'#payment-method-messaging'`) or a DOM element.
   */
  mount(domElement: string | HTMLElement): void;

  /**
   * Removes the element from the DOM and destroys it.
   * A destroyed element can not be re-activated or re-mounted to the DOM.
   */
  destroy(): void;

  /**
   * Unmounts the element from the DOM.
   * Call `element.mount` to re-attach it to the DOM.
   */
  unmount(): void;

  /**
   * Updates the options the `PaymentMethodMessagingElement` was initialized with.
   * Updates are merged into the existing configuration.
   */
  update(options: Partial<StripePaymentMethodMessagingElementOptions>): void;

  /**
   * Triggered when the element is fully loaded and ready to perform method calls.
   */
  on(
    eventType: 'ready',
    handler: (event: {elementType: 'paymentMethodMessaging'}) => any
  ): StripePaymentMethodMessagingElement;
};

export interface StripePaymentMethodMessagingElementOptions {
  /**
   * The total amount in the smallest currency unit.
   */
  amount: number;

  /**
   * The currency to display.
   */
  currency:
    | 'USD'
    | 'GBP'
    | 'EUR'
    | 'DKK'
    | 'NOK'
    | 'SEK'
    | 'AUD'
    | 'CAD'
    | 'NZD';

  /**
   * Payment methods to show messaging for.
   */
  paymentMethodTypes: Array<'afterpay_clearpay' | 'klarna' | 'affirm'>;

  /**
   * @deprecated Use `paymentMethodTypes` instead.
   */
  paymentMethods?: Array<'afterpay_clearpay' | 'klarna' | 'affirm'>;

  /**
   * The country the end-buyer is in.
   */
  countryCode:
    | 'US'
    | 'CA'
    | 'AU'
    | 'NZ'
    | 'GB'
    | 'IE'
    | 'FR'
    | 'ES'
    | 'DE'
    | 'AT'
    | 'BE'
    | 'DK'
    | 'FI'
    | 'IT'
    | 'NL'
    | 'NO'
    | 'SE';

  /**
   * The logo color to display in the message. Defaults to black
   */
  logoColor?: 'black' | 'white' | 'color';

  /**
   * The font size of the promotional message.
   */
  metaData?: {
    messagingClientReferenceId: string | null;
  };
}
