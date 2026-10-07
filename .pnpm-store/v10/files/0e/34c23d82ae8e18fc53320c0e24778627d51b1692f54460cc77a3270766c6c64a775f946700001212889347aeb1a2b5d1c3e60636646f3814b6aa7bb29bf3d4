// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * Source mandate notifications should be created when a notification related to
     * a source mandate must be sent to the payer. They will trigger a webhook or
     * deliver an email to the customer.
     */
    interface SourceMandateNotification {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'source_mandate_notification';

      acss_debit?: SourceMandateNotification.AcssDebit;

      /**
       * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount associated with the mandate notification. The amount is expressed in the currency of the underlying source. Required if the notification type is `debit_initiated`.
       */
      amount: number | null;

      bacs_debit?: SourceMandateNotification.BacsDebit;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * The reason of the mandate notification. Valid reasons are `mandate_confirmed` or `debit_initiated`.
       */
      reason: string;

      sepa_debit?: SourceMandateNotification.SepaDebit;

      /**
       * `Source` objects allow you to accept a variety of payment methods. They
       * represent a customer's payment instrument, and can be used with the Stripe API
       * just like a `Card` object: once chargeable, they can be charged, or can be
       * attached to customers.
       *
       * Stripe doesn't recommend using the deprecated [Sources API](https://stripe.com/docs/api/sources).
       * We recommend that you adopt the [PaymentMethods API](https://stripe.com/docs/api/payment_methods).
       * This newer API provides access to our latest features and payment method types.
       *
       * Related guides: [Sources API](https://stripe.com/docs/sources) and [Sources & Customers](https://stripe.com/docs/sources/customers).
       */
      source: Stripe.Source;

      /**
       * The status of the mandate notification. Valid statuses are `pending` or `submitted`.
       */
      status: string;

      /**
       * The type of source this mandate notification is attached to. Should be the source type identifier code for the payment method, such as `three_d_secure`.
       */
      type: string;
    }

    namespace SourceMandateNotification {
      interface AcssDebit {
        /**
         * The statement descriptor associate with the debit.
         */
        statement_descriptor?: string;
      }

      interface BacsDebit {
        /**
         * Last 4 digits of the account number associated with the debit.
         */
        last4?: string;
      }

      interface SepaDebit {
        /**
         * SEPA creditor ID.
         */
        creditor_identifier?: string;

        /**
         * Last 4 digits of the account number associated with the debit.
         */
        last4?: string;

        /**
         * Mandate reference associated with the debit.
         */
        mandate_reference?: string;
      }
    }
  }
}
