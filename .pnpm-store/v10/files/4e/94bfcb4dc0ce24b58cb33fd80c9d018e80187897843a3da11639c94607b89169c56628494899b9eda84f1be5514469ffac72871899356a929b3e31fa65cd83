import {StripeElementBase, StripeElementClasses} from './base';
import {PaymentRequest} from '../payment-request';
import {Omit} from '../../utils';

export type StripePaymentRequestButtonElement = StripeElementBase & {
  /**
   * Triggered when the payment request button is clicked.
   */
  on(
    eventType: 'click',
    handler: (event: StripePaymentRequestButtonElementClickEvent) => any
  ): StripePaymentRequestButtonElement;
  once(
    eventType: 'click',
    handler: (event: StripePaymentRequestButtonElementClickEvent) => any
  ): StripePaymentRequestButtonElement;
  off(
    eventType: 'click',
    handler?: (event: StripePaymentRequestButtonElementClickEvent) => any
  ): StripePaymentRequestButtonElement;

  /**
   * Triggered when the element is fully rendered and can accept `element.focus` calls.
   */
  on(
    eventType: 'ready',
    handler: (event: {elementType: 'paymentRequestButton'}) => any
  ): StripePaymentRequestButtonElement;
  once(
    eventType: 'ready',
    handler: (event: {elementType: 'paymentRequestButton'}) => any
  ): StripePaymentRequestButtonElement;
  off(
    eventType: 'ready',
    handler?: (event: {elementType: 'paymentRequestButton'}) => any
  ): StripePaymentRequestButtonElement;

  /**
   * Triggered when the element gains focus.
   */
  on(
    eventType: 'focus',
    handler: (event: {elementType: 'paymentRequestButton'}) => any
  ): StripePaymentRequestButtonElement;
  once(
    eventType: 'focus',
    handler: (event: {elementType: 'paymentRequestButton'}) => any
  ): StripePaymentRequestButtonElement;
  off(
    eventType: 'focus',
    handler?: (event: {elementType: 'paymentRequestButton'}) => any
  ): StripePaymentRequestButtonElement;

  /**
   * Triggered when the element loses focus.
   */
  on(
    eventType: 'blur',
    handler: (event: {elementType: 'paymentRequestButton'}) => any
  ): StripePaymentRequestButtonElement;
  once(
    eventType: 'blur',
    handler: (event: {elementType: 'paymentRequestButton'}) => any
  ): StripePaymentRequestButtonElement;
  off(
    eventType: 'blur',
    handler?: (event: {elementType: 'paymentRequestButton'}) => any
  ): StripePaymentRequestButtonElement;

  /**
   * Updates the options the `PaymentRequestButtonElement` was initialized with.
   * Updates are merged into the existing configuration.
   *
   * The styles of an `PaymentRequestButtonElement` can be dynamically changed using `element.update`.
   * This method can be used to simulate CSS media queries that automatically adjust the size of elements when viewed on different devices.
   */
  update(
    options: Partial<
      Omit<StripePaymentRequestButtonElementOptions, 'paymentRequest'>
    >
  ): void;
};

export interface StripePaymentRequestButtonElementOptions {
  classes?: StripeElementClasses;

  /**
   * An object used to customize the appearance of the Payment Request Button.
   * The object must have a single `paymentRequestButton` field, containing any of the following sub-fields
   */
  style?: {
    paymentRequestButton: {
      /**
       * Preferred button type to display. Available types, by wallet:
       *
       * Browser card: default, book, buy, or donate.
       *
       * Google Pay: default, buy, or donate.
       *
       * Apple Pay: default, book, buy, donate, check-out, subscribe, reload, add-money, top-up, order, rent, support, contribute, tip
       *
       * When a wallet does not support the provided value, default is used as a fallback.
       */
      type?:
        | 'default'
        | 'book'
        | 'buy'
        | 'donate'
        | 'check-out'
        | 'subscribe'
        | 'reload'
        | 'add-money'
        | 'top-up'
        | 'order'
        | 'rent'
        | 'support'
        | 'contribute'
        | 'tip';

      /**
       * One of dark, light, or light-outline. The default is dark.
       */
      theme?: 'dark' | 'light' | 'light-outline';

      /**
       * The height of the Payment Request Button. Accepts px unit values.
       */
      height?: string;

      /**
       * The gap between buttons when multile buttons are shown. Accepts px unit values.
       */
      buttonSpacing?: string;
    };
  };

  /**
   * A `PaymentRequest` object used to configure the element.
   */
  paymentRequest: PaymentRequest;

  /**
   * Disable showing multiple buttons.
   * Default is `false`.
   */
  disableMultipleButtons?: boolean;
}

export interface StripePaymentRequestButtonElementClickEvent {
  preventDefault: () => void;
}
