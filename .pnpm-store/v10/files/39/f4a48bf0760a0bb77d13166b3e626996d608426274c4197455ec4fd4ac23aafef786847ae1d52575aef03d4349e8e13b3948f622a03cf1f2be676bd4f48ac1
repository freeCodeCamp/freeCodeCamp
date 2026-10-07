// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface SetupIntentCreateParams {
      /**
       * If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.
       *
       * It can only be used for this Stripe Account's own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
       */
      attach_to_self?: boolean;

      /**
       * When you enable this parameter, this SetupIntent accepts payment methods that you enable in the Dashboard and that are compatible with its other parameters.
       */
      automatic_payment_methods?: SetupIntentCreateParams.AutomaticPaymentMethods;

      /**
       * Set to `true` to attempt to confirm this SetupIntent immediately. This parameter defaults to `false`. If a card is the attached payment method, you can provide a `return_url` in case further authentication is necessary.
       */
      confirm?: boolean;

      /**
       * ID of the ConfirmationToken used to confirm this SetupIntent.
       *
       * If the provided ConfirmationToken contains properties that are also being provided in this request, such as `payment_method`, then the values in this request will take precedence.
       */
      confirmation_token?: string;

      /**
       * ID of the Customer this SetupIntent belongs to, if one exists.
       *
       * If present, the SetupIntent's payment method will be attached to the Customer on successful setup. Payment methods attached to other Customers cannot be used with this SetupIntent.
       */
      customer?: string;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Indicates the directions of money movement for which this payment method is intended to be used.
       *
       * Include `inbound` if you intend to use the payment method as the origin to pull funds from. Include `outbound` if you intend to use the payment method as the destination to send funds to. You can include both if you intend to use the payment method for both purposes.
       */
      flow_directions?: Array<SetupIntentCreateParams.FlowDirection>;

      /**
       * This hash contains details about the mandate to create. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/setup_intents/create#create_setup_intent-confirm).
       */
      mandate_data?: Stripe.Emptyable<SetupIntentCreateParams.MandateData>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * The Stripe account ID created for this SetupIntent.
       */
      on_behalf_of?: string;

      /**
       * ID of the payment method (a PaymentMethod, Card, or saved Source object) to attach to this SetupIntent.
       */
      payment_method?: string;

      /**
       * The ID of the payment method configuration to use with this SetupIntent.
       */
      payment_method_configuration?: string;

      /**
       * When included, this hash creates a PaymentMethod that is set as the [`payment_method`](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-payment_method)
       * value in the SetupIntent.
       */
      payment_method_data?: SetupIntentCreateParams.PaymentMethodData;

      /**
       * Payment method-specific configuration for this SetupIntent.
       */
      payment_method_options?: SetupIntentCreateParams.PaymentMethodOptions;

      /**
       * The list of payment method types (for example, card) that this SetupIntent can use. If you don't provide this, it defaults to ["card"].
       */
      payment_method_types?: Array<string>;

      /**
       * The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site. To redirect to a mobile application, you can alternatively supply an application URI scheme. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/setup_intents/create#create_setup_intent-confirm).
       */
      return_url?: string;

      /**
       * If you populate this hash, this SetupIntent generates a `single_use` mandate after successful completion.
       */
      single_use?: SetupIntentCreateParams.SingleUse;

      /**
       * Indicates how the payment method is intended to be used in the future. If not provided, this value defaults to `off_session`.
       */
      usage?: SetupIntentCreateParams.Usage;

      /**
       * Set to `true` when confirming server-side and using Stripe.js, iOS, or Android client-side SDKs to handle the next actions.
       */
      use_stripe_sdk?: boolean;
    }

    namespace SetupIntentCreateParams {
      interface AutomaticPaymentMethods {
        /**
         * Controls whether this SetupIntent will accept redirect-based payment methods.
         *
         * Redirect-based payment methods may require your customer to be redirected to a payment method's app or site for authentication or additional steps. To [confirm](https://stripe.com/docs/api/setup_intents/confirm) this SetupIntent, you may be required to provide a `return_url` to redirect customers back to your site after they authenticate or complete the setup.
         */
        allow_redirects?: AutomaticPaymentMethods.AllowRedirects;

        /**
         * Whether this feature is enabled.
         */
        enabled: boolean;
      }

      namespace AutomaticPaymentMethods {
        type AllowRedirects = 'always' | 'never';
      }

      type FlowDirection = 'inbound' | 'outbound';

      interface MandateData {
        /**
         * This hash contains details about the customer acceptance of the Mandate.
         */
        customer_acceptance: MandateData.CustomerAcceptance;
      }

      namespace MandateData {
        interface CustomerAcceptance {
          /**
           * The time at which the customer accepted the Mandate.
           */
          accepted_at?: number;

          /**
           * If this is a Mandate accepted offline, this hash contains details about the offline acceptance.
           */
          offline?: CustomerAcceptance.Offline;

          /**
           * If this is a Mandate accepted online, this hash contains details about the online acceptance.
           */
          online?: CustomerAcceptance.Online;

          /**
           * The type of customer acceptance information included with the Mandate. One of `online` or `offline`.
           */
          type: CustomerAcceptance.Type;
        }

        namespace CustomerAcceptance {
          interface Offline {}

          interface Online {
            /**
             * The IP address from which the Mandate was accepted by the customer.
             */
            ip_address: string;

            /**
             * The user agent of the browser from which the Mandate was accepted by the customer.
             */
            user_agent: string;
          }

          type Type = 'offline' | 'online';
        }
      }

      interface PaymentMethodData {
        /**
         * If this is an `acss_debit` PaymentMethod, this hash contains details about the ACSS Debit payment method.
         */
        acss_debit?: PaymentMethodData.AcssDebit;

        /**
         * If this is an `affirm` PaymentMethod, this hash contains details about the Affirm payment method.
         */
        affirm?: PaymentMethodData.Affirm;

        /**
         * If this is an `AfterpayClearpay` PaymentMethod, this hash contains details about the AfterpayClearpay payment method.
         */
        afterpay_clearpay?: PaymentMethodData.AfterpayClearpay;

        /**
         * If this is an `Alipay` PaymentMethod, this hash contains details about the Alipay payment method.
         */
        alipay?: PaymentMethodData.Alipay;

        /**
         * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow. The field defaults to `unspecified`.
         */
        allow_redisplay?: PaymentMethodData.AllowRedisplay;

        /**
         * If this is a AmazonPay PaymentMethod, this hash contains details about the AmazonPay payment method.
         */
        amazon_pay?: PaymentMethodData.AmazonPay;

        /**
         * If this is an `au_becs_debit` PaymentMethod, this hash contains details about the bank account.
         */
        au_becs_debit?: PaymentMethodData.AuBecsDebit;

        /**
         * If this is a `bacs_debit` PaymentMethod, this hash contains details about the Bacs Direct Debit bank account.
         */
        bacs_debit?: PaymentMethodData.BacsDebit;

        /**
         * If this is a `bancontact` PaymentMethod, this hash contains details about the Bancontact payment method.
         */
        bancontact?: PaymentMethodData.Bancontact;

        /**
         * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
         */
        billing_details?: PaymentMethodData.BillingDetails;

        /**
         * If this is a `blik` PaymentMethod, this hash contains details about the BLIK payment method.
         */
        blik?: PaymentMethodData.Blik;

        /**
         * If this is a `boleto` PaymentMethod, this hash contains details about the Boleto payment method.
         */
        boleto?: PaymentMethodData.Boleto;

        /**
         * If this is a `cashapp` PaymentMethod, this hash contains details about the Cash App Pay payment method.
         */
        cashapp?: PaymentMethodData.Cashapp;

        /**
         * If this is a `customer_balance` PaymentMethod, this hash contains details about the CustomerBalance payment method.
         */
        customer_balance?: PaymentMethodData.CustomerBalance;

        /**
         * If this is an `eps` PaymentMethod, this hash contains details about the EPS payment method.
         */
        eps?: PaymentMethodData.Eps;

        /**
         * If this is an `fpx` PaymentMethod, this hash contains details about the FPX payment method.
         */
        fpx?: PaymentMethodData.Fpx;

        /**
         * If this is a `giropay` PaymentMethod, this hash contains details about the Giropay payment method.
         */
        giropay?: PaymentMethodData.Giropay;

        /**
         * If this is a `grabpay` PaymentMethod, this hash contains details about the GrabPay payment method.
         */
        grabpay?: PaymentMethodData.Grabpay;

        /**
         * If this is an `ideal` PaymentMethod, this hash contains details about the iDEAL payment method.
         */
        ideal?: PaymentMethodData.Ideal;

        /**
         * If this is an `interac_present` PaymentMethod, this hash contains details about the Interac Present payment method.
         */
        interac_present?: PaymentMethodData.InteracPresent;

        /**
         * If this is a `klarna` PaymentMethod, this hash contains details about the Klarna payment method.
         */
        klarna?: PaymentMethodData.Klarna;

        /**
         * If this is a `konbini` PaymentMethod, this hash contains details about the Konbini payment method.
         */
        konbini?: PaymentMethodData.Konbini;

        /**
         * If this is an `Link` PaymentMethod, this hash contains details about the Link payment method.
         */
        link?: PaymentMethodData.Link;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * If this is a `mobilepay` PaymentMethod, this hash contains details about the MobilePay payment method.
         */
        mobilepay?: PaymentMethodData.Mobilepay;

        /**
         * If this is a `multibanco` PaymentMethod, this hash contains details about the Multibanco payment method.
         */
        multibanco?: PaymentMethodData.Multibanco;

        /**
         * If this is an `oxxo` PaymentMethod, this hash contains details about the OXXO payment method.
         */
        oxxo?: PaymentMethodData.Oxxo;

        /**
         * If this is a `p24` PaymentMethod, this hash contains details about the P24 payment method.
         */
        p24?: PaymentMethodData.P24;

        /**
         * If this is a `paynow` PaymentMethod, this hash contains details about the PayNow payment method.
         */
        paynow?: PaymentMethodData.Paynow;

        /**
         * If this is a `paypal` PaymentMethod, this hash contains details about the PayPal payment method.
         */
        paypal?: PaymentMethodData.Paypal;

        /**
         * If this is a `pix` PaymentMethod, this hash contains details about the Pix payment method.
         */
        pix?: PaymentMethodData.Pix;

        /**
         * If this is a `promptpay` PaymentMethod, this hash contains details about the PromptPay payment method.
         */
        promptpay?: PaymentMethodData.Promptpay;

        /**
         * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
         */
        radar_options?: PaymentMethodData.RadarOptions;

        /**
         * If this is a `Revolut Pay` PaymentMethod, this hash contains details about the Revolut Pay payment method.
         */
        revolut_pay?: PaymentMethodData.RevolutPay;

        /**
         * If this is a `sepa_debit` PaymentMethod, this hash contains details about the SEPA debit bank account.
         */
        sepa_debit?: PaymentMethodData.SepaDebit;

        /**
         * If this is a `sofort` PaymentMethod, this hash contains details about the SOFORT payment method.
         */
        sofort?: PaymentMethodData.Sofort;

        /**
         * If this is a `swish` PaymentMethod, this hash contains details about the Swish payment method.
         */
        swish?: PaymentMethodData.Swish;

        /**
         * If this is a TWINT PaymentMethod, this hash contains details about the TWINT payment method.
         */
        twint?: PaymentMethodData.Twint;

        /**
         * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
         */
        type: PaymentMethodData.Type;

        /**
         * If this is an `us_bank_account` PaymentMethod, this hash contains details about the US bank account payment method.
         */
        us_bank_account?: PaymentMethodData.UsBankAccount;

        /**
         * If this is an `wechat_pay` PaymentMethod, this hash contains details about the wechat_pay payment method.
         */
        wechat_pay?: PaymentMethodData.WechatPay;

        /**
         * If this is a `zip` PaymentMethod, this hash contains details about the Zip payment method.
         */
        zip?: PaymentMethodData.Zip;
      }

      namespace PaymentMethodData {
        interface AcssDebit {
          /**
           * Customer's bank account number.
           */
          account_number: string;

          /**
           * Institution number of the customer's bank.
           */
          institution_number: string;

          /**
           * Transit number of the customer's bank.
           */
          transit_number: string;
        }

        interface Affirm {}

        interface AfterpayClearpay {}

        interface Alipay {}

        type AllowRedisplay = 'always' | 'limited' | 'unspecified';

        interface AmazonPay {}

        interface AuBecsDebit {
          /**
           * The account number for the bank account.
           */
          account_number: string;

          /**
           * Bank-State-Branch number of the bank account.
           */
          bsb_number: string;
        }

        interface BacsDebit {
          /**
           * Account number of the bank account that the funds will be debited from.
           */
          account_number?: string;

          /**
           * Sort code of the bank account. (e.g., `10-20-30`)
           */
          sort_code?: string;
        }

        interface Bancontact {}

        interface BillingDetails {
          /**
           * Billing address.
           */
          address?: Stripe.Emptyable<Stripe.AddressParam>;

          /**
           * Email address.
           */
          email?: Stripe.Emptyable<string>;

          /**
           * Full name.
           */
          name?: Stripe.Emptyable<string>;

          /**
           * Billing phone number (including extension).
           */
          phone?: Stripe.Emptyable<string>;
        }

        interface Blik {}

        interface Boleto {
          /**
           * The tax ID of the customer (CPF for individual consumers or CNPJ for businesses consumers)
           */
          tax_id: string;
        }

        interface Cashapp {}

        interface CustomerBalance {}

        interface Eps {
          /**
           * The customer's bank.
           */
          bank?: Eps.Bank;
        }

        namespace Eps {
          type Bank =
            | 'arzte_und_apotheker_bank'
            | 'austrian_anadi_bank_ag'
            | 'bank_austria'
            | 'bankhaus_carl_spangler'
            | 'bankhaus_schelhammer_und_schattera_ag'
            | 'bawag_psk_ag'
            | 'bks_bank_ag'
            | 'brull_kallmus_bank_ag'
            | 'btv_vier_lander_bank'
            | 'capital_bank_grawe_gruppe_ag'
            | 'deutsche_bank_ag'
            | 'dolomitenbank'
            | 'easybank_ag'
            | 'erste_bank_und_sparkassen'
            | 'hypo_alpeadriabank_international_ag'
            | 'hypo_bank_burgenland_aktiengesellschaft'
            | 'hypo_noe_lb_fur_niederosterreich_u_wien'
            | 'hypo_oberosterreich_salzburg_steiermark'
            | 'hypo_tirol_bank_ag'
            | 'hypo_vorarlberg_bank_ag'
            | 'marchfelder_bank'
            | 'oberbank_ag'
            | 'raiffeisen_bankengruppe_osterreich'
            | 'schoellerbank_ag'
            | 'sparda_bank_wien'
            | 'volksbank_gruppe'
            | 'volkskreditbank_ag'
            | 'vr_bank_braunau';
        }

        interface Fpx {
          /**
           * Account holder type for FPX transaction
           */
          account_holder_type?: Fpx.AccountHolderType;

          /**
           * The customer's bank.
           */
          bank: Fpx.Bank;
        }

        namespace Fpx {
          type AccountHolderType = 'company' | 'individual';

          type Bank =
            | 'affin_bank'
            | 'agrobank'
            | 'alliance_bank'
            | 'ambank'
            | 'bank_islam'
            | 'bank_muamalat'
            | 'bank_of_china'
            | 'bank_rakyat'
            | 'bsn'
            | 'cimb'
            | 'deutsche_bank'
            | 'hong_leong_bank'
            | 'hsbc'
            | 'kfh'
            | 'maybank2e'
            | 'maybank2u'
            | 'ocbc'
            | 'pb_enterprise'
            | 'public_bank'
            | 'rhb'
            | 'standard_chartered'
            | 'uob';
        }

        interface Giropay {}

        interface Grabpay {}

        interface Ideal {
          /**
           * The customer's bank.
           */
          bank?: Ideal.Bank;
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
        }

        interface InteracPresent {}

        interface Klarna {
          /**
           * Customer's date of birth
           */
          dob?: Klarna.Dob;
        }

        namespace Klarna {
          interface Dob {
            /**
             * The day of birth, between 1 and 31.
             */
            day: number;

            /**
             * The month of birth, between 1 and 12.
             */
            month: number;

            /**
             * The four-digit year of birth.
             */
            year: number;
          }
        }

        interface Konbini {}

        interface Link {}

        interface Mobilepay {}

        interface Multibanco {}

        interface Oxxo {}

        interface P24 {
          /**
           * The customer's bank.
           */
          bank?: P24.Bank;
        }

        namespace P24 {
          type Bank =
            | 'alior_bank'
            | 'bank_millennium'
            | 'bank_nowy_bfg_sa'
            | 'bank_pekao_sa'
            | 'banki_spbdzielcze'
            | 'blik'
            | 'bnp_paribas'
            | 'boz'
            | 'citi_handlowy'
            | 'credit_agricole'
            | 'envelobank'
            | 'etransfer_pocztowy24'
            | 'getin_bank'
            | 'ideabank'
            | 'ing'
            | 'inteligo'
            | 'mbank_mtransfer'
            | 'nest_przelew'
            | 'noble_pay'
            | 'pbac_z_ipko'
            | 'plus_bank'
            | 'santander_przelew24'
            | 'tmobile_usbugi_bankowe'
            | 'toyota_bank'
            | 'velobank'
            | 'volkswagen_bank';
        }

        interface Paynow {}

        interface Paypal {}

        interface Pix {}

        interface Promptpay {}

        interface RadarOptions {
          /**
           * A [Radar Session](https://stripe.com/docs/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
           */
          session?: string;
        }

        interface RevolutPay {}

        interface SepaDebit {
          /**
           * IBAN of the bank account.
           */
          iban: string;
        }

        interface Sofort {
          /**
           * Two-letter ISO code representing the country the bank account is located in.
           */
          country: Sofort.Country;
        }

        namespace Sofort {
          type Country = 'AT' | 'BE' | 'DE' | 'ES' | 'IT' | 'NL';
        }

        interface Swish {}

        interface Twint {}

        type Type =
          | 'acss_debit'
          | 'affirm'
          | 'afterpay_clearpay'
          | 'alipay'
          | 'amazon_pay'
          | 'au_becs_debit'
          | 'bacs_debit'
          | 'bancontact'
          | 'blik'
          | 'boleto'
          | 'cashapp'
          | 'customer_balance'
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
          | 'revolut_pay'
          | 'sepa_debit'
          | 'sofort'
          | 'swish'
          | 'twint'
          | 'us_bank_account'
          | 'wechat_pay'
          | 'zip';

        interface UsBankAccount {
          /**
           * Account holder type: individual or company.
           */
          account_holder_type?: UsBankAccount.AccountHolderType;

          /**
           * Account number of the bank account.
           */
          account_number?: string;

          /**
           * Account type: checkings or savings. Defaults to checking if omitted.
           */
          account_type?: UsBankAccount.AccountType;

          /**
           * The ID of a Financial Connections Account to use as a payment method.
           */
          financial_connections_account?: string;

          /**
           * Routing number of the bank account.
           */
          routing_number?: string;
        }

        namespace UsBankAccount {
          type AccountHolderType = 'company' | 'individual';

          type AccountType = 'checking' | 'savings';
        }

        interface WechatPay {}

        interface Zip {}
      }

      interface PaymentMethodOptions {
        /**
         * If this is a `acss_debit` SetupIntent, this sub-hash contains details about the ACSS Debit payment method options.
         */
        acss_debit?: PaymentMethodOptions.AcssDebit;

        /**
         * If this is a `amazon_pay` SetupIntent, this sub-hash contains details about the AmazonPay payment method options.
         */
        amazon_pay?: PaymentMethodOptions.AmazonPay;

        /**
         * If this is a `bacs_debit` SetupIntent, this sub-hash contains details about the Bacs Debit payment method options.
         */
        bacs_debit?: PaymentMethodOptions.BacsDebit;

        /**
         * Configuration for any card setup attempted on this SetupIntent.
         */
        card?: PaymentMethodOptions.Card;

        /**
         * If this is a `card_present` PaymentMethod, this sub-hash contains details about the card-present payment method options.
         */
        card_present?: PaymentMethodOptions.CardPresent;

        /**
         * If this is a `link` PaymentMethod, this sub-hash contains details about the Link payment method options.
         */
        link?: PaymentMethodOptions.Link;

        /**
         * If this is a `paypal` PaymentMethod, this sub-hash contains details about the PayPal payment method options.
         */
        paypal?: PaymentMethodOptions.Paypal;

        /**
         * If this is a `sepa_debit` SetupIntent, this sub-hash contains details about the SEPA Debit payment method options.
         */
        sepa_debit?: PaymentMethodOptions.SepaDebit;

        /**
         * If this is a `us_bank_account` SetupIntent, this sub-hash contains details about the US bank account payment method options.
         */
        us_bank_account?: PaymentMethodOptions.UsBankAccount;
      }

      namespace PaymentMethodOptions {
        interface AcssDebit {
          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency?: AcssDebit.Currency;

          /**
           * Additional fields for Mandate creation
           */
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
             * A URL for custom mandate text to render during confirmation step.
             * The URL will be rendered with additional GET parameters `payment_intent` and `payment_intent_client_secret` when confirming a Payment Intent,
             * or `setup_intent` and `setup_intent_client_secret` when confirming a Setup Intent.
             */
            custom_mandate_url?: Stripe.Emptyable<string>;

            /**
             * List of Stripe products where this mandate can be selected automatically.
             */
            default_for?: Array<MandateOptions.DefaultFor>;

            /**
             * Description of the mandate interval. Only required if 'payment_schedule' parameter is 'interval' or 'combined'.
             */
            interval_description?: string;

            /**
             * Payment schedule for the mandate.
             */
            payment_schedule?: MandateOptions.PaymentSchedule;

            /**
             * Transaction type of the mandate.
             */
            transaction_type?: MandateOptions.TransactionType;
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
          /**
           * Additional fields for Mandate creation
           */
          mandate_options?: BacsDebit.MandateOptions;
        }

        namespace BacsDebit {
          interface MandateOptions {}
        }

        interface Card {
          /**
           * Configuration options for setting up an eMandate for cards issued in India.
           */
          mandate_options?: Card.MandateOptions;

          /**
           * When specified, this parameter signals that a card has been collected
           * as MOTO (Mail Order Telephone Order) and thus out of scope for SCA. This
           * parameter can only be provided during confirmation.
           */
          moto?: boolean;

          /**
           * Selected network to process this SetupIntent on. Depends on the available networks of the card attached to the SetupIntent. Can be only set confirm-time.
           */
          network?: Card.Network;

          /**
           * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. If not provided, this value defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
           */
          request_three_d_secure?: Card.RequestThreeDSecure;

          /**
           * If 3D Secure authentication was performed with a third-party provider,
           * the authentication details to use for this setup.
           */
          three_d_secure?: Card.ThreeDSecure;
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
             * Currency in which future payments will be charged. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency: string;

            /**
             * A description of the mandate or subscription that is meant to be displayed to the customer.
             */
            description?: string;

            /**
             * End date of the mandate or subscription. If not provided, the mandate will be active until canceled. If provided, end date should be after start date.
             */
            end_date?: number;

            /**
             * Specifies payment frequency. One of `day`, `week`, `month`, `year`, or `sporadic`.
             */
            interval: MandateOptions.Interval;

            /**
             * The number of intervals between payments. For example, `interval=month` and `interval_count=3` indicates one payment every three months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks). This parameter is optional when `interval=sporadic`.
             */
            interval_count?: number;

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
            supported_types?: Array<'india'>;
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

          interface ThreeDSecure {
            /**
             * The `transStatus` returned from the card Issuer's ACS in the ARes.
             */
            ares_trans_status?: ThreeDSecure.AresTransStatus;

            /**
             * The cryptogram, also known as the "authentication value" (AAV, CAVV or
             * AEVV). This value is 20 bytes, base64-encoded into a 28-character string.
             * (Most 3D Secure providers will return the base64-encoded version, which
             * is what you should specify here.)
             */
            cryptogram?: string;

            /**
             * The Electronic Commerce Indicator (ECI) is returned by your 3D Secure
             * provider and indicates what degree of authentication was performed.
             */
            electronic_commerce_indicator?: ThreeDSecure.ElectronicCommerceIndicator;

            /**
             * Network specific 3DS fields. Network specific arguments require an
             * explicit card brand choice. The parameter `payment_method_options.card.network``
             * must be populated accordingly
             */
            network_options?: ThreeDSecure.NetworkOptions;

            /**
             * The challenge indicator (`threeDSRequestorChallengeInd`) which was requested in the
             * AReq sent to the card Issuer's ACS. A string containing 2 digits from 01-99.
             */
            requestor_challenge_indicator?: string;

            /**
             * For 3D Secure 1, the XID. For 3D Secure 2, the Directory Server
             * Transaction ID (dsTransID).
             */
            transaction_id?: string;

            /**
             * The version of 3D Secure that was performed.
             */
            version?: ThreeDSecure.Version;
          }

          namespace ThreeDSecure {
            type AresTransStatus = 'A' | 'C' | 'I' | 'N' | 'R' | 'U' | 'Y';

            type ElectronicCommerceIndicator = '01' | '02' | '05' | '06' | '07';

            interface NetworkOptions {
              /**
               * Cartes Bancaires-specific 3DS fields.
               */
              cartes_bancaires?: NetworkOptions.CartesBancaires;
            }

            namespace NetworkOptions {
              interface CartesBancaires {
                /**
                 * The cryptogram calculation algorithm used by the card Issuer's ACS
                 * to calculate the Authentication cryptogram. Also known as `cavvAlgorithm`.
                 * messageExtension: CB-AVALGO
                 */
                cb_avalgo: CartesBancaires.CbAvalgo;

                /**
                 * The exemption indicator returned from Cartes Bancaires in the ARes.
                 * message extension: CB-EXEMPTION; string (4 characters)
                 * This is a 3 byte bitmap (low significant byte first and most significant
                 * bit first) that has been Base64 encoded
                 */
                cb_exemption?: string;

                /**
                 * The risk score returned from Cartes Bancaires in the ARes.
                 * message extension: CB-SCORE; numeric value 0-99
                 */
                cb_score?: number;
              }

              namespace CartesBancaires {
                type CbAvalgo = '0' | '1' | '2' | '3' | '4' | 'A';
              }
            }

            type Version = '1.0.2' | '2.1.0' | '2.2.0';
          }
        }

        interface CardPresent {}

        interface Link {
          /**
           * [Deprecated] This is a legacy parameter that no longer has any function.
           * @deprecated
           */
          persistent_token?: string;
        }

        interface Paypal {
          /**
           * The PayPal Billing Agreement ID (BAID). This is an ID generated by PayPal which represents the mandate between the merchant and the customer.
           */
          billing_agreement_id?: string;
        }

        interface SepaDebit {
          /**
           * Additional fields for Mandate creation
           */
          mandate_options?: SepaDebit.MandateOptions;
        }

        namespace SepaDebit {
          interface MandateOptions {}
        }

        interface UsBankAccount {
          /**
           * Additional fields for Financial Connections Session creation
           */
          financial_connections?: UsBankAccount.FinancialConnections;

          /**
           * Additional fields for Mandate creation
           */
          mandate_options?: UsBankAccount.MandateOptions;

          /**
           * Additional fields for network related functions
           */
          networks?: UsBankAccount.Networks;

          /**
           * Bank account verification method.
           */
          verification_method?: UsBankAccount.VerificationMethod;
        }

        namespace UsBankAccount {
          interface FinancialConnections {
            /**
             * Provide filters for the linked accounts that the customer can select for the payment method
             */
            filters?: FinancialConnections.Filters;

            /**
             * The list of permissions to request. If this parameter is passed, the `payment_method` permission must be included. Valid permissions include: `balances`, `ownership`, `payment_method`, and `transactions`.
             */
            permissions?: Array<FinancialConnections.Permission>;

            /**
             * List of data features that you would like to retrieve upon account creation.
             */
            prefetch?: Array<FinancialConnections.Prefetch>;

            /**
             * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
             */
            return_url?: string;
          }

          namespace FinancialConnections {
            interface Filters {
              /**
               * The account subcategories to use to filter for selectable accounts. Valid subcategories are `checking` and `savings`.
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
             * The method used to collect offline mandate customer acceptance.
             */
            collection_method?: Stripe.Emptyable<'paper'>;
          }

          interface Networks {
            /**
             * Triggers validations to run across the selected networks
             */
            requested?: Array<Networks.Requested>;
          }

          namespace Networks {
            type Requested = 'ach' | 'us_domestic_wire';
          }

          type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
        }
      }

      interface SingleUse {
        /**
         * Amount the customer is granting permission to collect later. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
         */
        amount: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;
      }

      type Usage = 'off_session' | 'on_session';
    }

    interface SetupIntentRetrieveParams {
      /**
       * The client secret of the SetupIntent. We require this string if you use a publishable key to retrieve the SetupIntent.
       */
      client_secret?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface SetupIntentUpdateParams {
      /**
       * If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.
       *
       * It can only be used for this Stripe Account's own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
       */
      attach_to_self?: boolean;

      /**
       * ID of the Customer this SetupIntent belongs to, if one exists.
       *
       * If present, the SetupIntent's payment method will be attached to the Customer on successful setup. Payment methods attached to other Customers cannot be used with this SetupIntent.
       */
      customer?: string;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Indicates the directions of money movement for which this payment method is intended to be used.
       *
       * Include `inbound` if you intend to use the payment method as the origin to pull funds from. Include `outbound` if you intend to use the payment method as the destination to send funds to. You can include both if you intend to use the payment method for both purposes.
       */
      flow_directions?: Array<SetupIntentUpdateParams.FlowDirection>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * ID of the payment method (a PaymentMethod, Card, or saved Source object) to attach to this SetupIntent. To unset this field to null, pass in an empty string.
       */
      payment_method?: string;

      /**
       * The ID of the payment method configuration to use with this SetupIntent.
       */
      payment_method_configuration?: string;

      /**
       * When included, this hash creates a PaymentMethod that is set as the [`payment_method`](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-payment_method)
       * value in the SetupIntent.
       */
      payment_method_data?: SetupIntentUpdateParams.PaymentMethodData;

      /**
       * Payment method-specific configuration for this SetupIntent.
       */
      payment_method_options?: SetupIntentUpdateParams.PaymentMethodOptions;

      /**
       * The list of payment method types (for example, card) that this SetupIntent can set up. If you don't provide this array, it defaults to ["card"].
       */
      payment_method_types?: Array<string>;
    }

    namespace SetupIntentUpdateParams {
      type FlowDirection = 'inbound' | 'outbound';

      interface PaymentMethodData {
        /**
         * If this is an `acss_debit` PaymentMethod, this hash contains details about the ACSS Debit payment method.
         */
        acss_debit?: PaymentMethodData.AcssDebit;

        /**
         * If this is an `affirm` PaymentMethod, this hash contains details about the Affirm payment method.
         */
        affirm?: PaymentMethodData.Affirm;

        /**
         * If this is an `AfterpayClearpay` PaymentMethod, this hash contains details about the AfterpayClearpay payment method.
         */
        afterpay_clearpay?: PaymentMethodData.AfterpayClearpay;

        /**
         * If this is an `Alipay` PaymentMethod, this hash contains details about the Alipay payment method.
         */
        alipay?: PaymentMethodData.Alipay;

        /**
         * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow. The field defaults to `unspecified`.
         */
        allow_redisplay?: PaymentMethodData.AllowRedisplay;

        /**
         * If this is a AmazonPay PaymentMethod, this hash contains details about the AmazonPay payment method.
         */
        amazon_pay?: PaymentMethodData.AmazonPay;

        /**
         * If this is an `au_becs_debit` PaymentMethod, this hash contains details about the bank account.
         */
        au_becs_debit?: PaymentMethodData.AuBecsDebit;

        /**
         * If this is a `bacs_debit` PaymentMethod, this hash contains details about the Bacs Direct Debit bank account.
         */
        bacs_debit?: PaymentMethodData.BacsDebit;

        /**
         * If this is a `bancontact` PaymentMethod, this hash contains details about the Bancontact payment method.
         */
        bancontact?: PaymentMethodData.Bancontact;

        /**
         * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
         */
        billing_details?: PaymentMethodData.BillingDetails;

        /**
         * If this is a `blik` PaymentMethod, this hash contains details about the BLIK payment method.
         */
        blik?: PaymentMethodData.Blik;

        /**
         * If this is a `boleto` PaymentMethod, this hash contains details about the Boleto payment method.
         */
        boleto?: PaymentMethodData.Boleto;

        /**
         * If this is a `cashapp` PaymentMethod, this hash contains details about the Cash App Pay payment method.
         */
        cashapp?: PaymentMethodData.Cashapp;

        /**
         * If this is a `customer_balance` PaymentMethod, this hash contains details about the CustomerBalance payment method.
         */
        customer_balance?: PaymentMethodData.CustomerBalance;

        /**
         * If this is an `eps` PaymentMethod, this hash contains details about the EPS payment method.
         */
        eps?: PaymentMethodData.Eps;

        /**
         * If this is an `fpx` PaymentMethod, this hash contains details about the FPX payment method.
         */
        fpx?: PaymentMethodData.Fpx;

        /**
         * If this is a `giropay` PaymentMethod, this hash contains details about the Giropay payment method.
         */
        giropay?: PaymentMethodData.Giropay;

        /**
         * If this is a `grabpay` PaymentMethod, this hash contains details about the GrabPay payment method.
         */
        grabpay?: PaymentMethodData.Grabpay;

        /**
         * If this is an `ideal` PaymentMethod, this hash contains details about the iDEAL payment method.
         */
        ideal?: PaymentMethodData.Ideal;

        /**
         * If this is an `interac_present` PaymentMethod, this hash contains details about the Interac Present payment method.
         */
        interac_present?: PaymentMethodData.InteracPresent;

        /**
         * If this is a `klarna` PaymentMethod, this hash contains details about the Klarna payment method.
         */
        klarna?: PaymentMethodData.Klarna;

        /**
         * If this is a `konbini` PaymentMethod, this hash contains details about the Konbini payment method.
         */
        konbini?: PaymentMethodData.Konbini;

        /**
         * If this is an `Link` PaymentMethod, this hash contains details about the Link payment method.
         */
        link?: PaymentMethodData.Link;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * If this is a `mobilepay` PaymentMethod, this hash contains details about the MobilePay payment method.
         */
        mobilepay?: PaymentMethodData.Mobilepay;

        /**
         * If this is a `multibanco` PaymentMethod, this hash contains details about the Multibanco payment method.
         */
        multibanco?: PaymentMethodData.Multibanco;

        /**
         * If this is an `oxxo` PaymentMethod, this hash contains details about the OXXO payment method.
         */
        oxxo?: PaymentMethodData.Oxxo;

        /**
         * If this is a `p24` PaymentMethod, this hash contains details about the P24 payment method.
         */
        p24?: PaymentMethodData.P24;

        /**
         * If this is a `paynow` PaymentMethod, this hash contains details about the PayNow payment method.
         */
        paynow?: PaymentMethodData.Paynow;

        /**
         * If this is a `paypal` PaymentMethod, this hash contains details about the PayPal payment method.
         */
        paypal?: PaymentMethodData.Paypal;

        /**
         * If this is a `pix` PaymentMethod, this hash contains details about the Pix payment method.
         */
        pix?: PaymentMethodData.Pix;

        /**
         * If this is a `promptpay` PaymentMethod, this hash contains details about the PromptPay payment method.
         */
        promptpay?: PaymentMethodData.Promptpay;

        /**
         * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
         */
        radar_options?: PaymentMethodData.RadarOptions;

        /**
         * If this is a `Revolut Pay` PaymentMethod, this hash contains details about the Revolut Pay payment method.
         */
        revolut_pay?: PaymentMethodData.RevolutPay;

        /**
         * If this is a `sepa_debit` PaymentMethod, this hash contains details about the SEPA debit bank account.
         */
        sepa_debit?: PaymentMethodData.SepaDebit;

        /**
         * If this is a `sofort` PaymentMethod, this hash contains details about the SOFORT payment method.
         */
        sofort?: PaymentMethodData.Sofort;

        /**
         * If this is a `swish` PaymentMethod, this hash contains details about the Swish payment method.
         */
        swish?: PaymentMethodData.Swish;

        /**
         * If this is a TWINT PaymentMethod, this hash contains details about the TWINT payment method.
         */
        twint?: PaymentMethodData.Twint;

        /**
         * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
         */
        type: PaymentMethodData.Type;

        /**
         * If this is an `us_bank_account` PaymentMethod, this hash contains details about the US bank account payment method.
         */
        us_bank_account?: PaymentMethodData.UsBankAccount;

        /**
         * If this is an `wechat_pay` PaymentMethod, this hash contains details about the wechat_pay payment method.
         */
        wechat_pay?: PaymentMethodData.WechatPay;

        /**
         * If this is a `zip` PaymentMethod, this hash contains details about the Zip payment method.
         */
        zip?: PaymentMethodData.Zip;
      }

      namespace PaymentMethodData {
        interface AcssDebit {
          /**
           * Customer's bank account number.
           */
          account_number: string;

          /**
           * Institution number of the customer's bank.
           */
          institution_number: string;

          /**
           * Transit number of the customer's bank.
           */
          transit_number: string;
        }

        interface Affirm {}

        interface AfterpayClearpay {}

        interface Alipay {}

        type AllowRedisplay = 'always' | 'limited' | 'unspecified';

        interface AmazonPay {}

        interface AuBecsDebit {
          /**
           * The account number for the bank account.
           */
          account_number: string;

          /**
           * Bank-State-Branch number of the bank account.
           */
          bsb_number: string;
        }

        interface BacsDebit {
          /**
           * Account number of the bank account that the funds will be debited from.
           */
          account_number?: string;

          /**
           * Sort code of the bank account. (e.g., `10-20-30`)
           */
          sort_code?: string;
        }

        interface Bancontact {}

        interface BillingDetails {
          /**
           * Billing address.
           */
          address?: Stripe.Emptyable<Stripe.AddressParam>;

          /**
           * Email address.
           */
          email?: Stripe.Emptyable<string>;

          /**
           * Full name.
           */
          name?: Stripe.Emptyable<string>;

          /**
           * Billing phone number (including extension).
           */
          phone?: Stripe.Emptyable<string>;
        }

        interface Blik {}

        interface Boleto {
          /**
           * The tax ID of the customer (CPF for individual consumers or CNPJ for businesses consumers)
           */
          tax_id: string;
        }

        interface Cashapp {}

        interface CustomerBalance {}

        interface Eps {
          /**
           * The customer's bank.
           */
          bank?: Eps.Bank;
        }

        namespace Eps {
          type Bank =
            | 'arzte_und_apotheker_bank'
            | 'austrian_anadi_bank_ag'
            | 'bank_austria'
            | 'bankhaus_carl_spangler'
            | 'bankhaus_schelhammer_und_schattera_ag'
            | 'bawag_psk_ag'
            | 'bks_bank_ag'
            | 'brull_kallmus_bank_ag'
            | 'btv_vier_lander_bank'
            | 'capital_bank_grawe_gruppe_ag'
            | 'deutsche_bank_ag'
            | 'dolomitenbank'
            | 'easybank_ag'
            | 'erste_bank_und_sparkassen'
            | 'hypo_alpeadriabank_international_ag'
            | 'hypo_bank_burgenland_aktiengesellschaft'
            | 'hypo_noe_lb_fur_niederosterreich_u_wien'
            | 'hypo_oberosterreich_salzburg_steiermark'
            | 'hypo_tirol_bank_ag'
            | 'hypo_vorarlberg_bank_ag'
            | 'marchfelder_bank'
            | 'oberbank_ag'
            | 'raiffeisen_bankengruppe_osterreich'
            | 'schoellerbank_ag'
            | 'sparda_bank_wien'
            | 'volksbank_gruppe'
            | 'volkskreditbank_ag'
            | 'vr_bank_braunau';
        }

        interface Fpx {
          /**
           * Account holder type for FPX transaction
           */
          account_holder_type?: Fpx.AccountHolderType;

          /**
           * The customer's bank.
           */
          bank: Fpx.Bank;
        }

        namespace Fpx {
          type AccountHolderType = 'company' | 'individual';

          type Bank =
            | 'affin_bank'
            | 'agrobank'
            | 'alliance_bank'
            | 'ambank'
            | 'bank_islam'
            | 'bank_muamalat'
            | 'bank_of_china'
            | 'bank_rakyat'
            | 'bsn'
            | 'cimb'
            | 'deutsche_bank'
            | 'hong_leong_bank'
            | 'hsbc'
            | 'kfh'
            | 'maybank2e'
            | 'maybank2u'
            | 'ocbc'
            | 'pb_enterprise'
            | 'public_bank'
            | 'rhb'
            | 'standard_chartered'
            | 'uob';
        }

        interface Giropay {}

        interface Grabpay {}

        interface Ideal {
          /**
           * The customer's bank.
           */
          bank?: Ideal.Bank;
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
        }

        interface InteracPresent {}

        interface Klarna {
          /**
           * Customer's date of birth
           */
          dob?: Klarna.Dob;
        }

        namespace Klarna {
          interface Dob {
            /**
             * The day of birth, between 1 and 31.
             */
            day: number;

            /**
             * The month of birth, between 1 and 12.
             */
            month: number;

            /**
             * The four-digit year of birth.
             */
            year: number;
          }
        }

        interface Konbini {}

        interface Link {}

        interface Mobilepay {}

        interface Multibanco {}

        interface Oxxo {}

        interface P24 {
          /**
           * The customer's bank.
           */
          bank?: P24.Bank;
        }

        namespace P24 {
          type Bank =
            | 'alior_bank'
            | 'bank_millennium'
            | 'bank_nowy_bfg_sa'
            | 'bank_pekao_sa'
            | 'banki_spbdzielcze'
            | 'blik'
            | 'bnp_paribas'
            | 'boz'
            | 'citi_handlowy'
            | 'credit_agricole'
            | 'envelobank'
            | 'etransfer_pocztowy24'
            | 'getin_bank'
            | 'ideabank'
            | 'ing'
            | 'inteligo'
            | 'mbank_mtransfer'
            | 'nest_przelew'
            | 'noble_pay'
            | 'pbac_z_ipko'
            | 'plus_bank'
            | 'santander_przelew24'
            | 'tmobile_usbugi_bankowe'
            | 'toyota_bank'
            | 'velobank'
            | 'volkswagen_bank';
        }

        interface Paynow {}

        interface Paypal {}

        interface Pix {}

        interface Promptpay {}

        interface RadarOptions {
          /**
           * A [Radar Session](https://stripe.com/docs/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
           */
          session?: string;
        }

        interface RevolutPay {}

        interface SepaDebit {
          /**
           * IBAN of the bank account.
           */
          iban: string;
        }

        interface Sofort {
          /**
           * Two-letter ISO code representing the country the bank account is located in.
           */
          country: Sofort.Country;
        }

        namespace Sofort {
          type Country = 'AT' | 'BE' | 'DE' | 'ES' | 'IT' | 'NL';
        }

        interface Swish {}

        interface Twint {}

        type Type =
          | 'acss_debit'
          | 'affirm'
          | 'afterpay_clearpay'
          | 'alipay'
          | 'amazon_pay'
          | 'au_becs_debit'
          | 'bacs_debit'
          | 'bancontact'
          | 'blik'
          | 'boleto'
          | 'cashapp'
          | 'customer_balance'
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
          | 'revolut_pay'
          | 'sepa_debit'
          | 'sofort'
          | 'swish'
          | 'twint'
          | 'us_bank_account'
          | 'wechat_pay'
          | 'zip';

        interface UsBankAccount {
          /**
           * Account holder type: individual or company.
           */
          account_holder_type?: UsBankAccount.AccountHolderType;

          /**
           * Account number of the bank account.
           */
          account_number?: string;

          /**
           * Account type: checkings or savings. Defaults to checking if omitted.
           */
          account_type?: UsBankAccount.AccountType;

          /**
           * The ID of a Financial Connections Account to use as a payment method.
           */
          financial_connections_account?: string;

          /**
           * Routing number of the bank account.
           */
          routing_number?: string;
        }

        namespace UsBankAccount {
          type AccountHolderType = 'company' | 'individual';

          type AccountType = 'checking' | 'savings';
        }

        interface WechatPay {}

        interface Zip {}
      }

      interface PaymentMethodOptions {
        /**
         * If this is a `acss_debit` SetupIntent, this sub-hash contains details about the ACSS Debit payment method options.
         */
        acss_debit?: PaymentMethodOptions.AcssDebit;

        /**
         * If this is a `amazon_pay` SetupIntent, this sub-hash contains details about the AmazonPay payment method options.
         */
        amazon_pay?: PaymentMethodOptions.AmazonPay;

        /**
         * If this is a `bacs_debit` SetupIntent, this sub-hash contains details about the Bacs Debit payment method options.
         */
        bacs_debit?: PaymentMethodOptions.BacsDebit;

        /**
         * Configuration for any card setup attempted on this SetupIntent.
         */
        card?: PaymentMethodOptions.Card;

        /**
         * If this is a `card_present` PaymentMethod, this sub-hash contains details about the card-present payment method options.
         */
        card_present?: PaymentMethodOptions.CardPresent;

        /**
         * If this is a `link` PaymentMethod, this sub-hash contains details about the Link payment method options.
         */
        link?: PaymentMethodOptions.Link;

        /**
         * If this is a `paypal` PaymentMethod, this sub-hash contains details about the PayPal payment method options.
         */
        paypal?: PaymentMethodOptions.Paypal;

        /**
         * If this is a `sepa_debit` SetupIntent, this sub-hash contains details about the SEPA Debit payment method options.
         */
        sepa_debit?: PaymentMethodOptions.SepaDebit;

        /**
         * If this is a `us_bank_account` SetupIntent, this sub-hash contains details about the US bank account payment method options.
         */
        us_bank_account?: PaymentMethodOptions.UsBankAccount;
      }

      namespace PaymentMethodOptions {
        interface AcssDebit {
          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency?: AcssDebit.Currency;

          /**
           * Additional fields for Mandate creation
           */
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
             * A URL for custom mandate text to render during confirmation step.
             * The URL will be rendered with additional GET parameters `payment_intent` and `payment_intent_client_secret` when confirming a Payment Intent,
             * or `setup_intent` and `setup_intent_client_secret` when confirming a Setup Intent.
             */
            custom_mandate_url?: Stripe.Emptyable<string>;

            /**
             * List of Stripe products where this mandate can be selected automatically.
             */
            default_for?: Array<MandateOptions.DefaultFor>;

            /**
             * Description of the mandate interval. Only required if 'payment_schedule' parameter is 'interval' or 'combined'.
             */
            interval_description?: string;

            /**
             * Payment schedule for the mandate.
             */
            payment_schedule?: MandateOptions.PaymentSchedule;

            /**
             * Transaction type of the mandate.
             */
            transaction_type?: MandateOptions.TransactionType;
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
          /**
           * Additional fields for Mandate creation
           */
          mandate_options?: BacsDebit.MandateOptions;
        }

        namespace BacsDebit {
          interface MandateOptions {}
        }

        interface Card {
          /**
           * Configuration options for setting up an eMandate for cards issued in India.
           */
          mandate_options?: Card.MandateOptions;

          /**
           * When specified, this parameter signals that a card has been collected
           * as MOTO (Mail Order Telephone Order) and thus out of scope for SCA. This
           * parameter can only be provided during confirmation.
           */
          moto?: boolean;

          /**
           * Selected network to process this SetupIntent on. Depends on the available networks of the card attached to the SetupIntent. Can be only set confirm-time.
           */
          network?: Card.Network;

          /**
           * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. If not provided, this value defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
           */
          request_three_d_secure?: Card.RequestThreeDSecure;

          /**
           * If 3D Secure authentication was performed with a third-party provider,
           * the authentication details to use for this setup.
           */
          three_d_secure?: Card.ThreeDSecure;
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
             * Currency in which future payments will be charged. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency: string;

            /**
             * A description of the mandate or subscription that is meant to be displayed to the customer.
             */
            description?: string;

            /**
             * End date of the mandate or subscription. If not provided, the mandate will be active until canceled. If provided, end date should be after start date.
             */
            end_date?: number;

            /**
             * Specifies payment frequency. One of `day`, `week`, `month`, `year`, or `sporadic`.
             */
            interval: MandateOptions.Interval;

            /**
             * The number of intervals between payments. For example, `interval=month` and `interval_count=3` indicates one payment every three months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks). This parameter is optional when `interval=sporadic`.
             */
            interval_count?: number;

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
            supported_types?: Array<'india'>;
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

          interface ThreeDSecure {
            /**
             * The `transStatus` returned from the card Issuer's ACS in the ARes.
             */
            ares_trans_status?: ThreeDSecure.AresTransStatus;

            /**
             * The cryptogram, also known as the "authentication value" (AAV, CAVV or
             * AEVV). This value is 20 bytes, base64-encoded into a 28-character string.
             * (Most 3D Secure providers will return the base64-encoded version, which
             * is what you should specify here.)
             */
            cryptogram?: string;

            /**
             * The Electronic Commerce Indicator (ECI) is returned by your 3D Secure
             * provider and indicates what degree of authentication was performed.
             */
            electronic_commerce_indicator?: ThreeDSecure.ElectronicCommerceIndicator;

            /**
             * Network specific 3DS fields. Network specific arguments require an
             * explicit card brand choice. The parameter `payment_method_options.card.network``
             * must be populated accordingly
             */
            network_options?: ThreeDSecure.NetworkOptions;

            /**
             * The challenge indicator (`threeDSRequestorChallengeInd`) which was requested in the
             * AReq sent to the card Issuer's ACS. A string containing 2 digits from 01-99.
             */
            requestor_challenge_indicator?: string;

            /**
             * For 3D Secure 1, the XID. For 3D Secure 2, the Directory Server
             * Transaction ID (dsTransID).
             */
            transaction_id?: string;

            /**
             * The version of 3D Secure that was performed.
             */
            version?: ThreeDSecure.Version;
          }

          namespace ThreeDSecure {
            type AresTransStatus = 'A' | 'C' | 'I' | 'N' | 'R' | 'U' | 'Y';

            type ElectronicCommerceIndicator = '01' | '02' | '05' | '06' | '07';

            interface NetworkOptions {
              /**
               * Cartes Bancaires-specific 3DS fields.
               */
              cartes_bancaires?: NetworkOptions.CartesBancaires;
            }

            namespace NetworkOptions {
              interface CartesBancaires {
                /**
                 * The cryptogram calculation algorithm used by the card Issuer's ACS
                 * to calculate the Authentication cryptogram. Also known as `cavvAlgorithm`.
                 * messageExtension: CB-AVALGO
                 */
                cb_avalgo: CartesBancaires.CbAvalgo;

                /**
                 * The exemption indicator returned from Cartes Bancaires in the ARes.
                 * message extension: CB-EXEMPTION; string (4 characters)
                 * This is a 3 byte bitmap (low significant byte first and most significant
                 * bit first) that has been Base64 encoded
                 */
                cb_exemption?: string;

                /**
                 * The risk score returned from Cartes Bancaires in the ARes.
                 * message extension: CB-SCORE; numeric value 0-99
                 */
                cb_score?: number;
              }

              namespace CartesBancaires {
                type CbAvalgo = '0' | '1' | '2' | '3' | '4' | 'A';
              }
            }

            type Version = '1.0.2' | '2.1.0' | '2.2.0';
          }
        }

        interface CardPresent {}

        interface Link {
          /**
           * [Deprecated] This is a legacy parameter that no longer has any function.
           * @deprecated
           */
          persistent_token?: string;
        }

        interface Paypal {
          /**
           * The PayPal Billing Agreement ID (BAID). This is an ID generated by PayPal which represents the mandate between the merchant and the customer.
           */
          billing_agreement_id?: string;
        }

        interface SepaDebit {
          /**
           * Additional fields for Mandate creation
           */
          mandate_options?: SepaDebit.MandateOptions;
        }

        namespace SepaDebit {
          interface MandateOptions {}
        }

        interface UsBankAccount {
          /**
           * Additional fields for Financial Connections Session creation
           */
          financial_connections?: UsBankAccount.FinancialConnections;

          /**
           * Additional fields for Mandate creation
           */
          mandate_options?: UsBankAccount.MandateOptions;

          /**
           * Additional fields for network related functions
           */
          networks?: UsBankAccount.Networks;

          /**
           * Bank account verification method.
           */
          verification_method?: UsBankAccount.VerificationMethod;
        }

        namespace UsBankAccount {
          interface FinancialConnections {
            /**
             * Provide filters for the linked accounts that the customer can select for the payment method
             */
            filters?: FinancialConnections.Filters;

            /**
             * The list of permissions to request. If this parameter is passed, the `payment_method` permission must be included. Valid permissions include: `balances`, `ownership`, `payment_method`, and `transactions`.
             */
            permissions?: Array<FinancialConnections.Permission>;

            /**
             * List of data features that you would like to retrieve upon account creation.
             */
            prefetch?: Array<FinancialConnections.Prefetch>;

            /**
             * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
             */
            return_url?: string;
          }

          namespace FinancialConnections {
            interface Filters {
              /**
               * The account subcategories to use to filter for selectable accounts. Valid subcategories are `checking` and `savings`.
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
             * The method used to collect offline mandate customer acceptance.
             */
            collection_method?: Stripe.Emptyable<'paper'>;
          }

          interface Networks {
            /**
             * Triggers validations to run across the selected networks
             */
            requested?: Array<Networks.Requested>;
          }

          namespace Networks {
            type Requested = 'ach' | 'us_domestic_wire';
          }

          type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
        }
      }
    }

    interface SetupIntentListParams extends PaginationParams {
      /**
       * If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.
       *
       * It can only be used for this Stripe Account's own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
       */
      attach_to_self?: boolean;

      /**
       * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * Only return SetupIntents for the customer specified by this customer ID.
       */
      customer?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return SetupIntents that associate with the specified payment method.
       */
      payment_method?: string;
    }

    interface SetupIntentCancelParams {
      /**
       * Reason for canceling this SetupIntent. Possible values are: `abandoned`, `requested_by_customer`, or `duplicate`
       */
      cancellation_reason?: SetupIntentCancelParams.CancellationReason;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    namespace SetupIntentCancelParams {
      type CancellationReason =
        | 'abandoned'
        | 'duplicate'
        | 'requested_by_customer';
    }

    interface SetupIntentConfirmParams {
      /**
       * ID of the ConfirmationToken used to confirm this SetupIntent.
       *
       * If the provided ConfirmationToken contains properties that are also being provided in this request, such as `payment_method`, then the values in this request will take precedence.
       */
      confirmation_token?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      mandate_data?: Stripe.Emptyable<SetupIntentConfirmParams.MandateData>;

      /**
       * ID of the payment method (a PaymentMethod, Card, or saved Source object) to attach to this SetupIntent.
       */
      payment_method?: string;

      /**
       * When included, this hash creates a PaymentMethod that is set as the [`payment_method`](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-payment_method)
       * value in the SetupIntent.
       */
      payment_method_data?: SetupIntentConfirmParams.PaymentMethodData;

      /**
       * Payment method-specific configuration for this SetupIntent.
       */
      payment_method_options?: SetupIntentConfirmParams.PaymentMethodOptions;

      /**
       * The URL to redirect your customer back to after they authenticate on the payment method's app or site.
       * If you'd prefer to redirect to a mobile application, you can alternatively supply an application URI scheme.
       * This parameter is only used for cards and other redirect-based payment methods.
       */
      return_url?: string;

      /**
       * Set to `true` when confirming server-side and using Stripe.js, iOS, or Android client-side SDKs to handle the next actions.
       */
      use_stripe_sdk?: boolean;
    }

    namespace SetupIntentConfirmParams {
      interface MandateData {
        /**
         * This hash contains details about the customer acceptance of the Mandate.
         */
        customer_acceptance?: MandateData.CustomerAcceptance;
      }

      namespace MandateData {
        interface CustomerAcceptance {
          /**
           * The time at which the customer accepted the Mandate.
           */
          accepted_at?: number;

          /**
           * If this is a Mandate accepted offline, this hash contains details about the offline acceptance.
           */
          offline?: CustomerAcceptance.Offline;

          /**
           * If this is a Mandate accepted online, this hash contains details about the online acceptance.
           */
          online?: CustomerAcceptance.Online;

          /**
           * The type of customer acceptance information included with the Mandate. One of `online` or `offline`.
           */
          type: CustomerAcceptance.Type;
        }

        namespace CustomerAcceptance {
          interface Offline {}

          interface Online {
            /**
             * The IP address from which the Mandate was accepted by the customer.
             */
            ip_address?: string;

            /**
             * The user agent of the browser from which the Mandate was accepted by the customer.
             */
            user_agent?: string;
          }

          type Type = 'offline' | 'online';
        }
      }

      interface PaymentMethodData {
        /**
         * If this is an `acss_debit` PaymentMethod, this hash contains details about the ACSS Debit payment method.
         */
        acss_debit?: PaymentMethodData.AcssDebit;

        /**
         * If this is an `affirm` PaymentMethod, this hash contains details about the Affirm payment method.
         */
        affirm?: PaymentMethodData.Affirm;

        /**
         * If this is an `AfterpayClearpay` PaymentMethod, this hash contains details about the AfterpayClearpay payment method.
         */
        afterpay_clearpay?: PaymentMethodData.AfterpayClearpay;

        /**
         * If this is an `Alipay` PaymentMethod, this hash contains details about the Alipay payment method.
         */
        alipay?: PaymentMethodData.Alipay;

        /**
         * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow. The field defaults to `unspecified`.
         */
        allow_redisplay?: PaymentMethodData.AllowRedisplay;

        /**
         * If this is a AmazonPay PaymentMethod, this hash contains details about the AmazonPay payment method.
         */
        amazon_pay?: PaymentMethodData.AmazonPay;

        /**
         * If this is an `au_becs_debit` PaymentMethod, this hash contains details about the bank account.
         */
        au_becs_debit?: PaymentMethodData.AuBecsDebit;

        /**
         * If this is a `bacs_debit` PaymentMethod, this hash contains details about the Bacs Direct Debit bank account.
         */
        bacs_debit?: PaymentMethodData.BacsDebit;

        /**
         * If this is a `bancontact` PaymentMethod, this hash contains details about the Bancontact payment method.
         */
        bancontact?: PaymentMethodData.Bancontact;

        /**
         * Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
         */
        billing_details?: PaymentMethodData.BillingDetails;

        /**
         * If this is a `blik` PaymentMethod, this hash contains details about the BLIK payment method.
         */
        blik?: PaymentMethodData.Blik;

        /**
         * If this is a `boleto` PaymentMethod, this hash contains details about the Boleto payment method.
         */
        boleto?: PaymentMethodData.Boleto;

        /**
         * If this is a `cashapp` PaymentMethod, this hash contains details about the Cash App Pay payment method.
         */
        cashapp?: PaymentMethodData.Cashapp;

        /**
         * If this is a `customer_balance` PaymentMethod, this hash contains details about the CustomerBalance payment method.
         */
        customer_balance?: PaymentMethodData.CustomerBalance;

        /**
         * If this is an `eps` PaymentMethod, this hash contains details about the EPS payment method.
         */
        eps?: PaymentMethodData.Eps;

        /**
         * If this is an `fpx` PaymentMethod, this hash contains details about the FPX payment method.
         */
        fpx?: PaymentMethodData.Fpx;

        /**
         * If this is a `giropay` PaymentMethod, this hash contains details about the Giropay payment method.
         */
        giropay?: PaymentMethodData.Giropay;

        /**
         * If this is a `grabpay` PaymentMethod, this hash contains details about the GrabPay payment method.
         */
        grabpay?: PaymentMethodData.Grabpay;

        /**
         * If this is an `ideal` PaymentMethod, this hash contains details about the iDEAL payment method.
         */
        ideal?: PaymentMethodData.Ideal;

        /**
         * If this is an `interac_present` PaymentMethod, this hash contains details about the Interac Present payment method.
         */
        interac_present?: PaymentMethodData.InteracPresent;

        /**
         * If this is a `klarna` PaymentMethod, this hash contains details about the Klarna payment method.
         */
        klarna?: PaymentMethodData.Klarna;

        /**
         * If this is a `konbini` PaymentMethod, this hash contains details about the Konbini payment method.
         */
        konbini?: PaymentMethodData.Konbini;

        /**
         * If this is an `Link` PaymentMethod, this hash contains details about the Link payment method.
         */
        link?: PaymentMethodData.Link;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * If this is a `mobilepay` PaymentMethod, this hash contains details about the MobilePay payment method.
         */
        mobilepay?: PaymentMethodData.Mobilepay;

        /**
         * If this is a `multibanco` PaymentMethod, this hash contains details about the Multibanco payment method.
         */
        multibanco?: PaymentMethodData.Multibanco;

        /**
         * If this is an `oxxo` PaymentMethod, this hash contains details about the OXXO payment method.
         */
        oxxo?: PaymentMethodData.Oxxo;

        /**
         * If this is a `p24` PaymentMethod, this hash contains details about the P24 payment method.
         */
        p24?: PaymentMethodData.P24;

        /**
         * If this is a `paynow` PaymentMethod, this hash contains details about the PayNow payment method.
         */
        paynow?: PaymentMethodData.Paynow;

        /**
         * If this is a `paypal` PaymentMethod, this hash contains details about the PayPal payment method.
         */
        paypal?: PaymentMethodData.Paypal;

        /**
         * If this is a `pix` PaymentMethod, this hash contains details about the Pix payment method.
         */
        pix?: PaymentMethodData.Pix;

        /**
         * If this is a `promptpay` PaymentMethod, this hash contains details about the PromptPay payment method.
         */
        promptpay?: PaymentMethodData.Promptpay;

        /**
         * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
         */
        radar_options?: PaymentMethodData.RadarOptions;

        /**
         * If this is a `Revolut Pay` PaymentMethod, this hash contains details about the Revolut Pay payment method.
         */
        revolut_pay?: PaymentMethodData.RevolutPay;

        /**
         * If this is a `sepa_debit` PaymentMethod, this hash contains details about the SEPA debit bank account.
         */
        sepa_debit?: PaymentMethodData.SepaDebit;

        /**
         * If this is a `sofort` PaymentMethod, this hash contains details about the SOFORT payment method.
         */
        sofort?: PaymentMethodData.Sofort;

        /**
         * If this is a `swish` PaymentMethod, this hash contains details about the Swish payment method.
         */
        swish?: PaymentMethodData.Swish;

        /**
         * If this is a TWINT PaymentMethod, this hash contains details about the TWINT payment method.
         */
        twint?: PaymentMethodData.Twint;

        /**
         * The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
         */
        type: PaymentMethodData.Type;

        /**
         * If this is an `us_bank_account` PaymentMethod, this hash contains details about the US bank account payment method.
         */
        us_bank_account?: PaymentMethodData.UsBankAccount;

        /**
         * If this is an `wechat_pay` PaymentMethod, this hash contains details about the wechat_pay payment method.
         */
        wechat_pay?: PaymentMethodData.WechatPay;

        /**
         * If this is a `zip` PaymentMethod, this hash contains details about the Zip payment method.
         */
        zip?: PaymentMethodData.Zip;
      }

      namespace PaymentMethodData {
        interface AcssDebit {
          /**
           * Customer's bank account number.
           */
          account_number: string;

          /**
           * Institution number of the customer's bank.
           */
          institution_number: string;

          /**
           * Transit number of the customer's bank.
           */
          transit_number: string;
        }

        interface Affirm {}

        interface AfterpayClearpay {}

        interface Alipay {}

        type AllowRedisplay = 'always' | 'limited' | 'unspecified';

        interface AmazonPay {}

        interface AuBecsDebit {
          /**
           * The account number for the bank account.
           */
          account_number: string;

          /**
           * Bank-State-Branch number of the bank account.
           */
          bsb_number: string;
        }

        interface BacsDebit {
          /**
           * Account number of the bank account that the funds will be debited from.
           */
          account_number?: string;

          /**
           * Sort code of the bank account. (e.g., `10-20-30`)
           */
          sort_code?: string;
        }

        interface Bancontact {}

        interface BillingDetails {
          /**
           * Billing address.
           */
          address?: Stripe.Emptyable<Stripe.AddressParam>;

          /**
           * Email address.
           */
          email?: Stripe.Emptyable<string>;

          /**
           * Full name.
           */
          name?: Stripe.Emptyable<string>;

          /**
           * Billing phone number (including extension).
           */
          phone?: Stripe.Emptyable<string>;
        }

        interface Blik {}

        interface Boleto {
          /**
           * The tax ID of the customer (CPF for individual consumers or CNPJ for businesses consumers)
           */
          tax_id: string;
        }

        interface Cashapp {}

        interface CustomerBalance {}

        interface Eps {
          /**
           * The customer's bank.
           */
          bank?: Eps.Bank;
        }

        namespace Eps {
          type Bank =
            | 'arzte_und_apotheker_bank'
            | 'austrian_anadi_bank_ag'
            | 'bank_austria'
            | 'bankhaus_carl_spangler'
            | 'bankhaus_schelhammer_und_schattera_ag'
            | 'bawag_psk_ag'
            | 'bks_bank_ag'
            | 'brull_kallmus_bank_ag'
            | 'btv_vier_lander_bank'
            | 'capital_bank_grawe_gruppe_ag'
            | 'deutsche_bank_ag'
            | 'dolomitenbank'
            | 'easybank_ag'
            | 'erste_bank_und_sparkassen'
            | 'hypo_alpeadriabank_international_ag'
            | 'hypo_bank_burgenland_aktiengesellschaft'
            | 'hypo_noe_lb_fur_niederosterreich_u_wien'
            | 'hypo_oberosterreich_salzburg_steiermark'
            | 'hypo_tirol_bank_ag'
            | 'hypo_vorarlberg_bank_ag'
            | 'marchfelder_bank'
            | 'oberbank_ag'
            | 'raiffeisen_bankengruppe_osterreich'
            | 'schoellerbank_ag'
            | 'sparda_bank_wien'
            | 'volksbank_gruppe'
            | 'volkskreditbank_ag'
            | 'vr_bank_braunau';
        }

        interface Fpx {
          /**
           * Account holder type for FPX transaction
           */
          account_holder_type?: Fpx.AccountHolderType;

          /**
           * The customer's bank.
           */
          bank: Fpx.Bank;
        }

        namespace Fpx {
          type AccountHolderType = 'company' | 'individual';

          type Bank =
            | 'affin_bank'
            | 'agrobank'
            | 'alliance_bank'
            | 'ambank'
            | 'bank_islam'
            | 'bank_muamalat'
            | 'bank_of_china'
            | 'bank_rakyat'
            | 'bsn'
            | 'cimb'
            | 'deutsche_bank'
            | 'hong_leong_bank'
            | 'hsbc'
            | 'kfh'
            | 'maybank2e'
            | 'maybank2u'
            | 'ocbc'
            | 'pb_enterprise'
            | 'public_bank'
            | 'rhb'
            | 'standard_chartered'
            | 'uob';
        }

        interface Giropay {}

        interface Grabpay {}

        interface Ideal {
          /**
           * The customer's bank.
           */
          bank?: Ideal.Bank;
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
        }

        interface InteracPresent {}

        interface Klarna {
          /**
           * Customer's date of birth
           */
          dob?: Klarna.Dob;
        }

        namespace Klarna {
          interface Dob {
            /**
             * The day of birth, between 1 and 31.
             */
            day: number;

            /**
             * The month of birth, between 1 and 12.
             */
            month: number;

            /**
             * The four-digit year of birth.
             */
            year: number;
          }
        }

        interface Konbini {}

        interface Link {}

        interface Mobilepay {}

        interface Multibanco {}

        interface Oxxo {}

        interface P24 {
          /**
           * The customer's bank.
           */
          bank?: P24.Bank;
        }

        namespace P24 {
          type Bank =
            | 'alior_bank'
            | 'bank_millennium'
            | 'bank_nowy_bfg_sa'
            | 'bank_pekao_sa'
            | 'banki_spbdzielcze'
            | 'blik'
            | 'bnp_paribas'
            | 'boz'
            | 'citi_handlowy'
            | 'credit_agricole'
            | 'envelobank'
            | 'etransfer_pocztowy24'
            | 'getin_bank'
            | 'ideabank'
            | 'ing'
            | 'inteligo'
            | 'mbank_mtransfer'
            | 'nest_przelew'
            | 'noble_pay'
            | 'pbac_z_ipko'
            | 'plus_bank'
            | 'santander_przelew24'
            | 'tmobile_usbugi_bankowe'
            | 'toyota_bank'
            | 'velobank'
            | 'volkswagen_bank';
        }

        interface Paynow {}

        interface Paypal {}

        interface Pix {}

        interface Promptpay {}

        interface RadarOptions {
          /**
           * A [Radar Session](https://stripe.com/docs/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
           */
          session?: string;
        }

        interface RevolutPay {}

        interface SepaDebit {
          /**
           * IBAN of the bank account.
           */
          iban: string;
        }

        interface Sofort {
          /**
           * Two-letter ISO code representing the country the bank account is located in.
           */
          country: Sofort.Country;
        }

        namespace Sofort {
          type Country = 'AT' | 'BE' | 'DE' | 'ES' | 'IT' | 'NL';
        }

        interface Swish {}

        interface Twint {}

        type Type =
          | 'acss_debit'
          | 'affirm'
          | 'afterpay_clearpay'
          | 'alipay'
          | 'amazon_pay'
          | 'au_becs_debit'
          | 'bacs_debit'
          | 'bancontact'
          | 'blik'
          | 'boleto'
          | 'cashapp'
          | 'customer_balance'
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
          | 'revolut_pay'
          | 'sepa_debit'
          | 'sofort'
          | 'swish'
          | 'twint'
          | 'us_bank_account'
          | 'wechat_pay'
          | 'zip';

        interface UsBankAccount {
          /**
           * Account holder type: individual or company.
           */
          account_holder_type?: UsBankAccount.AccountHolderType;

          /**
           * Account number of the bank account.
           */
          account_number?: string;

          /**
           * Account type: checkings or savings. Defaults to checking if omitted.
           */
          account_type?: UsBankAccount.AccountType;

          /**
           * The ID of a Financial Connections Account to use as a payment method.
           */
          financial_connections_account?: string;

          /**
           * Routing number of the bank account.
           */
          routing_number?: string;
        }

        namespace UsBankAccount {
          type AccountHolderType = 'company' | 'individual';

          type AccountType = 'checking' | 'savings';
        }

        interface WechatPay {}

        interface Zip {}
      }

      interface PaymentMethodOptions {
        /**
         * If this is a `acss_debit` SetupIntent, this sub-hash contains details about the ACSS Debit payment method options.
         */
        acss_debit?: PaymentMethodOptions.AcssDebit;

        /**
         * If this is a `amazon_pay` SetupIntent, this sub-hash contains details about the AmazonPay payment method options.
         */
        amazon_pay?: PaymentMethodOptions.AmazonPay;

        /**
         * If this is a `bacs_debit` SetupIntent, this sub-hash contains details about the Bacs Debit payment method options.
         */
        bacs_debit?: PaymentMethodOptions.BacsDebit;

        /**
         * Configuration for any card setup attempted on this SetupIntent.
         */
        card?: PaymentMethodOptions.Card;

        /**
         * If this is a `card_present` PaymentMethod, this sub-hash contains details about the card-present payment method options.
         */
        card_present?: PaymentMethodOptions.CardPresent;

        /**
         * If this is a `link` PaymentMethod, this sub-hash contains details about the Link payment method options.
         */
        link?: PaymentMethodOptions.Link;

        /**
         * If this is a `paypal` PaymentMethod, this sub-hash contains details about the PayPal payment method options.
         */
        paypal?: PaymentMethodOptions.Paypal;

        /**
         * If this is a `sepa_debit` SetupIntent, this sub-hash contains details about the SEPA Debit payment method options.
         */
        sepa_debit?: PaymentMethodOptions.SepaDebit;

        /**
         * If this is a `us_bank_account` SetupIntent, this sub-hash contains details about the US bank account payment method options.
         */
        us_bank_account?: PaymentMethodOptions.UsBankAccount;
      }

      namespace PaymentMethodOptions {
        interface AcssDebit {
          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency?: AcssDebit.Currency;

          /**
           * Additional fields for Mandate creation
           */
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
             * A URL for custom mandate text to render during confirmation step.
             * The URL will be rendered with additional GET parameters `payment_intent` and `payment_intent_client_secret` when confirming a Payment Intent,
             * or `setup_intent` and `setup_intent_client_secret` when confirming a Setup Intent.
             */
            custom_mandate_url?: Stripe.Emptyable<string>;

            /**
             * List of Stripe products where this mandate can be selected automatically.
             */
            default_for?: Array<MandateOptions.DefaultFor>;

            /**
             * Description of the mandate interval. Only required if 'payment_schedule' parameter is 'interval' or 'combined'.
             */
            interval_description?: string;

            /**
             * Payment schedule for the mandate.
             */
            payment_schedule?: MandateOptions.PaymentSchedule;

            /**
             * Transaction type of the mandate.
             */
            transaction_type?: MandateOptions.TransactionType;
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
          /**
           * Additional fields for Mandate creation
           */
          mandate_options?: BacsDebit.MandateOptions;
        }

        namespace BacsDebit {
          interface MandateOptions {}
        }

        interface Card {
          /**
           * Configuration options for setting up an eMandate for cards issued in India.
           */
          mandate_options?: Card.MandateOptions;

          /**
           * When specified, this parameter signals that a card has been collected
           * as MOTO (Mail Order Telephone Order) and thus out of scope for SCA. This
           * parameter can only be provided during confirmation.
           */
          moto?: boolean;

          /**
           * Selected network to process this SetupIntent on. Depends on the available networks of the card attached to the SetupIntent. Can be only set confirm-time.
           */
          network?: Card.Network;

          /**
           * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. If not provided, this value defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
           */
          request_three_d_secure?: Card.RequestThreeDSecure;

          /**
           * If 3D Secure authentication was performed with a third-party provider,
           * the authentication details to use for this setup.
           */
          three_d_secure?: Card.ThreeDSecure;
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
             * Currency in which future payments will be charged. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency: string;

            /**
             * A description of the mandate or subscription that is meant to be displayed to the customer.
             */
            description?: string;

            /**
             * End date of the mandate or subscription. If not provided, the mandate will be active until canceled. If provided, end date should be after start date.
             */
            end_date?: number;

            /**
             * Specifies payment frequency. One of `day`, `week`, `month`, `year`, or `sporadic`.
             */
            interval: MandateOptions.Interval;

            /**
             * The number of intervals between payments. For example, `interval=month` and `interval_count=3` indicates one payment every three months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks). This parameter is optional when `interval=sporadic`.
             */
            interval_count?: number;

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
            supported_types?: Array<'india'>;
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

          interface ThreeDSecure {
            /**
             * The `transStatus` returned from the card Issuer's ACS in the ARes.
             */
            ares_trans_status?: ThreeDSecure.AresTransStatus;

            /**
             * The cryptogram, also known as the "authentication value" (AAV, CAVV or
             * AEVV). This value is 20 bytes, base64-encoded into a 28-character string.
             * (Most 3D Secure providers will return the base64-encoded version, which
             * is what you should specify here.)
             */
            cryptogram?: string;

            /**
             * The Electronic Commerce Indicator (ECI) is returned by your 3D Secure
             * provider and indicates what degree of authentication was performed.
             */
            electronic_commerce_indicator?: ThreeDSecure.ElectronicCommerceIndicator;

            /**
             * Network specific 3DS fields. Network specific arguments require an
             * explicit card brand choice. The parameter `payment_method_options.card.network``
             * must be populated accordingly
             */
            network_options?: ThreeDSecure.NetworkOptions;

            /**
             * The challenge indicator (`threeDSRequestorChallengeInd`) which was requested in the
             * AReq sent to the card Issuer's ACS. A string containing 2 digits from 01-99.
             */
            requestor_challenge_indicator?: string;

            /**
             * For 3D Secure 1, the XID. For 3D Secure 2, the Directory Server
             * Transaction ID (dsTransID).
             */
            transaction_id?: string;

            /**
             * The version of 3D Secure that was performed.
             */
            version?: ThreeDSecure.Version;
          }

          namespace ThreeDSecure {
            type AresTransStatus = 'A' | 'C' | 'I' | 'N' | 'R' | 'U' | 'Y';

            type ElectronicCommerceIndicator = '01' | '02' | '05' | '06' | '07';

            interface NetworkOptions {
              /**
               * Cartes Bancaires-specific 3DS fields.
               */
              cartes_bancaires?: NetworkOptions.CartesBancaires;
            }

            namespace NetworkOptions {
              interface CartesBancaires {
                /**
                 * The cryptogram calculation algorithm used by the card Issuer's ACS
                 * to calculate the Authentication cryptogram. Also known as `cavvAlgorithm`.
                 * messageExtension: CB-AVALGO
                 */
                cb_avalgo: CartesBancaires.CbAvalgo;

                /**
                 * The exemption indicator returned from Cartes Bancaires in the ARes.
                 * message extension: CB-EXEMPTION; string (4 characters)
                 * This is a 3 byte bitmap (low significant byte first and most significant
                 * bit first) that has been Base64 encoded
                 */
                cb_exemption?: string;

                /**
                 * The risk score returned from Cartes Bancaires in the ARes.
                 * message extension: CB-SCORE; numeric value 0-99
                 */
                cb_score?: number;
              }

              namespace CartesBancaires {
                type CbAvalgo = '0' | '1' | '2' | '3' | '4' | 'A';
              }
            }

            type Version = '1.0.2' | '2.1.0' | '2.2.0';
          }
        }

        interface CardPresent {}

        interface Link {
          /**
           * [Deprecated] This is a legacy parameter that no longer has any function.
           * @deprecated
           */
          persistent_token?: string;
        }

        interface Paypal {
          /**
           * The PayPal Billing Agreement ID (BAID). This is an ID generated by PayPal which represents the mandate between the merchant and the customer.
           */
          billing_agreement_id?: string;
        }

        interface SepaDebit {
          /**
           * Additional fields for Mandate creation
           */
          mandate_options?: SepaDebit.MandateOptions;
        }

        namespace SepaDebit {
          interface MandateOptions {}
        }

        interface UsBankAccount {
          /**
           * Additional fields for Financial Connections Session creation
           */
          financial_connections?: UsBankAccount.FinancialConnections;

          /**
           * Additional fields for Mandate creation
           */
          mandate_options?: UsBankAccount.MandateOptions;

          /**
           * Additional fields for network related functions
           */
          networks?: UsBankAccount.Networks;

          /**
           * Bank account verification method.
           */
          verification_method?: UsBankAccount.VerificationMethod;
        }

        namespace UsBankAccount {
          interface FinancialConnections {
            /**
             * Provide filters for the linked accounts that the customer can select for the payment method
             */
            filters?: FinancialConnections.Filters;

            /**
             * The list of permissions to request. If this parameter is passed, the `payment_method` permission must be included. Valid permissions include: `balances`, `ownership`, `payment_method`, and `transactions`.
             */
            permissions?: Array<FinancialConnections.Permission>;

            /**
             * List of data features that you would like to retrieve upon account creation.
             */
            prefetch?: Array<FinancialConnections.Prefetch>;

            /**
             * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
             */
            return_url?: string;
          }

          namespace FinancialConnections {
            interface Filters {
              /**
               * The account subcategories to use to filter for selectable accounts. Valid subcategories are `checking` and `savings`.
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
             * The method used to collect offline mandate customer acceptance.
             */
            collection_method?: Stripe.Emptyable<'paper'>;
          }

          interface Networks {
            /**
             * Triggers validations to run across the selected networks
             */
            requested?: Array<Networks.Requested>;
          }

          namespace Networks {
            type Requested = 'ach' | 'us_domestic_wire';
          }

          type VerificationMethod = 'automatic' | 'instant' | 'microdeposits';
        }
      }
    }

    interface SetupIntentVerifyMicrodepositsParams {
      /**
       * Two positive integers, in *cents*, equal to the values of the microdeposits sent to the bank account.
       */
      amounts?: Array<number>;

      /**
       * A six-character code starting with SM present in the microdeposit sent to the bank account.
       */
      descriptor_code?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class SetupIntentsResource {
      /**
       * Creates a SetupIntent object.
       *
       * After you create the SetupIntent, attach a payment method and [confirm](https://stripe.com/docs/api/setup_intents/confirm)
       * it to collect any required permissions to charge the payment method later.
       */
      create(
        params?: SetupIntentCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SetupIntent>>;
      create(
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SetupIntent>>;

      /**
       * Retrieves the details of a SetupIntent that has previously been created.
       *
       * Client-side retrieval using a publishable key is allowed when the client_secret is provided in the query string.
       *
       * When retrieved with a publishable key, only a subset of properties will be returned. Please refer to the [SetupIntent](https://stripe.com/docs/api#setup_intent_object) object reference for more details.
       */
      retrieve(
        id: string,
        params?: SetupIntentRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SetupIntent>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SetupIntent>>;

      /**
       * Updates a SetupIntent object.
       */
      update(
        id: string,
        params?: SetupIntentUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SetupIntent>>;

      /**
       * Returns a list of SetupIntents.
       */
      list(
        params?: SetupIntentListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.SetupIntent>;
      list(options?: RequestOptions): ApiListPromise<Stripe.SetupIntent>;

      /**
       * You can cancel a SetupIntent object when it's in one of these statuses: requires_payment_method, requires_confirmation, or requires_action.
       *
       * After you cancel it, setup is abandoned and any operations on the SetupIntent fail with an error. You can't cancel the SetupIntent for a Checkout Session. [Expire the Checkout Session](https://stripe.com/docs/api/checkout/sessions/expire) instead.
       */
      cancel(
        id: string,
        params?: SetupIntentCancelParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SetupIntent>>;
      cancel(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SetupIntent>>;

      /**
       * Confirm that your customer intends to set up the current or
       * provided payment method. For example, you would confirm a SetupIntent
       * when a customer hits the “Save” button on a payment method management
       * page on your website.
       *
       * If the selected payment method does not require any additional
       * steps from the customer, the SetupIntent will transition to the
       * succeeded status.
       *
       * Otherwise, it will transition to the requires_action status and
       * suggest additional actions via next_action. If setup fails,
       * the SetupIntent will transition to the
       * requires_payment_method status or the canceled status if the
       * confirmation limit is reached.
       */
      confirm(
        id: string,
        params?: SetupIntentConfirmParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SetupIntent>>;
      confirm(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SetupIntent>>;

      /**
       * Verifies microdeposits on a SetupIntent object.
       */
      verifyMicrodeposits(
        id: string,
        params?: SetupIntentVerifyMicrodepositsParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SetupIntent>>;
      verifyMicrodeposits(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SetupIntent>>;
    }
  }
}
