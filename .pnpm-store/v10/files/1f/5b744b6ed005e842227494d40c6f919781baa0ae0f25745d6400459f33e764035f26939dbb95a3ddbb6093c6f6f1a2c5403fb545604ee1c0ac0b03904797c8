// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A customer's `Cash balance` represents real funds. Customers can add funds to their cash balance by sending a bank transfer. These funds can be used for payment and can eventually be paid out to your bank account.
     */
    interface CashBalance {
      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'cash_balance';

      /**
       * A hash of all cash balances available to this customer. You cannot delete a customer with any cash balances, even if the balance is 0. Amounts are represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
       */
      available: {
        [key: string]: number;
      } | null;

      /**
       * The ID of the customer whose cash balance this object represents.
       */
      customer: string;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      settings: CashBalance.Settings;
    }

    namespace CashBalance {
      interface Settings {
        /**
         * The configuration for how funds that land in the customer cash balance are reconciled.
         */
        reconciliation_mode: Settings.ReconciliationMode;

        /**
         * A flag to indicate if reconciliation mode returned is the user's default or is specific to this customer cash balance
         */
        using_merchant_default: boolean;
      }

      namespace Settings {
        type ReconciliationMode = 'automatic' | 'manual';
      }
    }
  }
}
