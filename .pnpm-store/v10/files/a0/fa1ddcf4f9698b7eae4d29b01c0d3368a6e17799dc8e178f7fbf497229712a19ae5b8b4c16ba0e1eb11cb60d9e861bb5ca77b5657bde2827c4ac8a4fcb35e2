// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface ApplePayDomainCreateParams {
      domain_name: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface ApplePayDomainRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface ApplePayDomainListParams extends PaginationParams {
      domain_name?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface ApplePayDomainDeleteParams {}

    class ApplePayDomainsResource {
      /**
       * Create an apple pay domain.
       */
      create(
        params: ApplePayDomainCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.ApplePayDomain>>;

      /**
       * Retrieve an apple pay domain.
       */
      retrieve(
        id: string,
        params?: ApplePayDomainRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.ApplePayDomain>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.ApplePayDomain>>;

      /**
       * List apple pay domains.
       */
      list(
        params?: ApplePayDomainListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.ApplePayDomain>;
      list(options?: RequestOptions): ApiListPromise<Stripe.ApplePayDomain>;

      /**
       * Delete an apple pay domain.
       */
      del(
        id: string,
        params?: ApplePayDomainDeleteParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedApplePayDomain>>;
      del(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedApplePayDomain>>;
    }
  }
}
