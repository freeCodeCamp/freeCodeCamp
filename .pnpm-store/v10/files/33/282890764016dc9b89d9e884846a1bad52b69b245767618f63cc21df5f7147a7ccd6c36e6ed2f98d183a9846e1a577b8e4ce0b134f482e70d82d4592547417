import {
  StripeElementBase,
  StripeElementStyle,
  StripeElementClasses,
  StripeElementChangeEvent,
} from './base';

export type StripeFpxBankElement = StripeElementBase & {
  /**
   * The change event is triggered when the `Element`'s value changes.
   */
  on(
    eventType: 'change',
    handler: (event: StripeFpxBankElementChangeEvent) => any
  ): StripeFpxBankElement;
  once(
    eventType: 'change',
    handler: (event: StripeFpxBankElementChangeEvent) => any
  ): StripeFpxBankElement;
  off(
    eventType: 'change',
    handler?: (event: StripeFpxBankElementChangeEvent) => any
  ): StripeFpxBankElement;

  /**
   * Triggered when the element is fully rendered and can accept `element.focus` calls.
   */
  on(
    eventType: 'ready',
    handler: (event: {elementType: 'fpxBank'}) => any
  ): StripeFpxBankElement;
  once(
    eventType: 'ready',
    handler: (event: {elementType: 'fpxBank'}) => any
  ): StripeFpxBankElement;
  off(
    eventType: 'ready',
    handler?: (event: {elementType: 'fpxBank'}) => any
  ): StripeFpxBankElement;

  /**
   * Triggered when the element gains focus.
   */
  on(
    eventType: 'focus',
    handler: (event: {elementType: 'fpxBank'}) => any
  ): StripeFpxBankElement;
  once(
    eventType: 'focus',
    handler: (event: {elementType: 'fpxBank'}) => any
  ): StripeFpxBankElement;
  off(
    eventType: 'focus',
    handler?: (event: {elementType: 'fpxBank'}) => any
  ): StripeFpxBankElement;

  /**
   * Triggered when the element loses focus.
   */
  on(
    eventType: 'blur',
    handler: (event: {elementType: 'fpxBank'}) => any
  ): StripeFpxBankElement;
  once(
    eventType: 'blur',
    handler: (event: {elementType: 'fpxBank'}) => any
  ): StripeFpxBankElement;
  off(
    eventType: 'blur',
    handler?: (event: {elementType: 'fpxBank'}) => any
  ): StripeFpxBankElement;

  /**
   * Triggered when the escape key is pressed within the element.
   */
  on(
    eventType: 'escape',
    handler: (event: {elementType: 'fpxBank'}) => any
  ): StripeFpxBankElement;
  once(
    eventType: 'escape',
    handler: (event: {elementType: 'fpxBank'}) => any
  ): StripeFpxBankElement;
  off(
    eventType: 'escape',
    handler?: (event: {elementType: 'fpxBank'}) => any
  ): StripeFpxBankElement;

  /**
   * Updates the options the `FpxBankElement` was initialized with.
   * Updates are merged into the existing configuration.
   *
   * The styles of an `FpxBankElement` can be dynamically changed using `element.update`.
   * This method can be used to simulate CSS media queries that automatically adjust the size of elements when viewed on different devices.
   */
  update(options: Partial<StripeFpxBankElementOptions>): void;
};

export interface StripeFpxBankElementOptions {
  classes?: StripeElementClasses;

  style?: StripeElementStyle;

  /**
   * A pre-filled value for the Element.
   * Can be one of the banks listed in the [FPX guide](https://stripe.com/docs/payments/fpx#bank-reference) (e.g., `affin_bank`).
   */
  value?: string;

  /**
   * The type of the FPX accountholder.
   */
  accountHolderType: 'individual' | 'company';

  /**
   * Applies a disabled state to the Element such that user input is not accepted.
   * Default is false.
   */
  disabled?: boolean;
}

export interface StripeFpxBankElementChangeEvent
  extends StripeElementChangeEvent {
  /**
   * The type of element that emitted this event.
   */
  elementType: 'fpxBank';

  /**
   * The selected bank.
   * Can be one of the banks listed in the [FPX guide](https://stripe.com/docs/payments/fpx#bank-reference).
   */
  value: string;
}
