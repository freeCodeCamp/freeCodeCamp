// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * This object represents a customer of your business. Use it to create recurring charges and track payments that belong to the same customer.
     *
     * Related guide: [Save a card during payment](https://stripe.com/docs/payments/save-during-payment)
     */
    interface Customer {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'customer';

      /**
       * The customer's address.
       */
      address?: Stripe.Address | null;

      /**
       * The current balance, if any, that's stored on the customer. If negative, the customer has credit to apply to their next invoice. If positive, the customer has an amount owed that's added to their next invoice. The balance only considers amounts that Stripe hasn't successfully applied to any invoice. It doesn't reflect unpaid invoices. This balance is only taken into account after invoices finalize.
       */
      balance: number;

      /**
       * The current funds being held by Stripe on behalf of the customer. You can apply these funds towards payment intents when the source is "cash_balance". The `settings[reconciliation_mode]` field describes if these funds apply to these payment intents manually or automatically.
       */
      cash_balance?: Stripe.CashBalance | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) the customer can be charged in for recurring billing purposes.
       */
      currency?: string | null;

      /**
       * ID of the default payment source for the customer.
       *
       * If you use payment methods created through the PaymentMethods API, see the [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) field instead.
       */
      default_source: string | Stripe.CustomerSource | null;

      /**
       * Always true for a deleted object
       */
      deleted?: void;

      /**
       * Tracks the most recent state change on any invoice belonging to the customer. Paying an invoice or marking it uncollectible via the API will set this field to false. An automatic payment failure or passing the `invoice.due_date` will set this field to `true`.
       *
       * If an invoice becomes uncollectible by [dunning](https://stripe.com/docs/billing/automatic-collection), `delinquent` doesn't reset to `false`.
       *
       * If you care whether the customer has paid their most recent subscription invoice, use `subscription.status` instead. Paying or marking uncollectible any customer invoice regardless of whether it is the latest invoice for a subscription will always set this field to `false`.
       */
      delinquent?: boolean | null;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description: string | null;

      /**
       * Describes the current discount active on the customer, if there is one.
       */
      discount?: Stripe.Discount | null;

      /**
       * The customer's email address.
       */
      email: string | null;

      /**
       * The current multi-currency balances, if any, that's stored on the customer. If positive in a currency, the customer has a credit to apply to their next invoice denominated in that currency. If negative, the customer has an amount owed that's added to their next invoice denominated in that currency. These balances don't apply to unpaid invoices. They solely track amounts that Stripe hasn't successfully applied to any invoice. Stripe only applies a balance in a specific currency to an invoice after that invoice (which is in the same currency) finalizes.
       */
      invoice_credit_balance?: {
        [key: string]: number;
      };

      /**
       * The prefix for the customer used to generate unique invoice numbers.
       */
      invoice_prefix?: string | null;

      invoice_settings: Customer.InvoiceSettings;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata;

      /**
       * The customer's full name or business name.
       */
      name?: string | null;

      /**
       * The suffix of the customer's next invoice number (for example, 0001). When the account uses account level sequencing, this parameter is ignored in API requests and the field omitted in API responses.
       */
      next_invoice_sequence?: number;

      /**
       * The customer's phone number.
       */
      phone?: string | null;

      /**
       * The customer's preferred locales (languages), ordered by preference.
       */
      preferred_locales?: Array<string> | null;

      /**
       * Mailing and shipping address for the customer. Appears on invoices emailed to this customer.
       */
      shipping: Customer.Shipping | null;

      /**
       * The customer's payment sources, if any.
       */
      sources?: ApiList<Stripe.CustomerSource>;

      /**
       * The customer's current subscriptions, if any.
       */
      subscriptions?: ApiList<Stripe.Subscription>;

      tax?: Customer.Tax;

      /**
       * Describes the customer's tax exemption status, which is `none`, `exempt`, or `reverse`. When set to `reverse`, invoice and receipt PDFs include the following text: **"Reverse charge"**.
       */
      tax_exempt?: Customer.TaxExempt | null;

      /**
       * The customer's tax IDs.
       */
      tax_ids?: ApiList<Stripe.TaxId>;

      /**
       * ID of the test clock that this customer belongs to.
       */
      test_clock?: string | Stripe.TestHelpers.TestClock | null;
    }

    namespace Customer {
      interface InvoiceSettings {
        /**
         * Default custom fields to be displayed on invoices for this customer.
         */
        custom_fields: Array<InvoiceSettings.CustomField> | null;

        /**
         * ID of a payment method that's attached to the customer, to be used as the customer's default payment method for subscriptions and invoices.
         */
        default_payment_method: string | Stripe.PaymentMethod | null;

        /**
         * Default footer to be displayed on invoices for this customer.
         */
        footer: string | null;

        /**
         * Default options for invoice PDF rendering for this customer.
         */
        rendering_options: InvoiceSettings.RenderingOptions | null;
      }

      namespace InvoiceSettings {
        interface CustomField {
          /**
           * The name of the custom field.
           */
          name: string;

          /**
           * The value of the custom field.
           */
          value: string;
        }

        interface RenderingOptions {
          /**
           * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs.
           */
          amount_tax_display: string | null;

          /**
           * ID of the invoice rendering template to be used for this customer's invoices. If set, the template will be used on all invoices for this customer unless a template is set directly on the invoice.
           */
          template: string | null;
        }
      }

      interface Shipping {
        address?: Stripe.Address;

        /**
         * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
         */
        carrier?: string | null;

        /**
         * Recipient name.
         */
        name?: string;

        /**
         * Recipient phone (including extension).
         */
        phone?: string | null;

        /**
         * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
         */
        tracking_number?: string | null;
      }

      interface Tax {
        /**
         * Surfaces if automatic tax computation is possible given the current customer location information.
         */
        automatic_tax: Tax.AutomaticTax;

        /**
         * A recent IP address of the customer used for tax reporting and tax location inference.
         */
        ip_address: string | null;

        /**
         * The customer's location as identified by Stripe Tax.
         */
        location: Tax.Location | null;
      }

      namespace Tax {
        type AutomaticTax =
          | 'failed'
          | 'not_collecting'
          | 'supported'
          | 'unrecognized_location';

        interface Location {
          /**
           * The customer's country as identified by Stripe Tax.
           */
          country: string;

          /**
           * The data source used to infer the customer's location.
           */
          source: Location.Source;

          /**
           * The customer's state, county, province, or region as identified by Stripe Tax.
           */
          state: string | null;
        }

        namespace Location {
          type Source =
            | 'billing_address'
            | 'ip_address'
            | 'payment_method'
            | 'shipping_destination';
        }
      }

      type TaxExempt = 'exempt' | 'none' | 'reverse';
    }

    /**
     * The DeletedCustomer object.
     */
    interface DeletedCustomer {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'customer';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }
  }
}
