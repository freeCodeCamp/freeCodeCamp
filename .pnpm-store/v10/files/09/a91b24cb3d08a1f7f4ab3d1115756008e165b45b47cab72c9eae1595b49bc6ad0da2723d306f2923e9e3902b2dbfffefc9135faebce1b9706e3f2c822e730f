export type ValidCssSelector =
  | ".invalid"
  | ".invalid.focus"
  | "input"
  | "input.disabled"
  | "input.focus"
  | "input.invalid"
  | "input.valid"
  | "input::placeholder"
  | "label"
  | "label.disabled"
  | "label.focus"
  | "label.invalid"
  | "label.valid"
  | "label::placeholder";

export type ValidCssProperties =
  | "appearance"
  | "background"
  | "border"
  | "borderRadius"
  | "boxShadow"
  | "color"
  | "direction"
  | "font"
  | "fontFamily"
  | "fontSize"
  | "fontSizeAdjust"
  | "fontStretch"
  | "fontStyle"
  | "fontVariant"
  | "fontVariantAlternates"
  | "fontVariantCaps"
  | "fontVariantEastAsian"
  | "fontVariantLigatures"
  | "fontVariantNumeric"
  | "fontWeight"
  | "height"
  | "letterSpacing"
  | "lineHeight"
  | "opacity"
  | "outline"
  | "padding"
  | "paddingBottom"
  | "paddingLeft"
  | "paddingRight"
  | "paddingTop"
  | "textShadow"
  | "transition";

export type MerchantStyleObject = Partial<{
  [key in ValidCssSelector]: Partial<{
    [key in ValidCssProperties]: string | number;
  }>;
}>;

export type FieldState = {
  isFocused: boolean;
  isValid: boolean;
  isEmpty: boolean;
  isPotentiallyValid: boolean;
};

export type CardFieldTypes = "cvv" | "expiry" | "number";

export type MerchantMessagingEvents =
  | "blur"
  | "cardtypechange"
  | "change"
  | "empty"
  | "focus"
  | "inputsubmit"
  | "notempty"
  | "validitychange";

export type Card = {
  code: {
    name: string;
    size: number;
  };
  niceType: string;
  type: string;
};

export type EventState = {
  cards: Card[];
  emittedBy: CardFieldTypes;
  number: FieldState;
  cvv: FieldState;
  expiry: FieldState;
};

export type EventPayload = {
  data: EventState;
  sender: CardFieldTypes;
};

export type CardFieldsEventsOptions = {
  [key in MerchantMessagingEvents]: (eventPayload: EventPayload) => void;
};

export type OrderAmount = {
  value?: string;
  currencyCode?: string;
};

export type UpdateOptions = {
  amount?: OrderAmount;
  isCobrandedEligible?: boolean;
};

export type BillingAddress = {
  addressLine1?: string;
  addressLine2?: string;
  adminArea2?: string;
  adminArea1?: string;
  postalCode?: string;
  countryCode?: string;
};

export type SubmitOptions = {
  name?: string;
  billingAddress?: BillingAddress;
};

export type CardFieldOptions = {
  type: CardFieldTypes;
  placeholder?: string;
  label?: string;
  style?: MerchantStyleObject;
  ariaDescription?: string;
  ariaLabel?: string;
  ariaInvalidErrorMessage?: string;
};

export type StateType = "canceled" | "failed" | "succeeded";

export type CardFieldComponent = HTMLElement & {
  /**
     * Use this method to destroy the Card Field component and clean up any associated resources. After calling this method, the Card Field component will no longer be usable.
     * 
     * @example
     * ```typescript
     * const numberField = cardFieldsInstance.createCardFieldsComponent({
            type: "number",
            placeholder: "Enter a number",
        });
        document
            .querySelector("#paypal-card-fields-number-container")
            .appendChild(numberField);
            
        // Later, when you want to clean up:
        numberField.destroy();
    * ```
    */
  destroy(): void;
};

type BaseCardFieldsSession = {
  /**
     * Use this method to create and configure individual Card Field components.
     * 
     * @param config - Configuration options for creating individual Card Field components and customizing different base aspects such as type, placeholder, styling, and accessibility attributes.
     * @returns An instance of the created Card Field component that can be appended to the DOM
     * 
     * @example
     * ```typescript
     * const numberField = cardFieldsInstance.createCardFieldsComponent({
          type: "number",
          placeholder: "Enter a number",
        });
        document
          .querySelector("#paypal-card-fields-number-container")
          .appendChild(numberField);
     * ```
     */
  createCardFieldsComponent: (config: CardFieldOptions) => CardFieldComponent;
  /**
     * Use this method to register event listeners and set callbacks for them.
     * 
     * @param eventName - Name of the event to listen for.
     * @param callback - Callback function to be executed when the event is triggered.
     * 
     * @example
     * ```typescript
     * cardFieldsInstance.on("focus", (eventPayload) => {
          console.log("Focus event triggered: ", eventPayload);
        });
     * ```
     */
  on: (
    eventName: MerchantMessagingEvents,
    callback: CardFieldsEventsOptions[MerchantMessagingEvents],
  ) => Promise<void>;
  /**
     * Use this method to update the Card Fields session with new options.
     * @param options - Configuration object to update the Card Fields session with new options.
     * 
     * @example
     * ```typescript
     * cardFieldsInstance.update({
            amount: {
              currencyCode: "EUR",
              value: "100.00",
            },
            isCobrandedEligible: true,
        });
     * ```
     */
  update: (options: UpdateOptions) => void;
  /**
   * Use this method to destroy the Card Fields session instance and clean up any associated resources. After calling this method, the Card Fields session instance will no longer be usable.
   *
   * @example
   * ```typescript
   * cardFieldsInstance.destroy();
   * ```
   */
  destroy: () => void;
};

export type OneTimePaymentFlowResponse = {
  data: {
    orderId: string;
    message?: string;
    liabilityShift?: string;
  };
  state: StateType;
};

export type OneTimePaymentSubmitOptions = [
  orderId: string,
  options?: SubmitOptions,
];

export type CardFieldsOneTimePaymentSession = BaseCardFieldsSession & {
  /**
     * Use this method to submit a one-time payment using Card Fields.
     * 
     * @param orderId - The unique identifier for the order to be processed.
     * @param options - Additional payment options.
     * @returns A promise that resolves to the result of the payment flow.
     * 
     * @example
     * ```typescript
     * const response = await cardFieldsInstance.submit("your-order-id", {
            billingAddress: {
              postalCode: "12345",
              countryCode: "US",
            },
          });
     * ```
     */
  submit: (
    ...args: OneTimePaymentSubmitOptions
  ) => Promise<OneTimePaymentFlowResponse>;
};

export type SavePaymentFlowResponse = {
  data: {
    vaultSetupToken: string;
    message?: string;
    liabilityShift?: string;
  };
  state: StateType;
};

export type SavePaymentSubmitOptions = [
  vaultSetupToken: string,
  options?: SubmitOptions,
];

export type CardFieldsSavePaymentSession = BaseCardFieldsSession & {
  /**
     * Use this method to submit and save a payment method using Card Fields.
     * 
     * @param vaultSetupToken - The unique token for the vault setup to be processed.
     * @param options - Additional payment options.
     * @returns A promise that resolves to the result of the save payment flow.
     * 
     * @example
     * ```typescript
     * const response = await cardFieldsInstance.submit("your-vault-setup-token", {
            billingAddress: {
              postalCode: "12345",
              countryCode: "US",
            },
          });
     * ```
     */
  submit: (
    ...args: SavePaymentSubmitOptions
  ) => Promise<SavePaymentFlowResponse>;
};

/**
 * CardFieldsInstance interface for creating and managing different types of Card Fields sessions.
 *
 * @remarks
 * This interface provides methods to create the following Card Fields flows:
 * - One-time payments with Card Fields
 * - Save payment methods for future use (vaulting)
 *
 * Each method returns a session object that can be used to initiate the corresponding Card Fields flow.
 */
export interface CardFieldsInstance {
  /**
   * Creates a Card Fields one-time payment session for processing payments.
   *
   * @returns A session object that can be used to start the payment flow
   *
   * @example
   * ```typescript
   * const cardFieldsInstance = sdkInstance.createCardFieldsOneTimePaymentSession();
   * ```
   */
  createCardFieldsOneTimePaymentSession: () => CardFieldsOneTimePaymentSession;
  /**
   * Creates a Card Fields save payment session for storing payment methods for future use.
   *
   * @returns A session object that can be used to start the vault setup flow
   *
   * @example
   * ```typescript
   * const cardFieldsInstance = sdkInstance.createCardFieldsSavePaymentSession();
   * ```
   */
  createCardFieldsSavePaymentSession: () => CardFieldsSavePaymentSession;
}
