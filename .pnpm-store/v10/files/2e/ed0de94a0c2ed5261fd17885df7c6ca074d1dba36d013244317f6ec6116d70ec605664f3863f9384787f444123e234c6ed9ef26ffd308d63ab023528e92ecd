import {Address} from './shared';
import {PaymentIntent} from './payment-intents';

/**
 * The Order object.
 */
export interface Order {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'order';

  /**
   * Total order cost after discounts and taxes are applied. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). To submit an order, the total must be either 0 or at least $0.50 USD or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts).
   */
  amount_total: number;

  /**
   * Order cost before any discounts or taxes are applied. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency).
   */
  amount_subtotal: number;

  /**
   * Customer billing details associated with the order.
   */
  billing_details: Order.Billing | null;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Customer shipping information associated with the order.
   */
  shipping_details: Order.Shipping | null;

  /**
   * Payment information associated with the order.
   */
  payment: Order.Payment;

  /**
   * The overall status of the order.
   */
  status: Order.Status;
}

export namespace Order {
  export interface Billing {
    /**
     * Billing address for the order.
     */
    address?: Address;

    /**
     * Email address for the order.
     */
    email?: string | null;

    /**
     * Full name for the order.
     */
    name?: string | null;

    /**
     * Billing phone number for the order (including extension).
     */
    phone?: string | null;
  }

  export interface Shipping {
    /**
     * Recipient shipping address. Required if the order includes products that are shippable.
     */
    address?: Address;

    /**
     * Recipient name.
     */
    name?: string | null;

    /**
     * Recipient phone (including extension).
     */
    phone?: string | null;
  }

  export interface Payment {
    /**
     * Payment intent associated with this order. Null when the order is `open`.
     */
    payment_intent?: PaymentIntent | null;

    /**
     * The status of the underlying payment associated with this order, if any. Null when the order is `open`.
     */
    status?: PaymentIntent.Status | null;
  }

  export type Status =
    | 'open'
    | 'submitted'
    | 'processing'
    | 'complete'
    | 'canceled';
}
