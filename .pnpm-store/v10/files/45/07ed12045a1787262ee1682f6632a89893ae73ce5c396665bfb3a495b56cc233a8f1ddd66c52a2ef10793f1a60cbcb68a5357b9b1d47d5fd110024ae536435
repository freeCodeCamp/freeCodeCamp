export type StripeAffirmMessageElement = {
  /**
   * The `element.mount` method attaches your [Element](https://stripe.com/docs/js/element) to the DOM.
   * `element.mount` accepts either a CSS Selector (e.g., `'#affirm-message'`) or a DOM element.
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
   * Updates the options the `AffirmMessageElement` was initialized with.
   * Updates are merged into the existing configuration.
   */
  update(options: Partial<StripeAffirmMessageElementOptions>): void;

  /**
   * Triggered when the element is fully loaded and ready to perform method calls.
   */
  on(
    eventType: 'ready',
    handler: (event: {elementType: 'affirmMessage'}) => any
  ): StripeAffirmMessageElement;
};

export interface StripeAffirmMessageElementOptions {
  /**
   * The total amount in the smallest currency unit.
   */
  amount: number;

  /**
   * The currency to display.
   */
  currency: 'USD';

  /**
   * The affirm logo color.
   */
  logoColor?: 'primary' | 'black' | 'white';

  /**
   * The font color of the promotional message.
   */
  fontColor?: string;

  /**
   * The font size of the promotional message.
   */
  fontSize?: string;

  /**
   * The text alignment of the promotional message.
   */
  textAlign?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify';
}
