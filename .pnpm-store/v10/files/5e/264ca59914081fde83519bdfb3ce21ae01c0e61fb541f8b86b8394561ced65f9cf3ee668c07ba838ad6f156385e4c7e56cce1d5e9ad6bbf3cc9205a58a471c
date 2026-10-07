// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The credit note line item object
     */
    interface CreditNoteLineItem {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'credit_note_line_item';

      /**
       * The integer amount in cents (or local equivalent) representing the gross amount being credited for this line item, excluding (exclusive) tax and discounts.
       */
      amount: number;

      /**
       * The integer amount in cents (or local equivalent) representing the amount being credited for this line item, excluding all tax and discounts.
       */
      amount_excluding_tax: number | null;

      /**
       * Description of the item being credited.
       */
      description: string | null;

      /**
       * The integer amount in cents (or local equivalent) representing the discount being credited for this line item.
       */
      discount_amount: number;

      /**
       * The amount of discount calculated per discount for this line item
       */
      discount_amounts: Array<CreditNoteLineItem.DiscountAmount>;

      /**
       * ID of the invoice line item being credited
       */
      invoice_line_item?: string;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * The number of units of product being credited.
       */
      quantity: number | null;

      /**
       * The amount of tax calculated per tax rate for this line item
       */
      tax_amounts: Array<CreditNoteLineItem.TaxAmount>;

      /**
       * The tax rates which apply to the line item.
       */
      tax_rates: Array<Stripe.TaxRate>;

      /**
       * The type of the credit note line item, one of `invoice_line_item` or `custom_line_item`. When the type is `invoice_line_item` there is an additional `invoice_line_item` property on the resource the value of which is the id of the credited line item on the invoice.
       */
      type: CreditNoteLineItem.Type;

      /**
       * The cost of each unit of product being credited.
       */
      unit_amount: number | null;

      /**
       * Same as `unit_amount`, but contains a decimal value with at most 12 decimal places.
       */
      unit_amount_decimal: string | null;

      /**
       * The amount in cents (or local equivalent) representing the unit amount being credited for this line item, excluding all tax and discounts.
       */
      unit_amount_excluding_tax: string | null;
    }

    namespace CreditNoteLineItem {
      interface DiscountAmount {
        /**
         * The amount, in cents (or local equivalent), of the discount.
         */
        amount: number;

        /**
         * The discount that was applied to get this discount amount.
         */
        discount: string | Stripe.Discount | Stripe.DeletedDiscount;
      }

      interface TaxAmount {
        /**
         * The amount, in cents (or local equivalent), of the tax.
         */
        amount: number;

        /**
         * Whether this tax amount is inclusive or exclusive.
         */
        inclusive: boolean;

        /**
         * The tax rate that was applied to get this tax amount.
         */
        tax_rate: string | Stripe.TaxRate;

        /**
         * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
         */
        taxability_reason: TaxAmount.TaxabilityReason | null;

        /**
         * The amount on which tax is calculated, in cents (or local equivalent).
         */
        taxable_amount: number | null;
      }

      namespace TaxAmount {
        type TaxabilityReason =
          | 'customer_exempt'
          | 'not_collecting'
          | 'not_subject_to_tax'
          | 'not_supported'
          | 'portion_product_exempt'
          | 'portion_reduced_rated'
          | 'portion_standard_rated'
          | 'product_exempt'
          | 'product_exempt_holiday'
          | 'proportionally_rated'
          | 'reduced_rated'
          | 'reverse_charge'
          | 'standard_rated'
          | 'taxable_basis_reduced'
          | 'zero_rated';
      }

      type Type = 'custom_line_item' | 'invoice_line_item';
    }
  }
}
