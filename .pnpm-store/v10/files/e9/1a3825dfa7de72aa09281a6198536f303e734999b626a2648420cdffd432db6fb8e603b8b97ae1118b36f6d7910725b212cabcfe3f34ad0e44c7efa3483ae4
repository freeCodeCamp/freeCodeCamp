// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Tax {
      interface TransactionRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface TransactionCreateFromCalculationParams {
        /**
         * Tax Calculation ID to be used as input when creating the transaction.
         */
        calculation: string;

        /**
         * A custom order or sale identifier, such as 'myOrder_123'. Must be unique across all transactions, including reversals.
         */
        reference: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * The Unix timestamp representing when the tax liability is assumed or reduced, which determines the liability posting period and handling in tax liability reports. The timestamp must fall within the `tax_date` and the current time, unless the `tax_date` is scheduled in advance. Defaults to the current time.
         */
        posted_at?: number;
      }

      interface TransactionCreateReversalParams {
        /**
         * If `partial`, the provided line item or shipping cost amounts are reversed. If `full`, the original transaction is fully reversed.
         */
        mode: TransactionCreateReversalParams.Mode;

        /**
         * The ID of the Transaction to partially or fully reverse.
         */
        original_transaction: string;

        /**
         * A custom identifier for this reversal, such as `myOrder_123-refund_1`, which must be unique across all transactions. The reference helps identify this reversal transaction in exported [tax reports](https://stripe.com/docs/tax/reports).
         */
        reference: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * A flat amount to reverse across the entire transaction, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) in negative. This value represents the total amount to refund from the transaction, including taxes.
         */
        flat_amount?: number;

        /**
         * The line item amounts to reverse.
         */
        line_items?: Array<TransactionCreateReversalParams.LineItem>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * The shipping cost to reverse.
         */
        shipping_cost?: TransactionCreateReversalParams.ShippingCost;
      }

      namespace TransactionCreateReversalParams {
        interface LineItem {
          /**
           * The amount to reverse, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) in negative.
           */
          amount: number;

          /**
           * The amount of tax to reverse, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) in negative.
           */
          amount_tax: number;

          /**
           * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata?: Stripe.MetadataParam;

          /**
           * The `id` of the line item to reverse in the original transaction.
           */
          original_line_item: string;

          /**
           * The quantity reversed. Appears in [tax exports](https://stripe.com/docs/tax/reports), but does not affect the amount of tax reversed.
           */
          quantity?: number;

          /**
           * A custom identifier for this line item in the reversal transaction, such as 'L1-refund'.
           */
          reference: string;
        }

        type Mode = 'full' | 'partial';

        interface ShippingCost {
          /**
           * The amount to reverse, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) in negative.
           */
          amount: number;

          /**
           * The amount of tax to reverse, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) in negative.
           */
          amount_tax: number;
        }
      }

      interface TransactionListLineItemsParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class TransactionsResource {
        /**
         * Retrieves a Tax Transaction object.
         */
        retrieve(
          id: string,
          params?: TransactionRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Tax.Transaction>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Tax.Transaction>>;

        /**
         * Creates a Tax Transaction from a calculation, if that calculation hasn't expired. Calculations expire after 90 days.
         */
        createFromCalculation(
          params: TransactionCreateFromCalculationParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Tax.Transaction>>;

        /**
         * Partially or fully reverses a previously created Transaction.
         */
        createReversal(
          params: TransactionCreateReversalParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Tax.Transaction>>;

        /**
         * Retrieves the line items of a committed standalone transaction as a collection.
         */
        listLineItems(
          id: string,
          params?: TransactionListLineItemsParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Tax.TransactionLineItem>;
        listLineItems(
          id: string,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Tax.TransactionLineItem>;
      }
    }
  }
}
