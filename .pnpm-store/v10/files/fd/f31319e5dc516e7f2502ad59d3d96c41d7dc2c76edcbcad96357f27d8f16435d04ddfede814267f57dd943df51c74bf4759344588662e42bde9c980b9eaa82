// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The DeletedSubscriptionItem object.
     */
    interface DeletedSubscriptionItem {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'subscription_item';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }

    /**
     * Subscription items allow you to create customer subscriptions with more than
     * one plan, making it easy to represent complex billing relationships.
     */
    interface SubscriptionItem {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'subscription_item';

      /**
       * Define thresholds at which an invoice will be sent, and the related subscription advanced to a new billing period
       */
      billing_thresholds: SubscriptionItem.BillingThresholds | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Always true for a deleted object
       */
      deleted?: void;

      /**
       * The discounts applied to the subscription item. Subscription item discounts are applied before subscription discounts. Use `expand[]=discounts` to expand each discount.
       */
      discounts: Array<string | Stripe.Discount>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata;

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
      plan: Stripe.Plan;

      /**
       * Prices define the unit cost, currency, and (optional) billing cycle for both recurring and one-time purchases of products.
       * [Products](https://stripe.com/docs/api#products) help you track inventory or provisioning, and prices help you track payment terms. Different physical goods or levels of service should be represented by products, and pricing options should be represented by prices. This approach lets you change prices without having to change your provisioning scheme.
       *
       * For example, you might have a single "gold" product that has prices for $10/month, $100/year, and €9 once.
       *
       * Related guides: [Set up a subscription](https://stripe.com/docs/billing/subscriptions/set-up-subscription), [create an invoice](https://stripe.com/docs/billing/invoices/create), and more about [products and prices](https://stripe.com/docs/products-prices/overview).
       */
      price: Stripe.Price;

      /**
       * The [quantity](https://stripe.com/docs/subscriptions/quantities) of the plan to which the customer should be subscribed.
       */
      quantity?: number;

      /**
       * The `subscription` this `subscription_item` belongs to.
       */
      subscription: string;

      /**
       * The tax rates which apply to this `subscription_item`. When set, the `default_tax_rates` on the subscription do not apply to this `subscription_item`.
       */
      tax_rates: Array<Stripe.TaxRate> | null;
    }

    namespace SubscriptionItem {
      interface BillingThresholds {
        /**
         * Usage threshold that triggers the subscription to create an invoice
         */
        usage_gte: number | null;
      }
    }
  }
}
