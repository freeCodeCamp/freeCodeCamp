// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Billing {
      /**
       * The AlertTriggered object.
       */
      interface AlertTriggered {
        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'billing.alert_triggered';

        /**
         * A billing alert is a resource that notifies you when a certain usage threshold on a meter is crossed. For example, you might create a billing alert to notify you when a certain user made 100 API requests.
         */
        alert: Stripe.Billing.Alert;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * ID of customer for which the alert triggered
         */
        customer: string;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The value triggering the alert
         */
        value: number;
      }
    }
  }
}
