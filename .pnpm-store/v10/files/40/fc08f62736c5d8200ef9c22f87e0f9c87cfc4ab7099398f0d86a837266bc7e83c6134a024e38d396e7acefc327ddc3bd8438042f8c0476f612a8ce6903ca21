// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A coupon contains information about a percent-off or amount-off discount you
     * might want to apply to a customer. Coupons may be applied to [subscriptions](https://stripe.com/docs/api#subscriptions), [invoices](https://stripe.com/docs/api#invoices),
     * [checkout sessions](https://stripe.com/docs/api/checkout/sessions), [quotes](https://stripe.com/docs/api#quotes), and more. Coupons do not work with conventional one-off [charges](https://stripe.com/docs/api#create_charge) or [payment intents](https://stripe.com/docs/api/payment_intents).
     */
    interface Coupon {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'coupon';

      /**
       * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
       */
      amount_off: number | null;

      applies_to?: Coupon.AppliesTo;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * If `amount_off` has been set, the three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the amount to take off.
       */
      currency: string | null;

      /**
       * Coupons defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
       */
      currency_options?: {
        [key: string]: Coupon.CurrencyOptions;
      };

      /**
       * Always true for a deleted object
       */
      deleted?: void;

      /**
       * One of `forever`, `once`, and `repeating`. Describes how long a customer who applies this coupon will get the discount.
       */
      duration: Coupon.Duration;

      /**
       * If `duration` is `repeating`, the number of months the coupon applies. Null if coupon `duration` is `forever` or `once`.
       */
      duration_in_months: number | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Maximum number of times this coupon can be redeemed, in total, across all customers, before it is no longer valid.
       */
      max_redemptions: number | null;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata | null;

      /**
       * Name of the coupon displayed to customers on for instance invoices or receipts.
       */
      name: string | null;

      /**
       * Percent that will be taken off the subtotal of any invoices for this customer for the duration of the coupon. For example, a coupon with percent_off of 50 will make a $ (or local equivalent)100 invoice $ (or local equivalent)50 instead.
       */
      percent_off: number | null;

      /**
       * Date after which the coupon can no longer be redeemed.
       */
      redeem_by: number | null;

      /**
       * Number of times this coupon has been applied to a customer.
       */
      times_redeemed: number;

      /**
       * Taking account of the above properties, whether this coupon can still be applied to a customer.
       */
      valid: boolean;
    }

    namespace Coupon {
      interface AppliesTo {
        /**
         * A list of product IDs this coupon applies to
         */
        products: Array<string>;
      }

      interface CurrencyOptions {
        /**
         * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
         */
        amount_off: number;
      }

      type Duration = 'forever' | 'once' | 'repeating';
    }

    /**
     * The DeletedCoupon object.
     */
    interface DeletedCoupon {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'coupon';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }
  }
}
