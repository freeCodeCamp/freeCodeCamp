import {
  StripeAddressElement,
  StripeAddressElementOptions,
  StripeShippingAddressElement,
  StripeShippingAddressElementOptions,
  StripePaymentRequestButtonElement,
  StripePaymentRequestButtonElementOptions,
  StripePaymentElement,
  StripePaymentElementOptions,
  StripeLinkAuthenticationElement,
  StripeLinkAuthenticationElementOptions,
  StripeIdealBankElement,
  StripeIdealBankElementOptions,
  StripeIbanElement,
  StripeIbanElementOptions,
  StripeP24BankElement,
  StripeP24BankElementOptions,
  StripeEpsBankElement,
  StripeEpsBankElementOptions,
  StripeFpxBankElement,
  StripeFpxBankElementOptions,
  StripeCardCvcElement,
  StripeCardCvcElementOptions,
  StripeCardExpiryElement,
  StripeCardExpiryElementOptions,
  StripeCardNumberElement,
  StripeCardNumberElementOptions,
  StripeCardElement,
  StripeCardElementOptions,
  StripeCartElement,
  StripeCartElementOptions,
  StripeAuBankAccountElement,
  StripeAfterpayClearpayMessageElementOptions,
  StripeAffirmMessageElement,
  StripeAffirmMessageElementOptions,
  StripePaymentMethodMessagingElementOptions,
  StripePaymentMethodMessagingElement,
  StripeAfterpayClearpayMessageElement,
  StripeAuBankAccountElementOptions,
  StripeIssuingCardNumberDisplayElement,
  StripeIssuingCardNumberDisplayElementOptions,
  StripeIssuingCardCvcDisplayElement,
  StripeIssuingCardCvcDisplayElementOptions,
  StripeIssuingCardExpiryDisplayElement,
  StripeIssuingCardExpiryDisplayElementOptions,
  StripeIssuingCardPinDisplayElement,
  StripeIssuingCardPinDisplayElementOptions,
  StripeIssuingCardCopyButtonElement,
  StripeIssuingCardCopyButtonElementOptions,
  StripeExpressCheckoutElement,
  StripeExpressCheckoutElementOptions,
} from './elements';
import {StripeError} from './stripe';

export interface StripeElements {
  /**
   * Updates the options that `Elements` was initialized with.
   * Updates are shallowly merged into the existing configuration.
   */
  update(options: StripeElementsUpdateOptions): void;

  /**
   * Fetches updates from the associated PaymentIntent or SetupIntent on an existing
   * instance of Elements, and reflects these updates in the Payment Element.
   */
  fetchUpdates(): Promise<{error?: {message: string; status?: string}}>;

  /**
   * Before confirming payment, call elements.submit() to validate the state of the
   * Payment Element and collect any data required for wallets.
   */
  submit(): Promise<{error?: StripeError}>;

  /////////////////////////////
  /// address
  /////////////////////////////

  /**
   * Creates an `AddressElement`.
   */
  create(
    elementType: 'address',
    options: StripeAddressElementOptions
  ): StripeAddressElement;

  /**
   * Looks up a previously created `Element` by its type.
   */
  getElement(elementType: 'address'): StripeAddressElement | null;

  /////////////////////////////
  /// paymentMethodMessaging
  /////////////////////////////

  /**
   * Creates an `paymentMethodMessagingElement`.
   */
  create(
    elementType: 'paymentMethodMessaging',
    options: StripePaymentMethodMessagingElementOptions
  ): StripePaymentMethodMessagingElement;

  /**
   * Looks up a previously created `Element` by its type.
   */
  getElement(
    elementType: 'paymentMethodMessaging'
  ): StripePaymentMethodMessagingElement | null;

  /////////////////////////////
  /// affirmMessage
  /////////////////////////////

  /**
   * Creates an `AffirmMessageElement`.
   */
  create(
    elementType: 'affirmMessage',
    options: StripeAffirmMessageElementOptions
  ): StripeAffirmMessageElement;

  /**
   * Looks up a previously created `Element` by its type.
   */
  getElement(elementType: 'affirmMessage'): StripeAffirmMessageElement | null;

  /////////////////////////////
  /// afterpayClearpayMessage
  /////////////////////////////

  /**
   * Creates an `AfterpayClearpayMessageElement`.
   */
  create(
    elementType: 'afterpayClearpayMessage',
    options: StripeAfterpayClearpayMessageElementOptions
  ): StripeAfterpayClearpayMessageElement;

  /**
   * Looks up a previously created `Element` by its type.
   */
  getElement(
    elementType: 'afterpayClearpayMessage'
  ): StripeAfterpayClearpayMessageElement | null;

  /////////////////////////////
  /// auBankAccount
  /////////////////////////////

  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   *
   * Creates an `AuBankAccountElement`.
   */
  create(
    elementType: 'auBankAccount',
    options?: StripeAuBankAccountElementOptions
  ): StripeAuBankAccountElement;

  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   *
   * Looks up a previously created `Element` by its type.
   */
  getElement(elementType: 'auBankAccount'): StripeAuBankAccountElement | null;

  /////////////////////////////
  /// card
  /////////////////////////////

  /**
   * Creates a `CardElement`.
   */
  create(
    elementType: 'card',
    options?: StripeCardElementOptions
  ): StripeCardElement;

  /**
   * Looks up a previously created `Element` by its type.
   */
  getElement(elementType: 'card'): StripeCardElement | null;

  /////////////////////////////
  /// cardNumber
  /////////////////////////////

  /**
   * Creates a `CardNumberElement`.
   */
  create(
    elementType: 'cardNumber',
    options?: StripeCardNumberElementOptions
  ): StripeCardNumberElement;

  /**
   * Looks up a previously created `Element` by its type.
   */
  getElement(elementType: 'cardNumber'): StripeCardNumberElement | null;

  /////////////////////////////
  /// cardExpiry
  /////////////////////////////

  /**
   * Creates a `CardExpiryElement`.
   */
  create(
    elementType: 'cardExpiry',
    options?: StripeCardExpiryElementOptions
  ): StripeCardExpiryElement;

  /**
   * Looks up a previously created `Element` by its type.
   */
  getElement(elementType: 'cardExpiry'): StripeCardExpiryElement | null;

  /////////////////////////////
  /// cardCvc
  /////////////////////////////

  /**
   * Creates a `CardCvcElement`.
   */
  create(
    elementType: 'cardCvc',
    options?: StripeCardCvcElementOptions
  ): StripeCardCvcElement;

  /**
   * Looks up a previously created `Element` by its type.
   */
  getElement(elementType: 'cardCvc'): StripeCardCvcElement | null;

  /////////////////////////////
  /// cart
  /////////////////////////////

  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   *
   * Creates a `CartElement`.
   */
  create(
    elementType: 'cart',
    options: StripeCartElementOptions
  ): StripeCartElement;

  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   *
   * Looks up a previously created `Element` by its type.
   */
  getElement(elementType: 'cart'): StripeCartElement | null;

  /////////////////////////////
  /// fpxBank
  /////////////////////////////

  /**
   * Creates an `FpxBankElement`.
   */
  create(
    elementType: 'fpxBank',
    options: StripeFpxBankElementOptions
  ): StripeFpxBankElement;

  /**
   * Looks up a previously created `Element` by its type.
   */
  getElement(elementType: 'fpxBank'): StripeFpxBankElement | null;

  /////////////////////////////
  /// epsBank
  /////////////////////////////

  /**
   *
   * Creates an `EpsBankElement`.
   */
  create(
    elementType: 'epsBank',
    options: StripeEpsBankElementOptions
  ): StripeEpsBankElement;

  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   *
   * Looks up a previously created `Element` by its type.
   */
  getElement(elementType: 'epsBank'): StripeEpsBankElement | null;

  /////////////////////////////
  /// p24Bank
  /////////////////////////////

  /**
   *
   * Creates an `P24BankElement`.
   */
  create(
    elementType: 'p24Bank',
    options: StripeP24BankElementOptions
  ): StripeP24BankElement;

  /**
   *
   * Looks up a previously created `Element` by its type.
   */
  getElement(elementType: 'p24Bank'): StripeP24BankElement | null;

  /////////////////////////////
  /// iban
  /////////////////////////////

  /**
   * Creates an `IbanElement`.
   */
  create(
    elementType: 'iban',
    options?: StripeIbanElementOptions
  ): StripeIbanElement;

  /**
   * Looks up a previously created `Element` by its type.
   */
  getElement(elementType: 'iban'): StripeIbanElement | null;

  /////////////////////////////
  /// idealBank
  /////////////////////////////

  /**
   * Creates an `IdealBankElement`.
   */
  create(
    elementType: 'idealBank',
    options?: StripeIdealBankElementOptions
  ): StripeIdealBankElement;

  /**
   * Looks up a previously created `Element` by its type.
   */
  getElement(elementType: 'idealBank'): StripeIdealBankElement | null;

  /////////////////////////////
  /// linkAuthentication
  /////////////////////////////

  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   *
   * Creates a `LinkAuthenticationElement`.
   */
  create(
    elementType: 'linkAuthentication',
    options?: StripeLinkAuthenticationElementOptions
  ): StripeLinkAuthenticationElement;

  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   *
   * Looks up a previously created `Element` by its type.
   */
  getElement(
    elementType: 'linkAuthentication'
  ): StripeLinkAuthenticationElement | null;

  /////////////////////////////
  /// expressCheckout
  /////////////////////////////

  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   *
   * Creates a `ExpressCheckoutElement`.
   */
  create(
    elementType: 'expressCheckout',
    options?: StripeExpressCheckoutElementOptions
  ): StripeExpressCheckoutElement;

  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   *
   * Looks up a previously created `Element` by its type.
   */
  getElement(
    elementType: 'expressCheckout'
  ): StripeExpressCheckoutElement | null;

  /////////////////////////////
  /// payment
  /////////////////////////////

  /**
   * Creates a `PaymentElement`.
   *
   * @docs https://stripe.com/docs/payments/payment-element
   */
  create(
    elementType: 'payment',
    options?: StripePaymentElementOptions
  ): StripePaymentElement;

  /**
   * Looks up a previously created `Element` by its type.
   */
  getElement(elementType: 'payment'): StripePaymentElement | null;

  /////////////////////////////
  /// paymentRequestButton
  /////////////////////////////

  /**
   * Creates a `PaymentRequestButtonElement`.
   *
   * @docs https://stripe.com/docs/stripe-js/elements/payment-request-button
   */
  create(
    elementType: 'paymentRequestButton',
    options: StripePaymentRequestButtonElementOptions
  ): StripePaymentRequestButtonElement;

  /**
   * Looks up a previously created `Element` by its type.
   */
  getElement(
    elementType: 'paymentRequestButton'
  ): StripePaymentRequestButtonElement | null;

  /////////////////////////////
  /// shippingAddress
  /////////////////////////////

  /**
   * @deprecated
   * Use `Address` element instead.
   *
   * Creates a `ShippingAddressElement`.
   */
  create(
    elementType: 'shippingAddress',
    options?: StripeShippingAddressElementOptions
  ): StripeShippingAddressElement;

  /**
   * @deprecated
   * Use `Address` element instead.
   *
   * Looks up a previously created `Element` by its type.
   */
  getElement(
    elementType: 'shippingAddress'
  ): StripeShippingAddressElement | null;

  /////////////////////////////
  /// issuing
  /////////////////////////////

  /**
   * Creates an `issuingCardNumberDisplay` Element
   *
   * @docs https://stripe.com/docs/js/issuing_elements/create?type=issuingCardNumberDisplay
   */
  create(
    elementType: 'issuingCardNumberDisplay',
    options: StripeIssuingCardNumberDisplayElementOptions
  ): StripeIssuingCardNumberDisplayElement;

  /**
   * Creates an `issuingCardCvcDisplay` Element
   *
   * @docs https://stripe.com/docs/js/issuing_elements/create?type=issuingCardCvcDisplay
   */
  create(
    elementType: 'issuingCardCvcDisplay',
    options: StripeIssuingCardCvcDisplayElementOptions
  ): StripeIssuingCardCvcDisplayElement;

  /**
   * Creates an `issuingCardExpiryDisplay` Element
   *
   * @docs https://stripe.com/docs/js/issuing_elements/create?type=issuingCardExpiryDisplay
   */
  create(
    elementType: 'issuingCardExpiryDisplay',
    options: StripeIssuingCardExpiryDisplayElementOptions
  ): StripeIssuingCardExpiryDisplayElement;

  /**
   * Creates an `issuingCardPinDisplay` Element
   *
   * @docs https://stripe.com/docs/js/issuing_elements/create?type=issuingCardPinDisplay
   */
  create(
    elementType: 'issuingCardPinDisplay',
    options: StripeIssuingCardPinDisplayElementOptions
  ): StripeIssuingCardPinDisplayElement;

  /**
   * Creates an `issuingCardCopyButton` Element
   *
   * @docs https://stripe.com/docs/js/issuing_elements/create?type=issuingCardCopyButton
   */
  create(
    elementType: 'issuingCardCopyButton',
    options: StripeIssuingCardCopyButtonElementOptions
  ): StripeIssuingCardCopyButtonElement;
}

export type StripeElementType =
  | 'address'
  | 'affirmMessage'
  | 'afterpayClearpayMessage'
  | 'auBankAccount'
  | 'card'
  | 'cardNumber'
  | 'cardExpiry'
  | 'cardCvc'
  | 'cart'
  | 'epsBank'
  | 'expressCheckout'
  | 'fpxBank'
  | 'iban'
  | 'idealBank'
  | 'p24Bank'
  | 'payment'
  | 'paymentMethodMessaging'
  | 'paymentRequestButton'
  | 'linkAuthentication'
  | 'shippingAddress'
  | 'issuingCardNumberDisplay'
  | 'issuingCardCvcDisplay'
  | 'issuingCardExpiryDisplay'
  | 'issuingCardPinDisplay'
  | 'issuingCardCopyButton';

export type StripeElement =
  | StripeAddressElement
  | StripeAffirmMessageElement
  | StripeAfterpayClearpayMessageElement
  | StripeAuBankAccountElement
  | StripeCardElement
  | StripeCardNumberElement
  | StripeCardExpiryElement
  | StripeCardCvcElement
  | StripeCartElement
  | StripeEpsBankElement
  | StripeFpxBankElement
  | StripeIbanElement
  | StripeIdealBankElement
  | StripeP24BankElement
  | StripeExpressCheckoutElement
  | StripePaymentElement
  | StripePaymentMethodMessagingElement
  | StripePaymentRequestButtonElement
  | StripeIssuingCardNumberDisplayElement
  | StripeIssuingCardCvcDisplayElement
  | StripeIssuingCardExpiryDisplayElement
  | StripeIssuingCardPinDisplayElement
  | StripeIssuingCardCopyButtonElement
  | StripeShippingAddressElement;

export type StripeElementLocale =
  | 'auto'
  | 'ar'
  | 'bg'
  | 'cs'
  | 'da'
  | 'de'
  | 'el'
  | 'en'
  | 'en-AU'
  | 'en-CA'
  | 'en-NZ'
  | 'en-GB'
  | 'es'
  | 'es-ES'
  | 'es-419'
  | 'et'
  | 'fi'
  | 'fil'
  | 'fr'
  | 'fr-CA'
  | 'fr-FR'
  | 'he'
  | 'hu'
  | 'hr'
  | 'id'
  | 'it'
  | 'it-IT'
  | 'ja'
  | 'ko'
  | 'lt'
  | 'lv'
  | 'ms'
  | 'mt'
  | 'nb'
  | 'nl'
  | 'no'
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
  | 'vi'
  | 'zh'
  | 'zh-HK'
  | 'zh-TW';

/**
 * Options to create an `Elements` instance with.
 */
interface BaseStripeElementsOptions {
  /**
   * An array of custom fonts, which elements created from the `Elements` object can use.
   */
  fonts?: Array<CssFontSource | CustomFontSource>;

  /**
   * The [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag) of the locale to display placeholders and error strings in.
   * Default is `auto` (Stripe detects the locale of the browser).
   * Setting the locale does not affect the behavior of postal code validation—a valid postal code for the billing country of the card is still required.
   */
  locale?: StripeElementLocale;

  /**
   * Match the Payment Element with the design of your site with the appearance option.
   * The layout of the Payment Element stays consistent, but you can modify colors, fonts, borders, padding, and more.
   *
   * @docs https://stripe.com/docs/stripe-js/appearance-api
   */
  appearance?: Appearance;

  /**
   * Display skeleton loader UI while waiting for Elements to be fully loaded, after they are mounted.
   * Supported for the `payment`, `shippingAddress`, and `linkAuthentication` Elements.
   * Default is `'auto'` (Stripe determines if a loader UI should be shown).
   */
  loader?: 'auto' | 'always' | 'never';

  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   *
   * Display saved PaymentMethods and Customer information.
   * Supported for the `payment`, `shippingAddress`, and `linkAuthentication` Elements.
   */
  customerOptions?: CustomerOptions;
}

export interface StripeElementsOptionsClientSecret
  extends BaseStripeElementsOptions {
  /**
   * The client secret for a PaymentIntent or SetupIntent used by the Payment Element.
   *
   * @docs https://stripe.com/docs/api/payment_intents/object#payment_intent_object-client_secret
   */
  clientSecret?: string;

  /**
   * Either use mode or clientSecret when creating an Elements group
   */
  mode?: never;
}

export interface StripeElementsOptionsMode extends BaseStripeElementsOptions {
  /**
   * Whether the Payment Element will be used to create a PaymentIntent, SetupIntent, or Subscription.
   */
  mode?: 'payment' | 'setup' | 'subscription';

  /**
   * Three character currency code (e.g., usd).
   */
  currency?: string;

  /**
   * The amount to be charged. Shown in Apple Pay, Google Pay, or Buy now pay later UIs, and influences available payment methods.
   */
  amount?: number;

  /**
   * Indicates that you intend to make future payments with this PaymentIntent’s payment method.
   *
   * @docs https://stripe.com/docs/api/payment_intents/create#create_payment_intent-setup_future_usage
   */
  setupFutureUsage?: 'off_session' | 'on_session' | null;

  /**
   * Indicates that you intend to make future payments with this PaymentIntent’s payment method.
   *
   * @docs https://stripe.com/docs/api/payment_intents/create#create_payment_intent-setup_future_usage
   */
  setup_future_usage?: 'off_session' | 'on_session' | null;

  /**
   * Controls when the funds will be captured from the customer’s account.
   *
   * @docs https://stripe.com/docs/api/payment_intents/create#create_payment_intent-capture_method
   */
  captureMethod?: 'manual' | 'automatic';

  /**
   * Controls when the funds will be captured from the customer’s account.
   *
   * @docs https://stripe.com/docs/api/payment_intents/create#create_payment_intent-capture_method
   */
  capture_method?: 'manual' | 'automatic';

  /**
   * Instead of using automatic payment methods, declare specific payment methods to enable.
   *
   * @docs https://stripe.com/docs/payments/payment-methods/overview
   */
  paymentMethodTypes?: string[];

  /**
   * Instead of using automatic payment methods, declare specific payment methods to enable.
   *
   * @docs https://stripe.com/docs/payments/payment-methods/overview
   */
  payment_method_types?: string[];

  /**
   * Allows PaymentMethods to be created from the Elements instance.
   */
  paymentMethodCreation?: 'manual';

  /**
   * Allows PaymentMethods to be created from the Elements instance.
   */
  payment_method_creation?: 'manual';

  /**
   * Either use mode or clientSecret when creating an Elements group
   */
  clientSecret?: never;
}

export type StripeElementsOptions =
  | StripeElementsOptionsClientSecret
  | StripeElementsOptionsMode;

/*
 * Updatable options for an `Elements` instance
 */
export interface StripeElementsUpdateOptions {
  /**
   * The [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag) of the locale to display placeholders and error strings in.
   * Default is `auto` (Stripe detects the locale of the browser).
   * Setting the locale does not affect the behavior of postal code validation—a valid postal code for the billing country of the card is still required.
   */
  locale?: StripeElementLocale;

  /**
   * Match the design of your site with the appearance option.
   * The layout of each Element stays consistent, but you can modify colors, fonts, borders, padding, and more.
   *
   * @docs https://stripe.com/docs/stripe-js/appearance-api
   */
  appearance?: Appearance;

  /**
   * Whether the Payment Element will be used to create a PaymentIntent, SetupIntent, or Subscription.
   */
  mode?: 'payment' | 'setup' | 'subscription';

  /**
   * Three character currency code (e.g., usd).
   */
  currency?: string;

  /**
   * The amount to be charged. Shown in Apple Pay, Google Pay, or Buy now pay later UIs, and influences available payment methods.
   */
  amount?: number;

  /**
   * Indicates that you intend to make future payments with this PaymentIntent’s payment method.
   *
   * @docs https://stripe.com/docs/api/payment_intents/update#update_payment_intent-setup_future_usage
   */
  setupFutureUsage?: 'off_session' | 'on_session' | null;

  /**
   * Indicates that you intend to make future payments with this PaymentIntent’s payment method.
   *
   * @docs https://stripe.com/docs/api/payment_intents/update#update_payment_intent-setup_future_usage
   */
  setup_future_usage?: 'off_session' | 'on_session' | null;

  /**
   * Controls when the funds will be captured from the customer’s account.
   *
   * @docs https://stripe.com/docs/api/payment_intents/create#create_payment_intent-capture_method
   */
  captureMethod?: 'manual' | 'automatic';

  /**
   * Controls when the funds will be captured from the customer’s account.
   *
   * @docs https://stripe.com/docs/api/payment_intents/create#create_payment_intent-capture_method
   */
  capture_method?: 'manual' | 'automatic';

  /**
   * Instead of using automatic payment methods, declare specific payment methods to enable.
   *
   * @docs https://stripe.com/docs/payments/payment-methods/overview
   */
  payment_method_types?: string[];

  /**
   * Instead of using automatic payment methods, declare specific payment methods to enable.
   *
   * @docs https://stripe.com/docs/payments/payment-methods/overview
   */
  paymentMethodTypes?: string[];
}

/*
 * Use a `CssFontSource` to pass custom fonts via a stylesheet URL when creating an `Elements` object.
 */
export interface CssFontSource {
  /**
   * A relative or absolute URL pointing to a CSS file with [@font-face](https://developer.mozilla.org/en/docs/Web/CSS/@font-face) definitions, for example:
   *
   *     https://fonts.googleapis.com/css?family=Open+Sans
   *
   * Note that if you are using a [content security policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) (CSP), [additional directives](https://stripe.com/docs/security#content-security-policy) may be necessary.
   */
  cssSrc: string;
}

/*
 * Use a `CustomFontSource` to pass custom fonts when creating an `Elements` object.
 */
export interface CustomFontSource {
  /**
   * The name to give the font
   */
  family: string;

  /**
   * A valid [src](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src) value pointing to your custom font file.
   * This is usually (though not always) a link to a file with a `.woff` , `.otf`, or `.svg` suffix.
   */
  src: string;

  /**
   * A valid [font-display](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display) value.
   */
  display?: string;

  /**
   * Defaults to `normal`.
   */
  style?: 'normal' | 'italic' | 'oblique';

  /**
   * A valid [unicode-range](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/unicode-range) value.
   */
  unicodeRange?: string;

  /**
   * A valid [font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight), as a string.
   */
  weight?: string;
}

/*
 * @docs https://stripe.com/docs/stripe-js/appearance-api
 */
export interface Appearance {
  disableAnimations?: boolean;

  theme?: 'stripe' | 'night' | 'flat' | 'none';

  variables?: {
    // General font styles
    fontFamily?: string;
    fontSmooth?: string;
    fontVariantLigatures?: string;
    fontVariationSettings?: string;
    fontLineHeight?: string;

    // Font sizes
    fontSizeBase?: string;
    fontSizeSm?: string;
    fontSizeXs?: string;
    fontSize2Xs?: string;
    fontSize3Xs?: string;
    fontSizeLg?: string;
    fontSizeXl?: string;

    // Font weights
    fontWeightLight?: string;
    fontWeightNormal?: string;
    fontWeightMedium?: string;
    fontWeightBold?: string;

    // Spacing
    spacingUnit?: string;
    spacingGridRow?: string;
    spacingGridColumn?: string;
    spacingTab?: string;
    spacingAccordionItem?: string;

    // Colors
    colorPrimary?: string;
    colorPrimaryText?: string;
    colorBackground?: string;
    colorBackgroundText?: string;
    colorText?: string;
    colorSuccess?: string;
    colorSuccessText?: string;
    colorDanger?: string;
    colorDangerText?: string;
    colorWarning?: string;
    colorWarningText?: string;

    // Text variations
    colorTextSecondary?: string;
    colorTextPlaceholder?: string;

    // Icons
    colorIcon?: string;
    colorIconHover?: string;
    colorIconCardError?: string;
    colorIconCardCvc?: string;
    colorIconCardCvcError?: string;
    colorIconCheckmark?: string;
    colorIconChevronDown?: string;
    colorIconChevronDownHover?: string;
    colorIconRedirect?: string;
    colorIconTab?: string;
    colorIconTabHover?: string;
    colorIconTabSelected?: string;
    colorIconTabMore?: string;
    colorIconTabMoreHover?: string;

    // Logos
    colorLogo?: string;
    colorLogoTab?: string;
    colorLogoTabSelected?: string;
    colorLogoBlock?: string;

    // Focus
    focusBoxShadow?: string;
    focusOutline?: string;

    // Radius
    borderRadius?: string;
  };

  rules?: {
    [selector: string]: {
      [cssPropertyName: string]: string;
    };
  };

  labels?: 'above' | 'floating';
}

export interface CustomerOptions {
  /**
   * The Customer id.
   */
  customer: string;

  /**
   * The ephemeral key for a Customer that grants temporary access to Customer data.
   */
  ephemeralKey: string;
}
