// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Treasury {
      interface TransactionEntryRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface TransactionEntryListParams extends PaginationParams {
        /**
         * Returns objects associated with this FinancialAccount.
         */
        financial_account: string;

        /**
         * Only return TransactionEntries that were created during the given date interval.
         */
        created?: Stripe.RangeQueryParam | number;

        effective_at?: Stripe.RangeQueryParam | number;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * The results are in reverse chronological order by `created` or `effective_at`. The default is `created`.
         */
        order_by?: TransactionEntryListParams.OrderBy;

        /**
         * Only return TransactionEntries associated with this Transaction.
         */
        transaction?: string;
      }

      namespace TransactionEntryListParams {
        type OrderBy = 'created' | 'effective_at';
      }

      class TransactionEntriesResource {
        /**
         * Retrieves a TransactionEntry object.
         */
        retrieve(
          id: string,
          params?: TransactionEntryRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.TransactionEntry>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.TransactionEntry>>;

        /**
         * Retrieves a list of TransactionEntry objects.
         */
        list(
          params: TransactionEntryListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Treasury.TransactionEntry>;
      }
    }
  }
}
