// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Tax {
      interface SettingsRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface SettingsUpdateParams {
        /**
         * Default configuration to be used on Stripe Tax calculations.
         */
        defaults?: SettingsUpdateParams.Defaults;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * The place where your business is located.
         */
        head_office?: SettingsUpdateParams.HeadOffice;
      }

      namespace SettingsUpdateParams {
        interface Defaults {
          /**
           * Specifies the default [tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#tax-behavior) to be used when the item's price has unspecified tax behavior. One of inclusive, exclusive, or inferred_by_currency. Once specified, it cannot be changed back to null.
           */
          tax_behavior?: Defaults.TaxBehavior;

          /**
           * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
           */
          tax_code?: string;
        }

        namespace Defaults {
          type TaxBehavior = 'exclusive' | 'inclusive' | 'inferred_by_currency';
        }

        interface HeadOffice {
          /**
           * The location of the business for tax purposes.
           */
          address: Stripe.AddressParam;
        }
      }

      class SettingsResource {
        /**
         * Retrieves Tax Settings for a merchant.
         */
        retrieve(
          params?: SettingsRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Tax.Settings>>;
        retrieve(
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Tax.Settings>>;

        /**
         * Updates Tax Settings parameters used in tax calculations. All parameters are editable but none can be removed once set.
         */
        update(
          params?: SettingsUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Tax.Settings>>;
      }
    }
  }
}
