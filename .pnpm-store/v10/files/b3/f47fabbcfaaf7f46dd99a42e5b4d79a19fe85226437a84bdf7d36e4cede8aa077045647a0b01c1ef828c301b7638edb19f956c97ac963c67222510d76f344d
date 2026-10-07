import { BRAINTREE_DISPATCH_ACTION, INSTANCE_LOADING_STATE } from "../types/ProviderEnums";
import type { BraintreePayPalCheckoutInstance } from "../types";
import type { BraintreeEligibilityResult, BraintreeFindEligibleMethodsOptions } from "../types/braintree";
export interface BraintreePayPalState {
    braintreePayPalCheckoutInstance: BraintreePayPalCheckoutInstance | null;
    eligiblePaymentMethods: BraintreeEligibilityResult | null;
    eligiblePaymentMethodsPayload?: BraintreeFindEligibleMethodsOptions | null;
    loadingStatus: INSTANCE_LOADING_STATE;
    error: Error | null;
    isHydrated: boolean;
}
export type BraintreeAction = {
    type: BRAINTREE_DISPATCH_ACTION.SET_LOADING_STATUS;
    value: INSTANCE_LOADING_STATE;
} | {
    type: BRAINTREE_DISPATCH_ACTION.SET_INSTANCE;
    value: BraintreePayPalCheckoutInstance;
} | {
    type: BRAINTREE_DISPATCH_ACTION.SET_ELIGIBILITY;
    value: {
        eligiblePaymentMethods: BraintreeEligibilityResult | null;
        payload?: BraintreeFindEligibleMethodsOptions | null;
    };
} | {
    type: BRAINTREE_DISPATCH_ACTION.SET_ERROR;
    value: Error;
} | {
    type: BRAINTREE_DISPATCH_ACTION.RESET_STATE;
};
export declare const braintreeInitialState: BraintreePayPalState;
export declare function braintreeReducer(state: BraintreePayPalState, action: BraintreeAction): BraintreePayPalState;
export declare const BraintreePayPalContext: import("react").Context<BraintreePayPalState | null>;
