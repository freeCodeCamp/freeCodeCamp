export type StripeAfterpayClearpayMessageElement = {
  /**
   * The `element.mount` method attaches your [Element](https://stripe.com/docs/js/element) to the DOM.
   * `element.mount` accepts either a CSS Selector (e.g., `'#afterpay-clearpay-message'`) or a DOM element.
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
   * Updates the options the `AfterpayClearpayMessageElement` was initialized with.
   * Updates are merged into the existing configuration.
   */
  update(options: Partial<StripeAfterpayClearpayMessageElementOptions>): void;

  /**
   * Triggered when the element is fully loaded and ready to perform method calls.
   */
  on(
    eventType: 'ready',
    handler: (event: {elementType: 'afterpayClearpayMessage'}) => any
  ): StripeAfterpayClearpayMessageElement;
};

export interface StripeAfterpayClearpayMessageElementOptions {
  /**
   * The total amount, divided into 4 installments, in the smallest currency unit.
   */
  amount: number;

  /**
   * The currency to display.
   */
  currency: 'USD' | 'AUD' | 'CAD' | 'GBP' | 'NZD' | 'EUR';

  /**
   * The badge color theme, applied when `logoType` is set to badge.
   */
  badgeTheme?:
    | 'black-on-mint'
    | 'black-on-white'
    | 'mint-on-black'
    | 'white-on-black';

  /**
   * The leading text for the mesage.
   */
  introText?: 'In' | 'in' | 'Or' | 'or' | 'Pay' | 'pay' | 'Pay in' | 'pay in';

  /**
   * Indicates whether an item is eligible for purchase with Afterpay Clearpay.
   */
  isEligible?: boolean;

  /**
   * Indicates whether an entire cart is eligible for purchase with Afterpay Clearpay.
   */
  isCartEligible?: boolean;

  /**
   * The lockup color theme, applied when `logoType` is set to lockup.
   */
  lockupTheme?: 'black' | 'white' | 'mint';

  /**
   * The logo style to display.
   */
  logoType?: 'badge' | 'lockup';

  /**
   * The maximum `amount` allowed for a purchase. This should match the limit defined in your Stripe dashboard.
   */
  max?: number;

  /**
   * The minimum `amount` allowed for a purchase. This should match the limit defined in your Stripe dashboard.
   */
  min?: number;

  /**
   * The style of modal link to display.
   */
  modalLinkStyle?: 'circled-info-icon' | 'learn-more-text' | 'more-info-text';

  /**
   * The background color for the info modal.
   */
  modalTheme?: 'mint' | 'white';

  /**
   * Determines whether 'interest-free' is displayed in the message.
   */
  showInterestFree?: boolean;

  /**
   * Determines whether 'with' is displayed before the logo.
   */
  showLowerLimit?: boolean;

  /**
   * Determines whether the lower limit is displayed when `amount` exceeds price limits.
   */
  showUpperLimit?: boolean;

  /**
   * Determines whether the upper limit is displayed when `amount` exceeds price limits.
   */
  showWith?: boolean;
}
