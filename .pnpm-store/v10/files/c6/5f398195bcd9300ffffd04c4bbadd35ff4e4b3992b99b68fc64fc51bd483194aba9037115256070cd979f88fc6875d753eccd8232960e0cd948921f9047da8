// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface BalanceTransactionRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface BalanceTransactionListParams extends PaginationParams {
      /**
       * Only return transactions that were created during the given date interval.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * Only return transactions in a certain currency. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * For automatic Stripe payouts only, only returns transactions that were paid out on the specified payout ID.
       */
      payout?: string;

      /**
       * Only returns the original transaction.
       */
      source?: string;

      /**
       * Only returns transactions of the given type. One of: `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `contribution`, `issuing_authorization_hold`, `issuing_authorization_release`, `issuing_dispute`, `issuing_transaction`, `obligation_outbound`, `obligation_reversal_inbound`, `payment`, `payment_failure_refund`, `payment_network_reserve_hold`, `payment_network_reserve_release`, `payment_refund`, `payment_reversal`, `payment_unreconciled`, `payout`, `payout_cancel`, `payout_failure`, `refund`, `refund_failure`, `reserve_transaction`, `reserved_funds`, `stripe_fee`, `stripe_fx_fee`, `tax_fee`, `topup`, `topup_reversal`, `transfer`, `transfer_cancel`, `transfer_failure`, or `transfer_refund`.
       */
      type?: string;
    }

    class BalanceTransactionsResource {
      /**
       * Retrieves the balance transaction with the given ID.
       *
       * Note that this endpoint previously used the path /v1/balance/history/:id.
       */
      retrieve(
        id: string,
        params?: BalanceTransactionRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.BalanceTransaction>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.BalanceTransaction>>;

      /**
       * Returns a list of transactions that have contributed to the Stripe account balance (e.g., charges, transfers, and so forth). The transactions are returned in sorted order, with the most recent transactions appearing first.
       *
       * Note that this endpoint was previously called “Balance history” and used the path /v1/balance/history.
       */
      list(
        params?: BalanceTransactionListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.BalanceTransaction>;
      list(options?: RequestOptions): ApiListPromise<Stripe.BalanceTransaction>;
    }
  }
}
