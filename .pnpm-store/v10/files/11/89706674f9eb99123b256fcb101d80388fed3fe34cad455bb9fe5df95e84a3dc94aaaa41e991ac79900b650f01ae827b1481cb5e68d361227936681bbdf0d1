// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Apps {
      interface SecretCreateParams {
        /**
         * A name for the secret that's unique within the scope.
         */
        name: string;

        /**
         * The plaintext secret value to be stored.
         */
        payload: string;

        /**
         * Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.
         */
        scope: SecretCreateParams.Scope;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * The Unix timestamp for the expiry time of the secret, after which the secret deletes.
         */
        expires_at?: number;
      }

      namespace SecretCreateParams {
        interface Scope {
          /**
           * The secret scope type.
           */
          type: Scope.Type;

          /**
           * The user ID. This field is required if `type` is set to `user`, and should not be provided if `type` is set to `account`.
           */
          user?: string;
        }

        namespace Scope {
          type Type = 'account' | 'user';
        }
      }

      interface SecretListParams extends PaginationParams {
        /**
         * Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.
         */
        scope: SecretListParams.Scope;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      namespace SecretListParams {
        interface Scope {
          /**
           * The secret scope type.
           */
          type: Scope.Type;

          /**
           * The user ID. This field is required if `type` is set to `user`, and should not be provided if `type` is set to `account`.
           */
          user?: string;
        }

        namespace Scope {
          type Type = 'account' | 'user';
        }
      }

      interface SecretDeleteWhereParams {
        /**
         * A name for the secret that's unique within the scope.
         */
        name: string;

        /**
         * Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.
         */
        scope: SecretDeleteWhereParams.Scope;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      namespace SecretDeleteWhereParams {
        interface Scope {
          /**
           * The secret scope type.
           */
          type: Scope.Type;

          /**
           * The user ID. This field is required if `type` is set to `user`, and should not be provided if `type` is set to `account`.
           */
          user?: string;
        }

        namespace Scope {
          type Type = 'account' | 'user';
        }
      }

      interface SecretFindParams {
        /**
         * A name for the secret that's unique within the scope.
         */
        name: string;

        /**
         * Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.
         */
        scope: SecretFindParams.Scope;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      namespace SecretFindParams {
        interface Scope {
          /**
           * The secret scope type.
           */
          type: Scope.Type;

          /**
           * The user ID. This field is required if `type` is set to `user`, and should not be provided if `type` is set to `account`.
           */
          user?: string;
        }

        namespace Scope {
          type Type = 'account' | 'user';
        }
      }

      class SecretsResource {
        /**
         * Create or replace a secret in the secret store.
         */
        create(
          params: SecretCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Apps.Secret>>;

        /**
         * List all secrets stored on the given scope.
         */
        list(
          params: SecretListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Apps.Secret>;

        /**
         * Deletes a secret from the secret store by name and scope.
         */
        deleteWhere(
          params: SecretDeleteWhereParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Apps.Secret>>;

        /**
         * Finds a secret in the secret store by name and scope.
         */
        find(
          params: SecretFindParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Apps.Secret>>;
      }
    }
  }
}
