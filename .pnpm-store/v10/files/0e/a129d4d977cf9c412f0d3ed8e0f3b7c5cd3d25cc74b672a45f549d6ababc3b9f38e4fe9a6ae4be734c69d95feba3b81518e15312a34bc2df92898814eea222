// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Issuing {
      interface TransactionRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface TransactionUpdateParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
      }

      interface TransactionListParams extends PaginationParams {
        /**
         * Only return transactions that belong to the given card.
         */
        card?: string;

        /**
         * Only return transactions that belong to the given cardholder.
         */
        cardholder?: string;

        /**
         * Only return transactions that were created during the given date interval.
         */
        created?: Stripe.RangeQueryParam | number;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Only return transactions that have the given type. One of `capture` or `refund`.
         */
        type?: TransactionListParams.Type;
      }

      namespace TransactionListParams {
        type Type = 'capture' | 'refund';
      }

      class TransactionsResource {
        /**
         * Retrieves an Issuing Transaction object.
         */
        retrieve(
          id: string,
          params?: TransactionRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.Transaction>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.Transaction>>;

        /**
         * Updates the specified Issuing Transaction object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
         */
        update(
          id: string,
          params?: TransactionUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.Transaction>>;

        /**
         * Returns a list of Issuing Transaction objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
         */
        list(
          params?: TransactionListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Issuing.Transaction>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Issuing.Transaction>;
      }
    }
  }
}
