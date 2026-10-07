// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * Stripe needs to collect certain pieces of information about each account
     * created. These requirements can differ depending on the account's country. The
     * Country Specs API makes these rules available to your integration.
     *
     * You can also view the information from this API call as [an online
     * guide](https://stripe.com/docs/connect/required-verification-information).
     */
    interface CountrySpec {
      /**
       * Unique identifier for the object. Represented as the ISO country code for this country.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'country_spec';

      /**
       * The default currency for this country. This applies to both payment methods and bank accounts.
       */
      default_currency: string;

      /**
       * Currencies that can be accepted in the specific country (for transfers).
       */
      supported_bank_account_currencies: {
        [key: string]: Array<string>;
      };

      /**
       * Currencies that can be accepted in the specified country (for payments).
       */
      supported_payment_currencies: Array<string>;

      /**
       * Payment methods available in the specified country. You may need to enable some payment methods (e.g., [ACH](https://stripe.com/docs/ach)) on your account before they appear in this list. The `stripe` payment method refers to [charging through your platform](https://stripe.com/docs/connect/destination-charges).
       */
      supported_payment_methods: Array<string>;

      /**
       * Countries that can accept transfers from the specified country.
       */
      supported_transfer_countries: Array<string>;

      verification_fields: CountrySpec.VerificationFields;
    }

    namespace CountrySpec {
      interface VerificationFields {
        company: VerificationFields.Company;

        individual: VerificationFields.Individual;
      }

      namespace VerificationFields {
        interface Company {
          /**
           * Additional fields which are only required for some users.
           */
          additional: Array<string>;

          /**
           * Fields which every account must eventually provide.
           */
          minimum: Array<string>;
        }

        interface Individual {
          /**
           * Additional fields which are only required for some users.
           */
          additional: Array<string>;

          /**
           * Fields which every account must eventually provide.
           */
          minimum: Array<string>;
        }
      }
    }
  }
}
