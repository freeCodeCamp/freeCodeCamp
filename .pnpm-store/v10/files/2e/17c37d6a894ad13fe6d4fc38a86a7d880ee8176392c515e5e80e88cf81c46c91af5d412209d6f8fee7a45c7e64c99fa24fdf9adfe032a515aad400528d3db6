import { OnErrorData } from ".";
import type { HTMLAttributes, Ref } from "react";
export interface InternalButtonProps {
    type?: "buynow" | "checkout" | "donate" | "pay" | "subscribe";
    disabled?: boolean;
    onError?: (data: OnErrorData) => void;
}
export interface ButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, "onError">, InternalButtonProps {
}
/**
 * Internal interface for the PayLater web component.
 * Includes countryCode and productCode which are populated internally by the React component.
 */
export interface PayLaterButtonProps extends HTMLAttributes<HTMLButtonElement> {
    countryCode?: string;
    productCode?: string;
    disabled?: boolean;
}
export interface PayPalBasicCardButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /**
     * Buyer country as the kebab-case HTML attribute. The element's observed attribute is
     * `buyer-country`; a camelCase `buyerCountry` JSX prop would be lowercased to `buyercountry`
     * on React <19 and never reach it. The SDK normally determines buyer country itself; set
     * this attribute only to override it.
     */
    "buyer-country"?: string;
    disabled?: boolean;
    ref?: Ref<HTMLElement>;
}
export interface PayPalCreditButtonProps extends HTMLAttributes<HTMLButtonElement> {
    countryCode?: string;
    disabled?: boolean;
}
export interface PayPalMessagesElement extends HTMLAttributes<HTMLElement> {
    amount?: string;
    "auto-bootstrap"?: boolean;
    "buyer-country"?: string;
    "currency-code"?: string;
    "logo-position"?: "INLINE" | "LEFT" | "RIGHT" | "TOP";
    "logo-type"?: "MONOGRAM" | "WORDMARK" | "TEXT";
    "offer-types"?: string;
    "presentation-mode"?: "AUTO" | "MODAL" | "POPUP" | "REDIRECT";
    ref?: Ref<PayPalMessagesElement>;
    "text-color"?: "BLACK" | "MONOCHROME" | "WHITE";
    onPaypalMessageClick?: (event: CustomEvent<{
        config: {
            amount?: string;
            buyerCountry?: string;
            clickUrl?: string;
            offerType?: string;
        };
    }>) => void;
    onPaypalMessageAttributeChange?: (event: CustomEvent<{
        changedProperties: string[];
        config: {
            amount?: string;
            buyerCountry?: string;
            currencyCode?: string;
            logoPosition?: string;
            logoType?: string;
            offerTypes?: string;
            textColor?: string;
        };
    }>) => void;
    setContent?: (content: Record<string, unknown>) => void;
}
export interface ApplePayButtonElementProps extends Omit<HTMLAttributes<HTMLElement>, "onError"> {
    buttonstyle?: string;
    type?: string;
    locale?: string;
    disabled?: boolean;
    ref?: Ref<HTMLElement>;
}
export type SDKWebComponents = {
    "paypal-button": ButtonProps;
    "venmo-button": ButtonProps;
    "paypal-pay-later-button": PayLaterButtonProps;
    "paypal-credit-button": PayPalCreditButtonProps;
    "paypal-basic-card-button": PayPalBasicCardButtonProps;
    "paypal-basic-card-container": HTMLAttributes<HTMLElement>;
    "paypal-message": PayPalMessagesElement;
    "apple-pay-button": ApplePayButtonElementProps;
};
