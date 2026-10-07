// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Billing {
      /**
       * A billing alert is a resource that notifies you when a certain usage threshold on a meter is crossed. For example, you might create a billing alert to notify you when a certain user made 100 API requests.
       */
      interface Alert {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'billing.alert';

        /**
         * Defines the type of the alert.
         */
        alert_type: 'usage_threshold';

        /**
         * Limits the scope of the alert to a specific [customer](https://stripe.com/docs/api/customers).
         */
        filter: Alert.Filter | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Status of the alert. This can be active, inactive or archived.
         */
        status: Alert.Status | null;

        /**
         * Title of the alert.
         */
        title: string;

        /**
         * Encapsulates configuration of the alert to monitor usage on a specific [Billing Meter](https://stripe.com/docs/api/billing/meter).
         */
        usage_threshold_config: Alert.UsageThresholdConfig | null;
      }

      namespace Alert {
        interface Filter {
          /**
           * Limit the scope of the alert to this customer ID
           */
          customer: string | Stripe.Customer | null;
        }

        type Status = 'active' | 'archived' | 'inactive';

        interface UsageThresholdConfig {
          /**
           * The value at which this alert will trigger.
           */
          gte: number;

          /**
           * The [Billing Meter](https://stripe.com/api/billing/meter) ID whose usage is monitored.
           */
          meter: string | Stripe.Billing.Meter;

          /**
           * Defines how the alert will behave.
           */
          recurrence: 'one_time';
        }
      }
    }
  }
}
