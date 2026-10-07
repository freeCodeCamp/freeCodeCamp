import React from "react";
import type { Components, CreateInstanceOptions, FindEligiblePaymentMethodsResponse, LoadCoreSdkScriptOptions } from "../types";
type PayPalProviderPropsBase = Omit<CreateInstanceOptions<readonly [Components, ...Components[]]>, "components" | "clientToken" | "clientId"> & Omit<LoadCoreSdkScriptOptions, "dataSdkIntegrationSource"> & {
    components?: Components[];
    eligibleMethodsResponse?: FindEligiblePaymentMethodsResponse;
    children: React.ReactNode;
};
type PayPalProviderProps = (PayPalProviderPropsBase & {
    clientToken: string | Promise<string> | undefined;
    clientId?: never;
}) | (PayPalProviderPropsBase & {
    clientId: string | Promise<string> | undefined;
    clientToken?: never;
});
/**
 * {@link PayPalProvider} creates the SDK script, component scripts, runs eligibility, then
 * provides these in context to child components via the {@link usePayPal} hook.
 *
 * SDK loading is automatically deferred until clientToken or clientId is available.
 * Both can be either a string, Promise, or undefined.
 *
 * **Important:** When passing a Promise, you must ensure referential stability across renders.
 * An unstable Promise reference (e.g., calling `fetchClientToken()` or `fetchClientId()` inline)
 * will cause the SDK to re-initialize on every render. Wrap the promise in `useMemo` or store it in state.
 *
 * **The `environment` prop is required.** `clientId` does not select the environment in v6 — a
 * live `clientId` will still load the sandbox SDK if `environment="sandbox"`. Pass
 * `environment="production"` or `environment="sandbox"` explicitly.
 *
 * @example
 * // With string clientToken
 * <PayPalProvider
 *   clientToken={token}
 *   environment="sandbox"
 *   components={["paypal-payments", "venmo-payments"]}
 *   pageType="checkout"
 * >
 *   <PayPalOneTimePaymentButton />
 * </PayPalProvider>
 *
 * @example
 * // With string clientId
 * <PayPalProvider
 *   clientId="YOUR_CLIENT_ID"
 *   environment="sandbox"
 *   components={["paypal-payments"]}
 *   pageType="checkout"
 * >
 *   <PayPalOneTimePaymentButton />
 * </PayPalProvider>
 *
 * @example
 * // With Promise clientToken (memoize to prevent re-fetching)
 * const tokenPromise = useMemo(() => fetchClientToken(), []);
 *
 * <PayPalProvider
 *   clientToken={tokenPromise}
 *   environment="sandbox"
 *   pageType="checkout"
 * >
 *   <PayPalOneTimePaymentButton />
 * </PayPalProvider>
 *
 * @example
 * // With Promise clientId
 * const clientIdPromise = useMemo(() => fetchClientId(), []);
 *
 * <PayPalProvider
 *   clientId={clientIdPromise}
 *   environment="sandbox"
 *   pageType="checkout"
 * >
 *   <PayPalOneTimePaymentButton />
 * </PayPalProvider>
 *
 * @example
 * // With deferred loading (clientToken)
 * const [clientToken, setClientToken] = useState<string>();
 *
 * useEffect(() => {
 *   fetchClientToken().then(setClientToken);
 * }, []);
 *
 * <PayPalProvider
 *   clientToken={clientToken}
 *   environment="sandbox"
 *   pageType="checkout"
 * >
 *   <PayPalOneTimePaymentButton />
 * </PayPalProvider>
 *
 * @example
 * // With deferred loading (clientId)
 * const [clientId, setClientId] = useState<string>();
 *
 * useEffect(() => {
 *   fetchClientId().then(setClientId);
 * }, []);
 *
 * <PayPalProvider
 *   clientId={clientId}
 *   environment="sandbox"
 *   pageType="checkout"
 * >
 *   <PayPalOneTimePaymentButton />
 * </PayPalProvider>
 *
 * @example
 * // Show custom loader while SDK initializes
 * function MyCheckout() {
 *   const { loadingStatus } = usePayPal();
 *   const isPending = loadingStatus === INSTANCE_LOADING_STATE.PENDING;
 *
 *   if (isPending) {
 *     return <div>Loading PayPal SDK...</div>;
 *   }
 *
 *   return <PayPalOneTimePaymentButton orderId="ORDER-123" />;
 * }
 *
 * <PayPalProvider clientToken={token} environment="sandbox" pageType="checkout">
 *   <MyCheckout />
 * </PayPalProvider>
 */
export declare const PayPalProvider: React.FC<PayPalProviderProps>;
export {};
