// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Issuing {
      interface TokenRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface TokenUpdateParams {
        /**
         * Specifies which status the token should be updated to.
         */
        status: TokenUpdateParams.Status;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      namespace TokenUpdateParams {
        type Status = 'active' | 'deleted' | 'suspended';
      }

      interface TokenListParams extends PaginationParams {
        /**
         * The Issuing card identifier to list tokens for.
         */
        card: string;

        /**
         * Only return Issuing tokens that were created during the given date interval.
         */
        created?: Stripe.RangeQueryParam | number;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Select Issuing tokens with the given status.
         */
        status?: TokenListParams.Status;
      }

      namespace TokenListParams {
        type Status = 'active' | 'deleted' | 'requested' | 'suspended';
      }

      class TokensResource {
        /**
         * Retrieves an Issuing Token object.
         */
        retrieve(
          id: string,
          params?: TokenRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.Token>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.Token>>;

        /**
         * Attempts to update the specified Issuing Token object to the status specified.
         */
        update(
          id: string,
          params: TokenUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.Token>>;

        /**
         * Lists all Issuing Token objects for a given card.
         */
        list(
          params: TokenListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Issuing.Token>;
      }
    }
  }
}
