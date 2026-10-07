// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface PaymentLinkCreateParams {
      /**
       * The line items representing what is being sold. Each line item represents an item being sold. Up to 20 line items are supported.
       */
      line_items: Array<PaymentLinkCreateParams.LineItem>;

      /**
       * Behavior after the purchase is complete.
       */
      after_completion?: PaymentLinkCreateParams.AfterCompletion;

      /**
       * Enables user redeemable promotion codes.
       */
      allow_promotion_codes?: boolean;

      /**
       * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. Can only be applied when there are no line items with recurring prices.
       */
      application_fee_amount?: number;

      /**
       * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. There must be at least 1 line item with a recurring price to use this field.
       */
      application_fee_percent?: number;

      /**
       * Configuration for automatic tax collection.
       */
      automatic_tax?: PaymentLinkCreateParams.AutomaticTax;

      /**
       * Configuration for collecting the customer's billing address. Defaults to `auto`.
       */
      billing_address_collection?: PaymentLinkCreateParams.BillingAddressCollection;

      /**
       * Configure fields to gather active consent from customers.
       */
      consent_collection?: PaymentLinkCreateParams.ConsentCollection;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies) and supported by each line item's price.
       */
      currency?: string;

      /**
       * Collect additional information from your customer using custom fields. Up to 3 fields are supported.
       */
      custom_fields?: Array<PaymentLinkCreateParams.CustomField>;

      /**
       * Display additional text for your customers using custom text.
       */
      custom_text?: PaymentLinkCreateParams.CustomText;

      /**
       * Configures whether [checkout sessions](https://stripe.com/docs/api/checkout/sessions) created by this payment link create a [Customer](https://stripe.com/docs/api/customers).
       */
      customer_creation?: PaymentLinkCreateParams.CustomerCreation;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The custom message to be displayed to a customer when a payment link is no longer active.
       */
      inactive_message?: string;

      /**
       * Generate a post-purchase Invoice for one-time payments.
       */
      invoice_creation?: PaymentLinkCreateParams.InvoiceCreation;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. Metadata associated with this Payment Link will automatically be copied to [checkout sessions](https://stripe.com/docs/api/checkout/sessions) created by this payment link.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * The account on behalf of which to charge.
       */
      on_behalf_of?: string;

      /**
       * A subset of parameters to be passed to PaymentIntent creation for Checkout Sessions in `payment` mode.
       */
      payment_intent_data?: PaymentLinkCreateParams.PaymentIntentData;

      /**
       * Specify whether Checkout should collect a payment method. When set to `if_required`, Checkout will not collect a payment method when the total due for the session is 0.This may occur if the Checkout Session includes a free trial or a discount.
       *
       * Can only be set in `subscription` mode. Defaults to `always`.
       *
       * If you'd like information on how to collect a payment method outside of Checkout, read the guide on [configuring subscriptions with a free trial](https://stripe.com/docs/payments/checkout/free-trials).
       */
      payment_method_collection?: PaymentLinkCreateParams.PaymentMethodCollection;

      /**
       * The list of payment method types that customers can use. If no value is passed, Stripe will dynamically show relevant payment methods from your [payment method settings](https://dashboard.stripe.com/settings/payment_methods) (20+ payment methods [supported](https://stripe.com/docs/payments/payment-methods/integration-options#payment-method-product-support)).
       */
      payment_method_types?: Array<PaymentLinkCreateParams.PaymentMethodType>;

      /**
       * Controls phone number collection settings during checkout.
       *
       * We recommend that you review your privacy policy and check with your legal contacts.
       */
      phone_number_collection?: PaymentLinkCreateParams.PhoneNumberCollection;

      /**
       * Settings that restrict the usage of a payment link.
       */
      restrictions?: PaymentLinkCreateParams.Restrictions;

      /**
       * Configuration for collecting the customer's shipping address.
       */
      shipping_address_collection?: PaymentLinkCreateParams.ShippingAddressCollection;

      /**
       * The shipping rate options to apply to [checkout sessions](https://stripe.com/docs/api/checkout/sessions) created by this payment link.
       */
      shipping_options?: Array<PaymentLinkCreateParams.ShippingOption>;

      /**
       * Describes the type of transaction being performed in order to customize relevant text on the page, such as the submit button. Changing this value will also affect the hostname in the [url](https://stripe.com/docs/api/payment_links/payment_links/object#url) property (example: `donate.stripe.com`).
       */
      submit_type?: PaymentLinkCreateParams.SubmitType;

      /**
       * When creating a subscription, the specified configuration data will be used. There must be at least one line item with a recurring price to use `subscription_data`.
       */
      subscription_data?: PaymentLinkCreateParams.SubscriptionData;

      /**
       * Controls tax ID collection during checkout.
       */
      tax_id_collection?: PaymentLinkCreateParams.TaxIdCollection;

      /**
       * The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to.
       */
      transfer_data?: PaymentLinkCreateParams.TransferData;
    }

    namespace PaymentLinkCreateParams {
      interface AfterCompletion {
        /**
         * Configuration when `type=hosted_confirmation`.
         */
        hosted_confirmation?: AfterCompletion.HostedConfirmation;

        /**
         * Configuration when `type=redirect`.
         */
        redirect?: AfterCompletion.Redirect;

        /**
         * The specified behavior after the purchase is complete. Either `redirect` or `hosted_confirmation`.
         */
        type: AfterCompletion.Type;
      }

      namespace AfterCompletion {
        interface HostedConfirmation {
          /**
           * A custom message to display to the customer after the purchase is complete.
           */
          custom_message?: string;
        }

        interface Redirect {
          /**
           * The URL the customer will be redirected to after the purchase is complete. You can embed `{CHECKOUT_SESSION_ID}` into the URL to have the `id` of the completed [checkout session](https://stripe.com/docs/api/checkout/sessions/object#checkout_session_object-id) included.
           */
          url: string;
        }

        type Type = 'hosted_confirmation' | 'redirect';
      }

      interface AutomaticTax {
        /**
         * If `true`, tax will be calculated automatically using the customer's location.
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

      type BillingAddressCollection = 'auto' | 'required';

      interface ConsentCollection {
        /**
         * Determines the display of payment method reuse agreement text in the UI. If set to `hidden`, it will hide legal text related to the reuse of a payment method.
         */
        payment_method_reuse_agreement?: ConsentCollection.PaymentMethodReuseAgreement;

        /**
         * If set to `auto`, enables the collection of customer consent for promotional communications. The Checkout
         * Session will determine whether to display an option to opt into promotional communication
         * from the merchant depending on the customer's locale. Only available to US merchants.
         */
        promotions?: ConsentCollection.Promotions;

        /**
         * If set to `required`, it requires customers to check a terms of service checkbox before being able to pay.
         * There must be a valid terms of service URL set in your [Dashboard settings](https://dashboard.stripe.com/settings/public).
         */
        terms_of_service?: ConsentCollection.TermsOfService;
      }

      namespace ConsentCollection {
        interface PaymentMethodReuseAgreement {
          /**
           * Determines the position and visibility of the payment method reuse agreement in the UI. When set to `auto`, Stripe's
           * defaults will be used. When set to `hidden`, the payment method reuse agreement text will always be hidden in the UI.
           */
          position: PaymentMethodReuseAgreement.Position;
        }

        namespace PaymentMethodReuseAgreement {
          type Position = 'auto' | 'hidden';
        }

        type Promotions = 'auto' | 'none';

        type TermsOfService = 'none' | 'required';
      }

      type CustomerCreation = 'always' | 'if_required';

      interface CustomField {
        /**
         * Configuration for `type=dropdown` fields.
         */
        dropdown?: CustomField.Dropdown;

        /**
         * String of your choice that your integration can use to reconcile this field. Must be unique to this field, alphanumeric, and up to 200 characters.
         */
        key: string;

        /**
         * The label for the field, displayed to the customer.
         */
        label: CustomField.Label;

        /**
         * Configuration for `type=numeric` fields.
         */
        numeric?: CustomField.Numeric;

        /**
         * Whether the customer is required to complete the field before completing the Checkout Session. Defaults to `false`.
         */
        optional?: boolean;

        /**
         * Configuration for `type=text` fields.
         */
        text?: CustomField.Text;

        /**
         * The type of the field.
         */
        type: CustomField.Type;
      }

      namespace CustomField {
        interface Dropdown {
          /**
           * The options available for the customer to select. Up to 200 options allowed.
           */
          options: Array<Dropdown.Option>;
        }

        namespace Dropdown {
          interface Option {
            /**
             * The label for the option, displayed to the customer. Up to 100 characters.
             */
            label: string;

            /**
             * The value for this option, not displayed to the customer, used by your integration to reconcile the option selected by the customer. Must be unique to this option, alphanumeric, and up to 100 characters.
             */
            value: string;
          }
        }

        interface Label {
          /**
           * Custom text for the label, displayed to the customer. Up to 50 characters.
           */
          custom: string;

          /**
           * The type of the label.
           */
          type: 'custom';
        }

        interface Numeric {
          /**
           * The maximum character length constraint for the customer's input.
           */
          maximum_length?: number;

          /**
           * The minimum character length requirement for the customer's input.
           */
          minimum_length?: number;
        }

        interface Text {
          /**
           * The maximum character length constraint for the customer's input.
           */
          maximum_length?: number;

          /**
           * The minimum character length requirement for the customer's input.
           */
          minimum_length?: number;
        }

        type Type = 'dropdown' | 'numeric' | 'text';
      }

      interface CustomText {
        /**
         * Custom text that should be displayed after the payment confirmation button.
         */
        after_submit?: Stripe.Emptyable<CustomText.AfterSubmit>;

        /**
         * Custom text that should be displayed alongside shipping address collection.
         */
        shipping_address?: Stripe.Emptyable<CustomText.ShippingAddress>;

        /**
         * Custom text that should be displayed alongside the payment confirmation button.
         */
        submit?: Stripe.Emptyable<CustomText.Submit>;

        /**
         * Custom text that should be displayed in place of the default terms of service agreement text.
         */
        terms_of_service_acceptance?: Stripe.Emptyable<
          CustomText.TermsOfServiceAcceptance
        >;
      }

      namespace CustomText {
        interface AfterSubmit {
          /**
           * Text may be up to 1200 characters in length.
           */
          message: string;
        }

        interface ShippingAddress {
          /**
           * Text may be up to 1200 characters in length.
           */
          message: string;
        }

        interface Submit {
          /**
           * Text may be up to 1200 characters in length.
           */
          message: string;
        }

        interface TermsOfServiceAcceptance {
          /**
           * Text may be up to 1200 characters in length.
           */
          message: string;
        }
      }

      interface InvoiceCreation {
        /**
         * Whether the feature is enabled
         */
        enabled: boolean;

        /**
         * Invoice PDF configuration.
         */
        invoice_data?: InvoiceCreation.InvoiceData;
      }

      namespace InvoiceCreation {
        interface InvoiceData {
          /**
           * The account tax IDs associated with the invoice.
           */
          account_tax_ids?: Stripe.Emptyable<Array<string>>;

          /**
           * Default custom fields to be displayed on invoices for this customer.
           */
          custom_fields?: Stripe.Emptyable<Array<InvoiceData.CustomField>>;

          /**
           * An arbitrary string attached to the object. Often useful for displaying to users.
           */
          description?: string;

          /**
           * Default footer to be displayed on invoices for this customer.
           */
          footer?: string;

          /**
           * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
           */
          issuer?: InvoiceData.Issuer;

          /**
           * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
           */
          metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

          /**
           * Default options for invoice PDF rendering for this customer.
           */
          rendering_options?: Stripe.Emptyable<InvoiceData.RenderingOptions>;
        }

        namespace InvoiceData {
          interface CustomField {
            /**
             * The name of the custom field. This may be up to 40 characters.
             */
            name: string;

            /**
             * The value of the custom field. This may be up to 140 characters.
             */
            value: string;
          }

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

          interface RenderingOptions {
            /**
             * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs. One of `exclude_tax` or `include_inclusive_tax`. `include_inclusive_tax` will include inclusive tax (and exclude exclusive tax) in invoice PDF amounts. `exclude_tax` will exclude all tax (inclusive and exclusive alike) from invoice PDF amounts.
             */
            amount_tax_display?: Stripe.Emptyable<
              RenderingOptions.AmountTaxDisplay
            >;
          }

          namespace RenderingOptions {
            type AmountTaxDisplay = 'exclude_tax' | 'include_inclusive_tax';
          }
        }
      }

      interface LineItem {
        /**
         * When set, provides configuration for this item's quantity to be adjusted by the customer during checkout.
         */
        adjustable_quantity?: LineItem.AdjustableQuantity;

        /**
         * The ID of the [Price](https://stripe.com/docs/api/prices) or [Plan](https://stripe.com/docs/api/plans) object.
         */
        price: string;

        /**
         * The quantity of the line item being purchased.
         */
        quantity: number;
      }

      namespace LineItem {
        interface AdjustableQuantity {
          /**
           * Set to true if the quantity can be adjusted to any non-negative Integer.
           */
          enabled: boolean;

          /**
           * The maximum quantity the customer can purchase. By default this value is 99. You can specify a value up to 999.
           */
          maximum?: number;

          /**
           * The minimum quantity the customer can purchase. By default this value is 0. If there is only one item in the cart then that item's quantity cannot go down to 0.
           */
          minimum?: number;
        }
      }

      interface PaymentIntentData {
        /**
         * Controls when the funds will be captured from the customer's account.
         */
        capture_method?: PaymentIntentData.CaptureMethod;

        /**
         * An arbitrary string attached to the object. Often useful for displaying to users.
         */
        description?: string;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that will declaratively set metadata on [Payment Intents](https://stripe.com/docs/api/payment_intents) generated from this payment link. Unlike object-level metadata, this field is declarative. Updates will clear prior values.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * Indicates that you intend to [make future payments](https://stripe.com/docs/payments/payment-intents#future-usage) with the payment method collected by this Checkout Session.
         *
         * When setting this to `on_session`, Checkout will show a notice to the customer that their payment details will be saved.
         *
         * When setting this to `off_session`, Checkout will show a notice to the customer that their payment details will be saved and used for future payments.
         *
         * If a Customer has been provided or Checkout creates a new Customer,Checkout will attach the payment method to the Customer.
         *
         * If Checkout does not create a Customer, the payment method is not attached to a Customer. To reuse the payment method, you can retrieve it from the Checkout Session's PaymentIntent.
         *
         * When processing card payments, Checkout also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as SCA.
         */
        setup_future_usage?: PaymentIntentData.SetupFutureUsage;

        /**
         * Text that appears on the customer's statement as the statement descriptor for a non-card charge. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
         *
         * Setting this value for a card charge returns an error. For card charges, set the [statement_descriptor_suffix](https://docs.stripe.com/get-started/account/statement-descriptors#dynamic) instead.
         */
        statement_descriptor?: string;

        /**
         * Provides information about a card charge. Concatenated to the account's [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static) to form the complete statement descriptor that appears on the customer's statement.
         */
        statement_descriptor_suffix?: string;

        /**
         * A string that identifies the resulting payment as part of a group. See the PaymentIntents [use case for connected accounts](https://stripe.com/docs/connect/separate-charges-and-transfers) for details.
         */
        transfer_group?: string;
      }

      namespace PaymentIntentData {
        type CaptureMethod = 'automatic' | 'automatic_async' | 'manual';

        type SetupFutureUsage = 'off_session' | 'on_session';
      }

      type PaymentMethodCollection = 'always' | 'if_required';

      type PaymentMethodType =
        | 'affirm'
        | 'afterpay_clearpay'
        | 'alipay'
        | 'au_becs_debit'
        | 'bacs_debit'
        | 'bancontact'
        | 'blik'
        | 'boleto'
        | 'card'
        | 'cashapp'
        | 'eps'
        | 'fpx'
        | 'giropay'
        | 'grabpay'
        | 'ideal'
        | 'klarna'
        | 'konbini'
        | 'link'
        | 'mobilepay'
        | 'multibanco'
        | 'oxxo'
        | 'p24'
        | 'paynow'
        | 'paypal'
        | 'pix'
        | 'promptpay'
        | 'sepa_debit'
        | 'sofort'
        | 'swish'
        | 'twint'
        | 'us_bank_account'
        | 'wechat_pay'
        | 'zip';

      interface PhoneNumberCollection {
        /**
         * Set to `true` to enable phone number collection.
         */
        enabled: boolean;
      }

      interface Restrictions {
        /**
         * Configuration for the `completed_sessions` restriction type.
         */
        completed_sessions: Restrictions.CompletedSessions;
      }

      namespace Restrictions {
        interface CompletedSessions {
          /**
           * The maximum number of checkout sessions that can be completed for the `completed_sessions` restriction to be met.
           */
          limit: number;
        }
      }

      interface ShippingAddressCollection {
        /**
         * An array of two-letter ISO country codes representing which countries Checkout should provide as options for
         * shipping locations. Unsupported country codes: `AS, CX, CC, CU, HM, IR, KP, MH, FM, NF, MP, PW, SD, SY, UM, VI`.
         */
        allowed_countries: Array<ShippingAddressCollection.AllowedCountry>;
      }

      namespace ShippingAddressCollection {
        type AllowedCountry =
          | 'AC'
          | 'AD'
          | 'AE'
          | 'AF'
          | 'AG'
          | 'AI'
          | 'AL'
          | 'AM'
          | 'AO'
          | 'AQ'
          | 'AR'
          | 'AT'
          | 'AU'
          | 'AW'
          | 'AX'
          | 'AZ'
          | 'BA'
          | 'BB'
          | 'BD'
          | 'BE'
          | 'BF'
          | 'BG'
          | 'BH'
          | 'BI'
          | 'BJ'
          | 'BL'
          | 'BM'
          | 'BN'
          | 'BO'
          | 'BQ'
          | 'BR'
          | 'BS'
          | 'BT'
          | 'BV'
          | 'BW'
          | 'BY'
          | 'BZ'
          | 'CA'
          | 'CD'
          | 'CF'
          | 'CG'
          | 'CH'
          | 'CI'
          | 'CK'
          | 'CL'
          | 'CM'
          | 'CN'
          | 'CO'
          | 'CR'
          | 'CV'
          | 'CW'
          | 'CY'
          | 'CZ'
          | 'DE'
          | 'DJ'
          | 'DK'
          | 'DM'
          | 'DO'
          | 'DZ'
          | 'EC'
          | 'EE'
          | 'EG'
          | 'EH'
          | 'ER'
          | 'ES'
          | 'ET'
          | 'FI'
          | 'FJ'
          | 'FK'
          | 'FO'
          | 'FR'
          | 'GA'
          | 'GB'
          | 'GD'
          | 'GE'
          | 'GF'
          | 'GG'
          | 'GH'
          | 'GI'
          | 'GL'
          | 'GM'
          | 'GN'
          | 'GP'
          | 'GQ'
          | 'GR'
          | 'GS'
          | 'GT'
          | 'GU'
          | 'GW'
          | 'GY'
          | 'HK'
          | 'HN'
          | 'HR'
          | 'HT'
          | 'HU'
          | 'ID'
          | 'IE'
          | 'IL'
          | 'IM'
          | 'IN'
          | 'IO'
          | 'IQ'
          | 'IS'
          | 'IT'
          | 'JE'
          | 'JM'
          | 'JO'
          | 'JP'
          | 'KE'
          | 'KG'
          | 'KH'
          | 'KI'
          | 'KM'
          | 'KN'
          | 'KR'
          | 'KW'
          | 'KY'
          | 'KZ'
          | 'LA'
          | 'LB'
          | 'LC'
          | 'LI'
          | 'LK'
          | 'LR'
          | 'LS'
          | 'LT'
          | 'LU'
          | 'LV'
          | 'LY'
          | 'MA'
          | 'MC'
          | 'MD'
          | 'ME'
          | 'MF'
          | 'MG'
          | 'MK'
          | 'ML'
          | 'MM'
          | 'MN'
          | 'MO'
          | 'MQ'
          | 'MR'
          | 'MS'
          | 'MT'
          | 'MU'
          | 'MV'
          | 'MW'
          | 'MX'
          | 'MY'
          | 'MZ'
          | 'NA'
          | 'NC'
          | 'NE'
          | 'NG'
          | 'NI'
          | 'NL'
          | 'NO'
          | 'NP'
          | 'NR'
          | 'NU'
          | 'NZ'
          | 'OM'
          | 'PA'
          | 'PE'
          | 'PF'
          | 'PG'
          | 'PH'
          | 'PK'
          | 'PL'
          | 'PM'
          | 'PN'
          | 'PR'
          | 'PS'
          | 'PT'
          | 'PY'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RS'
          | 'RU'
          | 'RW'
          | 'SA'
          | 'SB'
          | 'SC'
          | 'SE'
          | 'SG'
          | 'SH'
          | 'SI'
          | 'SJ'
          | 'SK'
          | 'SL'
          | 'SM'
          | 'SN'
          | 'SO'
          | 'SR'
          | 'SS'
          | 'ST'
          | 'SV'
          | 'SX'
          | 'SZ'
          | 'TA'
          | 'TC'
          | 'TD'
          | 'TF'
          | 'TG'
          | 'TH'
          | 'TJ'
          | 'TK'
          | 'TL'
          | 'TM'
          | 'TN'
          | 'TO'
          | 'TR'
          | 'TT'
          | 'TV'
          | 'TW'
          | 'TZ'
          | 'UA'
          | 'UG'
          | 'US'
          | 'UY'
          | 'UZ'
          | 'VA'
          | 'VC'
          | 'VE'
          | 'VG'
          | 'VN'
          | 'VU'
          | 'WF'
          | 'WS'
          | 'XK'
          | 'YE'
          | 'YT'
          | 'ZA'
          | 'ZM'
          | 'ZW'
          | 'ZZ';
      }

      interface ShippingOption {
        /**
         * The ID of the Shipping Rate to use for this shipping option.
         */
        shipping_rate?: string;
      }

      type SubmitType = 'auto' | 'book' | 'donate' | 'pay';

      interface SubscriptionData {
        /**
         * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
         */
        description?: string;

        /**
         * All invoices will be billed using the specified settings.
         */
        invoice_settings?: SubscriptionData.InvoiceSettings;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that will declaratively set metadata on [Subscriptions](https://stripe.com/docs/api/subscriptions) generated from this payment link. Unlike object-level metadata, this field is declarative. Updates will clear prior values.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * Integer representing the number of trial period days before the customer is charged for the first time. Has to be at least 1.
         */
        trial_period_days?: number;

        /**
         * Settings related to subscription trials.
         */
        trial_settings?: SubscriptionData.TrialSettings;
      }

      namespace SubscriptionData {
        interface InvoiceSettings {
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

        interface TrialSettings {
          /**
           * Defines how the subscription should behave when the user's free trial ends.
           */
          end_behavior: TrialSettings.EndBehavior;
        }

        namespace TrialSettings {
          interface EndBehavior {
            /**
             * Indicates how the subscription should change when the trial ends if the user did not provide a payment method.
             */
            missing_payment_method: EndBehavior.MissingPaymentMethod;
          }

          namespace EndBehavior {
            type MissingPaymentMethod = 'cancel' | 'create_invoice' | 'pause';
          }
        }
      }

      interface TaxIdCollection {
        /**
         * Enable tax ID collection during checkout. Defaults to `false`.
         */
        enabled: boolean;

        /**
         * Describes whether a tax ID is required during checkout. Defaults to `never`.
         */
        required?: TaxIdCollection.Required;
      }

      namespace TaxIdCollection {
        type Required = 'if_supported' | 'never';
      }

      interface TransferData {
        /**
         * The amount that will be transferred automatically when a charge succeeds.
         */
        amount?: number;

        /**
         * If specified, successful charges will be attributed to the destination
         * account for tax reporting, and the funds from charges will be transferred
         * to the destination account. The ID of the resulting transfer will be
         * returned on the successful charge's `transfer` field.
         */
        destination: string;
      }
    }

    interface PaymentLinkRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface PaymentLinkUpdateParams {
      /**
       * Whether the payment link's `url` is active. If `false`, customers visiting the URL will be shown a page saying that the link has been deactivated.
       */
      active?: boolean;

      /**
       * Behavior after the purchase is complete.
       */
      after_completion?: PaymentLinkUpdateParams.AfterCompletion;

      /**
       * Enables user redeemable promotion codes.
       */
      allow_promotion_codes?: boolean;

      /**
       * Configuration for automatic tax collection.
       */
      automatic_tax?: PaymentLinkUpdateParams.AutomaticTax;

      /**
       * Configuration for collecting the customer's billing address. Defaults to `auto`.
       */
      billing_address_collection?: PaymentLinkUpdateParams.BillingAddressCollection;

      /**
       * Collect additional information from your customer using custom fields. Up to 3 fields are supported.
       */
      custom_fields?: Stripe.Emptyable<
        Array<PaymentLinkUpdateParams.CustomField>
      >;

      /**
       * Display additional text for your customers using custom text.
       */
      custom_text?: PaymentLinkUpdateParams.CustomText;

      /**
       * Configures whether [checkout sessions](https://stripe.com/docs/api/checkout/sessions) created by this payment link create a [Customer](https://stripe.com/docs/api/customers).
       */
      customer_creation?: PaymentLinkUpdateParams.CustomerCreation;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The custom message to be displayed to a customer when a payment link is no longer active.
       */
      inactive_message?: Stripe.Emptyable<string>;

      /**
       * Generate a post-purchase Invoice for one-time payments.
       */
      invoice_creation?: PaymentLinkUpdateParams.InvoiceCreation;

      /**
       * The line items representing what is being sold. Each line item represents an item being sold. Up to 20 line items are supported.
       */
      line_items?: Array<PaymentLinkUpdateParams.LineItem>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. Metadata associated with this Payment Link will automatically be copied to [checkout sessions](https://stripe.com/docs/api/checkout/sessions) created by this payment link.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * A subset of parameters to be passed to PaymentIntent creation for Checkout Sessions in `payment` mode.
       */
      payment_intent_data?: PaymentLinkUpdateParams.PaymentIntentData;

      /**
       * Specify whether Checkout should collect a payment method. When set to `if_required`, Checkout will not collect a payment method when the total due for the session is 0.This may occur if the Checkout Session includes a free trial or a discount.
       *
       * Can only be set in `subscription` mode. Defaults to `always`.
       *
       * If you'd like information on how to collect a payment method outside of Checkout, read the guide on [configuring subscriptions with a free trial](https://stripe.com/docs/payments/checkout/free-trials).
       */
      payment_method_collection?: PaymentLinkUpdateParams.PaymentMethodCollection;

      /**
       * The list of payment method types that customers can use. Pass an empty string to enable dynamic payment methods that use your [payment method settings](https://dashboard.stripe.com/settings/payment_methods).
       */
      payment_method_types?: Stripe.Emptyable<
        Array<PaymentLinkUpdateParams.PaymentMethodType>
      >;

      /**
       * Settings that restrict the usage of a payment link.
       */
      restrictions?: Stripe.Emptyable<PaymentLinkUpdateParams.Restrictions>;

      /**
       * Configuration for collecting the customer's shipping address.
       */
      shipping_address_collection?: Stripe.Emptyable<
        PaymentLinkUpdateParams.ShippingAddressCollection
      >;

      /**
       * When creating a subscription, the specified configuration data will be used. There must be at least one line item with a recurring price to use `subscription_data`.
       */
      subscription_data?: PaymentLinkUpdateParams.SubscriptionData;

      /**
       * Controls tax ID collection during checkout.
       */
      tax_id_collection?: PaymentLinkUpdateParams.TaxIdCollection;
    }

    namespace PaymentLinkUpdateParams {
      interface AfterCompletion {
        /**
         * Configuration when `type=hosted_confirmation`.
         */
        hosted_confirmation?: AfterCompletion.HostedConfirmation;

        /**
         * Configuration when `type=redirect`.
         */
        redirect?: AfterCompletion.Redirect;

        /**
         * The specified behavior after the purchase is complete. Either `redirect` or `hosted_confirmation`.
         */
        type: AfterCompletion.Type;
      }

      namespace AfterCompletion {
        interface HostedConfirmation {
          /**
           * A custom message to display to the customer after the purchase is complete.
           */
          custom_message?: string;
        }

        interface Redirect {
          /**
           * The URL the customer will be redirected to after the purchase is complete. You can embed `{CHECKOUT_SESSION_ID}` into the URL to have the `id` of the completed [checkout session](https://stripe.com/docs/api/checkout/sessions/object#checkout_session_object-id) included.
           */
          url: string;
        }

        type Type = 'hosted_confirmation' | 'redirect';
      }

      interface AutomaticTax {
        /**
         * If `true`, tax will be calculated automatically using the customer's location.
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

      type BillingAddressCollection = 'auto' | 'required';

      type CustomerCreation = 'always' | 'if_required';

      interface CustomField {
        /**
         * Configuration for `type=dropdown` fields.
         */
        dropdown?: CustomField.Dropdown;

        /**
         * String of your choice that your integration can use to reconcile this field. Must be unique to this field, alphanumeric, and up to 200 characters.
         */
        key: string;

        /**
         * The label for the field, displayed to the customer.
         */
        label: CustomField.Label;

        /**
         * Configuration for `type=numeric` fields.
         */
        numeric?: CustomField.Numeric;

        /**
         * Whether the customer is required to complete the field before completing the Checkout Session. Defaults to `false`.
         */
        optional?: boolean;

        /**
         * Configuration for `type=text` fields.
         */
        text?: CustomField.Text;

        /**
         * The type of the field.
         */
        type: CustomField.Type;
      }

      namespace CustomField {
        interface Dropdown {
          /**
           * The options available for the customer to select. Up to 200 options allowed.
           */
          options: Array<Dropdown.Option>;
        }

        namespace Dropdown {
          interface Option {
            /**
             * The label for the option, displayed to the customer. Up to 100 characters.
             */
            label: string;

            /**
             * The value for this option, not displayed to the customer, used by your integration to reconcile the option selected by the customer. Must be unique to this option, alphanumeric, and up to 100 characters.
             */
            value: string;
          }
        }

        interface Label {
          /**
           * Custom text for the label, displayed to the customer. Up to 50 characters.
           */
          custom: string;

          /**
           * The type of the label.
           */
          type: 'custom';
        }

        interface Numeric {
          /**
           * The maximum character length constraint for the customer's input.
           */
          maximum_length?: number;

          /**
           * The minimum character length requirement for the customer's input.
           */
          minimum_length?: number;
        }

        interface Text {
          /**
           * The maximum character length constraint for the customer's input.
           */
          maximum_length?: number;

          /**
           * The minimum character length requirement for the customer's input.
           */
          minimum_length?: number;
        }

        type Type = 'dropdown' | 'numeric' | 'text';
      }

      interface CustomText {
        /**
         * Custom text that should be displayed after the payment confirmation button.
         */
        after_submit?: Stripe.Emptyable<CustomText.AfterSubmit>;

        /**
         * Custom text that should be displayed alongside shipping address collection.
         */
        shipping_address?: Stripe.Emptyable<CustomText.ShippingAddress>;

        /**
         * Custom text that should be displayed alongside the payment confirmation button.
         */
        submit?: Stripe.Emptyable<CustomText.Submit>;

        /**
         * Custom text that should be displayed in place of the default terms of service agreement text.
         */
        terms_of_service_acceptance?: Stripe.Emptyable<
          CustomText.TermsOfServiceAcceptance
        >;
      }

      namespace CustomText {
        interface AfterSubmit {
          /**
           * Text may be up to 1200 characters in length.
           */
          message: string;
        }

        interface ShippingAddress {
          /**
           * Text may be up to 1200 characters in length.
           */
          message: string;
        }

        interface Submit {
          /**
           * Text may be up to 1200 characters in length.
           */
          message: string;
        }

        interface TermsOfServiceAcceptance {
          /**
           * Text may be up to 1200 characters in length.
           */
          message: string;
        }
      }

      interface InvoiceCreation {
        /**
         * Whether the feature is enabled
         */
        enabled: boolean;

        /**
         * Invoice PDF configuration.
         */
        invoice_data?: InvoiceCreation.InvoiceData;
      }

      namespace InvoiceCreation {
        interface InvoiceData {
          /**
           * The account tax IDs associated with the invoice.
           */
          account_tax_ids?: Stripe.Emptyable<Array<string>>;

          /**
           * Default custom fields to be displayed on invoices for this customer.
           */
          custom_fields?: Stripe.Emptyable<Array<InvoiceData.CustomField>>;

          /**
           * An arbitrary string attached to the object. Often useful for displaying to users.
           */
          description?: string;

          /**
           * Default footer to be displayed on invoices for this customer.
           */
          footer?: string;

          /**
           * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
           */
          issuer?: InvoiceData.Issuer;

          /**
           * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
           */
          metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

          /**
           * Default options for invoice PDF rendering for this customer.
           */
          rendering_options?: Stripe.Emptyable<InvoiceData.RenderingOptions>;
        }

        namespace InvoiceData {
          interface CustomField {
            /**
             * The name of the custom field. This may be up to 40 characters.
             */
            name: string;

            /**
             * The value of the custom field. This may be up to 140 characters.
             */
            value: string;
          }

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

          interface RenderingOptions {
            /**
             * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs. One of `exclude_tax` or `include_inclusive_tax`. `include_inclusive_tax` will include inclusive tax (and exclude exclusive tax) in invoice PDF amounts. `exclude_tax` will exclude all tax (inclusive and exclusive alike) from invoice PDF amounts.
             */
            amount_tax_display?: Stripe.Emptyable<
              RenderingOptions.AmountTaxDisplay
            >;
          }

          namespace RenderingOptions {
            type AmountTaxDisplay = 'exclude_tax' | 'include_inclusive_tax';
          }
        }
      }

      interface LineItem {
        /**
         * When set, provides configuration for this item's quantity to be adjusted by the customer during checkout.
         */
        adjustable_quantity?: LineItem.AdjustableQuantity;

        /**
         * The ID of an existing line item on the payment link.
         */
        id: string;

        /**
         * The quantity of the line item being purchased.
         */
        quantity?: number;
      }

      namespace LineItem {
        interface AdjustableQuantity {
          /**
           * Set to true if the quantity can be adjusted to any non-negative Integer.
           */
          enabled: boolean;

          /**
           * The maximum quantity the customer can purchase. By default this value is 99. You can specify a value up to 999.
           */
          maximum?: number;

          /**
           * The minimum quantity the customer can purchase. By default this value is 0. If there is only one item in the cart then that item's quantity cannot go down to 0.
           */
          minimum?: number;
        }
      }

      interface PaymentIntentData {
        /**
         * An arbitrary string attached to the object. Often useful for displaying to users.
         */
        description?: Stripe.Emptyable<string>;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that will declaratively set metadata on [Payment Intents](https://stripe.com/docs/api/payment_intents) generated from this payment link. Unlike object-level metadata, this field is declarative. Updates will clear prior values.
         */
        metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

        /**
         * Text that appears on the customer's statement as the statement descriptor for a non-card charge. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
         *
         * Setting this value for a card charge returns an error. For card charges, set the [statement_descriptor_suffix](https://docs.stripe.com/get-started/account/statement-descriptors#dynamic) instead.
         */
        statement_descriptor?: Stripe.Emptyable<string>;

        /**
         * Provides information about a card charge. Concatenated to the account's [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static) to form the complete statement descriptor that appears on the customer's statement.
         */
        statement_descriptor_suffix?: Stripe.Emptyable<string>;

        /**
         * A string that identifies the resulting payment as part of a group. See the PaymentIntents [use case for connected accounts](https://stripe.com/docs/connect/separate-charges-and-transfers) for details.
         */
        transfer_group?: Stripe.Emptyable<string>;
      }

      type PaymentMethodCollection = 'always' | 'if_required';

      type PaymentMethodType =
        | 'affirm'
        | 'afterpay_clearpay'
        | 'alipay'
        | 'au_becs_debit'
        | 'bacs_debit'
        | 'bancontact'
        | 'blik'
        | 'boleto'
        | 'card'
        | 'cashapp'
        | 'eps'
        | 'fpx'
        | 'giropay'
        | 'grabpay'
        | 'ideal'
        | 'klarna'
        | 'konbini'
        | 'link'
        | 'mobilepay'
        | 'multibanco'
        | 'oxxo'
        | 'p24'
        | 'paynow'
        | 'paypal'
        | 'pix'
        | 'promptpay'
        | 'sepa_debit'
        | 'sofort'
        | 'swish'
        | 'twint'
        | 'us_bank_account'
        | 'wechat_pay'
        | 'zip';

      interface Restrictions {
        /**
         * Configuration for the `completed_sessions` restriction type.
         */
        completed_sessions: Restrictions.CompletedSessions;
      }

      namespace Restrictions {
        interface CompletedSessions {
          /**
           * The maximum number of checkout sessions that can be completed for the `completed_sessions` restriction to be met.
           */
          limit: number;
        }
      }

      interface ShippingAddressCollection {
        /**
         * An array of two-letter ISO country codes representing which countries Checkout should provide as options for
         * shipping locations. Unsupported country codes: `AS, CX, CC, CU, HM, IR, KP, MH, FM, NF, MP, PW, SD, SY, UM, VI`.
         */
        allowed_countries: Array<ShippingAddressCollection.AllowedCountry>;
      }

      namespace ShippingAddressCollection {
        type AllowedCountry =
          | 'AC'
          | 'AD'
          | 'AE'
          | 'AF'
          | 'AG'
          | 'AI'
          | 'AL'
          | 'AM'
          | 'AO'
          | 'AQ'
          | 'AR'
          | 'AT'
          | 'AU'
          | 'AW'
          | 'AX'
          | 'AZ'
          | 'BA'
          | 'BB'
          | 'BD'
          | 'BE'
          | 'BF'
          | 'BG'
          | 'BH'
          | 'BI'
          | 'BJ'
          | 'BL'
          | 'BM'
          | 'BN'
          | 'BO'
          | 'BQ'
          | 'BR'
          | 'BS'
          | 'BT'
          | 'BV'
          | 'BW'
          | 'BY'
          | 'BZ'
          | 'CA'
          | 'CD'
          | 'CF'
          | 'CG'
          | 'CH'
          | 'CI'
          | 'CK'
          | 'CL'
          | 'CM'
          | 'CN'
          | 'CO'
          | 'CR'
          | 'CV'
          | 'CW'
          | 'CY'
          | 'CZ'
          | 'DE'
          | 'DJ'
          | 'DK'
          | 'DM'
          | 'DO'
          | 'DZ'
          | 'EC'
          | 'EE'
          | 'EG'
          | 'EH'
          | 'ER'
          | 'ES'
          | 'ET'
          | 'FI'
          | 'FJ'
          | 'FK'
          | 'FO'
          | 'FR'
          | 'GA'
          | 'GB'
          | 'GD'
          | 'GE'
          | 'GF'
          | 'GG'
          | 'GH'
          | 'GI'
          | 'GL'
          | 'GM'
          | 'GN'
          | 'GP'
          | 'GQ'
          | 'GR'
          | 'GS'
          | 'GT'
          | 'GU'
          | 'GW'
          | 'GY'
          | 'HK'
          | 'HN'
          | 'HR'
          | 'HT'
          | 'HU'
          | 'ID'
          | 'IE'
          | 'IL'
          | 'IM'
          | 'IN'
          | 'IO'
          | 'IQ'
          | 'IS'
          | 'IT'
          | 'JE'
          | 'JM'
          | 'JO'
          | 'JP'
          | 'KE'
          | 'KG'
          | 'KH'
          | 'KI'
          | 'KM'
          | 'KN'
          | 'KR'
          | 'KW'
          | 'KY'
          | 'KZ'
          | 'LA'
          | 'LB'
          | 'LC'
          | 'LI'
          | 'LK'
          | 'LR'
          | 'LS'
          | 'LT'
          | 'LU'
          | 'LV'
          | 'LY'
          | 'MA'
          | 'MC'
          | 'MD'
          | 'ME'
          | 'MF'
          | 'MG'
          | 'MK'
          | 'ML'
          | 'MM'
          | 'MN'
          | 'MO'
          | 'MQ'
          | 'MR'
          | 'MS'
          | 'MT'
          | 'MU'
          | 'MV'
          | 'MW'
          | 'MX'
          | 'MY'
          | 'MZ'
          | 'NA'
          | 'NC'
          | 'NE'
          | 'NG'
          | 'NI'
          | 'NL'
          | 'NO'
          | 'NP'
          | 'NR'
          | 'NU'
          | 'NZ'
          | 'OM'
          | 'PA'
          | 'PE'
          | 'PF'
          | 'PG'
          | 'PH'
          | 'PK'
          | 'PL'
          | 'PM'
          | 'PN'
          | 'PR'
          | 'PS'
          | 'PT'
          | 'PY'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RS'
          | 'RU'
          | 'RW'
          | 'SA'
          | 'SB'
          | 'SC'
          | 'SE'
          | 'SG'
          | 'SH'
          | 'SI'
          | 'SJ'
          | 'SK'
          | 'SL'
          | 'SM'
          | 'SN'
          | 'SO'
          | 'SR'
          | 'SS'
          | 'ST'
          | 'SV'
          | 'SX'
          | 'SZ'
          | 'TA'
          | 'TC'
          | 'TD'
          | 'TF'
          | 'TG'
          | 'TH'
          | 'TJ'
          | 'TK'
          | 'TL'
          | 'TM'
          | 'TN'
          | 'TO'
          | 'TR'
          | 'TT'
          | 'TV'
          | 'TW'
          | 'TZ'
          | 'UA'
          | 'UG'
          | 'US'
          | 'UY'
          | 'UZ'
          | 'VA'
          | 'VC'
          | 'VE'
          | 'VG'
          | 'VN'
          | 'VU'
          | 'WF'
          | 'WS'
          | 'XK'
          | 'YE'
          | 'YT'
          | 'ZA'
          | 'ZM'
          | 'ZW'
          | 'ZZ';
      }

      interface SubscriptionData {
        /**
         * All invoices will be billed using the specified settings.
         */
        invoice_settings?: SubscriptionData.InvoiceSettings;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that will declaratively set metadata on [Subscriptions](https://stripe.com/docs/api/subscriptions) generated from this payment link. Unlike object-level metadata, this field is declarative. Updates will clear prior values.
         */
        metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

        /**
         * Settings related to subscription trials.
         */
        trial_settings?: Stripe.Emptyable<SubscriptionData.TrialSettings>;
      }

      namespace SubscriptionData {
        interface InvoiceSettings {
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

        interface TrialSettings {
          /**
           * Defines how the subscription should behave when the user's free trial ends.
           */
          end_behavior: TrialSettings.EndBehavior;
        }

        namespace TrialSettings {
          interface EndBehavior {
            /**
             * Indicates how the subscription should change when the trial ends if the user did not provide a payment method.
             */
            missing_payment_method: EndBehavior.MissingPaymentMethod;
          }

          namespace EndBehavior {
            type MissingPaymentMethod = 'cancel' | 'create_invoice' | 'pause';
          }
        }
      }

      interface TaxIdCollection {
        /**
         * Enable tax ID collection during checkout. Defaults to `false`.
         */
        enabled: boolean;

        /**
         * Describes whether a tax ID is required during checkout. Defaults to `never`.
         */
        required?: TaxIdCollection.Required;
      }

      namespace TaxIdCollection {
        type Required = 'if_supported' | 'never';
      }
    }

    interface PaymentLinkListParams extends PaginationParams {
      /**
       * Only return payment links that are active or inactive (e.g., pass `false` to list all inactive payment links).
       */
      active?: boolean;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface PaymentLinkListLineItemsParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class PaymentLinksResource {
      /**
       * Creates a payment link.
       */
      create(
        params: PaymentLinkCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentLink>>;

      /**
       * Retrieve a payment link.
       */
      retrieve(
        id: string,
        params?: PaymentLinkRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentLink>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentLink>>;

      /**
       * Updates a payment link.
       */
      update(
        id: string,
        params?: PaymentLinkUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.PaymentLink>>;

      /**
       * Returns a list of your payment links.
       */
      list(
        params?: PaymentLinkListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.PaymentLink>;
      list(options?: RequestOptions): ApiListPromise<Stripe.PaymentLink>;

      /**
       * When retrieving a payment link, there is an includable line_items property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.
       */
      listLineItems(
        id: string,
        params?: PaymentLinkListLineItemsParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.LineItem>;
      listLineItems(
        id: string,
        options?: RequestOptions
      ): ApiListPromise<Stripe.LineItem>;
    }
  }
}
