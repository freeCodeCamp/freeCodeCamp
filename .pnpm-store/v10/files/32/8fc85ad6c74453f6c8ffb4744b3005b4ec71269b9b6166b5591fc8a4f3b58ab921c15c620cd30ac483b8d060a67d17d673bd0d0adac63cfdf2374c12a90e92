// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Entitlements {
      interface FeatureCreateParams {
        /**
         * A unique key you provide as your own system identifier. This may be up to 80 characters.
         */
        lookup_key: string;

        /**
         * The feature's name, for your own purpose, not meant to be displayable to the customer.
         */
        name: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata?: Stripe.MetadataParam;
      }

      interface FeatureRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface FeatureUpdateParams {
        /**
         * Inactive features cannot be attached to new products and will not be returned from the features list endpoint.
         */
        active?: boolean;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

        /**
         * The feature's name, for your own purpose, not meant to be displayable to the customer.
         */
        name?: string;
      }

      interface FeatureListParams extends PaginationParams {
        /**
         * If set, filter results to only include features with the given archive status.
         */
        archived?: boolean;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * If set, filter results to only include features with the given lookup_key.
         */
        lookup_key?: string;
      }

      class FeaturesResource {
        /**
         * Creates a feature
         */
        create(
          params: FeatureCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Entitlements.Feature>>;

        /**
         * Retrieves a feature
         */
        retrieve(
          id: string,
          params?: FeatureRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Entitlements.Feature>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Entitlements.Feature>>;

        /**
         * Update a feature's metadata or permanently deactivate it.
         */
        update(
          id: string,
          params?: FeatureUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Entitlements.Feature>>;

        /**
         * Retrieve a list of features
         */
        list(
          params?: FeatureListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Entitlements.Feature>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Entitlements.Feature>;
      }
    }
  }
}
