type SupportedPaymentMethodType = 'us_bank_account' | 'link';

interface CommonBalance {
  /**
   * The time that the external institution calculated this balance. Measured
   * in seconds since the Unix epoch.
   */
  as_of: number;

  /**
   * The balances owed to (or by) the account holder.
   *
   * Each key is a three-letter ISO currency code, in lowercase.
   *
   * Each value is a integer amount. A positive amount indicates money owed to
   * the account holder. A negative amount indicates money owed by the account
   * holder.
   */
  current: {
    [key: string]: number | undefined;
  };
}

interface CashBalance {
  /**
   * Information on a `cash` balance. Only set if `balance.type` is `cash`.
   */
  cash: {
    /**
     * The funds available to the account holder. Typically this is the
     * current balance less any holds.
     *
     * Each key is a three-letter ISO currency code, in lowercase.
     *
     * Each value is a integer amount. A positive amount indicates money owed
     * to the account holder. A negative amount indicates money owed by the
     * account holder.
     */
    available: {[key: string]: number | undefined};
  };

  type: 'cash';
}

interface CreditBalance {
  /**
   * Information on a `credit` balance. Only set if `balance.type` is `credit`.
   */
  credit: {
    /**
     * The credit that has been used by the account holder.
     *
     * Each key is a three-letter ISO currency code, in lowercase
     *
     * Each value is a integer amount. A positive amount indicates money owed
     * to the account holder. A negative amount indicates money owed by the
     * account holder.
     */
    used: {[key: string]: number | undefined};
  };

  type: 'credit';
}

type Balance = (CommonBalance & CashBalance) | (CommonBalance & CreditBalance);

interface BalanceRefresh {
  /**
   * The status of the Balance Refresh
   */
  status: 'pending' | 'succeeded' | 'failed';

  /**
   * Time at which the Balance Refresh was attempted. Measured in seconds since the Unix epoch.
   */
  last_attempted_at: number;
}

interface OwnershipRefresh {
  /**
   * The status of the Ownership Refresh
   */
  status: 'pending' | 'succeeded' | 'failed';

  /**
   * Time at which the Ownersip Refresh was attempted. Measured in seconds since the Unix epoch.
   */
  last_attempted_at: number;
}

/**
 * The Financial Connections Session object
 */
export interface FinancialConnectionsSession {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * List of accounts collected by the Session
   */
  accounts: FinancialConnectionsSession.Account[];

  /**
   * Filters applied to the Session
   */
  filters?: FinancialConnectionsSession.Filters;

  /**
   * List of data permissions requested in the Session
   */
  permissions?: FinancialConnectionsSession.Permission[];

  /**
   * For webview integrations only. The user will be redirected to this URL to return to your app.
   */
  return_url?: string;
}

export namespace FinancialConnectionsSession {
  /**
   * The Financial Connections Account object
   */
  export interface Account {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. `'linked_account'` is present for backwards-compatibility.
     */
    object: 'linked_account' | 'financial_connections.account';

    /**
     * The balance for this Account
     */
    balance: null | Balance;

    /**
     * The most recent Balance Refresh for this Account
     */
    balance_refresh: null | BalanceRefresh;

    /**
     * The type of the account.
     */
    category: 'cash' | 'credit' | 'investment' | 'other';

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    /**
     * A human-readable name that has been assigned to this account, either by the account holder or by the institution.
     */
    display_name: string;

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
     * The ID of this account's Ownership resource.
     */
    ownership: string | null;

    /**
     * The most recent Ownership Refresh for this Account
     */
    ownership_refresh: null | OwnershipRefresh;

    /**
     * Permissions granted on this Account
     */
    permissions: Permission[];

    /**
     * The status of the Account
     */
    status: 'active' | 'inactive' | 'disconnected';

    /**
     * The sub-category of the Account
     */
    subcategory:
      | 'checking'
      | 'savings'
      | 'mortgage'
      | 'line_of_credit'
      | 'credit_card'
      | 'other';

    /**
     * The types of Payment Methods which can be set up by this Account
     */
    supported_payment_method_types: SupportedPaymentMethodType[];
  }

  /**
   * Filters to restrict the kinds of accounts to collect.
   */
  export interface Filters {
    /**
     * List of countries from which to collect accounts.
     */
    countries?: string[];
  }

  /**
   * Data features to which access can be requested
   */
  export type Permission =
    | 'payment_method'
    | 'balances'
    | 'transactions'
    | 'ownership'
    | 'account_numbers';
}
