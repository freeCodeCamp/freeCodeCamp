// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface QuoteCreateParams {
      /**
       * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. There cannot be any line items with recurring prices when using this field.
       */
      application_fee_amount?: Stripe.Emptyable<number>;

      /**
       * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. There must be at least 1 line item with a recurring price to use this field.
       */
      application_fee_percent?: Stripe.Emptyable<number>;

      /**
       * Settings for automatic tax lookup for this quote and resulting invoices and subscriptions.
       */
      automatic_tax?: QuoteCreateParams.AutomaticTax;

      /**
       * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay invoices at the end of the subscription cycle or at invoice finalization using the default payment method attached to the subscription or customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically`.
       */
      collection_method?: QuoteCreateParams.CollectionMethod;

      /**
       * The customer for which this quote belongs to. A customer is required before finalizing the quote. Once specified, it cannot be changed.
       */
      customer?: string;

      /**
       * The tax rates that will apply to any line item that does not have `tax_rates` set.
       */
      default_tax_rates?: Stripe.Emptyable<Array<string>>;

      /**
       * A description that will be displayed on the quote PDF. If no value is passed, the default description configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
       */
      description?: Stripe.Emptyable<string>;

      /**
       * The discounts applied to the quote.
       */
      discounts?: Stripe.Emptyable<Array<QuoteCreateParams.Discount>>;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A future timestamp on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch. If no value is passed, the default expiration date configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
       */
      expires_at?: number;

      /**
       * A footer that will be displayed on the quote PDF. If no value is passed, the default footer configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
       */
      footer?: Stripe.Emptyable<string>;

      /**
       * Clone an existing quote. The new quote will be created in `status=draft`. When using this parameter, you cannot specify any other parameters except for `expires_at`.
       */
      from_quote?: QuoteCreateParams.FromQuote;

      /**
       * A header that will be displayed on the quote PDF. If no value is passed, the default header configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
       */
      header?: Stripe.Emptyable<string>;

      /**
       * All invoices will be billed using the specified settings.
       */
      invoice_settings?: QuoteCreateParams.InvoiceSettings;

      /**
       * A list of line items the customer is being quoted for. Each line item includes information about the product, the quantity, and the resulting cost.
       */
      line_items?: Array<QuoteCreateParams.LineItem>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * The account on behalf of which to charge.
       */
      on_behalf_of?: Stripe.Emptyable<string>;

      /**
       * When creating a subscription or subscription schedule, the specified configuration data will be used. There must be at least one line item with a recurring price for a subscription or subscription schedule to be created. A subscription schedule is created if `subscription_data[effective_date]` is present and in the future, otherwise a subscription is created.
       */
      subscription_data?: QuoteCreateParams.SubscriptionData;

      /**
       * ID of the test clock to attach to the quote.
       */
      test_clock?: string;

      /**
       * The data with which to automatically create a Transfer for each of the invoices.
       */
      transfer_data?: Stripe.Emptyable<QuoteCreateParams.TransferData>;
    }

    namespace QuoteCreateParams {
      interface AutomaticTax {
        /**
         * Controls whether Stripe will automatically compute tax on the resulting invoices or subscriptions as well as the quote itself.
         */
        enabled: boolean;

        /**
         * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
         */
        liability?: AutomaticTax.Liability;
      }

      namespace AutomaticTax {
        interface Liability {
          /**
           * The connected account being referenced when `type` is `account`.
           */
          account?: string;

          /**
           * Type of the account referenced in the request.
           */
          type: Liability.Type;
        }

        namespace Liability {
          type Type = 'account' | 'self';
        }
      }

      type CollectionMethod = 'charge_automatically' | 'send_invoice';

      interface Discount {
        /**
         * ID of the coupon to create a new discount for.
         */
        coupon?: string;

        /**
         * ID of an existing discount on the object (or one of its ancestors) to reuse.
         */
        discount?: string;

        /**
         * ID of the promotion code to create a new discount for.
         */
        promotion_code?: string;
      }

      interface FromQuote {
        /**
         * Whether this quote is a revision of the previous quote.
         */
        is_revision?: boolean;

        /**
         * The `id` of the quote that will be cloned.
         */
        quote: string;
      }

      interface InvoiceSettings {
        /**
         * Number of days within which a customer must pay the invoice generated by this quote. This value will be `null` for quotes where `collection_method=charge_automatically`.
         */
        days_until_due?: number;

        /**
         * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
         */
        issuer?: InvoiceSettings.Issuer;
      }

      namespace InvoiceSettings {
        interface Issuer {
          /**
           * The connected account being referenced when `type` is `account`.
           */
          account?: string;

          /**
           * Type of the account referenced in the request.
           */
          type: Issuer.Type;
        }

        namespace Issuer {
          type Type = 'account' | 'self';
        }
      }

      interface LineItem {
        /**
         * The discounts applied to this line item.
         */
        discounts?: Stripe.Emptyable<Array<LineItem.Discount>>;

        /**
         * The ID of the price object. One of `price` or `price_data` is required.
         */
        price?: string;

        /**
         * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline. One of `price` or `price_data` is required.
         */
        price_data?: LineItem.PriceData;

        /**
         * The quantity of the line item.
         */
        quantity?: number;

        /**
         * The tax rates which apply to the line item. When set, the `default_tax_rates` on the quote do not apply to this line item.
         */
        tax_rates?: Stripe.Emptyable<Array<string>>;
      }

      namespace LineItem {
        interface Discount {
          /**
           * ID of the coupon to create a new discount for.
           */
          coupon?: string;

          /**
           * ID of an existing discount on the object (or one of its ancestors) to reuse.
           */
          discount?: string;

          /**
           * ID of the promotion code to create a new discount for.
           */
          promotion_code?: string;
        }

        interface PriceData {
          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * The ID of the product that this price will belong to.
           */
          product: string;

          /**
           * The recurring components of a price such as `interval` and `interval_count`.
           */
          recurring?: PriceData.Recurring;

          /**
           * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
           */
          tax_behavior?: PriceData.TaxBehavior;

          /**
           * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
           */
          unit_amount?: number;

          /**
           * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
           */
          unit_amount_decimal?: string;
        }

        namespace PriceData {
          interface Recurring {
            /**
             * Specifies billing frequency. Either `day`, `week`, `month` or `year`.
             */
            interval: Recurring.Interval;

            /**
             * The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of three years interval allowed (3 years, 36 months, or 156 weeks).
             */
            interval_count?: number;
          }

          namespace Recurring {
            type Interval = 'day' | 'month' | 'week' | 'year';
          }

          type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
        }
      }

      interface SubscriptionData {
        /**
         * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
         */
        description?: string;

        /**
         * When creating a new subscription, the date of which the subscription schedule will start after the quote is accepted. When updating a subscription, the date of which the subscription will be updated using a subscription schedule. The special value `current_period_end` can be provided to update a subscription at the end of its current period. The `effective_date` is ignored if it is in the past when the quote is accepted.
         */
        effective_date?: Stripe.Emptyable<'current_period_end' | number>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that will set metadata on the subscription or subscription schedule when the quote is accepted. If a recurring price is included in `line_items`, this field will be passed to the resulting subscription's `metadata` field. If `subscription_data.effective_date` is used, this field will be passed to the resulting subscription schedule's `phases.metadata` field. Unlike object-level metadata, this field is declarative. Updates will clear prior values.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * Integer representing the number of trial period days before the customer is charged for the first time.
         */
        trial_period_days?: Stripe.Emptyable<number>;
      }

      interface TransferData {
        /**
         * The amount that will be transferred automatically when the invoice is paid. If no amount is set, the full amount is transferred. There cannot be any line items with recurring prices when using this field.
         */
        amount?: number;

        /**
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount is transferred to the destination. There must be at least 1 line item with a recurring price to use this field.
         */
        amount_percent?: number;

        /**
         * ID of an existing, connected Stripe account.
         */
        destination: string;
      }
    }

    interface QuoteRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface QuoteUpdateParams {
      /**
       * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. There cannot be any line items with recurring prices when using this field.
       */
      application_fee_amount?: Stripe.Emptyable<number>;

      /**
       * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. There must be at least 1 line item with a recurring price to use this field.
       */
      application_fee_percent?: Stripe.Emptyable<number>;

      /**
       * Settings for automatic tax lookup for this quote and resulting invoices and subscriptions.
       */
      automatic_tax?: QuoteUpdateParams.AutomaticTax;

      /**
       * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay invoices at the end of the subscription cycle or at invoice finalization using the default payment method attached to the subscription or customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically`.
       */
      collection_method?: QuoteUpdateParams.CollectionMethod;

      /**
       * The customer for which this quote belongs to. A customer is required before finalizing the quote. Once specified, it cannot be changed.
       */
      customer?: string;

      /**
       * The tax rates that will apply to any line item that does not have `tax_rates` set.
       */
      default_tax_rates?: Stripe.Emptyable<Array<string>>;

      /**
       * A description that will be displayed on the quote PDF.
       */
      description?: Stripe.Emptyable<string>;

      /**
       * The discounts applied to the quote.
       */
      discounts?: Stripe.Emptyable<Array<QuoteUpdateParams.Discount>>;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A future timestamp on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch.
       */
      expires_at?: number;

      /**
       * A footer that will be displayed on the quote PDF.
       */
      footer?: Stripe.Emptyable<string>;

      /**
       * A header that will be displayed on the quote PDF.
       */
      header?: Stripe.Emptyable<string>;

      /**
       * All invoices will be billed using the specified settings.
       */
      invoice_settings?: QuoteUpdateParams.InvoiceSettings;

      /**
       * A list of line items the customer is being quoted for. Each line item includes information about the product, the quantity, and the resulting cost.
       */
      line_items?: Array<QuoteUpdateParams.LineItem>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * The account on behalf of which to charge.
       */
      on_behalf_of?: Stripe.Emptyable<string>;

      /**
       * When creating a subscription or subscription schedule, the specified configuration data will be used. There must be at least one line item with a recurring price for a subscription or subscription schedule to be created. A subscription schedule is created if `subscription_data[effective_date]` is present and in the future, otherwise a subscription is created.
       */
      subscription_data?: QuoteUpdateParams.SubscriptionData;

      /**
       * The data with which to automatically create a Transfer for each of the invoices.
       */
      transfer_data?: Stripe.Emptyable<QuoteUpdateParams.TransferData>;
    }

    namespace QuoteUpdateParams {
      interface AutomaticTax {
        /**
         * Controls whether Stripe will automatically compute tax on the resulting invoices or subscriptions as well as the quote itself.
         */
        enabled: boolean;

        /**
         * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
         */
        liability?: AutomaticTax.Liability;
      }

      namespace AutomaticTax {
        interface Liability {
          /**
           * The connected account being referenced when `type` is `account`.
           */
          account?: string;

          /**
           * Type of the account referenced in the request.
           */
          type: Liability.Type;
        }

        namespace Liability {
          type Type = 'account' | 'self';
        }
      }

      type CollectionMethod = 'charge_automatically' | 'send_invoice';

      interface Discount {
        /**
         * ID of the coupon to create a new discount for.
         */
        coupon?: string;

        /**
         * ID of an existing discount on the object (or one of its ancestors) to reuse.
         */
        discount?: string;

        /**
         * ID of the promotion code to create a new discount for.
         */
        promotion_code?: string;
      }

      interface InvoiceSettings {
        /**
         * Number of days within which a customer must pay the invoice generated by this quote. This value will be `null` for quotes where `collection_method=charge_automatically`.
         */
        days_until_due?: number;

        /**
         * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
         */
        issuer?: InvoiceSettings.Issuer;
      }

      namespace InvoiceSettings {
        interface Issuer {
          /**
           * The connected account being referenced when `type` is `account`.
           */
          account?: string;

          /**
           * Type of the account referenced in the request.
           */
          type: Issuer.Type;
        }

        namespace Issuer {
          type Type = 'account' | 'self';
        }
      }

      interface LineItem {
        /**
         * The discounts applied to this line item.
         */
        discounts?: Stripe.Emptyable<Array<LineItem.Discount>>;

        /**
         * The ID of an existing line item on the quote.
         */
        id?: string;

        /**
         * The ID of the price object. One of `price` or `price_data` is required.
         */
        price?: string;

        /**
         * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline. One of `price` or `price_data` is required.
         */
        price_data?: LineItem.PriceData;

        /**
         * The quantity of the line item.
         */
        quantity?: number;

        /**
         * The tax rates which apply to the line item. When set, the `default_tax_rates` on the quote do not apply to this line item.
         */
        tax_rates?: Stripe.Emptyable<Array<string>>;
      }

      namespace LineItem {
        interface Discount {
          /**
           * ID of the coupon to create a new discount for.
           */
          coupon?: string;

          /**
           * ID of an existing discount on the object (or one of its ancestors) to reuse.
           */
          discount?: string;

          /**
           * ID of the promotion code to create a new discount for.
           */
          promotion_code?: string;
        }

        interface PriceData {
          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * The ID of the product that this price will belong to.
           */
          product: string;

          /**
           * The recurring components of a price such as `interval` and `interval_count`.
           */
          recurring?: PriceData.Recurring;

          /**
           * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
           */
          tax_behavior?: PriceData.TaxBehavior;

          /**
           * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
           */
          unit_amount?: number;

          /**
           * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
           */
          unit_amount_decimal?: string;
        }

        namespace PriceData {
          interface Recurring {
            /**
             * Specifies billing frequency. Either `day`, `week`, `month` or `year`.
             */
            interval: Recurring.Interval;

            /**
             * The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of three years interval allowed (3 years, 36 months, or 156 weeks).
             */
            interval_count?: number;
          }

          namespace Recurring {
            type Interval = 'day' | 'month' | 'week' | 'year';
          }

          type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
        }
      }

      interface SubscriptionData {
        /**
         * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
         */
        description?: Stripe.Emptyable<string>;

        /**
         * When creating a new subscription, the date of which the subscription schedule will start after the quote is accepted. When updating a subscription, the date of which the subscription will be updated using a subscription schedule. The special value `current_period_end` can be provided to update a subscription at the end of its current period. The `effective_date` is ignored if it is in the past when the quote is accepted.
         */
        effective_date?: Stripe.Emptyable<'current_period_end' | number>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that will set metadata on the subscription or subscription schedule when the quote is accepted. If a recurring price is included in `line_items`, this field will be passed to the resulting subscription's `metadata` field. If `subscription_data.effective_date` is used, this field will be passed to the resulting subscription schedule's `phases.metadata` field. Unlike object-level metadata, this field is declarative. Updates will clear prior values.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * Integer representing the number of trial period days before the customer is charged for the first time.
         */
        trial_period_days?: Stripe.Emptyable<number>;
      }

      interface TransferData {
        /**
         * The amount that will be transferred automatically when the invoice is paid. If no amount is set, the full amount is transferred. There cannot be any line items with recurring prices when using this field.
         */
        amount?: number;

        /**
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount is transferred to the destination. There must be at least 1 line item with a recurring price to use this field.
         */
        amount_percent?: number;

        /**
         * ID of an existing, connected Stripe account.
         */
        destination: string;
      }
    }

    interface QuoteListParams extends PaginationParams {
      /**
       * The ID of the customer whose quotes will be retrieved.
       */
      customer?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The status of the quote.
       */
      status?: QuoteListParams.Status;

      /**
       * Provides a list of quotes that are associated with the specified test clock. The response will not include quotes with test clocks if this and the customer parameter is not set.
       */
      test_clock?: string;
    }

    namespace QuoteListParams {
      type Status = 'accepted' | 'canceled' | 'draft' | 'open';
    }

    interface QuoteAcceptParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface QuoteCancelParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface QuoteFinalizeQuoteParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A future timestamp on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch.
       */
      expires_at?: number;
    }

    interface QuoteListComputedUpfrontLineItemsParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface QuoteListLineItemsParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface QuotePdfParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class QuotesResource {
      /**
       * A quote models prices and services for a customer. Default options for header, description, footer, and expires_at can be set in the dashboard via the [quote template](https://dashboard.stripe.com/settings/billing/quote).
       */
      create(
        params?: QuoteCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Quote>>;
      create(options?: RequestOptions): Promise<Stripe.Response<Stripe.Quote>>;

      /**
       * Retrieves the quote with the given ID.
       */
      retrieve(
        id: string,
        params?: QuoteRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Quote>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Quote>>;

      /**
       * A quote models prices and services for a customer.
       */
      update(
        id: string,
        params?: QuoteUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Quote>>;

      /**
       * Returns a list of your quotes.
       */
      list(
        params?: QuoteListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Quote>;
      list(options?: RequestOptions): ApiListPromise<Stripe.Quote>;

      /**
       * Accepts the specified quote.
       */
      accept(
        id: string,
        params?: QuoteAcceptParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Quote>>;
      accept(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Quote>>;

      /**
       * Cancels the quote.
       */
      cancel(
        id: string,
        params?: QuoteCancelParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Quote>>;
      cancel(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Quote>>;

      /**
       * Finalizes the quote.
       */
      finalizeQuote(
        id: string,
        params?: QuoteFinalizeQuoteParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Quote>>;
      finalizeQuote(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Quote>>;

      /**
       * When retrieving a quote, there is an includable [computed.upfront.line_items](https://stripe.com/docs/api/quotes/object#quote_object-computed-upfront-line_items) property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of upfront line items.
       */
      listComputedUpfrontLineItems(
        id: string,
        params?: QuoteListComputedUpfrontLineItemsParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.LineItem>;
      listComputedUpfrontLineItems(
        id: string,
        options?: RequestOptions
      ): ApiListPromise<Stripe.LineItem>;

      /**
       * When retrieving a quote, there is an includable line_items property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.
       */
      listLineItems(
        id: string,
        params?: QuoteListLineItemsParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.LineItem>;
      listLineItems(
        id: string,
        options?: RequestOptions
      ): ApiListPromise<Stripe.LineItem>;

      /**
       * Download the PDF for a finalized quote. Explanation for special handling can be found [here](https://docs.stripe.com/quotes/overview#quote_pdf)
       */
      pdf(
        id: string,
        params?: QuotePdfParams,
        options?: RequestOptions
      ): Promise<StripeStreamResponse>;
      pdf(id: string, options?: RequestOptions): Promise<StripeStreamResponse>;
    }
  }
}
