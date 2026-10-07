import {
  StripeElementBase,
  StripeElementStyle,
  StripeElementClasses,
  StripeElementChangeEvent,
} from './base';

export type StripeP24BankElement = StripeElementBase & {
  /**
   * The change event is triggered when the `Element`'s value changes.
   */
  on(
    eventType: 'change',
    handler: (event: StripeP24BankElementChangeEvent) => any
  ): StripeP24BankElement;
  once(
    eventType: 'change',
    handler: (event: StripeP24BankElementChangeEvent) => any
  ): StripeP24BankElement;
  off(
    eventType: 'change',
    handler: (event: StripeP24BankElementChangeEvent) => any
  ): StripeP24BankElement;

  /**
   * Triggered when the element is fully rendered and can accept `element.focus` calls.
   */
  on(
    eventType: 'ready',
    handler: (event: {elementType: 'p24Bank'}) => any
  ): StripeP24BankElement;
  once(
    eventType: 'ready',
    handler: (event: {elementType: 'p24Bank'}) => any
  ): StripeP24BankElement;
  off(
    eventType: 'ready',
    handler: (event: {elementType: 'p24Bank'}) => any
  ): StripeP24BankElement;

  /**
   * Triggered when the element gains focus.
   */
  on(
    eventType: 'focus',
    handler: (event: {elementType: 'p24Bank'}) => any
  ): StripeP24BankElement;
  once(
    eventType: 'focus',
    handler: (event: {elementType: 'p24Bank'}) => any
  ): StripeP24BankElement;
  off(
    eventType: 'focus',
    handler: (event: {elementType: 'p24Bank'}) => any
  ): StripeP24BankElement;

  /**
   * Triggered when the element loses focus.
   */
  on(
    eventType: 'blur',
    handler: (event: {elementType: 'p24Bank'}) => any
  ): StripeP24BankElement;
  once(
    eventType: 'blur',
    handler: (event: {elementType: 'p24Bank'}) => any
  ): StripeP24BankElement;
  off(
    eventType: 'blur',
    handler: (event: {elementType: 'p24Bank'}) => any
  ): StripeP24BankElement;

  /**
   * Triggered when the escape key is pressed within the element.
   */
  on(
    eventType: 'escape',
    handler: (event: {elementType: 'p24Bank'}) => any
  ): StripeP24BankElement;
  once(
    eventType: 'escape',
    handler: (event: {elementType: 'p24Bank'}) => any
  ): StripeP24BankElement;
  off(
    eventType: 'escape',
    handler: (event: {elementType: 'p24Bank'}) => any
  ): StripeP24BankElement;

  /**
   * Updates the options the `P24BankElement` was initialized with.
   * Updates are merged into the existing configuration.
   *
   * The styles of an `P24BankElement` can be dynamically changed using `element.update`.
   * This method can be used to simulate CSS media queries that automatically adjust the size of elements when viewed on different devices.
   */
  update(options: Partial<StripeP24BankElementOptions>): void;
};

export interface StripeP24BankElementOptions {
  classes?: StripeElementClasses;

  style?: StripeElementStyle;

  /**
   * Appearance of the icon in the Element.
   */
  iconStyle?: 'default' | 'solid';

  /**
   * A pre-filled value for the Element.
   * Can be one of the banks listed in the [Przelewy24 guide](https://stripe.com/docs/payments/p24/accept-a-payment#bank-values) (e.g., `bank_austria`).
   */
  value?: string;

  /**
   * Hides the icon in the Element.
   * Default is `false`.
   */
  hideIcon?: boolean;

  /**
   * Applies a disabled state to the Element such that user input is not accepted.
   * Default is false.
   */
  disabled?: boolean;
}

export interface StripeP24BankElementChangeEvent
  extends StripeElementChangeEvent {
  /**
   * The type of element that emitted this event.
   */
  elementType: 'p24Bank';

  /**
   * A pre-filled value for the Element.
   * Can be one of the banks listed in the [Przelewy24 guide](https://stripe.com/docs/payments/p24/accept-a-payment#bank-values) (e.g., `ing`).
   */
  value?: string;
}
