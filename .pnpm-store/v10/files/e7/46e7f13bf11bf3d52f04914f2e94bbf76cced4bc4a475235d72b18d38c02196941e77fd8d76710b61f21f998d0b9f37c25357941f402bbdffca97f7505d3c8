// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The DeletedPlan object.
     */
    interface DeletedPlan {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'plan';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }

    /**
     * You can now model subscriptions more flexibly using the [Prices API](https://stripe.com/docs/api#prices). It replaces the Plans API and is backwards compatible to simplify your migration.
     *
     * Plans define the base price, currency, and billing cycle for recurring purchases of products.
     * [Products](https://stripe.com/docs/api#products) help you track inventory or provisioning, and plans help you track pricing. Different physical goods or levels of service should be represented by products, and pricing options should be represented by plans. This approach lets you change prices without having to change your provisioning scheme.
     *
     * For example, you might have a single "gold" product that has plans for $10/month, $100/year, €9/month, and €90/year.
     *
     * Related guides: [Set up a subscription](https://stripe.com/docs/billing/subscriptions/set-up-subscription) and more about [products and prices](https://stripe.com/docs/products-prices/overview).
     */
    interface Plan {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'plan';

      /**
       * Whether the plan can be used for new purchases.
       */
      active: boolean;

      /**
       * Specifies a usage aggregation strategy for plans of `usage_type=metered`. Allowed values are `sum` for summing up all usage during a period, `last_during_period` for using the last usage record reported within a period, `last_ever` for using the last usage record ever (across period bounds) or `max` which uses the usage record with the maximum reported usage during a period. Defaults to `sum`.
       */
      aggregate_usage: Plan.AggregateUsage | null;

      /**
       * The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. Only set if `billing_scheme=per_unit`.
       */
      amount: number | null;

      /**
       * The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. Only set if `billing_scheme=per_unit`.
       */
      amount_decimal: string | null;

      /**
       * Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `amount`) will be charged per unit in `quantity` (for plans with `usage_type=licensed`), or per unit of total usage (for plans with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
       */
      billing_scheme: Plan.BillingScheme;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * Always true for a deleted object
       */
      deleted?: void;

      /**
       * The frequency at which a subscription is billed. One of `day`, `week`, `month` or `year`.
       */
      interval: Plan.Interval;

      /**
       * The number of intervals (specified in the `interval` attribute) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months.
       */
      interval_count: number;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata | null;

      /**
       * The meter tracking the usage of a metered price
       */
      meter: string | null;

      /**
       * A brief description of the plan, hidden from customers.
       */
      nickname: string | null;

      /**
       * The product whose pricing this plan determines.
       */
      product: string | Stripe.Product | Stripe.DeletedProduct | null;

      /**
       * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
       */
      tiers?: Array<Plan.Tier>;

      /**
       * Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price. In `graduated` tiering, pricing can change as the quantity grows.
       */
      tiers_mode: Plan.TiersMode | null;

      /**
       * Apply a transformation to the reported usage or set quantity before computing the amount billed. Cannot be combined with `tiers`.
       */
      transform_usage: Plan.TransformUsage | null;

      /**
       * Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://stripe.com/docs/api#create_subscription-trial_from_plan).
       */
      trial_period_days: number | null;

      /**
       * Configures how the quantity per period should be determined. Can be either `metered` or `licensed`. `licensed` automatically bills the `quantity` set when adding it to a subscription. `metered` aggregates the total usage based on usage records. Defaults to `licensed`.
       */
      usage_type: Plan.UsageType;
    }

    namespace Plan {
      type AggregateUsage = 'last_during_period' | 'last_ever' | 'max' | 'sum';

      type BillingScheme = 'per_unit' | 'tiered';

      type Interval = 'day' | 'month' | 'week' | 'year';

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

      interface TransformUsage {
        /**
         * Divide usage by this number.
         */
        divide_by: number;

        /**
         * After division, either round the result `up` or `down`.
         */
        round: TransformUsage.Round;
      }

      namespace TransformUsage {
        type Round = 'down' | 'up';
      }

      type UsageType = 'licensed' | 'metered';
    }
  }
}
