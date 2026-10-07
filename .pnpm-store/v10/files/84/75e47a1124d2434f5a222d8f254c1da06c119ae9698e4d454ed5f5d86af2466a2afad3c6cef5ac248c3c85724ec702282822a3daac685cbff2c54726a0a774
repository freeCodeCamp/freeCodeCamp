// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Radar {
      /**
       * An early fraud warning indicates that the card issuer has notified us that a
       * charge may be fraudulent.
       *
       * Related guide: [Early fraud warnings](https://stripe.com/docs/disputes/measuring#early-fraud-warnings)
       */
      interface EarlyFraudWarning {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'radar.early_fraud_warning';

        /**
         * An EFW is actionable if it has not received a dispute and has not been fully refunded. You may wish to proactively refund a charge that receives an EFW, in order to avoid receiving a dispute later.
         */
        actionable: boolean;

        /**
         * ID of the charge this early fraud warning is for, optionally expanded.
         */
        charge: string | Stripe.Charge;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * The type of fraud labelled by the issuer. One of `card_never_received`, `fraudulent_card_application`, `made_with_counterfeit_card`, `made_with_lost_card`, `made_with_stolen_card`, `misc`, `unauthorized_use_of_card`.
         */
        fraud_type: string;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * ID of the Payment Intent this early fraud warning is for, optionally expanded.
         */
        payment_intent?: string | Stripe.PaymentIntent;
      }
    }
  }
}
