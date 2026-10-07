import {
  StripeElementBase,
  StripeElementStyle,
  StripeElementClasses,
  StripeElementChangeEvent,
} from './base';

export type StripeIdealBankElement = StripeElementBase & {
  /**
   * The change event is triggered when the `Element`'s value changes.
   */
  on(
    eventType: 'change',
    handler: (event: StripeIdealBankElementChangeEvent) => any
  ): StripeIdealBankElement;
  once(
    eventType: 'change',
    handler: (event: StripeIdealBankElementChangeEvent) => any
  ): StripeIdealBankElement;
  off(
    eventType: 'change',
    handler?: (event: StripeIdealBankElementChangeEvent) => any
  ): StripeIdealBankElement;

  /**
   * Triggered when the element is fully rendered and can accept `element.focus` calls.
   */
  on(
    eventType: 'ready',
    handler: (event: {elementType: 'idealBank'}) => any
  ): StripeIdealBankElement;
  once(
    eventType: 'ready',
    handler: (event: {elementType: 'idealBank'}) => any
  ): StripeIdealBankElement;
  off(
    eventType: 'ready',
    handler?: (event: {elementType: 'idealBank'}) => any
  ): StripeIdealBankElement;

  /**
   * Triggered when the element gains focus.
   */
  on(
    eventType: 'focus',
    handler: (event: {elementType: 'idealBank'}) => any
  ): StripeIdealBankElement;
  once(
    eventType: 'focus',
    handler: (event: {elementType: 'idealBank'}) => any
  ): StripeIdealBankElement;
  off(
    eventType: 'focus',
    handler?: (event: {elementType: 'idealBank'}) => any
  ): StripeIdealBankElement;

  /**
   * Triggered when the element loses focus.
   */
  on(
    eventType: 'blur',
    handler: (event: {elementType: 'idealBank'}) => any
  ): StripeIdealBankElement;
  once(
    eventType: 'blur',
    handler: (event: {elementType: 'idealBank'}) => any
  ): StripeIdealBankElement;
  off(
    eventType: 'blur',
    handler?: (event: {elementType: 'idealBank'}) => any
  ): StripeIdealBankElement;

  /**
   * Triggered when the escape key is pressed within the element.
   */
  on(
    eventType: 'escape',
    handler: (event: {elementType: 'idealBank'}) => any
  ): StripeIdealBankElement;
  once(
    eventType: 'escape',
    handler: (event: {elementType: 'idealBank'}) => any
  ): StripeIdealBankElement;
  off(
    eventType: 'escape',
    handler?: (event: {elementType: 'idealBank'}) => any
  ): StripeIdealBankElement;

  /**
   * Updates the options the `IdealBankElement` was initialized with.
   * Updates are merged into the existing configuration.
   *
   * The styles of an `IdealBankElement` can be dynamically changed using `element.update`.
   * This method can be used to simulate CSS media queries that automatically adjust the size of elements when viewed on different devices.
   */
  update(options: Partial<StripeIdealBankElementOptions>): void;
};

export interface StripeIdealBankElementOptions {
  classes?: StripeElementClasses;

  style?: StripeElementStyle;

  /**
   * Appearance of the icon in the Element.
   */
  iconStyle?: 'default' | 'solid';

  /**
   * A pre-filled value for the Element.
   * Can be one of the banks listed in the [iDEAL guide](https://stripe.com/docs/sources/ideal#specifying-customer-bank) (e.g., `abn_amro`).
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

export interface StripeIdealBankElementChangeEvent
  extends StripeElementChangeEvent {
  /**
   * The type of element that emitted this event.
   */
  elementType: 'idealBank';

  /**
   * The selected bank.
   * Can be one of the banks listed in the [iDEAL guide](https://stripe.com/docs/sources/ideal#specifying-customer-bank).
   */
  value: string;
}
