// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace FinancialConnections {
      interface SessionCreateParams {
        /**
         * The account holder to link accounts for.
         */
        account_holder: SessionCreateParams.AccountHolder;

        /**
         * List of data features that you would like to request access to.
         *
         * Possible values are `balances`, `transactions`, `ownership`, and `payment_method`.
         */
        permissions: Array<SessionCreateParams.Permission>;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Filters to restrict the kinds of accounts to collect.
         */
        filters?: SessionCreateParams.Filters;

        /**
         * List of data features that you would like to retrieve upon account creation.
         */
        prefetch?: Array<SessionCreateParams.Prefetch>;

        /**
         * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
         */
        return_url?: string;
      }

      namespace SessionCreateParams {
        interface AccountHolder {
          /**
           * The ID of the Stripe account whose accounts will be retrieved. Should only be present if `type` is `account`.
           */
          account?: string;

          /**
           * The ID of the Stripe customer whose accounts will be retrieved. Should only be present if `type` is `customer`.
           */
          customer?: string;

          /**
           * Type of account holder to collect accounts for.
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
          account_subcategories?: Array<Filters.AccountSubcategory>;

          /**
           * List of countries from which to collect accounts.
           */
          countries?: Array<string>;
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

      interface SessionRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class SessionsResource {
        /**
         * To launch the Financial Connections authorization flow, create a Session. The session's client_secret can be used to launch the flow using Stripe.js.
         */
        create(
          params: SessionCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.FinancialConnections.Session>>;

        /**
         * Retrieves the details of a Financial Connections Session
         */
        retrieve(
          id: string,
          params?: SessionRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.FinancialConnections.Session>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.FinancialConnections.Session>>;
      }
    }
  }
}
