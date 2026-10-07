// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Treasury {
      interface DebitReversalCreateParams {
        /**
         * The ReceivedDebit to reverse.
         */
        received_debit: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;
      }

      interface DebitReversalRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface DebitReversalListParams extends PaginationParams {
        /**
         * Returns objects associated with this FinancialAccount.
         */
        financial_account: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Only return DebitReversals for the ReceivedDebit ID.
         */
        received_debit?: string;

        /**
         * Only return DebitReversals for a given resolution.
         */
        resolution?: DebitReversalListParams.Resolution;

        /**
         * Only return DebitReversals for a given status.
         */
        status?: DebitReversalListParams.Status;
      }

      namespace DebitReversalListParams {
        type Resolution = 'lost' | 'won';

        type Status = 'canceled' | 'completed' | 'processing';
      }

      class DebitReversalsResource {
        /**
         * Reverses a ReceivedDebit and creates a DebitReversal object.
         */
        create(
          params: DebitReversalCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.DebitReversal>>;

        /**
         * Retrieves a DebitReversal object.
         */
        retrieve(
          id: string,
          params?: DebitReversalRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.DebitReversal>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.DebitReversal>>;

        /**
         * Returns a list of DebitReversals.
         */
        list(
          params: DebitReversalListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Treasury.DebitReversal>;
      }
    }
  }
}
