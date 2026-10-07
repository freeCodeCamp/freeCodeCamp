// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace FinancialConnections {
      /**
       * A Financial Connections Session is the secure way to programmatically launch the client-side Stripe.js modal that lets your users link their accounts.
       */
      interface Session {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'financial_connections.session';

        /**
         * The account holder for whom accounts are collected in this session.
         */
        account_holder: Session.AccountHolder | null;

        /**
         * The accounts that were collected as part of this Session.
         */
        accounts: ApiList<Stripe.FinancialConnections.Account>;

        /**
         * A value that will be passed to the client to launch the authentication flow.
         */
        client_secret: string;

        filters?: Session.Filters;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Permissions requested for accounts collected during this session.
         */
        permissions: Array<Session.Permission>;

        /**
         * Data features requested to be retrieved upon account creation.
         */
        prefetch: Array<Session.Prefetch> | null;

        /**
         * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
         */
        return_url?: string;
      }

      namespace Session {
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

        interface Filters {
          /**
           * Restricts the Session to subcategories of accounts that can be linked. Valid subcategories are: `checking`, `savings`, `mortgage`, `line_of_credit`, `credit_card`.
           */
          account_subcategories: Array<Filters.AccountSubcategory> | null;

          /**
           * List of countries from which to filter accounts.
           */
          countries: Array<string> | null;
        }

        namespace Filters {
          type AccountSubcategory =
            | 'checking'
            | 'credit_card'
            | 'line_of_credit'
            | 'mortgage'
            | 'savings';
        }

        type Permission =
          | 'balances'
          | 'ownership'
          | 'payment_method'
          | 'transactions';

        type Prefetch = 'balances' | 'ownership' | 'transactions';
      }
    }
  }
}
