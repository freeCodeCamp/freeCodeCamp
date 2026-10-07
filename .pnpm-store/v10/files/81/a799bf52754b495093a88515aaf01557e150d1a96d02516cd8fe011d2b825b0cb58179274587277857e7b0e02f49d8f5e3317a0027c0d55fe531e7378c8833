// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface TaxCodeRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface TaxCodeListParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class TaxCodesResource {
      /**
       * Retrieves the details of an existing tax code. Supply the unique tax code ID and Stripe will return the corresponding tax code information.
       */
      retrieve(
        id: string,
        params?: TaxCodeRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.TaxCode>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.TaxCode>>;

      /**
       * A list of [all tax codes available](https://stripe.com/docs/tax/tax-categories) to add to Products in order to allow specific tax calculations.
       */
      list(
        params?: TaxCodeListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.TaxCode>;
      list(options?: RequestOptions): ApiListPromise<Stripe.TaxCode>;
    }
  }
}
