import {Omit} from '../utils';
import {Card} from './cards';
import {BankAccount} from './bank-accounts';
import {JapanAddressParam, MetadataParam} from './shared';

/**
 * The Token object.
 */
export interface Token {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'token';

  bank_account?: BankAccount;

  card?: Card;

  /**
   * IP address of the client that generated the token.
   */
  client_ip: string | null;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Type of the token: `account`, `bank_account`, `card`, or `pii`.
   */
  type: string;

  /**
   * Whether this token has already been used (tokens can be used only once).
   */
  used: boolean;
}

export type BankAccountToken = Omit<Token, 'card'> & {
  bank_account: BankAccount;
};

export namespace TokenCreateParams {
  export interface Account {
    /**
     * The business type.
     */
    business_type?: Account.BusinessType;

    /**
     * Information about the company or business.
     */
    company?: Account.Company;

    /**
     * Information about the person represented by the account.
     */
    individual?: Account.Individual;

    /**
     * Whether the user described by the data in the token has been shown [the Stripe Connected Account Agreement](https://stripe.com/docs/connect/account-tokens#stripe-connected-account-agreement). When creating an account token to create a new Connect account, this value must be `true`.
     */
    tos_shown_and_accepted?: boolean;
  }

  export namespace Account {
    export type BusinessType =
      | 'company'
      | 'government_entity'
      | 'individual'
      | 'non_profit';

    export interface Company {
      /**
       * The company's primary address.
       */
      address?: Company.Address;

      /**
       * The Kana variation of the company's primary address (Japan only).
       */
      address_kana?: JapanAddressParam;

      /**
       * The Kanji variation of the company's primary address (Japan only).
       */
      address_kanji?: JapanAddressParam;

      /**
       * Whether the company's directors have been provided. Set this Boolean to `true` after creating all the company's directors with [the Persons API](https://stripe.com/docs/api/persons) for accounts with a `relationship.director` requirement. This value is not automatically set to `true` after creating directors, so it needs to be updated to indicate all directors have been provided.
       */
      directors_provided?: boolean;

      /**
       * Whether the company's executives have been provided. Set this Boolean to `true` after creating all the company's executives with [the Persons API](https://stripe.com/docs/api/persons) for accounts with a `relationship.executive` requirement.
       */
      executives_provided?: boolean;

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
       * Whether the company's owners have been provided. Set this Boolean to `true` after creating all the company's owners with [the Persons API](https://stripe.com/docs/api/persons) for accounts with a `relationship.owner` requirement.
       */
      owners_provided?: boolean;

      /**
       * The company's phone number (used for verification).
       */
      phone?: string;

      /**
       * The category identifying the legal structure of the company or legal entity. See [Business structure](https://stripe.com/docs/connect/identity-verification#business-structure) for more details.
       */
      structure?: Company.Structure | null;

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

    export namespace Company {
      export interface Address {
        /**
         * City, district, suburb, town, or village.
         */
        city?: string;

        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country?: string;

        /**
         * Address line 1 (e.g., street, PO Box, or company name).
         */
        line1?: string;

        /**
         * Address line 2 (e.g., apartment, suite, unit, or building).
         */
        line2?: string;

        /**
         * ZIP or postal code.
         */
        postal_code?: string;

        /**
         * State, county, province, or region.
         */
        state?: string;
      }

      export type Structure =
        | 'government_instrumentality'
        | 'governmental_unit'
        | 'incorporated_non_profit'
        | 'limited_liability_partnership'
        | 'multi_member_llc'
        | 'private_company'
        | 'private_corporation'
        | 'private_partnership'
        | 'public_company'
        | 'public_corporation'
        | 'public_partnership'
        | 'sole_proprietorship'
        | 'tax_exempt_government_instrumentality'
        | 'unincorporated_association'
        | 'unincorporated_non_profit';

      export interface Verification {
        /**
         * A document verifying the business.
         */
        document?: Verification.Document;
      }

      export namespace Verification {
        export interface Document {
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

    export interface Individual {
      /**
       * The individual's primary address.
       */
      address?: Individual.Address;

      /**
       * The Kana variation of the the individual's primary address (Japan only).
       */
      address_kana?: JapanAddressParam;

      /**
       * The Kanji variation of the the individual's primary address (Japan only).
       */
      address_kanji?: JapanAddressParam;

      /**
       * The individual's date of birth.
       */
      dob?: Individual.Dob | null;

      /**
       * The individual's email address.
       */
      email?: string;

      /**
       * The individual's first name.
       */
      first_name?: string;

      /**
       * The Kana variation of the the individual's first name (Japan only).
       */
      first_name_kana?: string;

      /**
       * The Kanji variation of the individual's first name (Japan only).
       */
      first_name_kanji?: string;

      /**
       * The individual's gender (International regulations require either "male" or "female").
       */
      gender?: string;

      /**
       * The government-issued ID number of the individual, as appropriate for the representative's country. (Examples are a Social Security Number in the U.S., or a Social Insurance Number in Canada). Instead of the number itself, you can also provide a [PII token created with Stripe.js](https://stripe.com/docs/stripe.js#collecting-pii-data).
       */
      id_number?: string;

      /**
       * The individual's last name.
       */
      last_name?: string;

      /**
       * The Kana varation of the individual's last name (Japan only).
       */
      last_name_kana?: string;

      /**
       * The Kanji varation of the individual's last name (Japan only).
       */
      last_name_kanji?: string;

      /**
       * The individual's maiden name.
       */
      maiden_name?: string;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam | null;

      /**
       * The individual's phone number.
       */
      phone?: string;

      /**
       * Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
       */
      political_exposure?: Individual.PoliticalExposure;

      /**
       * The last four digits of the individual's Social Security Number (U.S. only).
       */
      ssn_last_4?: string;

      /**
       * The individual's verification document information.
       */
      verification?: Individual.Verification;
    }

    export namespace Individual {
      export interface Address {
        /**
         * City, district, suburb, town, or village.
         */
        city?: string;

        /**
         * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country?: string;

        /**
         * Address line 1 (e.g., street, PO Box, or company name).
         */
        line1?: string;

        /**
         * Address line 2 (e.g., apartment, suite, unit, or building).
         */
        line2?: string;

        /**
         * ZIP or postal code.
         */
        postal_code?: string;

        /**
         * State, county, province, or region.
         */
        state?: string;
      }

      export interface Dob {
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

      export type PoliticalExposure = 'none' | 'existing';

      export interface Verification {
        /**
         * A document showing address, either a passport, local ID card, or utility bill from a well-known utility company.
         */
        additional_document?: Verification.AdditionalDocument;

        /**
         * An identifying document, either a passport or local ID card.
         */
        document?: Verification.Document;
      }

      export namespace Verification {
        export interface AdditionalDocument {
          /**
           * The back of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
           */
          back?: string;

          /**
           * The front of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
           */
          front?: string;
        }

        export interface Document {
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
  }

  export interface Person {
    /**
     * The person's address.
     */
    address?: Person.Address;

    /**
     * The Kana variation of the person's address (Japan only).
     */
    address_kana?: JapanAddressParam;

    /**
     * The Kanji variation of the person's address (Japan only).
     */
    address_kanji?: JapanAddressParam;

    /**
     * The person's date of birth.
     */
    dob?: Person.Dob | null;

    /**
     * The person's email address.
     */
    email?: string;

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
     * The person's gender (International regulations require either "male" or "female").
     */
    gender?: string;

    /**
     * The person's ID number, as appropriate for their country. For example, a social security number in the U.S., social insurance number in Canada, etc. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://stripe.com/docs/stripe.js#collecting-pii-data).
     */
    id_number?: string;

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
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: MetadataParam | null;

    /**
     * The person's phone number.
     */
    phone?: string;

    /**
     * The relationship that this person has with the account's legal entity.
     */
    relationship?: Person.Relationship;

    /**
     * The last 4 digits of the person's social security number.
     */
    ssn_last_4?: string;

    /**
     * The person's verification status.
     */
    verification?: Person.Verification;
  }

  export namespace Person {
    export interface Address {
      /**
       * City, district, suburb, town, or village.
       */
      city?: string;

      /**
       * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
       */
      country?: string;

      /**
       * Address line 1 (e.g., street, PO Box, or company name).
       */
      line1?: string;

      /**
       * Address line 2 (e.g., apartment, suite, unit, or building).
       */
      line2?: string;

      /**
       * ZIP or postal code.
       */
      postal_code?: string;

      /**
       * State, county, province, or region.
       */
      state?: string;
    }

    export interface Dob {
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

    export interface Relationship {
      /**
       * Whether the person is a director of the account's legal entity. Currently only required for accounts in the EU. Directors are typically members of the governing board of the company, or responsible for ensuring the company meets its regulatory obligations.
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
      percent_ownership?: number | null;

      /**
       * Whether the person is authorized as the primary representative of the account. This is the person nominated by the business to provide information about themselves, and general information about the account. There can only be one representative at any given time. At the time the account is created, this person should be set to the person responsible for opening the account.
       */
      representative?: boolean;

      /**
       * The person's title (e.g., CEO, Support Engineer).
       */
      title?: string;
    }

    export interface Verification {
      /**
       * A document showing address, either a passport, local ID card, or utility bill from a well-known utility company.
       */
      additional_document?: Verification.AdditionalDocument;

      /**
       * An identifying document, either a passport or local ID card.
       */
      document?: Verification.Document;
    }

    export namespace Verification {
      export interface AdditionalDocument {
        /**
         * The back of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
         */
        back?: string;

        /**
         * The front of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`. The uploaded file needs to be a color image (smaller than 8,000px by 8,000px), in JPG, PNG, or PDF format, and less than 10 MB in size.
         */
        front?: string;
      }

      export interface Document {
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
}
