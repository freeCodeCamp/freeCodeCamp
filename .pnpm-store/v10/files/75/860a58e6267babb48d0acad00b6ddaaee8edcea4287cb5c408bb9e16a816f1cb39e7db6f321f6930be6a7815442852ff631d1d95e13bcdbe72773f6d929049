// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Climate {
      interface ProductRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface ProductListParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class ProductsResource {
        /**
         * Retrieves the details of a Climate product with the given ID.
         */
        retrieve(
          id: string,
          params?: ProductRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Climate.Product>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Climate.Product>>;

        /**
         * Lists all available Climate product objects.
         */
        list(
          params?: ProductListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Climate.Product>;
        list(options?: RequestOptions): ApiListPromise<Stripe.Climate.Product>;
      }
    }
  }
}
