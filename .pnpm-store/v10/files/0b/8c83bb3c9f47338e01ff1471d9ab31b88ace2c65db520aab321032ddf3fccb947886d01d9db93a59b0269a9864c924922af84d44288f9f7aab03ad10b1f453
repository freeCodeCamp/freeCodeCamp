// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Issuing {
      /**
       * As a [card issuer](https://stripe.com/docs/issuing), you can dispute transactions that the cardholder does not recognize, suspects to be fraudulent, or has other issues with.
       *
       * Related guide: [Issuing disputes](https://stripe.com/docs/issuing/purchases/disputes)
       */
      interface Dispute {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'issuing.dispute';

        /**
         * Disputed amount in the card's currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Usually the amount of the `transaction`, but can differ (usually because of currency fluctuation).
         */
        amount: number;

        /**
         * List of balance transactions associated with the dispute.
         */
        balance_transactions?: Array<Stripe.BalanceTransaction> | null;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * The currency the `transaction` was made in.
         */
        currency: string;

        evidence: Dispute.Evidence;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The enum that describes the dispute loss outcome. If the dispute is not lost, this field will be absent. New enum values may be added in the future, so be sure to handle unknown values.
         */
        loss_reason?: Dispute.LossReason;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata;

        /**
         * Current status of the dispute.
         */
        status: Dispute.Status;

        /**
         * The transaction being disputed.
         */
        transaction: string | Stripe.Issuing.Transaction;

        /**
         * [Treasury](https://stripe.com/docs/api/treasury) details related to this dispute if it was created on a [FinancialAccount](/docs/api/treasury/financial_accounts
         */
        treasury?: Dispute.Treasury | null;
      }

      namespace Dispute {
        interface Evidence {
          canceled?: Evidence.Canceled;

          duplicate?: Evidence.Duplicate;

          fraudulent?: Evidence.Fraudulent;

          merchandise_not_as_described?: Evidence.MerchandiseNotAsDescribed;

          no_valid_authorization?: Evidence.NoValidAuthorization;

          not_received?: Evidence.NotReceived;

          other?: Evidence.Other;

          /**
           * The reason for filing the dispute. Its value will match the field containing the evidence.
           */
          reason: Evidence.Reason;

          service_not_as_described?: Evidence.ServiceNotAsDescribed;
        }

        namespace Evidence {
          interface Canceled {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
             */
            additional_documentation: string | Stripe.File | null;

            /**
             * Date when order was canceled.
             */
            canceled_at: number | null;

            /**
             * Whether the cardholder was provided with a cancellation policy.
             */
            cancellation_policy_provided: boolean | null;

            /**
             * Reason for canceling the order.
             */
            cancellation_reason: string | null;

            /**
             * Date when the cardholder expected to receive the product.
             */
            expected_at: number | null;

            /**
             * Explanation of why the cardholder is disputing this transaction.
             */
            explanation: string | null;

            /**
             * Description of the merchandise or service that was purchased.
             */
            product_description: string | null;

            /**
             * Whether the product was a merchandise or service.
             */
            product_type: Canceled.ProductType | null;

            /**
             * Result of cardholder's attempt to return the product.
             */
            return_status: Canceled.ReturnStatus | null;

            /**
             * Date when the product was returned or attempted to be returned.
             */
            returned_at: number | null;
          }

          namespace Canceled {
            type ProductType = 'merchandise' | 'service';

            type ReturnStatus = 'merchant_rejected' | 'successful';
          }

          interface Duplicate {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
             */
            additional_documentation: string | Stripe.File | null;

            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the card statement showing that the product had already been paid for.
             */
            card_statement: string | Stripe.File | null;

            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the receipt showing that the product had been paid for in cash.
             */
            cash_receipt: string | Stripe.File | null;

            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Image of the front and back of the check that was used to pay for the product.
             */
            check_image: string | Stripe.File | null;

            /**
             * Explanation of why the cardholder is disputing this transaction.
             */
            explanation: string | null;

            /**
             * Transaction (e.g., ipi_...) that the disputed transaction is a duplicate of. Of the two or more transactions that are copies of each other, this is original undisputed one.
             */
            original_transaction: string | null;
          }

          interface Fraudulent {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
             */
            additional_documentation: string | Stripe.File | null;

            /**
             * Explanation of why the cardholder is disputing this transaction.
             */
            explanation: string | null;
          }

          interface MerchandiseNotAsDescribed {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
             */
            additional_documentation: string | Stripe.File | null;

            /**
             * Explanation of why the cardholder is disputing this transaction.
             */
            explanation: string | null;

            /**
             * Date when the product was received.
             */
            received_at: number | null;

            /**
             * Description of the cardholder's attempt to return the product.
             */
            return_description: string | null;

            /**
             * Result of cardholder's attempt to return the product.
             */
            return_status: MerchandiseNotAsDescribed.ReturnStatus | null;

            /**
             * Date when the product was returned or attempted to be returned.
             */
            returned_at: number | null;
          }

          namespace MerchandiseNotAsDescribed {
            type ReturnStatus = 'merchant_rejected' | 'successful';
          }

          interface NotReceived {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
             */
            additional_documentation: string | Stripe.File | null;

            /**
             * Date when the cardholder expected to receive the product.
             */
            expected_at: number | null;

            /**
             * Explanation of why the cardholder is disputing this transaction.
             */
            explanation: string | null;

            /**
             * Description of the merchandise or service that was purchased.
             */
            product_description: string | null;

            /**
             * Whether the product was a merchandise or service.
             */
            product_type: NotReceived.ProductType | null;
          }

          namespace NotReceived {
            type ProductType = 'merchandise' | 'service';
          }

          interface NoValidAuthorization {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
             */
            additional_documentation: string | Stripe.File | null;

            /**
             * Explanation of why the cardholder is disputing this transaction.
             */
            explanation: string | null;
          }

          interface Other {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
             */
            additional_documentation: string | Stripe.File | null;

            /**
             * Explanation of why the cardholder is disputing this transaction.
             */
            explanation: string | null;

            /**
             * Description of the merchandise or service that was purchased.
             */
            product_description: string | null;

            /**
             * Whether the product was a merchandise or service.
             */
            product_type: Other.ProductType | null;
          }

          namespace Other {
            type ProductType = 'merchandise' | 'service';
          }

          type Reason =
            | 'canceled'
            | 'duplicate'
            | 'fraudulent'
            | 'merchandise_not_as_described'
            | 'no_valid_authorization'
            | 'not_received'
            | 'other'
            | 'service_not_as_described';

          interface ServiceNotAsDescribed {
            /**
             * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
             */
            additional_documentation: string | Stripe.File | null;

            /**
             * Date when order was canceled.
             */
            canceled_at: number | null;

            /**
             * Reason for canceling the order.
             */
            cancellation_reason: string | null;

            /**
             * Explanation of why the cardholder is disputing this transaction.
             */
            explanation: string | null;

            /**
             * Date when the product was received.
             */
            received_at: number | null;
          }
        }

        type LossReason =
          | 'cardholder_authentication_issuer_liability'
          | 'eci5_token_transaction_with_tavv'
          | 'excess_disputes_in_timeframe'
          | 'has_not_met_the_minimum_dispute_amount_requirements'
          | 'invalid_duplicate_dispute'
          | 'invalid_incorrect_amount_dispute'
          | 'invalid_no_authorization'
          | 'invalid_use_of_disputes'
          | 'merchandise_delivered_or_shipped'
          | 'merchandise_or_service_as_described'
          | 'not_cancelled'
          | 'other'
          | 'refund_issued'
          | 'submitted_beyond_allowable_time_limit'
          | 'transaction_3ds_required'
          | 'transaction_approved_after_prior_fraud_dispute'
          | 'transaction_authorized'
          | 'transaction_electronically_read'
          | 'transaction_qualifies_for_visa_easy_payment_service'
          | 'transaction_unattended';

        type Status = 'expired' | 'lost' | 'submitted' | 'unsubmitted' | 'won';

        interface Treasury {
          /**
           * The Treasury [DebitReversal](https://stripe.com/docs/api/treasury/debit_reversals) representing this Issuing dispute
           */
          debit_reversal: string | null;

          /**
           * The Treasury [ReceivedDebit](https://stripe.com/docs/api/treasury/received_debits) that is being disputed.
           */
          received_debit: string;
        }
      }
    }
  }
}
