// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface TransferCreateParams {
      /**
       * Three-letter [ISO code for currency](https://www.iso.org/iso-4217-currency-codes.html) in lowercase. Must be a [supported currency](https://docs.stripe.com/currencies).
       */
      currency: string;

      /**
       * The ID of a connected Stripe account. [See the Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers) for details.
       */
      destination: string;

      /**
       * A positive integer in cents (or local equivalent) representing how much to transfer.
       */
      amount?: number;

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
       * You can use this parameter to transfer funds from a charge before they are added to your available balance. A pending balance will transfer immediately but the funds will not become available until the original charge becomes available. [See the Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-availability) for details.
       */
      source_transaction?: string;

      /**
       * The source balance to use for this transfer. One of `bank_account`, `card`, or `fpx`. For most users, this will default to `card`.
       */
      source_type?: TransferCreateParams.SourceType;

      /**
       * A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options) for details.
       */
      transfer_group?: string;
    }

    namespace TransferCreateParams {
      type SourceType = 'bank_account' | 'card' | 'fpx';
    }

    interface TransferRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface TransferUpdateParams {
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
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
    }

    interface TransferListParams extends PaginationParams {
      /**
       * Only return transfers that were created during the given date interval.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * Only return transfers for the destination specified by this account ID.
       */
      destination?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return transfers with the specified transfer group.
       */
      transfer_group?: string;
    }

    interface TransferCreateReversalParams {
      /**
       * A positive integer in cents (or local equivalent) representing how much of this transfer to reverse. Can only reverse up to the unreversed amount remaining of the transfer. Partial transfer reversals are only allowed for transfers to Stripe Accounts. Defaults to the entire transfer amount.
       */
      amount?: number;

      /**
       * An arbitrary string which you can attach to a reversal object. This will be unset if you POST an empty value.
       */
      description?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * Boolean indicating whether the application fee should be refunded when reversing this transfer. If a full transfer reversal is given, the full application fee will be refunded. Otherwise, the application fee will be refunded with an amount proportional to the amount of the transfer reversed.
       */
      refund_application_fee?: boolean;
    }

    interface TransferListReversalsParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface TransferRetrieveReversalParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface TransferUpdateReversalParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
    }

    class TransfersResource {
      /**
       * To send funds from your Stripe account to a connected account, you create a new transfer object. Your [Stripe balance](https://stripe.com/docs/api#balance) must be able to cover the transfer amount, or you'll receive an “Insufficient Funds” error.
       */
      create(
        params: TransferCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Transfer>>;

      /**
       * Retrieves the details of an existing transfer. Supply the unique transfer ID from either a transfer creation request or the transfer list, and Stripe will return the corresponding transfer information.
       */
      retrieve(
        id: string,
        params?: TransferRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Transfer>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Transfer>>;

      /**
       * Updates the specified transfer by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
       *
       * This request accepts only metadata as an argument.
       */
      update(
        id: string,
        params?: TransferUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Transfer>>;

      /**
       * Returns a list of existing transfers sent to connected accounts. The transfers are returned in sorted order, with the most recently created transfers appearing first.
       */
      list(
        params?: TransferListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Transfer>;
      list(options?: RequestOptions): ApiListPromise<Stripe.Transfer>;

      /**
       * When you create a new reversal, you must specify a transfer to create it on.
       *
       * When reversing transfers, you can optionally reverse part of the transfer. You can do so as many times as you wish until the entire transfer has been reversed.
       *
       * Once entirely reversed, a transfer can't be reversed again. This method will return an error when called on an already-reversed transfer, or when trying to reverse more money than is left on a transfer.
       */
      createReversal(
        id: string,
        params?: TransferCreateReversalParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.TransferReversal>>;
      createReversal(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.TransferReversal>>;

      /**
       * You can see a list of the reversals belonging to a specific transfer. Note that the 10 most recent reversals are always available by default on the transfer object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through additional reversals.
       */
      listReversals(
        id: string,
        params?: TransferListReversalsParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.TransferReversal>;
      listReversals(
        id: string,
        options?: RequestOptions
      ): ApiListPromise<Stripe.TransferReversal>;

      /**
       * By default, you can see the 10 most recent reversals stored directly on the transfer object, but you can also retrieve details about a specific reversal stored on the transfer.
       */
      retrieveReversal(
        transferId: string,
        id: string,
        params?: TransferRetrieveReversalParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.TransferReversal>>;
      retrieveReversal(
        transferId: string,
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.TransferReversal>>;

      /**
       * Updates the specified reversal by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
       *
       * This request only accepts metadata and description as arguments.
       */
      updateReversal(
        transferId: string,
        id: string,
        params?: TransferUpdateReversalParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.TransferReversal>>;
      updateReversal(
        transferId: string,
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.TransferReversal>>;
    }
  }
}
