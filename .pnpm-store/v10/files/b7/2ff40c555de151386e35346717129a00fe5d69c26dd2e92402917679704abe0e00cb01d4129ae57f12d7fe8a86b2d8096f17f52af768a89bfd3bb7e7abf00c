// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace BillingPortal {
      interface ConfigurationCreateParams {
        /**
         * The business information shown to customers in the portal.
         */
        business_profile: ConfigurationCreateParams.BusinessProfile;

        /**
         * Information about the features available in the portal.
         */
        features: ConfigurationCreateParams.Features;

        /**
         * The default URL to redirect customers to when they click on the portal's link to return to your website. This can be [overriden](https://stripe.com/docs/api/customer_portal/sessions/create#create_portal_session-return_url) when creating the session.
         */
        default_return_url?: Stripe.Emptyable<string>;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * The hosted login page for this configuration. Learn more about the portal login page in our [integration docs](https://stripe.com/docs/billing/subscriptions/integrating-customer-portal#share).
         */
        login_page?: ConfigurationCreateParams.LoginPage;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;
      }

      namespace ConfigurationCreateParams {
        interface BusinessProfile {
          /**
           * The messaging shown to customers in the portal.
           */
          headline?: Stripe.Emptyable<string>;

          /**
           * A link to the business's publicly available privacy policy.
           */
          privacy_policy_url?: string;

          /**
           * A link to the business's publicly available terms of service.
           */
          terms_of_service_url?: string;
        }

        interface Features {
          /**
           * Information about updating the customer details in the portal.
           */
          customer_update?: Features.CustomerUpdate;

          /**
           * Information about showing the billing history in the portal.
           */
          invoice_history?: Features.InvoiceHistory;

          /**
           * Information about updating payment methods in the portal.
           */
          payment_method_update?: Features.PaymentMethodUpdate;

          /**
           * Information about canceling subscriptions in the portal.
           */
          subscription_cancel?: Features.SubscriptionCancel;

          /**
           * Information about updating subscriptions in the portal.
           */
          subscription_update?: Features.SubscriptionUpdate;
        }

        namespace Features {
          interface CustomerUpdate {
            /**
             * The types of customer updates that are supported. When empty, customers are not updateable.
             */
            allowed_updates?: Stripe.Emptyable<
              Array<CustomerUpdate.AllowedUpdate>
            >;

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
            /**
             * Whether the cancellation reasons will be collected in the portal and which options are exposed to the customer
             */
            cancellation_reason?: SubscriptionCancel.CancellationReason;

            /**
             * Whether the feature is enabled.
             */
            enabled: boolean;

            /**
             * Whether to cancel subscriptions immediately or at the end of the billing period.
             */
            mode?: SubscriptionCancel.Mode;

            /**
             * Whether to create prorations when canceling subscriptions. Possible values are `none` and `create_prorations`, which is only compatible with `mode=immediately`. No prorations are generated when canceling a subscription at the end of its natural billing period.
             */
            proration_behavior?: SubscriptionCancel.ProrationBehavior;
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
              options: Stripe.Emptyable<Array<CancellationReason.Option>>;
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
             * The types of subscription updates that are supported. When empty, subscriptions are not updateable.
             */
            default_allowed_updates: Stripe.Emptyable<
              Array<SubscriptionUpdate.DefaultAllowedUpdate>
            >;

            /**
             * Whether the feature is enabled.
             */
            enabled: boolean;

            /**
             * The list of up to 10 products that support subscription updates.
             */
            products: Stripe.Emptyable<Array<SubscriptionUpdate.Product>>;

            /**
             * Determines how to handle prorations resulting from subscription updates. Valid values are `none`, `create_prorations`, and `always_invoice`.
             */
            proration_behavior?: SubscriptionUpdate.ProrationBehavior;
          }

          namespace SubscriptionUpdate {
            type DefaultAllowedUpdate = 'price' | 'promotion_code' | 'quantity';

            interface Product {
              /**
               * The list of price IDs for the product that a subscription can be updated to.
               */
              prices: Array<string>;

              /**
               * The product id.
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
           * Set to `true` to generate a shareable URL [`login_page.url`](https://stripe.com/docs/api/customer_portal/configuration#portal_configuration_object-login_page-url) that will take your customers to a hosted login page for the customer portal.
           */
          enabled: boolean;
        }
      }

      interface ConfigurationRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface ConfigurationUpdateParams {
        /**
         * Whether the configuration is active and can be used to create portal sessions.
         */
        active?: boolean;

        /**
         * The business information shown to customers in the portal.
         */
        business_profile?: ConfigurationUpdateParams.BusinessProfile;

        /**
         * The default URL to redirect customers to when they click on the portal's link to return to your website. This can be [overriden](https://stripe.com/docs/api/customer_portal/sessions/create#create_portal_session-return_url) when creating the session.
         */
        default_return_url?: Stripe.Emptyable<string>;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Information about the features available in the portal.
         */
        features?: ConfigurationUpdateParams.Features;

        /**
         * The hosted login page for this configuration. Learn more about the portal login page in our [integration docs](https://stripe.com/docs/billing/subscriptions/integrating-customer-portal#share).
         */
        login_page?: ConfigurationUpdateParams.LoginPage;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
      }

      namespace ConfigurationUpdateParams {
        interface BusinessProfile {
          /**
           * The messaging shown to customers in the portal.
           */
          headline?: Stripe.Emptyable<string>;

          /**
           * A link to the business's publicly available privacy policy.
           */
          privacy_policy_url?: Stripe.Emptyable<string>;

          /**
           * A link to the business's publicly available terms of service.
           */
          terms_of_service_url?: Stripe.Emptyable<string>;
        }

        interface Features {
          /**
           * Information about updating the customer details in the portal.
           */
          customer_update?: Features.CustomerUpdate;

          /**
           * Information about showing the billing history in the portal.
           */
          invoice_history?: Features.InvoiceHistory;

          /**
           * Information about updating payment methods in the portal.
           */
          payment_method_update?: Features.PaymentMethodUpdate;

          /**
           * Information about canceling subscriptions in the portal.
           */
          subscription_cancel?: Features.SubscriptionCancel;

          /**
           * Information about updating subscriptions in the portal.
           */
          subscription_update?: Features.SubscriptionUpdate;
        }

        namespace Features {
          interface CustomerUpdate {
            /**
             * The types of customer updates that are supported. When empty, customers are not updateable.
             */
            allowed_updates?: Stripe.Emptyable<
              Array<CustomerUpdate.AllowedUpdate>
            >;

            /**
             * Whether the feature is enabled.
             */
            enabled?: boolean;
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
            /**
             * Whether the cancellation reasons will be collected in the portal and which options are exposed to the customer
             */
            cancellation_reason?: SubscriptionCancel.CancellationReason;

            /**
             * Whether the feature is enabled.
             */
            enabled?: boolean;

            /**
             * Whether to cancel subscriptions immediately or at the end of the billing period.
             */
            mode?: SubscriptionCancel.Mode;

            /**
             * Whether to create prorations when canceling subscriptions. Possible values are `none` and `create_prorations`, which is only compatible with `mode=immediately`. No prorations are generated when canceling a subscription at the end of its natural billing period.
             */
            proration_behavior?: SubscriptionCancel.ProrationBehavior;
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
              options?: Stripe.Emptyable<Array<CancellationReason.Option>>;
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
             * The types of subscription updates that are supported. When empty, subscriptions are not updateable.
             */
            default_allowed_updates?: Stripe.Emptyable<
              Array<SubscriptionUpdate.DefaultAllowedUpdate>
            >;

            /**
             * Whether the feature is enabled.
             */
            enabled?: boolean;

            /**
             * The list of up to 10 products that support subscription updates.
             */
            products?: Stripe.Emptyable<Array<SubscriptionUpdate.Product>>;

            /**
             * Determines how to handle prorations resulting from subscription updates. Valid values are `none`, `create_prorations`, and `always_invoice`.
             */
            proration_behavior?: SubscriptionUpdate.ProrationBehavior;
          }

          namespace SubscriptionUpdate {
            type DefaultAllowedUpdate = 'price' | 'promotion_code' | 'quantity';

            interface Product {
              /**
               * The list of price IDs for the product that a subscription can be updated to.
               */
              prices: Array<string>;

              /**
               * The product id.
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
           * Set to `true` to generate a shareable URL [`login_page.url`](https://stripe.com/docs/api/customer_portal/configuration#portal_configuration_object-login_page-url) that will take your customers to a hosted login page for the customer portal.
           *
           * Set to `false` to deactivate the `login_page.url`.
           */
          enabled: boolean;
        }
      }

      interface ConfigurationListParams extends PaginationParams {
        /**
         * Only return configurations that are active or inactive (e.g., pass `true` to only list active configurations).
         */
        active?: boolean;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Only return the default or non-default configurations (e.g., pass `true` to only list the default configuration).
         */
        is_default?: boolean;
      }

      class ConfigurationsResource {
        /**
         * Creates a configuration that describes the functionality and behavior of a PortalSession
         */
        create(
          params: ConfigurationCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.BillingPortal.Configuration>>;

        /**
         * Retrieves a configuration that describes the functionality of the customer portal.
         */
        retrieve(
          id: string,
          params?: ConfigurationRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.BillingPortal.Configuration>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.BillingPortal.Configuration>>;

        /**
         * Updates a configuration that describes the functionality of the customer portal.
         */
        update(
          id: string,
          params?: ConfigurationUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.BillingPortal.Configuration>>;

        /**
         * Returns a list of configurations that describe the functionality of the customer portal.
         */
        list(
          params?: ConfigurationListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.BillingPortal.Configuration>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.BillingPortal.Configuration>;
      }
    }
  }
}
