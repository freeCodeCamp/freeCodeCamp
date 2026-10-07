import type { BraintreeMessagesOptions, BraintreeMessageContent, BraintreeFetchMessageContentOptions } from "../../types/braintree";
export type UseBraintreePayPalMessagesProps = BraintreeMessagesOptions;
export interface UseBraintreePayPalMessagesReturn {
    error: Error | null;
    isReady: boolean;
    isLoading: boolean;
    handleFetchContent: (options?: BraintreeFetchMessageContentOptions) => Promise<BraintreeMessageContent | void>;
}
/**
 * Hook for creating a Braintree PayPal Messages instance to fetch promotional /
 * BNPL messaging content for `<paypal-message>` elements.
 *
 * Wraps {@link https://braintree.github.io/braintree-web/current/PayPalCheckoutV6.html#createMessages | BraintreePayPalCheckoutInstance.createMessages}
 * on the shared instance from {@link useBraintreePayPal}. Unlike the PayPal SDK's
 * synchronous `createPayPalMessages`, Braintree's `createMessages` is asynchronous,
 * so the instance is created in an effect that awaits the Promise and guards against
 * unmount / instance change before storing it.
 *
 * Use `handleFetchContent` to fetch content for a `<paypal-message>` element. It
 * resolves to the content object, which exposes `update({ amount })` so you can
 * change the displayed amount later without re-fetching.
 *
 * @returns Object with: `error` (any instance/fetch error), `isReady` (messages
 * instance created), `isLoading` (instance initializing or being created),
 * `handleFetchContent` (fetches message content)
 *
 * @example
 * function PayPalMessaging({ amount }: { amount: string }) {
 *   const messageRef = useRef<PayPalMessagesElement | null>(null);
 *   const { handleFetchContent, isReady } = useBraintreePayPalMessages({
 *     buyerCountry: "US",
 *     currencyCode: "USD",
 *   });
 *
 *   useEffect(() => {
 *     if (!isReady) return;
 *
 *     handleFetchContent({
 *       amount,
 *       onReady: (content) => {
 *         messageRef.current?.setContent(content);
 *       },
 *     });
 *   }, [amount, isReady, handleFetchContent]);
 *
 *   return <paypal-message ref={messageRef} />;
 * }
 */
export declare function useBraintreePayPalMessages({ buyerCountry, currencyCode, }: UseBraintreePayPalMessagesProps): UseBraintreePayPalMessagesReturn;
