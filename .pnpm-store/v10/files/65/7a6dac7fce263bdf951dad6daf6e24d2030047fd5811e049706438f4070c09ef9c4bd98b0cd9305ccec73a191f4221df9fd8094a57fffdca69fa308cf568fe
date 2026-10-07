export interface RedirectToCheckoutServerOptions {
  /**
   * The ID of the [Checkout Session](https://stripe.com/docs/api/checkout/sessions) that is used in [Checkout's server integration](https://stripe.com/docs/payments/checkout/one-time).
   */
  sessionId: string;
}

export interface RedirectToCheckoutClientOptions {
  /**
   * The URL to which Stripe should send customers when payment is complete.
   * If you’d like access to the Checkout Session for the successful payment, read more about it in our guide on [fulfilling your payments with webhooks](https://stripe.com/docs/payments/checkout/fulfillment#webhooks).
   */
  successUrl: string;

  /**
   * The URL to which Stripe should send customers when payment is canceled.
   */
  cancelUrl: string;

  /**
   * An array of objects representing the items that your customer would like to purchase.
   * These items are shown as line items in the Checkout interface and make up the total amount to be collected by Checkout.
   */
  lineItems?: Array<{
    /**
     * The ID of the price that the customer would like to purchase. SKU or plan IDs may also be used.
     */
    price?: string;

    /**
     * The quantity of units for the item.
     */
    quantity?: number;
  }>;

  /**
   * An array of objects representing the items that your customer would like to purchase.
   * These items are shown as line items in the Checkout interface and make up the total amount to be collected by Checkout.
   *
   * @deprecated
   */
  items?: Array<{
    /**
     * The ID of the SKU that the customer would like to purchase
     */
    sku?: string;

    /**
     * The ID of the plan that the customer would like to subscribe to.
     */
    plan?: string;

    /**
     * The quantity of units for the item.
     */
    quantity?: number;
  }>;

  /**
   * The mode of the Checkout Session. Required if using lineItems.
   */
  mode?: 'payment' | 'subscription';

  /**
   * A unique string to reference the Checkout session.
   * This can be a customer ID, a cart ID, or similar.
   * It is included in the `checkout.session.completed` webhook and can be used to fulfill the purchase.
   */
  clientReferenceId?: string;

  /**
   * The email address used to create the customer object.
   * If you already know your customer's email address, use this attribute to prefill it on Checkout.
   */
  customerEmail?: string;

  /**
   * Specify whether Checkout should collect the customer’s billing address.
   * If set to `required`, Checkout will attempt to collect the customer’s billing address.
   * If not set or set to `auto` Checkout will only attempt to collect the billing address when necessary.
   */
  billingAddressCollection?: 'auto' | 'required';

  /**
   * Provides configuration for Checkout to collect a shipping address from a customer.
   */
  shippingAddressCollection?: {
    /**
     * An array of two-letter ISO country codes representing which countries
     * Checkout should provide as options for shipping locations. The codes are
     * expected to be uppercase. Unsupported country codes: AS, CX, CC, CU, HM, IR, KP, MH, FM, NF, MP, PW, SD, SY, UM, VI.
     */
    allowedCountries: string[];
  };

  /**
   * The [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag) of the locale to display Checkout in.
   * Default is `auto` (Stripe detects the locale of the browser).
   */
  locale?: CheckoutLocale;

  /**
   * Describes the type of transaction being performed by Checkout in order to customize relevant text on the page, such as the **Submit** button.
   * `submitType` can only be specified when using using line items or SKUs, and not subscriptions.
   * The default is `auto`.
   */
  submitType?: 'auto' | 'book' | 'donate' | 'pay';
}

export type RedirectToCheckoutOptions =
  | RedirectToCheckoutServerOptions
  | RedirectToCheckoutClientOptions;

export type CheckoutLocale =
  | 'auto'
  | 'bg'
  | 'cs'
  | 'da'
  | 'de'
  | 'el'
  | 'en'
  | 'en-GB'
  | 'es'
  | 'es-419'
  | 'et'
  | 'fi'
  | 'fil'
  | 'fr'
  | 'fr-CA'
  | 'hr'
  | 'hu'
  | 'id'
  | 'it'
  | 'ja'
  | 'lt'
  | 'lv'
  | 'ms'
  | 'mt'
  | 'nb'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'pt-BR'
  | 'ro'
  | 'ru'
  | 'sk'
  | 'sl'
  | 'sv'
  | 'th'
  | 'tr'
  | 'zh'
  | 'zh-HK'
  | 'zh-TW';
