// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface PayoutCreateParams {
      /**
       * A positive integer in cents representing how much to payout.
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
       * The ID of a bank account or a card to send the payout to. If you don't provide a destination, we use the default external account for the specified currency.
       */
      destination?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * The method used to send this payout, which is `standard` or `instant`. We support `instant` for payouts to debit cards and bank accounts in certain countries. Learn more about [bank support for Instant Payouts](https://stripe.com/docs/payouts/instant-payouts-banks).
       */
      method?: PayoutCreateParams.Method;

      /**
       * The balance type of your Stripe balance to draw this payout from. Balances for different payment sources are kept separately. You can find the amounts with the Balances API. One of `bank_account`, `card`, or `fpx`.
       */
      source_type?: PayoutCreateParams.SourceType;

      /**
       * A string that displays on the recipient's bank or card statement (up to 22 characters). A `statement_descriptor` that's longer than 22 characters return an error. Most banks truncate this information and display it inconsistently. Some banks might not display it at all.
       */
      statement_descriptor?: string;
    }

    namespace PayoutCreateParams {
      type Method = 'instant' | 'standard';

      type SourceType = 'bank_account' | 'card' | 'fpx';
    }

    interface PayoutRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface PayoutUpdateParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
    }

    interface PayoutListParams extends PaginationParams {
      /**
       * Only return payouts that are expected to arrive during the given date interval.
       */
      arrival_date?: Stripe.RangeQueryParam | number;

      /**
       * Only return payouts that were created during the given date interval.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * The ID of an external account - only return payouts sent to this external account.
       */
      destination?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return payouts that have the given status: `pending`, `paid`, `failed`, or `canceled`.
       */
      status?: string;
    }

    interface PayoutCancelParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface PayoutReverseParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;
    }

    class PayoutsResource {
      /**
       * To send funds to your own bank account, create a new payout object. Your [Stripe balance](https://stripe.com/docs/api#balance) must cover the payout amount. If it doesn't, you receive an “Insufficient Funds” error.
       *
       * If your API key is in test mode, money won't actually be sent, though every other action occurs as if you're in live mode.
       *
       * If you create a manual payout on a Stripe account that uses multiple payment source types, you need to specify the source type balance that the payout draws from. The [balance object](https://stripe.com/docs/api#balance_object) details available and pending amounts by source type.
       */
      create(
        params: PayoutCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Payout>>;

      /**
       * Retrieves the details of an existing payout. Supply the unique payout ID from either a payout creation request or the payout list. Stripe returns the corresponding payout information.
       */
      retrieve(
        id: string,
        params?: PayoutRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Payout>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Payout>>;

      /**
       * Updates the specified payout by setting the values of the parameters you pass. We don't change parameters that you don't provide. This request only accepts the metadata as arguments.
       */
      update(
        id: string,
        params?: PayoutUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Payout>>;

      /**
       * Returns a list of existing payouts sent to third-party bank accounts or payouts that Stripe sent to you. The payouts return in sorted order, with the most recently created payouts appearing first.
       */
      list(
        params?: PayoutListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Payout>;
      list(options?: RequestOptions): ApiListPromise<Stripe.Payout>;

      /**
       * You can cancel a previously created payout if its status is pending. Stripe refunds the funds to your available balance. You can't cancel automatic Stripe payouts.
       */
      cancel(
        id: string,
        params?: PayoutCancelParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Payout>>;
      cancel(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Payout>>;

      /**
       * Reverses a payout by debiting the destination bank account. At this time, you can only reverse payouts for connected accounts to US bank accounts. If the payout is manual and in the pending status, use /v1/payouts/:id/cancel instead.
       *
       * By requesting a reversal through /v1/payouts/:id/reverse, you confirm that the authorized signatory of the selected bank account authorizes the debit on the bank account and that no other authorization is required.
       */
      reverse(
        id: string,
        params?: PayoutReverseParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Payout>>;
      reverse(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Payout>>;
    }
  }
}
