// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Climate {
      /**
       * A supplier of carbon removal.
       */
      interface Supplier {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'climate.supplier';

        /**
         * Link to a webpage to learn more about the supplier.
         */
        info_url: string;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The locations in which this supplier operates.
         */
        locations: Array<Supplier.Location>;

        /**
         * Name of this carbon removal supplier.
         */
        name: string;

        /**
         * The scientific pathway used for carbon removal.
         */
        removal_pathway: Supplier.RemovalPathway;
      }

      namespace Supplier {
        interface Location {
          /**
           * The city where the supplier is located.
           */
          city: string | null;

          /**
           * Two-letter ISO code representing the country where the supplier is located.
           */
          country: string;

          /**
           * The geographic latitude where the supplier is located.
           */
          latitude: number | null;

          /**
           * The geographic longitude where the supplier is located.
           */
          longitude: number | null;

          /**
           * The state/county/province/region where the supplier is located.
           */
          region: string | null;
        }

        type RemovalPathway =
          | 'biomass_carbon_removal_and_storage'
          | 'direct_air_capture'
          | 'enhanced_weathering';
      }
    }
  }
}
