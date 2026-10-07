import type { ScriptContextState } from "../types";
/**
 * Check if the context is valid and ready to dispatch actions.
 *
 * @param scriptContext the result of connecting to the context provider
 * @returns strict context avoiding null values in the type
 */
export declare function validateReducer(scriptContext: ScriptContextState | null): ScriptContextState;
/**
 * Check if the dataClientToken or the dataUserIdToken are
 * set in the options of the context.
 * @type dataClientToken is use to pass a client token
 * @type dataUserIdToken is use to pass a client tokenization key
 *
 * @param scriptContext the result of connecting to the context provider
 * @throws an {@link Error} if both dataClientToken and the dataUserIdToken keys are null or undefined
 * @returns strict context if one of the keys are defined
 */
export declare const validateBraintreeAuthorizationData: (scriptContext: ScriptContextState | null) => ScriptContextState;
