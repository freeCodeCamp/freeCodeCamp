// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * Tax rates can be applied to [invoices](https://stripe.com/docs/billing/invoices/tax-rates), [subscriptions](https://stripe.com/docs/billing/subscriptions/taxes) and [Checkout Sessions](https://stripe.com/docs/payments/checkout/set-up-a-subscription#tax-rates) to collect tax.
     *
     * Related guide: [Tax rates](https://stripe.com/docs/billing/taxes/tax-rates)
     */
    interface TaxRate {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'tax_rate';

      /**
       * Defaults to `true`. When set to `false`, this tax rate cannot be used with new applications or Checkout Sessions, but will still work for subscriptions and invoices that already have it set.
       */
      active: boolean;

      /**
       * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
       */
      country: string | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * An arbitrary string attached to the tax rate for your internal use only. It will not be visible to your customers.
       */
      description: string | null;

      /**
       * The display name of the tax rates as it will appear to your customer on their receipt email, PDF, and the hosted invoice page.
       */
      display_name: string;

      /**
       * Actual/effective tax rate percentage out of 100. For tax calculations with automatic_tax[enabled]=true,
       * this percentage reflects the rate actually used to calculate tax based on the product's taxability
       * and whether the user is registered to collect taxes in the corresponding jurisdiction.
       */
      effective_percentage: number | null;

      /**
       * This specifies if the tax rate is inclusive or exclusive.
       */
      inclusive: boolean;

      /**
       * The jurisdiction for the tax rate. You can use this label field for tax reporting purposes. It also appears on your customer's invoice.
       */
      jurisdiction: string | null;

      /**
       * The level of the jurisdiction that imposes this tax rate. Will be `null` for manually defined tax rates.
       */
      jurisdiction_level: TaxRate.JurisdictionLevel | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata | null;

      /**
       * Tax rate percentage out of 100. For tax calculations with automatic_tax[enabled]=true, this percentage includes the statutory tax rate of non-taxable jurisdictions.
       */
      percentage: number;

      /**
       * [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2:US), without country prefix. For example, "NY" for New York, United States.
       */
      state: string | null;

      /**
       * The high-level tax type, such as `vat` or `sales_tax`.
       */
      tax_type: TaxRate.TaxType | null;
    }

    namespace TaxRate {
      type JurisdictionLevel =
        | 'city'
        | 'country'
        | 'county'
        | 'district'
        | 'multiple'
        | 'state';

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
