import type { ScriptContextState, ReactPayPalScriptOptions, ScriptReducerAction } from "../types";
/**
 * Generate a new random identifier for react-paypal-js
 *
 * @returns the {@code string} containing the random library name
 */
export declare function getScriptID(options: ReactPayPalScriptOptions): string;
/**
 * Destroy the PayPal SDK from the document page
 *
 * @param reactPayPalScriptID the script identifier
 */
export declare function destroySDKScript(reactPayPalScriptID?: string): void;
/**
 * Reducer function to handle complex state changes on the context
 *
 * @param state  the current state on the context object
 * @param action the action to be executed on the previous state
 * @returns a the same state if the action wasn't found, or a new state otherwise
 */
export declare function scriptReducer(state: ScriptContextState, action: ScriptReducerAction): ScriptContextState;
export declare const ScriptContext: import("react").Context<ScriptContextState | null>;
