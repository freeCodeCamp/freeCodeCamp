// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Treasury {
      /**
       * Use [OutboundPayments](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-payments) to send funds to another party's external bank account or [FinancialAccount](https://stripe.com/docs/api#financial_accounts). To send money to an account belonging to the same user, use an [OutboundTransfer](https://stripe.com/docs/api#outbound_transfers).
       *
       * Simulate OutboundPayment state changes with the `/v1/test_helpers/treasury/outbound_payments` endpoints. These methods can only be called on test mode objects.
       *
       * Related guide: [Moving money with Treasury using OutboundPayment objects](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-payments)
       */
      interface OutboundPayment {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'treasury.outbound_payment';

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
         * ID of the [customer](https://stripe.com/docs/api/customers) to whom an OutboundPayment is sent.
         */
        customer: string | null;

        /**
         * An arbitrary string attached to the object. Often useful for displaying to users.
         */
        description: string | null;

        /**
         * The PaymentMethod via which an OutboundPayment is sent. This field can be empty if the OutboundPayment was created using `destination_payment_method_data`.
         */
        destination_payment_method: string | null;

        /**
         * Details about the PaymentMethod for an OutboundPayment.
         */
        destination_payment_method_details: OutboundPayment.DestinationPaymentMethodDetails | null;

        /**
         * Details about the end user.
         */
        end_user_details: OutboundPayment.EndUserDetails | null;

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
         * Details about a returned OutboundPayment. Only set when the status is `returned`.
         */
        returned_details: OutboundPayment.ReturnedDetails | null;

        /**
         * The description that appears on the receiving end for an OutboundPayment (for example, bank statement for external bank transfer).
         */
        statement_descriptor: string;

        /**
         * Current status of the OutboundPayment: `processing`, `failed`, `posted`, `returned`, `canceled`. An OutboundPayment is `processing` if it has been created and is pending. The status changes to `posted` once the OutboundPayment has been "confirmed" and funds have left the account, or to `failed` or `canceled`. If an OutboundPayment fails to arrive at its destination, its status will change to `returned`.
         */
        status: OutboundPayment.Status;

        status_transitions: OutboundPayment.StatusTransitions;

        /**
         * Details about network-specific tracking information if available.
         */
        tracking_details: OutboundPayment.TrackingDetails | null;

        /**
         * The Transaction associated with this object.
         */
        transaction: string | Stripe.Treasury.Transaction;
      }

      namespace OutboundPayment {
        interface DestinationPaymentMethodDetails {
          billing_details: DestinationPaymentMethodDetails.BillingDetails;

          financial_account?: DestinationPaymentMethodDetails.FinancialAccount;

          /**
           * The type of the payment method used in the OutboundPayment.
           */
          type: DestinationPaymentMethodDetails.Type;

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

          interface FinancialAccount {
            /**
             * Token of the FinancialAccount.
             */
            id: string;

            /**
             * The rails used to send funds.
             */
            network: 'stripe';
          }

          type Type = 'financial_account' | 'us_bank_account';

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

        interface EndUserDetails {
          /**
           * IP address of the user initiating the OutboundPayment. Set if `present` is set to `true`. IP address collection is required for risk and compliance reasons. This will be used to help determine if the OutboundPayment is authorized or should be blocked.
           */
          ip_address: string | null;

          /**
           * `true` if the OutboundPayment creation request is being made on behalf of an end user by a platform. Otherwise, `false`.
           */
          present: boolean;
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
           * Timestamp describing when an OutboundPayment changed status to `canceled`.
           */
          canceled_at: number | null;

          /**
           * Timestamp describing when an OutboundPayment changed status to `failed`.
           */
          failed_at: number | null;

          /**
           * Timestamp describing when an OutboundPayment changed status to `posted`.
           */
          posted_at: number | null;

          /**
           * Timestamp describing when an OutboundPayment changed status to `returned`.
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
             * ACH trace ID of the OutboundPayment for payments sent over the `ach` network.
             */
            trace_id: string;
          }

          type Type = 'ach' | 'us_domestic_wire';

          interface UsDomesticWire {
            /**
             * CHIPS System Sequence Number (SSN) of the OutboundPayment for payments sent over the `us_domestic_wire` network.
             */
            chips: string | null;

            /**
             * IMAD of the OutboundPayment for payments sent over the `us_domestic_wire` network.
             */
            imad: string | null;

            /**
             * OMAD of the OutboundPayment for payments sent over the `us_domestic_wire` network.
             */
            omad: string | null;
          }
        }
      }
    }
  }
}
