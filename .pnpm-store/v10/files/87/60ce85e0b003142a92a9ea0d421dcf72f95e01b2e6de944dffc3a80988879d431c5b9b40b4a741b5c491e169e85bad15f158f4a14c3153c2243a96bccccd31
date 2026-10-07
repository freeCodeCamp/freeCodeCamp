// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * Invoice Line Items represent the individual lines within an [invoice](https://stripe.com/docs/api/invoices) and only exist within the context of an invoice.
     *
     * Each line item is backed by either an [invoice item](https://stripe.com/docs/api/invoiceitems) or a [subscription item](https://stripe.com/docs/api/subscription_items).
     */
    interface InvoiceLineItem {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'line_item';

      /**
       * The amount, in cents (or local equivalent).
       */
      amount: number;

      /**
       * The integer amount in cents (or local equivalent) representing the amount for this line item, excluding all tax and discounts.
       */
      amount_excluding_tax: number | null;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description: string | null;

      /**
       * The amount of discount calculated per discount for this line item.
       */
      discount_amounts: Array<InvoiceLineItem.DiscountAmount> | null;

      /**
       * If true, discounts will apply to this line item. Always false for prorations.
       */
      discountable: boolean;

      /**
       * The discounts applied to the invoice line item. Line item discounts are applied before invoice discounts. Use `expand[]=discounts` to expand each discount.
       */
      discounts: Array<string | Stripe.Discount>;

      /**
       * The ID of the invoice that contains this line item.
       */
      invoice: string | null;

      /**
       * The ID of the [invoice item](https://stripe.com/docs/api/invoiceitems) associated with this line item if any.
       */
      invoice_item?: string | Stripe.InvoiceItem;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Note that for line items with `type=subscription`, `metadata` reflects the current metadata from the subscription associated with the line item, unless the invoice line was directly updated with different metadata after creation.
       */
      metadata: Stripe.Metadata;

      period: InvoiceLineItem.Period;

      /**
       * The plan of the subscription, if the line item is a subscription or a proration.
       */
      plan: Stripe.Plan | null;

      /**
       * The price of the line item.
       */
      price: Stripe.Price | null;

      /**
       * Whether this is a proration.
       */
      proration: boolean;

      /**
       * Additional details for proration line items
       */
      proration_details: InvoiceLineItem.ProrationDetails | null;

      /**
       * The quantity of the subscription, if the line item is a subscription or a proration.
       */
      quantity: number | null;

      /**
       * The subscription that the invoice item pertains to, if any.
       */
      subscription: string | Stripe.Subscription | null;

      /**
       * The subscription item that generated this line item. Left empty if the line item is not an explicit result of a subscription.
       */
      subscription_item?: string | Stripe.SubscriptionItem;

      /**
       * The amount of tax calculated per tax rate for this line item
       */
      tax_amounts: Array<InvoiceLineItem.TaxAmount>;

      /**
       * The tax rates which apply to the line item.
       */
      tax_rates: Array<Stripe.TaxRate>;

      /**
       * A string identifying the type of the source of this line item, either an `invoiceitem` or a `subscription`.
       */
      type: InvoiceLineItem.Type;

      /**
       * The amount in cents (or local equivalent) representing the unit amount for this line item, excluding all tax and discounts.
       */
      unit_amount_excluding_tax: string | null;
    }

    namespace InvoiceLineItem {
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

      interface Period {
        /**
         * The end of the period, which must be greater than or equal to the start. This value is inclusive.
         */
        end: number;

        /**
         * The start of the period. This value is inclusive.
         */
        start: number;
      }

      interface ProrationDetails {
        /**
         * For a credit proration `line_item`, the original debit line_items to which the credit proration applies.
         */
        credited_items: ProrationDetails.CreditedItems | null;
      }

      namespace ProrationDetails {
        interface CreditedItems {
          /**
           * Invoice containing the credited invoice line items
           */
          invoice: string;

          /**
           * Credited invoice line items
           */
          invoice_line_items: Array<string>;
        }
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

      type Type = 'invoiceitem' | 'subscription';
    }
  }
}
