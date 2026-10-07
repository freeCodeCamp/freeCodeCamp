// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Forwarding {
      /**
       * Instructs Stripe to make a request on your behalf using the destination URL. The destination URL
       * is activated by Stripe at the time of onboarding. Stripe verifies requests with your credentials
       * provided during onboarding, and injects card details from the payment_method into the request.
       *
       * Stripe redacts all sensitive fields and headers, including authentication credentials and card numbers,
       * before storing the request and response data in the forwarding Request object, which are subject to a
       * 30-day retention period.
       *
       * You can provide a Stripe idempotency key to make sure that requests with the same key result in only one
       * outbound request. The Stripe idempotency key provided should be unique and different from any idempotency
       * keys provided on the underlying third-party request.
       *
       * Forwarding Requests are synchronous requests that return a response or time out according to
       * Stripe's limits.
       *
       * Related guide: [Forward card details to third-party API endpoints](https://docs.stripe.com/payments/forwarding).
       */
      interface Request {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'forwarding.request';

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The PaymentMethod to insert into the forwarded request. Forwarding previously consumed PaymentMethods is allowed.
         */
        payment_method: string;

        /**
         * The field kinds to be replaced in the forwarded request.
         */
        replacements: Array<Request.Replacement>;

        /**
         * Context about the request from Stripe's servers to the destination endpoint.
         */
        request_context: Request.RequestContext | null;

        /**
         * The request that was sent to the destination endpoint. We redact any sensitive fields.
         */
        request_details: Request.RequestDetails | null;

        /**
         * The response that the destination endpoint returned to us. We redact any sensitive fields.
         */
        response_details: Request.ResponseDetails | null;

        /**
         * The destination URL for the forwarded request. Must be supported by the config.
         */
        url: string | null;
      }

      namespace Request {
        type Replacement =
          | 'card_cvc'
          | 'card_expiry'
          | 'card_number'
          | 'cardholder_name';

        interface RequestContext {
          /**
           * The time it took in milliseconds for the destination endpoint to respond.
           */
          destination_duration: number;

          /**
           * The IP address of the destination.
           */
          destination_ip_address: string;
        }

        interface RequestDetails {
          /**
           * The body payload to send to the destination endpoint.
           */
          body: string;

          /**
           * The headers to include in the forwarded request. Can be omitted if no additional headers (excluding Stripe-generated ones such as the Content-Type header) should be included.
           */
          headers: Array<RequestDetails.Header>;

          /**
           * The HTTP method used to call the destination endpoint.
           */
          http_method: 'POST';
        }

        namespace RequestDetails {
          interface Header {
            /**
             * The header name.
             */
            name: string;

            /**
             * The header value.
             */
            value: string;
          }
        }

        interface ResponseDetails {
          /**
           * The response body from the destination endpoint to Stripe.
           */
          body: string;

          /**
           * HTTP headers that the destination endpoint returned.
           */
          headers: Array<ResponseDetails.Header>;

          /**
           * The HTTP status code that the destination endpoint returned.
           */
          status: number;
        }

        namespace ResponseDetails {
          interface Header {
            /**
             * The header name.
             */
            name: string;

            /**
             * The header value.
             */
            value: string;
          }
        }
      }
    }
  }
}
