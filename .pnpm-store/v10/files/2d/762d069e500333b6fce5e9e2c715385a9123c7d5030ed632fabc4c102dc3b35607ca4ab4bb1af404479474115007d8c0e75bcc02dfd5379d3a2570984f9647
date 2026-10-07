// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Climate {
      interface SupplierRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface SupplierListParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class SuppliersResource {
        /**
         * Retrieves a Climate supplier object.
         */
        retrieve(
          id: string,
          params?: SupplierRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Climate.Supplier>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Climate.Supplier>>;

        /**
         * Lists all available Climate supplier objects.
         */
        list(
          params?: SupplierListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Climate.Supplier>;
        list(options?: RequestOptions): ApiListPromise<Stripe.Climate.Supplier>;
      }
    }
  }
}
