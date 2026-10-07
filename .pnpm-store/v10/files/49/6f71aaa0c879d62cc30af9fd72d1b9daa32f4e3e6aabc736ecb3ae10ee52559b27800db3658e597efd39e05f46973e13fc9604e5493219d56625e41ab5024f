// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Climate {
      interface OrderCreateParams {
        /**
         * Unique identifier of the Climate product.
         */
        product: string;

        /**
         * Requested amount of carbon removal units. Either this or `metric_tons` must be specified.
         */
        amount?: number;

        /**
         * Publicly sharable reference for the end beneficiary of carbon removal. Assumed to be the Stripe account if not set.
         */
        beneficiary?: OrderCreateParams.Beneficiary;

        /**
         * Request currency for the order as a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a supported [settlement currency for your account](https://stripe.com/docs/currencies). If omitted, the account's default currency will be used.
         */
        currency?: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * Requested number of tons for the order. Either this or `amount` must be specified.
         */
        metric_tons?: string;
      }

      namespace OrderCreateParams {
        interface Beneficiary {
          /**
           * Publicly displayable name for the end beneficiary of carbon removal.
           */
          public_name: string;
        }
      }

      interface OrderRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface OrderUpdateParams {
        /**
         * Publicly sharable reference for the end beneficiary of carbon removal. Assumed to be the Stripe account if not set.
         */
        beneficiary?: Stripe.Emptyable<OrderUpdateParams.Beneficiary>;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;
      }

      namespace OrderUpdateParams {
        interface Beneficiary {
          /**
           * Publicly displayable name for the end beneficiary of carbon removal.
           */
          public_name: Stripe.Emptyable<string>;
        }
      }

      interface OrderListParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface OrderCancelParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class OrdersResource {
        /**
         * Creates a Climate order object for a given Climate product. The order will be processed immediately
         * after creation and payment will be deducted your Stripe balance.
         */
        create(
          params: OrderCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Climate.Order>>;

        /**
         * Retrieves the details of a Climate order object with the given ID.
         */
        retrieve(
          id: string,
          params?: OrderRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Climate.Order>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Climate.Order>>;

        /**
         * Updates the specified order by setting the values of the parameters passed.
         */
        update(
          id: string,
          params?: OrderUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Climate.Order>>;

        /**
         * Lists all Climate order objects. The orders are returned sorted by creation date, with the
         * most recently created orders appearing first.
         */
        list(
          params?: OrderListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Climate.Order>;
        list(options?: RequestOptions): ApiListPromise<Stripe.Climate.Order>;

        /**
         * Cancels a Climate order. You can cancel an order within 24 hours of creation. Stripe refunds the
         * reservation amount_subtotal, but not the amount_fees for user-triggered cancellations. Frontier
         * might cancel reservations if suppliers fail to deliver. If Frontier cancels the reservation, Stripe
         * provides 90 days advance notice and refunds the amount_total.
         */
        cancel(
          id: string,
          params?: OrderCancelParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Climate.Order>>;
        cancel(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Climate.Order>>;
      }
    }
  }
}
