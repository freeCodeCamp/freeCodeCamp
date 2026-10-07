export interface PayPalCardFieldsStyleOptions {
  appearance?: string;
  color?: string;
  direction?: string;
  font?: string;
  border?: string;
  borderRadius?: string;
  boxShadow?: string;
  "font-family"?: string;
  "font-size"?: string;
  "font-size-adjust"?: string;
  "font-stretch"?: string;
  "font-style"?: string;
  "font-variant"?: string;
  "font-variant-alternates"?: string;
  "font-variant-caps"?: string;
  "font-variant-east-asian"?: string;
  "font-variant-ligatures"?: string;
  "font-variant-numeric"?: string;
  "font-weight"?: string;
  "letter-spacing"?: string;
  "line-height"?: string;
  opacity?: string;
  outline?: string;
  padding?: string;
  "padding-bottom"?: string;
  "padding-left"?: string;
  "padding-right"?: string;
  "padding-top"?: string;
  "text-shadow"?: string;
  transition?: string;
  "-moz-appearance"?: string;
  "-moz-osx-font-smoothing"?: string;
  "-moz-tap-highlight-color"?: string;
  "-moz-transition"?: string;
  "-webkit-appearance"?: string;
  "-webkit-osx-font-smoothing"?: string;
  "-webkit-tap-highlight-color"?: string;
  "-webkit-transition"?: string;
}

export type PayPalCardFieldsBillingAddress = {
  addressLine1?: string;
  addressLine2?: string;
  adminArea2?: string;
  adminArea1?: string;
  postalCode?: string;
  countryCode?: string;
};

export type PayPalCardFieldsSubmitOptions = {
  name?: string;
  billingAddress?: PayPalCardFieldsBillingAddress;
};

export type CardFieldsOnApproveData = {
  orderID: string;
  liabilityShift?: string;
};

export interface PayPalCardFieldsInputEvents {
  onChange?: (data: PayPalCardFieldsStateObject) => void;
  onFocus?: (data: PayPalCardFieldsStateObject) => void;
  onBlur?: (data: PayPalCardFieldsStateObject) => void;
  onInputSubmitRequest?: (data: PayPalCardFieldsStateObject) => void;
}

export interface PayPalCardFieldSecurityCode {
  code: string;
  size: number;
}

export interface PayPalCardFieldsCardObject {
  code: PayPalCardFieldSecurityCode;
  niceType:
    | "American Express"
    | "Diners Club"
    | "discover"
    | "JCB"
    | "Maestro"
    | "Mastercard"
    | "UnionPay"
    | "Visa"
    | "Elo"
    | "Hiper"
    | "Hipercard";
  type:
    | "american-express"
    | "diners-club"
    | "discover"
    | "jcb"
    | "maestro"
    | "mastercard"
    | "unionpay"
    | "visa"
    | "elo"
    | "hiper"
    | "hipercard";
}

export type PayPalCardFieldError =
  | "INELIGIBLE_CARD_VENDOR"
  | "INVALID_NAME"
  | "INVALID_NUMBER"
  | "INVALID_EXPIRY"
  | "INVALID_CVV";

export interface PayPalCardFieldCardFieldData {
  isFocused: boolean;
  isEmpty: boolean;
  isValid: boolean;
  isPotentiallyValid: boolean;
}

export interface PayPalCardFieldsStateObject {
  cards: PayPalCardFieldsCardObject[];
  emittedBy?: "name" | "number" | "cvv" | "expiry";
  isFormValid: boolean;
  errors: PayPalCardFieldError[];
  fields: {
    cardCvvField: PayPalCardFieldCardFieldData;
    cardNumberField: PayPalCardFieldCardFieldData;
    cardNameField: PayPalCardFieldCardFieldData;
    cardExpiryField: PayPalCardFieldCardFieldData;
  };
}

export interface PayPalCardFieldsIndividualFieldOptions {
  placeholder?: string;
  inputEvents?: PayPalCardFieldsInputEvents;
  style?: Record<string, PayPalCardFieldsStyleOptions>;
}

export interface PayPalCardFieldsIndividualField {
  render: (container: string | HTMLElement) => Promise<void>;
  addClass: (className: string) => Promise<void>;
  clear: () => void;
  focus: () => void;
  removeAttribute: (
    name: "aria-invalid" | "aria-required" | "disabled" | "placeholder",
  ) => Promise<void>;
  removeClass: (className: string) => Promise<void>;
  setAttribute: (name: string, value: string) => Promise<void>;
  setMessage: (message: string) => void;
  close: () => Promise<void>;
}

export interface PayPalCardFieldsComponentBasics {
  onApprove: (data: CardFieldsOnApproveData) => void;
  onError: (err: Record<string, unknown>) => void;
  onCancel?: () => Promise<void> | void;
  inputEvents?: PayPalCardFieldsInputEvents;
  style?: Record<string, PayPalCardFieldsStyleOptions>;
}

export interface PayPalCardFieldsComponentCreateOrder extends PayPalCardFieldsComponentBasics {
  createOrder: () => Promise<string>;
  createVaultSetupToken?: never;
}

export interface PayPalCardFieldsComponentCreateVaultSetupToken extends PayPalCardFieldsComponentBasics {
  createOrder?: never;
  createVaultSetupToken: () => Promise<string>;
}

export type PayPalCardFieldsComponentOptions =
  | PayPalCardFieldsComponentCreateOrder
  | PayPalCardFieldsComponentCreateVaultSetupToken;

export interface PayPalCardFieldsComponent {
  getState: () => Promise<PayPalCardFieldsStateObject>;
  isEligible: () => boolean;
  submit: (options?: PayPalCardFieldsSubmitOptions) => Promise<void>;
  NameField: (
    options: PayPalCardFieldsIndividualFieldOptions,
  ) => PayPalCardFieldsIndividualField;
  NumberField: (
    options: PayPalCardFieldsIndividualFieldOptions,
  ) => PayPalCardFieldsIndividualField;
  CVVField: (
    options: PayPalCardFieldsIndividualFieldOptions,
  ) => PayPalCardFieldsIndividualField;
  ExpiryField: (
    options: PayPalCardFieldsIndividualFieldOptions,
  ) => PayPalCardFieldsIndividualField;
}
