// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Radar {
      interface ValueListCreateParams {
        /**
         * The name of the value list for use in rules.
         */
        alias: string;

        /**
         * The human-readable name of the value list.
         */
        name: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Type of the items in the value list. One of `card_fingerprint`, `us_bank_account_fingerprint`, `sepa_debit_fingerprint`, `card_bin`, `email`, `ip_address`, `country`, `string`, `case_sensitive_string`, or `customer_id`. Use `string` if the item type is unknown or mixed.
         */
        item_type?: ValueListCreateParams.ItemType;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;
      }

      namespace ValueListCreateParams {
        type ItemType =
          | 'card_bin'
          | 'card_fingerprint'
          | 'case_sensitive_string'
          | 'country'
          | 'customer_id'
          | 'email'
          | 'ip_address'
          | 'sepa_debit_fingerprint'
          | 'string'
          | 'us_bank_account_fingerprint';
      }

      interface ValueListRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface ValueListUpdateParams {
        /**
         * The name of the value list for use in rules.
         */
        alias?: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * The human-readable name of the value list.
         */
        name?: string;
      }

      interface ValueListListParams extends PaginationParams {
        /**
         * The alias used to reference the value list when writing rules.
         */
        alias?: string;

        /**
         * A value contained within a value list - returns all value lists containing this value.
         */
        contains?: string;

        /**
         * Only return value lists that were created during the given date interval.
         */
        created?: Stripe.RangeQueryParam | number;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface ValueListDeleteParams {}

      class ValueListsResource {
        /**
         * Creates a new ValueList object, which can then be referenced in rules.
         */
        create(
          params: ValueListCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.ValueList>>;

        /**
         * Retrieves a ValueList object.
         */
        retrieve(
          id: string,
          params?: ValueListRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.ValueList>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.ValueList>>;

        /**
         * Updates a ValueList object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Note that item_type is immutable.
         */
        update(
          id: string,
          params?: ValueListUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.ValueList>>;

        /**
         * Returns a list of ValueList objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
         */
        list(
          params?: ValueListListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Radar.ValueList>;
        list(options?: RequestOptions): ApiListPromise<Stripe.Radar.ValueList>;

        /**
         * Deletes a ValueList object, also deleting any items contained within the value list. To be deleted, a value list must not be referenced in any rules.
         */
        del(
          id: string,
          params?: ValueListDeleteParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.DeletedValueList>>;
        del(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.DeletedValueList>>;
      }
    }
  }
}
