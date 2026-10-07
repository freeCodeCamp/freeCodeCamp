// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Treasury {
      /**
       * You can reverse some [ReceivedDebits](https://stripe.com/docs/api#received_debits) depending on their network and source flow. Reversing a ReceivedDebit leads to the creation of a new object known as a DebitReversal.
       */
      interface DebitReversal {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'treasury.debit_reversal';

        /**
         * Amount (in cents) transferred.
         */
        amount: number;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * The FinancialAccount to reverse funds from.
         */
        financial_account: string | null;

        /**
         * A [hosted transaction receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses.
         */
        hosted_regulatory_receipt_url: string | null;

        /**
         * Other flows linked to a DebitReversal.
         */
        linked_flows: DebitReversal.LinkedFlows | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata;

        /**
         * The rails used to reverse the funds.
         */
        network: DebitReversal.Network;

        /**
         * The ReceivedDebit being reversed.
         */
        received_debit: string;

        /**
         * Status of the DebitReversal
         */
        status: DebitReversal.Status;

        status_transitions: DebitReversal.StatusTransitions;

        /**
         * The Transaction associated with this object.
         */
        transaction: string | Stripe.Treasury.Transaction | null;
      }

      namespace DebitReversal {
        interface LinkedFlows {
          /**
           * Set if there is an Issuing dispute associated with the DebitReversal.
           */
          issuing_dispute: string | null;
        }

        type Network = 'ach' | 'card';

        type Status = 'failed' | 'processing' | 'succeeded';

        interface StatusTransitions {
          /**
           * Timestamp describing when the DebitReversal changed status to `completed`.
           */
          completed_at: number | null;
        }
      }
    }
  }
}
