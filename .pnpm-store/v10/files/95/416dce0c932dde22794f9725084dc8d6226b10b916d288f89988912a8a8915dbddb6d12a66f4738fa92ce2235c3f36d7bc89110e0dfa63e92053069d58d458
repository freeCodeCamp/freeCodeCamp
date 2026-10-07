// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A subscription schedule allows you to create and manage the lifecycle of a subscription by predefining expected changes.
     *
     * Related guide: [Subscription schedules](https://stripe.com/docs/billing/subscriptions/subscription-schedules)
     */
    interface SubscriptionSchedule {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'subscription_schedule';

      /**
       * ID of the Connect Application that created the schedule.
       */
      application:
        | string
        | Stripe.Application
        | Stripe.DeletedApplication
        | null;

      /**
       * Time at which the subscription schedule was canceled. Measured in seconds since the Unix epoch.
       */
      canceled_at: number | null;

      /**
       * Time at which the subscription schedule was completed. Measured in seconds since the Unix epoch.
       */
      completed_at: number | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Object representing the start and end dates for the current phase of the subscription schedule, if it is `active`.
       */
      current_phase: SubscriptionSchedule.CurrentPhase | null;

      /**
       * ID of the customer who owns the subscription schedule.
       */
      customer: string | Stripe.Customer | Stripe.DeletedCustomer;

      default_settings: SubscriptionSchedule.DefaultSettings;

      /**
       * Behavior of the subscription schedule and underlying subscription when it ends. Possible values are `release` or `cancel` with the default being `release`. `release` will end the subscription schedule and keep the underlying subscription running. `cancel` will end the subscription schedule and cancel the underlying subscription.
       */
      end_behavior: SubscriptionSchedule.EndBehavior;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata | null;

      /**
       * Configuration for the subscription schedule's phases.
       */
      phases: Array<SubscriptionSchedule.Phase>;

      /**
       * Time at which the subscription schedule was released. Measured in seconds since the Unix epoch.
       */
      released_at: number | null;

      /**
       * ID of the subscription once managed by the subscription schedule (if it is released).
       */
      released_subscription: string | null;

      /**
       * The present status of the subscription schedule. Possible values are `not_started`, `active`, `completed`, `released`, and `canceled`. You can read more about the different states in our [behavior guide](https://stripe.com/docs/billing/subscriptions/subscription-schedules).
       */
      status: SubscriptionSchedule.Status;

      /**
       * ID of the subscription managed by the subscription schedule.
       */
      subscription: string | Stripe.Subscription | null;

      /**
       * ID of the test clock this subscription schedule belongs to.
       */
      test_clock: string | Stripe.TestHelpers.TestClock | null;
    }

    namespace SubscriptionSchedule {
      interface CurrentPhase {
        /**
         * The end of this phase of the subscription schedule.
         */
        end_date: number;

        /**
         * The start of this phase of the subscription schedule.
         */
        start_date: number;
      }

      interface DefaultSettings {
        /**
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account during this phase of the schedule.
         */
        application_fee_percent: number | null;

        automatic_tax?: DefaultSettings.AutomaticTax;

        /**
         * Possible values are `phase_start` or `automatic`. If `phase_start` then billing cycle anchor of the subscription is set to the start of the phase when entering the phase. If `automatic` then the billing cycle anchor is automatically modified as needed when entering the phase. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
         */
        billing_cycle_anchor: DefaultSettings.BillingCycleAnchor;

        /**
         * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period
         */
        billing_thresholds: DefaultSettings.BillingThresholds | null;

        /**
         * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`.
         */
        collection_method: DefaultSettings.CollectionMethod | null;

        /**
         * ID of the default payment method for the subscription schedule. If not set, invoices will use the default payment method in the customer's invoice settings.
         */
        default_payment_method: string | Stripe.PaymentMethod | null;

        /**
         * Subscription description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
         */
        description: string | null;

        invoice_settings: DefaultSettings.InvoiceSettings;

        /**
         * The account (if any) the charge was made on behalf of for charges associated with the schedule's subscription. See the Connect documentation for details.
         */
        on_behalf_of: string | Stripe.Account | null;

        /**
         * The account (if any) the associated subscription's payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the subscription's invoices.
         */
        transfer_data: DefaultSettings.TransferData | null;
      }

      namespace DefaultSettings {
        interface AutomaticTax {
          /**
           * Whether Stripe automatically computes tax on invoices created during this phase.
           */
          enabled: boolean;

          /**
           * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
           */
          liability: AutomaticTax.Liability | null;
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
        }

        type BillingCycleAnchor = 'automatic' | 'phase_start';

        interface BillingThresholds {
          /**
           * Monetary threshold that triggers the subscription to create an invoice
           */
          amount_gte: number | null;

          /**
           * Indicates if the `billing_cycle_anchor` should be reset when a threshold is reached. If true, `billing_cycle_anchor` will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged. This value may not be `true` if the subscription contains items with plans that have `aggregate_usage=last_ever`.
           */
          reset_billing_cycle_anchor: boolean | null;
        }

        type CollectionMethod = 'charge_automatically' | 'send_invoice';

        interface InvoiceSettings {
          /**
           * The account tax IDs associated with the subscription schedule. Will be set on invoices generated by the subscription schedule.
           */
          account_tax_ids: Array<
            string | Stripe.TaxId | Stripe.DeletedTaxId
          > | null;

          /**
           * Number of days within which a customer must pay invoices generated by this subscription schedule. This value will be `null` for subscription schedules where `billing=charge_automatically`.
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

        interface TransferData {
          /**
           * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the destination account. By default, the entire amount is transferred to the destination.
           */
          amount_percent: number | null;

          /**
           * The account where funds from the payment will be transferred to upon payment success.
           */
          destination: string | Stripe.Account;
        }
      }

      type EndBehavior = 'cancel' | 'none' | 'release' | 'renew';

      interface Phase {
        /**
         * A list of prices and quantities that will generate invoice items appended to the next invoice for this phase.
         */
        add_invoice_items: Array<Phase.AddInvoiceItem>;

        /**
         * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account during this phase of the schedule.
         */
        application_fee_percent: number | null;

        automatic_tax?: Phase.AutomaticTax;

        /**
         * Possible values are `phase_start` or `automatic`. If `phase_start` then billing cycle anchor of the subscription is set to the start of the phase when entering the phase. If `automatic` then the billing cycle anchor is automatically modified as needed when entering the phase. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
         */
        billing_cycle_anchor: Phase.BillingCycleAnchor | null;

        /**
         * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period
         */
        billing_thresholds: Phase.BillingThresholds | null;

        /**
         * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`.
         */
        collection_method: Phase.CollectionMethod | null;

        /**
         * ID of the coupon to use during this phase of the subscription schedule.
         */
        coupon: string | Stripe.Coupon | Stripe.DeletedCoupon | null;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * ID of the default payment method for the subscription schedule. It must belong to the customer associated with the subscription schedule. If not set, invoices will use the default payment method in the customer's invoice settings.
         */
        default_payment_method: string | Stripe.PaymentMethod | null;

        /**
         * The default tax rates to apply to the subscription during this phase of the subscription schedule.
         */
        default_tax_rates?: Array<Stripe.TaxRate> | null;

        /**
         * Subscription description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
         */
        description: string | null;

        /**
         * The stackable discounts that will be applied to the subscription on this phase. Subscription item discounts are applied before subscription discounts.
         */
        discounts: Array<Phase.Discount>;

        /**
         * The end of this phase of the subscription schedule.
         */
        end_date: number;

        /**
         * The invoice settings applicable during this phase.
         */
        invoice_settings: Phase.InvoiceSettings | null;

        /**
         * Subscription items to configure the subscription to during this phase of the subscription schedule.
         */
        items: Array<Phase.Item>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to a phase. Metadata on a schedule's phase will update the underlying subscription's `metadata` when the phase is entered. Updating the underlying subscription's `metadata` directly will not affect the current phase's `metadata`.
         */
        metadata: Stripe.Metadata | null;

        /**
         * The account (if any) the charge was made on behalf of for charges associated with the schedule's subscription. See the Connect documentation for details.
         */
        on_behalf_of: string | Stripe.Account | null;

        /**
         * If the subscription schedule will prorate when transitioning to this phase. Possible values are `create_prorations` and `none`.
         */
        proration_behavior: Phase.ProrationBehavior;

        /**
         * The start of this phase of the subscription schedule.
         */
        start_date: number;

        /**
         * The account (if any) the associated subscription's payments will be attributed to for tax reporting, and where funds from each payment will be transferred to for each of the subscription's invoices.
         */
        transfer_data: Phase.TransferData | null;

        /**
         * When the trial ends within the phase.
         */
        trial_end: number | null;
      }

      namespace Phase {
        interface AddInvoiceItem {
          /**
           * The stackable discounts that will be applied to the item.
           */
          discounts: Array<AddInvoiceItem.Discount>;

          /**
           * ID of the price used to generate the invoice item.
           */
          price: string | Stripe.Price | Stripe.DeletedPrice;

          /**
           * The quantity of the invoice item.
           */
          quantity: number | null;

          /**
           * The tax rates which apply to the item. When set, the `default_tax_rates` do not apply to this item.
           */
          tax_rates?: Array<Stripe.TaxRate> | null;
        }

        namespace AddInvoiceItem {
          interface Discount {
            /**
             * ID of the coupon to create a new discount for.
             */
            coupon: string | Stripe.Coupon | null;

            /**
             * ID of an existing discount on the object (or one of its ancestors) to reuse.
             */
            discount: string | Stripe.Discount | null;

            /**
             * ID of the promotion code to create a new discount for.
             */
            promotion_code: string | Stripe.PromotionCode | null;
          }
        }

        interface AutomaticTax {
          /**
           * Whether Stripe automatically computes tax on invoices created during this phase.
           */
          enabled: boolean;

          /**
           * The account that's liable for tax. If set, the business address and tax registrations required to perform the tax calculation are loaded from this account. The tax transaction is returned in the report of the connected account.
           */
          liability: AutomaticTax.Liability | null;
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
        }

        type BillingCycleAnchor = 'automatic' | 'phase_start';

        interface BillingThresholds {
          /**
           * Monetary threshold that triggers the subscription to create an invoice
           */
          amount_gte: number | null;

          /**
           * Indicates if the `billing_cycle_anchor` should be reset when a threshold is reached. If true, `billing_cycle_anchor` will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged. This value may not be `true` if the subscription contains items with plans that have `aggregate_usage=last_ever`.
           */
          reset_billing_cycle_anchor: boolean | null;
        }

        type CollectionMethod = 'charge_automatically' | 'send_invoice';

        interface Discount {
          /**
           * ID of the coupon to create a new discount for.
           */
          coupon: string | Stripe.Coupon | null;

          /**
           * ID of an existing discount on the object (or one of its ancestors) to reuse.
           */
          discount: string | Stripe.Discount | null;

          /**
           * ID of the promotion code to create a new discount for.
           */
          promotion_code: string | Stripe.PromotionCode | null;
        }

        interface InvoiceSettings {
          /**
           * The account tax IDs associated with this phase of the subscription schedule. Will be set on invoices generated by this phase of the subscription schedule.
           */
          account_tax_ids: Array<
            string | Stripe.TaxId | Stripe.DeletedTaxId
          > | null;

          /**
           * Number of days within which a customer must pay invoices generated by this subscription schedule. This value will be `null` for subscription schedules where `billing=charge_automatically`.
           */
          days_until_due: number | null;

          /**
           * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
           */
          issuer: InvoiceSettings.Issuer | null;
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

        interface Item {
          /**
           * Define thresholds at which an invoice will be sent, and the related subscription advanced to a new billing period
           */
          billing_thresholds: Item.BillingThresholds | null;

          /**
           * The discounts applied to the subscription item. Subscription item discounts are applied before subscription discounts. Use `expand[]=discounts` to expand each discount.
           */
          discounts: Array<Item.Discount>;

          /**
           * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an item. Metadata on this item will update the underlying subscription item's `metadata` when the phase is entered.
           */
          metadata: Stripe.Metadata | null;

          /**
           * ID of the plan to which the customer should be subscribed.
           */
          plan: string | Stripe.Plan | Stripe.DeletedPlan;

          /**
           * ID of the price to which the customer should be subscribed.
           */
          price: string | Stripe.Price | Stripe.DeletedPrice;

          /**
           * Quantity of the plan to which the customer should be subscribed.
           */
          quantity?: number;

          /**
           * The tax rates which apply to this `phase_item`. When set, the `default_tax_rates` on the phase do not apply to this `phase_item`.
           */
          tax_rates?: Array<Stripe.TaxRate> | null;
        }

        namespace Item {
          interface BillingThresholds {
            /**
             * Usage threshold that triggers the subscription to create an invoice
             */
            usage_gte: number | null;
          }

          interface Discount {
            /**
             * ID of the coupon to create a new discount for.
             */
            coupon: string | Stripe.Coupon | null;

            /**
             * ID of an existing discount on the object (or one of its ancestors) to reuse.
             */
            discount: string | Stripe.Discount | null;

            /**
             * ID of the promotion code to create a new discount for.
             */
            promotion_code: string | Stripe.PromotionCode | null;
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
          amount_percent: number | null;

          /**
           * The account where funds from the payment will be transferred to upon payment success.
           */
          destination: string | Stripe.Account;
        }
      }

      type Status =
        | 'active'
        | 'canceled'
        | 'completed'
        | 'not_started'
        | 'released';
    }
  }
}
