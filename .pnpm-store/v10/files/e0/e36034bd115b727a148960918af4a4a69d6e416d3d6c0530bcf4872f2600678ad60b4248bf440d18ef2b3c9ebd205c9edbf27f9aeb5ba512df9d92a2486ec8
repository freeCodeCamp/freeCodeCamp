// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Tax {
      /**
       * You can use Tax `Settings` to manage configurations used by Stripe Tax calculations.
       *
       * Related guide: [Using the Settings API](https://stripe.com/docs/tax/settings-api)
       */
      interface Settings {
        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'tax.settings';

        defaults: Settings.Defaults;

        /**
         * The place where your business is located.
         */
        head_office: Settings.HeadOffice | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The `active` status indicates you have all required settings to calculate tax. A status can transition out of `active` when new required settings are introduced.
         */
        status: Settings.Status;

        status_details: Settings.StatusDetails;
      }

      namespace Settings {
        interface Defaults {
          /**
           * Default [tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#tax-behavior) used to specify whether the price is considered inclusive of taxes or exclusive of taxes. If the item's price has a tax behavior set, it will take precedence over the default tax behavior.
           */
          tax_behavior: Defaults.TaxBehavior | null;

          /**
           * Default [tax code](https://stripe.com/docs/tax/tax-categories) used to classify your products and prices.
           */
          tax_code: string | null;
        }

        namespace Defaults {
          type TaxBehavior = 'exclusive' | 'inclusive' | 'inferred_by_currency';
        }

        interface HeadOffice {
          address: Stripe.Address;
        }

        type Status = 'active' | 'pending';

        interface StatusDetails {
          active?: StatusDetails.Active;

          pending?: StatusDetails.Pending;
        }

        namespace StatusDetails {
          interface Active {}

          interface Pending {
            /**
             * The list of missing fields that are required to perform calculations. It includes the entry `head_office` when the status is `pending`. It is recommended to set the optional values even if they aren't listed as required for calculating taxes. Calculations can fail if missing fields aren't explicitly provided on every call.
             */
            missing_fields: Array<string> | null;
          }
        }
      }
    }
  }
}
