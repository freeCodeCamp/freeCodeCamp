// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The DeletedProductFeature object.
     */
    interface DeletedProductFeature {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'product_feature';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }

    /**
     * A product_feature represents an attachment between a feature and a product.
     * When a product is purchased that has a feature attached, Stripe will create an entitlement to the feature for the purchasing customer.
     */
    interface ProductFeature {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'product_feature';

      /**
       * Always true for a deleted object
       */
      deleted?: void;

      /**
       * A feature represents a monetizable ability or functionality in your system.
       * Features can be assigned to products, and when those products are purchased, Stripe will create an entitlement to the feature for the purchasing customer.
       */
      entitlement_feature: Stripe.Entitlements.Feature;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;
    }
  }
}
