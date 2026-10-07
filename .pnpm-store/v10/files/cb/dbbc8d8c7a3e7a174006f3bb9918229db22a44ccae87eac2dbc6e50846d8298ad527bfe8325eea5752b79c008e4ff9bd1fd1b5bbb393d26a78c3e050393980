// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface TopupCreateParams {
      /**
       * A positive integer representing how much to transfer.
       */
      amount: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

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

      /**
       * The ID of a source to transfer funds from. For most users, this should be left unspecified which will use the bank account that was set up in the dashboard for the specified currency. In test mode, this can be a test bank token (see [Testing Top-ups](https://stripe.com/docs/connect/testing#testing-top-ups)).
       */
      source?: string;

      /**
       * Extra information about a top-up for the source's bank statement. Limited to 15 ASCII characters.
       */
      statement_descriptor?: string;

      /**
       * A string that identifies this top-up as part of a group.
       */
      transfer_group?: string;
    }

    interface TopupRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface TopupUpdateParams {
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

    interface TopupListParams extends PaginationParams {
      /**
       * A positive integer representing how much to transfer.
       */
      amount?: Stripe.RangeQueryParam | number;

      /**
       * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return top-ups that have the given status. One of `canceled`, `failed`, `pending` or `succeeded`.
       */
      status?: TopupListParams.Status;
    }

    namespace TopupListParams {
      type Status = 'canceled' | 'failed' | 'pending' | 'succeeded';
    }

    interface TopupCancelParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class TopupsResource {
      /**
       * Top up the balance of an account
       */
      create(
        params: TopupCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Topup>>;

      /**
       * Retrieves the details of a top-up that has previously been created. Supply the unique top-up ID that was returned from your previous request, and Stripe will return the corresponding top-up information.
       */
      retrieve(
        id: string,
        params?: TopupRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Topup>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Topup>>;

      /**
       * Updates the metadata of a top-up. Other top-up details are not editable by design.
       */
      update(
        id: string,
        params?: TopupUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Topup>>;

      /**
       * Returns a list of top-ups.
       */
      list(
        params?: TopupListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Topup>;
      list(options?: RequestOptions): ApiListPromise<Stripe.Topup>;

      /**
       * Cancels a top-up. Only pending top-ups can be canceled.
       */
      cancel(
        id: string,
        params?: TopupCancelParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Topup>>;
      cancel(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Topup>>;
    }
  }
}
