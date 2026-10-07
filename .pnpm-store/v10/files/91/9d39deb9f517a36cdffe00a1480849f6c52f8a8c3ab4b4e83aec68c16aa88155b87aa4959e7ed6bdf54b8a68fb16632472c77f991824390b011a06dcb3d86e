// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace TestHelpers {
      interface ConfirmationTokenCreateParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * ID of an existing PaymentMethod.
         */
        payment_method?: string;

        /**
         * If provided, this hash will be used to create a PaymentMethod.
         */
        payment_method_data?: ConfirmationTokenCreateParams.PaymentMethodData;

        /**
         * Return URL used to confirm the Intent.
         */
        return_url?: string;

        /**
         * Indicates that you intend to make future payments with this ConfirmationToken's payment method.
         *
         * The presence of this property will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete.
         */
        setup_future_usage?: ConfirmationTokenCreateParams.SetupFutureUsage;

        /**
         * Shipping information for this ConfirmationToken.
         */
        shipping?: ConfirmationTokenCreateParams.Shipping;
      }

      namespace ConfirmationTokenCreateParams {
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

        type SetupFutureUsage = 'off_session' | 'on_session';

        interface Shipping {
          /**
           * Shipping address
           */
          address: Stripe.AddressParam;

          /**
           * Recipient name.
           */
          name: string;

          /**
           * Recipient phone (including extension)
           */
          phone?: Stripe.Emptyable<string>;
        }
      }

      class ConfirmationTokensResource {
        /**
         * Creates a test mode Confirmation Token server side for your integration tests.
         */
        create(
          params?: ConfirmationTokenCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.ConfirmationToken>>;
        create(
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.ConfirmationToken>>;
      }
    }
  }
}
