// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface CountrySpecRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface CountrySpecListParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class CountrySpecsResource {
      /**
       * Returns a Country Spec for a given Country code.
       */
      retrieve(
        id: string,
        params?: CountrySpecRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.CountrySpec>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.CountrySpec>>;

      /**
       * Lists all Country Spec objects available in the API.
       */
      list(
        params?: CountrySpecListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.CountrySpec>;
      list(options?: RequestOptions): ApiListPromise<Stripe.CountrySpec>;
    }
  }
}
