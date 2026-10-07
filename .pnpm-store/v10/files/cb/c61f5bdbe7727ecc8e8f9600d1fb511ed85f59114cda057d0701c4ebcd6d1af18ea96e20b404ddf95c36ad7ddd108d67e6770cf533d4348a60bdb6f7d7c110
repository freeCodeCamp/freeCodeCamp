// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace FinancialConnections {
      interface TransactionRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface TransactionListParams extends PaginationParams {
        /**
         * The ID of the Stripe account whose transactions will be retrieved.
         */
        account: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * A filter on the list based on the object `transacted_at` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with the following options:
         */
        transacted_at?: Stripe.RangeQueryParam | number;

        /**
         * A filter on the list based on the object `transaction_refresh` field. The value can be a dictionary with the following options:
         */
        transaction_refresh?: TransactionListParams.TransactionRefresh;
      }

      namespace TransactionListParams {
        interface TransactionRefresh {
          /**
           * Return results where the transactions were created or updated by a refresh that took place after this refresh (non-inclusive).
           */
          after: string;
        }
      }

      class TransactionsResource {
        /**
         * Retrieves the details of a Financial Connections Transaction
         */
        retrieve(
          id: string,
          params?: TransactionRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.FinancialConnections.Transaction>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.FinancialConnections.Transaction>>;

        /**
         * Returns a list of Financial Connections Transaction objects.
         */
        list(
          params: TransactionListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.FinancialConnections.Transaction>;
      }
    }
  }
}
