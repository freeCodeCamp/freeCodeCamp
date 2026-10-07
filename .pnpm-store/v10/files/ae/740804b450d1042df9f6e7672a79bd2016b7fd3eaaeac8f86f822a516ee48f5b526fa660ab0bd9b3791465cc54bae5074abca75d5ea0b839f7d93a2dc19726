import { BraintreeClientAnalyticsMetadata, BraintreeCallback } from "./commonsTypes";
export interface BraintreeConfiguration {
    client: BraintreeClient;
    gatewayConfiguration: unknown;
    analyticsMetadata: BraintreeClientAnalyticsMetadata;
}
export interface BraintreeClient {
    authorization: string;
    /**
     * @description This function is the entry point for the <code>braintree.client</code> module.
     * It is used for creating {@link BraintreeClient} instances that service communication to Braintree servers.
     *
     * @example
     * var createClient = require('braintree-web/client').create;
     *
     * createClient({
     *   authorization: CLIENT_AUTHORIZATION
     * }, function (createErr, clientInstance) {
     *   ...
     * });
     */
    create(options: {
        authorization: string;
    }): Promise<BraintreeClient>;
    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     */
    VERSION: string;
    /**
     * Returns a copy of the configuration values.
     */
    getConfiguration(): BraintreeConfiguration;
    /**
     * Used by other modules to formulate all network requests to the Braintree gateway.
     * It is also capable of being used directly from your own form to tokenize credit card information.
     * However, be sure to satisfy PCI compliance if you use direct card tokenization.
     *     * @example
     *
     * <caption>Direct Credit Card Tokenization</caption>
     * var createClient = require('braintree-web/client').create;
     *
     * createClient({
     *   authorization: CLIENT_AUTHORIZATION
     * }, function (createErr, clientInstance) {
     *   var form = document.getElementById('my-form-id');
     *   var data = {
     *     creditCard: {
     *       number: form['cc-number'].value,
     *       cvv: form['cc-cvv'].value,
     *       expirationDate: form['cc-date'].value,
     *       billingAddress: {
     *         postalCode: form['cc-postal'].value
     *       },
     *       options: {
     *         validate: false
     *       }
     *     }
     *   };
     *
     *   // Warning: For a merchant to be eligible for the easiest level of PCI compliance (SAQ A),
     *   // payment fields cannot be hosted on your checkout page.
     *   // For an alternative to the following, use Hosted Fields.
     *   clientInstance.request({
     *     endpoint: 'payment_methods/credit_cards',
     *     method: 'post',
     *     data: data
     *   }, function (requestErr, response) {
     *  // More detailed example of handling API errors: https://codepen.io/braintree/pen/MbwjdM
     *     if (requestErr) { throw new Error(requestErr); }
     *
     *     console.log('Got nonce:', response.creditCards[0].nonce);
     *   });
     * });
     */
    request(options: {
        method: string;
        endpoint: string;
        data: unknown;
        timeout?: number | undefined;
    }, callback: BraintreeCallback): void;
    /**
     * Cleanly tear down anything set up by {@link BraintreeClient#getConfiguration|create}.
     * @param [callback] Called once teardown is complete. No data is returned if teardown completes successfully.
     * @example
     * clientInstance.teardown();
     * @example <caption>With callback</caption>
     * clientInstance.teardown(function () {
     *   // teardown is complete
     * });
     * @returns Returns a promise if no callback is provided.
     */
    teardown(callback: BraintreeCallback<void>): Promise<void>;
}
