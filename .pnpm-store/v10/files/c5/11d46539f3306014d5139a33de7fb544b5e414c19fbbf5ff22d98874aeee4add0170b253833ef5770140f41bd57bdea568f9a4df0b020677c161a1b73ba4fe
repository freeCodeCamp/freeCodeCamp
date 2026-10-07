import {StripeElementBase, StripeElementStyle} from '../base';

export type StripeIssuingCardCopyButtonElement = StripeElementBase & {
  /**
   * Triggered when the element is clicked.
   */
  on(
    eventType: 'click',
    handler: (event: {elementType: 'issuingCardCopyButton'}) => any
  ): StripeIssuingCardCopyButtonElement;
  once(
    eventType: 'click',
    handler: (event: {elementType: 'issuingCardCopyButton'}) => any
  ): StripeIssuingCardCopyButtonElement;
  off(
    eventType: 'click',
    handler?: (event: {elementType: 'issuingCardCopyButton'}) => any
  ): StripeIssuingCardCopyButtonElement;

  /**
   * Updates the options the `IssuingCardCopyButtonElement` was initialized with.
   * Updates are merged into the existing configuration.
   *
   * The styles of an `IssuingCardCopyButtonElement` can be dynamically changed using `element.update`.
   * This method can be used to simulate CSS media queries that automatically adjust the size of elements when viewed on different devices.
   */
  update(options: Partial<StripeIssuingCardCopyButtonElementOptions>): void;
};

export interface StripeIssuingCardCopyButtonElementOptions {
  /**
   * The issued card data element to copy to the user's clipboard
   */
  toCopy: 'expiry' | 'cvc' | 'number' | 'pin';

  style?: StripeElementStyle;
}
