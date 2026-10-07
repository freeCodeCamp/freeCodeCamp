// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The DeletedPrice object.
     */
    interface DeletedPrice {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'price';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }

    /**
     * Prices define the unit cost, currency, and (optional) billing cycle for both recurring and one-time purchases of products.
     * [Products](https://stripe.com/docs/api#products) help you track inventory or provisioning, and prices help you track payment terms. Different physical goods or levels of service should be represented by products, and pricing options should be represented by prices. This approach lets you change prices without having to change your provisioning scheme.
     *
     * For example, you might have a single "gold" product that has prices for $10/month, $100/year, and €9 once.
     *
     * Related guides: [Set up a subscription](https://stripe.com/docs/billing/subscriptions/set-up-subscription), [create an invoice](https://stripe.com/docs/billing/invoices/create), and more about [products and prices](https://stripe.com/docs/products-prices/overview).
     */
    interface Price {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'price';

      /**
       * Whether the price can be used for new purchases.
       */
      active: boolean;

      /**
       * Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `unit_amount` or `unit_amount_decimal`) will be charged per unit in `quantity` (for prices with `usage_type=licensed`), or per unit of total usage (for prices with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
       */
      billing_scheme: Price.BillingScheme;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * Prices defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
       */
      currency_options?: {
        [key: string]: Price.CurrencyOptions;
      };

      /**
       * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
       */
      custom_unit_amount: Price.CustomUnitAmount | null;

      /**
       * Always true for a deleted object
       */
      deleted?: void;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * A lookup key used to retrieve prices dynamically from a static string. This may be up to 200 characters.
       */
      lookup_key: string | null;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata;

      /**
       * A brief description of the price, hidden from customers.
       */
      nickname: string | null;

      /**
       * The ID of the product this price is associated with.
       */
      product: string | Stripe.Product | Stripe.DeletedProduct;

      /**
       * The recurring components of a price such as `interval` and `usage_type`.
       */
      recurring: Price.Recurring | null;

      /**
       * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
       */
      tax_behavior: Price.TaxBehavior | null;

      /**
       * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
       */
      tiers?: Array<Price.Tier>;

      /**
       * Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price. In `graduated` tiering, pricing can change as the quantity grows.
       */
      tiers_mode: Price.TiersMode | null;

      /**
       * Apply a transformation to the reported usage or set quantity before computing the amount billed. Cannot be combined with `tiers`.
       */
      transform_quantity: Price.TransformQuantity | null;

      /**
       * One of `one_time` or `recurring` depending on whether the price is for a one-time purchase or a recurring (subscription) purchase.
       */
      type: Price.Type;

      /**
       * The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. Only set if `billing_scheme=per_unit`.
       */
      unit_amount: number | null;

      /**
       * The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. Only set if `billing_scheme=per_unit`.
       */
      unit_amount_decimal: string | null;
    }

    namespace Price {
      type BillingScheme = 'per_unit' | 'tiered';

      interface CurrencyOptions {
        /**
         * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
         */
        custom_unit_amount: CurrencyOptions.CustomUnitAmount | null;

        /**
         * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
         */
        tax_behavior: CurrencyOptions.TaxBehavior | null;

        /**
         * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
         */
        tiers?: Array<CurrencyOptions.Tier>;

        /**
         * The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. Only set if `billing_scheme=per_unit`.
         */
        unit_amount: number | null;

        /**
         * The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. Only set if `billing_scheme=per_unit`.
         */
        unit_amount_decimal: string | null;
      }

      namespace CurrencyOptions {
        interface CustomUnitAmount {
          /**
           * The maximum unit amount the customer can specify for this item.
           */
          maximum: number | null;

          /**
           * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
           */
          minimum: number | null;

          /**
           * The starting unit amount which can be updated by the customer.
           */
          preset: number | null;
        }

        type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

        interface Tier {
          /**
           * Price for the entire tier.
           */
          flat_amount: number | null;

          /**
           * Same as `flat_amount`, but contains a decimal value with at most 12 decimal places.
           */
          flat_amount_decimal: string | null;

          /**
           * Per unit price for units relevant to the tier.
           */
          unit_amount: number | null;

          /**
           * Same as `unit_amount`, but contains a decimal value with at most 12 decimal places.
           */
          unit_amount_decimal: string | null;

          /**
           * Up to and including to this quantity will be contained in the tier.
           */
          up_to: number | null;
        }
      }

      interface CustomUnitAmount {
        /**
         * The maximum unit amount the customer can specify for this item.
         */
        maximum: number | null;

        /**
         * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
         */
        minimum: number | null;

        /**
         * The starting unit amount which can be updated by the customer.
         */
        preset: number | null;
      }

      interface Recurring {
        /**
         * Specifies a usage aggregation strategy for prices of `usage_type=metered`. Defaults to `sum`.
         */
        aggregate_usage: Recurring.AggregateUsage | null;

        /**
         * The frequency at which a subscription is billed. One of `day`, `week`, `month` or `year`.
         */
        interval: Recurring.Interval;

        /**
         * The number of intervals (specified in the `interval` attribute) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months.
         */
        interval_count: number;

        /**
         * The meter tracking the usage of a metered price
         */
        meter: string | null;

        /**
         * Default number of trial days when subscribing a customer to this price using [`trial_from_plan=true`](https://stripe.com/docs/api#create_subscription-trial_from_plan).
         */
        trial_period_days: number | null;

        /**
         * Configures how the quantity per period should be determined. Can be either `metered` or `licensed`. `licensed` automatically bills the `quantity` set when adding it to a subscription. `metered` aggregates the total usage based on usage records. Defaults to `licensed`.
         */
        usage_type: Recurring.UsageType;
      }

      namespace Recurring {
        type AggregateUsage =
          | 'last_during_period'
          | 'last_ever'
          | 'max'
          | 'sum';

        type Interval = 'day' | 'month' | 'week' | 'year';

        type UsageType = 'licensed' | 'metered';
      }

      type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

      interface Tier {
        /**
         * Price for the entire tier.
         */
        flat_amount: number | null;

        /**
         * Same as `flat_amount`, but contains a decimal value with at most 12 decimal places.
         */
        flat_amount_decimal: string | null;

        /**
         * Per unit price for units relevant to the tier.
         */
        unit_amount: number | null;

        /**
         * Same as `unit_amount`, but contains a decimal value with at most 12 decimal places.
         */
        unit_amount_decimal: string | null;

        /**
         * Up to and including to this quantity will be contained in the tier.
         */
        up_to: number | null;
      }

      type TiersMode = 'graduated' | 'volume';

      interface TransformQuantity {
        /**
         * Divide usage by this number.
         */
        divide_by: number;

        /**
         * After division, either round the result `up` or `down`.
         */
        round: TransformQuantity.Round;
      }

      namespace TransformQuantity {
        type Round = 'down' | 'up';
      }

      type Type = 'one_time' | 'recurring';
    }
  }
}
