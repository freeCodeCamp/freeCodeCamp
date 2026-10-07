// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Issuing {
      /**
       * A Personalization Design is a logical grouping of a Physical Bundle, card logo, and carrier text that represents a product line.
       */
      interface PersonalizationDesign {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'issuing.personalization_design';

        /**
         * The file for the card logo to use with physical bundles that support card logos. Must have a `purpose` value of `issuing_logo`.
         */
        card_logo: string | Stripe.File | null;

        /**
         * Hash containing carrier text, for use with physical bundles that support carrier text.
         */
        carrier_text: PersonalizationDesign.CarrierText | null;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * A lookup key used to retrieve personalization designs dynamically from a static string. This may be up to 200 characters.
         */
        lookup_key: string | null;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata;

        /**
         * Friendly display name.
         */
        name: string | null;

        /**
         * The physical bundle object belonging to this personalization design.
         */
        physical_bundle: string | Stripe.Issuing.PhysicalBundle;

        preferences: PersonalizationDesign.Preferences;

        rejection_reasons: PersonalizationDesign.RejectionReasons;

        /**
         * Whether this personalization design can be used to create cards.
         */
        status: PersonalizationDesign.Status;
      }

      namespace PersonalizationDesign {
        interface CarrierText {
          /**
           * The footer body text of the carrier letter.
           */
          footer_body: string | null;

          /**
           * The footer title text of the carrier letter.
           */
          footer_title: string | null;

          /**
           * The header body text of the carrier letter.
           */
          header_body: string | null;

          /**
           * The header title text of the carrier letter.
           */
          header_title: string | null;
        }

        interface Preferences {
          /**
           * Whether we use this personalization design to create cards when one isn't specified. A connected account uses the Connect platform's default design if no personalization design is set as the default design.
           */
          is_default: boolean;

          /**
           * Whether this personalization design is used to create cards when one is not specified and a default for this connected account does not exist.
           */
          is_platform_default: boolean | null;
        }

        interface RejectionReasons {
          /**
           * The reason(s) the card logo was rejected.
           */
          card_logo: Array<RejectionReasons.CardLogo> | null;

          /**
           * The reason(s) the carrier text was rejected.
           */
          carrier_text: Array<RejectionReasons.CarrierText> | null;
        }

        namespace RejectionReasons {
          type CardLogo =
            | 'geographic_location'
            | 'inappropriate'
            | 'network_name'
            | 'non_binary_image'
            | 'non_fiat_currency'
            | 'other'
            | 'other_entity'
            | 'promotional_material';

          type CarrierText =
            | 'geographic_location'
            | 'inappropriate'
            | 'network_name'
            | 'non_fiat_currency'
            | 'other'
            | 'other_entity'
            | 'promotional_material';
        }

        type Status = 'active' | 'inactive' | 'rejected' | 'review';
      }
    }
  }
}
