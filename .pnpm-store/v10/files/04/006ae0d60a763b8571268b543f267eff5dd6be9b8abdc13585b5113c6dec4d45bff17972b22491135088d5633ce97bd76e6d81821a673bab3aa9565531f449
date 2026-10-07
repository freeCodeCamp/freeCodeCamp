// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Billing {
      interface AlertCreateParams {
        /**
         * The type of alert to create.
         */
        alert_type: 'usage_threshold';

        /**
         * The title of the alert.
         */
        title: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Filters to limit the scope of an alert.
         */
        filter?: AlertCreateParams.Filter;

        /**
         * The configuration of the usage threshold.
         */
        usage_threshold_config?: AlertCreateParams.UsageThresholdConfig;
      }

      namespace AlertCreateParams {
        interface Filter {
          /**
           * Limit the scope to this alert only to this customer.
           */
          customer?: string;

          /**
           * Limit the scope of this rated usage alert to this subscription.
           */
          subscription?: string;

          /**
           * Limit the scope of this rated usage alert to this subscription item.
           */
          subscription_item?: string;
        }

        interface UsageThresholdConfig {
          /**
           * Defines at which value the alert will fire.
           */
          gte: number;

          /**
           * The [Billing Meter](https://stripe.com/api/billing/meter) ID whose usage is monitored.
           */
          meter?: string;

          /**
           * Whether the alert should only fire only once, or once per billing cycle.
           */
          recurrence: 'one_time';
        }
      }

      interface AlertRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface AlertListParams extends PaginationParams {
        /**
         * Filter results to only include this type of alert.
         */
        alert_type?: 'usage_threshold';

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Filter results to only include alerts with the given meter.
         */
        meter?: string;
      }

      interface AlertActivateParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface AlertArchiveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface AlertDeactivateParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class AlertsResource {
        /**
         * Creates a billing alert
         */
        create(
          params: AlertCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.Alert>>;

        /**
         * Retrieves a billing alert given an ID
         */
        retrieve(
          id: string,
          params?: AlertRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.Alert>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.Alert>>;

        /**
         * Lists billing active and inactive alerts
         */
        list(
          params?: AlertListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Billing.Alert>;
        list(options?: RequestOptions): ApiListPromise<Stripe.Billing.Alert>;

        /**
         * Reactivates this alert, allowing it to trigger again.
         */
        activate(
          id: string,
          params?: AlertActivateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.Alert>>;
        activate(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.Alert>>;

        /**
         * Archives this alert, removing it from the list view and APIs. This is non-reversible.
         */
        archive(
          id: string,
          params?: AlertArchiveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.Alert>>;
        archive(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.Alert>>;

        /**
         * Deactivates this alert, preventing it from triggering.
         */
        deactivate(
          id: string,
          params?: AlertDeactivateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.Alert>>;
        deactivate(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Billing.Alert>>;
      }
    }
  }
}
