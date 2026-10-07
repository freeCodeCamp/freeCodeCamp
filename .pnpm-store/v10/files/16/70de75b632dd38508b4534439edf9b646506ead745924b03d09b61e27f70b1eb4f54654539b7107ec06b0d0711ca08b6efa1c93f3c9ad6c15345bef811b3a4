declare module 'stripe' {
  namespace Stripe {
    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    interface Metadata {
      [name: string]: string;
    }

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     * While you can send values as numbers, they will be returned as strings.
     */
    interface MetadataParam {
      [name: string]: string | number | null;
    }

    /**
     * The Address object.
     */
    interface Address {
      /**
       * City/District/Suburb/Town/Village.
       */
      city: string | null;

      /**
       * 2-letter country code.
       */
      country: string | null;

      /**
       * Address line 1 (Street address/PO Box/Company name).
       */
      line1: string | null;

      /**
       * Address line 2 (Apartment/Suite/Unit/Building).
       */
      line2: string | null;

      /**
       * ZIP or postal code.
       */
      postal_code: string | null;

      /**
       * State/County/Province/Region.
       */
      state: string | null;
    }

    interface JapanAddress {
      /**
       * City/Ward.
       */
      city: string | null;

      /**
       * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
       */
      country: string | null;

      /**
       * Block/Building number.
       */
      line1: string | null;

      /**
       * Building details.
       */
      line2: string | null;

      /**
       * Zip/Postal Code.
       */
      postal_code: string | null;

      /**
       * Prefecture.
       */
      state: string | null;

      /**
       * Town/cho-me.
       */
      town: string | null;
    }

    interface AddressParam {
      /**
       * City, district, suburb, town, village, or ward.
       */
      city?: string;

      /**
       * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
       */
      country?: string;

      /**
       * Address line 1 (e.g., street, block, PO Box, or company name).
       */
      line1?: string;

      /**
       * Address line 2 (e.g., apartment, suite, unit, or building).
       */
      line2?: string;

      /**
       * ZIP or postal code.
       */
      postal_code?: string;

      /**
       * State, county, province, prefecture, or region.
       */
      state?: string;
    }

    interface ShippingAddressParam extends AddressParam {
      /**
       * Address line 1 (e.g., street, PO Box, or company name).
       */
      line1: string;
    }

    interface JapanAddressParam extends AddressParam {
      /**
       * Town or cho-me.
       */
      town?: string;
    }

    interface RangeQueryParam {
      /**
       * Minimum value to filter by (exclusive)
       */
      gt?: number;

      /**
       * Minimum value to filter by (inclusive)
       */
      gte?: number;

      /**
       * Maximum value to filter by (exclusive)
       */
      lt?: number;

      /**
       * Maximum value to filter by (inclusive)
       */
      lte?: number;
    }

    /**
     * @docs https://stripe.com/docs/api/pagination
     */
    interface PaginationParams {
      /**
       * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
       */
      ending_before?: string;

      /**
       * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
       */
      limit?: number;

      /**
       * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
       */
      starting_after?: string;
    }
  }
}
