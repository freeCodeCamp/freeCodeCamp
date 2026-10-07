import React from "react";
import type { BraintreeV6Namespace } from "../../types";
interface BraintreePayPalProviderProps {
    namespace: BraintreeV6Namespace;
    braintreeClientToken: string | undefined;
    children: React.ReactNode;
}
/**
 * {@link BraintreePayPalProvider} validates the Braintree namespace, creates a Braintree client
 * and PayPal Checkout V6 instance, loads the PayPal SDK, then provides the checkout instance
 * in context to child components via the `useBraintreePayPal` hook.
 *
 * The merchant is responsible for loading the Braintree client and paypal-checkout-v6 scripts
 * before rendering this provider.
 *
 * **Important:** The `namespace` prop must have referential stability across renders.
 * An unstable reference (e.g., creating the object inline) will cause re-initialization
 * on every render. Use a module-level constant, `useRef`, or `useMemo`.
 *
 * @example
 * // Merchant loads scripts in their HTML:
 * // <script src="https://www.paypalobjects.com/braintree/web/3.139.0/js/client.min.js"></script>
 * // <script src="https://js.braintreegateway.com/web/3.139.0/js/paypal-checkout-v6.min.js"></script>
 *
 * function App() {
 *   const [clientToken, setClientToken] = useState<string | undefined>(undefined);
 *
 *   useEffect(() => {
 *     fetch("/auth/browser-safe-client-token")
 *       .then((res) => res.json())
 *       .then(({ clientToken }) => setClientToken(clientToken));
 *   }, []);
 *
 *   if (!clientToken) return <div>Loading...</div>;
 *
 *   return (
 *     <BraintreePayPalProvider
 *       namespace={window.braintree}
 *       braintreeClientToken={clientToken}
 *     >
 *       <CheckoutButtons />
 *     </BraintreePayPalProvider>
 *   );
 * }
 *
 * @example
 * // Inside a child component, use prebuilt buttons or custom hooks:
 * function CheckoutButtons() {
 *   const { braintreePayPalCheckoutInstance, loadingStatus } = useBraintreePayPal();
 *
 *   const handleOnApprove = async (data) => {
 *     const { nonce } = await braintreePayPalCheckoutInstance.tokenizePayment({
 *       orderID: data.orderId,
 *       payerID: data.payerId,
 *     });
 *     // Send nonce to your server to complete the transaction
 *   };
 *
 *   return (
 *     <BraintreePayPalOneTimePaymentButton
 *       amount="100"
 *       currency="USD"
 *       onApprove={handleOnApprove}
 *     />
 *   );
 * }
 */
export declare const BraintreePayPalProvider: React.FC<BraintreePayPalProviderProps>;
export {};
