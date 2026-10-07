import type { CSSProperties, ReactNode } from "react";
import type { HostedFieldsHandler, Installments } from "@paypal/paypal-js";
export type PayPalHostedFieldsNamespace = {
    components: string | string[] | undefined;
} & {
    [DATA_NAMESPACE: string]: string | undefined;
};
export type PayPalHostedFieldsRegistered = {
    [key: string]: PayPalHostedFieldOptions;
};
export type PayPalHostedFieldOptions = {
    selector: string;
    placeholder?: string;
    type?: string;
    formatInput?: boolean;
    maskInput?: boolean | {
        character: string;
    };
    select?: boolean | {
        options: (string | number)[];
    };
    maxlength?: number;
    minlength?: number;
    prefill?: string;
    rejectUnsupportedCards?: boolean;
};
export interface PayPalHostedFieldProps {
    /**
     * Represent the hosted field type
     */
    hostedFieldType: string;
    /**
     * Options to modify the hosted field input. You can set a placeholder text,
     * a prefill value or set the maximum length of a field.
     */
    options: PayPalHostedFieldOptions;
    /**
     * Defines a unique identifier (ID) which must be unique in the whole document
     */
    id?: string;
    /**
     * A space-separated list of the classes of the element
     */
    className?: string;
    /**
     * Helps define the language of an element: the language that non-editable elements are in,
     * or the language that editable elements should be written in by the user
     */
    lang?: string;
    /**
     * Contains a text representing advisory information related to the element it belongs to
     */
    title?: string;
    /**
     * Contains CSS styling declarations to be applied to the element
     */
    style?: CSSProperties;
}
export interface PayPalHostedFieldsBillingAddressProps {
    show: boolean;
    firstName?: {
        show: boolean;
        label: string;
        placeholder: string;
    };
    lastName?: {
        show: boolean;
        label: string;
        placeholder: string;
    };
    company?: {
        show: boolean;
        label: string;
        placeholder: string;
    };
    streetAddress?: {
        show: boolean;
        label: string;
        placeholder: string;
    };
    extendedAddress?: {
        show: boolean;
        label: string;
        placeholder: string;
    };
    locality?: {
        show: boolean;
        label: string;
        placeholder: string;
    };
    region?: {
        show: boolean;
        label: string;
        placeholder: string;
    };
    countryName?: {
        show: boolean;
        label: string;
        placeholder: string;
    };
    countryCodeAlpha2?: {
        show: boolean;
        label: string;
        placeholder: string;
    };
    countryCodeAlpha3?: {
        show: boolean;
        label: string;
        placeholder: string;
    };
    countryCodeNumeric?: {
        show: boolean;
        label: string;
        placeholder: string;
    };
    postalCode?: {
        show: boolean;
        label: string;
        placeholder: string;
    };
}
export interface PayPalHostedFieldsBillingAddress {
    firstName?: string;
    lastName?: string;
    company?: string;
    streetAddress?: string;
    extendedAddress?: string;
    locality?: string;
    region?: string;
    countryName?: string;
    countryCodeAlpha2?: string;
    countryCodeAlpha3?: string;
    countryCodeNumeric?: string;
    postalCode?: string;
}
export interface PayPalHostedFieldsComponentProps {
    /**
     * Function to manually create the transaction from your server
     */
    createOrder: () => Promise<string>;
    installments?: Installments;
    children: ReactNode;
    /**
     * [Styling options](https://developer.paypal.com/braintree/docs/guides/hosted-fields/styling/javascript/v3) for customizing the fields appearance
     *
     * ```
     *   {
     *     ".number": {
     *       "fontFamily": "monospace"
     *     },
     *     ".valid": {
     *       "color": "green"
     *     }
     *   }
     * ```
     */
    styles?: Record<string, unknown>;
    /**
     * Useful to render a custom error component in the case the client is ineligible
     */
    notEligibleError?: ReactNode;
}
export type PayPalHostedFieldContext = {
    cardFields?: HostedFieldsHandler;
    registerHostedField?: (component: PayPalHostedFieldsRegistered) => void;
};
