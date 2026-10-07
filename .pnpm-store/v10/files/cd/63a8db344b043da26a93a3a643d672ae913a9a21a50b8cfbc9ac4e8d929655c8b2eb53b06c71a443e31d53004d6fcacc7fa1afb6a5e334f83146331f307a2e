// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * Issue a credit note to adjust an invoice's amount after the invoice is finalized.
     *
     * Related guide: [Credit notes](https://stripe.com/docs/billing/invoices/credit-notes)
     */
    interface CreditNote {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'credit_note';

      /**
       * The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax.
       */
      amount: number;

      /**
       * This is the sum of all the shipping amounts.
       */
      amount_shipping: number;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * ID of the customer.
       */
      customer: string | Stripe.Customer | Stripe.DeletedCustomer;

      /**
       * Customer balance transaction related to this credit note.
       */
      customer_balance_transaction:
        | string
        | Stripe.CustomerBalanceTransaction
        | null;

      /**
       * The integer amount in cents (or local equivalent) representing the total amount of discount that was credited.
       */
      discount_amount: number;

      /**
       * The aggregate amounts calculated per discount for all line items.
       */
      discount_amounts: Array<CreditNote.DiscountAmount>;

      /**
       * The date when this credit note is in effect. Same as `created` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the credit note PDF.
       */
      effective_at: number | null;

      /**
       * ID of the invoice.
       */
      invoice: string | Stripe.Invoice;

      /**
       * Line items that make up the credit note
       */
      lines: ApiList<Stripe.CreditNoteLineItem>;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Customer-facing text that appears on the credit note PDF.
       */
      memo: string | null;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata | null;

      /**
       * A unique number that identifies this particular credit note and appears on the PDF of the credit note and its associated invoice.
       */
      number: string;

      /**
       * Amount that was credited outside of Stripe.
       */
      out_of_band_amount: number | null;

      /**
       * The link to download the PDF of the credit note.
       */
      pdf: string;

      /**
       * Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
       */
      reason: CreditNote.Reason | null;

      /**
       * Refund related to this credit note.
       */
      refund: string | Stripe.Refund | null;

      /**
       * The details of the cost of shipping, including the ShippingRate applied to the invoice.
       */
      shipping_cost: CreditNote.ShippingCost | null;

      /**
       * Status of this credit note, one of `issued` or `void`. Learn more about [voiding credit notes](https://stripe.com/docs/billing/invoices/credit-notes#voiding).
       */
      status: CreditNote.Status;

      /**
       * The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding exclusive tax and invoice level discounts.
       */
      subtotal: number;

      /**
       * The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding all tax and invoice level discounts.
       */
      subtotal_excluding_tax: number | null;

      /**
       * The aggregate amounts calculated per tax rate for all line items.
       */
      tax_amounts: Array<CreditNote.TaxAmount>;

      /**
       * The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax and all discount.
       */
      total: number;

      /**
       * The integer amount in cents (or local equivalent) representing the total amount of the credit note, excluding tax, but including discounts.
       */
      total_excluding_tax: number | null;

      /**
       * Type of this credit note, one of `pre_payment` or `post_payment`. A `pre_payment` credit note means it was issued when the invoice was open. A `post_payment` credit note means it was issued when the invoice was paid.
       */
      type: CreditNote.Type;

      /**
       * The time that the credit note was voided.
       */
      voided_at: number | null;
    }

    namespace CreditNote {
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

      type Reason =
        | 'duplicate'
        | 'fraudulent'
        | 'order_change'
        | 'product_unsatisfactory';

      interface ShippingCost {
        /**
         * Total shipping cost before any taxes are applied.
         */
        amount_subtotal: number;

        /**
         * Total tax amount applied due to shipping costs. If no tax was applied, defaults to 0.
         */
        amount_tax: number;

        /**
         * Total shipping cost after taxes are applied.
         */
        amount_total: number;

        /**
         * The ID of the ShippingRate for this invoice.
         */
        shipping_rate: string | Stripe.ShippingRate | null;

        /**
         * The taxes applied to the shipping rate.
         */
        taxes?: Array<ShippingCost.Tax>;
      }

      namespace ShippingCost {
        interface Tax {
          /**
           * Amount of tax applied for this rate.
           */
          amount: number;

          /**
           * Tax rates can be applied to [invoices](https://stripe.com/docs/billing/invoices/tax-rates), [subscriptions](https://stripe.com/docs/billing/subscriptions/taxes) and [Checkout Sessions](https://stripe.com/docs/payments/checkout/set-up-a-subscription#tax-rates) to collect tax.
           *
           * Related guide: [Tax rates](https://stripe.com/docs/billing/taxes/tax-rates)
           */
          rate: Stripe.TaxRate;

          /**
           * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
           */
          taxability_reason: Tax.TaxabilityReason | null;

          /**
           * The amount on which tax is calculated, in cents (or local equivalent).
           */
          taxable_amount: number | null;
        }

        namespace Tax {
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
      }

      type Status = 'issued' | 'void';

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

      type Type = 'post_payment' | 'pre_payment';
    }
  }
}
