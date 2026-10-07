// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace FinancialConnections {
      /**
       * A Financial Connections Account represents an account that exists outside of Stripe, to which you have been granted some degree of access.
       */
      interface Account {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'financial_connections.account';

        /**
         * The account holder that this account belongs to.
         */
        account_holder: Account.AccountHolder | null;

        /**
         * The most recent information about the account's balance.
         */
        balance: Account.Balance | null;

        /**
         * The state of the most recent attempt to refresh the account balance.
         */
        balance_refresh: Account.BalanceRefresh | null;

        /**
         * The type of the account. Account category is further divided in `subcategory`.
         */
        category: Account.Category;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * A human-readable name that has been assigned to this account, either by the account holder or by the institution.
         */
        display_name: string | null;

        /**
         * The name of the institution that holds this account.
         */
        institution_name: string;

        /**
         * The last 4 digits of the account number. If present, this will be 4 numeric characters.
         */
        last4: string | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The most recent information about the account's owners.
         */
        ownership: string | Stripe.FinancialConnections.AccountOwnership | null;

        /**
         * The state of the most recent attempt to refresh the account owners.
         */
        ownership_refresh: Account.OwnershipRefresh | null;

        /**
         * The list of permissions granted by this account.
         */
        permissions: Array<Account.Permission> | null;

        /**
         * The status of the link to the account.
         */
        status: Account.Status;

        /**
         * If `category` is `cash`, one of:
         *
         *  - `checking`
         *  - `savings`
         *  - `other`
         *
         * If `category` is `credit`, one of:
         *
         *  - `mortgage`
         *  - `line_of_credit`
         *  - `credit_card`
         *  - `other`
         *
         * If `category` is `investment` or `other`, this will be `other`.
         */
        subcategory: Account.Subcategory;

        /**
         * The list of data refresh subscriptions requested on this account.
         */
        subscriptions: Array<'transactions'> | null;

        /**
         * The [PaymentMethod type](https://stripe.com/docs/api/payment_methods/object#payment_method_object-type)(s) that can be created from this account.
         */
        supported_payment_method_types: Array<
          Account.SupportedPaymentMethodType
        >;

        /**
         * The state of the most recent attempt to refresh the account transactions.
         */
        transaction_refresh: Account.TransactionRefresh | null;
      }

      namespace Account {
        interface AccountHolder {
          /**
           * The ID of the Stripe account this account belongs to. Should only be present if `account_holder.type` is `account`.
           */
          account?: string | Stripe.Account;

          /**
           * ID of the Stripe customer this account belongs to. Present if and only if `account_holder.type` is `customer`.
           */
          customer?: string | Stripe.Customer;

          /**
           * Type of account holder that this account belongs to.
           */
          type: AccountHolder.Type;
        }

        namespace AccountHolder {
          type Type = 'account' | 'customer';
        }

        interface Balance {
          /**
           * The time that the external institution calculated this balance. Measured in seconds since the Unix epoch.
           */
          as_of: number;

          cash?: Balance.Cash;

          credit?: Balance.Credit;

          /**
           * The balances owed to (or by) the account holder, before subtracting any outbound pending transactions or adding any inbound pending transactions.
           *
           * Each key is a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.
           *
           * Each value is a integer amount. A positive amount indicates money owed to the account holder. A negative amount indicates money owed by the account holder.
           */
          current: {
            [key: string]: number;
          };

          /**
           * The `type` of the balance. An additional hash is included on the balance with a name matching this value.
           */
          type: Balance.Type;
        }

        namespace Balance {
          interface Cash {
            /**
             * The funds available to the account holder. Typically this is the current balance after subtracting any outbound pending transactions and adding any inbound pending transactions.
             *
             * Each key is a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.
             *
             * Each value is a integer amount. A positive amount indicates money owed to the account holder. A negative amount indicates money owed by the account holder.
             */
            available: {
              [key: string]: number;
            } | null;
          }

          interface Credit {
            /**
             * The credit that has been used by the account holder.
             *
             * Each key is a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.
             *
             * Each value is a integer amount. A positive amount indicates money owed to the account holder. A negative amount indicates money owed by the account holder.
             */
            used: {
              [key: string]: number;
            } | null;
          }

          type Type = 'cash' | 'credit';
        }

        interface BalanceRefresh {
          /**
           * The time at which the last refresh attempt was initiated. Measured in seconds since the Unix epoch.
           */
          last_attempted_at: number;

          /**
           * Time at which the next balance refresh can be initiated. This value will be `null` when `status` is `pending`. Measured in seconds since the Unix epoch.
           */
          next_refresh_available_at: number | null;

          /**
           * The status of the last refresh attempt.
           */
          status: BalanceRefresh.Status;
        }

        namespace BalanceRefresh {
          type Status = 'failed' | 'pending' | 'succeeded';
        }

        type Category = 'cash' | 'credit' | 'investment' | 'other';

        interface OwnershipRefresh {
          /**
           * The time at which the last refresh attempt was initiated. Measured in seconds since the Unix epoch.
           */
          last_attempted_at: number;

          /**
           * Time at which the next ownership refresh can be initiated. This value will be `null` when `status` is `pending`. Measured in seconds since the Unix epoch.
           */
          next_refresh_available_at: number | null;

          /**
           * The status of the last refresh attempt.
           */
          status: OwnershipRefresh.Status;
        }

        namespace OwnershipRefresh {
          type Status = 'failed' | 'pending' | 'succeeded';
        }

        type Permission =
          | 'balances'
          | 'ownership'
          | 'payment_method'
          | 'transactions';

        type Status = 'active' | 'disconnected' | 'inactive';

        type Subcategory =
          | 'checking'
          | 'credit_card'
          | 'line_of_credit'
          | 'mortgage'
          | 'other'
          | 'savings';

        type SupportedPaymentMethodType = 'link' | 'us_bank_account';

        interface TransactionRefresh {
          /**
           * Unique identifier for the object.
           */
          id: string;

          /**
           * The time at which the last refresh attempt was initiated. Measured in seconds since the Unix epoch.
           */
          last_attempted_at: number;

          /**
           * Time at which the next transaction refresh can be initiated. This value will be `null` when `status` is `pending`. Measured in seconds since the Unix epoch.
           */
          next_refresh_available_at: number | null;

          /**
           * The status of the last refresh attempt.
           */
          status: TransactionRefresh.Status;
        }

        namespace TransactionRefresh {
          type Status = 'failed' | 'pending' | 'succeeded';
        }
      }
    }
  }
}
