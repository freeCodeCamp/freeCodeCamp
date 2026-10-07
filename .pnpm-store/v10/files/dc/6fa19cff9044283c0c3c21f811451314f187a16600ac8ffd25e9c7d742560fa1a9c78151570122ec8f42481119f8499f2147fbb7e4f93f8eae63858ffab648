// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Tax {
      /**
       * The TransactionLineItem object.
       */
      interface TransactionLineItem {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'tax.transaction_line_item';

        /**
         * The line item amount in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). If `tax_behavior=inclusive`, then this amount includes taxes. Otherwise, taxes were calculated on top of this amount.
         */
        amount: number;

        /**
         * The amount of tax calculated for this line item, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
         */
        amount_tax: number;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata | null;

        /**
         * The ID of an existing [Product](https://stripe.com/docs/api/products/object).
         */
        product: string | null;

        /**
         * The number of units of the item being purchased. For reversals, this is the quantity reversed.
         */
        quantity: number;

        /**
         * A custom identifier for this line item in the transaction.
         */
        reference: string;

        /**
         * If `type=reversal`, contains information about what was reversed.
         */
        reversal: TransactionLineItem.Reversal | null;

        /**
         * Specifies whether the `amount` includes taxes. If `tax_behavior=inclusive`, then the amount includes taxes.
         */
        tax_behavior: TransactionLineItem.TaxBehavior;

        /**
         * The [tax code](https://stripe.com/docs/tax/tax-categories) ID used for this resource.
         */
        tax_code: string;

        /**
         * If `reversal`, this line item reverses an earlier transaction.
         */
        type: TransactionLineItem.Type;
      }

      namespace TransactionLineItem {
        interface Reversal {
          /**
           * The `id` of the line item to reverse in the original transaction.
           */
          original_line_item: string;
        }

        type TaxBehavior = 'exclusive' | 'inclusive';

        type Type = 'reversal' | 'transaction';
      }
    }
  }
}
