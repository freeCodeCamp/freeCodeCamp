import {Token, PaymentMethod, Source} from '../api';

export interface PaymentRequest {
  /**
   * Returns a `Promise` that resolves with a truthy value if an enabled wallet is ready to pay.
   * If no wallet is available, it resolves with `null`.
   */
  canMakePayment(): Promise<CanMakePaymentResult | null>;

  /**
   * Shows the browser’s payment interface.
   * When using the `PaymentRequestButtonElement`, this is called for you automatically.
   * This method must be called as the result of a user interaction (for example, in a click handler).
   */
  show(): void;

  /**
   * Closes the browser’s payment interface.
   */
  abort: () => void;

  /**
   * `true` if the browser’s payment interface is showing.
   * When using the `PaymentRequestButtonElement`, this is called for you automatically.
   */
  isShowing: () => boolean;

  /**
   * `PaymentRequest` instances can be updated with an options object.
   *
   * `paymentRequest.update` can only be called when the browser payment interface is not showing.
   * Listen to the [click](https://stripe.com/docs/js/element/events) and [cancel](https://stripe.com/docs/js/element/events) events to detect if the payment interface has been initiated.
   * To update the `PaymentRequest` right before the payment interface is initiated, call `paymentRequest.update` in your click event handler.
   */
  update(options: PaymentRequestUpdateOptions): void;

  /**
   * Stripe.js automatically creates a `Token` after the customer is done interacting with the browser’s payment interface.
   * To access the created `Token`, listen for this event.
   */
  on(
    eventType: 'token',
    handler: (event: PaymentRequestTokenEvent) => any
  ): this;
  once(
    eventType: 'token',
    handler: (event: PaymentRequestTokenEvent) => any
  ): this;
  off(
    eventType: 'token',
    handler?: (event: PaymentRequestTokenEvent) => any
  ): this;

  /**
   * Stripe.js automatically creates a `PaymentMethod` after the customer is done interacting with the browser’s payment interface.
   * To access the created `PaymentMethod`, listen for this event.
   */
  on(
    eventType: 'paymentmethod',
    handler: (event: PaymentRequestPaymentMethodEvent) => any
  ): this;
  once(
    eventType: 'paymentmethod',
    handler: (event: PaymentRequestPaymentMethodEvent) => any
  ): this;
  off(
    eventType: 'paymentmethod',
    handler?: (event: PaymentRequestPaymentMethodEvent) => any
  ): this;

  /**
   * Stripe.js automatically creates a `Source` after the customer is done interacting with the browser’s payment interface.
   * To access the created `Source`, listen for this event.
   */
  on(
    eventType: 'source',
    handler: (event: PaymentRequestSourceEvent) => any
  ): this;
  once(
    eventType: 'source',
    handler: (event: PaymentRequestSourceEvent) => any
  ): this;
  off(
    eventType: 'source',
    handler?: (event: PaymentRequestSourceEvent) => any
  ): this;

  /**
   * The cancel event is emitted from a `PaymentRequest` when the browser's payment interface is dismissed.
   *
   * Note that in some browsers, the payment interface may be dismissed by the customer even after they authorize the payment.
   * This means that you may receive a cancel event on your `PaymentRequest` object after receiving a `token`, `paymentmethod`, or `source` event.
   * If you’re using the cancel event as a hook for canceling the customer’s order, make sure you also refund the payment that you just created.
   */
  on(eventType: 'cancel', handler: () => any): this;
  once(eventType: 'cancel', handler: () => any): this;
  off(eventType: 'cancel', handler?: () => any): this;

  /**
   * The `shippingaddresschange` event is emitted from a `PaymentRequest` whenever the customer selects a new address in the browser's payment interface.
   */
  on(
    eventType: 'shippingaddresschange',
    handler: (event: PaymentRequestShippingAddressEvent) => any
  ): this;
  once(
    eventType: 'shippingaddresschange',
    handler: (event: PaymentRequestShippingAddressEvent) => any
  ): this;
  off(
    eventType: 'shippingaddresschange',
    handler?: (event: PaymentRequestShippingAddressEvent) => any
  ): this;

  /**
   * The `shippingoptionchange` event is emitted from a `PaymentRequest` whenever the customer selects a new shipping option in the browser's payment interface.
   */
  on(
    eventType: 'shippingoptionchange',
    handler: (event: PaymentRequestShippingOptionEvent) => any
  ): this;
  once(
    eventType: 'shippingoptionchange',
    handler: (event: PaymentRequestShippingOptionEvent) => any
  ): this;
  off(
    eventType: 'shippingoptionchange',
    handler?: (event: PaymentRequestShippingOptionEvent) => any
  ): this;
}

export type CanMakePaymentResult = Record<string, boolean>;

export interface PaymentRequestUpdateOptions {
  /**
   * Three character currency code (e.g., `usd`).
   */
  currency?: string;

  /**
   * This `PaymentRequestItem` is shown to the customer in the browser’s payment interface.
   */
  total?: PaymentRequestItem;

  /**
   * An array of PaymentRequestItem objects.
   * These objects are shown as line items in the browser’s payment interface.
   * Note that the sum of the line item amounts does not need to add up to the `total` amount above.
   */
  displayItems?: PaymentRequestItem[];
  /**
   * An array of `ShippingOption` objects.
   * The first shipping option listed appears in the browser payment interface as the default option.
   */

  shippingOptions?: PaymentRequestShippingOption[];
}

/**
 * An set of options to create this `PaymentRequest` instance with.
 * These options can be updated using `paymentRequest.update`.
 */
export interface PaymentRequestOptions {
  /**
   * The two-letter country code of your Stripe account (e.g., `US`).
   */
  country: string;

  /**
   * Three character currency code (e.g., `usd`).
   */
  currency: string;

  /**
   * This `PaymentRequestItem` is shown to the customer in the browser’s payment interface.
   */
  total: PaymentRequestItem;

  /**
   * An array of PaymentRequestItem objects.
   * These objects are shown as line items in the browser’s payment interface.
   * Note that the sum of the line item amounts does not need to add up to the `total` amount above.
   */
  displayItems?: PaymentRequestItem[];

  /**
   * By default, the browser's payment interface only asks the customer for actual payment information.
   * A customer name can be collected by setting this option to `true`.
   * This collected name will appears in the `PaymentRequestEvent` object.
   *
   * We highly recommend you collect at least one of name, email, or phone as this also results in collection of billing address for Apple Pay.
   * The billing address can be used to perform address verification and block fraudulent payments.
   * For all other payment methods, the billing address is automatically collected when available.
   */
  requestPayerName?: boolean;

  /**
   * See the `requestPayerName` option.
   */
  requestPayerPhone?: boolean;

  /**
   * See the `requestPayerName` option.
   */
  requestPayerEmail?: boolean;

  /**
   * Collect shipping address by setting this option to `true`.
   * The address appears in the `PaymentRequestEvent`.
   *
   * You must also supply a valid `PaymentRequestShippingOption` to the `shippingOptions` property.
   * This can be up front at the time `stripe.paymentRequest` is called, or in response to a `shippingaddresschange` event using the `updateWith` callback.
   */
  requestShipping?: boolean;

  /**
   * An array of `ShippingOption` objects.
   * The first shipping option listed appears in the browser payment interface as the default option.
   */
  shippingOptions?: PaymentRequestShippingOption[];

  /**
   * An array of wallet strings.
   * Can be one or more of `applePay`, `googlePay`, `link` and `browserCard`.
   * Use this option to disable Apple Pay, Google Pay, Link and/or browser-saved cards.
   */
  disableWallets?: PaymentRequestWallet[];

  /**
   * @deprecated
   * Use disableWallets instead.
   */
  wallets?: PaymentRequestWallet[];
}

/**
 * A `PaymentRequestItem` object is used to configure a `PaymentRequest`.
 */
export interface PaymentRequestItem {
  /**
   * The amount in the currency's subunit (e.g. cents, yen, etc.)
   */
  amount: number;

  /**
   * A name that the browser shows the customer in the payment interface.
   */
  label: string;

  /**
   * If you might change this amount later (for example, after you have calcluated shipping costs), set this to `true`.
   * Note that browsers treat this as a hint for how to display things, and not necessarily as something that will prevent submission.
   */
  pending?: boolean;
}

/**
 * The `ShippingOption` object describes a shipping method used with a `PaymentRequest`.
 */
export interface PaymentRequestShippingOption {
  /**
   * A unique ID you create to keep track of this shipping option.
   * You’ll be told the ID of the selected option on changes and on completion.
   */
  id: string;

  /**
   * A short label for this shipping option.
   */
  label: string;

  /**
   * A longer description of this shipping option.
   */
  detail: string;

  /**
   * The amount to show for this shipping option.
   * If the cost of this shipping option depends on the shipping address the customer enters, listen for the `shippingaddresschange` event.
   */
  amount: number;
}

export type PaymentRequestWallet =
  | 'applePay'
  | 'googlePay'
  | 'link'
  | 'browserCard';

export type PaymentRequestCompleteStatus =
  /**
   * Report to the browser that the payment was successful, and that it can close any active payment interface.
   */
  | 'success'

  /**
   * Report to the browser that you were unable to process the customer‘s payment.
   * Browsers may re-show the payment interface, or simply show a message and close.
   */
  | 'fail'

  /**
   * Equivalent to `fail`, except that the browser can choose to show a more-specific error message.
   */
  | 'invalid_payer_name'

  /**
   * Equivalent to `fail`, except that the browser can choose to show a more-specific error message.
   */
  | 'invalid_payer_phone'

  /**
   * Equivalent to `fail`, except that the browser can choose to show a more-specific error message.
   */
  | 'invalid_payer_email'

  /**
   * Equivalent to `fail`, except that the browser can choose to show a more-specific error message.
   */
  | 'invalid_shipping_address';

export interface PaymentRequestEvent {
  /**
   * Call this function with a `CompleteStatus` when you have processed the token data provided by the API.
   * Note that you must must call complete within 30 seconds.
   */
  complete: (status: PaymentRequestCompleteStatus) => void;

  /**
   * The customer's name.
   * Only present if it was explicitly asked for [creating the PaymentRequest object](https://stripe.com/docs/js/payment_request/create).
   */
  payerName?: string;

  /**
   * The customer's email.
   * Only present if it was explicitly asked for [creating the PaymentRequest object](https://stripe.com/docs/js/payment_request/create).
   */
  payerEmail?: string;

  /**
   * The customer's phone.
   * Only present if it was explicitly asked for [creating the PaymentRequest object](https://stripe.com/docs/js/payment_request/create).
   */
  payerPhone?: string;

  /**
   * The final `ShippingAddress` the customer selected.
   * Only present when `requestShipping` is `true` when [creating the PaymentRequest object](https://stripe.com/docs/js/payment_request/create), and you've supplied at least one `ShippingOption`.
   */
  shippingAddress?: PaymentRequestShippingAddress;

  /**
   * The final `ShippingOption` the customer selected.
   * Only present when `requestShipping` is `true` when [creating the PaymentRequest object](https://stripe.com/docs/js/payment_request/create), and you've supplied at least one `ShippingOption`.
   */
  shippingOption?: PaymentRequestShippingOption;

  /**
   * The unique name of the wallet the customer chose to authorize payment.
   * For example, `browserCard`.
   */
  walletName: PaymentRequestWallet | string;

  /**
   * @deprecated
   * Use walletName instead.
   */
  methodName: string;
}

/**
 * Describes a shipping address collected with a `PaymentRequest`.
 */
export interface PaymentRequestShippingAddress {
  /**
   * Two-letter country code, capitalized.
   * Valid two-letter country codes are specified by ISO3166 alpha-2.
   */
  country?: string;

  /**
   * An array of address line items.
   * For example, `185 Berry St.`, `Suite 500`, `P.O. Box 12345`, etc.
   */
  addressLine?: string[];

  /**
   * The most coarse subdivision of a country.
   * Depending on the country, this might correspond to a state, a province, an oblast, a prefecture, or something else along these lines.
   */
  region?: string;

  /**
   * The name of a city, town, village, etc.
   */
  city?: string;

  /**
   * The postal code or ZIP code, also known as PIN code in India.
   */
  postalCode?: string;

  /**
   * The name of the recipient.
   * This might be a person, a business name, or contain “care of” (c/o) instructions.
   */
  recipient?: string;

  /**
   * The phone number of the recipient.
   * Note that this might be different from any phone number you collect with `requestPayerPhone`.
   */
  phone?: string;

  /**
   * The sorting code as used in, for example, France.
   * Not present on Apple platforms.
   */
  sortingCode?: string;

  /**
   * A logical subdivision of a city.
   * Can be used for things like neighborhoods, boroughs, districts, or UK dependent localities.
   * Not present on Apple platforms.
   */
  dependentLocality?: string;
}

export interface PaymentRequestTokenEvent extends PaymentRequestEvent {
  token: Token;
}

export interface PaymentRequestPaymentMethodEvent extends PaymentRequestEvent {
  paymentMethod: PaymentMethod;
}

export interface PaymentRequestSourceEvent extends PaymentRequestEvent {
  source: Source;
}

export interface PaymentRequestShippingAddressEvent {
  /**
   * Call this with an `UpdateDetails` object to merge updates into the current `PaymentRequest` object.
   * Note that if you subscribe to `shippingaddresschange` events, then you must call `updateWith` within 30 seconds.
   */
  updateWith: (details: PaymentRequestUpdateDetails) => void;

  /**
   * The customer's selected `ShippingAddress`.
   * To maintain privacy, browsers may anonymize the shipping address by removing sensitive information that is not necessary to calculate shipping costs.
   * Depending on the country, some fields can be missing or partially redacted.
   * For example, the shipping address in the U.S. may only contain a city, state, and ZIP code.
   * The full shipping address appears in the `PaymentRequestEvent` object after the purchase is confirmed in the browser’s payment interface
   */
  shippingAddress: PaymentRequestShippingAddress;
}

export type PaymentRequestUpdateDetailsStatus =
  /**
   * Let the customer proceed.
   */
  | 'success'

  /**
   * Prevent the customer from making the change they just made.
   */
  | 'fail'

  /**
   * Equivalent to `fail`, except we show a more specific error message.
   * Can only be used in a `shippingaddresschange` handler.
   */
  | 'invalid_shipping_address';

/**
 * An object to pass to the `updateWith` callback on `shippingaddresschange` and `shippingoptionchange` events.
 */
export interface PaymentRequestUpdateDetails {
  /**
   * The browser uses this value to show an error message to the customer if they've taken an action that invalidates the payment request.
   */
  status?: PaymentRequestUpdateDetailsStatus;

  /**
   * The new total amount, if applicable.
   */
  total?: PaymentRequestItem;

  /**
   * These `PaymentRequestItem`s are shown as line items in the browser's payment interface.
   * Note that the sum of the line item amounts does not need to add up to the `total` amount.
   */
  displayItems?: PaymentRequestItem[];

  /**
   * The first shipping option listed appears in the browser payment interface as the default option.
   */
  shippingOptions?: PaymentRequestShippingOption[];
}

export interface PaymentRequestShippingOptionEvent {
  /**
   * Call this with an `UpdateDetails` object to merge updates into the current `PaymentRequest` object.
   * Note that if you subscribe to `shippingaddresschange` events, then you must call `updateWith` within 30 seconds.
   */
  updateWith: (details: PaymentRequestUpdateDetails) => void;

  /**
   * The customer's selected `ShippingOption`.
   */
  shippingOption: PaymentRequestShippingOption;
}
