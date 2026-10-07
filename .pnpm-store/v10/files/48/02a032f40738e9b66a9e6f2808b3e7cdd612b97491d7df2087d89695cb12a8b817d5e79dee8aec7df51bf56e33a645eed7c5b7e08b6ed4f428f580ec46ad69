// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface ShippingRateCreateParams {
      /**
       * The name of the shipping rate, meant to be displayable to the customer. This will appear on CheckoutSessions.
       */
      display_name: string;

      /**
       * The estimated range for how long shipping will take, meant to be displayable to the customer. This will appear on CheckoutSessions.
       */
      delivery_estimate?: ShippingRateCreateParams.DeliveryEstimate;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Describes a fixed amount to charge for shipping. Must be present if type is `fixed_amount`.
       */
      fixed_amount?: ShippingRateCreateParams.FixedAmount;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
       */
      tax_behavior?: ShippingRateCreateParams.TaxBehavior;

      /**
       * A [tax code](https://stripe.com/docs/tax/tax-categories) ID. The Shipping tax code is `txcd_92010001`.
       */
      tax_code?: string;

      /**
       * The type of calculation to use on the shipping rate.
       */
      type?: 'fixed_amount';
    }

    namespace ShippingRateCreateParams {
      interface DeliveryEstimate {
        /**
         * The upper bound of the estimated range. If empty, represents no upper bound i.e., infinite.
         */
        maximum?: DeliveryEstimate.Maximum;

        /**
         * The lower bound of the estimated range. If empty, represents no lower bound.
         */
        minimum?: DeliveryEstimate.Minimum;
      }

      namespace DeliveryEstimate {
        interface Maximum {
          /**
           * A unit of time.
           */
          unit: Maximum.Unit;

          /**
           * Must be greater than 0.
           */
          value: number;
        }

        namespace Maximum {
          type Unit = 'business_day' | 'day' | 'hour' | 'month' | 'week';
        }

        interface Minimum {
          /**
           * A unit of time.
           */
          unit: Minimum.Unit;

          /**
           * Must be greater than 0.
           */
          value: number;
        }

        namespace Minimum {
          type Unit = 'business_day' | 'day' | 'hour' | 'month' | 'week';
        }
      }

      interface FixedAmount {
        /**
         * A non-negative integer in cents representing how much to charge.
         */
        amount: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * Shipping rates defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
         */
        currency_options?: {
          [key: string]: FixedAmount.CurrencyOptions;
        };
      }

      namespace FixedAmount {
        interface CurrencyOptions {
          /**
           * A non-negative integer in cents representing how much to charge.
           */
          amount: number;

          /**
           * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
           */
          tax_behavior?: CurrencyOptions.TaxBehavior;
        }

        namespace CurrencyOptions {
          type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
        }
      }

      type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
    }

    interface ShippingRateRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface ShippingRateUpdateParams {
      /**
       * Whether the shipping rate can be used for new purchases. Defaults to `true`.
       */
      active?: boolean;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Describes a fixed amount to charge for shipping. Must be present if type is `fixed_amount`.
       */
      fixed_amount?: ShippingRateUpdateParams.FixedAmount;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
       */
      tax_behavior?: ShippingRateUpdateParams.TaxBehavior;
    }

    namespace ShippingRateUpdateParams {
      interface FixedAmount {
        /**
         * Shipping rates defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
         */
        currency_options?: {
          [key: string]: FixedAmount.CurrencyOptions;
        };
      }

      namespace FixedAmount {
        interface CurrencyOptions {
          /**
           * A non-negative integer in cents representing how much to charge.
           */
          amount?: number;

          /**
           * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
           */
          tax_behavior?: CurrencyOptions.TaxBehavior;
        }

        namespace CurrencyOptions {
          type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
        }
      }

      type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
    }

    interface ShippingRateListParams extends PaginationParams {
      /**
       * Only return shipping rates that are active or inactive.
       */
      active?: boolean;

      /**
       * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * Only return shipping rates for the given currency.
       */
      currency?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class ShippingRatesResource {
      /**
       * Creates a new shipping rate object.
       */
      create(
        params: ShippingRateCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.ShippingRate>>;

      /**
       * Returns the shipping rate object with the given ID.
       */
      retrieve(
        id: string,
        params?: ShippingRateRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.ShippingRate>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.ShippingRate>>;

      /**
       * Updates an existing shipping rate object.
       */
      update(
        id: string,
        params?: ShippingRateUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.ShippingRate>>;

      /**
       * Returns a list of your shipping rates.
       */
      list(
        params?: ShippingRateListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.ShippingRate>;
      list(options?: RequestOptions): ApiListPromise<Stripe.ShippingRate>;
    }
  }
}
