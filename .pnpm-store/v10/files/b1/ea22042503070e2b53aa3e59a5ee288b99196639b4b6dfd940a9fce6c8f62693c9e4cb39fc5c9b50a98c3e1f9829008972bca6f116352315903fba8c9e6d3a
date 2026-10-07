// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface PaymentMethodDomainCreateParams {
      /**
       * The domain name that this payment method domain object represents.
       */
      domain_name: string;

      /**
       * Whether this payment method domain is enabled. If the domain is not enabled, payment methods that require a payment method domain will not appear in Elements.
       */
      enabled?: boolean;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface PaymentMethodDomainRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface PaymentMethodDomainUpdateParams {
      /**
       * Whether this payment method domain is enabled. If the domain is not enabled, payment methods that require a payment method domain will not appear in Elements.
       */
      enabled?: boolean;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface PaymentMethodDomainListParams extends PaginationParams {
      /**
       * The domain name that this payment method domain object represents.
       */
      domain_name?: string;

      /**
       * Whether this payment method domain is enabled. If the domain is not enabled, payment methods will not appear in Elements
       */
      enabled?: boolean;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface PaymentMethodDomainValidateParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class PaymentMethodDomainsResource {
      /**
       * Creates a payment method domain.
       */
      create(
        params: PaymentMethodDomainCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentMethodDomain>>;

      /**
       * Retrieves the details of an existing payment method domain.
       */
      retrieve(
        id: string,
        params?: PaymentMethodDomainRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentMethodDomain>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentMethodDomain>>;

      /**
       * Updates an existing payment method domain.
       */
      update(
        id: string,
        params?: PaymentMethodDomainUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentMethodDomain>>;

      /**
       * Lists the details of existing payment method domains.
       */
      list(
        params?: PaymentMethodDomainListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.PaymentMethodDomain>;
      list(
        options?: RequestOptions
      ): ApiListPromise<Stripe.PaymentMethodDomain>;

      /**
       * Some payment methods such as Apple Pay require additional steps to verify a domain. If the requirements weren't satisfied when the domain was created, the payment method will be inactive on the domain.
       * The payment method doesn't appear in Elements for this domain until it is active.
       *
       * To activate a payment method on an existing payment method domain, complete the required validation steps specific to the payment method, and then validate the payment method domain with this endpoint.
       *
       * Related guides: [Payment method domains](https://stripe.com/docs/payments/payment-methods/pmd-registration).
       */
      validate(
        id: string,
        params?: PaymentMethodDomainValidateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentMethodDomain>>;
      validate(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentMethodDomain>>;
    }
  }
}
