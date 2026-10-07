// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Radar {
      /**
       * The DeletedValueListItem object.
       */
      interface DeletedValueListItem {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'radar.value_list_item';

        /**
         * Always true for a deleted object
         */
        deleted: true;
      }

      /**
       * Value list items allow you to add specific values to a given Radar value list, which can then be used in rules.
       *
       * Related guide: [Managing list items](https://stripe.com/docs/radar/lists#managing-list-items)
       */
      interface ValueListItem {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'radar.value_list_item';

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * The name or email address of the user who added this item to the value list.
         */
        created_by: string;

        /**
         * Always true for a deleted object
         */
        deleted?: void;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The value of the item.
         */
        value: string;

        /**
         * The identifier of the value list this item belongs to.
         */
        value_list: string;
      }
    }
  }
}
