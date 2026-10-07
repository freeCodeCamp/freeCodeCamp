// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Radar {
      /**
       * The DeletedValueList object.
       */
      interface DeletedValueList {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'radar.value_list';

        /**
         * Always true for a deleted object
         */
        deleted: true;
      }

      /**
       * Value lists allow you to group values together which can then be referenced in rules.
       *
       * Related guide: [Default Stripe lists](https://stripe.com/docs/radar/lists#managing-list-items)
       */
      interface ValueList {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'radar.value_list';

        /**
         * The name of the value list for use in rules.
         */
        alias: string;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * The name or email address of the user who created this value list.
         */
        created_by: string;

        /**
         * Always true for a deleted object
         */
        deleted?: void;

        /**
         * The type of items in the value list. One of `card_fingerprint`, `us_bank_account_fingerprint`, `sepa_debit_fingerprint`, `card_bin`, `email`, `ip_address`, `country`, `string`, `case_sensitive_string`, or `customer_id`.
         */
        item_type: ValueList.ItemType;

        /**
         * List of items contained within this value list.
         */
        list_items: ApiList<Stripe.Radar.ValueListItem>;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata;

        /**
         * The name of the value list.
         */
        name: string;
      }

      namespace ValueList {
        type ItemType =
          | 'card_bin'
          | 'card_fingerprint'
          | 'case_sensitive_string'
          | 'country'
          | 'customer_id'
          | 'email'
          | 'ip_address'
          | 'sepa_debit_fingerprint'
          | 'string'
          | 'us_bank_account_fingerprint';
      }
    }
  }
}
