// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Treasury {
      interface OutboundTransferCreateParams {
        /**
         * Amount (in cents) to be transferred.
         */
        amount: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * The FinancialAccount to pull funds from.
         */
        financial_account: string;

        /**
         * An arbitrary string attached to the object. Often useful for displaying to users.
         */
        description?: string;

        /**
         * The PaymentMethod to use as the payment instrument for the OutboundTransfer.
         */
        destination_payment_method?: string;

        /**
         * Hash describing payment method configuration details.
         */
        destination_payment_method_options?: OutboundTransferCreateParams.DestinationPaymentMethodOptions;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * Statement descriptor to be shown on the receiving end of an OutboundTransfer. Maximum 10 characters for `ach` transfers or 140 characters for `us_domestic_wire` transfers. The default value is "transfer".
         */
        statement_descriptor?: string;
      }

      namespace OutboundTransferCreateParams {
        interface DestinationPaymentMethodOptions {
          /**
           * Optional fields for `us_bank_account`.
           */
          us_bank_account?: Stripe.Emptyable<
            DestinationPaymentMethodOptions.UsBankAccount
          >;
        }

        namespace DestinationPaymentMethodOptions {
          interface UsBankAccount {
            /**
             * Specifies the network rails to be used. If not set, will default to the PaymentMethod's preferred network. See the [docs](https://stripe.com/docs/treasury/money-movement/timelines) to learn more about money movement timelines for each network type.
             */
            network?: UsBankAccount.Network;
          }

          namespace UsBankAccount {
            type Network = 'ach' | 'us_domestic_wire';
          }
        }
      }

      interface OutboundTransferRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface OutboundTransferListParams extends PaginationParams {
        /**
         * Returns objects associated with this FinancialAccount.
         */
        financial_account: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Only return OutboundTransfers that have the given status: `processing`, `canceled`, `failed`, `posted`, or `returned`.
         */
        status?: OutboundTransferListParams.Status;
      }

      namespace OutboundTransferListParams {
        type Status =
          | 'canceled'
          | 'failed'
          | 'posted'
          | 'processing'
          | 'returned';
      }

      interface OutboundTransferCancelParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class OutboundTransfersResource {
        /**
         * Creates an OutboundTransfer.
         */
        create(
          params: OutboundTransferCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.OutboundTransfer>>;

        /**
         * Retrieves the details of an existing OutboundTransfer by passing the unique OutboundTransfer ID from either the OutboundTransfer creation request or OutboundTransfer list.
         */
        retrieve(
          id: string,
          params?: OutboundTransferRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.OutboundTransfer>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.OutboundTransfer>>;

        /**
         * Returns a list of OutboundTransfers sent from the specified FinancialAccount.
         */
        list(
          params: OutboundTransferListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Treasury.OutboundTransfer>;

        /**
         * An OutboundTransfer can be canceled if the funds have not yet been paid out.
         */
        cancel(
          id: string,
          params?: OutboundTransferCancelParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.OutboundTransfer>>;
        cancel(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Treasury.OutboundTransfer>>;
      }
    }
  }
}
