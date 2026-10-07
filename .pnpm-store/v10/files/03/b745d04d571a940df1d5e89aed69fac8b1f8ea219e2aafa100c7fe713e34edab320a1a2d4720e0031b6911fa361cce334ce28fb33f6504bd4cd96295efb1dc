import type { SubmitOptions, OneTimePaymentFlowResponse } from "../types";
export type UsePayPalCardFieldsOneTimePaymentSessionResult = {
    submit: SubmitPayPalCardFieldsOneTimePayment;
    submitResponse: OneTimePaymentFlowResponse | null;
    error: Error | null;
};
type SubmitPayPalCardFieldsOneTimePayment = (orderId: Promise<string> | string, options?: SubmitOptions) => Promise<void>;
/**
 * Hook for managing one-time payment Card Fields sessions.
 *
 * This hook must be used within a {@link PayPalCardFieldsProvider} to initialize
 * a one-time payment session.
 *
 * @returns {UsePayPalCardFieldsOneTimePaymentSessionResult}
 */
export declare function usePayPalCardFieldsOneTimePaymentSession(): UsePayPalCardFieldsOneTimePaymentSessionResult;
export {};
