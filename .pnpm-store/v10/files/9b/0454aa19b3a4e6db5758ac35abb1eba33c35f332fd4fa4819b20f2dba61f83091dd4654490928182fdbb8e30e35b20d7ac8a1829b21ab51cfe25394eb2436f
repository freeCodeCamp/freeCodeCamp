// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Radar {
      interface ValueListItemCreateParams {
        /**
         * The value of the item (whose type must match the type of the parent value list).
         */
        value: string;

        /**
         * The identifier of the value list which the created item will be added to.
         */
        value_list: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface ValueListItemRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface ValueListItemListParams extends PaginationParams {
        /**
         * Identifier for the parent value list this item belongs to.
         */
        value_list: string;

        /**
         * Only return items that were created during the given date interval.
         */
        created?: Stripe.RangeQueryParam | number;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Return items belonging to the parent list whose value matches the specified value (using an "is like" match).
         */
        value?: string;
      }

      interface ValueListItemDeleteParams {}

      class ValueListItemsResource {
        /**
         * Creates a new ValueListItem object, which is added to the specified parent value list.
         */
        create(
          params: ValueListItemCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.ValueListItem>>;

        /**
         * Retrieves a ValueListItem object.
         */
        retrieve(
          id: string,
          params?: ValueListItemRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.ValueListItem>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.ValueListItem>>;

        /**
         * Returns a list of ValueListItem objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
         */
        list(
          params: ValueListItemListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Radar.ValueListItem>;

        /**
         * Deletes a ValueListItem object, removing it from its parent value list.
         */
        del(
          id: string,
          params?: ValueListItemDeleteParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.DeletedValueListItem>>;
        del(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.DeletedValueListItem>>;
      }
    }
  }
}
