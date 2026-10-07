// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace BillingPortal {
      /**
       * A portal configuration describes the functionality and behavior of a portal session.
       */
      interface Configuration {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'billing_portal.configuration';

        /**
         * Whether the configuration is active and can be used to create portal sessions.
         */
        active: boolean;

        /**
         * ID of the Connect Application that created the configuration.
         */
        application:
          | string
          | Stripe.Application
          | Stripe.DeletedApplication
          | null;

        business_profile: Configuration.BusinessProfile;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * The default URL to redirect customers to when they click on the portal's link to return to your website. This can be [overriden](https://stripe.com/docs/api/customer_portal/sessions/create#create_portal_session-return_url) when creating the session.
         */
        default_return_url: string | null;

        features: Configuration.Features;

        /**
         * Whether the configuration is the default. If `true`, this configuration can be managed in the Dashboard and portal sessions will use this configuration unless it is overriden when creating the session.
         */
        is_default: boolean;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        login_page: Configuration.LoginPage;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata | null;

        /**
         * Time at which the object was last updated. Measured in seconds since the Unix epoch.
         */
        updated: number;
      }

      namespace Configuration {
        interface BusinessProfile {
          /**
           * The messaging shown to customers in the portal.
           */
          headline: string | null;

          /**
           * A link to the business's publicly available privacy policy.
           */
          privacy_policy_url: string | null;

          /**
           * A link to the business's publicly available terms of service.
           */
          terms_of_service_url: string | null;
        }

        interface Features {
          customer_update: Features.CustomerUpdate;

          invoice_history: Features.InvoiceHistory;

          payment_method_update: Features.PaymentMethodUpdate;

          subscription_cancel: Features.SubscriptionCancel;

          subscription_update: Features.SubscriptionUpdate;
        }

        namespace Features {
          interface CustomerUpdate {
            /**
             * The types of customer updates that are supported. When empty, customers are not updateable.
             */
            allowed_updates: Array<CustomerUpdate.AllowedUpdate>;

            /**
             * Whether the feature is enabled.
             */
            enabled: boolean;
          }

          namespace CustomerUpdate {
            type AllowedUpdate =
              | 'address'
              | 'email'
              | 'name'
              | 'phone'
              | 'shipping'
              | 'tax_id';
          }

          interface InvoiceHistory {
            /**
             * Whether the feature is enabled.
             */
            enabled: boolean;
          }

          interface PaymentMethodUpdate {
            /**
             * Whether the feature is enabled.
             */
            enabled: boolean;
          }

          interface SubscriptionCancel {
            cancellation_reason: SubscriptionCancel.CancellationReason;

            /**
             * Whether the feature is enabled.
             */
            enabled: boolean;

            /**
             * Whether to cancel subscriptions immediately or at the end of the billing period.
             */
            mode: SubscriptionCancel.Mode;

            /**
             * Whether to create prorations when canceling subscriptions. Possible values are `none` and `create_prorations`.
             */
            proration_behavior: SubscriptionCancel.ProrationBehavior;
          }

          namespace SubscriptionCancel {
            interface CancellationReason {
              /**
               * Whether the feature is enabled.
               */
              enabled: boolean;

              /**
               * Which cancellation reasons will be given as options to the customer.
               */
              options: Array<CancellationReason.Option>;
            }

            namespace CancellationReason {
              type Option =
                | 'customer_service'
                | 'low_quality'
                | 'missing_features'
                | 'other'
                | 'switched_service'
                | 'too_complex'
                | 'too_expensive'
                | 'unused';
            }

            type Mode = 'at_period_end' | 'immediately';

            type ProrationBehavior =
              | 'always_invoice'
              | 'create_prorations'
              | 'none';
          }

          interface SubscriptionUpdate {
            /**
             * The types of subscription updates that are supported for items listed in the `products` attribute. When empty, subscriptions are not updateable.
             */
            default_allowed_updates: Array<
              SubscriptionUpdate.DefaultAllowedUpdate
            >;

            /**
             * Whether the feature is enabled.
             */
            enabled: boolean;

            /**
             * The list of up to 10 products that support subscription updates.
             */
            products?: Array<SubscriptionUpdate.Product> | null;

            /**
             * Determines how to handle prorations resulting from subscription updates. Valid values are `none`, `create_prorations`, and `always_invoice`. Defaults to a value of `none` if you don't set it during creation.
             */
            proration_behavior: SubscriptionUpdate.ProrationBehavior;
          }

          namespace SubscriptionUpdate {
            type DefaultAllowedUpdate = 'price' | 'promotion_code' | 'quantity';

            interface Product {
              /**
               * The list of price IDs which, when subscribed to, a subscription can be updated.
               */
              prices: Array<string>;

              /**
               * The product ID.
               */
              product: string;
            }

            type ProrationBehavior =
              | 'always_invoice'
              | 'create_prorations'
              | 'none';
          }
        }

        interface LoginPage {
          /**
           * If `true`, a shareable `url` will be generated that will take your customers to a hosted login page for the customer portal.
           *
           * If `false`, the previously generated `url`, if any, will be deactivated.
           */
          enabled: boolean;

          /**
           * A shareable URL to the hosted portal login page. Your customers will be able to log in with their [email](https://stripe.com/docs/api/customers/object#customer_object-email) and receive a link to their customer portal.
           */
          url: string | null;
        }
      }
    }
  }
}
