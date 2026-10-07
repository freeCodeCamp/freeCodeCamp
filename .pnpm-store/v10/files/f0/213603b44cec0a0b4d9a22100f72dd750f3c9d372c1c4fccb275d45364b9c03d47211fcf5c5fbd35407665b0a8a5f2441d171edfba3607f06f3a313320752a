// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A SetupIntent guides you through the process of setting up and saving a customer's payment credentials for future payments.
     * For example, you can use a SetupIntent to set up and save your customer's card without immediately collecting a payment.
     * Later, you can use [PaymentIntents](https://stripe.com/docs/api#payment_intents) to drive the payment flow.
     *
     * Create a SetupIntent when you're ready to collect your customer's payment credentials.
     * Don't maintain long-lived, unconfirmed SetupIntents because they might not be valid.
     * The SetupIntent transitions through multiple [statuses](https://docs.stripe.com/payments/intents#intent-statuses) as it guides
     * you through the setup process.
     *
     * Successful SetupIntents result in payment credentials that are optimized for future payments.
     * For example, cardholders in [certain regions](https://stripe.com/guides/strong-customer-authentication) might need to be run through
     * [Strong Customer Authentication](https://docs.stripe.com/strong-customer-authentication) during payment method collection
     * to streamline later [off-session payments](https://docs.stripe.com/payments/setup-intents).
     * If you use the SetupIntent with a [Customer](https://stripe.com/docs/api#setup_intent_object-customer),
     * it automatically attaches the resulting payment method to that Customer after successful setup.
     * We recommend using SetupIntents or [setup_future_usage](https://stripe.com/docs/api#payment_intent_object-setup_future_usage) on
     * PaymentIntents to save payment methods to prevent saving invalid or unoptimized payment methods.
     *
     * By using SetupIntents, you can reduce friction for your customers, even as regulations change over time.
     *
     * Related guide: [Setup Intents API](https://docs.stripe.com/payments/setup-intents)
     */
    interface SetupIntent {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'setup_intent';

      /**
       * ID of the Connect application that created the SetupIntent.
       */
      application: string | Stripe.Application | null;

      /**
       * If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.
       *
       * It can only be used for this Stripe Account's own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
       */
      attach_to_self?: boolean;

      /**
       * Settings for dynamic payment methods compatible with this Setup Intent
       */
      automatic_payment_methods: SetupIntent.AutomaticPaymentMethods | null;

      /**
       * Reason for cancellation of this SetupIntent, one of `abandoned`, `requested_by_customer`, or `duplicate`.
       */
      cancellation_reason: SetupIntent.CancellationReason | null;

      /**
       * The client secret of this SetupIntent. Used for client-side retrieval using a publishable key.
       *
       * The client secret can be used to complete payment setup from your frontend. It should not be stored, logged, or exposed to anyone other than the customer. Make sure that you have TLS enabled on any page that includes the client secret.
       */
      client_secret: string | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * ID of the Customer this SetupIntent belongs to, if one exists.
       *
       * If present, the SetupIntent's payment method will be attached to the Customer on successful setup. Payment methods attached to other Customers cannot be used with this SetupIntent.
       */
      customer: string | Stripe.Customer | Stripe.DeletedCustomer | null;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description: string | null;

      /**
       * Indicates the directions of money movement for which this payment method is intended to be used.
       *
       * Include `inbound` if you intend to use the payment method as the origin to pull funds from. Include `outbound` if you intend to use the payment method as the destination to send funds to. You can include both if you intend to use the payment method for both purposes.
       */
      flow_directions: Array<SetupIntent.FlowDirection> | null;

      /**
       * The error encountered in the previous SetupIntent confirmation.
       */
      last_setup_error: SetupIntent.LastSetupError | null;

      /**
       * The most recent SetupAttempt for this SetupIntent.
       */
      latest_attempt: string | Stripe.SetupAttempt | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * ID of the multi use Mandate generated by the SetupIntent.
       */
      mandate: string | Stripe.Mandate | null;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata | null;

      /**
       * If present, this property tells you what actions you need to take in order for your customer to continue payment setup.
       */
      next_action: SetupIntent.NextAction | null;

      /**
       * The account (if any) for which the setup is intended.
       */
      on_behalf_of: string | Stripe.Account | null;

      /**
       * ID of the payment method used with this SetupIntent. If the payment method is `card_present` and isn't a digital wallet, then the [generated_card](https://docs.stripe.com/api/setup_attempts/object#setup_attempt_object-payment_method_details-card_present-generated_card) associated with the `latest_attempt` is attached to the Customer instead.
       */
      payment_method: string | Stripe.PaymentMethod | null;

      /**
       * Information about the payment method configuration used for this Setup Intent.
       */
      payment_method_configuration_details: SetupIntent.PaymentMethodConfigurationDetails | null;

      /**
       * Payment method-specific configuration for this SetupIntent.
       */
      payment_method_options: SetupIntent.PaymentMethodOptions | null;

      /**
       * The list of payment method types (e.g. card) that this SetupIntent is allowed to set up.
       */
      payment_method_types: Array<string>;

      /**
       * ID of the single_use Mandate generated by the SetupIntent.
       */
      single_use_mandate: string | Stripe.Mandate | null;

      /**
       * [Status](https://stripe.com/docs/payments/intents#intent-statuses) of this SetupIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `canceled`, or `succeeded`.
       */
      status: SetupIntent.Status;

      /**
       * Indicates how the payment method is intended to be used in the future.
       *
       * Use `on_session` if you intend to only reuse the payment method when the customer is in your checkout flow. Use `off_session` if your customer may or may not be in your checkout flow. If not provided, this value defaults to `off_session`.
       */
      usage: string;
    }

    namespace SetupIntent {
      interface AutomaticPaymentMethods {
        /**
         * Controls whether this SetupIntent will accept redirect-based payment methods.
         *
         * Redirect-based payment methods may require your customer to be redirected to a payment method's app or site for authentication or additional steps. To [confirm](https://stripe.com/docs/api/setup_intents/confirm) this SetupIntent, you may be required to provide a `return_url` to redirect customers back to your site after they authenticate or complete the setup.
         */
        allow_redirects?: AutomaticPaymentMethods.AllowRedirects;

        /**
         * Automatically calculates compatible payment methods
         */
        enabled: boolean | null;
      }

      namespace AutomaticPaymentMethods {
        type AllowRedirects = 'always' | 'never';
      }

      type CancellationReason =
        | 'abandoned'
        | 'duplicate'
        | 'requested_by_customer';

      type FlowDirection = 'inbound' | 'outbound';

      interface LastSetupError {
        /**
         * For card errors, the ID of the failed charge.
         */
        charge?: string;

        /**
         * For some errors that could be handled programmatically, a short string indicating the [error code](https://stripe.com/docs/error-codes) reported.
         */
        code?: LastSetupError.Code;

        /**
         * For card errors resulting from a card issuer decline, a short string indicating the [card issuer's reason for the decline](https://stripe.com/docs/declines#issuer-declines) if they provide one.
         */
        decline_code?: string;

        /**
         * A URL to more information about the [error code](https://stripe.com/docs/error-codes) reported.
         */
        doc_url?: string;

        /**
         * A human-readable message providing more details about the error. For card errors, these messages can be shown to your users.
         */
        message?: string;

        /**
         * If the error is parameter-specific, the parameter related to the error. For example, you can use this to display a message near the correct form field.
         */
        param?: string;

        /**
         * A PaymentIntent guides you through the process of collecting a payment from your customer.
         * We recommend that you create exactly one PaymentIntent for each order or
         * customer session in your system. You can reference the PaymentIntent later to
         * see the history of payment attempts for a particular session.
         *
         * A PaymentIntent transitions through
         * [multiple statuses](https://stripe.com/docs/payments/intents#intent-statuses)
         * throughout its lifetime as it interfaces with Stripe.js to perform
         * authentication flows and ultimately creates at most one successful charge.
         *
         * Related guide: [Payment Intents API](https://stripe.com/docs/payments/payment-intents)
         */
        payment_intent?: Stripe.PaymentIntent;

        /**
         * PaymentMethod objects represent your customer's payment instruments.
         * You can use them with [PaymentIntents](https://stripe.com/docs/payments/payment-intents) to collect payments or save them to
         * Customer objects to store instrument details for future payments.
         *
         * Related guides: [Payment Methods](https://stripe.com/docs/payments/payment-methods) and [More Payment Scenarios](https://stripe.com/docs/payments/more-payment-scenarios).
         */
        payment_method?: Stripe.PaymentMethod;

        /**
         * If the error is specific to the type of payment method, the payment method type that had a problem. This field is only populated for invoice-related errors.
         */
        payment_method_type?: string;

        /**
         * A URL to the request log entry in your dashboard.
         */
        request_log_url?: string;

        /**
         * A SetupIntent guides you through the process of setting up and saving a customer's payment credentials for future payments.
         * For example, you can use a SetupIntent to set up and save your customer's card without immediately collecting a payment.
         * Later, you can use [PaymentIntents](https://stripe.com/docs/api#payment_intents) to drive the payment flow.
         *
         * Create a SetupIntent when you're ready to collect your customer's payment credentials.
         * Don't maintain long-lived, unconfirmed SetupIntents because they might not be valid.
         * The SetupIntent transitions through multiple [statuses](https://docs.stripe.com/payments/intents#intent-statuses) as it guides
         * you through the setup process.
         *
         * Successful SetupIntents result in payment credentials that are optimized for future payments.
         * For example, cardholders in [certain regions](https://stripe.com/guides/strong-customer-authentication) might need to be run through
         * [Strong Customer Authentication](https://docs.stripe.com/strong-customer-authentication) during payment method collection
         * to streamline later [off-session payments](https://docs.stripe.com/payments/setup-intents).
         * If you use the SetupIntent with a [Customer](https://stripe.com/docs/api#setup_intent_object-customer),
         * it automatically attaches the resulting payment method to that Customer after successful setup.
         * We recommend using SetupIntents or [setup_future_usage](https://stripe.com/docs/api#payment_intent_object-setup_future_usage) on
         * PaymentIntents to save payment methods to prevent saving invalid or unoptimized payment methods.
         *
         * By using SetupIntents, you can reduce friction for your customers, even as regulations change over time.
         *
         * Related guide: [Setup Intents API](https://docs.stripe.com/payments/setup-intents)
         */
        setup_intent?: Stripe.SetupIntent;

        source?: Stripe.CustomerSource;

        /**
         * The type of error returned. One of `api_error`, `card_error`, `idempotency_error`, or `invalid_request_error`
         */
        type: LastSetupError.Type;
      }

      namespace LastSetupError {
        type Code =
          | 'account_closed'
          | 'account_country_invalid_address'
          | 'account_error_country_change_requires_additional_steps'
          | 'account_information_mismatch'
          | 'account_invalid'
          | 'account_number_invalid'
          | 'acss_debit_session_incomplete'
          | 'alipay_upgrade_required'
          | 'amount_too_large'
          | 'amount_too_small'
          | 'api_key_expired'
          | 'application_fees_not_allowed'
          | 'authentication_required'
          | 'balance_insufficient'
          | 'balance_invalid_parameter'
          | 'bank_account_bad_routing_numbers'
          | 'bank_account_declined'
          | 'bank_account_exists'
          | 'bank_account_restricted'
          | 'bank_account_unusable'
          | 'bank_account_unverified'
          | 'bank_account_verification_failed'
          | 'billing_invalid_mandate'
          | 'bitcoin_upgrade_required'
          | 'capture_charge_authorization_expired'
          | 'capture_unauthorized_payment'
          | 'card_decline_rate_limit_exceeded'
          | 'card_declined'
          | 'cardholder_phone_number_required'
          | 'charge_already_captured'
          | 'charge_already_refunded'
          | 'charge_disputed'
          | 'charge_exceeds_source_limit'
          | 'charge_exceeds_transaction_limit'
          | 'charge_expired_for_capture'
          | 'charge_invalid_parameter'
          | 'charge_not_refundable'
          | 'clearing_code_unsupported'
          | 'country_code_invalid'
          | 'country_unsupported'
          | 'coupon_expired'
          | 'customer_max_payment_methods'
          | 'customer_max_subscriptions'
          | 'customer_tax_location_invalid'
          | 'debit_not_authorized'
          | 'email_invalid'
          | 'expired_card'
          | 'financial_connections_account_inactive'
          | 'financial_connections_no_successful_transaction_refresh'
          | 'forwarding_api_inactive'
          | 'forwarding_api_invalid_parameter'
          | 'forwarding_api_upstream_connection_error'
          | 'forwarding_api_upstream_connection_timeout'
          | 'idempotency_key_in_use'
          | 'incorrect_address'
          | 'incorrect_cvc'
          | 'incorrect_number'
          | 'incorrect_zip'
          | 'instant_payouts_config_disabled'
          | 'instant_payouts_currency_disabled'
          | 'instant_payouts_limit_exceeded'
          | 'instant_payouts_unsupported'
          | 'insufficient_funds'
          | 'intent_invalid_state'
          | 'intent_verification_method_missing'
          | 'invalid_card_type'
          | 'invalid_characters'
          | 'invalid_charge_amount'
          | 'invalid_cvc'
          | 'invalid_expiry_month'
          | 'invalid_expiry_year'
          | 'invalid_mandate_reference_prefix_format'
          | 'invalid_number'
          | 'invalid_source_usage'
          | 'invalid_tax_location'
          | 'invoice_no_customer_line_items'
          | 'invoice_no_payment_method_types'
          | 'invoice_no_subscription_line_items'
          | 'invoice_not_editable'
          | 'invoice_on_behalf_of_not_editable'
          | 'invoice_payment_intent_requires_action'
          | 'invoice_upcoming_none'
          | 'livemode_mismatch'
          | 'lock_timeout'
          | 'missing'
          | 'no_account'
          | 'not_allowed_on_standard_account'
          | 'out_of_inventory'
          | 'ownership_declaration_not_allowed'
          | 'parameter_invalid_empty'
          | 'parameter_invalid_integer'
          | 'parameter_invalid_string_blank'
          | 'parameter_invalid_string_empty'
          | 'parameter_missing'
          | 'parameter_unknown'
          | 'parameters_exclusive'
          | 'payment_intent_action_required'
          | 'payment_intent_authentication_failure'
          | 'payment_intent_incompatible_payment_method'
          | 'payment_intent_invalid_parameter'
          | 'payment_intent_konbini_rejected_confirmation_number'
          | 'payment_intent_mandate_invalid'
          | 'payment_intent_payment_attempt_expired'
          | 'payment_intent_payment_attempt_failed'
          | 'payment_intent_unexpected_state'
          | 'payment_method_bank_account_already_verified'
          | 'payment_method_bank_account_blocked'
          | 'payment_method_billing_details_address_missing'
          | 'payment_method_configuration_failures'
          | 'payment_method_currency_mismatch'
          | 'payment_method_customer_decline'
          | 'payment_method_invalid_parameter'
          | 'payment_method_invalid_parameter_testmode'
          | 'payment_method_microdeposit_failed'
          | 'payment_method_microdeposit_verification_amounts_invalid'
          | 'payment_method_microdeposit_verification_amounts_mismatch'
          | 'payment_method_microdeposit_verification_attempts_exceeded'
          | 'payment_method_microdeposit_verification_descriptor_code_mismatch'
          | 'payment_method_microdeposit_verification_timeout'
          | 'payment_method_not_available'
          | 'payment_method_provider_decline'
          | 'payment_method_provider_timeout'
          | 'payment_method_unactivated'
          | 'payment_method_unexpected_state'
          | 'payment_method_unsupported_type'
          | 'payout_reconciliation_not_ready'
          | 'payouts_limit_exceeded'
          | 'payouts_not_allowed'
          | 'platform_account_required'
          | 'platform_api_key_expired'
          | 'postal_code_invalid'
          | 'processing_error'
          | 'product_inactive'
          | 'progressive_onboarding_limit_exceeded'
          | 'rate_limit'
          | 'refer_to_customer'
          | 'refund_disputed_payment'
          | 'resource_already_exists'
          | 'resource_missing'
          | 'return_intent_already_processed'
          | 'routing_number_invalid'
          | 'secret_key_required'
          | 'sepa_unsupported_account'
          | 'setup_attempt_failed'
          | 'setup_intent_authentication_failure'
          | 'setup_intent_invalid_parameter'
          | 'setup_intent_mandate_invalid'
          | 'setup_intent_setup_attempt_expired'
          | 'setup_intent_unexpected_state'
          | 'shipping_address_invalid'
          | 'shipping_calculation_failed'
          | 'sku_inactive'
          | 'state_unsupported'
          | 'status_transition_invalid'
          | 'stripe_tax_inactive'
          | 'tax_id_invalid'
          | 'taxes_calculation_failed'
          | 'terminal_location_country_unsupported'
          | 'terminal_reader_busy'
          | 'terminal_reader_hardware_fault'
          | 'terminal_reader_invalid_location_for_activation'
          | 'terminal_reader_invalid_location_for_payment'
          | 'terminal_reader_offline'
          | 'terminal_reader_timeout'
          | 'testmode_charges_only'
          | 'tls_version_unsupported'
          | 'token_already_used'
          | 'token_card_network_invalid'
          | 'token_in_use'
          | 'transfer_source_balance_parameters_mismatch'
          | 'transfers_not_allowed'
          | 'url_invalid';

        type Type =
          | 'api_error'
          | 'card_error'
          | 'idempotency_error'
          | 'invalid_request_error';
      }

      interface NextAction {
        cashapp_handle_redirect_or_display_qr_code?: NextAction.CashappHandleRedirectOrDisplayQrCode;

        redirect_to_url?: NextAction.RedirectToUrl;

        /**
         * Type of the next action to perform, one of `redirect_to_url`, `use_stripe_sdk`, `alipay_handle_redirect`, `oxxo_display_details`, or `verify_with_microdeposits`.
         */
        type: string;

        /**
         * When confirming a SetupIntent with Stripe.js, Stripe.js depends on the contents of this dictionary to invoke authentication flows. The shape of the contents is subject to change and is only intended to be used by Stripe.js.
         */
        use_stripe_sdk?: NextAction.UseStripeSdk;

        verify_with_microdeposits?: NextAction.VerifyWithMicrodeposits;
      }

      namespace NextAction {
        interface CashappHandleRedirectOrDisplayQrCode {
          /**
           * The URL to the hosted Cash App Pay instructions page, which allows customers to view the QR code, and supports QR code refreshing on expiration.
           */
          hosted_instructions_url: string;

          /**
           * The url for mobile redirect based auth
           */
          mobile_auth_url: string;

          qr_code: CashappHandleRedirectOrDisplayQrCode.QrCode;
        }

        namespace CashappHandleRedirectOrDisplayQrCode {
          interface QrCode {
            /**
             * The date (unix timestamp) when the QR code expires.
             */
            expires_at: number;

            /**
             * The image_url_png string used to render QR code
             */
            image_url_png: string;

            /**
             * The image_url_svg string used to render QR code
             */
            image_url_svg: string;
          }
        }

        interface RedirectToUrl {
          /**
           * If the customer does not exit their browser while authenticating, they will be redirected to this specified URL after completion.
           */
          return_url: string | null;

          /**
           * The URL you must redirect your customer to in order to authenticate.
           */
          url: string | null;
        }

        interface UseStripeSdk {}

        interface VerifyWithMicrodeposits {
          /**
           * The timestamp when the microdeposits are expected to land.
           */
          arrival_date: number;

          /**
           * The URL for the hosted verification page, which allows customers to verify their bank account.
           */
          hosted_verification_url: string;

          /**
           * The type of the microdeposit sent to the customer. Used to distinguish between different verification methods.
           */
          microdeposit_type: VerifyWithMicrodeposits.MicrodepositType | null;
        }

        namespace VerifyWithMicrodeposits {
          type MicrodepositType = 'amounts' | 'descriptor_code';
        }
      }

      interface PaymentMethodConfigurationDetails {
        /**
         * ID of the payment method configuration used.
         */
        id: string;

        /**
         * ID of the parent payment method configuration used.
         */
        parent: string | null;
      }

      interface PaymentMethodOptions {
        acss_debit?: PaymentMethodOptions.AcssDebit;

        amazon_pay?: PaymentMethodOptions.AmazonPay;

        bacs_debit?: PaymentMethodOptions.BacsDebit;

        card?: PaymentMethodOptions.Card;

        card_present?: PaymentMethodOptions.CardPresent;

        link?: PaymentMethodOptions.Link;

        paypal?: PaymentMethodOptions.Paypal;

        sepa_debit?: PaymentMethodOptions.SepaDebit;

        us_bank_account?: PaymentMethodOptions.UsBankAccount;
      }

      namespace PaymentMethodOptions {
        interface AcssDebit {
          /**
           * Currency supported by the bank account
           */
          currency: AcssDebit.Currency | null;

          mandate_options?: AcssDebit.MandateOptions;

          /**
           * Bank account verification method.
           */
          verification_method?: AcssDebit.VerificationMethod;
        }

        namespace AcssDebit {
          type Currency = 'cad' | 'usd';

          interface MandateOptions {
            /**
             * A URL for custom mandate text
             */
            custom_mandate_url?: string;

            /**
             * List of Stripe products where this mandate can be selected automatically.
             */
            default_for?: Array<MandateOptions.DefaultFor>;

            /**
             * Description of the interval. Only required if the 'payment_schedule' parameter is 'interval' or 'combined'.
             */
            interval_description: string | null;

            /**
             * Payment schedule for the mandate.
             */
            payment_schedule: MandateOptions.PaymentSchedule | null;

            /**
             * Transaction type of the mandate.
             */
            transaction_type: MandateOptions.TransactionType | null;
          }

          namespace MandateOptions {
            type DefaultFor = 'invoice' | 'subscription';

            type PaymentSchedule = 'combined' | 'interval' | 'sporadic';

            type TransactionType = 'business' | 'personal';
          }

          type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
        }

        interface AmazonPay {}

        interface BacsDebit {
          mandate_options?: BacsDebit.MandateOptions;
        }

        namespace BacsDebit {
          interface MandateOptions {}
        }

        interface Card {
          /**
           * Configuration options for setting up an eMandate for cards issued in India.
           */
          mandate_options: Card.MandateOptions | null;

          /**
           * Selected network to process this SetupIntent on. Depends on the available networks of the card attached to the setup intent. Can be only set confirm-time.
           */
          network: Card.Network | null;

          /**
           * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. If not provided, this value defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
           */
          request_three_d_secure: Card.RequestThreeDSecure | null;
        }

        namespace Card {
          interface MandateOptions {
            /**
             * Amount to be charged for future payments.
             */
            amount: number;

            /**
             * One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param.
             */
            amount_type: MandateOptions.AmountType;

            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency: string;

            /**
             * A description of the mandate or subscription that is meant to be displayed to the customer.
             */
            description: string | null;

            /**
             * End date of the mandate or subscription. If not provided, the mandate will be active until canceled. If provided, end date should be after start date.
             */
            end_date: number | null;

            /**
             * Specifies payment frequency. One of `day`, `week`, `month`, `year`, or `sporadic`.
             */
            interval: MandateOptions.Interval;

            /**
             * The number of intervals between payments. For example, `interval=month` and `interval_count=3` indicates one payment every three months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks). This parameter is optional when `interval=sporadic`.
             */
            interval_count: number | null;

            /**
             * Unique identifier for the mandate or subscription.
             */
            reference: string;

            /**
             * Start date of the mandate or subscription. Start date should not be lesser than yesterday.
             */
            start_date: number;

            /**
             * Specifies the type of mandates supported. Possible values are `india`.
             */
            supported_types: Array<'india'> | null;
          }

          namespace MandateOptions {
            type AmountType = 'fixed' | 'maximum';

            type Interval = 'day' | 'month' | 'sporadic' | 'week' | 'year';
          }

          type Network =
            | 'amex'
            | 'cartes_bancaires'
            | 'diners'
            | 'discover'
            | 'eftpos_au'
            | 'girocard'
            | 'interac'
            | 'jcb'
            | 'mastercard'
            | 'unionpay'
            | 'unknown'
            | 'visa';

          type RequestThreeDSecure = 'any' | 'automatic' | 'challenge';
        }

        interface CardPresent {}

        interface Link {
          /**
           * [Deprecated] This is a legacy parameter that no longer has any function.
           * @deprecated
           */
          persistent_token: string | null;
        }

        interface Paypal {
          /**
           * The PayPal Billing Agreement ID (BAID). This is an ID generated by PayPal which represents the mandate between the merchant and the customer.
           */
          billing_agreement_id: string | null;
        }

        interface SepaDebit {
          mandate_options?: SepaDebit.MandateOptions;
        }

        namespace SepaDebit {
          interface MandateOptions {}
        }

        interface UsBankAccount {
          financial_connections?: UsBankAccount.FinancialConnections;

          mandate_options?: UsBankAccount.MandateOptions;

          /**
           * Bank account verification method.
           */
          verification_method?: UsBankAccount.VerificationMethod;
        }

        namespace UsBankAccount {
          interface FinancialConnections {
            filters?: FinancialConnections.Filters;

            /**
             * The list of permissions to request. The `payment_method` permission must be included.
             */
            permissions?: Array<FinancialConnections.Permission>;

            /**
             * Data features requested to be retrieved upon account creation.
             */
            prefetch: Array<FinancialConnections.Prefetch> | null;

            /**
             * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
             */
            return_url?: string;
          }

          namespace FinancialConnections {
            interface Filters {
              /**
               * The account subcategories to use to filter for possible accounts to link. Valid subcategories are `checking` and `savings`.
               */
              account_subcategories?: Array<Filters.AccountSubcategory>;
            }

            namespace Filters {
              type AccountSubcategory = 'checking' | 'savings';
            }

            type Permission =
              | 'balances'
              | 'ownership'
              | 'payment_method'
              | 'transactions';

            type Prefetch = 'balances' | 'ownership' | 'transactions';
          }

          interface MandateOptions {
            /**
             * Mandate collection method
             */
            collection_method?: 'paper';
          }

          type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
        }
      }

      type Status =
        | 'canceled'
        | 'processing'
        | 'requires_action'
        | 'requires_confirmation'
        | 'requires_payment_method'
        | 'succeeded';
    }
  }
}
