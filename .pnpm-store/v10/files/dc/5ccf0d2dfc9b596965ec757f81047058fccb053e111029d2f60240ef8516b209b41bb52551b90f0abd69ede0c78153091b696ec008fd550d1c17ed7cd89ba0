import type { BraintreeCallback, BraintreeCurrencyAmount, BraintreeAddress, BraintreeLineItem, BraintreeTokenizePayload } from "./commonsTypes";
import type { BraintreeClient } from "./clientTypes";
import type { ReactPayPalScriptOptions } from "../scriptProviderTypes";
export interface BraintreeShippingOption {
    /**
     * A unique ID that identifies a payer-selected shipping option.
     */
    id: string;
    /**
     * A description that the payer sees, which helps them choose an appropriate shipping option.
     * For example, `Free Shipping`, `USPS Priority Shipping`, `Expédition prioritaire USPS`,
     * or `USPS yōuxiān fā huò`. Localize this description to the payer's locale.
     */
    label: string;
    /**
     * If `selected = true` is specified as part of the API request it represents the shipping
     * option that the payee/merchant expects to be pre-selected for the payer when they first view
     * the shipping options within the PayPal checkout experience. As part of the response if a
     * shipping option has `selected = true` it represents the shipping option that the payer
     * selected during the course of checkout with PayPal. Only 1 `shippingOption` can be set
     * to `selected = true`.
     */
    selected: boolean;
    /**
     * The method by which the payer wants to get their items.
     */
    type: "SHIPPING" | "PICKUP";
    /**
     * The shipping cost for the selected option.
     */
    amount: BraintreeCurrencyAmount;
}
export interface BraintreePayPalCheckoutCreatePaymentOptions {
    flow: "vault" | "checkout";
    intent?: "authorize" | "order" | "capture" | undefined;
    offerCredit?: boolean | undefined;
    amount?: string | number | undefined;
    currency?: string | undefined;
    displayName?: string | undefined;
    locale?: string | undefined;
    vaultInitiatedCheckoutPaymentMethodToken?: string | undefined;
    shippingOptions?: BraintreeShippingOption[] | undefined;
    enableShippingAddress?: boolean | undefined;
    shippingAddressOverride?: BraintreeAddress | undefined;
    shippingAddressEditable?: boolean | undefined;
    billingAgreementDescription?: string | undefined;
    landingPageType?: string | undefined;
    lineItems?: BraintreeLineItem[] | undefined;
    requestBillingAgreement?: boolean;
}
export interface BraintreePayPalCheckoutTokenizationOptions {
    payerID: string;
    orderID: string;
    paymentID?: string;
    paymentToken?: string;
    billingToken?: string;
    shippingOptionsId?: string;
    vault?: boolean;
}
export interface BraintreePayPalCheckout {
    /**
     * @description There are two ways to integrate the PayPal Checkout component.
     * See the [PayPal Checkout constructor documentation](PayPalCheckout.html#PayPalCheckout) for more information and examples.
     * @example
     * braintree.client.create({
     *   authorization: 'authorization'
     * }).then(function (clientInstance) {
     *   return braintree.paypalCheckout.create({
     *     client: clientInstance
     *   });
     * }).then(function (paypalCheckoutInstance) {
     *   // set up checkout.js
     * }).catch(function (err) {
     *   console.error('Error!', err);
     * });
     */
    create(options: {
        client?: BraintreeClient | undefined;
        authorization?: string | undefined;
        merchantAccountId?: string | undefined;
    }): Promise<BraintreePayPalCheckout>;
    /**
     * Resolves when the PayPal SDK has been succesfully loaded onto the page.
     *
     * @link https://braintree.github.io/braintree-web/current/PayPalCheckout.html#loadPayPalSDK
     */
    loadPayPalSDK(options?: ReactPayPalScriptOptions): Promise<void>;
    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     */
    VERSION: string;
    /**
     * Creates a PayPal payment ID or billing token using the given options. This is meant to be passed to PayPal's checkout.js library.
     * When a {@link Callback} is defined, the function returns undefined and invokes the callback with the id to be used with the checkout.js
     * library. Otherwise, it returns a Promise that resolves with the id.
     * `authorize` - Submits the transaction for authorization but not settlement.
     * `order` - Validates the transaction without an authorization (i.e. without holding funds).
     *           Useful for authorizing and capturing funds up to 90 days after the order has been placed. Only available for Checkout flow.
     * `capture` - Payment will be immediately submitted for settlement upon creating a transaction.
     * `sale` can be used as an alias for this value.
     * Supported locales are:
     * `da_DK`,
     * `de_DE`,
     * `en_AU`,
     * `en_GB`,
     * `en_US`,
     * `es_ES`,
     * `fr_CA`,
     * `fr_FR`,
     * `id_ID`,
     * `it_IT`,
     * `ja_JP`,
     * `ko_KR`,
     * `nl_NL`,
     * `no_NO`,
     * `pl_PL`,
     * `pt_BR`,
     * `pt_PT`,
     * `ru_RU`,
     * `sv_SE`,
     * `th_TH`,
     * `zh_CN`,
     * `zh_HK`,
     * and `zh_TW`.
     *     * * `login` - A PayPal account login page is used.
     * * `billing` - A non-PayPal account landing page is used.
     * // this paypal object is created by checkout.js
     * // see https://github.com/paypal/paypal-checkout
     * paypal.Buttons({
     *   createOrder: function () {
     *     // when createPayment resolves, it is automatically passed to checkout.js
     *     return paypalCheckoutInstance.createPayment({
     *       flow: 'checkout',
     *       amount: '10.00',
     *       currency: 'USD',
     *       intent: 'capture' // this value must either be `capture` or match the intent passed into the PayPal SDK intent query parameter
     *     });
     *   },
     *   // Add other options, e.g. onApproved, onCancel, onError
     * }).render('#paypal-button');
     *
     * @example
     * // shippingOptions are passed to createPayment. You can review the result from onAuthorize to determine which shipping option id was selected.
     * ```javascript
     * braintree.client.create({
     *   authorization: 'authorization'
     * }).then(function (clientInstance) {
     *   return braintree.paypalCheckout.create({
     *     client: clientInstance
     *   });
     * }).then(function (paypalCheckoutInstance) {
     *   return paypal.Button.render({
     *     env: 'production'
     *
     *     payment: function () {
     *       return paypalCheckoutInstance.createPayment({
     *         flow: 'checkout',
     *         amount: '10.00',
     *         currency: 'USD',
     *         shippingOptions: [
     *           {
     *             id: 'UUID-9',
     *             type: 'PICKUP',
     *             label: 'Store Location Five',
     *             selected: true,
     *             amount: {
     *               value: '1.00',
     *               currency: 'USD'
     *             }
     *           },
     *           {
     *             id: 'shipping-speed-fast',
     *             type: 'SHIPPING',
     *             label: 'Fast Shipping',
     *             selected: false,
     *             amount: {
     *               value: '1.00',
     *               currency: 'USD'
     *             }
     *           },
     *           {
     *             id: 'shipping-speed-slow',
     *             type: 'SHIPPING',
     *             label: 'Slow Shipping',
     *             selected: false,
     *             amount: {
     *               value: '1.00',
     *               currency: 'USD'
     *             }
     *           }
     *         ]
     *       });
     *     },
     *
     *     onAuthorize: function (data, actions) {
     *       return paypalCheckoutInstance.tokenizePayment(data).then(function (payload) {
     *         // Submit payload.nonce to your server
     *       });
     *     }
     *   }, '#paypal-button');
     * }).catch(function (err) {
     *  console.error('Error!', err);
     * });
     * ```
     *
     */
    createPayment(options: BraintreePayPalCheckoutCreatePaymentOptions, callback?: BraintreeCallback): Promise<string>;
    /**
     * Tokenizes the authorize data from PayPal's checkout.js library when completing a buyer approval flow.
     * When a {@link callback} is defined, invokes the callback with {@link BraintreePayPalCheckout~tokenizePayload|tokenizePayload} and returns undefined.
     * Otherwise, returns a Promise that resolves with a {@link BraintreePayPalCheckout~tokenizePayload|tokenizePayload}.
     * @example <caption>Opt out of auto-vaulting behavior</caption>
     * // create the paypalCheckoutInstance with a client token generated with a customer id
     * paypal.Buttons({
     *   createBillingAgreement: function () {
     *     return paypalCheckoutInstance.createPayment({
     *       flow: 'vault'
     *       // your other createPayment options here
     *     });
     *   },
     *   onApproved: function (data) {
     *     data.vault = false;
     *
     *     return paypalCheckoutInstance.tokenizePayment(data);
     *   },
     *   // Add other options, e.g. onCancel, onError
     * }).render('#paypal-button');
     *
     */
    tokenizePayment(tokenizeOptions: BraintreePayPalCheckoutTokenizationOptions): Promise<BraintreeTokenizePayload>;
    /**
     * Resolves with the PayPal client id to be used when loading the PayPal SDK.     * @example
     * paypalCheckoutInstance.getClientId().then(function (id) {
     *  var script = document.createElement('script');
     *
     *  script.src = 'https://www.paypal.com/sdk/js?client-id=' + id;
     *  script.onload = function () {
     *    // setup the PayPal SDK
     *  };
     *
     *  document.body.appendChild(script);
     * });
     */
    getClientId(): Promise<string>;
    /**
     * Initializes the PayPal checkout flow with a payment method nonce that represents a vaulted PayPal account.
     * When a {@link callback} is defined, the function returns undefined and invokes the callback with the id to be used with the checkout.js library.
     * Otherwise, it returns a Promise that resolves with the id.
     * `flow` cannot be set (will always be `'checkout'`)
     * `amount`, `currency`, and `vaultInitiatedCheckoutPaymentMethodToken` are required instead of optional
     * * Additional configuration is available (listed below)
     * @example
     * paypalCheckoutInstance.startVaultInitiatedCheckout({
     *   vaultInitiatedCheckoutPaymentMethodToken: 'nonce-that-represents-a-vaulted-paypal-account',
     *   amount: '10.00',
     *   currency: 'USD'
     * }).then(function (payload) {
     *   // send payload.nonce to your server
     * }).catch(function (err) {
     *   if (err.code === 'PAYPAL_POPUP_CLOSED') {
     *     // indicates that customer canceled by
     *     // manually closing the PayPal popup
     *   }
     *
     *   // handle other errors
     * });
     *
     */
    startVaultInitiatedCheckout(options: {
        optOutOfModalBackdrop: boolean;
    }): Promise<void>;
    /**
     * Cleanly tear down anything set up by {@link module:braintree-web/paypal-checkout.create|create}.
     * @example
     * paypalCheckoutInstance.teardown();
     * @example <caption>With callback</caption>
     * paypalCheckoutInstance.teardown(function () {
     *   // teardown is complete
     * });
     */
    teardown(): Promise<void>;
}
