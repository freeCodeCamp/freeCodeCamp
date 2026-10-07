// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Issuing {
      interface PersonalizationDesignCreateParams {
        /**
         * The physical bundle object belonging to this personalization design.
         */
        physical_bundle: string;

        /**
         * The file for the card logo, for use with physical bundles that support card logos. Must have a `purpose` value of `issuing_logo`.
         */
        card_logo?: string;

        /**
         * Hash containing carrier text, for use with physical bundles that support carrier text.
         */
        carrier_text?: PersonalizationDesignCreateParams.CarrierText;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * A lookup key used to retrieve personalization designs dynamically from a static string. This may be up to 200 characters.
         */
        lookup_key?: string;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * Friendly display name.
         */
        name?: string;

        /**
         * Information on whether this personalization design is used to create cards when one is not specified.
         */
        preferences?: PersonalizationDesignCreateParams.Preferences;

        /**
         * If set to true, will atomically remove the lookup key from the existing personalization design, and assign it to this personalization design.
         */
        transfer_lookup_key?: boolean;
      }

      namespace PersonalizationDesignCreateParams {
        interface CarrierText {
          /**
           * The footer body text of the carrier letter.
           */
          footer_body?: Stripe.Emptyable<string>;

          /**
           * The footer title text of the carrier letter.
           */
          footer_title?: Stripe.Emptyable<string>;

          /**
           * The header body text of the carrier letter.
           */
          header_body?: Stripe.Emptyable<string>;

          /**
           * The header title text of the carrier letter.
           */
          header_title?: Stripe.Emptyable<string>;
        }

        interface Preferences {
          /**
           * Whether we use this personalization design to create cards when one isn't specified. A connected account uses the Connect platform's default design if no personalization design is set as the default design.
           */
          is_default: boolean;
        }
      }

      interface PersonalizationDesignRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface PersonalizationDesignUpdateParams {
        /**
         * The file for the card logo, for use with physical bundles that support card logos. Must have a `purpose` value of `issuing_logo`.
         */
        card_logo?: Stripe.Emptyable<string>;

        /**
         * Hash containing carrier text, for use with physical bundles that support carrier text.
         */
        carrier_text?: Stripe.Emptyable<
          PersonalizationDesignUpdateParams.CarrierText
        >;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * A lookup key used to retrieve personalization designs dynamically from a static string. This may be up to 200 characters.
         */
        lookup_key?: Stripe.Emptyable<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * Friendly display name. Providing an empty string will set the field to null.
         */
        name?: Stripe.Emptyable<string>;

        /**
         * The physical bundle object belonging to this personalization design.
         */
        physical_bundle?: string;

        /**
         * Information on whether this personalization design is used to create cards when one is not specified.
         */
        preferences?: PersonalizationDesignUpdateParams.Preferences;

        /**
         * If set to true, will atomically remove the lookup key from the existing personalization design, and assign it to this personalization design.
         */
        transfer_lookup_key?: boolean;
      }

      namespace PersonalizationDesignUpdateParams {
        interface CarrierText {
          /**
           * The footer body text of the carrier letter.
           */
          footer_body?: Stripe.Emptyable<string>;

          /**
           * The footer title text of the carrier letter.
           */
          footer_title?: Stripe.Emptyable<string>;

          /**
           * The header body text of the carrier letter.
           */
          header_body?: Stripe.Emptyable<string>;

          /**
           * The header title text of the carrier letter.
           */
          header_title?: Stripe.Emptyable<string>;
        }

        interface Preferences {
          /**
           * Whether we use this personalization design to create cards when one isn't specified. A connected account uses the Connect platform's default design if no personalization design is set as the default design.
           */
          is_default: boolean;
        }
      }

      interface PersonalizationDesignListParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Only return personalization designs with the given lookup keys.
         */
        lookup_keys?: Array<string>;

        /**
         * Only return personalization designs with the given preferences.
         */
        preferences?: PersonalizationDesignListParams.Preferences;

        /**
         * Only return personalization designs with the given status.
         */
        status?: PersonalizationDesignListParams.Status;
      }

      namespace PersonalizationDesignListParams {
        interface Preferences {
          /**
           * Only return the personalization design that's set as the default. A connected account uses the Connect platform's default design if no personalization design is set as the default.
           */
          is_default?: boolean;

          /**
           * Only return the personalization design that is set as the Connect platform's default. This parameter is only applicable to connected accounts.
           */
          is_platform_default?: boolean;
        }

        type Status = 'active' | 'inactive' | 'rejected' | 'review';
      }

      class PersonalizationDesignsResource {
        /**
         * Creates a personalization design object.
         */
        create(
          params: PersonalizationDesignCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.PersonalizationDesign>>;

        /**
         * Retrieves a personalization design object.
         */
        retrieve(
          id: string,
          params?: PersonalizationDesignRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.PersonalizationDesign>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.PersonalizationDesign>>;

        /**
         * Updates a card personalization object.
         */
        update(
          id: string,
          params?: PersonalizationDesignUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Issuing.PersonalizationDesign>>;

        /**
         * Returns a list of personalization design objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
         */
        list(
          params?: PersonalizationDesignListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Issuing.PersonalizationDesign>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Issuing.PersonalizationDesign>;
      }
    }
  }
}
