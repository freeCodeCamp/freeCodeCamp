// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * Reviews can be used to supplement automated fraud detection with human expertise.
     *
     * Learn more about [Radar](https://stripe.com/radar) and reviewing payments
     * [here](https://stripe.com/docs/radar/reviews).
     */
    interface Review {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'review';

      /**
       * The ZIP or postal code of the card used, if applicable.
       */
      billing_zip: string | null;

      /**
       * The charge associated with this review.
       */
      charge: string | Stripe.Charge | null;

      /**
       * The reason the review was closed, or null if it has not yet been closed. One of `approved`, `refunded`, `refunded_as_fraud`, `disputed`, or `redacted`.
       */
      closed_reason: Review.ClosedReason | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * The IP address where the payment originated.
       */
      ip_address: string | null;

      /**
       * Information related to the location of the payment. Note that this information is an approximation and attempts to locate the nearest population center - it should not be used to determine a specific address.
       */
      ip_address_location: Review.IpAddressLocation | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * If `true`, the review needs action.
       */
      open: boolean;

      /**
       * The reason the review was opened. One of `rule` or `manual`.
       */
      opened_reason: Review.OpenedReason;

      /**
       * The PaymentIntent ID associated with this review, if one exists.
       */
      payment_intent?: string | Stripe.PaymentIntent;

      /**
       * The reason the review is currently open or closed. One of `rule`, `manual`, `approved`, `refunded`, `refunded_as_fraud`, `disputed`, or `redacted`.
       */
      reason: string;

      /**
       * Information related to the browsing session of the user who initiated the payment.
       */
      session: Review.Session | null;
    }

    namespace Review {
      type ClosedReason =
        | 'approved'
        | 'disputed'
        | 'redacted'
        | 'refunded'
        | 'refunded_as_fraud';

      interface IpAddressLocation {
        /**
         * The city where the payment originated.
         */
        city: string | null;

        /**
         * Two-letter ISO code representing the country where the payment originated.
         */
        country: string | null;

        /**
         * The geographic latitude where the payment originated.
         */
        latitude: number | null;

        /**
         * The geographic longitude where the payment originated.
         */
        longitude: number | null;

        /**
         * The state/county/province/region where the payment originated.
         */
        region: string | null;
      }

      type OpenedReason = 'manual' | 'rule';

      interface Session {
        /**
         * The browser used in this browser session (e.g., `Chrome`).
         */
        browser: string | null;

        /**
         * Information about the device used for the browser session (e.g., `Samsung SM-G930T`).
         */
        device: string | null;

        /**
         * The platform for the browser session (e.g., `Macintosh`).
         */
        platform: string | null;

        /**
         * The version for the browser session (e.g., `61.0.3163.100`).
         */
        version: string | null;
      }
    }
  }
}
