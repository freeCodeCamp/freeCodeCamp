import { PAYPAL_HOSTED_FIELDS_TYPES } from "../../types/enums";
import type { PayPalHostedFieldsNamespace } from "../../types/payPalHostedFieldTypes";
/**
 * Throw an exception if the HostedFields is not found in the paypal namespace
 * Probably cause for this problem is not sending the hosted-fields string
 * as part of the components props in options
 * {@code <PayPalScriptProvider options={{ components: 'hosted-fields'}}>}
 *
 * @param param0 and object containing the components and namespace defined in options
 * @throws {@code Error}
 *
 */
export declare const generateMissingHostedFieldsError: ({ components, [SDK_SETTINGS.DATA_NAMESPACE]: dataNamespace, }: PayPalHostedFieldsNamespace) => string;
/**
 * Validate the hosted field children in the PayPalHostedFieldsProvider component.
 * These are the rules:
 * 1- We need to find 3 default children for number, expiration, cvv
 * 2- No duplicate children are allowed
 * 3- No invalid combinations of `expirationDate`, `expirationMonth`, and `expirationYear`
 *
 * @param childrenList     the list of children
 * @param requiredChildren the list with required children [number, expiration, cvv]
 */
export declare const validateHostedFieldChildren: (registeredFields: PAYPAL_HOSTED_FIELDS_TYPES[]) => void;
