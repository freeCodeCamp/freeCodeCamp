// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A payment method domain represents a web domain that you have registered with Stripe.
     * Stripe Elements use registered payment method domains to control where certain payment methods are shown.
     *
     * Related guide: [Payment method domains](https://stripe.com/docs/payments/payment-methods/pmd-registration).
     */
    interface PaymentMethodDomain {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'payment_method_domain';

      /**
       * Indicates the status of a specific payment method on a payment method domain.
       */
      apple_pay: PaymentMethodDomain.ApplePay;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * The domain name that this payment method domain object represents.
       */
      domain_name: string;

      /**
       * Whether this payment method domain is enabled. If the domain is not enabled, payment methods that require a payment method domain will not appear in Elements.
       */
      enabled: boolean;

      /**
       * Indicates the status of a specific payment method on a payment method domain.
       */
      google_pay: PaymentMethodDomain.GooglePay;

      /**
       * Indicates the status of a specific payment method on a payment method domain.
       */
      link: PaymentMethodDomain.Link;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Indicates the status of a specific payment method on a payment method domain.
       */
      paypal: PaymentMethodDomain.Paypal;
    }

    namespace PaymentMethodDomain {
      interface ApplePay {
        /**
         * The status of the payment method on the domain.
         */
        status: ApplePay.Status;

        /**
         * Contains additional details about the status of a payment method for a specific payment method domain.
         */
        status_details?: ApplePay.StatusDetails;
      }

      namespace ApplePay {
        type Status = 'active' | 'inactive';

        interface StatusDetails {
          /**
           * The error message associated with the status of the payment method on the domain.
           */
          error_message: string;
        }
      }

      interface GooglePay {
        /**
         * The status of the payment method on the domain.
         */
        status: GooglePay.Status;

        /**
         * Contains additional details about the status of a payment method for a specific payment method domain.
         */
        status_details?: GooglePay.StatusDetails;
      }

      namespace GooglePay {
        type Status = 'active' | 'inactive';

        interface StatusDetails {
          /**
           * The error message associated with the status of the payment method on the domain.
           */
          error_message: string;
        }
      }

      interface Link {
        /**
         * The status of the payment method on the domain.
         */
        status: Link.Status;

        /**
         * Contains additional details about the status of a payment method for a specific payment method domain.
         */
        status_details?: Link.StatusDetails;
      }

      namespace Link {
        type Status = 'active' | 'inactive';

        interface StatusDetails {
          /**
           * The error message associated with the status of the payment method on the domain.
           */
          error_message: string;
        }
      }

      interface Paypal {
        /**
         * The status of the payment method on the domain.
         */
        status: Paypal.Status;

        /**
         * Contains additional details about the status of a payment method for a specific payment method domain.
         */
        status_details?: Paypal.StatusDetails;
      }

      namespace Paypal {
        type Status = 'active' | 'inactive';

        interface StatusDetails {
          /**
           * The error message associated with the status of the payment method on the domain.
           */
          error_message: string;
        }
      }
    }
  }
}
