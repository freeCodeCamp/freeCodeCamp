import type {
  CreateOrderRequestBody,
  OrderResponseBody,
  PatchOrderRequestBody,
  ShippingOption,
} from "../apis/orders";
import type {
  CreateSubscriptionRequestBody,
  ReviseSubscriptionRequestBody,
  SubscriptionResponseBody,
} from "../apis/subscriptions";
import type { FUNDING_SOURCE } from "./funding-eligibility";

export type CreateOrderData = {
  paymentSource: FUNDING_SOURCE;
};

export type CreateOrderActions = {
  order: {
    /** Used to create an order for client-side integrations. Accepts the same options as the request body of the [/v2/checkout/orders api](https://developer.paypal.com/docs/api/orders/v2/#orders-create-request-body). */
    create: (options: CreateOrderRequestBody) => Promise<string>;
  };
};

export type CreateSubscriptionActions = {
  subscription: {
    /** Used to create a subscription for client-side integrations. Accepts the same options as the request body of the [/v1/billing/subscription api](https://developer.paypal.com/docs/api/subscriptions/v1#subscriptions-create-request-body). */
    create: (options: CreateSubscriptionRequestBody) => Promise<string>;
    /** Used to revise an existing subscription for client-side integrations. Accepts the same options as the request body of the [/v1/billing/subscription/{id}/revise api](https://developer.paypal.com/docs/api/subscriptions/v1/#subscriptions_revise). */
    revise: (
      subscriptionID: string,
      options: ReviseSubscriptionRequestBody,
    ) => Promise<string>;
  };
};

export type OnInitActions = {
  enable: () => Promise<void>;
  disable: () => Promise<void>;
};

export type OnClickActions = {
  reject: () => Promise<void>;
  resolve: () => Promise<void>;
};

export type OnApproveData = {
  billingToken?: string | null;
  facilitatorAccessToken?: string;
  orderID: string;
  payerID?: string | null;
  paymentID?: string | null;
  subscriptionID?: string | null;
  authCode?: string | null;
  /** Present for vault-without-purchase flows (Venmo, PayPal save-payment). */
  vaultSetupToken?: string | null;
};

export type OnApproveActions = {
  order?: {
    /**
     * Captures payment for an order.
     * To successfully capture payment for an order,the buyer must first
     * approve the order or a valid `payment_source` must be provided in the request
     */
    capture: () => Promise<OrderResponseBody>;
    /**
     * Authorizes payment for an order.
     * To successfully authorize payment for an order,
     * the buyer must first approve the order or a valid payment_source must be provided in the request
     */
    authorize: () => Promise<OrderResponseBody>;
    /**
     * Shows details for an order, by ID
     */
    get: () => Promise<OrderResponseBody>;
    /**
     * Updates an order with a `CREATED` or `APPROVED` status.
     * You cannot update an order with the `COMPLETED` status
     */
    patch: () => Promise<void>;
  };
  subscription?: {
    get: () => Promise<SubscriptionResponseBody>;
    activate: () => Promise<void>;
  };
  redirect: (redirectURL: string) => void;
  restart: () => void;
};

export type OnCancelledActions = {
  redirect: () => void;
};

export type PartialShippingAddress = {
  city: string;
  state: string;
  country_code: string;
  postal_code: string;
};

export type OnShippingChangeData = {
  orderID?: string;
  paymentID?: string;
  paymentToken?: string;
  shipping_address?: PartialShippingAddress;
  selected_shipping_option?: ShippingOption;
  buyerAccessToken?: string;
  forceRestAPI: boolean;
};

export type OnShippingChangeActions = {
  resolve: () => Promise<void>;
  reject: () => Promise<void>;
  order: {
    patch: (options: PatchOrderRequestBody) => Promise<void>;
  };
};

type CurrencyCodeAndValue = {
  currencyCode: string;
  value: string;
};

type CheckoutShippingOption = {
  amount: CurrencyCodeAndValue;
  id?: string;
  label: string;
  selected: boolean;
  type: "SHIPPING" | "PICKUP";
};

type OnShippingOptionsChangeData = {
  orderID?: string;
  paymentID?: string;
  paymentToken?: string;
  selectedShippingOption?: CheckoutShippingOption;
};

type BuildOrderPatchPayloadArgs = {
  discount?: string;
  handling?: string;
  insurance?: string;
  itemTotal?: string;
  option?: CheckoutShippingOption;
  shippingDiscount?: string;
  taxTotal?: string;
};

type OnShippingOptionsChangeBuildOrderPatchPayloadArgs =
  BuildOrderPatchPayloadArgs & {
    shippingOption?: CheckoutShippingOption;
  };

type OnShippingAddressChangeBuildOrderPatchPayloadArgs =
  BuildOrderPatchPayloadArgs & {
    shippingOptions?: CheckoutShippingOption[];
  };

type OnShippingOptionsChangeActions = {
  buildOrderPatchPayload: ({
    discount,
    handling,
    insurance,
    itemTotal,
    shippingOption,
    shippingDiscount,
    taxTotal,
  }: OnShippingOptionsChangeBuildOrderPatchPayloadArgs) => PatchOrderRequestBody;
  reject: () => Promise<void>;
};

type OnShippingAddressChangeData = {
  amount: CurrencyCodeAndValue;
  orderID?: string;
  paymentID?: string;
  paymentToken?: string;
  shippingAddress: {
    city: string;
    state: string;
    /** The [two-character ISO 3166-1 code](/docs/integration/direct/rest/country-codes/) that identifies the country or region. */
    countryCode: string;
    /**
     * The postal code, which is the zip code or equivalent.
     * Typically required for countries with a postal code or an equivalent.
     */
    postalCode: string;
  };
};

type OnShippingAddressChangeActions = {
  buildOrderPatchPayload: ({
    discount,
    handling,
    insurance,
    itemTotal,
    shippingOptions,
    shippingDiscount,
    taxTotal,
  }: OnShippingAddressChangeBuildOrderPatchPayloadArgs) => PatchOrderRequestBody;
  reject: () => Promise<void>;
};

export type DisplayOnlyOptions = "vaultable";

export type PayPalButtonCreateOrder = (
  data: CreateOrderData,
  actions: CreateOrderActions,
) => Promise<string>;

export type PayPalButtonCreateBillingAgreement = () => Promise<string>;

export type PayPalButtonCreateSubscription = (
  data: Record<string, unknown>,
  actions: CreateSubscriptionActions,
) => Promise<string>;

export type PayPalButtonCreateVaultSetupToken = () => Promise<string>;

export type PayPalButtonFundingSource = FUNDING_SOURCE;

export type PayPalButtonOnApprove = (
  data: OnApproveData,
  actions: OnApproveActions,
) => Promise<void>;

export type PayPalButtonOnCancel = (
  data: Record<string, unknown>,
  actions: OnCancelledActions,
) => void;

export type PayPalButtonOnClick = (
  data: Record<string, unknown>,
  actions: OnClickActions,
) => Promise<void> | void;

export type PayPalButtonOnError = (err: Record<string, unknown>) => void;

export type PayPalButtonOnInit = (
  data: Record<string, unknown>,
  actions: OnInitActions,
) => void;

export type PayPalButtonOnShippingChange = (
  data: OnShippingChangeData,
  actions: OnShippingChangeActions,
) => Promise<void>;

export type PayPalButtonOnShippingOptionsChange = (
  data: OnShippingOptionsChangeData,
  actions: OnShippingOptionsChangeActions,
) => Promise<void>;

export type PayPalButtonOnShippingAddressChange = (
  data: OnShippingAddressChangeData,
  actions: OnShippingAddressChangeActions,
) => Promise<void>;

export type PayPalButtonStyle = {
  borderRadius?: number;
  color?: "gold" | "blue" | "silver" | "white" | "black";
  disableMaxWidth?: boolean;
  height?: number;
  label?:
    | "paypal"
    | "checkout"
    | "buynow"
    | "pay"
    | "installment"
    | "subscribe"
    | "donate";
  layout?: "vertical" | "horizontal";
  shape?: "rect" | "pill" | "sharp";
  tagline?: boolean;
};
export type PayPalButtonDisplayOnly = DisplayOnlyOptions[];
export type PayPalButtonMessage = {
  amount?: number | string;
  align?: "center" | "left" | "right";
  color?: "black" | "white";
  position?: "top" | "bottom";
  offer?: "pay_later_short_term" | "pay_later_long_term";
};

export interface PayPalButtonsComponentOptions {
  /**
   * Called on button click. Often used for [Braintree vault integrations](https://developers.braintreepayments.com/guides/paypal/vault/javascript/v3).
   */
  createBillingAgreement?: PayPalButtonCreateBillingAgreement;
  /**
   * Called on button click to set up a one-time payment. [createOrder docs](https://developer.paypal.com/docs/business/javascript-sdk/javascript-sdk-reference/#createorder).
   */
  createOrder?: PayPalButtonCreateOrder;
  /**
   * Called on button click to set up a recurring payment. [createSubscription docs](https://developer.paypal.com/docs/business/javascript-sdk/javascript-sdk-reference/#createsubscription).
   */
  createSubscription?: PayPalButtonCreateSubscription;
  /**
   * Called on button click to set up vault-without-purchase tokenization.
   * Used for PayPal save-payment and Venmo vault-without-purchase flows.
   * Return a vault setup token created server-side via the PayPal Vault API (/v3/vault/setup-tokens).
   * For Venmo, create the token with `payment_source: { venmo: {...} }`.
   * https://developer.paypal.com/docs/checkout/save-payment-methods/purchase-later/js-sdk/paypal/
   */
  createVaultSetupToken?: PayPalButtonCreateVaultSetupToken;
  /**
   * Used for defining a standalone button.
   * Learn more about [configuring the funding source for standalone buttons](https://developer.paypal.com/docs/business/checkout/configure-payments/standalone-buttons/#4-funding-sources).
   */
  fundingSource?: PayPalButtonFundingSource;
  /**
   * Called when finalizing the transaction. Often used to inform the buyer that the transaction is complete.
   * For vault-without-purchase flows, `data.vaultSetupToken` contains the approved token; `data.orderID` will be empty.
   * [onApprove docs](https://developer.paypal.com/docs/business/javascript-sdk/javascript-sdk-reference/#onapprove).
   */
  onApprove?: PayPalButtonOnApprove;
  /**
   * Called when the buyer cancels the transaction.
   * Often used to show the buyer a [cancellation page](https://developer.paypal.com/docs/business/checkout/add-capabilities/buyer-experience/#3-show-cancellation-page).
   */
  onCancel?: PayPalButtonOnCancel;
  /**
   * Called when the button is clicked. Often used for [validation](https://developer.paypal.com/docs/checkout/integration-features/validation/).
   */
  onClick?: PayPalButtonOnClick;
  /**
   * Catch all for errors preventing buyer checkout.
   * Often used to show the buyer an [error page](https://developer.paypal.com/docs/checkout/integration-features/handle-errors/).
   */
  onError?: PayPalButtonOnError;
  /**
   * Called when the buttons are initialized. The component is initialized after the iframe has successfully loaded.
   */
  onInit?: PayPalButtonOnInit;
  /**
   * Called when the buyer changes their shipping address on PayPal.
   * @deprecated Use `onShippingAddressChange` or `onShippingOptionsChange` instead.
   */
  onShippingChange?: PayPalButtonOnShippingChange;
  /**
   * Called when the buyer selects a new shipping option on PayPal.
   */
  onShippingOptionsChange?: PayPalButtonOnShippingOptionsChange;
  /**
   * Called when the buyer updates their shipping address on PayPal.
   */
  onShippingAddressChange?: PayPalButtonOnShippingAddressChange;
  /**
   * [Styling options](https://developer.paypal.com/docs/business/checkout/reference/style-guide/#customize-the-payment-buttons) for customizing the button appearance.
   */
  style?: PayPalButtonStyle;
  /**
   * Used for displaying only vaultable buttons.
   */
  displayOnly?: PayPalButtonDisplayOnly;
  /**
   * [Message options](https://developer.paypal.com/sdk/js/reference/#message) for customizing the message appearance and limited content control.
   */
  message?: PayPalButtonMessage;
  /**
   * When true, clicking the button will first attempt to open the paysheet in the PayPal app (if supported). If not supported, Checkout will open in the web flow.
   */
  appSwitchWhenAvailable?: boolean;
}

export interface PayPalButtonsComponent {
  close: () => Promise<void>;
  isEligible: () => boolean;
  render: (container: HTMLElement | string) => Promise<void>;
  updateProps: (props: PayPalButtonsComponentOptions) => Promise<void>;
  resume: () => void;
  hasReturned: () => boolean;
}
