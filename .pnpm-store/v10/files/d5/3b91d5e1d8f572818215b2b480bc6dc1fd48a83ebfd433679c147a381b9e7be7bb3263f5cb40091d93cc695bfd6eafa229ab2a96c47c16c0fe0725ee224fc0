// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * [Stripe Connect](https://stripe.com/docs/connect) platforms can reverse transfers made to a
     * connected account, either entirely or partially, and can also specify whether
     * to refund any related application fees. Transfer reversals add to the
     * platform's balance and subtract from the destination account's balance.
     *
     * Reversing a transfer that was made for a [destination
     * charge](https://stripe.com/docs/connect/destination-charges) is allowed only up to the amount of
     * the charge. It is possible to reverse a
     * [transfer_group](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options)
     * transfer only if the destination account has enough balance to cover the
     * reversal.
     *
     * Related guide: [Reverse transfers](https://stripe.com/docs/connect/separate-charges-and-transfers#reverse-transfers)
     */
    interface TransferReversal {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'transfer_reversal';

      /**
       * Amount, in cents (or local equivalent).
       */
      amount: number;

      /**
       * Balance transaction that describes the impact on your account balance.
       */
      balance_transaction: string | Stripe.BalanceTransaction | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * Linked payment refund for the transfer reversal.
       */
      destination_payment_refund: string | Stripe.Refund | null;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata | null;

      /**
       * ID of the refund responsible for the transfer reversal.
       */
      source_refund: string | Stripe.Refund | null;

      /**
       * ID of the transfer that was reversed.
       */
      transfer: string | Stripe.Transfer;
    }
  }
}
