// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Treasury {
      /**
       * Use [OutboundTransfers](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-transfers) to transfer funds from a [FinancialAccount](https://stripe.com/docs/api#financial_accounts) to a PaymentMethod belonging to the same entity. To send funds to a different party, use [OutboundPayments](https://stripe.com/docs/api#outbound_payments) instead. You can send funds over ACH rails or through a domestic wire transfer to a user's own external bank account.
       *
       * Simulate OutboundTransfer state changes with the `/v1/test_helpers/treasury/outbound_transfers` endpoints. These methods can only be called on test mode objects.
       *
       * Related guide: [Moving money with Treasury using OutboundTransfer objects](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-transfers)
       */
      interface OutboundTransfer {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'treasury.outbound_transfer';

        /**
         * Amount (in cents) transferred.
         */
        amount: number;

        /**
         * Returns `true` if the object can be canceled, and `false` otherwise.
         */
        cancelable: boolean;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * An arbitrary string attached to the object. Often useful for displaying to users.
         */
        description: string | null;

        /**
         * The PaymentMethod used as the payment instrument for an OutboundTransfer.
         */
        destination_payment_method: string | null;

        destination_payment_method_details: OutboundTransfer.DestinationPaymentMethodDetails;

        /**
         * The date when funds are expected to arrive in the destination account.
         */
        expected_arrival_date: number;

        /**
         * The FinancialAccount that funds were pulled from.
         */
        financial_account: string;

        /**
         * A [hosted transaction receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses.
         */
        hosted_regulatory_receipt_url: string | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata;

        /**
         * Details about a returned OutboundTransfer. Only set when the status is `returned`.
         */
        returned_details: OutboundTransfer.ReturnedDetails | null;

        /**
         * Information about the OutboundTransfer to be sent to the recipient account.
         */
        statement_descriptor: string;

        /**
         * Current status of the OutboundTransfer: `processing`, `failed`, `canceled`, `posted`, `returned`. An OutboundTransfer is `processing` if it has been created and is pending. The status changes to `posted` once the OutboundTransfer has been "confirmed" and funds have left the account, or to `failed` or `canceled`. If an OutboundTransfer fails to arrive at its destination, its status will change to `returned`.
         */
        status: OutboundTransfer.Status;

        status_transitions: OutboundTransfer.StatusTransitions;

        /**
         * Details about network-specific tracking information if available.
         */
        tracking_details: OutboundTransfer.TrackingDetails | null;

        /**
         * The Transaction associated with this object.
         */
        transaction: string | Stripe.Treasury.Transaction;
      }

      namespace OutboundTransfer {
        interface DestinationPaymentMethodDetails {
          billing_details: DestinationPaymentMethodDetails.BillingDetails;

          /**
           * The type of the payment method used in the OutboundTransfer.
           */
          type: 'us_bank_account';

          us_bank_account?: DestinationPaymentMethodDetails.UsBankAccount;
        }

        namespace DestinationPaymentMethodDetails {
          interface BillingDetails {
            address: Stripe.Address;

            /**
             * Email address.
             */
            email: string | null;

            /**
             * Full name.
             */
            name: string | null;
          }

          interface UsBankAccount {
            /**
             * Account holder type: individual or company.
             */
            account_holder_type: UsBankAccount.AccountHolderType | null;

            /**
             * Account type: checkings or savings. Defaults to checking if omitted.
             */
            account_type: UsBankAccount.AccountType | null;

            /**
             * Name of the bank associated with the bank account.
             */
            bank_name: string | null;

            /**
             * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
             */
            fingerprint: string | null;

            /**
             * Last four digits of the bank account number.
             */
            last4: string | null;

            /**
             * ID of the mandate used to make this payment.
             */
            mandate?: string | Stripe.Mandate;

            /**
             * The network rails used. See the [docs](https://stripe.com/docs/treasury/money-movement/timelines) to learn more about money movement timelines for each network type.
             */
            network: UsBankAccount.Network;

            /**
             * Routing number of the bank account.
             */
            routing_number: string | null;
          }

          namespace UsBankAccount {
            type AccountHolderType = 'company' | 'individual';

            type AccountType = 'checking' | 'savings';

            type Network = 'ach' | 'us_domestic_wire';
          }
        }

        interface ReturnedDetails {
          /**
           * Reason for the return.
           */
          code: ReturnedDetails.Code;

          /**
           * The Transaction associated with this object.
           */
          transaction: string | Stripe.Treasury.Transaction;
        }

        namespace ReturnedDetails {
          type Code =
            | 'account_closed'
            | 'account_frozen'
            | 'bank_account_restricted'
            | 'bank_ownership_changed'
            | 'declined'
            | 'incorrect_account_holder_name'
            | 'invalid_account_number'
            | 'invalid_currency'
            | 'no_account'
            | 'other';
        }

        type Status =
          | 'canceled'
          | 'failed'
          | 'posted'
          | 'processing'
          | 'returned';

        interface StatusTransitions {
          /**
           * Timestamp describing when an OutboundTransfer changed status to `canceled`
           */
          canceled_at: number | null;

          /**
           * Timestamp describing when an OutboundTransfer changed status to `failed`
           */
          failed_at: number | null;

          /**
           * Timestamp describing when an OutboundTransfer changed status to `posted`
           */
          posted_at: number | null;

          /**
           * Timestamp describing when an OutboundTransfer changed status to `returned`
           */
          returned_at: number | null;
        }

        interface TrackingDetails {
          ach?: TrackingDetails.Ach;

          /**
           * The US bank account network used to send funds.
           */
          type: TrackingDetails.Type;

          us_domestic_wire?: TrackingDetails.UsDomesticWire;
        }

        namespace TrackingDetails {
          interface Ach {
            /**
             * ACH trace ID of the OutboundTransfer for transfers sent over the `ach` network.
             */
            trace_id: string;
          }

          type Type = 'ach' | 'us_domestic_wire';

          interface UsDomesticWire {
            /**
             * CHIPS System Sequence Number (SSN) of the OutboundTransfer for transfers sent over the `us_domestic_wire` network.
             */
            chips: string | null;

            /**
             * IMAD of the OutboundTransfer for transfers sent over the `us_domestic_wire` network.
             */
            imad: string | null;

            /**
             * OMAD of the OutboundTransfer for transfers sent over the `us_domestic_wire` network.
             */
            omad: string | null;
          }
        }
      }
    }
  }
}
