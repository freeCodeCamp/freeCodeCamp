// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A Promotion Code represents a customer-redeemable code for a [coupon](https://stripe.com/docs/api#coupons). It can be used to
     * create multiple codes for a single coupon.
     */
    interface PromotionCode {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'promotion_code';

      /**
       * Whether the promotion code is currently active. A promotion code is only active if the coupon is also valid.
       */
      active: boolean;

      /**
       * The customer-facing code. Regardless of case, this code must be unique across all active promotion codes for each customer.
       */
      code: string;

      /**
       * A coupon contains information about a percent-off or amount-off discount you
       * might want to apply to a customer. Coupons may be applied to [subscriptions](https://stripe.com/docs/api#subscriptions), [invoices](https://stripe.com/docs/api#invoices),
       * [checkout sessions](https://stripe.com/docs/api/checkout/sessions), [quotes](https://stripe.com/docs/api#quotes), and more. Coupons do not work with conventional one-off [charges](https://stripe.com/docs/api#create_charge) or [payment intents](https://stripe.com/docs/api/payment_intents).
       */
      coupon: Stripe.Coupon;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * The customer that this promotion code can be used by.
       */
      customer: string | Stripe.Customer | Stripe.DeletedCustomer | null;

      /**
       * Date at which the promotion code can no longer be redeemed.
       */
      expires_at: number | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Maximum number of times this promotion code can be redeemed.
       */
      max_redemptions: number | null;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata | null;

      restrictions: PromotionCode.Restrictions;

      /**
       * Number of times this promotion code has been used.
       */
      times_redeemed: number;
    }

    namespace PromotionCode {
      interface Restrictions {
        /**
         * Promotion code restrictions defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
         */
        currency_options?: {
          [key: string]: Restrictions.CurrencyOptions;
        };

        /**
         * A Boolean indicating if the Promotion Code should only be redeemed for Customers without any successful payments or invoices
         */
        first_time_transaction: boolean;

        /**
         * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
         */
        minimum_amount: number | null;

        /**
         * Three-letter [ISO code](https://stripe.com/docs/currencies) for minimum_amount
         */
        minimum_amount_currency: string | null;
      }

      namespace Restrictions {
        interface CurrencyOptions {
          /**
           * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
           */
          minimum_amount: number;
        }
      }
    }
  }
}
