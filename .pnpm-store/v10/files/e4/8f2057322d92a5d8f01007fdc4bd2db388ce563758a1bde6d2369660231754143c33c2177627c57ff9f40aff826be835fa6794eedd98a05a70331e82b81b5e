// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * To top up your Stripe balance, you create a top-up object. You can retrieve
     * individual top-ups, as well as list all top-ups. Top-ups are identified by a
     * unique, random ID.
     *
     * Related guide: [Topping up your platform account](https://stripe.com/docs/connect/top-ups)
     */
    interface Topup {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'topup';

      /**
       * Amount transferred.
       */
      amount: number;

      /**
       * ID of the balance transaction that describes the impact of this top-up on your account balance. May not be specified depending on status of top-up.
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
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description: string | null;

      /**
       * Date the funds are expected to arrive in your Stripe account for payouts. This factors in delays like weekends or bank holidays. May not be specified depending on status of top-up.
       */
      expected_availability_date: number | null;

      /**
       * Error code explaining reason for top-up failure if available (see [the errors section](https://stripe.com/docs/api#errors) for a list of codes).
       */
      failure_code: string | null;

      /**
       * Message to user further explaining reason for top-up failure if available.
       */
      failure_message: string | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata;

      /**
       * The source field is deprecated. It might not always be present in the API response.
       */
      source: Stripe.Source | null;

      /**
       * Extra information about a top-up. This will appear on your source's bank statement. It must contain at least one letter.
       */
      statement_descriptor: string | null;

      /**
       * The status of the top-up is either `canceled`, `failed`, `pending`, `reversed`, or `succeeded`.
       */
      status: Topup.Status;

      /**
       * A string that identifies this top-up as part of a group.
       */
      transfer_group: string | null;
    }

    namespace Topup {
      type Status =
        | 'canceled'
        | 'failed'
        | 'pending'
        | 'reversed'
        | 'succeeded';
    }
  }
}
