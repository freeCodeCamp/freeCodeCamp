// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Terminal {
      /**
       * The DeletedLocation object.
       */
      interface DeletedLocation {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'terminal.location';

        /**
         * Always true for a deleted object
         */
        deleted: true;
      }

      /**
       * A Location represents a grouping of readers.
       *
       * Related guide: [Fleet management](https://stripe.com/docs/terminal/fleet/locations)
       */
      interface Location {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'terminal.location';

        address: Stripe.Address;

        /**
         * The ID of a configuration that will be used to customize all readers in this location.
         */
        configuration_overrides?: string;

        /**
         * Always true for a deleted object
         */
        deleted?: void;

        /**
         * The display name of the location.
         */
        display_name: string;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata;
      }
    }
  }
}
