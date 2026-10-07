declare module 'stripe' {
  namespace Stripe {
    /**
     * Interface encapsulating the various crypto computations used by the library,
     * allowing pluggable underlying crypto implementations.
     *
     * Implementations can choose which methods they want to implement (eg. a
     * CryptoProvider can be used which only implements the asynchronous
     * versions of each crypto computation).
     */
    export interface CryptoProvider {
      /**
       * Computes a SHA-256 HMAC given a secret and a payload (encoded in UTF-8).
       * The output HMAC should be encoded in hexadecimal.
       *
       * Sample values for implementations:
       * - computeHMACSignature('', 'test_secret') => 'f7f9bd47fb987337b5796fdc1fdb9ba221d0d5396814bfcaf9521f43fd8927fd'
       * - computeHMACSignature('\ud83d\ude00', 'test_secret') => '837da296d05c4fe31f61d5d7ead035099d9585a5bcde87de952012a78f0b0c43
       */
      computeHMACSignature: (payload: string, secret: string) => string;

      /**
       * Asynchrnously computes a SHA-256 HMAC with a given secret and a payload
       * (encoded in UTF-8). The output HMAC should be encoded in hexadecimal
       * and respect the contract of computeHMACSignature.
       */
      computeHMACSignatureAsync: (
        payload: string,
        secret: string
      ) => Promise<string>;
    }

    /**
     * Creates a CryptoProvider which uses the Node built-in `crypto` package.
     *
     * This supports both synchronous and asynchronous operations.
     */
    export const createNodeCryptoProvider: () => CryptoProvider;

    /**
     * Creates a CryptoProvider which uses the SubtleCrypto API from the Web
     * Crypto API for its crypto computations.
     *
     * This only supports asynchronous operations.
     *
     * An optional SubtleCrypto object can be passed in. If none is provided,
     * defaults to the `crypto.subtle` object in the global scope.
     */
    export const createSubtleCryptoProvider: (
      /**
       * The SubtleCrypto type cannot be specified without pulling in DOM types.
       * This corresponds to WindowOrWorkerGlobalScope['crypto']['subtle'] for
       * applications which pull in DOM types.
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      subtleCrypto?: any
    ) => CryptoProvider;
  }
}
