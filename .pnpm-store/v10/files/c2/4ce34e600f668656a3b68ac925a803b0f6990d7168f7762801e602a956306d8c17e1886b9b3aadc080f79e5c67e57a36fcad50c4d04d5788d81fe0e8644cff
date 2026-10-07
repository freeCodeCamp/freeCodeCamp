// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface SubscriptionScheduleCreateParams {
      /**
       * The identifier of the customer to create the subscription schedule for.
       */
      customer?: string;

      /**
       * Object representing the subscription schedule's default settings.
       */
      default_settings?: SubscriptionScheduleCreateParams.DefaultSettings;

      /**
       * Behavior of the subscription schedule and underlying subscription when it ends. Possible values are `release` or `cancel` with the default being `release`. `release` will end the subscription schedule and keep the underlying subscription running. `cancel` will end the subscription schedule and cancel the underlying subscription.
       */
      end_behavior?: SubscriptionScheduleCreateParams.EndBehavior;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Migrate an existing subscription to be managed by a subscription schedule. If this parameter is set, a subscription schedule will be created using the subscription's item(s), set to auto-renew using the subscription's interval. When using this parameter, other parameters (such as phase values) cannot be set. To create a subscription schedule with other modifications, we recommend making two separate API calls.
       */
      from_subscription?: string;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * List representing phases of the subscription schedule. Each phase can be customized to have different durations, plans, and coupons. If there are multiple phases, the `end_date` of one phase will always equal the `start_date` of the next phase.
       */
      phases?: Array<SubscriptionScheduleCreateParams.Phase>;

      /**
       * When the subscription schedule starts. We recommend using `now` so that it starts the subscription immediately. You can also use a Unix timestamp to backdate the subscription so that it starts on a past date, or set a future date for the subscription to start on.
       */
      start_date?: number | 'now';
    }

    namespace SubscriptionScheduleCreateParams {
      interface DefaultSettings {
        /**
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. The request must be made by a platform account on a connected account in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
         */
        application_fee_percent?: number;

        /**
         * Default settings for automatic tax computation.
         */
        automatic_tax?: DefaultSettings.AutomaticTax;

        /**
         * Can be set to `phase_start` to set the anchor to the start of the phase or `automatic` to automatically change it if needed. Cannot be set to `phase_start` if this phase specifies a trial. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
         */
        billing_cycle_anchor?: DefaultSettings.BillingCycleAnchor;

        /**
         * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. Pass an empty string to remove previously-defined thresholds.
         */
        billing_thresholds?: Stripe.Emptyable<
          DefaultSettings.BillingThresholds
        >;

        /**
         * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically` on creation.
         */
        collection_method?: DefaultSettings.CollectionMethod;

        /**
         * ID of the default payment method for the subscription schedule. It must belong to the customer associated with the subscription schedule. If not set, invoices will use the default payment method in the customer's invoice settings.
         */
        default_payment_method?: string;

        /**
         * Subscription description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
         */
        description?: Stripe.Emptyable<string>;

        /**
         * All invoices will be billed using the specified settings.
         */
        invoice_settings?: DefaultSettings.InvoiceSettings;

        /**
         * The account on behalf of which to charge, for each of the associated subscription's invoices.
         */
        on_behalf_of?: Stripe.Emptyable<string>;

        /**
         * The data with which to automatically create a Transfer for each of the associated subscription's invoices.
         */
        transfer_data?: Stripe.Emptyable<DefaultSettings.TransferData>;
      }

      namespace DefaultSettings {
        interface AutomaticTax {
          /**
           * Enabled automatic tax calculation which will automatically compute tax rates on all invoices generated by the subscription.
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

        type BillingCycleAnchor = 'automatic' | 'phase_start';

        interface BillingThresholds {
          /**
           * Monetary threshold that triggers the subscription to advance to a new billing period
           */
          amount_gte?: number;

          /**
           * Indicates if the `billing_cycle_anchor` should be reset when a threshold is reached. If true, `billing_cycle_anchor` will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged.
           */
          reset_billing_cycle_anchor?: boolean;
        }

        type CollectionMethod = 'charge_automatically' | 'send_invoice';

        interface InvoiceSettings {
          /**
           * The account tax IDs associated with the subscription schedule. Will be set on invoices generated by the subscription schedule.
           */
          account_tax_ids?: Stripe.Emptyable<Array<string>>;

          /**
           * Number of days within which a customer must pay invoices generated by this subscription schedule. This value will be `null` for subscription schedules where `collection_method=charge_automatically`.
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

        interface TransferData {
          /**
           * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
           */
          amount_percent?: number;

          /**
           * ID of an existing, connected Stripe account.
           */
          destination: string;
        }
      }

      type EndBehavior = 'cancel' | 'none' | 'release' | 'renew';

      interface Phase {
        /**
         * A list of prices and quantities that will generate invoice items appended to the next invoice for this phase. You may pass up to 20 items.
         */
        add_invoice_items?: Array<Phase.AddInvoiceItem>;

        /**
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. The request must be made by a platform account on a connected account in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
         */
        application_fee_percent?: number;

        /**
         * Automatic tax settings for this phase.
         */
        automatic_tax?: Phase.AutomaticTax;

        /**
         * Can be set to `phase_start` to set the anchor to the start of the phase or `automatic` to automatically change it if needed. Cannot be set to `phase_start` if this phase specifies a trial. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
         */
        billing_cycle_anchor?: Phase.BillingCycleAnchor;

        /**
         * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. Pass an empty string to remove previously-defined thresholds.
         */
        billing_thresholds?: Stripe.Emptyable<Phase.BillingThresholds>;

        /**
         * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically` on creation.
         */
        collection_method?: Phase.CollectionMethod;

        /**
         * The ID of the coupon to apply to this phase of the subscription schedule. This field has been deprecated and will be removed in a future API version. Use `discounts` instead.
         */
        coupon?: string;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency?: string;

        /**
         * ID of the default payment method for the subscription schedule. It must belong to the customer associated with the subscription schedule. If not set, invoices will use the default payment method in the customer's invoice settings.
         */
        default_payment_method?: string;

        /**
         * A list of [Tax Rate](https://stripe.com/docs/api/tax_rates) ids. These Tax Rates will set the Subscription's [`default_tax_rates`](https://stripe.com/docs/api/subscriptions/create#create_subscription-default_tax_rates), which means they will be the Invoice's [`default_tax_rates`](https://stripe.com/docs/api/invoices/create#create_invoice-default_tax_rates) for any Invoices issued by the Subscription during this Phase.
         */
        default_tax_rates?: Stripe.Emptyable<Array<string>>;

        /**
         * Subscription description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
         */
        description?: Stripe.Emptyable<string>;

        /**
         * The coupons to redeem into discounts for the schedule phase. If not specified, inherits the discount from the subscription's customer. Pass an empty string to avoid inheriting any discounts.
         */
        discounts?: Stripe.Emptyable<Array<Phase.Discount>>;

        /**
         * The date at which this phase of the subscription schedule ends. If set, `iterations` must not be set.
         */
        end_date?: number;

        /**
         * All invoices will be billed using the specified settings.
         */
        invoice_settings?: Phase.InvoiceSettings;

        /**
         * List of configuration items, each with an attached price, to apply during this phase of the subscription schedule.
         */
        items: Array<Phase.Item>;

        /**
         * Integer representing the multiplier applied to the price interval. For example, `iterations=2` applied to a price with `interval=month` and `interval_count=3` results in a phase of duration `2 * 3 months = 6 months`. If set, `end_date` must not be set.
         */
        iterations?: number;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to a phase. Metadata on a schedule's phase will update the underlying subscription's `metadata` when the phase is entered, adding new keys and replacing existing keys in the subscription's `metadata`. Individual keys in the subscription's `metadata` can be unset by posting an empty value to them in the phase's `metadata`. To unset all keys in the subscription's `metadata`, update the subscription directly or unset every key individually from the phase's `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * The account on behalf of which to charge, for each of the associated subscription's invoices.
         */
        on_behalf_of?: string;

        /**
         * Whether the subscription schedule will create [prorations](https://stripe.com/docs/billing/subscriptions/prorations) when transitioning to this phase. The default value is `create_prorations`. This setting controls prorations when a phase is started asynchronously and it is persisted as a field on the phase. It's different from the request-level [proration_behavior](https://stripe.com/docs/api/subscription_schedules/update#update_subscription_schedule-proration_behavior) parameter which controls what happens if the update request affects the billing configuration of the current phase.
         */
        proration_behavior?: Phase.ProrationBehavior;

        /**
         * The data with which to automatically create a Transfer for each of the associated subscription's invoices.
         */
        transfer_data?: Phase.TransferData;

        /**
         * If set to true the entire phase is counted as a trial and the customer will not be charged for any fees.
         */
        trial?: boolean;

        /**
         * Sets the phase to trialing from the start date to this date. Must be before the phase end date, can not be combined with `trial`
         */
        trial_end?: number;
      }

      namespace Phase {
        interface AddInvoiceItem {
          /**
           * The coupons to redeem into discounts for the item.
           */
          discounts?: Array<AddInvoiceItem.Discount>;

          /**
           * The ID of the price object. One of `price` or `price_data` is required.
           */
          price?: string;

          /**
           * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline. One of `price` or `price_data` is required.
           */
          price_data?: AddInvoiceItem.PriceData;

          /**
           * Quantity for this item. Defaults to 1.
           */
          quantity?: number;

          /**
           * The tax rates which apply to the item. When set, the `default_tax_rates` do not apply to this item.
           */
          tax_rates?: Stripe.Emptyable<Array<string>>;
        }

        namespace AddInvoiceItem {
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
             * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: PriceData.TaxBehavior;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge or a negative integer representing the amount to credit to the customer.
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
        }

        interface AutomaticTax {
          /**
           * Enabled automatic tax calculation which will automatically compute tax rates on all invoices generated by the subscription.
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

        type BillingCycleAnchor = 'automatic' | 'phase_start';

        interface BillingThresholds {
          /**
           * Monetary threshold that triggers the subscription to advance to a new billing period
           */
          amount_gte?: number;

          /**
           * Indicates if the `billing_cycle_anchor` should be reset when a threshold is reached. If true, `billing_cycle_anchor` will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged.
           */
          reset_billing_cycle_anchor?: boolean;
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
           * The account tax IDs associated with this phase of the subscription schedule. Will be set on invoices generated by this phase of the subscription schedule.
           */
          account_tax_ids?: Stripe.Emptyable<Array<string>>;

          /**
           * Number of days within which a customer must pay invoices generated by this subscription schedule. This value will be `null` for subscription schedules where `billing=charge_automatically`.
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

        interface Item {
          /**
           * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. When updating, pass an empty string to remove previously-defined thresholds.
           */
          billing_thresholds?: Stripe.Emptyable<Item.BillingThresholds>;

          /**
           * The coupons to redeem into discounts for the subscription item.
           */
          discounts?: Stripe.Emptyable<Array<Item.Discount>>;

          /**
           * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to a configuration item. Metadata on a configuration item will update the underlying subscription item's `metadata` when the phase is entered, adding new keys and replacing existing keys. Individual keys in the subscription item's `metadata` can be unset by posting an empty value to them in the configuration item's `metadata`. To unset all keys in the subscription item's `metadata`, update the subscription item directly or unset every key individually from the configuration item's `metadata`.
           */
          metadata?: Stripe.MetadataParam;

          /**
           * The plan ID to subscribe to. You may specify the same ID in `plan` and `price`.
           */
          plan?: string;

          /**
           * The ID of the price object.
           */
          price?: string;

          /**
           * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
           */
          price_data?: Item.PriceData;

          /**
           * Quantity for the given price. Can be set only if the price's `usage_type` is `licensed` and not `metered`.
           */
          quantity?: number;

          /**
           * A list of [Tax Rate](https://stripe.com/docs/api/tax_rates) ids. These Tax Rates will override the [`default_tax_rates`](https://stripe.com/docs/api/subscriptions/create#create_subscription-default_tax_rates) on the Subscription. When updating, pass an empty string to remove previously-defined tax rates.
           */
          tax_rates?: Stripe.Emptyable<Array<string>>;
        }

        namespace Item {
          interface BillingThresholds {
            /**
             * Number of units that meets the billing threshold to advance the subscription to a new billing period (e.g., it takes 10 $5 units to meet a $50 [monetary threshold](https://stripe.com/docs/api/subscriptions/update#update_subscription-billing_thresholds-amount_gte))
             */
            usage_gte: number;
          }

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
            recurring: PriceData.Recurring;

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

        type ProrationBehavior =
          | 'always_invoice'
          | 'create_prorations'
          | 'none';

        interface TransferData {
          /**
           * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
           */
          amount_percent?: number;

          /**
           * ID of an existing, connected Stripe account.
           */
          destination: string;
        }
      }
    }

    interface SubscriptionScheduleRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface SubscriptionScheduleUpdateParams {
      /**
       * Object representing the subscription schedule's default settings.
       */
      default_settings?: SubscriptionScheduleUpdateParams.DefaultSettings;

      /**
       * Behavior of the subscription schedule and underlying subscription when it ends. Possible values are `release` or `cancel` with the default being `release`. `release` will end the subscription schedule and keep the underlying subscription running. `cancel` will end the subscription schedule and cancel the underlying subscription.
       */
      end_behavior?: SubscriptionScheduleUpdateParams.EndBehavior;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * List representing phases of the subscription schedule. Each phase can be customized to have different durations, plans, and coupons. If there are multiple phases, the `end_date` of one phase will always equal the `start_date` of the next phase. Note that past phases can be omitted.
       */
      phases?: Array<SubscriptionScheduleUpdateParams.Phase>;

      /**
       * If the update changes the current phase, indicates whether the changes should be prorated. The default value is `create_prorations`.
       */
      proration_behavior?: SubscriptionScheduleUpdateParams.ProrationBehavior;
    }

    namespace SubscriptionScheduleUpdateParams {
      interface DefaultSettings {
        /**
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. The request must be made by a platform account on a connected account in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
         */
        application_fee_percent?: number;

        /**
         * Default settings for automatic tax computation.
         */
        automatic_tax?: DefaultSettings.AutomaticTax;

        /**
         * Can be set to `phase_start` to set the anchor to the start of the phase or `automatic` to automatically change it if needed. Cannot be set to `phase_start` if this phase specifies a trial. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
         */
        billing_cycle_anchor?: DefaultSettings.BillingCycleAnchor;

        /**
         * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. Pass an empty string to remove previously-defined thresholds.
         */
        billing_thresholds?: Stripe.Emptyable<
          DefaultSettings.BillingThresholds
        >;

        /**
         * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically` on creation.
         */
        collection_method?: DefaultSettings.CollectionMethod;

        /**
         * ID of the default payment method for the subscription schedule. It must belong to the customer associated with the subscription schedule. If not set, invoices will use the default payment method in the customer's invoice settings.
         */
        default_payment_method?: string;

        /**
         * Subscription description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
         */
        description?: Stripe.Emptyable<string>;

        /**
         * All invoices will be billed using the specified settings.
         */
        invoice_settings?: DefaultSettings.InvoiceSettings;

        /**
         * The account on behalf of which to charge, for each of the associated subscription's invoices.
         */
        on_behalf_of?: Stripe.Emptyable<string>;

        /**
         * The data with which to automatically create a Transfer for each of the associated subscription's invoices.
         */
        transfer_data?: Stripe.Emptyable<DefaultSettings.TransferData>;
      }

      namespace DefaultSettings {
        interface AutomaticTax {
          /**
           * Enabled automatic tax calculation which will automatically compute tax rates on all invoices generated by the subscription.
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

        type BillingCycleAnchor = 'automatic' | 'phase_start';

        interface BillingThresholds {
          /**
           * Monetary threshold that triggers the subscription to advance to a new billing period
           */
          amount_gte?: number;

          /**
           * Indicates if the `billing_cycle_anchor` should be reset when a threshold is reached. If true, `billing_cycle_anchor` will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged.
           */
          reset_billing_cycle_anchor?: boolean;
        }

        type CollectionMethod = 'charge_automatically' | 'send_invoice';

        interface InvoiceSettings {
          /**
           * The account tax IDs associated with the subscription schedule. Will be set on invoices generated by the subscription schedule.
           */
          account_tax_ids?: Stripe.Emptyable<Array<string>>;

          /**
           * Number of days within which a customer must pay invoices generated by this subscription schedule. This value will be `null` for subscription schedules where `collection_method=charge_automatically`.
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

        interface TransferData {
          /**
           * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
           */
          amount_percent?: number;

          /**
           * ID of an existing, connected Stripe account.
           */
          destination: string;
        }
      }

      type EndBehavior = 'cancel' | 'none' | 'release' | 'renew';

      interface Phase {
        /**
         * A list of prices and quantities that will generate invoice items appended to the next invoice for this phase. You may pass up to 20 items.
         */
        add_invoice_items?: Array<Phase.AddInvoiceItem>;

        /**
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. The request must be made by a platform account on a connected account in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
         */
        application_fee_percent?: number;

        /**
         * Automatic tax settings for this phase.
         */
        automatic_tax?: Phase.AutomaticTax;

        /**
         * Can be set to `phase_start` to set the anchor to the start of the phase or `automatic` to automatically change it if needed. Cannot be set to `phase_start` if this phase specifies a trial. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
         */
        billing_cycle_anchor?: Phase.BillingCycleAnchor;

        /**
         * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. Pass an empty string to remove previously-defined thresholds.
         */
        billing_thresholds?: Stripe.Emptyable<Phase.BillingThresholds>;

        /**
         * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically` on creation.
         */
        collection_method?: Phase.CollectionMethod;

        /**
         * The ID of the coupon to apply to this phase of the subscription schedule. This field has been deprecated and will be removed in a future API version. Use `discounts` instead.
         */
        coupon?: string;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency?: string;

        /**
         * ID of the default payment method for the subscription schedule. It must belong to the customer associated with the subscription schedule. If not set, invoices will use the default payment method in the customer's invoice settings.
         */
        default_payment_method?: string;

        /**
         * A list of [Tax Rate](https://stripe.com/docs/api/tax_rates) ids. These Tax Rates will set the Subscription's [`default_tax_rates`](https://stripe.com/docs/api/subscriptions/create#create_subscription-default_tax_rates), which means they will be the Invoice's [`default_tax_rates`](https://stripe.com/docs/api/invoices/create#create_invoice-default_tax_rates) for any Invoices issued by the Subscription during this Phase.
         */
        default_tax_rates?: Stripe.Emptyable<Array<string>>;

        /**
         * Subscription description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
         */
        description?: Stripe.Emptyable<string>;

        /**
         * The coupons to redeem into discounts for the schedule phase. If not specified, inherits the discount from the subscription's customer. Pass an empty string to avoid inheriting any discounts.
         */
        discounts?: Stripe.Emptyable<Array<Phase.Discount>>;

        /**
         * The date at which this phase of the subscription schedule ends. If set, `iterations` must not be set.
         */
        end_date?: number | 'now';

        /**
         * All invoices will be billed using the specified settings.
         */
        invoice_settings?: Phase.InvoiceSettings;

        /**
         * List of configuration items, each with an attached price, to apply during this phase of the subscription schedule.
         */
        items: Array<Phase.Item>;

        /**
         * Integer representing the multiplier applied to the price interval. For example, `iterations=2` applied to a price with `interval=month` and `interval_count=3` results in a phase of duration `2 * 3 months = 6 months`. If set, `end_date` must not be set.
         */
        iterations?: number;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to a phase. Metadata on a schedule's phase will update the underlying subscription's `metadata` when the phase is entered, adding new keys and replacing existing keys in the subscription's `metadata`. Individual keys in the subscription's `metadata` can be unset by posting an empty value to them in the phase's `metadata`. To unset all keys in the subscription's `metadata`, update the subscription directly or unset every key individually from the phase's `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * The account on behalf of which to charge, for each of the associated subscription's invoices.
         */
        on_behalf_of?: string;

        /**
         * Whether the subscription schedule will create [prorations](https://stripe.com/docs/billing/subscriptions/prorations) when transitioning to this phase. The default value is `create_prorations`. This setting controls prorations when a phase is started asynchronously and it is persisted as a field on the phase. It's different from the request-level [proration_behavior](https://stripe.com/docs/api/subscription_schedules/update#update_subscription_schedule-proration_behavior) parameter which controls what happens if the update request affects the billing configuration of the current phase.
         */
        proration_behavior?: Phase.ProrationBehavior;

        /**
         * The date at which this phase of the subscription schedule starts or `now`. Must be set on the first phase.
         */
        start_date?: number | 'now';

        /**
         * The data with which to automatically create a Transfer for each of the associated subscription's invoices.
         */
        transfer_data?: Phase.TransferData;

        /**
         * If set to true the entire phase is counted as a trial and the customer will not be charged for any fees.
         */
        trial?: boolean;

        /**
         * Sets the phase to trialing from the start date to this date. Must be before the phase end date, can not be combined with `trial`
         */
        trial_end?: number | 'now';
      }

      namespace Phase {
        interface AddInvoiceItem {
          /**
           * The coupons to redeem into discounts for the item.
           */
          discounts?: Array<AddInvoiceItem.Discount>;

          /**
           * The ID of the price object. One of `price` or `price_data` is required.
           */
          price?: string;

          /**
           * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline. One of `price` or `price_data` is required.
           */
          price_data?: AddInvoiceItem.PriceData;

          /**
           * Quantity for this item. Defaults to 1.
           */
          quantity?: number;

          /**
           * The tax rates which apply to the item. When set, the `default_tax_rates` do not apply to this item.
           */
          tax_rates?: Stripe.Emptyable<Array<string>>;
        }

        namespace AddInvoiceItem {
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
             * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
             */
            tax_behavior?: PriceData.TaxBehavior;

            /**
             * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge or a negative integer representing the amount to credit to the customer.
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
        }

        interface AutomaticTax {
          /**
           * Enabled automatic tax calculation which will automatically compute tax rates on all invoices generated by the subscription.
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

        type BillingCycleAnchor = 'automatic' | 'phase_start';

        interface BillingThresholds {
          /**
           * Monetary threshold that triggers the subscription to advance to a new billing period
           */
          amount_gte?: number;

          /**
           * Indicates if the `billing_cycle_anchor` should be reset when a threshold is reached. If true, `billing_cycle_anchor` will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged.
           */
          reset_billing_cycle_anchor?: boolean;
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
           * The account tax IDs associated with this phase of the subscription schedule. Will be set on invoices generated by this phase of the subscription schedule.
           */
          account_tax_ids?: Stripe.Emptyable<Array<string>>;

          /**
           * Number of days within which a customer must pay invoices generated by this subscription schedule. This value will be `null` for subscription schedules where `billing=charge_automatically`.
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

        interface Item {
          /**
           * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. When updating, pass an empty string to remove previously-defined thresholds.
           */
          billing_thresholds?: Stripe.Emptyable<Item.BillingThresholds>;

          /**
           * The coupons to redeem into discounts for the subscription item.
           */
          discounts?: Stripe.Emptyable<Array<Item.Discount>>;

          /**
           * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to a configuration item. Metadata on a configuration item will update the underlying subscription item's `metadata` when the phase is entered, adding new keys and replacing existing keys. Individual keys in the subscription item's `metadata` can be unset by posting an empty value to them in the configuration item's `metadata`. To unset all keys in the subscription item's `metadata`, update the subscription item directly or unset every key individually from the configuration item's `metadata`.
           */
          metadata?: Stripe.MetadataParam;

          /**
           * The plan ID to subscribe to. You may specify the same ID in `plan` and `price`.
           */
          plan?: string;

          /**
           * The ID of the price object.
           */
          price?: string;

          /**
           * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
           */
          price_data?: Item.PriceData;

          /**
           * Quantity for the given price. Can be set only if the price's `usage_type` is `licensed` and not `metered`.
           */
          quantity?: number;

          /**
           * A list of [Tax Rate](https://stripe.com/docs/api/tax_rates) ids. These Tax Rates will override the [`default_tax_rates`](https://stripe.com/docs/api/subscriptions/create#create_subscription-default_tax_rates) on the Subscription. When updating, pass an empty string to remove previously-defined tax rates.
           */
          tax_rates?: Stripe.Emptyable<Array<string>>;
        }

        namespace Item {
          interface BillingThresholds {
            /**
             * Number of units that meets the billing threshold to advance the subscription to a new billing period (e.g., it takes 10 $5 units to meet a $50 [monetary threshold](https://stripe.com/docs/api/subscriptions/update#update_subscription-billing_thresholds-amount_gte))
             */
            usage_gte: number;
          }

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
            recurring: PriceData.Recurring;

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

        type ProrationBehavior =
          | 'always_invoice'
          | 'create_prorations'
          | 'none';

        interface TransferData {
          /**
           * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
           */
          amount_percent?: number;

          /**
           * ID of an existing, connected Stripe account.
           */
          destination: string;
        }
      }

      type ProrationBehavior = 'always_invoice' | 'create_prorations' | 'none';
    }

    interface SubscriptionScheduleListParams extends PaginationParams {
      /**
       * Only return subscription schedules that were created canceled the given date interval.
       */
      canceled_at?: Stripe.RangeQueryParam | number;

      /**
       * Only return subscription schedules that completed during the given date interval.
       */
      completed_at?: Stripe.RangeQueryParam | number;

      /**
       * Only return subscription schedules that were created during the given date interval.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * Only return subscription schedules for the given customer.
       */
      customer?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return subscription schedules that were released during the given date interval.
       */
      released_at?: Stripe.RangeQueryParam | number;

      /**
       * Only return subscription schedules that have not started yet.
       */
      scheduled?: boolean;
    }

    interface SubscriptionScheduleCancelParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * If the subscription schedule is `active`, indicates if a final invoice will be generated that contains any un-invoiced metered usage and new/pending proration invoice items. Defaults to `true`.
       */
      invoice_now?: boolean;

      /**
       * If the subscription schedule is `active`, indicates if the cancellation should be prorated. Defaults to `true`.
       */
      prorate?: boolean;
    }

    interface SubscriptionScheduleReleaseParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Keep any cancellation on the subscription that the schedule has set
       */
      preserve_cancel_date?: boolean;
    }

    class SubscriptionSchedulesResource {
      /**
       * Creates a new subscription schedule object. Each customer can have up to 500 active or scheduled subscriptions.
       */
      create(
        params?: SubscriptionScheduleCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SubscriptionSchedule>>;
      create(
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SubscriptionSchedule>>;

      /**
       * Retrieves the details of an existing subscription schedule. You only need to supply the unique subscription schedule identifier that was returned upon subscription schedule creation.
       */
      retrieve(
        id: string,
        params?: SubscriptionScheduleRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SubscriptionSchedule>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SubscriptionSchedule>>;

      /**
       * Updates an existing subscription schedule.
       */
      update(
        id: string,
        params?: SubscriptionScheduleUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SubscriptionSchedule>>;

      /**
       * Retrieves the list of your subscription schedules.
       */
      list(
        params?: SubscriptionScheduleListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.SubscriptionSchedule>;
      list(
        options?: RequestOptions
      ): ApiListPromise<Stripe.SubscriptionSchedule>;

      /**
       * Cancels a subscription schedule and its associated subscription immediately (if the subscription schedule has an active subscription). A subscription schedule can only be canceled if its status is not_started or active.
       */
      cancel(
        id: string,
        params?: SubscriptionScheduleCancelParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SubscriptionSchedule>>;
      cancel(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SubscriptionSchedule>>;

      /**
       * Releases the subscription schedule immediately, which will stop scheduling of its phases, but leave any existing subscription in place. A schedule can only be released if its status is not_started or active. If the subscription schedule is currently associated with a subscription, releasing it will remove its subscription property and set the subscription's ID to the released_subscription property.
       */
      release(
        id: string,
        params?: SubscriptionScheduleReleaseParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SubscriptionSchedule>>;
      release(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SubscriptionSchedule>>;
    }
  }
}
