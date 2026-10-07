import type { BraintreeEligibilityResult, BraintreeFindEligibleMethodsOptions } from "../../types/braintree";
export type UseBraintreeEligibleMethodsProps = BraintreeFindEligibleMethodsOptions;
export interface UseBraintreeEligibleMethodsReturn {
    eligiblePaymentMethods: BraintreeEligibilityResult | null;
    isLoading: boolean;
    error: Error | null;
}
/**
 * Hook for fetching Braintree PayPal eligibility for given checkout options.
 *
 * Calls {@link https://braintree.github.io/braintree-web/current/PayPalCheckoutV6.html#findEligibleMethods | BraintreePayPalCheckoutInstance.findEligibleMethods}
 * on the shared instance from {@link useBraintreePayPal} and stores the result
 * in the `BraintreePayPalProvider` context. The fetch is deduplicated by
 * `(instance, options)` so that mounting this hook in multiple components, or
 * re-mounting it with the same options, will reuse the cached result instead
 * of firing a new request. The hook re-fetches when the options change.
 *
 * `isLoading` is true while the provider's checkout instance is initializing
 * OR while eligibility is being fetched OR while the cached eligibility was
 * fetched with different options than the ones currently requested. It is
 * forced false whenever an error (fetch- or provider-level) is present.
 *
 * @example
 * function Checkout() {
 *   const { eligiblePaymentMethods, isLoading, error } = useBraintreeEligibleMethods({
 *     amount: "10.00",
 *     currency: "USD",
 *     countryCode: "US",
 *     paymentFlow: "ONE_TIME_PAYMENT",
 *   });
 *
 *   if (isLoading) return <Spinner />;
 *   if (error) return <ErrorMessage error={error} />;
 *
 *   return (
 *     <>
 *       {eligiblePaymentMethods?.paypal && <BraintreePayPalOneTimePaymentButton ... />}
 *       {eligiblePaymentMethods?.paylater && <PayPalPayLaterButton ... />}
 *     </>
 *   );
 * }
 */
export declare function useBraintreeEligibleMethods(options: UseBraintreeEligibleMethodsProps): UseBraintreeEligibleMethodsReturn;
