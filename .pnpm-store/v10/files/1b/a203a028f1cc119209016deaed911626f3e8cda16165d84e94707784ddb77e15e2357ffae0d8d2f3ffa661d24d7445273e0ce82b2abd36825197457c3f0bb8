/// <reference types="node" />

declare module 'stripe' {
  namespace Stripe {
    export class Webhooks {
      /**
       * Constructs and verifies the signature of an Event from the provided details.
       *
       * @throws Stripe.errors.StripeSignatureVerificationError
       */
      constructEvent(
        /**
         * Raw text body payload received from Stripe.
         */
        payload: string | Buffer,
        /**
         * Value of the `stripe-signature` header from Stripe.
         * Typically a string.
         *
         * Note that this is typed to accept an array of strings
         * so that it works seamlessly with express's types,
         * but will throw if an array is passed in practice
         * since express should never return this header as an array,
         * only a string.
         */
        header: string | Buffer | Array<string>,
        /**
         * Your Webhook Signing Secret for this endpoint (e.g., 'whsec_...').
         * You can get this [in your dashboard](https://dashboard.stripe.com/webhooks).
         */
        secret: string,
        /**
         * Seconds of tolerance on timestamps.
         */
        tolerance?: number,
        /**
         * Optional CryptoProvider to use for computing HMAC signatures.
         */
        cryptoProvider?: CryptoProvider,

        /**
         * Optional: timestamp to use when checking signature validity. Defaults to Date.now().
         */
        receivedAt?: number
      ): Stripe.Event;

      /**
       * Asynchronously constructs and verifies the signature of an Event from
       * the provided details.
       *
       * @throws Stripe.errors.StripeSignatureVerificationError
       */
      constructEventAsync(
        /**
         * Raw text body payload received from Stripe.
         */
        payload: string | Buffer,
        /**
         * Value of the `stripe-signature` header from Stripe.
         * Typically a string.
         *
         * Note that this is typed to accept an array of strings
         * so that it works seamlessly with express's types,
         * but will throw if an array is passed in practice
         * since express should never return this header as an array,
         * only a string.
         */
        header: string | Buffer | Array<string>,
        /**
         * Your Webhook Signing Secret for this endpoint (e.g., 'whsec_...').
         * You can get this [in your dashboard](https://dashboard.stripe.com/webhooks).
         */
        secret: string,
        /**
         * Seconds of tolerance on timestamps.
         */
        tolerance?: number,
        /**
         * Optional CryptoProvider to use for computing HMAC signatures.
         */
        cryptoProvider?: CryptoProvider,

        /**
         * Optional: timestamp to use when checking signature validity. Defaults to Date.now().
         */
        receivedAt?: number
      ): Promise<Stripe.Event>;

      /**
       * Generates a header to be used for webhook mocking
       */
      generateTestHeaderString(opts: WebhookTestHeaderOptions): string;

      /**
       * Generates a header to be used for webhook mocking
       */
      generateTestHeaderStringAsync(
        opts: WebhookTestHeaderOptions
      ): Promise<string>;

      signature: Signature;
    }

    export interface WebhookTestHeaderOptions {
      /**
       * JSON stringified payload object, containing the 'id' and 'object' parameters.
       */
      payload: string;

      /**
       * Timestamp of the header. Defaults to Date.now().
       */
      timestamp?: number;

      /**
       * Stripe webhook secret, e.g., 'whsec_...'.
       */
      secret: string;

      /**
       * Version of API to hit. Defaults to 'v1'.
       */
      scheme?: string;

      /**
       * Computed webhook signature.
       */
      signature?: string;

      /**
       * Optional CryptoProvider to use for computing HMAC signatures, if no
       * signature is given.
       */
      cryptoProvider?: CryptoProvider;
    }

    export class Signature {
      EXPECTED_SCHEME: 'v1';

      verifyHeader(
        payload: string,
        header: string,
        secret: string,
        tolerance?: number,
        cryptoProvider?: CryptoProvider
      ): boolean;
      verifyHeaderAsync(
        payload: string,
        header: string,
        secret: string,
        tolerance?: number,
        cryptoProvider?: CryptoProvider
      ): Promise<boolean>;
      parseHeader(
        header: string,
        scheme?: string
      ): {
        t: number;
        v0: string;
        v1: string;
      };
    }
  }
}
