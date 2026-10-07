import { BraintreePayPalCheckout } from "./braintree/paypalCheckout";
import { DISPATCH_ACTION, SCRIPT_LOADING_STATE } from "./enums";
import type { ReactNode, Dispatch } from "react";
import type { PayPalScriptOptions } from "@paypal/paypal-js";
export interface ReactPayPalScriptOptions extends PayPalScriptOptions {
    [key: string]: any;
}
export type ScriptReducerAction = {
    type: DISPATCH_ACTION.LOADING_STATUS;
    value: SCRIPT_LOADING_STATE;
} | {
    type: DISPATCH_ACTION.LOADING_STATUS;
    value: {
        state: SCRIPT_LOADING_STATE;
        message: string;
    };
} | {
    type: DISPATCH_ACTION.RESET_OPTIONS;
    value: ReactPayPalScriptOptions;
} | {
    type: DISPATCH_ACTION.SET_BRAINTREE_INSTANCE;
    value: BraintreePayPalCheckout;
};
export type InitialState = {
    options: ReactPayPalScriptOptions;
    loadingStatus: SCRIPT_LOADING_STATE.INITIAL | SCRIPT_LOADING_STATE.PENDING;
};
export interface ScriptContextState {
    options: ReactPayPalScriptOptions;
    loadingStatus: SCRIPT_LOADING_STATE;
    loadingStatusErrorMessage?: string;
    braintreePayPalCheckoutInstance?: BraintreePayPalCheckout;
    dispatch?: Dispatch<ScriptReducerAction>;
}
export interface ScriptContextDerivedState extends Pick<ScriptContextState, "options"> {
    isInitial: boolean;
    isPending: boolean;
    isRejected: boolean;
    isResolved: boolean;
}
export interface ScriptProviderProps {
    options: ReactPayPalScriptOptions;
    children?: ReactNode;
    deferLoading?: boolean;
}
