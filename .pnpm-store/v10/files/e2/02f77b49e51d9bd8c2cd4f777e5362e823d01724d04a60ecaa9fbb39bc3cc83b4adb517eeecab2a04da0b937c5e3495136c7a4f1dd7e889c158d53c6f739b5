// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A Mandate is a record of the permission that your customer gives you to debit their payment method.
     */
    interface Mandate {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'mandate';

      customer_acceptance: Mandate.CustomerAcceptance;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      multi_use?: Mandate.MultiUse;

      /**
       * The account (if any) that the mandate is intended for.
       */
      on_behalf_of?: string;

      /**
       * ID of the payment method associated with this mandate.
       */
      payment_method: string | Stripe.PaymentMethod;

      payment_method_details: Mandate.PaymentMethodDetails;

      single_use?: Mandate.SingleUse;

      /**
       * The mandate status indicates whether or not you can use it to initiate a payment.
       */
      status: Mandate.Status;

      /**
       * The type of the mandate.
       */
      type: Mandate.Type;
    }

    namespace Mandate {
      interface CustomerAcceptance {
        /**
         * The time that the customer accepts the mandate.
         */
        accepted_at: number | null;

        offline?: CustomerAcceptance.Offline;

        online?: CustomerAcceptance.Online;

        /**
         * The mandate includes the type of customer acceptance information, such as: `online` or `offline`.
         */
        type: CustomerAcceptance.Type;
      }

      namespace CustomerAcceptance {
        interface Offline {}

        interface Online {
          /**
           * The customer accepts the mandate from this IP address.
           */
          ip_address: string | null;

          /**
           * The customer accepts the mandate using the user agent of the browser.
           */
          user_agent: string | null;
        }

        type Type = 'offline' | 'online';
      }

      interface MultiUse {}

      interface PaymentMethodDetails {
        acss_debit?: PaymentMethodDetails.AcssDebit;

        amazon_pay?: PaymentMethodDetails.AmazonPay;

        au_becs_debit?: PaymentMethodDetails.AuBecsDebit;

        bacs_debit?: PaymentMethodDetails.BacsDebit;

        card?: PaymentMethodDetails.Card;

        cashapp?: PaymentMethodDetails.Cashapp;

        link?: PaymentMethodDetails.Link;

        paypal?: PaymentMethodDetails.Paypal;

        revolut_pay?: PaymentMethodDetails.RevolutPay;

        sepa_debit?: PaymentMethodDetails.SepaDebit;

        /**
         * This mandate corresponds with a specific payment method type. The `payment_method_details` includes an additional hash with the same name and contains mandate information that's specific to that payment method.
         */
        type: string;

        us_bank_account?: PaymentMethodDetails.UsBankAccount;
      }

      namespace PaymentMethodDetails {
        interface AcssDebit {
          /**
           * List of Stripe products where this mandate can be selected automatically.
           */
          default_for?: Array<AcssDebit.DefaultFor>;

          /**
           * Description of the interval. Only required if the 'payment_schedule' parameter is 'interval' or 'combined'.
           */
          interval_description: string | null;

          /**
           * Payment schedule for the mandate.
           */
          payment_schedule: AcssDebit.PaymentSchedule;

          /**
           * Transaction type of the mandate.
           */
          transaction_type: AcssDebit.TransactionType;
        }

        namespace AcssDebit {
          type DefaultFor = 'invoice' | 'subscription';

          type PaymentSchedule = 'combined' | 'interval' | 'sporadic';

          type TransactionType = 'business' | 'personal';
        }

        interface AmazonPay {}

        interface AuBecsDebit {
          /**
           * The URL of the mandate. This URL generally contains sensitive information about the customer and should be shared with them exclusively.
           */
          url: string;
        }

        interface BacsDebit {
          /**
           * The status of the mandate on the Bacs network. Can be one of `pending`, `revoked`, `refused`, or `accepted`.
           */
          network_status: BacsDebit.NetworkStatus;

          /**
           * The unique reference identifying the mandate on the Bacs network.
           */
          reference: string;

          /**
           * When the mandate is revoked on the Bacs network this field displays the reason for the revocation.
           */
          revocation_reason: BacsDebit.RevocationReason | null;

          /**
           * The URL that will contain the mandate that the customer has signed.
           */
          url: string;
        }

        namespace BacsDebit {
          type NetworkStatus = 'accepted' | 'pending' | 'refused' | 'revoked';

          type RevocationReason =
            | 'account_closed'
            | 'bank_account_restricted'
            | 'bank_ownership_changed'
            | 'could_not_process'
            | 'debit_not_authorized';
        }

        interface Card {}

        interface Cashapp {}

        interface Link {}

        interface Paypal {
          /**
           * The PayPal Billing Agreement ID (BAID). This is an ID generated by PayPal which represents the mandate between the merchant and the customer.
           */
          billing_agreement_id: string | null;

          /**
           * PayPal account PayerID. This identifier uniquely identifies the PayPal customer.
           */
          payer_id: string | null;
        }

        interface RevolutPay {}

        interface SepaDebit {
          /**
           * The unique reference of the mandate.
           */
          reference: string;

          /**
           * The URL of the mandate. This URL generally contains sensitive information about the customer and should be shared with them exclusively.
           */
          url: string;
        }

        interface UsBankAccount {
          /**
           * Mandate collection method
           */
          collection_method?: 'paper';
        }
      }

      interface SingleUse {
        /**
         * The amount of the payment on a single use mandate.
         */
        amount: number;

        /**
         * The currency of the payment on a single use mandate.
         */
        currency: string;
      }

      type Status = 'active' | 'inactive' | 'pending';

      type Type = 'multi_use' | 'single_use';
    }
  }
}
