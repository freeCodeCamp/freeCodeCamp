// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Treasury {
      /**
       * ReceivedDebits represent funds pulled from a [FinancialAccount](https://stripe.com/docs/api#financial_accounts). These are not initiated from the FinancialAccount.
       */
      interface ReceivedDebit {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'treasury.received_debit';

        /**
         * Amount (in cents) transferred.
         */
        amount: number;

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
        description: string;

        /**
         * Reason for the failure. A ReceivedDebit might fail because the FinancialAccount doesn't have sufficient funds, is closed, or is frozen.
         */
        failure_code: ReceivedDebit.FailureCode | null;

        /**
         * The FinancialAccount that funds were pulled from.
         */
        financial_account: string | null;

        /**
         * A [hosted transaction receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses.
         */
        hosted_regulatory_receipt_url: string | null;

        initiating_payment_method_details?: ReceivedDebit.InitiatingPaymentMethodDetails;

        linked_flows: ReceivedDebit.LinkedFlows;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The network used for the ReceivedDebit.
         */
        network: ReceivedDebit.Network;

        /**
         * Details describing when a ReceivedDebit might be reversed.
         */
        reversal_details: ReceivedDebit.ReversalDetails | null;

        /**
         * Status of the ReceivedDebit. ReceivedDebits are created with a status of either `succeeded` (approved) or `failed` (declined). The failure reason can be found under the `failure_code`.
         */
        status: ReceivedDebit.Status;

        /**
         * The Transaction associated with this object.
         */
        transaction: string | Stripe.Treasury.Transaction | null;
      }

      namespace ReceivedDebit {
        type FailureCode =
          | 'account_closed'
          | 'account_frozen'
          | 'insufficient_funds'
          | 'international_transaction'
          | 'other';

        interface InitiatingPaymentMethodDetails {
          /**
           * Set when `type` is `balance`.
           */
          balance?: 'payments';

          billing_details: InitiatingPaymentMethodDetails.BillingDetails;

          financial_account?: InitiatingPaymentMethodDetails.FinancialAccount;

          /**
           * Set when `type` is `issuing_card`. This is an [Issuing Card](https://stripe.com/docs/api#issuing_cards) ID.
           */
          issuing_card?: string;

          /**
           * Polymorphic type matching the originating money movement's source. This can be an external account, a Stripe balance, or a FinancialAccount.
           */
          type: InitiatingPaymentMethodDetails.Type;

          us_bank_account?: InitiatingPaymentMethodDetails.UsBankAccount;
        }

        namespace InitiatingPaymentMethodDetails {
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
             * The FinancialAccount ID.
             */
            id: string;

            /**
             * The rails the ReceivedCredit was sent over. A FinancialAccount can only send funds over `stripe`.
             */
            network: 'stripe';
          }

          type Type =
            | 'balance'
            | 'financial_account'
            | 'issuing_card'
            | 'stripe'
            | 'us_bank_account';

          interface UsBankAccount {
            /**
             * Bank name.
             */
            bank_name: string | null;

            /**
             * The last four digits of the bank account number.
             */
            last4: string | null;

            /**
             * The routing number for the bank account.
             */
            routing_number: string | null;
          }
        }

        interface LinkedFlows {
          /**
           * The DebitReversal created as a result of this ReceivedDebit being reversed.
           */
          debit_reversal: string | null;

          /**
           * Set if the ReceivedDebit is associated with an InboundTransfer's return of funds.
           */
          inbound_transfer: string | null;

          /**
           * Set if the ReceivedDebit was created due to an [Issuing Authorization](https://stripe.com/docs/api#issuing_authorizations) object.
           */
          issuing_authorization: string | null;

          /**
           * Set if the ReceivedDebit is also viewable as an [Issuing Dispute](https://stripe.com/docs/api#issuing_disputes) object.
           */
          issuing_transaction: string | null;

          /**
           * Set if the ReceivedDebit was created due to a [Payout](https://stripe.com/docs/api#payouts) object.
           */
          payout: string | null;
        }

        type Network = 'ach' | 'card' | 'stripe';

        interface ReversalDetails {
          /**
           * Time before which a ReceivedDebit can be reversed.
           */
          deadline: number | null;

          /**
           * Set if a ReceivedDebit can't be reversed.
           */
          restricted_reason: ReversalDetails.RestrictedReason | null;
        }

        namespace ReversalDetails {
          type RestrictedReason =
            | 'already_reversed'
            | 'deadline_passed'
            | 'network_restricted'
            | 'other'
            | 'source_flow_restricted';
        }

        type Status = 'failed' | 'succeeded';
      }
    }
  }
}
