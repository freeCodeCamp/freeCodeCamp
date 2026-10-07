// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface AccountCreateParams {
      /**
       * An [account token](https://stripe.com/docs/api#create_account_token), used to securely provide details to the account.
       */
      account_token?: string;

      /**
       * Business information about the account.
       */
      business_profile?: AccountCreateParams.BusinessProfile;

      /**
       * The business type. Once you create an [Account Link](https://stripe.com/api/account_links) or [Account Session](https://stripe.com/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](https://stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
       */
      business_type?: AccountCreateParams.BusinessType;

      /**
       * Each key of the dictionary represents a capability, and each capability
       * maps to its settings (for example, whether it has been requested or not). Each
       * capability is inactive until you have provided its specific
       * requirements and Stripe has verified them. An account might have some
       * of its requested capabilities be active and some be inactive.
       *
       * Required when [account.controller.stripe_dashboard.type](https://stripe.com/api/accounts/create#create_account-controller-dashboard-type)
       * is `none`, which includes Custom accounts.
       */
      capabilities?: AccountCreateParams.Capabilities;

      /**
       * Information about the company or business. This field is available for any `business_type`. Once you create an [Account Link](https://stripe.com/api/account_links) or [Account Session](https://stripe.com/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](https://stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
       */
      company?: AccountCreateParams.Company;

      /**
       * A hash of configuration describing the account controller's attributes.
       */
      controller?: AccountCreateParams.Controller;

      /**
       * The country in which the account holder resides, or in which the business is legally established. This should be an ISO 3166-1 alpha-2 country code. For example, if you are in the United States and the business for which you're creating an account is legally represented in Canada, you would use `CA` as the country for the account being created. Available countries include [Stripe's global markets](https://stripe.com/global) as well as countries where [cross-border payouts](https://stripe.com/docs/connect/cross-border-payouts) are supported.
       */
      country?: string;

      /**
       * Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://docs.stripe.com/payouts).
       */
      default_currency?: string;

      /**
       * Documents that may be submitted to satisfy various informational requests.
       */
      documents?: AccountCreateParams.Documents;

      /**
       * The email address of the account holder. This is only to make the account easier to identify to you. If [controller.requirement_collection](https://stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts, Stripe doesn't email the account without your consent.
       */
      email?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A card or bank account to attach to the account for receiving [payouts](https://stripe.com/connect/bank-debit-card-payouts) (you won't be able to use it for top-ups). You can provide either a token, like the ones returned by [Stripe.js](https://stripe.com/js), or a dictionary, as documented in the `external_account` parameter for [bank account](https://stripe.com/api#account_create_bank_account) creation.
       *
       * By default, providing an external account sets it as the new default external account for its currency, and deletes the old default if one exists. To add additional external accounts without replacing the existing default for the currency, use the [bank account](https://stripe.com/api#account_create_bank_account) or [card creation](https://stripe.com/api#account_create_card) APIs. After you create an [Account Link](https://stripe.com/api/account_links) or [Account Session](https://stripe.com/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](https://stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
       */
      external_account?: string | AccountCreateParams.ExternalAccount;

      /**
       * Information about the person represented by the account. This field is null unless `business_type` is set to `individual`. Once you create an [Account Link](https://stripe.com/api/account_links) or [Account Session](https://stripe.com/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](https://stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
       */
      individual?: AccountCreateParams.Individual;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * Options for customizing how the account functions within Stripe.
       */
      settings?: AccountCreateParams.Settings;

      /**
       * Details on the account's acceptance of the [Stripe Services Agreement](https://stripe.com/connect/updating-accounts#tos-acceptance). This property can only be updated for accounts where [controller.requirement_collection](https://stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts. This property defaults to a `full` service agreement when empty.
       */
      tos_acceptance?: AccountCreateParams.TosAcceptance;

      /**
       * The type of Stripe account to create. May be one of `custom`, `express` or `standard`.
       */
      type?: AccountCreateParams.Type;
    }

    namespace AccountCreateParams {
      interface BusinessProfile {
        /**
         * The applicant's gross annual revenue for its preceding fiscal year.
         */
        annual_revenue?: BusinessProfile.AnnualRevenue;

        /**
         * An estimated upper bound of employees, contractors, vendors, etc. currently working for the business.
         */
        estimated_worker_count?: number;

        /**
         * [The merchant category code for the account](https://stripe.com/connect/setting-mcc). MCCs are used to classify businesses based on the goods or services they provide.
         */
        mcc?: string;

        /**
         * An estimate of the monthly revenue of the business. Only accepted for accounts in Brazil and India.
         */
        monthly_estimated_revenue?: BusinessProfile.MonthlyEstimatedRevenue;

        /**
         * The customer-facing business name.
         */
        name?: string;

        /**
         * Internal-only description of the product sold by, or service provided by, the business. Used by Stripe for risk and underwriting purposes.
         */
        product_description?: string;

        /**
         * A publicly available mailing address for sending support issues to.
         */
        support_address?: Stripe.AddressParam;

        /**
         * A publicly available email address for sending support issues to.
         */
        support_email?: string;

        /**
         * A publicly available phone number to call with support issues.
         */
        support_phone?: string;

        /**
         * A publicly available website for handling support issues.
         */
        support_url?: Stripe.Emptyable<string>;

        /**
         * The business's publicly available website.
         */
        url?: string;
      }

      namespace BusinessProfile {
        interface AnnualRevenue {
          /**
           * A non-negative integer representing the amount in the [smallest currency unit](https://stripe.com/currencies#zero-decimal).
           */
          amount: number;

          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * The close-out date of the preceding fiscal year in ISO 8601 format. E.g. 2023-12-31 for the 31st of December, 2023.
           */
          fiscal_year_end: string;
        }

        interface MonthlyEstimatedRevenue {
          /**
           * A non-negative integer representing how much to charge in the [smallest currency unit](https://stripe.com/currencies#zero-decimal).
           */
          amount: number;

          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;
        }
      }

      type BusinessType =
        | 'company'
        | 'government_entity'
        | 'individual'
        | 'non_profit';

      interface Capabilities {
        /**
         * The acss_debit_payments capability.
         */
        acss_debit_payments?: Capabilities.AcssDebitPayments;

        /**
         * The affirm_payments capability.
         */
        affirm_payments?: Capabilities.AffirmPayments;

        /**
         * The afterpay_clearpay_payments capability.
         */
        afterpay_clearpay_payments?: Capabilities.AfterpayClearpayPayments;

        /**
         * The amazon_pay_payments capability.
         */
        amazon_pay_payments?: Capabilities.AmazonPayPayments;

        /**
         * The au_becs_debit_payments capability.
         */
        au_becs_debit_payments?: Capabilities.AuBecsDebitPayments;

        /**
         * The bacs_debit_payments capability.
         */
        bacs_debit_payments?: Capabilities.BacsDebitPayments;

        /**
         * The bancontact_payments capability.
         */
        bancontact_payments?: Capabilities.BancontactPayments;

        /**
         * The bank_transfer_payments capability.
         */
        bank_transfer_payments?: Capabilities.BankTransferPayments;

        /**
         * The blik_payments capability.
         */
        blik_payments?: Capabilities.BlikPayments;

        /**
         * The boleto_payments capability.
         */
        boleto_payments?: Capabilities.BoletoPayments;

        /**
         * The card_issuing capability.
         */
        card_issuing?: Capabilities.CardIssuing;

        /**
         * The card_payments capability.
         */
        card_payments?: Capabilities.CardPayments;

        /**
         * The cartes_bancaires_payments capability.
         */
        cartes_bancaires_payments?: Capabilities.CartesBancairesPayments;

        /**
         * The cashapp_payments capability.
         */
        cashapp_payments?: Capabilities.CashappPayments;

        /**
         * The eps_payments capability.
         */
        eps_payments?: Capabilities.EpsPayments;

        /**
         * The fpx_payments capability.
         */
        fpx_payments?: Capabilities.FpxPayments;

        /**
         * The gb_bank_transfer_payments capability.
         */
        gb_bank_transfer_payments?: Capabilities.GbBankTransferPayments;

        /**
         * The giropay_payments capability.
         */
        giropay_payments?: Capabilities.GiropayPayments;

        /**
         * The grabpay_payments capability.
         */
        grabpay_payments?: Capabilities.GrabpayPayments;

        /**
         * The ideal_payments capability.
         */
        ideal_payments?: Capabilities.IdealPayments;

        /**
         * The india_international_payments capability.
         */
        india_international_payments?: Capabilities.IndiaInternationalPayments;

        /**
         * The jcb_payments capability.
         */
        jcb_payments?: Capabilities.JcbPayments;

        /**
         * The jp_bank_transfer_payments capability.
         */
        jp_bank_transfer_payments?: Capabilities.JpBankTransferPayments;

        /**
         * The klarna_payments capability.
         */
        klarna_payments?: Capabilities.KlarnaPayments;

        /**
         * The konbini_payments capability.
         */
        konbini_payments?: Capabilities.KonbiniPayments;

        /**
         * The legacy_payments capability.
         */
        legacy_payments?: Capabilities.LegacyPayments;

        /**
         * The link_payments capability.
         */
        link_payments?: Capabilities.LinkPayments;

        /**
         * The mobilepay_payments capability.
         */
        mobilepay_payments?: Capabilities.MobilepayPayments;

        /**
         * The multibanco_payments capability.
         */
        multibanco_payments?: Capabilities.MultibancoPayments;

        /**
         * The mx_bank_transfer_payments capability.
         */
        mx_bank_transfer_payments?: Capabilities.MxBankTransferPayments;

        /**
         * The oxxo_payments capability.
         */
        oxxo_payments?: Capabilities.OxxoPayments;

        /**
         * The p24_payments capability.
         */
        p24_payments?: Capabilities.P24Payments;

        /**
         * The paynow_payments capability.
         */
        paynow_payments?: Capabilities.PaynowPayments;

        /**
         * The promptpay_payments capability.
         */
        promptpay_payments?: Capabilities.PromptpayPayments;

        /**
         * The revolut_pay_payments capability.
         */
        revolut_pay_payments?: Capabilities.RevolutPayPayments;

        /**
         * The sepa_bank_transfer_payments capability.
         */
        sepa_bank_transfer_payments?: Capabilities.SepaBankTransferPayments;

        /**
         * The sepa_debit_payments capability.
         */
        sepa_debit_payments?: Capabilities.SepaDebitPayments;

        /**
         * The sofort_payments capability.
         */
        sofort_payments?: Capabilities.SofortPayments;

        /**
         * The swish_payments capability.
         */
        swish_payments?: Capabilities.SwishPayments;

        /**
         * The tax_reporting_us_1099_k capability.
         */
        tax_reporting_us_1099_k?: Capabilities.TaxReportingUs1099K;

        /**
         * The tax_reporting_us_1099_misc capability.
         */
        tax_reporting_us_1099_misc?: Capabilities.TaxReportingUs1099Misc;

        /**
         * The transfers capability.
         */
        transfers?: Capabilities.Transfers;

        /**
         * The treasury capability.
         */
        treasury?: Capabilities.Treasury;

        /**
         * The twint_payments capability.
         */
        twint_payments?: Capabilities.TwintPayments;

        /**
         * The us_bank_account_ach_payments capability.
         */
        us_bank_account_ach_payments?: Capabilities.UsBankAccountAchPayments;

        /**
         * The us_bank_transfer_payments capability.
         */
        us_bank_transfer_payments?: Capabilities.UsBankTransferPayments;

        /**
         * The zip_payments capability.
         */
        zip_payments?: Capabilities.ZipPayments;
      }

      namespace Capabilities {
        interface AcssDebitPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface AffirmPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface AfterpayClearpayPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface AmazonPayPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface AuBecsDebitPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface BacsDebitPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface BancontactPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface BankTransferPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface BlikPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface BoletoPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface CardIssuing {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface CardPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface CartesBancairesPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface CashappPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface EpsPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface FpxPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface GbBankTransferPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface GiropayPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface GrabpayPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface IdealPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface IndiaInternationalPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface JcbPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface JpBankTransferPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface KlarnaPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface KonbiniPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface LegacyPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface LinkPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface MobilepayPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface MultibancoPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface MxBankTransferPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface OxxoPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface P24Payments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface PaynowPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface PromptpayPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface RevolutPayPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface SepaBankTransferPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface SepaDebitPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface SofortPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface SwishPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface TaxReportingUs1099K {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface TaxReportingUs1099Misc {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface Transfers {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface Treasury {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface TwintPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface UsBankAccountAchPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface UsBankTransferPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface ZipPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }
      }

      interface Company {
        /**
         * The company's primary address.
         */
        address?: Stripe.AddressParam;

        /**
         * The Kana variation of the company's primary address (Japan only).
         */
        address_kana?: Stripe.JapanAddressParam;

        /**
         * The Kanji variation of the company's primary address (Japan only).
         */
        address_kanji?: Stripe.JapanAddressParam;

        /**
         * Whether the company's directors have been provided. Set this Boolean to `true` after creating all the company's directors with [the Persons API](https://stripe.com/api/persons) for accounts with a `relationship.director` requirement. This value is not automatically set to `true` after creating directors, so it needs to be updated to indicate all directors have been provided.
         */
        directors_provided?: boolean;

        /**
         * Whether the company's executives have been provided. Set this Boolean to `true` after creating all the company's executives with [the Persons API](https://stripe.com/api/persons) for accounts with a `relationship.executive` requirement.
         */
        executives_provided?: boolean;

        /**
         * The export license ID number of the company, also referred as Import Export Code (India only).
         */
        export_license_id?: string;

        /**
         * The purpose code to use for export transactions (India only).
         */
        export_purpose_code?: string;

        /**
         * The company's legal name.
         */
        name?: string;

        /**
         * The Kana variation of the company's legal name (Japan only).
         */
        name_kana?: string;

        /**
         * The Kanji variation of the company's legal name (Japan only).
         */
        name_kanji?: string;

        /**
         * Whether the company's owners have been provided. Set this Boolean to `true` after creating all the company's owners with [the Persons API](https://stripe.com/api/persons) for accounts with a `relationship.owner` requirement.
         */
        owners_provided?: boolean;

        /**
         * This hash is used to attest that the beneficial owner information provided to Stripe is both current and correct.
         */
        ownership_declaration?: Company.OwnershipDeclaration;

        /**
         * The company's phone number (used for verification).
         */
        phone?: string;

        /**
         * The identification number given to a company when it is registered or incorporated, if distinct from the identification number used for filing taxes. (Examples are the CIN for companies and LLP IN for partnerships in India, and the Company Registration Number in Hong Kong).
         */
        registration_number?: string;

        /**
         * The category identifying the legal structure of the company or legal entity. See [Business structure](https://stripe.com/connect/identity-verification#business-structure) for more details. Pass an empty string to unset this value.
         */
        structure?: Stripe.Emptyable<Company.Structure>;

        /**
         * The business ID number of the company, as appropriate for the company's country. (Examples are an Employer ID Number in the U.S., a Business Number in Canada, or a Company Number in the UK.)
         */
        tax_id?: string;

        /**
         * The jurisdiction in which the `tax_id` is registered (Germany-based companies only).
         */
        tax_id_registrar?: string;

        /**
         * The VAT number of the company.
         */
        vat_id?: string;

        /**
         * Information on the verification state of the company.
         */
        verification?: Company.Verification;
      }

      namespace Company {
        interface OwnershipDeclaration {
          /**
           * The Unix timestamp marking when the beneficial owner attestation was made.
           */
          date?: number;

          /**
           * The IP address from which the beneficial owner attestation was made.
           */
          ip?: string;

          /**
           * The user agent of the browser from which the beneficial owner attestation was made.
           */
          user_agent?: string;
        }

        type Structure =
          | 'free_zone_establishment'
          | 'free_zone_llc'
          | 'government_instrumentality'
          | 'governmental_unit'
          | 'incorporated_non_profit'
          | 'incorporated_partnership'
          | 'limited_liability_partnership'
          | 'llc'
          | 'multi_member_llc'
          | 'private_company'
          | 'private_corporation'
          | 'private_partnership'
          | 'public_company'
          | 'public_corporation'
          | 'public_partnership'
          | 'registered_charity'
          | 'single_member_llc'
          | 'sole_establishment'
          | 'sole_proprietorship'
          | 'tax_exempt_government_instrumentality'
          | 'unincorporated_association'
          | 'unincorporated_non_profit'
          | 'unincorporated_partnership';

        interface Verification {
          /**
           * A document verifying the business.
           */
          document?: Verification.Document;
        }

        namespace Verification {
          interface Document {
            /**
             * The back of a document returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `additional_verification`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
             */
            back?: string;

            /**
             * The front of a document returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `additional_verification`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
             */
            front?: string;
          }
        }
      }

      interface Controller {
        /**
         * A hash of configuration for who pays Stripe fees for product usage on this account.
         */
        fees?: Controller.Fees;

        /**
         * A hash of configuration for products that have negative balance liability, and whether Stripe or a Connect application is responsible for them.
         */
        losses?: Controller.Losses;

        /**
         * A value indicating responsibility for collecting updated information when requirements on the account are due or change. Defaults to `stripe`.
         */
        requirement_collection?: Controller.RequirementCollection;

        /**
         * A hash of configuration for Stripe-hosted dashboards.
         */
        stripe_dashboard?: Controller.StripeDashboard;
      }

      namespace Controller {
        interface Fees {
          /**
           * A value indicating the responsible payer of Stripe fees on this account. Defaults to `account`. Learn more about [fee behavior on connected accounts](https://docs.stripe.com/connect/direct-charges-fee-payer-behavior).
           */
          payer?: Fees.Payer;
        }

        namespace Fees {
          type Payer = 'account' | 'application';
        }

        interface Losses {
          /**
           * A value indicating who is liable when this account can't pay back negative balances resulting from payments. Defaults to `stripe`.
           */
          payments?: Losses.Payments;
        }

        namespace Losses {
          type Payments = 'application' | 'stripe';
        }

        type RequirementCollection = 'application' | 'stripe';

        interface StripeDashboard {
          /**
           * Whether this account should have access to the full Stripe Dashboard (`full`), to the Express Dashboard (`express`), or to no Stripe-hosted dashboard (`none`). Defaults to `full`.
           */
          type?: StripeDashboard.Type;
        }

        namespace StripeDashboard {
          type Type = 'express' | 'full' | 'none';
        }
      }

      interface Documents {
        /**
         * One or more documents that support the [Bank account ownership verification](https://support.stripe.com/questions/bank-account-ownership-verification) requirement. Must be a document associated with the account's primary active bank account that displays the last 4 digits of the account number, either a statement or a check.
         */
        bank_account_ownership_verification?: Documents.BankAccountOwnershipVerification;

        /**
         * One or more documents that demonstrate proof of a company's license to operate.
         */
        company_license?: Documents.CompanyLicense;

        /**
         * One or more documents showing the company's Memorandum of Association.
         */
        company_memorandum_of_association?: Documents.CompanyMemorandumOfAssociation;

        /**
         * (Certain countries only) One or more documents showing the ministerial decree legalizing the company's establishment.
         */
        company_ministerial_decree?: Documents.CompanyMinisterialDecree;

        /**
         * One or more documents that demonstrate proof of a company's registration with the appropriate local authorities.
         */
        company_registration_verification?: Documents.CompanyRegistrationVerification;

        /**
         * One or more documents that demonstrate proof of a company's tax ID.
         */
        company_tax_id_verification?: Documents.CompanyTaxIdVerification;

        /**
         * One or more documents showing the company's proof of registration with the national business registry.
         */
        proof_of_registration?: Documents.ProofOfRegistration;
      }

      namespace Documents {
        interface BankAccountOwnershipVerification {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }

        interface CompanyLicense {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }

        interface CompanyMemorandumOfAssociation {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }

        interface CompanyMinisterialDecree {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }

        interface CompanyRegistrationVerification {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }

        interface CompanyTaxIdVerification {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }

        interface ProofOfRegistration {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }
      }

      interface ExternalAccount {
        /**
         * The type of external account. Should be bank_account.
         */
        object: string;

        /**
         * The country in which the bank account is located.
         */
        country: string;

        /**
         * The currency the bank account is in. This must be a country/currency pairing that [Stripe supports](https://stripe.com/docs/payouts).
         */
        currency: string;

        /**
         * The name of the person or business that owns the bank account. This field is required when attaching the bank account to a Customer object.
         */
        account_holder_name?: string;

        /**
         * The type of entity that holds the account. This can be either individual or company. This field is required when attaching the bank account to a Customer object.
         */
        account_holder_type?: string;

        /**
         * The routing number, sort code, or other country-appropriate institution number for the bank account. For US bank accounts, this is required and should be the ACH routing number, not the wire routing number. If you are providing an IBAN for account_number, this field is not required.
         */
        routing_number?: string;

        /**
         * The account number for the bank account, in string form. Must be a checking account.
         */
        account_number: string;
      }

      interface Individual {
        /**
         * The individual's primary address.
         */
        address?: Stripe.AddressParam;

        /**
         * The Kana variation of the individual's primary address (Japan only).
         */
        address_kana?: Stripe.JapanAddressParam;

        /**
         * The Kanji variation of the individual's primary address (Japan only).
         */
        address_kanji?: Stripe.JapanAddressParam;

        /**
         * The individual's date of birth.
         */
        dob?: Stripe.Emptyable<Individual.Dob>;

        /**
         * The individual's email address.
         */
        email?: string;

        /**
         * The individual's first name.
         */
        first_name?: string;

        /**
         * The Kana variation of the individual's first name (Japan only).
         */
        first_name_kana?: string;

        /**
         * The Kanji variation of the individual's first name (Japan only).
         */
        first_name_kanji?: string;

        /**
         * A list of alternate names or aliases that the individual is known by.
         */
        full_name_aliases?: Stripe.Emptyable<Array<string>>;

        /**
         * The individual's gender (International regulations require either "male" or "female").
         */
        gender?: string;

        /**
         * The government-issued ID number of the individual, as appropriate for the representative's country. (Examples are a Social Security Number in the U.S., or a Social Insurance Number in Canada). Instead of the number itself, you can also provide a [PII token created with Stripe.js](https://stripe.com/js/tokens/create_token?type=pii).
         */
        id_number?: string;

        /**
         * The government-issued secondary ID number of the individual, as appropriate for the representative's country, will be used for enhanced verification checks. In Thailand, this would be the laser code found on the back of an ID card. Instead of the number itself, you can also provide a [PII token created with Stripe.js](https://stripe.com/js/tokens/create_token?type=pii).
         */
        id_number_secondary?: string;

        /**
         * The individual's last name.
         */
        last_name?: string;

        /**
         * The Kana variation of the individual's last name (Japan only).
         */
        last_name_kana?: string;

        /**
         * The Kanji variation of the individual's last name (Japan only).
         */
        last_name_kanji?: string;

        /**
         * The individual's maiden name.
         */
        maiden_name?: string;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

        /**
         * The individual's phone number.
         */
        phone?: string;

        /**
         * Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
         */
        political_exposure?: Individual.PoliticalExposure;

        /**
         * The individual's registered address.
         */
        registered_address?: Stripe.AddressParam;

        /**
         * Describes the person's relationship to the account.
         */
        relationship?: Individual.Relationship;

        /**
         * The last four digits of the individual's Social Security Number (U.S. only).
         */
        ssn_last_4?: string;

        /**
         * The individual's verification document information.
         */
        verification?: Individual.Verification;
      }

      namespace Individual {
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

        type PoliticalExposure = 'existing' | 'none';

        interface Relationship {
          /**
           * Whether the person is a director of the account's legal entity. Directors are typically members of the governing board of the company, or responsible for ensuring the company meets its regulatory obligations.
           */
          director?: boolean;

          /**
           * Whether the person has significant responsibility to control, manage, or direct the organization.
           */
          executive?: boolean;

          /**
           * Whether the person is an owner of the account's legal entity.
           */
          owner?: boolean;

          /**
           * The percent owned by the person of the account's legal entity.
           */
          percent_ownership?: Stripe.Emptyable<number>;

          /**
           * The person's title (e.g., CEO, Support Engineer).
           */
          title?: string;
        }

        interface Verification {
          /**
           * A document showing address, either a passport, local ID card, or utility bill from a well-known utility company.
           */
          additional_document?: Verification.AdditionalDocument;

          /**
           * An identifying document, either a passport or local ID card.
           */
          document?: Verification.Document;
        }

        namespace Verification {
          interface AdditionalDocument {
            /**
             * The back of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
             */
            back?: string;

            /**
             * The front of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
             */
            front?: string;
          }

          interface Document {
            /**
             * The back of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
             */
            back?: string;

            /**
             * The front of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
             */
            front?: string;
          }
        }
      }

      interface Settings {
        /**
         * Settings specific to Bacs Direct Debit.
         */
        bacs_debit_payments?: Settings.BacsDebitPayments;

        /**
         * Settings used to apply the account's branding to email receipts, invoices, Checkout, and other products.
         */
        branding?: Settings.Branding;

        /**
         * Settings specific to the account's use of the Card Issuing product.
         */
        card_issuing?: Settings.CardIssuing;

        /**
         * Settings specific to card charging on the account.
         */
        card_payments?: Settings.CardPayments;

        /**
         * Settings that apply across payment methods for charging on the account.
         */
        payments?: Settings.Payments;

        /**
         * Settings specific to the account's payouts.
         */
        payouts?: Settings.Payouts;

        /**
         * Settings specific to the account's Treasury FinancialAccounts.
         */
        treasury?: Settings.Treasury;
      }

      namespace Settings {
        interface BacsDebitPayments {
          /**
           * The Bacs Direct Debit Display Name for this account. For payments made with Bacs Direct Debit, this name appears on the mandate as the statement descriptor. Mobile banking apps display it as the name of the business. To use custom branding, set the Bacs Direct Debit Display Name during or right after creation. Custom branding incurs an additional monthly fee for the platform. If you don't set the display name before requesting Bacs capability, it's automatically set as "Stripe" and the account is onboarded to Stripe branding, which is free.
           */
          display_name?: string;
        }

        interface Branding {
          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) An icon for the account. Must be square and at least 128px x 128px.
           */
          icon?: string;

          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) A logo for the account that will be used in Checkout instead of the icon and without the account's name next to it if provided. Must be at least 128px x 128px.
           */
          logo?: string;

          /**
           * A CSS hex color value representing the primary branding color for this account.
           */
          primary_color?: string;

          /**
           * A CSS hex color value representing the secondary branding color for this account.
           */
          secondary_color?: string;
        }

        interface CardIssuing {
          /**
           * Details on the account's acceptance of the [Stripe Issuing Terms and Disclosures](https://stripe.com/issuing/connect/tos_acceptance).
           */
          tos_acceptance?: CardIssuing.TosAcceptance;
        }

        namespace CardIssuing {
          interface TosAcceptance {
            /**
             * The Unix timestamp marking when the account representative accepted the service agreement.
             */
            date?: number;

            /**
             * The IP address from which the account representative accepted the service agreement.
             */
            ip?: string;

            /**
             * The user agent of the browser from which the account representative accepted the service agreement.
             */
            user_agent?: Stripe.Emptyable<string>;
          }
        }

        interface CardPayments {
          /**
           * Automatically declines certain charge types regardless of whether the card issuer accepted or declined the charge.
           */
          decline_on?: CardPayments.DeclineOn;

          /**
           * The default text that appears on credit card statements when a charge is made. This field prefixes any dynamic `statement_descriptor` specified on the charge. `statement_descriptor_prefix` is useful for maximizing descriptor space for the dynamic portion.
           */
          statement_descriptor_prefix?: string;

          /**
           * The Kana variation of the default text that appears on credit card statements when a charge is made (Japan only). This field prefixes any dynamic `statement_descriptor_suffix_kana` specified on the charge. `statement_descriptor_prefix_kana` is useful for maximizing descriptor space for the dynamic portion.
           */
          statement_descriptor_prefix_kana?: Stripe.Emptyable<string>;

          /**
           * The Kanji variation of the default text that appears on credit card statements when a charge is made (Japan only). This field prefixes any dynamic `statement_descriptor_suffix_kanji` specified on the charge. `statement_descriptor_prefix_kanji` is useful for maximizing descriptor space for the dynamic portion.
           */
          statement_descriptor_prefix_kanji?: Stripe.Emptyable<string>;
        }

        namespace CardPayments {
          interface DeclineOn {
            /**
             * Whether Stripe automatically declines charges with an incorrect ZIP or postal code. This setting only applies when a ZIP or postal code is provided and they fail bank verification.
             */
            avs_failure?: boolean;

            /**
             * Whether Stripe automatically declines charges with an incorrect CVC. This setting only applies when a CVC is provided and it fails bank verification.
             */
            cvc_failure?: boolean;
          }
        }

        interface Payments {
          /**
           * The default text that appears on statements for non-card charges outside of Japan. For card charges, if you don't set a `statement_descriptor_prefix`, this text is also used as the statement descriptor prefix. In that case, if concatenating the statement descriptor suffix causes the combined statement descriptor to exceed 22 characters, we truncate the `statement_descriptor` text to limit the full descriptor to 22 characters. For more information about statement descriptors and their requirements, see the [account settings documentation](https://docs.stripe.com/get-started/account/statement-descriptors).
           */
          statement_descriptor?: string;

          /**
           * The Kana variation of `statement_descriptor` used for charges in Japan. Japanese statement descriptors have [special requirements](https://docs.stripe.com/get-started/account/statement-descriptors#set-japanese-statement-descriptors).
           */
          statement_descriptor_kana?: string;

          /**
           * The Kanji variation of `statement_descriptor` used for charges in Japan. Japanese statement descriptors have [special requirements](https://docs.stripe.com/get-started/account/statement-descriptors#set-japanese-statement-descriptors).
           */
          statement_descriptor_kanji?: string;
        }

        interface Payouts {
          /**
           * A Boolean indicating whether Stripe should try to reclaim negative balances from an attached bank account. For details, see [Understanding Connect Account Balances](https://stripe.com/connect/account-balances).
           */
          debit_negative_balances?: boolean;

          /**
           * Details on when funds from charges are available, and when they are paid out to an external account. For details, see our [Setting Bank and Debit Card Payouts](https://stripe.com/connect/bank-transfers#payout-information) documentation.
           */
          schedule?: Payouts.Schedule;

          /**
           * The text that appears on the bank account statement for payouts. If not set, this defaults to the platform's bank descriptor as set in the Dashboard.
           */
          statement_descriptor?: string;
        }

        namespace Payouts {
          interface Schedule {
            /**
             * The number of days charge funds are held before being paid out. May also be set to `minimum`, representing the lowest available value for the account country. Default is `minimum`. The `delay_days` parameter remains at the last configured value if `interval` is `manual`. [Learn more about controlling payout delay days](https://stripe.com/connect/manage-payout-schedule).
             */
            delay_days?: 'minimum' | number;

            /**
             * How frequently available funds are paid out. One of: `daily`, `manual`, `weekly`, or `monthly`. Default is `daily`.
             */
            interval?: Schedule.Interval;

            /**
             * The day of the month when available funds are paid out, specified as a number between 1--31. Payouts nominally scheduled between the 29th and 31st of the month are instead sent on the last day of a shorter month. Required and applicable only if `interval` is `monthly`.
             */
            monthly_anchor?: number;

            /**
             * The day of the week when available funds are paid out, specified as `monday`, `tuesday`, etc. (required and applicable only if `interval` is `weekly`.)
             */
            weekly_anchor?: Schedule.WeeklyAnchor;
          }

          namespace Schedule {
            type Interval = 'daily' | 'manual' | 'monthly' | 'weekly';

            type WeeklyAnchor =
              | 'friday'
              | 'monday'
              | 'saturday'
              | 'sunday'
              | 'thursday'
              | 'tuesday'
              | 'wednesday';
          }
        }

        interface Treasury {
          /**
           * Details on the account's acceptance of the Stripe Treasury Services Agreement.
           */
          tos_acceptance?: Treasury.TosAcceptance;
        }

        namespace Treasury {
          interface TosAcceptance {
            /**
             * The Unix timestamp marking when the account representative accepted the service agreement.
             */
            date?: number;

            /**
             * The IP address from which the account representative accepted the service agreement.
             */
            ip?: string;

            /**
             * The user agent of the browser from which the account representative accepted the service agreement.
             */
            user_agent?: Stripe.Emptyable<string>;
          }
        }
      }

      interface TosAcceptance {
        /**
         * The Unix timestamp marking when the account representative accepted their service agreement.
         */
        date?: number;

        /**
         * The IP address from which the account representative accepted their service agreement.
         */
        ip?: string;

        /**
         * The user's service agreement type.
         */
        service_agreement?: string;

        /**
         * The user agent of the browser from which the account representative accepted their service agreement.
         */
        user_agent?: string;
      }

      type Type = 'custom' | 'express' | 'standard';
    }

    interface AccountRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface AccountUpdateParams {
      /**
       * An [account token](https://stripe.com/docs/api#create_account_token), used to securely provide details to the account.
       */
      account_token?: string;

      /**
       * Business information about the account.
       */
      business_profile?: AccountUpdateParams.BusinessProfile;

      /**
       * The business type. Once you create an [Account Link](https://stripe.com/api/account_links) or [Account Session](https://stripe.com/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](https://stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
       */
      business_type?: AccountUpdateParams.BusinessType;

      /**
       * Each key of the dictionary represents a capability, and each capability
       * maps to its settings (for example, whether it has been requested or not). Each
       * capability is inactive until you have provided its specific
       * requirements and Stripe has verified them. An account might have some
       * of its requested capabilities be active and some be inactive.
       *
       * Required when [account.controller.stripe_dashboard.type](https://stripe.com/api/accounts/create#create_account-controller-dashboard-type)
       * is `none`, which includes Custom accounts.
       */
      capabilities?: AccountUpdateParams.Capabilities;

      /**
       * Information about the company or business. This field is available for any `business_type`. Once you create an [Account Link](https://stripe.com/api/account_links) or [Account Session](https://stripe.com/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](https://stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
       */
      company?: AccountUpdateParams.Company;

      /**
       * Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://docs.stripe.com/payouts).
       */
      default_currency?: string;

      /**
       * Documents that may be submitted to satisfy various informational requests.
       */
      documents?: AccountUpdateParams.Documents;

      /**
       * The email address of the account holder. This is only to make the account easier to identify to you. If [controller.requirement_collection](https://stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts, Stripe doesn't email the account without your consent.
       */
      email?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A card or bank account to attach to the account for receiving [payouts](https://stripe.com/connect/bank-debit-card-payouts) (you won't be able to use it for top-ups). You can provide either a token, like the ones returned by [Stripe.js](https://stripe.com/js), or a dictionary, as documented in the `external_account` parameter for [bank account](https://stripe.com/api#account_create_bank_account) creation.
       *
       * By default, providing an external account sets it as the new default external account for its currency, and deletes the old default if one exists. To add additional external accounts without replacing the existing default for the currency, use the [bank account](https://stripe.com/api#account_create_bank_account) or [card creation](https://stripe.com/api#account_create_card) APIs. After you create an [Account Link](https://stripe.com/api/account_links) or [Account Session](https://stripe.com/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](https://stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
       */
      external_account?: Stripe.Emptyable<
        | string
        | AccountUpdateParams.BankAccount
        | AccountUpdateParams.Card
        | AccountUpdateParams.CardToken
      >;

      /**
       * Information about the person represented by the account. This field is null unless `business_type` is set to `individual`. Once you create an [Account Link](https://stripe.com/api/account_links) or [Account Session](https://stripe.com/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](https://stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
       */
      individual?: AccountUpdateParams.Individual;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * Options for customizing how the account functions within Stripe.
       */
      settings?: AccountUpdateParams.Settings;

      /**
       * Details on the account's acceptance of the [Stripe Services Agreement](https://stripe.com/connect/updating-accounts#tos-acceptance). This property can only be updated for accounts where [controller.requirement_collection](https://stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts. This property defaults to a `full` service agreement when empty.
       */
      tos_acceptance?: AccountUpdateParams.TosAcceptance;
    }

    namespace AccountUpdateParams {
      interface BankAccount {
        object: 'bank_account';

        /**
         * The name of the person or business that owns the bank account.This field is required when attaching the bank account to a `Customer` object.
         */
        account_holder_name?: string;

        /**
         * The type of entity that holds the account. It can be `company` or `individual`. This field is required when attaching the bank account to a `Customer` object.
         */
        account_holder_type?: BankAccount.AccountHolderType;

        /**
         * The account number for the bank account, in string form. Must be a checking account.
         */
        account_number: string;

        /**
         * The country in which the bank account is located.
         */
        country: string;

        /**
         * The currency the bank account is in. This must be a country/currency pairing that [Stripe supports.](docs/payouts)
         */
        currency?: string;

        /**
         * The routing number, sort code, or other country-appropriateinstitution number for the bank account. For US bank accounts, this is required and should bethe ACH routing number, not the wire routing number. If you are providing an IBAN for`account_number`, this field is not required.
         */
        routing_number?: string;
      }

      namespace BankAccount {
        type AccountHolderType = 'company' | 'individual';
      }

      interface BusinessProfile {
        /**
         * The applicant's gross annual revenue for its preceding fiscal year.
         */
        annual_revenue?: BusinessProfile.AnnualRevenue;

        /**
         * An estimated upper bound of employees, contractors, vendors, etc. currently working for the business.
         */
        estimated_worker_count?: number;

        /**
         * [The merchant category code for the account](https://stripe.com/connect/setting-mcc). MCCs are used to classify businesses based on the goods or services they provide.
         */
        mcc?: string;

        /**
         * An estimate of the monthly revenue of the business. Only accepted for accounts in Brazil and India.
         */
        monthly_estimated_revenue?: BusinessProfile.MonthlyEstimatedRevenue;

        /**
         * The customer-facing business name.
         */
        name?: string;

        /**
         * Internal-only description of the product sold by, or service provided by, the business. Used by Stripe for risk and underwriting purposes.
         */
        product_description?: string;

        /**
         * A publicly available mailing address for sending support issues to.
         */
        support_address?: Stripe.AddressParam;

        /**
         * A publicly available email address for sending support issues to.
         */
        support_email?: string;

        /**
         * A publicly available phone number to call with support issues.
         */
        support_phone?: string;

        /**
         * A publicly available website for handling support issues.
         */
        support_url?: Stripe.Emptyable<string>;

        /**
         * The business's publicly available website.
         */
        url?: string;
      }

      namespace BusinessProfile {
        interface AnnualRevenue {
          /**
           * A non-negative integer representing the amount in the [smallest currency unit](https://stripe.com/currencies#zero-decimal).
           */
          amount: number;

          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * The close-out date of the preceding fiscal year in ISO 8601 format. E.g. 2023-12-31 for the 31st of December, 2023.
           */
          fiscal_year_end: string;
        }

        interface MonthlyEstimatedRevenue {
          /**
           * A non-negative integer representing how much to charge in the [smallest currency unit](https://stripe.com/currencies#zero-decimal).
           */
          amount: number;

          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;
        }
      }

      type BusinessType =
        | 'company'
        | 'government_entity'
        | 'individual'
        | 'non_profit';

      interface Capabilities {
        /**
         * The acss_debit_payments capability.
         */
        acss_debit_payments?: Capabilities.AcssDebitPayments;

        /**
         * The affirm_payments capability.
         */
        affirm_payments?: Capabilities.AffirmPayments;

        /**
         * The afterpay_clearpay_payments capability.
         */
        afterpay_clearpay_payments?: Capabilities.AfterpayClearpayPayments;

        /**
         * The amazon_pay_payments capability.
         */
        amazon_pay_payments?: Capabilities.AmazonPayPayments;

        /**
         * The au_becs_debit_payments capability.
         */
        au_becs_debit_payments?: Capabilities.AuBecsDebitPayments;

        /**
         * The bacs_debit_payments capability.
         */
        bacs_debit_payments?: Capabilities.BacsDebitPayments;

        /**
         * The bancontact_payments capability.
         */
        bancontact_payments?: Capabilities.BancontactPayments;

        /**
         * The bank_transfer_payments capability.
         */
        bank_transfer_payments?: Capabilities.BankTransferPayments;

        /**
         * The blik_payments capability.
         */
        blik_payments?: Capabilities.BlikPayments;

        /**
         * The boleto_payments capability.
         */
        boleto_payments?: Capabilities.BoletoPayments;

        /**
         * The card_issuing capability.
         */
        card_issuing?: Capabilities.CardIssuing;

        /**
         * The card_payments capability.
         */
        card_payments?: Capabilities.CardPayments;

        /**
         * The cartes_bancaires_payments capability.
         */
        cartes_bancaires_payments?: Capabilities.CartesBancairesPayments;

        /**
         * The cashapp_payments capability.
         */
        cashapp_payments?: Capabilities.CashappPayments;

        /**
         * The eps_payments capability.
         */
        eps_payments?: Capabilities.EpsPayments;

        /**
         * The fpx_payments capability.
         */
        fpx_payments?: Capabilities.FpxPayments;

        /**
         * The gb_bank_transfer_payments capability.
         */
        gb_bank_transfer_payments?: Capabilities.GbBankTransferPayments;

        /**
         * The giropay_payments capability.
         */
        giropay_payments?: Capabilities.GiropayPayments;

        /**
         * The grabpay_payments capability.
         */
        grabpay_payments?: Capabilities.GrabpayPayments;

        /**
         * The ideal_payments capability.
         */
        ideal_payments?: Capabilities.IdealPayments;

        /**
         * The india_international_payments capability.
         */
        india_international_payments?: Capabilities.IndiaInternationalPayments;

        /**
         * The jcb_payments capability.
         */
        jcb_payments?: Capabilities.JcbPayments;

        /**
         * The jp_bank_transfer_payments capability.
         */
        jp_bank_transfer_payments?: Capabilities.JpBankTransferPayments;

        /**
         * The klarna_payments capability.
         */
        klarna_payments?: Capabilities.KlarnaPayments;

        /**
         * The konbini_payments capability.
         */
        konbini_payments?: Capabilities.KonbiniPayments;

        /**
         * The legacy_payments capability.
         */
        legacy_payments?: Capabilities.LegacyPayments;

        /**
         * The link_payments capability.
         */
        link_payments?: Capabilities.LinkPayments;

        /**
         * The mobilepay_payments capability.
         */
        mobilepay_payments?: Capabilities.MobilepayPayments;

        /**
         * The multibanco_payments capability.
         */
        multibanco_payments?: Capabilities.MultibancoPayments;

        /**
         * The mx_bank_transfer_payments capability.
         */
        mx_bank_transfer_payments?: Capabilities.MxBankTransferPayments;

        /**
         * The oxxo_payments capability.
         */
        oxxo_payments?: Capabilities.OxxoPayments;

        /**
         * The p24_payments capability.
         */
        p24_payments?: Capabilities.P24Payments;

        /**
         * The paynow_payments capability.
         */
        paynow_payments?: Capabilities.PaynowPayments;

        /**
         * The promptpay_payments capability.
         */
        promptpay_payments?: Capabilities.PromptpayPayments;

        /**
         * The revolut_pay_payments capability.
         */
        revolut_pay_payments?: Capabilities.RevolutPayPayments;

        /**
         * The sepa_bank_transfer_payments capability.
         */
        sepa_bank_transfer_payments?: Capabilities.SepaBankTransferPayments;

        /**
         * The sepa_debit_payments capability.
         */
        sepa_debit_payments?: Capabilities.SepaDebitPayments;

        /**
         * The sofort_payments capability.
         */
        sofort_payments?: Capabilities.SofortPayments;

        /**
         * The swish_payments capability.
         */
        swish_payments?: Capabilities.SwishPayments;

        /**
         * The tax_reporting_us_1099_k capability.
         */
        tax_reporting_us_1099_k?: Capabilities.TaxReportingUs1099K;

        /**
         * The tax_reporting_us_1099_misc capability.
         */
        tax_reporting_us_1099_misc?: Capabilities.TaxReportingUs1099Misc;

        /**
         * The transfers capability.
         */
        transfers?: Capabilities.Transfers;

        /**
         * The treasury capability.
         */
        treasury?: Capabilities.Treasury;

        /**
         * The twint_payments capability.
         */
        twint_payments?: Capabilities.TwintPayments;

        /**
         * The us_bank_account_ach_payments capability.
         */
        us_bank_account_ach_payments?: Capabilities.UsBankAccountAchPayments;

        /**
         * The us_bank_transfer_payments capability.
         */
        us_bank_transfer_payments?: Capabilities.UsBankTransferPayments;

        /**
         * The zip_payments capability.
         */
        zip_payments?: Capabilities.ZipPayments;
      }

      namespace Capabilities {
        interface AcssDebitPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface AffirmPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface AfterpayClearpayPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface AmazonPayPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface AuBecsDebitPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface BacsDebitPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface BancontactPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface BankTransferPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface BlikPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface BoletoPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface CardIssuing {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface CardPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface CartesBancairesPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface CashappPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface EpsPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface FpxPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface GbBankTransferPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface GiropayPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface GrabpayPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface IdealPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface IndiaInternationalPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface JcbPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface JpBankTransferPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface KlarnaPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface KonbiniPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface LegacyPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface LinkPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface MobilepayPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface MultibancoPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface MxBankTransferPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface OxxoPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface P24Payments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface PaynowPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface PromptpayPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface RevolutPayPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface SepaBankTransferPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface SepaDebitPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface SofortPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface SwishPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface TaxReportingUs1099K {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface TaxReportingUs1099Misc {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface Transfers {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface Treasury {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface TwintPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface UsBankAccountAchPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface UsBankTransferPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }

        interface ZipPayments {
          /**
           * Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.
           */
          requested?: boolean;
        }
      }

      interface Card {
        object: 'card';

        address_city?: string;

        address_country?: string;

        address_line1?: string;

        address_line2?: string;

        address_state?: string;

        address_zip?: string;

        currency?: string;

        cvc?: string;

        exp_month: number;

        exp_year: number;

        name?: string;

        number: string;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata?: Stripe.MetadataParam;

        default_for_currency?: boolean;
      }

      interface CardToken {
        object: 'card';

        currency?: string;

        token: string;
      }

      interface Company {
        /**
         * The company's primary address.
         */
        address?: Stripe.AddressParam;

        /**
         * The Kana variation of the company's primary address (Japan only).
         */
        address_kana?: Stripe.JapanAddressParam;

        /**
         * The Kanji variation of the company's primary address (Japan only).
         */
        address_kanji?: Stripe.JapanAddressParam;

        /**
         * Whether the company's directors have been provided. Set this Boolean to `true` after creating all the company's directors with [the Persons API](https://stripe.com/api/persons) for accounts with a `relationship.director` requirement. This value is not automatically set to `true` after creating directors, so it needs to be updated to indicate all directors have been provided.
         */
        directors_provided?: boolean;

        /**
         * Whether the company's executives have been provided. Set this Boolean to `true` after creating all the company's executives with [the Persons API](https://stripe.com/api/persons) for accounts with a `relationship.executive` requirement.
         */
        executives_provided?: boolean;

        /**
         * The export license ID number of the company, also referred as Import Export Code (India only).
         */
        export_license_id?: string;

        /**
         * The purpose code to use for export transactions (India only).
         */
        export_purpose_code?: string;

        /**
         * The company's legal name.
         */
        name?: string;

        /**
         * The Kana variation of the company's legal name (Japan only).
         */
        name_kana?: string;

        /**
         * The Kanji variation of the company's legal name (Japan only).
         */
        name_kanji?: string;

        /**
         * Whether the company's owners have been provided. Set this Boolean to `true` after creating all the company's owners with [the Persons API](https://stripe.com/api/persons) for accounts with a `relationship.owner` requirement.
         */
        owners_provided?: boolean;

        /**
         * This hash is used to attest that the beneficial owner information provided to Stripe is both current and correct.
         */
        ownership_declaration?: Company.OwnershipDeclaration;

        /**
         * The company's phone number (used for verification).
         */
        phone?: string;

        /**
         * The identification number given to a company when it is registered or incorporated, if distinct from the identification number used for filing taxes. (Examples are the CIN for companies and LLP IN for partnerships in India, and the Company Registration Number in Hong Kong).
         */
        registration_number?: string;

        /**
         * The category identifying the legal structure of the company or legal entity. See [Business structure](https://stripe.com/connect/identity-verification#business-structure) for more details. Pass an empty string to unset this value.
         */
        structure?: Stripe.Emptyable<Company.Structure>;

        /**
         * The business ID number of the company, as appropriate for the company's country. (Examples are an Employer ID Number in the U.S., a Business Number in Canada, or a Company Number in the UK.)
         */
        tax_id?: string;

        /**
         * The jurisdiction in which the `tax_id` is registered (Germany-based companies only).
         */
        tax_id_registrar?: string;

        /**
         * The VAT number of the company.
         */
        vat_id?: string;

        /**
         * Information on the verification state of the company.
         */
        verification?: Company.Verification;
      }

      namespace Company {
        interface OwnershipDeclaration {
          /**
           * The Unix timestamp marking when the beneficial owner attestation was made.
           */
          date?: number;

          /**
           * The IP address from which the beneficial owner attestation was made.
           */
          ip?: string;

          /**
           * The user agent of the browser from which the beneficial owner attestation was made.
           */
          user_agent?: string;
        }

        type Structure =
          | 'free_zone_establishment'
          | 'free_zone_llc'
          | 'government_instrumentality'
          | 'governmental_unit'
          | 'incorporated_non_profit'
          | 'incorporated_partnership'
          | 'limited_liability_partnership'
          | 'llc'
          | 'multi_member_llc'
          | 'private_company'
          | 'private_corporation'
          | 'private_partnership'
          | 'public_company'
          | 'public_corporation'
          | 'public_partnership'
          | 'registered_charity'
          | 'single_member_llc'
          | 'sole_establishment'
          | 'sole_proprietorship'
          | 'tax_exempt_government_instrumentality'
          | 'unincorporated_association'
          | 'unincorporated_non_profit'
          | 'unincorporated_partnership';

        interface Verification {
          /**
           * A document verifying the business.
           */
          document?: Verification.Document;
        }

        namespace Verification {
          interface Document {
            /**
             * The back of a document returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `additional_verification`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
             */
            back?: string;

            /**
             * The front of a document returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `additional_verification`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
             */
            front?: string;
          }
        }
      }

      interface Documents {
        /**
         * One or more documents that support the [Bank account ownership verification](https://support.stripe.com/questions/bank-account-ownership-verification) requirement. Must be a document associated with the account's primary active bank account that displays the last 4 digits of the account number, either a statement or a check.
         */
        bank_account_ownership_verification?: Documents.BankAccountOwnershipVerification;

        /**
         * One or more documents that demonstrate proof of a company's license to operate.
         */
        company_license?: Documents.CompanyLicense;

        /**
         * One or more documents showing the company's Memorandum of Association.
         */
        company_memorandum_of_association?: Documents.CompanyMemorandumOfAssociation;

        /**
         * (Certain countries only) One or more documents showing the ministerial decree legalizing the company's establishment.
         */
        company_ministerial_decree?: Documents.CompanyMinisterialDecree;

        /**
         * One or more documents that demonstrate proof of a company's registration with the appropriate local authorities.
         */
        company_registration_verification?: Documents.CompanyRegistrationVerification;

        /**
         * One or more documents that demonstrate proof of a company's tax ID.
         */
        company_tax_id_verification?: Documents.CompanyTaxIdVerification;

        /**
         * One or more documents showing the company's proof of registration with the national business registry.
         */
        proof_of_registration?: Documents.ProofOfRegistration;
      }

      namespace Documents {
        interface BankAccountOwnershipVerification {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }

        interface CompanyLicense {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }

        interface CompanyMemorandumOfAssociation {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }

        interface CompanyMinisterialDecree {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }

        interface CompanyRegistrationVerification {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }

        interface CompanyTaxIdVerification {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }

        interface ProofOfRegistration {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }
      }

      interface Individual {
        /**
         * The individual's primary address.
         */
        address?: Stripe.AddressParam;

        /**
         * The Kana variation of the individual's primary address (Japan only).
         */
        address_kana?: Stripe.JapanAddressParam;

        /**
         * The Kanji variation of the individual's primary address (Japan only).
         */
        address_kanji?: Stripe.JapanAddressParam;

        /**
         * The individual's date of birth.
         */
        dob?: Stripe.Emptyable<Individual.Dob>;

        /**
         * The individual's email address.
         */
        email?: string;

        /**
         * The individual's first name.
         */
        first_name?: string;

        /**
         * The Kana variation of the individual's first name (Japan only).
         */
        first_name_kana?: string;

        /**
         * The Kanji variation of the individual's first name (Japan only).
         */
        first_name_kanji?: string;

        /**
         * A list of alternate names or aliases that the individual is known by.
         */
        full_name_aliases?: Stripe.Emptyable<Array<string>>;

        /**
         * The individual's gender (International regulations require either "male" or "female").
         */
        gender?: string;

        /**
         * The government-issued ID number of the individual, as appropriate for the representative's country. (Examples are a Social Security Number in the U.S., or a Social Insurance Number in Canada). Instead of the number itself, you can also provide a [PII token created with Stripe.js](https://stripe.com/js/tokens/create_token?type=pii).
         */
        id_number?: string;

        /**
         * The government-issued secondary ID number of the individual, as appropriate for the representative's country, will be used for enhanced verification checks. In Thailand, this would be the laser code found on the back of an ID card. Instead of the number itself, you can also provide a [PII token created with Stripe.js](https://stripe.com/js/tokens/create_token?type=pii).
         */
        id_number_secondary?: string;

        /**
         * The individual's last name.
         */
        last_name?: string;

        /**
         * The Kana variation of the individual's last name (Japan only).
         */
        last_name_kana?: string;

        /**
         * The Kanji variation of the individual's last name (Japan only).
         */
        last_name_kanji?: string;

        /**
         * The individual's maiden name.
         */
        maiden_name?: string;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

        /**
         * The individual's phone number.
         */
        phone?: string;

        /**
         * Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
         */
        political_exposure?: Individual.PoliticalExposure;

        /**
         * The individual's registered address.
         */
        registered_address?: Stripe.AddressParam;

        /**
         * Describes the person's relationship to the account.
         */
        relationship?: Individual.Relationship;

        /**
         * The last four digits of the individual's Social Security Number (U.S. only).
         */
        ssn_last_4?: string;

        /**
         * The individual's verification document information.
         */
        verification?: Individual.Verification;
      }

      namespace Individual {
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

        type PoliticalExposure = 'existing' | 'none';

        interface Relationship {
          /**
           * Whether the person is a director of the account's legal entity. Directors are typically members of the governing board of the company, or responsible for ensuring the company meets its regulatory obligations.
           */
          director?: boolean;

          /**
           * Whether the person has significant responsibility to control, manage, or direct the organization.
           */
          executive?: boolean;

          /**
           * Whether the person is an owner of the account's legal entity.
           */
          owner?: boolean;

          /**
           * The percent owned by the person of the account's legal entity.
           */
          percent_ownership?: Stripe.Emptyable<number>;

          /**
           * The person's title (e.g., CEO, Support Engineer).
           */
          title?: string;
        }

        interface Verification {
          /**
           * A document showing address, either a passport, local ID card, or utility bill from a well-known utility company.
           */
          additional_document?: Verification.AdditionalDocument;

          /**
           * An identifying document, either a passport or local ID card.
           */
          document?: Verification.Document;
        }

        namespace Verification {
          interface AdditionalDocument {
            /**
             * The back of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
             */
            back?: string;

            /**
             * The front of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
             */
            front?: string;
          }

          interface Document {
            /**
             * The back of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
             */
            back?: string;

            /**
             * The front of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
             */
            front?: string;
          }
        }
      }

      interface Settings {
        /**
         * Settings specific to Bacs Direct Debit payments.
         */
        bacs_debit_payments?: Settings.BacsDebitPayments;

        /**
         * Settings used to apply the account's branding to email receipts, invoices, Checkout, and other products.
         */
        branding?: Settings.Branding;

        /**
         * Settings specific to the account's use of the Card Issuing product.
         */
        card_issuing?: Settings.CardIssuing;

        /**
         * Settings specific to card charging on the account.
         */
        card_payments?: Settings.CardPayments;

        /**
         * Settings specific to the account's use of Invoices.
         */
        invoices?: Settings.Invoices;

        /**
         * Settings that apply across payment methods for charging on the account.
         */
        payments?: Settings.Payments;

        /**
         * Settings specific to the account's payouts.
         */
        payouts?: Settings.Payouts;

        /**
         * Settings specific to the account's Treasury FinancialAccounts.
         */
        treasury?: Settings.Treasury;
      }

      namespace Settings {
        interface BacsDebitPayments {
          /**
           * The Bacs Direct Debit Display Name for this account. For payments made with Bacs Direct Debit, this name appears on the mandate as the statement descriptor. Mobile banking apps display it as the name of the business. To use custom branding, set the Bacs Direct Debit Display Name during or right after creation. Custom branding incurs an additional monthly fee for the platform. If you don't set the display name before requesting Bacs capability, it's automatically set as "Stripe" and the account is onboarded to Stripe branding, which is free.
           */
          display_name?: string;
        }

        interface Branding {
          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) An icon for the account. Must be square and at least 128px x 128px.
           */
          icon?: string;

          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) A logo for the account that will be used in Checkout instead of the icon and without the account's name next to it if provided. Must be at least 128px x 128px.
           */
          logo?: string;

          /**
           * A CSS hex color value representing the primary branding color for this account.
           */
          primary_color?: string;

          /**
           * A CSS hex color value representing the secondary branding color for this account.
           */
          secondary_color?: string;
        }

        interface CardIssuing {
          /**
           * Details on the account's acceptance of the [Stripe Issuing Terms and Disclosures](https://stripe.com/issuing/connect/tos_acceptance).
           */
          tos_acceptance?: CardIssuing.TosAcceptance;
        }

        namespace CardIssuing {
          interface TosAcceptance {
            /**
             * The Unix timestamp marking when the account representative accepted the service agreement.
             */
            date?: number;

            /**
             * The IP address from which the account representative accepted the service agreement.
             */
            ip?: string;

            /**
             * The user agent of the browser from which the account representative accepted the service agreement.
             */
            user_agent?: Stripe.Emptyable<string>;
          }
        }

        interface CardPayments {
          /**
           * Automatically declines certain charge types regardless of whether the card issuer accepted or declined the charge.
           */
          decline_on?: CardPayments.DeclineOn;

          /**
           * The default text that appears on credit card statements when a charge is made. This field prefixes any dynamic `statement_descriptor` specified on the charge. `statement_descriptor_prefix` is useful for maximizing descriptor space for the dynamic portion.
           */
          statement_descriptor_prefix?: string;

          /**
           * The Kana variation of the default text that appears on credit card statements when a charge is made (Japan only). This field prefixes any dynamic `statement_descriptor_suffix_kana` specified on the charge. `statement_descriptor_prefix_kana` is useful for maximizing descriptor space for the dynamic portion.
           */
          statement_descriptor_prefix_kana?: Stripe.Emptyable<string>;

          /**
           * The Kanji variation of the default text that appears on credit card statements when a charge is made (Japan only). This field prefixes any dynamic `statement_descriptor_suffix_kanji` specified on the charge. `statement_descriptor_prefix_kanji` is useful for maximizing descriptor space for the dynamic portion.
           */
          statement_descriptor_prefix_kanji?: Stripe.Emptyable<string>;
        }

        namespace CardPayments {
          interface DeclineOn {
            /**
             * Whether Stripe automatically declines charges with an incorrect ZIP or postal code. This setting only applies when a ZIP or postal code is provided and they fail bank verification.
             */
            avs_failure?: boolean;

            /**
             * Whether Stripe automatically declines charges with an incorrect CVC. This setting only applies when a CVC is provided and it fails bank verification.
             */
            cvc_failure?: boolean;
          }
        }

        interface Invoices {
          /**
           * The list of default Account Tax IDs to automatically include on invoices. Account Tax IDs get added when an invoice is finalized.
           */
          default_account_tax_ids?: Stripe.Emptyable<Array<string>>;
        }

        interface Payments {
          /**
           * The default text that appears on statements for non-card charges outside of Japan. For card charges, if you don't set a `statement_descriptor_prefix`, this text is also used as the statement descriptor prefix. In that case, if concatenating the statement descriptor suffix causes the combined statement descriptor to exceed 22 characters, we truncate the `statement_descriptor` text to limit the full descriptor to 22 characters. For more information about statement descriptors and their requirements, see the [account settings documentation](https://docs.stripe.com/get-started/account/statement-descriptors).
           */
          statement_descriptor?: string;

          /**
           * The Kana variation of `statement_descriptor` used for charges in Japan. Japanese statement descriptors have [special requirements](https://docs.stripe.com/get-started/account/statement-descriptors#set-japanese-statement-descriptors).
           */
          statement_descriptor_kana?: string;

          /**
           * The Kanji variation of `statement_descriptor` used for charges in Japan. Japanese statement descriptors have [special requirements](https://docs.stripe.com/get-started/account/statement-descriptors#set-japanese-statement-descriptors).
           */
          statement_descriptor_kanji?: string;
        }

        interface Payouts {
          /**
           * A Boolean indicating whether Stripe should try to reclaim negative balances from an attached bank account. For details, see [Understanding Connect Account Balances](https://stripe.com/connect/account-balances).
           */
          debit_negative_balances?: boolean;

          /**
           * Details on when funds from charges are available, and when they are paid out to an external account. For details, see our [Setting Bank and Debit Card Payouts](https://stripe.com/connect/bank-transfers#payout-information) documentation.
           */
          schedule?: Payouts.Schedule;

          /**
           * The text that appears on the bank account statement for payouts. If not set, this defaults to the platform's bank descriptor as set in the Dashboard.
           */
          statement_descriptor?: string;
        }

        namespace Payouts {
          interface Schedule {
            /**
             * The number of days charge funds are held before being paid out. May also be set to `minimum`, representing the lowest available value for the account country. Default is `minimum`. The `delay_days` parameter remains at the last configured value if `interval` is `manual`. [Learn more about controlling payout delay days](https://stripe.com/connect/manage-payout-schedule).
             */
            delay_days?: 'minimum' | number;

            /**
             * How frequently available funds are paid out. One of: `daily`, `manual`, `weekly`, or `monthly`. Default is `daily`.
             */
            interval?: Schedule.Interval;

            /**
             * The day of the month when available funds are paid out, specified as a number between 1--31. Payouts nominally scheduled between the 29th and 31st of the month are instead sent on the last day of a shorter month. Required and applicable only if `interval` is `monthly`.
             */
            monthly_anchor?: number;

            /**
             * The day of the week when available funds are paid out, specified as `monday`, `tuesday`, etc. (required and applicable only if `interval` is `weekly`.)
             */
            weekly_anchor?: Schedule.WeeklyAnchor;
          }

          namespace Schedule {
            type Interval = 'daily' | 'manual' | 'monthly' | 'weekly';

            type WeeklyAnchor =
              | 'friday'
              | 'monday'
              | 'saturday'
              | 'sunday'
              | 'thursday'
              | 'tuesday'
              | 'wednesday';
          }
        }

        interface Treasury {
          /**
           * Details on the account's acceptance of the Stripe Treasury Services Agreement.
           */
          tos_acceptance?: Treasury.TosAcceptance;
        }

        namespace Treasury {
          interface TosAcceptance {
            /**
             * The Unix timestamp marking when the account representative accepted the service agreement.
             */
            date?: number;

            /**
             * The IP address from which the account representative accepted the service agreement.
             */
            ip?: string;

            /**
             * The user agent of the browser from which the account representative accepted the service agreement.
             */
            user_agent?: Stripe.Emptyable<string>;
          }
        }
      }

      interface TosAcceptance {
        /**
         * The Unix timestamp marking when the account representative accepted their service agreement.
         */
        date?: number;

        /**
         * The IP address from which the account representative accepted their service agreement.
         */
        ip?: string;

        /**
         * The user's service agreement type.
         */
        service_agreement?: string;

        /**
         * The user agent of the browser from which the account representative accepted their service agreement.
         */
        user_agent?: string;
      }
    }

    interface AccountListParams extends PaginationParams {
      /**
       * Only return connected accounts that were created during the given date interval.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface AccountDeleteParams {}

    interface AccountCreateExternalAccountParams {
      /**
       * Please refer to full [documentation](https://stripe.com/docs/api) instead.
       */
      external_account:
        | string
        | AccountCreateExternalAccountParams.Card
        | AccountCreateExternalAccountParams.BankAccount
        | AccountCreateExternalAccountParams.CardToken;

      /**
       * When set to true, or if this is the first external account added in this currency, this account becomes the default external account for its currency.
       */
      default_for_currency?: boolean;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;
    }

    namespace AccountCreateExternalAccountParams {
      interface BankAccount {
        object: 'bank_account';

        /**
         * The name of the person or business that owns the bank account.This field is required when attaching the bank account to a `Customer` object.
         */
        account_holder_name?: string;

        /**
         * The type of entity that holds the account. It can be `company` or `individual`. This field is required when attaching the bank account to a `Customer` object.
         */
        account_holder_type?: BankAccount.AccountHolderType;

        /**
         * The account number for the bank account, in string form. Must be a checking account.
         */
        account_number: string;

        /**
         * The country in which the bank account is located.
         */
        country: string;

        /**
         * The currency the bank account is in. This must be a country/currency pairing that [Stripe supports.](docs/payouts)
         */
        currency?: string;

        /**
         * The routing number, sort code, or other country-appropriateinstitution number for the bank account. For US bank accounts, this is required and should bethe ACH routing number, not the wire routing number. If you are providing an IBAN for`account_number`, this field is not required.
         */
        routing_number?: string;
      }

      namespace BankAccount {
        type AccountHolderType = 'company' | 'individual';
      }

      interface Card {
        object: 'card';

        address_city?: string;

        address_country?: string;

        address_line1?: string;

        address_line2?: string;

        address_state?: string;

        address_zip?: string;

        currency?: string;

        cvc?: string;

        exp_month: number;

        exp_year: number;

        name?: string;

        number: string;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata?: Stripe.MetadataParam;
      }

      interface CardToken {
        object: 'card';

        currency?: string;

        token: string;
      }
    }

    interface AccountCreateLoginLinkParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface AccountCreatePersonParams {
      /**
       * Details on the legal guardian's or authorizer's acceptance of the required Stripe agreements.
       */
      additional_tos_acceptances?: AccountCreatePersonParams.AdditionalTosAcceptances;

      /**
       * The person's address.
       */
      address?: Stripe.AddressParam;

      /**
       * The Kana variation of the person's address (Japan only).
       */
      address_kana?: Stripe.JapanAddressParam;

      /**
       * The Kanji variation of the person's address (Japan only).
       */
      address_kanji?: Stripe.JapanAddressParam;

      /**
       * The person's date of birth.
       */
      dob?: Stripe.Emptyable<AccountCreatePersonParams.Dob>;

      /**
       * Documents that may be submitted to satisfy various informational requests.
       */
      documents?: AccountCreatePersonParams.Documents;

      /**
       * The person's email address.
       */
      email?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The person's first name.
       */
      first_name?: string;

      /**
       * The Kana variation of the person's first name (Japan only).
       */
      first_name_kana?: string;

      /**
       * The Kanji variation of the person's first name (Japan only).
       */
      first_name_kanji?: string;

      /**
       * A list of alternate names or aliases that the person is known by.
       */
      full_name_aliases?: Stripe.Emptyable<Array<string>>;

      /**
       * The person's gender (International regulations require either "male" or "female").
       */
      gender?: string;

      /**
       * The person's ID number, as appropriate for their country. For example, a social security number in the U.S., social insurance number in Canada, etc. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://docs.stripe.com/js/tokens/create_token?type=pii).
       */
      id_number?: string;

      /**
       * The person's secondary ID number, as appropriate for their country, will be used for enhanced verification checks. In Thailand, this would be the laser code found on the back of an ID card. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://docs.stripe.com/js/tokens/create_token?type=pii).
       */
      id_number_secondary?: string;

      /**
       * The person's last name.
       */
      last_name?: string;

      /**
       * The Kana variation of the person's last name (Japan only).
       */
      last_name_kana?: string;

      /**
       * The Kanji variation of the person's last name (Japan only).
       */
      last_name_kanji?: string;

      /**
       * The person's maiden name.
       */
      maiden_name?: string;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * The country where the person is a national. Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)), or "XX" if unavailable.
       */
      nationality?: string;

      /**
       * A [person token](https://docs.stripe.com/connect/account-tokens), used to securely provide details to the person.
       */
      person_token?: string;

      /**
       * The person's phone number.
       */
      phone?: string;

      /**
       * Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
       */
      political_exposure?: string;

      /**
       * The person's registered address.
       */
      registered_address?: Stripe.AddressParam;

      /**
       * The relationship that this person has with the account's legal entity.
       */
      relationship?: AccountCreatePersonParams.Relationship;

      /**
       * The last four digits of the person's Social Security number (U.S. only).
       */
      ssn_last_4?: string;

      /**
       * The person's verification status.
       */
      verification?: AccountCreatePersonParams.Verification;
    }

    namespace AccountCreatePersonParams {
      interface AdditionalTosAcceptances {
        /**
         * Details on the legal guardian's acceptance of the main Stripe service agreement.
         */
        account?: AdditionalTosAcceptances.Account;
      }

      namespace AdditionalTosAcceptances {
        interface Account {
          /**
           * The Unix timestamp marking when the account representative accepted the service agreement.
           */
          date?: number;

          /**
           * The IP address from which the account representative accepted the service agreement.
           */
          ip?: string;

          /**
           * The user agent of the browser from which the account representative accepted the service agreement.
           */
          user_agent?: Stripe.Emptyable<string>;
        }
      }

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

      interface Documents {
        /**
         * One or more documents that demonstrate proof that this person is authorized to represent the company.
         */
        company_authorization?: Documents.CompanyAuthorization;

        /**
         * One or more documents showing the person's passport page with photo and personal data.
         */
        passport?: Documents.Passport;

        /**
         * One or more documents showing the person's visa required for living in the country where they are residing.
         */
        visa?: Documents.Visa;
      }

      namespace Documents {
        interface CompanyAuthorization {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }

        interface Passport {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }

        interface Visa {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }
      }

      interface Relationship {
        /**
         * Whether the person is a director of the account's legal entity. Directors are typically members of the governing board of the company, or responsible for ensuring the company meets its regulatory obligations.
         */
        director?: boolean;

        /**
         * Whether the person has significant responsibility to control, manage, or direct the organization.
         */
        executive?: boolean;

        /**
         * Whether the person is the legal guardian of the account's representative.
         */
        legal_guardian?: boolean;

        /**
         * Whether the person is an owner of the account's legal entity.
         */
        owner?: boolean;

        /**
         * The percent owned by the person of the account's legal entity.
         */
        percent_ownership?: Stripe.Emptyable<number>;

        /**
         * Whether the person is authorized as the primary representative of the account. This is the person nominated by the business to provide information about themselves, and general information about the account. There can only be one representative at any given time. At the time the account is created, this person should be set to the person responsible for opening the account.
         */
        representative?: boolean;

        /**
         * The person's title (e.g., CEO, Support Engineer).
         */
        title?: string;
      }

      interface Verification {
        /**
         * A document showing address, either a passport, local ID card, or utility bill from a well-known utility company.
         */
        additional_document?: Verification.AdditionalDocument;

        /**
         * An identifying document, either a passport or local ID card.
         */
        document?: Verification.Document;
      }

      namespace Verification {
        interface AdditionalDocument {
          /**
           * The back of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
           */
          back?: string;

          /**
           * The front of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
           */
          front?: string;
        }

        interface Document {
          /**
           * The back of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
           */
          back?: string;

          /**
           * The front of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
           */
          front?: string;
        }
      }
    }

    interface AccountDeleteExternalAccountParams {}

    interface AccountDeletePersonParams {}

    interface AccountListCapabilitiesParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface AccountListExternalAccountsParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Filter external accounts according to a particular object type.
       */
      object?: AccountListExternalAccountsParams.Object;
    }

    namespace AccountListExternalAccountsParams {
      type Object = 'bank_account' | 'card';
    }

    interface AccountListPersonsParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Filters on the list of people returned based on the person's relationship to the account's company.
       */
      relationship?: AccountListPersonsParams.Relationship;
    }

    namespace AccountListPersonsParams {
      interface Relationship {
        /**
         * A filter on the list of people returned based on whether these people are directors of the account's company.
         */
        director?: boolean;

        /**
         * A filter on the list of people returned based on whether these people are executives of the account's company.
         */
        executive?: boolean;

        /**
         * A filter on the list of people returned based on whether these people are legal guardians of the account's representative.
         */
        legal_guardian?: boolean;

        /**
         * A filter on the list of people returned based on whether these people are owners of the account's company.
         */
        owner?: boolean;

        /**
         * A filter on the list of people returned based on whether these people are the representative of the account's company.
         */
        representative?: boolean;
      }
    }

    interface AccountRejectParams {
      /**
       * The reason for rejecting the account. Can be `fraud`, `terms_of_service`, or `other`.
       */
      reason: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface AccountRetrieveCurrentParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface AccountRetrieveCapabilityParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface AccountRetrieveExternalAccountParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface AccountRetrievePersonParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface AccountUpdateCapabilityParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * To request a new capability for an account, pass true. There can be a delay before the requested capability becomes active. If the capability has any activation requirements, the response includes them in the `requirements` arrays.
       *
       * If a capability isn't permanent, you can remove it from the account by passing false. Some capabilities are permanent after they've been requested. Attempting to remove a permanent capability returns an error.
       */
      requested?: boolean;
    }

    interface AccountUpdateExternalAccountParams {
      /**
       * The name of the person or business that owns the bank account.
       */
      account_holder_name?: string;

      /**
       * The type of entity that holds the account. This can be either `individual` or `company`.
       */
      account_holder_type?: Stripe.Emptyable<
        AccountUpdateExternalAccountParams.AccountHolderType
      >;

      /**
       * The bank account type. This can only be `checking` or `savings` in most countries. In Japan, this can only be `futsu` or `toza`.
       */
      account_type?: AccountUpdateExternalAccountParams.AccountType;

      /**
       * City/District/Suburb/Town/Village.
       */
      address_city?: string;

      /**
       * Billing address country, if provided when creating card.
       */
      address_country?: string;

      /**
       * Address line 1 (Street address/PO Box/Company name).
       */
      address_line1?: string;

      /**
       * Address line 2 (Apartment/Suite/Unit/Building).
       */
      address_line2?: string;

      /**
       * State/County/Province/Region.
       */
      address_state?: string;

      /**
       * ZIP or postal code.
       */
      address_zip?: string;

      /**
       * When set to true, this becomes the default external account for its currency.
       */
      default_for_currency?: boolean;

      /**
       * Documents that may be submitted to satisfy various informational requests.
       */
      documents?: AccountUpdateExternalAccountParams.Documents;

      /**
       * Two digit number representing the card's expiration month.
       */
      exp_month?: string;

      /**
       * Four digit number representing the card's expiration year.
       */
      exp_year?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * Cardholder name.
       */
      name?: string;
    }

    namespace AccountUpdateExternalAccountParams {
      type AccountHolderType = 'company' | 'individual';

      type AccountType = 'checking' | 'futsu' | 'savings' | 'toza';

      interface Documents {
        /**
         * One or more documents that support the [Bank account ownership verification](https://support.stripe.com/questions/bank-account-ownership-verification) requirement. Must be a document associated with the bank account that displays the last 4 digits of the account number, either a statement or a check.
         */
        bank_account_ownership_verification?: Documents.BankAccountOwnershipVerification;
      }

      namespace Documents {
        interface BankAccountOwnershipVerification {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }
      }
    }

    interface AccountUpdatePersonParams {
      /**
       * Details on the legal guardian's or authorizer's acceptance of the required Stripe agreements.
       */
      additional_tos_acceptances?: AccountUpdatePersonParams.AdditionalTosAcceptances;

      /**
       * The person's address.
       */
      address?: Stripe.AddressParam;

      /**
       * The Kana variation of the person's address (Japan only).
       */
      address_kana?: Stripe.JapanAddressParam;

      /**
       * The Kanji variation of the person's address (Japan only).
       */
      address_kanji?: Stripe.JapanAddressParam;

      /**
       * The person's date of birth.
       */
      dob?: Stripe.Emptyable<AccountUpdatePersonParams.Dob>;

      /**
       * Documents that may be submitted to satisfy various informational requests.
       */
      documents?: AccountUpdatePersonParams.Documents;

      /**
       * The person's email address.
       */
      email?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The person's first name.
       */
      first_name?: string;

      /**
       * The Kana variation of the person's first name (Japan only).
       */
      first_name_kana?: string;

      /**
       * The Kanji variation of the person's first name (Japan only).
       */
      first_name_kanji?: string;

      /**
       * A list of alternate names or aliases that the person is known by.
       */
      full_name_aliases?: Stripe.Emptyable<Array<string>>;

      /**
       * The person's gender (International regulations require either "male" or "female").
       */
      gender?: string;

      /**
       * The person's ID number, as appropriate for their country. For example, a social security number in the U.S., social insurance number in Canada, etc. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://docs.stripe.com/js/tokens/create_token?type=pii).
       */
      id_number?: string;

      /**
       * The person's secondary ID number, as appropriate for their country, will be used for enhanced verification checks. In Thailand, this would be the laser code found on the back of an ID card. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://docs.stripe.com/js/tokens/create_token?type=pii).
       */
      id_number_secondary?: string;

      /**
       * The person's last name.
       */
      last_name?: string;

      /**
       * The Kana variation of the person's last name (Japan only).
       */
      last_name_kana?: string;

      /**
       * The Kanji variation of the person's last name (Japan only).
       */
      last_name_kanji?: string;

      /**
       * The person's maiden name.
       */
      maiden_name?: string;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * The country where the person is a national. Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)), or "XX" if unavailable.
       */
      nationality?: string;

      /**
       * A [person token](https://docs.stripe.com/connect/account-tokens), used to securely provide details to the person.
       */
      person_token?: string;

      /**
       * The person's phone number.
       */
      phone?: string;

      /**
       * Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
       */
      political_exposure?: string;

      /**
       * The person's registered address.
       */
      registered_address?: Stripe.AddressParam;

      /**
       * The relationship that this person has with the account's legal entity.
       */
      relationship?: AccountUpdatePersonParams.Relationship;

      /**
       * The last four digits of the person's Social Security number (U.S. only).
       */
      ssn_last_4?: string;

      /**
       * The person's verification status.
       */
      verification?: AccountUpdatePersonParams.Verification;
    }

    namespace AccountUpdatePersonParams {
      interface AdditionalTosAcceptances {
        /**
         * Details on the legal guardian's acceptance of the main Stripe service agreement.
         */
        account?: AdditionalTosAcceptances.Account;
      }

      namespace AdditionalTosAcceptances {
        interface Account {
          /**
           * The Unix timestamp marking when the account representative accepted the service agreement.
           */
          date?: number;

          /**
           * The IP address from which the account representative accepted the service agreement.
           */
          ip?: string;

          /**
           * The user agent of the browser from which the account representative accepted the service agreement.
           */
          user_agent?: Stripe.Emptyable<string>;
        }
      }

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

      interface Documents {
        /**
         * One or more documents that demonstrate proof that this person is authorized to represent the company.
         */
        company_authorization?: Documents.CompanyAuthorization;

        /**
         * One or more documents showing the person's passport page with photo and personal data.
         */
        passport?: Documents.Passport;

        /**
         * One or more documents showing the person's visa required for living in the country where they are residing.
         */
        visa?: Documents.Visa;
      }

      namespace Documents {
        interface CompanyAuthorization {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }

        interface Passport {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }

        interface Visa {
          /**
           * One or more document ids returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `account_requirement`.
           */
          files?: Array<string>;
        }
      }

      interface Relationship {
        /**
         * Whether the person is a director of the account's legal entity. Directors are typically members of the governing board of the company, or responsible for ensuring the company meets its regulatory obligations.
         */
        director?: boolean;

        /**
         * Whether the person has significant responsibility to control, manage, or direct the organization.
         */
        executive?: boolean;

        /**
         * Whether the person is the legal guardian of the account's representative.
         */
        legal_guardian?: boolean;

        /**
         * Whether the person is an owner of the account's legal entity.
         */
        owner?: boolean;

        /**
         * The percent owned by the person of the account's legal entity.
         */
        percent_ownership?: Stripe.Emptyable<number>;

        /**
         * Whether the person is authorized as the primary representative of the account. This is the person nominated by the business to provide information about themselves, and general information about the account. There can only be one representative at any given time. At the time the account is created, this person should be set to the person responsible for opening the account.
         */
        representative?: boolean;

        /**
         * The person's title (e.g., CEO, Support Engineer).
         */
        title?: string;
      }

      interface Verification {
        /**
         * A document showing address, either a passport, local ID card, or utility bill from a well-known utility company.
         */
        additional_document?: Verification.AdditionalDocument;

        /**
         * An identifying document, either a passport or local ID card.
         */
        document?: Verification.Document;
      }

      namespace Verification {
        interface AdditionalDocument {
          /**
           * The back of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
           */
          back?: string;

          /**
           * The front of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
           */
          front?: string;
        }

        interface Document {
          /**
           * The back of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
           */
          back?: string;

          /**
           * The front of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
           */
          front?: string;
        }
      }
    }

    class AccountsResource {
      /**
       * With [Connect](https://stripe.com/docs/connect), you can create Stripe accounts for your users.
       * To do this, you'll first need to [register your platform](https://dashboard.stripe.com/account/applications/settings).
       *
       * If you've already collected information for your connected accounts, you [can prefill that information](https://stripe.com/docs/connect/best-practices#onboarding) when
       * creating the account. Connect Onboarding won't ask for the prefilled information during account onboarding.
       * You can prefill any information on the account.
       */
      create(
        params?: AccountCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Account>>;
      create(
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Account>>;

      /**
       * Retrieves the details of an account.
       */
      retrieve(
        params?: AccountRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Account>>;
      retrieve(
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Account>>;

      /**
       * Retrieves the details of an account.
       */
      retrieve(
        id: string,
        params?: AccountRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Account>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Account>>;

      /**
       * Updates a [connected account](https://stripe.com/connect/accounts) by setting the values of the parameters passed. Any parameters not provided are
       * left unchanged.
       *
       * For accounts where [controller.requirement_collection](https://stripe.com/api/accounts/object#account_object-controller-requirement_collection)
       * is application, which includes Custom accounts, you can update any information on the account.
       *
       * For accounts where [controller.requirement_collection](https://stripe.com/api/accounts/object#account_object-controller-requirement_collection)
       * is stripe, which includes Standard and Express accounts, you can update all information until you create
       * an [Account Link or <a href="/api/account_sessions">Account Session](https://stripe.com/api/account_links) to start Connect onboarding,
       * after which some properties can no longer be updated.
       *
       * To update your own account, use the [Dashboard](https://dashboard.stripe.com/settings/account). Refer to our
       * [Connect](https://stripe.com/docs/connect/updating-accounts) documentation to learn more about updating accounts.
       */
      update(
        id: string,
        params?: AccountUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Account>>;

      /**
       * Returns a list of accounts connected to your platform via [Connect](https://stripe.com/docs/connect). If you're not a platform, the list is empty.
       */
      list(
        params?: AccountListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Account>;
      list(options?: RequestOptions): ApiListPromise<Stripe.Account>;

      /**
       * With [Connect](https://stripe.com/connect), you can delete accounts you manage.
       *
       * Test-mode accounts can be deleted at any time.
       *
       * Live-mode accounts where Stripe is responsible for negative account balances cannot be deleted, which includes Standard accounts. Live-mode accounts where your platform is liable for negative account balances, which includes Custom and Express accounts, can be deleted when all [balances](https://stripe.com/api/balance/balance_object) are zero.
       *
       * If you want to delete your own account, use the [account information tab in your account settings](https://dashboard.stripe.com/settings/account) instead.
       */
      del(
        id: string,
        params?: AccountDeleteParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedAccount>>;
      del(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedAccount>>;

      /**
       * Create an external account for a given account.
       */
      createExternalAccount(
        id: string,
        params: AccountCreateExternalAccountParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.ExternalAccount>>;

      /**
       * Creates a single-use login link for a connected account to access the Express Dashboard.
       *
       * You can only create login links for accounts that use the [Express Dashboard](https://stripe.com/connect/express-dashboard) and are connected to your platform.
       */
      createLoginLink(
        id: string,
        params?: AccountCreateLoginLinkParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.LoginLink>>;
      createLoginLink(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.LoginLink>>;

      /**
       * Creates a new person.
       */
      createPerson(
        id: string,
        params?: AccountCreatePersonParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Person>>;
      createPerson(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Person>>;

      /**
       * Delete a specified external account for a given account.
       */
      deleteExternalAccount(
        accountId: string,
        id: string,
        params?: AccountDeleteExternalAccountParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedExternalAccount>>;
      deleteExternalAccount(
        accountId: string,
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedExternalAccount>>;

      /**
       * Deletes an existing person's relationship to the account's legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the account_opener. If your integration is using the executive parameter, you cannot delete the only verified executive on file.
       */
      deletePerson(
        accountId: string,
        id: string,
        params?: AccountDeletePersonParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedPerson>>;
      deletePerson(
        accountId: string,
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedPerson>>;

      /**
       * Returns a list of capabilities associated with the account. The capabilities are returned sorted by creation date, with the most recent capability appearing first.
       */
      listCapabilities(
        id: string,
        params?: AccountListCapabilitiesParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Capability>;
      listCapabilities(
        id: string,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Capability>;

      /**
       * List external accounts for an account.
       */
      listExternalAccounts(
        id: string,
        params?: AccountListExternalAccountsParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.ExternalAccount>;
      listExternalAccounts(
        id: string,
        options?: RequestOptions
      ): ApiListPromise<Stripe.ExternalAccount>;

      /**
       * Returns a list of people associated with the account's legal entity. The people are returned sorted by creation date, with the most recent people appearing first.
       */
      listPersons(
        id: string,
        params?: AccountListPersonsParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Person>;
      listPersons(
        id: string,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Person>;

      /**
       * With [Connect](https://stripe.com/connect), you can reject accounts that you have flagged as suspicious.
       *
       * Only accounts where your platform is liable for negative account balances, which includes Custom and Express accounts, can be rejected. Test-mode accounts can be rejected at any time. Live-mode accounts can only be rejected after all balances are zero.
       */
      reject(
        id: string,
        params: AccountRejectParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Account>>;

      /**
       * Retrieves the details of an account.
       */
      retrieveCurrent(
        params?: AccountRetrieveCurrentParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Account>>;
      retrieveCurrent(
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Account>>;

      /**
       * Retrieves information about the specified Account Capability.
       */
      retrieveCapability(
        accountId: string,
        id: string,
        params?: AccountRetrieveCapabilityParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Capability>>;
      retrieveCapability(
        accountId: string,
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Capability>>;

      /**
       * Retrieve a specified external account for a given account.
       */
      retrieveExternalAccount(
        accountId: string,
        id: string,
        params?: AccountRetrieveExternalAccountParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.ExternalAccount>>;
      retrieveExternalAccount(
        accountId: string,
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.ExternalAccount>>;

      /**
       * Retrieves an existing person.
       */
      retrievePerson(
        accountId: string,
        id: string,
        params?: AccountRetrievePersonParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Person>>;
      retrievePerson(
        accountId: string,
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Person>>;

      /**
       * Updates an existing Account Capability. Request or remove a capability by updating its requested parameter.
       */
      updateCapability(
        accountId: string,
        id: string,
        params?: AccountUpdateCapabilityParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Capability>>;
      updateCapability(
        accountId: string,
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Capability>>;

      /**
       * Updates the metadata, account holder name, account holder type of a bank account belonging to
       * a connected account and optionally sets it as the default for its currency. Other bank account
       * details are not editable by design.
       *
       * You can only update bank accounts when [account.controller.requirement_collection is application, which includes <a href="/connect/custom-accounts">Custom accounts](https://stripe.com/api/accounts/object#account_object-controller-requirement_collection).
       *
       * You can re-enable a disabled bank account by performing an update call without providing any
       * arguments or changes.
       */
      updateExternalAccount(
        accountId: string,
        id: string,
        params?: AccountUpdateExternalAccountParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.ExternalAccount>>;
      updateExternalAccount(
        accountId: string,
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.ExternalAccount>>;

      /**
       * Updates an existing person.
       */
      updatePerson(
        accountId: string,
        id: string,
        params?: AccountUpdatePersonParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Person>>;
      updatePerson(
        accountId: string,
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Person>>;
    }
  }
}
