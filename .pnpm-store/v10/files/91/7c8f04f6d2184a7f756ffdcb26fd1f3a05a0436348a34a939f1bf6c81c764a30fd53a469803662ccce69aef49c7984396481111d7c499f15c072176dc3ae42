import type { SavePaymentFlowResponse, SubmitOptions } from "../types";
export type UsePayPalCardFieldsSavePaymentSessionResult = {
    submit: SubmitPayPalCardFieldsSavePayment;
    submitResponse: SavePaymentFlowResponse | null;
    error: Error | null;
};
type SubmitPayPalCardFieldsSavePayment = (vaultSetupToken: Promise<string> | string, options?: SubmitOptions) => Promise<void>;
/**
 * Hook for managing save payment Card Fields sessions.
 *
 * This hook must be used within a {@link PayPalCardFieldsProvider} to initialize
 * a save payment session.
 *
 * @returns {UsePayPalCardFieldsSavePaymentSessionResult}
 */
export declare function usePayPalCardFieldsSavePaymentSession(): UsePayPalCardFieldsSavePaymentSessionResult;
export {};
