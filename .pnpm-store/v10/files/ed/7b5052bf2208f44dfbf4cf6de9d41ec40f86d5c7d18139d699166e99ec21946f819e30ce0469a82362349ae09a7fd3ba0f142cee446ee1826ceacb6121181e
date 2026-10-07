import {
  StripeElementBase,
  StripeElementStyle,
  StripeElementClasses,
  StripeElementChangeEvent,
} from './base';

export type StripeCardCvcElement = StripeElementBase & {
  /**
   * The change event is triggered when the `Element`'s value changes.
   */
  on(
    eventType: 'change',
    handler: (event: StripeCardCvcElementChangeEvent) => any
  ): StripeCardCvcElement;
  once(
    eventType: 'change',
    handler: (event: StripeCardCvcElementChangeEvent) => any
  ): StripeCardCvcElement;
  off(
    eventType: 'change',
    handler?: (event: StripeCardCvcElementChangeEvent) => any
  ): StripeCardCvcElement;

  /**
   * Triggered when the element is fully rendered and can accept `element.focus` calls.
   */
  on(
    eventType: 'ready',
    handler: (event: {elementType: 'cardCvc'}) => any
  ): StripeCardCvcElement;
  once(
    eventType: 'ready',
    handler: (event: {elementType: 'cardCvc'}) => any
  ): StripeCardCvcElement;
  off(
    eventType: 'ready',
    handler?: (event: {elementType: 'cardCvc'}) => any
  ): StripeCardCvcElement;

  /**
   * Triggered when the element gains focus.
   */
  on(
    eventType: 'focus',
    handler: (event: {elementType: 'cardCvc'}) => any
  ): StripeCardCvcElement;
  once(
    eventType: 'focus',
    handler: (event: {elementType: 'cardCvc'}) => any
  ): StripeCardCvcElement;
  off(
    eventType: 'focus',
    handler?: (event: {elementType: 'cardCvc'}) => any
  ): StripeCardCvcElement;

  /**
   * Triggered when the element loses focus.
   */
  on(
    eventType: 'blur',
    handler: (event: {elementType: 'cardCvc'}) => any
  ): StripeCardCvcElement;
  once(
    eventType: 'blur',
    handler: (event: {elementType: 'cardCvc'}) => any
  ): StripeCardCvcElement;
  off(
    eventType: 'blur',
    handler?: (event: {elementType: 'cardCvc'}) => any
  ): StripeCardCvcElement;

  /**
   * Triggered when the escape key is pressed within the element.
   */
  on(
    eventType: 'escape',
    handler: (event: {elementType: 'cardCvc'}) => any
  ): StripeCardCvcElement;
  once(
    eventType: 'escape',
    handler: (event: {elementType: 'cardCvc'}) => any
  ): StripeCardCvcElement;
  off(
    eventType: 'escape',
    handler?: (event: {elementType: 'cardCvc'}) => any
  ): StripeCardCvcElement;

  /**
   * Updates the options the `CardCvcElement` was initialized with.
   * Updates are merged into the existing configuration.
   *
   * The styles of an `CardCvcElement` can be dynamically changed using `element.update`.
   * This method can be used to simulate CSS media queries that automatically adjust the size of elements when viewed on different devices.
   */
  update(options: Partial<StripeCardCvcElementOptions>): void;
};

export interface StripeCardCvcElementOptions {
  classes?: StripeElementClasses;

  style?: StripeElementStyle;

  placeholder?: string;

  /**
   * Applies a disabled state to the Element such that user input is not accepted.
   * Default is false.
   */
  disabled?: boolean;
}

export interface StripeCardCvcElementChangeEvent
  extends StripeElementChangeEvent {
  /**
   * The type of element that emitted this event.
   */
  elementType: 'cardCvc';
}
