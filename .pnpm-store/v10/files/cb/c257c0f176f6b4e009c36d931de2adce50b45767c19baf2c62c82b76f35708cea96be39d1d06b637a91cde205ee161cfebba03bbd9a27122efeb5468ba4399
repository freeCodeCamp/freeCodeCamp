export type HostedFieldsCardTypeName =
  | "amex"
  | "discover"
  | "elo"
  | "hiper"
  | "jcb"
  | "mastercard"
  | "visa";

export interface HostedFieldsCardTypeData {
  eligible: boolean;
  valuable: boolean;
}

export type HostedFieldsCardTypes = {
  [key in HostedFieldsCardTypeName]: HostedFieldsCardTypeData;
};

export interface HostedFieldsCardCode {
  name: string;
  size: number;
}

export interface HostedFieldsHostedFieldsCard {
  type: string;
  niceType: string;
  code: HostedFieldsCardCode;
}

export type HostedFieldsHostedFieldsFieldName =
  | "number"
  | "cvv"
  | "expirationDate"
  | "expirationMonth"
  | "expirationYear"
  | "postalCode"
  | "cardholderName";

export interface HostedFieldsHostedFieldsFieldData {
  container: HTMLElement;
  isEmpty: boolean;
  isFocused: boolean;
  isPotentiallyValid: boolean;
  isValid: boolean;
}

export type HostedFieldsFieldDataFields = {
  [key in HostedFieldsHostedFieldsFieldName]: HostedFieldsHostedFieldsFieldData;
};

export type HostedFieldsTokenize = {
  vault?: boolean;
  authenticationInsight?: unknown;
  fieldsToTokenize?: string[];
  cardholderName?: string;
  billingAddress?: {
    postalCode?: string;
    firstName?: string;
    lastName?: string;
    company?: string;
    streetAddress?: string;
    extendedAddress?: string;
    locality?: string;
    region?: string;
    countryCodeNumeric?: string;
    countryCodeAlpha2?: string;
    countryCodeAlpha3?: string;
    countryName?: string;
  };
};

export interface HostedFieldsState {
  cards: HostedFieldsHostedFieldsCard[];
  fields: HostedFieldsFieldDataFields;
}

export interface HostedFieldsEvent extends HostedFieldsState {
  emittedBy: HostedFieldsHostedFieldsFieldName;
}

export interface HostedFieldsEventTypeMap {
  blur: HostedFieldsEvent;
  focus: HostedFieldsEvent;
  empty: HostedFieldsEvent;
  notEmpty: HostedFieldsEvent;
  cardTypeChange: HostedFieldsEvent;
  validityChange: HostedFieldsEvent;
  inputSubmitRequest: HostedFieldsEvent;
}

export type HostedFieldEventType = keyof HostedFieldsEventTypeMap;

export type InstallmentsConfiguration = {
  currencyCode: string;
  amount: string;
  financingCountryCode?: string;
  billingCountryCode?: string;
};

export type AvailableInstallments = {
  configuration_owner_account: string;
  financing_options: Array<Record<string, unknown>>;
};

export interface Installments {
  /**
   * Defines the installments configuration
   */
  onInstallmentsRequested: () =>
    | Promise<InstallmentsConfiguration>
    | InstallmentsConfiguration;
  /**
   * Handle and use installments options
   */
  onInstallmentsAvailable: (installments: AvailableInstallments) => void;
  /**
   * Handle fetching installments errors
   */
  onInstallmentsError?: (error: Record<string, unknown>) => void;
}

export interface PayPalHostedFieldsComponentOptions {
  createOrder: () => Promise<string>;
  installments?: Installments;
  onError?: (err: Record<string, unknown>) => void;
  styles?: Record<string, unknown>;
  fields?: Record<string, unknown>;
}

export interface HostedFieldsSubmitResponse {
  orderId: string;
  liabilityShift?: string;
  liabilityShifted?: boolean;
  authenticationReason?: string;
  authenticationStatus?: string;
  card: {
    brand: string;
    card_type: string;
    last_digits: string;
    type: string;
  };
}

export interface HostedFieldsHandler {
  /**
   * Add a class to a field. Useful for updating field styles when events occur elsewhere in your checkout.
   */
  addClass: (field: string, className: string) => Promise<void>;
  /**
   * Clear the value of a field.
   */
  clear: (field: string) => Promise<void>;
  /**
   * Programmatically focus a field.
   */
  focus: (field: string) => Promise<void>;
  /**
   * Get supported card types configured in the Braintree Control Panel.
   */
  getCardTypes: () => HostedFieldsCardTypes;
  /**
   * Get the state of all the rendered fields.
   */
  getState: () => HostedFieldsState;
  /**
   * Removes a supported attribute from a field.
   */
  removeAttribute: (options: {
    field: string;
    attribute: string;
  }) => Promise<void>;
  /**
   * Removes a class to a field. Useful for updating field styles when events occur elsewhere in your checkout.
   */
  removeClass: (options: { field: string; className: string }) => Promise<void>;
  /**
   * Sets an attribute of a field. Supported attributes are aria-invalid,
   * aria-required, disabled, and placeholder.
   */
  setAttribute: (options: {
    field: string;
    attribute: string;
    value: string;
  }) => Promise<void>;
  /**
   * Sets a visually hidden message (for screen readers) on a field.
   */
  setMessage: (options: { field: string; attribute: string }) => void;
  /**
   * Sets the month options for the expiration month field when presented as a select element.
   */
  setMonthOptions: (options: unknown) => Promise<void>;
  /**
   * Sets the placeholder from a field.
   */
  setPlaceholder: (field: string, placeholder: string) => Promise<void>;
  /**
   * Submit the form if is valid
   */
  submit: (
    options?: Record<string, unknown>,
  ) => Promise<HostedFieldsSubmitResponse>;
  /**
   * Clean all the fields from the DOM
   */
  teardown: () => Promise<void>;
  /**
   * Tokenize fields and returns a nonce payload.
   */
  tokenize: (options: HostedFieldsTokenize) => Promise<Record<string, unknown>>;

  on<EventType extends HostedFieldEventType>(
    event: EventType,
    handler: (event: HostedFieldsEventTypeMap[EventType]) => void,
  ): void;
  off<EventType extends HostedFieldEventType>(
    event: EventType,
    handler: (event: HostedFieldsEventTypeMap[EventType]) => void,
  ): void;
}

export interface PayPalHostedFieldsComponent {
  isEligible: () => boolean;
  render: (
    options: PayPalHostedFieldsComponentOptions,
  ) => Promise<HostedFieldsHandler>;
}
