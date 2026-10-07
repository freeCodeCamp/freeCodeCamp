// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Treasury {
      interface ReceivedDebitRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface ReceivedDebitListParams extends PaginationParams {
        /**
         * The FinancialAccount that funds were pulled from.
         */
        financial_account: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Only return ReceivedDebits that have the given status: `succeeded` or `failed`.
         */
        status?: ReceivedDebitListParams.Status;
      }

      namespace ReceivedDebitListParams {
        type Status = 'failed' | 'succeeded';
      }

      class ReceivedDebitsResource {
        /**
         * Retrieves the details of an existing ReceivedDebit by passing the unique ReceivedDebit ID from the ReceivedDebit list
         */
        retrieve(
          id: string,
          params?: ReceivedDebitRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.ReceivedDebit>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.ReceivedDebit>>;

        /**
         * Returns a list of ReceivedDebits.
         */
        list(
          params: ReceivedDebitListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Treasury.ReceivedDebit>;
      }
    }
  }
}
