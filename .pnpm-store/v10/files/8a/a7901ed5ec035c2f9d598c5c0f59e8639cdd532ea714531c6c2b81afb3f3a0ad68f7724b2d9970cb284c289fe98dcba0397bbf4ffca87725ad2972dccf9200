// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Billing {
      /**
       * A billing meter event summary represents an aggregated view of a customer's billing meter events within a specified timeframe. It indicates how much
       * usage was accrued by a customer for that period.
       */
      interface MeterEventSummary {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'billing.meter_event_summary';

        /**
         * Aggregated value of all the events within `start_time` (inclusive) and `end_time` (inclusive). The aggregation strategy is defined on meter via `default_aggregation`.
         */
        aggregated_value: number;

        /**
         * End timestamp for this event summary (exclusive). Must be aligned with minute boundaries.
         */
        end_time: number;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The meter associated with this event summary.
         */
        meter: string;

        /**
         * Start timestamp for this event summary (inclusive). Must be aligned with minute boundaries.
         */
        start_time: number;
      }
    }
  }
}
