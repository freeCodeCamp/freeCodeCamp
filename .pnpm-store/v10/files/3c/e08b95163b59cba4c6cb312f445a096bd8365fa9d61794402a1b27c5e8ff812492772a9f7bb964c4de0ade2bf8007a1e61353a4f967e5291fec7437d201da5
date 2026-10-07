// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * Some payment methods have no required amount that a customer must send.
     * Customers can be instructed to send any amount, and it can be made up of
     * multiple transactions. As such, sources can have multiple associated
     * transactions.
     */
    interface SourceTransaction {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'source_transaction';

      ach_credit_transfer?: SourceTransaction.AchCreditTransfer;

      /**
       * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount your customer has pushed to the receiver.
       */
      amount: number;

      chf_credit_transfer?: SourceTransaction.ChfCreditTransfer;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      gbp_credit_transfer?: SourceTransaction.GbpCreditTransfer;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      paper_check?: SourceTransaction.PaperCheck;

      sepa_credit_transfer?: SourceTransaction.SepaCreditTransfer;

      /**
       * The ID of the source this transaction is attached to.
       */
      source: string;

      /**
       * The status of the transaction, one of `succeeded`, `pending`, or `failed`.
       */
      status: string;

      /**
       * The type of source this transaction is attached to.
       */
      type: SourceTransaction.Type;
    }

    namespace SourceTransaction {
      interface AchCreditTransfer {
        /**
         * Customer data associated with the transfer.
         */
        customer_data?: string;

        /**
         * Bank account fingerprint associated with the transfer.
         */
        fingerprint?: string;

        /**
         * Last 4 digits of the account number associated with the transfer.
         */
        last4?: string;

        /**
         * Routing number associated with the transfer.
         */
        routing_number?: string;
      }

      interface ChfCreditTransfer {
        /**
         * Reference associated with the transfer.
         */
        reference?: string;

        /**
         * Sender's country address.
         */
        sender_address_country?: string;

        /**
         * Sender's line 1 address.
         */
        sender_address_line1?: string;

        /**
         * Sender's bank account IBAN.
         */
        sender_iban?: string;

        /**
         * Sender's name.
         */
        sender_name?: string;
      }

      interface GbpCreditTransfer {
        /**
         * Bank account fingerprint associated with the Stripe owned bank account receiving the transfer.
         */
        fingerprint?: string;

        /**
         * The credit transfer rails the sender used to push this transfer. The possible rails are: Faster Payments, BACS, CHAPS, and wire transfers. Currently only Faster Payments is supported.
         */
        funding_method?: string;

        /**
         * Last 4 digits of sender account number associated with the transfer.
         */
        last4?: string;

        /**
         * Sender entered arbitrary information about the transfer.
         */
        reference?: string;

        /**
         * Sender account number associated with the transfer.
         */
        sender_account_number?: string;

        /**
         * Sender name associated with the transfer.
         */
        sender_name?: string;

        /**
         * Sender sort code associated with the transfer.
         */
        sender_sort_code?: string;
      }

      interface PaperCheck {
        /**
         * Time at which the deposited funds will be available for use. Measured in seconds since the Unix epoch.
         */
        available_at?: string;

        /**
         * Comma-separated list of invoice IDs associated with the paper check.
         */
        invoices?: string;
      }

      interface SepaCreditTransfer {
        /**
         * Reference associated with the transfer.
         */
        reference?: string;

        /**
         * Sender's bank account IBAN.
         */
        sender_iban?: string;

        /**
         * Sender's name.
         */
        sender_name?: string;
      }

      type Type =
        | 'ach_credit_transfer'
        | 'ach_debit'
        | 'alipay'
        | 'bancontact'
        | 'card'
        | 'card_present'
        | 'eps'
        | 'giropay'
        | 'ideal'
        | 'klarna'
        | 'multibanco'
        | 'p24'
        | 'sepa_debit'
        | 'sofort'
        | 'three_d_secure'
        | 'wechat';
    }
  }
}
