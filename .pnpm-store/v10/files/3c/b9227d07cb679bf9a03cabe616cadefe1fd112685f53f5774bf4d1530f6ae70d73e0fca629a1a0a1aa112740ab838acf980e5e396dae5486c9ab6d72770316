import type { PayPalNamespace } from "@paypal/paypal-js";
import type { BraintreeNamespace } from "./types";
type ErrorMessageParams = {
    reactComponentName: string;
    sdkComponentKey: string;
    sdkRequestedComponents?: string | string[];
    sdkDataNamespace?: string;
};
/**
 * Get the namespace from the window in the browser
 * this is useful to get the paypal object from window
 * after load PayPal SDK script
 *
 * @param namespace the name space to return
 * @returns the namespace if exists or undefined otherwise
 */
export declare function getPayPalWindowNamespace(namespace?: string): PayPalNamespace;
/**
 * Get a namespace from the window in the browser
 * this is useful to get the braintree from window
 * after load Braintree script
 *
 * @param namespace the name space to return
 * @returns the namespace if exists or undefined otherwise
 */
export declare function getBraintreeWindowNamespace(namespace?: string): BraintreeNamespace;
/**
 * Creates a string hash code based on the string argument
 *
 * @param str the source input string to hash
 * @returns string hash code
 */
export declare function hashStr(str: string): string;
export declare function generateErrorMessage({ reactComponentName, sdkComponentKey, sdkRequestedComponents, sdkDataNamespace, }: ErrorMessageParams): string;
export {};
