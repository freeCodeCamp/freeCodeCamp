// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The DeletedPerson object.
     */
    interface DeletedPerson {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'person';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }

    /**
     * This is an object representing a person associated with a Stripe account.
     *
     * A platform cannot access a person for an account where [account.controller.requirement_collection](https://stripe.com/api/accounts/object#account_object-controller-requirement_collection) is `stripe`, which includes Standard and Express accounts, after creating an Account Link or Account Session to start Connect onboarding.
     *
     * See the [Standard onboarding](https://stripe.com/connect/standard-accounts) or [Express onboarding](https://stripe.com/connect/express-accounts) documentation for information about prefilling information and account onboarding steps. Learn more about [handling identity verification with the API](https://stripe.com/connect/handling-api-verification#person-information).
     */
    interface Person {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'person';

      /**
       * The account the person is associated with.
       */
      account: string;

      additional_tos_acceptances?: Person.AdditionalTosAcceptances;

      address?: Stripe.Address;

      /**
       * The Kana variation of the person's address (Japan only).
       */
      address_kana?: Person.AddressKana | null;

      /**
       * The Kanji variation of the person's address (Japan only).
       */
      address_kanji?: Person.AddressKanji | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Always true for a deleted object
       */
      deleted?: void;

      dob?: Person.Dob;

      /**
       * The person's email address.
       */
      email?: string | null;

      /**
       * The person's first name.
       */
      first_name?: string | null;

      /**
       * The Kana variation of the person's first name (Japan only).
       */
      first_name_kana?: string | null;

      /**
       * The Kanji variation of the person's first name (Japan only).
       */
      first_name_kanji?: string | null;

      /**
       * A list of alternate names or aliases that the person is known by.
       */
      full_name_aliases?: Array<string>;

      /**
       * Information about the [upcoming new requirements for this person](https://stripe.com/docs/connect/custom-accounts/future-requirements), including what information needs to be collected, and by when.
       */
      future_requirements?: Person.FutureRequirements | null;

      /**
       * The person's gender (International regulations require either "male" or "female").
       */
      gender?: string | null;

      /**
       * Whether the person's `id_number` was provided. True if either the full ID number was provided or if only the required part of the ID number was provided (ex. last four of an individual's SSN for the US indicated by `ssn_last_4_provided`).
       */
      id_number_provided?: boolean;

      /**
       * Whether the person's `id_number_secondary` was provided.
       */
      id_number_secondary_provided?: boolean;

      /**
       * The person's last name.
       */
      last_name?: string | null;

      /**
       * The Kana variation of the person's last name (Japan only).
       */
      last_name_kana?: string | null;

      /**
       * The Kanji variation of the person's last name (Japan only).
       */
      last_name_kanji?: string | null;

      /**
       * The person's maiden name.
       */
      maiden_name?: string | null;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: Stripe.Metadata;

      /**
       * The country where the person is a national.
       */
      nationality?: string | null;

      /**
       * The person's phone number.
       */
      phone?: string | null;

      /**
       * Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
       */
      political_exposure?: Person.PoliticalExposure;

      registered_address?: Stripe.Address;

      relationship?: Person.Relationship;

      /**
       * Information about the requirements for this person, including what information needs to be collected, and by when.
       */
      requirements?: Person.Requirements | null;

      /**
       * Whether the last four digits of the person's Social Security number have been provided (U.S. only).
       */
      ssn_last_4_provided?: boolean;

      verification?: Person.Verification;
    }

    namespace Person {
      interface AdditionalTosAcceptances {
        /**
         * Details on the legal guardian's acceptance of the main Stripe service agreement.
         */
        account: AdditionalTosAcceptances.Account | null;
      }

      namespace AdditionalTosAcceptances {
        interface Account {
          /**
           * The Unix timestamp marking when the legal guardian accepted the service agreement.
           */
          date: number | null;

          /**
           * The IP address from which the legal guardian accepted the service agreement.
           */
          ip: string | null;

          /**
           * The user agent of the browser from which the legal guardian accepted the service agreement.
           */
          user_agent: string | null;
        }
      }

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

      interface Dob {
        /**
         * The day of birth, between 1 and 31.
         */
        day: number | null;

        /**
         * The month of birth, between 1 and 12.
         */
        month: number | null;

        /**
         * The four-digit year of birth.
         */
        year: number | null;
      }

      interface FutureRequirements {
        /**
         * Fields that are due and can be satisfied by providing the corresponding alternative fields instead.
         */
        alternatives: Array<FutureRequirements.Alternative> | null;

        /**
         * Fields that need to be collected to keep the person's account enabled. If not collected by the account's `future_requirements[current_deadline]`, these fields will transition to the main `requirements` hash, and may immediately become `past_due`, but the account may also be given a grace period depending on the account's enablement state prior to transition.
         */
        currently_due: Array<string>;

        /**
         * Fields that are `currently_due` and need to be collected again because validation or verification failed.
         */
        errors: Array<FutureRequirements.Error>;

        /**
         * Fields that need to be collected assuming all volume thresholds are reached. As they become required, they appear in `currently_due` as well, and the account's `future_requirements[current_deadline]` becomes set.
         */
        eventually_due: Array<string>;

        /**
         * Fields that weren't collected by the account's `requirements.current_deadline`. These fields need to be collected to enable the person's account. New fields will never appear here; `future_requirements.past_due` will always be a subset of `requirements.past_due`.
         */
        past_due: Array<string>;

        /**
         * Fields that might become required depending on the results of verification or review. It's an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due` or `currently_due`. Fields might appear in `eventually_due` or `currently_due` and in `pending_verification` if verification fails but another verification is still pending.
         */
        pending_verification: Array<string>;
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

      type PoliticalExposure = 'existing' | 'none';

      interface Relationship {
        /**
         * Whether the person is a director of the account's legal entity. Directors are typically members of the governing board of the company, or responsible for ensuring the company meets its regulatory obligations.
         */
        director: boolean | null;

        /**
         * Whether the person has significant responsibility to control, manage, or direct the organization.
         */
        executive: boolean | null;

        /**
         * Whether the person is the legal guardian of the account's representative.
         */
        legal_guardian: boolean | null;

        /**
         * Whether the person is an owner of the account's legal entity.
         */
        owner: boolean | null;

        /**
         * The percent owned by the person of the account's legal entity.
         */
        percent_ownership: number | null;

        /**
         * Whether the person is authorized as the primary representative of the account. This is the person nominated by the business to provide information about themselves, and general information about the account. There can only be one representative at any given time. At the time the account is created, this person should be set to the person responsible for opening the account.
         */
        representative: boolean | null;

        /**
         * The person's title (e.g., CEO, Support Engineer).
         */
        title: string | null;
      }

      interface Requirements {
        /**
         * Fields that are due and can be satisfied by providing the corresponding alternative fields instead.
         */
        alternatives: Array<Requirements.Alternative> | null;

        /**
         * Fields that need to be collected to keep the person's account enabled. If not collected by the account's `current_deadline`, these fields appear in `past_due` as well, and the account is disabled.
         */
        currently_due: Array<string>;

        /**
         * Fields that are `currently_due` and need to be collected again because validation or verification failed.
         */
        errors: Array<Requirements.Error>;

        /**
         * Fields that need to be collected assuming all volume thresholds are reached. As they become required, they appear in `currently_due` as well, and the account's `current_deadline` becomes set.
         */
        eventually_due: Array<string>;

        /**
         * Fields that weren't collected by the account's `current_deadline`. These fields need to be collected to enable the person's account.
         */
        past_due: Array<string>;

        /**
         * Fields that might become required depending on the results of verification or review. It's an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due`, `currently_due`, or `past_due`. Fields might appear in `eventually_due`, `currently_due`, or `past_due` and in `pending_verification` if verification fails but another verification is still pending.
         */
        pending_verification: Array<string>;
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

      interface Verification {
        /**
         * A document showing address, either a passport, local ID card, or utility bill from a well-known utility company.
         */
        additional_document?: Verification.AdditionalDocument | null;

        /**
         * A user-displayable string describing the verification state for the person. For example, this may say "Provided identity information could not be verified".
         */
        details?: string | null;

        /**
         * One of `document_address_mismatch`, `document_dob_mismatch`, `document_duplicate_type`, `document_id_number_mismatch`, `document_name_mismatch`, `document_nationality_mismatch`, `failed_keyed_identity`, or `failed_other`. A machine-readable code specifying the verification state for the person.
         */
        details_code?: string | null;

        document?: Verification.Document;

        /**
         * The state of verification for the person. Possible values are `unverified`, `pending`, or `verified`.
         */
        status: string;
      }

      namespace Verification {
        interface AdditionalDocument {
          /**
           * The back of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`.
           */
          back: string | Stripe.File | null;

          /**
           * A user-displayable string describing the verification state of this document. For example, if a document is uploaded and the picture is too fuzzy, this may say "Identity document is too unclear to read".
           */
          details: string | null;

          /**
           * One of `document_corrupt`, `document_country_not_supported`, `document_expired`, `document_failed_copy`, `document_failed_other`, `document_failed_test_mode`, `document_fraudulent`, `document_failed_greyscale`, `document_incomplete`, `document_invalid`, `document_manipulated`, `document_missing_back`, `document_missing_front`, `document_not_readable`, `document_not_uploaded`, `document_photo_mismatch`, `document_too_large`, or `document_type_not_supported`. A machine-readable code specifying the verification state for this document.
           */
          details_code: string | null;

          /**
           * The front of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`.
           */
          front: string | Stripe.File | null;
        }

        interface Document {
          /**
           * The back of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`.
           */
          back: string | Stripe.File | null;

          /**
           * A user-displayable string describing the verification state of this document. For example, if a document is uploaded and the picture is too fuzzy, this may say "Identity document is too unclear to read".
           */
          details: string | null;

          /**
           * One of `document_corrupt`, `document_country_not_supported`, `document_expired`, `document_failed_copy`, `document_failed_other`, `document_failed_test_mode`, `document_fraudulent`, `document_failed_greyscale`, `document_incomplete`, `document_invalid`, `document_manipulated`, `document_missing_back`, `document_missing_front`, `document_not_readable`, `document_not_uploaded`, `document_photo_mismatch`, `document_too_large`, or `document_type_not_supported`. A machine-readable code specifying the verification state for this document.
           */
          details_code: string | null;

          /**
           * The front of an ID returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`.
           */
          front: string | Stripe.File | null;
        }
      }
    }
  }
}
