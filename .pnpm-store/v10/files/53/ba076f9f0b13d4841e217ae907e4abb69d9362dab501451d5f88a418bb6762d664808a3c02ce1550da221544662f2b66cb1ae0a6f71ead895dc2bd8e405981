// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Treasury {
      /**
       * Use [InboundTransfers](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/into/inbound-transfers) to add funds to your [FinancialAccount](https://stripe.com/docs/api#financial_accounts) via a PaymentMethod that is owned by you. The funds will be transferred via an ACH debit.
       *
       * Related guide: [Moving money with Treasury using InboundTransfer objects](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/into/inbound-transfers)
       */
      interface InboundTransfer {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'treasury.inbound_transfer';

        /**
         * Amount (in cents) transferred.
         */
        amount: number;

        /**
         * Returns `true` if the InboundTransfer is able to be canceled.
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
         * Details about this InboundTransfer's failure. Only set when status is `failed`.
         */
        failure_details: InboundTransfer.FailureDetails | null;

        /**
         * The FinancialAccount that received the funds.
         */
        financial_account: string;

        /**
         * A [hosted transaction receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses.
         */
        hosted_regulatory_receipt_url: string | null;

        linked_flows: InboundTransfer.LinkedFlows;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata;

        /**
         * The origin payment method to be debited for an InboundTransfer.
         */
        origin_payment_method: string;

        /**
         * Details about the PaymentMethod for an InboundTransfer.
         */
        origin_payment_method_details: InboundTransfer.OriginPaymentMethodDetails | null;

        /**
         * Returns `true` if the funds for an InboundTransfer were returned after the InboundTransfer went to the `succeeded` state.
         */
        returned: boolean | null;

        /**
         * Statement descriptor shown when funds are debited from the source. Not all payment networks support `statement_descriptor`.
         */
        statement_descriptor: string;

        /**
         * Status of the InboundTransfer: `processing`, `succeeded`, `failed`, and `canceled`. An InboundTransfer is `processing` if it is created and pending. The status changes to `succeeded` once the funds have been "confirmed" and a `transaction` is created and posted. The status changes to `failed` if the transfer fails.
         */
        status: InboundTransfer.Status;

        status_transitions: InboundTransfer.StatusTransitions;

        /**
         * The Transaction associated with this object.
         */
        transaction: string | Stripe.Treasury.Transaction | null;
      }

      namespace InboundTransfer {
        interface FailureDetails {
          /**
           * Reason for the failure.
           */
          code: FailureDetails.Code;
        }

        namespace FailureDetails {
          type Code =
            | 'account_closed'
            | 'account_frozen'
            | 'bank_account_restricted'
            | 'bank_ownership_changed'
            | 'debit_not_authorized'
            | 'incorrect_account_holder_address'
            | 'incorrect_account_holder_name'
            | 'incorrect_account_holder_tax_id'
            | 'insufficient_funds'
            | 'invalid_account_number'
            | 'invalid_currency'
            | 'no_account'
            | 'other';
        }

        interface LinkedFlows {
          /**
           * If funds for this flow were returned after the flow went to the `succeeded` state, this field contains a reference to the ReceivedDebit return.
           */
          received_debit: string | null;
        }

        interface OriginPaymentMethodDetails {
          billing_details: OriginPaymentMethodDetails.BillingDetails;

          /**
           * The type of the payment method used in the InboundTransfer.
           */
          type: 'us_bank_account';

          us_bank_account?: OriginPaymentMethodDetails.UsBankAccount;
        }

        namespace OriginPaymentMethodDetails {
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
            network: 'ach';

            /**
             * Routing number of the bank account.
             */
            routing_number: string | null;
          }

          namespace UsBankAccount {
            type AccountHolderType = 'company' | 'individual';

            type AccountType = 'checking' | 'savings';
          }
        }

        type Status = 'canceled' | 'failed' | 'processing' | 'succeeded';

        interface StatusTransitions {
          /**
           * Timestamp describing when an InboundTransfer changed status to `canceled`.
           */
          canceled_at?: number | null;

          /**
           * Timestamp describing when an InboundTransfer changed status to `failed`.
           */
          failed_at: number | null;

          /**
           * Timestamp describing when an InboundTransfer changed status to `succeeded`.
           */
          succeeded_at: number | null;
        }
      }
    }
  }
}
