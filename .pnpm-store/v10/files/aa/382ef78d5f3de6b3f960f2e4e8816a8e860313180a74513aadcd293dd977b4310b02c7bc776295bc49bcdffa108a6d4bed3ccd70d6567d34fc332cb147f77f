// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace BillingPortal {
      /**
       * The Billing customer portal is a Stripe-hosted UI for subscription and
       * billing management.
       *
       * A portal configuration describes the functionality and features that you
       * want to provide to your customers through the portal.
       *
       * A portal session describes the instantiation of the customer portal for
       * a particular customer. By visiting the session's URL, the customer
       * can manage their subscriptions and billing details. For security reasons,
       * sessions are short-lived and will expire if the customer does not visit the URL.
       * Create sessions on-demand when customers intend to manage their subscriptions
       * and billing details.
       *
       * Related guide: [Customer management](https://stripe.com/customer-management)
       */
      interface Session {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'billing_portal.session';

        /**
         * The configuration used by this session, describing the features available.
         */
        configuration: string | Stripe.BillingPortal.Configuration;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * The ID of the customer for this session.
         */
        customer: string;

        /**
         * Information about a specific flow for the customer to go through. See the [docs](https://stripe.com/docs/customer-management/portal-deep-links) to learn more about using customer portal deep links and flows.
         */
        flow: Session.Flow | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The IETF language tag of the locale Customer Portal is displayed in. If blank or auto, the customer's `preferred_locales` or browser's locale is used.
         */
        locale: Session.Locale | null;

        /**
         * The account for which the session was created on behalf of. When specified, only subscriptions and invoices with this `on_behalf_of` account appear in the portal. For more information, see the [docs](https://stripe.com/docs/connect/separate-charges-and-transfers#settlement-merchant). Use the [Accounts API](https://stripe.com/docs/api/accounts/object#account_object-settings-branding) to modify the `on_behalf_of` account's branding settings, which the portal displays.
         */
        on_behalf_of: string | null;

        /**
         * The URL to redirect customers to when they click on the portal's link to return to your website.
         */
        return_url: string | null;

        /**
         * The short-lived URL of the session that gives customers access to the customer portal.
         */
        url: string;
      }

      namespace Session {
        interface Flow {
          after_completion: Flow.AfterCompletion;

          /**
           * Configuration when `flow.type=subscription_cancel`.
           */
          subscription_cancel: Flow.SubscriptionCancel | null;

          /**
           * Configuration when `flow.type=subscription_update`.
           */
          subscription_update: Flow.SubscriptionUpdate | null;

          /**
           * Configuration when `flow.type=subscription_update_confirm`.
           */
          subscription_update_confirm: Flow.SubscriptionUpdateConfirm | null;

          /**
           * Type of flow that the customer will go through.
           */
          type: Flow.Type;
        }

        namespace Flow {
          interface AfterCompletion {
            /**
             * Configuration when `after_completion.type=hosted_confirmation`.
             */
            hosted_confirmation: AfterCompletion.HostedConfirmation | null;

            /**
             * Configuration when `after_completion.type=redirect`.
             */
            redirect: AfterCompletion.Redirect | null;

            /**
             * The specified type of behavior after the flow is completed.
             */
            type: AfterCompletion.Type;
          }

          namespace AfterCompletion {
            interface HostedConfirmation {
              /**
               * A custom message to display to the customer after the flow is completed.
               */
              custom_message: string | null;
            }

            interface Redirect {
              /**
               * The URL the customer will be redirected to after the flow is completed.
               */
              return_url: string;
            }

            type Type = 'hosted_confirmation' | 'portal_homepage' | 'redirect';
          }

          interface SubscriptionCancel {
            /**
             * Specify a retention strategy to be used in the cancellation flow.
             */
            retention: SubscriptionCancel.Retention | null;

            /**
             * The ID of the subscription to be canceled.
             */
            subscription: string;
          }

          namespace SubscriptionCancel {
            interface Retention {
              /**
               * Configuration when `retention.type=coupon_offer`.
               */
              coupon_offer: Retention.CouponOffer | null;

              /**
               * Type of retention strategy that will be used.
               */
              type: 'coupon_offer';
            }

            namespace Retention {
              interface CouponOffer {
                /**
                 * The ID of the coupon to be offered.
                 */
                coupon: string;
              }
            }
          }

          interface SubscriptionUpdate {
            /**
             * The ID of the subscription to be updated.
             */
            subscription: string;
          }

          interface SubscriptionUpdateConfirm {
            /**
             * The coupon or promotion code to apply to this subscription update. Currently, only up to one may be specified.
             */
            discounts: Array<SubscriptionUpdateConfirm.Discount> | null;

            /**
             * The [subscription item](https://stripe.com/docs/api/subscription_items) to be updated through this flow. Currently, only up to one may be specified and subscriptions with multiple items are not updatable.
             */
            items: Array<SubscriptionUpdateConfirm.Item>;

            /**
             * The ID of the subscription to be updated.
             */
            subscription: string;
          }

          namespace SubscriptionUpdateConfirm {
            interface Discount {
              /**
               * The ID of the coupon to apply to this subscription update.
               */
              coupon: string | null;

              /**
               * The ID of a promotion code to apply to this subscription update.
               */
              promotion_code: string | null;
            }

            interface Item {
              /**
               * The ID of the [subscription item](https://stripe.com/docs/api/subscriptions/object#subscription_object-items-data-id) to be updated.
               */
              id: string | null;

              /**
               * The price the customer should subscribe to through this flow. The price must also be included in the configuration's [`features.subscription_update.products`](https://stripe.com/docs/api/customer_portal/configuration#portal_configuration_object-features-subscription_update-products).
               */
              price: string | null;

              /**
               * [Quantity](https://stripe.com/docs/subscriptions/quantities) for this item that the customer should subscribe to through this flow.
               */
              quantity?: number;
            }
          }

          type Type =
            | 'payment_method_update'
            | 'subscription_cancel'
            | 'subscription_update'
            | 'subscription_update_confirm';
        }

        type Locale =
          | 'auto'
          | 'bg'
          | 'cs'
          | 'da'
          | 'de'
          | 'el'
          | 'en'
          | 'en-AU'
          | 'en-CA'
          | 'en-GB'
          | 'en-IE'
          | 'en-IN'
          | 'en-NZ'
          | 'en-SG'
          | 'es'
          | 'es-419'
          | 'et'
          | 'fi'
          | 'fil'
          | 'fr'
          | 'fr-CA'
          | 'hr'
          | 'hu'
          | 'id'
          | 'it'
          | 'ja'
          | 'ko'
          | 'lt'
          | 'lv'
          | 'ms'
          | 'mt'
          | 'nb'
          | 'nl'
          | 'pl'
          | 'pt'
          | 'pt-BR'
          | 'ro'
          | 'ru'
          | 'sk'
          | 'sl'
          | 'sv'
          | 'th'
          | 'tr'
          | 'vi'
          | 'zh'
          | 'zh-HK'
          | 'zh-TW';
      }
    }
  }
}
