// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface CustomerSessionCreateParams {
      /**
       * Configuration for each component. Exactly 1 component must be enabled.
       */
      components: CustomerSessionCreateParams.Components;

      /**
       * The ID of an existing customer for which to create the Customer Session.
       */
      customer: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    namespace CustomerSessionCreateParams {
      interface Components {
        /**
         * Configuration for buy button.
         */
        buy_button?: Components.BuyButton;

        /**
         * Configuration for the Payment Element.
         */
        payment_element?: Components.PaymentElement;

        /**
         * Configuration for the pricing table.
         */
        pricing_table?: Components.PricingTable;
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
          features?: PaymentElement.Features;
        }

        namespace PaymentElement {
          interface Features {
            /**
             * A list of [`allow_redisplay`](https://docs.stripe.com/api/payment_methods/object#payment_method_object-allow_redisplay) values that controls which saved payment methods the Payment Element displays by filtering to only show payment methods with an `allow_redisplay` value that is present in this list.
             *
             * If not specified, defaults to ["always"]. In order to display all saved payment methods, specify ["always", "limited", "unspecified"].
             */
            payment_method_allow_redisplay_filters?: Array<
              Features.PaymentMethodAllowRedisplayFilter
            >;

            /**
             * Controls whether or not the Payment Element shows saved payment methods. This parameter defaults to `disabled`.
             */
            payment_method_redisplay?: Features.PaymentMethodRedisplay;

            /**
             * Determines the max number of saved payment methods for the Payment Element to display. This parameter defaults to `3`.
             */
            payment_method_redisplay_limit?: number;

            /**
             * Controls whether the Payment Element displays the option to remove a saved payment method. This parameter defaults to `disabled`.
             *
             * Allowing buyers to remove their saved payment methods impacts subscriptions that depend on that payment method. Removing the payment method detaches the [`customer` object](https://docs.stripe.com/api/payment_methods/object#payment_method_object-customer) from that [PaymentMethod](https://docs.stripe.com/api/payment_methods).
             */
            payment_method_remove?: Features.PaymentMethodRemove;

            /**
             * Controls whether the Payment Element displays a checkbox offering to save a new payment method. This parameter defaults to `disabled`.
             *
             * If a customer checks the box, the [`allow_redisplay`](https://docs.stripe.com/api/payment_methods/object#payment_method_object-allow_redisplay) value on the PaymentMethod is set to `'always'` at confirmation time. For PaymentIntents, the [`setup_future_usage`](https://docs.stripe.com/api/payment_intents/object#payment_intent_object-setup_future_usage) value is also set to the value defined in `payment_method_save_usage`.
             */
            payment_method_save?: Features.PaymentMethodSave;

            /**
             * When using PaymentIntents and the customer checks the save checkbox, this field determines the [`setup_future_usage`](https://docs.stripe.com/api/payment_intents/object#payment_intent_object-setup_future_usage) value used to confirm the PaymentIntent.
             *
             * When using SetupIntents, directly configure the [`usage`](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-usage) value on SetupIntent creation.
             */
            payment_method_save_usage?: Features.PaymentMethodSaveUsage;
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

    class CustomerSessionsResource {
      /**
       * Creates a Customer Session object that includes a single-use client secret that you can use on your front-end to grant client-side API access for certain customer resources.
       */
      create(
        params: CustomerSessionCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.CustomerSession>>;
    }
  }
}
