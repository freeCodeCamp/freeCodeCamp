import { INSTANCE_LOADING_STATE, INSTANCE_DISPATCH_ACTION } from "../types/ProviderEnums";
import type { Components, SdkInstance, EligiblePaymentMethodsOutput, FindEligibleMethodsOptions } from "../types";
export interface PayPalState {
    sdkInstance: SdkInstance<readonly [Components, ...Components[]]> | null;
    eligiblePaymentMethods: EligiblePaymentMethodsOutput | null;
    eligiblePaymentMethodsPayload?: FindEligibleMethodsOptions | null;
    loadingStatus: INSTANCE_LOADING_STATE;
    error: Error | null;
    isHydrated: boolean;
    eligibilityHydrationStatus: INSTANCE_LOADING_STATE;
    isEligibilityHydrated: boolean;
}
export type InstanceAction = {
    type: INSTANCE_DISPATCH_ACTION.SET_LOADING_STATUS;
    value: INSTANCE_LOADING_STATE;
} | {
    type: INSTANCE_DISPATCH_ACTION.SET_INSTANCE;
    value: SdkInstance<readonly [Components, ...Components[]]>;
} | {
    type: INSTANCE_DISPATCH_ACTION.SET_ELIGIBILITY;
    value: {
        eligiblePaymentMethods: EligiblePaymentMethodsOutput | null;
        payload?: FindEligibleMethodsOptions | null;
    };
} | {
    type: INSTANCE_DISPATCH_ACTION.SET_ELIGIBILITY_HYDRATION_STATUS;
    value: INSTANCE_LOADING_STATE;
} | {
    type: INSTANCE_DISPATCH_ACTION.SET_ELIGIBILITY_HYDRATED;
    value: {
        eligiblePaymentMethods: EligiblePaymentMethodsOutput | null;
    };
} | {
    type: INSTANCE_DISPATCH_ACTION.SET_ERROR;
    value: Error;
} | {
    type: INSTANCE_DISPATCH_ACTION.RESET_STATE;
};
export declare const initialState: PayPalState;
export declare function instanceReducer(state: PayPalState, action: InstanceAction): PayPalState;
export declare const PayPalContext: import("react").Context<PayPalState | null>;
