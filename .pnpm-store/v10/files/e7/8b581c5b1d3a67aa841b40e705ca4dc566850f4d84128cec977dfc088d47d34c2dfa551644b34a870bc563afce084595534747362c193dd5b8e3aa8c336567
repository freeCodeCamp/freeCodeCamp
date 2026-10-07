// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * Shipping rates describe the price of shipping presented to your customers and
     * applied to a purchase. For more information, see [Charge for shipping](https://stripe.com/docs/payments/during-payment/charge-shipping).
     */
    interface ShippingRate {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'shipping_rate';

      /**
       * Whether the shipping rate can be used for new purchases. Defaults to `true`.
       */
      active: boolean;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * The estimated range for how long shipping will take, meant to be displayable to the customer. This will appear on CheckoutSessions.
       */
      delivery_estimate: ShippingRate.DeliveryEstimate | null;

      /**
       * The name of the shipping rate, meant to be displayable to the customer. This will appear on CheckoutSessions.
       */
      display_name: string | null;

      fixed_amount?: ShippingRate.FixedAmount;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata;

      /**
       * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
       */
      tax_behavior: ShippingRate.TaxBehavior | null;

      /**
       * A [tax code](https://stripe.com/docs/tax/tax-categories) ID. The Shipping tax code is `txcd_92010001`.
       */
      tax_code: string | Stripe.TaxCode | null;

      /**
       * The type of calculation to use on the shipping rate.
       */
      type: 'fixed_amount';
    }

    namespace ShippingRate {
      interface DeliveryEstimate {
        /**
         * The upper bound of the estimated range. If empty, represents no upper bound i.e., infinite.
         */
        maximum: DeliveryEstimate.Maximum | null;

        /**
         * The lower bound of the estimated range. If empty, represents no lower bound.
         */
        minimum: DeliveryEstimate.Minimum | null;
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
          tax_behavior: CurrencyOptions.TaxBehavior;
        }

        namespace CurrencyOptions {
          type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
        }
      }

      type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
    }
  }
}
