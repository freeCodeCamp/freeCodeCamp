import { type EligiblePaymentMethodsOutput, type FindEligibleMethodsOptions } from "../types";
export interface UseEligibleMethodsOptions {
    payload?: FindEligibleMethodsOptions;
}
export interface UseEligibleMethodsResult {
    eligiblePaymentMethods: EligiblePaymentMethodsOutput | null;
    isLoading: boolean;
    error: Error | null;
}
/** @deprecated Renamed to `UseEligibleMethodsOptions`. */
export type UseFetchEligibleMethodsOptions = UseEligibleMethodsOptions;
/** @deprecated Renamed to `UseEligibleMethodsResult`. */
export type UseFetchEligibleMethodsResult = UseEligibleMethodsResult;
/**
 * Client-side hook to access eligible payment methods from the PayPal context.
 *
 * This hook handles both server-hydrated and client-fetch scenarios:
 * - If eligibility was pre-fetched server-side, returns it immediately
 * - If not present, fetches via the SDK and stores in context
 * - Prevents duplicate API calls across components
 *
 * @param options - Configuration for the eligibility request
 * @param options.payload - Optional request payload with customer/purchase details
 * @returns Object containing eligibility state
 * @returns eligiblePaymentMethods - The eligible payment methods
 * @returns isLoading - True while fetching eligibility
 * @returns error - Any error that occurred during the fetch
 *
 * @example
 * function Checkout({props}) {
 *     const { handleClick } = usePayLaterOneTimePaymentSession(props);
 *     const { eligiblePaymentMethods, isLoading, error } = useEligibleMethods({
 *         payload: { purchase_units: [{ amount: { currency_code: "USD" } }] }
 *     });
 *
 *     const payLaterDetails = eligiblePaymentMethods?.getDetails?.("paylater");
 *     const countryCode = payLaterDetails?.countryCode;
 *     const productCode = payLaterDetails?.productCode;
 *
 *     if (isLoading) return <Spinner />;
 *     if (error) return <Error message={error.message} />;
 *     return (
 *       <paypal-pay-later-button
 *          onClick={handleClick}
 *          countryCode={countryCode}
 *          productCode={productCode}
 *       />
 *      );
 * }
 */
export declare function useEligibleMethods(options?: UseEligibleMethodsOptions): UseEligibleMethodsResult;
