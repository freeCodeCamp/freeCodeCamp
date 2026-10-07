// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface PromotionCodeCreateParams {
      /**
       * The coupon for this promotion code.
       */
      coupon: string;

      /**
       * Whether the promotion code is currently active.
       */
      active?: boolean;

      /**
       * The customer-facing code. Regardless of case, this code must be unique across all active promotion codes for a specific customer. If left blank, we will generate one automatically.
       */
      code?: string;

      /**
       * The customer that this promotion code can be used by. If not set, the promotion code can be used by all customers.
       */
      customer?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The timestamp at which this promotion code will expire. If the coupon has specified a `redeems_by`, then this value cannot be after the coupon's `redeems_by`.
       */
      expires_at?: number;

      /**
       * A positive integer specifying the number of times the promotion code can be redeemed. If the coupon has specified a `max_redemptions`, then this value cannot be greater than the coupon's `max_redemptions`.
       */
      max_redemptions?: number;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * Settings that restrict the redemption of the promotion code.
       */
      restrictions?: PromotionCodeCreateParams.Restrictions;
    }

    namespace PromotionCodeCreateParams {
      interface Restrictions {
        /**
         * Promotion codes defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
         */
        currency_options?: {
          [key: string]: Restrictions.CurrencyOptions;
        };

        /**
         * A Boolean indicating if the Promotion Code should only be redeemed for Customers without any successful payments or invoices
         */
        first_time_transaction?: boolean;

        /**
         * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
         */
        minimum_amount?: number;

        /**
         * Three-letter [ISO code](https://stripe.com/docs/currencies) for minimum_amount
         */
        minimum_amount_currency?: string;
      }

      namespace Restrictions {
        interface CurrencyOptions {
          /**
           * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
           */
          minimum_amount?: number;
        }
      }
    }

    interface PromotionCodeRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface PromotionCodeUpdateParams {
      /**
       * Whether the promotion code is currently active. A promotion code can only be reactivated when the coupon is still valid and the promotion code is otherwise redeemable.
       */
      active?: boolean;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * Settings that restrict the redemption of the promotion code.
       */
      restrictions?: PromotionCodeUpdateParams.Restrictions;
    }

    namespace PromotionCodeUpdateParams {
      interface Restrictions {
        /**
         * Promotion codes defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
         */
        currency_options?: {
          [key: string]: Restrictions.CurrencyOptions;
        };
      }

      namespace Restrictions {
        interface CurrencyOptions {
          /**
           * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
           */
          minimum_amount?: number;
        }
      }
    }

    interface PromotionCodeListParams extends PaginationParams {
      /**
       * Filter promotion codes by whether they are active.
       */
      active?: boolean;

      /**
       * Only return promotion codes that have this case-insensitive code.
       */
      code?: string;

      /**
       * Only return promotion codes for this coupon.
       */
      coupon?: string;

      /**
       * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * Only return promotion codes that are restricted to this customer.
       */
      customer?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class PromotionCodesResource {
      /**
       * A promotion code points to a coupon. You can optionally restrict the code to a specific customer, redemption limit, and expiration date.
       */
      create(
        params: PromotionCodeCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PromotionCode>>;

      /**
       * Retrieves the promotion code with the given ID. In order to retrieve a promotion code by the customer-facing code use [list](https://stripe.com/docs/api/promotion_codes/list) with the desired code.
       */
      retrieve(
        id: string,
        params?: PromotionCodeRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PromotionCode>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PromotionCode>>;

      /**
       * Updates the specified promotion code by setting the values of the parameters passed. Most fields are, by design, not editable.
       */
      update(
        id: string,
        params?: PromotionCodeUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PromotionCode>>;

      /**
       * Returns a list of your promotion codes.
       */
      list(
        params?: PromotionCodeListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.PromotionCode>;
      list(options?: RequestOptions): ApiListPromise<Stripe.PromotionCode>;
    }
  }
}
