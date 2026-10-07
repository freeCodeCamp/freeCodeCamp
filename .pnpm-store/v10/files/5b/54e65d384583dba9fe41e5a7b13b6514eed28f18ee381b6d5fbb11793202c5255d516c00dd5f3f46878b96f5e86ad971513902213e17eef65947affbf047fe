// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Billing {
      /**
       * A billing meter event represents a customer's usage of a product. Meter events are used to bill a customer based on their usage.
       * Meter events are associated with billing meters, which define the shape of the event's payload and how those events are aggregated for billing.
       */
      interface MeterEvent {
        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'billing.meter_event';

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * The name of the meter event. Corresponds with the `event_name` field on a meter.
         */
        event_name: string;

        /**
         * A unique identifier for the event.
         */
        identifier: string;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The payload of the event. This contains the fields corresponding to a meter's `customer_mapping.event_payload_key` (default is `stripe_customer_id`) and `value_settings.event_payload_key` (default is `value`). Read more about the [payload](https://stripe.com/docs/billing/subscriptions/usage-based/recording-usage#payload-key-overrides).
         */
        payload: {
          [key: string]: string;
        };

        /**
         * The timestamp passed in when creating the event. Measured in seconds since the Unix epoch.
         */
        timestamp: number;
      }
    }
  }
}
