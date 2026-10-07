import {
  StripeElementBase,
  StripeElementStyle,
  StripeElementClasses,
  StripeElementChangeEvent,
} from './base';

export type StripeEpsBankElement = StripeElementBase & {
  /**
   * The change event is triggered when the `Element`'s value changes.
   */
  on(
    eventType: 'change',
    handler: (event: StripeEpsBankElementChangeEvent) => any
  ): StripeEpsBankElement;
  once(
    eventType: 'change',
    handler: (event: StripeEpsBankElementChangeEvent) => any
  ): StripeEpsBankElement;
  off(
    eventType: 'change',
    handler: (event: StripeEpsBankElementChangeEvent) => any
  ): StripeEpsBankElement;

  /**
   * Triggered when the element is fully rendered and can accept `element.focus` calls.
   */
  on(
    eventType: 'ready',
    handler: (event: {elementType: 'epsBank'}) => any
  ): StripeEpsBankElement;
  once(
    eventType: 'ready',
    handler: (event: {elementType: 'epsBank'}) => any
  ): StripeEpsBankElement;
  off(
    eventType: 'ready',
    handler: (event: {elementType: 'epsBank'}) => any
  ): StripeEpsBankElement;

  /**
   * Triggered when the element gains focus.
   */
  on(
    eventType: 'focus',
    handler: (event: {elementType: 'epsBank'}) => any
  ): StripeEpsBankElement;
  once(
    eventType: 'focus',
    handler: (event: {elementType: 'epsBank'}) => any
  ): StripeEpsBankElement;
  off(
    eventType: 'focus',
    handler: (event: {elementType: 'epsBank'}) => any
  ): StripeEpsBankElement;

  /**
   * Triggered when the element loses focus.
   */
  on(
    eventType: 'blur',
    handler: (event: {elementType: 'epsBank'}) => any
  ): StripeEpsBankElement;
  once(
    eventType: 'blur',
    handler: (event: {elementType: 'epsBank'}) => any
  ): StripeEpsBankElement;
  off(
    eventType: 'blur',
    handler: (event: {elementType: 'epsBank'}) => any
  ): StripeEpsBankElement;

  /**
   * Triggered when the escape key is pressed within the element.
   */
  on(
    eventType: 'escape',
    handler: (event: {elementType: 'epsBank'}) => any
  ): StripeEpsBankElement;
  once(
    eventType: 'escape',
    handler: (event: {elementType: 'epsBank'}) => any
  ): StripeEpsBankElement;
  off(
    eventType: 'escape',
    handler: (event: {elementType: 'epsBank'}) => any
  ): StripeEpsBankElement;

  /**
   * Updates the options the `EpsBankElement` was initialized with.
   * Updates are merged into the existing configuration.
   *
   * The styles of an `EpsBankElement` can be dynamically changed using `element.update`.
   * This method can be used to simulate CSS media queries that automatically adjust the size of elements when viewed on different devices.
   */
  update(options: Partial<StripeEpsBankElementOptions>): void;
};

export interface StripeEpsBankElementOptions {
  classes?: StripeElementClasses;

  style?: StripeElementStyle;

  /**
   * Appearance of the icon in the Element.
   */
  iconStyle?: 'default' | 'solid';

  /**
   * A pre-filled value for the Element.
   * Can be one of the banks listed in the [EPS guide](https://stripe.com/docs/payments/eps/accept-a-payment#bank-values) (e.g., `bank_austria`).
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

export interface StripeEpsBankElementChangeEvent
  extends StripeElementChangeEvent {
  /**
   * The type of element that emitted this event.
   */
  elementType: 'epsBank';

  /**
   * A pre-filled value for the Element.
   * Can be one of the banks listed in the [EPS guide](https://stripe.com/docs/payments/eps/accept-a-payment#bank-values) (e.g., `bank_austria`).
   */
  value?: string;
}
