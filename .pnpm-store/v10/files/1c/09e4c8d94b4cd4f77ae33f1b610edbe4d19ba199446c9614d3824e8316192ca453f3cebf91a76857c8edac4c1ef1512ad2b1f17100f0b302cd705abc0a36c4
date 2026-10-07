import { type FetchContentOptions, type MessageContent, type PayPalMessagesOptions, type LearnMoreOptions, type LearnMore } from "../types";
type PayPalMessagesReturn = {
    error: Error | null;
    isReady: boolean;
    handleCreateLearnMore: (options?: LearnMoreOptions) => LearnMore | undefined;
    handleFetchContent: (options: FetchContentOptions) => Promise<MessageContent | void>;
};
/**
 * Hook for creating a PayPal Messages session to fetch messaging content and create learn more modals.
 *
 * This hook manages the lifecycle of a PayPal Messages session. It supports two integration modes:
 *
 * - **Auto-bootstrap**: Pass an empty options object and let `<paypal-message auto-bootstrap>` handle
 *   content fetching automatically. This is the simplest integration path.
 * - **Manual fetch**: Use `handleFetchContent` with an `onReady` callback to programmatically fetch
 *   and apply content via `setContent()`. Use this when you need control over when content is fetched
 *   or want to customize fetch options per render.
 *
 * Use `handleCreateLearnMore` to create a learn more modal that can be opened programmatically.
 *
 * @returns Object with: `error` (any session error), `isReady` (session created), `handleFetchContent` (fetches message content), `handleCreateLearnMore` (creates learn more modal)
 *
 * @example
 * // Auto-bootstrap mode (recommended for basic usage)
 * function PayPalMessaging({ amount }: { amount: string }) {
 *   const { error } = usePayPalMessages({});
 *
 *   if (error) return null;
 *
 *   return (
 *     <paypal-message
 *       auto-bootstrap={true}
 *       amount={amount}
 *       currency-code="USD"
 *       buyer-country="US"
 *     />
 *   );
 * }
 *
 * @example
 * // Manual fetch mode (for advanced control)
 * function ManualMessaging({ amount }: { amount: string }) {
 *   const containerRef = useRef<PayPalMessagesElement | null>(null);
 *   const { handleFetchContent, isReady } = usePayPalMessages({
 *     buyerCountry: 'US',
 *     currencyCode: 'USD',
 *   });
 *
 *   useEffect(() => {
 *     if (!isReady) return;
 *
 *     handleFetchContent({
 *       amount,
 *       logoPosition: 'INLINE',
 *       logoType: 'WORDMARK',
 *       onReady: (content) => {
 *         containerRef.current?.setContent(content);
 *       },
 *     });
 *   }, [amount, isReady, handleFetchContent]);
 *
 *   return <paypal-message ref={containerRef} />;
 * }
 */
export declare function usePayPalMessages({ buyerCountry, currencyCode, shopperSessionId, }: PayPalMessagesOptions): PayPalMessagesReturn;
export {};
