// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface InvoiceItemCreateParams {
      /**
       * The ID of the customer who will be billed when this invoice item is billed.
       */
      customer: string;

      /**
       * The integer amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice. Passing in a negative `amount` will reduce the `amount_due` on the invoice.
       */
      amount?: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency?: string;

      /**
       * An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking.
       */
      description?: string;

      /**
       * Controls whether discounts apply to this invoice item. Defaults to false for prorations or negative invoice items, and true for all other invoice items.
       */
      discountable?: boolean;

      /**
       * The coupons and promotion codes to redeem into discounts for the invoice item or invoice line item.
       */
      discounts?: Stripe.Emptyable<Array<InvoiceItemCreateParams.Discount>>;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The ID of an existing invoice to add this invoice item to. When left blank, the invoice item will be added to the next upcoming scheduled invoice. This is useful when adding invoice items in response to an invoice.created webhook. You can only add invoice items to draft invoices and there is a maximum of 250 items per invoice.
       */
      invoice?: string;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * The period associated with this invoice item. When set to different values, the period will be rendered on the invoice. If you have [Stripe Revenue Recognition](https://stripe.com/docs/revenue-recognition) enabled, the period will be used to recognize and defer revenue. See the [Revenue Recognition documentation](https://stripe.com/docs/revenue-recognition/methodology/subscriptions-and-invoicing) for details.
       */
      period?: InvoiceItemCreateParams.Period;

      /**
       * The ID of the price object. One of `price` or `price_data` is required.
       */
      price?: string;

      /**
       * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline. One of `price` or `price_data` is required.
       */
      price_data?: InvoiceItemCreateParams.PriceData;

      /**
       * Non-negative integer. The quantity of units for the invoice item.
       */
      quantity?: number;

      /**
       * The ID of a subscription to add this invoice item to. When left blank, the invoice item is added to the next upcoming scheduled invoice. When set, scheduled invoices for subscriptions other than the specified subscription will ignore the invoice item. Use this when you want to express that an invoice item has been accrued within the context of a particular subscription.
       */
      subscription?: string;

      /**
       * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
       */
      tax_behavior?: InvoiceItemCreateParams.TaxBehavior;

      /**
       * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
       */
      tax_code?: Stripe.Emptyable<string>;

      /**
       * The tax rates which apply to the invoice item. When set, the `default_tax_rates` on the invoice do not apply to this invoice item.
       */
      tax_rates?: Array<string>;

      /**
       * The integer unit amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice. This `unit_amount` will be multiplied by the quantity to get the full amount. Passing in a negative `unit_amount` will reduce the `amount_due` on the invoice.
       */
      unit_amount?: number;

      /**
       * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
       */
      unit_amount_decimal?: string;
    }

    namespace InvoiceItemCreateParams {
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
        type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
      }

      type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
    }

    interface InvoiceItemRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface InvoiceItemUpdateParams {
      /**
       * The integer amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice. If you want to apply a credit to the customer's account, pass a negative amount.
       */
      amount?: number;

      /**
       * An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking.
       */
      description?: string;

      /**
       * Controls whether discounts apply to this invoice item. Defaults to false for prorations or negative invoice items, and true for all other invoice items. Cannot be set to true for prorations.
       */
      discountable?: boolean;

      /**
       * The coupons, promotion codes & existing discounts which apply to the invoice item or invoice line item. Item discounts are applied before invoice discounts. Pass an empty string to remove previously-defined discounts.
       */
      discounts?: Stripe.Emptyable<Array<InvoiceItemUpdateParams.Discount>>;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * The period associated with this invoice item. When set to different values, the period will be rendered on the invoice. If you have [Stripe Revenue Recognition](https://stripe.com/docs/revenue-recognition) enabled, the period will be used to recognize and defer revenue. See the [Revenue Recognition documentation](https://stripe.com/docs/revenue-recognition/methodology/subscriptions-and-invoicing) for details.
       */
      period?: InvoiceItemUpdateParams.Period;

      /**
       * The ID of the price object. One of `price` or `price_data` is required.
       */
      price?: string;

      /**
       * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline. One of `price` or `price_data` is required.
       */
      price_data?: InvoiceItemUpdateParams.PriceData;

      /**
       * Non-negative integer. The quantity of units for the invoice item.
       */
      quantity?: number;

      /**
       * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
       */
      tax_behavior?: InvoiceItemUpdateParams.TaxBehavior;

      /**
       * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
       */
      tax_code?: Stripe.Emptyable<string>;

      /**
       * The tax rates which apply to the invoice item. When set, the `default_tax_rates` on the invoice do not apply to this invoice item. Pass an empty string to remove previously-defined tax rates.
       */
      tax_rates?: Stripe.Emptyable<Array<string>>;

      /**
       * The integer unit amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice. This unit_amount will be multiplied by the quantity to get the full amount. If you want to apply a credit to the customer's account, pass a negative unit_amount.
       */
      unit_amount?: number;

      /**
       * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
       */
      unit_amount_decimal?: string;
    }

    namespace InvoiceItemUpdateParams {
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
        type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
      }

      type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
    }

    interface InvoiceItemListParams extends PaginationParams {
      /**
       * Only return invoice items that were created during the given date interval.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * The identifier of the customer whose invoice items to return. If none is provided, all invoice items will be returned.
       */
      customer?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return invoice items belonging to this invoice. If none is provided, all invoice items will be returned. If specifying an invoice, no customer identifier is needed.
       */
      invoice?: string;

      /**
       * Set to `true` to only show pending invoice items, which are not yet attached to any invoices. Set to `false` to only show invoice items already attached to invoices. If unspecified, no filter is applied.
       */
      pending?: boolean;
    }

    interface InvoiceItemDeleteParams {}

    class InvoiceItemsResource {
      /**
       * Creates an item to be added to a draft invoice (up to 250 items per invoice). If no invoice is specified, the item will be on the next invoice created for the customer specified.
       */
      create(
        params: InvoiceItemCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.InvoiceItem>>;

      /**
       * Retrieves the invoice item with the given ID.
       */
      retrieve(
        id: string,
        params?: InvoiceItemRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.InvoiceItem>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.InvoiceItem>>;

      /**
       * Updates the amount or description of an invoice item on an upcoming invoice. Updating an invoice item is only possible before the invoice it's attached to is closed.
       */
      update(
        id: string,
        params?: InvoiceItemUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.InvoiceItem>>;

      /**
       * Returns a list of your invoice items. Invoice items are returned sorted by creation date, with the most recently created invoice items appearing first.
       */
      list(
        params?: InvoiceItemListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.InvoiceItem>;
      list(options?: RequestOptions): ApiListPromise<Stripe.InvoiceItem>;

      /**
       * Deletes an invoice item, removing it from an invoice. Deleting invoice items is only possible when they're not attached to invoices, or if it's attached to a draft invoice.
       */
      del(
        id: string,
        params?: InvoiceItemDeleteParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedInvoiceItem>>;
      del(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedInvoiceItem>>;
    }
  }
}
