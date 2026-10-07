// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * Usage records allow you to report customer usage and metrics to Stripe for
     * metered billing of subscription prices.
     *
     * Related guide: [Metered billing](https://stripe.com/docs/billing/subscriptions/metered-billing)
     *
     * This is our legacy usage-based billing API. See the [updated usage-based billing docs](https://docs.stripe.com/billing/subscriptions/usage-based).
     */
    interface UsageRecord {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'usage_record';

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * The usage quantity for the specified date.
       */
      quantity: number;

      /**
       * The ID of the subscription item this usage record contains data for.
       */
      subscription_item: string;

      /**
       * The timestamp when this usage occurred.
       */
      timestamp: number;
    }
  }
}
