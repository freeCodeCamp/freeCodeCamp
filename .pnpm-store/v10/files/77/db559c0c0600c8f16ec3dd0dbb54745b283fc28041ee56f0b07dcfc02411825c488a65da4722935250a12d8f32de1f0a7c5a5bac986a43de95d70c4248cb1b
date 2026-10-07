// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Radar {
      interface EarlyFraudWarningRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface EarlyFraudWarningListParams extends PaginationParams {
        /**
         * Only return early fraud warnings for the charge specified by this charge ID.
         */
        charge?: string;

        /**
         * Only return early fraud warnings that were created during the given date interval.
         */
        created?: Stripe.RangeQueryParam | number;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Only return early fraud warnings for charges that were created by the PaymentIntent specified by this PaymentIntent ID.
         */
        payment_intent?: string;
      }

      class EarlyFraudWarningsResource {
        /**
         * Retrieves the details of an early fraud warning that has previously been created.
         *
         * Please refer to the [early fraud warning](https://stripe.com/docs/api#early_fraud_warning_object) object reference for more details.
         */
        retrieve(
          id: string,
          params?: EarlyFraudWarningRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.EarlyFraudWarning>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.EarlyFraudWarning>>;

        /**
         * Returns a list of early fraud warnings.
         */
        list(
          params?: EarlyFraudWarningListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Radar.EarlyFraudWarning>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Radar.EarlyFraudWarning>;
      }
    }
  }
}
