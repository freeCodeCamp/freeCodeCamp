// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface RefundCreateParams {
      amount?: number;

      /**
       * The identifier of the charge to refund.
       */
      charge?: string;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency?: string;

      /**
       * Customer whose customer balance to refund from.
       */
      customer?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * For payment methods without native refund support (e.g., Konbini, PromptPay), use this email from the customer to receive refund instructions.
       */
      instructions_email?: string;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * Origin of the refund
       */
      origin?: 'customer_balance';

      /**
       * The identifier of the PaymentIntent to refund.
       */
      payment_intent?: string;

      /**
       * String indicating the reason for the refund. If set, possible values are `duplicate`, `fraudulent`, and `requested_by_customer`. If you believe the charge to be fraudulent, specifying `fraudulent` as the reason will add the associated card and email to your [block lists](https://stripe.com/docs/radar/lists), and will also help us improve our fraud detection algorithms.
       */
      reason?: RefundCreateParams.Reason;

      /**
       * Boolean indicating whether the application fee should be refunded when refunding this charge. If a full charge refund is given, the full application fee will be refunded. Otherwise, the application fee will be refunded in an amount proportional to the amount of the charge refunded. An application fee can be refunded only by the application that created the charge.
       */
      refund_application_fee?: boolean;

      /**
       * Boolean indicating whether the transfer should be reversed when refunding this charge. The transfer will be reversed proportionally to the amount being refunded (either the entire or partial amount).
       *
       * A transfer can be reversed only by the application that created the charge.
       */
      reverse_transfer?: boolean;
    }

    namespace RefundCreateParams {
      type Reason = 'duplicate' | 'fraudulent' | 'requested_by_customer';
    }

    interface RefundRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface RefundUpdateParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
    }

    interface RefundListParams extends PaginationParams {
      /**
       * Only return refunds for the charge specified by this charge ID.
       */
      charge?: string;

      /**
       * Only return refunds that were created during the given date interval.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return refunds for the PaymentIntent specified by this ID.
       */
      payment_intent?: string;
    }

    interface RefundCancelParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class RefundsResource {
      /**
       * When you create a new refund, you must specify a Charge or a PaymentIntent object on which to create it.
       *
       * Creating a new refund will refund a charge that has previously been created but not yet refunded.
       * Funds will be refunded to the credit or debit card that was originally charged.
       *
       * You can optionally refund only part of a charge.
       * You can do so multiple times, until the entire charge has been refunded.
       *
       * Once entirely refunded, a charge can't be refunded again.
       * This method will raise an error when called on an already-refunded charge,
       * or when trying to refund more money than is left on a charge.
       */
      create(
        params?: RefundCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Refund>>;
      create(options?: RequestOptions): Promise<Stripe.Response<Stripe.Refund>>;

      /**
       * Retrieves the details of an existing refund.
       */
      retrieve(
        id: string,
        params?: RefundRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Refund>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Refund>>;

      /**
       * Updates the refund that you specify by setting the values of the passed parameters. Any parameters that you don't provide remain unchanged.
       *
       * This request only accepts metadata as an argument.
       */
      update(
        id: string,
        params?: RefundUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Refund>>;

      /**
       * Returns a list of all refunds you created. We return the refunds in sorted order, with the most recent refunds appearing first. The 10 most recent refunds are always available by default on the Charge object.
       */
      list(
        params?: RefundListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Refund>;
      list(options?: RequestOptions): ApiListPromise<Stripe.Refund>;

      /**
       * Cancels a refund with a status of requires_action.
       *
       * You can't cancel refunds in other states. Only refunds for payment methods that require customer action can enter the requires_action state.
       */
      cancel(
        id: string,
        params?: RefundCancelParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Refund>>;
      cancel(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Refund>>;
    }
  }
}
