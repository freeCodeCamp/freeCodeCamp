// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * Customers with certain payments enabled have a cash balance, representing funds that were paid
     * by the customer to a merchant, but have not yet been allocated to a payment. Cash Balance Transactions
     * represent when funds are moved into or out of this balance. This includes funding by the customer, allocation
     * to payments, and refunds to the customer.
     */
    interface CustomerCashBalanceTransaction {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'customer_cash_balance_transaction';

      adjusted_for_overdraft?: CustomerCashBalanceTransaction.AdjustedForOverdraft;

      applied_to_payment?: CustomerCashBalanceTransaction.AppliedToPayment;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * The customer whose available cash balance changed as a result of this transaction.
       */
      customer: string | Stripe.Customer;

      /**
       * The total available cash balance for the specified currency after this transaction was applied. Represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
       */
      ending_balance: number;

      funded?: CustomerCashBalanceTransaction.Funded;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * The amount by which the cash balance changed, represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). A positive value represents funds being added to the cash balance, a negative value represents funds being removed from the cash balance.
       */
      net_amount: number;

      refunded_from_payment?: CustomerCashBalanceTransaction.RefundedFromPayment;

      transferred_to_balance?: CustomerCashBalanceTransaction.TransferredToBalance;

      /**
       * The type of the cash balance transaction. New types may be added in future. See [Customer Balance](https://stripe.com/docs/payments/customer-balance#types) to learn more about these types.
       */
      type: CustomerCashBalanceTransaction.Type;

      unapplied_from_payment?: CustomerCashBalanceTransaction.UnappliedFromPayment;
    }

    namespace CustomerCashBalanceTransaction {
      interface AdjustedForOverdraft {
        /**
         * The [Balance Transaction](https://stripe.com/docs/api/balance_transactions/object) that corresponds to funds taken out of your Stripe balance.
         */
        balance_transaction: string | Stripe.BalanceTransaction;

        /**
         * The [Cash Balance Transaction](https://stripe.com/docs/api/cash_balance_transactions/object) that brought the customer balance negative, triggering the clawback of funds.
         */
        linked_transaction: string | Stripe.CustomerCashBalanceTransaction;
      }

      interface AppliedToPayment {
        /**
         * The [Payment Intent](https://stripe.com/docs/api/payment_intents/object) that funds were applied to.
         */
        payment_intent: string | Stripe.PaymentIntent;
      }

      interface Funded {
        bank_transfer: Funded.BankTransfer;
      }

      namespace Funded {
        interface BankTransfer {
          eu_bank_transfer?: BankTransfer.EuBankTransfer;

          gb_bank_transfer?: BankTransfer.GbBankTransfer;

          jp_bank_transfer?: BankTransfer.JpBankTransfer;

          /**
           * The user-supplied reference field on the bank transfer.
           */
          reference: string | null;

          /**
           * The funding method type used to fund the customer balance. Permitted values include: `eu_bank_transfer`, `gb_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`.
           */
          type: BankTransfer.Type;

          us_bank_transfer?: BankTransfer.UsBankTransfer;
        }

        namespace BankTransfer {
          interface EuBankTransfer {
            /**
             * The BIC of the bank of the sender of the funding.
             */
            bic: string | null;

            /**
             * The last 4 digits of the IBAN of the sender of the funding.
             */
            iban_last4: string | null;

            /**
             * The full name of the sender, as supplied by the sending bank.
             */
            sender_name: string | null;
          }

          interface GbBankTransfer {
            /**
             * The last 4 digits of the account number of the sender of the funding.
             */
            account_number_last4: string | null;

            /**
             * The full name of the sender, as supplied by the sending bank.
             */
            sender_name: string | null;

            /**
             * The sort code of the bank of the sender of the funding
             */
            sort_code: string | null;
          }

          interface JpBankTransfer {
            /**
             * The name of the bank of the sender of the funding.
             */
            sender_bank: string | null;

            /**
             * The name of the bank branch of the sender of the funding.
             */
            sender_branch: string | null;

            /**
             * The full name of the sender, as supplied by the sending bank.
             */
            sender_name: string | null;
          }

          type Type =
            | 'eu_bank_transfer'
            | 'gb_bank_transfer'
            | 'jp_bank_transfer'
            | 'mx_bank_transfer'
            | 'us_bank_transfer';

          interface UsBankTransfer {
            /**
             * The banking network used for this funding.
             */
            network?: UsBankTransfer.Network;

            /**
             * The full name of the sender, as supplied by the sending bank.
             */
            sender_name: string | null;
          }

          namespace UsBankTransfer {
            type Network = 'ach' | 'domestic_wire_us' | 'swift';
          }
        }
      }

      interface RefundedFromPayment {
        /**
         * The [Refund](https://stripe.com/docs/api/refunds/object) that moved these funds into the customer's cash balance.
         */
        refund: string | Stripe.Refund;
      }

      interface TransferredToBalance {
        /**
         * The [Balance Transaction](https://stripe.com/docs/api/balance_transactions/object) that corresponds to funds transferred to your Stripe balance.
         */
        balance_transaction: string | Stripe.BalanceTransaction;
      }

      type Type =
        | 'adjusted_for_overdraft'
        | 'applied_to_payment'
        | 'funded'
        | 'funding_reversed'
        | 'refunded_from_payment'
        | 'return_canceled'
        | 'return_initiated'
        | 'transferred_to_balance'
        | 'unapplied_from_payment';

      interface UnappliedFromPayment {
        /**
         * The [Payment Intent](https://stripe.com/docs/api/payment_intents/object) that funds were unapplied from.
         */
        payment_intent: string | Stripe.PaymentIntent;
      }
    }
  }
}
