// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A Quote is a way to model prices that you'd like to provide to a customer.
     * Once accepted, it will automatically create an invoice, subscription or subscription schedule.
     */
    interface Quote {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'quote';

      /**
       * Total before any discounts or taxes are applied.
       */
      amount_subtotal: number;

      /**
       * Total after discounts and taxes are applied.
       */
      amount_total: number;

      /**
       * ID of the Connect Application that created the quote.
       */
      application:
        | string
        | Stripe.Application
        | Stripe.DeletedApplication
        | null;

      /**
       * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. Only applicable if there are no line items with recurring prices on the quote.
       */
      application_fee_amount: number | null;

      /**
       * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. Only applicable if there are line items with recurring prices on the quote.
       */
      application_fee_percent: number | null;

      automatic_tax: Quote.AutomaticTax;

      /**
       * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay invoices at the end of the subscription cycle or on finalization using the default payment method attached to the subscription or customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically`.
       */
      collection_method: Quote.CollectionMethod;

      computed: Quote.Computed;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string | null;

      /**
       * The customer which this quote belongs to. A customer is required before finalizing the quote. Once specified, it cannot be changed.
       */
      customer: string | Stripe.Customer | Stripe.DeletedCustomer | null;

      /**
       * The tax rates applied to this quote.
       */
      default_tax_rates?: Array<string | Stripe.TaxRate>;

      /**
       * A description that will be displayed on the quote PDF.
       */
      description: string | null;

      /**
       * The discounts applied to this quote.
       */
      discounts: Array<string | Stripe.Discount>;

      /**
       * The date on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch.
       */
      expires_at: number;

      /**
       * A footer that will be displayed on the quote PDF.
       */
      footer: string | null;

      /**
       * Details of the quote that was cloned. See the [cloning documentation](https://stripe.com/docs/quotes/clone) for more details.
       */
      from_quote: Quote.FromQuote | null;

      /**
       * A header that will be displayed on the quote PDF.
       */
      header: string | null;

      /**
       * The invoice that was created from this quote.
       */
      invoice: string | Stripe.Invoice | Stripe.DeletedInvoice | null;

      invoice_settings: Quote.InvoiceSettings;

      /**
       * A list of items the customer is being quoted for.
       */
      line_items?: ApiList<Stripe.LineItem>;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata;

      /**
       * A unique number that identifies this particular quote. This number is assigned once the quote is [finalized](https://stripe.com/docs/quotes/overview#finalize).
       */
      number: string | null;

      /**
       * The account on behalf of which to charge. See the [Connect documentation](https://support.stripe.com/questions/sending-invoices-on-behalf-of-connected-accounts) for details.
       */
      on_behalf_of: string | Stripe.Account | null;

      /**
       * The status of the quote.
       */
      status: Quote.Status;

      status_transitions: Quote.StatusTransitions;

      /**
       * The subscription that was created or updated from this quote.
       */
      subscription: string | Stripe.Subscription | null;

      subscription_data: Quote.SubscriptionData;

      /**
       * The subscription schedule that was created or updated from this quote.
       */
      subscription_schedule: string | Stripe.SubscriptionSchedule | null;

      /**
       * ID of the test clock this quote belongs to.
       */
      test_clock: string | Stripe.TestHelpers.TestClock | null;

      total_details: Quote.TotalDetails;

      /**
       * The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the invoices.
       */
      transfer_data: Quote.TransferData | null;
    }

    namespace Quote {
      interface AutomaticTax {
        /**
         * Automatically calculate taxes
         */
        enabled: boolean;

        /**
         * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
         */
        liability: AutomaticTax.Liability | null;

        /**
         * The status of the most recent automated tax calculation for this quote.
         */
        status: AutomaticTax.Status | null;
      }

      namespace AutomaticTax {
        interface Liability {
          /**
           * The connected account being referenced when `type` is `account`.
           */
          account?: string | Stripe.Account;

          /**
           * Type of the account referenced.
           */
          type: Liability.Type;
        }

        namespace Liability {
          type Type = 'account' | 'self';
        }

        type Status = 'complete' | 'failed' | 'requires_location_inputs';
      }

      type CollectionMethod = 'charge_automatically' | 'send_invoice';

      interface Computed {
        /**
         * The definitive totals and line items the customer will be charged on a recurring basis. Takes into account the line items with recurring prices and discounts with `duration=forever` coupons only. Defaults to `null` if no inputted line items with recurring prices.
         */
        recurring: Computed.Recurring | null;

        upfront: Computed.Upfront;
      }

      namespace Computed {
        interface Recurring {
          /**
           * Total before any discounts or taxes are applied.
           */
          amount_subtotal: number;

          /**
           * Total after discounts and taxes are applied.
           */
          amount_total: number;

          /**
           * The frequency at which a subscription is billed. One of `day`, `week`, `month` or `year`.
           */
          interval: Recurring.Interval;

          /**
           * The number of intervals (specified in the `interval` attribute) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months.
           */
          interval_count: number;

          total_details: Recurring.TotalDetails;
        }

        namespace Recurring {
          type Interval = 'day' | 'month' | 'week' | 'year';

          interface TotalDetails {
            /**
             * This is the sum of all the discounts.
             */
            amount_discount: number;

            /**
             * This is the sum of all the shipping amounts.
             */
            amount_shipping: number | null;

            /**
             * This is the sum of all the tax amounts.
             */
            amount_tax: number;

            breakdown?: TotalDetails.Breakdown;
          }

          namespace TotalDetails {
            interface Breakdown {
              /**
               * The aggregated discounts.
               */
              discounts: Array<Breakdown.Discount>;

              /**
               * The aggregated tax amounts by rate.
               */
              taxes: Array<Breakdown.Tax>;
            }

            namespace Breakdown {
              interface Discount {
                /**
                 * The amount discounted.
                 */
                amount: number;

                /**
                 * A discount represents the actual application of a [coupon](https://stripe.com/docs/api#coupons) or [promotion code](https://stripe.com/docs/api#promotion_codes).
                 * It contains information about when the discount began, when it will end, and what it is applied to.
                 *
                 * Related guide: [Applying discounts to subscriptions](https://stripe.com/docs/billing/subscriptions/discounts)
                 */
                discount: Stripe.Discount;
              }

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
          }
        }

        interface Upfront {
          /**
           * Total before any discounts or taxes are applied.
           */
          amount_subtotal: number;

          /**
           * Total after discounts and taxes are applied.
           */
          amount_total: number;

          /**
           * The line items that will appear on the next invoice after this quote is accepted. This does not include pending invoice items that exist on the customer but may still be included in the next invoice.
           */
          line_items?: ApiList<Stripe.LineItem>;

          total_details: Upfront.TotalDetails;
        }

        namespace Upfront {
          interface TotalDetails {
            /**
             * This is the sum of all the discounts.
             */
            amount_discount: number;

            /**
             * This is the sum of all the shipping amounts.
             */
            amount_shipping: number | null;

            /**
             * This is the sum of all the tax amounts.
             */
            amount_tax: number;

            breakdown?: TotalDetails.Breakdown;
          }

          namespace TotalDetails {
            interface Breakdown {
              /**
               * The aggregated discounts.
               */
              discounts: Array<Breakdown.Discount>;

              /**
               * The aggregated tax amounts by rate.
               */
              taxes: Array<Breakdown.Tax>;
            }

            namespace Breakdown {
              interface Discount {
                /**
                 * The amount discounted.
                 */
                amount: number;

                /**
                 * A discount represents the actual application of a [coupon](https://stripe.com/docs/api#coupons) or [promotion code](https://stripe.com/docs/api#promotion_codes).
                 * It contains information about when the discount began, when it will end, and what it is applied to.
                 *
                 * Related guide: [Applying discounts to subscriptions](https://stripe.com/docs/billing/subscriptions/discounts)
                 */
                discount: Stripe.Discount;
              }

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
          }
        }
      }

      interface FromQuote {
        /**
         * Whether this quote is a revision of a different quote.
         */
        is_revision: boolean;

        /**
         * The quote that was cloned.
         */
        quote: string | Stripe.Quote;
      }

      interface InvoiceSettings {
        /**
         * Number of days within which a customer must pay invoices generated by this quote. This value will be `null` for quotes where `collection_method=charge_automatically`.
         */
        days_until_due: number | null;

        issuer: InvoiceSettings.Issuer;
      }

      namespace InvoiceSettings {
        interface Issuer {
          /**
           * The connected account being referenced when `type` is `account`.
           */
          account?: string | Stripe.Account;

          /**
           * Type of the account referenced.
           */
          type: Issuer.Type;
        }

        namespace Issuer {
          type Type = 'account' | 'self';
        }
      }

      type Status = 'accepted' | 'canceled' | 'draft' | 'open';

      interface StatusTransitions {
        /**
         * The time that the quote was accepted. Measured in seconds since Unix epoch.
         */
        accepted_at: number | null;

        /**
         * The time that the quote was canceled. Measured in seconds since Unix epoch.
         */
        canceled_at: number | null;

        /**
         * The time that the quote was finalized. Measured in seconds since Unix epoch.
         */
        finalized_at: number | null;
      }

      interface SubscriptionData {
        /**
         * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
         */
        description: string | null;

        /**
         * When creating a new subscription, the date of which the subscription schedule will start after the quote is accepted. This date is ignored if it is in the past when the quote is accepted. Measured in seconds since the Unix epoch.
         */
        effective_date: number | null;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that will set metadata on the subscription or subscription schedule when the quote is accepted. If a recurring price is included in `line_items`, this field will be passed to the resulting subscription's `metadata` field. If `subscription_data.effective_date` is used, this field will be passed to the resulting subscription schedule's `phases.metadata` field. Unlike object-level metadata, this field is declarative. Updates will clear prior values.
         */
        metadata: Stripe.Metadata | null;

        /**
         * Integer representing the number of trial period days before the customer is charged for the first time.
         */
        trial_period_days: number | null;
      }

      interface TotalDetails {
        /**
         * This is the sum of all the discounts.
         */
        amount_discount: number;

        /**
         * This is the sum of all the shipping amounts.
         */
        amount_shipping: number | null;

        /**
         * This is the sum of all the tax amounts.
         */
        amount_tax: number;

        breakdown?: TotalDetails.Breakdown;
      }

      namespace TotalDetails {
        interface Breakdown {
          /**
           * The aggregated discounts.
           */
          discounts: Array<Breakdown.Discount>;

          /**
           * The aggregated tax amounts by rate.
           */
          taxes: Array<Breakdown.Tax>;
        }

        namespace Breakdown {
          interface Discount {
            /**
             * The amount discounted.
             */
            amount: number;

            /**
             * A discount represents the actual application of a [coupon](https://stripe.com/docs/api#coupons) or [promotion code](https://stripe.com/docs/api#promotion_codes).
             * It contains information about when the discount began, when it will end, and what it is applied to.
             *
             * Related guide: [Applying discounts to subscriptions](https://stripe.com/docs/billing/subscriptions/discounts)
             */
            discount: Stripe.Discount;
          }

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
      }

      interface TransferData {
        /**
         * The amount in cents (or local equivalent) that will be transferred to the destination account when the invoice is paid. By default, the entire amount is transferred to the destination.
         */
        amount: number | null;

        /**
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount will be transferred to the destination.
         */
        amount_percent: number | null;

        /**
         * The account where funds from the payment will be transferred to upon payment success.
         */
        destination: string | Stripe.Account;
      }
    }
  }
}
