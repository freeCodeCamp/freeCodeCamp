// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * Balance transactions represent funds moving through your Stripe account.
     * Stripe creates them for every type of transaction that enters or leaves your Stripe account balance.
     *
     * Related guide: [Balance transaction types](https://stripe.com/docs/reports/balance-transaction-types)
     */
    interface BalanceTransaction {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'balance_transaction';

      /**
       * Gross amount of this transaction (in cents (or local equivalent)). A positive value represents funds charged to another party, and a negative value represents funds sent to another party.
       */
      amount: number;

      /**
       * The date that the transaction's net funds become available in the Stripe balance.
       */
      available_on: number;

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
       * If applicable, this transaction uses an exchange rate. If money converts from currency A to currency B, then the `amount` in currency A, multipled by the `exchange_rate`, equals the `amount` in currency B. For example, if you charge a customer 10.00 EUR, the PaymentIntent's `amount` is `1000` and `currency` is `eur`. If this converts to 12.34 USD in your Stripe account, the BalanceTransaction's `amount` is `1234`, its `currency` is `usd`, and the `exchange_rate` is `1.234`.
       */
      exchange_rate: number | null;

      /**
       * Fees (in cents (or local equivalent)) paid for this transaction. Represented as a positive integer when assessed.
       */
      fee: number;

      /**
       * Detailed breakdown of fees (in cents (or local equivalent)) paid for this transaction.
       */
      fee_details: Array<BalanceTransaction.FeeDetail>;

      /**
       * Net impact to a Stripe balance (in cents (or local equivalent)). A positive value represents incrementing a Stripe balance, and a negative value decrementing a Stripe balance. You can calculate the net impact of a transaction on a balance by `amount` - `fee`
       */
      net: number;

      /**
       * Learn more about how [reporting categories](https://stripe.com/docs/reports/reporting-categories) can help you understand balance transactions from an accounting perspective.
       */
      reporting_category: string;

      /**
       * This transaction relates to the Stripe object.
       */
      source: string | Stripe.BalanceTransactionSource | null;

      /**
       * The transaction's net funds status in the Stripe balance, which are either `available` or `pending`.
       */
      status: string;

      /**
       * Transaction type: `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `contribution`, `issuing_authorization_hold`, `issuing_authorization_release`, `issuing_dispute`, `issuing_transaction`, `obligation_outbound`, `obligation_reversal_inbound`, `payment`, `payment_failure_refund`, `payment_network_reserve_hold`, `payment_network_reserve_release`, `payment_refund`, `payment_reversal`, `payment_unreconciled`, `payout`, `payout_cancel`, `payout_failure`, `refund`, `refund_failure`, `reserve_transaction`, `reserved_funds`, `stripe_fee`, `stripe_fx_fee`, `tax_fee`, `topup`, `topup_reversal`, `transfer`, `transfer_cancel`, `transfer_failure`, or `transfer_refund`. Learn more about [balance transaction types and what they represent](https://stripe.com/docs/reports/balance-transaction-types). To classify transactions for accounting purposes, consider `reporting_category` instead.
       */
      type: BalanceTransaction.Type;
    }

    namespace BalanceTransaction {
      interface FeeDetail {
        /**
         * Amount of the fee, in cents.
         */
        amount: number;

        /**
         * ID of the Connect application that earned the fee.
         */
        application: string | null;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * An arbitrary string attached to the object. Often useful for displaying to users.
         */
        description: string | null;

        /**
         * Type of the fee, one of: `application_fee`, `payment_method_passthrough_fee`, `stripe_fee` or `tax`.
         */
        type: string;
      }

      type Type =
        | 'adjustment'
        | 'advance'
        | 'advance_funding'
        | 'anticipation_repayment'
        | 'application_fee'
        | 'application_fee_refund'
        | 'charge'
        | 'climate_order_purchase'
        | 'climate_order_refund'
        | 'connect_collection_transfer'
        | 'contribution'
        | 'issuing_authorization_hold'
        | 'issuing_authorization_release'
        | 'issuing_dispute'
        | 'issuing_transaction'
        | 'obligation_outbound'
        | 'obligation_reversal_inbound'
        | 'payment'
        | 'payment_failure_refund'
        | 'payment_network_reserve_hold'
        | 'payment_network_reserve_release'
        | 'payment_refund'
        | 'payment_reversal'
        | 'payment_unreconciled'
        | 'payout'
        | 'payout_cancel'
        | 'payout_failure'
        | 'refund'
        | 'refund_failure'
        | 'reserve_transaction'
        | 'reserved_funds'
        | 'stripe_fee'
        | 'stripe_fx_fee'
        | 'tax_fee'
        | 'topup'
        | 'topup_reversal'
        | 'transfer'
        | 'transfer_cancel'
        | 'transfer_failure'
        | 'transfer_refund';
    }
  }
}
