// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * This is an object representing a Stripe account. You can retrieve it to see
     * properties on the account like its current requirements or if the account is
     * enabled to make live charges or receive payouts.
     *
     * For accounts where [controller.requirement_collection](https://stripe.com/api/accounts/object#account_object-controller-requirement_collection)
     * is `application`, which includes Custom accounts, the properties below are always
     * returned.
     *
     * For accounts where [controller.requirement_collection](https://stripe.com/api/accounts/object#account_object-controller-requirement_collection)
     * is `stripe`, which includes Standard and Express accounts, some properties are only returned
     * until you create an [Account Link](https://stripe.com/api/account_links) or [Account Session](https://stripe.com/api/account_sessions)
     * to start Connect Onboarding. Learn about the [differences between accounts](https://stripe.com/connect/accounts).
     */
    interface Account {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'account';

      /**
       * Business information about the account.
       */
      business_profile?: Account.BusinessProfile | null;

      /**
       * The business type. After you create an [Account Link](https://stripe.com/api/account_links) or [Account Session](https://stripe.com/api/account_sessions), this property is only returned for accounts where [controller.requirement_collection](https://stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
       */
      business_type?: Account.BusinessType | null;

      capabilities?: Account.Capabilities;

      /**
       * Whether the account can create live charges.
       */
      charges_enabled: boolean;

      company?: Account.Company;

      controller?: Account.Controller;

      /**
       * The account's country.
       */
      country?: string;

      /**
       * Time at which the account was connected. Measured in seconds since the Unix epoch.
       */
      created?: number;

      /**
       * Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://stripe.com/docs/payouts).
       */
      default_currency?: string;

      /**
       * Always true for a deleted object
       */
      deleted?: void;

      /**
       * Whether account details have been submitted. Accounts with Stripe Dashboard access, which includes Standard accounts, cannot receive payouts before this is true. Accounts where this is false should be directed to [an onboarding flow](https://stripe.com/connect/onboarding) to finish submitting account details.
       */
      details_submitted: boolean;

      /**
       * An email address associated with the account. It's not used for authentication and Stripe doesn't market to this field without explicit approval from the platform.
       */
      email: string | null;

      /**
       * External accounts (bank accounts and debit cards) currently attached to this account. External accounts are only returned for requests where `controller[is_controller]` is true.
       */
      external_accounts?: ApiList<Stripe.ExternalAccount>;

      future_requirements?: Account.FutureRequirements;

      /**
       * This is an object representing a person associated with a Stripe account.
       *
       * A platform cannot access a person for an account where [account.controller.requirement_collection](https://stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `stripe`, which includes Standard and Express accounts, after creating an Account Link or Account Session to start Connect onboarding.
       *
       * See the [Standard onboarding](https://stripe.com/connect/standard-accounts) or [Express onboarding](https://stripe.com/connect/express-accounts) documentation for information about prefilling information and account onboarding steps. Learn more about [handling identity verification with the API](https://stripe.com/connect/handling-api-verification#person-information).
       */
      individual?: Stripe.Person;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: Stripe.Metadata;

      /**
       * Whether Stripe can send payouts to this account.
       */
      payouts_enabled: boolean;

      requirements?: Account.Requirements;

      /**
       * Options for customizing how the account functions within Stripe.
       */
      settings?: Account.Settings | null;

      tos_acceptance?: Account.TosAcceptance;

      /**
       * The Stripe account type. Can be `standard`, `express`, `custom`, or `none`.
       */
      type: Account.Type;
    }

    namespace Account {
      interface BusinessProfile {
        /**
         * The applicant's gross annual revenue for its preceding fiscal year.
         */
        annual_revenue: BusinessProfile.AnnualRevenue | null;

        /**
         * An estimated upper bound of employees, contractors, vendors, etc. currently working for the business.
         */
        estimated_worker_count: number | null;

        /**
         * [The merchant category code for the account](https://stripe.com/connect/setting-mcc). MCCs are used to classify businesses based on the goods or services they provide.
         */
        mcc: string | null;

        monthly_estimated_revenue?: BusinessProfile.MonthlyEstimatedRevenue;

        /**
         * The customer-facing business name.
         */
        name: string | null;

        /**
         * Internal-only description of the product sold or service provided by the business. It's used by Stripe for risk and underwriting purposes.
         */
        product_description?: string | null;

        /**
         * A publicly available mailing address for sending support issues to.
         */
        support_address: Stripe.Address | null;

        /**
         * A publicly available email address for sending support issues to.
         */
        support_email: string | null;

        /**
         * A publicly available phone number to call with support issues.
         */
        support_phone: string | null;

        /**
         * A publicly available website for handling support issues.
         */
        support_url: string | null;

        /**
         * The business's publicly available website.
         */
        url: string | null;
      }

      namespace BusinessProfile {
        interface AnnualRevenue {
          /**
           * A non-negative integer representing the amount in the [smallest currency unit](https://stripe.com/currencies#zero-decimal).
           */
          amount: number | null;

          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string | null;

          /**
           * The close-out date of the preceding fiscal year in ISO 8601 format. E.g. 2023-12-31 for the 31st of December, 2023.
           */
          fiscal_year_end: string | null;
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
         * The status of the Canadian pre-authorized debits payments capability of the account, or whether the account can directly process Canadian pre-authorized debits charges.
         */
        acss_debit_payments?: Capabilities.AcssDebitPayments;

        /**
         * The status of the Affirm capability of the account, or whether the account can directly process Affirm charges.
         */
        affirm_payments?: Capabilities.AffirmPayments;

        /**
         * The status of the Afterpay Clearpay capability of the account, or whether the account can directly process Afterpay Clearpay charges.
         */
        afterpay_clearpay_payments?: Capabilities.AfterpayClearpayPayments;

        /**
         * The status of the AmazonPay capability of the account, or whether the account can directly process AmazonPay payments.
         */
        amazon_pay_payments?: Capabilities.AmazonPayPayments;

        /**
         * The status of the BECS Direct Debit (AU) payments capability of the account, or whether the account can directly process BECS Direct Debit (AU) charges.
         */
        au_becs_debit_payments?: Capabilities.AuBecsDebitPayments;

        /**
         * The status of the Bacs Direct Debits payments capability of the account, or whether the account can directly process Bacs Direct Debits charges.
         */
        bacs_debit_payments?: Capabilities.BacsDebitPayments;

        /**
         * The status of the Bancontact payments capability of the account, or whether the account can directly process Bancontact charges.
         */
        bancontact_payments?: Capabilities.BancontactPayments;

        /**
         * The status of the customer_balance payments capability of the account, or whether the account can directly process customer_balance charges.
         */
        bank_transfer_payments?: Capabilities.BankTransferPayments;

        /**
         * The status of the blik payments capability of the account, or whether the account can directly process blik charges.
         */
        blik_payments?: Capabilities.BlikPayments;

        /**
         * The status of the boleto payments capability of the account, or whether the account can directly process boleto charges.
         */
        boleto_payments?: Capabilities.BoletoPayments;

        /**
         * The status of the card issuing capability of the account, or whether you can use Issuing to distribute funds on cards
         */
        card_issuing?: Capabilities.CardIssuing;

        /**
         * The status of the card payments capability of the account, or whether the account can directly process credit and debit card charges.
         */
        card_payments?: Capabilities.CardPayments;

        /**
         * The status of the Cartes Bancaires payments capability of the account, or whether the account can directly process Cartes Bancaires card charges in EUR currency.
         */
        cartes_bancaires_payments?: Capabilities.CartesBancairesPayments;

        /**
         * The status of the Cash App Pay capability of the account, or whether the account can directly process Cash App Pay payments.
         */
        cashapp_payments?: Capabilities.CashappPayments;

        /**
         * The status of the EPS payments capability of the account, or whether the account can directly process EPS charges.
         */
        eps_payments?: Capabilities.EpsPayments;

        /**
         * The status of the FPX payments capability of the account, or whether the account can directly process FPX charges.
         */
        fpx_payments?: Capabilities.FpxPayments;

        /**
         * The status of the GB customer_balance payments (GBP currency) capability of the account, or whether the account can directly process GB customer_balance charges.
         */
        gb_bank_transfer_payments?: Capabilities.GbBankTransferPayments;

        /**
         * The status of the giropay payments capability of the account, or whether the account can directly process giropay charges.
         */
        giropay_payments?: Capabilities.GiropayPayments;

        /**
         * The status of the GrabPay payments capability of the account, or whether the account can directly process GrabPay charges.
         */
        grabpay_payments?: Capabilities.GrabpayPayments;

        /**
         * The status of the iDEAL payments capability of the account, or whether the account can directly process iDEAL charges.
         */
        ideal_payments?: Capabilities.IdealPayments;

        /**
         * The status of the india_international_payments capability of the account, or whether the account can process international charges (non INR) in India.
         */
        india_international_payments?: Capabilities.IndiaInternationalPayments;

        /**
         * The status of the JCB payments capability of the account, or whether the account (Japan only) can directly process JCB credit card charges in JPY currency.
         */
        jcb_payments?: Capabilities.JcbPayments;

        /**
         * The status of the Japanese customer_balance payments (JPY currency) capability of the account, or whether the account can directly process Japanese customer_balance charges.
         */
        jp_bank_transfer_payments?: Capabilities.JpBankTransferPayments;

        /**
         * The status of the Klarna payments capability of the account, or whether the account can directly process Klarna charges.
         */
        klarna_payments?: Capabilities.KlarnaPayments;

        /**
         * The status of the konbini payments capability of the account, or whether the account can directly process konbini charges.
         */
        konbini_payments?: Capabilities.KonbiniPayments;

        /**
         * The status of the legacy payments capability of the account.
         */
        legacy_payments?: Capabilities.LegacyPayments;

        /**
         * The status of the link_payments capability of the account, or whether the account can directly process Link charges.
         */
        link_payments?: Capabilities.LinkPayments;

        /**
         * The status of the MobilePay capability of the account, or whether the account can directly process MobilePay charges.
         */
        mobilepay_payments?: Capabilities.MobilepayPayments;

        /**
         * The status of the Multibanco payments capability of the account, or whether the account can directly process Multibanco charges.
         */
        multibanco_payments?: Capabilities.MultibancoPayments;

        /**
         * The status of the Mexican customer_balance payments (MXN currency) capability of the account, or whether the account can directly process Mexican customer_balance charges.
         */
        mx_bank_transfer_payments?: Capabilities.MxBankTransferPayments;

        /**
         * The status of the OXXO payments capability of the account, or whether the account can directly process OXXO charges.
         */
        oxxo_payments?: Capabilities.OxxoPayments;

        /**
         * The status of the P24 payments capability of the account, or whether the account can directly process P24 charges.
         */
        p24_payments?: Capabilities.P24Payments;

        /**
         * The status of the paynow payments capability of the account, or whether the account can directly process paynow charges.
         */
        paynow_payments?: Capabilities.PaynowPayments;

        /**
         * The status of the promptpay payments capability of the account, or whether the account can directly process promptpay charges.
         */
        promptpay_payments?: Capabilities.PromptpayPayments;

        /**
         * The status of the RevolutPay capability of the account, or whether the account can directly process RevolutPay payments.
         */
        revolut_pay_payments?: Capabilities.RevolutPayPayments;

        /**
         * The status of the SEPA customer_balance payments (EUR currency) capability of the account, or whether the account can directly process SEPA customer_balance charges.
         */
        sepa_bank_transfer_payments?: Capabilities.SepaBankTransferPayments;

        /**
         * The status of the SEPA Direct Debits payments capability of the account, or whether the account can directly process SEPA Direct Debits charges.
         */
        sepa_debit_payments?: Capabilities.SepaDebitPayments;

        /**
         * The status of the Sofort payments capability of the account, or whether the account can directly process Sofort charges.
         */
        sofort_payments?: Capabilities.SofortPayments;

        /**
         * The status of the Swish capability of the account, or whether the account can directly process Swish payments.
         */
        swish_payments?: Capabilities.SwishPayments;

        /**
         * The status of the tax reporting 1099-K (US) capability of the account.
         */
        tax_reporting_us_1099_k?: Capabilities.TaxReportingUs1099K;

        /**
         * The status of the tax reporting 1099-MISC (US) capability of the account.
         */
        tax_reporting_us_1099_misc?: Capabilities.TaxReportingUs1099Misc;

        /**
         * The status of the transfers capability of the account, or whether your platform can transfer funds to the account.
         */
        transfers?: Capabilities.Transfers;

        /**
         * The status of the banking capability, or whether the account can have bank accounts.
         */
        treasury?: Capabilities.Treasury;

        /**
         * The status of the TWINT capability of the account, or whether the account can directly process TWINT charges.
         */
        twint_payments?: Capabilities.TwintPayments;

        /**
         * The status of the US bank account ACH payments capability of the account, or whether the account can directly process US bank account charges.
         */
        us_bank_account_ach_payments?: Capabilities.UsBankAccountAchPayments;

        /**
         * The status of the US customer_balance payments (USD currency) capability of the account, or whether the account can directly process US customer_balance charges.
         */
        us_bank_transfer_payments?: Capabilities.UsBankTransferPayments;

        /**
         * The status of the Zip capability of the account, or whether the account can directly process Zip charges.
         */
        zip_payments?: Capabilities.ZipPayments;
      }

      namespace Capabilities {
        type AcssDebitPayments = 'active' | 'inactive' | 'pending';

        type AffirmPayments = 'active' | 'inactive' | 'pending';

        type AfterpayClearpayPayments = 'active' | 'inactive' | 'pending';

        type AmazonPayPayments = 'active' | 'inactive' | 'pending';

        type AuBecsDebitPayments = 'active' | 'inactive' | 'pending';

        type BacsDebitPayments = 'active' | 'inactive' | 'pending';

        type BancontactPayments = 'active' | 'inactive' | 'pending';

        type BankTransferPayments = 'active' | 'inactive' | 'pending';

        type BlikPayments = 'active' | 'inactive' | 'pending';

        type BoletoPayments = 'active' | 'inactive' | 'pending';

        type CardIssuing = 'active' | 'inactive' | 'pending';

        type CardPayments = 'active' | 'inactive' | 'pending';

        type CartesBancairesPayments = 'active' | 'inactive' | 'pending';

        type CashappPayments = 'active' | 'inactive' | 'pending';

        type EpsPayments = 'active' | 'inactive' | 'pending';

        type FpxPayments = 'active' | 'inactive' | 'pending';

        type GbBankTransferPayments = 'active' | 'inactive' | 'pending';

        type GiropayPayments = 'active' | 'inactive' | 'pending';

        type GrabpayPayments = 'active' | 'inactive' | 'pending';

        type IdealPayments = 'active' | 'inactive' | 'pending';

        type IndiaInternationalPayments = 'active' | 'inactive' | 'pending';

        type JcbPayments = 'active' | 'inactive' | 'pending';

        type JpBankTransferPayments = 'active' | 'inactive' | 'pending';

        type KlarnaPayments = 'active' | 'inactive' | 'pending';

        type KonbiniPayments = 'active' | 'inactive' | 'pending';

        type LegacyPayments = 'active' | 'inactive' | 'pending';

        type LinkPayments = 'active' | 'inactive' | 'pending';

        type MobilepayPayments = 'active' | 'inactive' | 'pending';

        type MultibancoPayments = 'active' | 'inactive' | 'pending';

        type MxBankTransferPayments = 'active' | 'inactive' | 'pending';

        type OxxoPayments = 'active' | 'inactive' | 'pending';

        type P24Payments = 'active' | 'inactive' | 'pending';

        type PaynowPayments = 'active' | 'inactive' | 'pending';

        type PromptpayPayments = 'active' | 'inactive' | 'pending';

        type RevolutPayPayments = 'active' | 'inactive' | 'pending';

        type SepaBankTransferPayments = 'active' | 'inactive' | 'pending';

        type SepaDebitPayments = 'active' | 'inactive' | 'pending';

        type SofortPayments = 'active' | 'inactive' | 'pending';

        type SwishPayments = 'active' | 'inactive' | 'pending';

        type TaxReportingUs1099K = 'active' | 'inactive' | 'pending';

        type TaxReportingUs1099Misc = 'active' | 'inactive' | 'pending';

        type Transfers = 'active' | 'inactive' | 'pending';

        type Treasury = 'active' | 'inactive' | 'pending';

        type TwintPayments = 'active' | 'inactive' | 'pending';

        type UsBankAccountAchPayments = 'active' | 'inactive' | 'pending';

        type UsBankTransferPayments = 'active' | 'inactive' | 'pending';

        type ZipPayments = 'active' | 'inactive' | 'pending';
      }

      interface Company {
        address?: Stripe.Address;

        /**
         * The Kana variation of the company's primary address (Japan only).
         */
        address_kana?: Company.AddressKana | null;

        /**
         * The Kanji variation of the company's primary address (Japan only).
         */
        address_kanji?: Company.AddressKanji | null;

        /**
         * Whether the company's directors have been provided. This Boolean will be `true` if you've manually indicated that all directors are provided via [the `directors_provided` parameter](https://stripe.com/docs/api/accounts/update#update_account-company-directors_provided).
         */
        directors_provided?: boolean;

        /**
         * Whether the company's executives have been provided. This Boolean will be `true` if you've manually indicated that all executives are provided via [the `executives_provided` parameter](https://stripe.com/docs/api/accounts/update#update_account-company-executives_provided), or if Stripe determined that sufficient executives were provided.
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
        name?: string | null;

        /**
         * The Kana variation of the company's legal name (Japan only).
         */
        name_kana?: string | null;

        /**
         * The Kanji variation of the company's legal name (Japan only).
         */
        name_kanji?: string | null;

        /**
         * Whether the company's owners have been provided. This Boolean will be `true` if you've manually indicated that all owners are provided via [the `owners_provided` parameter](https://stripe.com/docs/api/accounts/update#update_account-company-owners_provided), or if Stripe determined that sufficient owners were provided. Stripe determines ownership requirements using both the number of owners provided and their total percent ownership (calculated by adding the `percent_ownership` of each owner together).
         */
        owners_provided?: boolean;

        /**
         * This hash is used to attest that the beneficial owner information provided to Stripe is both current and correct.
         */
        ownership_declaration?: Company.OwnershipDeclaration | null;

        /**
         * The company's phone number (used for verification).
         */
        phone?: string | null;

        /**
         * The category identifying the legal structure of the company or legal entity. See [Business structure](https://stripe.com/docs/connect/identity-verification#business-structure) for more details.
         */
        structure?: Company.Structure;

        /**
         * Whether the company's business ID number was provided.
         */
        tax_id_provided?: boolean;

        /**
         * The jurisdiction in which the `tax_id` is registered (Germany-based companies only).
         */
        tax_id_registrar?: string;

        /**
         * Whether the company's business VAT number was provided.
         */
        vat_id_provided?: boolean;

        /**
         * Information on the verification state of the company.
         */
        verification?: Company.Verification | null;
      }

      namespace Company {
        interface AddressKana {
          /**
           * City/Ward.
           */
          city: string | null;

          /**
           * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
           */
          country: string | null;

          /**
           * Block/Building number.
           */
          line1: string | null;

          /**
           * Building details.
           */
          line2: string | null;

          /**
           * ZIP or postal code.
           */
          postal_code: string | null;

          /**
           * Prefecture.
           */
          state: string | null;

          /**
           * Town/cho-me.
           */
          town: string | null;
        }

        interface AddressKanji {
          /**
           * City/Ward.
           */
          city: string | null;

          /**
           * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
           */
          country: string | null;

          /**
           * Block/Building number.
           */
          line1: string | null;

          /**
           * Building details.
           */
          line2: string | null;

          /**
           * ZIP or postal code.
           */
          postal_code: string | null;

          /**
           * Prefecture.
           */
          state: string | null;

          /**
           * Town/cho-me.
           */
          town: string | null;
        }

        interface OwnershipDeclaration {
          /**
           * The Unix timestamp marking when the beneficial owner attestation was made.
           */
          date: number | null;

          /**
           * The IP address from which the beneficial owner attestation was made.
           */
          ip: string | null;

          /**
           * The user-agent string from the browser where the beneficial owner attestation was made.
           */
          user_agent: string | null;
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
          document: Verification.Document;
        }

        namespace Verification {
          interface Document {
            /**
             * The back of a document returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `additional_verification`.
             */
            back: string | Stripe.File | null;

            /**
             * A user-displayable string describing the verification state of this document.
             */
            details: string | null;

            /**
             * One of `document_corrupt`, `document_expired`, `document_failed_copy`, `document_failed_greyscale`, `document_failed_other`, `document_failed_test_mode`, `document_fraudulent`, `document_incomplete`, `document_invalid`, `document_manipulated`, `document_not_readable`, `document_not_uploaded`, `document_type_not_supported`, or `document_too_large`. A machine-readable code specifying the verification state for this document.
             */
            details_code: string | null;

            /**
             * The front of a document returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `additional_verification`.
             */
            front: string | Stripe.File | null;
          }
        }
      }

      interface Controller {
        fees?: Controller.Fees;

        /**
         * `true` if the Connect application retrieving the resource controls the account and can therefore exercise [platform controls](https://stripe.com/docs/connect/platform-controls-for-standard-accounts). Otherwise, this field is null.
         */
        is_controller?: boolean;

        losses?: Controller.Losses;

        /**
         * A value indicating responsibility for collecting requirements on this account. Only returned when the Connect application retrieving the resource controls the account.
         */
        requirement_collection?: Controller.RequirementCollection;

        stripe_dashboard?: Controller.StripeDashboard;

        /**
         * The controller type. Can be `application`, if a Connect application controls the account, or `account`, if the account controls itself.
         */
        type: Controller.Type;
      }

      namespace Controller {
        interface Fees {
          /**
           * A value indicating the responsible payer of a bundle of Stripe fees for pricing-control eligible products on this account. Learn more about [fee behavior on connected accounts](https://docs.stripe.com/connect/direct-charges-fee-payer-behavior).
           */
          payer: Fees.Payer;
        }

        namespace Fees {
          type Payer =
            | 'account'
            | 'application'
            | 'application_custom'
            | 'application_express';
        }

        interface Losses {
          /**
           * A value indicating who is liable when this account can't pay back negative balances from payments.
           */
          payments: Losses.Payments;
        }

        namespace Losses {
          type Payments = 'application' | 'stripe';
        }

        type RequirementCollection = 'application' | 'stripe';

        interface StripeDashboard {
          /**
           * A value indicating the Stripe dashboard this account has access to independent of the Connect application.
           */
          type: StripeDashboard.Type;
        }

        namespace StripeDashboard {
          type Type = 'express' | 'full' | 'none';
        }

        type Type = 'account' | 'application';
      }

      interface FutureRequirements {
        /**
         * Fields that are due and can be satisfied by providing the corresponding alternative fields instead.
         */
        alternatives: Array<FutureRequirements.Alternative> | null;

        /**
         * Date on which `future_requirements` merges with the main `requirements` hash and `future_requirements` becomes empty. After the transition, `currently_due` requirements may immediately become `past_due`, but the account may also be given a grace period depending on its enablement state prior to transitioning.
         */
        current_deadline: number | null;

        /**
         * Fields that need to be collected to keep the account enabled. If not collected by `future_requirements[current_deadline]`, these fields will transition to the main `requirements` hash.
         */
        currently_due: Array<string> | null;

        /**
         * This is typed as a string for consistency with `requirements.disabled_reason`.
         */
        disabled_reason: string | null;

        /**
         * Fields that are `currently_due` and need to be collected again because validation or verification failed.
         */
        errors: Array<FutureRequirements.Error> | null;

        /**
         * Fields that need to be collected assuming all volume thresholds are reached. As they become required, they appear in `currently_due` as well.
         */
        eventually_due: Array<string> | null;

        /**
         * Fields that weren't collected by `requirements.current_deadline`. These fields need to be collected to enable the capability on the account. New fields will never appear here; `future_requirements.past_due` will always be a subset of `requirements.past_due`.
         */
        past_due: Array<string> | null;

        /**
         * Fields that might become required depending on the results of verification or review. It's an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due` or `currently_due`. Fields might appear in `eventually_due` or `currently_due` and in `pending_verification` if verification fails but another verification is still pending.
         */
        pending_verification: Array<string> | null;
      }

      namespace FutureRequirements {
        interface Alternative {
          /**
           * Fields that can be provided to satisfy all fields in `original_fields_due`.
           */
          alternative_fields_due: Array<string>;

          /**
           * Fields that are due and can be satisfied by providing all fields in `alternative_fields_due`.
           */
          original_fields_due: Array<string>;
        }

        interface Error {
          /**
           * The code for the type of error.
           */
          code: Error.Code;

          /**
           * An informative message that indicates the error type and provides additional details about the error.
           */
          reason: string;

          /**
           * The specific user onboarding requirement field (in the requirements hash) that needs to be resolved.
           */
          requirement: string;
        }

        namespace Error {
          type Code =
            | 'invalid_address_city_state_postal_code'
            | 'invalid_address_highway_contract_box'
            | 'invalid_address_private_mailbox'
            | 'invalid_business_profile_name'
            | 'invalid_business_profile_name_denylisted'
            | 'invalid_company_name_denylisted'
            | 'invalid_dob_age_over_maximum'
            | 'invalid_dob_age_under_18'
            | 'invalid_dob_age_under_minimum'
            | 'invalid_product_description_length'
            | 'invalid_product_description_url_match'
            | 'invalid_representative_country'
            | 'invalid_statement_descriptor_business_mismatch'
            | 'invalid_statement_descriptor_denylisted'
            | 'invalid_statement_descriptor_length'
            | 'invalid_statement_descriptor_prefix_denylisted'
            | 'invalid_statement_descriptor_prefix_mismatch'
            | 'invalid_street_address'
            | 'invalid_tax_id'
            | 'invalid_tax_id_format'
            | 'invalid_tos_acceptance'
            | 'invalid_url_denylisted'
            | 'invalid_url_format'
            | 'invalid_url_length'
            | 'invalid_url_web_presence_detected'
            | 'invalid_url_website_business_information_mismatch'
            | 'invalid_url_website_empty'
            | 'invalid_url_website_inaccessible'
            | 'invalid_url_website_inaccessible_geoblocked'
            | 'invalid_url_website_inaccessible_password_protected'
            | 'invalid_url_website_incomplete'
            | 'invalid_url_website_incomplete_cancellation_policy'
            | 'invalid_url_website_incomplete_customer_service_details'
            | 'invalid_url_website_incomplete_legal_restrictions'
            | 'invalid_url_website_incomplete_refund_policy'
            | 'invalid_url_website_incomplete_return_policy'
            | 'invalid_url_website_incomplete_terms_and_conditions'
            | 'invalid_url_website_incomplete_under_construction'
            | 'invalid_url_website_other'
            | 'invalid_value_other'
            | 'verification_directors_mismatch'
            | 'verification_document_address_mismatch'
            | 'verification_document_address_missing'
            | 'verification_document_corrupt'
            | 'verification_document_country_not_supported'
            | 'verification_document_directors_mismatch'
            | 'verification_document_dob_mismatch'
            | 'verification_document_duplicate_type'
            | 'verification_document_expired'
            | 'verification_document_failed_copy'
            | 'verification_document_failed_greyscale'
            | 'verification_document_failed_other'
            | 'verification_document_failed_test_mode'
            | 'verification_document_fraudulent'
            | 'verification_document_id_number_mismatch'
            | 'verification_document_id_number_missing'
            | 'verification_document_incomplete'
            | 'verification_document_invalid'
            | 'verification_document_issue_or_expiry_date_missing'
            | 'verification_document_manipulated'
            | 'verification_document_missing_back'
            | 'verification_document_missing_front'
            | 'verification_document_name_mismatch'
            | 'verification_document_name_missing'
            | 'verification_document_nationality_mismatch'
            | 'verification_document_not_readable'
            | 'verification_document_not_signed'
            | 'verification_document_not_uploaded'
            | 'verification_document_photo_mismatch'
            | 'verification_document_too_large'
            | 'verification_document_type_not_supported'
            | 'verification_extraneous_directors'
            | 'verification_failed_address_match'
            | 'verification_failed_business_iec_number'
            | 'verification_failed_document_match'
            | 'verification_failed_id_number_match'
            | 'verification_failed_keyed_identity'
            | 'verification_failed_keyed_match'
            | 'verification_failed_name_match'
            | 'verification_failed_other'
            | 'verification_failed_representative_authority'
            | 'verification_failed_residential_address'
            | 'verification_failed_tax_id_match'
            | 'verification_failed_tax_id_not_issued'
            | 'verification_missing_directors'
            | 'verification_missing_executives'
            | 'verification_missing_owners'
            | 'verification_requires_additional_memorandum_of_associations'
            | 'verification_requires_additional_proof_of_registration'
            | 'verification_supportability';
        }
      }

      interface Requirements {
        /**
         * Fields that are due and can be satisfied by providing the corresponding alternative fields instead.
         */
        alternatives: Array<Requirements.Alternative> | null;

        /**
         * Date by which the fields in `currently_due` must be collected to keep the account enabled. These fields may disable the account sooner if the next threshold is reached before they are collected.
         */
        current_deadline: number | null;

        /**
         * Fields that need to be collected to keep the account enabled. If not collected by `current_deadline`, these fields appear in `past_due` as well, and the account is disabled.
         */
        currently_due: Array<string> | null;

        /**
         * If the account is disabled, this string describes why. [Learn more about handling verification issues](https://stripe.com/docs/connect/handling-api-verification). Can be `action_required.requested_capabilities`, `requirements.past_due`, `requirements.pending_verification`, `listed`, `platform_paused`, `rejected.fraud`, `rejected.incomplete_verification`, `rejected.listed`, `rejected.other`, `rejected.terms_of_service`, `under_review`, or `other`.
         */
        disabled_reason: string | null;

        /**
         * Fields that are `currently_due` and need to be collected again because validation or verification failed.
         */
        errors: Array<Requirements.Error> | null;

        /**
         * Fields that need to be collected assuming all volume thresholds are reached. As they become required, they appear in `currently_due` as well, and `current_deadline` becomes set.
         */
        eventually_due: Array<string> | null;

        /**
         * Fields that weren't collected by `current_deadline`. These fields need to be collected to enable the account.
         */
        past_due: Array<string> | null;

        /**
         * Fields that might become required depending on the results of verification or review. It's an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due`, `currently_due`, or `past_due`. Fields might appear in `eventually_due`, `currently_due`, or `past_due` and in `pending_verification` if verification fails but another verification is still pending.
         */
        pending_verification: Array<string> | null;
      }

      namespace Requirements {
        interface Alternative {
          /**
           * Fields that can be provided to satisfy all fields in `original_fields_due`.
           */
          alternative_fields_due: Array<string>;

          /**
           * Fields that are due and can be satisfied by providing all fields in `alternative_fields_due`.
           */
          original_fields_due: Array<string>;
        }

        interface Error {
          /**
           * The code for the type of error.
           */
          code: Error.Code;

          /**
           * An informative message that indicates the error type and provides additional details about the error.
           */
          reason: string;

          /**
           * The specific user onboarding requirement field (in the requirements hash) that needs to be resolved.
           */
          requirement: string;
        }

        namespace Error {
          type Code =
            | 'invalid_address_city_state_postal_code'
            | 'invalid_address_highway_contract_box'
            | 'invalid_address_private_mailbox'
            | 'invalid_business_profile_name'
            | 'invalid_business_profile_name_denylisted'
            | 'invalid_company_name_denylisted'
            | 'invalid_dob_age_over_maximum'
            | 'invalid_dob_age_under_18'
            | 'invalid_dob_age_under_minimum'
            | 'invalid_product_description_length'
            | 'invalid_product_description_url_match'
            | 'invalid_representative_country'
            | 'invalid_statement_descriptor_business_mismatch'
            | 'invalid_statement_descriptor_denylisted'
            | 'invalid_statement_descriptor_length'
            | 'invalid_statement_descriptor_prefix_denylisted'
            | 'invalid_statement_descriptor_prefix_mismatch'
            | 'invalid_street_address'
            | 'invalid_tax_id'
            | 'invalid_tax_id_format'
            | 'invalid_tos_acceptance'
            | 'invalid_url_denylisted'
            | 'invalid_url_format'
            | 'invalid_url_length'
            | 'invalid_url_web_presence_detected'
            | 'invalid_url_website_business_information_mismatch'
            | 'invalid_url_website_empty'
            | 'invalid_url_website_inaccessible'
            | 'invalid_url_website_inaccessible_geoblocked'
            | 'invalid_url_website_inaccessible_password_protected'
            | 'invalid_url_website_incomplete'
            | 'invalid_url_website_incomplete_cancellation_policy'
            | 'invalid_url_website_incomplete_customer_service_details'
            | 'invalid_url_website_incomplete_legal_restrictions'
            | 'invalid_url_website_incomplete_refund_policy'
            | 'invalid_url_website_incomplete_return_policy'
            | 'invalid_url_website_incomplete_terms_and_conditions'
            | 'invalid_url_website_incomplete_under_construction'
            | 'invalid_url_website_other'
            | 'invalid_value_other'
            | 'verification_directors_mismatch'
            | 'verification_document_address_mismatch'
            | 'verification_document_address_missing'
            | 'verification_document_corrupt'
            | 'verification_document_country_not_supported'
            | 'verification_document_directors_mismatch'
            | 'verification_document_dob_mismatch'
            | 'verification_document_duplicate_type'
            | 'verification_document_expired'
            | 'verification_document_failed_copy'
            | 'verification_document_failed_greyscale'
            | 'verification_document_failed_other'
            | 'verification_document_failed_test_mode'
            | 'verification_document_fraudulent'
            | 'verification_document_id_number_mismatch'
            | 'verification_document_id_number_missing'
            | 'verification_document_incomplete'
            | 'verification_document_invalid'
            | 'verification_document_issue_or_expiry_date_missing'
            | 'verification_document_manipulated'
            | 'verification_document_missing_back'
            | 'verification_document_missing_front'
            | 'verification_document_name_mismatch'
            | 'verification_document_name_missing'
            | 'verification_document_nationality_mismatch'
            | 'verification_document_not_readable'
            | 'verification_document_not_signed'
            | 'verification_document_not_uploaded'
            | 'verification_document_photo_mismatch'
            | 'verification_document_too_large'
            | 'verification_document_type_not_supported'
            | 'verification_extraneous_directors'
            | 'verification_failed_address_match'
            | 'verification_failed_business_iec_number'
            | 'verification_failed_document_match'
            | 'verification_failed_id_number_match'
            | 'verification_failed_keyed_identity'
            | 'verification_failed_keyed_match'
            | 'verification_failed_name_match'
            | 'verification_failed_other'
            | 'verification_failed_representative_authority'
            | 'verification_failed_residential_address'
            | 'verification_failed_tax_id_match'
            | 'verification_failed_tax_id_not_issued'
            | 'verification_missing_directors'
            | 'verification_missing_executives'
            | 'verification_missing_owners'
            | 'verification_requires_additional_memorandum_of_associations'
            | 'verification_requires_additional_proof_of_registration'
            | 'verification_supportability';
        }
      }

      interface Settings {
        bacs_debit_payments?: Settings.BacsDebitPayments;

        branding: Settings.Branding;

        card_issuing?: Settings.CardIssuing;

        card_payments: Settings.CardPayments;

        dashboard: Settings.Dashboard;

        invoices?: Settings.Invoices;

        payments: Settings.Payments;

        payouts?: Settings.Payouts;

        sepa_debit_payments?: Settings.SepaDebitPayments;

        treasury?: Settings.Treasury;
      }

      namespace Settings {
        interface BacsDebitPayments {
          /**
           * The Bacs Direct Debit display name for this account. For payments made with Bacs Direct Debit, this name appears on the mandate as the statement descriptor. Mobile banking apps display it as the name of the business. To use custom branding, set the Bacs Direct Debit Display Name during or right after creation. Custom branding incurs an additional monthly fee for the platform. The fee appears 5 business days after requesting Bacs. If you don't set the display name before requesting Bacs capability, it's automatically set as "Stripe" and the account is onboarded to Stripe branding, which is free.
           */
          display_name: string | null;

          /**
           * The Bacs Direct Debit Service user number for this account. For payments made with Bacs Direct Debit, this number is a unique identifier of the account with our banking partners.
           */
          service_user_number: string | null;
        }

        interface Branding {
          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) An icon for the account. Must be square and at least 128px x 128px.
           */
          icon: string | Stripe.File | null;

          /**
           * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) A logo for the account that will be used in Checkout instead of the icon and without the account's name next to it if provided. Must be at least 128px x 128px.
           */
          logo: string | Stripe.File | null;

          /**
           * A CSS hex color value representing the primary branding color for this account
           */
          primary_color: string | null;

          /**
           * A CSS hex color value representing the secondary branding color for this account
           */
          secondary_color: string | null;
        }

        interface CardIssuing {
          tos_acceptance?: CardIssuing.TosAcceptance;
        }

        namespace CardIssuing {
          interface TosAcceptance {
            /**
             * The Unix timestamp marking when the account representative accepted the service agreement.
             */
            date: number | null;

            /**
             * The IP address from which the account representative accepted the service agreement.
             */
            ip: string | null;

            /**
             * The user agent of the browser from which the account representative accepted the service agreement.
             */
            user_agent?: string;
          }
        }

        interface CardPayments {
          decline_on?: CardPayments.DeclineOn;

          /**
           * The default text that appears on credit card statements when a charge is made. This field prefixes any dynamic `statement_descriptor` specified on the charge. `statement_descriptor_prefix` is useful for maximizing descriptor space for the dynamic portion.
           */
          statement_descriptor_prefix: string | null;

          /**
           * The Kana variation of the default text that appears on credit card statements when a charge is made (Japan only). This field prefixes any dynamic `statement_descriptor_suffix_kana` specified on the charge. `statement_descriptor_prefix_kana` is useful for maximizing descriptor space for the dynamic portion.
           */
          statement_descriptor_prefix_kana: string | null;

          /**
           * The Kanji variation of the default text that appears on credit card statements when a charge is made (Japan only). This field prefixes any dynamic `statement_descriptor_suffix_kanji` specified on the charge. `statement_descriptor_prefix_kanji` is useful for maximizing descriptor space for the dynamic portion.
           */
          statement_descriptor_prefix_kanji: string | null;
        }

        namespace CardPayments {
          interface DeclineOn {
            /**
             * Whether Stripe automatically declines charges with an incorrect ZIP or postal code. This setting only applies when a ZIP or postal code is provided and they fail bank verification.
             */
            avs_failure: boolean;

            /**
             * Whether Stripe automatically declines charges with an incorrect CVC. This setting only applies when a CVC is provided and it fails bank verification.
             */
            cvc_failure: boolean;
          }
        }

        interface Dashboard {
          /**
           * The display name for this account. This is used on the Stripe Dashboard to differentiate between accounts.
           */
          display_name: string | null;

          /**
           * The timezone used in the Stripe Dashboard for this account. A list of possible time zone values is maintained at the [IANA Time Zone Database](http://www.iana.org/time-zones).
           */
          timezone: string | null;
        }

        interface Invoices {
          /**
           * The list of default Account Tax IDs to automatically include on invoices. Account Tax IDs get added when an invoice is finalized.
           */
          default_account_tax_ids: Array<string | Stripe.TaxId> | null;
        }

        interface Payments {
          /**
           * The default text that appears on credit card statements when a charge is made. This field prefixes any dynamic `statement_descriptor` specified on the charge.
           */
          statement_descriptor: string | null;

          /**
           * The Kana variation of `statement_descriptor` used for charges in Japan. Japanese statement descriptors have [special requirements](https://docs.stripe.com/get-started/account/statement-descriptors#set-japanese-statement-descriptors).
           */
          statement_descriptor_kana: string | null;

          /**
           * The Kanji variation of `statement_descriptor` used for charges in Japan. Japanese statement descriptors have [special requirements](https://docs.stripe.com/get-started/account/statement-descriptors#set-japanese-statement-descriptors).
           */
          statement_descriptor_kanji: string | null;

          /**
           * The Kana variation of `statement_descriptor_prefix` used for card charges in Japan. Japanese statement descriptors have [special requirements](https://docs.stripe.com/get-started/account/statement-descriptors#set-japanese-statement-descriptors).
           */
          statement_descriptor_prefix_kana: string | null;

          /**
           * The Kanji variation of `statement_descriptor_prefix` used for card charges in Japan. Japanese statement descriptors have [special requirements](https://docs.stripe.com/get-started/account/statement-descriptors#set-japanese-statement-descriptors).
           */
          statement_descriptor_prefix_kanji: string | null;
        }

        interface Payouts {
          /**
           * A Boolean indicating if Stripe should try to reclaim negative balances from an attached bank account. See [Understanding Connect account balances](https://stripe.com/connect/account-balances) for details. The default value is `false` when [controller.requirement_collection](https://stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts, otherwise `true`.
           */
          debit_negative_balances: boolean;

          schedule: Payouts.Schedule;

          /**
           * The text that appears on the bank account statement for payouts. If not set, this defaults to the platform's bank descriptor as set in the Dashboard.
           */
          statement_descriptor: string | null;
        }

        namespace Payouts {
          interface Schedule {
            /**
             * The number of days charges for the account will be held before being paid out.
             */
            delay_days: number;

            /**
             * How frequently funds will be paid out. One of `manual` (payouts only created via API call), `daily`, `weekly`, or `monthly`.
             */
            interval: string;

            /**
             * The day of the month funds will be paid out. Only shown if `interval` is monthly. Payouts scheduled between the 29th and 31st of the month are sent on the last day of shorter months.
             */
            monthly_anchor?: number;

            /**
             * The day of the week funds will be paid out, of the style 'monday', 'tuesday', etc. Only shown if `interval` is weekly.
             */
            weekly_anchor?: string;
          }
        }

        interface SepaDebitPayments {
          /**
           * SEPA creditor identifier that identifies the company making the payment.
           */
          creditor_id?: string;
        }

        interface Treasury {
          tos_acceptance?: Treasury.TosAcceptance;
        }

        namespace Treasury {
          interface TosAcceptance {
            /**
             * The Unix timestamp marking when the account representative accepted the service agreement.
             */
            date: number | null;

            /**
             * The IP address from which the account representative accepted the service agreement.
             */
            ip: string | null;

            /**
             * The user agent of the browser from which the account representative accepted the service agreement.
             */
            user_agent?: string;
          }
        }
      }

      interface TosAcceptance {
        /**
         * The Unix timestamp marking when the account representative accepted their service agreement
         */
        date?: number | null;

        /**
         * The IP address from which the account representative accepted their service agreement
         */
        ip?: string | null;

        /**
         * The user's service agreement type
         */
        service_agreement?: string;

        /**
         * The user agent of the browser from which the account representative accepted their service agreement
         */
        user_agent?: string | null;
      }

      type Type = 'custom' | 'express' | 'none' | 'standard';
    }

    /**
     * The DeletedAccount object.
     */
    interface DeletedAccount {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'account';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }
  }
}
