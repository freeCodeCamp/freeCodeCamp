export type BraintreeCallback<T = unknown> = (err?: BraintreeError, data?: T) => void;
export interface BraintreeError {
    /**
     * @description A code that corresponds to specific errors.
     */
    code: string;
    /**
     * @description A short description of the error.
     */
    message: string;
    /**
     * @description The type of error.
     */
    type: "CUSTOMER" | "MERCHANT" | "NETWORK" | "INTERNAL" | "UNKNOWN";
    /**
     * @description Additional information about the error, such as an underlying network error response.
     */
    details: unknown;
}
export interface BraintreeClientAnalyticsMetadata {
    sessionId: string;
    sdkVersion: string;
    merchantAppId: string;
}
export interface BraintreeCurrencyAmount {
    /**
     * The three-character ISO-4217 currency code. PayPal does not support all currencies.
     */
    currency: string;
    /**
     * The amount the shipping option will cost. Includes the specified number of digits after
     * decimal separator for the ISO-4217 currency code.
     */
    value: string;
}
export interface BraintreeAddress {
    /**
     * Street number and name.
     */
    line1: string;
    /**
     * Extended address.
     */
    line2?: string | undefined;
    /**
     * City or locality.
     */
    city: string;
    /**
     * State or region.
     */
    state: string;
    /**
     * Postal code.
     */
    postalCode: string;
    /**
     * 2 character country code (e.g. US).
     */
    countryCode: string;
    /**
     * Phone number.
     */
    phone?: string | undefined;
    /**
     * Recipient of postage.
     */
    recipientName?: string | undefined;
}
export interface BraintreeLineItem {
    /**
     * Number of units of the item purchased. This value must be a whole number and can't be negative or zero.
     */
    quantity: string;
    /**
     * Per-unit price of the item. Can include up to 2 decimal places. This value can't be negative or zero.
     */
    unitAmount: string;
    /**
     * Item name. Maximum 127 characters.
     */
    name: string;
    /**
     * Indicates whether the line item is a debit (sale) or credit (refund) to the customer. Accepted values: `debit` and `credit`.
     */
    kind: "debit" | "credit";
    /**
     * Per-unit tax price of the item. Can include up to 2 decimal places. This value can't be negative or zero.
     */
    unitTaxAmount: string | undefined;
    /**
     * Item description. Maximum 127 characters.
     */
    description: string | undefined;
    /**
     * Product or UPC code for the item. Maximum 127 characters.
     */
    productCode: string | undefined;
    /**
     * The URL to product information.
     */
    url: string | undefined;
}
export interface BraintreeCreditFinancingOptions {
    /**
     * This is the estimated total payment amount including interest and fees the user will pay during the lifetime of the loan.
     */
    totalCost: BraintreeCurrencyAmount;
    /**
     * Length of financing terms in months.
     */
    term: number;
    /**
     * This is the estimated amount per month that the customer will need to pay including fees and interest.
     */
    monthlyPayment: BraintreeCurrencyAmount;
    /**
     * Estimated interest or fees amount the payer will have to pay during the lifetime of the loan.
     */
    totalInterest: BraintreeCurrencyAmount;
    /**
     * Status of whether the customer ultimately was approved for and chose to make the payment using the approved installment credit.
     */
    payerAcceptance: boolean;
    /**
     * Indicates whether the cart amount is editable after payer's acceptance on PayPal side.
     */
    cartAmountImmutable: boolean;
}
export interface BraintreeAuthorizationResponseDetails {
    email: string;
    payerId: string;
    firstName: string;
    lastName: string;
    countryCode?: string | undefined;
    phone?: string | undefined;
    /**
     * User's shipping address details, only available if shipping address is enabled.
     */
    shippingAddress?: BraintreeAddress | undefined;
    /**
     * User's billing address details.
     */
    billingAddress?: BraintreeAddress | undefined;
    /**
     * This property will only be present when the customer pays with PayPal Credit.
     */
    creditFinancingOffered?: BraintreeCreditFinancingOptions | undefined;
}
export interface BraintreeTokenizePayload {
    /**
     * The payment method nonce.
     */
    nonce: string;
    /**
     * The payment method type, always `PayPalAccount`.
     */
    type: string;
    /**
     * Additional PayPal account details.
     */
    details: BraintreeAuthorizationResponseDetails;
}
