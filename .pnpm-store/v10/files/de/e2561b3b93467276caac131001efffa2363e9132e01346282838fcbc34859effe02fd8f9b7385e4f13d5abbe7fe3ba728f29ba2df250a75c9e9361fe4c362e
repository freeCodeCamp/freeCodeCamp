// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Tax {
      /**
       * The CalculationLineItem object.
       */
      interface CalculationLineItem {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'tax.calculation_line_item';

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
         * The ID of an existing [Product](https://stripe.com/docs/api/products/object).
         */
        product: string | null;

        /**
         * The number of units of the item being purchased. For reversals, this is the quantity reversed.
         */
        quantity: number;

        /**
         * A custom identifier for this line item.
         */
        reference: string | null;

        /**
         * Specifies whether the `amount` includes taxes. If `tax_behavior=inclusive`, then the amount includes taxes.
         */
        tax_behavior: CalculationLineItem.TaxBehavior;

        /**
         * Detailed account of taxes relevant to this line item.
         */
        tax_breakdown?: Array<CalculationLineItem.TaxBreakdown> | null;

        /**
         * The [tax code](https://stripe.com/docs/tax/tax-categories) ID used for this resource.
         */
        tax_code: string;
      }

      namespace CalculationLineItem {
        type TaxBehavior = 'exclusive' | 'inclusive';

        interface TaxBreakdown {
          /**
           * The amount of tax, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
           */
          amount: number;

          jurisdiction: TaxBreakdown.Jurisdiction;

          /**
           * Indicates whether the jurisdiction was determined by the origin (merchant's address) or destination (customer's address).
           */
          sourcing: TaxBreakdown.Sourcing;

          /**
           * Details regarding the rate for this tax. This field will be `null` when the tax is not imposed, for example if the product is exempt from tax.
           */
          tax_rate_details: TaxBreakdown.TaxRateDetails | null;

          /**
           * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
           */
          taxability_reason: TaxBreakdown.TaxabilityReason;

          /**
           * The amount on which tax is calculated, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
           */
          taxable_amount: number;
        }

        namespace TaxBreakdown {
          interface Jurisdiction {
            /**
             * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
             */
            country: string;

            /**
             * A human-readable name for the jurisdiction imposing the tax.
             */
            display_name: string;

            /**
             * Indicates the level of the jurisdiction imposing the tax.
             */
            level: Jurisdiction.Level;

            /**
             * [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2:US), without country prefix. For example, "NY" for New York, United States.
             */
            state: string | null;
          }

          namespace Jurisdiction {
            type Level = 'city' | 'country' | 'county' | 'district' | 'state';
          }

          type Sourcing = 'destination' | 'origin';

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

          interface TaxRateDetails {
            /**
             * A localized display name for tax type, intended to be human-readable. For example, "Local Sales and Use Tax", "Value-added tax (VAT)", or "Umsatzsteuer (USt.)".
             */
            display_name: string;

            /**
             * The tax rate percentage as a string. For example, 8.5% is represented as "8.5".
             */
            percentage_decimal: string;

            /**
             * The tax type, such as `vat` or `sales_tax`.
             */
            tax_type: TaxRateDetails.TaxType;
          }

          namespace TaxRateDetails {
            type TaxType =
              | 'amusement_tax'
              | 'communications_tax'
              | 'gst'
              | 'hst'
              | 'igst'
              | 'jct'
              | 'lease_tax'
              | 'pst'
              | 'qst'
              | 'rst'
              | 'sales_tax'
              | 'vat';
          }
        }
      }
    }
  }
}
