// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Issuing {
      /**
       * A Physical Bundle represents the bundle of physical items - card stock, carrier letter, and envelope - that is shipped to a cardholder when you create a physical card.
       */
      interface PhysicalBundle {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'issuing.physical_bundle';

        features: PhysicalBundle.Features;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Friendly display name.
         */
        name: string;

        /**
         * Whether this physical bundle can be used to create cards.
         */
        status: PhysicalBundle.Status;

        /**
         * Whether this physical bundle is a standard Stripe offering or custom-made for you.
         */
        type: PhysicalBundle.Type;
      }

      namespace PhysicalBundle {
        interface Features {
          /**
           * The policy for how to use card logo images in a card design with this physical bundle.
           */
          card_logo: Features.CardLogo;

          /**
           * The policy for how to use carrier letter text in a card design with this physical bundle.
           */
          carrier_text: Features.CarrierText;

          /**
           * The policy for how to use a second line on a card with this physical bundle.
           */
          second_line: Features.SecondLine;
        }

        namespace Features {
          type CardLogo = 'optional' | 'required' | 'unsupported';

          type CarrierText = 'optional' | 'required' | 'unsupported';

          type SecondLine = 'optional' | 'required' | 'unsupported';
        }

        type Status = 'active' | 'inactive' | 'review';

        type Type = 'custom' | 'standard';
      }
    }
  }
}
