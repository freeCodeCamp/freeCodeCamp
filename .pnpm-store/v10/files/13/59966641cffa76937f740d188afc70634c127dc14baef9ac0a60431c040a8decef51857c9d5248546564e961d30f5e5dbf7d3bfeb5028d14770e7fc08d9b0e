// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Climate {
      /**
       * Orders represent your intent to purchase a particular Climate product. When you create an order, the
       * payment is deducted from your merchant balance.
       */
      interface Order {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'climate.order';

        /**
         * Total amount of [Frontier](https://frontierclimate.com/)'s service fees in the currency's smallest unit.
         */
        amount_fees: number;

        /**
         * Total amount of the carbon removal in the currency's smallest unit.
         */
        amount_subtotal: number;

        /**
         * Total amount of the order including fees in the currency's smallest unit.
         */
        amount_total: number;

        beneficiary?: Order.Beneficiary;

        /**
         * Time at which the order was canceled. Measured in seconds since the Unix epoch.
         */
        canceled_at: number | null;

        /**
         * Reason for the cancellation of this order.
         */
        cancellation_reason: Order.CancellationReason | null;

        /**
         * For delivered orders, a URL to a delivery certificate for the order.
         */
        certificate: string | null;

        /**
         * Time at which the order was confirmed. Measured in seconds since the Unix epoch.
         */
        confirmed_at: number | null;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase, representing the currency for this order.
         */
        currency: string;

        /**
         * Time at which the order's expected_delivery_year was delayed. Measured in seconds since the Unix epoch.
         */
        delayed_at: number | null;

        /**
         * Time at which the order was delivered. Measured in seconds since the Unix epoch.
         */
        delivered_at: number | null;

        /**
         * Details about the delivery of carbon removal for this order.
         */
        delivery_details: Array<Order.DeliveryDetail>;

        /**
         * The year this order is expected to be delivered.
         */
        expected_delivery_year: number;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata;

        /**
         * Quantity of carbon removal that is included in this order.
         */
        metric_tons: string;

        /**
         * Unique ID for the Climate `Product` this order is purchasing.
         */
        product: string | Stripe.Climate.Product;

        /**
         * Time at which the order's product was substituted for a different product. Measured in seconds since the Unix epoch.
         */
        product_substituted_at: number | null;

        /**
         * The current status of this order.
         */
        status: Order.Status;
      }

      namespace Order {
        interface Beneficiary {
          /**
           * Publicly displayable name for the end beneficiary of carbon removal.
           */
          public_name: string;
        }

        type CancellationReason =
          | 'expired'
          | 'product_unavailable'
          | 'requested';

        interface DeliveryDetail {
          /**
           * Time at which the delivery occurred. Measured in seconds since the Unix epoch.
           */
          delivered_at: number;

          /**
           * Specific location of this delivery.
           */
          location: DeliveryDetail.Location | null;

          /**
           * Quantity of carbon removal supplied by this delivery.
           */
          metric_tons: string;

          /**
           * Once retired, a URL to the registry entry for the tons from this delivery.
           */
          registry_url: string | null;

          /**
           * A supplier of carbon removal.
           */
          supplier: Stripe.Climate.Supplier;
        }

        namespace DeliveryDetail {
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
        }

        type Status =
          | 'awaiting_funds'
          | 'canceled'
          | 'confirmed'
          | 'delivered'
          | 'open';
      }
    }
  }
}
