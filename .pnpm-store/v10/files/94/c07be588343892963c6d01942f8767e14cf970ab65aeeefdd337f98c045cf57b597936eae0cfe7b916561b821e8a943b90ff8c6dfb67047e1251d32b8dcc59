// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Billing {
      /**
       * A billing meter event adjustment is a resource that allows you to cancel a meter event. For example, you might create a billing meter event adjustment to cancel a meter event that was created in error or attached to the wrong customer.
       */
      interface MeterEventAdjustment {
        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'billing.meter_event_adjustment';

        /**
         * Specifies which event to cancel.
         */
        cancel: MeterEventAdjustment.Cancel | null;

        /**
         * The name of the meter event. Corresponds with the `event_name` field on a meter.
         */
        event_name: string;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The meter event adjustment's status.
         */
        status: MeterEventAdjustment.Status;

        /**
         * Specifies whether to cancel a single event or a range of events for a time period. Time period cancellation is not supported yet.
         */
        type: 'cancel';
      }

      namespace MeterEventAdjustment {
        interface Cancel {
          /**
           * Unique identifier for the event.
           */
          identifier: string | null;
        }

        type Status = 'complete' | 'pending';
      }
    }
  }
}
