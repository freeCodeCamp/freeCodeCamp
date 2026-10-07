// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface EphemeralKeyCreateParams {
      /**
       * The ID of the Customer you'd like to modify using the resulting ephemeral key.
       */
      customer?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The ID of the Issuing Card you'd like to access using the resulting ephemeral key.
       */
      issuing_card?: string;

      /**
       * A single-use token, created by Stripe.js, used for creating ephemeral keys for Issuing Cards without exchanging sensitive information.
       */
      nonce?: string;

      /**
       * The ID of the Identity VerificationSession you'd like to access using the resulting ephemeral key
       */
      verification_session?: string;
    }

    interface EphemeralKeyDeleteParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class EphemeralKeysResource {
      /**
       * Creates a short-lived API key for a given resource.
       */
      create(
        params?: EphemeralKeyCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.EphemeralKey>>;
      create(
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.EphemeralKey>>;

      /**
       * Invalidates a short-lived API key for a given resource.
       */
      del(
        id: string,
        params?: EphemeralKeyDeleteParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.EphemeralKey>>;
      del(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.EphemeralKey>>;
    }
  }
}
