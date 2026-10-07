// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Entitlements {
      interface ActiveEntitlementRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface ActiveEntitlementListParams extends PaginationParams {
        /**
         * The ID of the customer.
         */
        customer: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class ActiveEntitlementsResource {
        /**
         * Retrieve an active entitlement
         */
        retrieve(
          id: string,
          params?: ActiveEntitlementRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Entitlements.ActiveEntitlement>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Entitlements.ActiveEntitlement>>;

        /**
         * Retrieve a list of active entitlements for a customer
         */
        list(
          params: ActiveEntitlementListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Entitlements.ActiveEntitlement>;
      }
    }
  }
}
