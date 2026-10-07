// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Issuing {
      interface PhysicalBundleRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface PhysicalBundleListParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Only return physical bundles with the given status.
         */
        status?: PhysicalBundleListParams.Status;

        /**
         * Only return physical bundles with the given type.
         */
        type?: PhysicalBundleListParams.Type;
      }

      namespace PhysicalBundleListParams {
        type Status = 'active' | 'inactive' | 'review';

        type Type = 'custom' | 'standard';
      }

      class PhysicalBundlesResource {
        /**
         * Retrieves a physical bundle object.
         */
        retrieve(
          id: string,
          params?: PhysicalBundleRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.PhysicalBundle>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.PhysicalBundle>>;

        /**
         * Returns a list of physical bundle objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
         */
        list(
          params?: PhysicalBundleListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Issuing.PhysicalBundle>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Issuing.PhysicalBundle>;
      }
    }
  }
}
