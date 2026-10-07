// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface AccountLinkCreateParams {
      /**
       * The identifier of the account to create an account link for.
       */
      account: string;

      /**
       * The type of account link the user is requesting. Possible values are `account_onboarding` or `account_update`.
       */
      type: AccountLinkCreateParams.Type;

      /**
       * The collect parameter is deprecated. Use `collection_options` instead.
       */
      collect?: AccountLinkCreateParams.Collect;

      /**
       * Specifies the requirements that Stripe collects from connected accounts in the Connect Onboarding flow.
       */
      collection_options?: AccountLinkCreateParams.CollectionOptions;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The URL the user will be redirected to if the account link is expired, has been previously-visited, or is otherwise invalid. The URL you specify should attempt to generate a new account link with the same parameters used to create the original account link, then redirect the user to the new account link's URL so they can continue with Connect Onboarding. If a new account link cannot be generated or the redirect fails you should display a useful error to the user.
       */
      refresh_url?: string;

      /**
       * The URL that the user will be redirected to upon leaving or completing the linked flow.
       */
      return_url?: string;
    }

    namespace AccountLinkCreateParams {
      type Collect = 'currently_due' | 'eventually_due';

      interface CollectionOptions {
        /**
         * Specifies whether the platform collects only currently_due requirements (`currently_due`) or both currently_due and eventually_due requirements (`eventually_due`). If you don't specify `collection_options`, the default value is `currently_due`.
         */
        fields?: CollectionOptions.Fields;

        /**
         * Specifies whether the platform collects future_requirements in addition to requirements in Connect Onboarding. The default value is `omit`.
         */
        future_requirements?: CollectionOptions.FutureRequirements;
      }

      namespace CollectionOptions {
        type Fields = 'currently_due' | 'eventually_due';

        type FutureRequirements = 'include' | 'omit';
      }

      type Type = 'account_onboarding' | 'account_update';
    }

    class AccountLinksResource {
      /**
       * Creates an AccountLink object that includes a single-use Stripe URL that the platform can redirect their user to in order to take them through the Connect Onboarding flow.
       */
      create(
        params: AccountLinkCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.AccountLink>>;
    }
  }
}
