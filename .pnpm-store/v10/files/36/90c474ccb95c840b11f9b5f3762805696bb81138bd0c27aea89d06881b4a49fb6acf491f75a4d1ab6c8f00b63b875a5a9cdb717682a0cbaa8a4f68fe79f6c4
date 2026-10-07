// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A SetupAttempt describes one attempted confirmation of a SetupIntent,
     * whether that confirmation is successful or unsuccessful. You can use
     * SetupAttempts to inspect details of a specific attempt at setting up a
     * payment method using a SetupIntent.
     */
    interface SetupAttempt {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'setup_attempt';

      /**
       * The value of [application](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-application) on the SetupIntent at the time of this confirmation.
       */
      application: string | Stripe.Application | null;

      /**
       * If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.
       *
       * It can only be used for this Stripe Account's own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
       */
      attach_to_self?: boolean;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * The value of [customer](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-customer) on the SetupIntent at the time of this confirmation.
       */
      customer: string | Stripe.Customer | Stripe.DeletedCustomer | null;

      /**
       * Indicates the directions of money movement for which this payment method is intended to be used.
       *
       * Include `inbound` if you intend to use the payment method as the origin to pull funds from. Include `outbound` if you intend to use the payment method as the destination to send funds to. You can include both if you intend to use the payment method for both purposes.
       */
      flow_directions: Array<SetupAttempt.FlowDirection> | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * The value of [on_behalf_of](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-on_behalf_of) on the SetupIntent at the time of this confirmation.
       */
      on_behalf_of: string | Stripe.Account | null;

      /**
       * ID of the payment method used with this SetupAttempt.
       */
      payment_method: string | Stripe.PaymentMethod;

      payment_method_details: SetupAttempt.PaymentMethodDetails;

      /**
       * The error encountered during this attempt to confirm the SetupIntent, if any.
       */
      setup_error: SetupAttempt.SetupError | null;

      /**
       * ID of the SetupIntent that this attempt belongs to.
       */
      setup_intent: string | Stripe.SetupIntent;

      /**
       * Status of this SetupAttempt, one of `requires_confirmation`, `requires_action`, `processing`, `succeeded`, `failed`, or `abandoned`.
       */
      status: string;

      /**
       * The value of [usage](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-usage) on the SetupIntent at the time of this confirmation, one of `off_session` or `on_session`.
       */
      usage: string;
    }

    namespace SetupAttempt {
      type FlowDirection = 'inbound' | 'outbound';

      interface PaymentMethodDetails {
        acss_debit?: PaymentMethodDetails.AcssDebit;

        amazon_pay?: PaymentMethodDetails.AmazonPay;

        au_becs_debit?: PaymentMethodDetails.AuBecsDebit;

        bacs_debit?: PaymentMethodDetails.BacsDebit;

        bancontact?: PaymentMethodDetails.Bancontact;

        boleto?: PaymentMethodDetails.Boleto;

        card?: PaymentMethodDetails.Card;

        card_present?: PaymentMethodDetails.CardPresent;

        cashapp?: PaymentMethodDetails.Cashapp;

        ideal?: PaymentMethodDetails.Ideal;

        klarna?: PaymentMethodDetails.Klarna;

        link?: PaymentMethodDetails.Link;

        paypal?: PaymentMethodDetails.Paypal;

        revolut_pay?: PaymentMethodDetails.RevolutPay;

        sepa_debit?: PaymentMethodDetails.SepaDebit;

        sofort?: PaymentMethodDetails.Sofort;

        /**
         * The type of the payment method used in the SetupIntent (e.g., `card`). An additional hash is included on `payment_method_details` with a name matching this value. It contains confirmation-specific information for the payment method.
         */
        type: string;

        us_bank_account?: PaymentMethodDetails.UsBankAccount;
      }

      namespace PaymentMethodDetails {
        interface AcssDebit {}

        interface AmazonPay {}

        interface AuBecsDebit {}

        interface BacsDebit {}

        interface Bancontact {
          /**
           * Bank code of bank associated with the bank account.
           */
          bank_code: string | null;

          /**
           * Name of the bank associated with the bank account.
           */
          bank_name: string | null;

          /**
           * Bank Identifier Code of the bank associated with the bank account.
           */
          bic: string | null;

          /**
           * The ID of the SEPA Direct Debit PaymentMethod which was generated by this SetupAttempt.
           */
          generated_sepa_debit: string | Stripe.PaymentMethod | null;

          /**
           * The mandate for the SEPA Direct Debit PaymentMethod which was generated by this SetupAttempt.
           */
          generated_sepa_debit_mandate: string | Stripe.Mandate | null;

          /**
           * Last four characters of the IBAN.
           */
          iban_last4: string | null;

          /**
           * Preferred language of the Bancontact authorization page that the customer is redirected to.
           * Can be one of `en`, `de`, `fr`, or `nl`
           */
          preferred_language: Bancontact.PreferredLanguage | null;

          /**
           * Owner's verified full name. Values are verified or provided by Bancontact directly
           * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          verified_name: string | null;
        }

        namespace Bancontact {
          type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';
        }

        interface Boleto {}

        interface Card {
          /**
           * Card brand. Can be `amex`, `diners`, `discover`, `eftpos_au`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`.
           */
          brand: string | null;

          /**
           * Check results by Card networks on Card address and CVC at the time of authorization
           */
          checks: Card.Checks | null;

          /**
           * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
           */
          country: string | null;

          /**
           * A high-level description of the type of cards issued in this range. (For internal use only and not typically available in standard API requests.)
           */
          description?: string | null;

          /**
           * Two-digit number representing the card's expiration month.
           */
          exp_month: number | null;

          /**
           * Four-digit number representing the card's expiration year.
           */
          exp_year: number | null;

          /**
           * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
           *
           * *As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
           */
          fingerprint?: string | null;

          /**
           * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
           */
          funding: string | null;

          /**
           * Issuer identification number of the card. (For internal use only and not typically available in standard API requests.)
           */
          iin?: string | null;

          /**
           * The name of the card's issuing bank. (For internal use only and not typically available in standard API requests.)
           */
          issuer?: string | null;

          /**
           * The last four digits of the card.
           */
          last4: string | null;

          /**
           * Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `interac`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`.
           */
          network: string | null;

          /**
           * Populated if this authorization used 3D Secure authentication.
           */
          three_d_secure: Card.ThreeDSecure | null;

          /**
           * If this Card is part of a card wallet, this contains the details of the card wallet.
           */
          wallet: Card.Wallet | null;
        }

        namespace Card {
          interface Checks {
            /**
             * If a address line1 was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
             */
            address_line1_check: string | null;

            /**
             * If a address postal code was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
             */
            address_postal_code_check: string | null;

            /**
             * If a CVC was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
             */
            cvc_check: string | null;
          }

          interface ThreeDSecure {
            /**
             * For authenticated transactions: how the customer was authenticated by
             * the issuing bank.
             */
            authentication_flow: ThreeDSecure.AuthenticationFlow | null;

            /**
             * The Electronic Commerce Indicator (ECI). A protocol-level field
             * indicating what degree of authentication was performed.
             */
            electronic_commerce_indicator: ThreeDSecure.ElectronicCommerceIndicator | null;

            /**
             * Indicates the outcome of 3D Secure authentication.
             */
            result: ThreeDSecure.Result | null;

            /**
             * Additional information about why 3D Secure succeeded or failed based
             * on the `result`.
             */
            result_reason: ThreeDSecure.ResultReason | null;

            /**
             * The 3D Secure 1 XID or 3D Secure 2 Directory Server Transaction ID
             * (dsTransId) for this payment.
             */
            transaction_id: string | null;

            /**
             * The version of 3D Secure that was used.
             */
            version: ThreeDSecure.Version | null;
          }

          namespace ThreeDSecure {
            type AuthenticationFlow = 'challenge' | 'frictionless';

            type ElectronicCommerceIndicator = '01' | '02' | '05' | '06' | '07';

            type Result =
              | 'attempt_acknowledged'
              | 'authenticated'
              | 'exempted'
              | 'failed'
              | 'not_supported'
              | 'processing_error';

            type ResultReason =
              | 'abandoned'
              | 'bypassed'
              | 'canceled'
              | 'card_not_enrolled'
              | 'network_not_supported'
              | 'protocol_error'
              | 'rejected';

            type Version = '1.0.2' | '2.1.0' | '2.2.0';
          }

          interface Wallet {
            apple_pay?: Wallet.ApplePay;

            google_pay?: Wallet.GooglePay;

            /**
             * The type of the card wallet, one of `apple_pay`, `google_pay`, or `link`. An additional hash is included on the Wallet subhash with a name matching this value. It contains additional information specific to the card wallet type.
             */
            type: Wallet.Type;
          }

          namespace Wallet {
            interface ApplePay {}

            interface GooglePay {}

            type Type = 'apple_pay' | 'google_pay' | 'link';
          }
        }

        interface CardPresent {
          /**
           * The ID of the Card PaymentMethod which was generated by this SetupAttempt.
           */
          generated_card: string | Stripe.PaymentMethod | null;

          /**
           * Details about payments collected offline.
           */
          offline: CardPresent.Offline | null;
        }

        namespace CardPresent {
          interface Offline {
            /**
             * Time at which the payment was collected while offline
             */
            stored_at: number | null;

            /**
             * The method used to process this payment method offline. Only deferred is allowed.
             */
            type: 'deferred' | null;
          }
        }

        interface Cashapp {}

        interface Ideal {
          /**
           * The customer's bank. Can be one of `abn_amro`, `asn_bank`, `bunq`, `handelsbanken`, `ing`, `knab`, `moneyou`, `n26`, `nn`, `rabobank`, `regiobank`, `revolut`, `sns_bank`, `triodos_bank`, `van_lanschot`, or `yoursafe`.
           */
          bank: Ideal.Bank | null;

          /**
           * The Bank Identifier Code of the customer's bank.
           */
          bic: Ideal.Bic | null;

          /**
           * The ID of the SEPA Direct Debit PaymentMethod which was generated by this SetupAttempt.
           */
          generated_sepa_debit: string | Stripe.PaymentMethod | null;

          /**
           * The mandate for the SEPA Direct Debit PaymentMethod which was generated by this SetupAttempt.
           */
          generated_sepa_debit_mandate: string | Stripe.Mandate | null;

          /**
           * Last four characters of the IBAN.
           */
          iban_last4: string | null;

          /**
           * Owner's verified full name. Values are verified or provided by iDEAL directly
           * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          verified_name: string | null;
        }

        namespace Ideal {
          type Bank =
            | 'abn_amro'
            | 'asn_bank'
            | 'bunq'
            | 'handelsbanken'
            | 'ing'
            | 'knab'
            | 'moneyou'
            | 'n26'
            | 'nn'
            | 'rabobank'
            | 'regiobank'
            | 'revolut'
            | 'sns_bank'
            | 'triodos_bank'
            | 'van_lanschot'
            | 'yoursafe';

          type Bic =
            | 'ABNANL2A'
            | 'ASNBNL21'
            | 'BITSNL2A'
            | 'BUNQNL2A'
            | 'FVLBNL22'
            | 'HANDNL2A'
            | 'INGBNL2A'
            | 'KNABNL2H'
            | 'MOYONL21'
            | 'NNBANL2G'
            | 'NTSBDEB1'
            | 'RABONL2U'
            | 'RBRBNL21'
            | 'REVOIE23'
            | 'REVOLT21'
            | 'SNSBNL2A'
            | 'TRIONL2U';
        }

        interface Klarna {}

        interface Link {}

        interface Paypal {}

        interface RevolutPay {}

        interface SepaDebit {}

        interface Sofort {
          /**
           * Bank code of bank associated with the bank account.
           */
          bank_code: string | null;

          /**
           * Name of the bank associated with the bank account.
           */
          bank_name: string | null;

          /**
           * Bank Identifier Code of the bank associated with the bank account.
           */
          bic: string | null;

          /**
           * The ID of the SEPA Direct Debit PaymentMethod which was generated by this SetupAttempt.
           */
          generated_sepa_debit: string | Stripe.PaymentMethod | null;

          /**
           * The mandate for the SEPA Direct Debit PaymentMethod which was generated by this SetupAttempt.
           */
          generated_sepa_debit_mandate: string | Stripe.Mandate | null;

          /**
           * Last four characters of the IBAN.
           */
          iban_last4: string | null;

          /**
           * Preferred language of the Sofort authorization page that the customer is redirected to.
           * Can be one of `en`, `de`, `fr`, or `nl`
           */
          preferred_language: Sofort.PreferredLanguage | null;

          /**
           * Owner's verified full name. Values are verified or provided by Sofort directly
           * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
           */
          verified_name: string | null;
        }

        namespace Sofort {
          type PreferredLanguage = 'de' | 'en' | 'fr' | 'nl';
        }

        interface UsBankAccount {}
      }

      interface SetupError {
        /**
         * For card errors, the ID of the failed charge.
         */
        charge?: string;

        /**
         * For some errors that could be handled programmatically, a short string indicating the [error code](https://stripe.com/docs/error-codes) reported.
         */
        code?: SetupError.Code;

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
        type: SetupError.Type;
      }

      namespace SetupError {
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
    }
  }
}
