// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A Customer Session allows you to grant Stripe's frontend SDKs (like Stripe.js) client-side access
     * control over a Customer.
     *
     * Related guides: [Customer Session with the Payment Element](https://stripe.com/payments/accept-a-payment-deferred?platform=web&type=payment#save-payment-methods),
     * [Customer Session with the Pricing Table](https://stripe.com/payments/checkout/pricing-table#customer-session),
     * [Customer Session with the Buy Button](https://stripe.com/payment-links/buy-button#pass-an-existing-customer).
     */
    interface CustomerSession {
      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'customer_session';

      /**
       * The client secret of this Customer Session. Used on the client to set up secure access to the given `customer`.
       *
       * The client secret can be used to provide access to `customer` from your frontend. It should not be stored, logged, or exposed to anyone other than the relevant customer. Make sure that you have TLS enabled on any page that includes the client secret.
       */
      client_secret: string;

      /**
       * Configuration for the components supported by this Customer Session.
       */
      components?: CustomerSession.Components;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * The Customer the Customer Session was created for.
       */
      customer: string | Stripe.Customer;

      /**
       * The timestamp at which this Customer Session will expire.
       */
      expires_at: number;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;
    }

    namespace CustomerSession {
      interface Components {
        /**
         * This hash contains whether the buy button is enabled.
         */
        buy_button: Components.BuyButton;

        /**
         * This hash contains whether the Payment Element is enabled and the features it supports.
         */
        payment_element: Components.PaymentElement;

        /**
         * This hash contains whether the pricing table is enabled.
         */
        pricing_table: Components.PricingTable;
      }

      namespace Components {
        interface BuyButton {
          /**
           * Whether the buy button is enabled.
           */
          enabled: boolean;
        }

        interface PaymentElement {
          /**
           * Whether the Payment Element is enabled.
           */
          enabled: boolean;

          /**
           * This hash defines whether the Payment Element supports certain features.
           */
          features: PaymentElement.Features | null;
        }

        namespace PaymentElement {
          interface Features {
            /**
             * A list of [`allow_redisplay`](https://docs.stripe.com/api/payment_methods/object#payment_method_object-allow_redisplay) values that controls which saved payment methods the Payment Element displays by filtering to only show payment methods with an `allow_redisplay` value that is present in this list.
             *
             * If not specified, defaults to ["always"]. In order to display all saved payment methods, specify ["always", "limited", "unspecified"].
             */
            payment_method_allow_redisplay_filters: Array<
              Features.PaymentMethodAllowRedisplayFilter
            >;

            /**
             * Controls whether or not the Payment Element shows saved payment methods. This parameter defaults to `disabled`.
             */
            payment_method_redisplay: Features.PaymentMethodRedisplay;

            /**
             * Determines the max number of saved payment methods for the Payment Element to display. This parameter defaults to `3`.
             */
            payment_method_redisplay_limit: number | null;

            /**
             * Controls whether the Payment Element displays the option to remove a saved payment method. This parameter defaults to `disabled`.
             *
             * Allowing buyers to remove their saved payment methods impacts subscriptions that depend on that payment method. Removing the payment method detaches the [`customer` object](https://docs.stripe.com/api/payment_methods/object#payment_method_object-customer) from that [PaymentMethod](https://docs.stripe.com/api/payment_methods).
             */
            payment_method_remove: Features.PaymentMethodRemove;

            /**
             * Controls whether the Payment Element displays a checkbox offering to save a new payment method. This parameter defaults to `disabled`.
             *
             * If a customer checks the box, the [`allow_redisplay`](https://docs.stripe.com/api/payment_methods/object#payment_method_object-allow_redisplay) value on the PaymentMethod is set to `'always'` at confirmation time. For PaymentIntents, the [`setup_future_usage`](https://docs.stripe.com/api/payment_intents/object#payment_intent_object-setup_future_usage) value is also set to the value defined in `payment_method_save_usage`.
             */
            payment_method_save: Features.PaymentMethodSave;

            /**
             * When using PaymentIntents and the customer checks the save checkbox, this field determines the [`setup_future_usage`](https://docs.stripe.com/api/payment_intents/object#payment_intent_object-setup_future_usage) value used to confirm the PaymentIntent.
             *
             * When using SetupIntents, directly configure the [`usage`](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-usage) value on SetupIntent creation.
             */
            payment_method_save_usage: Features.PaymentMethodSaveUsage | null;
          }

          namespace Features {
            type PaymentMethodAllowRedisplayFilter =
              | 'always'
              | 'limited'
              | 'unspecified';

            type PaymentMethodRedisplay = 'disabled' | 'enabled';

            type PaymentMethodRemove = 'disabled' | 'enabled';

            type PaymentMethodSave = 'disabled' | 'enabled';

            type PaymentMethodSaveUsage = 'off_session' | 'on_session';
          }
        }

        interface PricingTable {
          /**
           * Whether the pricing table is enabled.
           */
          enabled: boolean;
        }
      }
    }
  }
}
