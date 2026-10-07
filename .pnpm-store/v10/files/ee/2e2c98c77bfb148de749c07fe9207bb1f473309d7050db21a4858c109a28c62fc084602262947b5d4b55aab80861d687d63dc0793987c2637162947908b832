// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Forwarding {
      interface RequestCreateParams {
        /**
         * The PaymentMethod to insert into the forwarded request. Forwarding previously consumed PaymentMethods is allowed.
         */
        payment_method: string;

        /**
         * The field kinds to be replaced in the forwarded request.
         */
        replacements: Array<RequestCreateParams.Replacement>;

        /**
         * The request body and headers to be sent to the destination endpoint.
         */
        request: RequestCreateParams.Request;

        /**
         * The destination URL for the forwarded request. Must be supported by the config.
         */
        url: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      namespace RequestCreateParams {
        type Replacement =
          | 'card_cvc'
          | 'card_expiry'
          | 'card_number'
          | 'cardholder_name';

        interface Request {
          /**
           * The body payload to send to the destination endpoint.
           */
          body?: string;

          /**
           * The headers to include in the forwarded request. Can be omitted if no additional headers (excluding Stripe-generated ones such as the Content-Type header) should be included.
           */
          headers?: Array<Request.Header>;
        }

        namespace Request {
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

      interface RequestRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface RequestListParams extends PaginationParams {
        /**
         * Similar to other List endpoints, filters results based on created timestamp. You can pass gt, gte, lt, and lte timestamp values.
         */
        created?: Stripe.RangeQueryParam;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class RequestsResource {
        /**
         * Creates a ForwardingRequest object.
         */
        create(
          params: RequestCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Forwarding.Request>>;

        /**
         * Retrieves a ForwardingRequest object.
         */
        retrieve(
          id: string,
          params?: RequestRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Forwarding.Request>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Forwarding.Request>>;

        /**
         * Lists all ForwardingRequest objects.
         */
        list(
          params?: RequestListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Forwarding.Request>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Forwarding.Request>;
      }
    }
  }
}
