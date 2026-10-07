// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace FinancialConnections {
      /**
       * A Transaction represents a real transaction that affects a Financial Connections Account balance.
       */
      interface Transaction {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'financial_connections.transaction';

        /**
         * The ID of the Financial Connections Account this transaction belongs to.
         */
        account: string;

        /**
         * The amount of this transaction, in cents (or local equivalent).
         */
        amount: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * The description of this transaction.
         */
        description: string;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The status of the transaction.
         */
        status: Transaction.Status;

        status_transitions: Transaction.StatusTransitions;

        /**
         * Time at which the transaction was transacted. Measured in seconds since the Unix epoch.
         */
        transacted_at: number;

        /**
         * The token of the transaction refresh that last updated or created this transaction.
         */
        transaction_refresh: string;

        /**
         * Time at which the object was last updated. Measured in seconds since the Unix epoch.
         */
        updated: number;
      }

      namespace Transaction {
        type Status = 'pending' | 'posted' | 'void';

        interface StatusTransitions {
          /**
           * Time at which this transaction posted. Measured in seconds since the Unix epoch.
           */
          posted_at: number | null;

          /**
           * Time at which this transaction was voided. Measured in seconds since the Unix epoch.
           */
          void_at: number | null;
        }
      }
    }
  }
}
