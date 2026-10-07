/**
 * DOM element types for v6 SDK web components.
 *
 * Augments `HTMLElementTagNameMap` so that `document.createElement()` and
 * `document.querySelector()` return strongly-typed elements for non-React
 * integrations using the v6 SDK web components.
 */

/**
 * The `<paypal-button>` and `<venmo-button>` custom elements.
 *
 * @example
 * ```typescript
 * const paypalButton = document.createElement("paypal-button");
 * paypalButton.type = "checkout";
 * paypalButton.addEventListener("click", () => {
 *   // start payment session
 * });
 * ```
 */
export interface PayPalButtonElement extends HTMLElement {
  /**
   * Controls the button label.
   */
  type?: "buynow" | "checkout" | "donate" | "pay" | "subscribe";
  /**
   * When true, the button renders in a disabled state and suppresses click
   * events.
   */
  disabled?: boolean;
}

/**
 * The `<paypal-pay-later-button>` custom element. Both `countryCode` and
 * `productCode` must be set for the button to render — populate them from
 * `findEligibleMethods().getDetails("paylater")`.
 *
 * @example
 * ```typescript
 * const payLaterButton = document.createElement("paypal-pay-later-button");
 * payLaterButton.countryCode = "US";
 * payLaterButton.productCode = "PAY_LATER_SHORT_TERM";
 * ```
 */
export interface PayPalPayLaterButtonElement extends HTMLElement {
  countryCode?: "AU" | "CA" | "DE" | "ES" | "FR" | "GB" | "IT" | "US";
  productCode?: "PAYLATER" | "PAY_LATER_SHORT_TERM";
  disabled?: boolean;
}

/**
 * The `<paypal-credit-button>` custom element. `countryCode` must be set for
 * the button to render — populate it from
 * `findEligibleMethods().getDetails("credit")`.
 *
 * @example
 * ```typescript
 * const creditButton = document.createElement("paypal-credit-button");
 * creditButton.countryCode = "US";
 * ```
 */
export interface PayPalCreditButtonElement extends HTMLElement {
  countryCode?: "GB" | "US";
  disabled?: boolean;
}

/**
 * The `<paypal-basic-card-button>` custom element used to start a
 * `PayPalGuestPaymentSession`. Must be wrapped in a
 * `<paypal-basic-card-container>` to render.
 *
 * @example
 * ```typescript
 * const cardButton = document.createElement("paypal-basic-card-button");
 * cardButton.buyerCountry = "US";
 * ```
 */
export interface PayPalBasicCardButtonElement extends HTMLElement {
  /**
   * Buyer country used to verify inline guest checkout eligibility.
   */
  buyerCountry?: string;
  disabled?: boolean;
}

/**
 * The `<paypal-message>` custom element for PayPal Pay Later messaging.
 *
 * @example
 * ```typescript
 * const message = document.createElement("paypal-message");
 * message.amount = "100.00";
 * message.currencyCode = "USD";
 * message.logoType = "MONOGRAM";
 * ```
 */
export interface PayPalMessageElement extends HTMLElement {
  amount?: string;
  /**
   * When true, the data layer (`PayPalMessages`) automatically picks up this
   * element to fetch and render content.
   */
  autoBootstrap?: boolean;
  buyerCountry?: string;
  currencyCode?: string;
  logoPosition?: "INLINE" | "LEFT" | "RIGHT" | "TOP";
  logoType?: "MONOGRAM" | "TEXT" | "WORDMARK";
  /**
   * Comma-separated list of offer types to filter messaging on. Valid
   * values: `"PAYPAL_BALANCE"`, `"PAYPAL_CASHBACK_MASTERCARD"`,
   * `"PAYPAL_CREDIT_NO_INTEREST"`, `"PAYPAL_DEBIT_CARD"`,
   * `"PAY_LATER_LONG_TERM"`, `"PAY_LATER_PAY_IN_1"`,
   * `"PAY_LATER_SHORT_TERM"`.
   */
  offerTypes?: string;
  presentationMode?: "AUTO" | "MODAL" | "POPUP" | "REDIRECT";
  textColor?: "BLACK" | "MONOCHROME" | "WHITE";
}

/**
 * The `<apple-pay-button>` custom element, defined and rendered by Apple's
 * Apple Pay JS SDK (not the PayPal SDK). Load Apple's script alongside the
 * PayPal SDK for the element to be registered:
 *
 * ```html
 * <script
 *   crossorigin
 *   src="https://applepay.cdn-apple.com/jsapi/1.latest/apple-pay-sdk.js"
 * ></script>
 * ```
 *
 * @remarks
 * Configure the element with `setAttribute` — the element observes the
 * `buttonstyle`, `type`, and `locale` attributes via `attributeChangedCallback`
 * and does not expose DOM property setters for them. See
 * [Apple's documentation](https://developer.apple.com/documentation/apple_pay_on_the_web/displaying_apple_pay_buttons_using_javascript)
 * for the supported values of each attribute.
 *
 * @example
 * ```typescript
 * const applePayButton = document.createElement("apple-pay-button");
 * applePayButton.setAttribute("buttonstyle", "black");
 * applePayButton.setAttribute("type", "buy");
 * applePayButton.setAttribute("locale", "en-US");
 * ```
 */
export type ApplePayButtonElement = HTMLElement;

declare global {
  interface HTMLElementTagNameMap {
    "paypal-button": PayPalButtonElement;
    "venmo-button": PayPalButtonElement;
    "paypal-pay-later-button": PayPalPayLaterButtonElement;
    "paypal-credit-button": PayPalCreditButtonElement;
    "paypal-basic-card-button": PayPalBasicCardButtonElement;
    "paypal-basic-card-container": HTMLElement;
    "paypal-message": PayPalMessageElement;
    "apple-pay-button": ApplePayButtonElement;
  }
}
