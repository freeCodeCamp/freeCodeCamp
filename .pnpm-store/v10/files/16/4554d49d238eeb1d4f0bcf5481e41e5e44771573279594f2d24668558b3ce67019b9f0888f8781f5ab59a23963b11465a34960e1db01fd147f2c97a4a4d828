// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Treasury {
      interface InboundTransferCreateParams {
        /**
         * Amount (in cents) to be transferred.
         */
        amount: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * The FinancialAccount to send funds to.
         */
        financial_account: string;

        /**
         * The origin payment method to be debited for the InboundTransfer.
         */
        origin_payment_method: string;

        /**
         * An arbitrary string attached to the object. Often useful for displaying to users.
         */
        description?: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * The complete description that appears on your customers' statements. Maximum 10 characters.
         */
        statement_descriptor?: string;
      }

      interface InboundTransferRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface InboundTransferListParams extends PaginationParams {
        /**
         * Returns objects associated with this FinancialAccount.
         */
        financial_account: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Only return InboundTransfers that have the given status: `processing`, `succeeded`, `failed` or `canceled`.
         */
        status?: InboundTransferListParams.Status;
      }

      namespace InboundTransferListParams {
        type Status = 'canceled' | 'failed' | 'processing' | 'succeeded';
      }

      interface InboundTransferCancelParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class InboundTransfersResource {
        /**
         * Creates an InboundTransfer.
         */
        create(
          params: InboundTransferCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.InboundTransfer>>;

        /**
         * Retrieves the details of an existing InboundTransfer.
         */
        retrieve(
          id: string,
          params?: InboundTransferRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.InboundTransfer>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.InboundTransfer>>;

        /**
         * Returns a list of InboundTransfers sent from the specified FinancialAccount.
         */
        list(
          params: InboundTransferListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Treasury.InboundTransfer>;

        /**
         * Cancels an InboundTransfer.
         */
        cancel(
          id: string,
          params?: InboundTransferCancelParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.InboundTransfer>>;
        cancel(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.InboundTransfer>>;
      }
    }
  }
}
