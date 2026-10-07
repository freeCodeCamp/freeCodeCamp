// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Billing {
      /**
       * A billing meter is a resource that allows you to track usage of a particular event. For example, you might create a billing meter to track the number of API calls made by a particular user. You can then attach the billing meter to a price and attach the price to a subscription to charge the user for the number of API calls they make.
       */
      interface Meter {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'billing.meter';

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        customer_mapping: Meter.CustomerMapping;

        default_aggregation: Meter.DefaultAggregation;

        /**
         * The meter's name.
         */
        display_name: string;

        /**
         * The name of the meter event to record usage for. Corresponds with the `event_name` field on meter events.
         */
        event_name: string;

        /**
         * The time window to pre-aggregate meter events for, if any.
         */
        event_time_window: Meter.EventTimeWindow | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The meter's status.
         */
        status: Meter.Status;

        status_transitions: Meter.StatusTransitions;

        /**
         * Time at which the object was last updated. Measured in seconds since the Unix epoch.
         */
        updated: number;

        value_settings: Meter.ValueSettings;
      }

      namespace Meter {
        interface CustomerMapping {
          /**
           * The key in the meter event payload to use for mapping the event to a customer.
           */
          event_payload_key: string;

          /**
           * The method for mapping a meter event to a customer.
           */
          type: 'by_id';
        }

        interface DefaultAggregation {
          /**
           * Specifies how events are aggregated.
           */
          formula: DefaultAggregation.Formula;
        }

        namespace DefaultAggregation {
          type Formula = 'count' | 'sum';
        }

        type EventTimeWindow = 'day' | 'hour';

        type Status = 'active' | 'inactive';

        interface StatusTransitions {
          /**
           * The time the meter was deactivated, if any. Measured in seconds since Unix epoch.
           */
          deactivated_at: number | null;
        }

        interface ValueSettings {
          /**
           * The key in the meter event payload to use as the value for this meter.
           */
          event_payload_key: string;
        }
      }
    }
  }
}
